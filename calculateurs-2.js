// =====================================================================
//  CALCULS 2 · les calculs des calculateurs de la vague 2 (aucun affichage)
// ---------------------------------------------------------------------
//  Kératométrie, accommodation, acuité, aniséiconie, conjugaison d'une
//  lentille mince, seuil de rentabilité et point mort.
//  Chaque fonction reçoit des nombres et renvoie un objet : les valeurs
//  calculées, plus `lignes`, le détail du calcul tel qu'on l'écrirait sur
//  la copie. Elle renvoie { erreur: "…" } si les données ne vont pas.
//  Les conventions sont celles de nos corrections (questions-U5, U42, U3).
//  La conjugaison passe par optique.js (chargé avant ce fichier).
//  Testé par notes/tests/tester-calculateurs-2.js.
// =====================================================================
const Calculs2 = (function () {
  const EPS = 1e-9;

  // ---------- Écriture des nombres à la française ----------
  // nb(2.5, 2) → "2,50" ; nb(-0.004, 2) → "0,00" (jamais "-0,00")
  function nb(x, dec) {
    if (Math.abs(x) < 0.5 * Math.pow(10, -dec)) x = 0;
    const t = Math.abs(x).toFixed(dec).split(".");
    t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");   // 290 769
    return (x < 0 ? "−" : "") + t.join(",");
  }
  // Avec son signe : +1,50 / −2,25
  const sg = (x, dec) => (x >= 0.5 * Math.pow(10, -dec) ? "+" : "") + nb(x, dec);
  // Entre parenthèses s'il est négatif : (−0,075)
  const par = (x, dec) => (x < 0 ? "(" + nb(x, dec) + ")" : nb(x, dec));
  const d2 = x => sg(x, 2);                       // puissance en δ
  const arrondi025 = x => Math.round(x * 4) / 4;
  const fini = x => typeof x === "number" && isFinite(x);
  // Axe entre 1° et 180° (0° s'écrit 180°)
  function axe(a) { a = ((Math.round(a) % 180) + 180) % 180; return a === 0 ? 180 : a; }

  // ---------- Cylindres : composantes (pour additionner deux astigmatismes) ----------
  // Un cylindre C d'axe θ vaut J0 = −C/2 · cos 2θ, J45 = −C/2 · sin 2θ.
  function versComposantes(C, a) {
    const t = 2 * a * Math.PI / 180;
    return { j0: -C / 2 * Math.cos(t), j45: -C / 2 * Math.sin(t) };
  }
  // Retour en cylindre NÉGATIF : plan (C) θ, C ≤ 0
  function versCylindre(j) {
    const r = Math.hypot(j.j0, j.j45);
    if (r < EPS) return { C: 0, axe: 180 };
    return { C: -2 * r, axe: axe(Math.atan2(j.j45, j.j0) * 90 / Math.PI) };
  }
  // Nature d'un astigmatisme d'après l'axe de son cylindre négatif
  // (axe à moins de 30° de l'horizontale : direct ; de la verticale : inverse)
  function nature(cylNeg) {
    if (Math.abs(cylNeg.C) < EPS) return "nul";
    const a = cylNeg.axe % 180;
    if (a <= 30 || a >= 150) return "direct";
    if (a >= 60 && a <= 120) return "inverse";
    return "oblique";
  }
  const ecrireCyl = c => "plan (" + nb(c.C, 2) + ") " + c.axe + "°";

  // ---------- Distance verre-œil (même formule que le calculateur existant) ----------
  // F' = F / (1 − d F), d en mètres, positif quand on rapproche le verre de l'œil
  const rapprocher = (F, d) => F / (1 - d * F);

  // =================================================================
  //  1. KÉRATOMÉTRIE
  //  K (δ) = 337,5 / r (mm), indice d'étalonnage 1,3375 (U5-177, U5-182).
  //  Règle d'estimation des corrigés : 0,05 mm de toricité ≈ 0,30 δ (U5-211, corrigé 2021).
  //  Facultatif : la correction en lunettes, pour l'astigmatisme interne et
  //  l'astigmatisme résiduel en lentille souple ou rigide sphérique.
  // =================================================================
  function keratometrie(o) {
    const { r1, axe1, r2 } = o;
    if (!fini(r1) || !fini(r2) || !fini(axe1)) return { erreur: "Remplis les deux rayons et l'axe du premier." };
    if (r1 < 5 || r1 > 11 || r2 < 5 || r2 > 11) return { erreur: "Un rayon cornéen est compris entre 5 et 11 mm (souvent vers 7,8 mm)." };
    if (axe1 < 0 || axe1 > 180) return { erreur: "L'axe doit être entre 0° et 180°." };
    const a1 = axe(axe1), a2 = axe(axe1 + 90);
    const K1 = 337.5 / r1, K2 = 337.5 / r2;
    const m1 = { r: r1, axe: a1, K: K1 }, m2 = { r: r2, axe: a2, K: K2 };
    const plat = r1 >= r2 ? m1 : m2, cambre = r1 >= r2 ? m2 : m1;
    const ac = cambre.K - plat.K;                               // astigmatisme cornéen (δ)
    const toricite = plat.r - cambre.r;
    const estimation = toricite / 0.05 * 0.30;                  // règle 0,05 mm ≈ 0,30 δ
    const comp = { C: -ac, axe: plat.axe };                     // cylindre négatif compensateur : axe sur le méridien le plus plat
    const nat = nature(comp);
    const lignes = [
      "K à " + a1 + "° = 337,5 / " + nb(r1, 2) + " = " + nb(K1, 2) + " δ",
      "K à " + a2 + "° = 337,5 / " + nb(r2, 2) + " = " + nb(K2, 2) + " δ",
      ac < EPS ? "Les deux rayons sont égaux : la cornée n'est pas astigmate."
        : "Astigmatisme cornéen = " + nb(cambre.K, 2) + " − " + nb(plat.K, 2) + " = " + nb(ac, 2) + " δ"
    ];
    if (ac >= EPS) {
      lignes.push("Le méridien à " + cambre.axe + "° a le plus petit rayon : il est le plus cambré. Astigmatisme " + nat + ".");
      lignes.push("Compensateur : " + ecrireCyl(comp) + " (axe sur le méridien le plus plat)");
      lignes.push("Règle d'estimation (0,05 mm ≈ 0,30 δ) : " + nb(toricite, 2) + " mm de toricité ≈ " + nb(estimation, 2) + " δ");
    }
    const r = { K1, K2, axe1: a1, axe2: a2, plat, cambre, ac, toricite, estimation, compensateur: comp, nature: nat, lignes };

    // --- Passage lunettes → lentilles ---
    const L = o.lunettes;
    if (L && fini(L.sph)) {
      const cyl = fini(L.cyl) ? L.cyl : 0, ax = fini(L.axe) ? L.axe : 180, dvo = fini(L.dvo) ? L.dvo : 12;
      const d = dvo / 1000;
      const f1 = rapprocher(L.sph, d), f2 = rapprocher(L.sph + cyl, d);   // les deux méridiens ramenés à la cornée
      const total = versCylindre(versComposantes(f2 - f1, ax));           // astigmatisme total à la cornée, en cylindre négatif
      const es = (f1 + f2) / 2;
      const jt = versComposantes(total.C, total.axe), jc = versComposantes(comp.C, comp.axe);
      const interne = versCylindre({ j0: jt.j0 - jc.j0, j45: jt.j45 - jc.j45 });
      const ji = versComposantes(interne.C, interne.axe);
      const rigide90 = versCylindre({ j0: ji.j0 + 0.1 * jc.j0, j45: ji.j45 + 0.1 * jc.j45 });
      r.lentilles = { dvo, f1, f2, es, total, interne, souple: total, rigide: interne, rigide90 };
      lignes.push("Lunettes ramenées à la cornée (" + nb(dvo, 0) + " mm) : méridiens " + d2(f1) + " et " + d2(f2) + " δ");
      lignes.push("Astigmatisme total à la cornée : " + (Math.abs(total.C) < 0.005 ? "nul" : ecrireCyl(total) + ", " + nature(total)));
      lignes.push("Astigmatisme interne = total − cornéen = " + (Math.abs(interne.C) < 0.005 ? "nul" : ecrireCyl(interne) + ", " + nature(interne)));
      const q = c => ({ C: arrondi025(c.C), axe: c.axe });
      const aussi = (x, xa, ecrire) => (Math.abs(x - xa) > 0.004 ? ", soit " + ecrire + " à 0,25 δ près" : "");
      lignes.push("Lentille souple sphérique : elle épouse la cornée, tout l'astigmatisme total reste. Puissance ≈ équivalent sphérique " + d2(es) + " δ" +
        aussi(es, arrondi025(es), d2(arrondi025(es))));
      lignes.push("Lentille rigide sphérique : les larmes effacent l'astigmatisme cornéen, l'interne reste : " +
        (Math.abs(interne.C) < 0.005 ? "résiduel nul" : "résiduel ≈ " + ecrireCyl(interne) + aussi(interne.C, arrondi025(interne.C), ecrireCyl(q(interne)))));
      if (Math.abs(ac) >= EPS) lignes.push("Si les larmes n'effacent que 90 % du cornéen : résiduel ≈ interne + 10 % du cornéen = " + ecrireCyl(rigide90));
    }
    return r;
  }

  // =================================================================
  //  2. ACCOMMODATION
  //  R = amétropie (δ), écrite comme sa compensation de loin (myope −2 : R = −2).
  //  HR = 1/R ; Amax = R − 1/HP ; Acc = R − 1/x, x = position du texte (négative).
  //  Addition : on garde la moitié de l'amplitude en réserve (U5-157, U5-155).
  //  Distances comptées depuis l'œil (verres supposés contre l'œil).
  // =================================================================
  function accommodation(o) {
    const { R, amplitude: A, distance } = o;
    if (!fini(R) || !fini(A) || !fini(distance)) return { erreur: "Remplis l'amétropie, l'amplitude et la distance de lecture." };
    if (A < 0 || A > 20) return { erreur: "L'amplitude est comprise entre 0 et 20 δ." };
    if (distance <= 0) return { erreur: "La distance de lecture se donne en cm, sans signe (40 pour 40 cm)." };
    const x = -distance / 100;                         // position du texte, en m (devant l'œil)
    const lignes = [];
    // Remotum
    const HR = Math.abs(R) < EPS ? null : 1 / R;
    lignes.push(HR === null ? "Remotum à l'infini (emmétrope)."
      : "HR = 1 / R = 1 / " + par(R, 2) + " = " + sg(HR * 100, 1) + " cm : remotum " + (R < 0 ? "réel, devant l'œil" : "virtuel, derrière l'œil"));
    // Proximum
    const pP = R - A;                                  // proximité du proximum
    const HP = Math.abs(pP) < EPS ? null : 1 / pP;
    lignes.push("1 / HP = R − Amax = " + nb(R, 2) + " − " + nb(A, 2) + " = " + nb(pP, 2) + " δ" +
      (HP === null ? " : proximum à l'infini" : " ; HP = " + sg(HP * 100, 1) + " cm" + (pP < 0 ? " (devant l'œil)" : " : virtuel, aucun objet réel n'est net")));
    // Lecture sans correction
    const accNu = R - 1 / x;
    lignes.push("Sans correction, lire à " + nb(distance, 0) + " cm : Acc = R − 1/x = " + nb(R, 2) + " − 1/" + par(x, 2) + " = " + sg(accNu, 2) + " δ" +
      (accNu > A + EPS ? ", plus que l'amplitude : lecture impossible sans correction" : accNu < -EPS ? " : texte au-delà du remotum, flou" : ""));
    // Corrigé de loin : addition
    const besoin = 1 / (distance / 100), confort = A / 2;
    const addExacte = Math.max(0, besoin - confort);
    const add = arrondi025(addExacte);
    lignes.push("Corrigé de loin, il faut 1 / " + nb(distance / 100, 2) + " = " + nb(besoin, 2) + " δ pour lire à " + nb(distance, 0) + " cm.");
    lignes.push("Il garde la moitié de son amplitude en réserve : il n'utilise que " + nb(A, 2) + " / 2 = " + nb(confort, 2) + " δ.");
    lignes.push(addExacte < EPS ? "Pas besoin d'addition : l'accommodation de confort suffit."
      : "Addition = " + nb(besoin, 2) + " − " + nb(confort, 2) + " = " + d2(addExacte) + " δ" + (Math.abs(add - addExacte) > EPS ? ", soit " + d2(add) + " à l'ordonnance" : ""));
    let zone = null;
    if (add > EPS) {
      zone = { loin: 100 / add, pres: 100 / (add + A) };
      lignes.push("Avec l'addition, il voit net de " + nb(zone.loin, 1) + " cm (sans accommoder, 1 / " + nb(add, 2) + ") à " + nb(zone.pres, 1) + " cm (1 / " + nb(add + A, 2) + ").");
    }
    return { R, A, HR, HP, accNu, besoin, confort, addExacte, add, zone, lignes };
  }

  // =================================================================
  //  3. ACUITÉ : dixièmes, décimale, logMAR, Snellen 6/… et 20/…
  //  AV décimale = 1 / MAR (minutes d'arc) ; logMAR = log10(MAR) = −log10(AV).
  // =================================================================
  function acuite(o) {
    const { valeur: v, unite } = o;
    if (!fini(v)) return { erreur: "Tape une acuité." };
    let V;
    if (unite === "dixiemes") V = v / 10;
    else if (unite === "decimale") V = v;
    else if (unite === "logmar") V = Math.pow(10, -v);
    else if (unite === "snellen6") V = v > 0 ? 6 / v : NaN;
    else if (unite === "snellen20") V = v > 0 ? 20 / v : NaN;
    else return { erreur: "Unité inconnue." };
    if (!(V > 0) || !isFinite(V)) return { erreur: unite === "logmar" ? "Valeur logMAR impossible." : "L'acuité doit être positive." };
    if (V > 3 || V < 0.005) return { erreur: "Valeur hors de l'échelle (entre 1/20 de dixième et 30/10)." };
    const MAR = 1 / V, logMAR = Math.log10(MAR);
    const r = { V, dixiemes: V * 10, logMAR, MAR, snellen6: 6 / V, snellen20: 20 / V };
    r.lignes = [
      "Acuité décimale = " + nb(V, 2) + ", soit " + nb(V * 10, 1).replace(/,0$/, "") + "/10",
      "Angle minimum de résolution = 1 / " + nb(V, 2) + " = " + nb(MAR, 2) + " minute" + (MAR >= 2 ? "s" : "") + " d'arc",
      "logMAR = log(" + nb(MAR, 2) + ") = " + nb(logMAR, 2) + (Math.abs(logMAR) < 0.005 ? "" : logMAR < 0 ? " (meilleur que 10/10)" : ""),
      "Snellen : 6/" + nb(6 / V, 1).replace(/,0$/, "") + " (à 6 m) ou 20/" + nb(20 / V, 0) + " (à 20 pieds)",
      "Sur une échelle logMAR, une ligne vaut 0,1 et une lettre 0,02."
    ];
    return r;
  }

  // =================================================================
  //  4. ANISÉICONIE en lunettes (règles de nos questions U5, thème Anisométropie)
  //  Induite par les verres ≈ distance verre-œil (cm) × |DOD − DOG| %, image plus grande
  //  du côté du verre le plus convexe (U5-061, U5-165).
  //  Axile ≈ 1,7 % par dioptrie d'écart, image plus grande du côté de l'œil le plus long
  //  (le plus myope) ; en lunettes elle s'oppose à l'induite (loi de Knapp).
  // =================================================================
  function aniseiconie(o) {
    const { OD, OG, dvo, type } = o;
    if (!fini(OD) || !fini(OG) || !fini(dvo)) return { erreur: "Remplis les deux puissances et la distance verre-œil." };
    if (dvo <= 0 || dvo > 30) return { erreur: "La distance verre-œil se donne en mm (souvent 12 à 15)." };
    if (!["puissance", "axile"].includes(type)) return { erreur: "Choisis le type d'anisométropie." };
    const ecart = Math.abs(OD - OG), dcm = dvo / 10;
    const lignes = ["Anisométropie = |" + nb(OD, 2) + " − " + par(OG, 2) + "| = " + nb(ecart, 2) + " δ"];
    if (ecart < EPS) return { ecart: 0, induite: 0, axile: 0, totale: 0, plusGrande: null, lignes: lignes.concat("Les deux yeux ont la même puissance : pas d'aniséiconie.") };
    const induite = dcm * ecart;
    const grandInduite = OD > OG ? "OD" : "OG";        // verre le plus convexe (ou le moins concave)
    lignes.push("Induite par les lunettes ≈ " + nb(dcm, 1) + " cm × " + nb(ecart, 2) + " = " + nb(induite, 1) + " %, image plus grande à l'" + grandInduite);
    let axile = 0, totale = induite, plusGrande = grandInduite;
    if (type === "axile") {
      axile = 1.7 * ecart;
      const grandAxile = grandInduite === "OD" ? "OG" : "OD";   // l'œil le plus long (le plus myope) voit plus grand
      lignes.push("Axile ≈ 1,7 % × " + nb(ecart, 2) + " = " + nb(axile, 1) + " %, image plus grande à l'" + grandAxile + " (l'œil le plus long)");
      totale = Math.abs(axile - induite);
      plusGrande = axile > induite + EPS ? grandAxile : induite > axile + EPS ? grandInduite : null;
      lignes.push("Les deux s'opposent : totale en lunettes ≈ " + nb(axile, 1) + " − " + nb(induite, 1) + " = " + nb(totale, 1) + " %" + (plusGrande ? ", en faveur de l'" + plusGrande : ""));
      lignes.push("En lentilles, l'induite disparaît : il reste toute l'axile, " + nb(axile, 1) + " %. Les lunettes conviennent mieux (loi de Knapp).");
    } else {
      lignes.push("Anisométropie de puissance : pas d'aniséiconie axile. En lentilles, la distance tombe presque à zéro et l'aniséiconie devient très faible.");
    }
    const t = Math.round(totale * 10) / 10;            // on conclut sur la valeur affichée
    lignes.push(t < 3 ? "Moins de 3 % : pas de gêne attendue." : t <= 10 ? "Entre 3 et 10 % : la fusion peut être gênée." : "Plus de 10 % : la fusion est le plus souvent impossible.");
    return { ecart, induite, axile, totale, plusGrande, lignes };
  }

  // =================================================================
  //  5. CONJUGAISON D'UNE LENTILLE MINCE (Descartes), longueurs en mm
  //  1/OA' − 1/OA = 1/f' ; γ = OA'/OA. Calcul par Optique.conjuguer (optique.js).
  //  Donner f' (mm) ou V (δ). OA algébrique : négatif = objet réel.
  // =================================================================
  const fois = x => nb(x, 2).replace(/,00$/, "");          // 3,00 → 3
  function conjugaison(o) {
    let f = o.f;
    if (!fini(f) && fini(o.V)) f = Math.abs(o.V) < EPS ? NaN : 1000 / o.V;
    const OA = o.OA, AB = fini(o.AB) ? o.AB : null;
    if (!fini(f) || Math.abs(f) < EPS) return { erreur: "Donne la focale f' (mm) ou la vergence V (δ), non nulle." };
    if (!fini(OA)) return { erreur: "Donne OA en mm, avec son signe (négatif pour un objet réel)." };
    if (Math.abs(OA) < EPS) return { erreur: "Objet sur la lentille : l'image est confondue avec lui (OA' = 0, γ = 1)." };
    const V = 1000 / f;
    const im = Optique.conjuguer({ x: 0, f }, { x: OA, h: AB === null ? 1 : AB });
    const lignes = [
      "OA = " + sg(OA, 1).replace(/,0$/, "") + " mm : objet " + (OA < 0 ? "réel (avant la lentille)" : "virtuel (après la lentille)"),
      "1/OA' = 1/f' + 1/OA  (en mètres, vergences en δ)",
      "1/OA' = " + sg(V, 2) + " + 1/" + par(OA / 1000, 3) + " = " + sg(V, 2) + " + " + par(1000 / OA, 2) + " = " + sg(V + 1000 / OA, 2) + " δ"
    ];
    if (im.infini) {
      lignes.push("La vergence image est nulle : l'objet est au foyer objet, l'image est rejetée à l'infini.");
      return { f, V, OA, infini: true, lignes };
    }
    const OAp = im.x, g = OAp / OA;
    lignes.push("OA' = 1 / " + par(V + 1000 / OA, 2) + " = " + sg(OAp / 1000, 4) + " m = " + sg(OAp, 1) + " mm");
    lignes.push("γ = OA' / OA = " + nb(OAp, 1) + " / " + par(OA, 1) + " = " + sg(g, 2));
    if (AB !== null) lignes.push("A'B' = γ × AB = " + par(g, 2) + " × " + par(AB, 1) + " = " + sg(g * AB, 1) + " mm");
    const reelle = OAp > 0, droite = g > 0;
    lignes.push("Image " + (reelle ? "réelle (après la lentille, on peut la recevoir sur un écran)" : "virtuelle (avant la lentille)") + ", " +
      (droite ? "droite" : "renversée") + ", " + (Math.abs(Math.abs(g) - 1) < 0.005 ? "de même taille" : Math.abs(g) > 1 ? fois(Math.abs(g)) + " fois plus grande" : fois(1 / Math.abs(g)) + " fois plus petite") + ".");
    return { f, V, OA, OAp, g, AB, ApBp: AB === null ? null : g * AB, reelle, droite, lignes };
  }

  // =================================================================
  //  6. SEUIL DE RENTABILITÉ ET POINT MORT (convention de nos questions U3)
  //  MCV = CA − charges variables ; taux de MCV = MCV / CA ; SR = CF / taux de MCV ;
  //  point mort = SR / CA × 12 mois (ou × 360 jours), activité régulière dès janvier.
  //  On donne les charges variables (€) OU directement le taux de MCV (%).
  // =================================================================
  const MOIS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
  const eur = x => nb(x, Math.abs(x - Math.round(x)) < 0.005 ? 0 : 2) + " €";
  function seuil(o) {
    const { CA, CF } = o;
    if (!fini(CA) || !fini(CF)) return { erreur: "Remplis le chiffre d'affaires HT et les charges fixes." };
    if (CA <= 0 || CF < 0) return { erreur: "Le CA doit être positif et les charges fixes ne peuvent pas être négatives." };
    let taux, MCV;
    const lignes = [];
    if (fini(o.CV)) {
      MCV = CA - o.CV; taux = MCV / CA;
      lignes.push("MCV = CA − charges variables = " + eur(CA) + " − " + eur(o.CV) + " = " + eur(MCV));
      lignes.push("Taux de MCV = " + nb(MCV, 0) + " / " + nb(CA, 0) + " = " + nb(taux, 4).replace(/0+$/, "").replace(/,$/, "") + ", soit " + nb(taux * 100, 2).replace(/,00$/, "") + " %");
    } else if (fini(o.tauxMCV)) {
      taux = o.tauxMCV / 100; MCV = CA * taux;
      lignes.push("MCV = CA × taux de MCV = " + eur(CA) + " × " + nb(taux, 4).replace(/0+$/, "").replace(/,$/, "") + " = " + eur(MCV));
    } else return { erreur: "Donne les charges variables ou le taux de marge sur coût variable." };
    if (!(taux > 0) || taux >= 1) return { erreur: "Le taux de MCV doit être entre 0 et 100 % : les charges variables sont plus petites que le CA." };
    const SR = CF / taux, resultat = MCV - CF;
    const tauxTxt = nb(taux, 4).replace(/0+$/, "").replace(/,$/, "");
    lignes.push("SR = charges fixes / taux de MCV = " + nb(CF, 0) + " / " + tauxTxt + " = " + eur(SR) + " HT");
    lignes.push("Résultat = MCV − charges fixes = " + nb(MCV, 0) + " − " + nb(CF, 0) + " = " + eur(resultat) + (resultat < 0 ? " : une perte" : resultat > 0 ? " : un bénéfice" : ""));
    const marge = CA - SR, indice = marge / CA;
    const r = { MCV, taux, SR, resultat, margeSecurite: marge, indiceSecurite: indice };
    if (SR > CA + 0.005) {
      lignes.push("Le SR dépasse le CA : le point mort n'est pas atteint dans l'année. Il manque " + eur(SR - CA) + " de ventes.");
      r.pointMort = null;
    } else {
      const jours = o.base === "jours";
      const pm = SR / CA * (jours ? 360 : 12);
      const pmMois = jours ? pm / 30 : pm;
      lignes.push("Point mort = SR / CA × " + (jours ? "360 jours" : "12 mois") + " = " + nb(SR, 0) + " / " + nb(CA, 0) + " × " + (jours ? "360" : "12") + " = " +
        nb(pm, jours ? 0 : 2).replace(/,00$/, "") + (jours ? " jours" : " mois"));
      // Date, activité régulière à partir du 1er janvier, mois de 30 jours
      const m = Math.floor(pmMois + 1e-9), j = Math.round((pmMois - m) * 30);
      let date;
      if (pmMois * 30 < 0.5) date = "dès le 1er janvier";
      else if (j === 0 || j === 30) date = "fin " + MOIS[Math.min(11, Math.max(0, (j === 30 ? m : m - 1)))];
      else date = "vers le " + j + (j === 1 ? "er" : "") + " " + MOIS[Math.min(11, m)];
      lignes.push("Soit " + date + " (ventes régulières dès janvier).");
      lignes.push("Marge de sécurité = CA − SR = " + eur(marge) + ", soit " + nb(indice * 100, 1).replace(/,0$/, "") + " % du CA : le CA peut baisser d'autant avant la perte.");
      r.pointMort = pm; r.date = date;
    }
    r.lignes = lignes;
    return r;
  }

  return { keratometrie, accommodation, acuite, aniseiconie, conjugaison, seuil, nb, sg, arrondi025 };
})();
if (typeof module !== "undefined") module.exports = Calculs2;

