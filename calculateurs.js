// =====================================================================
// Calculateurs de la page Calculs (calculateurs.html) : méridien, prismes, prix et marges.
// ---------------------------------------------------------------------
// Partie 1 : les calculs seuls (objet Calculs), sans rien afficher. Chaque fonction rend les
//   résultats ET les lignes du détail, comme on les écrirait sur la copie. Ces fonctions sont
//   testées dans notes/tests/tester-calculateurs.js contre les corrections de nos questions.
// Partie 2 : le branchement sur la page (seulement dans un navigateur).
// Décisions de David : notes/coordination/calculateurs-nouveaux.md
// =====================================================================

const Calculs = (() => {
  // ---------- Écriture des nombres à la française ----------
  const RAD = Math.PI / 180;
  const net = x => (Math.abs(x) < 1e-9 ? 0 : x);           // évite « −0,00 »
  // Nombre avec n décimales, virgule, espace fine entre les milliers : 1 234,50
  function nombre(x, n) {
    const t = Math.abs(net(x)).toFixed(n).split(".");
    t[0] = t[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return (net(x) < 0 ? "−" : "") + t.join(",");
  }
  // Sans les zéros inutiles à la fin : 3,60 → 3,6 ; 3,00 → 3
  const court = (x, n) => nombre(x, n).replace(/(,\d*?)0+$/, "$1").replace(/,$/, "");
  // Puissance signée : +1,25 ; −0,625 (troisième décimale seulement si elle compte)
  function dioptries(x) {
    x = net(x);
    const n = Math.abs(x * 100 - Math.round(x * 100)) > 1e-6 ? 3 : 2;
    return (x >= 0 ? "+" : "") + nombre(x, n);
  }
  const quart = x => Math.round(net(x) * 4 + 1e-9) / 4;   // 0,25 δ ; pile au milieu : la valeur la plus positive
  const demi = x => Math.round(x * 2 + 1e-9) / 2;          // 0,5 Δ
  const degres = a => ((a % 180) + 180) % 180;              // angle de méridien entre 0 et 180
  const axeEcrit = a => (degres(a) === 0 ? 180 : degres(a));

  // ---------- 1. Puissance dans un méridien ----------
  // F(θ) = S + C × sin²(θ − axe). Le cylindre peut être écrit en − ou en + : la formule est la même.
  function meridien({ sphere: S, cylindre: C, axe, angle }) {
    const a = axeEcrit(axe);
    const perp = axeEcrit(a + 90);
    const es = S + C / 2;
    const r = {
      principaux: [{ angle: a, puissance: S }, { angle: perp, puissance: S + C }],
      equivalent: es, equivalentArrondi: quart(es),
      lignes: [
        "Méridien de l'axe (" + a + "°) : le cylindre n'y agit pas, F = " + dioptries(S) + " δ",
        "Méridien perpendiculaire (" + perp + "°) : F = " + dioptries(S) + " + (" + dioptries(C) + ") = " + dioptries(S + C) + " δ",
      ],
      lignesES: ["ES = S + C / 2 = " + dioptries(S) + " + (" + dioptries(C) + ") / 2 = " + dioptries(es) + " δ"],
    };
    if (angle !== null && angle !== undefined) {
      const ecart = angle - a;
      const s2 = Math.sin(ecart * RAD) ** 2;
      const F = S + C * s2;
      r.angle = angle;
      r.puissance = F;
      r.puissanceArrondie = quart(F);
      r.lignesAngle = [
        "F(θ) = S + C × sin²(θ − axe)",
        "= " + dioptries(S) + " + (" + dioptries(C) + ") × sin²(" + court(angle, 1) + "° − " + a + "°)",
        "= " + dioptries(S) + " + (" + dioptries(C) + ") × " + court(s2, 4).replace(/^−?0$/, "0") + " = " + dioptries(Math.round(F * 1000) / 1000) + " δ",
      ];
    }
    return r;
  }

  // ---------- 2. Prismes ----------
  // Repère : on regarde le porteur de face. Notation 360° (base) : 0° vers la droite de l'observateur,
  // 90° en haut, 270° en bas. OD : 0° = base nasale, 180° = base temporale. OG : l'inverse.
  const signeH = (oeil, base) => ((oeil === "OD") === (base === "nasale") ? 1 : -1);

  // Nom de la base, avec son équivalent interne / externe (vocabulaire des corrigés)
  const IE = { nasale: "interne", temporale: "externe" };
  function nomBase(h, v) {   // h, v : « nasale », « temporale », « supérieure », « inférieure » ou null
    const haut = v === "supérieure" ? "supéro" : "inféro";
    if (h && v) return "base " + haut + "-" + h + " (" + haut + "-" + IE[h] + ")";
    if (h) return "base " + h + " (" + IE[h] + ")";
    return "base " + v;
  }

  // Deux prismes perpendiculaires → un prisme résultant : P = √(PH² + PV²), tan α = PV / PH
  function prismeComposer({ ph, baseH, pv, baseV, oeil }) {
    const P = Math.hypot(ph, pv);
    const alpha = ph === 0 ? (pv === 0 ? 0 : 90) : Math.atan(pv / ph) / RAD;
    const x = ph * signeH(oeil, baseH), y = baseV === "supérieure" ? pv : -pv;
    let n360 = ((Math.atan2(y, x) / RAD) + 360) % 360;
    if (Math.abs(n360 - 360) < 1e-9) n360 = 0;
    const h = ph > 0 ? baseH : null, v = pv > 0 ? baseV : null;
    return {
      prisme: P, prismeArrondi: demi(P), angle: alpha, notation360: n360,
      base: P === 0 ? "aucun prisme" : nomBase(h, v),
      lignes: [
        "P = √(PH² + PV²) = √(" + court(ph, 2) + "² + " + court(pv, 2) + "²) = √" + court(ph * ph + pv * pv, 4) + " = " + nombre(P, 2) + " Δ",
        ph === 0 || pv === 0
          ? "L'un des deux prismes est nul : la base garde sa direction."
          : "tan α = PV / PH = " + court(pv, 2) + " / " + court(ph, 2) + " = " + nombre(pv / ph, 3) + ", donc α = " + nombre(alpha, 1) + "° " + (baseV === "supérieure" ? "au-dessus" : "au-dessous") + " de l'horizontale, côté " + (baseH === "nasale" ? "nasal" : "temporal"),
      ],
    };
  }

  // Un prisme (valeur + base en notation 360°) → ses deux composantes : PH = P × cos θ, PV = P × sin θ
  function prismeDecomposer({ prisme: P, base360, oeil }) {
    const t = ((base360 % 360) + 360) % 360;
    const x = net(Math.round(P * Math.cos(t * RAD) * 1e9) / 1e9);
    const y = net(Math.round(P * Math.sin(t * RAD) * 1e9) / 1e9);
    const baseH = x === 0 ? null : (x > 0) === (oeil === "OD") ? "nasale" : "temporale";
    const baseV = y === 0 ? null : y > 0 ? "supérieure" : "inférieure";
    return {
      ph: Math.abs(x), pv: Math.abs(y), baseH, baseV,
      lignes: [
        "PH = P × |cos θ| = " + court(P, 2) + " × |cos " + court(t, 1) + "°| = " + nombre(Math.abs(x), 2) + " Δ" + (baseH ? " base " + baseH : ""),
        "PV = P × |sin θ| = " + court(P, 2) + " × |sin " + court(t, 1) + "°| = " + nombre(Math.abs(y), 2) + " Δ" + (baseV ? " base " + baseV : ""),
      ],
    };
  }

  // « Prentice à l'envers » : décentrement c (cm) = P / F, donné en mm.
  // Verre convergent : la base est tournée vers le centre optique, donc on place le centre optique
  // du côté de la base voulue. Verre divergent : la base est du côté du bord, donc le centre optique
  // va du côté opposé.
  const OPPOSE = { nasale: "temporale", temporale: "nasale", "supérieure": "inférieure", "inférieure": "supérieure" };
  const COTE = { nasale: "côté nasal", temporale: "côté temporal", "supérieure": "au-dessus", "inférieure": "en dessous" };
  function decentrement({ prisme: P, puissance: F, base }) {
    if (F === 0) return { erreur: "Un verre plan ne donne aucun prisme, quel que soit le décentrement." };
    const cm = P / Math.abs(F);
    const cote = F > 0 ? base : OPPOSE[base];
    return {
      mm: cm * 10, cote,
      phrase: "Centre optique " + COTE[cote] + " de la pupille",
      lignes: [
        "P = c × |F|, donc c = P / |F| = " + court(P, 2) + " / " + nombre(Math.abs(F), 2) + " = " + nombre(cm, 3) + " cm = " + nombre(cm * 10, 1) + " mm",
        F > 0
          ? "Verre convergent : la base est tournée vers le centre optique. Pour une base " + base + ", le centre optique est " + COTE[cote] + " de la pupille."
          : "Verre divergent : la base est tournée vers le bord. Pour une base " + base + ", le centre optique est " + COTE[cote] + " de la pupille.",
      ],
    };
  }

  // ---------- 8. Prix et marges ----------
  // Définitions de specificites-U3.js : taux de marque = marge / PV HT ; taux de marge = marge / coût d'achat HT ;
  // coefficient multiplicateur = PV / coût d'achat HT (en HT ou en TTC).
  // connu : "pvht", "pvttc", "marque", "marge", "coefht", "coefttc" ; valeur : le nombre tapé (taux en %).
  function marges({ achat, connu, valeur: v, tva }) {
    const t = tva / 100, k = 1 + t;
    const e = x => nombre(x, 2) + " €";
    const pc = x => nombre(x, 1) + " %";
    const lignes = [];
    let ht;
    if (connu === "pvht") ht = v;
    else if (connu === "pvttc") { ht = v / k; lignes.push("PV HT = PV TTC / " + court(k, 3) + " = " + e(v) + " / " + court(k, 3) + " = " + e(ht)); }
    else if (achat === null || achat === undefined) return { erreur: "Il faut le coût d'achat HT pour partir d'un taux ou d'un coefficient." };
    else if (connu === "marque") {
      if (v >= 100) return { erreur: "Un taux de marque est toujours inférieur à 100 % : la marge est une partie du prix de vente." };
      ht = achat / (1 - v / 100);
      lignes.push("PV HT = coût d'achat / (1 − taux de marque) = " + e(achat) + " / (1 − " + court(v / 100, 4) + ") = " + e(ht));
    } else if (connu === "marge") {
      ht = achat * (1 + v / 100);
      lignes.push("PV HT = coût d'achat × (1 + taux de marge) = " + e(achat) + " × (1 + " + court(v / 100, 4) + ") = " + e(ht));
    } else if (connu === "coefht") {
      ht = achat * v;
      lignes.push("PV HT = coût d'achat × coefficient HT = " + e(achat) + " × " + court(v, 3) + " = " + e(ht));
    } else if (connu === "coefttc") {
      const ttc = achat * v;
      ht = ttc / k;
      lignes.push("PV TTC = coût d'achat × coefficient TTC = " + e(achat) + " × " + court(v, 3) + " = " + e(ttc));
      lignes.push("PV HT = PV TTC / " + court(k, 3) + " = " + e(ttc) + " / " + court(k, 3) + " = " + e(ht));
    }
    const ttc = ht * k;
    const r = { pvht: ht, pvttc: ttc, tva: ttc - ht, lignes };
    if (connu !== "pvttc" && connu !== "coefttc") lignes.push("PV TTC = PV HT × " + court(k, 3) + " = " + e(ht) + " × " + court(k, 3) + " = " + e(ttc));
    lignes.push("TVA = PV TTC − PV HT = " + e(ttc) + " − " + e(ht) + " = " + e(ttc - ht));
    if (achat === null || achat === undefined) return r;
    if (achat <= 0) return { erreur: "Le coût d'achat doit être supérieur à 0 €." };
    const mb = ht - achat;
    Object.assign(r, { margeBrute: mb, tauxMarque: (mb / ht) * 100, tauxMarge: (mb / achat) * 100, coefHT: ht / achat, coefTTC: ttc / achat });
    lignes.push("Marge brute = PV HT − coût d'achat HT = " + e(ht) + " − " + e(achat) + " = " + e(mb));
    lignes.push("Taux de marque = marge / PV HT × 100 = " + nombre(mb, 2) + " / " + nombre(ht, 2) + " × 100 = " + pc(r.tauxMarque));
    lignes.push("Taux de marge = marge / coût d'achat HT × 100 = " + nombre(mb, 2) + " / " + nombre(achat, 2) + " × 100 = " + pc(r.tauxMarge));
    lignes.push("Coefficient HT = PV HT / coût d'achat = " + nombre(ht, 2) + " / " + nombre(achat, 2) + " = " + court(r.coefHT, 2));
    lignes.push("Coefficient TTC = PV TTC / coût d'achat = " + nombre(ttc, 2) + " / " + nombre(achat, 2) + " = " + court(r.coefTTC, 2));
    return r;
  }

  return { meridien, prismeComposer, prismeDecomposer, decentrement, marges, nombre, court, dioptries, quart, demi };
})();

if (typeof module !== "undefined") module.exports = Calculs;

// =====================================================================
// Partie 2 : la page
// =====================================================================
if (typeof document !== "undefined") (() => {
  const $ = id => document.getElementById(id);
  // Lit un champ : accepte « −2,50 », « - 2.5 », « +1,00 ». Rend null si vide ou illisible.
  const champ = id => {
    const t = $(id).value.trim().replace(/\s/g, "").replace(",", ".").replace(/[−–]/g, "-");
    if (t === "") return null;
    const n = Number(t);
    return isNaN(n) ? null : n;
  };
  const val = id => $(id).value;
  const echapper = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  const { nombre, court, dioptries } = Calculs;
  // Le résultat : la ligne principale en gros, puis le détail ligne par ligne
  function afficher(zone, titre, lignes) {
    zone.innerHTML = "<strong>" + titre + "</strong>" +
      '<span class="calcul">' + lignes.map(l => '<span class="ligne-calcul">' + echapper(l) + "</span>").join("") + "</span>";
  }
  const message = (zone, texte, erreur) => {
    if (erreur) zone.innerHTML = '<span class="erreur">' + echapper(texte) + "</span>";
    else zone.textContent = texte;
  };
  const brancher = (ids, f) => ids.forEach(id => { $(id).addEventListener("input", f); $(id).addEventListener("change", f); });

  // ---------- Méridien ----------
  function calculMeridien() {
    const zone = $("m-res");
    const S = champ("m-sph"), C = champ("m-cyl"), axe = champ("m-axe"), angle = champ("m-angle");
    if (S === null || C === null || axe === null) return message(zone, "Remplis la sphère, le cylindre et l'axe.");
    if (axe < 0 || axe > 180 || (angle !== null && (angle < 0 || angle > 180))) return message(zone, "Les angles vont de 0° à 180°.", true);
    const r = Calculs.meridien({ sphere: S, cylindre: C, axe, angle });
    const lignes = [];
    let titre;
    if (angle !== null) {
      titre = dioptries(r.puissance) + " δ à " + court(angle, 1) + "°";
      lignes.push(...r.lignesAngle);
    } else {
      titre = dioptries(r.principaux[0].puissance) + " δ à " + r.principaux[0].angle + "° et " + dioptries(r.principaux[1].puissance) + " δ à " + r.principaux[1].angle + "°";
    }
    lignes.push(...r.lignes, ...r.lignesES);
    if (r.equivalentArrondi !== r.equivalent) {
      const milieu = Math.abs(Math.abs(r.equivalent * 4 % 1) - 0.5) < 1e-6;
      lignes.push("Arrondi à 0,25 δ : " + dioptries(r.equivalentArrondi) + " δ" + (milieu ? " (pile entre deux pas : on prend en général le plus positif, moins de concave ou plus de convexe)" : ""));
    }
    afficher(zone, titre, lignes);
    zone.insertAdjacentHTML("beforeend", '<span class="calcul">Équivalent sphérique : <b>' + dioptries(r.equivalent) + " δ</b></span>");
  }
  brancher(["m-sph", "m-cyl", "m-axe", "m-angle"], calculMeridien);

  // ---------- Prismes : composer ----------
  function calculComposer() {
    const zone = $("pc-res");
    const ph = champ("pc-h"), pv = champ("pc-v");
    if (ph === null || pv === null) return message(zone, "Remplis les deux prismes (0 s'il n'y en a pas).");
    if (ph < 0 || pv < 0) return message(zone, "Tape les prismes sans signe : la base donne le sens.", true);
    const oeil = val("pc-oeil");
    const r = Calculs.prismeComposer({ ph, baseH: val("pc-bh"), pv, baseV: val("pc-bv"), oeil });
    if (r.prisme === 0) return message(zone, "Aucun prisme.");
    const lignes = [...r.lignes];
    lignes.push("Au dixième : " + nombre(r.prisme, 1) + " Δ" + (r.prismeArrondi !== Math.round(r.prisme * 100) / 100 ? " · arrondi d'ordonnance (0,5 Δ) : " + nombre(r.prismeArrondi, 1) + " Δ" : ""));
    lignes.push("Notation 360° (" + oeil + ") : base à " + court(Math.round(r.notation360 * 10) / 10, 1) + "°");
    afficher(zone, nombre(r.prisme, 2) + " Δ " + r.base + (ph > 0 && pv > 0 ? ", à " + nombre(r.angle, 1) + "° de l'horizontale" : ""), lignes);
  }
  brancher(["pc-h", "pc-bh", "pc-v", "pc-bv", "pc-oeil"], calculComposer);

  // ---------- Prismes : décomposer ----------
  function calculDecomposer() {
    const zone = $("pd-res");
    const P = champ("pd-p"), b = champ("pd-base");
    if (P === null || b === null) return message(zone, "Remplis le prisme et l'orientation de sa base.");
    if (P < 0 || b < 0 || b > 360) return message(zone, "Prisme sans signe, base entre 0° et 360°.", true);
    const r = Calculs.prismeDecomposer({ prisme: P, base360: b, oeil: val("pd-oeil") });
    const morceaux = [];
    if (r.ph > 0) morceaux.push(nombre(r.ph, 2) + " Δ base " + r.baseH);
    if (r.pv > 0) morceaux.push(nombre(r.pv, 2) + " Δ base " + r.baseV);
    afficher(zone, morceaux.join(" et ") || "Aucun prisme", r.lignes);
  }
  brancher(["pd-p", "pd-base", "pd-oeil"], calculDecomposer);

  // ---------- Prismes : décentrement ----------
  function calculDecentrement() {
    const zone = $("pe-res");
    const P = champ("pe-p"), F = champ("pe-f");
    if (P === null || F === null) return message(zone, "Remplis le prisme voulu et la puissance du verre.");
    if (P < 0) return message(zone, "Tape le prisme sans signe : la base donne le sens.", true);
    const r = Calculs.decentrement({ prisme: P, puissance: F, base: val("pe-base") });
    if (r.erreur) return message(zone, r.erreur, true);
    afficher(zone, nombre(r.mm, 1) + " mm", [r.phrase + ".", ...r.lignes]);
  }
  brancher(["pe-p", "pe-f", "pe-base"], calculDecentrement);

  // ---------- Prix et marges ----------
  const ETIQUETTES = { pvht: "Prix de vente HT (€)", pvttc: "Prix de vente TTC (€)", marque: "Taux de marque voulu (%)", marge: "Taux de marge voulu (%)", coefht: "Coefficient HT", coefttc: "Coefficient TTC" };
  function calculMarges() {
    const zone = $("e-res");
    const connu = val("e-connu");
    $("e-valeur-nom").textContent = ETIQUETTES[connu];
    const achat = champ("e-achat"), v = champ("e-valeur"), tva = champ("e-tva");
    if (v === null || tva === null) return message(zone, "Remplis la valeur connue et la TVA.");
    if (v < 0 || tva < 0 || (achat !== null && achat < 0)) return message(zone, "Les montants et les taux se tapent sans signe moins.", true);
    if (achat === null && (connu === "pvht" || connu === "pvttc")) {
      const r = Calculs.marges({ achat: null, connu, valeur: v, tva });
      return afficher(zone, nombre(r.pvht, 2) + " € HT · " + nombre(r.pvttc, 2) + " € TTC", [...r.lignes, "Tape le coût d'achat pour avoir la marge et les taux."]);
    }
    const r = Calculs.marges({ achat, connu, valeur: v, tva });
    if (r.erreur) return message(zone, r.erreur, true);
    const lignes = [...r.lignes];
    if (r.margeBrute < 0) lignes.unshift("Le prix de vente est sous le coût d'achat : la marge est négative.");
    afficher(zone, "Marque " + nombre(r.tauxMarque, 1) + " % · marge " + nombre(r.tauxMarge, 1) + " %", lignes);
    zone.insertAdjacentHTML("beforeend", '<span class="calcul">PV HT <b>' + nombre(r.pvht, 2) + " €</b> · PV TTC <b>" + nombre(r.pvttc, 2) + " €</b> · coefficient TTC <b>" + court(r.coefTTC, 2) + "</b></span>");
  }
  brancher(["e-achat", "e-connu", "e-valeur", "e-tva"], calculMarges);
})();
