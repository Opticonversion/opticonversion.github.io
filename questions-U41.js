// ==============================================================
//  QUESTIONS · Mathématiques (U41)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U41" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : en maths, la calculatrice est autorisée à l'examen, mais on
//  garde des chiffres simples pour pouvoir répondre de tête.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Analyse des sujets : notes/analyse-U41.md
// ==============================================================

QUESTIONS.push(

  // ---------- Suites (4 sujets sur 5) ----------
  {
    id: "U41-001", epreuve: "U41", theme: "Suites", session: "2022",
    difficulte: "moyen",
    question: "Un magasin a vendu 200 verres progressifs en 2024. Les ventes augmentent de 10 % par an. Combien en vendra-t-il en 2026 selon ce modèle ?",
    choix: ["240", "242", "220", "264"],
    bonne: 1,
    explication: "Augmenter de 10 %, c'est multiplier par 1,1 : suite géométrique de raison 1,1. u2 = 200 × 1,1² = 200 × 1,21 = 242. Piège : 240 correspond à +20 en tout (ajouter 10 % de 200 deux fois), ce qui n'est pas une suite géométrique.",
    indice: "Une hausse de 10 % revient à multiplier par un même nombre chaque année. Combien d'années séparent 2024 et 2026 ?"
  },
  {
    id: "U41-002", epreuve: "U41", theme: "Suites", session: "2018",
    difficulte: "facile",
    question: "Chaque mois, un opticien perd 20 % de ses porteurs de lentilles mais en gagne 60 nouveaux. Le premier mois (n = 0), il en a 100. Combien en a-t-il le mois suivant (u1) ?",
    choix: ["140", "160", "80", "148"],
    bonne: 0,
    explication: "Perdre 20 % = garder 80 %, donc u(n+1) = 0,8 × u(n) + 60. u1 = 0,8 × 100 + 60 = 80 + 60 = 140.",
    indice: "Perdre 20 %, c'est garder quelle part ? Applique d'abord ce pourcentage, puis ajoute les nouveaux porteurs."
  },
  {
    id: "U41-003", epreuve: "U41", theme: "Suites", session: "2023",
    difficulte: "moyen",
    question: "On reprend u(n+1) = 0,8 u(n) + 60. On pose v(n) = u(n) − ℓ. Quelle valeur de ℓ rend la suite (v(n)) géométrique ?",
    choix: ["60", "300", "75", "480"],
    bonne: 1,
    explication: "ℓ est le « point fixe » : ℓ = 0,8 ℓ + 60, donc 0,2 ℓ = 60 et ℓ = 60 / 0,2 = 300. Vérification : v(n+1) = u(n+1) − 300 = 0,8 u(n) − 240 = 0,8 (u(n) − 300) = 0,8 v(n). Raison 0,8.",
    indice: "ℓ est la valeur qui ne bouge plus d'un mois à l'autre : résous l'équation ℓ = 0,8 ℓ + 60."
  },
  {
    id: "U41-004", epreuve: "U41", theme: "Suites", session: "2016",
    difficulte: "moyen",
    question: "Avec u0 = 100, u(n+1) = 0,8 u(n) + 60 et v(n) = u(n) − 300, quelle est l'expression de u(n) ?",
    choix: ["u(n) = 300 − 200 × 0,8ⁿ", "u(n) = 100 × 0,8ⁿ + 300", "u(n) = 300 + 200 × 0,8ⁿ", "u(n) = 100 + 60n"],
    bonne: 0,
    explication: "v0 = u0 − 300 = 100 − 300 = −200. (v(n)) est géométrique de raison 0,8 : v(n) = −200 × 0,8ⁿ. Donc u(n) = v(n) + 300 = 300 − 200 × 0,8ⁿ. Contrôle : u0 = 300 − 200 = 100 ✓.",
    indice: "Calcule d'abord v0 = u0 − 300, puis écris v(n) avec la raison 0,8. Contrôle ta formule avec n = 0."
  },
  {
    id: "U41-005", epreuve: "U41", theme: "Suites", session: "2016",
    difficulte: "facile",
    question: "Quelle est la limite de u(n) = 300 − 200 × 0,8ⁿ quand n tend vers +∞ ? Que signifie-t-elle ?",
    choix: ["+∞ : la clientèle augmente sans limite", "300 : la clientèle se stabilise vers 300", "100 : la clientèle revient à sa valeur de départ", "0 : la clientèle finit par disparaître"],
    bonne: 1,
    explication: "Comme 0 < 0,8 < 1, 0,8ⁿ tend vers 0. Donc 200 × 0,8ⁿ tend vers 0 et u(n) tend vers 300. Interprétation : à long terme, le nombre de porteurs se rapproche de 300 sans jamais le dépasser.",
    indice: "Que devient 0,8ⁿ quand n devient très grand ? Pense à ce qui arrive aux puissances d'un nombre compris entre 0 et 1.",
    schema: "img/schemas/U41/suite-seuil-250-limite-300.svg",
    schemaTexte: "Les termes de la suite montent de 100 vers la limite 300 : u6 ≈ 247,6 reste sous le seuil 250, u7 ≈ 258,1 le dépasse, donc l'algorithme s'arrête à n = 7."
  },
  {
    id: "U41-006", epreuve: "U41", theme: "Suites", session: "2023",
    difficulte: "difficile",
    question: "Algorithme : n ← 0 ; u ← 100 ; Tant que u < 250 : n ← n + 1 ; u ← 0,8 × u + 60. Quelle valeur de n obtient-on à la fin ?",
    choix: ["6", "7", "8", "258"],
    bonne: 1,
    explication: "On calcule les termes : u1 = 140 ; u2 = 172 ; u3 = 197,6 ; u4 ≈ 218,1 ; u5 ≈ 234,5 ; u6 ≈ 247,6 (encore < 250, on continue) ; u7 ≈ 258,1 (≥ 250, on s'arrête). n = 7 : c'est au mois de rang 7 que l'on dépasse 250 porteurs. Piège : 258 est la valeur de u, pas de n.",
    indice: "Calcule les termes un par un et note n à chaque tour. La boucle s'arrête dès que u n'est plus inférieur à 250.",
    schema: "img/schemas/U41/suite-seuil-250-limite-300.svg",
    schemaTexte: "Les termes de la suite montent de 100 vers la limite 300 : u6 ≈ 247,6 reste sous le seuil 250, u7 ≈ 258,1 le dépasse, donc l'algorithme s'arrête à n = 7."
  },

  // ---------- Fonctions (5 sujets sur 5) ----------
  {
    id: "U41-007", epreuve: "U41", theme: "Fonctions", session: "2017",
    difficulte: "facile",
    question: "À la sortie d'une étuve, la température d'un verre organique (en °C) est modélisée par f(t) = 30 + 50 e^(−0,2t), t en minutes. Quelle est sa température à t = 0 ?",
    choix: ["30 °C", "50 °C", "80 °C", "20 °C"],
    bonne: 2,
    explication: "e⁰ = 1, donc f(0) = 30 + 50 × 1 = 80 °C.",
    indice: "Que vaut e⁰ ? Remplace t par 0 dans la formule."
  },
  {
    id: "U41-008", epreuve: "U41", theme: "Fonctions", session: "2022",
    difficulte: "facile",
    question: "Quelle est la dérivée de f(t) = 30 + 50 e^(−0,2t) ?",
    choix: ["f'(t) = −10 e^(−0,2t)", "f'(t) = 50 e^(−0,2t)", "f'(t) = 30 − 10 e^(−0,2t)", "f'(t) = −0,2 e^(−0,2t)"],
    bonne: 0,
    explication: "La constante 30 a une dérivée nulle. (e^(kt))' = k e^(kt), donc (50 e^(−0,2t))' = 50 × (−0,2) e^(−0,2t) = −10 e^(−0,2t).",
    indice: "Une constante a une dérivée nulle, et la dérivée de e^(kt) est k e^(kt)."
  },
  {
    id: "U41-009", epreuve: "U41", theme: "Fonctions", session: "2017",
    difficulte: "facile",
    question: "f'(t) = −10 e^(−0,2t). Quel est le sens de variation de f sur [0 ; +∞[ ?",
    choix: ["Croissante, car e^(−0,2t) > 0", "Décroissante, car f'(t) < 0", "Croissante puis décroissante", "Constante"],
    bonne: 1,
    explication: "Une exponentielle est toujours strictement positive, donc −10 e^(−0,2t) est toujours négatif. f' < 0 : f est décroissante. Logique : le verre refroidit.",
    indice: "Étudie le signe de f'(t). Rappel : une exponentielle est toujours strictement positive."
  },
  {
    id: "U41-010", epreuve: "U41", theme: "Fonctions", session: "2023",
    difficulte: "facile",
    question: "Quelle est la limite de f(t) = 30 + 50 e^(−0,2t) en +∞, et que signifie-t-elle ?",
    choix: ["80 : la température de sortie d'étuve", "0 : le verre finit par geler", "30 : la température ambiante de la pièce", "+∞ : le verre chauffe sans fin"],
    bonne: 2,
    explication: "Quand t → +∞, −0,2t → −∞ et e^(−0,2t) → 0. Donc f(t) → 30. La courbe a une asymptote horizontale y = 30 : le verre finit à la température ambiante de 30 °C.",
    indice: "Quand t devient très grand, vers quoi tend e^(−0,2t) ? Il ne reste alors que la constante.",
    schema: "img/schemas/U41/fonction-refroidissement-asymptote.svg",
    schemaTexte: "Courbe de f(t) = 30 + 50 e^(−0,2t) : elle part de 80 et se rapproche de l'asymptote y = 30 ; elle reste au-dessus de sa tangente en 0, y = 80 − 10t."
  },
  {
    id: "U41-011", epreuve: "U41", theme: "Fonctions", session: "2022",
    difficulte: "moyen",
    question: "Un logiciel donne le développement limité de f à l'ordre 2 en 0 : f(t) = 80 − 10t + t² + t² ε(t). Quelle est l'équation de la tangente à la courbe en 0 ?",
    choix: ["y = 80 − 10t + t²", "y = 80 − 10t", "y = −10t", "y = 10t − 80"],
    bonne: 1,
    explication: "La tangente en 0 est y = f(0) + f'(0) t : ce sont les deux premiers termes du développement limité, 80 − 10t. Le terme en t² ne fait pas partie de la tangente (ce n'est pas une droite).",
    indice: "La tangente en 0 a pour équation y = f(0) + f'(0) t : c'est une droite, il n'y a donc pas de terme en t²."
  },
  {
    id: "U41-012", epreuve: "U41", theme: "Fonctions", session: "2023",
    difficulte: "difficile",
    question: "f(t) = 80 − 10t + t² + t² ε(t). Près de 0, où est la courbe par rapport à sa tangente y = 80 − 10t ?",
    choix: ["Au-dessus", "En dessous", "Elle la traverse", "Elles sont confondues"],
    bonne: 0,
    explication: "f(t) − (80 − 10t) = t² + t² ε(t) ≈ t², qui est positif près de 0. La courbe est donc au-dessus de la tangente. Règle : on regarde le signe du coefficient de t² (ici +1).",
    indice: "Calcule la différence entre f(t) et l'équation de la tangente, puis regarde le signe du terme en t² près de 0.",
    schema: "img/schemas/U41/fonction-refroidissement-asymptote.svg",
    schemaTexte: "Courbe de f(t) = 30 + 50 e^(−0,2t) : elle part de 80 et se rapproche de l'asymptote y = 30 ; elle reste au-dessus de sa tangente en 0, y = 80 − 10t."
  },
  {
    id: "U41-013", epreuve: "U41", theme: "Fonctions", session: "2018",
    difficulte: "difficile",
    question: "À partir de quel instant le verre est-il à 40 °C ou moins ? On résout 30 + 50 e^(−0,2t) ≤ 40.",
    choix: ["t ≥ 5 ln 5 ≈ 8,0 min", "t ≤ 5 ln 5", "t ≥ (ln 5) / 5 ≈ 0,3 min", "t ≥ 50 min"],
    bonne: 0,
    explication: "50 e^(−0,2t) ≤ 10 ⟺ e^(−0,2t) ≤ 0,2 ⟺ −0,2t ≤ ln 0,2 = −ln 5 ⟺ t ≥ ln 5 / 0,2 = 5 ln 5 ≈ 8,05 min. Attention : diviser par −0,2 (négatif) change le sens de l'inégalité.",
    indice: "Isole l'exponentielle, puis applique ln. Attention : diviser par un nombre négatif change le sens de l'inégalité."
  },

  {
    id: "U41-014", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle courbe représente f(t) = 30 + 50 e^(−0,2t) sur [0 ; 30] ?",
    choix: ["Courbe qui part de 80 et descend vers 30", "Courbe qui part de 80 et monte très vite", "Courbe qui part de 50 et descend vers 0", "Courbe qui part de 50 et descend vers 30"],
    choixSchemas: ["img/schemas/U41/courbe-juste.svg", "img/schemas/U41/courbe-faux-croissante.svg", "img/schemas/U41/courbe-faux-asymptote-0.svg", "img/schemas/U41/courbe-faux-depart-50.svg"],
    bonne: 0,
    explication: "Deux repères suffisent. Le départ : f(0) = 30 + 50 × e⁰ = 80. La fin : e^(−0,2t) tend vers 0, donc f(t) tend vers 30 (asymptote y = 30), et f' = −10 e^(−0,2t) < 0 : la courbe descend. Les pièges : oublier le signe − de l'exposant (la courbe monte en flèche), oublier la constante 30 (asymptote en 0), ou partir de 50 au lieu de 30 + 50.",
    indice: "Calcule f(0), puis cherche vers quoi tend f(t) quand t devient grand. La bonne courbe doit vérifier les deux."
  },

  // ---------- Calcul intégral ----------
  {
    id: "U41-015", epreuve: "U41", theme: "Calcul intégral", session: "2018",
    difficulte: "moyen",
    question: "Les ventes mensuelles d'un modèle de monture sont modélisées par f(x) = 6x + 20 sur [0 ; 10]. Quelle est la valeur moyenne de f sur cet intervalle ?",
    choix: ["50", "500", "80", "26"],
    bonne: 0,
    explication: "Valeur moyenne = (1 / (10 − 0)) × ∫₀¹⁰ (6x + 20) dx. Une primitive est 3x² + 20x. ∫ = (3 × 100 + 200) − 0 = 500. Moyenne = 500 / 10 = 50. Piège : 500 est l'intégrale, il faut encore diviser par la longueur de l'intervalle.",
    indice: "Valeur moyenne = intégrale divisée par la longueur de l'intervalle. Commence par une primitive de 6x + 20."
  },
  {
    id: "U41-016", epreuve: "U41", theme: "Calcul intégral", session: "2018",
    difficulte: "facile",
    question: "Quelle est une primitive de g(x) = e^(−0,5x) ?",
    choix: ["−0,5 e^(−0,5x)", "−2 e^(−0,5x)", "2 e^(−0,5x)", "e^(−0,5x)"],
    bonne: 1,
    explication: "Une primitive de e^(kx) est (1/k) e^(kx). Avec k = −0,5 : 1/k = −2, donc G(x) = −2 e^(−0,5x). Vérification : G'(x) = −2 × (−0,5) e^(−0,5x) = e^(−0,5x) ✓.",
    indice: "Une primitive de e^(kx) est (1/k) e^(kx). Vérifie en dérivant ta réponse."
  },

  // ---------- Équations différentielles (4 sujets sur 5) ----------
  {
    id: "U41-017", epreuve: "U41", theme: "Équations différentielles", session: "2023",
    difficulte: "facile",
    question: "Quelles sont les solutions de l'équation 4y' + 2y = 0 ? (Rappel : a y' + b y = 0 a pour solutions k e^(−(b/a)t).)",
    choix: ["y = k e^(−2t)", "y = k e^(−0,5t)", "y = k e^(0,5t)", "y = k e^(−4t)"],
    bonne: 1,
    explication: "a = 4 et b = 2, donc −b/a = −2/4 = −0,5. Solutions : y = k e^(−0,5t), k réel. Piège : inverser a et b (donne −2).",
    indice: "Repère a (devant y') et b (devant y), puis calcule −b/a. Attention à ne pas les inverser."
  },
  {
    id: "U41-018", epreuve: "U41", theme: "Équations différentielles", session: "2022",
    difficulte: "facile",
    question: "On cherche une solution constante g(t) = c de l'équation 2y' + 0,5y = 15. Combien vaut c ?",
    choix: ["15", "7,5", "30", "0,5"],
    bonne: 2,
    explication: "Une constante a une dérivée nulle : 2 × 0 + 0,5c = 15, donc c = 15 / 0,5 = 30.",
    indice: "Une fonction constante a une dérivée nulle : remplace y' par 0 et y par c."
  },
  {
    id: "U41-019", epreuve: "U41", theme: "Équations différentielles", session: "2018",
    difficulte: "moyen",
    question: "Quelles sont les solutions de y' + 0,1y = 2 ?",
    choix: ["y = k e^(−0,1t) + 2", "y = k e^(−0,1t) + 20", "y = k e^(0,1t) + 20", "y = 20 e^(−0,1t)"],
    bonne: 1,
    explication: "Solutions de y' + 0,1y = 0 : k e^(−0,1t). Solution constante : 0,1c = 2, donc c = 20. Solutions de l'équation complète = les deux additionnées : y = k e^(−0,1t) + 20.",
    indice: "Solutions = solutions de y' + 0,1y = 0, auxquelles on ajoute une solution constante. Cherche d'abord cette constante."
  },
  {
    id: "U41-020", epreuve: "U41", theme: "Équations différentielles", session: "2017",
    difficulte: "difficile",
    question: "Loi de refroidissement : y' = −0,2 (y − 20), avec y(0) = 70 °C. Quelle est la solution ?",
    choix: ["y = 20 + 50 e^(−0,2t)", "y = 70 e^(−0,2t)", "y = 20 + 70 e^(−0,2t)", "y = 70 + 20 e^(−0,2t)"],
    bonne: 0,
    explication: "L'équation s'écrit y' + 0,2y = 4. Solution constante : 4 / 0,2 = 20. Solutions : y = k e^(−0,2t) + 20. Condition initiale : y(0) = k + 20 = 70, donc k = 50. y = 20 + 50 e^(−0,2t).",
    indice: "Réécris l'équation sous la forme y' + 0,2y = …, trouve la solution constante, puis utilise y(0) = 70."
  },

  // ---------- Statistique à deux variables (5 sujets sur 5) ----------
  {
    id: "U41-021", epreuve: "U41", theme: "Statistique", session: "2022",
    difficulte: "facile",
    question: "Le nuage de points des ventes d'une lentille de couleur forme une courbe qui descend vite puis se tasse. Pourquoi un ajustement affine de y en x n'est-il pas adapté ?",
    choix: ["Parce que les points ne sont pas alignés", "Parce que y diminue", "Parce que le coefficient de corrélation est négatif", "Parce qu'il y a moins de 10 points"],
    bonne: 0,
    explication: "Un ajustement affine suppose des points à peu près sur une droite. Ici l'allure est courbe (type exponentielle). Une série qui diminue peut très bien être affine, et un r négatif veut seulement dire « décroissant » : ce sont des pièges.",
    indice: "Un ajustement affine, c'est approcher le nuage par une droite. Que faut-il pour qu'une droite convienne ?"
  },
  {
    id: "U41-022", epreuve: "U41", theme: "Statistique", session: "2023",
    difficulte: "moyen",
    question: "Après le changement de variable z = ln(y − 20), la calculatrice donne r ≈ −0,998 pour la série (x ; z). Que conclure ?",
    choix: ["Ajustement affine non pertinent, car r est négatif", "Ajustement affine pertinent, car |r| est très proche de 1", "Impossible à dire sans tracer le nuage de points", "Ajustement pertinent, car y est proportionnel à x"],
    bonne: 1,
    explication: "C'est la valeur absolue de r qui compte : |r| = 0,998, très proche de 1, donc les points (x ; z) sont presque alignés. Le signe − indique seulement que z diminue quand x augmente.",
    indice: "Ce qui compte, c'est la valeur absolue de r : plus elle est proche de 1, plus les points sont alignés.",
    schema: "img/schemas/U41/nuage-changement-variable-ln.svg",
    schemaTexte: "À gauche, le nuage (x ; y) forme une courbe. À droite, avec z = ln(y − 20), les points s'alignent sur la droite z ≈ −0,50x + 5,01 et r ≈ −0,998."
  },
  {
    id: "U41-023", epreuve: "U41", theme: "Statistique", session: "2018",
    difficulte: "moyen",
    question: "Avec z = ln(y − 20), on trouve la droite z = −0,5x + 5. Quelle est l'expression de y ? (e⁵ ≈ 148)",
    choix: ["y = 20 + 148 e^(−0,5x)", "y = 148 e^(−0,5x) − 20", "y = 20 − 0,5x + 5", "y = 20 + 5 e^(−0,5x)"],
    bonne: 0,
    explication: "ln(y − 20) = −0,5x + 5 donc y − 20 = e^(−0,5x + 5) = e⁵ × e^(−0,5x) ≈ 148 e^(−0,5x). D'où y = 20 + 148 e^(−0,5x).",
    indice: "Applique l'exponentielle des deux côtés : e^(ln A) = A, et e^(a + b) = e^a × e^b."
  },
  {
    id: "U41-024", epreuve: "U41", theme: "Statistique", session: "2023",
    difficulte: "facile",
    question: "La droite de régression des ventes de montures (en centaines) est y = 12x + 150, où x est le rang de l'année (x = 0 pour 2020). Quelle prévision pour 2028 ?",
    choix: ["246 centaines", "2 460 centaines", "162 centaines", "258 centaines"],
    bonne: 0,
    explication: "2028 correspond au rang x = 2028 − 2020 = 8. y = 12 × 8 + 150 = 96 + 150 = 246 centaines, soit 24 600 montures. Piège : compter 2020 comme rang 1 (x = 9 donne 258).",
    indice: "Trouve d'abord le rang x de 2028 (2020 a le rang 0), puis remplace dans l'équation de la droite."
  },

  // ---------- Probabilités conditionnelles (4 sujets sur 5) ----------
  {
    id: "U41-025", epreuve: "U41", theme: "Probabilités", session: "2016",
    difficulte: "facile",
    question: "Dans un magasin, 40 % des verres vendus sont progressifs (P). 75 % des progressifs ont un antireflet (R), contre 50 % des autres verres. Quelle est P(P ∩ R) ?",
    choix: ["0,75", "0,30", "0,40", "0,60"],
    bonne: 1,
    explication: "On suit la branche P puis R de l'arbre : P(P ∩ R) = P(P) × P_P(R) = 0,4 × 0,75 = 0,30.",
    indice: "P(A ∩ B) = P(A) × P_A(B) : on multiplie les probabilités le long d'une même branche de l'arbre."
  },
  {
    id: "U41-026", epreuve: "U41", theme: "Probabilités", session: "2022",
    difficulte: "moyen",
    question: "Même magasin (40 % progressifs dont 75 % avec antireflet, 60 % autres dont 50 % avec antireflet). Quelle est la probabilité P(R) qu'un verre ait un antireflet ?",
    choix: ["0,625", "1,25", "0,60", "0,30"],
    bonne: 2,
    explication: "Formule des probabilités totales : P(R) = P(P ∩ R) + P(P̄ ∩ R) = 0,4 × 0,75 + 0,6 × 0,5 = 0,30 + 0,30 = 0,60. Piège : faire la moyenne de 75 % et 50 % (0,625) oublie le poids de chaque branche.",
    indice: "Probabilités totales : additionne les probabilités de tous les chemins de l'arbre qui mènent à R.",
    schema: "img/schemas/U41/arbre-progressifs-antireflet.svg",
    schemaTexte: "Arbre pondéré : 0,4 vers P puis 0,75 vers R donne 0,30 ; 0,6 vers P̄ puis 0,5 vers R donne 0,30 ; P(R) = 0,60."
  },
  {
    id: "U41-027", epreuve: "U41", theme: "Probabilités", session: "2023",
    difficulte: "moyen",
    question: "Un verre vendu a un antireflet. Quelle est la probabilité que ce soit un progressif ? (P(P ∩ R) = 0,30 et P(R) = 0,60)",
    choix: ["0,30", "0,75", "0,40", "0,50"],
    bonne: 3,
    explication: "On cherche P_R(P) (« P sachant R ») = P(P ∩ R) / P(R) = 0,30 / 0,60 = 0,50. Piège : 0,75 est P_P(R), l'inverse de ce qu'on demande.",
    indice: "On sait que R est réalisé : on cherche P_R(P), c'est-à-dire P(P ∩ R) divisé par P(R)."
  },
  {
    id: "U41-028", epreuve: "U41", theme: "Probabilités", session: "2018",
    difficulte: "moyen",
    question: "4 % des verres ont un défaut de diamètre (D), 5 % un défaut d'épaisseur (E), de façon indépendante. Probabilité qu'un verre ait au moins un des deux défauts ?",
    choix: ["0,09", "0,002", "0,088", "0,912"],
    bonne: 2,
    explication: "Indépendants : P(D ∩ E) = 0,04 × 0,05 = 0,002. P(D ∪ E) = P(D) + P(E) − P(D ∩ E) = 0,04 + 0,05 − 0,002 = 0,088. (0,912 est la probabilité de n'avoir aucun défaut : 0,96 × 0,95.)",
    indice: "Commence par P(D ∩ E) (événements indépendants : on multiplie), puis utilise P(D ∪ E) = P(D) + P(E) − P(D ∩ E)."
  },

  // ---------- Lois de probabilité ----------
  {
    id: "U41-029", epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    difficulte: "facile",
    question: "2 % des lentilles d'un stock sont défectueuses. On en prélève 50 au hasard (avec remise). X = nombre de lentilles défectueuses. Quelle loi suit X et quelle est son espérance ?",
    choix: ["Binomiale B(50 ; 0,02), E(X) = 1", "Binomiale B(0,02 ; 50), E(X) = 25", "Poisson de paramètre 50, E(X) = 50", "Normale N(50 ; 0,02), E(X) = 50"],
    bonne: 0,
    explication: "50 épreuves identiques et indépendantes, deux issues (défectueuse ou non), probabilité de succès 0,02 : X suit B(n = 50 ; p = 0,02). E(X) = n × p = 50 × 0,02 = 1 lentille défectueuse en moyenne.",
    indice: "Combien d'épreuves identiques et indépendantes, avec quelle probabilité de succès ? L'espérance d'une loi binomiale vaut n × p."
  },
  {
    id: "U41-030", epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    difficulte: "moyen",
    question: "X suit B(50 ; 0,02). Quelle est la probabilité qu'au moins une lentille soit défectueuse ? (0,98⁵⁰ ≈ 0,364)",
    choix: ["0,02", "0,364", "0,636", "1"],
    bonne: 2,
    explication: "On passe par le contraire : P(X = 0) = 0,98⁵⁰ ≈ 0,364. P(X ≥ 1) = 1 − 0,364 = 0,636. Piège : 0,364 est la probabilité qu'il n'y en ait aucune.",
    indice: "« Au moins une », c'est le contraire de « aucune » : P(X ≥ 1) = 1 − P(X = 0)."
  },
  {
    id: "U41-031", epreuve: "U41", theme: "Lois de probabilité", session: "2023",
    difficulte: "moyen",
    question: "X suit B(400 ; 0,1). On l'approche par une loi normale. Quels paramètres ?",
    choix: ["Moyenne 40, écart type 6", "Moyenne 40, écart type 36", "Moyenne 0,1, écart type 0,9", "Moyenne 400, écart type 40"],
    bonne: 0,
    explication: "Moyenne = np = 400 × 0,1 = 40. Écart type = √(np(1 − p)) = √(400 × 0,1 × 0,9) = √36 = 6. Piège : 36 est la variance, il faut prendre la racine.",
    indice: "Moyenne = np et écart type = √(np(1 − p)). Attention : l'écart type est la racine carrée de la variance."
  },
  {
    id: "U41-032", epreuve: "U41", theme: "Lois de probabilité", session: "2018",
    difficulte: "facile",
    question: "Le nombre de clients qui achètent des verres solaires un lundi matin suit une loi de Poisson de paramètre 2. Probabilité qu'aucun client n'en achète ? (e⁻² ≈ 0,135)",
    choix: ["0", "0,135", "0,270", "0,865"],
    bonne: 1,
    explication: "Loi de Poisson : P(X = k) = e^(−λ) λᵏ / k!. Pour k = 0 : P(X = 0) = e⁻² × 1 / 1 = e⁻² ≈ 0,135.",
    indice: "Loi de Poisson : P(X = k) = e^(−λ) λᵏ / k!. Que valent λ⁰ et 0! ?"
  },
  {
    id: "U41-033", epreuve: "U41", theme: "Lois de probabilité", session: "2022",
    difficulte: "moyen",
    question: "Le temps d'attente T (en minutes) au comptoir suit une loi exponentielle de paramètre λ = 0,25. Temps d'attente moyen et P(T ≤ 4) ? (e⁻¹ ≈ 0,368)",
    choix: ["Moyenne 0,25 min ; P ≈ 0,368", "Moyenne 4 min ; P ≈ 0,632", "Moyenne 4 min ; P ≈ 0,368", "Moyenne 2 min ; P ≈ 0,5"],
    bonne: 1,
    explication: "E(T) = 1/λ = 1/0,25 = 4 minutes. P(T ≤ 4) = 1 − e^(−0,25 × 4) = 1 − e⁻¹ ≈ 1 − 0,368 = 0,632.",
    indice: "Pour une loi exponentielle : E(T) = 1/λ et P(T ≤ t) = 1 − e^(−λt)."
  },
  {
    id: "U41-034", epreuve: "U41", theme: "Lois de probabilité", session: "2022",
    difficulte: "facile",
    question: "Un jour de forte affluence, le temps d'attente suit la loi uniforme sur [0 ; 10] (minutes). Probabilité d'attendre moins de 6 minutes ?",
    choix: ["0,06", "0,5", "0,6", "0,4"],
    bonne: 2,
    explication: "Loi uniforme sur [a ; b] : P(T ≤ t) = (t − a) / (b − a) = (6 − 0) / (10 − 0) = 0,6. Son espérance serait (a + b) / 2 = 5 min.",
    indice: "Loi uniforme sur [a ; b] : P(T ≤ t) = (t − a) / (b − a)."
  },
  {
    id: "U41-035", epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    difficulte: "moyen",
    question: "Le diamètre (mm) d'une lentille suit une loi normale de moyenne 14 et d'écart type 0,1. Quelle est environ P(13,8 ≤ X ≤ 14,2) ?",
    choix: ["0,68", "0,954", "0,997", "0,5"],
    bonne: 1,
    explication: "13,8 et 14,2 sont à 0,2 = 2 écarts types de la moyenne. À retenir : P(μ − σ ≤ X ≤ μ + σ) ≈ 0,68 ; P(μ − 2σ ≤ X ≤ μ + 2σ) ≈ 0,954 ; P(μ − 3σ ≤ X ≤ μ + 3σ) ≈ 0,997.",
    indice: "Combien d'écarts types séparent 13,8 et 14,2 de la moyenne ? Retiens les trois valeurs clés pour ±1σ, ±2σ et ±3σ.",
    schema: "img/schemas/U41/loi-normale-diametre-14.svg",
    schemaTexte: "Courbe en cloche de la loi normale de moyenne 14 et d'écart type 0,1 : l'aire colorée entre 13,8 et 14,2 (2 écarts types de chaque côté) vaut environ 0,954. Les bornes se déplacent."
  },

  // ---------- Estimation et tests ----------
  {
    id: "U41-036", epreuve: "U41", theme: "Estimation et tests", session: "2023",
    difficulte: "facile",
    question: "Sur 200 clients interrogés, 160 sont satisfaits de leurs verres. Quelle est l'estimation ponctuelle de la proportion p de clients satisfaits ?",
    choix: ["0,16", "0,8", "1,25", "0,2"],
    bonne: 1,
    explication: "L'estimation ponctuelle est la fréquence observée dans l'échantillon : f = 160 / 200 = 0,8 (80 %).",
    indice: "L'estimation ponctuelle, c'est la fréquence observée : nombre de clients satisfaits divisé par la taille de l'échantillon."
  },
  {
    id: "U41-037", epreuve: "U41", theme: "Estimation et tests", session: "2022",
    difficulte: "moyen",
    question: "Sur 100 porteurs de lentilles, 80 sont satisfaits. Intervalle de confiance de p à 95 % ? (formule : f ± 1,96 √(f(1 − f)/n))",
    choix: ["[0,79 ; 0,81]", "[0,722 ; 0,878]", "[0,76 ; 0,84]", "[0,6 ; 1]"],
    bonne: 1,
    explication: "f = 0,8. √(0,8 × 0,2 / 100) = √0,0016 = 0,04. 1,96 × 0,04 = 0,0784. Intervalle : [0,8 − 0,0784 ; 0,8 + 0,0784] ≈ [0,722 ; 0,878]. Piège : oublier le 1,96 donne [0,76 ; 0,84].",
    indice: "Calcule d'abord √(f(1 − f)/n), multiplie par 1,96, puis retire et ajoute ce résultat à f."
  },
  {
    id: "U41-038", epreuve: "U41", theme: "Estimation et tests", session: "2016",
    difficulte: "moyen",
    question: "On a trouvé l'intervalle de confiance à 95 % [0,722 ; 0,878]. La vraie proportion p est-elle sûrement dedans ?",
    choix: ["Oui, c'est certain à 100 %", "Non, on a seulement une confiance de 95 %", "Oui, dès que l'échantillon dépasse 30 personnes", "Non, p vaut forcément 0,8"],
    bonne: 1,
    explication: "On n'est jamais certain. La méthode donne, pour environ 95 % des échantillons possibles, un intervalle qui contient p. Une fois l'intervalle calculé, on dit que p y est avec une confiance de 95 % : ce n'est plus une probabilité, p y est ou n'y est pas.",
    indice: "Un autre échantillon aurait donné un autre intervalle. Le « 95 % » porte sur la méthode, pas sur un intervalle en particulier."
  },
  {
    id: "U41-039", epreuve: "U41", theme: "Estimation et tests", session: "2017",
    difficulte: "difficile",
    question: "Test bilatéral à 5 % : H0 « le diamètre moyen vaut 14 mm ». Sous H0, la moyenne d'un échantillon de 100 lentilles suit une loi normale de moyenne 14 et d'écart type 0,05. Un échantillon donne 14,12 mm. Conclusion ?",
    choix: ["On ne rejette pas H0, car 14,12 est proche de 14", "On rejette H0, car 14,12 est dans la région de rejet", "On rejette H0, car 14,12 est supérieur à 14", "On ne peut pas conclure sans l'écart type de la population"],
    bonne: 1,
    explication: "Règle de décision : on rejette H0 si la moyenne observée sort de 14 ± 1,96 × 0,05 = 14 ± 0,098, soit environ [13,90 ; 14,10]. La moyenne observée 14,12 est en dehors, donc dans la région de rejet : on rejette H0 au seuil de 5 %, il faut régler la machine. Piège : dépasser 14 ne suffit pas, il faut sortir de la zone.",
    indice: "Calcule la zone 14 ± 1,96 × 0,05, puis regarde si la moyenne observée tombe dedans ou dans la région de rejet.",
    schema: "img/schemas/U41/test-bilateral-region-rejet.svg",
    schemaTexte: "Loi de la moyenne sous H0 : on ne rejette pas H0 entre 13,90 et 14,10 ; la région de rejet (2,5 % de chaque côté) est en rouge, et 14,12 tombe dedans."
  },

  // ---------- Division harmonique (programme du CCF) ----------
  {
    id: "U41-040", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "difficile",
    question: "Sur une droite graduée : A(0), B(6), C(2). Quelle est l'abscisse de D pour que (A, B ; C, D) soit une division harmonique, c'est-à-dire CA/CB = −DA/DB ?",
    choix: ["−6", "4", "12", "−2"],
    bonne: 0,
    explication: "CA/CB = (0 − 2)/(6 − 2) = −0,5. Il faut donc DA/DB = +0,5 : (0 − d)/(6 − d) = 0,5 ⟺ −d = 3 − 0,5d ⟺ d = −6. Vérification avec Newton (I milieu de [AB], abscisse 3) : IA² = 9 et IC × ID = (2 − 3)(−6 − 3) = 9 ✓.",
    indice: "Calcule d'abord CA/CB, puis cherche d pour que DA/DB soit son opposé. Contrôle avec Newton : IA² = IC × ID.",
    schema: "img/schemas/U41/division-harmonique-d-moins-6.svg",
    schemaTexte: "Axe gradué avec D(−6), A(0), C(2), I(3) et B(6) : CA/CB = −0,5 et DA/DB = +0,5 ; relation de Newton IA² = 9 = IC × ID = (−1) × (−9)."
  },
  {
    id: "U41-041", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    question: "(A, B ; C, D) est une division harmonique et I est le milieu de [AB]. On a IA = 5 cm et IC = 2 cm (C entre I et B, D du même côté). Que vaut ID ? (relation de Newton : IA² = IC × ID)",
    choix: ["2,5 cm", "10 cm", "12,5 cm", "25 cm"],
    bonne: 2,
    explication: "Relation de Newton : IA² = IC × ID, donc ID = IA² / IC = 25 / 2 = 12,5 cm. C est à l'intérieur de [AB] et D à l'extérieur, du même côté de I. On retrouve l'idée de la relation de Newton en optique : un produit de deux distances égal à un carré.",
    indice: "Isole ID dans la relation de Newton : divise IA² par IC."
  },

  // ---------- Mini-cas en cascade (CAS-U41-01) ----------
  {
    id: "U41-042", epreuve: "U41", theme: "Statistique", session: "2022 et 2023",
    difficulte: "moyen",
    cas: "CAS-U41-01",
    etape: 1,
    question: "Le nuage (t ; N) n'est pas aligné. On pose z = ln(50 − N) : la calculatrice donne r ≈ −0,999 et la droite z ≈ −0,30t + 3,68. Quelle expression de N en déduit-on ? (e^3,68 ≈ 40)",
    choix: ["N ≈ 50 − 40 e^(−0,3t)", "N ≈ 40 − 50 e^(−0,3t)", "N ≈ 50 + 40 e^(−0,3t)", "N ≈ 50 − 3,68 e^(−0,3t)"],
    bonne: 0,
    explication: "ln(50 − N) = −0,30t + 3,68, donc 50 − N = e^(−0,3t + 3,68) = e^3,68 × e^(−0,3t) ≈ 40 e^(−0,3t). On isole N : N ≈ 50 − 40 e^(−0,3t). Contrôle avec le tableau : pour t = 0, on trouve 50 − 40 = 10 ✓.",
    indice: "Applique l'exponentielle des deux côtés pour faire disparaître ln, puis isole N. N'oublie pas que e^(a + b) = e^a × e^b."
  },
  {
    id: "U41-043", epreuve: "U41", theme: "Équations différentielles", session: "2017 et 2023",
    difficulte: "facile",
    cas: "CAS-U41-01",
    etape: 2,
    contexte: "On modélise maintenant les ventes par une fonction y, solution de l'équation différentielle (E) : y' + 0,3y = 15.",
    question: "Quelle est la solution constante de (E) ?",
    choix: ["y = 50", "y = 15", "y = 4,5", "y = 45"],
    bonne: 0,
    explication: "Une constante c a une dérivée nulle : 0 + 0,3c = 15, donc c = 15 / 0,3 = 50. On retrouve le 50 du changement de variable : c'est le plafond des ventes.",
    indice: "Une fonction constante a une dérivée nulle : remplace y' par 0 et y par c, puis divise."
  },
  {
    id: "U41-044", epreuve: "U41", theme: "Équations différentielles", session: "2018 et 2023",
    difficulte: "moyen",
    cas: "CAS-U41-01",
    etape: 3,
    contexte: "Les solutions de (E) sont les fonctions y = k e^(−0,3t) + 50. Le premier mois, le magasin a vendu 10 dizaines de montures.",
    question: "Quelle est la fonction f, solution de (E), qui vérifie f(0) = 10 ?",
    choix: ["f(t) = 50 − 40 e^(−0,3t)", "f(t) = 50 + 10 e^(−0,3t)", "f(t) = 10 + 50 e^(−0,3t)", "f(t) = 50 − 10 e^(−0,3t)"],
    bonne: 0,
    explication: "f(0) = k × e⁰ + 50 = k + 50. On veut f(0) = 10, donc k = 10 − 50 = −40. D'où f(t) = 50 − 40 e^(−0,3t) : c'est bien l'expression trouvée par le changement de variable.",
    indice: "Remplace t par 0 dans k e^(−0,3t) + 50 (e⁰ = 1), puis écris que le résultat vaut 10 pour trouver k."
  },
  {
    id: "U41-045", epreuve: "U41", theme: "Fonctions", session: "2017 et 2022",
    difficulte: "moyen",
    cas: "CAS-U41-01",
    etape: 4,
    question: "f(t) = 50 − 40 e^(−0,3t). Quelle est la dérivée de f et le sens de variation de f sur [0 ; +∞[ ?",
    choix: ["f'(t) = 12 e^(−0,3t) > 0 : f est croissante", "f'(t) = −12 e^(−0,3t) < 0 : f est décroissante", "f'(t) = 12 e^(−0,3t) : f est décroissante", "f'(t) = −40 e^(−0,3t) : f est décroissante"],
    bonne: 0,
    explication: "La dérivée de 50 est 0. (−40 e^(−0,3t))' = −40 × (−0,3) e^(−0,3t) = 12 e^(−0,3t). Une exponentielle est toujours positive, donc f'(t) > 0 et f est croissante : les ventes augmentent chaque mois.",
    indice: "La dérivée de C e^(kt) est C × k × e^(kt). Attention au produit de deux nombres négatifs, puis étudie le signe."
  },
  {
    id: "U41-046", epreuve: "U41", theme: "Fonctions", session: "2022 et 2023",
    difficulte: "difficile",
    cas: "CAS-U41-01",
    etape: 5,
    contexte: "Rappel : N est exprimé en dizaines de montures vendues par mois.",
    question: "Quelle est la limite de f en +∞, et que signifie-t-elle pour le magasin ?",
    choix: ["Les ventes mensuelles se rapprochent de 500 montures sans jamais les dépasser", "Les ventes mensuelles se rapprochent de 50 montures", "Les ventes mensuelles augmentent sans limite", "Les ventes mensuelles retombent vers 100 montures"],
    bonne: 0,
    explication: "Quand t → +∞, e^(−0,3t) → 0, donc f(t) → 50 : la droite y = 50 est asymptote. Comme 40 e^(−0,3t) > 0, f(t) reste en dessous de 50. N est en dizaines : les ventes se rapprochent de 50 × 10 = 500 montures par mois sans les dépasser. Piège : répondre 50 montures en oubliant l'unité.",
    indice: "Cherche vers quoi tend e^(−0,3t), puis relis l'unité de N avant de conclure : la réponse doit être en montures."
  },
  {
    id: "U41-047", epreuve: "U41", theme: "Lois de probabilité", session: "2016 et 2017 et 2018",
    difficulte: "moyen",
    contexte: "Un stock contient 2 % de lentilles défectueuses. On prélève 50 lentilles au hasard, le stock est assez grand pour assimiler ce prélèvement à un tirage avec remise. X est le nombre de lentilles défectueuses.",
    question: "Quelle justification est juste pour affirmer que X suit une loi binomiale ?",
    choix: ["On répète 50 fois, de façon identique et indépendante, une épreuve à deux issues (défectueuse ou non) de probabilité 0,02 ; X compte les lentilles défectueuses, donc X suit la loi binomiale B(50 ; 0,02).", "On répète 50 fois une épreuve à deux issues de probabilité 0,02, donc X suit une loi normale.", "X suit une loi binomiale, car c'est un nombre de lentilles prélevées au hasard.", "Les 50 prélèvements sont identiques et indépendants, et chacun a deux issues de probabilité 0,02."],
    bonne: 0,
    explication: "Une justification complète donne les trois conditions (épreuves identiques, indépendantes, à deux issues), le paramètre p, ce que compte X, et conclut avec la loi et ses paramètres B(50 ; 0,02). La 2e conclut sur la mauvaise loi, la 3e n'a aucun argument, la 4e oublie la conclusion.",
    indice: "Une justification complète a deux parties : les conditions (combien d'épreuves, comment, quelles issues, quelle probabilité), puis une conclusion avec le nom de la loi et ses paramètres."
  },
  {
    id: "U41-048", epreuve: "U41", theme: "Estimation et tests", session: "2017 et 2018",
    difficulte: "moyen",
    contexte: "Test bilatéral au seuil de 5 % : H0 « le diamètre moyen vaut 14 mm ». Sous H0, la moyenne d'un échantillon de 100 lentilles suit une loi normale de moyenne 14 et d'écart type 0,05, et P(13,90 ≤ moyenne ≤ 14,10) ≈ 0,95.",
    question: "Quelle est la règle de décision correctement énoncée ?",
    choix: ["Si la moyenne de l'échantillon est comprise entre 13,90 et 14,10, on ne rejette pas H0 ; sinon, on rejette H0 au seuil de 5 %.", "Si la moyenne de l'échantillon vaut exactement 14, on accepte H0 ; sinon, on la rejette.", "On rejette H0 si la moyenne de l'échantillon est trop éloignée de 14.", "La région de rejet est formée des moyennes inférieures à 13,90 ou supérieures à 14,10."],
    bonne: 0,
    explication: "La règle de décision dit quoi conclure dans chaque cas, avec les bornes chiffrées et le seuil. La 2e est fausse (une moyenne d'échantillon ne vaut presque jamais exactement 14), la 3e ne donne pas les bornes, la 4e décrit la région de rejet sans dire ce qu'on décide.",
    indice: "Une règle de décision commence par « Si… » : elle donne les bornes chiffrées, puis dit ce qu'on décide dans chacun des deux cas."
  },
  {
    id: "U41-049", epreuve: "U41", theme: "Statistique", session: "2018 et 2023",
    difficulte: "facile",
    contexte: "Après le changement de variable z = ln(y − 20), la calculatrice donne r ≈ −0,995 pour la série (x ; z).",
    question: "Quelle justification est juste pour dire si un ajustement affine de z en x est pertinent ?",
    choix: ["|r| ≈ 0,995 est très proche de 1 : les points (x ; z) sont presque alignés, donc un ajustement affine de z en x est pertinent.", "r est négatif, donc un ajustement affine de z en x n'est pas pertinent.", "Un ajustement affine de z en x est pertinent.", "|r| ≈ 0,995 est très proche de 1."],
    bonne: 0,
    explication: "On s'appuie sur |r|, pas sur son signe, puis on conclut. La 2e est fausse (un r négatif veut seulement dire que z diminue), la 3e affirme sans argument, la 4e donne l'argument sans conclure.",
    indice: "Une bonne justification a un argument chiffré, ce qu'il signifie pour le nuage, et une conclusion. Regarde la valeur absolue de r, pas son signe."
  },
  {
    id: "U41-050", epreuve: "U41", theme: "Estimation et tests", session: "2016 et 2022",
    difficulte: "moyen",
    contexte: "Sur un échantillon de 100 porteurs de lentilles, on a obtenu l'intervalle de confiance à 95 % : [0,722 ; 0,878].",
    question: "On demande : « La proportion p de clients satisfaits appartient-elle de façon certaine à cet intervalle ? Justifier. » Quelle réponse est juste et complète ?",
    choix: ["Non : la méthode donne un intervalle qui contient p pour environ 95 % des échantillons. Pour cet échantillon, on ne peut donc pas être certain que p soit dans [0,722 ; 0,878].", "Oui, car l'intervalle a été calculé avec un niveau de confiance de 95 %.", "Non, ce n'est pas certain.", "La méthode donne un intervalle qui contient p pour environ 95 % des échantillons."],
    bonne: 0,
    explication: "La réponse complète dit « non », donne la raison (la méthode échoue pour environ 5 % des échantillons) et conclut pour cet intervalle-là. La 2e est fausse, la 3e n'a pas d'argument, la 4e donne l'argument sans répondre à la question.",
    indice: "Réponds d'abord par oui ou par non, puis explique sur quoi porte le « 95 % » : sur la méthode, pas sur un intervalle en particulier."
  },

  // ---------- Calculs à taper (calculatrice) ----------
  {
    id: "U41-051", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "facile",
    contexte: "5 % des montures d'un lot ont un défaut. On en prélève 40 au hasard, ce qu'on assimile à un tirage avec remise. X est le nombre de montures avec un défaut.",
    question: "À la calculatrice, calcule P(X = 3).",
    reponse: {"valeur": 0.185, "unite": "", "decimales": 3, "signe": true},
    explication: "X suit la loi binomiale B(40 ; 0,05). À la calculatrice (probabilité binomiale en un point) : P(X = 3) ≈ 0,18511, soit 0,185 arrondi à 10⁻³.",
    indice: "Repère n et p, puis utilise la probabilité binomiale « en un point » (X = k), pas la cumulée."
  },
  {
    id: "U41-052", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "facile",
    contexte: "Le temps X (en minutes) d'un ajustement de monture suit la loi normale de moyenne 50 et d'écart type 4.",
    question: "À la calculatrice, calcule P(45 ≤ X ≤ 55).",
    reponse: {"valeur": 0.789, "unite": "", "decimales": 3, "signe": true},
    explication: "Loi normale cumulée entre 45 et 55, avec μ = 50 et σ = 4 : P(45 ≤ X ≤ 55) ≈ 0,7887, soit 0,789 arrondi à 10⁻³.",
    indice: "Utilise la loi normale entre deux bornes : borne basse 45, borne haute 55, puis μ et σ (l'écart type, pas la variance)."
  },
  {
    id: "U41-053", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Le temps X (en minutes) d'un ajustement de monture suit la loi normale de moyenne 50 et d'écart type 4.",
    question: "À la calculatrice, trouve la durée t telle que P(X ≤ t) = 0,95.",
    reponse: {"valeur": 56.58, "unite": "min", "decimales": 2, "signe": true},
    explication: "On cherche la valeur inverse de la loi normale pour une aire de 0,95 à gauche, avec μ = 50 et σ = 4 : t ≈ 56,579, soit 56,58 min. 95 % des ajustements durent moins de 56,58 minutes.",
    indice: "C'est l'opération inverse : tu connais la probabilité (aire à gauche) et tu cherches la borne. Utilise la fonction inverse de la loi normale."
  },
  {
    id: "U41-054", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Le temps d'attente T (en minutes) au comptoir suit la loi exponentielle de paramètre λ = 0,2.",
    question: "Calcule P(3 ≤ T ≤ 6).",
    reponse: {"valeur": 0.248, "unite": "", "decimales": 3, "signe": true},
    explication: "P(3 ≤ T ≤ 6) = P(T ≤ 6) − P(T ≤ 3) = (1 − e^(−1,2)) − (1 − e^(−0,6)) = e^(−0,6) − e^(−1,2) ≈ 0,5488 − 0,3012 = 0,2476, soit 0,248.",
    indice: "P(a ≤ T ≤ b) = P(T ≤ b) − P(T ≤ a), avec P(T ≤ t) = 1 − e^(−λt)."
  },
  {
    id: "U41-055", epreuve: "U41", theme: "Suites", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "u0 = 200 et, pour tout n, u(n+1) = 0,9 u(n) + 40.",
    question: "Avec le tableau de valeurs de la calculatrice, trouve le premier rang n tel que u(n) > 350.",
    reponse: {"valeur": 14, "unite": "", "decimales": 0, "signe": true},
    explication: "Le tableau donne u13 ≈ 349,2 (encore ≤ 350) et u14 ≈ 354,2 (> 350). Le premier rang est donc n = 14.",
    indice: "Entre la suite récurrente avec son premier terme u0 = 200, puis parcours le tableau jusqu'au premier terme qui dépasse 350. Attention au rang de départ (n = 0)."
  },
  {
    id: "U41-056", epreuve: "U41", theme: "Statistique", session: "complément", type: "calcul",
    difficulte: "facile",
    contexte: "Après le changement de variable z = ln(y − 20), on obtient le tableau ci-dessous.",
    annexe: {"titre": "Série (x ; z)", "colonnes": ["x", "0", "1", "2", "3", "4", "5"], "lignes": [["z", "4,38", "4,11", "3,75", "3,52", "3,18", "2,93"]]},
    question: "À la calculatrice, donne le coefficient a de la droite de régression de z en x (z = ax + b), arrondi à 10⁻².",
    reponse: {"valeur": -0.29, "unite": "", "decimales": 2, "signe": true},
    explication: "Régression linéaire de z en x (moindres carrés) : a ≈ −0,2934 et b ≈ 4,3786, avec r ≈ −0,999. Arrondi à 10⁻² : a = −0,29. Le signe − indique que z diminue quand x augmente.",
    indice: "Saisis x et z dans deux listes, puis lance la régression linéaire de type ax + b. Garde le signe de a."
  },
  {
    id: "U41-057", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Les ventes journalières d'un modèle de verre sont modélisées par f(x) = 40 − 8 e^(−0,5x) sur [0 ; 5].",
    question: "À la calculatrice, calcule la valeur moyenne de f sur [0 ; 5], arrondie à 10⁻².",
    reponse: {"valeur": 37.06, "unite": "", "decimales": 2, "signe": true},
    explication: "Valeur moyenne = [[1|5 − 0]] × ∫ de 0 à 5 de f(t) dt\nLa calculatrice donne l'intégrale ≈ 185,313.\nValeur moyenne = [[185,313|5]] ≈ 37,063, soit 37,06.\nÀ la main : l'intégrale vaut 40 × 5 − 16 (1 − e^(−2,5)) ≈ 185,31.",
    indice: "Calcule d'abord l'intégrale entre 0 et 5 à la calculatrice, puis n'oublie pas de diviser par la longueur de l'intervalle."
  }

);

// ---------- Mini-cas ----------
CAS.push({
  id: "CAS-U41-01",
  epreuve: "U41",
  titre: "Les ventes d'une nouvelle monture",
  contexte: "Un magasin d'optique lance un nouveau modèle de monture. N est le nombre de montures vendues pendant le mois de rang t (t = 0 pour le premier mois), exprimé en dizaines. Les ventes montent vite au début, puis ralentissent.",
  annexe: { titre: "Ventes relevées", colonnes: ["Mois t", "0", "1", "2", "3", "4", "5"], lignes: [["N (dizaines)", "10,0", "21,3", "27,2", "34,1", "37,6", "41,2"]] }
});