// =====================================================================
// Partie 2 : la page (seulement dans un navigateur). Même présentation que calculateurs.js :
// la ligne principale en gros, puis le détail ligne par ligne.
// =====================================================================
if (typeof document !== "undefined") (() => {
  const $ = id => document.getElementById(id);
  if (!$("k-r1")) return;                                   // page sans ces calculateurs
  // Lit un champ : accepte « −2,50 », « - 2.5 », « +1,00 ». Rend null si vide ou illisible.
  const champ = id => {
    const t = $(id).value.trim().replace(/\s/g, "").replace(",", ".").replace(/[−–]/g, "-");
    if (t === "") return null;
    const n = Number(t);
    return isNaN(n) ? null : n;
  };
  const val = id => $(id).value;
  const echapper = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const { nb, sg } = Calculs2;
  function afficher(zone, titre, lignes) {
    zone.innerHTML = "<strong>" + echapper(titre) + "</strong>" +
      '<span class="calcul">' + lignes.map(l => '<span class="ligne-calcul">' + echapper(l) + "</span>").join("") + "</span>";
  }
  const message = (zone, texte, erreur) => {
    if (erreur) zone.innerHTML = '<span class="erreur">' + echapper(texte) + "</span>";
    else zone.textContent = texte;
  };
  const brancher = (ids, f) => ids.forEach(id => { $(id).addEventListener("input", f); $(id).addEventListener("change", f); });
  const sansZeros = t => t.replace(/,00$/, "").replace(/(,\d)0$/, "$1");

  // ---------- Kératométrie ----------
  function calculKerato() {
    const zone = $("k-res");
    const r1 = champ("k-r1"), axe1 = champ("k-axe"), r2 = champ("k-r2");
    $("k-axe2").textContent = axe1 === null || axe1 < 0 || axe1 > 180 ? "à 90° du premier" : "à " + (((Math.round(axe1) + 90) % 180) || 180) + "°";
    if (r1 === null || r2 === null || axe1 === null) return message(zone, "Remplis les deux rayons et l'axe du premier.");
    const sph = champ("k-sph");
    const r = Calculs2.keratometrie({ r1, axe1, r2, lunettes: sph === null ? null : { sph, cyl: champ("k-cyl"), axe: champ("k-axel"), dvo: champ("k-dvo") } });
    if (r.erreur) return message(zone, r.erreur, true);
    const titre = r.ac < 0.005 ? "K = " + nb(r.K1, 2) + " δ, cornée sphérique" : "Astigmatisme cornéen " + nb(r.ac, 2) + " δ, " + r.nature;
    afficher(zone, titre, r.lignes);
  }
  brancher(["k-r1", "k-axe", "k-r2", "k-sph", "k-cyl", "k-axel", "k-dvo"], calculKerato);

  // ---------- Accommodation ----------
  function calculAccommodation() {
    const zone = $("a-res");
    const R = champ("a-r"), amplitude = champ("a-amp"), distance = champ("a-dist");
    if (R === null || amplitude === null || distance === null) return message(zone, "Remplis l'amétropie, l'amplitude et la distance de lecture.");
    const r = Calculs2.accommodation({ R, amplitude, distance });
    if (r.erreur) return message(zone, r.erreur, true);
    afficher(zone, r.add > 0 ? "Addition " + sg(r.add, 2) + " δ" : "Pas d'addition", r.lignes);
  }
  brancher(["a-r", "a-amp", "a-dist"], calculAccommodation);

  // ---------- Acuité ----------
  function calculAcuite() {
    const zone = $("av-res");
    const valeur = champ("av-val");
    if (valeur === null) return message(zone, "Tape une acuité.");
    const r = Calculs2.acuite({ valeur, unite: val("av-unite") });
    if (r.erreur) return message(zone, r.erreur, true);
    afficher(zone, sansZeros(nb(r.dixiemes, 1).replace(/,0$/, "")) + "/10 · logMAR " + nb(r.logMAR, 2) + " · 6/" + nb(r.snellen6, 1).replace(/,0$/, "") + " · 20/" + nb(r.snellen20, 0), r.lignes);
  }
  brancher(["av-val", "av-unite"], calculAcuite);

  // ---------- Aniséiconie ----------
  function calculAniseiconie() {
    const zone = $("an-res");
    const OD = champ("an-od"), OG = champ("an-og"), dvo = champ("an-dvo");
    if (OD === null || OG === null || dvo === null) return message(zone, "Remplis les deux puissances et la distance verre-œil.");
    const r = Calculs2.aniseiconie({ OD, OG, dvo, type: val("an-type") });
    if (r.erreur) return message(zone, r.erreur, true);
    afficher(zone, "Environ " + nb(r.totale, 1) + " %" + (r.plusGrande ? ", image plus grande à l'" + r.plusGrande : ""), r.lignes);
  }
  brancher(["an-od", "an-og", "an-dvo", "an-type"], calculAniseiconie);

  // ---------- Conjugaison ----------
  function calculConjugaison() {
    const zone = $("c-res");
    const enV = val("c-connu") === "V";
    $("c-valeur-nom").textContent = enV ? "Vergence V (δ)" : "Focale f' (mm)";
    const v = champ("c-valeur"), OA = champ("c-oa");
    if (v === null || OA === null) return message(zone, enV ? "Remplis la vergence et OA." : "Remplis la focale et OA.");
    const r = Calculs2.conjugaison(enV ? { V: v, OA, AB: champ("c-ab") } : { f: v, OA, AB: champ("c-ab") });
    if (r.erreur) return message(zone, r.erreur, true);
    if (r.infini) return afficher(zone, "Image à l'infini", r.lignes);
    afficher(zone, "OA' = " + sg(r.OAp, 1) + " mm · γ = " + sg(r.g, 2), r.lignes);
  }
  brancher(["c-connu", "c-valeur", "c-oa", "c-ab"], calculConjugaison);

  // ---------- Seuil de rentabilité ----------
  function calculSeuil() {
    const zone = $("s-res");
    const enTaux = val("s-connu") === "taux";
    $("s-valeur-nom").textContent = enTaux ? "Taux de MCV (%)" : "Charges variables (€)";
    const CA = champ("s-ca"), v = champ("s-valeur"), CF = champ("s-cf");
    if (CA === null || v === null || CF === null) return message(zone, "Remplis le CA HT, " + (enTaux ? "le taux de MCV" : "les charges variables") + " et les charges fixes.");
    const r = Calculs2.seuil(enTaux ? { CA, tauxMCV: v, CF, base: val("s-base") } : { CA, CV: v, CF, base: val("s-base") });
    if (r.erreur) return message(zone, r.erreur, true);
    afficher(zone, "SR = " + nb(r.SR, Math.abs(r.SR - Math.round(r.SR)) < 0.005 ? 0 : 2) + " € HT" + (r.date ? " · point mort " + r.date : ""), r.lignes);
  }
  brancher(["s-ca", "s-connu", "s-valeur", "s-cf", "s-base"], calculSeuil);
})();
