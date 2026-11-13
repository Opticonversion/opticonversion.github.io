// =====================================================================
// ATELIER DES TRACÉS · le jeu (affichage et gestes de l'élève)
// ---------------------------------------------------------------------
// Les niveaux sont dans traces-U42.js, traces-U43.js, traces-U5.js (TRACES).
// Ils décrivent seulement le montage et les gestes : optique.js calcule
// toujours la bonne réponse (relation de conjugaison, lentille après lentille).
// Format : notes/coordination/etape2-formats.md (partie a).
// Six gestes : rayon (choisir un trajet), placer (construire puis poser un point, sans outil à choisir),
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
  // Étiquette posée près de l'axe (A, F, F', O, A₂…). Si deux points coïncident (A sur F dans la loupe, A₂ sur F'
  // dans un doublet), la seconde étiquette se décale d'une ligne au lieu de recouvrir la première.
  // Le registre S.etiquettes est vidé à chaque nouveau dessin.
  function etiquetteAxe(x, y, contenu, classe, parent) {
    const posees = S.etiquettes || (S.etiquettes = []);
    // Sur téléphone les étiquettes sont écrites plus gros (voir style.css, max-width: 520px)
    const gros = typeof matchMedia === "function" && matchMedia("(max-width: 520px)").matches;
    const petit = /petit/.test(classe || ""), repere = /repere/.test(classe || "");
    const corps = gros ? (petit ? 18 : repere ? 18 : 21) : (petit ? 11 : repere ? 14 : 17);   // taille des lettres
    const large = corps * 0.62 * String(contenu).length + 4;                // largeur approximative du texte
    const centre = /centre/.test(classe || "") ? x : x + large / 2;
    const ligne = gros ? 19 : 15;
    const pas = y > H / 2 ? ligne : -ligne;                                 // sous l'axe : vers le bas ; au-dessus : vers le haut
    let yy = y;
    for (let n = 0; n < 4 && posees.some(p => Math.abs(p.centre - centre) < (p.large + large) / 2 && Math.abs(p.y - yy) < ligne - 2); n++) yy += pas;
    posees.push({ centre, y: yy, large });
    return texte(x, yy, contenu, classe, parent);
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
    S = { N, sys, ch: Optique.chaine(sys), revele: [], zoom: false, entree: ouverture ? 1 : 0, vision: !!(sys.oeil && sys.oeil.ametropie !== undefined) };
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
    S.etiquettes = [];
    S.lignes = [];
    const defs = el("defs", {});
    // Pointes de flèche : une par couleur (objet, image, axe), effilées comme sur un schéma d'optique
    [["pointe", "t-pointe"], ["pointe-image", "t-pointe image"], ["pointe-axe", "t-pointe axe"]].forEach(([id, classe]) => {
      const m = el("marker", { id, viewBox: "0 0 10 10", refX: 8.6, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto-start-reverse" }, defs);
      el("path", { d: "M0.6 1 L9.6 5 L0.6 9 L2.8 5 Z", class: classe }, m);
    });
    const clip = el("clipPath", { id: "t-cadre" }, defs);
    el("rect", { x: 0, y: 0, width: W, height: H }, clip);
    if (S.zoom) { dessinerOeilGrossi(); return; }
    const v = S.vue;
    // Quadrillage (1 carreau = carreauX × carreauY mm) : un trait plus marqué tous les 5 carreaux, comme un papier millimétré
    const pasX = v.carreauX * S.sx, pasY = v.carreauY * S.sy;
    const fond = el("g", { class: "t-quadrillage" });
    const nx0 = Math.ceil(v.xmin / v.carreauX - 1e-9), nx1 = Math.floor(v.xmax / v.carreauX + 1e-9), ny = Math.floor(v.hmax / v.carreauY + 1e-9);
    if (pasX > 4) for (let n = nx0; n <= nx1; n++) el("line", { x1: X(n * v.carreauX), y1: 0, x2: X(n * v.carreauX), y2: H, class: "t-grille" + (n % 5 === 0 ? " fort" : "") }, fond);
    if (pasY > 4) for (let n = -ny; n <= ny; n++) if (n) el("line", { x1: 0, y1: Y(n * v.carreauY), x2: W, y2: Y(n * v.carreauY), class: "t-grille" + (n % 5 === 0 ? " fort" : "") }, fond);
    // Axe optique : fléché dans le sens de la lumière, gradué à chaque carreau (un banc d'optique)
    el("line", { x1: 0, y1: H / 2, x2: W - 4, y2: H / 2, class: "t-axe", "marker-end": "url(#pointe-axe)" });
    if (pasX > 7 && !S.vision) for (let n = nx0; n <= nx1; n++) {
      const x = X(n * v.carreauX), d = n % 5 === 0 ? 4 : 2.4;
      if (x > 3 && x < W - 12) el("line", { x1: x, y1: H / 2 - d, x2: x, y2: H / 2 + d, class: "t-graduation" });
    }
    // Lentilles : le symbole du BTS (pointes vers l'extérieur = convergente) sur une silhouette de verre très légère
    S.sys.lentilles.forEach((L, k) => {
      const conv = L.f > 0;
      const demi = S.vision ? 46 : L.rayon ? Math.min(H / 2 - 6, L.rayon * S.sy) : H / 2 - 28;
      const x = X(L.x) - (S.vision && Math.abs(L.x - S.sys.oeil.x) < 40 ? 14 : 0), y1 = H / 2 - demi, y2 = H / 2 + demi;
      const w = Math.max(4, Math.min(12, demi * 0.13));
      el("path", { class: "t-verre", d: conv
        ? `M${x} ${y1} Q${x + 2 * w} ${H / 2} ${x} ${y2} Q${x - 2 * w} ${H / 2} ${x} ${y1} Z`
        : `M${x - w} ${y1} L${x + w} ${y1} Q${x + 0.25 * w} ${H / 2} ${x + w} ${y2} L${x - w} ${y2} Q${x - 0.25 * w} ${H / 2} ${x - w} ${y1} Z` });
      el("line", { x1: x, y1, x2: x, y2, class: "t-lentille" });
      const pointe = (y, haut) => {
        const s = (conv ? 1 : -1) * (haut ? -1 : 1);
        el("path", { d: `M${x - 7} ${y - s * 8} L${x} ${y} L${x + 7} ${y - s * 8}`, class: "t-lentille", fill: "none" });
      };
      pointe(conv ? y1 : y1 + 10, true); pointe(conv ? y2 : y2 - 10, false);
      if (S.sys.lentilles.length > 1 || L.nom !== "L") texte(x, Math.max(14, y1 - 7), L.nom, "centre repere");
      if (!S.vision) [[L.x - L.f, nomFoyer(k, false)], [L.x + L.f, nomFoyer(k, true)]].forEach(([xf, nom]) => {
        if (xf < v.xmin || xf > v.xmax) return;
        el("line", { x1: X(xf), y1: H / 2 - 5, x2: X(xf), y2: H / 2 + 5, class: "t-foyer" });
        el("circle", { cx: X(xf), cy: H / 2, r: 2.6, class: "t-point" });
        etiquetteAxe(X(xf), H / 2 + 20, nom, "centre repere");
      });
      if (S.sys.lentilles.length === 1 && !S.vision) { el("circle", { cx: x, cy: H / 2, r: 2.6, class: "t-point" }); etiquetteAxe(x - 11, H / 2 + 20, "O", "centre point"); }
    });
    // Diaphragmes (hors montures) : deux traits épais qui partent du bord de l'ouverture
    S.sys.diaphragmes.filter(d => !d.monture).forEach(d => {
      const x = X(d.x), r = d.rayon * S.sy;
      el("line", { x1: x, y1: H / 2 - r, x2: x, y2: Math.max(2, H / 2 - r - 22), class: "t-diaphragme" });
      el("line", { x1: x, y1: H / 2 + r, x2: x, y2: Math.min(H - 2, H / 2 + r + 22), class: "t-diaphragme" });
      texte(x, Math.max(14, H / 2 - r - 28), d.nom, "centre repere");
    });
    if (S.vision) dessinerOeilDeLoin();
    else if (S.sys.oeil) {
      // Œil observateur : un petit œil dessiné à sa place
      const xo = X(S.sys.oeil.x);
      el("path", { d: `M${xo} ${H / 2 - 12} Q${xo + 26} ${H / 2 - 14} ${xo + 26} ${H / 2} Q${xo + 26} ${H / 2 + 14} ${xo} ${H / 2 + 12}`, class: "t-oeil" });
      texte(xo + 12, H / 2 - 18, S.sys.oeil.nom || "Œil", "centre repere");
    }
    // Objet AB (ou direction de B à l'infini)
    const o = S.sys.objet;
    if (o.infini) {
      const x0 = 8, y0 = H / 2 - 44;
      const dx = 64, dy = -o.s * dx * S.sy / S.sx;
      el("line", { x1: x0, y1: y0, x2: x0 + dx, y2: y0 + dy, class: "t-objet fin", "marker-end": "url(#pointe)" });
      texte(x0, y0 - 11, "B à l'infini, α = " + nb(o.angle, 1) + "°", "petit");
    } else if (o.x !== undefined) {
      el("line", { x1: X(o.x), y1: H / 2, x2: X(o.x), y2: Y(o.h), class: "t-objet", "marker-end": "url(#pointe)" });
      etiquetteAxe(X(o.x), H / 2 + 20, "A", "centre point");
      texte(X(o.x) - 9, Y(o.h) + (o.h >= 0 ? 3 : 12), "B", "droite point");
    }
    // Ce qui a déjà été trouvé
    const g = el("g", { "clip-path": "url(#t-cadre)" });
    S.revele.forEach(r => dessinerRevele(r, g));
    legende();
  }
  // Sous le dessin : l'échelle du quadrillage (un carreau = tant de mm) et le sens de la lumière.
  // Écrite hors du dessin : rien ne la recouvre, et elle reste lisible sur téléphone.
  function legende() {
    const zone = $("trace-legende");
    if (!zone) return;
    const v = S.vue, court = n => String(Math.round(n * 100) / 100).replace(".", ",");
    const echelle = S.zoom ? "L'œil grossi, schéma hors échelle" : S.vision ? "Schéma hors échelle"
      : v.carreauX === v.carreauY ? "1 carreau = " + court(v.carreauX) + " mm"
      : "1 carreau = " + court(v.carreauX) + " mm en largeur, " + court(v.carreauY) + " mm en hauteur";
    zone.innerHTML = '<span class="legende-echelle"><svg viewBox="0 0 22 12" aria-hidden="true"><path d="M2 3v6h18V3"/></svg><span></span></span>' +
      '<span class="legende-sens">Sens de la lumière<svg viewBox="0 0 30 12" aria-hidden="true"><path d="M2 6h24M21 2l5 4-5 4"/></svg></span>';
    zone.querySelector(".legende-echelle span").textContent = echelle;
    if (S.zoom || S.vision) zone.querySelector(".legende-echelle svg").remove();      // pas d'échelle : pas de cote
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
    const g = el("g", { "clip-path": "url(#t-cadre)" });
    S.revele.filter(r => r.oeil).forEach(r => dessinerRevele(r, g));
    legende();
  }

  // Petite flèche de sens au milieu de la partie visible d'un morceau de rayon (la lumière va de gauche à droite)
  function flecheDeSens(x1, y1, x2, y2, parent, rang) {
    // Partie du segment qui reste dans le cadre
    let t0 = 0, t1 = 1;
    const borne = (p, q) => { if (Math.abs(p) < 1e-9) return q >= 0; const r = q / p; if (p < 0) { if (r > t1) return false; if (r > t0) t0 = r; } else { if (r < t0) return false; if (r < t1) t1 = r; } return true; };
    const dx = x2 - x1, dy = y2 - y1;
    if (!(borne(-dx, x1) && borne(dx, W - x1) && borne(-dy, y1) && borne(dy, H - y1))) return;
    if (Math.hypot(dx, dy) * (t1 - t0) < 64) return;                       // trop court : pas de flèche
    const t = t0 + (t1 - t0) * 0.55, a = Math.atan2(dy, dx) * 180 / Math.PI;
    el("path", { d: "M-5.5 -3.6 L2.5 0 L-5.5 3.6 L-3.6 0 Z", class: "t-sens", style: "--n:" + (rang || 0), transform: `translate(${x1 + dx * t} ${y1 + dy * t}) rotate(${a})` }, parent);
  }
  // Un rayon donné dans l'espace objet, tracé de xDebut à xFin, et prolongé en pointillés si demandé :
  // prolonger = "arriere" (ou true) : son dernier morceau vers l'arrière (image virtuelle) ;
  // prolonger = "avant" : au-delà de xFin, comme si la lentille suivante n'existait pas (l'image se forme
  // derrière elle : c'est un objet virtuel pour cette lentille, lunette de Galilée, doublets).
  function tracerRayon(r0, xDebut, xFin, classe, prolonger, g) {
    const p = Optique.parcours(S.sys, r0, xDebut, xFin);
    const grp = el("g", { class: "t-rayon " + (classe || "") }, g);
    // Chaque morceau est aussi rangé (en mm) dans S.lignes : le geste « placer » y cherche les croisements
    const lignes = S.lignes || (S.lignes = []), rayon = "m" + (S.nbRayons = (S.nbRayons || 0) + 1);
    // Le rayon vient d'être trouvé, ou le niveau s'ouvre : il se trace sous les yeux de l'élève
    if (S.anim || S.entree) { grp.classList.add("t-se-trace"); if (S.entree) grp.style.setProperty("--retard", (300 + 160 * S.entree++) + "ms"); }
    let rang = 0;
    const morceau = (a, b, pointille) => {
      // pathLength = 1 sert à tracer le trait plein sous les yeux de l'élève ; jamais sur un pointillé (il deviendrait plein)
      const l = el("line", { x1: X(a.x), y1: Y(a.y), x2: X(b.x), y2: Y(b.y), style: "--n:" + rang, ...(pointille ? { class: "t-virtuel" } : { pathLength: 1 }) }, grp);
      if (!pointille) { flecheDeSens(X(a.x), Y(a.y), X(b.x), Y(b.y), grp, rang); rang++; }
      if (!S.zoom) lignes.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, pointille: !!pointille, rayon });
      return l;
    };
    for (let i = 0; i + 1 < p.points.length; i++) morceau(p.points[i], p.points[i + 1]);
    if (prolonger === "avant") {
      const b = p.points[p.points.length - 1], s = p.pentes[p.pentes.length - 1];
      if (S.vue.xmax > b.x) morceau(b, { x: S.vue.xmax, y: b.y + s * (S.vue.xmax - b.x) }, true);
    } else if (prolonger) {
      // Prolongement vers l'arrière du dernier morceau (image virtuelle)
      const a = p.points[p.points.length - 2], s = p.pentes[p.pentes.length - 1];
      morceau(a, { x: S.vue.xmin, y: a.y + s * (S.vue.xmin - a.x) }, true);
    }
    return grp;
  }
  function dessinerImageK(k, g) {
    const im = S.ch[k + 1];
    if (!im || im.infini) return;
    const L = S.sys.lentilles[k];
    const virtuelle = im.x < L.x;
    // S.anim : "net" = l'élève a trouvé, l'image se met au point (floue puis nette) ; autre valeur = elle apparaît simplement
    const grp = el("g", { class: "t-image" + (virtuelle ? " virtuelle" : "") + (S.anim === "net" ? " t-fait-net" : S.anim ? " t-vient" : "") }, g);
    el("line", { x1: X(im.x), y1: H / 2, x2: X(im.x), y2: Y(im.h), "marker-end": "url(#pointe-image)" }, grp);
    // Trouvée : un anneau se resserre sur B', comme une mise au point qui accroche
    if (S.anim === "net") el("circle", { cx: X(im.x), cy: Y(im.h), r: 15, class: "t-anneau-net" }, g);
    texte(X(im.x) + 8, Y(im.h) + (im.h < 0 ? 15 : -5), nomImage(k, "B"), "or point", grp);
    etiquetteAxe(X(im.x) + 7, H / 2 + (im.h < 0 ? -8 : 20), nomImage(k, "A"), "or point", grp);
  }
  function dessinerImageDiaphragme(im, classe, g) {
    if (im.infini) return;
    const grp = el("g", { class: "t-image-diaph " + (classe || "") }, g);
    const x = X(im.x), r = im.rayon * S.sy;
    el("line", { x1: x, y1: H / 2 - r, x2: x, y2: H / 2 - r - 18 }, grp);
    el("line", { x1: x, y1: H / 2 + r, x2: x, y2: H / 2 + r + 18 }, grp);
    texte(x, Math.max(12, H / 2 - r - 24), im.nom + "′", "centre repere", grp);
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
      if (S.anim === "net") el("circle", { cx: X(r.x), cy: Y(r.y || 0), r: 15, class: "t-anneau-net" }, g);
      el("circle", { cx: X(r.x), cy: Y(r.y || 0), r: 5, class: "t-point-or" + (S.anim === "net" ? " t-fait-net" : S.anim ? " t-vient" : "") }, g);
      (r.y ? texte : etiquetteAxe)(X(r.x), Y(r.y || 0) - 10, r.nom, "centre or point", g);
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

  // ---------- 2. placer : construire, puis poser un point ----------
  // L'élève construit comme sur sa copie : il trace ses rayons (deux points : le départ, puis un point par où le
  // rayon passe), les prolonge en pointillés si besoin, puis pose le point à leur croisement. Le point s'aimante
  // aux croisements, aux points du dessin (foyers, centres, B…), au quadrillage et à l'axe : un point posé sur une
  // construction juste est exactement à la bonne place.
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
  // Croisements, dans le cadre, d'une liste de segments en mm { x1, y1, x2, y2 }
  function croisements(lignes) {
    const v = S.vue, pts = [];
    for (let i = 0; i < lignes.length; i++) for (let j = i + 1; j < lignes.length; j++) {
      const a = lignes[i], b = lignes[j];
      if (a.rayon && a.rayon === b.rayon) continue;                                            // deux morceaux du même rayon
      const ax = a.x2 - a.x1, ay = a.y2 - a.y1, bx = b.x2 - b.x1, by = b.y2 - b.y1;
      const det = ax * by - ay * bx;
      if (Math.abs(det) < 1e-9 * Math.hypot(ax, ay) * Math.hypot(bx, by)) continue;          // parallèles
      const t = ((b.x1 - a.x1) * by - (b.y1 - a.y1) * bx) / det, u = ((b.x1 - a.x1) * ay - (b.y1 - a.y1) * ax) / det;
      if (t < -1e-9 || t > 1 + 1e-9 || u < -1e-9 || u > 1 + 1e-9) continue;
      const x = a.x1 + t * ax, y = a.y1 + t * ay;
      if (x < v.xmin || x > v.xmax || Math.abs(y) > v.hmax) continue;
      if (!pts.some(p => Math.abs(p.x - x) < 1e-6 && Math.abs(p.y - y) < 1e-6)) pts.push({ x, y, type: "croisement", nom: "un croisement" });
    }
    return pts;
  }
  // Les points du dessin qu'on peut viser ou sur lesquels le point s'aimante : B, A, centres, foyers, bords des
  // ouvertures, images déjà trouvées. Rien en Vision (schéma hors échelle) ni dans l'œil grossi.
  function pointsDuDessin() {
    if (S.vision || S.zoom) return [];
    const sys = S.sys, v = S.vue, pts = [];
    const plus = (x, y, nom) => { if (x >= v.xmin && x <= v.xmax && Math.abs(y) <= v.hmax) pts.push({ x, y, type: "point", nom }); };
    const o = sys.objet;
    if (!o.infini && o.x !== undefined) { plus(o.x, o.h, "B"); plus(o.x, 0, "A"); }
    sys.lentilles.forEach((L, k) => {
      plus(L.x, 0, sys.lentilles.length > 1 ? "le centre de " + L.nom : "O");
      plus(L.x - L.f, 0, nomFoyer(k, false));
      plus(L.x + L.f, 0, nomFoyer(k, true));
      if (L.rayon) [1, -1].forEach(sg => plus(L.x, sg * L.rayon, "le bord de " + L.nom));
    });
    sys.diaphragmes.filter(d => !d.monture).forEach(d => [1, -1].forEach(sg => plus(d.x, sg * d.rayon, "le bord de " + d.nom)));
    S.revele.forEach(r => {
      if (r.type === "image") { const im = S.ch[r.k + 1]; if (im && !im.infini) { plus(im.x, im.h, nomImage(r.k, "B")); plus(im.x, 0, nomImage(r.k, "A")); } }
      else if (r.type === "point" && !r.oeil) plus(r.x, r.y || 0, r.nom);
      else if ((r.type === "imageDiaphragme" || r.type === "pupille" || r.type === "lucarne") && r.im && !r.im.infini) [1, -1].forEach(sg => plus(r.im.x, sg * r.im.rayon, "le bord de " + r.im.nom + "′"));
    });
    return pts;
  }

  const TOL_PLACER = 0.35;   // tolérance la plus large acceptée pour un point posé (en carreaux), hors Vision
  function gestePlacer(E, fini) {
    const c = cible(E);
    if (c.oeil) { S.zoom = true; regler(cadrageOeil(S.sys)); }
    dessiner();
    const sys = S.sys, v = S.vue;
    // Rayons d'aide (pour une image) : tracés jusqu'à la lentille suivante, sauf si l'élève doit tout construire
    const aides = [];
    if (E.quoi === "image" && E.rayons) E.rayons.forEach(par => {
      const r = Optique.rayonType(sys, c.k, par);
      if (r) aides.push(Optique.versEspaceObjet(sys, r));
    });
    if (c.oeil) c.revele.unshift(dessinerFaisceauOeil());
    const fin = xArret(c.k || 0);
    let aidesVisibles = !E.construire;
    if (aidesVisibles) aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "", false));
    const virtuelle = E.quoi === "image" && c.x < sys.lentilles[c.k].x;
    // L'image se forme derrière la lentille suivante (elle lui sert d'objet virtuel) : les rayons d'aide
    // s'arrêtent avant de se croiser, il faut les prolonger vers l'avant.
    const suivante = E.quoi === "image" ? sys.lentilles[c.k + 1] : null;
    const derriere = !!suivante && !virtuelle && c.x > suivante.x + 1e-6;
    const sens = virtuelle ? "arriere" : derriere ? "avant" : false;
    // Outils de construction : pas en Vision (schéma hors échelle) ni dans l'œil grossi
    const outils = !S.vision && !c.oeil;
    const tolNiveau = E.tolerance !== undefined ? E.tolerance : 0.5;
    const tol = outils ? Math.min(tolNiveau, TOL_PLACER) : tolNiveau;
    const pasX = v.carreauX * S.sx, pasY = v.carreauY * S.sy;
    // L'aimant du quadrillage reste assez court pour ne jamais faire sortir de la tolérance un point bien placé
    const rGrille = Math.min(4, 0.6 * tol * Math.min(pasX, pasY));
    const tactile = typeof matchMedia === "function" && matchMedia("(pointer: coarse)").matches;

    // ----- Ce que l'élève construit -----
    const traits = [];        // { p1, segs: [segments en mm], arret: { x, y, lentille } ou null }
    const prolonges = [];     // droites en pointillés ajoutées avec « Prolonger »
    const actes = [];         // pour « Effacer » : le dernier trait ou le dernier prolongement
    let aimants = [], depart = null, survol = null, survolRayon = null, glisseDe = null;
    const gEleve = el("g", { class: "t-eleve", "clip-path": "url(#t-cadre)" });
    const gAccroches = el("g", { class: "t-accroches", "clip-path": "url(#t-cadre)" });
    const viseur = el("g", { class: "t-viseur", "clip-path": "url(#t-cadre)", visibility: "hidden" });
    const viseurH = el("line", { x1: 0, x2: W, y1: 0, y2: 0 }, viseur), viseurV = el("line", { y1: 0, y2: H, x1: 0, x2: 0 }, viseur);
    const apercu = el("line", { class: "t-apercu", visibility: "hidden", x1: 0, y1: 0, x2: 0, y2: 0 });
    // Tous les traits du dessin : ceux du moteur (rayons d'aide, rayons des étapes d'avant) et ceux de l'élève
    const toutes = () => (S.lignes || []).concat(...traits.map(t => t.segs), prolonges);
    // Repères qui apparaissent une fois le départ choisi :
    // - les points à la même hauteur, sur les lentilles et au bord droit (rayon parallèle à l'axe) ;
    // - si l'objet est à l'infini, les points dans la direction de B (rayons incidents parallèles entre eux).
    function guides(P) {
      if (!P) return [];
      const g = [], dansCadre = y => Math.abs(y) <= v.hmax;
      const lentilles = sys.lentilles.filter(L => Math.abs(L.x - P.x) > 1e-6 && L.x >= v.xmin && L.x <= v.xmax);
      if (Math.abs(P.y) > 1e-9) {
        lentilles.forEach(L => g.push({ x: L.x, y: P.y, type: "guide", nom: "la même hauteur, sur " + L.nom }));
        if (P.x < v.xmax - 1e-6) g.push({ x: v.xmax, y: P.y, type: "guide", nom: "la même hauteur, à droite", bord: "droit" });
      }
      if (sys.objet.infini && Math.abs(sys.objet.s) > 1e-9) {
        const y = x => P.y + sys.objet.s * (x - P.x);
        const xg = v.xmin + 9 / S.sx;                                    // un peu à l'intérieur du cadre, pour rester visible
        if (P.x > xg + 1e-6 && dansCadre(y(xg))) g.push({ x: xg, y: y(xg), type: "guide", nom: "la direction de B, à gauche" });
        lentilles.filter(L => L.x > P.x && dansCadre(y(L.x))).forEach(L => g.push({ x: L.x, y: y(L.x), type: "guide", nom: "la direction de B, sur " + L.nom }));
      }
      return g;
    }
    const ecran = a => ({ x: a.bord === "droit" ? W - 9 : X(a.x), y: Y(a.y) });      // où le repère est dessiné
    function redessiner() {
      gEleve.innerHTML = ""; gAccroches.innerHTML = "";
      const ligne = s => {
        el("line", { x1: X(s.x1), y1: Y(s.y1), x2: X(s.x2), y2: Y(s.y2), class: "t-trait-eleve" + (s.pointille ? " t-virtuel" : "") }, gEleve);
        if (!s.pointille) flecheDeSens(X(s.x1), Y(s.y1), X(s.x2), Y(s.y2), gEleve);
      };
      traits.forEach(t => t.segs.forEach(ligne));
      prolonges.forEach(ligne);
      aimants = pointsDuDessin().concat(traits.filter(t => t.arret).map(t => ({ x: t.arret.x, y: t.arret.y, type: "lentille", nom: "l'arrivée sur " + t.arret.lentille })));
      if (outils) croisements(toutes()).forEach(k => { if (!aimants.some(a => meme6(a, k))) aimants.push(k); });
      const rond = (a, r, classe) => { const p = ecran(a); return el("circle", { cx: p.x, cy: p.y, r, class: "t-accroche " + classe }, gAccroches); };
      const origine = glisseDe || depart;
      gAccroches.classList.toggle("en-trace", !!origine);
      // Rayon survolé à la souris : un clic le prolongera
      if (survolRayon) el("line", { x1: X(survolRayon.x1), y1: Y(survolRayon.y1), x2: X(survolRayon.x2), y2: Y(survolRayon.y2), class: "t-survol-rayon" }, gAccroches);
      aimants.forEach(a => {
        if (a.type === "croisement") rond(a, 4, "croisement");
        else if (a.type === "lentille") rond(a, 4, "arrivee");
        else if (outils) rond(a, 6.5, "touchable");
      });
      if (outils) guides(origine).forEach(a => rond(a, 7, "guide"));
      // Souris : le rayon qu'un clic va tracer, du départ au point survolé
      if (depart && !glisseDe && survol && !meme(depart, survol)) { const a = ecran(depart), b = ecran(survol); el("line", { x1: a.x, y1: a.y, x2: b.x, y2: b.y, class: "t-apercu" }, gAccroches); }
      if (origine) rond(origine, 10, "choisi");
      if (survol) rond(survol, 10, "survol");
      if (bEffacer) bEffacer.disabled = !actes.length && !depart;
      dire();
    }
    // Le point le plus proche d'un endroit touché : d'abord les points du dessin et les croisements, sinon le quadrillage
    function candidatPres(p, P1) {
      let best = null, db = 24;
      aimants.concat(guides(P1)).forEach(a => { const q = ecran(a), d = Math.hypot(q.x - p.x, q.y - p.y); if (d < db) { db = d; best = a; } });
      if (best || !P1) return best;
      const mm = versMm(p), gx = Math.round(mm.x / v.carreauX) * v.carreauX, gy = Math.round(mm.y / v.carreauY) * v.carreauY;
      if (gx < v.xmin || gx > v.xmax || Math.abs(gy) > v.hmax) return null;
      return Math.hypot(X(gx) - p.x, Y(gy) - p.y) < 9 ? { x: gx, y: gy, type: "grille", nom: "un point du quadrillage" } : null;
    }
    const meme = (a, b) => a && b && Math.abs(a.x - b.x) < 1e-9 && Math.abs(a.y - b.y) < 1e-9;
    const meme6 = (a, b) => Math.abs(a.x - b.x) < 1e-6 && Math.abs(a.y - b.y) < 1e-6;
    // Un rayon : il part de P1, suit la droite (P1, P2) vers la droite et s'arrête à la première lentille,
    // sauf s'il passe par son centre. Si P2 est avant P1, le morceau P2-P1 est en pointillés (« comme s'il venait de »).
    function creerTrait(P1, P2) {
      if (Math.abs(P2.x - P1.x) < 1e-9) { dire("Ces deux points sont l'un au-dessus de l'autre : un rayon avance toujours vers la droite. Choisis un autre point."); return; }
      const s = (P2.y - P1.y) / (P2.x - P1.x), segs = [];
      let arret = null;
      for (const L of sys.lentilles) {
        if (L.x <= P1.x + 1e-9 || L.x > v.xmax) continue;
        const yL = P1.y + s * (L.x - P1.x);
        if (Math.abs(yL) < 1e-7 * v.hmax) continue;                       // par le centre optique : pas dévié
        arret = { x: L.x, y: yL, lentille: L.nom };
        break;
      }
      const xf = arret ? arret.x : v.xmax;
      if (xf > P1.x + 1e-9) segs.push({ x1: P1.x, y1: P1.y, x2: xf, y2: P1.y + s * (xf - P1.x) });
      if (P2.x < P1.x) segs.push({ x1: P2.x, y1: P2.y, x2: P1.x, y2: P1.y, pointille: true });
      if (!segs.length) return;
      const rayon = "e" + (S.nbRayons = (S.nbRayons || 0) + 1);
      segs.forEach(sg => { sg.rayon = rayon; });
      const t = { p1: P1, segs, arret };
      traits.push(t); actes.push({ type: "trait", t });
      if (arret) depart = { x: arret.x, y: arret.y, type: "lentille", nom: "l'arrivée sur " + arret.lentille, suite: t };
      dire(arret ? "Ton rayon arrive sur " + arret.lentille + ". Touche le point par où il repart."
        : "Rayon tracé. Quand deux rayons se croisent, touche le croisement : " + c.nom + " s'y pose.");
    }
    // Le morceau de rayon (en trait plein) le plus proche d'un endroit touché
    function rayonPres(p, rmax) {
      let best = null, db = rmax;
      toutes().filter(s => !s.pointille).forEach(s => {
        const x1 = X(s.x1), y1 = Y(s.y1), x2 = X(s.x2), y2 = Y(s.y2), dx = x2 - x1, dy = y2 - y1;
        const t = Math.max(0, Math.min(1, ((p.x - x1) * dx + (p.y - y1) * dy) / (dx * dx + dy * dy || 1)));
        const d = Math.hypot(x1 + t * dx - p.x, y1 + t * dy - p.y);
        if (d < db) { db = d; best = s; }
      });
      return best;
    }
    // Un rayon touché est prolongé en pointillés, des deux côtés
    function prolonger(seg) {
      const m = (seg.y2 - seg.y1) / (seg.x2 - seg.x1);
      const d = { x1: v.xmin, y1: seg.y1 + m * (v.xmin - seg.x1), x2: v.xmax, y2: seg.y1 + m * (v.xmax - seg.x1), pointille: true, rayon: seg.rayon };
      if (prolonges.some(q => Math.abs(q.y1 - d.y1) < 1e-6 && Math.abs(q.y2 - d.y2) < 1e-6 && q.x1 === d.x1)) { dire("Ce rayon est déjà prolongé."); return; }
      prolonges.push(d); actes.push({ type: "prolonge", d });
      dire("Rayon prolongé en pointillés. Un croisement de pointillés donne une image virtuelle (ou un objet virtuel).");
    }
    // Le plan focal d'un foyer (là où se forme l'image d'un objet à l'infini)
    function planFocal(foyer) {
      const d = { x1: foyer.x, y1: -v.hmax, x2: foyer.x, y2: v.hmax, pointille: true };
      prolonges.push(d); actes.push({ type: "prolonge", d });
      dire("Plan focal de " + foyer.nom + " tracé en pointillés.");
    }
    function effacer() {
      if (fait) return;
      if (depart) depart = null;
      else {
        const a = actes.pop();
        if (!a) return;
        if (a.type === "trait") traits.splice(traits.indexOf(a.t), 1); else prolonges.splice(prolonges.indexOf(a.d), 1);
      }
      message = "";
      redessiner();
    }

    // ----- Le point à poser -----
    nettoyerGlisser();
    svg.style.touchAction = "none";
    const g = el("g", { class: "t-cible" });
    // Un réticule, comme dans un viseur : anneau fin, quatre traits, un point au centre. La zone à attraper est plus large.
    el("circle", { r: 24, class: "t-cible-zone" }, g);
    el("circle", { r: 13, class: "t-cible-anneau" }, g);
    el("path", { d: "M0 -19V-9M0 9V19M-19 0H-9M9 0H19", class: "t-cible-traits" }, g);
    el("circle", { r: 3.6, class: "t-cible-point" }, g);
    const etiquette = texte(16, -15, c.nom + " ?", "or point", g);
    let posMm = { x: 0, y: 0 }, sur = "", message = "", pose = false;
    // Aimant : croisements et points du dessin d'abord, puis quadrillage, puis axe ; sinon le point reste libre
    function aimanter(p) {
      const mm = versMm(p);
      let best = null, db = 11;
      const utiles = c.axe ? aimants.filter(a => Math.abs(a.y) < 1e-9 || a.type === "croisement" || /^B/.test(a.nom)) : aimants;
      utiles.forEach(a => { const d = Math.hypot(X(a.x) - p.x, c.axe ? 0 : Y(a.y) - p.y) + (c.axe && Math.abs(a.y) > 1e-9 ? 0.01 : 0); if (d < db) { db = d; best = a; } });
      if (best) return { x: best.x, y: c.axe ? 0 : best.y, sur: (c.axe && Math.abs(best.y) > 1e-9 ? (/^un /.test(best.nom) ? "l'aplomb d'" : "l'aplomb de ") : "") + best.nom };
      const gx = Math.round(mm.x / v.carreauX) * v.carreauX, gy = Math.round(mm.y / v.carreauY) * v.carreauY;
      if (c.axe) return Math.abs(X(gx) - p.x) < rGrille ? { x: gx, y: 0, sur: "le quadrillage" } : { x: mm.x, y: 0, sur: "" };
      if (Math.hypot(X(gx) - p.x, Y(gy) - p.y) < rGrille) return { x: gx, y: gy, sur: Math.abs(gy) < 1e-9 ? "l'axe" : "le quadrillage" };
      if (Math.abs(p.y - H / 2) < 3) return { x: mm.x, y: 0, sur: "l'axe" };
      return { x: mm.x, y: mm.y, sur: "" };
    }
    function poser(p, libre) {
      const q = { x: Math.max(4, Math.min(W - 4, p.x)), y: c.axe ? H / 2 : Math.max(4, Math.min(H - 4, p.y)) };
      const a = libre ? { ...versMm(q), sur: "" } : aimanter(q);
      posMm = { x: a.x, y: c.axe ? 0 : a.y }; sur = a.sur;
      const x = X(posMm.x), y = Y(posMm.y);
      g.setAttribute("transform", `translate(${x} ${y})`);
      viseurH.setAttribute("y1", y); viseurH.setAttribute("y2", y); viseurV.setAttribute("x1", x); viseurV.setAttribute("x2", x);
      message = "";
      if (!libre || pose === null) pose = true;
      dire();
    }
    // La valeur lue pendant le geste (cachée si une étape « calcul » la demande ensuite)
    function lecture() {
      if (S.calculApres) return "";
      const d = v.carreauX >= 10 ? 0 : 1, dy = v.carreauY >= 10 ? 0 : 1;
      if (E.quoi === "image") {
        const i = sys.lentilles.length > 1 ? bas[c.k + 1] : "", p = i || "'";
        return "O" + i + "A" + p + " = " + nb(posMm.x - sys.lentilles[c.k].x, d, true) + " mm · A" + p + "B" + p + " = " + nb(posMm.y, dy, true) + " mm";
      }
      if (E.quoi === "remotum" || E.quoi === "punctum") return "H" + c.nom + " = " + nb((posMm.x - sys.oeil.x) / 10, 1, true) + " cm";
      if (E.quoi === "image-retine") return "à " + nb(posMm.x - sys.oeil.x, 2) + " mm de H";
      if (E.quoi === "image-diaphragme") return "x = " + nb(posMm.x, d, true) + " mm · rayon " + nb(Math.abs(posMm.y), dy) + " mm";
      return "x = " + nb(posMm.x, d, true) + " mm";
    }
    // ----- La ligne d'aide : ce que l'élève peut faire maintenant, et la valeur lue -----
    const aide = document.createElement("p");
    aide.className = "aide-trace";
    aide.setAttribute("role", "status");
    const span = (texteLigne, gras) => { const e = document.createElement(gras ? "b" : "span"); e.textContent = texteLigne; aide.appendChild(e); };
    let bEffacer = null;
    function dire(t) {
      if (t !== undefined) message = t;
      aide.textContent = "";
      if (message) { span(message); return; }
      if (depart) {
        span("Départ : " + depart.nom + ". Touche un point par où passe le rayon.");
        // Un foyer choisi : on peut aussi tracer son plan focal
        if (depart.type === "point" && /^F/.test(depart.nom)) {
          const foyer = depart, b = document.createElement("button");
          b.type = "button"; b.className = "lien-aide"; b.textContent = "Tracer son plan focal";
          b.onclick = () => { if (fait) return; depart = null; planFocal(foyer); redessiner(); };
          aide.append(" ", b);
        }
        return;
      }
      const val = pose ? lecture() : "";
      if (val) { span(c.nom + " : "); span(val, true); }
      if (sur) span((val ? " · " : c.nom + " est ") + "sur " + sur);
      if (!outils) {
        if (!val && !sur) span("Fais glisser " + c.nom + " : il s'aimante au quadrillage et à l'axe.");
        else if (tactile && !sur) span(" Astuce : pose ton doigt à côté du point pour le voir pendant que tu le déplaces.");
      } else if (!aimants.some(a => a.type === "croisement")) span((val || sur ? " " : "") + "Pour tracer un rayon, touche deux points du dessin. Pour le prolonger en pointillés, touche-le.");
      else if (!val && !sur) span("Amène " + c.nom + " sur le croisement des rayons : touche le croisement, ou fais glisser le réticule doré.");
    }

    // ----- Souris, doigt, clavier -----
    // Aucun outil à choisir : c'est l'endroit touché qui dit le geste.
    //   le réticule        → on le déplace (au doigt, glisser ailleurs que sur un point le déplace aussi, sans le cacher) ;
    //   un point du dessin → départ d'un rayon ; un second point : le rayon est tracé (on peut aussi glisser de l'un à l'autre) ;
    //   un croisement      → le réticule s'y pose (ou le rayon y passe, si un départ est choisi) ;
    //   un rayon           → il est prolongé en pointillés ;
    //   ailleurs           → le réticule s'y pose.
    const versSvg = e => { const pt = svg.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY; return pt.matrixTransform(svg.getScreenCTM().inverse()); };
    let appui = null, fait = false;
    function designe(p, doigt) {
      if (Math.hypot(p.x - X(posMm.x), p.y - Y(posMm.y)) < (doigt ? 36 : 20)) return { quoi: "cible" };
      if (!outils) return { quoi: "vide" };
      const cand = candidatPres(p, depart);
      if (cand) return { quoi: cand.type === "croisement" ? "croisement" : "point", cand };
      const rayon = rayonPres(p, doigt ? 18 : 12);
      return rayon ? { quoi: "rayon", rayon } : { quoi: "vide" };
    }
    // Un point touché : le départ d'un rayon, ou son second point
    function toucherPoint(cand) {
      if (!depart) { depart = cand; message = ""; }
      else if (meme(depart, cand)) { depart = null; message = ""; }                                  // retouché : on l'annule
      else if (depart.suite && meme(depart.suite.p1, cand)) { depart = cand; message = ""; }          // retour au point d'où venait le rayon : un nouveau rayon part de là
      else { const P1 = depart; depart = null; creerTrait(P1, cand); }
    }
    function saisir() { appui.deplace = true; viseur.setAttribute("visibility", "visible"); svg.classList.add("saisi"); svg.style.cursor = "grabbing"; g.classList.add("t-prise"); }
    const surAppui = e => {
      if (fait) return;
      try { svg.setPointerCapture(e.pointerId); } catch (err) {}
      const p = versSvg(e), doigt = e.pointerType !== "mouse";
      aide.setAttribute("aria-live", "off");          // pas d'annonce à chaque millimètre pendant le geste
      appui = { p0: p, doigt, bouge: false, deplace: false, pos0: { x: X(posMm.x), y: Y(posMm.y) }, ...designe(p, doigt) };
      if (appui.quoi === "cible") saisir();
      e.preventDefault();
    };
    // Souris sans appui : ce qu'un clic ferait à cet endroit s'allume (point, croisement, rayon) et le curseur change
    function survoler(p) {
      const d = designe(p, false), s = d.cand || null, r = d.quoi === "rayon" ? d.rayon : null;
      svg.style.cursor = d.quoi === "cible" ? "grab" : d.quoi === "vide" ? "" : "pointer";
      if (((s || survol) && !meme(s, survol)) || r !== survolRayon) { survol = s; survolRayon = r; redessiner(); }
    }
    const surBouge = e => {
      const p = versSvg(e);
      if (!appui) { if (!fait && e.pointerType === "mouse") survoler(p); return; }
      const trace = appui.quoi === "point" || appui.quoi === "croisement";
      if (!appui.bouge && Math.hypot(p.x - appui.p0.x, p.y - appui.p0.y) > (trace ? 14 : 4)) { appui.bouge = true; if (!trace && !appui.deplace) saisir(); }
      if (appui.deplace) {
        // Le réticule suit le déplacement du doigt (ou de la souris quand on l'a attrapé) sans sauter dessous ; sinon il suit la souris
        if (appui.bouge) poser(appui.doigt || appui.quoi === "cible" ? { x: appui.pos0.x + p.x - appui.p0.x, y: appui.pos0.y + p.y - appui.p0.y } : p);
      } else if (trace && appui.bouge) {
        // Glisser d'un point à l'autre : aperçu du rayon
        const vise = candidatPres(p, appui.cand), a = ecran(appui.cand), b = vise && !meme(vise, appui.cand) ? ecran(vise) : p;
        apercu.setAttribute("x1", a.x); apercu.setAttribute("y1", a.y); apercu.setAttribute("x2", b.x); apercu.setAttribute("y2", b.y);
        apercu.setAttribute("visibility", "visible");
        const cible2 = vise && !meme(vise, appui.cand) ? vise : null;
        if (!meme(glisseDe, appui.cand) || !meme(survol, cible2) || (survol && !cible2)) { glisseDe = appui.cand; survol = cible2; redessiner(); }
        dire("De " + appui.cand.nom + (cible2 ? " vers " + cible2.nom + "." : " vers…"));
      }
      e.preventDefault();
    };
    const surLache = e => {
      if (!appui) return;
      const a = appui, p = versSvg(e);
      appui = null;
      aide.setAttribute("aria-live", "polite");
      apercu.setAttribute("visibility", "hidden");
      viseur.setAttribute("visibility", "hidden");
      if (fait) return;
      svg.classList.remove("saisi"); svg.style.cursor = "";
      survol = null; survolRayon = null; glisseDe = null;
      const trace = a.quoi === "point" || a.quoi === "croisement";
      if (a.deplace) { /* le réticule a été déplacé (ou seulement touché) : rien d'autre */ }
      else if (trace && a.bouge) {
        const vise = candidatPres(p, a.cand);
        if (vise && !meme(vise, a.cand)) { depart = null; creerTrait(a.cand, vise); }          // glissé d'un point à un autre
        else dire("Pour tracer un rayon, glisse jusqu'à un autre point du dessin (ou touche les deux points l'un après l'autre).");
      }
      else if (a.quoi === "point" || (a.quoi === "croisement" && depart)) toucherPoint(a.cand);
      else if (a.quoi === "croisement") poser(ecran(a.cand));                                    // le réticule se pose sur le croisement
      else if (a.quoi === "rayon") prolonger(a.rayon);
      else if (depart) dire("Départ : " + depart.nom + ". Touche un point du dessin (un foyer, le centre de la lentille, un point du quadrillage…), ou retouche le départ pour l'annuler.");
      else poser(a.p0);
      redessiner();
    };
    const surAnnule = () => { appui = null; glisseDe = null; survol = null; survolRayon = null; svg.classList.remove("saisi"); svg.style.cursor = ""; apercu.setAttribute("visibility", "hidden"); viseur.setAttribute("visibility", "hidden"); };
    const surSortie = () => { if (!appui && !fait && (survol || survolRayon)) { survol = null; survolRayon = null; redessiner(); } };
    // Échap : on lâche le départ en cours. Ctrl+Z (ou Cmd+Z) : on efface le dernier tracé.
    const surTouche = e => {
      if (fait) return;
      if (e.key === "Escape" && depart) { depart = null; message = ""; redessiner(); }
      else if ((e.ctrlKey || e.metaKey) && !e.shiftKey && e.key.toLowerCase() === "z" && outils) { effacer(); e.preventDefault(); }
    };
    document.addEventListener("keydown", surTouche);
    svg.addEventListener("pointerdown", surAppui); svg.addEventListener("pointermove", surBouge);
    svg.addEventListener("pointerup", surLache); svg.addEventListener("pointercancel", surAnnule); svg.addEventListener("pointerleave", surSortie);
    nettoyerGlisser = () => {
      svg.removeEventListener("pointerdown", surAppui); svg.removeEventListener("pointermove", surBouge);
      svg.removeEventListener("pointerup", surLache); svg.removeEventListener("pointercancel", surAnnule); svg.removeEventListener("pointerleave", surSortie);
      document.removeEventListener("keydown", surTouche);
      svg.onkeydown = null; svg.style.touchAction = ""; svg.style.cursor = ""; svg.classList.remove("saisi");
      nettoyerGlisser = () => {};
    };
    // Clavier : les flèches déplacent le point (librement), Espace l'aimante au repère le plus proche, Entrée valide
    svg.tabIndex = 0;
    svg.onkeydown = e => {
      if (fait) return;
      const pas = e.shiftKey ? 20 : 2, dep = { ArrowLeft: [-pas, 0], ArrowRight: [pas, 0], ArrowUp: [0, -pas], ArrowDown: [0, pas] }[e.key];
      if (dep) { pose = null; poser({ x: X(posMm.x) + dep[0], y: Y(posMm.y) + dep[1] }, true); e.preventDefault(); }
      else if (e.key === " ") {
        let best = null, db = 60;
        aimants.forEach(a => { const d = Math.hypot(X(a.x) - X(posMm.x), c.axe ? 0 : Y(a.y) - Y(posMm.y)); if (d < db) { db = d; best = a; } });
        if (best) { posMm = { x: best.x, y: c.axe ? 0 : best.y }; sur = best.nom; pose = true; g.setAttribute("transform", `translate(${X(posMm.x)} ${Y(posMm.y)})`); message = ""; dire(); }
        e.preventDefault();
      } else if (e.key === "Enter") valider();
    };

    let indice = false;
    function valider() {
      if (fait) return;
      fait = true;
      nettoyerGlisser();
      const dist = Math.hypot((posMm.x - c.x) / v.carreauX, c.axe ? 0 : (posMm.y - c.y) / v.carreauY);
      const juste = dist <= tol;
      const surCroisement = sur === "un croisement";
      g.classList.add(juste ? "t-juste" : "t-faux");
      etiquette.textContent = juste ? "" : "ton " + c.nom;
      if (juste) setTimeout(() => g.remove(), 900);
      gEleve.classList.add("t-passe");
      gAccroches.remove(); viseur.remove(); apercu.remove();
      if (bEffacer) bEffacer.disabled = true;
      aide.remove();
      // La correction : rayons prolongés si l'image est virtuelle ou derrière la lentille suivante, puis l'image
      S.anim = juste ? "net" : "doux";                 // trouvé : l'image se met au point ; sinon elle apparaît simplement
      aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "", sens));
      S.revele.push(...aides.map(r0 => ({ type: "rayon", r0, debut: xDepart(), fin, prolonger: sens })), ...c.revele);
      const gr = el("g", { "clip-path": "url(#t-cadre)" });
      c.revele.forEach(r => dessinerRevele(r, gr));
      S.anim = null;
      if (!juste) svg.appendChild(g);
      let piste = "";
      if (!juste) {
        if (surCroisement && traits.length) piste = "Ton point est bien sur un croisement, mais pas celui des bons rayons : compare ton tracé à la correction.";
        else if (E.quoi === "image") {
          const L = sys.lentilles[c.k], mm = posMm;
          if (virtuelle && mm.x > L.x) piste = "L'image est <b>virtuelle</b> : les rayons ne se croisent pas après la lentille, ce sont leurs <b>prolongements</b> qui se croisent, du côté de l'objet.";
          else if (!virtuelle && mm.x < L.x) piste = "Ici les rayons se croisent bien <b>après</b> la lentille : l'image est réelle, de l'autre côté.";
          else if (derriere && mm.x < suivante.x) piste = "Avant " + echapper(suivante.nom) + ", les rayons ne se sont pas encore croisés : <b>prolonge-les</b> au-delà, en pointillés. L'image se forme derrière " + echapper(suivante.nom) + " (elle lui sert d'objet virtuel).";
          else if (mm.y * c.y < 0) piste = "Regarde de quel côté de l'axe les rayons se croisent : l'image est " + (c.y < 0 ? "<b>sous</b>" : "<b>au-dessus de</b>") + " l'axe.";
          else piste = "Tu n'es pas loin : l'image est exactement là où les rayons se croisent. Pose le point <b>sur le croisement</b>, il s'y aimante.";
        } else if (c.axe) piste = posMm.x < c.x ? "Trop à gauche." : "Trop à droite.";
        else piste = "Regarde où le point est vraiment.";
      }
      fini(juste, (juste ? "<p><b>Exact !</b></p>" : "<p><b>Pas tout à fait.</b> " + piste + "</p>") + (S.calculApres ? "" : '<p class="verif">Par le calcul : ' + c.verif + ".</p>"), indice);
    }
    const actions = [["Valider", () => valider()]];
    const boutonIndice = (libelle, action) => actions.push([libelle, e => {
      if (fait) return;
      indice = true; S.anim = "doux"; action(); S.anim = null; svg.appendChild(g);
      e.currentTarget.disabled = true; e.currentTarget.textContent = "Indice utilisé"; e.currentTarget.removeAttribute("aria-label");
      message = ""; redessiner();
    }, "secondaire"]);
    // Niveau « construire » : les rayons ne sont pas donnés, l'indice les montre
    if (E.construire && aides.length) boutonIndice("Indice : les rayons", () => { if (!aidesVisibles) { aidesVisibles = true; aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "t-indice", false)); } });
    // Prolonger pour l'élève : proposé si le niveau le demande (prolonger: true), et toujours quand l'image se forme
    // derrière la lentille suivante (sans cela, les rayons d'aide s'arrêtent avant de se croiser).
    if ((E.prolonger || derriere) && aides.length) boutonIndice("Indice : prolonger", () => { aidesVisibles = true; aides.forEach(r0 => tracerRayon(r0, xDepart(), fin, "t-indice", sens || "arriere")); });
    const zone = boutons(actions);
    // « Indice : prolonger » : sur un très petit écran il ne reste que « Indice » (le nom complet reste lu)
    zone.querySelectorAll("button").forEach(b => {
      const m = /^(Indice)( : .+)$/.exec(b.textContent);
      if (!m) return;
      b.setAttribute("aria-label", b.textContent);
      b.textContent = m[1];
      const detail = document.createElement("span");
      detail.className = "indice-detail"; detail.textContent = m[2];
      b.appendChild(detail);
    });
    if (outils) {
      bEffacer = document.createElement("button");
      bEffacer.type = "button"; bEffacer.className = "bouton secondaire effacer-trace";
      bEffacer.innerHTML = '<span class="ico i-annuler" aria-hidden="true"></span><span>Effacer</span>';
      bEffacer.setAttribute("aria-label", "Effacer le dernier tracé");
      bEffacer.title = "Effacer le dernier tracé";
      bEffacer.onclick = effacer;
      zone.appendChild(bEffacer);
    }
    zone.appendChild(aide);
    // Départ du point : sur l'axe, ou en bas près de la lentille (hors du tracé)
    aimants = [];
    poser(c.axe ? { x: W * 0.5, y: H / 2 } : { x: Math.min(W - 30, X(c.k !== undefined ? sys.lentilles[c.k].x : v.xmin) + 34), y: H - 22 }, true);
    redessiner();
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
    // images: true = le moteur dessine toutes les images des diaphragmes. Sinon l'élève ne peut désigner que ce
    // qu'il connaît déjà : les images qu'il a placées lui-même (étapes « placer »), et les ouvertures qui n'ont
    // aucune lentille devant elles (elles sont leur propre image). Si cela ne laisse pas le choix, on dessine tout.
    const connue = im => !sys.lentilles.some(L => L.x < im.d.x - 1e-9)
      || S.revele.some(r => (r.type === "imageDiaphragme" || r.type === "pupille" || r.type === "lucarne") && r.im && r.im.nom === im.nom);
    let proposees = E.images === true ? ims : ims.filter(connue);
    if (proposees.length < 2 || !proposees.some(im => im.nom === bonNom)) proposees = ims;
    const liste = enImages ? proposees.map(im => ({ nom: im.nom, im, label: "Image de " + im.nom + " (" + im.nom + "′)" }))
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
    // Le moteur dit quel bord de la pupille va avec quel bord de la lucarne (c.cote) : « même côté = pleine lumière »
    // s'inverse quand le plan de l'objet est entre la pupille et la lucarne.
    const justes = c.cote === "oppose" ? [["P+", "L-"], ["P-", "L+"]] : c.cote === "centre" ? [["P0", "L+"], ["P0", "L-"]] : [["P+", "L+"], ["P-", "L-"]];
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
      const regle = type === "moyen" ? "on relie le <b>centre</b> de la pupille au bord de la lucarne"
        : (c.cote === "oppose" ? "on relie un bord de la pupille au bord <b>opposé</b> de la lucarne" : "on relie les bords <b>du même côté</b> de la pupille et de la lucarne")
          + (c.entre ? ". Ici le plan de l'objet est <b>entre</b> la pupille et la lucarne : la règle habituelle s'inverse. Repère sûr : la pleine lumière est toujours la plus petite des deux limites dans le plan de l'objet, le champ total la plus grande" : "");
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
  let niveau = null, etat = null, ouverture = false;

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
    ouverture = true;                 // les rayons déjà donnés se tracent une fois, à l'ouverture du niveau
    if (N.defi) jouerDefi(N);
    else { nouvelleScene(N, N.systeme); etape(0); }
    ouverture = false; if (S) S.entree = 0;
    svg.classList.remove("t-entree"); void svg.getBoundingClientRect(); svg.classList.add("t-entree");
    // Pendant un niveau, le haut de la page (titre, onglets) s'efface : le dessin tient dans l'écran sans défiler
    const dejaEnJeu = document.querySelector("main").classList.contains("en-jeu");
    document.querySelector("main").classList.add("en-jeu");
    if (!dejaEnJeu) window.scrollTo(0, 0);
    // Clavier et lecteur d'écran : on repart du titre du niveau (le bouton qu'on vient d'activer a disparu)
    $("jeu-titre").tabIndex = -1;
    $("jeu-titre").focus({ preventScroll: true });
  }

  // Le fil des étapes : un trait par étape (faite, en cours, à venir). Décor seulement : la consigne dit déjà « Étape 2 sur 5 ».
  function filEtapes(n, i, classes) {
    const fil = $("jeu-etapes");
    if (!fil) return;
    fil.hidden = n < 2;
    fil.innerHTML = "";
    for (let k = 0; k < n; k++) {
      const li = document.createElement("li");
      li.className = (classes && classes[k]) || (k < i ? "faite" : k === i ? "en-cours" : "");
      fil.appendChild(li);
    }
  }
  function etape(i) {
    const N = niveau, E = N.etapes[i], n = N.etapes.length;
    filEtapes(n, i);
    const consigne = E.texte || (CONSIGNES[E.action] ? CONSIGNES[E.action](E) : "");
    $("jeu-consigne").textContent = n > 1 ? "Étape " + (i + 1) + " sur " + n + " : " + consigne : (N.consigne || consigne);
    const geste = GESTES[E.action];
    // Si une étape « calcul » vient après, la valeur calculée ne doit pas être donnée avant
    S.calculApres = N.etapes.slice(i + 1).some(x => x.action === "calcul");
    if (!geste) { suite(); return; }
    geste(E, (juste, message, indice) => {
      if (indice) etat.indice = true;
      if (!juste) etat.erreurs++;
      // Le son de l'étape. Si cette bonne réponse termine le niveau, on laisse la place au son de fin.
      const termine = i + 1 >= n && !(n === 1 && !juste);
      if (window.Sons && !(termine && juste)) Sons[juste ? "juste" : "faux"]();
      if (n === 1 && !juste) {
        // Niveau d'un seul geste : on recommence jusqu'à trouver
        retour(message, "mal");
        boutons([["Réessayer", () => { effacerRetour(); nouvelleScene(N, N.systeme); etape(0); }]]);
        return;
      }
      if (i + 1 < n) {
        retour(message, juste ? "bien" : "mal");
        boutons([["Continuer", () => { effacerRetour(); if (S.zoom && N.etapes[i + 1].quoi !== "image-retine") { S.zoom = false; regler(N.vue ? { ...N.vue } : cadrageAuto(S.sys)); } etape(i + 1); }]]);
      } else suite(message);
    });
    // Fin du niveau : le son de fin passe après celui de la dernière étape, s'il y en a un
    function suite(message) { filEtapes(n, n); terminer((message || "") + (N.conclusion ? "<p>" + echapper(N.conclusion) + "</p>" : ""), true); }
  }

  // Trois étoiles dessinées : les gagnées en or, les autres en creux
  function etoilesHTML(e, classe) {
    let h = '<span class="etoiles ' + (classe || "") + '" role="img" aria-label="' + e + " étoile" + (e > 1 ? "s" : "") + ' sur 3">';
    for (let k = 0; k < 3; k++) h += '<span class="ico i-etoile' + (k < e ? "" : " vide") + '" style="--n:' + k + '" aria-hidden="true"></span>';
    return h + "</span>";
  }
  function etoilesDuNiveau() { return Math.max(1, 3 - etat.erreurs - (etat.indice ? 1 : 0)); }
  function terminer(message, apresLeSon) {
    const etoiles = etoilesDuNiveau();
    noterEtoiles(niveau.id, etoiles);
    if (window.Sons) Sons.fin([60, 60, 80, 100][etoiles], apresLeSon);     // 1, 2 ou 3 étoiles
    const liste = niveauxDe(niveau.epreuve), i = liste.indexOf(niveau);
    const suivant = liste[i + 1] && debloque(liste[i + 1]) ? liste[i + 1] : null;
    const lien = niveau.theme ? '<p><a href="qcm.html#' + niveau.epreuve + "/" + encodeURIComponent(niveau.theme) + '">S\'entraîner au QCM : ' + echapper(niveau.theme) + " →</a></p>" : "";
    retour(message + lien + '<p class="etoiles-gagnees">' + etoilesHTML(etoiles) + "</p>", "bien", etoiles === 3 ? "clin-doeil" : "bouche-ouverte");
    boutons([
      suivant ? ["Niveau suivant", () => ouvrir(suivant)] : ["Retour aux niveaux", afficherNiveaux],
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
    const resultats = [];       // "reussie" ou "ratee" pour chaque manche jouée
    const vue = { xmin: -240, xmax: 240, hmax: 150, carreauX: 20, carreauY: 20 };
    const suivante = () => {
      if (manche === manches) {
        if (reussies >= reussir) {
          etat.erreurs = manches - reussies;
          terminer(`<p><b>Défi réussi : ${reussies} / ${manches} !</b> Tu sais construire l'image d'une lentille mince sans aide.</p>`);
          if (reussies === manches && typeof montrerCompagnon === "function") montrerCompagnon(document.querySelector(".jeu-compagnon"), "choque");
        } else {
          if (window.Sons) Sons.fin(Math.round((reussies / manches) * 100));
          retour(`<p><b>${reussies} / ${manches}.</b> Il en faut ${reussir} pour réussir le défi. Rejoue les niveaux précédents si besoin, puis retente ta chance !</p>`, "mal", "pensif");
          boutons([["Retenter le défi", () => ouvrir(niveau)], ["Retour aux niveaux", afficherNiveaux, "secondaire"]]);
        }
        return;
      }
      manche++;
      filEtapes(manches, manche - 1, resultats.concat(["en-cours"]));
      const s = situationAuHasard(precedente);
      precedente = s.cas;
      effacerRetour();
      nouvelleScene({ vue }, s.systeme);
      $("jeu-consigne").textContent = "Manche " + manche + " sur " + manches + " : construis l'image B' de l'objet AB. Touche deux points pour tracer un rayon, puis pose B' sur le croisement.";
      const E = { action: "placer", quoi: "image", apres: "L", tolerance: 0.7 };
      gestePlacer(E, juste => {
        S.anim = "doux";
        ["parallele", "O"].forEach(par => tracerRayon(Optique.versEspaceObjet(S.sys, Optique.rayonType(S.sys, 0, par)), xDepart(), S.vue.xmax, "", S.ch[1].x < 0));
        S.anim = null;
        if (juste) reussies++;
        if (window.Sons) Sons[juste ? "juste" : "faux"]();
        resultats.push(juste ? "reussie" : "ratee");
        filEtapes(manches, manche, resultats);
        retour(juste ? "<p><b>Exact !</b> " + reussies + " / " + manche + "</p>" : "<p><b>Raté.</b> L'image était là où se croisent les rayons.</p>", juste ? "bien" : "mal");
        boutons([[manche < manches ? "Manche suivante" : "Voir mon résultat", suivante]]);
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
  // Vignette d'un niveau : son montage en tout petit (axe, lentilles, diaphragmes, objet, œil), dessiné d'après le niveau
  function vignette(N) {
    const w = 68, h = 40, m = h / 2, s = document.createElementNS(SVG_NS, "svg");
    s.setAttribute("viewBox", "0 0 " + w + " " + h);
    s.setAttribute("class", "vignette");
    const trait = (d, classe) => { const e = document.createElementNS(SVG_NS, "path"); e.setAttribute("d", d); e.setAttribute("class", classe); s.appendChild(e); };
    const lentille = (x, conv) => { const c = conv ? 1 : -1; trait(`M${x} 5 V${h - 5} M${x - 3} ${5 + c * 3.2} L${x} 5 L${x + 3} ${5 + c * 3.2} M${x - 3} ${h - 5 - c * 3.2} L${x} ${h - 5} L${x + 3} ${h - 5 - c * 3.2}`, "v-lentille"); };
    trait(`M2 ${m} H${w - 2}`, "v-axe");
    if (N.defi) { lentille(w / 2, true); trait(`M14 ${m} V9 M11.500 12.500 L14 9 L16.500 12.500`, "v-objet"); trait(`M${w - 17} 13 a4 4 0 1 1 5.500 3.700 c-1.200.5 -1.500 1.300 -1.500 2.800 M${w - 13} 24.500 v.01`, "v-objet"); return s; }
    let sys;
    try { sys = Optique.preparer(N.systeme); } catch (err) { return s; }
    const vue = N.vue || cadrageAuto(sys);
    const x = mm => Math.max(4, Math.min(w - 4, 4 + (mm - vue.xmin) / (vue.xmax - vue.xmin) * (w - 8)));
    sys.diaphragmes.filter(d => !d.monture).forEach(d => { const r = Math.max(3, Math.min(m - 7, d.rayon / vue.hmax * (m - 4))); trait(`M${x(d.x)} 4 V${m - r} M${x(d.x)} ${m + r} V${h - 4}`, "v-diaph"); });
    sys.lentilles.forEach(L => lentille(x(L.x), L.f > 0));
    if (sys.oeil) { const xo = Math.min(w - 12, x(sys.oeil.x)); trait(`M${xo} ${m - 6} Q${xo + 9} ${m - 7} ${xo + 9} ${m} Q${xo + 9} ${m + 7} ${xo} ${m + 6}`, "v-oeil"); }
    const o = sys.objet;
    if (o.infini) { const dy = Math.max(-5, Math.min(5, -o.s * 60)); trait(`M3 ${9 - dy / 2} L14 ${9 + dy / 2} M10.500 ${7 + dy / 2} L14 ${9 + dy / 2} L11 ${11.500 + dy / 2}`, "v-objet"); }
    else if (o.x !== undefined) { const hy = Math.max(7, Math.min(m - 4, Math.abs(o.h) / vue.hmax * (m - 4))) * (o.h < 0 ? -1 : 1), xo = x(o.x), c = o.h < 0 ? -1 : 1; trait(`M${xo} ${m} V${m - hy} M${xo - 2.500} ${m - hy + c * 3.500} L${xo} ${m - hy} L${xo + 2.500} ${m - hy + c * 3.500}`, "v-objet"); }
    return s;
  }
  function afficherNiveaux() {
    nettoyerGlisser();
    const quitte = !$("ecran-jeu").hidden && niveau ? niveau.id : null;      // on revient d'un niveau : le focus y retourne
    document.querySelector("main").classList.remove("en-jeu");
    $("ecran-jeu").hidden = true;
    $("ecran-niveaux").hidden = false;
    $("ecran-niveaux").dataset.epreuve = atelier;
    const etoiles = lireEtoiles(), conteneur = $("niveaux");
    conteneur.innerHTML = "";
    const liste = niveauxDe(atelier);
    const chapitres = [...new Set(liste.map(N => N.chapitre || ""))];
    let total = 0;
    // Le prochain niveau à faire (le premier ouvert et pas encore réussi) : en grand, tout en haut
    const prochain = liste.find(N => debloque(N) && !etoiles[N.id]);
    if (prochain) {
      const b = document.createElement("button");
      b.type = "button"; b.className = "reprise";
      b.innerHTML = '<span class="reprise-vignette" aria-hidden="true"></span><span class="reprise-texte"><span class="reprise-titre"></span><span class="reprise-detail"></span></span><span class="bouton"></span>';
      b.querySelector(".reprise-vignette").appendChild(vignette(prochain));
      b.querySelector(".reprise-titre").textContent = prochain.titre;
      b.querySelector(".reprise-detail").textContent = "Niveau " + (liste.indexOf(prochain) + 1) + " sur " + liste.length + (prochain.chapitre ? " · " + prochain.chapitre : "");
      b.querySelector(".bouton").textContent = liste.some(N => etoiles[N.id]) ? "Continuer" : "Commencer";
      b.onclick = () => ouvrir(prochain);
      conteneur.appendChild(b);
    } else if (liste.length) {
      const fin = document.createElement("p");
      fin.className = "niveaux-fin";
      fin.textContent = liste.every(N => etoiles[N.id] === 3) ? "Tous les niveaux sont réussis, avec toutes les étoiles." : "Tous les niveaux sont réussis. Tu peux rejouer ceux à une ou deux étoiles pour les avoir toutes.";
      conteneur.appendChild(fin);
    }
    chapitres.forEach(ch => {
      if (chapitres.length > 1 && ch) {
        const h = document.createElement("h3");
        h.className = "chapitre";
        h.textContent = ch;
        const duChapitre = liste.filter(N => (N.chapitre || "") === ch), faits = duChapitre.filter(N => etoiles[N.id]).length;
        const avance = document.createElement("span");
        avance.className = "chapitre-avance" + (faits === duChapitre.length ? " fini" : "");
        avance.textContent = faits + " / " + duChapitre.length;
        avance.setAttribute("aria-label", faits + " niveau" + (faits > 1 ? "x" : "") + " réussi" + (faits > 1 ? "s" : "") + " sur " + duChapitre.length);
        h.appendChild(avance);
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
        b.innerHTML = '<span class="niveau-num"></span><span class="niveau-titre"></span><span class="niveau-etoiles"></span><span class="niveau-vignette" aria-hidden="true"></span>';
        b.querySelector(".niveau-num").textContent = ouvert ? n : "";
        b.querySelector(".niveau-titre").textContent = N.titre;
        if (e) b.querySelector(".niveau-etoiles").innerHTML = etoilesHTML(e);
        else b.querySelector(".niveau-etoiles").textContent = ouvert ? "À faire" : "";
        b.querySelector(".niveau-vignette").appendChild(vignette(N));
        b.setAttribute("aria-label", "Niveau " + n + " : " + N.titre + (ouvert ? (e ? ", " + e + " étoiles sur 3" : ", à faire") : ", verrouillé"));
        b.onclick = () => ouvrir(N);
        if (N.id === quitte) setTimeout(() => b.focus({ preventScroll: true }), 0);
        li.appendChild(b);
        ol.appendChild(li);
      });
      conteneur.appendChild(ol);
    });
    $("total-etoiles").innerHTML = '<span class="ico i-etoile" aria-hidden="true"></span> ';
    $("total-etoiles").append(total + " / " + liste.length * 3);
    $("total-etoiles").setAttribute("aria-label", total + " étoiles sur " + liste.length * 3);
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
