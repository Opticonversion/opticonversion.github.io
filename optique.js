// =====================================================================
//  OPTIQUE · le moteur de calcul de l'Atelier des tracés (aucun affichage)
// ---------------------------------------------------------------------
//  Optique paraxiale des lentilles minces, longueurs en mm, lumière de
//  gauche à droite, hauteurs vers le haut. Un rayon = un point et une pente
//  (s = dy/dx). À la traversée d'une lentille de focale f' : s' = s − y/f'
//  (c'est la relation de conjugaison de Descartes écrite pour un rayon).
//  Utilisé par traces.js ET par le vérificateur (.claude/scripts) : ne rien
//  y mettre qui dépende de la page.
// =====================================================================
const Optique = (function () {
  const EPS = 1e-9;

  // Montage prêt à calculer : lentilles et diaphragmes triés de gauche à droite
  function preparer(systeme) {
    const elements = (systeme.elements || []).map((e, i) => ({ ...e, rang: i }));
    const lentilles = elements.filter(e => e.type === "lentille")
      .map(e => ({ ...e, f: e.f !== undefined ? e.f : 1000 / e.P }))
      .sort((a, b) => a.x - b.x);
    // Diaphragmes : les vrais, et la monture de chaque lentille qui a un rayon
    const diaphragmes = elements.filter(e => e.type === "diaphragme" || (e.type === "lentille" && e.rayon))
      .map(e => ({ nom: e.nom, x: e.x, rayon: e.rayon, monture: e.type === "lentille" }))
      .sort((a, b) => a.x - b.x);
    const o = systeme.objet || {};
    const objet = o.infini
      ? { infini: true, angle: o.angle || 0, s: -Math.tan((o.angle || 0) * Math.PI / 180) }
      : { x: o.x, h: o.h };
    return { objet, lentilles, diaphragmes, oeil: elements.find(e => e.type === "oeil") || null };
  }

  // Image d'un point par une lentille. Point fini {x, h} ou à l'infini {infini, s}
  // (s = pente des rayons qui viennent de ce point).
  function conjuguer(L, p) {
    if (p.infini) return { x: L.x + L.f, h: L.f * p.s };
    const OA = p.x - L.x;
    if (Math.abs(OA) < EPS) return { x: p.x, h: p.h };
    const v = 1 / L.f + 1 / OA;
    if (Math.abs(v * L.f) < 1e-7) return { infini: true, s: p.h / OA };   // objet dans le plan focal objet
    const OAp = 1 / v;
    return { x: L.x + OAp, h: p.h * OAp / OA };
  }

  // L'objet, puis l'image après chaque lentille : chaine[0] = objet, chaine[k+1] = image par la lentille k
  function chaine(sys) {
    const r = [sys.objet];
    sys.lentilles.forEach((L, k) => r.push(conjuguer(L, r[k])));
    return r;
  }
  const indexLentille = (sys, nom) => sys.lentilles.findIndex(L => L.nom === nom);

  // ---------- Rayons ----------
  // Un rayon dans l'espace k (entre la lentille k−1 et la lentille k ; 0 = espace objet) :
  // { k, x, y, s }. On peut le ramener dans l'espace objet, ou le propager jusqu'à un x donné.
  function versEspaceObjet(sys, r) {
    let { x, y, s } = r;
    for (let j = r.k - 1; j >= 0; j--) {
      const L = sys.lentilles[j];
      const yL = y + s * (L.x - x);
      s = s + yL / L.f;
      x = L.x; y = yL;
    }
    return { k: 0, x, y, s };
  }
  // Ligne brisée d'un rayon (donné dans l'espace objet) de xDebut à xFin
  function parcours(sys, r0, xDebut, xFin) {
    let x = xDebut, y = r0.y + r0.s * (xDebut - r0.x), s = r0.s;
    const points = [{ x, y }], pentes = [s];
    for (const L of sys.lentilles) {
      if (L.x <= xDebut + EPS) { continue; }
      if (L.x >= xFin - EPS) break;
      y = y + s * (L.x - x); x = L.x;
      points.push({ x, y });
      s = s - y / L.f;
      pentes.push(s);
    }
    points.push({ x: xFin, y: y + s * (xFin - x) });
    return { points, pentes };
  }
  // Pentes successives d'un rayon donné dans l'espace objet (s0 = espace 0, puis après chaque lentille)
  function pentesApres(sys, r0) {
    let x = r0.x, y = r0.y, s = r0.s;
    const res = [{ x, y, s }];
    for (const L of sys.lentilles) {
      y = y + s * (L.x - x); x = L.x; s = s - y / L.f;
      res.push({ x, y, s });
    }
    return res;
  }

  // Un rayon « type » pour la lentille k, issu de son objet (l'image formée par les lentilles d'avant) :
  // par = "parallele" (parallèle à l'axe avant la lentille), "O" (par son centre), "F" (par son foyer objet).
  // Renvoie le rayon dans l'espace k, ou null s'il n'existe pas.
  function rayonType(sys, k, par) {
    const L = sys.lentilles[k], P = chaine(sys)[k];
    let s, y;
    if (par === "parallele") {
      if (P.infini) { if (Math.abs(P.s) > EPS) return null; s = 0; y = L.rayon ? 0.7 * L.rayon : 20; }
      else { s = 0; y = P.h; }
    } else if (par === "O") {
      if (P.infini) s = P.s;
      else { if (Math.abs(L.x - P.x) < EPS) return null; s = (0 - P.h) / (L.x - P.x); }
      y = 0;
    } else if (par === "F") {
      const xF = L.x - L.f;
      if (P.infini) s = P.s;
      else { if (Math.abs(xF - P.x) < EPS) return null; s = (0 - P.h) / (xF - P.x); }
      y = s * (L.x - xF);
    } else return null;
    return { k, x: L.x, y, s };
  }
  // Traversée de la lentille k : pente juste après
  const penteApres = (L, yL, s) => s - yL / L.f;

  // ---------- Foyers du système entier (doublet…) ----------
  function foyerImage(sys) {
    if (!sys.lentilles.length) return null;
    const p = pentesApres(sys, { x: sys.lentilles[0].x - 1, y: 1, s: 0 });
    const fin = p[p.length - 1];
    if (Math.abs(fin.s) < 1e-12) return null;                 // afocal
    return { x: fin.x - fin.y / fin.s, f: -1 / fin.s };       // f = focale image du système
  }
  const miroir = sys => ({ ...sys, lentilles: sys.lentilles.map(L => ({ ...L, x: -L.x })).sort((a, b) => a.x - b.x) });
  function foyerObjet(sys) {
    const F = foyerImage(miroir(sys));
    return F ? { x: -F.x, f: -F.f } : null;
  }

  // ---------- Pupille, lucarne, champs ----------
  // Image d'un diaphragme dans l'espace objet (vue à travers les lentilles placées avant lui)
  function imageDiaphragme(sys, d) {
    const avant = sys.lentilles.filter(L => L.x < d.x - EPS).map(L => ({ ...L, x: -L.x })).sort((a, b) => a.x - b.x);
    let p = { x: -d.x, h: d.rayon };
    for (const L of avant) { p = conjuguer(L, p); if (p.infini) break; }
    if (p.infini) return { nom: d.nom, d, infini: true, angle: Math.abs(p.s) };
    return { nom: d.nom, d, x: -p.x, rayon: Math.abs(p.h) };
  }
  const imagesDiaphragmes = sys => sys.diaphragmes.map(d => imageDiaphragme(sys, d));

  // Angle (tangente) sous lequel on voit une image de diaphragme depuis l'abscisse x0 (ou depuis l'infini)
  function angleVu(im, x0) {
    if (im.infini) return im.angle;
    if (x0 === null) return im.rayon;                 // objet à l'infini : on compare les rayons
    const dx = Math.abs(im.x - x0);
    return dx < EPS ? Infinity : im.rayon / dx;
  }
  // Pupille d'entrée : l'image vue sous le plus petit angle depuis A (le pied de l'objet).
  // ecart = rapport entre le 2e plus petit angle et le plus petit (proche de 1 = choix ambigu).
  function pupilleEntree(sys) {
    const ims = imagesDiaphragmes(sys);
    if (!ims.length) return null;
    const xA = sys.objet.infini ? null : sys.objet.x;
    const tri = ims.map(im => ({ im, a: angleVu(im, xA) })).sort((p, q) => p.a - q.a);
    return { ...tri[0].im, ecart: tri.length > 1 ? tri[1].a / tri[0].a : Infinity };
  }
  // Lucarne d'entrée : parmi les autres, l'image vue sous le plus petit angle depuis le centre de la pupille d'entrée
  function lucarneEntree(sys) {
    const P = pupilleEntree(sys);
    if (!P || P.infini) return null;
    const autres = imagesDiaphragmes(sys).filter(im => im.nom !== P.nom);
    if (!autres.length) return null;
    const tri = autres.map(im => ({ im, a: angleVu(im, P.x) })).sort((p, q) => p.a - q.a);
    if (tri[0].im.infini) return null;
    return { ...tri[0].im, ecart: tri.length > 1 ? tri[1].a / tri[0].a : Infinity };
  }
  // Limite d'un champ : droite qui passe par un point de la pupille d'entrée et le bord haut de la lucarne d'entrée.
  // type : "pleine-lumiere", "total" ou "moyen" (centre de la pupille).
  // Un rayon parti du point de hauteur y de l'objet vers le point u de la pupille coupe le plan de la lucarne à
  // y(1 − t) + u·t, avec t = (xLucarne − xObjet) / (xPupille − xObjet). D'où, dans le plan de l'objet :
  //   pleine lumière (tous les rayons passent) : (R − ρ|t|) / |1 − t|     total (au moins un) : (R + ρ|t|) / |1 − t|
  // La pleine lumière est donc TOUJOURS la plus petite des deux limites (bords du même côté / bords opposés),
  // et le champ total la plus grande. « Bords du même côté = pleine lumière » n'est vrai que si l'objet n'est pas
  // entre la pupille et la lucarne (t > 0) ; quand il est entre les deux (t < 0, sujet 2025), c'est l'inverse.
  // Renvoie aussi : cote ("meme", "oppose" ou "centre" : le point de la pupille à relier au bord haut de la lucarne),
  // entre (objet entre la pupille et la lucarne), ecart (grande limite / petite : proche de 1 = champs confondus).
  function champ(sys, type) {
    const P = pupilleEntree(sys), Lu = lucarneEntree(sys);
    if (!P || !Lu || P.infini) return null;
    if (Math.abs(Lu.x - P.x) < EPS) return null;
    const fini = !sys.objet.infini;
    if (fini && Math.abs(sys.objet.x - P.x) < EPS) return null;       // objet dans le plan de la pupille : pas de champ
    const t = fini ? (Lu.x - sys.objet.x) / (P.x - sys.objet.x) : 1;   // objet à l'infini : t tend vers 1
    const limite = (yP, cote) => {
      const m = (Lu.rayon - yP) / (Lu.x - P.x);
      const rayon = fini ? Math.abs(yP + m * (sys.objet.x - P.x)) : undefined;
      return { yP, m, cote, rayon, taille: fini ? rayon : Math.abs(m) };   // taille : rayon du champ, ou pente (objet à l'infini)
    };
    const meme = limite(P.rayon, "meme"), oppose = limite(-P.rayon, "oppose");
    const petite = meme.taille <= oppose.taille ? meme : oppose, grande = petite === meme ? oppose : meme;
    // Pas de pleine lumière si aucun point de l'objet ne voit la pupille entière
    if (type !== "total" && type !== "moyen" && Lu.rayon - P.rayon * Math.abs(t) <= EPS) return null;
    const l = type === "moyen" ? limite(0, "centre") : type === "total" ? grande : petite;
    const res = { type, pupille: P, lucarne: Lu, p1: { x: P.x, y: l.yP }, p2: { x: Lu.x, y: Lu.rayon }, pente: l.m,
      angle: Math.atan(Math.abs(l.m)) * 180 / Math.PI, cote: l.cote, entre: fini && t < 0,
      ecart: petite.taille > EPS ? grande.taille / petite.taille : Infinity };
    if (fini) res.rayon = l.rayon;
    return res;
  }
  // Faisceau issu d'un point de l'objet ("A" ou "B"), limité par la pupille d'entrée : ses deux rayons extrêmes (espace objet)
  function faisceau(sys, depuis, pupille) {
    const P = pupille || pupilleEntree(sys);
    if (!P || P.infini) return null;
    const o = sys.objet;
    const h = depuis === "A" ? 0 : (o.infini ? 0 : o.h);
    return [P.rayon, -P.rayon].map(yp => o.infini
      ? { k: 0, x: P.x, y: yp, s: depuis === "A" ? 0 : o.s }
      : { k: 0, x: o.x, y: h, s: (yp - h) / (P.x - o.x) });
  }

  // ---------- L'œil (Vision) ----------
  // Œil réduit : une lentille de 60 δ au point H (x de l'œil), rétine là où se forme l'image du remotum.
  // ametropie = réfraction au plan de l'œil (H), en δ ; amplitude d'accommodation en δ.
  const P_OEIL = 60;
  const lentilleOeil = sys => sys.oeil ? { nom: sys.oeil.nom, x: sys.oeil.x, f: 1000 / P_OEIL } : null;
  function remotum(sys) {
    const R = sys.oeil ? sys.oeil.ametropie || 0 : null;
    return R === null || Math.abs(R) < EPS ? null : sys.oeil.x + 1000 / R;
  }
  function punctum(sys) {
    if (!sys.oeil || !sys.oeil.amplitude) return null;
    const V = (sys.oeil.ametropie || 0) - sys.oeil.amplitude;
    return Math.abs(V) < EPS ? null : sys.oeil.x + 1000 / V;
  }
  const retine = sys => sys.oeil ? sys.oeil.x + 1000 / (P_OEIL + (sys.oeil.ametropie || 0)) : null;
  // Image formée par l'œil (sans accommoder), après les verres éventuels
  function imageOeil(sys) {
    const L = lentilleOeil(sys);
    if (!L) return null;
    const ch = chaine(sys);
    return conjuguer(L, ch[ch.length - 1]);
  }

  // ---------- Grandeurs pour les étapes « calcul » ----------
  function grandeur(sys, g, options) {
    options = options || {};
    const ch = chaine(sys);
    const k = options.apres !== undefined ? indexLentille(sys, options.apres) : sys.lentilles.length - 1;
    const im = ch[k + 1], L = sys.lentilles[k];
    switch (g) {
      case "OA'": return im && !im.infini ? im.x - L.x : null;
      case "A'B'": return im && !im.infini ? im.h : null;
      case "gamma": return !sys.objet.infini && im && !im.infini ? im.h / sys.objet.h : null;
      case "f-systeme": { const F = foyerImage(sys); return F ? F.f : null; }
      case "rayon-champ": { const c = champ(sys, options.champ || "pleine-lumiere"); return c && c.rayon !== undefined ? c.rayon : null; }
      case "angle-champ": { const c = champ(sys, options.champ || "pleine-lumiere"); return c ? c.angle : null; }
      case "grossissement": {
        // Objet à l'infini (lunette) : rapport des pentes en sortie et en entrée.
        if (sys.objet.infini) {
          if (Math.abs(sys.objet.s) < EPS) return null;
          const fin = pentesApres(sys, { x: sys.lentilles[0].x, y: 0, s: sys.objet.s }).pop();
          return fin.s / sys.objet.s;
        }
        // Objet proche (loupe) : angle de l'image finale / angle de l'objet vu à 250 mm à l'œil nu
        const fin = ch[ch.length - 1], alpha = sys.objet.h / 250;
        if (fin.infini) return Math.abs(fin.s) / Math.abs(alpha);
        if (!sys.oeil) return null;
        return Math.abs(fin.h / (sys.oeil.x - fin.x)) / Math.abs(alpha);
      }
      case "remotum": { const x = remotum(sys); return x === null ? null : x - sys.oeil.x; }   // HR en mm
      case "punctum": { const x = punctum(sys); return x === null ? null : x - sys.oeil.x; }   // HP en mm
      default: return null;
    }
  }

  // ---------- Schémas de l'examen (U5) : le couple oculaire en vue de dessus ----------
  // schema = { type: "couple-oculaire", distance (cm), fixateur: "OD"|"OG", dissociateur: { nom, oeil },
  //            perception: { oeil, cote: "droite"|"gauche", ecart (cm) } }
  // La perception dit où le sujet voit l'image de l'œil « perception.oeil » par rapport à celle de l'autre œil.
  // Loi de Desmarres : diplopie croisée = exophorie, homonyme = ésophorie. Phorie (Δ) = écart (cm) / distance (m).
  // cotes : +1 = vers la droite du dessin (la droite du sujet, vue de dessus), −1 = vers la gauche.
  function coupleOculaire(sch) {
    if (!sch || sch.type !== "couple-oculaire") return null;
    const p = sch.perception || {}, cote = { droite: 1, gauche: -1 };
    if (!["OD", "OG"].includes(sch.fixateur) || !["OD", "OG"].includes(p.oeil) || !cote[p.cote]) return null;
    if (!(sch.distance > 0) || !(p.ecart > 0)) return null;
    const devie = sch.fixateur === "OD" ? "OG" : "OD";
    const tempeDe = oeil => (oeil === "OD" ? 1 : -1);               // côté de la tempe de chaque œil, vu de dessus
    // Croisée : l'image d'un œil est vue du côté de l'autre œil
    const croisee = cote[p.cote] !== tempeDe(p.oeil);
    const exo = croisee;
    const valeur = p.ecart / (sch.distance / 100);
    const s = tempeDe(devie);
    return {
      fixateur: sch.fixateur, devie, croisee, exo,
      nature: exo ? "exophorie" : "ésophorie",
      diplopie: croisee ? "croisée" : "homonyme",
      valeur,                                                       // en Δ
      base: exo ? "interne" : "externe",                            // prisme de réalignement, sur l'œil dévié
      rotation: exo ? s : -s,                                       // sens où tourne la ligne de regard de l'œil dévié (position passive)
      coteTprime: exo ? s : -s,                                     // côté de T' par rapport à la fovéa de l'œil dévié
      retine: exo ? "temporale" : "nasale",
      coteExteriorisation: exo ? -s : s,                            // côté de l'extériorisation de l'œil dévié (œil cyclope)
      croisementLR: exo ? "derrière" : "devant"                      // où les lignes de regard se croisent, par rapport à T
    };
  }
  // ---------- L'œil réduit amétrope (sans verre, sans accommodation) ----------
  // schema = { type: "oeil-reduit", ametropie (δ, = R, proximité du remotum) }
  function oeilReduit(sch) {
    if (!sch || typeof sch.ametropie !== "number" || !isFinite(sch.ametropie)) return null;
    const R = sch.ametropie;
    return {
      R, nature: R < 0 ? "myope" : R > 0 ? "hypermétrope" : "emmétrope",
      image: R < 0 ? "devant" : R > 0 ? "derriere" : "sur",      // T' (objet éloigné, Acc = 0) par rapport à la rétine
      remotum: R < 0 ? "devant" : R > 0 ? "derriere" : "infini",  // R réel devant l'œil, virtuel derrière, ou à l'infini
      HR: R === 0 ? null : 100 / R,                               // cm, mesure algébrique depuis H
      ecart: Math.abs(R)                                          // δ : proximité de T' au plan rétinien
    };
  }
  // ---------- Parcours d'accommodation d'un œil myope (œil nu) ----------
  // schema = { type: "parcours", ametropie (δ, < 0), amplitude (δ) }
  function parcoursAccommodation(sch) {
    if (!sch || !(sch.ametropie < 0) || !(sch.amplitude > 0)) return null;
    const R = sch.ametropie, P = R - sch.amplitude;
    return { R, A: sch.amplitude, P, HR: 100 / R, HP: 100 / P };   // HR, HP en cm (négatifs : devant l'œil)
  }
  // ---------- Image rétinienne : lunettes ou lentilles, et image intermédiaire ----------
  // schema = { type: "image-retinienne", verre (δ), LH (cm, verre → plan principal objet de l'œil) }
  // Règle d'estimation du BTS : l'image change d'environ LH(cm) × |DL| % entre lunettes et lentilles.
  function imageRetinienne(sch) {
    if (!sch || typeof sch.verre !== "number" || !sch.verre || !(sch.LH > 0)) return null;
    const P = sch.verre, fp = 100 / P;                              // focale image du verre en cm
    return {
      P, LH: sch.LH,
      intermediaire: P < 0 ? "devant" : fp > sch.LH ? "derriere" : "entre",   // Ai Bi = F' du verre (objet éloigné)
      plusGrande: P < 0 ? "lentilles" : "lunettes",
      ecart: sch.LH * Math.abs(P)                                   // %
    };
  }
  // ---------- Aniséiconie induite par des verres ----------
  // schema = { type: "aniseiconie", OD (δ), OG (δ), LH (cm) } : ρ ≈ LH(cm) × |DLd − DLg| %
  function aniseiconie(sch) {
    if (!sch || typeof sch.OD !== "number" || typeof sch.OG !== "number" || sch.OD === sch.OG || !(sch.LH > 0)) return null;
    return { OD: sch.OD, OG: sch.OG, LH: sch.LH, plusGrande: sch.OD > sch.OG ? "OD" : "OG", valeur: sch.LH * Math.abs(sch.OD - sch.OG) };
  }
  // ---------- Effet prismatique vertical, regard décentré dans les verres (Prentice) ----------
  // schema = { type: "prisme-vertical", OD, OG (δ, méridien vertical), c (cm), regard: "bas" | "haut" }
  // Un verre convergent a sa base vers le centre optique ; un divergent, vers le bord. La lumière est déviée vers la base,
  // l'image vers le sommet. Regard vers le bas : plus le verre est convergent, plus l'œil doit tourner.
  function prismeVertical(sch) {
    if (!sch || typeof sch.OD !== "number" || typeof sch.OG !== "number" || !sch.OD || !sch.OG || !(sch.c > 0) || !["bas", "haut"].includes(sch.regard)) return null;
    const vers = sch.regard === "bas" ? "bas" : "haut", oppose = vers === "bas" ? "haut" : "bas";
    const base = P => (P > 0 ? oppose : vers);                      // côté de la base au point de passage
    return {
      c: sch.c, regard: sch.regard,
      OD: { P: sch.OD, effet: sch.c * Math.abs(sch.OD), base: base(sch.OD) },
      OG: { P: sch.OG, effet: sch.c * Math.abs(sch.OG), base: base(sch.OG) },
      difference: sch.c * Math.abs(sch.OD - sch.OG),                // Δ, effet prismatique vertical subi par le couple
      tourneLePlus: sch.OD === sch.OG ? null : (sch.OD > sch.OG ? "OD" : "OG")
    };
  }
  function schema(sch) {
    const f = { "couple-oculaire": coupleOculaire, "oeil-reduit": oeilReduit, "parcours": parcoursAccommodation,
      "image-retinienne": imageRetinienne, "aniseiconie": aniseiconie, "prisme-vertical": prismeVertical }[sch && sch.type];
    return f ? f(sch) : null;
  }
  // Grandeurs des étapes « calcul » d'un schéma (unités : phorie Δ, HR et HP cm, écarts %, prismes Δ)
  function grandeurSchema(sch, g) {
    const c = schema(sch);
    if (!c) return null;
    const v = {
      "couple-oculaire": { phorie: c.valeur },
      "oeil-reduit": { remotum: c.HR },
      "parcours": { remotum: c.HR, punctum: c.HP },
      "image-retinienne": { "ecart-taille": c.ecart },
      "aniseiconie": { aniseiconie: c.valeur },
      "prisme-vertical": { "prisme-od": c.OD && c.OD.effet, "prisme-og": c.OG && c.OG.effet, "difference-prismatique": c.difference }
    }[sch.type][g];
    return typeof v === "number" && isFinite(v) ? v : null;
  }

  return { preparer, conjuguer, chaine, indexLentille, versEspaceObjet, parcours, pentesApres, rayonType, penteApres,
    foyerImage, foyerObjet, lentilleOeil, remotum, punctum, retine, imageOeil, imageDiaphragme, imagesDiaphragmes, pupilleEntree, lucarneEntree, champ, faisceau, grandeur,
    coupleOculaire, oeilReduit, parcoursAccommodation, imageRetinienne, aniseiconie, prismeVertical, schema, grandeurSchema };
})();
