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
    epreuve: "U41", theme: "Suites", session: "2022",
    question: "Un magasin a vendu 200 verres progressifs en 2024. Les ventes augmentent de 10 % par an. Combien en vendra-t-il en 2026 selon ce modèle ?",
    choix: ["240", "242", "220", "264"],
    bonne: 1,
    explication: "Augmenter de 10 %, c'est multiplier par 1,1 : suite géométrique de raison 1,1. u2 = 200 × 1,1² = 200 × 1,21 = 242. Piège : 240 correspond à +20 en tout (ajouter 10 % de 200 deux fois), ce qui n'est pas une suite géométrique."
  },
  {
    epreuve: "U41", theme: "Suites", session: "2018",
    question: "Chaque mois, un opticien perd 20 % de ses porteurs de lentilles mais en gagne 60 nouveaux. Le premier mois (n = 0), il en a 100. Combien en a-t-il le mois suivant (u1) ?",
    choix: ["140", "160", "80", "148"],
    bonne: 0,
    explication: "Perdre 20 % = garder 80 %, donc u(n+1) = 0,8 × u(n) + 60. u1 = 0,8 × 100 + 60 = 80 + 60 = 140."
  },
  {
    epreuve: "U41", theme: "Suites", session: "2023",
    question: "On reprend u(n+1) = 0,8 u(n) + 60. On pose v(n) = u(n) − ℓ. Quelle valeur de ℓ rend la suite (v(n)) géométrique ?",
    choix: ["60", "300", "75", "480"],
    bonne: 1,
    explication: "ℓ est le « point fixe » : ℓ = 0,8 ℓ + 60, donc 0,2 ℓ = 60 et ℓ = 60 / 0,2 = 300. Vérification : v(n+1) = u(n+1) − 300 = 0,8 u(n) − 240 = 0,8 (u(n) − 300) = 0,8 v(n). Raison 0,8."
  },
  {
    epreuve: "U41", theme: "Suites", session: "2016",
    question: "Avec u0 = 100, u(n+1) = 0,8 u(n) + 60 et v(n) = u(n) − 300, quelle est l'expression de u(n) ?",
    choix: ["u(n) = 300 − 200 × 0,8ⁿ", "u(n) = 100 × 0,8ⁿ + 300", "u(n) = 300 + 200 × 0,8ⁿ", "u(n) = 100 + 60n"],
    bonne: 0,
    explication: "v0 = u0 − 300 = 100 − 300 = −200. (v(n)) est géométrique de raison 0,8 : v(n) = −200 × 0,8ⁿ. Donc u(n) = v(n) + 300 = 300 − 200 × 0,8ⁿ. Contrôle : u0 = 300 − 200 = 100 ✓."
  },
  {
    epreuve: "U41", theme: "Suites", session: "2016",
    question: "Quelle est la limite de u(n) = 300 − 200 × 0,8ⁿ quand n tend vers +∞ ? Que signifie-t-elle ?",
    choix: ["+∞ : la clientèle augmente sans limite", "300 : la clientèle se stabilise vers 300", "100 : la clientèle revient à sa valeur de départ", "0 : la clientèle finit par disparaître"],
    bonne: 1,
    explication: "Comme 0 < 0,8 < 1, 0,8ⁿ tend vers 0. Donc 200 × 0,8ⁿ tend vers 0 et u(n) tend vers 300. Interprétation : à long terme, le nombre de porteurs se rapproche de 300 sans jamais le dépasser."
  },
  {
    epreuve: "U41", theme: "Suites", session: "2023",
    question: "Algorithme : n ← 0 ; u ← 100 ; Tant que u < 250 : n ← n + 1 ; u ← 0,8 × u + 60. Quelle valeur de n obtient-on à la fin ?",
    choix: ["6", "7", "8", "258"],
    bonne: 1,
    explication: "On calcule les termes : u1 = 140 ; u2 = 172 ; u3 = 197,6 ; u4 ≈ 218,1 ; u5 ≈ 234,5 ; u6 ≈ 247,6 (encore < 250, on continue) ; u7 ≈ 258,1 (≥ 250, on s'arrête). n = 7 : c'est au mois de rang 7 que l'on dépasse 250 porteurs. Piège : 258 est la valeur de u, pas de n."
  },

  // ---------- Fonctions (5 sujets sur 5) ----------
  {
    epreuve: "U41", theme: "Fonctions", session: "2017",
    question: "À la sortie d'une étuve, la température d'un verre organique (en °C) est modélisée par f(t) = 30 + 50 e^(−0,2t), t en minutes. Quelle est sa température à t = 0 ?",
    choix: ["30 °C", "50 °C", "80 °C", "20 °C"],
    bonne: 2,
    explication: "e⁰ = 1, donc f(0) = 30 + 50 × 1 = 80 °C."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2022",
    question: "Quelle est la dérivée de f(t) = 30 + 50 e^(−0,2t) ?",
    choix: ["f'(t) = −10 e^(−0,2t)", "f'(t) = 50 e^(−0,2t)", "f'(t) = 30 − 10 e^(−0,2t)", "f'(t) = −0,2 e^(−0,2t)"],
    bonne: 0,
    explication: "La constante 30 a une dérivée nulle. (e^(kt))' = k e^(kt), donc (50 e^(−0,2t))' = 50 × (−0,2) e^(−0,2t) = −10 e^(−0,2t)."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2017",
    question: "f'(t) = −10 e^(−0,2t). Quel est le sens de variation de f sur [0 ; +∞[ ?",
    choix: ["Croissante, car e^(−0,2t) > 0", "Décroissante, car f'(t) < 0", "Croissante puis décroissante", "Constante"],
    bonne: 1,
    explication: "Une exponentielle est toujours strictement positive, donc −10 e^(−0,2t) est toujours négatif. f' < 0 : f est décroissante. Logique : le verre refroidit."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2023",
    question: "Quelle est la limite de f(t) = 30 + 50 e^(−0,2t) en +∞, et que signifie-t-elle ?",
    choix: ["80 : la température de sortie d'étuve", "0 : le verre finit par geler", "30 : la température ambiante de la pièce", "+∞ : le verre chauffe sans fin"],
    bonne: 2,
    explication: "Quand t → +∞, −0,2t → −∞ et e^(−0,2t) → 0. Donc f(t) → 30. La courbe a une asymptote horizontale y = 30 : le verre finit à la température ambiante de 30 °C."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2022",
    question: "Un logiciel donne le développement limité de f à l'ordre 2 en 0 : f(t) = 80 − 10t + t² + t² ε(t). Quelle est l'équation de la tangente à la courbe en 0 ?",
    choix: ["y = 80 − 10t + t²", "y = 80 − 10t", "y = −10t", "y = 10t − 80"],
    bonne: 1,
    explication: "La tangente en 0 est y = f(0) + f'(0) t : ce sont les deux premiers termes du développement limité, 80 − 10t. Le terme en t² ne fait pas partie de la tangente (ce n'est pas une droite)."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2023",
    question: "f(t) = 80 − 10t + t² + t² ε(t). Près de 0, où est la courbe par rapport à sa tangente y = 80 − 10t ?",
    choix: ["Au-dessus", "En dessous", "Elle la traverse", "Elles sont confondues"],
    bonne: 0,
    explication: "f(t) − (80 − 10t) = t² + t² ε(t) ≈ t², qui est positif près de 0. La courbe est donc au-dessus de la tangente. Règle : on regarde le signe du coefficient de t² (ici +1)."
  },
  {
    epreuve: "U41", theme: "Fonctions", session: "2018",
    question: "À partir de quel instant le verre est-il à 40 °C ou moins ? On résout 30 + 50 e^(−0,2t) ≤ 40.",
    choix: ["t ≥ 5 ln 5 ≈ 8,0 min", "t ≤ 5 ln 5", "t ≥ (ln 5) / 5 ≈ 0,3 min", "t ≥ 50 min"],
    bonne: 0,
    explication: "50 e^(−0,2t) ≤ 10 ⟺ e^(−0,2t) ≤ 0,2 ⟺ −0,2t ≤ ln 0,2 = −ln 5 ⟺ t ≥ ln 5 / 0,2 = 5 ln 5 ≈ 8,05 min. Attention : diviser par −0,2 (négatif) change le sens de l'inégalité."
  },

  // ---------- Calcul intégral ----------
  {
    epreuve: "U41", theme: "Calcul intégral", session: "2018",
    question: "Les ventes mensuelles d'un modèle de monture sont modélisées par f(x) = 6x + 20 sur [0 ; 10]. Quelle est la valeur moyenne de f sur cet intervalle ?",
    choix: ["50", "500", "80", "26"],
    bonne: 0,
    explication: "Valeur moyenne = (1 / (10 − 0)) × ∫₀¹⁰ (6x + 20) dx. Une primitive est 3x² + 20x. ∫ = (3 × 100 + 200) − 0 = 500. Moyenne = 500 / 10 = 50. Piège : 500 est l'intégrale, il faut encore diviser par la longueur de l'intervalle."
  },
  {
    epreuve: "U41", theme: "Calcul intégral", session: "2018",
    question: "Quelle est une primitive de g(x) = e^(−0,5x) ?",
    choix: ["−0,5 e^(−0,5x)", "−2 e^(−0,5x)", "2 e^(−0,5x)", "e^(−0,5x)"],
    bonne: 1,
    explication: "Une primitive de e^(kx) est (1/k) e^(kx). Avec k = −0,5 : 1/k = −2, donc G(x) = −2 e^(−0,5x). Vérification : G'(x) = −2 × (−0,5) e^(−0,5x) = e^(−0,5x) ✓."
  },

  // ---------- Équations différentielles (4 sujets sur 5) ----------
  {
    epreuve: "U41", theme: "Équations différentielles", session: "2023",
    question: "Quelles sont les solutions de l'équation 4y' + 2y = 0 ? (Rappel : a y' + b y = 0 a pour solutions k e^(−(b/a)t).)",
    choix: ["y = k e^(−2t)", "y = k e^(−0,5t)", "y = k e^(0,5t)", "y = k e^(−4t)"],
    bonne: 1,
    explication: "a = 4 et b = 2, donc −b/a = −2/4 = −0,5. Solutions : y = k e^(−0,5t), k réel. Piège : inverser a et b (donne −2)."
  },
  {
    epreuve: "U41", theme: "Équations différentielles", session: "2022",
    question: "On cherche une solution constante g(t) = c de l'équation 2y' + 0,5y = 15. Combien vaut c ?",
    choix: ["15", "7,5", "30", "0,5"],
    bonne: 2,
    explication: "Une constante a une dérivée nulle : 2 × 0 + 0,5c = 15, donc c = 15 / 0,5 = 30."
  },
  {
    epreuve: "U41", theme: "Équations différentielles", session: "2018",
    question: "Quelles sont les solutions de y' + 0,1y = 2 ?",
    choix: ["y = k e^(−0,1t) + 2", "y = k e^(−0,1t) + 20", "y = k e^(0,1t) + 20", "y = 20 e^(−0,1t)"],
    bonne: 1,
    explication: "Solutions de y' + 0,1y = 0 : k e^(−0,1t). Solution constante : 0,1c = 2, donc c = 20. Solutions de l'équation complète = les deux additionnées : y = k e^(−0,1t) + 20."
  },
  {
    epreuve: "U41", theme: "Équations différentielles", session: "2017",
    question: "Loi de refroidissement : y' = −0,2 (y − 20), avec y(0) = 70 °C. Quelle est la solution ?",
    choix: ["y = 20 + 50 e^(−0,2t)", "y = 70 e^(−0,2t)", "y = 20 + 70 e^(−0,2t)", "y = 70 + 20 e^(−0,2t)"],
    bonne: 0,
    explication: "L'équation s'écrit y' + 0,2y = 4. Solution constante : 4 / 0,2 = 20. Solutions : y = k e^(−0,2t) + 20. Condition initiale : y(0) = k + 20 = 70, donc k = 50. y = 20 + 50 e^(−0,2t)."
  },

  // ---------- Statistique à deux variables (5 sujets sur 5) ----------
  {
    epreuve: "U41", theme: "Statistique", session: "2022",
    question: "Le nuage de points des ventes d'une lentille de couleur forme une courbe qui descend vite puis se tasse. Pourquoi un ajustement affine de y en x n'est-il pas adapté ?",
    choix: ["Parce que les points ne sont pas alignés", "Parce que y diminue", "Parce que le coefficient de corrélation est négatif", "Parce qu'il y a moins de 10 points"],
    bonne: 0,
    explication: "Un ajustement affine suppose des points à peu près sur une droite. Ici l'allure est courbe (type exponentielle). Une série qui diminue peut très bien être affine, et un r négatif veut seulement dire « décroissant » : ce sont des pièges."
  },
  {
    epreuve: "U41", theme: "Statistique", session: "2023",
    question: "Après le changement de variable z = ln(y − 20), la calculatrice donne r ≈ −0,998 pour la série (x ; z). Que conclure ?",
    choix: ["Ajustement affine non pertinent, car r est négatif", "Ajustement affine pertinent, car |r| est très proche de 1", "Impossible à dire sans tracer le nuage de points", "Ajustement pertinent, car y est proportionnel à x"],
    bonne: 1,
    explication: "C'est la valeur absolue de r qui compte : |r| = 0,998, très proche de 1, donc les points (x ; z) sont presque alignés. Le signe − indique seulement que z diminue quand x augmente."
  },
  {
    epreuve: "U41", theme: "Statistique", session: "2018",
    question: "Avec z = ln(y − 20), on trouve la droite z = −0,5x + 5. Quelle est l'expression de y ? (e⁵ ≈ 148)",
    choix: ["y = 20 + 148 e^(−0,5x)", "y = 148 e^(−0,5x) − 20", "y = 20 − 0,5x + 5", "y = 20 + 5 e^(−0,5x)"],
    bonne: 0,
    explication: "ln(y − 20) = −0,5x + 5 donc y − 20 = e^(−0,5x + 5) = e⁵ × e^(−0,5x) ≈ 148 e^(−0,5x). D'où y = 20 + 148 e^(−0,5x)."
  },
  {
    epreuve: "U41", theme: "Statistique", session: "2023",
    question: "La droite de régression des ventes de montures (en centaines) est y = 12x + 150, où x est le rang de l'année (x = 0 pour 2020). Quelle prévision pour 2028 ?",
    choix: ["246 centaines", "2 460 centaines", "162 centaines", "258 centaines"],
    bonne: 0,
    explication: "2028 correspond au rang x = 2028 − 2020 = 8. y = 12 × 8 + 150 = 96 + 150 = 246 centaines, soit 24 600 montures. Piège : compter 2020 comme rang 1 (x = 9 donne 258)."
  },

  // ---------- Probabilités conditionnelles (4 sujets sur 5) ----------
  {
    epreuve: "U41", theme: "Probabilités", session: "2016",
    question: "Dans un magasin, 40 % des verres vendus sont progressifs (P). 75 % des progressifs ont un antireflet (R), contre 50 % des autres verres. Quelle est P(P ∩ R) ?",
    choix: ["0,75", "0,30", "0,40", "0,60"],
    bonne: 1,
    explication: "On suit la branche P puis R de l'arbre : P(P ∩ R) = P(P) × P_P(R) = 0,4 × 0,75 = 0,30."
  },
  {
    epreuve: "U41", theme: "Probabilités", session: "2022",
    question: "Même magasin (40 % progressifs dont 75 % avec antireflet, 60 % autres dont 50 % avec antireflet). Quelle est la probabilité P(R) qu'un verre ait un antireflet ?",
    choix: ["0,625", "1,25", "0,60", "0,30"],
    bonne: 2,
    explication: "Formule des probabilités totales : P(R) = P(P ∩ R) + P(P̄ ∩ R) = 0,4 × 0,75 + 0,6 × 0,5 = 0,30 + 0,30 = 0,60. Piège : faire la moyenne de 75 % et 50 % (0,625) oublie le poids de chaque branche."
  },
  {
    epreuve: "U41", theme: "Probabilités", session: "2023",
    question: "Un verre vendu a un antireflet. Quelle est la probabilité que ce soit un progressif ? (P(P ∩ R) = 0,30 et P(R) = 0,60)",
    choix: ["0,30", "0,75", "0,40", "0,50"],
    bonne: 3,
    explication: "On cherche P_R(P) (« P sachant R ») = P(P ∩ R) / P(R) = 0,30 / 0,60 = 0,50. Piège : 0,75 est P_P(R), l'inverse de ce qu'on demande."
  },
  {
    epreuve: "U41", theme: "Probabilités", session: "2018",
    question: "4 % des verres ont un défaut de diamètre (D), 5 % un défaut d'épaisseur (E), de façon indépendante. Probabilité qu'un verre ait au moins un des deux défauts ?",
    choix: ["0,09", "0,002", "0,088", "0,912"],
    bonne: 2,
    explication: "Indépendants : P(D ∩ E) = 0,04 × 0,05 = 0,002. P(D ∪ E) = P(D) + P(E) − P(D ∩ E) = 0,04 + 0,05 − 0,002 = 0,088. (0,912 est la probabilité de n'avoir aucun défaut : 0,96 × 0,95.)"
  },

  // ---------- Lois de probabilité ----------
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    question: "2 % des lentilles d'un stock sont défectueuses. On en prélève 50 au hasard (avec remise). X = nombre de lentilles défectueuses. Quelle loi suit X et quelle est son espérance ?",
    choix: ["Binomiale B(50 ; 0,02), E(X) = 1", "Binomiale B(0,02 ; 50), E(X) = 25", "Poisson de paramètre 50, E(X) = 50", "Normale N(50 ; 0,02), E(X) = 50"],
    bonne: 0,
    explication: "50 épreuves identiques et indépendantes, deux issues (défectueuse ou non), probabilité de succès 0,02 : X suit B(n = 50 ; p = 0,02). E(X) = n × p = 50 × 0,02 = 1 lentille défectueuse en moyenne."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    question: "X suit B(50 ; 0,02). Quelle est la probabilité qu'au moins une lentille soit défectueuse ? (0,98⁵⁰ ≈ 0,364)",
    choix: ["0,02", "0,364", "0,636", "1"],
    bonne: 2,
    explication: "On passe par le contraire : P(X = 0) = 0,98⁵⁰ ≈ 0,364. P(X ≥ 1) = 1 − 0,364 = 0,636. Piège : 0,364 est la probabilité qu'il n'y en ait aucune."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2023",
    question: "X suit B(400 ; 0,1). On l'approche par une loi normale. Quels paramètres ?",
    choix: ["Moyenne 40, écart type 6", "Moyenne 40, écart type 36", "Moyenne 0,1, écart type 0,9", "Moyenne 400, écart type 40"],
    bonne: 0,
    explication: "Moyenne = np = 400 × 0,1 = 40. Écart type = √(np(1 − p)) = √(400 × 0,1 × 0,9) = √36 = 6. Piège : 36 est la variance, il faut prendre la racine."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2018",
    question: "Le nombre de clients qui achètent des verres solaires un lundi matin suit une loi de Poisson de paramètre 2. Probabilité qu'aucun client n'en achète ? (e⁻² ≈ 0,135)",
    choix: ["0", "0,135", "0,270", "0,865"],
    bonne: 1,
    explication: "Loi de Poisson : P(X = k) = e^(−λ) λᵏ / k!. Pour k = 0 : P(X = 0) = e⁻² × 1 / 1 = e⁻² ≈ 0,135."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2022",
    question: "Le temps d'attente T (en minutes) au comptoir suit une loi exponentielle de paramètre λ = 0,25. Temps d'attente moyen et P(T ≤ 4) ? (e⁻¹ ≈ 0,368)",
    choix: ["Moyenne 0,25 min ; P ≈ 0,368", "Moyenne 4 min ; P ≈ 0,632", "Moyenne 4 min ; P ≈ 0,368", "Moyenne 2 min ; P ≈ 0,5"],
    bonne: 1,
    explication: "E(T) = 1/λ = 1/0,25 = 4 minutes. P(T ≤ 4) = 1 − e^(−0,25 × 4) = 1 − e⁻¹ ≈ 1 − 0,368 = 0,632."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2022",
    question: "Un jour de forte affluence, le temps d'attente suit la loi uniforme sur [0 ; 10] (minutes). Probabilité d'attendre moins de 6 minutes ?",
    choix: ["0,06", "0,5", "0,6", "0,4"],
    bonne: 2,
    explication: "Loi uniforme sur [a ; b] : P(T ≤ t) = (t − a) / (b − a) = (6 − 0) / (10 − 0) = 0,6. Son espérance serait (a + b) / 2 = 5 min."
  },
  {
    epreuve: "U41", theme: "Lois de probabilité", session: "2017",
    question: "Le diamètre (mm) d'une lentille suit une loi normale de moyenne 14 et d'écart type 0,1. Quelle est environ P(13,8 ≤ X ≤ 14,2) ?",
    choix: ["0,68", "0,954", "0,997", "0,5"],
    bonne: 1,
    explication: "13,8 et 14,2 sont à 0,2 = 2 écarts types de la moyenne. À retenir : P(μ − σ ≤ X ≤ μ + σ) ≈ 0,68 ; P(μ − 2σ ≤ X ≤ μ + 2σ) ≈ 0,954 ; P(μ − 3σ ≤ X ≤ μ + 3σ) ≈ 0,997."
  },

  // ---------- Estimation et tests ----------
  {
    epreuve: "U41", theme: "Estimation et tests", session: "2023",
    question: "Sur 200 clients interrogés, 160 sont satisfaits de leurs verres. Quelle est l'estimation ponctuelle de la proportion p de clients satisfaits ?",
    choix: ["0,16", "0,8", "1,25", "0,2"],
    bonne: 1,
    explication: "L'estimation ponctuelle est la fréquence observée dans l'échantillon : f = 160 / 200 = 0,8 (80 %)."
  },
  {
    epreuve: "U41", theme: "Estimation et tests", session: "2022",
    question: "Sur 100 porteurs de lentilles, 80 sont satisfaits. Intervalle de confiance de p à 95 % ? (formule : f ± 1,96 √(f(1 − f)/n))",
    choix: ["[0,79 ; 0,81]", "[0,722 ; 0,878]", "[0,76 ; 0,84]", "[0,6 ; 1]"],
    bonne: 1,
    explication: "f = 0,8. √(0,8 × 0,2 / 100) = √0,0016 = 0,04. 1,96 × 0,04 = 0,0784. Intervalle : [0,8 − 0,0784 ; 0,8 + 0,0784] ≈ [0,722 ; 0,878]. Piège : oublier le 1,96 donne [0,76 ; 0,84]."
  },
  {
    epreuve: "U41", theme: "Estimation et tests", session: "2016",
    question: "On a trouvé l'intervalle de confiance à 95 % [0,722 ; 0,878]. La vraie proportion p est-elle sûrement dedans ?",
    choix: ["Oui, c'est certain à 100 %", "Non, on a seulement une confiance de 95 %", "Oui, dès que l'échantillon dépasse 30 personnes", "Non, p vaut forcément 0,8"],
    bonne: 1,
    explication: "On n'est jamais certain. La méthode donne, pour environ 95 % des échantillons possibles, un intervalle qui contient p. Une fois l'intervalle calculé, on dit que p y est avec une confiance de 95 % : ce n'est plus une probabilité, p y est ou n'y est pas."
  },
  {
    epreuve: "U41", theme: "Estimation et tests", session: "2017",
    question: "Test bilatéral à 5 % : H0 « le diamètre moyen vaut 14 mm ». Sous H0, la moyenne d'un échantillon de 100 lentilles suit une loi normale de moyenne 14 et d'écart type 0,05. Un échantillon donne 14,12 mm. Conclusion ?",
    choix: ["On accepte H0, car 14,12 est proche de 14", "On rejette H0, car 14,12 sort de la zone d'acceptation", "On rejette H0, car 14,12 est supérieur à 14", "On ne peut pas conclure sans l'écart type de la population"],
    bonne: 1,
    explication: "Zone d'acceptation : 14 ± 1,96 × 0,05 = 14 ± 0,098, soit environ [13,90 ; 14,10]. La moyenne observée 14,12 est en dehors : on rejette H0 au seuil de 5 %, il faut régler la machine. Piège : dépasser 14 ne suffit pas, il faut sortir de la zone."
  },

  // ---------- Division harmonique (programme du CCF) ----------
  {
    epreuve: "U41", theme: "Division harmonique", session: "complément",
    question: "Sur une droite graduée : A(0), B(6), C(2). Quelle est l'abscisse de D pour que (A, B ; C, D) soit une division harmonique, c'est-à-dire CA/CB = −DA/DB ?",
    choix: ["−6", "4", "12", "−2"],
    bonne: 0,
    explication: "CA/CB = (0 − 2)/(6 − 2) = −0,5. Il faut donc DA/DB = +0,5 : (0 − d)/(6 − d) = 0,5 ⟺ −d = 3 − 0,5d ⟺ d = −6. Vérification avec Newton (I milieu de [AB], abscisse 3) : IA² = 9 et IC × ID = (2 − 3)(−6 − 3) = 9 ✓."
  },
  {
    epreuve: "U41", theme: "Division harmonique", session: "complément",
    question: "(A, B ; C, D) est une division harmonique et I est le milieu de [AB]. On a IA = 5 cm et IC = 2 cm (C entre I et B, D du même côté). Que vaut ID ? (relation de Newton : IA² = IC × ID)",
    choix: ["2,5 cm", "10 cm", "12,5 cm", "25 cm"],
    bonne: 2,
    explication: "Relation de Newton : IA² = IC × ID, donc ID = IA² / IC = 25 / 2 = 12,5 cm. C est à l'intérieur de [AB] et D à l'extérieur, du même côté de I. On retrouve l'idée de la relation de Newton en optique : un produit de deux distances égal à un carré."
  }

);
