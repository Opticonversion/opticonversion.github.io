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
    choix: ["Ajustement affine non pertinent, car r est négatif", "Ajustement affine pertinent, car |r| est très proche de 1", "Impossible à dire sans tracer d'abord le nuage de points et la droite", "Ajustement pertinent, car y est proportionnel à x d'après l'énoncé"],
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
    choix: ["Les ventes mensuelles se rapprochent de 500 montures sans jamais les dépasser", "Les ventes mensuelles se rapprochent de 50 montures en restant en dessous de ce seuil", "Les ventes mensuelles augmentent sans limite et finissent par dépasser 500 montures", "Les ventes mensuelles retombent progressivement vers 100 montures par mois"],
    bonne: 0,
    explication: "Quand t → +∞, e^(−0,3t) → 0, donc f(t) → 50 : la droite y = 50 est asymptote. Comme 40 e^(−0,3t) > 0, f(t) reste en dessous de 50. N est en dizaines : les ventes se rapprochent de 50 × 10 = 500 montures par mois sans les dépasser. Piège : répondre 50 montures en oubliant l'unité.",
    indice: "Cherche vers quoi tend e^(−0,3t), puis relis l'unité de N avant de conclure : la réponse doit être en montures."
  },
  {
    id: "U41-047", epreuve: "U41", theme: "Lois de probabilité", session: "2016 et 2017 et 2018",
    difficulte: "moyen",
    contexte: "Un stock contient 2 % de lentilles défectueuses. On prélève 50 lentilles au hasard, le stock est assez grand pour assimiler ce prélèvement à un tirage avec remise. X est le nombre de lentilles défectueuses.",
    question: "Quelle justification est juste pour affirmer que X suit une loi binomiale ?",
    choix: ["On répète 50 fois, de façon identique et indépendante, une épreuve à deux issues de probabilité 0,02 ; X compte les succès, donc X suit B(50 ; 0,02).", "On répète 50 fois une épreuve à deux issues (défectueuse ou non) de probabilité 0,02, donc X suit une loi normale d'espérance 1.", "X suit une loi binomiale, car c'est un nombre de lentilles prélevées au hasard, sans qu'il faille vérifier l'indépendance des prélèvements.", "Les 50 prélèvements sont identiques et indépendants, et chacun a deux issues de probabilité 0,02."],
    bonne: 0,
    explication: "Une justification complète donne les trois conditions (épreuves identiques, indépendantes, à deux issues), le paramètre p, ce que compte X, et conclut avec la loi et ses paramètres B(50 ; 0,02). La 2e conclut sur la mauvaise loi, la 3e n'a aucun argument, la 4e oublie la conclusion.",
    indice: "Une justification complète a deux parties : les conditions (combien d'épreuves, comment, quelles issues, quelle probabilité), puis une conclusion avec le nom de la loi et ses paramètres."
  },
  {
    id: "U41-048", epreuve: "U41", theme: "Estimation et tests", session: "2017 et 2018",
    difficulte: "moyen",
    contexte: "Test bilatéral au seuil de 5 % : H0 « le diamètre moyen vaut 14 mm ». Sous H0, la moyenne d'un échantillon de 100 lentilles suit une loi normale de moyenne 14 et d'écart type 0,05, et P(13,90 ≤ moyenne ≤ 14,10) ≈ 0,95.",
    question: "Quelle est la règle de décision correctement énoncée ?",
    choix: ["Si la moyenne est comprise entre 13,90 et 14,10, on ne rejette pas H0 ; sinon, on rejette H0 au seuil de 5 %.", "Si la moyenne de l'échantillon vaut exactement 14, on accepte H0 ; sinon, on la rejette, quelle que soit la taille de l'écart.", "On rejette H0 si la moyenne de l'échantillon est trop éloignée de 14, sans préciser de seuil de risque.", "La région de rejet est formée des moyennes inférieures à 13,90 ou supérieures à 14,10."],
    bonne: 0,
    explication: "La règle de décision dit quoi conclure dans chaque cas, avec les bornes chiffrées et le seuil. La 2e est fausse (une moyenne d'échantillon ne vaut presque jamais exactement 14), la 3e ne donne pas les bornes, la 4e décrit la région de rejet sans dire ce qu'on décide.",
    indice: "Une règle de décision commence par « Si… » : elle donne les bornes chiffrées, puis dit ce qu'on décide dans chacun des deux cas."
  },
  {
    id: "U41-049", epreuve: "U41", theme: "Statistique", session: "2018 et 2023",
    difficulte: "facile",
    contexte: "Après le changement de variable z = ln(y − 20), la calculatrice donne r ≈ −0,995 pour la série (x ; z).",
    question: "Quelle justification est juste pour dire si un ajustement affine de z en x est pertinent ?",
    choix: ["|r| ≈ 0,995 est très proche de 1 : les points (x ; z) sont presque alignés, donc un ajustement affine est pertinent.", "r est négatif, donc un ajustement affine de z en x n'est pas pertinent, quelle que soit sa valeur absolue.", "Un ajustement affine de z en x est pertinent, car les points forment un nuage régulier.", "|r| ≈ 0,995 est très proche de 1, ce qui est une bonne valeur."],
    bonne: 0,
    explication: "On s'appuie sur |r|, pas sur son signe, puis on conclut. La 2e est fausse (un r négatif veut seulement dire que z diminue), la 3e affirme sans argument, la 4e donne l'argument sans conclure.",
    indice: "Une bonne justification a un argument chiffré, ce qu'il signifie pour le nuage, et une conclusion. Regarde la valeur absolue de r, pas son signe."
  },
  {
    id: "U41-050", epreuve: "U41", theme: "Estimation et tests", session: "2016 et 2022",
    difficulte: "moyen",
    contexte: "Sur un échantillon de 100 porteurs de lentilles, on a obtenu l'intervalle de confiance à 95 % : [0,722 ; 0,878].",
    question: "On demande : « La proportion p de clients satisfaits appartient-elle de façon certaine à cet intervalle ? Justifier. » Quelle réponse est juste et complète ?",
    choix: ["Non : la méthode contient p pour environ 95 % des échantillons, donc pour celui-ci on n'en est pas certain.", "Oui, car l'intervalle a été calculé avec un niveau de confiance de 95 %, ce qui garantit que p y est.", "Non, ce n'est pas certain, car l'échantillon est trop petit.", "La méthode donne un intervalle qui contient p pour environ 95 % des échantillons, ce qui répond en partie à la question."],
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
    erreurs: [
      { valeur: 13, type: "notion", message: "u13 ≈ 349,2 ne dépasse pas encore 350. On cherche le premier rang où u(n) est strictement plus grand que 350." },
      { valeur: 15, type: "notion", message: "Ton tableau commence sans doute à n = 1. Ici le premier terme est u0 : règle le rang de départ à 0." }
    ],
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
    erreurs: [
      { valeur: 4.38, type: "notion", message: "4,38 est l'ordonnée à l'origine b. Le coefficient a est la pente : celui qui multiplie x." },
      { valeur: -3.4, type: "notion", message: "Tu as fait la régression de x en z. On veut z en x : x dans la première liste, z dans la seconde." }
    ],
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
  },
  {
    id: "U41-133", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "difficile",
    contexte: "Test bilatéral à 5 % de H0 « la masse moyenne d'une monture est 150 mg ». Sous H0, la moyenne d'un échantillon suit la loi normale d'espérance 150 et d'écart type 2. On observe une moyenne de 154,6 mg.",
    question: "Quelle est la conclusion correctement rédigée ?",
    choix: ["La zone d'acceptation est 150 ± 1,96 × 2, soit [146,08 ; 153,92]. 154,6 n'y est pas : au seuil de 5 %, on rejette H0 et on considère que la masse moyenne n'est plus 150 mg.", "La zone d'acceptation est 150 ± 1,96 × 2, soit [146,08 ; 153,92]. 154,6 n'y est pas, donc on accepte H0 : la masse moyenne reste 150 mg.", "La zone d'acceptation est 150 ± 1,96 × 2, soit [146,08 ; 153,92]. 154,6 n'y est pas : H0 est donc fausse à coup sûr, la masse moyenne est certainement différente de 150 mg.", "La zone d'acceptation est 150 ± 2, soit [148 ; 152] (le coefficient 1,96 est oublié). 154,6 n'y est pas : on rejette H0 au seuil de 5 %."],
    bonne: 0,
    explication: "Une conclusion complète donne la zone d'acceptation (150 ± 1,96 × 2), compare la valeur observée à cette zone, puis décide avec le seuil. Accepter H0 alors qu'on sort de la zone est contradictoire. Écrire « à coup sûr » est faux : un test garde un risque de 5 %. Oublier 1,96 donne une zone trop étroite : la décision tombe juste, mais par hasard et avec une zone fausse.",
    indice: "Une bonne conclusion a trois parties : la zone chiffrée, la comparaison avec la valeur observée, la décision avec le seuil."
  },
  {
    id: "U41-134", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "difficile",
    contexte: "Sur 400 clients interrogés, 140 se disent prêts à recommander le magasin (f = 0,35). L'intervalle de confiance à 95 % est [0,303 ; 0,397].",
    question: "Quelle phrase interprète correctement cet intervalle ?",
    choix: ["Au niveau de confiance de 95 %, la proportion p est sûrement comprise entre 0,303 et 0,397 : on en est certain.", "Parmi les 400 clients interrogés, 95 % ont une proportion de satisfaction comprise entre 0,303 et 0,397, le niveau de confiance étant de 95 %.", "L'intervalle [0,303 ; 0,397] est centré sur f = 0,35 : cela prouve que la proportion p de toute la clientèle vaut exactement 0,35.", "Au niveau de confiance de 95 %, on estime que la proportion p de clients prêts à recommander le magasin est comprise entre 0,303 et 0,397, sans en avoir la certitude."],
    bonne: 3,
    explication: "Un intervalle de confiance donne une estimation de p avec un niveau de confiance, jamais une certitude : l'échantillon aurait pu donner un autre intervalle. Dire « sûrement » ou « certain » est faux. Parler de « 95 % des clients » confond la proportion p (un seul nombre pour toute la clientèle) avec des clients individuels. Dire que l'intervalle prouve p = 0,35 confond estimation et preuve : 0,35 est seulement la valeur observée dans l'échantillon.",
    indice: "Que peut-on affirmer d'une estimation faite sur un échantillon ? Pense à l'expression « niveau de confiance ». Une certitude est-elle possible ?"
  },
  {
    id: "U41-135", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    contexte: "On étudie f(t) = 30 + 50 e^(−0,2t) sur [0 ; +∞[. On a calculé f'(t) = −10 e^(−0,2t).",
    question: "Quelle rédaction justifie correctement le sens de variation de f ?",
    choix: ["On a f'(t) = −10 e^(−0,2t). Cette dérivée est négative, donc f est décroissante sur [0 ; +∞[.", "f(0) = 80 et f(10) ≈ 36,8 : f diminue entre ces deux valeurs, donc f est strictement décroissante sur [0 ; +∞[.", "Pour tout t ≥ 0, e^(−0,2t) > 0, donc f'(t) = −10 e^(−0,2t) < 0. La dérivée est strictement négative : f est strictement décroissante sur [0 ; +∞[.", "f'(t) = −10 e^(−0,2t). Comme e^(−0,2t) tend vers 0 quand t tend vers +∞, f' tend vers 0, donc f est décroissante sur [0 ; +∞[."],
    bonne: 2,
    explication: "Il faut justifier le signe de f' (une exponentielle est strictement positive, donc −10 fois elle est négatif), puis conclure sur le sens de variation. Affirmer « cette dérivée est négative » sans dire pourquoi ne suffit pas. Comparer f(0) et f(10) ne prouve pas la variation sur tout l'intervalle. La limite de f' vers 0 ne donne pas son signe.",
    indice: "Deux étapes : pourquoi la dérivée est négative (signe de e^(…)), puis ce que cela donne pour f."
  },
  {
    id: "U41-136", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    contexte: "On étudie f(t) = 30 + 50 e^(−0,2t) sur [0 ; +∞[.",
    question: "Quelle rédaction détermine correctement la limite de f en +∞ et son interprétation graphique ?",
    choix: ["Comme −0,2 < 0, e^(−0,2t) tend vers +∞ quand t tend vers +∞, donc lim f(t) = +∞ : la courbe n'a pas d'asymptote.", "Comme −0,2 < 0, e^(−0,2t) tend vers 0 quand t tend vers +∞. Donc lim f(t) = 30, et la droite d'équation y = 30 est asymptote horizontale à la courbe en +∞.", "e^(−0,2t) tend vers 0, donc lim f(t) = 30. La courbe finit par atteindre la droite y = 30, qui est asymptote horizontale en +∞.", "e^(−0,2t) tend vers 0, donc lim f(t) = 30 et la droite d'équation x = 30 est asymptote verticale à la courbe."],
    bonne: 1,
    explication: "On justifie d'abord la limite de l'exponentielle (le coefficient −0,2 est négatif), on en déduit la limite de f, puis on interprète : une limite finie ℓ en +∞ donne une asymptote horizontale y = ℓ. Dire que l'exponentielle tend vers +∞ se trompe sur le signe de l'exposant. Dire que la courbe atteint la droite est faux : elle s'en rapproche sans la toucher. Écrire x = 30 confond asymptote verticale et horizontale (y = 30).",
    indice: "Trois temps : la limite de l'exponentielle, la limite de f, puis l'interprétation (asymptote horizontale ou verticale ?)."
  },
  {
    id: "U41-137", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "difficile",
    contexte: "On a u(n+1) = 0,8 u(n) + 60 et v(n) = u(n) − 300 pour tout entier n.",
    question: "Quelle rédaction démontre correctement que la suite (v(n)) est géométrique ?",
    choix: ["v(n+1) = u(n+1) − 300 = 0,8 u(n) + 60 − 300 = 0,8 u(n) − 240 = 0,8 (u(n) − 300) = 0,8 v(n). Donc (v(n)) est géométrique de raison 0,8.", "v(0) = u(0) − 300 = −200 et v(1) = u(1) − 300 = −160. Le rapport v(1) ÷ v(0) vaut 0,8 : la suite (v(n)) est donc géométrique de raison 0,8.", "v(n+1) = u(n+1) − 300 = 0,8 u(n) + 60 − 300 = 0,8 u(n) − 240. Comme 0,8 est le coefficient de u(n), (v(n)) est géométrique de raison 0,8.", "v(n+1) = u(n+1) − 300 = 0,8 u(n) + 60 − 300 = 0,8 (u(n) − 300) + 60 = 0,8 v(n) + 60 : (v(n)) est géométrique de raison 0,8."],
    bonne: 0,
    explication: "Pour montrer qu'une suite est géométrique, on exprime v(n+1) à partir de v(n) pour un n quelconque, et on trouve v(n+1) = q × v(n). Vérifier seulement v(0) et v(1) ne prouve rien pour tous les n. Écrire 0,8 u(n) − 240 sans le factoriser par u(n) − 300 ne fait pas apparaître v(n). Garder un +60 donne v(n+1) = 0,8 v(n) + 60, qui n'est pas de la forme q × v(n).",
    indice: "Il faut une preuve valable pour tout n : pars de v(n+1) = u(n+1) − 300 et remplace u(n+1)."
  },
  {
    id: "U41-138", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "30 % des verres vendus sont teintés (T). 80 % des verres teintés ont un traitement anti-UV (U), contre 50 % des verres non teintés.",
    question: "Quelle rédaction calcule correctement P(U) ?",
    choix: ["T et son contraire forment une partition. P(U) = P(T ∩ U) = 0,3 × 0,8 = 0,24, car on ne garde que la branche des verres teintés qui ont un anti-UV.", "T et son contraire forment une partition. P(U) = (0,8 + 0,5) / 2 = 0,65, en faisant la moyenne des taux d'anti-UV des deux branches.", "T et son contraire forment une partition. P(U) = 0,3 × 0,8 × 0,7 × 0,5 = 0,084, en multipliant toutes les probabilités de l'arbre.", "T et son contraire forment une partition de l'univers. D'après la formule des probabilités totales, P(U) = P(T ∩ U) + P(non T ∩ U) = 0,3 × 0,8 + 0,7 × 0,5 = 0,59."],
    bonne: 3,
    explication: "Un verre avec anti-UV peut être teinté ou non teinté : on additionne les deux branches, chacune étant un produit le long du chemin. Ne garder que les verres teintés oublie une branche. Faire la moyenne simple des deux taux ignore le poids de chaque catégorie (30 % et 70 %). Multiplier toutes les branches mélange des chemins qui s'excluent.",
    indice: "Un chemin de l'arbre se multiplie. Plusieurs chemins qui mènent au même résultat s'additionnent."
  },
  {
    id: "U41-139", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "X suit la loi binomiale B(900 ; 0,2). On veut calculer des probabilités sur X avec une loi normale.",
    question: "Quelle rédaction justifie correctement l'approximation ?",
    choix: ["n = 900 ≥ 30 et np = 180 ≥ 5 : les conditions sont remplies. On approche X par la loi normale d'espérance 180 et d'écart type 144.", "n = 900 ≥ 30, np = 180 ≥ 5 et n(1 − p) = 720 ≥ 5 : les conditions sont remplies. On approche X par la loi normale d'espérance 0,2 et d'écart type 0,8.", "n = 900 ≥ 30, np = 180 ≥ 5 et n(1 − p) = 720 ≥ 5 : les conditions sont remplies. On approche X par la loi normale d'espérance 180 et d'écart type √(900 × 0,2 × 0,8) = 12.", "n = 900 est très grand, donc on approche directement X par la loi normale d'espérance 180 et d'écart type 12, sans autre vérification."],
    bonne: 2,
    explication: "Une bonne rédaction vérifie les conditions d'approximation, puis donne les deux paramètres : espérance np = 180 et écart type √(np(1 − p)) = 12. Les conditions n ≥ 30, np ≥ 5 et n(1 − p) ≥ 5 sont celles qu'on utilise d'habitude (le sujet les donne souvent). Oublier n(1 − p) et prendre la variance 144 pour l'écart type est une double erreur. Dire seulement « n est très grand » ne justifie rien. Donner 0,2 et 0,8 met p et 1 − p à la place de l'espérance et de l'écart type.",
    indice: "Deux temps : les conditions chiffrées sur n, np et n(1 − p), puis les paramètres μ = np et σ = √(np(1 − p))."
  },
  {
    id: "U41-140", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Un fournisseur affirme que 90 % de ses verres sont conformes. On soupçonne que la proportion p est en réalité plus basse et on teste ce soupçon sur un échantillon.",
    question: "Quelle rédaction pose correctement les hypothèses du test ?",
    choix: ["H0 : p < 0,9 (le fournisseur se trompe) ; H1 : p = 0,9. C'est un test unilatéral : on rejette H0 si la fréquence observée est trop basse.", "H0 : p = 0,9 (le fournisseur a raison) ; H1 : p < 0,9 (la proportion est plus basse). C'est un test unilatéral : on rejette H0 si la fréquence observée est trop basse.", "H0 : f = 0,9 ; H1 : f < 0,9, où f est la fréquence de l'échantillon. C'est un test unilatéral : on rejette H0 si f est trop basse.", "H0 : p ≠ 0,9 ; H1 : p = 0,9. C'est un test bilatéral : on rejette H0 si la fréquence observée s'écarte trop de 0,9."],
    bonne: 1,
    explication: "H0 est l'hypothèse de référence, celle qu'on teste : une valeur précise, p = 0,9. H1 est ce qu'on soupçonne : p < 0,9, d'où un test unilatéral. Mettre l'inégalité dans H0 inverse les rôles. Porter les hypothèses sur f, la fréquence de l'échantillon, est faux : elles portent sur p, la proportion de toute la production. Choisir « p ≠ 0,9 » dans H0 et un test bilatéral ne correspond pas au soupçon, qui est seulement une proportion plus basse.",
    indice: "H0 contient l'égalité. H1 est ce que tu soupçonnes. Les hypothèses portent sur la proportion de toute la production, pas sur l'échantillon."
  },

  // ---------- Mini-cas en cascade (CAS-U41-02) ----------
  {
    id: "U41-141", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    cas: "CAS-U41-02",
    etape: 1,
    question: "Le nuage (t ; y) descend vite puis se tasse vers une valeur proche de 5. On pose z = ln(y − 5). Pourquoi ce changement de variable est-il adapté ?",
    choix: ["Si y − 5 décroît comme une exponentielle, alors z = ln(y − 5) est une fonction affine de t : on peut ajuster z en t par une droite.", "Parce que le logarithme transforme tout nuage qui descend en une droite, quelle que soit la forme de la courbe : il suffit alors de faire la régression.", "Parce que y − 5 est négatif pour toutes les mesures, et que le logarithme permet de rendre ces valeurs positives avant la régression.", "Parce que la droite z = at + b donne ensuite y = at + b, ce qui permet de lire directement la vitesse de séchage sur la droite."],
    bonne: 0,
    explication: "Quand y − 5 = k e^(at), on a ln(y − 5) = ln k + at : z est affine en t. C'est ce qui rend l'ajustement par une droite possible. Le logarithme ne redresse pas n'importe quelle courbe. Ici y − 5 est positif (y vaut au moins 13 sur les mesures), et y n'est pas égal à at + b : il faut revenir de z à y avec l'exponentielle.",
    indice: "Que devient ln(k e^(at)) ? Cherche une expression de la forme (coefficient) × t + (constante)."
  },
  {
    id: "U41-142", epreuve: "U41", theme: "Statistique", session: "complément", type: "calcul",
    difficulte: "facile",
    cas: "CAS-U41-02",
    etape: 2,
    contexte: "On calcule z = ln(y − 5) pour chaque mesure.",
    annexe: {"titre": "Série (t ; z)", "colonnes": ["t", "0", "1", "2", "3", "4", "5"], "lignes": [["z", "4,09", "3,69", "3,30", "2,90", "2,49", "2,09"]]},
    question: "À la calculatrice, donne le coefficient a de la droite de régression de z en t (z = at + b), arrondi à 10⁻². Garde le signe.",
    reponse: {"valeur": -0.4, "unite": "", "decimales": 2, "signe": true},
    explication: "Régression linéaire de z en t (moindres carrés) : a ≈ −0,40 et b ≈ 4,09, avec r ≈ −1. Le signe − veut dire que z diminue quand t augmente : le verre sèche.",
    indice: "Saisis t et z dans deux listes, puis lance la régression linéaire de type ax + b. Garde le signe de a."
  },
  {
    id: "U41-143", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "difficile",
    cas: "CAS-U41-02",
    etape: 3,
    contexte: "On retient la modélisation y(t) = 5 + 60 e^(−0,4t) (car e^4,09 ≈ 60) et l'équation différentielle (E) : y' + 0,4y = 2.",
    question: "Quelle rédaction démontre correctement que y est solution de (E) ?",
    choix: ["y(0) = 5 + 60 = 65 et y(1) = 5 + 60 e^(−0,4) ≈ 45,2 : ces valeurs sont proches du tableau de mesures, donc y est solution de (E).", "y'(t) = 60 e^(−0,4t), donc y' + 0,4y = 60 e^(−0,4t) + 0,4 × (5 + 60 e^(−0,4t)) = 2 + 84 e^(−0,4t), ce qui est proche de 2 : y est solution de (E).", "y'(t) = 60 × (−0,4) e^(−0,4t) = −24 e^(−0,4t). Donc y' + 0,4y = −24 e^(−0,4t) + 2 + 24 e^(−0,4t) = 2 pour tout t : y vérifie (E).", "La solution constante de (E) est 2 ÷ 0,4 = 5. Comme y(t) tend vers 5 quand t tend vers +∞, la fonction y est donc solution de (E)."],
    bonne: 2,
    explication: "Pour montrer qu'une fonction est solution, on la dérive, on remplace dans l'équation et on trouve le second membre pour tout t. Ici, les termes en exponentielle se compensent et il reste 2. Comparer deux valeurs avec des mesures ne prouve rien. Une dérivée mal calculée (le facteur −0,4 oublié) laisse un reste en exponentielle : ce n'est pas 2. Avoir la bonne limite ne suffit pas non plus : beaucoup de fonctions tendent vers 5.",
    indice: "Dérive y, remplace y' et y dans y' + 0,4y, puis vérifie que tout ce qui dépend de t disparaît."
  },
  {
    id: "U41-144", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    cas: "CAS-U41-02",
    etape: 4,
    question: "Quelle rédaction donne correctement le sens de variation de y et sa limite en +∞ ?",
    choix: ["y'(t) = −24 e^(−0,4t) est négative, donc y est décroissante. Comme −0,4 < 0, on dit que e^(−0,4t) tend vers +∞ quand t tend vers +∞, donc y(t) tend vers +∞.", "y'(t) = −24 e^(−0,4t) < 0, car une exponentielle est strictement positive : y est décroissante. Comme −0,4 < 0, e^(−0,4t) tend vers 0, donc lim y(t) = 5.", "y(0) = 65 et y(5) ≈ 13,1 : y décroît sur [0 ; 5]. Comme e^(−0,4t) tend vers 0, lim y(t) = 0 : le verre finit par être totalement sec, sans humidité.", "y'(t) = −24 e^(−0,4t) < 0 : y est décroissante. La limite est 60, car c'est le coefficient devant l'exponentielle, et il ne change pas quand t grandit."],
    bonne: 1,
    explication: "Le signe de y' est justifié (une exponentielle est strictement positive), puis la limite : −0,4 < 0, donc e^(−0,4t) tend vers 0 et y tend vers 5. Avec un exposant négatif, l'exponentielle ne tend jamais vers +∞. Comparer deux valeurs ne donne pas le sens de variation sur tout l'intervalle, et il ne faut pas oublier la constante 5 dans la limite. Le coefficient 60 n'est pas la limite : c'est la valeur de y(0) − 5.",
    indice: "Deux temps : le signe de y' avec sa justification, puis la limite de l'exponentielle, sans oublier la constante 5."
  },
  {
    id: "U41-145", epreuve: "U41", theme: "Fonctions", session: "complément", type: "calcul",
    difficulte: "moyen",
    cas: "CAS-U41-02",
    etape: 5,
    question: "À partir de quel instant le verre a-t-il une humidité inférieure ou égale à 10 % ? Donne la plus petite valeur de t, arrondie au centième (valeur exacte : t = ln 12 ÷ 0,4).",
    reponse: {"valeur": 6.21, "unite": "h", "decimales": 2, "signe": false},
    explication: "y(t) ≤ 10 équivaut à 5 + 60 e^(−0,4t) ≤ 10\nsoit 60 e^(−0,4t) ≤ 5, donc e^(−0,4t) ≤ [[5|60]] = [[1|12]]\nAvec le logarithme : −0,4 t ≤ −ln 12\nDiviser par −0,4 change le sens : t ≥ [[ln 12|0,4]] ≈ [[2,4849|0,4]] ≈ 6,21\nLe verre est à 10 % ou moins à partir de 6,21 h.",
    indice: "Isole l'exponentielle, applique ln, puis attention au sens de l'inégalité quand tu divises par −0,4."
  },
  {
    id: "U41-146", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "difficile",
    cas: "CAS-U41-02",
    etape: 6,
    question: "Calcule la valeur moyenne de y sur [0 ; 5], arrondie au centième.",
    reponse: {"valeur": 30.94, "unite": "%", "decimales": 2, "signe": false},
    explication: "Une primitive de y est F(t) = 5t − 150 e^(−0,4t) car 60 ÷ (−0,4) = −150.\nValeur moyenne = [[1|5 − 0]] × (F(5) − F(0))\nF(5) − F(0) = (25 − 150 e^(−2)) − (−150) = 175 − 150 e^(−2) ≈ 154,70\nValeur moyenne = [[154,70|5]] ≈ 30,94\nL'humidité moyenne sur les 5 premières heures est d'environ 30,94 %.",
    indice: "Valeur moyenne = (1 ÷ longueur) × intégrale. La primitive de e^(−0,4t) est e^(−0,4t) ÷ (−0,4)."
  },

  // ---------- Mini-cas en cascade (CAS-U41-03) ----------
  {
    id: "U41-173", epreuve: "U41", theme: "Probabilités", session: "complément", type: "calcul",
    difficulte: "facile",
    cas: "CAS-U41-03",
    etape: 1,
    question: "Calcule la probabilité P(L1 ∩ D) qu'un verre soit traité par la ligne L1 et ait un défaut.",
    reponse: {"valeur": 0.028, "unite": "", "decimales": 3, "signe": false},
    explication: "Un chemin de l'arbre se multiplie : P(L1 ∩ D) = P(L1) × P_L1(D)\nP(L1 ∩ D) = 0,7 × 0,04 = 0,028\nPour comparer, P(L2 ∩ D) = 0,3 × 0,09 = 0,027.",
    indice: "Suis le chemin de l'arbre : ligne L1, puis défaut. On multiplie les deux probabilités du chemin."
  },
  {
    id: "U41-174", epreuve: "U41", theme: "Probabilités", session: "complément", type: "calcul",
    difficulte: "moyen",
    cas: "CAS-U41-03",
    etape: 2,
    contexte: "Un verre peut être traité par L1 ou par L2, et avoir un défaut dans les deux cas.",
    question: "Calcule la probabilité P(D) qu'un verre pris au hasard ait un défaut.",
    reponse: {"valeur": 0.055, "unite": "", "decimales": 3, "signe": false},
    explication: "L1 et L2 forment une partition : d'après la formule des probabilités totales,\nP(D) = P(L1 ∩ D) + P(L2 ∩ D)\nP(D) = 0,7 × 0,04 + 0,3 × 0,09 = 0,028 + 0,027 = 0,055\nLa moyenne simple des taux (0,065) est une erreur : elle ignore les parts de chaque ligne.",
    indice: "Additionne les deux chemins de l'arbre qui mènent à un verre avec défaut."
  },
  {
    id: "U41-175", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    cas: "CAS-U41-03",
    etape: 3,
    contexte: "On prend un verre au hasard : il a un défaut.",
    question: "Quelle rédaction calcule correctement la probabilité qu'il ait été traité par L2 ?",
    choix: ["P_D(L2) = P_L2(D) = 0,09, car la probabilité de L2 sachant D est la même que celle de D sachant L2.", "P_D(L2) = P(L2 ∩ D) = 0,3 × 0,09 = 0,027, car l'intersection donne directement la probabilité conditionnelle.", "On cherche P_D(L2) = P(L2 ∩ D) ÷ P(D) = 0,027 ÷ 0,055 ≈ 0,491, car le verre est connu comme défectueux.", "P_D(L2) = P(L2) = 0,3, car le fait que le verre ait un défaut ne change pas la ligne qui l'a traité."],
    bonne: 2,
    explication: "On divise la branche « L2 et défaut » par la probabilité d'avoir un défaut, P(D) = 0,055 :\nP_D(L2) = [[P(L2 ∩ D)|P(D)]] = [[0,027|0,055]] ≈ 0,491\nL2 traite 30 % des verres mais fournit près de la moitié des défauts. Confondre P_D(L2) et P_L2(D) est l'erreur classique, comme oublier de diviser par P(D).",
    indice: "« Sachant D » : on se place parmi les verres défectueux. Par quoi faut-il diviser ?"
  },
  {
    id: "U41-176", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "difficile",
    cas: "CAS-U41-03",
    etape: 4,
    contexte: "On prélève au hasard 40 verres dans la production, assez grande pour assimiler ce prélèvement à un tirage avec remise. X est le nombre de verres avec défaut parmi les 40.",
    question: "Quelle rédaction justifie correctement que X suit une loi binomiale ?",
    choix: ["X compte les verres avec défaut parmi les 40 verres prélevés, donc X suit la loi binomiale B(40 ; 0,09), car 0,09 est la probabilité d'un défaut.", "On répète 40 fois, de façon identique et indépendante, une épreuve à deux issues de probabilité 0,055 ; X compte les défauts, donc X suit B(40 ; 0,055).", "On répète 40 fois une épreuve à deux issues (défaut ou non) de probabilité 0,055, donc X suit la loi binomiale B(40 ; 0,055), sans autre précision.", "X compte les verres avec défaut : c'est une loi de Poisson de paramètre 2,2, car p est petit, donc X ne suit pas une loi binomiale."],
    bonne: 1,
    explication: "Une justification complète donne les conditions (40 épreuves identiques et indépendantes, deux issues), la probabilité du succès, ce que compte X, puis la conclusion avec ses paramètres. La probabilité à utiliser est celle d'un verre avec défaut au hasard, P(D) = 0,055, pas 0,09 (c'est le taux de L2 seulement). Écrire seulement « épreuve à deux issues » ne justifie pas l'indépendance. La loi de Poisson n'est qu'une approximation possible de B(40 ; 0,055) : elle ne remplace pas la justification.",
    indice: "Une bonne justification a deux parties : les conditions (nombre, identiques, indépendantes, deux issues, probabilité), puis la conclusion avec les paramètres."
  },
  {
    id: "U41-177", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    cas: "CAS-U41-03",
    etape: 5,
    contexte: "Le diamètre X d'un verre fini, en mm, suit la loi normale d'espérance 70 et d'écart type 0,3. Un verre est conforme si son diamètre est compris entre 69,5 et 70,5.",
    question: "À la calculatrice, calcule P(69,5 ≤ X ≤ 70,5), arrondie au millième.",
    reponse: {"valeur": 0.904, "unite": "", "decimales": 3, "signe": false},
    explication: "Avec la calculatrice (loi normale entre deux bornes), μ = 70 et σ = 0,3 :\nP(69,5 ≤ X ≤ 70,5) ≈ 0,9044, soit 0,904.\nContrôle : Z = [[X − 70|0,3]] va de [[69,5 − 70|0,3]] ≈ −1,667 à [[70,5 − 70|0,3]] ≈ +1,667, et la probabilité est un peu inférieure à 0,954 (±2σ).",
    indice: "Borne basse 69,5, borne haute 70,5, puis μ = 70 et l'écart type 0,3 (pas la variance)."
  },
  {
    id: "U41-178", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "difficile",
    cas: "CAS-U41-03",
    etape: 6,
    contexte: "On contrôle le réglage de la ligne par un test bilatéral au seuil de 5 %. H0 : « le diamètre moyen vaut 70 mm ». Sous H0, la moyenne d'un échantillon de 25 verres suit la loi normale d'espérance 70 et d'écart type 0,06. On observe une moyenne de 70,15 mm.",
    question: "Quelle conclusion est correctement rédigée ?",
    choix: ["La zone d'acceptation est 70 ± 1,96 × 0,3, soit [69,412 ; 70,588]. 70,15 y est : on ne rejette pas H0, donc la ligne est réglée à coup sûr.", "70,15 est différent de 70, donc on rejette H0 : la ligne est déréglée avec certitude, sans qu'il soit besoin de calculer de zone.", "La zone d'acceptation est 70 ± 1,96 × 0,06, soit [69,882 ; 70,118]. 70,15 n'y est pas : on accepte H0 et la ligne est bien réglée.", "Zone d'acceptation : 70 ± 1,96 × 0,06 = [69,882 ; 70,118]. 70,15 n'y est pas : on rejette H0 au seuil de 5 % et on conclut que la ligne est déréglée."],
    bonne: 3,
    explication: "Sous H0, l'écart type de la moyenne est 0,06 (0,3 divisé par √25) : la zone d'acceptation est 70 ± 1,96 × 0,06 = [69,882 ; 70,118]. 70,15 est à l'extérieur : on rejette H0 au seuil de 5 %. Utiliser 0,3 (l'écart type d'un verre) donne une zone trop large. Dire « différent de 70 » ne suffit pas : il faut sortir de la zone. Écrire « avec certitude » est faux : le risque de se tromper est de 5 %. Accepter H0 en sortant de la zone est contradictoire.",
    indice: "Calcule la zone 70 ± 1,96 × 0,06, compare avec 70,15, puis décide avec le seuil de 5 %."
  },

  // ---------- Lot 1 : calcul intégral et équations différentielles ----------
  {
    id: "U41-199", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    question: "Calcule l'intégrale de 0 à 2 de (3x² + 2x) dx.",
    choix: ["8", "16", "12", "10"],
    bonne: 2,
    erreurs: { 1: { type: "notion", message: "16 est la valeur de la fonction en 2 (3 × 4 + 2 × 2). Une intégrale se calcule avec une primitive : F(2) − F(0)." } },
    explication: "Une primitive de 3x² + 2x est F(x) = x³ + x². L'intégrale vaut F(2) − F(0) = (8 + 4) − 0 = 12.",
    indice: "Cherche une primitive F de la fonction, puis calcule F(2) − F(0)."
  },
  {
    id: "U41-200", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 0 à 1 de e^(2x) dx, arrondie à 10⁻².",
    choix: ["6,39", "3,19", "12,78", "3,69"],
    bonne: 1,
    erreurs: {
      0: { type: "notion", message: "Tu as pris e^(2x) comme primitive. La dérivée de e^(2x) est 2 e^(2x) : il faut diviser par 2." },
      3: { type: "notion", message: "Tu as oublié de retrancher F(0). L'intégrale est F(1) − F(0), pas seulement F(1)." }
    },
    explication: "Une primitive de e^(2x) est F(x) = e^(2x) / 2 (car la dérivée de e^(2x) est 2 e^(2x)). L'intégrale vaut F(1) − F(0) = (e² − 1) / 2 ≈ (7,389 − 1) / 2 ≈ 3,19.",
    indice: "Une primitive de e^(ax) est e^(ax) / a. Applique-la, puis calcule F(1) − F(0)."
  },
  {
    id: "U41-201", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 1 à e de 3/x dx.",
    choix: ["3", "3e − 3", "1/3", "e − 1"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "3e − 3 est ce qu'on obtient avec la primitive 3x. Ici la fonction est 3/x : sa primitive est 3 ln(x)." } },
    explication: "Une primitive de 3/x sur ]0 ; +∞[ est F(x) = 3 ln(x). L'intégrale vaut F(e) − F(1) = 3 ln(e) − 3 ln(1) = 3 × 1 − 0 = 3.",
    indice: "La primitive de 1/x est ln(x). Souviens-toi de ln(e) et de ln(1)."
  },
  {
    id: "U41-202", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 0 à 1 de 2x / (x² + 1) dx, arrondie à 10⁻².",
    choix: ["0,69", "1,39", "1,00", "0,35"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "1 est la valeur de la fonction en x = 1. Une intégrale se calcule avec une primitive, ici ln(x² + 1)." } },
    explication: "La fonction est de la forme u' / u avec u(x) = x² + 1 (donc u'(x) = 2x). Une primitive est ln(u(x)) = ln(x² + 1). L'intégrale vaut ln(2) − ln(1) = ln(2) ≈ 0,69.",
    indice: "Repère la forme u'/u : le numérateur est la dérivée du dénominateur. Sa primitive est ln(u)."
  },
  {
    id: "U41-203", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    contexte: "Une fonction f est définie sur [0 ; 4] par f(x) = 2x + 1.",
    question: "Quelle est la valeur moyenne de f sur [0 ; 4] ?",
    choix: ["20", "5", "9", "1"],
    bonne: 1,
    erreurs: { 0: { type: "notion", message: "20 est l'intégrale de f. La valeur moyenne s'obtient en divisant l'intégrale par la longueur de l'intervalle (4 − 0)." } },
    explication: "L'intégrale de 0 à 4 de (2x + 1) dx = [x² + x] de 0 à 4 = 16 + 4 = 20. Valeur moyenne = 20 / (4 − 0) = 5.",
    indice: "Valeur moyenne = intégrale ÷ (b − a). Calcule d'abord l'intégrale avec une primitive."
  },
  {
    id: "U41-204", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "Le nombre de clients à l'instant t (en heures, de 0 à 4) est modélisé par f(t) = 3 e^(−0,5t) (en dizaines de clients).",
    question: "Quelle est la valeur moyenne de f sur [0 ; 4], arrondie à 10⁻² ?",
    choix: ["1,30", "5,19", "−1,30", "2,59"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "5,19 est l'intégrale. Pour la valeur moyenne, divise par la longueur de l'intervalle : 4 − 0." },
      2: { type: "signe", message: "Une primitive de 3 e^(−0,5t) est −6 e^(−0,5t), mais F(4) − F(0) est positif : l'intégrale d'une fonction positive est positive." }
    },
    explication: "Une primitive de 3 e^(−0,5t) est F(t) = −6 e^(−0,5t). L'intégrale vaut F(4) − F(0) = −6 e^(−2) + 6 = 6 (1 − e^(−2)) ≈ 5,188. Valeur moyenne = 5,188 / 4 ≈ 1,30.",
    indice: "Primitive de e^(at) : e^(at) / a. Puis divise l'intégrale par 4."
  },
  {
    id: "U41-205", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    contexte: "f est une fonction continue sur [0 ; 5]. On sait que l'intégrale de 0 à 5 de f(x) dx = 8 et que l'intégrale de 2 à 5 de f(x) dx = 3.",
    question: "Que vaut l'intégrale de 0 à 2 de f(x) dx ?",
    choix: ["5", "11", "−5", "24"],
    bonne: 0,
    explication: "Relation de Chasles : intégrale de 0 à 5 = intégrale de 0 à 2 + intégrale de 2 à 5. Donc intégrale de 0 à 2 = 8 − 3 = 5.",
    indice: "Découpe l'intervalle [0 ; 5] en [0 ; 2] et [2 ; 5] : la relation de Chasles relie les trois intégrales."
  },
  {
    id: "U41-206", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "Sur [0 ; 2], on trace f(x) = x + 2 et g(x) = x². La courbe de f est au-dessus de celle de g.",
    question: "Quelle est l'aire (en unités d'aire) du domaine compris entre les deux courbes sur [0 ; 2] ?",
    choix: ["10/3 ≈ 3,33", "−10/3 ≈ −3,33", "6", "26/3 ≈ 8,67"],
    bonne: 0,
    erreurs: {
      1: { type: "signe", message: "Une aire est positive. Tu as calculé g − f : il faut intégrer la fonction du dessus moins celle du dessous, f − g." },
      2: { type: "notion", message: "6 est l'aire sous la courbe de f seule. Il faut retrancher l'aire sous la courbe de g." }
    },
    explication: "Aire = intégrale de 0 à 2 de [f(x) − g(x)] dx = intégrale de (x + 2 − x²) dx. Une primitive est x²/2 + 2x − x³/3. En 2 : 2 + 4 − 8/3 = 10/3. En 0 : 0. Aire = 10/3 ≈ 3,33.",
    indice: "Aire entre deux courbes = intégrale de (courbe du dessus − courbe du dessous)."
  },
  {
    id: "U41-207", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    question: "Quelle est la formule de la valeur moyenne d'une fonction f continue sur [a ; b] ?",
    choix: ["1/(b − a) × intégrale de a à b de f(x) dx", "L'intégrale de a à b de f(x) dx, c'est-à-dire l'aire sous la courbe", "(f(a) + f(b)) / 2, la moyenne des valeurs aux deux extrémités", "(b − a) × intégrale de a à b de f(x) dx, l'aire multipliée par la longueur"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "(f(a) + f(b)) / 2 ne donne la moyenne que pour une fonction affine. En général, on utilise l'intégrale." } },
    explication: "La valeur moyenne de f sur [a ; b] est [[1|b − a]] × l'intégrale de a à b de f(x) dx : l'aire sous la courbe divisée par la longueur de l'intervalle, comme une hauteur moyenne.",
    indice: "Une moyenne, c'est un total divisé par une longueur. Ici le total est l'aire sous la courbe."
  },
  {
    id: "U41-208", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "difficile",
    contexte: "Formule d'intégration par parties : l'intégrale de a à b de u(x) v'(x) dx = [u(x) v(x)] de a à b − l'intégrale de a à b de u'(x) v(x) dx. On prend u(x) = x et v'(x) = e^x.",
    question: "Calcule l'intégrale de 0 à 1 de x e^x dx.",
    choix: ["1", "e − 1 ≈ 1,72", "e ≈ 2,72", "e + 1 ≈ 3,72"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "e est la valeur de [x e^x] entre 0 et 1. Il reste à retrancher l'intégrale de u' v, qui vaut e − 1." } },
    explication: "Ici u'(x) = 1 et v(x) = e^x. Le crochet [x e^x] de 0 à 1 vaut e − 0 = e. L'intégrale de 0 à 1 de e^x dx vaut e − 1. Résultat : e − (e − 1) = 1.",
    indice: "Calcule u', v, puis le crochet [u v] aux bornes, puis l'intégrale de u'v, qui est plus simple."
  },
  {
    id: "U41-209", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "difficile",
    question: "Calcule l'intégrale de 0 à 1 de 2x (x² + 1)³ dx.",
    choix: ["3,75", "4", "15", "7"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "4 est la valeur de la primitive en 1, soit 16/4. Il faut retrancher sa valeur en 0, qui vaut 1/4." },
      2: { type: "notion", message: "Tu as oublié de diviser par 4. La primitive de u' u³ est u⁴ / 4, pas u⁴." }
    },
    explication: "La fonction est de la forme u' u³ avec u(x) = x² + 1. Une primitive est u⁴ / 4 = (x² + 1)⁴ / 4. En 1 : 16/4 = 4. En 0 : 1/4. L'intégrale vaut 4 − 1/4 = 15/4 = 3,75.",
    indice: "Repère u' u^n avec u = x² + 1. Sa primitive est u^(n+1) / (n + 1)."
  },
  {
    id: "U41-210", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "La cadence de montage d'un atelier est f(t) = 60 − 4t verres par heure, pour t entre 0 et 8 heures.",
    question: "Combien de verres sont montés pendant ces 8 heures ?",
    choix: ["352", "480", "224", "44"],
    bonne: 0,
    erreurs: {
      2: { type: "notion", message: "224 vient d'une primitive fausse : celle de 4t est 2t², pas 4t²." },
      3: { type: "notion", message: "44 est la cadence moyenne par heure (352 ÷ 8). La question demande le total sur 8 heures." }
    },
    explication: "Le nombre de verres est l'intégrale de la cadence. Une primitive de 60 − 4t est 60t − 2t². Entre 0 et 8 : 480 − 128 = 352 verres. (Cadence moyenne : 352 / 8 = 44 verres par heure.)",
    indice: "Un total produit = l'intégrale de la cadence sur la durée."
  },

  // ---------- Équations différentielles ----------
  {
    id: "U41-211", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "facile",
    question: "Quelles sont les solutions de l'équation différentielle y' + 3y = 0 ?",
    choix: ["y = C e^(−3x)", "y = C e^(3x)", "y = −3x + C", "y = C e^(−x/3)"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "y' + 3y = 0 s'écrit y' = −3y. Le coefficient dans l'exponentielle est −3, pas +3." } },
    explication: "L'équation y' + ay = 0 a pour solutions y = C e^(−ax). Ici a = 3 : y = C e^(−3x). Vérification : y' = −3 C e^(−3x) = −3y, donc y' + 3y = 0.",
    indice: "Écris y' = −3y. Quelle fonction a une dérivée proportionnelle à elle-même ?"
  },
  {
    id: "U41-212", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "facile",
    question: "Quelle est la solution de y' − 0,5y = 0 qui vérifie y(0) = 4 ?",
    choix: ["y = 4 e^(−0,5x)", "y = 4 e^(0,5x)", "y = e^(0,5x) + 3", "y = 0,5 e^(4x)"],
    bonne: 1,
    erreurs: { 0: { type: "signe", message: "y' − 0,5y = 0 s'écrit y' = 0,5y : l'exponentielle est e^(0,5x), croissante." } },
    explication: "y' − 0,5y = 0 équivaut à y' + (−0,5)y = 0, donc y = C e^(0,5x). La condition y(0) = 4 donne C × e⁰ = 4, donc C = 4 : y = 4 e^(0,5x).",
    indice: "Mets l'équation sous la forme y' + ay = 0 : attention au signe de a. Puis utilise y(0) pour trouver C."
  },
  {
    id: "U41-213", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "Quelles sont les solutions de l'équation différentielle y' + 2y = 6 ?",
    choix: ["y = C e^(−2x) + 3", "y = C e^(−2x) + 6", "y = C e^(2x) + 3", "y = C e^(−2x) − 3"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "6 est le second membre, pas la solution constante. Pour y = k, y' = 0, donc 2k = 6 et k = 3." },
      3: { type: "signe", message: "Teste la constante : si y = −3, alors y' + 2y = −6, pas 6." }
    },
    explication: "Une solution constante y = k vérifie 0 + 2k = 6, donc k = 3. Les solutions de l'équation sans second membre y' + 2y = 0 sont C e^(−2x). La solution générale est y = C e^(−2x) + 3.",
    indice: "Cherche d'abord une solution constante k (sa dérivée est nulle), puis ajoute les solutions de y' + 2y = 0."
  },
  {
    id: "U41-214", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la solution de y' + 0,5y = 2 qui vérifie y(0) = 1 ?",
    choix: ["y = 4 − 3 e^(−0,5x)", "y = 4 + 3 e^(−0,5x)", "y = e^(−0,5x) + 4", "y = 4 e^(−0,5x) − 3"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "C n'est pas y(0). La condition s'écrit C e⁰ + 4 = 1 : l'ordonnée à l'origine inclut la solution constante." } },
    explication: "Solution constante : 0,5k = 2, donc k = 4. Solutions : y = C e^(−0,5x) + 4. Condition y(0) = 1 : C + 4 = 1, donc C = −3. D'où y = 4 − 3 e^(−0,5x).",
    indice: "Écris la solution générale C e^(−0,5x) + k, puis remplace x par 0 pour trouver C."
  },
  {
    id: "U41-215", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "La fonction f(x) = 5 − 5 e^(−0,2x) est solution de l'une des équations ci-dessous. Laquelle ?",
    choix: ["y' + 0,2y = 1", "y' + 0,2y = 5", "y' − 0,2y = 1", "y' + 5y = 1"],
    bonne: 0,
    explication: "f'(x) = −5 × (−0,2) e^(−0,2x) = e^(−0,2x). Et 0,2 f(x) = 1 − e^(−0,2x). La somme f' + 0,2 f = e^(−0,2x) + 1 − e^(−0,2x) = 1. C'est donc y' + 0,2y = 1.",
    indice: "Calcule f'(x), puis 0,2 f(x), et additionne : les termes en exponentielle doivent s'annuler."
  },
  {
    id: "U41-216", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "Quelles sont les solutions de y' = 2y + 6 ?",
    choix: ["y = C e^(2x) − 3", "y = C e^(2x) + 3", "y = C e^(−2x) − 3", "y = C e^(2x) + 6"],
    bonne: 0,
    erreurs: {
      1: { type: "signe", message: "Teste y = 3 : y' = 0 et 2y + 6 = 12. Ce n'est pas une solution constante." },
      2: { type: "signe", message: "L'équation s'écrit y' − 2y = 6 : l'exponentielle est e^(2x), pas e^(−2x)." }
    },
    explication: "On met l'équation sous la forme y' − 2y = 6. Solution constante k : −2k = 6, donc k = −3. Solutions de y' − 2y = 0 : C e^(2x). Solution générale : y = C e^(2x) − 3.",
    indice: "Passe 2y à gauche : y' − 2y = 6. Cherche une constante k qui convient, puis ajoute C e^(2x)."
  },
  {
    id: "U41-217", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    contexte: "La solution de y' + 0,2y = 3 avec y(0) = 0 est y(t) = 15 − 15 e^(−0,2t).",
    question: "Vers quelle valeur y(t) tend-elle quand t devient très grand ?",
    choix: ["15", "3", "0", "+∞"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "3 est le second membre. La limite est la solution constante : 0,2k = 3, donc k = 15." } },
    explication: "Quand t tend vers +∞, e^(−0,2t) tend vers 0. Donc y(t) tend vers 15 − 0 = 15. C'est aussi la solution constante : 0,2 × 15 = 3.",
    indice: "Que devient e^(−0,2t) quand t est très grand ? Sinon, cherche la solution constante."
  },
  {
    id: "U41-218", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "La concentration y (en g/L) d'un colorant dans un bain vérifie y' = −0,3y avec y(0) = 80, où t est en heures.",
    question: "Calcule y(2), arrondi à 10⁻¹.",
    reponse: {"valeur": 43.9, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 145.8, type: "signe", message: "Tu as pris e^(+0,6). La concentration diminue : y(t) = 80 e^(−0,3t)." },
      { valeur: 59.3, type: "notion", message: "Tu as calculé y(1). Ici t = 2, donc l'exposant est −0,3 × 2 = −0,6." }
    ],
    explication: "y' = −0,3y équivaut à y' + 0,3y = 0 : y(t) = C e^(−0,3t). Avec y(0) = 80, C = 80. y(2) = 80 e^(−0,6) ≈ 80 × 0,5488 ≈ 43,9.",
    indice: "Écris la solution y(t) = C e^(−0,3t), trouve C avec y(0), puis remplace t par 2."
  },
  {
    id: "U41-219", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "La température y (en °C) d'un verre sorti d'un four vérifie y' + 0,1y = 2 (t en minutes). À t = 0, y(0) = 100.",
    question: "Calcule y(10), arrondie à 10⁻¹.",
    reponse: {"valeur": 49.4, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 29.4, type: "notion", message: "Tu as oublié la solution constante : y(t) = C e^(−0,1t) + 20, pas seulement C e^(−0,1t)." },
      { valeur: 36.8, type: "notion", message: "Tu as pris C = y(0) = 100 et oublié la constante. Avec y = C e^(−0,1t) + 20, y(0) = 100 donne C = 80." }
    ],
    explication: "Solution constante : 0,1k = 2, donc k = 20. Solutions : y = C e^(−0,1t) + 20. y(0) = 100 donne C = 80. y(10) = 80 e^(−1) + 20 ≈ 80 × 0,3679 + 20 ≈ 29,4 + 20 = 49,4 °C.",
    indice: "Solution constante d'abord (k), puis C avec y(0) = 100, puis remplace t par 10."
  },
  {
    id: "U41-220", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Un produit se dégrade selon y' = −0,4y (t en heures), avec y(0) = y0 > 0.",
    question: "Au bout de combien d'heures y est-elle divisée par 2 ? Arrondis à 10⁻².",
    reponse: {"valeur": 1.73, "unite": "h", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: -1.73, type: "signe", message: "Un temps est positif. ln(0,5) est négatif et −0,4 aussi : le quotient est positif." },
      { valeur: 0.58, type: "notion", message: "Tu as divisé 0,4 par ln 2. On résout y0 e^(−0,4t) = y0 / 2, donc t = ln 2 / 0,4." }
    ],
    explication: "y(t) = y0 e^(−0,4t). On veut e^(−0,4t) = 1/2. En passant au logarithme : −0,4t = ln(1/2) = −ln 2, donc t = ln 2 / 0,4 ≈ 0,6931 / 0,4 ≈ 1,73 h.",
    indice: "Écris y0 e^(−0,4t) = y0 / 2, simplifie y0, puis prends le logarithme népérien."
  },

  // ---------- Lot 2 : suites et fonctions ----------
  {
    id: "U41-221", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "facile",
    contexte: "Un atelier monte 5 lunettes le jour 0, puis 3 de plus chaque jour que la veille : u(n+1) = u(n) + 3.",
    question: "Combien de lunettes sont montées le jour 10 (u10) ?",
    choix: ["38", "30", "35", "50"],
    bonne: 2,
    erreurs: {
      0: { type: "notion", message: "38 serait u11. Entre le jour 0 et le jour 10, on ajoute 3 dix fois : 5 + 10 × 3." },
      1: { type: "notion", message: "30 oublie le point de départ u0 = 5 : u(n) = u0 + n × r." }
    },
    explication: "La suite est arithmétique de raison 3 : u(n) = u0 + 3n = 5 + 3n. Pour n = 10, u10 = 5 + 30 = 35.",
    indice: "On ajoute toujours le même nombre : suite arithmétique. Écris u(n) en fonction de u0 et de la raison."
  },
  {
    id: "U41-222", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    question: "Soit u(n) = 3n + 2 pour n entier. Quelle est la somme des 20 premiers termes (de u0 à u19) ?",
    choix: ["1 220", "610", "590", "600"],
    bonne: 1,
    erreurs: {
      0: { type: "notion", message: "Tu as oublié de diviser par 2. Somme = nombre de termes × (premier + dernier) / 2." },
      2: { type: "notion", message: "590 vient de 20 × 59 / 2 : il faut (premier + dernier) = 2 + 59 = 61, pas seulement le dernier." }
    },
    explication: "La suite est arithmétique : u0 = 2 et u19 = 3 × 19 + 2 = 59. Somme = 20 × (2 + 59) / 2 = 20 × 61 / 2 = 610.",
    indice: "Pour une suite arithmétique : somme = nombre de termes × (premier terme + dernier terme) / 2."
  },
  {
    id: "U41-223", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    contexte: "Un stock de 500 verres de démonstration perd 10 % de sa valeur chaque année. On note u(n) la valeur au bout de n années, avec u0 = 500.",
    question: "Que vaut u5, arrondi à l'unité ?",
    choix: ["295", "250", "450", "310"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "Perdre 10 % cinq fois ne fait pas perdre 50 %. Chaque année, on prend 10 % de la valeur de l'année précédente : suite géométrique." },
      3: { type: "notion", message: "Diminuer de 10 %, c'est multiplier par 0,9, et non diviser par 1,1." }
    },
    explication: "Perdre 10 %, c'est multiplier par 0,9 : suite géométrique de raison 0,9. u(n) = 500 × 0,9ⁿ. u5 = 500 × 0,9⁵ = 500 × 0,59049 ≈ 295.",
    indice: "Quel coefficient multiplicateur correspond à une baisse de 10 % ? Puis écris u(n) = u0 × qⁿ."
  },
  {
    id: "U41-224", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la somme 1 + 2 + 4 + 8 + … + 512 (10 termes, de raison 2) ?",
    choix: ["1 024", "2 047", "512", "1 023"],
    bonne: 3,
    erreurs: {
      0: { type: "notion", message: "1 024 = 2¹⁰ sans le « − 1 ». La formule est (1 − qⁿ)/(1 − q) = (1 − 1024)/(1 − 2) = 1 023." },
      1: { type: "notion", message: "2 047 est la somme de 11 termes. Compte bien : de 1 (= 2⁰) à 512 (= 2⁹), il y a 10 termes." }
    },
    explication: "Somme de n termes d'une suite géométrique de premier terme 1 et de raison q ≠ 1 : (1 − qⁿ)/(1 − q). Ici n = 10, q = 2 : (1 − 1 024)/(1 − 2) = 1 023.",
    indice: "Combien y a-t-il de termes de 2⁰ à 2⁹ ? Applique la formule (1 − qⁿ)/(1 − q)."
  },
  {
    id: "U41-225", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "facile",
    question: "Quelle est la limite de u(n) = 4 × 1,05ⁿ quand n tend vers +∞ ?",
    choix: ["+∞", "0", "4", "1,05"],
    bonne: 0,
    explication: "Pour une raison q > 1, qⁿ tend vers +∞. Comme 4 > 0, u(n) tend vers +∞. (Pour 0 < q < 1, qⁿ tendrait vers 0.)",
    indice: "Compare la raison à 1 : plus grande, ou entre 0 et 1 ?"
  },
  {
    id: "U41-226", epreuve: "U41", theme: "Suites", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Les ventes d'un modèle suivent u(n+1) = 1,1 × u(n) avec u0 = 100.",
    question: "À la calculatrice, trouve le plus petit rang n tel que u(n) > 200.",
    reponse: {"valeur": 8, "unite": "", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 7, type: "notion", message: "u7 = 100 × 1,1⁷ ≈ 194,9 ne dépasse pas 200. Il faut le premier rang où u(n) est strictement supérieur à 200." }
    ],
    explication: "u(n) = 100 × 1,1ⁿ. On trouve u7 ≈ 194,9 (≤ 200) et u8 ≈ 214,4 (> 200). Le plus petit rang est n = 8.",
    indice: "Écris u(n) = 100 × 1,1ⁿ et parcours le tableau de valeurs jusqu'à dépasser 200."
  },
  {
    id: "U41-227", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "difficile",
    question: "Quel est le plus petit entier n tel que 0,8ⁿ < 0,1 ?",
    choix: ["11", "10", "12", "9"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,8¹⁰ ≈ 0,107 est encore plus grand que 0,1. L'inégalité est stricte et le résultat doit être arrondi à l'entier supérieur." } },
    explication: "On passe au logarithme : n ln(0,8) < ln(0,1). Comme ln(0,8) < 0, on change le sens : n > ln(0,1) / ln(0,8) ≈ 10,32. Le plus petit entier est 11. Contrôle : 0,8¹⁰ ≈ 0,107 et 0,8¹¹ ≈ 0,086.",
    indice: "Passe au logarithme népérien. Attention : diviser par ln(0,8), qui est négatif, change le sens de l'inégalité."
  },
  {
    id: "U41-228", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    contexte: "(v(n)) est une suite géométrique de premier terme v0 = 8 et de raison q = −0,5.",
    question: "Que vaut v3 ?",
    choix: ["−1", "1", "−12", "−4"],
    bonne: 0,
    erreurs: {
      1: { type: "signe", message: "(−0,5)³ est négatif : un nombre négatif à une puissance impaire reste négatif." },
      2: { type: "notion", message: "−12 vient de 8 × 3 × (−0,5) : tu as multiplié par n au lieu de mettre la raison à la puissance n. Pour une suite géométrique, v(n) = v0 × qⁿ." }
    },
    explication: "v(n) = v0 × qⁿ = 8 × (−0,5)ⁿ. v3 = 8 × (−0,5)³ = 8 × (−0,125) = −1.",
    indice: "Applique v(n) = v0 × qⁿ avec n = 3, en gardant le signe de la raison."
  },
  {
    id: "U41-229", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "facile",
    contexte: "Le prix d'une monture augmente de 10 % puis de 20 %.",
    question: "Quel est le taux d'évolution global ?",
    choix: ["+32 %", "+30 %", "+22 %", "+12 %"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Les pourcentages successifs ne s'additionnent pas : on multiplie les coefficients, 1,1 × 1,2 = 1,32." } },
    explication: "Hausse de 10 % : coefficient 1,1. Hausse de 20 % : coefficient 1,2. Coefficient global : 1,1 × 1,2 = 1,32, soit +32 %.",
    indice: "Transforme chaque pourcentage en coefficient multiplicateur, puis multiplie."
  },
  {
    id: "U41-230", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    question: "La suite arithmétique u(n) = 7 + 3n atteint 100 pour quelle valeur de n ?",
    choix: ["33", "31", "30", "32"],
    bonne: 1,
    erreurs: { 0: { type: "notion", message: "33 vient de 100 / 3. Il faut d'abord retrancher le terme initial : 3n = 100 − 7 = 93." } },
    explication: "7 + 3n = 100, donc 3n = 93 et n = 31. Contrôle : 7 + 3 × 31 = 100.",
    indice: "Isole n : retire 7, puis divise par la raison."
  },

  // ---------- Fonctions ----------
  {
    id: "U41-231", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la dérivée de f(x) = (2x + 1) e^(−x) ?",
    choix: ["(1 − 2x) e^(−x)", "(2x + 3) e^(−x)", "−2 e^(−x)", "(2x + 1) e^(−x)"],
    bonne: 0,
    erreurs: {
      1: { type: "signe", message: "La dérivée de e^(−x) est −e^(−x), pas e^(−x). Le signe change le calcul." },
      2: { type: "notion", message: "La dérivée d'un produit n'est pas le produit des dérivées : (uv)' = u'v + uv'." }
    },
    explication: "Avec u = 2x + 1 (u' = 2) et v = e^(−x) (v' = −e^(−x)) : f' = u'v + uv' = 2 e^(−x) − (2x + 1) e^(−x) = (2 − 2x − 1) e^(−x) = (1 − 2x) e^(−x).",
    indice: "Utilise (uv)' = u'v + uv'. Attention à la dérivée de e^(−x)."
  },
  {
    id: "U41-232", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "facile",
    question: "Quelle est la dérivée de f(x) = ln(3x + 1) sur ]−1/3 ; +∞[ ?",
    choix: ["3 / (3x + 1)", "1 / (3x + 1)", "3", "ln 3"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "La dérivée de ln(u) est u' / u : il faut aussi la dérivée de l'intérieur, u' = 3." } },
    explication: "La dérivée de ln(u) est u' / u. Ici u(x) = 3x + 1 et u'(x) = 3, donc f'(x) = 3 / (3x + 1).",
    indice: "Pour ln(u), la dérivée est u' sur u."
  },
  {
    id: "U41-233", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la dérivée de f(x) = x / (x + 1) sur ]−1 ; +∞[ ?",
    choix: ["1 / (x + 1)²", "1", "x / (x + 1)²", "(2x + 1) / (x + 1)²"],
    bonne: 0,
    erreurs: { 3: { type: "signe", message: "Au numérateur, c'est u'v − uv' : (x + 1) − x et non (x + 1) + x." } },
    explication: "(u / v)' = (u'v − uv') / v². Avec u = x et v = x + 1 : f' = (1 × (x + 1) − x × 1) / (x + 1)² = 1 / (x + 1)².",
    indice: "Quotient : (u'v − uv') / v². Simplifie le numérateur."
  },
  {
    id: "U41-234", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est l'équation de la tangente à la courbe de f(x) = x² − 3x + 1 au point d'abscisse 2 ?",
    choix: ["y = x − 3", "y = x − 1", "y = x + 1", "y = −x + 1"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "La tangente est y = f(2) + f'(2)(x − 2) = −1 + (x − 2). Tu as sans doute oublié de retrancher 2 dans le développement." } },
    explication: "f(2) = 4 − 6 + 1 = −1. f'(x) = 2x − 3, donc f'(2) = 1. Tangente : y = f(2) + f'(2)(x − 2) = −1 + (x − 2) = x − 3.",
    indice: "Utilise y = f(a) + f'(a)(x − a). Calcule f(2) et f'(2)."
  },
  {
    id: "U41-235", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "difficile",
    question: "Quel est le maximum de f(x) = x e^(−x) sur [0 ; +∞[, arrondi à 10⁻² ?",
    choix: ["0,37", "1,00", "2,72", "0,18"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "1 est l'abscisse où le maximum est atteint. Le maximum est la valeur f(1)." } },
    explication: "f'(x) = e^(−x) − x e^(−x) = (1 − x) e^(−x). Positive sur [0 ; 1[, nulle en 1, négative ensuite : f croît puis décroît. Maximum : f(1) = e^(−1) ≈ 0,37.",
    indice: "Dérive, étudie le signe de f', puis calcule f à l'endroit où f' s'annule."
  },
  {
    id: "U41-236", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la limite de f(x) = (3x + 2) / (x − 1) quand x tend vers +∞ ?",
    choix: ["3", "+∞", "−2", "0"],
    bonne: 0,
    explication: "En +∞, on garde les termes de plus haut degré : (3x) / x = 3. Autre méthode : on factorise par x, f(x) = (3 + 2/x) / (1 − 1/x), qui tend vers 3 / 1 = 3.",
    indice: "Quand x est très grand, seuls 3x en haut et x en bas comptent. Ou factorise par x."
  },
  {
    id: "U41-237", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "facile",
    question: "Quelle est la limite de x e^(−x) quand x tend vers +∞ ?",
    choix: ["+∞", "0", "1", "−∞"],
    bonne: 1,
    explication: "Par croissance comparée, l'exponentielle l'emporte sur x : x e^(−x) = x / e^x tend vers 0. (Dans une forme « ∞ × 0 », on ne conclut pas sans cette règle.)",
    indice: "Écris x e^(−x) = x / e^x et rappelle-toi qui gagne entre x et e^x."
  },
  {
    id: "U41-238", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelles sont les asymptotes de la courbe de f(x) = (2x + 1) / (x − 3) ?",
    choix: ["x = 3 et y = 2", "x = 2 et y = 3", "x = −3 et y = 2", "x = 3 et y = 1"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Tu as échangé les deux : la verticale vient de la valeur qui annule le dénominateur (x = 3), l'horizontale de la limite en l'infini (y = 2)." } },
    explication: "Le dénominateur s'annule en x = 3 (le numérateur vaut 7 ≠ 0) : asymptote verticale x = 3. En ±∞, f(x) tend vers 2x / x = 2 : asymptote horizontale y = 2.",
    indice: "Cherche la valeur qui annule le dénominateur, puis la limite de f en l'infini."
  },
  {
    id: "U41-239", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Résous 3 e^(2x) = 12.",
    choix: ["x = ln 2 ≈ 0,69", "x = ln 4 ≈ 1,39", "x = (ln 12) / 2 ≈ 1,24", "x = ln 3 ≈ 1,10"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "Tu as oublié de diviser par 2 : e^(2x) = 4 donne 2x = ln 4, donc x = (ln 4) / 2 = ln 2." },
      2: { type: "notion", message: "Il faut d'abord diviser par 3 : e^(2x) = 12 / 3 = 4, avant de passer au logarithme." }
    },
    explication: "3 e^(2x) = 12 donne e^(2x) = 4. Avec ln : 2x = ln 4, donc x = (ln 4) / 2 = ln 2 ≈ 0,69.",
    indice: "Isole e^(2x), puis passe au logarithme népérien."
  },
  {
    id: "U41-240", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "difficile",
    question: "Quel est l'ensemble des solutions de ln(x − 1) ≤ 2 ?",
    choix: ["]1 ; 1 + e²]", "]−∞ ; 1 + e²]", "]1 ; e²]", "[1 + e² ; +∞["],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Le logarithme n'existe que si x − 1 > 0, donc x > 1. Il faut garder cette condition." } },
    explication: "ln(x − 1) n'existe que pour x − 1 > 0, donc x > 1. Ensuite ln(x − 1) ≤ 2 équivaut à x − 1 ≤ e² (ln est croissante), soit x ≤ 1 + e² ≈ 8,39. Solutions : ]1 ; 1 + e²].",
    indice: "Commence par l'ensemble de définition, puis applique l'exponentielle des deux côtés."
  },
  {
    id: "U41-241", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quel est le développement limité à l'ordre 2 de e^x en 0 ?",
    choix: ["1 + x + x²/2 + x² ε(x)", "1 + x + x² + x² ε(x)", "1 + x/2 + x²/4 + x² ε(x)", "x + x²/2 + x² ε(x)"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Le coefficient de x² est f''(0) / 2 = 1/2, pas 1 : on divise par 2." } },
    explication: "Pour f(x) = e^x : f(0) = f'(0) = f''(0) = 1. Le DL à l'ordre 2 est f(0) + f'(0) x + f''(0) x² / 2 = 1 + x + x²/2, avec un reste x² ε(x) où ε(x) tend vers 0.",
    indice: "Le DL d'ordre 2 en 0 est f(0) + f'(0) x + f''(0) x²/2."
  },
  {
    id: "U41-242", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    contexte: "On a e^x = 1 + x + x²/2 + x² ε(x) au voisinage de 0.",
    question: "Quelle valeur approchée de e^(0,1) obtient-on avec la partie polynôme ?",
    choix: ["1,105", "1,100", "1,110", "1,150"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "1,100 s'arrête à l'ordre 1. Il faut ajouter le terme x²/2 = 0,01 / 2 = 0,005." } },
    explication: "En x = 0,1 : 1 + 0,1 + (0,1)² / 2 = 1 + 0,1 + 0,005 = 1,105. La calculatrice donne e^(0,1) ≈ 1,10517 : l'approximation est très bonne près de 0.",
    indice: "Remplace x par 0,1 dans 1 + x + x²/2."
  },

  // ---------- Lot 3 : statistique, probabilités, division harmonique ----------
  {
    id: "U41-243", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    contexte: "Nombre de montures vendues par jour sur 10 jours : 2 montures (3 jours), 4 montures (5 jours), 6 montures (2 jours).",
    question: "Quelle est la moyenne journalière ?",
    choix: ["3,8", "4", "3", "12,67"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "4 est la moyenne des trois valeurs 2, 4 et 6. Il faut pondérer par le nombre de jours de chaque valeur." },
      3: { type: "notion", message: "Tu as divisé le total (38) par 3, le nombre de valeurs différentes. Il faut diviser par l'effectif total, 10 jours." }
    },
    explication: "Moyenne pondérée : (2 × 3 + 4 × 5 + 6 × 2) / 10 = (6 + 20 + 12) / 10 = 38 / 10 = 3,8.",
    indice: "Multiplie chaque valeur par son effectif, additionne, puis divise par l'effectif total."
  },
  {
    id: "U41-244", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Série de trois valeurs : 2, 4 et 6, chacune une fois. Leur moyenne est 4.",
    question: "Quel est l'écart type (σ) de cette série, arrondi à 10⁻² ?",
    choix: ["1,63", "2,67", "2,00", "8,00"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "2,67 est la variance. L'écart type est sa racine carrée." },
      2: { type: "notion", message: "2,00 correspond à une division par n − 1 (écart type d'échantillon, sx). L'écart type de la série, σx, divise par n." }
    },
    explication: "Variance = [(2 − 4)² + (4 − 4)² + (6 − 4)²] / 3 = 8 / 3 ≈ 2,67. Écart type = √(8/3) ≈ 1,63.",
    indice: "Calcule la moyenne des carrés des écarts à la moyenne (variance), puis prends sa racine carrée."
  },
  {
    id: "U41-245", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Série ordonnée de 7 valeurs : 3 ; 5 ; 7 ; 8 ; 10 ; 12 ; 15. Le premier quartile Q1 est la plus petite valeur telle qu'au moins 25 % des valeurs lui soient inférieures ou égales. Q3 est définie de même avec 75 %.",
    question: "Quels sont Q1 et Q3 ?",
    choix: ["Q1 = 5 et Q3 = 12", "Q1 = 4 et Q3 = 11", "Q1 = 3 et Q3 = 15", "Q1 = 5 et Q3 = 10"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Un quartile est une valeur de la série. On ne fait pas la moyenne de deux valeurs voisines avec cette définition." } },
    explication: "25 % de 7 = 1,75 : on prend le 2e terme, donc Q1 = 5. 75 % de 7 = 5,25 : on prend le 6e terme, donc Q3 = 12. (La médiane est le 4e terme : 8.)",
    indice: "Calcule 25 % puis 75 % de l'effectif (7), arrondis au rang supérieur et lis la valeur."
  },
  {
    id: "U41-246", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    question: "Le coefficient de corrélation linéaire d'une série est r = −0,98. Que peut-on en conclure ?",
    choix: ["Très forte liaison linéaire, y décroît quand x augmente", "Aucune liaison entre x et y : le nuage est dispersé", "Très forte liaison linéaire, y croît quand x augmente, car |r| est proche de 1", "Le calcul est faux car r doit toujours être positif"],
    bonne: 0,
    erreurs: { 3: { type: "signe", message: "r est compris entre −1 et 1. Le signe indique le sens : négatif = y diminue quand x augmente." } },
    explication: "r est toujours entre −1 et 1. Sa valeur absolue 0,98 est proche de 1 : le nuage est presque aligné. Le signe négatif indique que la droite est décroissante.",
    indice: "Regarde la valeur absolue de r pour la force, et le signe pour le sens."
  },
  {
    id: "U41-247", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    contexte: "La droite de régression de y en x est y = 2,5x + 10.",
    question: "Quelle valeur de y prévoit-on pour x = 8 ?",
    choix: ["30", "20", "12,5", "80"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "20 oublie l'ordonnée à l'origine : y = 2,5 × 8 + 10." } },
    explication: "On remplace x par 8 : y = 2,5 × 8 + 10 = 20 + 10 = 30.",
    indice: "Remplace x par 8 dans l'équation de la droite."
  },
  {
    id: "U41-248", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Pour une série (x ; y), on pose z = ln(y). La droite de régression de z en x est z = 0,2x + 1,5.",
    question: "Quelle expression de y en fonction de x en déduit-on ?",
    choix: ["y ≈ 4,48 e^(0,2x)", "y ≈ 1,5 e^(0,2x)", "y ≈ 0,2 e^(1,5x)", "y ≈ 4,48 + 0,2x"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Il faut repasser par l'exponentielle : y = e^z = e^(0,2x + 1,5) = e^(1,5) × e^(0,2x), et e^(1,5) ≈ 4,48." } },
    explication: "z = ln(y), donc y = e^z = e^(0,2x + 1,5) = e^(1,5) × e^(0,2x). Comme e^(1,5) ≈ 4,48, on obtient y ≈ 4,48 e^(0,2x).",
    indice: "Applique l'exponentielle aux deux membres de z = 0,2x + 1,5 et sépare les puissances."
  },
  {
    id: "U41-249", epreuve: "U41", theme: "Statistique", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Avec z = ln(y), la droite de régression de z en x est z = 0,2x + 1,5.",
    question: "Estime y pour x = 5, arrondi à 10⁻¹.",
    reponse: {"valeur": 12.2, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 2.5, type: "notion", message: "2,5 est la valeur de z. Comme z = ln(y), il reste à calculer y = e^z." }
    ],
    explication: "Pour x = 5 : z = 0,2 × 5 + 1,5 = 2,5. Puis y = e^(2,5) ≈ 12,18, soit 12,2.",
    indice: "Calcule d'abord z avec la droite, puis repasse à y avec l'exponentielle."
  },
  {
    id: "U41-250", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Âge des clients d'un magasin, en classes : [0 ; 10[ : 4 clients ; [10 ; 20[ : 10 clients ; [20 ; 30[ : 6 clients.",
    question: "Quelle est la moyenne estimée, avec les centres de classes ?",
    choix: ["16", "15", "20", "10"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "15 est la moyenne des trois centres 5, 15 et 25, sans tenir compte des effectifs." } },
    explication: "Centres : 5, 15 et 25. Moyenne = (4 × 5 + 10 × 15 + 6 × 25) / 20 = (20 + 150 + 150) / 20 = 320 / 20 = 16.",
    indice: "Remplace chaque classe par son centre et fais une moyenne pondérée par les effectifs."
  },
  {
    id: "U41-251", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    question: "Un nuage de points (x ; y) a une forme exponentielle y = a e^(bx). Quel changement de variable permet un ajustement affine ?",
    choix: ["z = ln(y)", "z = e^y", "z = y / x", "z = ln(x)"],
    bonne: 0,
    explication: "Si y = a e^(bx), alors ln(y) = ln(a) + bx : z = ln(y) est une fonction affine de x. On fait la régression de z en x.",
    indice: "Quelle fonction transforme une exponentielle en droite ?"
  },

  // ---------- Probabilités ----------
  {
    id: "U41-252", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "facile",
    contexte: "Pour deux événements A et B : P(A) = 0,5, P(B) = 0,4 et P(A ∩ B) = 0,2.",
    question: "Que vaut P(A ∪ B) ?",
    choix: ["0,7", "0,9", "0,6", "0,2"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,9 est P(A) + P(B). Il faut retrancher P(A ∩ B), sinon on compte deux fois les cas communs." } },
    explication: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,5 + 0,4 − 0,2 = 0,7.",
    indice: "Les cas communs sont comptés deux fois quand on additionne P(A) et P(B)."
  },
  {
    id: "U41-253", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Pour deux événements A et B : P(A) = 0,8, P(B) = 0,4 et P(A ∩ B) = 0,2.",
    question: "Que vaut la probabilité de A sachant B, P_B(A) ?",
    choix: ["0,5", "0,25", "0,2", "1,6"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,25 est P_A(B) : tu as divisé par P(A) au lieu de P(B). « A sachant B » se divise par P(B)." } },
    explication: "P_B(A) = P(A ∩ B) / P(B) = 0,2 / 0,4 = 0,5. (À ne pas confondre avec P_A(B) = 0,2 / 0,8 = 0,25.)",
    indice: "P_B(A) = P(A ∩ B) / P(B) : on divise par la probabilité de ce qu'on sait déjà."
  },
  {
    id: "U41-254", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Deux machines taillent des verres. La machine A taille 60 % des verres et 2 % de ses verres sont défectueux. La machine B taille 40 % des verres et 5 % de ses verres sont défectueux. On prend un verre au hasard.",
    question: "Quelle est la probabilité que le verre soit défectueux ?",
    choix: ["0,032", "0,07", "0,035", "0,02"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,07 additionne les taux 2 % et 5 % sans tenir compte de la part de chaque machine." },
      2: { type: "notion", message: "0,035 est la moyenne simple de 2 % et 5 %. Il faut pondérer par 60 % et 40 %." }
    },
    explication: "Formule des probabilités totales : P(D) = P(A) × P_A(D) + P(B) × P_B(D) = 0,6 × 0,02 + 0,4 × 0,05 = 0,012 + 0,020 = 0,032.",
    indice: "Dessine un arbre : multiplie le long de chaque branche qui mène à « défectueux », puis additionne."
  },
  {
    id: "U41-255", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "difficile",
    contexte: "Mêmes machines : A taille 60 % des verres avec 2 % de défauts, B taille 40 % avec 5 % de défauts. On a trouvé que P(D) = 0,032. Un verre défectueux est tiré au hasard.",
    question: "Quelle est la probabilité qu'il vienne de la machine A ?",
    choix: ["0,375", "0,012", "0,6", "0,625"],
    bonne: 0,
    erreurs: {
      2: { type: "notion", message: "0,6 est P(A) avant de savoir que le verre est défectueux. Savoir qu'il est défectueux change la probabilité." },
      3: { type: "notion", message: "0,625 est la probabilité qu'il vienne de B. On te demande la machine A." }
    },
    explication: "P_D(A) = P(A ∩ D) / P(D) = (0,6 × 0,02) / 0,032 = 0,012 / 0,032 = 0,375. (De B : 0,02 / 0,032 = 0,625.)",
    indice: "On cherche A sachant D : divise P(A ∩ D) par P(D)."
  },
  {
    id: "U41-256", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Pour deux événements : P(A) = 0,3, P(B) = 0,5 et P(A ∩ B) = 0,15.",
    question: "Les événements A et B sont-ils indépendants ?",
    choix: ["Oui, car P(A ∩ B) = P(A) × P(B)", "Non, car P(A ∩ B) ≠ P(A) + P(B)", "Non, car P(A ∪ B) = 0,65 ≠ 0,8", "Non, car A et B ne sont pas incompatibles"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "Incompatibles (A ∩ B vide) et indépendants sont deux notions différentes. Pour l'indépendance, on teste P(A ∩ B) = P(A) × P(B)." } },
    explication: "P(A) × P(B) = 0,3 × 0,5 = 0,15 = P(A ∩ B) : A et B sont indépendants.",
    indice: "Compare P(A ∩ B) au produit P(A) × P(B)."
  },
  {
    id: "U41-257", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Une boîte contient 5 verres dont 2 sont défectueux. On en tire deux successivement, sans remise.",
    question: "Quelle est la probabilité que les deux soient défectueux ?",
    choix: ["0,1", "0,16", "0,4", "0,5"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,16 = (2/5)² correspond à un tirage avec remise. Sans remise, il reste 4 verres au second tirage, dont 1 défectueux." } },
    explication: "Premier tirage : 2/5. Il reste 4 verres dont 1 défectueux : second tirage 1/4. Probabilité : 2/5 × 1/4 = 2/20 = 0,1.",
    indice: "Après le premier tirage, combien reste-t-il de verres, et combien de défectueux ?"
  },
  {
    id: "U41-258", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Trois verres sont contrôlés. Chacun est défectueux avec la probabilité 0,05, indépendamment des autres.",
    question: "Quelle est la probabilité qu'au moins un des trois soit défectueux, arrondie à 10⁻³ ?",
    choix: ["0,143", "0,150", "0,857", "0,000"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,15 = 3 × 0,05 oublie que plusieurs verres peuvent être défectueux ensemble. Passe par l'événement contraire." },
      2: { type: "notion", message: "0,857 est la probabilité qu'aucun ne soit défectueux. « Au moins un » est son contraire." }
    },
    explication: "Événement contraire : aucun défectueux, de probabilité 0,95³ ≈ 0,857. Donc P(au moins un) = 1 − 0,857 ≈ 0,143.",
    indice: "« Au moins un » : calcule plutôt la probabilité du contraire, « aucun »."
  },
  {
    id: "U41-259", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "facile",
    question: "De combien de façons peut-on choisir 2 verres parmi 5 (sans ordre) ?",
    choix: ["10", "20", "25", "7"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "20 compte l'ordre (5 × 4). Choisir deux verres sans ordre : on divise par 2." } },
    explication: "Nombre de combinaisons de 2 parmi 5 : C(5 ; 2) = 5 × 4 / 2 = 10 (touche nCr de la calculatrice).",
    indice: "Sans ordre : combinaisons. Compte avec l'ordre (5 × 4), puis divise par le nombre d'ordres possibles."
  },
  {
    id: "U41-260", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Dans un lot, chaque verre est défectueux avec la probabilité 0,1, indépendamment des autres. On en contrôle 10. X est le nombre de verres défectueux et suit la loi binomiale B(10 ; 0,1).",
    question: "Que vaut P(X = 2), arrondie à 10⁻³ ?",
    choix: ["0,194", "0,387", "0,930", "0,010"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,387 est P(X = 1). Pour P(X = 2), le coefficient est C(10 ; 2) = 45." },
      2: { type: "notion", message: "0,930 est P(X ≤ 2) (0, 1 ou 2 défectueux). Ici on veut exactement 2." }
    },
    explication: "P(X = 2) = C(10 ; 2) × 0,1² × 0,9⁸ = 45 × 0,01 × 0,4305 ≈ 0,194 (à la calculatrice : binomFdp(10 ; 0,1 ; 2)).",
    indice: "P(X = k) = C(n ; k) pᵏ (1 − p)^(n − k). Ou utilise la loi binomiale de ta calculatrice."
  },

  // ---------- Division harmonique ----------
  {
    id: "U41-261", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "facile",
    question: "Sur une droite graduée, quand dit-on que (A, B ; C, D) est une division harmonique ?",
    choix: ["CA / CB = −DA / DB", "CA / CB = DA / DB", "CA × CB = DA × DB", "CA + CB = 0"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "Le signe moins est essentiel : C et D sont de part et d'autre (l'un à l'intérieur de [AB], l'autre à l'extérieur)." } },
    explication: "(A, B ; C, D) est harmonique si CA / CB = −DA / DB, avec des mesures algébriques. Un des points C, D est entre A et B, l'autre est à l'extérieur du segment.",
    indice: "Les rapports de distances algébriques sont opposés."
  },
  {
    id: "U41-262", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    contexte: "Sur une droite graduée : A a pour abscisse 0, B a pour abscisse 4 et C a pour abscisse 1.",
    question: "Détermine l'abscisse du point D, conjugué harmonique de C par rapport à A et B.",
    choix: ["−2", "2", "8", "−4"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Teste : avec d = 2, DA/DB = (0 − 2)/(4 − 2) = −1 et −DA/DB = 1, alors que CA/CB = −1/3. Ce n'est pas égal." } },
    explication: "CA / CB = (0 − 1) / (4 − 1) = −1/3. Avec D d'abscisse d : −DA / DB = d / (4 − d). On pose d / (4 − d) = −1/3, donc 3d = −(4 − d), soit 2d = −4 et d = −2. Contrôle : DA/DB = 2/6 = 1/3 et −DA/DB = −1/3 ✓.",
    indice: "Écris CA/CB avec les abscisses, puis résous CA/CB = −DA/DB en prenant d pour l'abscisse de D."
  },
  {
    id: "U41-263", epreuve: "U41", theme: "Division harmonique", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Sur une droite graduée : A a pour abscisse 0, B a pour abscisse 10 et C a pour abscisse 4. (A, B ; C, D) est une division harmonique.",
    question: "Quelle est l'abscisse de D ?",
    reponse: {"valeur": -20, "unite": "", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 20, type: "signe", message: "D est à l'extérieur de [AB], du côté de A : son abscisse est négative." }
    ],
    explication: "CA / CB = (0 − 4) / (10 − 4) = −4/6 = −2/3. Avec D d'abscisse d : −DA / DB = d / (10 − d) = −2/3, donc 3d = −20 + 2d et d = −20. Contrôle : DA/DB = 20/30 = 2/3 ✓.",
    indice: "Pose d pour l'abscisse de D et résous d / (10 − d) = −2/3. Garde le signe."
  },
  {
    id: "U41-264", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    contexte: "I est le milieu de [AB]. (A, B ; C, D) est une division harmonique. On a IA = 3 cm et IC = 1 cm (C entre I et B, D du même côté que C).",
    question: "Que vaut ID, avec la relation IA² = IC × ID ?",
    choix: ["9 cm", "3 cm", "4 cm", "1/3 cm"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "1/3 vient de IC / IA. Il faut isoler ID : ID = IA² / IC = 9 / 1." } },
    explication: "Avec le milieu I : IA² = IC × ID. Donc ID = IA² / IC = 3² / 1 = 9 cm. D est bien du même côté que C, à 9 cm de I.",
    indice: "Isole ID dans IA² = IC × ID."
  },
  {
    id: "U41-265", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    question: "(A, B ; C, D) est une division harmonique. Laquelle de ces divisions l'est aussi, quelle que soit la figure ?",
    choix: ["(C, D ; A, B)", "(A, C ; B, D)", "(B, C ; A, D)", "(A, D ; B, C)"],
    bonne: 0,
    explication: "La propriété est réciproque : si C et D sont conjugués harmoniques par rapport à A et B, alors A et B le sont par rapport à C et D. Les trois autres échangent les rôles autrement et sont fausses en général. Exemple : A(0), B(4), C(1), D(−2) est harmonique, mais (A, C ; B, D) ne l'est pas.",
    indice: "Les paires {A, B} et {C, D} peuvent échanger leurs rôles."
  },
  {
    id: "U41-266", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "difficile",
    question: "C est le milieu de [AB]. Où se trouve son conjugué harmonique D par rapport à A et B ?",
    choix: ["À l'infini : aucun point à distance finie", "En A, car A est une extrémité du segment [AB]", "Au milieu de [AB] aussi, au même point que C", "En B, car B est l'autre extrémité du segment"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "C et D ne peuvent pas être confondus : l'un est à l'intérieur de [AB], l'autre à l'extérieur." } },
    explication: "Si C est le milieu, CA / CB = −1, donc il faudrait DA / DB = 1 : DA = DB, ce qui n'arrive pour aucun point à distance finie (sauf à l'infini). Le conjugué du milieu est le « point à l'infini » de la droite.",
    indice: "Calcule CA/CB quand C est le milieu, puis cherche D avec DA/DB = −CA/CB."
  },

  // ---------- Lot 4 : lois de probabilité, estimation et tests ----------
  {
    id: "U41-267", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Sur 100 verres contrôlés, chacun est défectueux avec la probabilité 0,04, indépendamment des autres. X, nombre de verres défectueux, suit B(100 ; 0,04).",
    question: "Quel est l'écart type de X, arrondi à 10⁻² ?",
    choix: ["1,96", "3,84", "4", "0,98"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "3,84 est la variance np(1 − p) = 100 × 0,04 × 0,96. L'écart type est sa racine carrée." },
      2: { type: "notion", message: "4 est l'espérance E(X) = np, pas l'écart type." }
    },
    explication: "Pour une loi binomiale, V(X) = np(1 − p) = 100 × 0,04 × 0,96 = 3,84. L'écart type vaut σ = √3,84 ≈ 1,96.",
    indice: "Calcule la variance np(1 − p), puis prends sa racine carrée."
  },
  {
    id: "U41-268", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Le nombre de clients qui entrent en une demi-heure suit une loi de Poisson de paramètre 3. On donne e^(−3) ≈ 0,0498.",
    question: "Quelle est la probabilité que 2 clients exactement entrent en une demi-heure, arrondie à 10⁻³ ?",
    choix: ["0,224", "0,149", "0,050", "0,448"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,149 est P(X = 1). Pour k = 2, la formule est e^(−λ) × λ² / 2!." },
      3: { type: "notion", message: "Tu as oublié de diviser par 2! = 2 : P(X = 2) = e^(−3) × 3² / 2." }
    },
    explication: "P(X = k) = e^(−λ) × λᵏ / k!. Pour k = 2 et λ = 3 : e^(−3) × 9 / 2 ≈ 0,0498 × 4,5 ≈ 0,224.",
    indice: "Applique e^(−λ) λᵏ / k! avec k = 2, ou la touche poissonFdp de la calculatrice."
  },
  {
    id: "U41-269", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "facile",
    question: "X suit une loi de Poisson de paramètre 4. Quel est son écart type ?",
    choix: ["2", "4", "16", "1"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "4 est l'espérance et la variance. L'écart type est la racine carrée de la variance : √4 = 2." } },
    explication: "Pour une loi de Poisson de paramètre λ, E(X) = λ et V(X) = λ. L'écart type est √λ = √4 = 2.",
    indice: "Pour Poisson, la variance est égale au paramètre."
  },
  {
    id: "U41-270", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Sur 200 verres, chacun est défectueux avec la probabilité 0,01. X, nombre de verres défectueux, suit B(200 ; 0,01).",
    question: "Par quelle loi peut-on approcher X, puisque n est grand et p petit ?",
    choix: ["Poisson de paramètre 2", "Poisson de paramètre 0,01", "Poisson de paramètre 200", "Loi normale de moyenne 2 et d'écart type 1,41"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "La loi normale s'utilise quand p n'est pas petit (np et n(1 − p) grands). Ici np = 2 est petit : on approche par Poisson." } },
    explication: "Quand n est grand et p petit, B(n ; p) est proche de la loi de Poisson de paramètre λ = np = 200 × 0,01 = 2.",
    indice: "Le paramètre de la loi de Poisson est l'espérance np."
  },
  {
    id: "U41-271", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "La durée de montage d'une paire (en minutes) suit la loi normale de moyenne 120 et d'écart type 10. On donne Π(1) ≈ 0,841 pour la loi normale centrée réduite.",
    question: "Que vaut P(X ≤ 130) ?",
    choix: ["0,841", "0,159", "0,683", "0,977"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,159 est P(X ≥ 130), le complémentaire. On te demande « inférieure ou égale »." },
      2: { type: "notion", message: "0,683 est P(110 ≤ X ≤ 130), la probabilité de rester à moins d'un écart type de la moyenne." }
    },
    explication: "On centre et on réduit : T = (X − 120) / 10. X ≤ 130 équivaut à T ≤ (130 − 120) / 10 = 1. Donc P(X ≤ 130) = Π(1) ≈ 0,841.",
    indice: "Ramène-toi à la loi normale centrée réduite : (valeur − moyenne) / écart type."
  },
  {
    id: "U41-272", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Le diamètre X d'un verre fini (en mm) suit la loi normale de moyenne 70 et d'écart type 0,3. On donne Π(2) ≈ 0,977.",
    question: "Que vaut P(X > 70,6), arrondie à 10⁻³ ?",
    choix: ["0,023", "0,977", "0,046", "0,500"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,977 est P(X ≤ 70,6). On cherche « supérieur » : 1 − 0,977." },
      2: { type: "notion", message: "0,046 compte aussi les verres trop petits (X < 69,4). Ici on ne demande que le côté supérieur." }
    },
    explication: "(70,6 − 70) / 0,3 = 2. P(X > 70,6) = 1 − Π(2) = 1 − 0,977 = 0,023.",
    indice: "Centre et réduis, puis passe au complémentaire : P(X > a) = 1 − P(X ≤ a)."
  },
  {
    id: "U41-273", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "X suit la loi normale de moyenne 100 et d'écart type 5.",
    question: "Quel est l'intervalle centré sur la moyenne qui contient 95 % des valeurs de X ?",
    choix: ["[90,2 ; 109,8]", "[95 ; 105]", "[85 ; 115]", "[98,04 ; 101,96]"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "[95 ; 105] est m ± σ, qui ne contient qu'environ 68 % des valeurs." },
      3: { type: "notion", message: "Tu as oublié de multiplier par l'écart type : l'intervalle est m ± 1,96 × σ, soit 100 ± 1,96 × 5." }
    },
    explication: "Pour une loi normale, P(m − 1,96σ ≤ X ≤ m + 1,96σ) ≈ 0,95. Ici 1,96 × 5 = 9,8, donc l'intervalle est [100 − 9,8 ; 100 + 9,8] = [90,2 ; 109,8].",
    indice: "Pour 95 %, la demi-largeur est 1,96 écarts types."
  },
  {
    id: "U41-274", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Le temps de polissage X (en minutes) suit la loi normale de moyenne 30 et d'écart type 2,5. On cherche t tel que P(X ≤ t) = 0,975.",
    question: "Calcule t, arrondi à 10⁻¹.",
    reponse: {"valeur": 34.9, "unite": "min", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 1.96, type: "notion", message: "1,96 est la valeur pour la loi centrée réduite. Il faut revenir à X : t = 30 + 1,96 × 2,5." }
    ],
    explication: "Pour la loi normale centrée réduite, P(T ≤ 1,96) ≈ 0,975. Donc t = m + 1,96 σ = 30 + 1,96 × 2,5 = 30 + 4,9 = 34,9 min. (FracNormale(0,975 ; 30 ; 2,5) à la calculatrice.)",
    indice: "Cherche d'abord la valeur de la loi centrée réduite, puis repasse à X avec m + tσ."
  },
  {
    id: "U41-275", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "La durée de vie T (en années) d'un chargeur suit la loi exponentielle de paramètre λ = 0,1. On donne e⁻¹ ≈ 0,368.",
    question: "Quelle est la probabilité qu'il dure plus de 10 ans ?",
    choix: ["0,368", "0,632", "0,1", "1"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,632 est P(T ≤ 10). On cherche « plus de 10 ans » : P(T > 10) = e^(−λt)." } },
    explication: "P(T > t) = e^(−λt). Ici P(T > 10) = e^(−0,1 × 10) = e⁻¹ ≈ 0,368. (Et P(T ≤ 10) = 1 − 0,368 = 0,632.)",
    indice: "Pour une loi exponentielle, P(T > t) = e^(−λt)."
  },
  {
    id: "U41-276", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "facile",
    contexte: "La durée de vie moyenne d'une ampoule de loupe est de 500 heures. On la modélise par une loi exponentielle.",
    question: "Quel est le paramètre λ de cette loi ?",
    choix: ["0,002", "500", "0,5", "0,2"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "500 est l'espérance. Pour une loi exponentielle, E(T) = 1/λ, donc λ = 1/500." } },
    explication: "Pour une loi exponentielle de paramètre λ, E(T) = 1/λ. Donc λ = 1/E(T) = 1/500 = 0,002.",
    indice: "L'espérance d'une loi exponentielle est l'inverse du paramètre."
  },
  {
    id: "U41-277", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "difficile",
    contexte: "La durée de vie T d'un appareil de mesure suit une loi exponentielle (loi sans mémoire). Il a déjà fonctionné 100 heures.",
    question: "Quelle est la probabilité qu'il fonctionne encore au moins 50 heures de plus ?",
    choix: ["P(T > 50)", "P(T > 150)", "P(T > 100)", "P(T > 50) × P(T > 100)"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "P(T > 150) est la probabilité de dépasser 150 heures depuis le début, pas sachant qu'il a déjà tenu 100 heures." } },
    explication: "Une loi exponentielle est sans mémoire : P(T > 100 + 50 | T > 100) = P(T > 50). L'appareil « oublie » qu'il a déjà fonctionné 100 heures.",
    indice: "Sans mémoire : le passé n'influe pas sur la durée à venir."
  },
  {
    id: "U41-278", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "facile",
    contexte: "Le temps d'attente X (en minutes) suit la loi uniforme sur [0 ; 20].",
    question: "Que vaut P(5 ≤ X ≤ 12) ?",
    choix: ["0,35", "0,7", "0,25", "0,6"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,7 est la longueur 12 − 5 = 7 divisée par 10. L'intervalle [0 ; 20] a pour longueur 20." } },
    explication: "Pour la loi uniforme sur [a ; b], P(c ≤ X ≤ d) = (d − c) / (b − a) = (12 − 5) / 20 = 7 / 20 = 0,35.",
    indice: "Longueur de l'intervalle cherché ÷ longueur de [0 ; 20]."
  },
  {
    id: "U41-279", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "On contrôle 20 montures. Chacune a un défaut avec la probabilité 0,3, indépendamment des autres. X suit B(20 ; 0,3).",
    question: "À la calculatrice, calcule P(X ≤ 5), arrondie à 10⁻³.",
    reponse: {"valeur": 0.416, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.238, type: "notion", message: "0,238 est P(X ≤ 4), c'est-à-dire P(X < 5). L'inégalité X ≤ 5 comprend aussi X = 5." }
    ],
    explication: "P(X ≤ 5) = P(X = 0) + … + P(X = 5). La fonction de répartition de la loi binomiale (binomFRép(20 ; 0,3 ; 5)) donne ≈ 0,4164, soit 0,416.",
    indice: "Utilise la fonction de répartition binomiale (cumulée) de la calculatrice, avec k = 5."
  },
  {
    id: "U41-280", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "X suit la loi binomiale B(900 ; 0,2). On l'approche par une loi normale.",
    question: "Quels sont les paramètres de cette loi normale ?",
    choix: ["m = 180 et σ = 12", "m = 180 et σ = 144", "m = 180 et σ = 13,4", "m = 900 et σ = 12"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "144 est la variance np(1 − p). Le deuxième paramètre de la loi normale est l'écart type, √144 = 12." },
      2: { type: "notion", message: "13,4 vaut √(np) = √180. Il faut √(np(1 − p)) = √(900 × 0,2 × 0,8) = √144." }
    },
    explication: "On prend m = np = 900 × 0,2 = 180 et σ = √(np(1 − p)) = √(900 × 0,2 × 0,8) = √144 = 12.",
    indice: "m = np et σ = √(np(1 − p))."
  },

  // ---------- Estimation et tests ----------
  {
    id: "U41-281", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Une proportion théorique vaut p = 0,3. On prélève des échantillons de taille n = 100. L'intervalle de fluctuation à 95 % est [p − 1,96 √(p(1 − p)/n) ; p + 1,96 √(p(1 − p)/n)].",
    question: "Quel est l'intervalle de fluctuation à 95 % de la fréquence, arrondi à 10⁻³ ?",
    choix: ["[0,210 ; 0,390]", "[0,260 ; 0,340]", "[0,296 ; 0,304]", "[0,100 ; 0,500]"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "[0,26 ; 0,34] correspond à p ± √(p(1 − p)/n), sans le coefficient 1,96." },
      2: { type: "notion", message: "Tu as oublié la racine carrée : il faut 1,96 × √(0,21/100), pas 1,96 × 0,21/100." }
    },
    explication: "√(0,3 × 0,7 / 100) = √0,0021 ≈ 0,0458. Demi-largeur : 1,96 × 0,0458 ≈ 0,0898. Intervalle : [0,3 − 0,090 ; 0,3 + 0,090] = [0,210 ; 0,390].",
    indice: "Calcule la racine carrée de p(1 − p)/n, multiplie par 1,96, puis ajoute et retranche à p."
  },
  {
    id: "U41-282", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Sur 250 clients interrogés, 150 se disent satisfaits : f = 0,6. L'intervalle de confiance à 95 % est [f − 1,96 √(f(1 − f)/n) ; f + 1,96 √(f(1 − f)/n)].",
    question: "Quel est l'intervalle de confiance de la proportion de clients satisfaits, arrondi à 10⁻³ ?",
    choix: ["[0,539 ; 0,661]", "[0,569 ; 0,631]", "[0,598 ; 0,602]", "[0,520 ; 0,680]"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "[0,569 ; 0,631] est f ± √(f(1 − f)/n) : le coefficient 1,96 est oublié." },
      3: { type: "notion", message: "[0,520 ; 0,680] correspond à un niveau de confiance de 99 % (coefficient 2,58) et non de 95 %." }
    },
    explication: "√(0,6 × 0,4 / 250) = √0,00096 ≈ 0,0310. Demi-largeur : 1,96 × 0,0310 ≈ 0,0607. Intervalle : [0,6 − 0,061 ; 0,6 + 0,061] = [0,539 ; 0,661].",
    indice: "Même calcul qu'un intervalle de fluctuation, mais centré sur la fréquence observée f."
  },
  {
    id: "U41-283", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    question: "Par quel facteur faut-il multiplier la taille de l'échantillon pour diviser par 2 l'amplitude d'un intervalle de confiance ?",
    choix: ["4", "2", "√2", "8"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "L'amplitude est proportionnelle à 1/√n. Multiplier n par 2 ne la divise que par √2 ≈ 1,41." } },
    explication: "La demi-largeur contient 1/√n. Pour la diviser par 2, il faut que √n soit multiplié par 2, donc n multiplié par 4.",
    indice: "La demi-largeur est proportionnelle à 1/√n."
  },
  {
    id: "U41-284", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Un fabricant annonce que ses boîtiers pèsent en moyenne 80 g. On soupçonne que la masse moyenne est en réalité supérieure.",
    question: "Quelles hypothèses pose-t-on pour ce test ?",
    choix: ["H0 : μ = 80 ; H1 : μ > 80", "H0 : μ > 80 ; H1 : μ = 80", "H0 : μ = 80 ; H1 : μ ≠ 80", "H0 : μ = 80 ; H1 : μ < 80"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "H1 « μ ≠ 80 » donne un test bilatéral. Ici on soupçonne une masse supérieure : le test est unilatéral à droite." } },
    explication: "H0 est l'hypothèse de référence (l'annonce du fabricant) : μ = 80. H1 traduit le soupçon : μ > 80. Le test est unilatéral à droite.",
    indice: "H0 est ce qu'on annonce ; H1 est ce qu'on soupçonne."
  },
  {
    id: "U41-285", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "La masse d'un boîtier a pour écart type 3 g. On prélève des échantillons de 36 boîtiers.",
    question: "Quel est l'écart type de la moyenne d'un échantillon de 36 boîtiers ?",
    choix: ["0,5", "3", "0,083", "18"],
    bonne: 0,
    erreurs: {
      2: { type: "notion", message: "0,083 = 3 / 36. Il faut diviser par la racine carrée de n : 3 / √36 = 3 / 6." },
      3: { type: "notion", message: "18 = 3 × 6 : il faut diviser par √n, non multiplier." }
    },
    explication: "L'écart type de la moyenne d'échantillon est σ / √n = 3 / √36 = 3 / 6 = 0,5.",
    indice: "On divise l'écart type de la population par √n."
  },
  {
    id: "U41-286", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Test unilatéral à droite au seuil de 5 %. H0 : μ = 80 g. Sous H0, la moyenne d'un échantillon de 36 boîtiers suit la loi normale de moyenne 80 et d'écart type 0,5. On rejette H0 si la moyenne observée dépasse un seuil s, avec P(moyenne ≤ s) = 0,95. On donne 1,645 pour la loi centrée réduite.",
    question: "Calcule le seuil s, arrondi à 10⁻².",
    reponse: {"valeur": 80.82, "unite": "g", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 80.98, type: "notion", message: "Tu as utilisé 1,96, valeur d'un test bilatéral. Le test est unilatéral : on prend 1,645." }
    ],
    explication: "s = 80 + 1,645 × 0,5 = 80 + 0,8225 ≈ 80,82 g.",
    indice: "s = moyenne sous H0 + (valeur de la loi centrée réduite) × écart type de la moyenne."
  },
  {
    id: "U41-287", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Mêmes données : test unilatéral à droite au seuil de 5 %, H0 : μ = 80 g. Le seuil de rejet est s = 80,82 g. Sur un échantillon de 36 boîtiers, on observe une moyenne de 80,9 g.",
    question: "Que décide-t-on pour la masse moyenne des boîtiers ?",
    choix: ["On rejette H0 : 80,9 dépasse 80,82", "On accepte H0 : 80,9 est proche de 80", "On rejette H1 : 80,9 dépasse 80,82", "On ne peut pas conclure avec un seul échantillon"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "Un test remet en cause H0, pas H1. Quand la valeur observée est dans la zone de rejet, on rejette H0 (et on retient H1)." } },
    explication: "La moyenne observée (80,9) est supérieure au seuil 80,82 : elle est dans la zone de rejet. On rejette H0 au seuil de 5 % : la masse moyenne est significativement supérieure à 80 g.",
    indice: "Compare la valeur observée au seuil de rejet."
  },
  {
    id: "U41-288", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "facile",
    question: "Dans un test au seuil de 5 %, que représente ce risque de 5 % ?",
    choix: ["La probabilité de rejeter H0 alors qu'elle est vraie", "La probabilité d'accepter H0 alors qu'elle est fausse", "La probabilité que H0 soit vraie", "La probabilité que l'échantillon soit représentatif"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "C'est le risque de seconde espèce (β), un autre risque. Le seuil α concerne le rejet à tort de H0." } },
    explication: "Le seuil α = 5 % est le risque de première espèce : rejeter H0 alors qu'elle est vraie.",
    indice: "Le seuil mesure le risque de se tromper en rejetant H0."
  },
  {
    id: "U41-289", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "difficile",
    contexte: "Un fournisseur affirme que 90 % de ses verres sont conformes. Test bilatéral à 5 % de H0 : p = 0,9, sur un échantillon de n = 100 verres. Sous H0, l'intervalle de fluctuation à 95 % de la fréquence est [0,841 ; 0,959]. On observe 83 verres conformes.",
    question: "Que conclut-on sur la proportion de verres conformes ?",
    choix: ["On rejette H0 : 0,83 est hors de [0,841 ; 0,959]", "On accepte H0 : 0,83 est dans [0,841 ; 0,959]", "On accepte H0 : l'écart de 0,07 est petit, donc négligeable", "On ne peut rien conclure avec n = 100, l'échantillon est trop petit"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "On ne juge pas « petit » ou « grand » à l'œil : la décision se prend en comparant f à l'intervalle de fluctuation." } },
    explication: "La fréquence observée f = 83 / 100 = 0,83 est inférieure à 0,841 : elle est en dehors de l'intervalle de fluctuation. On rejette H0 au seuil de 5 % : la proportion de verres conformes n'est probablement pas 0,9.",
    indice: "Calcule la fréquence observée et vois si elle est dans l'intervalle de fluctuation."
  },
  {
    id: "U41-290", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Sur 500 porteurs de lentilles, 100 sont satisfaits de leur adaptation : f = 0,2. L'intervalle de confiance à 95 % est [f − 1,96 √(f(1 − f)/n) ; f + 1,96 √(f(1 − f)/n)].",
    question: "Calcule la borne inférieure de cet intervalle, arrondie à 10⁻³.",
    reponse: {"valeur": 0.165, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.235, type: "notion", message: "0,235 est la borne supérieure (f + 1,96 √…). On te demande la borne inférieure." }
    ],
    explication: "√(0,2 × 0,8 / 500) = √0,00032 ≈ 0,01789. Demi-largeur : 1,96 × 0,01789 ≈ 0,0351. Borne inférieure : 0,2 − 0,0351 ≈ 0,165.",
    indice: "Calcule la demi-largeur 1,96 √(f(1 − f)/n), puis retranche-la à f."
  },
  {
    id: "U41-291", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "facile",
    contexte: "Pour une même fréquence observée et une même taille d'échantillon, on passe d'un niveau de confiance de 95 % à 99 %.",
    question: "Que devient l'intervalle de confiance ?",
    choix: ["Il devient plus large", "Il devient plus étroit", "Il reste identique", "Il est simplement décalé"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Plus on veut être sûr, plus le coefficient (1,96 puis 2,58) augmente : l'intervalle s'élargit." } },
    explication: "Le coefficient passe de 1,96 à 2,58, donc la demi-largeur augmente. Pour être plus sûr de contenir la vraie valeur, il faut un intervalle plus large.",
    indice: "Compare les coefficients 1,96 (95 %) et 2,58 (99 %)."
  },
  {
    id: "U41-292", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Test bilatéral au seuil de 5 %. H0 : μ = 60 g. Sous H0, la moyenne d'un échantillon suit la loi normale de moyenne 60 et d'écart type 0,5. On accepte H0 si la moyenne observée est dans [60 − 1,96 × 0,5 ; 60 + 1,96 × 0,5].",
    question: "Calcule la borne supérieure de cette zone d'acceptation, arrondie à 10⁻².",
    reponse: {"valeur": 60.98, "unite": "g", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 60.82, type: "notion", message: "Tu as utilisé 1,645, valeur d'un test unilatéral. Pour un test bilatéral à 5 %, on utilise 1,96." }
    ],
    explication: "Borne supérieure = 60 + 1,96 × 0,5 = 60 + 0,98 = 60,98 g. (La borne inférieure est 59,02 g.)",
    indice: "Ajoute 1,96 écarts types à la moyenne sous H0."
  },

  // ---------- Lot 5 : intégrales, équations différentielles, fonctions ----------
  {
    id: "U41-293", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    question: "Quelle est une primitive de f(x) = 4x³ − 6x + 1 ?",
    choix: ["F(x) = x⁴ − 3x² + x", "F(x) = 12x² − 6", "F(x) = x⁴ − 6x² + x", "F(x) = 4x⁴ − 6x² + x"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "12x² − 6 est la dérivée de f, pas une primitive. Pour une primitive, on augmente les puissances : xⁿ devient xⁿ⁺¹ / (n + 1)." } },
    explication: "Terme par terme : 4x³ → x⁴ (car 4x⁴/4), −6x → −3x² (car −6x²/2), 1 → x. Donc F(x) = x⁴ − 3x² + x. Vérification : F'(x) = 4x³ − 6x + 1.",
    indice: "Une primitive de xⁿ est xⁿ⁺¹ / (n + 1). Vérifie en dérivant ton résultat."
  },
  {
    id: "U41-294", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 1 à 3 de 1/x² dx.",
    choix: ["2/3", "−2/3", "ln 3 ≈ 1,10", "8/9"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "ln est la primitive de 1/x, pas de 1/x². Ici 1/x² = x⁻², dont une primitive est −1/x." } },
    explication: "1/x² = x⁻², une primitive est F(x) = −1/x. L'intégrale vaut F(3) − F(1) = −1/3 − (−1) = −1/3 + 1 = 2/3.",
    indice: "Écris 1/x² = x⁻², puis cherche la primitive avec la règle des puissances."
  },
  {
    id: "U41-295", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 0 à ln 2 de e^x dx.",
    choix: ["1", "2", "ln 2 ≈ 0,69", "3"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "2 est e^(ln 2) = F(ln 2). Il faut retrancher F(0) = e⁰ = 1." } },
    explication: "Une primitive de e^x est e^x. L'intégrale vaut e^(ln 2) − e⁰ = 2 − 1 = 1.",
    indice: "Rappelle-toi que e^(ln 2) = 2."
  },
  {
    id: "U41-296", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "f(x) = x² sur [0 ; 3].",
    question: "Quelle est la valeur moyenne de f sur [0 ; 3] ?",
    choix: ["3", "9", "4,5", "1"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "9 est l'intégrale. Il faut diviser par la longueur de l'intervalle, 3." },
      2: { type: "notion", message: "4,5 = (f(0) + f(3)) / 2 : cette moyenne des extrémités ne vaut que pour une fonction affine, pas pour x²." }
    },
    explication: "L'intégrale de 0 à 3 de x² dx = [x³/3] = 9. Valeur moyenne = 9 / 3 = 3.",
    indice: "Calcule l'intégrale puis divise par b − a."
  },
  {
    id: "U41-297", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Le niveau de stock d'un produit est modélisé par f(x) = 50 − 10 e^(−0,2x) sur [0 ; 10].",
    question: "Calcule la valeur moyenne de f sur [0 ; 10], arrondie à 10⁻².",
    reponse: {"valeur": 45.68, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 456.77, type: "notion", message: "456,77 est l'intégrale. La valeur moyenne s'obtient en divisant par 10 (la longueur de l'intervalle)." },
      { valeur: 54.32, type: "signe", message: "54,32 correspond à f(x) = 50 + 10 e^(−0,2x). Le terme −10 e^(−0,2x) se retranche : la moyenne vaut 50 − 4,32 = 45,68." }
    ],
    explication: "Une primitive de f est F(x) = 50x + 50 e^(−0,2x). L'intégrale vaut F(10) − F(0) = (500 + 50 e⁻²) − 50 ≈ 456,77. Valeur moyenne = 456,77 / 10 ≈ 45,68. (À la calculatrice : fnInt.)",
    indice: "Primitive de e^(ax) : e^(ax)/a. Calcule F(10) − F(0), puis divise par 10."
  },
  {
    id: "U41-298", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "Sur [0 ; 2], la courbe de f(x) = x² − 4 est sous l'axe des abscisses.",
    question: "Quelle est l'aire du domaine compris entre la courbe et l'axe des abscisses sur [0 ; 2] ?",
    choix: ["16/3 ≈ 5,33", "−16/3 ≈ −5,33", "8/3 ≈ 2,67", "8"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "Une aire est toujours positive. L'intégrale vaut −16/3 car f est négative : l'aire est son opposé." } },
    explication: "L'intégrale de 0 à 2 de (x² − 4) dx = [x³/3 − 4x] = 8/3 − 8 = −16/3. La fonction est négative sur [0 ; 2] : l'aire vaut l'opposé, 16/3 ≈ 5,33.",
    indice: "Quand f est négative, l'aire est l'opposé de l'intégrale."
  },
  {
    id: "U41-299", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "facile",
    contexte: "Sur [0 ; 2], une fonction f vérifie f(x) ≥ 3.",
    question: "Que peut-on dire de l'intégrale de f entre 0 et 2 ?",
    choix: ["Elle est supérieure ou égale à 6", "Elle est supérieure ou égale à 3", "Elle est inférieure ou égale à 6", "Elle est égale à 6"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "On intègre sur un intervalle de longueur 2 : l'intégrale de 3 sur [0 ; 2] vaut 3 × 2 = 6, pas 3." } },
    explication: "Si f ≥ g sur [a ; b], alors l'intégrale de f ≥ l'intégrale de g. Avec g = 3 : l'intégrale de 3 sur [0 ; 2] vaut 3 × 2 = 6, donc l'intégrale de f est ≥ 6.",
    indice: "Intègre l'inégalité f(x) ≥ 3 sur l'intervalle."
  },
  {
    id: "U41-300", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "difficile",
    contexte: "On admet qu'une primitive de ln(x) sur ]0 ; +∞[ est F(x) = x ln(x) − x.",
    question: "Calcule l'intégrale de 1 à e de ln(x) dx.",
    choix: ["1", "e − 1 ≈ 1,72", "0", "e ≈ 2,72"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "0 est F(e) = e − e. Il faut retrancher F(1) = 1 × 0 − 1 = −1 : l'intégrale vaut 0 − (−1) = 1." } },
    explication: "F(e) = e × 1 − e = 0. F(1) = 1 × 0 − 1 = −1. L'intégrale vaut F(e) − F(1) = 0 − (−1) = 1.",
    indice: "Calcule F(e) et F(1) séparément, avec ln(e) = 1 et ln(1) = 0."
  },
  {
    id: "U41-301", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Sur [0 ; 1], on compare f(x) = e^x et g(x) = 1. La courbe de f est au-dessus de celle de g.",
    question: "Calcule l'aire du domaine compris entre les deux courbes, arrondie à 10⁻².",
    reponse: {"valeur": 0.72, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 1.72, type: "notion", message: "1,72 est l'aire sous la courbe de f seule (e − 1). Il faut retrancher l'aire sous g, qui vaut 1." }
    ],
    explication: "Aire = intégrale de 0 à 1 de (e^x − 1) dx = [e^x − x] de 0 à 1 = (e − 1) − (1 − 0) = e − 2 ≈ 0,72.",
    indice: "Intègre (courbe du dessus − courbe du dessous) entre 0 et 1."
  },
  {
    id: "U41-302", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "Le débit de clients d'un magasin (en clients par heure) est f(t) = −t² + 6t, pour t entre 0 et 6 heures.",
    question: "Combien de clients passent au total pendant ces 6 heures ?",
    choix: ["36", "6", "18", "72"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "6 est le débit moyen par heure (36 ÷ 6). La question porte sur le total sur 6 heures." } },
    explication: "Le total est l'intégrale du débit : l'intégrale de 0 à 6 de (−t² + 6t) dt = [−t³/3 + 3t²] = −72 + 108 = 36 clients.",
    indice: "Un total = l'intégrale du débit sur la durée."
  },
  {
    id: "U41-303", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "difficile",
    question: "Calcule l'intégrale de 0 à 2 de (2x + 1) / (x² + x + 1) dx.",
    choix: ["ln 7 ≈ 1,95", "ln 5 ≈ 1,61", "7", "6"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "7 est la valeur du dénominateur en x = 2. La primitive d'une fonction u'/u est ln(u)." } },
    explication: "Le numérateur 2x + 1 est la dérivée du dénominateur u(x) = x² + x + 1. Une primitive est ln(u(x)). L'intégrale vaut ln(7) − ln(1) = ln 7 ≈ 1,95.",
    indice: "Vérifie si le numérateur est la dérivée du dénominateur : forme u'/u."
  },
  {
    id: "U41-304", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "difficile",
    question: "Calcule l'intégrale de 0 à 1 de 2x e^(x²) dx.",
    choix: ["e − 1 ≈ 1,72", "e ≈ 2,72", "2(e − 1) ≈ 3,44", "e² − 1 ≈ 6,39"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "e² − 1 vient d'une primitive e^(2x) prise à tort. L'exposant à dériver est x², pas 2x : c'est la forme u' e^u, de primitive e^(x²)." } },
    explication: "La fonction est de la forme u' e^u avec u(x) = x². Une primitive est e^u = e^(x²). L'intégrale vaut e^1 − e^0 = e − 1 ≈ 1,72.",
    indice: "Repère la forme u' e^u : une primitive est e^u."
  },

  // ---------- Équations différentielles ----------
  {
    id: "U41-305", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Une quantité y vérifie y' + 0,4y = 0 avec y(0) = 50 (x en heures).",
    question: "Calcule y(5), arrondi à 10⁻¹.",
    reponse: {"valeur": 6.8, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 369.5, type: "signe", message: "Tu as pris e^(+2). L'équation y' + 0,4y = 0 donne y = 50 e^(−0,4x) : la quantité diminue." }
    ],
    explication: "y' + 0,4y = 0 donne y(x) = C e^(−0,4x). Avec y(0) = 50, C = 50. y(5) = 50 e^(−2) ≈ 50 × 0,1353 ≈ 6,8.",
    indice: "Écris y(x) = C e^(−0,4x), trouve C avec y(0), puis remplace x par 5."
  },
  {
    id: "U41-306", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "Quelles sont les solutions de y' = 3y − 6 ?",
    choix: ["y = C e^(3x) + 2", "y = C e^(3x) − 2", "y = C e^(−3x) + 2", "y = C e^(3x) + 6"],
    bonne: 0,
    erreurs: {
      1: { type: "signe", message: "Teste y = −2 : y' = 0, mais 3y − 6 = −12. La constante qui convient est y = 2 : 3 × 2 − 6 = 0." },
      2: { type: "signe", message: "L'équation s'écrit y' − 3y = −6 : l'exponentielle est e^(3x), pas e^(−3x)." }
    },
    explication: "On écrit y' − 3y = −6. Solution constante k : −3k = −6, donc k = 2. Solutions de y' − 3y = 0 : C e^(3x). Solution générale : y = C e^(3x) + 2.",
    indice: "Cherche la constante k qui annule y' = 3y − 6, puis ajoute C e^(3x)."
  },
  {
    id: "U41-307", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "La fonction f(x) = 3 e^(−2x) + 1 est solution de l'une de ces équations. Laquelle ?",
    choix: ["y' + 2y = 2", "y' + 2y = 3", "y' − 2y = 1", "y' + 2y = 1"],
    bonne: 0,
    explication: "f'(x) = −6 e^(−2x). 2 f(x) = 6 e^(−2x) + 2. Donc f' + 2f = −6 e^(−2x) + 6 e^(−2x) + 2 = 2 : f vérifie y' + 2y = 2.",
    indice: "Calcule f', puis f' + 2f : les exponentielles doivent s'annuler."
  },
  {
    id: "U41-308", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "La solution de y' + y = 4 avec y(0) = 1 est y(x) = 4 − 3 e^(−x).",
    question: "Calcule y(1), arrondi à 10⁻².",
    reponse: {"valeur": 2.9, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 1.1, type: "notion", message: "1,10 est seulement le terme 3 e^(−1). Il reste à le retrancher de 4 : y(1) = 4 − 3 e^(−1)." }
    ],
    explication: "y(1) = 4 − 3 e^(−1) ≈ 4 − 3 × 0,3679 ≈ 4 − 1,1036 ≈ 2,90.",
    indice: "Remplace x par 1 dans y(x) = 4 − 3 e^(−x)."
  },
  {
    id: "U41-309", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    contexte: "La température T (en °C) d'un verre dans une pièce vérifie T' = −0,05 (T − 20), avec T(0) = 80 (t en minutes).",
    question: "Vers quelle valeur T(t) tend-elle quand t devient très grand ?",
    choix: ["20", "80", "0", "−20"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "80 est la température de départ. À la longue, le verre se met à la température de la pièce, 20 °C." } },
    explication: "T' + 0,05 T = 1 a pour solution constante k = 1 / 0,05 = 20. Les solutions sont T = C e^(−0,05t) + 20, qui tendent vers 20. Avec T(0) = 80 : T(t) = 60 e^(−0,05t) + 20.",
    indice: "Cherche la solution constante, puis regarde ce que devient l'exponentielle."
  },
  {
    id: "U41-310", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "La température du verre est T(t) = 60 e^(−0,05t) + 20 (t en minutes).",
    question: "À quel instant t le verre atteint-il 30 °C ? Arrondis à 10⁻¹.",
    reponse: {"valeur": 35.8, "unite": "min", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 1.8, type: "notion", message: "1,79 est ln 6. Il reste à diviser par 0,05 : 0,05 t = ln 6." },
      { valeur: -35.8, type: "signe", message: "Un instant est positif. e^(−0,05t) = 1/6 donne −0,05 t = −ln 6, donc t = ln 6 / 0,05." }
    ],
    explication: "60 e^(−0,05t) + 20 = 30 donne e^(−0,05t) = 10/60 = 1/6. Avec ln : −0,05 t = −ln 6, soit t = ln 6 / 0,05 ≈ 1,792 / 0,05 ≈ 35,8 min.",
    indice: "Isole l'exponentielle, passe au logarithme, divise par −0,05."
  },
  {
    id: "U41-311", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "Quelles sont les solutions de 2y' + 6y = 0 ?",
    choix: ["y = C e^(−3x)", "y = C e^(−6x)", "y = C e^(−x/3)", "y = C e^(3x)"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Il faut d'abord diviser par 2 : y' + 3y = 0. Le coefficient est 3 et non 6." } },
    explication: "On divise par 2 : y' + 3y = 0. Les solutions sont y = C e^(−3x).",
    indice: "Mets l'équation sous la forme y' + ay = 0 en divisant par le coefficient de y'."
  },
  {
    id: "U41-312", epreuve: "U41", theme: "Équations différentielles", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Une quantité y vérifie y' + 0,25y = 2 avec y(0) = 0, donc y(x) = 8 (1 − e^(−0,25x)).",
    question: "Calcule y(4), arrondi à 10⁻².",
    reponse: {"valeur": 5.06, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 2.94, type: "notion", message: "2,94 est 8 e^(−1), la partie à retrancher. y(4) = 8 − 8 e^(−1)." }
    ],
    explication: "y(4) = 8 (1 − e^(−1)) ≈ 8 × (1 − 0,3679) ≈ 8 × 0,6321 ≈ 5,06.",
    indice: "Remplace x par 4 : l'exposant vaut −0,25 × 4 = −1."
  },

  // ---------- Fonctions ----------
  {
    id: "U41-313", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quel est le tableau de variations de f(x) = x³ − 3x² sur ℝ ?",
    choix: ["Croissante sur ]−∞ ; 0], décroissante sur [0 ; 2], croissante sur [2 ; +∞[", "Décroissante sur ]−∞ ; 0], croissante sur [0 ; 2], décroissante sur [2 ; +∞[", "Croissante sur ]−∞ ; 2] puis décroissante sur [2 ; +∞[", "Croissante sur ℝ"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "f'(x) = 3x² − 6x est un trinôme dont le coefficient de x² est positif : il est positif à l'extérieur des racines 0 et 2, négatif entre les deux." } },
    explication: "f'(x) = 3x² − 6x = 3x (x − 2). Ce trinôme est positif pour x < 0 et x > 2, négatif entre 0 et 2. Donc f croît sur ]−∞ ; 0], décroît sur [0 ; 2], croît sur [2 ; +∞[.",
    indice: "Calcule f', factorise-la et étudie son signe."
  },
  {
    id: "U41-314", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    contexte: "f(x) = x³ − 3x² est croissante sur ]−∞ ; 0], décroissante sur [0 ; 2], croissante sur [2 ; +∞[.",
    question: "Quelle est la valeur du minimum local de f ?",
    choix: ["−4", "−2", "2", "0"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "0 = f(0) est le maximum local. Le minimum local est atteint en x = 2 : f(2) = 8 − 12." } },
    explication: "f passe d'une décroissance à une croissance en x = 2 : c'est un minimum local. f(2) = 2³ − 3 × 2² = 8 − 12 = −4.",
    indice: "Le minimum local est là où f passe de décroissante à croissante."
  },
  {
    id: "U41-315", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "facile",
    question: "Quelle est la dérivée de f(x) = e^(2x + 1) ?",
    choix: ["2 e^(2x + 1)", "e^(2x + 1)", "(2x + 1) e^(2x)", "2 e^(2x)"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "La dérivée de e^u est u' e^u. Il faut multiplier par la dérivée de 2x + 1, qui vaut 2." } },
    explication: "(e^u)' = u' e^u avec u = 2x + 1 et u' = 2. Donc f'(x) = 2 e^(2x + 1).",
    indice: "(e^u)' = u' e^u."
  },
  {
    id: "U41-316", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la dérivée de F(x) = x ln(x) − x sur ]0 ; +∞[ ?",
    choix: ["ln(x)", "ln(x) − 1", "1/x − 1", "ln(x) + 1"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "Tu as oublié de dériver −x, qui donne −1. Ce −1 compense le +1 du produit." } },
    explication: "(x ln x)' = 1 × ln x + x × 1/x = ln x + 1. Et (−x)' = −1. Donc F'(x) = ln x + 1 − 1 = ln(x). C'est la primitive de ln.",
    indice: "Dérive le premier terme comme un produit u v, puis ajoute la dérivée de −x et simplifie."
  },
  {
    id: "U41-317", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Résous ln(2x − 4) = 0.",
    choix: ["x = 2,5", "x = 2", "x = 0,5", "x = 4"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "x = 2 annulerait 2x − 4, et ln(0) n'existe pas. Ici ln(2x − 4) = 0 donne 2x − 4 = 1." } },
    explication: "ln(u) = 0 équivaut à u = 1 (avec u > 0). Donc 2x − 4 = 1, soit x = 5/2 = 2,5. C'est bien > 2, la condition d'existence du logarithme.",
    indice: "ln(u) = 0 équivaut à u = 1."
  },
  {
    id: "U41-318", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "facile",
    question: "Quelle est la limite de ln(x) / x quand x tend vers +∞ ?",
    choix: ["0", "+∞", "1", "−∞"],
    bonne: 0,
    explication: "Par croissance comparée, x l'emporte sur ln(x) en +∞ : ln(x) / x tend vers 0.",
    indice: "Quelle fonction grandit plus vite, x ou ln(x) ?"
  },

  // ---------- Lot 6 : suites, statistique, probabilités ----------
  {
    id: "U41-319", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    contexte: "u0 = 3 et, pour tout n, u(n+1) = 2 u(n) − 1. On pose v(n) = u(n) − ℓ.",
    question: "Quelle valeur de ℓ rend la suite (v(n)) géométrique ?",
    choix: ["1", "−1", "2", "3"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "ℓ est la solution de ℓ = 2ℓ − 1, soit ℓ = 1. Avec ℓ = −1, v(n+1) = 2 u(n) = 2 v(n) − 2, qui n'est pas de la forme q v(n)." } },
    explication: "ℓ est le point fixe : ℓ = 2ℓ − 1, donc ℓ = 1. Alors v(n+1) = u(n+1) − 1 = 2 u(n) − 2 = 2 (u(n) − 1) = 2 v(n) : suite géométrique de raison 2.",
    indice: "Résous ℓ = 2ℓ − 1, puis vérifie que v(n+1) = q × v(n)."
  },
  {
    id: "U41-320", epreuve: "U41", theme: "Suites", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Un opticien place 1 000 € à 3 % d'intérêts composés par an (les intérêts sont ajoutés au capital chaque année).",
    question: "Quel capital a-t-il au bout de 10 ans ? Arrondis à l'euro.",
    reponse: {"valeur": 1344, "unite": "€", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 1300, type: "notion", message: "1 300 € correspond à des intérêts simples (30 € par an pendant 10 ans). Avec des intérêts composés, le capital est multiplié par 1,03 chaque année." }
    ],
    explication: "Suite géométrique de raison 1,03 : u(n) = 1 000 × 1,03ⁿ. u10 = 1 000 × 1,03¹⁰ ≈ 1 000 × 1,3439 ≈ 1 344 €.",
    indice: "Chaque année, le capital est multiplié par 1,03 : suite géométrique."
  },
  {
    id: "U41-321", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    contexte: "Algorithme : n ← 0 ; u ← 10 ; Tant que u < 20 : n ← n + 1 ; u ← u + 2.",
    question: "Quelle est la valeur de n à la fin de l'algorithme ?",
    choix: ["5", "4", "6", "10"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Après 4 tours, u = 18, qui est encore < 20 : le tour suivant a lieu. u atteint 20 au tour 5, et la boucle s'arrête." } },
    explication: "u vaut 10, 12, 14, 16, 18, 20 après 0, 1, 2, 3, 4, 5 tours. La condition u < 20 devient fausse quand u = 20, donc au bout de 5 tours : n = 5.",
    indice: "Suis les valeurs de u tour par tour, jusqu'à ce que « u < 20 » soit faux."
  },
  {
    id: "U41-322", epreuve: "U41", theme: "Suites", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Le nombre de passages en magasin d'un client baisse de 5 % par mois : u(n) = u0 × 0,95ⁿ.",
    question: "Au bout de combien de mois, au minimum, a-t-il été divisé par plus de 2 (u(n) < u0 / 2) ?",
    reponse: {"valeur": 14, "unite": "", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 13, type: "notion", message: "0,95¹³ ≈ 0,513 est encore > 0,5. Il faut le premier entier n avec 0,95ⁿ < 0,5 : arrondis ln(0,5)/ln(0,95) ≈ 13,5 vers le haut." }
    ],
    explication: "On veut 0,95ⁿ < 0,5. Avec les logarithmes : n > ln(0,5) / ln(0,95) ≈ 13,5 (le sens change car ln(0,95) < 0). Le plus petit entier est 14. Contrôle : 0,95¹⁴ ≈ 0,488.",
    indice: "Passe au logarithme et change le sens de l'inégalité en divisant par ln(0,95) < 0. Arrondis vers le haut."
  },
  {
    id: "U41-323", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "facile",
    question: "Quelle est la limite de u(n) = 5 − 2 × 0,5ⁿ quand n tend vers +∞ ?",
    choix: ["5", "3", "−∞", "0"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "3 est u0 = 5 − 2 × 1. La limite est la valeur vers laquelle on tend quand n est très grand." } },
    explication: "Comme 0 < 0,5 < 1, 0,5ⁿ tend vers 0. Donc u(n) tend vers 5 − 2 × 0 = 5.",
    indice: "Que devient 0,5ⁿ quand n est grand ?"
  },
  {
    id: "U41-324", epreuve: "U41", theme: "Suites", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Chaque année, un opticien verse 100 € sur un compte à 5 % par an, le premier versement ayant lieu à t = 0. Le capital s'écrit 100 + 100 × 1,05 + 100 × 1,05² + … + 100 × 1,05⁹ (10 termes).",
    question: "Calcule ce capital, arrondi au centime.",
    reponse: {"valeur": 1257.79, "unite": "€", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 1000, type: "notion", message: "1 000 € = 10 × 100 : les intérêts sont oubliés. Chaque versement est multiplié par 1,05 plusieurs fois." }
    ],
    explication: "Somme géométrique de premier terme 100 et de raison 1,05, 10 termes : 100 × (1,05¹⁰ − 1) / (1,05 − 1) = 100 × 0,62889 / 0,05 ≈ 1 257,79 €.",
    indice: "Somme de n termes d'une suite géométrique : premier terme × (qⁿ − 1) / (q − 1)."
  },
  {
    id: "U41-325", epreuve: "U41", theme: "Suites", session: "complément",
    difficulte: "moyen",
    contexte: "(u(n)) est une suite géométrique de raison positive, avec u2 = 12 et u5 = 96.",
    question: "Quelle est sa raison ?",
    choix: ["2", "8", "3", "1/2"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "8 est u5 / u2 = q³. Il reste à prendre la racine cubique : q = 2." } },
    explication: "u5 = u2 × q³, donc q³ = 96 / 12 = 8. Comme q > 0, q = ∛8 = 2.",
    indice: "Entre les rangs 2 et 5, on multiplie par la raison combien de fois ?"
  },

  // ---------- Statistique ----------
  {
    id: "U41-326", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Pour une série, la moyenne des carrés des valeurs est 25 et la moyenne des valeurs est 4. On rappelle que V = (moyenne des carrés) − (moyenne)².",
    question: "Quel est l'écart type de la série ?",
    choix: ["3", "9", "21", "5"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "9 est la variance : 25 − 16. L'écart type est sa racine carrée." },
      2: { type: "notion", message: "21 = 25 − 4 : il faut retrancher le carré de la moyenne (4² = 16), pas la moyenne." }
    },
    explication: "V = 25 − 4² = 25 − 16 = 9. L'écart type est σ = √9 = 3.",
    indice: "Calcule la variance avec la formule, puis prends la racine carrée."
  },
  {
    id: "U41-327", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Dans un magasin, 30 clients ont une dépense moyenne de 120 € et 20 autres clients une dépense moyenne de 140 €.",
    question: "Quelle est la dépense moyenne des 50 clients ?",
    choix: ["128 €", "130 €", "124 €", "132 €"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "130 € est la moyenne simple de 120 et 140. Il faut pondérer : il y a plus de clients à 120 €." } },
    explication: "Moyenne pondérée : (30 × 120 + 20 × 140) / 50 = (3 600 + 2 800) / 50 = 6 400 / 50 = 128 €.",
    indice: "Calcule la dépense totale de chaque groupe, additionne, puis divise par 50."
  },
  {
    id: "U41-328", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    contexte: "Série de 8 valeurs rangées dans l'ordre : 2 ; 4 ; 5 ; 7 ; 9 ; 12 ; 14 ; 20.",
    question: "Quelle est la médiane ?",
    choix: ["8", "7", "9", "9,125"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "9,125 est la moyenne (73 / 8). La médiane est la valeur centrale de la série ordonnée." } },
    explication: "Avec 8 valeurs, la médiane est la moyenne des 4e et 5e valeurs : (7 + 9) / 2 = 8.",
    indice: "Effectif pair : fais la moyenne des deux valeurs du milieu."
  },
  {
    id: "U41-329", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    question: "On ajoute 5 à chacune des valeurs d'une série statistique. Que deviennent la moyenne et l'écart type ?",
    choix: ["La moyenne augmente de 5, l'écart type ne change pas", "La moyenne et l'écart type augmentent de 5", "La moyenne est multipliée par 5, l'écart type aussi", "La moyenne ne change pas, l'écart type augmente de 5"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "L'écart type mesure la dispersion autour de la moyenne. Un décalage de toutes les valeurs ne change pas leurs écarts à la moyenne." } },
    explication: "Toutes les valeurs et la moyenne sont décalées de 5 : les écarts à la moyenne sont inchangés, donc la variance et l'écart type aussi.",
    indice: "Les écarts à la moyenne changent-ils si tout le monde est décalé pareil ?"
  },
  {
    id: "U41-330", epreuve: "U41", theme: "Statistique", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "On relève la série suivante.",
    annexe: {"titre": "Série (x ; y)", "colonnes": ["x", "1", "2", "3", "4", "5"], "lignes": [["y", "3", "5", "6", "8", "10"]]},
    question: "À la calculatrice, donne le coefficient a de la droite de régression de y en x (y = ax + b), arrondi à 10⁻¹.",
    reponse: {"valeur": 1.7, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 1.3, type: "notion", message: "1,3 est l'ordonnée à l'origine b. Le coefficient a est la pente : celui qui multiplie x." }
    ],
    explication: "Régression linéaire de y en x : a = 1,7 et b = 1,3, soit y = 1,7x + 1,3.",
    indice: "Saisis x et y dans deux listes, lance la régression linéaire ax + b et lis a."
  },
  {
    id: "U41-331", epreuve: "U41", theme: "Statistique", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Pour la série précédente, la droite de régression de y en x est y = 1,7x + 1,3.",
    question: "Estime y pour x = 7, arrondi à 10⁻¹.",
    reponse: {"valeur": 13.2, "unite": "", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: 11.9, type: "notion", message: "11,9 = 1,7 × 7 : l'ordonnée à l'origine 1,3 est oubliée." }
    ],
    explication: "y = 1,7 × 7 + 1,3 = 11,9 + 1,3 = 13,2.",
    indice: "Remplace x par 7 dans l'équation de la droite."
  },
  {
    id: "U41-332", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Pour une série double, le coefficient de corrélation linéaire vaut r = 0,12.",
    question: "Que peut-on en conclure ?",
    choix: ["Il n'y a pas de liaison linéaire notable entre x et y", "Il y a une forte liaison linéaire croissante", "Il y a une forte liaison linéaire décroissante", "Il n'existe aucune relation d'aucune sorte entre x et y"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "r ne mesure que la liaison linéaire. Un r proche de 0 n'exclut pas une autre forme de relation (courbe, par exemple)." } },
    explication: "|r| = 0,12 est très loin de 1 : l'ajustement par une droite n'est pas pertinent. On ne peut pas dire pour autant qu'aucune relation n'existe, seulement qu'elle n'est pas linéaire.",
    indice: "Regarde |r|. Que mesure exactement r ?"
  },
  {
    id: "U41-333", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "facile",
    contexte: "Pour une série de mesures, Q1 = 14 et Q3 = 22.",
    question: "Quel est l'écart interquartile ?",
    choix: ["8", "18", "36", "4"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "18 est la moyenne de Q1 et Q3. L'écart interquartile est leur différence." } },
    explication: "Écart interquartile = Q3 − Q1 = 22 − 14 = 8. Il contient la moitié centrale des valeurs.",
    indice: "Écart = différence."
  },
  {
    id: "U41-334", epreuve: "U41", theme: "Statistique", session: "complément",
    difficulte: "moyen",
    contexte: "Un ajustement exponentiel donne y = 4,5 e^(0,34x).",
    question: "Quand x augmente de 1, de quel pourcentage environ y augmente-t-il ?",
    choix: ["+40 %", "+34 %", "+14 %", "+0,34 %"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "34 % serait vrai pour 1 + 0,34. Ici y est multiplié par e^(0,34) ≈ 1,40, pas par 1,34." } },
    explication: "Quand x augmente de 1, y est multiplié par e^(0,34) ≈ 1,405. Le coefficient 1,405 correspond à une hausse d'environ 40 %.",
    indice: "Calcule e^(0,34) : c'est le coefficient multiplicateur."
  },

  // ---------- Probabilités ----------
  {
    id: "U41-335", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Pour deux événements A et B : P(B) = 0,5 et P(A ∩ B) = 0,2.",
    question: "Que vaut P(non A ∩ B), c'est-à-dire la probabilité que B se réalise sans A ?",
    choix: ["0,3", "0,4", "0,5", "0,2"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "0,2 est P(A ∩ B), B avec A. On cherche B sans A : P(B) − P(A ∩ B)." } },
    explication: "B se partage en (A ∩ B) et (non A ∩ B). Donc P(non A ∩ B) = P(B) − P(A ∩ B) = 0,5 − 0,2 = 0,3.",
    indice: "B est la réunion de deux parties disjointes : avec A et sans A."
  },
  {
    id: "U41-336", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "difficile",
    contexte: "Une boîte contient 3 verres bons et 2 défectueux. On en tire deux successivement, sans remise.",
    question: "Quelle est la probabilité que le second verre tiré soit défectueux ?",
    choix: ["0,4", "0,5", "0,25", "0,1"],
    bonne: 0,
    erreurs: {
      2: { type: "notion", message: "0,25 est la probabilité que le second soit défectueux sachant que le premier l'était. Il faut aussi le cas où le premier est bon." },
      3: { type: "notion", message: "0,1 est la probabilité que les deux soient défectueux." }
    },
    explication: "Deux cas : premier défectueux puis second défectueux : 2/5 × 1/4 = 0,1. Premier bon puis second défectueux : 3/5 × 2/4 = 0,3. Total : 0,1 + 0,3 = 0,4. (Même résultat que pour le premier tirage.)",
    indice: "Dessine un arbre à deux niveaux et additionne les branches qui finissent sur « défectueux »."
  },
  {
    id: "U41-337", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Une remise X (en euros) est tirée au sort : X = 0 avec la probabilité 0,5, X = 10 avec la probabilité 0,3 et X = 20 avec la probabilité 0,2.",
    question: "Quelle est l'espérance E(X) ?",
    choix: ["7", "10", "6", "30"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "10 est la moyenne simple des valeurs 0, 10 et 20. L'espérance pondère chaque valeur par sa probabilité." } },
    explication: "E(X) = 0 × 0,5 + 10 × 0,3 + 20 × 0,2 = 0 + 3 + 4 = 7 €.",
    indice: "Somme de (valeur × probabilité)."
  },
  {
    id: "U41-338", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "difficile",
    contexte: "Même remise X : X = 0 (probabilité 0,5), X = 10 (0,3), X = 20 (0,2). On a E(X) = 7.",
    question: "Quelle est la variance V(X) ?",
    choix: ["61", "110", "49", "7,81"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "110 est E(X²). La variance est E(X²) − [E(X)]²." },
      3: { type: "notion", message: "7,81 est l'écart type (√61). On te demande la variance." }
    },
    explication: "E(X²) = 0² × 0,5 + 10² × 0,3 + 20² × 0,2 = 30 + 80 = 110. V(X) = E(X²) − [E(X)]² = 110 − 49 = 61.",
    indice: "V(X) = E(X²) − [E(X)]²."
  },
  {
    id: "U41-339", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Parmi 200 clients : 120 sont des femmes, dont 40 portent des lentilles ; 80 sont des hommes, dont 20 portent des lentilles.",
    annexe: {"titre": "Répartition des clients", "colonnes": ["", "Lentilles", "Lunettes", "Total"], "lignes": [["Femmes", "40", "80", "120"], ["Hommes", "20", "60", "80"], ["Total", "60", "140", "200"]]},
    question: "On choisit au hasard un porteur de lentilles. Quelle est la probabilité que ce soit une femme ?",
    choix: ["2/3 ≈ 0,67", "1/3 ≈ 0,33", "0,2", "0,6"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "1/3 est la probabilité qu'une femme porte des lentilles (40/120). On cherche l'inverse : parmi les 60 porteurs de lentilles." },
      3: { type: "notion", message: "0,6 = 120/200 est la proportion de femmes parmi tous les clients, pas parmi les porteurs de lentilles." }
    },
    explication: "On se restreint aux 60 porteurs de lentilles, dont 40 sont des femmes : P = 40 / 60 = 2/3 ≈ 0,67.",
    indice: "Le dénominateur est ce que l'on sait : le nombre de porteurs de lentilles."
  },
  {
    id: "U41-340", epreuve: "U41", theme: "Probabilités", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Parmi 200 clients : 120 femmes (dont 40 portent des lentilles) et 80 hommes (dont 20 portent des lentilles).",
    question: "On choisit une femme au hasard. Quelle est la probabilité qu'elle porte des lentilles ? Arrondis à 10⁻².",
    reponse: {"valeur": 0.33, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 0.67, type: "notion", message: "0,67 est la probabilité que ce soit une femme parmi les porteurs de lentilles (40/60). Ici on part des 120 femmes." }
    ],
    explication: "On se restreint aux 120 femmes, dont 40 portent des lentilles : 40 / 120 = 1/3 ≈ 0,33.",
    indice: "Le dénominateur est le nombre de femmes."
  },
  {
    id: "U41-341", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "facile",
    contexte: "A et B sont deux événements incompatibles avec P(A) = 0,3 et P(B) = 0,4.",
    question: "Quelle est la probabilité que A ou B se réalise ?",
    choix: ["0,7", "0,12", "0,1", "0,58"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "0,12 = 0,3 × 0,4 serait P(A ∩ B) pour des événements indépendants. Ici ils sont incompatibles : on additionne." } },
    explication: "Pour des événements incompatibles, P(A ∩ B) = 0 et P(A ∪ B) = P(A) + P(B) = 0,3 + 0,4 = 0,7.",
    indice: "Incompatibles : ils ne peuvent pas arriver ensemble."
  },
  {
    id: "U41-342", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "Un magasin a trois fournisseurs de verres. F1 fournit 50 % des verres (1 % défectueux), F2 en fournit 30 % (2 % défectueux) et F3 en fournit 20 % (4 % défectueux).",
    question: "Quelle est la probabilité qu'un verre pris au hasard soit défectueux ?",
    choix: ["0,019", "0,07", "0,023", "0,03"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,07 additionne simplement les taux 1 %, 2 % et 4 %. Il faut pondérer par la part de chaque fournisseur." },
      2: { type: "notion", message: "0,023 est la moyenne simple des trois taux. Il faut pondérer par 50 %, 30 % et 20 %." }
    },
    explication: "Probabilités totales : P(D) = 0,5 × 0,01 + 0,3 × 0,02 + 0,2 × 0,04 = 0,005 + 0,006 + 0,008 = 0,019.",
    indice: "Un arbre à trois branches : multiplie le long de chaque branche, puis additionne."
  },
  {
    id: "U41-343", epreuve: "U41", theme: "Probabilités", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Mêmes fournisseurs : F1 (50 %, 1 % défectueux), F2 (30 %, 2 %), F3 (20 %, 4 %). On a trouvé P(D) = 0,019. Un verre défectueux est tiré au hasard.",
    question: "Quelle est la probabilité qu'il vienne de F3 ? Arrondis à 10⁻².",
    reponse: {"valeur": 0.42, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 0.2, type: "notion", message: "0,2 est P(F3), avant de savoir que le verre est défectueux. Il faut diviser P(F3 ∩ D) par P(D)." },
      { valeur: 0.04, type: "notion", message: "0,04 est P(D sachant F3). On te demande F3 sachant D, qui se calcule avec la formule de Bayes." }
    ],
    explication: "P_D(F3) = P(F3 ∩ D) / P(D) = (0,2 × 0,04) / 0,019 = 0,008 / 0,019 ≈ 0,42.",
    indice: "Bayes : P(F3 sachant D) = P(F3 ∩ D) / P(D)."
  },
  {
    id: "U41-344", epreuve: "U41", theme: "Probabilités", session: "complément",
    difficulte: "moyen",
    contexte: "On lance une pièce équilibrée trois fois de suite.",
    question: "Quelle est la probabilité d'obtenir exactement deux « face » ?",
    choix: ["0,375", "0,25", "0,5", "0,125"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "0,125 = 1/8 est la probabilité d'une suite précise (par exemple FFP). Il y a 3 suites qui donnent deux faces : 3 × 1/8." } },
    explication: "Il y a 3 suites avec exactement 2 faces (FFP, FPF, PFF), chacune de probabilité (1/2)³ = 1/8. Probabilité : 3/8 = 0,375. (Loi binomiale B(3 ; 0,5) : C(3 ; 2) × 0,5³.)",
    indice: "Compte les suites qui conviennent, puis multiplie par la probabilité d'une suite."
  },

  // ---------- Lot 7 : division harmonique, lois, estimation et tests, fonctions, équations différentielles, intégrales ----------
  {
    id: "U41-345", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    contexte: "Sur une droite graduée : A a pour abscisse 0, B a pour abscisse 12 et C a pour abscisse 3. (A, B ; C, D) est une division harmonique.",
    question: "Où D se place-t-il sur la droite ?",
    choix: ["−6", "6", "9", "−12"],
    bonne: 0,
    erreurs: { 1: { type: "signe", message: "Avec d = 6, DA/DB = −6/6 = −1, alors qu'il faut DA/DB = −CA/CB = 1/3. D est à l'extérieur de [AB]." } },
    explication: "CA / CB = (0 − 3) / (12 − 3) = −1/3. On veut DA / DB = −CA / CB = 1/3, avec D d'abscisse d : −d / (12 − d) = 1/3, donc −3d = 12 − d et d = −6. Contrôle : DA/DB = 6/18 = 1/3 ✓.",
    indice: "Calcule CA/CB, puis résous DA/DB = −CA/CB avec d pour l'abscisse de D."
  },
  {
    id: "U41-346", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "moyen",
    contexte: "I est le milieu de [AB] et (A, B ; C, D) est une division harmonique. On a IA = 4 cm et ID = 8 cm.",
    question: "Que vaut IC, avec la relation IA² = IC × ID ?",
    choix: ["2 cm", "32 cm", "1/2 cm", "6 cm"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "32 = IA × ID. La relation fait intervenir IA au carré : IC = IA² / ID = 16 / 8." },
      2: { type: "notion", message: "1/2 vient de ID / IA². Il faut IC = IA² / ID." }
    },
    explication: "IA² = IC × ID donne IC = IA² / ID = 4² / 8 = 16 / 8 = 2 cm. C est entre I et B, D est à l'extérieur.",
    indice: "Isole IC dans IA² = IC × ID."
  },
  {
    id: "U41-347", epreuve: "U41", theme: "Division harmonique", session: "complément",
    difficulte: "facile",
    question: "(A, B ; C, D) est une division harmonique. Où sont placés C et D par rapport au segment [AB] ?",
    choix: ["L'un est à l'intérieur de [AB], l'autre à l'extérieur", "Les deux sont à l'intérieur du segment [AB], entre A et B", "Les deux sont à l'extérieur de [AB], du même côté que B", "Ils sont de part et d'autre du milieu de [AB], à égale distance"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "Ce n'est pas la bonne condition : avec CA/CB = −DA/DB, un point est entre A et B (rapport négatif), l'autre est dehors." } },
    explication: "Dans CA/CB = −DA/DB, les deux rapports ont des signes opposés. Un rapport est négatif quand le point est entre A et B, positif quand il est à l'extérieur. Donc l'un des points est à l'intérieur, l'autre à l'extérieur de [AB].",
    indice: "Regarde le signe de CA/CB selon que C est entre A et B ou non."
  },
  {
    id: "U41-348", epreuve: "U41", theme: "Division harmonique", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Quatre points alignés sur un banc d'optique gradué en cm : A est en 0, B est en 5 et C est en 2. (A, B ; C, D) est une division harmonique.",
    question: "En quelle graduation D se trouve-t-il ? Réponds en cm.",
    reponse: {"valeur": -10, "unite": "cm", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 10, type: "signe", message: "D est à l'extérieur de [AB], du côté de A : sa graduation est négative." }
    ],
    explication: "CA / CB = (0 − 2) / (5 − 2) = −2/3. On veut DA / DB = 2/3 : −d / (5 − d) = 2/3, donc −3d = 10 − 2d et d = −10. Contrôle : DA/DB = 10/15 = 2/3 ✓.",
    indice: "Pose d pour la graduation de D et résous DA/DB = −CA/CB."
  },

  // ---------- Lois de probabilité ----------
  {
    id: "U41-349", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Le nombre de réclamations reçues par semaine suit une loi de Poisson de paramètre 2. On donne e⁻² ≈ 0,1353.",
    question: "Calcule P(X ≤ 1), arrondie à 10⁻³.",
    reponse: {"valeur": 0.406, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.271, type: "notion", message: "0,271 est P(X = 1). L'inégalité X ≤ 1 comprend aussi X = 0 : on additionne P(X = 0) et P(X = 1)." }
    ],
    explication: "P(X ≤ 1) = P(X = 0) + P(X = 1) = e⁻² + 2 e⁻² = 3 e⁻² ≈ 3 × 0,1353 ≈ 0,406.",
    indice: "P(X ≤ 1) = P(X = 0) + P(X = 1), avec P(X = k) = e^(−λ) λᵏ / k!."
  },
  {
    id: "U41-350", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "moyen",
    contexte: "Le diamètre X d'un verre (en mm) suit la loi normale de moyenne 70 et d'écart type 0,3. On donne Π(2) ≈ 0,977.",
    question: "Que vaut P(69,4 ≤ X ≤ 70,6), arrondie à 10⁻³ ?",
    choix: ["0,954", "0,977", "0,683", "0,997"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "0,977 est P(X ≤ 70,6). L'intervalle est borné des deux côtés : il faut retrancher P(X < 69,4)." },
      2: { type: "notion", message: "0,683 est la probabilité de rester à moins de 1 écart type de la moyenne. Ici 69,4 et 70,6 sont à 2 écarts types." }
    },
    explication: "Les bornes sont m − 2σ et m + 2σ. P = Π(2) − Π(−2) = Π(2) − (1 − Π(2)) = 2 × 0,977 − 1 = 0,954.",
    indice: "Combien d'écarts types séparent chaque borne de la moyenne ? Utilise la symétrie."
  },
  {
    id: "U41-351", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "La durée d'une réparation T (en heures) suit la loi exponentielle de paramètre λ = 0,5. On donne e^(−1,5) ≈ 0,2231.",
    question: "Calcule P(T ≤ 3), arrondie à 10⁻³.",
    reponse: {"valeur": 0.777, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.223, type: "notion", message: "0,223 est P(T > 3) = e^(−λt). P(T ≤ 3) est son complémentaire : 1 − e^(−1,5)." }
    ],
    explication: "P(T ≤ t) = 1 − e^(−λt). Ici λt = 0,5 × 3 = 1,5, donc P(T ≤ 3) = 1 − e^(−1,5) ≈ 1 − 0,2231 ≈ 0,777.",
    indice: "P(T ≤ t) = 1 − e^(−λt)."
  },
  {
    id: "U41-352", epreuve: "U41", theme: "Lois de probabilité", session: "complément",
    difficulte: "facile",
    contexte: "Le temps de préparation X (en minutes) suit la loi uniforme sur [4 ; 10].",
    question: "Quelle est l'espérance de X ?",
    choix: ["7", "6", "10", "3"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "6 est la longueur de l'intervalle (10 − 4). L'espérance est le milieu : (4 + 10) / 2." } },
    explication: "Pour la loi uniforme sur [a ; b], E(X) = (a + b) / 2 = (4 + 10) / 2 = 7.",
    indice: "L'espérance d'une loi uniforme est le milieu de l'intervalle."
  },
  {
    id: "U41-353", epreuve: "U41", theme: "Lois de probabilité", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "On contrôle 10 verres. Chacun est défectueux avec la probabilité 0,1, indépendamment des autres. X suit B(10 ; 0,1).",
    question: "Quelle est la probabilité qu'au moins un verre soit défectueux ? Arrondis à 10⁻³.",
    reponse: {"valeur": 0.651, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.349, type: "notion", message: "0,349 = 0,9¹⁰ est la probabilité qu'aucun verre ne soit défectueux. « Au moins un » est son contraire." }
    ],
    explication: "P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,9¹⁰ ≈ 1 − 0,349 = 0,651.",
    indice: "« Au moins un » : passe par l'événement contraire « aucun »."
  },

  // ---------- Estimation et tests ----------
  {
    id: "U41-354", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Sur 100 clients interrogés, 50 se disent satisfaits : f = 0,5. L'intervalle de confiance à 95 % est [f − 1,96 √(f(1 − f)/n) ; f + 1,96 √(f(1 − f)/n)].",
    question: "Quel est cet intervalle, arrondi à 10⁻³ ?",
    choix: ["[0,402 ; 0,598]", "[0,450 ; 0,550]", "[0,300 ; 0,700]", "[0,490 ; 0,510]"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "[0,45 ; 0,55] oublie le coefficient 1,96 : la demi-largeur est 1,96 × 0,05 = 0,098, pas 0,05." } },
    explication: "√(0,5 × 0,5 / 100) = √0,0025 = 0,05. Demi-largeur : 1,96 × 0,05 = 0,098. Intervalle : [0,5 − 0,098 ; 0,5 + 0,098] = [0,402 ; 0,598].",
    indice: "Calcule la racine carrée de f(1 − f)/n, multiplie par 1,96, puis ajoute et retranche à f."
  },
  {
    id: "U41-355", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "On souhaite estimer une proportion proche de 0,5 par un intervalle de confiance à 95 % d'amplitude totale 0,04 au plus. L'amplitude est 2 × 1,96 × √(0,5 × 0,5 / n).",
    question: "Quelle taille minimale n d'échantillon faut-il ?",
    reponse: {"valeur": 2401, "unite": "", "decimales": 0, "signe": true},
    erreurs: [
      { valeur: 601, type: "notion", message: "601 correspond à une demi-largeur de 0,04. Ici l'amplitude totale (2 × la demi-largeur) est de 0,04 : la demi-largeur est 0,02." }
    ],
    explication: "On veut 2 × 1,96 × 0,5 / √n ≤ 0,04, donc 1,96 / √n ≤ 0,04 et √n ≥ 1,96 / 0,04 = 49. Donc n ≥ 49² = 2 401.",
    indice: "Isole √n dans l'inégalité, puis élève au carré."
  },
  {
    id: "U41-356", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Test bilatéral à 5 % de H0 : μ = 100. Sous H0, la moyenne d'un échantillon suit la loi normale de moyenne 100 et d'écart type 2. La zone d'acceptation est [96,08 ; 103,92]. On observe une moyenne de 104,5.",
    question: "Que décide-t-on ?",
    choix: ["On rejette H0 : 104,5 est hors de [96,08 ; 103,92]", "On accepte H0 : 104,5 est dans [96,08 ; 103,92]", "On accepte H0 : 104,5 est inférieur à 2 × 103,92, donc acceptable", "On ne peut pas décider avec un seul échantillon de ce type"],
    bonne: 0,
    explication: "104,5 dépasse la borne supérieure 103,92 : la valeur observée est dans la zone de rejet. On rejette H0 au seuil de 5 %.",
    indice: "Compare la moyenne observée aux bornes de la zone d'acceptation."
  },
  {
    id: "U41-357", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "moyen",
    contexte: "Test bilatéral à 5 % de H0 : p = 0,8, avec des échantillons de n = 400. L'intervalle de fluctuation est [p − 1,96 √(p(1 − p)/n) ; p + 1,96 √(p(1 − p)/n)].",
    question: "Calcule la borne inférieure de l'intervalle de fluctuation, arrondie à 10⁻³.",
    reponse: {"valeur": 0.761, "unite": "", "decimales": 3, "signe": true},
    erreurs: [
      { valeur: 0.839, type: "notion", message: "0,839 est la borne supérieure. On te demande la borne inférieure : p − 1,96 √(…)." }
    ],
    explication: "√(0,8 × 0,2 / 400) = √0,0004 = 0,02. Demi-largeur : 1,96 × 0,02 = 0,0392. Borne inférieure : 0,8 − 0,0392 = 0,7608, soit 0,761.",
    indice: "Calcule la demi-largeur puis retranche-la à p."
  },
  {
    id: "U41-358", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la différence entre un intervalle de fluctuation et un intervalle de confiance ?",
    choix: ["Fluctuation : p connue, on prévoit f ; confiance : f observée, on estime p", "Fluctuation : f est observée et on estime p ; confiance : p est connue et on prévoit f", "Il n'y a aucune différence : les deux intervalles se calculent avec les mêmes formules", "Le premier est à 95 %, le second à 99 % : c'est le niveau de risque qui les distingue"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "Le niveau (95 %, 99 %) n'est pas ce qui les distingue : on peut choisir 95 % pour l'un comme pour l'autre." } },
    explication: "L'intervalle de fluctuation sert à un test : p est supposée, et on regarde où tombe la fréquence f d'un échantillon. L'intervalle de confiance sert à une estimation : on connaît f et on cherche une zone où se trouve p.",
    indice: "Quelle grandeur est connue dans chaque cas ?"
  },
  {
    id: "U41-359", epreuve: "U41", theme: "Estimation et tests", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "Sur un échantillon de 10 verres, l'écart type de la série des diamètres est σx = 2 (calculé avec la division par n).",
    question: "Quelle est l'estimation ponctuelle de l'écart type de la population, c'est-à-dire σ̂ = √(n/(n − 1)) × σx ? Arrondis à 10⁻².",
    reponse: {"valeur": 2.11, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 2, type: "notion", message: "2 est l'écart type de l'échantillon σx. Pour estimer celui de la population, on multiplie par √(n/(n − 1)) = √(10/9)." }
    ],
    explication: "σ̂ = √(10/9) × 2 ≈ 1,054 × 2 ≈ 2,11. (À la calculatrice, c'est la valeur sx.)",
    indice: "Multiplie σx par √(10/9)."
  },
  {
    id: "U41-360", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "moyen",
    contexte: "Au seuil de 5 %, les résultats d'un échantillon ne conduisent pas à rejeter H0.",
    question: "Que peut-on dire ?",
    choix: ["On ne peut pas rejeter H0, sans prouver qu'elle est vraie", "H0 est démontrée vraie, puisqu'on ne l'a pas rejetée", "H0 est vraie avec une probabilité de 95 %, le seuil du test", "H1 est fausse avec 95 % de certitude, d'après le test"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Un test ne démontre pas H0 : il dit seulement que l'échantillon n'est pas assez éloigné de ce que H0 prévoit." } },
    explication: "Un test peut rejeter H0 avec un risque connu. Quand il ne la rejette pas, on conclut seulement qu'aucun écart significatif n'a été observé, sans prouver que H0 est vraie.",
    indice: "Ne pas rejeter n'est pas prouver."
  },
  {
    id: "U41-361", epreuve: "U41", theme: "Estimation et tests", session: "complément",
    difficulte: "difficile",
    contexte: "La masse d'une monture est de moyenne inconnue μ et d'écart type σ = 4 g. Sur un échantillon de 64 montures, la moyenne observée est 50 g. Un intervalle de confiance à 95 % de μ est [x̄ − 1,96 σ/√n ; x̄ + 1,96 σ/√n].",
    question: "Quel est cet intervalle ?",
    choix: ["[49,02 ; 50,98]", "[42,16 ; 57,84]", "[49,50 ; 50,50]", "[49,88 ; 50,12]"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "[42,16 ; 57,84] = 50 ± 1,96 × 4 : tu as oublié de diviser par √n = 8." },
      3: { type: "notion", message: "Tu as divisé par n = 64 au lieu de √64 = 8." }
    },
    explication: "σ/√n = 4 / 8 = 0,5. Demi-largeur : 1,96 × 0,5 = 0,98. Intervalle : [50 − 0,98 ; 50 + 0,98] = [49,02 ; 50,98].",
    indice: "Calcule d'abord σ/√n avec n = 64."
  },

  // ---------- Fonctions ----------
  {
    id: "U41-362", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    contexte: "f est continue et strictement croissante sur [0 ; 4], avec f(0) = −3 et f(4) = 5.",
    question: "Combien l'équation f(x) = 2 a-t-elle de solutions sur [0 ; 4] ?",
    choix: ["Exactement une", "Au moins deux", "Aucune", "On ne peut pas savoir"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "Le théorème des valeurs intermédiaires s'applique : f est continue et strictement monotone, et 2 est compris entre f(0) et f(4)." } },
    explication: "f est continue et strictement croissante, et 2 est entre f(0) = −3 et f(4) = 5. D'après le théorème des valeurs intermédiaires (cas strictement monotone), l'équation f(x) = 2 a une solution unique sur [0 ; 4].",
    indice: "Continue, strictement monotone, valeur comprise entre les images des bornes."
  },
  {
    id: "U41-363", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Quelle est la dérivée de f(x) = (3x − 1)⁴ ?",
    choix: ["12 (3x − 1)³", "4 (3x − 1)³", "3 (3x − 1)⁴", "4 × 3x³"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "Pour (u)ⁿ, la dérivée est n u' uⁿ⁻¹ : il faut multiplier par u' = 3." } },
    explication: "(uⁿ)' = n u' uⁿ⁻¹ avec u = 3x − 1, u' = 3 et n = 4 : f'(x) = 4 × 3 × (3x − 1)³ = 12 (3x − 1)³.",
    indice: "Dérivée de uⁿ : n u' uⁿ⁻¹."
  },
  {
    id: "U41-364", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "facile",
    question: "La courbe de f(x) = ln(x) admet une asymptote. Laquelle ?",
    choix: ["La droite x = 0 (axe des ordonnées)", "La droite y = 0 (axe des abscisses)", "La droite y = x", "Aucune asymptote"],
    bonne: 0,
    explication: "En 0 par valeurs positives, ln(x) tend vers −∞ : la droite verticale x = 0 est asymptote. En +∞, ln(x) tend vers +∞ sans se stabiliser : pas d'asymptote horizontale.",
    indice: "Que vaut la limite de ln(x) quand x tend vers 0 par valeurs positives ?"
  },
  {
    id: "U41-365", epreuve: "U41", theme: "Fonctions", session: "complément",
    difficulte: "moyen",
    question: "Résous l'inéquation e^x ≤ 5.",
    choix: ["x ≤ ln 5 ≈ 1,61", "x ≥ ln 5 ≈ 1,61", "x ≤ e⁵ ≈ 148,4", "x ≤ 5/e ≈ 1,84"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "e⁵ serait la solution de ln(x) ≤ 5. Pour e^x ≤ 5, on applique ln, qui est croissante, des deux côtés." } },
    explication: "La fonction ln est croissante : e^x ≤ 5 équivaut à x ≤ ln 5 ≈ 1,61.",
    indice: "Applique la fonction ln, qui garde le sens des inégalités."
  },

  // ---------- Équations différentielles ----------
  {
    id: "U41-366", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "difficile",
    contexte: "Les solutions de y' + 0,5y = 0 sont y(x) = C e^(−0,5x). On impose y(2) = 3.",
    question: "Que vaut C ?",
    choix: ["3e ≈ 8,15", "3", "3/e ≈ 1,10", "6"],
    bonne: 0,
    erreurs: { 1: { type: "notion", message: "C = y(0) seulement si la condition est donnée en x = 0. Ici elle est en x = 2 : C e^(−1) = 3." } },
    explication: "y(2) = C e^(−0,5 × 2) = C e^(−1) = 3, donc C = 3 / e^(−1) = 3e ≈ 8,15.",
    indice: "Remplace x par 2 dans C e^(−0,5x), égale à 3, puis isole C."
  },
  {
    id: "U41-367", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "moyen",
    question: "La fonction g(x) = 2x − 1 est solution de l'une de ces équations. Laquelle ?",
    choix: ["y' + 2y = 4x", "y' + 2y = 4x − 2", "y' − 2y = 4x", "y' + 2y = 2x"],
    bonne: 0,
    explication: "g'(x) = 2 et 2 g(x) = 4x − 2. Donc g' + 2g = 2 + 4x − 2 = 4x : g est solution de y' + 2y = 4x.",
    indice: "Calcule g' puis g' + 2g."
  },
  {
    id: "U41-368", epreuve: "U41", theme: "Équations différentielles", session: "complément",
    difficulte: "difficile",
    contexte: "g(x) = 2x − 1 est une solution particulière de y' + 2y = 4x.",
    question: "Quelles sont toutes les solutions de y' + 2y = 4x ?",
    choix: ["y = C e^(−2x) + 2x − 1", "y = C e^(2x) + 2x − 1", "y = C e^(−2x)", "y = C (2x − 1)"],
    bonne: 0,
    erreurs: { 2: { type: "notion", message: "C e^(−2x) est la solution de l'équation sans second membre. Il faut y ajouter la solution particulière 2x − 1." } },
    explication: "Solution générale = solution générale de y' + 2y = 0 (soit C e^(−2x)) + une solution particulière (2x − 1). Donc y = C e^(−2x) + 2x − 1.",
    indice: "Solution générale = solutions de l'équation sans second membre + une solution particulière."
  },

  // ---------- Calcul intégral ----------
  {
    id: "U41-369", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "moyen",
    question: "Calcule l'intégrale de 1 à 2 de (3/x + 2x) dx, arrondie à 10⁻².",
    reponse: {"valeur": 5.08, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 2.08, type: "notion", message: "2,08 est seulement l'intégrale de 3/x (3 ln 2). Il manque l'intégrale de 2x, qui vaut 3." }
    ],
    explication: "Une primitive est F(x) = 3 ln(x) + x². F(2) − F(1) = (3 ln 2 + 4) − (0 + 1) = 3 ln 2 + 3 ≈ 2,079 + 3 ≈ 5,08.",
    indice: "Primitive de 1/x : ln(x). Primitive de 2x : x²."
  },
  {
    id: "U41-370", epreuve: "U41", theme: "Calcul intégral", session: "complément",
    difficulte: "moyen",
    contexte: "Sur un graphique, l'unité est de 2 cm sur l'axe des abscisses et de 3 cm sur l'axe des ordonnées. Une intégrale vaut 2 : l'aire sous la courbe est de 2 unités d'aire (u.a.).",
    question: "Quelle est cette aire en cm² ?",
    choix: ["12 cm²", "2 cm²", "5 cm²", "6 cm²"],
    bonne: 0,
    erreurs: { 3: { type: "notion", message: "6 cm² est l'aire d'une unité d'aire (2 × 3). Elle est multipliée par 2." } },
    explication: "Une unité d'aire est un rectangle de 2 cm × 3 cm = 6 cm². Donc 2 u.a. = 2 × 6 = 12 cm².",
    indice: "Calcule d'abord l'aire d'une unité d'aire, puis multiplie."
  },
  {
    id: "U41-371", epreuve: "U41", theme: "Calcul intégral", session: "complément", type: "calcul",
    difficulte: "difficile",
    contexte: "On admet que F(x) = (x − 1) e^x est une primitive de f(x) = x e^x.",
    question: "Calcule l'intégrale de 0 à 2 de x e^x dx, arrondie à 10⁻².",
    reponse: {"valeur": 8.39, "unite": "", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 6.39, type: "signe", message: "F(0) = (0 − 1) e⁰ = −1. On retranche F(0) : F(2) − F(0) = e² − (−1) = e² + 1." }
    ],
    explication: "F(2) = (2 − 1) e² = e². F(0) = (0 − 1) e⁰ = −1. L'intégrale vaut F(2) − F(0) = e² + 1 ≈ 7,389 + 1 ≈ 8,39.",
    indice: "Calcule F(2) et F(0) séparément, en gardant le signe de F(0)."
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

CAS.push({
  id: "CAS-U41-02",
  epreuve: "U41",
  titre: "Le séchage des verres teintés",
  contexte: "Un atelier de teinture fait sécher des verres organiques après le bain de couleur. y est le taux d'humidité d'un verre, en pourcentage, mesuré t heures après la sortie du bain (t = 0 à la sortie). L'humidité baisse vite au début, puis se stabilise.",
  annexe: { titre: "Humidité mesurée", colonnes: ["Heure t", "0", "1", "2", "3", "4", "5"], lignes: [["y (%)", "65,0", "45,2", "32,0", "23,1", "17,1", "13,1"]] }
});

CAS.push({
  id: "CAS-U41-03",
  epreuve: "U41",
  titre: "Le contrôle qualité des verres",
  contexte: "Un atelier de traitement antireflet utilise deux lignes. La ligne L1 traite 70 % des verres et la ligne L2 30 %. Parmi les verres traités par L1, 4 % ont un défaut (D) ; parmi ceux traités par L2, 9 % en ont un."
});
