// Atelier calculatrice (Guide calculatrice de Maths, qcm.html) : s'entraîner aux vraies touches de SA calculatrice.
// Un exercice = une tâche du bloc « calculatrice » de specificites-U41.js (même id), avec nos chiffres.
// L'élève appuie sur les touches d'un clavier dessiné (TI-83 Premium CE, NumWorks), l'écran (simplifié) suit,
// puis il recopie le résultat avec l'arrondi demandé (corrigerCalcul / messageCalcul d'essentiel.js).
// Rien n'est gardé (ni localStorage ni Firebase) : un exercice se refait autant qu'on veut.
(function () {
  "use strict";

  // ---------- Calculs exacts (les résultats affichés à l'écran) ----------
  function erf(x) {
    let s = 0, t = x;
    for (let n = 0; n < 300; n++) { const terme = t / (2 * n + 1); s += terme; t *= -x * x / (n + 1); if (Math.abs(terme) < 1e-17) break; }
    return 2 / Math.sqrt(Math.PI) * s;
  }
  const repartitionNormale = (x, m, s) => 0.5 * (1 + erf((x - m) / (s * Math.SQRT2)));
  function inverseNormale(p, m, s) {
    let a = m - 10 * s, b = m + 10 * s;
    for (let i = 0; i < 200; i++) { const c = (a + b) / 2; if (repartitionNormale(c, m, s) < p) a = c; else b = c; }
    return (a + b) / 2;
  }
  function binomialeCumul(n, p, k) {
    let total = 0;
    for (let j = 0; j <= k; j++) { let c = 1; for (let i = 1; i <= j; i++) c = c * (n - j + i) / i; total += c * p ** j * (1 - p) ** (n - j); }
    return total;
  }
  function regression(x, y) {
    const n = x.length, mx = x.reduce((a, b) => a + b) / n, my = y.reduce((a, b) => a + b) / n;
    let sxy = 0, sxx = 0, syy = 0;
    for (let i = 0; i < n; i++) { sxy += (x[i] - mx) * (y[i] - my); sxx += (x[i] - mx) ** 2; syy += (y[i] - my) ** 2; }
    const a = sxy / sxx;
    return { a, b: my - a * mx, r: sxy / Math.sqrt(sxx * syy) };
  }
  // La TI affiche 10 chiffres et pas de 0 devant la virgule (.8831034383) ; la NumWorks, 7 chiffres
  function ecranTI(v) {
    let t = String(Number(v.toPrecision(10)));
    return t.replace(/^(-?)0\./, "$1.").replace("-", "⁻");
  }
  const ecranNW = v => String(Number(v.toPrecision(7)));

  // ---------- Les exercices (nos chiffres, jamais ceux d'un sujet) ----------
  const REG_X = [1, 2, 3, 4, 5, 6], REG_Z = [3.52, 3.18, 2.99, 2.58, 2.37, 1.98];
  const REG = regression(REG_X, REG_Z);
  const BIN = { n: 30, p: 0.04, k: 2 };
  const BIN_V = binomialeCumul(BIN.n, BIN.p, BIN.k);
  const NOR = { m: 65, s: 0.4, a: 64.5, b: 65.5, aire: 0.95 };
  const NOR_V = repartitionNormale(NOR.b, NOR.m, NOR.s) - repartitionNormale(NOR.a, NOR.m, NOR.s);
  const NOR_INV = inverseNormale(NOR.aire, NOR.m, NOR.s);

  const TABLE_REG_TI = { table: { cols: ["L1", "L2"], lignes: REG_X.map((x, i) => [String(x), String(REG_Z[i])]) }, note: "Les valeurs sont déjà tapées pour toi." };
  const TABLE_REG_NW = { table: { cols: ["X1", "Y1"], lignes: REG_X.map((x, i) => [String(x), String(REG_Z[i])]) }, note: "Les valeurs sont déjà tapées pour toi.", onglets: ["Données", "Graphique", "Stats"], onglet: 0 };
  const ACCUEIL_NW = ["Calculs", "Grapheur", "Équations", "Statistiques", "Probabilités", "Régressions", "Suites", "Python", "Paramètres"];
  const LOIS_NW = ["Binomiale", "Uniforme", "Exponentielle", "Normale", "Khi2", "Student", "Géométrique", "Poisson"];
  const DISTR_TI = ["1:normalFdp(", "2:normalFRép(", "3:FracNormale(", "…", "A:binomFdp(", "B:binomFRép("];

  const EXOS = {
    regression: {
      enonce: "Après le changement de variable, le tableau donne x = 1 ; 2 ; 3 ; 4 ; 5 ; 6 et z = 3,52 ; 3,18 ; 2,99 ; 2,58 ; 2,37 ; 1,98. Trouve la droite de régression de z en x et le coefficient r.",
      parties: [{
        reponses: [
          { nom: "a", valeur: REG.a, decimales: 3 },
          { nom: "b", valeur: REG.b, decimales: 3 },
          { nom: "r", valeur: REG.r, decimales: 3 }
        ],
        gestes: {
          "ti83-premium-ce": [
            { but: "D'abord, fais afficher r : ouvre le catalogue.", touches: ["2nde", "0"], ecran: { lignes: [""] } },
            { but: "Choisis CorrelAff dans le catalogue.", menu: { titre: "CATALOGUE", items: ["…", "cos(", "cosh(", "CorrelAff", "CorrelNAff", "…"], bon: "CorrelAff" } },
            { but: "Valide deux fois.", touches: ["entrer", "entrer"], ecran: { lignes: ["CorrelAff"] }, apres: { lignes: ["CorrelAff", { d: "Fait" }] } },
            { but: "Ouvre l'éditeur des listes.", touches: ["stats"] },
            { but: "Choisis Modifier.", menu: { onglets: ["ÉDIT", "CALC", "TESTS"], onglet: 0, items: [["1:Modifier…", "2:TriCroissant(", "3:TriDécroissant(", "…"], ["1:Stats 1-Var", "2:Stats 2-Var", "3:Med-Med", "4:RégLin(ax+b)", "…"], ["1:Z-Test…", "…"]], bon: "1:Modifier…" }, apres: TABLE_REG_TI },
            { but: "Les x sont dans L1, les z dans L2. Reviens au menu des statistiques.", touches: ["stats"] },
            { but: "Va dans CALC et choisis la régression linéaire.", menu: { onglets: ["ÉDIT", "CALC", "TESTS"], onglet: 0, items: [["1:Modifier…", "2:TriCroissant(", "3:TriDécroissant(", "…"], ["1:Stats 1-Var", "2:Stats 2-Var", "3:Med-Med", "4:RégLin(ax+b)", "…"], ["1:Z-Test…", "…"]], bon: "4:RégLin(ax+b)" }, apres: { lignes: ["RégLin(ax+b)"] } },
            { but: "Lance le calcul. (Selon la version de la TI, un formulaire s'affiche d'abord : vérifie L1 et L2, descends sur Calculer et valide.)", touches: ["entrer"], apres: { lignes: ["RégLin", " y=ax+b", " a=" + ecranTI(REG.a), " b=" + ecranTI(REG.b), " r²=" + ecranTI(REG.r ** 2), " r=" + ecranTI(REG.r)] } }
          ],
          numworks: [
            { but: "Reviens à l'écran d'accueil.", touches: ["home"], ecran: { lignes: ["Calculs", ""] } },
            { but: "Ouvre l'application des régressions.", menu: { grille: 3, items: ACCUEIL_NW, bon: "Régressions" }, apres: TABLE_REG_NW },
            { but: "Les x sont dans X1, les z dans Y1. Va dans l'onglet Graphique.", menu: { onglets: ["Données", "Graphique", "Stats"], onglet: 0, ongletSeul: 1, tableau: TABLE_REG_NW.table }, apres: { lignes: ["Graphique", "nuage de points", { g: "r", d: ecranNW(REG.r) }], onglets: ["Données", "Graphique", "Stats"], onglet: 1 } },
            { but: "Ouvre le choix du modèle.", touches: ["ok"] },
            { but: "Choisis le modèle linéaire.", menu: { titre: "Régression", items: ["Linéaire", "Proportionnel", "Quadratique", "Cubique", "Exponentielle", "…"], bon: "Linéaire" }, apres: { lignes: ["y=ax+b", { g: "a", d: ecranNW(REG.a) }, { g: "b", d: ecranNW(REG.b) }, { g: "r", d: ecranNW(REG.r) }, { g: "r²", d: ecranNW(REG.r ** 2) }] } }
          ]
        }
      }]
    },
    binomiale: {
      enonce: "Une machine produit 4 % de verres défectueux. On prélève 30 verres (tirages assimilés à des tirages avec remise). X est le nombre de verres défectueux : X suit la loi binomiale B(30 ; 0,04). Calcule P(X ≤ 2).",
      parties: [{
        reponses: [{ nom: "P(X ≤ 2)", valeur: BIN_V, decimales: 3 }],
        gestes: {
          "ti83-premium-ce": [
            { but: "Ouvre le menu des lois de probabilité (DISTR).", touches: ["2nde", "var"], ecran: { lignes: [""] } },
            { but: "P(X ≤ k) d'une loi binomiale : choisis la bonne fonction.", menu: { onglets: ["DISTR", "DESSIN"], onglet: 0, items: [DISTR_TI, ["1:DessNorm(", "…"]], bon: "B:binomFRép(" } },
            { but: "Tape n, p et k.", saisie: { titre: "binomFRép(", champs: [{ nom: "n (essais)", valeur: BIN.n }, { nom: "p", valeur: BIN.p }, { nom: "k", valeur: BIN.k }] }, valider: "entrer", remarque: "Selon la version de la TI, ces cases forment un petit formulaire : remplis-les, puis valide sur Coller.",
              apres: { lignes: ["binomFRép(30,0.04,2)", { d: ecranTI(BIN_V) }] } }
          ],
          numworks: [
            { but: "Reviens à l'écran d'accueil.", touches: ["home"], ecran: { lignes: ["Calculs", ""] } },
            { but: "Ouvre l'application des probabilités.", menu: { grille: 3, items: ACCUEIL_NW, bon: "Probabilités" } },
            { but: "Choisis la loi.", menu: { titre: "Choisir le type de loi", items: LOIS_NW, bon: "Binomiale" } },
            { but: "Tape n et p, puis passe à la suite.", saisie: { titre: "Loi binomiale", champs: [{ nom: "n", valeur: BIN.n }, { nom: "p", valeur: BIN.p }] }, valider: "ok" },
            { but: "Choisis le type de calcul : P(X ≤ a).", menu: { titre: "Calculer les probabilités", items: ["P(X ≤ a)", "P(a ≤ X ≤ b)", "P(X ≥ a)", "P(X = a)"], bon: "P(X ≤ a)" } },
            { but: "Tape a, puis valide.", saisie: { titre: "P(X ≤ a)", champs: [{ nom: "a", valeur: BIN.k }] }, valider: "ok",
              apres: { lignes: ["Loi binomiale", { g: "P(X ≤ 2)", d: ecranNW(BIN_V) }] } }
          ]
        }
      }]
    },
    normale: {
      enonce: "Le diamètre X d'un verre (en mm) suit la loi normale de moyenne μ = 65 et d'écart type σ = 0,4.",
      parties: [{
        question: "1. Calcule P(64,5 ≤ X ≤ 65,5).",
        reponses: [{ nom: "P(64,5 ≤ X ≤ 65,5)", valeur: NOR_V, decimales: 3 }],
        gestes: {
          "ti83-premium-ce": [
            { but: "Ouvre le menu des lois de probabilité (DISTR).", touches: ["2nde", "var"], ecran: { lignes: [""] } },
            { but: "P(a ≤ X ≤ b) d'une loi normale : choisis la bonne fonction.", menu: { onglets: ["DISTR", "DESSIN"], onglet: 0, items: [DISTR_TI, ["1:DessNorm(", "…"]], bon: "2:normalFRép(" } },
            { but: "Tape les bornes, puis μ et σ.", saisie: { titre: "normalFRép(", champs: [{ nom: "borne inf", valeur: NOR.a }, { nom: "borne sup", valeur: NOR.b }, { nom: "μ", valeur: NOR.m }, { nom: "σ", valeur: NOR.s, variance: NOR.s ** 2 }] }, valider: "entrer", remarque: "Selon la version de la TI, ces cases forment un petit formulaire : remplis-les, puis valide sur Coller.",
              apres: { lignes: ["normalFRép(64.5,65.5,65,0.4)", { d: ecranTI(NOR_V) }] } }
          ],
          numworks: [
            { but: "Reviens à l'écran d'accueil.", touches: ["home"], ecran: { lignes: ["Calculs", ""] } },
            { but: "Ouvre l'application des probabilités.", menu: { grille: 3, items: ACCUEIL_NW, bon: "Probabilités" } },
            { but: "Choisis la loi.", menu: { titre: "Choisir le type de loi", items: LOIS_NW, bon: "Normale" } },
            { but: "Tape μ et σ, puis passe à la suite.", saisie: { titre: "Loi normale", champs: [{ nom: "μ", valeur: NOR.m }, { nom: "σ", valeur: NOR.s, variance: NOR.s ** 2 }] }, valider: "ok" },
            { but: "Choisis le type de calcul : P(a ≤ X ≤ b).", menu: { titre: "Calculer les probabilités", items: ["P(X ≤ a)", "P(a ≤ X ≤ b)", "P(X ≥ a)"], bon: "P(a ≤ X ≤ b)" } },
            { but: "Tape les bornes, puis valide.", saisie: { titre: "P(a ≤ X ≤ b)", champs: [{ nom: "a", valeur: NOR.a }, { nom: "b", valeur: NOR.b }] }, valider: "ok",
              apres: { lignes: ["Loi normale", { g: "P(64.5 ≤ X ≤ 65.5)", d: ecranNW(NOR_V) }] } }
          ]
        }
      }, {
        question: "2. Trouve le diamètre a tel que P(X ≤ a) = 0,95 (loi normale inverse).",
        reponses: [{ nom: "a (mm)", valeur: NOR_INV, decimales: 2 }],
        gestes: {
          "ti83-premium-ce": [
            { but: "Rouvre le menu des lois de probabilité.", touches: ["2nde", "var"] },
            { but: "Cette fois on connaît la probabilité et on cherche la borne : choisis la bonne fonction.", menu: { onglets: ["DISTR", "DESSIN"], onglet: 0, items: [DISTR_TI, ["1:DessNorm(", "…"]], bon: "3:FracNormale(" } },
            { but: "Tape la probabilité (l'aire à gauche), puis μ et σ.", saisie: { titre: "FracNormale(", champs: [{ nom: "aire", valeur: NOR.aire }, { nom: "μ", valeur: NOR.m }, { nom: "σ", valeur: NOR.s, variance: NOR.s ** 2 }] }, valider: "entrer", remarque: "Selon la version de la TI, ces cases forment un petit formulaire : remplis-les, puis valide sur Coller.",
              apres: { lignes: ["FracNormale(0.95,65,0.4)", { d: ecranTI(NOR_INV) }] } }
          ],
          numworks: [
            { but: "Change le type de calcul : P(X ≤ a).", menu: { titre: "Calculer les probabilités", items: ["P(X ≤ a)", "P(a ≤ X ≤ b)", "P(X ≥ a)"], bon: "P(X ≤ a)" } },
            { but: "Tape la probabilité dans son champ (pas dans a) : la borne a se calcule.", saisie: { titre: "P(X ≤ a)", champs: [{ nom: "P(X ≤ a)", valeur: NOR.aire }] }, valider: "ok",
              apres: { lignes: ["Loi normale", { g: "P(X ≤ a) = 0.95", d: "" }, { g: "a", d: ecranNW(NOR_INV) }] } }
          ]
        }
      }]
    }
  };

  // ---------- Les claviers (dessinés, sans logo ; seules les fonctions secondes utiles sont écrites) ----------
  // [id, texte, seconde fonction écrite au-dessus, classe]
  const CLAVIERS = {
    "ti83-premium-ce": {
      nom: "TI-83 Premium CE", valider: "entrer", seconde: "2nde",
      haut: [
        { cols: 5, touches: [["f(x)", "f(x)"], ["fenêtre", "fenêtre"], ["zoom", "zoom"], ["trace", "trace"], ["graphe", "graphe"]], classe: "plate" },
        { cols: 5, fleches: true, touches: [["2nde", "2nde", "", "seconde"], ["mode", "mode", "quitter"], ["suppr", "suppr"], ["alpha", "alpha", "", "alpha"], ["X,T,θ,n", "X,T,θ,n"], ["stats", "stats", "liste"]] }
      ],
      rangs: [
        { cols: 5, touches: [["math", "math"], ["matrice", "matrice"], ["prgm", "prgm"], ["var", "var", "distrib"], ["annul", "annul"]] },
        { cols: 5, touches: [["x⁻¹", "x⁻¹"], ["sin", "sin"], ["cos", "cos"], ["tan", "tan"], ["^", "^"]] },
        { cols: 5, touches: [["x²", "x²", "√"], [",", ","], ["(", "("], [")", ")"], ["÷", "÷", "", "op"]] },
        { cols: 5, touches: [["log", "log"], ["7", "7", "", "chiffre"], ["8", "8", "", "chiffre"], ["9", "9", "", "chiffre"], ["×", "×", "", "op"]] },
        { cols: 5, touches: [["ln", "ln", "eˣ"], ["4", "4", "", "chiffre"], ["5", "5", "", "chiffre"], ["6", "6", "", "chiffre"], ["−", "−", "", "op"]] },
        { cols: 5, touches: [["sto→", "sto→"], ["1", "1", "", "chiffre"], ["2", "2", "", "chiffre"], ["3", "3", "", "chiffre"], ["+", "+", "", "op"]] },
        { cols: 5, touches: [["on", "on"], ["0", "0", "catalog", "chiffre"], [".", ".", "", "chiffre"], ["(−)", "(−)", "rép", "chiffre"], ["entrer", "entrer", "", "entrer"]] }
      ]
    },
    numworks: {
      nom: "NumWorks", valider: "ok", autresValider: ["EXE"],
      haut: [
        { cols: 4, flechesNW: true, touches: [["home", "home"], ["ok", "ok", "", "entrer"], ["on/off", "on/off"], ["back", "back"]] }
      ],
      rangs: [
        { cols: 6, touches: [["shift", "shift", "", "seconde"], ["alpha", "alpha", "", "alpha"], ["x,n,t", "x,n,t"], ["var", "var"], ["boîte à outils", "<span class=\"atc-boite\" aria-hidden=\"true\"></span>"], ["effacer", "<span class=\"calc-retour\" aria-hidden=\"true\"></span>"]] },
        { cols: 6, touches: [["eˣ", "eˣ"], ["ln", "ln"], ["log", "log"], ["i", "i"], [",", ","], ["xʸ", "x<sup>y</sup>"]] },
        { cols: 6, touches: [["sin", "sin"], ["cos", "cos"], ["tan", "tan"], ["π", "π"], ["√", "√"], ["x²", "x²"]] },
        { cols: 5, touches: [["7", "7", "", "chiffre"], ["8", "8", "", "chiffre"], ["9", "9", "", "chiffre"], ["(", "("], [")", ")"]] },
        { cols: 5, touches: [["4", "4", "", "chiffre"], ["5", "5", "", "chiffre"], ["6", "6", "", "chiffre"], ["×", "×", "", "op"], ["÷", "÷", "", "op"]] },
        { cols: 5, touches: [["1", "1", "", "chiffre"], ["2", "2", "", "chiffre"], ["3", "3", "", "chiffre"], ["+", "+", "", "op"], ["−", "−", "", "op"]] },
        { cols: 5, touches: [["0", "0", "", "chiffre"], [".", ".", "", "chiffre"], ["×10ˣ", "×10<sup>x</sup>"], ["ans", "ans"], ["EXE", "EXE", "", "entrer"]] }
      ]
    }
  };
  const NOMS_FLECHES = { "▲": "flèche haut", "▼": "flèche bas", "◀": "flèche gauche", "▶": "flèche droite" };
  // Comment nommer une touche dans un message : [2nde] [var] (distrib)
  function nomTouche(modele, id, avant) {
    const c = CLAVIERS[modele];
    if (avant === c.seconde) {
      const t = tous(modele).find(x => x[0] === id);
      if (t && t[2]) return "[" + id + "] (" + t[2] + ")";
    }
    return "[" + id + "]";
  }
  function tous(modele) { const c = CLAVIERS[modele]; return [...c.haut, ...c.rangs].flatMap(r => r.touches); }

  const el = (tag, classe, texte) => { const e = document.createElement(tag); if (classe) e.className = classe; if (texte !== undefined) e.textContent = texte; return e; };
  const lire = t => { const v = parseFloat(String(t).trim().replace(/\s/g, "").replace(",", ".").replace("−", "-")); return isFinite(v) ? v : null; };
  const nb = v => String(v).replace(".", ",");

  // ---------- Un exercice en cours ----------
  function lancer(conteneur, idTache, modele, quitter) {
    const exo = EXOS[idTache], clavier = CLAVIERS[modele];
    let partie = 0, i = 0, k = 0, essais = 0, erreurs = 0, ecran = { lignes: [""] }, choixMenu = 0, ongletMenu = 0, avant = "";

    conteneur.innerHTML = "";
    conteneur.className = "atc";
    const enonce = el("p", "atc-enonce", exo.enonce);
    const question = el("p", "atc-question");
    const but = el("p", "atc-but");
    but.tabIndex = -1;
    const message = el("p", "atc-message");
    message.setAttribute("role", "status");
    const machine = el("div", "atc-machine atc-" + modele);
    const ecr = el("div", "atc-ecran");
    ecr.setAttribute("role", "group");
    ecr.setAttribute("aria-label", "Écran de la calculatrice (simplifié)");
    const touches = el("div", "atc-clavier");
    touches.setAttribute("aria-label", "Clavier de la " + clavier.nom);
    touches.setAttribute("role", "group");
    machine.append(ecr, message, touches);
    const avertir = el("p", "atc-avertir", "Écran simplifié : sur ta calculatrice, les menus peuvent avoir des noms ou une présentation un peu différents.");   // le message juste sous l'écran : visible en tapant, même au téléphone
    const fin = el("div", "atc-fin");
    const actions = el("div", "atc-actions");
    const sortir = el("button", "bouton secondaire", "Revoir les étapes");
    sortir.type = "button";
    sortir.onclick = quitter;
    actions.appendChild(sortir);
    conteneur.append(enonce, question, but, machine, avertir, fin, actions);

    // Le clavier
    const ligne = (r, classe) => {
      const rang = el("div", "atc-rang" + (classe ? " " + classe : ""));
      rang.style.setProperty("--cols", r.cols);
      if (r.fleches || r.flechesNW) {
        const pave = el("div", "atc-fleches");
        ["▲", "◀", "▶", "▼"].forEach(f => {
          const b = el("button", "atc-touche atc-fleche");
          b.type = "button"; b.dataset.id = f; b.setAttribute("aria-label", NOMS_FLECHES[f]);
          b.innerHTML = '<span class="ico ' + { "▲": "i-droite atc-haut", "▼": "i-droite atc-bas", "◀": "i-gauche", "▶": "i-droite" }[f] + '" aria-hidden="true"></span>';
          pave.appendChild(b);
        });
        rang.appendChild(pave);
      }
      r.touches.forEach(([id, texte, sec, cl]) => {
        const b = el("button", "atc-touche" + (cl ? " atc-" + cl : "") + (r.classe ? " atc-" + r.classe : ""));
        b.type = "button";
        b.dataset.id = id;
        b.innerHTML = (sec ? '<small class="atc-sec">' + sec + "</small>" : "") + '<span class="atc-txt">' + texte + "</span>";
        b.setAttribute("aria-label", id + (sec ? ", seconde fonction " + sec : ""));
        rang.appendChild(b);
      });
      return rang;
    };
    clavier.haut.forEach(r => touches.appendChild(ligne(r, "atc-rang-haut")));
    clavier.rangs.forEach(r => touches.appendChild(ligne(r)));
    touches.addEventListener("click", e => { const b = e.target.closest(".atc-touche"); if (b) appui(b.dataset.id, b); });

    const gestes = () => exo.parties[partie].gestes[modele];
    const geste = () => gestes()[i];

    function dire(texte, ton) { message.textContent = texte; message.className = "atc-message" + (ton ? " " + ton : ""); }
    function montrer(id) {
      touches.querySelectorAll(".atc-montre").forEach(x => x.classList.remove("atc-montre"));
      if (!id) return;
      const b = touches.querySelector('.atc-touche[data-id="' + CSS.escape(id) + '"]');
      if (b) b.classList.add("atc-montre");
    }

    // ---------- L'écran ----------
    function dessinerEcran() {
      ecr.innerHTML = "";
      const G = geste();
      const vue = G && (G.menu || G.saisie) ? null : ecran;
      if (G && G.menu) return dessinerMenu(G.menu);
      if (G && G.saisie) return dessinerSaisie(G.saisie, G);
      if (vue.onglets) ecr.appendChild(barreOnglets(vue.onglets, vue.onglet));
      if (vue.table) ecr.appendChild(tableau(vue.table));
      (vue.lignes || []).forEach(l => {
        const p = el("div", "atc-l");
        if (typeof l === "string") p.textContent = l || " ";
        else { if (l.g) p.appendChild(el("span", "", l.g)); p.appendChild(el("span", "atc-d", l.d)); }
        ecr.appendChild(p);
      });
      if (vue.note) ecr.appendChild(el("div", "atc-note", vue.note));
    }
    function barreOnglets(onglets, actif, cliquable) {
      const barre = el("div", "atc-onglets");
      onglets.forEach((o, j) => {
        const b = el(cliquable ? "button" : "span", "atc-onglet" + (j === actif ? " actif" : ""), o);
        if (cliquable) { b.type = "button"; b.onclick = () => choisirOnglet(j); }
        barre.appendChild(b);
      });
      return barre;
    }
    function tableau(t) {
      const tab = el("table", "atc-table");
      const tr = el("tr");
      t.cols.forEach(c => tr.appendChild(el("th", "", c)));
      tab.appendChild(tr);
      t.lignes.forEach(l => { const r = el("tr"); l.forEach(c => r.appendChild(el("td", "", c))); tab.appendChild(r); });
      return tab;
    }
    const itemsMenu = m => !m.items ? [] : m.onglets && Array.isArray(m.items[0]) ? m.items[ongletMenu] || [] : m.items;
    function dessinerMenu(m) {
      if (m.titre) ecr.appendChild(el("div", "atc-titre", m.titre));
      if (m.onglets) ecr.appendChild(barreOnglets(m.onglets, ongletMenu, true));
      if (m.tableau) { ecr.appendChild(tableau(m.tableau)); return; }
      const liste = el("div", "atc-menu" + (m.grille ? " atc-grille" : ""));
      if (m.grille) liste.style.setProperty("--cols", m.grille);
      itemsMenu(m).forEach((it, j) => {
        if (it === "…") { liste.appendChild(el("span", "atc-item atc-suite", "…")); return; }
        const b = el("button", "atc-item" + (j === choixMenu ? " actif" : ""), it);
        b.type = "button";
        b.onclick = () => { choixMenu = j; choisirItem(it); };
        liste.appendChild(b);
      });
      ecr.appendChild(liste);
    }
    function dessinerSaisie(s, G) {
      ecr.appendChild(el("div", "atc-titre", s.titre));
      s.champs.forEach((c, j) => {
        const lab = el("label", "atc-champ");
        lab.appendChild(el("span", "", c.nom + " ="));
        const inp = el("input");
        inp.type = "text"; inp.inputMode = "decimal"; inp.autocomplete = "off"; inp.spellcheck = false;
        inp.dataset.j = j;
        inp.addEventListener("keydown", e => { if (e.key === "Enter") { e.preventDefault(); appui(clavier.valider); } });
        lab.appendChild(inp);
        ecr.appendChild(lab);
      });
      ecr.appendChild(el("div", "atc-note", "Tape les nombres ici (virgule ou point), puis appuie sur [" + G.valider + "]."));
      if (G.remarque) ecr.appendChild(el("div", "atc-note", G.remarque));
    }

    // ---------- Les gestes ----------
    function commencerGeste() {
      essais = 0; k = 0; choixMenu = 0; montrer(null);
      const G = geste();
      if (G.ecran) ecran = G.ecran;
      if (G.menu) { ongletMenu = G.menu.onglet || 0; choixMenu = Math.max(0, itemsMenu(G.menu).findIndex(x => x !== "…")); }
      but.textContent = "Étape " + (i + 1) + " sur " + gestes().length + " : " + G.but;
      dessinerEcran();
      const champ = ecr.querySelector("input");
      if (champ) champ.focus({ preventScroll: true });
    }
    function gesteFait() {
      const G = geste();
      if (G.apres) ecran = G.apres;
      else if (G.menu || G.saisie) ecran = { lignes: [""] };
      i++;
      if (i < gestes().length) { commencerGeste(); return; }
      // Plus de touches : le résultat est à l'écran, on le recopie avec l'arrondi demandé
      but.textContent = "Le résultat est à l'écran : recopie-le avec l'arrondi demandé.";
      montrer(null);
      dessinerEcran();
      demanderReponses();
    }
    function faute(texte, attendu) {
      essais++; erreurs++;
      dire(texte + (essais >= 2 && attendu ? " La bonne touche est " + attendu + " : elle est entourée." : ""), "mal");
      if (window.Sons) Sons.faux();
    }
    function appui(id, bouton) {
      if (bouton) { bouton.classList.remove("atc-appui"); void bouton.offsetWidth; bouton.classList.add("atc-appui"); }
      const G = geste();
      if (!G || fin.childElementCount) return;
      if (G.touches) {
        const voulu = G.touches[k];
        if (id === voulu) {
          avant = id; k++; dire("");
          if (k === G.touches.length) gesteFait(); else montrer(essais >= 2 ? G.touches[k] : null);
          return;
        }
        const attendu = nomTouche(modele, voulu, G.touches[k - 1]);
        faute("Pas " + nomTouche(modele, id, avant) + " ici.", attendu);
        if (essais >= 2) montrer(voulu);
        avant = id;
        return;
      }
      if (G.menu) {
        const m = G.menu, items = itemsMenu(m);
        if (m.tableau || m.ongletSeul !== undefined) {
          if (id === "▶" || id === "◀") { choisirOnglet(Math.min(Math.max(0, ongletMenu + (id === "▶" ? 1 : -1)), m.onglets.length - 1)); return; }
          if (id === "▲") { dire("Les onglets sont en haut : touche celui qu'il faut, ou utilise les flèches gauche et droite."); return; }
          dire("Ici, il faut changer d'onglet.", "");
          return;
        }
        if (m.onglets && (id === "▶" || id === "◀")) { choisirOnglet((ongletMenu + (id === "▶" ? 1 : m.onglets.length - 1)) % m.onglets.length); return; }
        const pas = m.grille && (id === "▲" || id === "▼") ? m.grille : 1;
        if (["▲", "▼", "◀", "▶"].includes(id)) {
          let j = choixMenu;
          do { j = Math.min(Math.max(0, j + (id === "▲" || id === "◀" ? -pas : pas)), items.length - 1); } while (items[j] === "…" && j > 0 && j < items.length - 1);
          if (items[j] !== "…") choixMenu = j;
          dessinerEcran();
          return;
        }
        if (id === clavier.valider || (clavier.autresValider || []).includes(id)) { choisirItem(items[choixMenu]); return; }
        // TI : le chiffre d'un article le choisit directement (4 pour 4:RégLin)
        const parChiffre = items.find(x => /^\d$/.test(id) && x.startsWith(id + ":"));
        if (parChiffre) { choisirItem(parChiffre); return; }
        dire("Ici, choisis dans le menu : touche la ligne à l'écran, ou déplace-toi avec les flèches puis [" + clavier.valider + "].");
        return;
      }
      if (G.saisie) {
        if (id !== G.valider && !(clavier.autresValider || []).includes(id)) { dire("Tape les nombres dans les cases de l'écran, puis appuie sur [" + G.valider + "]."); return; }
        verifierSaisie(G);
      }
    }
    function choisirOnglet(j) {
      const G = geste(), m = G.menu;
      ongletMenu = j;
      choixMenu = Math.max(0, itemsMenu(m).findIndex(x => x !== "…"));
      if (m.ongletSeul !== undefined && j === m.ongletSeul) { dire(""); gesteFait(); return; }
      dessinerEcran();
    }
    function choisirItem(it) {
      const m = geste().menu;
      if (it === m.bon) { dire(""); gesteFait(); return; }
      faute("Ce n'est pas « " + it + " ».", "");
      if (essais >= 2) {
        dire("Ce n'est pas « " + it + " ». Il faut « " + m.bon + " »" + (m.onglets && Array.isArray(m.items[0]) ? ", dans l'onglet " + m.onglets[m.items.findIndex(l => l.includes(m.bon))] : "") + ".", "mal");
        if (m.onglets && Array.isArray(m.items[0])) { ongletMenu = m.items.findIndex(l => l.includes(m.bon)); }
        choixMenu = itemsMenu(m).indexOf(m.bon);
      }
      dessinerEcran();
    }
    function verifierSaisie(G) {
      const champs = [...ecr.querySelectorAll("input")];
      for (const inp of champs) {
        const c = G.saisie.champs[inp.dataset.j], v = lire(inp.value);
        if (v === null) { dire("Remplis « " + c.nom + " ».", "mal"); inp.focus(); return; }
        if (Math.abs(v - c.valeur) > 1e-9) {
          essais++; erreurs++;
          dire(c.variance !== undefined && Math.abs(v - c.variance) < 1e-9 ? "Tu as tapé la variance (" + nb(Number(c.variance.toPrecision(10))) + ") : la calculatrice attend l'écart type σ." : "Vérifie « " + c.nom + " » : relis l'énoncé.", "mal");
          if (window.Sons) Sons.faux();
          inp.select(); inp.focus();
          return;
        }
      }
      dire("");
      gesteFait();
    }

    // ---------- Recopier le résultat ----------
    function demanderReponses() {
      const P = exo.parties[partie];
      fin.innerHTML = "";
      const form = el("form", "atc-reponses");
      P.reponses.forEach((r, j) => {
        const lab = el("label", "saisie-ligne");
        lab.appendChild(el("span", "atc-nom", r.nom + " ≈"));
        const inp = el("input");
        inp.type = "text"; inp.inputMode = "text"; inp.autocomplete = "off"; inp.spellcheck = false;
        inp.dataset.j = j;
        lab.appendChild(inp);
        form.appendChild(lab);
      });
      form.appendChild(el("p", "saisie-aide", "Arrondis comme demandé : " + P.reponses.map(r => r.nom + " à " + nb(10 ** -r.decimales) + " près").join(", ") + "."));
      const ok = el("button", "bouton", "Valider");
      ok.type = "submit";
      form.appendChild(ok);
      const corr = el("div", "atc-correction");
      corr.setAttribute("role", "status");
      form.appendChild(corr);
      form.onsubmit = e => {
        e.preventDefault();
        const inps = [...form.querySelectorAll("input")];
        const res = inps.map((inp, j) => { const r = P.reponses[j]; return { r, c: corrigerCalcul(rep(r), inp.value) }; });
        if (res.some(x => x.c.etat === "vide")) { corr.textContent = "Remplis chaque case."; return; }
        corr.innerHTML = "";
        res.forEach(({ r, c }) => corr.appendChild(el("p", c.etat === "juste" ? "bien" : "mal", r.nom + " : " + messageCalcul(rep(r), c))));
        inps.forEach(x => x.disabled = true); ok.disabled = true;
        const tout = res.every(x => x.c.etat === "juste");
        if (window.Sons) (tout ? Sons.juste : Sons.faux)();
        suite(tout);
      };
      fin.appendChild(form);
      form.querySelector("input").focus({ preventScroll: true });
      form.scrollIntoView({ block: "nearest", behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
    // Le signe ne compte (et ne s'écrit) que pour une réponse négative : « 0,883 », pas « +0,883 »
    function rep(r) { return { valeur: r.valeur, decimales: r.decimales, unite: "", signe: r.valeur < 0 }; }
    function suite(tout) {
      const bilan = el("p", "atc-bilan");
      if (partie + 1 < exo.parties.length) {
        const b = el("button", "bouton", "Question suivante");
        b.type = "button";
        b.onclick = () => { partie++; i = 0; fin.innerHTML = ""; question.textContent = exo.parties[partie].question || ""; commencerGeste(); but.focus({ preventScroll: true }); };
        fin.appendChild(b);
        return;
      }
      bilan.textContent = erreurs === 0 ? "Tout du premier coup." + (tout ? "" : " Reste à soigner la recopie du résultat.")
        : erreurs + (erreurs > 1 ? " erreurs" : " erreur") + " en chemin : refais-le jusqu'à le faire sans te tromper.";
      const re = el("button", "bouton", "Recommencer");
      re.type = "button";
      re.onclick = () => lancer(conteneur, idTache, modele, quitter);
      fin.append(bilan, re);
    }

    question.textContent = exo.parties[0].question || "";
    commencerGeste();
    but.focus({ preventScroll: true });
  }

  // ---------- Le bouton sous une tâche du Guide (qcm.html, creerGuideCalculatrice) ----------
  function bouton(idTache, modele, ol) {
    if (!EXOS[idTache] || !CLAVIERS[modele]) return null;
    const b = el("button", "bouton secondaire bouton-atc");
    b.type = "button";
    b.innerHTML = '<span class="ico i-calcul" aria-hidden="true"></span> S\'entraîner sur ma ' + CLAVIERS[modele].nom;
    b.onclick = () => {
      const zone = el("div");
      const masques = [ol, ol && ol.nextElementSibling && ol.nextElementSibling.classList.contains("calc-remarque") ? ol.nextElementSibling : null, b].filter(Boolean);
      masques.forEach(x => x.hidden = true);
      b.after(zone);
      lancer(zone, idTache, modele, () => { zone.remove(); masques.forEach(x => x.hidden = false); b.focus(); });
    };
    return b;
  }

  window.AtelierCalculatrice = { bouton, _exos: EXOS, _valeurs: { REG, BIN_V, NOR_V, NOR_INV } };
})();
