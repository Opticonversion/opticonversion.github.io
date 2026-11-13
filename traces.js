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
    // Schéma de l'examen (Vision) : pas de montage sur un axe, un schéma à main levée (voir dessinerSchema)
    if (N.schema) { S = { N, schema: N.schema, co: Optique.schema(N.schema), etiq: {}, regard: null, faits: new Set(), revele: [], zoom: false }; return; }
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
    if (S.schema) { dessinerSchema(); return; }
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
    if (S.schema) {
      zone.innerHTML = '<span class="legende-echelle"></span>';
      zone.firstChild.textContent = "Schéma à main levée, hors échelle : les angles sont exagérés, comme sur une copie.";
      return;
    }
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
  const SIGNE_PAR_DEFAUT = { "rayon-champ": false, "angle-champ": false, "phorie": false, "ecart-taille": false, "aniseiconie": false, "prisme-od": false, "prisme-og": false, "difference-prismatique": false };
  const UNITE_PAR_DEFAUT = { "OA'": "mm", "A'B'": "mm", "f-systeme": "mm", "rayon-champ": "mm", "angle-champ": "°", "remotum": "cm", "punctum": "cm", "gamma": "", "grossissement": "", "phorie": "Δ", "ecart-taille": "%", "aniseiconie": "%", "prisme-od": "Δ", "prisme-og": "Δ", "difference-prismatique": "Δ" };
  const NOMS_GRANDEURS = { "OA'": "la position de l'image", "A'B'": "la taille de l'image", "gamma": "le grandissement", "f-systeme": "la focale du système",
    "rayon-champ": "le rayon du champ", "angle-champ": "l'angle du champ", "grossissement": "le grossissement", "remotum": "HR", "punctum": "HP", "phorie": "la phorie", "ecart-taille": "l'écart de taille", "aniseiconie": "l'aniséiconie",
    "prisme-od": "l'effet prismatique de l'OD", "prisme-og": "l'effet prismatique de l'OG", "difference-prismatique": "l'effet prismatique vertical subi par le couple" };
  function valeurCalcul(E) {
    const brute = S.schema ? Optique.grandeurSchema(S.schema, E.grandeur) : Optique.grandeur(S.sys, E.grandeur, { apres: E.apres, champ: E.champ });
    if (brute === null) return null;
    const unite = E.unite !== undefined ? E.unite : UNITE_PAR_DEFAUT[E.grandeur] || "";
    const longueur = ["OA'", "A'B'", "f-systeme", "rayon-champ", "remotum", "punctum"].includes(E.grandeur);
    const facteur = longueur && !S.schema ? ({ mm: 1, cm: 0.1, m: 0.001 }[unite] || 1) : 1;     // les schémas donnent déjà des cm
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
    ajouterAideUnite(form, rep, $("jeu-consigne").textContent);           // « Quelle unité ? » (essentiel.js)
    zone.appendChild(form);
    const champ = form.querySelector("input");
    // Le clavier « décimal » de l'iPhone n'a pas de signe moins : clavier normal si la réponse a un signe
    champ.inputMode = rep.signe ? "text" : "decimal";
    champ.focus({ preventScroll: true });
    form.onsubmit = e => {
      e.preventDefault();
      const r = corrigerCalcul(rep, champ.value);
      if (r.etat === "vide") { form.querySelector(".saisie-aide").textContent = "Écris un nombre (ex. −12,5)."; return; }
      champ.disabled = true;
      form.querySelector("button").disabled = true;
      if (S.schema) { S.faits.add("calc-" + E.grandeur); dessiner(); }
      fini(r.etat === "juste", "<p><b>" + (r.etat === "juste" ? "Exact !" : "Pas tout à fait.") + "</b> " + echapper(messageCalcul(rep, r)) + "</p>" +
        (r.etat === "unite" ? "<p>" + texteMathHTML(aideUnite(rep, $("jeu-consigne").textContent, true)) + "</p>" : ""));
    };
  }

  // ======================================================================
  //  LES SCHÉMAS DE L'EXAMEN (Vision, niveaux « schema »). À l'écrit d'U5,
  //  pas de tracé exact à la règle : un schéma à main levée, légendé, coté,
  //  avec une conclusion rédigée. L'élève le monte pièce par pièce.
  //  Gestes : legender, regard, pointer, conclure (et calcul).
  //  optique.js (coupleOculaire) donne toutes les réponses.
  //  Attentes du correcteur : notes/coordination/schemas-U5-attendus.md
  // ======================================================================
  const CO = {                                   // le couple oculaire vu de dessus, en unités du dessin (480 × 300)
    T: { x: 160, y: 30 },
    yeux: { OG: { x: 90, y: 206 }, OD: { x: 230, y: 206 } },
    r: 38,
    C: { x: 402, y: 210, r: 32 },                // l'œil cyclope
    devie: 15 * Math.PI / 180                    // rotation dessinée de l'œil dévié : exagérée (schéma hors échelle)
  };
  const norme = v => { const l = Math.hypot(v.x, v.y) || 1; return { x: v.x / l, y: v.y / l }; };
  const tourner = (u, a) => ({ x: u.x * Math.cos(a) - u.y * Math.sin(a), y: u.x * Math.sin(a) + u.y * Math.cos(a) });   // a > 0 : la pointe part vers la droite
  const versT = oeil => norme({ x: CO.T.x - CO.yeux[oeil].x, y: CO.T.y - CO.yeux[oeil].y });
  const plus = (p, u, k) => ({ x: p.x + u.x * k, y: p.y + u.y * k });
  const minus = o => o === "OD" ? "d" : "g";
  // Ligne de regard d'un œil : vers T pour le fixateur, tournée pour l'œil dévié (une fois orienté)
  function regardDe(oeil) {
    if (oeil === S.co.fixateur) return versT(oeil);
    return S.regard || null;
  }
  // Où va chaque étiquette du geste « legender » (plusieurs emplacements possibles : un seul est le bon)
  function emplacementsCouple() {
    const sch = S.schema, c = S.co, r = CO.r, Q = CO.yeux, fix = c.fixateur, uF = versT(fix);
    const lr = plus(Q[fix], uF, Math.hypot(CO.T.x - Q[fix].x, CO.T.y - Q[fix].y) * 0.55);
    const barre = o => plus(Q[o], versT(o), r + 17);
    return [
      { id: "titre", etiquette: "Vue de dessus", places: [{ cle: "titre", x: CO.T.x, y: 288, large: 150 }], bon: "titre",
        pose: "Vue de dessus · " + (sch.distance <= 100 ? "VP " + nb(sch.distance, 0) + " cm" : "VL " + nb(sch.distance / 100, 0) + " m"),
        pourquoi: "Le nom de la vue et la distance du test s'écrivent sous le schéma : sans eux, le correcteur retire des points." },
      { id: "Qg", etiquette: "Q'g", places: [{ cle: "Qg", x: Q.OG.x, y: Q.OG.y }], bon: "Qg", pose: "Q'g",
        pourquoi: "Q'g est le centre de rotation de l'œil gauche : au centre du cercle de gauche (l'OG est à gauche, vu de dessus)." },
      { id: "Qd", etiquette: "Q'd", places: [{ cle: "Qd", x: Q.OD.x, y: Q.OD.y }], bon: "Qd", pose: "Q'd",
        pourquoi: "Q'd est le centre de rotation de l'œil droit : au centre du cercle de droite." },
      { id: "f" + minus(fix), etiquette: "f'" + minus(fix), places: [{ cle: "f" + minus(fix), x: Q[fix].x - uF.x * r, y: Q[fix].y - uF.y * r }], bon: "f" + minus(fix), pose: "f'" + minus(fix),
        pourquoi: "f'" + minus(fix) + " est la fovéa : au fond de l'œil, sur sa ligne de regard." },
      { id: "LR", etiquette: "LR" + minus(fix).toUpperCase(), places: [{ cle: "LR", x: lr.x, y: lr.y }], bon: "LR", pose: "LR" + minus(fix).toUpperCase(),
        pourquoi: "LR" + minus(fix).toUpperCase() + " est la ligne de regard de l'" + fix + " : de la fovéa à T, en passant par Q'." },
      { id: "dissociateur", etiquette: sch.dissociateur.court || sch.dissociateur.nom, places: ["OG", "OD"].map(o => ({ cle: "dissociateur-" + o, oeil: o, ...barre(o) })), bon: "dissociateur-" + sch.dissociateur.oeil,
        pose: sch.dissociateur.court || sch.dissociateur.nom,
        pourquoi: "Le dissociateur est devant l'" + sch.dissociateur.oeil + ". Sans dissociateur, le barème de 2021 ne donnait aucun point au schéma." },
      { id: "fixateur", etiquette: "Œil fixateur", places: [{ cle: "fixateur-OG", oeil: "OG", x: Q.OG.x - 46, y: 150, large: 82 }, { cle: "fixateur-OD", oeil: "OD", x: Q.OD.x + 50, y: 150, large: 82 }],
        bon: "fixateur-" + fix, pose: fix + " fixateur",
        pourquoi: "C'est l'" + fix + " qui fixe le point. Écris-le : le couple et l'œil cyclope doivent avoir le même œil fixateur." }
    ];
  }

  function dessinerCouple() {
    const c = S.co, sch = S.schema, r = CO.r, Q = CO.yeux, T = CO.T, fix = c.fixateur, dev = c.devie;
    const pose = id => S.etiq[id];
    const g = el("g", { class: "s-schema" });
    // Repères : la médiane (de T au milieu des yeux) et la ligne des centres
    el("line", { x1: T.x, y1: T.y, x2: T.x, y2: Q.OG.y, class: "s-repere" }, g);
    el("line", { x1: Q.OG.x, y1: Q.OG.y, x2: Q.OD.x, y2: Q.OD.y, class: "s-repere" }, g);
    // Le point de fixation
    el("circle", { cx: T.x, cy: T.y, r: 3.4, class: "s-point-or" }, g);
    texte(T.x - 12, T.y + 9, "T", "point droite", g);
    // Chaque œil : globe, cornée tournée vers sa ligne de regard, Q', fovéa
    ["OG", "OD"].forEach(o => {
      const q = Q[o], u = regardDe(o) || versT(o), oriente = !!regardDe(o);
      el("circle", { cx: q.x, cy: q.y, r, class: "s-oeil" }, g);
      // L'œil dévié pas encore orienté : sa cornée et sa fovéa seules, sans ligne de regard
      if (!oriente) {
        const a1 = tourner(u, -0.5), a2 = tourner(u, 0.5);
        el("path", { d: `M${q.x + a1.x * r} ${q.y + a1.y * r} Q${q.x + u.x * r * 1.42} ${q.y + u.y * r * 1.42} ${q.x + a2.x * r} ${q.y + a2.y * r}`, class: "s-cornee" }, g);
      } else {
        const a1 = tourner(u, -0.5), a2 = tourner(u, 0.5);
        el("path", { d: `M${q.x + a1.x * r} ${q.y + a1.y * r} Q${q.x + u.x * r * 1.42} ${q.y + u.y * r * 1.42} ${q.x + a2.x * r} ${q.y + a2.y * r}`, class: "s-cornee" }, g);
        const f = plus(q, u, -r);
        el("circle", { cx: f.x, cy: f.y, r: 2.6, class: "s-fovea" }, g);
        // Ligne de regard : de la fovéa, par Q', jusqu'au-delà de T (en tirets fins)
        const loin = (q.y - T.y + 22) / -u.y;
        const bout = plus(q, u, loin);
        el("line", { x1: f.x, y1: f.y, x2: bout.x, y2: bout.y, class: "s-regard" + (o === dev ? " devie" : "") }, g);
      }
      el("circle", { cx: q.x, cy: q.y, r: 2.4, class: "s-point" }, g);
    });
    // Le rayon issu de T vers l'œil fixateur : sur sa ligne de regard, fléché, jusqu'à la fovéa (T' ≡ f')
    const uF = versT(fix), fF = plus(Q[fix], uF, -r);
    el("line", { x1: T.x, y1: T.y, x2: fF.x, y2: fF.y, class: "s-rayon" }, g);
    flecheDeSens(T.x, T.y, Q[fix].x + uF.x * r, Q[fix].y + uF.y * r, g);
    // Le rayon vers l'œil dévié : jusqu'à la cornée tant que T' n'est pas trouvé, puis par Q' jusqu'à la rétine
    const u0 = versT(dev), entree = plus(Q[dev], u0, r * 1.05);
    if (S.regard) {
      const fin = S.faits.has("Tprime") ? plus(Q[dev], u0, -r) : entree;
      el("line", { x1: T.x, y1: T.y, x2: fin.x, y2: fin.y, class: "s-rayon" }, g);
      flecheDeSens(T.x, T.y, entree.x, entree.y, g);
    }
    // Étiquettes posées (geste legender) et ce que le moteur a révélé
    const ecr = (x, y, t, cl) => texte(x, y, t, "s-etiq " + (cl || ""), g);
    if (pose("titre")) { ecr(T.x, 291, pose("titre"), "centre souligne"); }
    if (pose("Qg")) ecr(Q.OG.x - 7, Q.OG.y + 17, pose("Qg"), "droite");
    if (pose("Qd")) ecr(Q.OD.x + 7, Q.OD.y + 17, pose("Qd"));
    if (pose("f" + minus(fix))) ecr(fF.x + (fix === "OD" ? 6 : -6), fF.y + 17, pose("f" + minus(fix)) + (S.faits.has("Tprime") ? " ≡ T'" + minus(fix) : ""), fix === "OD" ? "" : "droite");
    if (pose("LR")) { const p = plus(Q[fix], uF, Math.hypot(T.x - Q[fix].x, T.y - Q[fix].y) * 0.55); ecr(p.x + (fix === "OD" ? 10 : -10), p.y, pose("LR"), fix === "OD" ? "" : "droite"); }
    if (pose("fixateur")) { const o = sch.fixateur; ecr(Q[o].x + (o === "OD" ? 50 : -46), 150, pose("fixateur"), "centre petit-etiq"); }
    if (pose("dissociateur")) {
      const o = sch.dissociateur.oeil, u = versT(o), m = plus(Q[o], u, r + 17), p = tourner(u, Math.PI / 2);
      el("line", { x1: m.x - p.x * 17, y1: m.y - p.y * 17, x2: m.x + p.x * 17, y2: m.y + p.y * 17, class: "s-dissociateur" }, g);
      ecr(m.x + (o === "OD" ? 22 : -22), m.y - 4, pose("dissociateur"), (o === "OD" ? "" : "droite") + " rouge");
    }
    if (S.regard && S.regardValide) {
      const u = S.regard, q = Q[dev], f = plus(q, u, -r), p = plus(q, u, (q.y - T.y) * 0.62 / -u.y);
      ecr(p.x + (dev === "OD" ? 10 : -10), p.y, "LR" + minus(dev).toUpperCase(), dev === "OD" ? "" : "droite");
      ecr(f.x + (c.coteTprime > 0 ? -6 : 6), f.y + 17, "f'" + minus(dev), c.coteTprime > 0 ? "droite" : "");
      if (S.faits.has("Tprime")) {
        const t = plus(q, u0, -r);
        el("circle", { cx: t.x, cy: t.y, r: 3, class: "s-point-or" }, g);
        ecr(t.x + (c.coteTprime > 0 ? 6 : -6), t.y + 17, "T'" + minus(dev), (c.coteTprime > 0 ? "" : "droite") + " or");
      }
    }
    // Ce que voit le sujet (vue de face), en haut à droite
    const P = sch.perception, cx = CO.C.x;
    texte(cx, 16, "Vu par le sujet", "centre s-note", g);
    const sx = (P.cote === "droite" ? 1 : -1) * 22;
    el("circle", { cx: cx - sx / 2, cy: 38, r: 3.6, class: "s-point-or" }, g);
    if (/raie/.test(P.image)) el("line", { x1: cx + sx / 2, y1: 24, x2: cx + sx / 2, y2: 52, class: "s-dissociateur fin" }, g);
    else el("circle", { cx: cx + sx / 2, cy: 38, r: 4.2, class: "s-point-rouge" }, g);
    el("line", { x1: cx - sx / 2, y1: 60, x2: cx + sx / 2, y2: 60, class: "s-cote", "marker-start": "url(#pointe-axe)", "marker-end": "url(#pointe-axe)" }, g);
    texte(cx + 30, 64, nb(P.ecart, 1) + " cm", "s-note", g);
    // L'œil cyclope : même œil fixateur, extériorisations seulement ici
    const C = CO.C, fC = { x: C.x, y: C.y + C.r };
    el("line", { x1: C.x - 62, y1: 80, x2: C.x - 62, y2: 292, class: "s-separation" }, g);
    el("circle", { cx: C.x, cy: C.y, r: C.r, class: "s-oeil" }, g);
    el("path", { d: `M${C.x - C.r * 0.48} ${C.y - C.r * 0.88} Q${C.x} ${C.y - C.r * 1.42} ${C.x + C.r * 0.48} ${C.y - C.r * 0.88}`, class: "s-cornee" }, g);
    el("circle", { cx: C.x, cy: C.y, r: 2.4, class: "s-point" }, g);
    el("circle", { cx: fC.x, cy: fC.y, r: 2.6, class: "s-fovea" }, g);
    const eC = S.faits.has("exterio") ? c.coteExteriorisation : 1;
    texte(C.x - eC * 6, C.y + 16, "Q'dg", "s-note" + (eC > 0 ? " droite" : ""), g);
    texte(C.x, 291, "Œil cyclope", "centre s-etiq souligne", g);
    if (S.faits.has("cyclope")) {
      // L'œil fixateur : T' sur la fovéa, extériorisé droit devant
      el("line", { x1: fC.x, y1: fC.y, x2: C.x, y2: 96, class: "s-exterio", "marker-end": "url(#pointe)" }, g);
      texte(C.x, fC.y + 18, "f'dg ≡ T'" + minus(fix), "centre s-note", g);
      texte(C.x + (c.coteExteriorisation > 0 ? -5 : 5), 92, "T''" + minus(fix), (c.coteExteriorisation > 0 ? "droite" : "") + " petit-etiq", g);
    }
    if (S.faits.has("exterio")) {
      const e = c.coteExteriorisation, haut = C.y - 96, dx = haut * Math.tan(CO.devie);
      const tR = { x: C.x - e * C.r * Math.sin(CO.devie), y: C.y + C.r * Math.cos(CO.devie) };
      el("line", { x1: tR.x, y1: tR.y, x2: C.x + e * dx, y2: 96, class: "s-exterio devie", "marker-end": "url(#pointe-image)" }, g);
      el("circle", { cx: tR.x, cy: tR.y, r: 3, class: "s-point-or" }, g);
      texte(tR.x - e * 7, tR.y + 6, "T'" + minus(dev), (e > 0 ? "droite" : "") + " petit-etiq or", g);
      texte(C.x + e * (dx + 5), 92, "T''" + minus(dev), (e > 0 ? "" : "droite") + " petit-etiq or", g);
      // L'angle entre les deux extériorisations : la phorie
      const a0 = -Math.PI / 2, a1 = a0 + e * CO.devie, R = 62;
      el("path", { d: `M${C.x + R * Math.cos(a0)} ${C.y + R * Math.sin(a0)} A${R} ${R} 0 0 ${e > 0 ? 1 : 0} ${C.x + R * Math.cos(a1)} ${C.y + R * Math.sin(a1)}`, class: "s-angle" }, g);
      texte(C.x + e * 22, C.y - R - 6, c.exo ? "EXO" : "ÉSO", (e > 0 ? "" : "droite") + " s-note", g);
    }
    if (S.faits.has("cote")) {
      const e = c.coteExteriorisation;
      // L'écart métrique entre les deux extériorisations, coté sur le schéma
      const yc = 112, ec = (C.y - yc) * Math.tan(CO.devie);
      el("line", { x1: C.x, y1: yc, x2: C.x + e * ec, y2: yc, class: "s-cote", "marker-start": "url(#pointe-axe)", "marker-end": "url(#pointe-axe)" }, g);
      texte(C.x - e * 6, yc + 4, nb(sch.perception.ecart, 1) + " cm", (e > 0 ? "droite" : "") + " s-note", g);
      texte(C.x - e * 6, yc + 20, "= " + nb(c.valeur, 1) + " Δ", (e > 0 ? "droite" : "") + " petit-etiq or", g);
    }
    legende();
  }

  // Coordonnées du dessin à partir d'un toucher
  function pointDessin(e) {
    const m = svg.getScreenCTM();
    if (!m) return null;
    const p = svg.createSVGPoint();
    p.x = e.clientX; p.y = e.clientY;
    const q = p.matrixTransform(m.inverse());
    return { x: q.x, y: q.y };
  }
  function aideSchema(t) {
    let p = $("jeu-actions").querySelector(".schema-aide");
    if (!p) { p = document.createElement("p"); p.className = "saisie-aide schema-aide"; p.setAttribute("role", "status"); $("jeu-actions").appendChild(p); }
    p.textContent = t;
  }

  // ---------- legender : une étiquette, puis l'endroit où elle va ----------
  function gesteLegender(E, fini) {
    nettoyerGlisser();
    const liste = TYPES_SCHEMA[S.schema.type].emplacements().filter(t => !E.etiquettes || E.etiquettes.includes(t.id));
    let choisie = null, fautes = 0;
    const remarques = [], occupes = new Set();
    const zone = $("jeu-actions");
    function rendre() {
      dessiner();
      // Les emplacements libres
      const libres = el("g", { class: "s-emplacements" + (choisie ? " actifs" : "") });
      let n = 0;
      const vus = new Set();                     // un emplacement partagé par deux étiquettes (DLD / DLG) n'est dessiné qu'une fois
      liste.forEach(t => {
        if (S.etiq[t.id]) return;
        t.places.forEach(p => {
          if (vus.has(p) || occupes.has(p)) return;
          vus.add(p);
          n++;
          const gr = el("g", { class: "s-emplacement", tabindex: 0, role: "button", "aria-label": "Emplacement " + n }, libres);
          if (p.large) el("rect", { x: p.x - p.large / 2, y: p.y - 13, width: p.large, height: 20, rx: 6, class: "s-emplacement-forme" }, gr);
          else el("circle", { cx: p.x, cy: p.y, r: 8, class: "s-emplacement-forme" }, gr);
          el("circle", { cx: p.x, cy: p.y - (p.large ? 3 : 0), r: 20, class: "s-emplacement-zone" }, gr);
          const agir = () => poser(p, gr);
          gr.addEventListener("click", agir);
          gr.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); agir(); } });
        });
      });
    }
    function puces() {
      zone.innerHTML = "";
      const rang = document.createElement("div");
      rang.className = "etiquettes-schema";
      liste.forEach(t => {
        if (S.etiq[t.id]) return;
        const b = document.createElement("button");
        b.type = "button";
        b.className = "etiquette-schema" + (choisie === t ? " choisie" : "");
        b.textContent = t.etiquette;
        b.setAttribute("aria-pressed", choisie === t);
        b.onclick = () => { choisie = choisie === t ? null : t; puces(); rendre(); aideSchema(choisie ? "Touche sur le dessin l'endroit où va « " + t.etiquette + " »." : ""); };
        rang.appendChild(b);
      });
      zone.appendChild(rang);
    }
    function poser(p, gr) {
      if (!choisie) { aideSchema("Choisis d'abord une étiquette, sous le dessin."); return; }
      const t = choisie;
      if (t.places.includes(p) && p.cle === t.bon) {
        S.etiq[t.id] = t.pose;
        occupes.add(p);
        choisie = null;
        if (window.Sons) Sons.juste();
        if (liste.every(x => S.etiq[x.id])) {
          rendre(); zone.innerHTML = "";
          fini(fautes === 0, "<p><b>" + (fautes === 0 ? "Schéma légendé sans faute." : "Schéma légendé.") + "</b> " + (TYPES_SCHEMA[S.schema.type].legende || "") + "</p>" +
            (remarques.length ? "<p>" + remarques.map(echapper).join("</p><p>") + "</p>" : ""));
          return;
        }
        puces(); rendre(); aideSchema("« " + t.pose + " » est en place.");
      } else {
        fautes++;
        if (!remarques.includes(t.pourquoi)) remarques.push(t.pourquoi);
        gr.classList.add("s-faux");
        if (window.Sons) Sons.faux();
        aideSchema("Pas là. " + t.pourquoi);
      }
    }
    S.etiq = S.etiq || {};
    puces(); rendre();
    aideSchema("");
  }

  // ---------- regard : faire pivoter la ligne de regard de l'œil dévié ----------
  function gesteRegard(E, fini) {
    nettoyerGlisser();
    const c = S.co, dev = c.devie, q = CO.yeux[dev], T = CO.T;
    let hx = T.x, fini2 = false;
    function rendre() {
      S.regard = norme({ x: hx - q.x, y: T.y - q.y });
      dessiner();
      el("line", { x1: 18, y1: T.y, x2: 312, y2: T.y, class: "s-guide" });
      const gr = el("g", { class: "t-poignee t-choisi" });
      el("circle", { cx: hx, cy: T.y, r: 7, class: "t-poignee-point" }, gr);
    }
    const bouger = e => { if (fini2) return; const p = pointDessin(e); if (!p) return; hx = Math.max(24, Math.min(306, p.x)); rendre(); };
    let prise = false;
    const bas = e => { const p = pointDessin(e); if (!p || p.y > q.y - CO.r || p.x > 320) return; prise = true; svg.setPointerCapture && svg.setPointerCapture(e.pointerId); bouger(e); e.preventDefault(); };
    const mvt = e => { if (prise) bouger(e); };
    const haut = () => { prise = false; };
    svg.addEventListener("pointerdown", bas);
    svg.addEventListener("pointermove", mvt);
    svg.addEventListener("pointerup", haut);
    svg.addEventListener("pointercancel", haut);
    svg.classList.add("s-glisse");
    nettoyerGlisser = () => {
      svg.removeEventListener("pointerdown", bas); svg.removeEventListener("pointermove", mvt);
      svg.removeEventListener("pointerup", haut); svg.removeEventListener("pointercancel", haut);
      svg.classList.remove("s-glisse");
      nettoyerGlisser = () => {};
    };
    const zone = boutons([
      ["◀", () => { hx = Math.max(24, hx - 8); rendre(); }, "secondaire bouton-fleche"],
      ["▶", () => { hx = Math.min(306, hx + 8); rendre(); }, "secondaire bouton-fleche"],
      ["Valider", valider]
    ]);
    zone.children[0].setAttribute("aria-label", "Tourner la ligne de regard vers la gauche");
    zone.children[1].setAttribute("aria-label", "Tourner la ligne de regard vers la droite");
    rendre();
    aideSchema("Fais glisser le point sur la ligne de T, ou utilise les flèches.");
    function valider() {
      const d = hx - T.x, s = Math.sign(d);
      if (Math.abs(d) < 6) { aideSchema("Pour l'instant, elle passe encore par T. Sous dissociation, l'" + dev + " n'a plus de raison de fixer T."); return; }
      fini2 = true;
      nettoyerGlisser();
      const juste = s === c.rotation;
      S.regard = tourner(versT(dev), c.rotation * CO.devie);
      S.regardValide = true;
      dessiner();
      const P = S.schema.perception;
      fini(juste, "<p><b>" + (juste ? "Oui." : "Non.") + "</b> Le sujet voit l'image de l'" + P.oeil + " à " + P.cote + " : diplopie <b>" + c.diplopie + "</b>, donc " + c.nature +
        " (loi de Desmarres). En position passive, l'" + dev + " tourne vers " + (c.exo ? "la tempe" : "le nez") + " : sa ligne de regard croise LR" + minus(c.fixateur).toUpperCase() + " <b>" + c.croisementLR + "</b> T.</p>" +
        "<p>Sur le schéma, l'angle est exagéré pour qu'on le voie : c'est permis, le schéma n'est pas à l'échelle.</p>");
    }
  }

  // ---------- pointer : toucher le bon côté (T' sur la rétine, extériorisation sur l'œil cyclope) ----------
  function gestePointer(E, fini) {
    nettoyerGlisser();
    if (S.schema.type !== "couple-oculaire") { pointerZones(E, fini); return; }
    const c = S.co, dev = c.devie;
    if (E.quoi === "exteriorisation") S.faits.add("cyclope");
    dessiner();
    $("jeu-actions").innerHTML = "";
    let fait = false;
    const q = CO.yeux[dev], C = CO.C;
    // Zones à toucher, visibles : le fond de l'œil dévié, ou le haut de l'œil cyclope
    if (E.quoi === "image-devie") el("path", { d: `M${q.x - CO.r - 4} ${q.y + 4} A${CO.r + 4} ${CO.r + 4} 0 0 0 ${q.x + CO.r + 4} ${q.y + 4}`, class: "s-zone-touche" });
    else el("rect", { x: C.x - 58, y: 74, width: 116, height: C.y - C.r - 84, rx: 10, class: "s-zone-touche" });
    const toucher = e => {
      if (fait) return;
      const p = pointDessin(e);
      if (!p) return;
      let cote, attendu;
      if (E.quoi === "image-devie") {
        const d = Math.hypot(p.x - q.x, p.y - q.y), f = plus(q, S.regard, -CO.r);
        if (d < CO.r * 0.4 || d > CO.r * 1.6 || p.y < q.y - 6) { aideSchema("Touche le fond de l'" + dev + ", la moitié du cercle tournée vers toi."); return; }
        cote = Math.sign(p.x - f.x); attendu = c.coteTprime;
        if (Math.abs(p.x - f.x) < 1.5) { aideSchema("Là, c'est la fovéa f'" + minus(dev) + " : T'" + minus(dev) + " tombe-t-il vraiment dessus ?"); return; }
      } else {
        if (p.x < C.x - 62 || p.y > C.y - C.r) { aideSchema("Touche au-dessus de l'œil cyclope, à gauche ou à droite de T''" + minus(c.fixateur) + "."); return; }
        cote = Math.sign(p.x - C.x); attendu = c.coteExteriorisation;
        if (Math.abs(p.x - C.x) < 4) { aideSchema("Droit devant, c'est T''" + minus(c.fixateur) + ". Où va l'autre ?"); return; }
      }
      fait = true;
      nettoyerGlisser();
      const juste = cote === attendu;
      S.faits.add(E.quoi === "image-devie" ? "Tprime" : "exterio");
      dessiner();
      const d = minus(dev), cotePerçu = c.coteExteriorisation > 0 ? "droite" : "gauche";
      fini(juste, E.quoi === "image-devie"
        ? "<p><b>" + (juste ? "Oui." : "Non.") + "</b> Le rayon issu de T passe par Q'" + d + " et tombe sur la rétine <b>" + c.retine + "</b> de l'" + dev + ", à côté de la fovéa : T'" + d + " ≠ f'" + d + ".</p>" +
          "<p>C'est ce décalage, et lui seul, qui fait voir double.</p>"
        : "<p><b>" + (juste ? "Oui." : "Non.") + "</b> T'" + d + " est en rétine " + c.retine + " : il est extériorisé du côté opposé, à <b>" + cotePerçu + "</b>. L'image de l'" + dev + " est vue " + (c.croisee ? "du côté de l'autre œil : diplopie croisée" : "de son propre côté : diplopie homonyme") + ".</p>" +
          "<p>Les extériorisations ne se dessinent que sur l'œil cyclope, jamais sur le couple.</p>");
    };
    svg.addEventListener("click", toucher);
    svg.classList.add("s-touche");
    nettoyerGlisser = () => { svg.removeEventListener("click", toucher); svg.classList.remove("s-touche"); nettoyerGlisser = () => {}; };
    aideSchema("");
  }

  // ---------- conclure : la conclusion rédigée sous le schéma ----------
  function phrasesCouple() {
    const c = S.co, sch = S.schema, d = minus(c.devie).toUpperCase(), f = minus(c.fixateur).toUpperCase();
    const ou = sch.distance <= 100 ? "en VP (" + nb(sch.distance, 0) + " cm)" : "en VL (" + nb(sch.distance / 100, 0) + " m)";
    const phrase = (nature, val, crois, dipl, base) => nature.charAt(0).toUpperCase() + nature.slice(1) + " de " + val + " Δ " + ou + " : en position passive, LR" + d + " croise LR" + f + " " + crois + " T, diplopie " + dipl + ". Prisme de réalignement base " + base + " sur l'" + c.devie + ".";
    const v = nb(c.valeur, 1), faux = nb(sch.perception.ecart * sch.distance / 100, 1);
    const autre = { exophorie: "ésophorie", "ésophorie": "exophorie", "derrière": "devant", devant: "derrière", "croisée": "homonyme", homonyme: "croisée", interne: "externe", externe: "interne" };
    return [
      { juste: true, texte: phrase(c.nature, v, c.croisementLR, c.diplopie, c.base) },
      { texte: phrase(autre[c.nature], v, autre[c.croisementLR], autre[c.diplopie], autre[c.base]), pourquoi: "Une diplopie " + c.diplopie + " donne une " + c.nature + " (loi de Desmarres)." },
      { texte: phrase(c.nature, v, c.croisementLR, c.diplopie, autre[c.base]), pourquoi: "Le prisme de réalignement d'une " + c.nature + " est base " + c.base + "." },
      { texte: phrase(c.nature, faux, c.croisementLR, c.diplopie, c.base), pourquoi: "La phorie est l'écart en cm divisé par la distance en m, pas multiplié." }
    ];
  }
  function gesteConclure(E, fini) {
    nettoyerGlisser();
    S.faits.add("cote");
    dessiner();
    const liste = melanger(TYPES_SCHEMA[S.schema.type].conclusions());
    const zone = boutons(liste.map((p, i) => [p.texte, () => choisir(i), "secondaire choix-rayon"]));
    function choisir(i) {
      const p = liste[i], bon = liste.find(x => x.juste);
      zone.querySelectorAll("button").forEach((b, n) => { b.disabled = true; if (liste[n].juste) b.classList.add("bon"); else if (n === i) b.classList.add("mauvais"); });
      fini(!!p.juste, "<p><b>" + (p.juste ? "C'est la bonne conclusion." : "Non.") + "</b> " + (p.juste ? (TYPES_SCHEMA[S.schema.type].bravo || "") : echapper(p.pourquoi)) + "</p>" +
        (p.juste ? "" : "<p>À rédiger : " + echapper(bon.texte) + "</p>"));
    }
  }

  // ---------- Les autres schémas de l'examen : œil réduit, parcours, image rétinienne, aniséiconie, prisme vertical ----------
  // Chaque type : dessiner (selon S.faits et S.etiq), emplacements (legender), pointer (zones à toucher), conclusions.
  function dessinerSchema() {
    const T = TYPES_SCHEMA[S.schema.type];
    if (!T || !S.co) { legende(); return; }
    // Hachures (parcours d'accommodation) : un motif dans les defs du dessin
    const defs = svg.querySelector("defs");
    if (defs) {
      const m = el("pattern", { id: "s-hachures", width: 7, height: 7, patternUnits: "userSpaceOnUse", patternTransform: "rotate(45)" }, defs);
      el("line", { x1: 0, y1: 0, x2: 0, y2: 7, class: "s-hachure-trait" }, m);
    }
    T.dessiner(el("g", { class: "s-schema" }));
    legende();
  }
  // Petits dessins communs
  const ligne = (g, x1, y1, x2, y2, classe, fleche) => el("line", { x1, y1, x2, y2, class: classe, ...(fleche ? { "marker-end": "url(#" + fleche + ")" } : {}) }, g);
  const ecrire = (g, x, y, t, classe) => texte(x, y, t, classe || "s-etiq centre", g);
  function rayonFleche(g, x1, y1, x2, y2, classe) { ligne(g, x1, y1, x2, y2, classe || "s-rayon"); flecheDeSens(x1, y1, x2, y2, g); }
  function coteH(g, x1, x2, y, t, classe) {        // cote horizontale à double flèche, texte au-dessus
    ligne(g, x1, y, x2, y, "s-cote");
    el("path", { d: `M${x1 + 5 * Math.sign(x2 - x1)} ${y - 3} L${x1} ${y} L${x1 + 5 * Math.sign(x2 - x1)} ${y + 3} M${x2 - 5 * Math.sign(x2 - x1)} ${y - 3} L${x2} ${y} L${x2 - 5 * Math.sign(x2 - x1)} ${y + 3}`, class: "s-cote s-cote-pointe" }, g);
    ecrire(g, (x1 + x2) / 2, y - 6, t, classe || "s-note centre or-note");
  }
  function plansHH(g, x, y, h) { ligne(g, x - 4, y - h, x - 4, y + h, "s-plan"); ligne(g, x + 4, y - h, x + 4, y + h, "s-plan"); }
  function verreSymbole(g, x, y, h, P, classe) {
    const c = P > 0 ? 1 : -1;
    ligne(g, x, y - h, x, y + h, "s-verre " + (classe || ""));
    el("path", { d: `M${x - 6} ${y - h + c * 7} L${x} ${y - h} L${x + 6} ${y - h + c * 7} M${x - 6} ${y + h - c * 7} L${x} ${y + h} L${x + 6} ${y + h - c * 7}`, class: "s-verre " + (classe || ""), fill: "none" }, g);
  }
  const posee = id => S.etiq && S.etiq[id];
  const dioptries = v => nb(v, 2, true) + " δ";

  // ---------- pointer (schémas autres que le couple) : toucher la bonne zone du dessin ----------
  function pointerZones(E, fini) {
    const def = TYPES_SCHEMA[S.schema.type].pointer[E.quoi]();
    dessiner();
    $("jeu-actions").innerHTML = "";
    let fait = false;
    const gz = el("g", { class: "s-zones" });
    def.zones.forEach(z => {
      const gr = el("g", { class: "s-zone", tabindex: 0, role: "button", "aria-label": z.texte }, gz);
      el("rect", { x: z.x, y: z.y, width: z.w, height: z.h, rx: 8, class: "s-zone-forme" }, gr);
      if (z.texte) texte(z.x + z.w / 2, z.y + (z.haut ? 14 : z.h - 7), z.texte, "s-note centre", gr);
      const agir = () => choisir(z, gr);
      gr.addEventListener("click", agir);
      gr.addEventListener("keydown", ev => { if (ev.key === "Enter" || ev.key === " ") { ev.preventDefault(); agir(); } });
    });
    function choisir(z, gr) {
      if (fait) return;
      fait = true;
      const juste = z.cle === def.bon;
      S.faits.add(def.fait || E.quoi);
      dessiner();
      fini(juste, "<p><b>" + (juste ? "Oui." : "Non.") + "</b> " + def.message + "</p>");
    }
    aideSchema(def.aide || "Touche la bonne zone du dessin.");
  }

  // ===== 1. L'œil réduit amétrope : H H', rétine [R'], T∞, T', remotum =====
  const OR_ = { y: 150, xH: 240, xR: 360 };
  function xImageOeil(c) { return c.image === "devant" ? 312 : c.image === "derriere" ? 406 : OR_.xR; }
  function xRemotum(c) { return c.remotum === "devant" ? 120 : c.remotum === "derriere" ? 456 : 20; }
  const TYPE_OEIL = {
    legende: "Plans principaux, rétine, objet à l'infini et état accommodatif : sans eux, la position de T' ne veut rien dire.",
    bravo: "Nature, position de l'image, proximité en dioptries et remotum : tout y est.",
    dessiner(g) {
      const c = S.co, y = OR_.y, xH = OR_.xH, xR = OR_.xR, xT = xImageOeil(c);
      ligne(g, 10, y, 472, y, "s-repere");
      ecrire(g, 46, y + 5, "//", "s-note centre");
      [-34, 34].forEach(d => rayonFleche(g, 14, y + d, xH - 4, y + d));
      plansHH(g, xH, y, 66);
      ligne(g, xR, y - 72, xR, y + 72, "t-retine");
      if (S.faits.has("image")) {
        [-34, 34].forEach(d => {
          // De H' vers T', puis jusqu'à la rétine (myope) ; arrêté à la rétine et prolongé en tirets (hypermétrope)
          if (c.image === "derriere") { ligne(g, xH + 4, y + d, xR, y + d * (xT - xR) / (xT - xH - 4), "s-rayon"); ligne(g, xR, y + d * (xT - xR) / (xT - xH - 4), xT, y, "s-rayon tirets"); }
          else { ligne(g, xH + 4, y + d, xT, y, "s-rayon"); if (c.image === "devant") ligne(g, xT, y, xR, y - d * (xR - xT) / (xT - xH - 4), "s-rayon"); }
        });
        el("circle", { cx: xT, cy: y, r: 3.2, class: "s-point-or" }, g);
        ecrire(g, xT, y - 10, "T'", "s-etiq centre or");
        if (c.image !== "sur") coteH(g, Math.min(xT, xR), Math.max(xT, xR), y + 52, dioptries(c.ecart).replace(/^[+−-]/, ""));
      }
      if (S.faits.has("remotum")) {
        const x = xRemotum(c);
        el("circle", { cx: x, cy: y, r: 3.4, class: c.remotum === "derriere" ? "s-point-vide" : "s-point-or" }, g);
        ecrire(g, x, y + 22, "R", "s-etiq centre or");
      }
      if (S.faits.has("calc-remotum") && c.HR !== null) coteH(g, xH, xRemotum(c), y - 94, "HR = " + nb(c.HR, 0, true) + " cm");
      if (posee("HH")) ecrire(g, xH, y - 76, posee("HH"));
      if (posee("retine")) ecrire(g, xR, y - 80, posee("retine"));
      if (posee("objet")) ecrire(g, 26, y - 44, posee("objet"));
      if (posee("acc")) ecrire(g, xH, y + 94, posee("acc"), "s-etiq centre petit-etiq");
    },
    emplacements() {
      const y = OR_.y, xH = OR_.xH, xR = OR_.xR;
      return [
        { id: "HH", etiquette: "H H'", places: [{ cle: "HH", x: xH, y: y - 76, large: 52 }], bon: "HH", pose: "H H'", pourquoi: "H et H' sont les plans principaux de l'œil réduit : les deux traits verticaux." },
        { id: "retine", etiquette: "[R']", places: [{ cle: "retine", x: xR, y: y - 80, large: 48 }], bon: "retine", pose: "[R']", pourquoi: "[R'] désigne la rétine : le plan conjugué du remotum, le trait rose." },
        { id: "objet", etiquette: "T∞", places: [{ cle: "objet", x: 30, y: y - 44, large: 46 }], bon: "objet", pose: "T∞", pourquoi: "T∞ est l'objet éloigné : à gauche, d'où arrivent les rayons parallèles." },
        { id: "acc", etiquette: "Acc = 0", places: [{ cle: "acc", x: xH, y: y + 94, large: 80 }], bon: "acc", pose: "Acc = 0", pourquoi: "L'état accommodatif se note sous l'œil, à côté des plans principaux." }
      ];
    },
    pointer: {
      image() {
        const c = S.co, y = OR_.y;
        return { bon: c.image, aide: "Touche la zone où se forme T' : devant la rétine, sur elle, ou derrière.",
          zones: [{ cle: "devant", x: 256, y: y - 60, w: 92, h: 120, texte: "devant" }, { cle: "sur", x: 350, y: y - 60, w: 20, h: 120, texte: "" }, { cle: "derriere", x: 372, y: y - 60, w: 92, h: 120, texte: "derrière" }],
          message: "Œil " + c.nature + " de " + dioptries(c.R) + " qui n'accommode pas : l'image T' de T∞ se forme " + ({ devant: "devant la rétine", derriere: "derrière la rétine", sur: "sur la rétine" })[c.image] + (c.image === "sur" ? "." : ", à " + dioptries(c.ecart).replace(/^[+−-]/, "") + " du plan rétinien. Cette proximité en dioptries se cote sur le schéma.") };
      },
      remotum() {
        const c = S.co, y = OR_.y;
        return { bon: c.remotum, aide: "Où est le remotum R de cet œil ?",
          zones: [{ cle: "infini", x: 2, y: y - 24, w: 36, h: 48, texte: "∞" }, { cle: "devant", x: 56, y: y - 24, w: 170, h: 48, texte: "devant l'œil" }, { cle: "derriere", x: 376, y: y - 24, w: 100, h: 48, texte: "derrière l'œil" }],
          message: c.remotum === "devant" ? "Le remotum d'un myope est réel, devant l'œil : c'est le point vu net sans accommoder." : c.remotum === "derriere" ? "Le remotum d'un hypermétrope est virtuel, derrière l'œil." : "Le remotum d'un emmétrope est à l'infini." };
      }
    },
    conclusions() {
      const c = S.co, R = dioptries(c.R), e = dioptries(c.ecart).replace(/^[+−-]/, ""), HR = c.HR === null ? "" : nb(Math.abs(c.HR), 0);
      const ph = (img, rem, hr) => "Œil " + c.nature + " de " + R + " : sans accommoder, l'image T' d'un objet éloigné se forme " + img + " la rétine, à " + e + " du plan rétinien. Le remotum est " + rem + (hr ? " (HR = " + hr + " cm)." : ".");
      const vrai = c.remotum === "devant" ? ["devant", "réel, devant l'œil", "−" + HR] : ["derrière", "virtuel, derrière l'œil", "+" + HR];
      const faux = c.remotum === "devant" ? ["derrière", "virtuel, derrière l'œil", "+" + HR] : ["devant", "réel, devant l'œil", "−" + HR];
      return [
        { juste: true, texte: ph(...vrai) },
        { texte: ph(faux[0], vrai[1], vrai[2]), pourquoi: "Un œil " + c.nature + " forme l'image d'un objet éloigné " + vrai[0] + " la rétine." },
        { texte: ph(vrai[0], faux[1], faux[2]), pourquoi: "HR = 1/R : avec R " + (c.R < 0 ? "négatif, le remotum est réel, devant l'œil." : "positif, le remotum est virtuel, derrière l'œil.") },
        { texte: ph(vrai[0], vrai[1], (c.R < 0 ? "−" : "+") + nb(Math.abs(c.HR) / 10, 0)), pourquoi: "HR = 1/R donne des mètres : " + nb(1 / Math.abs(c.R), 2) + " m, soit " + HR + " cm." }
      ];
    }
  };

  // ===== 2. Le parcours d'accommodation (œil nu, myope) : R, P, cotes depuis H =====
  const PA = { y: 150, xH: 430 };
  const xDist = d => PA.xH - 380 * d / (d + 30);                 // d en cm devant l'œil ; l'infini tout à gauche
  const TYPE_PARCOURS = {
    legende: "Origine des cotes, parcours hachuré et verres portés : le correcteur ne devine rien.",
    bravo: "Le parcours, ses deux bornes cotées, et ce que l'élève voit net ou flou.",
    dessiner(g) {
      const c = S.co, y = PA.y, xH = PA.xH, xR = xDist(-c.HR), xP = xDist(-c.HP);
      ligne(g, 8, y, 472, y, "s-repere");
      ecrire(g, 22, y - 10, "∞", "s-etiq centre");
      ligne(g, xH, y - 46, xH, y + 46, "s-plan");
      el("ellipse", { cx: xH + 22, cy: y, rx: 26, ry: 34, class: "s-oeil" }, g);
      if (S.faits.has("parcours")) el("rect", { x: xR, y: y - 9, width: xP - xR, height: 18, class: "s-hachure" }, g);
      if (S.faits.has("calc-remotum")) {
        el("circle", { cx: xR, cy: y, r: 3.4, class: "s-point-or" }, g); ecrire(g, xR, y - 14, "R", "s-etiq centre or");
        ligne(g, xR, y + 6, xR, y + 44, "s-rappel"); coteH(g, xH, xR, y + 40, "HR = " + nb(c.HR, 1, true) + " cm");
      }
      if (S.faits.has("calc-punctum")) {
        el("circle", { cx: xP, cy: y, r: 3.4, class: "s-point-or" }, g); ecrire(g, xP, y - 14, "P", "s-etiq centre or");
        ligne(g, xP, y + 6, xP, y + 78, "s-rappel"); coteH(g, xH, xP, y + 74, "HP = " + nb(c.HP, 1, true) + " cm");
      }
      if (posee("H")) ecrire(g, xH, y - 54, posee("H"));
      if (posee("parcours")) ecrire(g, (xR + xP) / 2, y - 40, posee("parcours"), "s-etiq centre or");
      if (posee("verre")) ecrire(g, xH + 22, y + 66, posee("verre"), "s-etiq centre petit-etiq");
    },
    emplacements() {
      const c = S.co, y = PA.y, xH = PA.xH, xR = xDist(-c.HR), xP = xDist(-c.HP);
      return [
        { id: "H", etiquette: "H, origine", places: [{ cle: "H", x: xH, y: y - 54, large: 50 }], bon: "H", pose: "H (origine)", pourquoi: "Les cotes partent de H : l'origine se précise sur le schéma." },
        { id: "parcours", etiquette: "Parcours d'accommodation", places: [{ cle: "loin", x: (22 + xR) / 2, y: y - 40, large: 70 }, { cle: "RP", x: (xR + xP) / 2, y: y - 40, large: 70 }, { cle: "pres", x: (xP + xH) / 2, y: y - 40, large: 70 }], bon: "RP", pose: "Parcours d'accommodation",
          pourquoi: "Le parcours d'accommodation va du remotum R au proximum P : c'est la partie hachurée." },
        { id: "verre", etiquette: "Œil nu", places: [{ cle: "verre", x: xH + 22, y: y + 66, large: 60 }], bon: "verre", pose: "Œil nu", pourquoi: "Les verres portés (ou « œil nu ») se notent près de l'œil." }
      ];
    },
    pointer: {
      parcours() {
        const c = S.co, y = PA.y, xR = xDist(-c.HR), xP = xDist(-c.HP);
        return { bon: "RP", aide: "Touche la partie de l'axe à hachurer : celle où l'œil voit net en accommodant.",
          zones: [{ cle: "loin", x: 30, y: y - 22, w: xR - 33, h: 44, texte: "", haut: true }, { cle: "RP", x: xR + 3, y: y - 22, w: xP - xR - 6, h: 44, texte: "" }, { cle: "pres", x: xP + 3, y: y - 22, w: PA.xH - xP - 7, h: 44, texte: "" }],
          message: "Sans accommoder, l'œil voit net en R ; en accommodant au maximum (" + dioptries(c.A).replace("+", "") + "), en P. Entre les deux, tout est net : c'est le parcours d'accommodation, à hachurer. Au-delà de R, c'est flou." };
      }
    },
    conclusions() {
      const c = S.co, r = nb(Math.abs(c.HR), 1), p = nb(Math.abs(c.HP), 1), faux = nb(100 / c.A, 1);
      const ph = (a, b, flou) => "Le parcours d'accommodation va de R, à " + a + " cm devant l'œil, à P, à " + b + " cm. Sans lunettes, ce myope voit net entre " + b + " et " + a + " cm, et flou " + flou + ".";
      return [
        { juste: true, texte: ph(r, p, "au-delà de " + r + " cm") },
        { texte: ph(r, p, "en deçà de " + p + " cm seulement"), pourquoi: "Un myope voit flou au-delà de son remotum : au-delà de " + r + " cm." },
        { texte: ph(r, faux, "au-delà de " + r + " cm"), pourquoi: "HP se calcule avec la proximité de P : R − A = " + dioptries(c.P) + ", pas avec A seule." },
        { texte: "Le parcours d'accommodation va de R à l'infini : ce myope voit net de loin sans lunettes.", pourquoi: "Le remotum d'un myope est à distance finie : il ne voit pas net de loin sans compensation." }
      ];
    }
  };

  // ===== 3. Image rétinienne : lunettes ou lentilles (myope), image intermédiaire Ai Bi =====
  const IR = { y: 150, xL: 120, xH: 250, xR: 370, u: 0.3 };
  function rayonsLunettes(c, xAi, couleur, g, avecRetine, u) {
    u = u || IR.u;
    const y = IR.y, hB = (IR.xL - xAi) * u, Bi = { x: xAi, y: y - hB };
    const pente = (y - Bi.y) / (IR.xH - Bi.x), yV = Bi.y + pente * (IR.xL - Bi.x);
    rayonFleche(g, 14, yV - (IR.xL - 14) * u, IR.xL, yV, "s-rayon " + couleur);
    rayonFleche(g, IR.xL, yV, IR.xH - 4, y, "s-rayon " + couleur);
    ligne(g, Bi.x, Bi.y, IR.xL, yV, "s-rayon tirets " + couleur);
    ligne(g, xAi, y, xAi, Bi.y, "s-image-inter " + couleur, "pointe-image");
    const yp = (IR.xR - IR.xH - 4) * pente;
    if (avecRetine) ligne(g, IR.xH + 4, y, IR.xR, y + yp, "s-rayon " + couleur);
    return { Bi, yp };
  }
  const TYPE_IMAGE = {
    legende: "Verre, image intermédiaire, plans principaux et images rétiniennes : chaque élément est nommé.",
    bravo: "L'image intermédiaire, les deux images rétiniennes comparées, et l'ordre de grandeur.",
    xAi(c) { return c.intermediaire === "devant" ? 30 : 200; },
    dessiner(g) {
      const c = S.co, y = IR.y;
      ligne(g, 8, y, 472, y, "s-repere");
      verreSymbole(g, IR.xL, y, 70, c.P);
      plansHH(g, IR.xH, y, 70);
      ligne(g, IR.xR, y - 80, IR.xR, y + 80, "t-retine");
      // Lentille de contact : l'œil reçoit le faisceau sous l'angle u
      rayonFleche(g, 14, y - (IR.xH - 14) * IR.u, IR.xH - 4, y, "s-rayon bleu");
      const yc = (IR.xR - IR.xH - 4) * IR.u;
      ligne(g, IR.xH + 4, y, IR.xR, y + yc, "s-rayon bleu");
      ligne(g, IR.xR + 8, y, IR.xR + 8, y + yc, "s-image-ret bleu");
      ecrire(g, 24, y - (IR.xH - 14) * IR.u - 8, "B∞", "s-etiq centre");
      if (S.faits.has("intermediaire")) {
        const r = rayonsLunettes(c, this.xAi(c), "", g, true);
        ligne(g, IR.xR + 16, y, IR.xR + 16, y + r.yp, "s-image-ret or");
        ecrire(g, r.Bi.x, r.Bi.y - 8, "Bi", "s-etiq centre or"); ecrire(g, r.Bi.x, y + 18, "Ai", "s-etiq centre or");
      }
      if (posee("DL")) ecrire(g, IR.xL, y - 80, posee("DL"));
      if (posee("HH")) ecrire(g, IR.xH, y - 80, posee("HH"));
      if (posee("yc")) ecrire(g, IR.xR + 12, y + yc + 18, posee("yc"), "s-etiq petit-etiq bleu-etiq");
      if (posee("yl")) { const yl = (IR.xR - IR.xH - 4) * (IR.u * (IR.xL - this.xAi(c)) / (IR.xH - this.xAi(c))); ecrire(g, IR.xR + 12, y + yl + 2, posee("yl"), "s-etiq petit-etiq or"); }
    },
    emplacements() {
      const c = S.co, y = IR.y, yc = (IR.xR - IR.xH - 4) * IR.u, yl = (IR.xR - IR.xH - 4) * (IR.u * (IR.xL - this.xAi(c)) / (IR.xH - this.xAi(c)));
      const pres = { cle: "petite", x: IR.xR + 52, y: y + yl + 2, large: 80 }, loin = { cle: "grande", x: IR.xR + 52, y: y + yc + 18, large: 80 };
      const grandeL = c.plusGrande === "lunettes";
      return [
        { id: "DL", etiquette: "DL " + dioptries(c.P), places: [{ cle: "DL", x: IR.xL, y: y - 80, large: 70 }], bon: "DL", pose: "DL " + dioptries(c.P), pourquoi: "Le verre porté et sa puissance s'écrivent au-dessus du verre." },
        { id: "HH", etiquette: "H H'", places: [{ cle: "HH", x: IR.xH, y: y - 80, large: 52 }], bon: "HH", pose: "H H'", pourquoi: "H H' : les plans principaux de l'œil, origine des angles sur ce schéma." },
        { id: "yl", etiquette: "y' lunettes", places: [grandeL ? loin : pres], bon: grandeL ? "grande" : "petite", pose: "y' lunettes", pourquoi: "En lunettes, suis le rayon or : il vient de Bi et arrive sur la rétine plus " + (grandeL ? "loin" : "près") + " de l'axe." },
        { id: "yc", etiquette: "y' lentille", places: [grandeL ? pres : loin], bon: grandeL ? "petite" : "grande", pose: "y' lentille", pourquoi: "En lentilles, suis le rayon bleu : l'œil reçoit directement le faisceau sous l'angle u." }
      ];
    },
    pointer: {
      intermediaire() {
        const c = S.co, y = IR.y;
        return { bon: c.intermediaire, aide: "Le verre donne d'abord une image Ai Bi de l'objet éloigné. Où se forme-t-elle ?",
          zones: [{ cle: "devant", x: 20, y: y - 40, w: 140, h: 80, texte: "devant le verre" }, { cle: "entre", x: 180, y: y - 40, w: 110, h: 80, texte: "entre verre et œil" }, { cle: "derriere", x: 312, y: y - 40, w: 100, h: 80, texte: "derrière l'œil" }],
          message: "Pour un objet éloigné, Ai Bi est au foyer image du verre" + (c.P < 0 ? " divergent : devant lui, virtuelle (à " + nb(Math.abs(100 / c.P), 0) + " cm)" : "") + ". Le compensateur parfait met ce foyer sur le remotum. L'œil voit Ai Bi sous un angle plus petit que l'objet : son image rétinienne est plus petite." };
      }
    },
    conclusions() {
      const c = S.co, e = nb(c.ecart, 0), grand = c.plusGrande, petit = grand === "lunettes" ? "lentilles" : "lunettes";
      const ph = (g2, p2, v) => "L'image rétinienne est plus grande en " + g2 + " qu'en " + p2 + ", d'environ " + v + " % (LH × |DL|). Un objet juste reconnu en " + g2 + " ne l'est plus en " + p2 + ".";
      return [
        { juste: true, texte: ph(grand, petit, e) },
        { texte: ph(petit, grand, e), pourquoi: "En lunettes, un verre " + (c.P < 0 ? "divergent rapetisse" : "convergent agrandit") + " l'image rétinienne." },
        { texte: ph(grand, petit, nb(c.LH * 10 * Math.abs(c.P), 0)), pourquoi: "Règle d'estimation : LH en cm, pas en mm : " + nb(c.LH, 1) + " × " + nb(Math.abs(c.P), 0) + " ≈ " + e + " %." },
        { texte: "L'image rétinienne a la même taille en lunettes et en lentilles : seul le confort change.", pourquoi: "La distance verre-œil change la taille de l'image rétinienne : c'est tout l'intérêt de la comparaison." }
      ];
    }
  };

  // ===== 4. Aniséiconie : schéma comparatif OD / OG en lunettes =====
  const TYPE_ANISEICONIE = {
    legende: "Deux couleurs, une par œil, et les deux verres nommés : le schéma comparatif se lit d'un coup d'œil.",
    bravo: "Le côté de l'image la plus grande, la valeur en %, et le risque pour la vision binoculaire.",
    xAi(P) { return IR.xL - Math.min(100, Math.abs(100 / P) * 2); },
    dessiner(g) {
      const c = S.co, y = IR.y;
      ligne(g, 8, y, 472, y, "s-repere");
      verreSymbole(g, IR.xL - 7, y, 70, c.OD, "or");
      verreSymbole(g, IR.xL + 7, y, 70, c.OG, "violet");
      plansHH(g, IR.xH, y, 70);
      ligne(g, IR.xR, y - 80, IR.xR, y + 80, "t-retine");
      ecrire(g, 24, y - 92, "B∞", "s-etiq centre");
      const voir = S.faits.has("plus-grande");
      ["OD", "OG"].forEach(o => {
        const xAi = this.xAi(c[o]), cl = o === "OD" ? "" : "violet";
        const r = rayonsLunettes(c, xAi, cl, g, voir, 0.45);
        ecrire(g, xAi, y + 18, "Ai" + o.slice(1).toLowerCase(), "s-etiq centre " + (o === "OD" ? "or" : "violet-etiq"));
        if (voir) { ligne(g, IR.xR + (o === "OD" ? 8 : 16), y, IR.xR + (o === "OD" ? 8 : 16), y + r.yp, "s-image-ret " + (o === "OD" ? "or" : "violet")); ecrire(g, IR.xR + 24, y + r.yp + (o === "OD" ? 12 : -2), "y'" + o.slice(1).toLowerCase(), "s-etiq " + (o === "OD" ? "or" : "violet-etiq")); }
      });
      if (posee("DLD")) ecrire(g, IR.xL - 7, y - 80, posee("DLD"), "s-etiq droite or");
      if (posee("DLG")) ecrire(g, IR.xL + 7, y + 92, posee("DLG"), "s-etiq violet-etiq");
      if (posee("HH")) ecrire(g, IR.xH, y - 80, posee("HH"));
    },
    emplacements() {
      const c = S.co, y = IR.y;
      return [
        { id: "DLD", etiquette: "DLD " + dioptries(c.OD), places: [{ cle: "haut", x: IR.xL - 44, y: y - 80, large: 76 }, { cle: "bas", x: IR.xL + 44, y: y + 92, large: 76 }], bon: "haut", pose: "DLD " + dioptries(c.OD), pourquoi: "Le verre de l'OD est tracé en or, comme ses rayons." },
        { id: "DLG", etiquette: "DLG " + dioptries(c.OG), places: [], bon: "bas", pose: "DLG " + dioptries(c.OG), pourquoi: "Le verre de l'OG est tracé en violet, comme ses rayons." },
        { id: "HH", etiquette: "H H'", places: [{ cle: "HH", x: IR.xH, y: y - 80, large: 52 }], bon: "HH", pose: "H H'", pourquoi: "Pour l'aniséiconie, on prend de préférence les plans principaux de chaque œil comme origine." }
      ].map((t, i, tout) => t.id === "DLG" ? { ...t, places: tout[0].places } : t);
    },
    pointer: {
      "plus-grande"() {
        const c = S.co, y = IR.y;
        return { bon: c.plusGrande, fait: "plus-grande", aide: "D'après les deux images intermédiaires, quel œil a la plus grande image rétinienne ? Touche-le sur la rétine.",
          zones: [{ cle: "OD", x: IR.xR - 4, y: y + 4, w: 54, h: 44, texte: "OD" }, { cle: "OG", x: IR.xR - 4, y: y + 52, w: 54, h: 44, texte: "OG" }],
          message: "Ai" + (c.plusGrande === "OD" ? "d" : "g") + " est vue sous le plus grand angle depuis H : l'" + c.plusGrande + " (verre de " + dioptries(c[c.plusGrande]) + ", le plus " + (c[c.plusGrande] < 0 ? "faible en myopie" : "convergent") + ") a la plus grande image rétinienne." };
      }
    },
    conclusions() {
      const c = S.co, v = nb(c.valeur, 1), autre = c.plusGrande === "OD" ? "OG" : "OD";
      const ph = (val, oeil) => "Aniséiconie induite d'environ " + val + " % (LH × |DLd − DLg|), en faveur de l'" + oeil + ". Au-delà de quelques %, elle peut gêner la fusion et perturber la vision binoculaire.";
      return [
        { juste: true, texte: ph(v, c.plusGrande) },
        { texte: ph(v, autre), pourquoi: "L'image la plus grande est celle de l'" + c.plusGrande + ", au verre le plus " + (c[c.plusGrande] < 0 ? "faible" : "convergent") + "." },
        { texte: ph(nb(c.LH * Math.abs(c.OD + c.OG), 1), c.plusGrande), pourquoi: "C'est la différence des deux verres qui compte : |DLd − DLg| = " + nb(Math.abs(c.OD - c.OG), 2) + " δ." },
        { texte: "Aucune aniséiconie : les deux yeux portent des verres de même signe.", pourquoi: "Des verres de puissances différentes donnent des images de tailles différentes, même de même signe." }
      ];
    }
  };

  // ===== 5. Le prisme vertical : deux vues de profil séparées, OD puis OG =====
  const PV = { xV: 210, xQ: 360, r: 32, yD: 76, yG: 222, gPx: 7 };
  function geoProfil(c, o) {
    const y0 = o === "OD" ? PV.yD : PV.yG, s = c.regard === "bas" ? 1 : -1;
    const B = { x: 30, y: y0 + s * 46 };
    const yS = y0 + s * 46 * (PV.xQ - PV.xV) / (PV.xQ - B.x);          // sans verre, le rayon B → Q' couperait le verre ici
    const I = { x: PV.xV, y: yS + s * PV.gPx * c[o].P };
    return { y0, s, B, I };
  }
  const TYPE_PRISME = {
    legende: "Deux vues de profil séparées, jamais superposées, et la base du prisme au point de passage.",
    bravo: "L'effet de chaque verre, la différence subie par le couple, et la gêne attendue.",
    dessiner(g) {
      const c = S.co;
      ligne(g, 0, 152, 480, 152, "s-separation");
      ["OD", "OG"].forEach(o => {
        const { y0, s, B, I } = geoProfil(c, o), Q = { x: PV.xQ, y: y0 };
        ligne(g, 8, y0, 472, y0, "s-repere");
        verreSymbole(g, PV.xV, y0, 56, c[o].P);
        el("circle", { cx: PV.xV, cy: y0, r: 2.6, class: "s-point" }, g);
        ecrire(g, PV.xV + 9, y0 - 6, "O", "s-note");
        el("circle", { cx: Q.x, cy: Q.y, r: PV.r, class: "s-oeil" }, g);
        el("path", { d: `M${Q.x - PV.r * 0.88} ${Q.y - PV.r * 0.48} Q${Q.x - PV.r * 1.42} ${Q.y} ${Q.x - PV.r * 0.88} ${Q.y + PV.r * 0.48}`, class: "s-cornee" }, g);
        el("circle", { cx: Q.x, cy: Q.y, r: 2.4, class: "s-point" }, g);
        ecrire(g, Q.x + 6, Q.y - 6, "Q'", "s-note");
        el("circle", { cx: B.x, cy: B.y, r: 3.2, class: "s-point-or" }, g);
        ecrire(g, B.x + 2, B.y + s * 16 + 4, "B", "s-etiq centre");
        rayonFleche(g, B.x, B.y, I.x, I.y);
        if (S.faits.has("deviation")) {
          rayonFleche(g, I.x, I.y, Q.x - PV.r, Q.y + (I.y - Q.y) * PV.r / (Q.x - I.x));
          const f = { x: Q.x + PV.r * (Q.x - I.x) / Math.hypot(Q.x - I.x, Q.y - I.y), y: Q.y + PV.r * (Q.y - I.y) / Math.hypot(Q.x - I.x, Q.y - I.y) };
          ligne(g, Q.x - PV.r, Q.y + (I.y - Q.y) * PV.r / (Q.x - I.x), f.x, f.y, "s-rayon");
          el("circle", { cx: f.x, cy: f.y, r: 2.6, class: "s-fovea" }, g);
          ligne(g, I.x, I.y, I.x + (I.x - B.x) * 0.35, I.y + (I.y - B.y) * 0.35, "s-rayon tirets");     // sans déviation
        }
        if (S.faits.has("rotation")) {
          const a = Math.atan2(I.y - Q.y, I.x - Q.x), R = 48, a0 = Math.PI;
          el("path", { d: `M${Q.x + R * Math.cos(a0)} ${Q.y + R * Math.sin(a0)} A${R} ${R} 0 0 ${s > 0 ? 0 : 1} ${Q.x + R * Math.cos(a)} ${Q.y + R * Math.sin(a)}`, class: "s-angle" }, g);
          ecrire(g, Q.x - R - 12, Q.y + s * 16 + 4, "w'" + o.slice(1).toLowerCase(), "s-note droite or-note");
        }
        if (S.faits.has("calc-prisme-" + o.toLowerCase())) ecrire(g, PV.xV - 10, y0 - 12, nb(c[o].effet, 1) + " Δ base " + c[o].base, "s-note droite or-note");
        if (posee("vue" + o)) ecrire(g, 12, y0 - 52, posee("vue" + o), "s-etiq");
        if (o === "OD" && posee("base")) { const yb = I.y + (c.OD.base === "haut" ? -18 : 22); ecrire(g, PV.xV + 12, yb, posee("base"), "s-etiq petit-etiq or"); }
      });
      if (S.faits.has("calc-difference-prismatique")) ecrire(g, 470, 148, "Couple : " + nb(c.difference, 1) + " Δ vertical", "s-note droite or-note");
    },
    emplacements() {
      const c = S.co, I = geoProfil(c, "OD").I;
      return [
        { id: "vueOD", etiquette: "OD · vue de profil", places: [{ cle: "vueOD", x: 70, y: PV.yD - 52, large: 120 }, { cle: "vueOG", x: 70, y: PV.yG - 52, large: 120 }], bon: "vueOD", pose: "OD · vue de profil", pourquoi: "On dessine l'OD en haut, l'OG en bas, chacun dans sa propre vue de profil." },
        { id: "vueOG", etiquette: "OG · vue de profil", places: [], bon: "vueOG", pose: "OG · vue de profil", pourquoi: "L'OG est la vue du bas." },
        { id: "base", etiquette: "Base", places: [{ cle: "haut", x: PV.xV + 30, y: I.y - 18, large: 44 }, { cle: "bas", x: PV.xV + 30, y: I.y + 24, large: 44 }], bon: c.OD.base, pose: "Base",
          pourquoi: "Verre " + (c.OD.P > 0 ? "convergent : la base est tournée vers le centre optique" : "divergent : la base est tournée vers le bord") + ", donc vers le " + c.OD.base + " au point de passage." }
      ].map((t, i, tout) => t.id === "vueOG" ? { ...t, places: tout[0].places } : t);
    },
    pointer: {
      deviation() {
        const c = S.co, { I } = geoProfil(c, "OD");
        return { bon: c.OD.base, fait: "deviation", aide: "Sur l'OD : après le verre, le rayon part vers le haut, tout droit, ou vers le bas ?",
          zones: [{ cle: "haut", x: I.x + 12, y: I.y - 58, w: 90, h: 40, texte: "vers le haut", haut: true }, { cle: "droit", x: I.x + 12, y: I.y - 16, w: 90, h: 30, texte: "tout droit", haut: true }, { cle: "bas", x: I.x + 12, y: I.y + 16, w: 90, h: 40, texte: "vers le bas", haut: true }],
          message: "Un prisme dévie la lumière vers sa base : ici vers le " + c.OD.base + ". L'image, elle, est vue déplacée vers le sommet, et l'œil doit tourner pour la suivre." };
      },
      rotation() {
        const c = S.co;
        return { bon: c.tourneLePlus, fait: "rotation", aide: "Quel œil doit tourner le plus pour regarder B ? Touche-le.",
          zones: [{ cle: "OD", x: PV.xQ - 40, y: PV.yD - 40, w: 80, h: 80, texte: "OD", haut: true }, { cle: "OG", x: PV.xQ - 40, y: PV.yG - 40, w: 80, h: 80, texte: "OG", haut: true }],
          message: "Le verre le plus " + (c.regard === "bas" ? "convergent" : "divergent") + " déplace le plus l'image : l'" + c.tourneLePlus + " tourne plus que l'autre (w'" + c.tourneLePlus.slice(1).toLowerCase() + " > w'" + (c.tourneLePlus === "OD" ? "g" : "d") + "). Dans le plan vertical, cette différence de rotation gêne la vision binoculaire." };
      }
    },
    conclusions() {
      const c = S.co, d = nb(c.difference, 1), autre = c.tourneLePlus === "OD" ? "OG" : "OD";
      const ph = (val, base, oeil) => "Le couple subit " + val + " Δ d'effet prismatique vertical (OD " + nb(c.OD.effet, 1) + " Δ, OG " + nb(c.OG.effet, 1) + " Δ, bases " + base + "). L'" + oeil + " doit tourner davantage ; les réserves fusionnelles verticales sont faibles, une gêne est probable.";
      const bases = c.OD.base === c.OG.base ? c.OD.base + "s" : "opposées";
      return [
        { juste: true, texte: ph(d, bases, c.tourneLePlus) },
        { texte: ph(d, bases, autre), pourquoi: "C'est l'" + c.tourneLePlus + ", au verre le plus " + (c.regard === "bas" ? "convergent" : "divergent") + ", qui tourne le plus." },
        { texte: ph(nb(c.OD.effet + c.OG.effet, 1), bases, c.tourneLePlus), pourquoi: "Bases du même côté : les effets se retranchent, le couple subit la différence (" + d + " Δ), pas la somme." },
        { texte: ph(d, c.OD.base === "haut" ? "basses" : "hautes", c.tourneLePlus), pourquoi: "Au point de passage, la base est vers le " + c.OD.base + " (" + (c.OD.P > 0 ? "verre convergent : base vers le centre optique" : "verre divergent : base vers le bord") + ")." }
      ];
    }
  };

  const TYPES_SCHEMA = {
    "couple-oculaire": { dessiner: () => dessinerCouple(), emplacements: () => emplacementsCouple(), conclusions: () => phrasesCouple(),
      legende: "C'est ce que le correcteur cherche en premier : la vue, les deux yeux complets, l'œil fixateur et le dissociateur.",
      bravo: "Nature, valeur, et base du prisme : les trois y sont." },
    "oeil-reduit": TYPE_OEIL, "parcours": TYPE_PARCOURS, "image-retinienne": TYPE_IMAGE, "aniseiconie": TYPE_ANISEICONIE, "prisme-vertical": TYPE_PRISME
  };

  const GESTES = { rayon: gesteRayon, placer: gestePlacer, designer: gesteDesigner, relier: gesteRelier, faisceau: gesteFaisceau, calcul: gesteCalcul,
    legender: gesteLegender, regard: gesteRegard, pointer: gestePointer, conclure: gesteConclure };
  const CONSIGNES = {
    rayon: E => "Que devient ce rayon après " + E.apres + " ?",
    placer: E => ({ image: "Place l'image après " + E.apres + ".", "image-diaphragme": "Place l'image de " + E.diaphragme + " vue depuis l'objet.", "foyer-image": "Place le foyer image du système.", "foyer-objet": "Place le foyer objet du système.", remotum: "Place le remotum R.", punctum: "Place le punctum proximum P.", "image-retine": "Place l'image B' formée par l'œil." }[E.quoi] || "Place le point."),
    designer: E => ({ "pupille-entree": "Touche la pupille d'entrée.", "lucarne-entree": "Touche la lucarne d'entrée.", "diaphragme-ouverture": "Touche le diaphragme d'ouverture.", "diaphragme-champ": "Touche le diaphragme de champ." }[E.quoi]),
    relier: E => "Touche les deux points qui donnent la limite du " + ({ "champ-total": "champ total", "champ-moyen": "champ moyen" }[E.quoi] || "champ de pleine lumière") + ".",
    faisceau: () => "Quel est le faisceau issu de B qui traverse l'instrument ?",
    calcul: E => "Calcule " + (NOMS_GRANDEURS[E.grandeur] || "la valeur") + ".",
    legender: () => "Légende le schéma : touche une étiquette, puis l'endroit où elle va.",
    regard: () => "Fais pivoter la ligne de regard de l'œil dévié.",
    pointer: E => E.quoi === "exteriorisation" ? "Touche le côté où le sujet extériorise l'image de l'œil dévié." : "Touche le fond de l'œil, là où se forme l'image.",
    conclure: () => "Choisis la conclusion à rédiger."
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
    // Schéma de l'examen : la situation de l'énoncé reste sous les yeux pendant toutes les étapes
    const situation = N.schema ? N.consigne : N.regle;
    $("jeu-regle").textContent = situation || "";
    $("jeu-regle").hidden = !situation;
    $("jeu-regle").classList.toggle("situation", !!N.schema);
    ecrireTexteMath($("jeu-consigne"), N.consigne || "");          // fractions [[haut|bas]] et lignes (essentiel.js)
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
    ecrireTexteMath($("jeu-consigne"), n > 1 ? "Étape " + (i + 1) + " sur " + n + " : " + consigne : (N.consigne || consigne));
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
    function suite(message) { filEtapes(n, n); terminer((message || "") + (N.conclusion ? "<p>" + texteMathHTML(N.conclusion) + "</p>" : ""), true); }
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
    window.compter?.("atelier-reussi-" + niveau.epreuve, "Niveau de l'Atelier réussi (" + niveau.epreuve + ")");     // statistiques anonymes (compter.js)
    if (window.Sons) Sons.fin([60, 60, 80, 100][etoiles], apresLeSon);     // 1, 2 ou 3 étoiles
    const liste = niveauxDe(niveau.epreuve), i = liste.indexOf(niveau);
    const suivant = liste[i + 1] && debloque(liste[i + 1]) ? liste[i + 1] : null;
    const lien = niveau.theme ? '<p><a href="qcm.html#' + niveau.epreuve + "/" + encodeURIComponent(niveau.theme) + '">S\'entraîner au QCM : ' + echapper(niveau.theme) + " →</a></p>" : "";
    const copie = niveau.copie ? '<div class="sur-copie"><p><b>Sur ta copie, vérifie</b></p><ul>' + niveau.copie.map(t => "<li>" + echapper(t) + "</li>").join("") + "</ul></div>" : "";
    retour(message + copie + lien + '<p class="etoiles-gagnees">' + etoilesHTML(etoiles) + "</p>", "bien", etoiles === 3 ? "clin-doeil" : "bouche-ouverte");
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
    if (N.schema && N.schema.type !== "couple-oculaire") {
      // Les autres schémas : un axe, un verre (sauf œil nu) et l'œil réduit ; le prisme vertical : deux vues empilées
      if (N.schema.type === "prisme-vertical") {
        [11, 29].forEach(y => { trait(`M3 ${y} H${w - 3}`, "v-axe"); trait(`M28 ${y - 8} V${y + 8}`, "v-lentille"); trait(`M50 ${y} m-6 0 a6 6 0 1 0 12 0 a6 6 0 1 0 -12 0`, "v-oeil"); });
        return s;
      }
      trait(`M2 ${m} H${w - 2}`, "v-axe");
      if (!["oeil-reduit", "parcours"].includes(N.schema.type)) trait(`M22 6 V${h - 6}`, "v-lentille");
      trait(`M44 8 V${h - 8} M47 8 V${h - 8}`, "v-lentille");
      trait(`M60 8 V${h - 8}`, "v-oeil");
      return s;
    }
    if (N.schema) {
      // Le couple oculaire vu de dessus : T en haut, deux yeux, les lignes de regard
      trait(`M34 4 L18 ${h - 13} M34 4 L50 ${h - 13}`, "v-axe");
      trait(`M18 ${h - 13} m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0 M50 ${h - 13} m-7 0 a7 7 0 1 0 14 0 a7 7 0 1 0 -14 0`, "v-oeil");
      trait("M32 4 h4", "v-objet");
      return s;
    }
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
    // Vision : à l'examen, des schémas à main levée, pas des tracés exacts. L'onglet le dit d'emblée.
    $("titre-niveaux").textContent = atelier === "U5" ? "Les schémas de l'examen" : "Les niveaux";
    if (atelier === "U5") {
      const p = document.createElement("p");
      p.className = "intro-atelier";
      p.textContent = "À l'écrit d'Analyse de la vision, on ne te demande pas un tracé exact à la règle. On attend un schéma à main levée d'une demi-page, légendé, coté, et une conclusion rédigée. Ici, tu poses chaque élément au bon endroit, comme sur ta copie.";
      conteneur.appendChild(p);
    }
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
  window.__traces = { NIVEAUX, Optique, scene: () => S, schemas: TYPES_SCHEMA, ouvrir: id2 => ouvrir(NIVEAUX.find(N => N.id === id2)) };
})();
