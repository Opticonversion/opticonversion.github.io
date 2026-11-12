// =====================================================================
// ATELIER DES TRACÉS · le jeu (affichage et gestes de l'élève)
// ---------------------------------------------------------------------
// Les niveaux sont dans traces-U42.js, traces-U43.js, traces-U5.js (TRACES).
// Ils décrivent seulement le montage et les gestes : optique.js calcule
// toujours la bonne réponse (relation de conjugaison, lentille après lentille).
// Format : notes/coordination/etape2-formats.md (partie a).
// Six gestes : rayon (choisir un trajet), placer (faire glisser un point),
// designer (toucher la pupille ou la lucarne), relier (deux bords → limite
// d'un champ), faisceau (choisir un faisceau), calcul (taper une valeur).
// Conventions du BTS : lumière de gauche à droite, mesures algébriques.
// Progression : localStorage « traces » = { "U42-1": étoiles (1 à 3), ... }
// =====================================================================

(function () {
  const W = 480, H = 300;                       // taille du dessin (viewBox)
  const SVG_NS = "http://www.w3.org/2000/svg";
  const ATELIERS = [
    { code: "U42", nom: "OGP" },
    { code: "U43", nom: "ETSO" },
    { code: "U5", nom: "Vision" }
  ];
  const NIVEAUX = typeof TRACES !== "undefined" ? TRACES.filter(N => N && N.id && N.epreuve) : [];
  const $ = id => document.getElementById(id);
  const svg = $("trace");
  const bas = ["₀", "₁", "₂", "₃", "₄"];

  // ---------------- Progression (gardée dans le navigateur) ----------------
  const lireEtoiles = () => { try { return JSON.parse(localStorage.getItem("traces") || "{}") || {}; } catch (e) { return {}; } };
  function noterEtoiles(id, etoiles) {
    const t = lireEtoiles();
    if (!t[id] || etoiles > t[id]) t[id] = etoiles;
    try { localStorage.setItem("traces", JSON.stringify(t)); } catch (e) {}
  }
  const niveauxDe = code => NIVEAUX.filter(N => N.epreuve === code);
  // Dans un chapitre, un niveau s'ouvre quand le précédent du même chapitre est réussi
  function debloque(N) {
    const memes = niveauxDe(N.epreuve).filter(x => (x.chapitre || "") === (N.chapitre || ""));
    const i = memes.indexOf(N);
    return i <= 0 || !!lireEtoiles()[memes[i - 1].id];
  }

  // ---------------- Petits outils ----------------
  function el(tag, attrs, parent) {
    const e = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    (parent || svg).appendChild(e);
    return e;
  }
  function texte(x, y, contenu, classe, parent) {
    const t = el("text", { x, y, class: "t-label " + (classe || "") }, parent);
    t.textContent = contenu;
    return t;
  }
  const nb = (v, d, s) => (typeof ecrireNombre === "function" ? ecrireNombre(v, d, s) : String(Math.round(v * 10 ** d) / 10 ** d));
  const echapper = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function melanger(t) { for (let i = t.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [t[i], t[j]] = [t[j], t[i]]; } return t; }
  const joli = n => { const p = 10 ** Math.floor(Math.log10(n)); const m = n / p; return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 2.5 ? 2.5 : m <= 5 ? 5 : 10) * p; };

  // ---------------- La scène : montage, cadrage, ce qui est déjà tracé ----------------
  let S = null;          // { N, sys, ch, vue, sx, sy, revele: [], zoom: false }
  const X = x => (x - S.vue.xmin) * S.sx;
  const Y = y => H / 2 - y * S.sy;
  const versMm = p => ({ x: p.x / S.sx + S.vue.xmin, y: (H / 2 - p.y) / S.sy });

  // Cadrage automatique quand le niveau n'en donne pas
  function cadrageAuto(sys) {
    const xs = [], hs = [];
    if (!sys.objet.infini && sys.objet.x !== undefined) { xs.push(sys.objet.x); hs.push(sys.objet.h); }
    sys.lentilles.forEach(L => { xs.push(L.x, L.x - L.f, L.x + L.f); if (L.rayon) hs.push(L.rayon); });
    sys.diaphragmes.forEach(d => { xs.push(d.x); hs.push(d.rayon); });
    Optique.chaine(sys).slice(1).forEach(p => { if (!p.infini && Math.abs(p.x) < 1e5) { xs.push(p.x); hs.push(p.h); } });
    if (sys.oeil) {
      xs.push(sys.oeil.x);
      [Optique.remotum(sys), Optique.punctum(sys)].forEach(x => { if (x !== null && Math.abs(x) < 1e5) xs.push(x); });
    }
    let xmin = Math.min(...xs), xmax = Math.max(...xs);
    const marge = Math.max(10, (xmax - xmin) * 0.12);
    xmin -= marge; xmax += marge;
    const hmax = Math.max(1, ...hs.map(Math.abs)) * 1.4;
    return { xmin, xmax, hmax, carreauX: joli((xmax - xmin) / 22), carreauY: joli(hmax / 6) };
  }
  // Vue « œil grossi » : de 8 mm devant l'œil à la rétine
  function cadrageOeil(sys) {
    const xo = sys.oeil.x, im = Optique.imageOeil(sys), xr = Optique.retine(sys);
    const hmax = Math.max(0.6, im && !im.infini ? Math.abs(im.h) * 1.8 : 1);
    return { xmin: xo - 8, xmax: Math.max(xr, im && !im.infini ? im.x : xr) + 5, hmax, carreauX: 2, carreauY: joli(hmax / 4) };
  }

  function nouvelleScene(N, systeme) {
    const sys = Optique.preparer(systeme);
    // Vision : un œil avec son amétropie (schéma hors échelle). Sinon l'œil n'est qu'un observateur (loupe…).
    S = { N, sys, ch: Optique.chaine(sys), revele: [], zoom: false, vision: !!(sys.oeil && sys.oeil.ametropie !== undefined) };
    regler(N.vue ? { ...N.vue } : cadrageAuto(sys));
  }
  function regler(vue) {
    S.vue = vue;
    S.sx = W / (vue.xmax - vue.xmin);
    S.sy = (H / 2) / vue.hmax;
  }
  const nomLentille = k => S.sys.lentilles[k].nom;
  const nomFoyer = (k, prime) => (prime ? "F'" : "F") + (S.sys.lentilles.length > 1 ? bas[k + 1] || "" : "");
  const nomImage = (k, lettre) => S.sys.lentilles.length > 1 ? lettre + (bas[k + 1] || "") : lettre + "'";
  // Abscisse où s'arrête un rayon tracé jusqu'après la lentille k : la lentille suivante, ou le bord
  const xArret = k => (k + 1 < S.sys.lentilles.length ? S.sys.lentilles[k + 1].x : S.vue.xmax);
  const xDepart = () => (S.sys.objet.infini || S.sys.objet.x === undefined ? S.vue.xmin : Math.max(S.vue.xmin, Math.min(S.sys.objet.x, S.sys.lentilles.length ? S.sys.lentilles[0].x : S.sys.objet.x)));

  // ---------------- Dessin ----------------
  function dessiner() {
    svg.innerHTML = "";
    const defs = el("defs", {});
    const m = el("marker", { id: "pointe", viewBox: "0 0 10 10", refX: 8, refY: 5, markerWidth: 7, markerHeight: 7, orient: "auto-start-reverse" }, defs);
    el("path", { d: "M0 0 L10 5 L0 10 Z", class: "t-pointe" }, m);
    const clip = el("clipPath", { id: "t-cadre" }, defs);
    el("rect", { x: 0, y: 0, width: W, height: H }, clip);
    if (S.zoom) { dessinerOeilGrossi(); return; }
    const v = S.vue;
    // Quadrillage (1 carreau = carreauX × carreauY mm), axe
    const pasX = v.carreauX * S.sx, pasY = v.carreauY * S.sy;
    if (pasX > 4) for (let x = X(Math.ceil(v.xmin / v.carreauX) * v.carreauX); x <= W; x += pasX) el("line", { x1: x, y1: 0, x2: x, y2: H, class: "t-grille" });
    if (pasY > 4) for (let y = H / 2 % pasY; y <= H; y += pasY) el("line", { x1: 0, y1: y, x2: W, y2: y, class: "t-grille" });
    el("line", { x1: 0, y1: H / 2, x2: W, y2: H / 2, class: "t-axe" });
    // Lentilles (pointes vers l'extérieur = convergente), foyers
    S.sys.lentilles.forEach((L, k) => {
      const conv = L.f > 0;
      const demi = S.vision ? 46 : L.rayon ? Math.min(H / 2 - 6, L.rayon * S.sy) : H / 2 - 28;
      const x = X(L.x) - (S.vision && Math.abs(L.x - S.sys.oeil.x) < 40 ? 14 : 0), y1 = H / 2 - demi, y2 = H / 2 + demi;
      el("line", { x1: x, y1, x2: x, y2, class: "t-lentille" });
      const pointe = (y, haut) => {
        const s = (conv ? 1 : -1) * (haut ? -1 : 1);
        el("path", { d: `M${x - 8} ${y - s * 8} L${x} ${y} L${x + 8} ${y - s * 8}`, class: "t-lentille", fill: "none" });
      };
      pointe(conv ? y1 : y1 + 10, true); pointe(conv ? y2 : y2 - 10, false);
      if (S.sys.lentilles.length > 1 || L.nom !== "L") texte(x, Math.max(14, y1 - 6), L.nom, "centre petit");
      if (!S.vision) [[L.x - L.f, nomFoyer(k, false)], [L.x + L.f, nomFoyer(k, true)]].forEach(([xf, nom]) => {
        if (xf < v.xmin || xf > v.xmax) return;
        el("circle", { cx: X(xf), cy: H / 2, r: 3, class: "t-point" });
        texte(X(xf), H / 2 + 18, nom, "centre petit");
      });
      if (S.sys.lentilles.length === 1 && !S.vision) { el("circle", { cx: x, cy: H / 2, r: 3, class: "t-point" }); texte(x - 10, H / 2 + 18, "O", "centre"); }
    });
    // Diaphragmes (hors montures) : deux traits épais qui partent du bord de l'ouverture
    S.sys.diaphragmes.filter(d => !d.monture).forEach(d => {
      const x = X(d.x), r = d.rayon * S.sy;
      el("line", { x1: x, y1: H / 2 - r, x2: x, y2: Math.max(2, H / 2 - r - 22), class: "t-diaphragme" });
      el("line", { x1: x, y1: H / 2 + r, x2: x, y2: Math.min(H - 2, H / 2 + r + 22), class: "t-diaphragme" });
      texte(x, Math.max(14, H / 2 - r - 28), d.nom, "centre petit");
    });
    if (S.vision) dessinerOeilDeLoin();
    else if (S.sys.oeil) {
      // Œil observateur : un petit œil dessiné à sa place
      const xo = X(S.sys.oeil.x);
      el("path", { d: `M${xo} ${H / 2 - 12} Q${xo + 26} ${H / 2 - 14} ${xo + 26} ${H / 2} Q${xo + 26} ${H / 2 + 14} ${xo} ${H / 2 + 12}`, class: "t-oeil" });
      texte(xo + 12, H / 2 - 18, S.sys.oeil.nom || "Œil", "centre petit");
    }
    // Objet AB (ou direction de B à l'infini)
    const o = S.sys.objet;
    if (o.infini) {
      const x0 = 4, y0 = H / 2 - 40;
      const dx = 70, dy = -o.s * dx * S.sy / S.sx;
      el("line", { x1: x0, y1: y0 - dy * 0.0, x2: x0 + dx, y2: y0 + dy, class: "t-objet", "marker-end": "url(#pointe)" });
      texte(x0, y0 - 10, "B à l'infini (α = " + nb(o.angle, 1) + "°)", "petit");
    } else if (o.x !== undefined) {
      el("line", { x1: X(o.x), y1: H / 2, x2: X(o.x), y2: Y(o.h), class: "t-objet", "marker-end": "url(#pointe)" });
      texte(X(o.x) - 4, H / 2 + 18, "A", "centre");
      texte(X(o.x) - 14, Y(o.h) + 4, "B");
    }
    // Ce qui a déjà été trouvé
    const g = el("g", { "clip-path": "url(#t-cadre)" });
    S.revele.forEach(r => dessinerRevele(r, g));
    // Échelle
    const court = n => String(Math.round(n * 100) / 100).replace(".", ",");
    const ech = v.carreauX === v.carreauY ? "1 carreau = " + court(v.carreauX) + " mm"
      : "1 carreau : " + court(v.carreauX) + " mm en largeur, " + court(v.carreauY) + " mm en hauteur";
    texte(6, H - 8, S.vision ? "Schéma hors échelle" : ech, "petit");
  }

  // L'œil vu de loin : un symbole de taille fixe (schéma hors échelle)
  function dessinerOeilDeLoin() {
    const xo = X(S.sys.oeil.x);
    el("ellipse", { cx: xo + 16, cy: H / 2, rx: 18, ry: 22, class: "t-oeil" });
    el("line", { x1: xo, y1: H / 2 - 16, x2: xo, y2: H / 2 + 16, class: "t-lentille" });
    texte(xo + 16, H / 2 - 30, S.sys.oeil.nom || "Œil", "centre petit");
    texte(xo, H / 2 + 38, "H", "centre petit");
    // Graduations en cm le long de l'axe
    const v = S.vue, pas = joli((v.xmax - v.xmin) / 8);
    for (let x = Math.ceil(v.xmin / pas) * pas; x <= v.xmax; x += pas) {
      if (Math.abs(x - S.sys.oeil.x) < pas / 3) continue;
      el("line", { x1: X(x), y1: H / 2 - 4, x2: X(x), y2: H / 2 + 4, class: "t-axe" });
      texte(X(x), H / 2 + 52, nb((x - S.sys.oeil.x) / 10, 0) + " cm", "centre petit");
    }
  }
  // L'œil grossi : cristallin (lentille de l'œil réduit), rétine, faisceau qui entre dans l'œil
  function dessinerOeilGrossi() {
    const sys = S.sys, xo = sys.oeil.x, xr = Optique.retine(sys);
    el("line", { x1: 0, y1: H / 2, x2: W, y2: H / 2, class: "t-axe" });
    el("ellipse", { cx: (X(xo) + X(xr)) / 2 + 4, cy: H / 2, rx: (X(xr) - X(xo)) / 2 + 10, ry: 128, class: "t-oeil" });
    el("line", { x1: X(xr), y1: H / 2 - 110, x2: X(xr), y2: H / 2 + 110, class: "t-retine" });
    texte(X(xr) + 6, H / 2 - 96, "rétine", "petit");
    el("line", { x1: X(xo), y1: H / 2 - 100, x2: X(xo), y2: H / 2 + 100, class: "t-lentille" });
    texte(X(xo), H / 2 - 108, "H", "centre petit");
    texte(6, 18, "L'œil grossi (schéma hors échelle)", "petit");
    const g = el("g", { "clip-path": "url(#t-cadre)" });
    S.revele.filter(r => r.oeil).forEach(r => dessinerRevele(r, g));
  }

  // Un rayon donné dans l'espace objet, tracé de xDebut à xFin (et prolongé en pointillés si demandé)
  function tracerRayon(r0, xDebut, xFin, classe, prolonger, g) {
    const p = Optique.parcours(S.sys, r0, xDebut, xFin);
    const grp = el("g", { class: "t-rayon " + (classe || "") }, g);
    for (let i = 0; i + 1 < p.points.length; i++) {
      const a = p.points[i], b = p.points[i + 1];
      el("line", { x1: X(a.x), y1: Y(a.y), x2: X(b.x), y2: Y(b.y) }, grp);
    }
    if (prolonger) {
      // Prolongement vers l'arrière du dernier morceau (image virtuelle)
      const a = p.points[p.points.length - 2], s = p.pentes[p.pentes.length - 1];
      el("line", { x1: X(a.x), y1: Y(a.y), x2: X(S.vue.xmin), y2: Y(a.y + s * (S.vue.xmin - a.x)), class: "t-virtuel" }, grp);
    }
    return grp;
  }
  function dessinerImageK(k, g) {
    const im = S.ch[k + 1];
    if (!im || im.infini) return;
    const L = S.sys.lentilles[k];
    const virtuelle = im.x < L.x;
    const grp = el("g", { class: "t-image" + (virtuelle ? " virtuelle" : "") }, g);
    el("line", { x1: X(im.x), y1: H / 2, x2: X(im.x), y2: Y(im.h), "marker-end": "url(#pointe)" }, grp);
    texte(X(im.x) + 6, Y(im.h) + (im.h < 0 ? 16 : -6), nomImage(k, "B"), "or", grp);
    texte(X(im.x) + 6, H / 2 + (im.h < 0 ? -8 : 20), nomImage(k, "A"), "or", grp);
  }
  function dessinerImageDiaphragme(im, classe, g) {
    if (im.infini) return;
    const grp = el("g", { class: "t-image-diaph " + (classe || "") }, g);
    const x = X(im.x), r = im.rayon * S.sy;
    el("line", { x1: x, y1: H / 2 - r, x2: x, y2: H / 2 - r - 18 }, grp);
    el("line", { x1: x, y1: H / 2 + r, x2: x, y2: H / 2 + r + 18 }, grp);
    texte(x, Math.max(12, H / 2 - r - 24), im.nom + "′", "centre petit", grp);
    return grp;
  }
  function dessinerRevele(r, g) {
    if (r.type === "rayon") tracerRayon(r.r0, r.debut, r.fin, r.classe, r.prolonger, g);
    else if (r.type === "image") dessinerImageK(r.k, g);
    else if (r.type === "imageDiaphragme") dessinerImageDiaphragme(r.im, r.classe, g);
    else if (r.type === "pupille" || r.type === "lucarne") dessinerImageDiaphragme(r.im, r.type === "pupille" ? "t-pupille" : "t-lucarne", g);
    else if (r.type === "champ") dessinerChamp(r.c, g);
    else if (r.type === "faisceau") dessinerFaisceau(r.rayons, "t-faisceau-juste", g);
    else if (r.type === "point") {
      el("circle", { cx: X(r.x), cy: Y(r.y || 0), r: 5, class: "t-point-or" }, g);
      texte(X(r.x), Y(r.y || 0) - 10, r.nom, "centre or", g);
    } else if (r.type === "rayonsOeil") r.rayons.forEach(ry => { const grp = el("g", { class: "t-rayon" }, g); el("line", { x1: X(ry.x1), y1: Y(ry.y1), x2: X(ry.x2), y2: Y(ry.y2) }, grp); });
  }
  // Les deux droites limites d'un champ (en haut et, symétrique, en bas), et la limite dans le plan de l'objet
  function dessinerChamp(c, g) {
    const grp = el("g", { class: "t-champ t-champ-" + c.type }, g);
    [1, -1].forEach(sg => {
      const y1 = sg * c.p1.y, m = sg * c.pente;
      const xa = S.vue.xmin, xb = S.vue.xmax;
      el("line", { x1: X(xa), y1: Y(y1 + m * (xa - c.p1.x)), x2: X(xb), y2: Y(y1 + m * (xb - c.p1.x)) }, grp);
    });
    if (c.rayon !== undefined && !S.sys.objet.infini) {
      const xo = X(S.sys.objet.x);
      el("line", { x1: xo, y1: Y(c.rayon), x2: xo, y2: Y(-c.rayon), class: "t-champ-limite" }, grp);
    }
  }
  function dessinerFaisceau(rayons, classe, g) {
    const grp = el("g", { class: "t-faisceau " + (classe || "") }, g);
    const deb = xDepart(), fin = S.vue.xmax;
    const p1 = Optique.parcours(S.sys, rayons[0], deb, fin).points, p2 = Optique.parcours(S.sys, rayons[1], deb, fin).points;
    const d = "M" + p1.map(p => X(p.x) + " " + Y(p.y)).join(" L") + " L" + p2.slice().reverse().map(p => X(p.x) + " " + Y(p.y)).join(" L") + " Z";
    el("path", { d, class: "t-faisceau-fond" }, grp);
    [p1, p2].forEach(pts => el("polyline", { points: pts.map(p => X(p.x) + "," + Y(p.y)).join(" "), class: "t-faisceau-bord" }, grp));
    return grp;
  }

  // ---------------- Retour, boutons ----------------
  function retour(html, classe, pose) {
    const zone = $("jeu-retour");
    zone.className = "jeu-retour " + (classe || "");
    zone.innerHTML = '<img class="jeu-compagnon" alt="" width="56" height="62"><div class="jeu-message"></div>';
    zone.querySelector(".jeu-message").innerHTML = html;
    if (typeof montrerCompagnon === "function") montrerCompagnon(zone.querySelector(".jeu-compagnon"), pose || (classe === "bien" ? "bouche-ouverte" : "pensif"));
    else zone.querySelector(".jeu-compagnon").remove();
  }
  function effacerRetour() { $("jeu-retour").innerHTML = ""; $("jeu-retour").className = "jeu-retour"; }
  function boutons(liste) {
    const zone = $("jeu-actions");
    zone.innerHTML = "";
    liste.forEach(([texteBouton, action, classe]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "bouton " + (classe || "");
      b.textContent = texteBouton;
      b.onclick = action;
      zone.appendChild(b);
    });
    return zone;
  }

  // ======================================================================
  //  LES SIX GESTES. Chaque geste dessine, attend l'élève, puis appelle
  //  fini(juste, messageHTML) et ajoute ce qu'il a trouvé à S.revele.
  // ======================================================================

  // ---------- 1. rayon : choisir le trajet après une lentille ----------
  const TEXTES_RAYON = {
    juste: {
      parallele: [{ t: "Il passe par le foyer image F'", p: "Tout rayon parallèle à l'axe ressort en passant par F', le foyer image." },
                  { t: "Il s'écarte de l'axe, comme s'il venait de F'", p: "Avec une lentille divergente, le rayon parallèle ressort comme s'il venait du foyer image F', situé avant la lentille." }],
      O: [{ t: "Il continue tout droit, sans être dévié", p: "Au centre optique O, la lentille se comporte comme une lame à faces parallèles très fine : le rayon n'est pas dévié." }],
      F: [{ t: "Il ressort parallèle à l'axe", p: "Un rayon qui passe par le foyer objet F ressort parallèle à l'axe (c'est la règle du rayon parallèle, à l'envers)." },
          { t: "Il ressort parallèle à l'axe", p: "Avec une lentille divergente, le foyer objet F est après la lentille : un rayon qui se dirige vers F ressort parallèle à l'axe." }]
    },
    droit: { t: "Il continue tout droit", p: "Seul le rayon qui passe par le centre O n'est pas dévié. Celui-ci est dévié par la lentille." },
    parallele: { t: "Il ressort parallèle à l'axe", p: "C'est le rayon qui passe par le foyer objet F qui ressort parallèle à l'axe, pas celui-ci." },
    parFp: { t: "Il passe par le foyer image F'", p: "Ne confonds pas les deux foyers : passer par F avant la lentille donne un rayon parallèle après, et inversement." },
    envers: [{ t: "Il s'écarte de l'axe", p: "C'est ce que ferait une lentille DIVERGENTE. Ici la lentille est convergente : le rayon se rabat vers l'axe." },
             { t: "Il se rapproche de l'axe et passe par un foyer situé après la lentille", p: "C'est le comportement d'une lentille CONVERGENTE. Ici la lentille est divergente : le rayon s'écarte de l'axe." }],
    miroir: { t: "Il repart de l'autre côté, comme sur un miroir", p: "Une lentille ne réfléchit pas la lumière : elle la laisse passer. Par O, le rayon garde sa direction." }
  };
  function candidatsRayon(L, yL, s, par) {
    const juste = s - yL / L.f, conv = L.f > 0;
    const j = TEXTES_RAYON.juste[par] || TEXTES_RAYON.juste.O;
    const liste = [{ s: juste, juste: true, ...(j[conv ? 0 : 1] || j[0]) }];
    const faux = {
      droit: s, parallele: 0, parFp: -yL / L.f, envers: s + yL / L.f, miroir: -s
    };
    const ordre = par === "O" ? ["parallele", "miroir", "envers"] : par === "F" ? ["droit", "parFp", "envers", "miroir"] : ["droit", "envers", "parFp", "miroir"];
    const ecart = (a, b) => Math.abs(Math.atan(a * S.sy / S.sx) - Math.atan(b * S.sy / S.sx));
    for (const cle of ordre) {
      if (liste.length === 3) break;
      const v = faux[cle];
      if (liste.some(c => ecart(c.s, v) < 0.07)) continue;
      const tx = Array.isArray(TEXTES_RAYON[cle]) ? TEXTES_RAYON[cle][conv ? 0 : 1] : TEXTES_RAYON[cle];
      liste.push({ s: v, juste: false, t: tx.t, p: tx.p });
    }
    return melanger(liste);
  }
  function gesteRayon(E, fini) {
    const k = Optique.indexLentille(S.sys, E.apres), L = S.sys.lentilles[k];
    const par = (E.rayon && E.rayon.par) || "parallele";
    const r = Optique.rayonType(S.sys, k, par);
    const r0 = Optique.versEspaceObjet(S.sys, r);
    dessiner();
    // Rayon incident jusqu'à la lentille, puis les propositions numérotées
    tracerRayon(r0, xDepart(), L.x, "t-encours", false);
    if (par === "F") el("circle", { cx: X(L.x - L.f), cy: H / 2, r: 7, class: "t-repere" });
    const liste = candidatsRayon(L, r.y, r.s, par);
    const P = { x: X(L.x), y: Y(r.y) }, xFin = xArret(k);
    const lignes = liste.map((c, i) => {
      const fin = { x: X(xFin), y: Y(r.y + c.s * (xFin - L.x)) };
      const groupe = el("g", { class: "t-candidat" });
      el("line", { x1: P.x, y1: P.y, x2: fin.x, y2: fin.y, class: "t-candidat-trait" }, groupe);
      el("line", { x1: P.x, y1: P.y, x2: fin.x, y2: fin.y, class: "t-zone-clic" }, groupe);
      let lx = P.x + (fin.x - P.x) * 0.72, ly = P.y + (fin.y - P.y) * 0.72;
      if (ly < 14 || ly > H - 14) { const t = ((ly < 14 ? 14 : H - 14) - P.y) / (fin.y - P.y || 1); lx = P.x + (fin.x - P.x) * t; ly = P.y + (fin.y - P.y) * t; }
      el("circle", { cx: lx, cy: ly, r: 12, class: "t-numero-fond" }, groupe);
      texte(lx, ly + 5, String(i + 1), "centre numero", groupe);
      groupe.addEventListener("click", () => choisir(i));
      return groupe;
    });
    boutons(liste.map((c, i) => [(i + 1) + ". " + c.t, () => choisir(i), "secondaire choix-rayon"]));
    let repondu = false;
    function choisir(i) {
      if (repondu) return;
      repondu = true;
      lignes.forEach((g, n) => g.classList.add(liste[n].juste ? "t-juste" : (n === i ? "t-faux" : "t-ecarte")));
      document.querySelectorAll("#jeu-actions button").forEach((b, n) => {
        b.disabled = true;
        if (liste[n].juste) b.classList.add("bon"); else if (n === i) b.classList.add("mauvais");
      });
      S.revele.push({ type: "rayon", r0, debut: xDepart(), fin: xFin });
      const c = liste[i], bon = liste.find(x => x.juste);
      fini(c.juste, c.juste ? "<p><b>Bien vu !</b> " + c.p + "</p>" : "<p><b>Pas tout à fait.</b> " + c.p + "</p><p><b>La bonne réponse :</b> " + bon.p + "</p>");
    }
  }

  // ---------- 2. placer : faire glisser un point ----------
  let nettoyerGlisser = () => {};
  // Ce qu'il faut placer, calculé : { x, y, axe (glisse seulement sur l'axe), nom, revele, verif }
  function cible(E) {
    const sys = S.sys;
    if (E.quoi === "image") {
      const k = Optique.indexLentille(sys, E.apres), im = S.ch[k + 1];
      return { x: im.x, y: im.h, nom: nomImage(k, "B"), k, revele: [{ type: "image", k }],
        verif: "O" + (sys.lentilles.length > 1 ? bas[k + 1] : "") + "A" + (sys.lentilles.length > 1 ? bas[k + 1] : "'") + " = " + nb(im.x - sys.lentilles[k].x, 1, true) + " mm" };
    }
    if (E.quoi === "image-diaphragme") {
      const d = sys.diaphragmes.find(x => x.nom === E.diaphragme), im = Optique.imageDiaphragme(sys, d);
      return { x: im.x, y: im.rayon, nom: d.nom + "′", revele: [{ type: "imageDiaphragme", im }],
        verif: "image de " + d.nom + " : à " + nb(im.x, 1, true) + " mm, rayon " + nb(im.rayon, 1) + " mm" };
    }
    if (E.quoi === "foyer-image" || E.quoi === "foyer-objet") {
      const F = E.quoi === "foyer-image" ? Optique.foyerImage(sys) : Optique.foyerObjet(sys);
      const nom = E.quoi === "foyer-image" ? "F'" : "F";
      return { x: F.x, y: 0, axe: true, nom, revele: [{ type: "point", x: F.x, nom }],
        verif: "foyer " + (E.quoi === "foyer-image" ? "image" : "objet") + " du système à x = " + nb(F.x, 1, true) + " mm ; focale f' = " + nb(F.f, 1, true) + " mm" };
    }
    if (E.quoi === "remotum" || E.quoi === "punctum") {
      const x = E.quoi === "remotum" ? Optique.remotum(sys) : Optique.punctum(sys);
      const nom = E.quoi === "remotum" ? "R" : "P";
      return { x, y: 0, axe: true, nom, revele: [{ type: "point", x, nom }],
        verif: "H" + nom + " = " + nb((x - sys.oeil.x) / 10, 1, true) + " cm" };
    }
    if (E.quoi === "image-retine") {
      const im = Optique.imageOeil(sys), xr = Optique.retine(sys);
      const ecart = im.x - xr;
      const place = Math.abs(ecart) < 0.05 ? "pratiquement sur la rétine" : ecart < 0 ? "devant la rétine (à " + nb(-ecart, 2) + " mm)" : "derrière la rétine (à " + nb(ecart, 2) + " mm)";
      return { x: im.x, y: im.h, nom: "B'", oeil: true, revele: [{ type: "point", x: im.x, y: im.h, nom: "B'", oeil: true }],
        verif: "l'image se forme " + place };
    }
    return null;
  }
  function gestePlacer(E, fini) {
    const c = cible(E);
    if (c.oeil) { S.zoom = true; regler(cadrageOeil(S.sys)); }
    dessiner();
    // Rayons d'aide (pour une image) : tracés jusqu'à la lentille suivante
    const aides = [];
    if (E.quoi === "image" && E.rayons) E.rayons.forEach(par => {
      const r = Optique.rayonType(S.sys, c.k, par);
      if (r) aides.push(Optique.versEspaceObjet(S.sys, r));
    });
    if (c.oeil) c.revele.unshift(dessinerFaisceauOeil());
    const fin = xArret(c.k || 0);
    aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "", false));
    const virtuelle = E.quoi === "image" && c.x < S.sys.lentilles[c.k].x;
    // Le point qu'on fait glisser (départ neutre, en bas à droite de la lentille)
    nettoyerGlisser();
    svg.style.touchAction = "none";
    const g = el("g", { class: "t-cible" });
    el("circle", { r: 16, class: "t-cible-anneau" }, g);
    el("circle", { r: 6, class: "t-cible-point" }, g);
    const etiquette = texte(12, -12, c.nom + " ?", "or", g);
    let pos = c.axe ? { x: W * 0.5, y: H / 2 } : { x: Math.min(W - 30, X(c.k !== undefined ? S.sys.lentilles[c.k].x : S.vue.xmin) + 34), y: H - 22 };
    const placer = p => {
      pos = { x: Math.max(6, Math.min(W - 6, p.x)), y: c.axe ? H / 2 : Math.max(6, Math.min(H - 6, p.y)) };
      g.setAttribute("transform", `translate(${pos.x} ${pos.y})`);
    };
    placer(pos);
    const versSvg = e => { const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; return pt.matrixTransform(svg.getScreenCTM().inverse()); };
    let glisse = false, fait = false;
    const appui = e => { if (fait) return; glisse = true; try { svg.setPointerCapture(e.pointerId); } catch (err) {} placer(versSvg(e)); e.preventDefault(); };
    const bouge = e => { if (glisse) { placer(versSvg(e)); e.preventDefault(); } };
    const lache = () => { glisse = false; };
    svg.addEventListener("pointerdown", appui); svg.addEventListener("pointermove", bouge);
    svg.addEventListener("pointerup", lache); svg.addEventListener("pointercancel", lache);
    nettoyerGlisser = () => {
      svg.removeEventListener("pointerdown", appui); svg.removeEventListener("pointermove", bouge);
      svg.removeEventListener("pointerup", lache); svg.removeEventListener("pointercancel", lache);
      svg.onkeydown = null; svg.style.touchAction = "";
      nettoyerGlisser = () => {};
    };
    svg.tabIndex = 0;
    svg.onkeydown = e => {
      const pas = e.shiftKey ? 20 : 4, dep = { ArrowLeft: [-pas, 0], ArrowRight: [pas, 0], ArrowUp: [0, -pas], ArrowDown: [0, pas] }[e.key];
      if (dep && !fait) { placer({ x: pos.x + dep[0], y: pos.y + dep[1] }); e.preventDefault(); }
      if (e.key === "Enter" && !fait) valider();
    };
    let indice = false;
    function valider() {
      if (fait) return;
      fait = true;
      nettoyerGlisser();
      const mm = versMm(pos), tol = E.tolerance !== undefined ? E.tolerance : 0.5;
      const dist = Math.hypot((mm.x - c.x) / S.vue.carreauX, c.axe ? 0 : (mm.y - c.y) / S.vue.carreauY);
      const juste = dist <= tol;
      g.classList.add(juste ? "t-juste" : "t-faux");
      etiquette.textContent = juste ? "" : "ton " + c.nom;
      if (juste) setTimeout(() => g.remove(), 900);
      // La correction : rayons prolongés si l'image est virtuelle, puis l'image
      aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "", virtuelle));
      S.revele.push(...aides.map(r0 => ({ type: "rayon", r0, debut: xDepart(), fin, prolonger: virtuelle })), ...c.revele);
      const gr = el("g", { "clip-path": "url(#t-cadre)" });
      c.revele.forEach(r => dessinerRevele(r, gr));
      let piste = "";
      if (!juste) {
        if (E.quoi === "image") {
          const L = S.sys.lentilles[c.k];
          if (virtuelle && mm.x > L.x) piste = "L'image est <b>virtuelle</b> : les rayons ne se croisent pas après la lentille, ce sont leurs <b>prolongements</b> qui se croisent, du côté de l'objet.";
          else if (!virtuelle && mm.x < L.x) piste = "Ici les rayons se croisent bien <b>après</b> la lentille : l'image est réelle, de l'autre côté.";
          else if (mm.y * c.y < 0) piste = "Regarde de quel côté de l'axe les rayons se croisent : l'image est " + (c.y < 0 ? "<b>sous</b>" : "<b>au-dessus de</b>") + " l'axe.";
          else piste = "Tu n'es pas loin : l'image est exactement là où les rayons se croisent.";
        } else if (c.axe) piste = mm.x < c.x ? "Trop à gauche." : "Trop à droite.";
        else piste = "Regarde où le point est vraiment.";
      }
      fini(juste, (juste ? "<p><b>Exact !</b></p>" : "<p><b>Pas tout à fait.</b> " + piste + "</p>") + (S.calculApres ? "" : '<p class="verif">Par le calcul : ' + c.verif + ".</p>"), indice);
    }
    const actions = [["Valider", () => valider()]];
    if (E.prolonger && aides.length) actions.push(["Indice : prolonger les rayons", () => {
      if (!indice) { indice = true; aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "t-indice", true)); svg.appendChild(g); }
      const b = [...document.querySelectorAll("#jeu-actions button")].find(x => x.textContent.startsWith("Indice"));
      if (b) { b.disabled = true; b.textContent = "Indice utilisé (−1 étoile)"; }
    }, "secondaire"]);
    boutons(actions);
    return valider;
  }
  // Œil grossi : faisceau qui entre dans l'œil (après le verre) et converge vers l'image
  function dessinerFaisceauOeil() {
    const sys = S.sys, ch = S.ch, avant = ch[ch.length - 1], xo = sys.oeil.x;
    const im = Optique.imageOeil(sys);
    const hauteurs = [-0.75, 0, 0.75].map(f => f * S.vue.hmax);
    const rayons = hauteurs.map(y => {
      // pente avant l'œil : rayon issu du point objet (ou de l'image donnée par le verre)
      const s = avant.infini ? avant.s : (y - avant.h) / (xo - avant.x);
      return { x1: S.vue.xmin, y1: y - s * (xo - S.vue.xmin), x2: xo, y2: y, s };
    });
    rayons.forEach(r => {
      const grp = el("g", { class: "t-rayon" });
      el("line", { x1: X(r.x1), y1: Y(r.y1), x2: X(r.x2), y2: Y(r.y2) }, grp);
    });
    S.revele.push({ type: "rayonsOeil", oeil: true, rayons: rayons.map(r => ({ x1: r.x1, y1: r.y1, x2: r.x2, y2: r.y2 })) });
    // Dans l'œil : les rayons convergent vers l'image (montrés seulement après la réponse)
    return { type: "rayonsOeil", oeil: true, rayons: rayons.map(r => ({ x1: xo, y1: r.y2, x2: xo + (im.x - xo) * 1.15, y2: r.y2 + (im.h - r.y2) * 1.15 })) };
  }

  // ---------- 3. designer : toucher la pupille, la lucarne ou un diaphragme ----------
  function gesteDesigner(E, fini) {
    const sys = S.sys, ims = Optique.imagesDiaphragmes(sys).filter(im => !im.infini);
    const enImages = E.quoi === "pupille-entree" || E.quoi === "lucarne-entree";
    const P = Optique.pupilleEntree(sys), Lu = Optique.lucarneEntree(sys);
    const bonNom = (E.quoi === "pupille-entree" || E.quoi === "diaphragme-ouverture" ? P : Lu).nom;
    dessiner();
    const liste = enImages ? ims.map(im => ({ nom: im.nom, im, label: "Image de " + im.nom + " (" + im.nom + "′)" }))
      : sys.diaphragmes.map(d => ({ nom: d.nom, im: { nom: d.nom, x: d.x, rayon: d.rayon }, label: (d.monture ? "Monture de " : "") + d.nom }));
    const groupes = liste.map((c, i) => {
      const grp = dessinerImageDiaphragme(enImages ? c.im : { ...c.im, nom: c.nom.replace(/′$/, "") }, "t-designable") || el("g", {});
      if (!enImages) grp.querySelector("text") && (grp.querySelector("text").textContent = c.nom);
      el("rect", { x: X(c.im.x) - 14, y: 0, width: 28, height: H, class: "t-zone-clic-rect" }, grp);
      grp.addEventListener("click", () => choisir(i));
      return grp;
    });
    if (E.quoi === "lucarne-entree") S.revele.push({ type: "pupille", im: P });
    boutons(liste.map((c, i) => [c.label, () => choisir(i), "secondaire choix-rayon"]));
    let repondu = false;
    function choisir(i) {
      if (repondu) return;
      repondu = true;
      const c = liste[i], juste = c.nom === bonNom;
      groupes.forEach((g, n) => g.classList.add(liste[n].nom === bonNom ? "t-juste" : n === i ? "t-faux" : "t-ecarte"));
      document.querySelectorAll("#jeu-actions button").forEach((b, n) => { b.disabled = true; if (liste[n].nom === bonNom) b.classList.add("bon"); else if (n === i) b.classList.add("mauvais"); });
      // Les angles qui justifient le choix
      const depuis = E.quoi === "lucarne-entree" ? P.x : sys.objet.infini ? null : sys.objet.x;
      const angles = ims.filter(im => E.quoi !== "lucarne-entree" || im.nom !== P.nom).map(im => im.nom + "′ : " + (depuis === null ? "rayon " + nb(im.rayon, 1) + " mm" : "tan u = " + nb(im.rayon, 1) + " / " + nb(Math.abs(im.x - depuis), 0) + " = " + nb(im.rayon / Math.abs(im.x - depuis), 3)));
      const regle = E.quoi === "pupille-entree" || E.quoi === "diaphragme-ouverture"
        ? "La pupille d'entrée est l'image de diaphragme vue sous le <b>plus petit angle</b> depuis A (le pied de l'objet)" + (sys.objet.infini ? " ; objet à l'infini : la plus petite image." : ".")
        : "La lucarne d'entrée est, parmi les autres, l'image vue sous le <b>plus petit angle</b> depuis le centre de la pupille d'entrée.";
      const nomBon = E.quoi === "pupille-entree" ? "la pupille d'entrée est " + P.nom + "′ (image de " + P.nom + ")"
        : E.quoi === "diaphragme-ouverture" ? "le diaphragme d'ouverture est " + P.nom
        : E.quoi === "lucarne-entree" ? "la lucarne d'entrée est " + Lu.nom + "′ (image de " + Lu.nom + ")" : "le diaphragme de champ est " + Lu.nom;
      S.revele.push(E.quoi === "pupille-entree" || E.quoi === "diaphragme-ouverture" ? { type: "pupille", im: ims.find(im => im.nom === P.nom) || P } : { type: "lucarne", im: ims.find(im => im.nom === Lu.nom) || Lu });
      fini(juste, "<p><b>" + (juste ? "Oui : " : "Non : ") + "</b>" + echapper(nomBon) + ".</p><p>" + regle + "</p><p class=\"verif\">" + angles.map(echapper).join(" · ") + "</p>");
    }
  }

  // ---------- 4. relier : deux bords → limite d'un champ ----------
  function gesteRelier(E, fini) {
    const type = (E.quoi || "champ-pleine-lumiere").replace("champ-", "");
    const c = Optique.champ(S.sys, type);
    const P = c.pupille, Lu = c.lucarne;
    if (!S.revele.some(r => r.type === "pupille")) S.revele.push({ type: "pupille", im: P });
    if (!S.revele.some(r => r.type === "lucarne")) S.revele.push({ type: "lucarne", im: Lu });
    dessiner();
    const poignees = [
      { id: "P+", x: P.x, y: P.rayon, nom: "bord haut de la pupille" },
      { id: "P-", x: P.x, y: -P.rayon, nom: "bord bas de la pupille" },
      { id: "L+", x: Lu.x, y: Lu.rayon, nom: "bord haut de la lucarne" },
      { id: "L-", x: Lu.x, y: -Lu.rayon, nom: "bord bas de la lucarne" }
    ];
    if (type === "moyen") poignees.splice(2, 0, { id: "P0", x: P.x, y: 0, nom: "centre de la pupille" });
    const justes = type === "total" ? [["P+", "L-"], ["P-", "L+"]] : type === "moyen" ? [["P0", "L+"], ["P0", "L-"]] : [["P+", "L+"], ["P-", "L-"]];
    const choisis = [];
    const ronds = poignees.map(p => {
      const g = el("g", { class: "t-poignee" });
      el("circle", { cx: X(p.x), cy: Y(p.y), r: 18, class: "t-zone-clic-rond" }, g);
      el("circle", { cx: X(p.x), cy: Y(p.y), r: 7, class: "t-poignee-point" }, g);
      g.addEventListener("click", () => toucher(p, g));
      return g;
    });
    boutons(poignees.map(p => [p.nom.charAt(0).toUpperCase() + p.nom.slice(1), e => toucher(p, ronds[poignees.indexOf(p)], e.currentTarget), "secondaire choix-rayon"]));
    function toucher(p, g, bouton) {
      if (choisis.length >= 2 || choisis.includes(p)) return;
      choisis.push(p);
      g.classList.add("t-choisi");
      const b = [...document.querySelectorAll("#jeu-actions button")][poignees.indexOf(p)];
      if (b) b.classList.add("choisi");
      if (choisis.length < 2) return;
      document.querySelectorAll("#jeu-actions button").forEach(x => { x.disabled = true; });
      const [a, b2] = choisis;
      if (Math.abs(a.x - b2.x) > 1e-6) {
        const m = (b2.y - a.y) / (b2.x - a.x);
        el("line", { x1: X(S.vue.xmin), y1: Y(a.y + m * (S.vue.xmin - a.x)), x2: X(S.vue.xmax), y2: Y(a.y + m * (S.vue.xmax - a.x)), class: "t-ligne-eleve", "clip-path": "url(#t-cadre)" });
      }
      const ids = choisis.map(x => x.id);
      const juste = justes.some(([u, v]) => ids.includes(u) && ids.includes(v));
      S.revele.push({ type: "champ", c });
      dessinerChamp(c, el("g", { "clip-path": "url(#t-cadre)" }));
      const nomChamp = type === "total" ? "champ total" : type === "moyen" ? "champ moyen" : "champ de pleine lumière";
      const regle = type === "total" ? "on relie un bord de la pupille au bord <b>opposé</b> de la lucarne"
        : type === "moyen" ? "on relie le <b>centre</b> de la pupille au bord de la lucarne"
        : "on relie les bords <b>du même côté</b> de la pupille et de la lucarne";
      fini(juste, "<p><b>" + (juste ? "Exact" : "Pas tout à fait") + " :</b> pour le " + nomChamp + ", " + regle + ".</p>");
    }
  }

  // ---------- 5. faisceau : choisir le bon faisceau parmi 3 ----------
  function gesteFaisceau(E, fini) {
    const sys = S.sys, depuis = E.depuis || "B";
    const P = Optique.pupilleEntree(sys);
    const juste = Optique.faisceau(sys, depuis, P);
    // Erreur 1 : viser les bords du diaphragme réel, sans passer par son image
    const reel = P.d && Math.abs(P.d.x - P.x) > 1e-6 ? Optique.faisceau(sys, depuis, { x: P.d.x, rayon: P.d.rayon }) : Optique.faisceau(sys, depuis, { x: P.x, rayon: P.rayon * 1.7 });
    // Erreur 2 : faisceau limité par une autre ouverture (la plus grande), comme si le diaphragme n'existait pas
    const autres = Optique.imagesDiaphragmes(sys).filter(im => !im.infini && im.nom !== P.nom).sort((a, b) => b.rayon - a.rayon);
    const large = autres.length ? Optique.faisceau(sys, depuis, autres[0]) : Optique.faisceau(sys, depuis, { x: P.x, rayon: P.rayon * 2.4 });
    const liste = melanger([
      { rayons: juste, juste: true, t: "Il passe par les bords de la pupille d'entrée", p: "Le faisceau issu d'un point de l'objet est limité par la pupille d'entrée : ses rayons extrêmes visent les bords de la pupille, puis traversent tout l'instrument en passant par les bords du diaphragme d'ouverture." },
      { rayons: reel, juste: false, t: "Il vise directement les bords du diaphragme", p: "On ne vise pas le diaphragme lui-même quand il est derrière une lentille : vu depuis l'objet, c'est son image (la pupille d'entrée) qui limite le faisceau." },
      { rayons: large, juste: false, t: "Il remplit toute la monture", p: "Ce faisceau ignore le diaphragme d'ouverture : il serait coupé par lui. C'est la pupille d'entrée qui limite le faisceau." }
    ]);
    if (!S.revele.some(r => r.type === "pupille")) S.revele.push({ type: "pupille", im: P });
    dessiner();
    const groupes = liste.map((c, i) => {
      const g = dessinerFaisceau(c.rayons, "t-faisceau-candidat t-f" + i, el("g", { "clip-path": "url(#t-cadre)" }));
      g.addEventListener("click", () => montrer(i));
      return g;
    });
    // Choix en deux temps : on touche un faisceau (il passe devant, les autres s'effacent), puis on valide
    let vu = null;
    const zone = boutons(liste.map((c, i) => [(i + 1) + ". " + c.t, () => montrer(i), "secondaire choix-rayon"]));
    const ok = document.createElement("button");
    ok.type = "button"; ok.className = "bouton"; ok.textContent = "Valider ce faisceau"; ok.disabled = true;
    ok.onclick = () => { if (vu !== null) choisir(vu); };
    zone.appendChild(ok);
    function montrer(i) {
      if (repondu) return;
      vu = i; ok.disabled = false;
      groupes.forEach((g, n) => g.classList.toggle("t-attenue", n !== i));
      groupes[i].parentNode.parentNode.appendChild(groupes[i].parentNode);   // le faisceau choisi passe devant
      zone.querySelectorAll(".choix-rayon").forEach((b, n) => b.classList.toggle("choisi", n === i));
    }
    let repondu = false;
    function choisir(i) {
      if (repondu) return;
      repondu = true;
      groupes.forEach((g, n) => { g.classList.remove("t-attenue"); g.classList.add(liste[n].juste ? "t-juste" : n === i ? "t-faux" : "t-ecarte"); });
      document.querySelectorAll("#jeu-actions button").forEach((b, n) => { b.disabled = true; b.classList.remove("choisi"); if (n < liste.length && liste[n].juste) b.classList.add("bon"); else if (n === i) b.classList.add("mauvais"); });
      S.revele.push({ type: "faisceau", rayons: juste });
      const c = liste[i], bon = liste.find(x => x.juste);
      fini(c.juste, c.juste ? "<p><b>Bien vu !</b> " + bon.p + "</p>" : "<p><b>Pas tout à fait.</b> " + c.p + "</p><p><b>La bonne réponse :</b> " + bon.p + "</p>");
    }
  }

  // ---------- 6. calcul : taper une valeur ----------
  const SIGNE_PAR_DEFAUT = { "rayon-champ": false, "angle-champ": false };
  const UNITE_PAR_DEFAUT = { "OA'": "mm", "A'B'": "mm", "f-systeme": "mm", "rayon-champ": "mm", "angle-champ": "°", "remotum": "cm", "punctum": "cm", "gamma": "", "grossissement": "" };
  const NOMS_GRANDEURS = { "OA'": "la position de l'image", "A'B'": "la taille de l'image", "gamma": "le grandissement", "f-systeme": "la focale du système",
    "rayon-champ": "le rayon du champ", "angle-champ": "l'angle du champ", "grossissement": "le grossissement", "remotum": "HR", "punctum": "HP" };
  function valeurCalcul(E) {
    const brute = Optique.grandeur(S.sys, E.grandeur, { apres: E.apres, champ: E.champ });
    if (brute === null) return null;
    const unite = E.unite !== undefined ? E.unite : UNITE_PAR_DEFAUT[E.grandeur] || "";
    const longueur = ["OA'", "A'B'", "f-systeme", "rayon-champ", "remotum", "punctum"].includes(E.grandeur);
    const facteur = longueur ? ({ mm: 1, cm: 0.1, m: 0.001 }[unite] || 1) : 1;
    return { valeur: brute * facteur, unite, decimales: E.decimales !== undefined ? E.decimales : 1,
      signe: E.signe !== undefined ? E.signe : SIGNE_PAR_DEFAUT[E.grandeur] !== false,
      tolerance: E.tolerance, toleranceRelative: E.toleranceRelative };
  }
  function gesteCalcul(E, fini) {
    if (S.zoom) { S.zoom = false; regler(S.N.vue ? { ...S.N.vue } : cadrageAuto(S.sys)); }
    dessiner();
    const rep = valeurCalcul(E);
    const zone = $("jeu-actions");
    zone.innerHTML = "";
    const form = document.createElement("form");
    form.className = "saisie-calcul";
    form.innerHTML = '<label class="saisie-ligne"><span class="visuellement-cache"></span><input type="text" inputmode="decimal" autocomplete="off" spellcheck="false"><span class="saisie-unite"></span></label>' +
      '<button class="bouton" type="submit">Valider</button><p class="saisie-aide"></p>';
    form.querySelector(".visuellement-cache").textContent = "Ta réponse" + (rep.unite ? " en " + rep.unite : "");
    form.querySelector(".saisie-unite").textContent = rep.unite;
    form.querySelector(".saisie-aide").textContent = "Arrondi " + (rep.decimales === 0 ? "à l'unité" : "à " + nb(10 ** -rep.decimales, rep.decimales)) + (rep.signe ? " · n'oublie pas le signe" : "") + ".";
    zone.appendChild(form);
    const champ = form.querySelector("input");
    champ.focus({ preventScroll: true });
    form.onsubmit = e => {
      e.preventDefault();
      const r = corrigerCalcul(rep, champ.value);
      if (r.etat === "vide") { form.querySelector(".saisie-aide").textContent = "Écris un nombre (ex. −12,5)."; return; }
      champ.disabled = true;
      form.querySelector("button").disabled = true;
      fini(r.etat === "juste", "<p><b>" + (r.etat === "juste" ? "Exact !" : "Pas tout à fait.") + "</b> " + echapper(messageCalcul(rep, r)) + "</p>");
    };
  }

  const GESTES = { rayon: gesteRayon, placer: gestePlacer, designer: gesteDesigner, relier: gesteRelier, faisceau: gesteFaisceau, calcul: gesteCalcul };
  const CONSIGNES = {
    rayon: E => "Que devient ce rayon après " + E.apres + " ?",
    placer: E => ({ image: "Place l'image après " + E.apres + ".", "image-diaphragme": "Place l'image de " + E.diaphragme + " vue depuis l'objet.", "foyer-image": "Place le foyer image du système.", "foyer-objet": "Place le foyer objet du système.", remotum: "Place le remotum R.", punctum: "Place le punctum proximum P.", "image-retine": "Place l'image B' formée par l'œil." }[E.quoi] || "Place le point."),
    designer: E => ({ "pupille-entree": "Touche la pupille d'entrée.", "lucarne-entree": "Touche la lucarne d'entrée.", "diaphragme-ouverture": "Touche le diaphragme d'ouverture.", "diaphragme-champ": "Touche le diaphragme de champ." }[E.quoi]),
    relier: E => "Touche les deux points qui donnent la limite du " + ({ "champ-total": "champ total", "champ-moyen": "champ moyen" }[E.quoi] || "champ de pleine lumière") + ".",
    faisceau: () => "Quel est le faisceau issu de B qui traverse l'instrument ?",
    calcul: E => "Calcule " + (NOMS_GRANDEURS[E.grandeur] || "la valeur") + "."
  };

  // ---------------- Déroulé d'un niveau ----------------
  let niveau = null, etat = null;

  function ouvrir(N) {
    if (!N || !debloque(N)) return;
    niveau = N;
    const liste = niveauxDe(N.epreuve);
    history.replaceState(null, "", "#" + N.id);
    choisirAtelier(N.epreuve, true);
    $("ecran-niveaux").hidden = true;
    $("ecran-jeu").hidden = false;
    $("ecran-jeu").dataset.epreuve = N.epreuve;
    $("jeu-niveau").textContent = "Niveau " + (liste.indexOf(N) + 1) + " / " + liste.length;
    $("jeu-titre").textContent = N.titre;
    $("jeu-regle").textContent = N.regle || "";
    $("jeu-regle").hidden = !N.regle;
    $("jeu-consigne").textContent = N.consigne || "";
    effacerRetour();
    etat = { erreurs: 0, indice: false };
    nettoyerGlisser();
    if (N.defi) jouerDefi(N);
    else { nouvelleScene(N, N.systeme); etape(0); }
    $("ecran-jeu").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function etape(i) {
    const N = niveau, E = N.etapes[i], n = N.etapes.length;
    const consigne = E.texte || (CONSIGNES[E.action] ? CONSIGNES[E.action](E) : "");
    $("jeu-consigne").textContent = n > 1 ? "Étape " + (i + 1) + " sur " + n + " : " + consigne : (N.consigne || consigne);
    const geste = GESTES[E.action];
    // Si une étape « calcul » vient après, la valeur calculée ne doit pas être donnée avant
    S.calculApres = N.etapes.slice(i + 1).some(x => x.action === "calcul");
    if (!geste) { suite(); return; }
    geste(E, (juste, message, indice) => {
      if (indice) etat.indice = true;
      if (!juste) etat.erreurs++;
      if (n === 1 && !juste) {
        // Niveau d'un seul geste : on recommence jusqu'à trouver
        retour(message, "mal");
        boutons([["Réessayer", () => { effacerRetour(); nouvelleScene(N, N.systeme); etape(0); }]]);
        return;
      }
      if (i + 1 < n) {
        retour(message, juste ? "bien" : "mal");
        boutons([["Continuer →", () => { effacerRetour(); if (S.zoom && N.etapes[i + 1].quoi !== "image-retine") { S.zoom = false; regler(N.vue ? { ...N.vue } : cadrageAuto(S.sys)); } etape(i + 1); }]]);
      } else suite(message);
    });
    function suite(message) { terminer((message || "") + (N.conclusion ? "<p>" + echapper(N.conclusion) + "</p>" : "")); }
  }

  function etoilesDuNiveau() { return Math.max(1, 3 - etat.erreurs - (etat.indice ? 1 : 0)); }
  function terminer(message) {
    const etoiles = etoilesDuNiveau();
    noterEtoiles(niveau.id, etoiles);
    const liste = niveauxDe(niveau.epreuve), i = liste.indexOf(niveau);
    const suivant = liste[i + 1] && debloque(liste[i + 1]) ? liste[i + 1] : null;
    const lien = niveau.theme ? '<p><a href="qcm.html#' + niveau.epreuve + "/" + encodeURIComponent(niveau.theme) + '">S\'entraîner au QCM : ' + echapper(niveau.theme) + " →</a></p>" : "";
    retour(message + lien + `<p class="etoiles-gagnees" aria-label="${etoiles} étoile${etoiles > 1 ? "s" : ""} sur 3">${"★".repeat(etoiles)}${"☆".repeat(3 - etoiles)}</p>`, "bien", etoiles === 3 ? "clin-doeil" : "bouche-ouverte");
    boutons([
      suivant ? ["Niveau suivant →", () => ouvrir(suivant)] : ["Retour aux niveaux", afficherNiveaux],
      ["Rejouer", () => ouvrir(niveau), "secondaire"]
    ]);
  }

  // ---------------- Défi : une lentille, positions au hasard ----------------
  function situationAuHasard(precedente) {
    const hasard = (a, b) => a + Math.random() * (b - a);
    for (let essai = 0; essai < 200; essai++) {
      const cas = ["reelle", "reelle", "loupe", "divergente"][Math.floor(Math.random() * 4)];
      if (precedente && cas === precedente && Math.random() < 0.6) continue;
      let f, OA;
      if (cas === "divergente") { f = -[80, 100, 120][Math.floor(Math.random() * 3)]; OA = -hasard(60, 200); }
      else { f = [60, 70, 80, 90, 100][Math.floor(Math.random() * 5)]; OA = cas === "loupe" ? -hasard(0.4, 0.75) * f : -hasard(1.3, 2.8) * f; }
      const x = Math.round(OA), h = Math.round(hasard(35, 70));
      const sys = Optique.preparer({ objet: { x, h }, elements: [{ type: "lentille", nom: "L", x: 0, f }] });
      const im = Optique.chaine(sys)[1];
      if (x < -220 || im.infini || im.x < -215 || im.x > 215 || Math.abs(im.h) > 125) continue;
      return { cas, systeme: { objet: { x, h }, elements: [{ type: "lentille", nom: "L", x: 0, f }] } };
    }
    return { cas: "reelle", systeme: { objet: { x: -200, h: 60 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 80 }] } };
  }
  function jouerDefi(N) {
    const manches = N.defi.manches || 5, reussir = N.defi.reussir || manches - 1;
    let manche = 0, reussies = 0, precedente = null;
    const vue = { xmin: -240, xmax: 240, hmax: 150, carreauX: 20, carreauY: 20 };
    const suivante = () => {
      if (manche === manches) {
        if (reussies >= reussir) {
          etat.erreurs = manches - reussies;
          terminer(`<p><b>Défi réussi : ${reussies} / ${manches} !</b> Tu sais construire l'image d'une lentille mince sans aide.</p>`);
          if (reussies === manches && typeof montrerCompagnon === "function") montrerCompagnon(document.querySelector(".jeu-compagnon"), "choque");
        } else {
          retour(`<p><b>${reussies} / ${manches}.</b> Il en faut ${reussir} pour réussir le défi. Rejoue les niveaux précédents si besoin, puis retente ta chance !</p>`, "mal", "pensif");
          boutons([["Retenter le défi", () => ouvrir(niveau)], ["Retour aux niveaux", afficherNiveaux, "secondaire"]]);
        }
        return;
      }
      manche++;
      const s = situationAuHasard(precedente);
      precedente = s.cas;
      effacerRetour();
      nouvelleScene({ vue }, s.systeme);
      $("jeu-consigne").textContent = "Manche " + manche + " sur " + manches + " : place l'image B' de l'objet AB.";
      const E = { action: "placer", quoi: "image", apres: "L", tolerance: 0.7 };
      gestePlacer(E, juste => {
        ["parallele", "O"].forEach(par => tracerRayon(Optique.versEspaceObjet(S.sys, Optique.rayonType(S.sys, 0, par)), xDepart(), W, "", S.ch[1].x < 0));
        if (juste) reussies++;
        retour(juste ? "<p><b>Exact !</b> " + reussies + " / " + manche + "</p>" : "<p><b>Raté.</b> L'image était là où se croisent les rayons.</p>", juste ? "bien" : "mal");
        boutons([[manche < manches ? "Manche suivante →" : "Voir mon résultat", suivante]]);
      });
    };
    suivante();
  }

  // ---------------- Les onglets (épreuves) et la carte des niveaux ----------------
  let atelier = "U42";
  function choisirAtelier(code, sansAfficher) {
    atelier = code;
    document.querySelectorAll(".atelier").forEach(b => {
      const actif = b.dataset.epreuve === code;
      b.classList.toggle("actif", actif);
      b.setAttribute("aria-selected", actif);
    });
    if (!sansAfficher) afficherNiveaux();
  }
  function construireOnglets() {
    const zone = document.querySelector(".ateliers");
    zone.innerHTML = "";
    ATELIERS.forEach(a => {
      const n = niveauxDe(a.code).length;
      const b = document.createElement("button");
      b.className = "atelier";
      b.type = "button";
      b.setAttribute("role", "tab");
      b.dataset.epreuve = a.code;
      b.disabled = n === 0;
      b.textContent = a.nom + (n ? "" : " · bientôt");
      b.onclick = () => { history.replaceState(null, "", "#" + a.code); choisirAtelier(a.code); };
      zone.appendChild(b);
    });
  }
  function afficherNiveaux() {
    nettoyerGlisser();
    $("ecran-jeu").hidden = true;
    $("ecran-niveaux").hidden = false;
    $("ecran-niveaux").dataset.epreuve = atelier;
    const etoiles = lireEtoiles(), conteneur = $("niveaux");
    conteneur.innerHTML = "";
    const liste = niveauxDe(atelier);
    const chapitres = [...new Set(liste.map(N => N.chapitre || ""))];
    let total = 0;
    chapitres.forEach(ch => {
      if (chapitres.length > 1 && ch) {
        const h = document.createElement("h3");
        h.className = "chapitre";
        h.textContent = ch;
        conteneur.appendChild(h);
      }
      const ol = document.createElement("ol");
      ol.className = "niveaux";
      liste.filter(N => (N.chapitre || "") === ch).forEach(N => {
        const n = liste.indexOf(N) + 1, e = etoiles[N.id] || 0, ouvert = debloque(N);
        total += e;
        const li = document.createElement("li");
        const b = document.createElement("button");
        b.type = "button";
        b.className = "niveau" + (e ? " fait" : "") + (ouvert ? "" : " ferme") + (N.defi ? " defi" : "");
        b.disabled = !ouvert;
        b.innerHTML = '<span class="niveau-num"></span><span class="niveau-titre"></span><span class="niveau-etoiles"></span>';
        b.querySelector(".niveau-num").textContent = ouvert ? n : "";
        b.querySelector(".niveau-titre").textContent = N.titre;
        b.querySelector(".niveau-etoiles").textContent = e ? "★".repeat(e) + "☆".repeat(3 - e) : (ouvert ? "À faire" : "");
        b.setAttribute("aria-label", "Niveau " + n + " : " + N.titre + (ouvert ? (e ? ", " + e + " étoiles sur 3" : ", à faire") : ", verrouillé"));
        b.onclick = () => ouvrir(N);
        li.appendChild(b);
        ol.appendChild(li);
      });
      conteneur.appendChild(ol);
    });
    $("total-etoiles").textContent = "★ " + total + " / " + liste.length * 3;
  }

  $("retour-niveaux").onclick = () => { history.replaceState(null, "", "#" + atelier); afficherNiveaux(); };
  construireOnglets();
  // Adresses : #U42-5 (un niveau), #U43 (un onglet), #5 (ancienne adresse = U42-5)
  const h = decodeURIComponent(location.hash.slice(1));
  const id = /^\d+$/.test(h) ? "U42-" + h : h;
  const demande = NIVEAUX.find(N => N.id === id);
  if (ATELIERS.some(a => a.code === h) && niveauxDe(h).length) choisirAtelier(h);
  else if (demande && debloque(demande)) { choisirAtelier(demande.epreuve); ouvrir(demande); }
  else choisirAtelier(demande ? demande.epreuve : "U42");

  // Pour les tests : on expose de quoi vérifier (aucun effet sur la page)
  window.__traces = { NIVEAUX, Optique, scene: () => S, ouvrir: id2 => ouvrir(NIVEAUX.find(N => N.id === id2)) };
})();
