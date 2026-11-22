// Calculette à l'écran du QCM (qcm.html, aussi pendant l'examen blanc, comme au vrai BTS), sur le modèle de la TI-83 Premium CE.
// Un bouton « Calculette » sous chaque question qui contient des chiffres ; une seule calculette pour toute la page,
// qui garde son calcul et son historique d'une question à l'autre. Au téléphone, elle se pose en bas de l'écran
// et la page remonte pour que la case de réponse et « Valider » restent visibles au-dessus.
// Écran « naturel » : les fractions s'écrivent posées (numérateur au-dessus de la barre), un curseur se déplace avec ◀ ▶,
// les calculs faits restent au-dessus (calcul à gauche, résultat à droite) ; les toucher les reprend dans la ligne.
// Sait faire : + − × ÷, fraction, parenthèses, ×10ⁿ (même négatif : 550 ×10⁻⁹), 1/x, x², √, sin cos tan en degrés, π, (−), %, Rép.
// % : « 200 × 15 % » = 30 ; « 200 + 20 % » = 240 (comme les calculatrices du lycée).
// Clavier (ordinateur) : chiffres, , . + - * / : ( ) ^ % Entrée ou =, flèches, Retour arrière, Suppr (tout effacer),
// E (×10ⁿ), F (fraction), A (Rép), Échap (fermer).
(function () {
  "use strict";
  // ---------- État ----------
  // Une ligne = un tableau d'éléments : { t: "c", v: "5" | "," | "E" } (chiffres, virgule, ×10ⁿ), { t: "op", v: "+" | "−" | "×" | "÷" },
  // { t: "(" }, { t: ")" }, { t: "fn", v: "sin" | "cos" | "tan" | "√" } (avec sa parenthèse), { t: "post", v: "²" | "⁻¹" | "%" },
  // { t: "pi" }, { t: "rep" } (dernier résultat), { t: "val", v } (résultat repris de l'historique),
  // { t: "frac", num: [ligne], den: [ligne] } (fraction posée).
  let ligne = [];
  let rangee = ligne, pos = 0;     // le curseur : où l'on écrit (la ligne, ou le haut / le bas d'une fraction) et la place dedans
  let pile = [];                   // les fractions qui contiennent le curseur : { parent, frac }
  let historique = [];             // { ligne, resultat }
  let dernier = null;              // dernier résultat (touche Rép)
  let erreur = "";
  let panneau = null, boutonOuvrant = null;
  let repliee = false;             // téléphone : touches repliées, seul l'écran reste

  // ---------- Calcul ----------
  function Faute(message) { this.message = message; }
  const chiffre = j => j && j.t === "c" && /\d/.test(j.v);
  const estE = j => j && j.t === "c" && j.v === "E";

  // Les éléments d'une ligne → les mots du calcul : nombres lus, fractions et Rép déjà calculés
  function lire(r) {
    const mots = [];
    for (let i = 0; i < r.length;) {
      const j = r[i];
      if (j.t === "c") {
        let m = "";
        while (r[i] && r[i].t === "c" && r[i].v !== "E") { m += r[i].v === "," ? "." : r[i].v; i++; }
        let e = null;
        if (estE(r[i])) {
          i++; e = "";
          if (r[i] && r[i].t === "op" && (r[i].v === "−" || r[i].v === "+")) { if (r[i].v === "−") e = "-"; i++; }
          while (chiffre(r[i])) { e += r[i].v; i++; }
          if (!/\d/.test(e)) throw new Faute("Puissance de 10 incomplète");
          if (r[i] && r[i].t === "c") throw new Faute("Nombre mal écrit");
        }
        if (m === "") m = "1";                                  // ×10ⁿ tapé seul : 10ⁿ
        if (m === "." || (m.match(/\./g) || []).length > 1) throw new Faute("Nombre mal écrit");
        mots.push({ t: "nb", v: parseFloat(m) * Math.pow(10, e === null ? 0 : parseInt(e, 10)) });
        continue;
      }
      if (j.t === "frac") {
        if (!j.num.length || !j.den.length) throw new Faute("Fraction incomplète");
        const d = calculer(j.den);
        if (d === 0) throw new Faute("Division par zéro");
        mots.push({ t: "nb", v: calculer(j.num) / d });
      } else if (j.t === "rep") {
        if (dernier === null) throw new Faute("Pas encore de résultat");
        mots.push({ t: "nb", v: dernier });
      } else if (j.t === "val") mots.push({ t: "nb", v: j.v });
      else mots.push(j);
      i++;
    }
    return mots;
  }
  function calculer(r) { return evaluer(lire(r)); }

  function evaluer(liste) {
    let i = 0;
    const voir = () => liste[i];
    function expression() {
      let gauche = terme().v;
      while (voir() && voir().t === "op" && (voir().v === "+" || voir().v === "−")) {
        const op = liste[i++].v;
        const d = terme();
        if (d.pct) gauche = gauche * (1 + (op === "+" ? d.v : -d.v));     // 200 + 20 % = 240
        else gauche = op === "+" ? gauche + d.v : gauche - d.v;
      }
      return gauche;
    }
    function terme() {
      let r = unaire(), seul = true;
      for (;;) {
        const j = voir();
        if (j && j.t === "op" && (j.v === "×" || j.v === "÷")) {
          i++;
          const d = unaire().v;
          if (j.v === "÷" && d === 0) throw new Faute("Division par zéro");
          r = { v: j.v === "×" ? r.v * d : r.v / d };
          seul = false;
        } else if (j && (j.t === "nb" || j.t === "pi" || j.t === "(" || j.t === "fn")) {
          r = { v: r.v * unaire().v };        // 2π, 3(4 + 1) : multiplication sous-entendue
          seul = false;
        } else break;
      }
      return { v: r.v, pct: seul && r.pct };
    }
    function unaire() {
      const j = voir();
      if (j && j.t === "op" && (j.v === "−" || j.v === "+")) {
        i++;
        const r = unaire();
        return { v: j.v === "−" ? -r.v : r.v, pct: r.pct };
      }
      return puissance();
    }
    function puissance() {
      let v = premier(), pct = false;
      while (voir() && voir().t === "post") {
        const p = liste[i++].v;
        if (p === "²") v = v * v;
        else if (p === "⁻¹") { if (v === 0) throw new Faute("Division par zéro"); v = 1 / v; }
        else if (p === "%") { v = v / 100; pct = true; continue; }
        pct = false;
      }
      return { v, pct };
    }
    function premier() {
      const j = liste[i++];
      if (!j) throw new Faute("Calcul incomplet");
      if (j.t === "nb") return j.v;
      if (j.t === "pi") return Math.PI;
      if (j.t === "(" || j.t === "fn") {
        const v = expression();
        if (voir() && voir().t === ")") i++;
        if (j.t === "(") return v;
        if (j.v === "√") { if (v < 0) throw new Faute("Racine d'un nombre négatif"); return Math.sqrt(v); }
        const rad = v * Math.PI / 180;            // degrés, comme au BTS
        if (j.v === "tan" && Math.abs(Math.cos(rad)) < 1e-12) throw new Faute("tan(" + ecrire(v) + "°) n'existe pas");
        const r = j.v === "sin" ? Math.sin(rad) : j.v === "cos" ? Math.cos(rad) : Math.tan(rad);
        return Math.round(r * 1e12) / 1e12;       // sin(180) = 0, pas 1,2 × 10⁻¹⁶
      }
      throw new Faute("Calcul incomplet");
    }
    const v = expression();
    if (i < liste.length) throw new Faute(liste[i].t === ")" ? "Parenthèse en trop" : "Calcul incomplet");
    if (!isFinite(v)) throw new Faute("Nombre trop grand");
    return v;
  }

  // ---------- Écriture française : virgule, espaces fines, ×10ⁿ ----------
  const ESP = " ";
  const EXPOSANTS = { "-": "⁻", "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹" };
  function grouper(entier) { return entier.replace(/\B(?=(\d{3})+(?!\d))/g, ESP); }
  // Renvoie { m: "5,5", e: -7 } (e = null si pas de puissance de 10)
  function decouper(v) {
    if (v === 0) return { m: "0", e: null };
    const a = Math.abs(v);
    if (a >= 1e10 || a < 1e-4) {
      const [m, e] = v.toExponential(9).split("e");
      return { m: m.replace(/\.?0+$/, "").replace(".", ",").replace("-", "−"), e: parseInt(e, 10) };
    }
    let t = String(Number(v.toPrecision(10)));
    const neg = t.startsWith("-");
    if (neg) t = t.slice(1);
    const [ent, dec] = t.split(".");
    return { m: (neg ? "−" : "") + grouper(ent) + (dec ? "," + dec : ""), e: null };
  }
  function ecrire(v) {
    const d = decouper(v);
    return d.e === null ? d.m : d.m + " × 10" + String(d.e).split("").map(c => EXPOSANTS[c]).join("");
  }
  function ecrireLu(v) {
    const d = decouper(v);
    return d.e === null ? d.m : d.m + " fois 10 puissance " + String(d.e).replace("-", "moins ");
  }

  // ---------- Saisie (curseur, fractions) ----------
  const haut = () => pile[pile.length - 1];
  function inserer(j) { rangee.splice(pos, 0, j); pos++; }
  function entrer(f, cote, fin) { pile.push({ parent: rangee, frac: f }); rangee = f[cote]; pos = fin ? rangee.length : 0; }
  function sortir(apres) { const h = pile.pop(); rangee = h.parent; pos = rangee.indexOf(h.frac) + (apres ? 1 : 0); }
  function auDebut() { rangee = ligne; pos = ligne.length; pile = []; }
  const copie = x => JSON.parse(JSON.stringify(x));

  // Le morceau juste avant le curseur qui devient le numérateur : 2,5 · (a + b) · √(…) · π · Rép · fraction, avec ses ², ⁻¹, %
  function debutOperande() {
    let k = pos;
    while (k > 0 && rangee[k - 1].t === "post") k--;
    const j = rangee[k - 1];
    if (!j) return pos;
    const dansNombre = i => rangee[i] && (rangee[i].t === "c" || (rangee[i].t === "op" && estE(rangee[i - 1])));
    if (dansNombre(k - 1)) { while (k > 0 && dansNombre(k - 1)) k--; return k; }
    if (j.t === ")") {
      let n = 0, i = k - 1;
      for (; i >= 0; i--) {
        const x = rangee[i];
        if (x.t === ")") n++; else if (x.t === "(" || x.t === "fn") n--;
        if (n === 0) break;
      }
      return i < 0 ? pos : i;
    }
    if (["pi", "rep", "val", "frac"].includes(j.t)) return k - 1;
    return pos;
  }

  const AVEC_REP = ["+", "−", "×", "÷", "²", "⁻¹", "%"];
  function taper(touche) {
    if (touche !== "=") erreur = "";
    // Ligne vide après un calcul : un signe d'opération part du dernier résultat (Rép), comme sur la TI
    if (AVEC_REP.includes(touche) && rangee === ligne && !ligne.length && dernier !== null) inserer({ t: "rep" });
    if (/^\d$/.test(touche) || touche === ",") { inserer({ t: "c", v: touche }); return; }
    if (touche === "EE") { if (!estE(rangee[pos - 1])) inserer({ t: "c", v: "E" }); return; }
    if (["+", "−", "×", "÷"].includes(touche)) { inserer({ t: "op", v: touche }); return; }
    if (touche === "±") { inserer({ t: "op", v: "−" }); return; }
    if (touche === "²" || touche === "⁻¹" || touche === "%") { inserer({ t: "post", v: touche }); return; }
    if (touche === "(" || touche === ")") { inserer({ t: touche }); return; }
    if (touche === "π") { inserer({ t: "pi" }); return; }
    if (touche === "rep") { inserer({ t: "rep" }); return; }
    if (["sin", "cos", "tan", "√"].includes(touche)) { inserer({ t: "fn", v: touche }); return; }
    if (touche === "frac") {
      const d = debutOperande();
      const num = rangee.splice(d, pos - d);
      pos = d;
      const f = { t: "frac", num, den: [] };
      rangee.splice(pos, 0, f);
      entrer(f, num.length ? "den" : "num", false);           // 3 puis fraction : 3 en haut, on écrit en bas
      return;
    }
    if (touche === "▶") {
      if (pos < rangee.length) { const j = rangee[pos]; if (j.t === "frac") entrer(j, "num", false); else pos++; }
      else if (pile.length) { if (rangee === haut().frac.num) { rangee = haut().frac.den; pos = 0; } else sortir(true); }
      return;
    }
    if (touche === "◀") {
      if (pos > 0) { const j = rangee[pos - 1]; pos--; if (j.t === "frac") entrer(j, "den", true); }
      else if (pile.length) { if (rangee === haut().frac.den) { rangee = haut().frac.num; pos = rangee.length; } else sortir(false); }
      return;
    }
    if (touche === "▲") { if (pile.length && rangee === haut().frac.den) { rangee = haut().frac.num; pos = Math.min(pos, rangee.length); } return; }
    if (touche === "▼") { if (pile.length && rangee === haut().frac.num) { rangee = haut().frac.den; pos = Math.min(pos, rangee.length); } return; }
    if (touche === "←") {
      if (pos > 0) {
        const j = rangee[pos - 1];
        if (j.t === "frac") { pos--; entrer(j, "den", true); }  // une fraction s'efface de l'intérieur, petit à petit
        else { rangee.splice(pos - 1, 1); pos--; }
      } else if (pile.length) {
        const f = haut().frac;
        if (rangee === f.den) { rangee = f.num; pos = rangee.length; }
        else if (!f.num.length && !f.den.length) { sortir(false); rangee.splice(pos, 1); }
        else sortir(false);
      }
      return;
    }
    if (touche === "AC") {
      if (ligne.length) ligne.length = 0; else historique = [];   // un 2e appui vide aussi l'historique
      auDebut();
      return;
    }
    if (touche === "=") {
      if (!ligne.length) return;
      try {
        const v = calculer(ligne);
        historique.push({ ligne: copie(ligne), resultat: v });
        if (historique.length > 40) historique.shift();
        dernier = v;
        ligne.length = 0;
        auDebut();
        erreur = "";
      } catch (e) {
        if (!(e instanceof Faute)) throw e;
        erreur = e.message;
      }
    }
  }
  // Toucher un calcul ou un résultat de l'historique : il est repris à la place du curseur
  function reprendre(elements) {
    erreur = "";
    const morceaux = copie(elements);
    rangee.splice(pos, 0, ...morceaux);
    pos += morceaux.length;
  }

  // ---------- Affichage ----------
  function el(tag, classe, texte) {
    const x = document.createElement(tag);
    if (classe) x.className = classe;
    if (texte !== undefined) x.textContent = texte;
    return x;
  }
  function dessinerNombre(parent, v) {
    const d = decouper(v);
    parent.append(d.m);
    if (d.e !== null) { parent.append(ESP + "×" + ESP + "10"); parent.appendChild(el("sup", "", String(d.e).replace("-", "−"))); }
  }
  // Dessine une ligne ; avecCurseur : la ligne en cours (barre dorée là où l'on écrit)
  function dessinerLigne(r, cible, avecCurseur) {
    const ici = k => avecCurseur && r === rangee && k === pos;
    const curseur = parent => parent.appendChild(el("span", "calc-curseur"));
    if (!r.length) {
      const vide = el("span", "calc-vide");
      if (ici(0)) curseur(vide);
      cible.appendChild(vide);
      return;
    }
    let sup = null;                 // après ×10 : le signe et les chiffres de l'exposant, écrits en haut
    r.forEach((j, k) => {
      const exposant = sup && (chiffre(j) || (j.t === "op" && estE(r[k - 1])));
      if (!exposant) sup = null;
      if (ici(k)) curseur(sup || cible);
      const ecrireIci = x => (sup || cible).append(x);
      if (j.t === "c") {
        if (j.v === "E") { cible.append(ESP + "×" + ESP + "10"); sup = el("sup"); cible.appendChild(sup); }
        else ecrireIci(j.v);
      } else if (j.t === "op") {
        const avant = r[k - 1];
        const seul = !avant || avant.t === "op" || avant.t === "(" || avant.t === "fn" || estE(avant);
        ecrireIci(seul ? j.v : " " + j.v + " ");
      } else if (j.t === "fn") cible.append(j.v + "(");
      else if (j.t === "post") { if (j.v === "%") cible.append(ESP + "%"); else cible.appendChild(el("sup", "", j.v === "²" ? "2" : "−1")); }
      else if (j.t === "pi") cible.append("π");
      else if (j.t === "rep") cible.appendChild(el("span", "calc-rep", "Rép"));
      else if (j.t === "val") dessinerNombre(cible, j.v);
      else if (j.t === "frac") {
        const f = el("span", "calc-frac"), n = el("span", "calc-num"), d = el("span", "calc-den");
        dessinerLigne(j.num, n, avecCurseur);
        dessinerLigne(j.den, d, avecCurseur);
        f.append(n, d);
        cible.appendChild(f);
      } else cible.append(j.t);
    });
    if (ici(r.length)) curseur(sup || cible);
    // Parenthèses encore ouvertes : montrées en pâle, fermées d'office au calcul
    let n = 0;
    r.forEach(j => { if (j.t === "(" || j.t === "fn") n++; else if (j.t === ")") n--; });
    if (n > 0) { const p = el("span", "calc-ferme", ")".repeat(n)); p.setAttribute("aria-hidden", "true"); cible.appendChild(p); }
  }

  function majAffichage(annoncer) {
    if (!panneau) return;
    const ecran = panneau.querySelector(".calc-ecran");
    const liste = panneau.querySelector(".calc-historique");
    liste.textContent = "";
    historique.forEach(h => {
      const li = el("li", "calc-entree");
      const b1 = el("button", "calc-h-calcul");
      b1.type = "button";
      b1.appendChild(el("span", "visuellement-cache", "Reprendre le calcul : "));
      dessinerLigne(h.ligne, b1, false);
      b1.onclick = () => { reprendre(h.ligne); majAffichage(false); panneau.querySelector(".calc-ecran").focus({ preventScroll: true }); };
      const b2 = el("button", "calc-h-res");
      b2.type = "button";
      b2.appendChild(el("span", "visuellement-cache", "Reprendre le résultat : "));
      dessinerNombre(b2, h.resultat);
      b2.onclick = () => { reprendre([{ t: "val", v: h.resultat }]); majAffichage(false); panneau.querySelector(".calc-ecran").focus({ preventScroll: true }); };
      li.append(b1, b2);
      liste.appendChild(li);
    });
    const enCours = panneau.querySelector(".calc-ligne");
    enCours.textContent = "";
    dessinerLigne(ligne, enCours, true);
    const msg = panneau.querySelector(".calc-message");
    msg.textContent = erreur;
    msg.hidden = !erreur;
    // Le bas de l'écran (la ligne en cours) toujours visible ; le curseur visible si la ligne est longue
    ecran.scrollTop = ecran.scrollHeight;
    const c = enCours.querySelector(".calc-curseur");
    if (c) {
      const x = c.getBoundingClientRect().left - enCours.getBoundingClientRect().left + enCours.scrollLeft;
      if (x > enCours.scrollLeft + enCours.clientWidth - 16) enCours.scrollLeft = x - enCours.clientWidth + 24;
      else if (x < enCours.scrollLeft + 8) enCours.scrollLeft = Math.max(0, x - 24);
    }
    if (annoncer) {
      const lu = panneau.querySelector(".calc-annonce");
      lu.textContent = "";
      setTimeout(() => { lu.textContent = erreur ? erreur : dernier !== null ? "Résultat : " + ecrireLu(dernier) : ""; }, 30);
    }
  }

  // ---------- Le panneau ----------
  // [touche, texte affiché (HTML simple, écrit par nous), nom lu, classe, large]
  const TOUCHES = [
    ["sin", "sin", "sinus, en degrés", "fn"], ["cos", "cos", "cosinus, en degrés", "fn"], ["tan", "tan", "tangente, en degrés", "fn"], ["√", "√", "racine carrée", "fn"], ["²", "x<sup>2</sup>", "au carré", "fn"], ["⁻¹", "x<sup>−1</sup>", "inverse", "fn"],
    ["frac", '<span class="calc-t-frac" aria-hidden="true"><i></i><i></i></span>', "fraction", "fn"], ["(", "(", "ouvrir une parenthèse", "fn"], [")", ")", "fermer la parenthèse", "fn"], ["%", "%", "pour cent", "fn"], ["◀", '<span class="ico i-gauche" aria-hidden="true"></span>', "curseur à gauche", "fl"], ["▶", '<span class="ico i-droite" aria-hidden="true"></span>', "curseur à droite", "fl"],
    ["7", "7"], ["8", "8"], ["9", "9"], ["÷", "÷", "divisé par", "op"], ["←", '<span class="calc-retour" aria-hidden="true"></span>', "effacer", "efface"], ["AC", "AC", "tout effacer", "efface"],
    ["4", "4"], ["5", "5"], ["6", "6"], ["×", "×", "fois", "op"], ["EE", "×10<sup>n</sup>", "fois 10 puissance", "fn"], ["rep", "Rép", "dernier résultat", "fn"],
    ["1", "1"], ["2", "2"], ["3", "3"], ["−", "−", "moins", "op"], ["±", "(−)", "nombre négatif", "fn"], ["π", "π", "pi", "fn"],
    ["0", "0", "", "", true], [",", ",", "virgule"], ["+", "+", "plus", "op"], ["=", "=", "égal", "egal", true]
  ];

  function creerPanneau() {
    panneau = document.createElement("section");
    panneau.className = "calculette";
    panneau.id = "calculette";
    panneau.hidden = true;
    panneau.setAttribute("aria-label", "Calculette");
    if (document.getElementById("ecran-jeu")) panneau.classList.add("calc-atelier");   // Atelier : à gauche sur grand écran (la consigne et « Valider » sont à droite)
    panneau.innerHTML =
      '<div class="calc-tete"><span class="calc-titre"><span class="ico i-calcul" aria-hidden="true"></span> <span class="calc-nom">Calculette</span> <span class="calc-deg">degrés</span></span>' +
      '<span class="calc-boutons-tete"><button type="button" class="calc-replier" aria-expanded="true" aria-controls="calc-touches"><span class="ico i-droite" aria-hidden="true"></span> <span class="calc-replier-texte">Replier les touches</span></button>' +
      '<button type="button" class="calc-fermer" aria-label="Fermer la calculette"><span aria-hidden="true">×</span></button></span></div>' +
      '<div class="calc-ecran" tabindex="0" aria-label="Écran de la calculette. Tu peux taper ton calcul au clavier ; les calculs faits restent au-dessus, touche-les pour les reprendre.">' +
      '<ol class="calc-historique"></ol><div class="calc-ligne" aria-hidden="true"></div><p class="calc-message" hidden></p></div>' +
      '<p class="visuellement-cache calc-annonce" role="status"></p>' +
      '<div class="calc-touches" id="calc-touches"></div>' +
      '<p class="calc-aide">Au clavier : chiffres et signes, <kbd>F</kbd> fraction, <kbd>A</kbd> Rép, <kbd>←</kbd> <kbd>→</kbd> dans la fraction, <kbd>Entrée</kbd> pour =, <kbd>Échap</kbd> ferme.</p>';
    const grille = panneau.querySelector(".calc-touches");
    TOUCHES.forEach(([cle, texte, lu, classe, large]) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "calc-touche" + (classe ? " calc-" + classe : "") + (large ? " calc-large" : "");
      b.innerHTML = texte;
      if (lu) b.setAttribute("aria-label", lu);
      b.dataset.cle = cle;
      grille.appendChild(b);
    });
    grille.addEventListener("click", e => {
      const b = e.target.closest(".calc-touche");
      if (!b) return;
      taper(b.dataset.cle);
      majAffichage(b.dataset.cle === "=");
    });
    panneau.querySelector(".calc-fermer").onclick = () => fermer(true);
    // Téléphone : replier les touches pour revoir le haut de l'énoncé ; l'écran et ses résultats restent
    panneau.querySelector(".calc-replier").onclick = () => replier(!repliee);
    panneau.querySelector(".calc-ecran").addEventListener("click", e => {
      if (repliee && !e.target.closest("button")) replier(false);   // toucher l'écran ressort les touches
    });
    // Clavier : seulement quand la calculette a le focus (les raccourcis A B C D du QCM restent libres ailleurs)
    panneau.addEventListener("keydown", e => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (e.key === "Escape") { e.preventDefault(); e.stopPropagation(); fermer(true); return; }
      if (e.target.closest(".calc-historique") && (e.key === "Enter" || e.key === " ")) return;   // Entrée sur un ancien calcul : il est repris
      const t = { "*": "×", x: "×", X: "×", "/": "÷", ":": "÷", "-": "−", ".": ",", Enter: "=", Backspace: "←", Delete: "AC", e: "EE", E: "EE", "^": "²", p: "π", s: "sin", c: "cos", t: "tan", r: "√", i: "⁻¹", f: "frac", F: "frac", a: "rep", A: "rep",
        ArrowLeft: "◀", ArrowRight: "▶", ArrowUp: "▲", ArrowDown: "▼" }[e.key] || e.key;
      const connue = TOUCHES.some(x => x[0] === t) || t === "▲" || t === "▼";
      if (!connue) return;
      if (e.key === "Enter" && e.target.closest("button") && e.target.dataset.cle !== undefined) return;   // Entrée sur une touche : la touche elle-même
      e.preventDefault();
      e.stopPropagation();
      taper(t);
      majAffichage(t === "=");
      const b = panneau.querySelector('.calc-touche[data-cle="' + CSS.escape(t) + '"]');
      if (b) { b.classList.remove("calc-appui"); void b.offsetWidth; b.classList.add("calc-appui"); }
    });
    panneau.addEventListener("keyup", e => e.stopPropagation());
    // Déplacer la calculette par son titre (ordinateur, souris)
    const tete = panneau.querySelector(".calc-tete");
    tete.addEventListener("pointerdown", e => {
      if (e.pointerType !== "mouse" || e.target.closest("button") || matchMedia("(max-width: 720px)").matches) return;
      const r = panneau.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
      tete.setPointerCapture(e.pointerId);
      const bouger = ev => {
        const x = Math.min(Math.max(8, ev.clientX - dx), innerWidth - r.width - 8);
        const y = Math.min(Math.max(8, ev.clientY - dy), innerHeight - r.height - 8);
        panneau.style.left = x + "px"; panneau.style.top = y + "px";
        panneau.style.right = "auto"; panneau.style.bottom = "auto";
      };
      const lacher = () => { tete.removeEventListener("pointermove", bouger); tete.removeEventListener("pointerup", lacher); tete.removeEventListener("pointercancel", lacher); };
      tete.addEventListener("pointermove", bouger);
      tete.addEventListener("pointerup", lacher);
      tete.addEventListener("pointercancel", lacher);
    });
    document.body.appendChild(panneau);
    // Plus aucune question avec des chiffres à l'écran (bilan, liste des thèmes…) : la calculette se range
    const zone = zoneQuestion();
    if (zone) new MutationObserver(() => {
      if (!panneau.hidden && !document.querySelector(".bouton-calculette")) fermer(false);
    }).observe(zone, { childList: true, subtree: true });
    new ResizeObserver(noterHauteur).observe(panneau);
    addEventListener("resize", () => {
      if (!panneau.style.left) return;
      const r = panneau.getBoundingClientRect();         // revenir dans l'écran si la fenêtre rétrécit
      if (r.right > innerWidth || r.bottom > innerHeight || matchMedia("(max-width: 720px)").matches) {
        panneau.style.left = panneau.style.top = panneau.style.right = panneau.style.bottom = "";
      }
    });
  }

  function replier(oui) {
    repliee = oui;
    panneau.classList.toggle("calc-repliee", oui);
    const b = panneau.querySelector(".calc-replier");
    b.setAttribute("aria-expanded", oui ? "false" : "true");
    b.querySelector(".calc-replier-texte").textContent = oui ? "Afficher les touches" : "Replier les touches";
    noterHauteur();
    if (!oui) requestAnimationFrame(() => degager(false));
  }

  // Là où s'affiche la question : le QCM et l'examen blanc (#zone), ou un niveau de l'Atelier des tracés (#ecran-jeu)
  function zoneQuestion() { return document.getElementById("zone") || document.getElementById("ecran-jeu"); }

  function noterHauteur() {
    const h = panneau && !panneau.hidden ? panneau.offsetHeight : 0;
    document.documentElement.style.setProperty("--haut-calculette", h + "px");
  }

  // La case de réponse (ou les propositions) et « Valider » visibles au-dessus de la calculette
  // Nouvelle question (force) : le QCM est peut-être en train de remonter la page ; on vise une position absolue.
  function degager(force) {
    if (!panneau || panneau.hidden) return;
    const zone = zoneQuestion();
    if (!zone) return;
    const champ = zone.querySelector("input:not(:disabled)");       // calcul à taper, étape en cours d'un calcul posé
    const cible = champ ? champ.closest("form") || champ : zone.querySelector(".choix");
    if (!cible) return;
    // Place de la calculette sans son animation d'arrivée (offsetTop ignore le petit glissement en cours)
    let r = cible.getBoundingClientRect();
    // Atelier des tracés : la case et « Valider » suffisent (les données et l'aide sous la case peuvent passer sous la calculette)
    const valider = champ && champ.closest(".saisie-calcul") && champ.form.querySelector('[type="submit"]');
    if (valider) {
      const a = champ.getBoundingClientRect(), b = valider.getBoundingClientRect();
      r = { top: Math.min(a.top, b.top), bottom: Math.max(a.bottom, b.bottom), left: Math.min(a.left, b.left), right: Math.max(a.right, b.right) };
    }
    const p = { top: panneau.offsetTop, left: panneau.offsetLeft, right: panneau.offsetLeft + panneau.offsetWidth };
    if (r.right < p.left || r.left > p.right) return;               // ordinateur : la calculette est à côté, rien ne bouge
    // Haut de l'écran occupé : l'en-tête et la ligne de la série, collés en haut
    let haut = 0;
    [document.querySelector(".entete"), document.getElementById("barre-serie"), document.querySelector(".jeu-tete")].forEach(x => {
      if (x && !x.hidden && getComputedStyle(x).position !== "static") haut = Math.max(haut, x.getBoundingClientRect().bottom);
    });
    haut += 8;
    const bas = p.top - 12;
    if (!force && r.bottom <= bas && r.top >= haut) return;          // déjà visible
    const y = scrollY, haut_doc = r.top + y, bas_doc = r.bottom + y;
    const vise = Math.max(0, Math.min(bas_doc - bas, haut_doc - haut));   // le bas au-dessus de la calculette, jamais le haut caché
    if (force || Math.abs(vise - y) > 2) window.scrollTo({ top: vise, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }

  function ouvrir(bouton) {
    if (!panneau) creerPanneau();
    if (bouton) boutonOuvrant = bouton;
    panneau.hidden = false;
    document.documentElement.classList.add("calculette-ouverte");
    noterHauteur();
    majAffichage(false);
    majBoutons();
    panneau.querySelector(".calc-ecran").focus({ preventScroll: true });
    requestAnimationFrame(() => degager(false));
  }
  function fermer(rendreFocus) {
    if (!panneau || panneau.hidden) return;
    panneau.hidden = true;
    document.documentElement.classList.remove("calculette-ouverte");
    noterHauteur();
    majBoutons();
    if (rendreFocus && boutonOuvrant && boutonOuvrant.isConnected) boutonOuvrant.focus({ preventScroll: true });
  }
  function majBoutons() {
    const ouverte = !!(panneau && !panneau.hidden);
    document.querySelectorAll(".bouton-calculette").forEach(b => b.setAttribute("aria-expanded", ouverte ? "true" : "false"));
  }

  // ---------- Quelles questions ? ----------
  // Calcul à taper, calcul posé, ou QCM dont l'énoncé, le contexte, l'annexe, le cas pratique ou les propositions ont des chiffres
  function aDesChiffres(q) {
    if (!q) return false;
    if (q.type === "calcul" || q.type === "pose") return true;
    const morceaux = [q.question, q.contexte, q.annexe && JSON.stringify(q.annexe), (q.choix || []).join(" ")];
    if (q.cas && typeof CAS !== "undefined") {
      const cas = CAS.find(c => c.id === q.cas);
      if (cas) morceaux.push(cas.contexte, cas.annexe && JSON.stringify(cas.annexe));
      // le contexte des étapes précédentes du même cas reste affiché
      if (typeof QUESTIONS !== "undefined") QUESTIONS.forEach(x => { if (x.cas === q.cas && x.etape < q.etape) morceaux.push(x.contexte, x.annexe && JSON.stringify(x.annexe)); });
    }
    return /\d/.test(morceaux.filter(Boolean).join(" ").replace(/\[\[|\]\]/g, ""));
  }

  // Le bouton à poser sous la question (null si la question n'a pas de chiffres)
  function bouton(q) {
    if (!aDesChiffres(q)) return null;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "bouton-calculette";
    b.innerHTML = '<span class="ico i-calcul" aria-hidden="true"></span> Calculette';
    b.setAttribute("aria-controls", "calculette");
    b.setAttribute("aria-expanded", panneau && !panneau.hidden ? "true" : "false");
    b.onclick = () => {
      if (panneau && !panneau.hidden && boutonOuvrant === b) fermer(false);
      else ouvrir(b);
    };
    return b;
  }

  // Une nouvelle question s'affiche, calculette ouverte : la case de réponse remonte au-dessus
  function nouvelleQuestion() { if (panneau && !panneau.hidden) requestAnimationFrame(() => degager(true)); }

  // Pour les tests : Calculette._evaluer("5 5 0 EE − 9") rejoue des touches sur une ligne neuve, sans toucher à la calculette
  function essai(touches) {
    const g = [ligne, rangee, pos, pile, historique, dernier, erreur];
    ligne = []; rangee = ligne; pos = 0; pile = []; historique = []; dernier = null; erreur = "";
    try { String(touches).split(" ").filter(Boolean).forEach(taper); taper("="); return erreur || (dernier === null ? "" : ecrire(dernier)); }
    finally { [ligne, rangee, pos, pile, historique, dernier, erreur] = g; }
  }

  window.Calculette = { bouton, ouvrir, fermer, nouvelleQuestion, aDesChiffres, _evaluer: essai };
})();
