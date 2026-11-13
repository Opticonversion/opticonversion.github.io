// =====================================================================
// LE BANC D'OPTIQUE · haut de la page d'accueil
// ---------------------------------------------------------------------
// Le compagnon de l'élève (DioSL par défaut) est l'OBJET. Une lentille
// convergente forme son IMAGE : réelle, renversée, de l'autre côté.
// L'élève déplace le personnage (doigt, souris, flèches du clavier ou
// boutons ◀ ▶) : les trois rayons et l'image sont recalculés en direct avec
// la relation de conjugaison de Descartes, 1/OA' − 1/OA = 1/f' (comme traces.js).
// Sans geste de l'élève, le personnage se promène tout seul deux fois sur
// l'axe, puis s'arrête. Le bouton « Pause » arrête ou relance la promenade.
// La scène est en relief : elle pivote légèrement avec le pointeur.
// =====================================================================

(function () {
  const banc = document.getElementById("banc");
  if (!banc) return;
  const calme = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const NS = "http://www.w3.org/2000/svg";
  const $ = id => document.getElementById(id);
  const echelle = banc.querySelector(".banc-echelle"), scene = banc.querySelector(".banc-scene");
  const svg = scene.querySelector("svg"), lentille = scene.querySelector(".banc-lentille");
  const objet = scene.querySelector(".banc-objet"), image = scene.querySelector(".banc-image");
  const imgObjet = objet.querySelector("img"), imgImage = image.querySelector("img");
  const lecture = $("banc-lecture"), commandes = $("banc-commandes"), boutonPause = $("banc-pause");

  // ---------------- Réglages (unités du dessin : 1 = 1 mm) ----------------
  let R = null, OA = 0;
  function reglages() {
    const etroit = banc.clientWidth < 640;
    const ancien = R;
    // min et max = course de l'objet. Ils sont choisis pour que l'image reste ENTIÈRE dans le cadre :
    //   à max (objet au plus près), l'image est la plus grande et la plus à droite : son bord droit
    //   xl + OA' + largeur/2 reste sous 91 % de L, et son pied (axe + |γ|·h) reste dans la lentille (rl).
    //   à min (objet au plus loin), c'est le personnage qui touche presque le bord gauche.
    R = etroit
      ? { L: 700, H: 390, axe: 178, xl: 374, f: 88, h: 126, rl: 160, min: -306, max: -160, a: -300, b: -168, depart: -230 }
      : { L: 1200, H: 400, axe: 185, xl: 620, f: 160, h: 130, rl: 170, min: -540, max: -285, a: -525, b: -300, depart: -400 };
    R.k = banc.clientWidth / R.L;
    banc.style.height = Math.round(R.H * R.k) + "px";
    echelle.style.width = R.L + "px";
    echelle.style.height = R.H + "px";
    echelle.style.transform = "scale(" + R.k + ")";
    svg.setAttribute("viewBox", "0 0 " + R.L + " " + R.H);
    objet.setAttribute("aria-valuemin", R.min);
    objet.setAttribute("aria-valuemax", R.max);
    if (!ancien || ancien.L !== R.L || !ancien.k) { OA = R.depart; decor(); }   // !ancien.k : le banc était caché
    tracer();
  }

  // ---------------- Le décor fixe : axe gradué, points F, O, F' ----------------
  const el = (nom, attrs, parent) => {
    const e = document.createElementNS(NS, nom);
    for (const c in attrs) e.setAttribute(c, attrs[c]);
    (parent || svg).appendChild(e);
    return e;
  };
  let rayons = [], noms = {};
  function decor() {
    if (!R.k) return;                          // banc caché (écran de première ouverture) : rien à dessiner, il se recalcule en réapparaissant
    svg.innerHTML = "";
    const { L, axe, xl, f } = R, police = Math.max(15, 12.5 / R.k);
    el("line", { x1: 0, y1: axe, x2: L, y2: axe, class: "b-axe" });
    // Graduations : un petit trait tous les 20 mm, un grand tous les 100 mm
    for (let x = xl % 20; x <= L; x += 20) {
      const grand = Math.abs(x - xl) % 100 === 0;
      el("line", { x1: x, y1: axe, x2: x, y2: axe + (grand ? 12 : 6), class: "b-trait" });
    }
    const texte = (cle, contenu, classe) => {
      const t = el("text", { class: "b-nom " + (classe || ""), style: "font-size:" + police + "px" });
      t.textContent = contenu;
      noms[cle] = t;
      return t;
    };
    [[xl - f, "F"], [xl, "O"], [xl + f, "F'"]].forEach(([x, nom]) => {
      el("circle", { cx: x, cy: axe, r: 4.5, class: "b-point" });
      const t = texte(nom, nom);
      t.setAttribute("x", x);
      t.setAttribute("y", axe + 18 + police);
    });
    // Trois rayons : un halo flou, le trait net, et des grains de lumière qui filent
    rayons = [0, 1, 2].map(() => ({
      halo: el("path", { class: "b-halo" }),
      trait: el("path", { class: "b-rayon" }),
      grain: el("path", { class: "b-grain" })
    }));
    texte("A", "A"); texte("B", "B"); texte("Ap", "A'", "or"); texte("Bp", "B'", "or");
    lentille.style.left = xl + "px";
    lentille.style.top = axe + "px";
    lentille.style.width = lentille.style.height = R.rl * 2 + "px";
  }

  // ---------------- Le calcul et le tracé ----------------
  const fr = (n, dec) => (n > 0 ? "+" : n < 0 ? "−" : "") + Math.abs(n).toFixed(dec).replace(".", ",");
  const nomDuPerso = () => (typeof nomCompagnon === "function" ? nomCompagnon() : "DioSL");
  let dernierTexte = "";
  function tracer() {
    if (!R.k) return;
    const { L, axe, xl, f, h, rl } = R, police = Math.max(15, 12.5 / R.k);
    const OAp = 1 / (1 / f + 1 / OA), g = OAp / OA;           // relation de conjugaison, grandissement
    const xA = xl + OA, yB = axe - h, xAp = xl + OAp, yBp = axe - g * h;
    const fin = L + 60;
    // 1. parallèle à l'axe, ressort par F'   2. passe par O sans être dévié   3. passe par F, ressort parallèle
    const p1 = (axe - yB) / f, p2 = h / -OA;
    const d = [
      `M${xA} ${yB} L${xl} ${yB} L${fin} ${yB + p1 * (fin - xl)}`,
      `M${xA} ${yB} L${fin} ${yB + p2 * (fin - xA)}`,
      Math.abs(yBp - axe) <= rl ? `M${xA} ${yB} L${xl} ${yBp} L${fin} ${yBp}` : ""
    ];
    rayons.forEach((r, i) => { r.halo.setAttribute("d", d[i]); r.trait.setAttribute("d", d[i]); r.grain.setAttribute("d", d[i]); });

    // L'objet (pieds sur l'axe) et son image (tête en bas, sous l'axe)
    const largeur = h * 0.91;
    objet.style.left = xA + "px";
    objet.style.top = axe + "px";
    objet.style.width = largeur + "px";
    const hI = Math.abs(g) * h, lI = hI * 0.91;
    image.style.left = (xAp - lI / 2) + "px";
    image.style.top = axe + "px";
    image.style.width = lI + "px";
    imgImage.style.transform = "rotate(180deg)";
    image.style.opacity = xAp > L + lI ? 0 : 0.92;

    const place = (cle, x, y) => { noms[cle].setAttribute("x", x); noms[cle].setAttribute("y", y); };
    place("A", xA, axe + 18 + police);
    place("B", xA - largeur / 2 - police * 0.6, yB + police * 0.9);
    place("Ap", xAp, axe - 12);
    place("Bp", xAp, yBp + police * 1.15);                    // sous la pointe de l'image : jamais hors du cadre

    // La lecture des mesures : réécrite seulement quand elle change
    const taille = Math.abs(g) > 1.02 ? "plus grande" : Math.abs(g) < 0.98 ? "plus petite" : "de même taille";
    const texte = "OA = " + fr(OA, 0) + " mm|OA' = " + fr(OAp, 0) + " mm|γ = " + fr(g, 2) + "|image réelle, renversée, " + taille;
    if (texte !== dernierTexte) {
      dernierTexte = texte;
      const [a, b, c, e] = texte.split("|");
      if (lecture) {
        lecture.innerHTML = '<span class="geste">Déplace ' + nomDuPerso() + ' : son image se forme en direct.</span>' +
          [a, b, c].map(m => { const [nom, val] = m.split(" = "); return "<span>" + nom + " = <b>" + val + "</b></span>"; }).join("") + "<span>" + e + "</span>";
      }
      // Pour les lecteurs d'écran : la position et ce qu'elle donne
      objet.setAttribute("aria-valuenow", Math.round(OA));
      objet.setAttribute("aria-valuetext", "Objet à " + Math.round(-OA) + " millimètres de la lentille : " + e + ", à " + Math.round(OAp) + " millimètres");
    }
    // Sur téléphone (pas de pointeur), la scène pivote doucement avec la marche du personnage
    if (!pointeurDessus) {
      const avance = (OA - R.min) / (R.max - R.min) - 0.5;
      scene.style.setProperty("--by", (-9 + avance * 7).toFixed(2) + "deg");
    }
  }

  // ---------------- Le personnage : même dessin pour l'objet et pour l'image ----------------
  const copier = () => { if (imgObjet.getAttribute("src")) imgImage.src = imgObjet.src; };
  imgObjet.addEventListener("load", copier);
  copier();

  // ---------------- La promenade automatique : deux allers-retours, puis elle s'arrête ----------------
  let libre = !calme, pointeurDessus = false, visible = true, depart = null, origine = 0;
  function etatPause() {
    banc.classList.toggle("fixe", !libre);          // promenade arrêtée : les grains de lumière s'arrêtent aussi
    if (!boutonPause) return;
    boutonPause.querySelector(".ico").className = "ico " + (libre ? "i-pause" : "i-lecture");
    boutonPause.querySelector("span:last-child").textContent = libre ? "Pause" : "Relancer";
  }
  const arreter = () => { if (libre) { libre = false; etatPause(); } };
  function promenade(t) {
    if (!libre) return;
    if (visible && !document.hidden) {
      if (depart === null) { depart = t; origine = OA; }
      if (t - depart > 18500) { arreter(); return; }
      const phase = (1 - Math.cos((t - depart) / 9000 * Math.PI * 2)) / 2;     // va-et-vient doux, 9 secondes
      const cible = R.a + (R.b - R.a) * phase;
      const fondu = Math.min(1, (t - depart) / 1500);                          // on rejoint la promenade en douceur
      OA = origine + (cible - origine) * fondu;
      tracer();
    }
    requestAnimationFrame(promenade);
  }
  if ("IntersectionObserver" in window) new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(banc);
  if (boutonPause) boutonPause.addEventListener("click", () => {
    if (libre) { arreter(); return; }
    libre = true; depart = null;
    etatPause();
    requestAnimationFrame(promenade);
  });

  // ---------------- Déplacer le personnage : glisser, flèches du clavier, boutons ----------------
  let glisse = null;
  const borner = v => Math.max(R.min, Math.min(R.max, v));
  const aller = v => { arreter(); OA = borner(v); tracer(); };
  objet.addEventListener("pointerdown", e => {
    arreter();
    glisse = { x: e.clientX, OA };
    try { objet.setPointerCapture(e.pointerId); } catch (err) {}
    e.preventDefault();
  });
  objet.addEventListener("pointermove", e => {
    if (!glisse) return;
    OA = borner(glisse.OA + (e.clientX - glisse.x) / R.k);
    tracer();
  });
  const lacher = () => { glisse = null; };
  objet.addEventListener("pointerup", lacher);
  objet.addEventListener("pointercancel", lacher);
  objet.addEventListener("focus", arreter);
  objet.addEventListener("keydown", e => {
    const pas = e.shiftKey ? 40 : 10;
    const cible = { ArrowLeft: OA - pas, ArrowDown: OA - pas, ArrowRight: OA + pas, ArrowUp: OA + pas, PageDown: OA - 40, PageUp: OA + 40, Home: R.min, End: R.max }[e.key];
    if (cible === undefined) return;
    aller(cible);
    e.preventDefault();
  });
  if ($("banc-gauche")) $("banc-gauche").addEventListener("click", () => aller(OA - 30));
  if ($("banc-droite")) $("banc-droite").addEventListener("click", () => aller(OA + 30));

  // ---------------- Le relief : la scène pivote avec le pointeur ----------------
  const hero = banc.closest(".hero") || banc;
  if (!calme && matchMedia("(hover: hover) and (pointer: fine)").matches) {
    hero.addEventListener("pointermove", e => {
      pointeurDessus = true;
      const r = banc.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
      scene.style.setProperty("--by", (-9 + px * 10).toFixed(2) + "deg");
      scene.style.setProperty("--bx", (5 - Math.max(-1, Math.min(1, py)) * 4).toFixed(2) + "deg");
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      pointeurDessus = false;
      scene.style.removeProperty("--bx");
      scene.style.removeProperty("--by");
    });
  }

  // ---------------- Mise en route ----------------
  reglages();
  banc.classList.add("pret");
  if (lecture) lecture.hidden = false;
  if (commandes) commandes.hidden = false;
  etatPause();
  let attente = null;
  window.addEventListener("resize", () => { clearTimeout(attente); attente = setTimeout(reglages, 120); });
  if (libre) setTimeout(() => requestAnimationFrame(promenade), 1400);
})();
