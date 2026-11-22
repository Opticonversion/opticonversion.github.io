// =====================================================================
//  QUESTIONS D'ENTRAÎNEMENT · U41 (Mathématiques)
//  Les mêmes notions que questions-U41.js, avec d'autres chiffres, pour les
//  élèves qui veulent s'entraîner plus. Elles ne comptent pas dans l'Essentiel.
//  Même format qu'une question normale, avec en plus  entrainement: true.
//  Format complet : notes/coordination/format-entrainement.md
// =====================================================================
QUESTIONS.push(
  {
    id: "U41-058", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "On a u(n+1) = 0,75 u(n) + 20. On pose v(n) = u(n) − ℓ. Quelle valeur de ℓ rend la suite (v(n)) géométrique ?",
    choix: ["80", "20", "27", "15"],
    bonne: 0,
    explication: "ℓ est la valeur qui ne bouge plus d'un terme au suivant : ℓ = 0,75 ℓ + 20, donc 0,25 ℓ = 20 et ℓ = 20 / 0,25 = 80. Contrôle : v(n+1) = 0,75 u(n) + 20 − 80 = 0,75 (u(n) − 80) = 0,75 v(n). Les autres réponses viennent d'erreurs de calcul : 20 reprend le terme constant, 27 divise 20 par 0,75 et 15 multiplie 20 par 0,75.",
    indice: "Résous l'équation ℓ = 0,75 ℓ + 20. Pense à regrouper les termes en ℓ avant de diviser."
  },
  {
    id: "U41-059", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    question: "Un magasin a un chiffre d'affaires de 500 k€ la première année (u0). Il augmente de 4 % par an. Calcule u3, le chiffre d'affaires de la quatrième année, arrondi au dixième.",
    reponse: {"valeur": 562.4, "unite": "k€", "decimales": 1, "signe": false},
    explication: "Une hausse de 4 % multiplie par 1,04 : u(n) = 500 × 1,04ⁿ. Donc u3 = 500 × 1,04³ = 500 × 1,124864 = 562,432, soit 562,4 k€ arrondi au dixième.",
    indice: "Une hausse de 4 % revient à multiplier par un nombre fixe. Écris le terme général avec u0 = 500, puis remplace n par 3."
  },
  {
    id: "U41-060", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "facile",
    question: "On a u(n) = 80 − 40 × 0,75ⁿ pour le nombre de clients d'un magasin le mois n. Quelle est la limite de u(n) quand n tend vers +∞ et que signifie-t-elle ?",
    choix: ["80 : le nombre de clients se stabilise vers 80", "40 : le nombre de clients revient à sa valeur de départ", "0 : le magasin finit par perdre tous ses clients", "+∞ : le nombre de clients augmente sans limite"],
    bonne: 0,
    explication: "Comme 0 < 0,75 < 1, 0,75ⁿ tend vers 0. Donc 40 × 0,75ⁿ tend vers 0 et u(n) tend vers 80. À long terme, le nombre de clients se rapproche de 80 sans jamais le dépasser.",
    indice: "Que devient 0,75ⁿ quand n devient très grand ? Regarde ce qu'il reste dans l'expression ensuite."
  },
  {
    id: "U41-061", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "On a u0 = 50 et u(n+1) = 0,9 u(n) + 30 pour le nombre de porteurs de lentilles le mois n. À l'aide du tableau de valeurs de la calculatrice, trouve le premier rang n tel que u(n) > 250.",
    reponse: {"valeur": 16, "unite": "", "decimales": 0, "signe": false},
    explication: "Le tableau donne u15 ≈ 248,5 (encore inférieur à 250) et u16 ≈ 253,7 (supérieur à 250).\nLe premier rang qui convient est donc n = 16.\nContrôle : la limite de la suite est ℓ = [[30|1 − 0,9]] = [[30|0,1]] = 300, donc 250 finit par être dépassé.",
    indice: "Entre la suite avec son premier terme u0 = 50 et parcours le tableau jusqu'au premier terme au-dessus de 250. Fais attention au rang de départ."
  },
  {
    id: "U41-062", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "facile",
    question: "Quelle est la dérivée de g(t) = 20 + 60 e^(−0,5t) ?",
    choix: ["g'(t) = −30 e^(−0,5t)", "g'(t) = 60 e^(−0,5t)", "g'(t) = −0,5 e^(−0,5t)", "g'(t) = 20 − 30 e^(−0,5t)"],
    bonne: 0,
    explication: "La constante 20 a une dérivée nulle. La dérivée de C e^(kt) est C × k × e^(kt), donc (60 e^(−0,5t))' = 60 × (−0,5) e^(−0,5t) = −30 e^(−0,5t).",
    indice: "La dérivée de C e^(kt) est C × k × e^(kt). Que devient la constante 20 quand on dérive ?"
  },
  {
    id: "U41-063", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Un logiciel donne le développement limité de g à l'ordre 2 en 0 : g(t) = 80 − 30t + 7,5t² + t² ε(t). Quelle est l'équation de la tangente à la courbe en 0 ?",
    choix: ["y = 80 − 30t", "y = 80 − 30t + 7,5t²", "y = −30t", "y = 30t − 80"],
    bonne: 0,
    explication: "La tangente en 0 est y = g(0) + g'(0) t, soit les deux premiers termes du développement limité : y = 80 − 30t. Le terme en t² ne fait pas partie de la tangente, car ce n'est pas une droite.",
    indice: "La tangente est une droite. Quels termes du développement limité forment une droite ?"
  },
  {
    id: "U41-064", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "La température g(t) = 20 + 60 e^(−0,5t) d'un verre, en °C, est mesurée au bout de t minutes. À partir de quel instant a-t-on g(t) ≤ 30 ? Donne la plus petite valeur de t, arrondie au centième.",
    reponse: {"valeur": 3.58, "unite": "min", "decimales": 2, "signe": false},
    explication: "g(t) ≤ 30 équivaut à 60 e^(−0,5t) ≤ 10\ndonc e^(−0,5t) ≤ [[10|60]] = [[1|6]]\nEn passant au logarithme : −0,5 t ≤ −ln 6\nDiviser par −0,5 change le sens de l'inégalité : t ≥ [[ln 6|0,5]] = 2 ln 6 ≈ 3,5835\nLe plus petit t est 3,58 min.",
    indice: "Isole d'abord l'exponentielle, puis applique ln des deux côtés. Fais attention au signe quand tu divises par un nombre négatif."
  },
  {
    id: "U41-065", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "facile",
    question: "Quelles sont les solutions de l'équation 5y' + 2y = 0 ?",
    choix: ["y = k e^(−0,4t)", "y = k e^(−2,5t)", "y = k e^(0,4t)", "y = k e^(−5t)"],
    bonne: 0,
    explication: "Pour a y' + b y = 0, les solutions sont k e^(−(b/a)t). Ici a = 5 et b = 2, donc −b/a = −2/5 = −0,4 : y = k e^(−0,4t). Inverser a et b donnerait −2,5.",
    indice: "Repère a (devant y') et b (devant y), puis calcule −b/a dans cet ordre."
  },
  {
    id: "U41-066", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    question: "On cherche une solution constante g(t) = c de l'équation 3y' + 0,6y = 12. Combien vaut c ?",
    reponse: {"valeur": 20, "unite": "", "decimales": 0, "signe": false},
    explication: "Une constante a une dérivée nulle : 3 × 0 + 0,6 c = 12\nc = [[12|0,6]] = 20",
    indice: "Une fonction constante a une dérivée nulle. Remplace y' par 0 et y par c, puis résous."
  },
  {
    id: "U41-067", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "La température y d'un verre vérifie y' + 0,25y = 5, avec y(0) = 60. Quelle est la solution ?",
    choix: ["y = 20 + 40 e^(−0,25t)", "y = 20 + 60 e^(−0,25t)", "y = 60 e^(−0,25t)", "y = 5 + 55 e^(−0,25t)"],
    bonne: 0,
    explication: "Solution constante : 0,25 c = 5, donc c = 20. Les solutions sont y = k e^(−0,25t) + 20. Condition initiale : y(0) = k + 20 = 60, donc k = 40. La dernière réponse oublie de diviser 5 par 0,25 pour trouver la constante.",
    indice: "Cherche d'abord la solution constante, écris la forme générale, puis utilise y(0) = 60 pour trouver k."
  },
  {
    id: "U41-068", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    question: "La température d'un verre, en °C, est donnée par y(t) = 20 + 40 e^(−0,25t), avec t en minutes. Calcule y(4), arrondie au centième.",
    reponse: {"valeur": 34.72, "unite": "°C", "decimales": 2, "signe": false},
    explication: "y(4) = 20 + 40 e^(−0,25 × 4) = 20 + 40 e^(−1) ≈ 20 + 40 × 0,36788 = 20 + 14,715 = 34,715, soit 34,72 °C arrondi au centième.",
    indice: "Remplace t par 4 dans la formule, puis utilise la touche exponentielle de la calculatrice."
  },
  {
    id: "U41-069", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Après le changement de variable z = ln(y − 10), la calculatrice donne r ≈ −0,991 pour la série (x ; z). Que conclure ?",
    choix: ["L'ajustement affine de z en x est pertinent, car |r| est très proche de 1", "L'ajustement affine de z en x n'est pas pertinent, car le coefficient r est négatif", "L'ajustement affine de z en x est pertinent, car r est proche de 0", "Impossible de conclure sans tracer d'abord le nuage de points et la droite"],
    bonne: 0,
    explication: "C'est la valeur absolue de r qui compte : |r| = 0,991 est très proche de 1, donc les points (x ; z) sont presque alignés. Le signe − indique seulement que z diminue quand x augmente.",
    indice: "Regarde la valeur absolue de r : de quelle valeur doit-elle être proche pour que les points soient alignés ?"
  },
  {
    id: "U41-070", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Avec z = ln(y − 10), on trouve la droite z = −0,4x + 4. Quelle est l'expression de y ? (e⁴ ≈ 54,6)",
    choix: ["y = 10 + 54,6 e^(−0,4x)", "y = 54,6 e^(−0,4x) − 10", "y = 10 − 0,4x + 4", "y = 10 + 4 e^(−0,4x)"],
    bonne: 0,
    explication: "ln(y − 10) = −0,4x + 4, donc y − 10 = e^(−0,4x + 4) = e⁴ × e^(−0,4x) ≈ 54,6 e^(−0,4x). D'où y = 10 + 54,6 e^(−0,4x).",
    indice: "Applique l'exponentielle des deux côtés, puis sépare e^(a + b) en un produit. N'oublie pas le 10 à la fin."
  },
  {
    id: "U41-071", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    annexe: {"titre": "Série (x ; z)", "colonnes": ["x", "0", "1", "2", "3", "4", "5"], "lignes": [["z", "3,90", "3,52", "3,21", "2,83", "2,52", "2,20"]]},
    question: "Après le changement de variable z = ln(y − 15), on obtient le tableau ci-dessous. À la calculatrice, donne le coefficient a de la droite de régression de z en x (z = ax + b), arrondi à 10⁻².",
    reponse: {"valeur": -0.34, "unite": "", "decimales": 2, "signe": true},
    explication: "La régression linéaire de z en x donne a ≈ −0,3394 et b ≈ 3,8786, avec r ≈ −0,999. Arrondi à 10⁻², a = −0,34. Le signe − indique que z diminue quand x augmente.",
    indice: "Saisis x et z dans deux listes, puis lance la régression linéaire de type ax + b. Garde le signe de a."
  },
  {
    id: "U41-072", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Dans un magasin, 60 % des verres sont organiques (O) et 40 % sont minéraux. 30 % des verres organiques sont photochromiques (P), contre 25 % des verres minéraux. On choisit un verre photochromique. Quelle est la probabilité qu'il soit organique ? Arrondis à 10⁻³.",
    reponse: {"valeur": 0.643, "unite": "", "decimales": 3, "signe": false},
    explication: "P(O ∩ P) = 0,6 × 0,30 = 0,18\nP(P) = 0,18 + 0,4 × 0,25 = 0,28\nP_P(O) = [[P(O ∩ P)|P(P)]] = [[0,18|0,28]] = [[9|14]]\nDonc P_P(O) ≈ 0,643.",
    indice: "On cherche P_P(O). Calcule P(O ∩ P) et P(P) avec l'arbre, puis divise."
  },
  {
    id: "U41-073", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Même magasin : 60 % de verres organiques (dont 30 % photochromiques) et 40 % de verres minéraux (dont 25 % photochromiques). Quelle est la probabilité P(P) qu'un verre soit photochromique ?",
    choix: ["0,28", "0,55", "0,18", "0,30"],
    bonne: 0,
    explication: "Formule des probabilités totales : P(P) = P(O ∩ P) + P(M ∩ P) = 0,6 × 0,30 + 0,4 × 0,25 = 0,18 + 0,10 = 0,28. La réponse 0,18 ne compte qu'une branche, et 0,55 additionne les deux pourcentages sans tenir compte du poids de chaque branche.",
    indice: "Additionne les probabilités de tous les chemins de l'arbre qui mènent à P, en multipliant le long de chaque chemin."
  },
  {
    id: "U41-074", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "10 % des verres ont une rayure (R) et 20 % ont un défaut de teinte (T), de façon indépendante. Quelle est la probabilité qu'un verre ait au moins un des deux défauts ?",
    choix: ["0,28", "0,30", "0,02", "0,72"],
    bonne: 0,
    explication: "Indépendants : P(R ∩ T) = 0,1 × 0,2 = 0,02. P(R ∪ T) = 0,1 + 0,2 − 0,02 = 0,28. La réponse 0,72 est la probabilité de n'avoir aucun défaut (0,9 × 0,8).",
    indice: "Calcule d'abord P(R ∩ T), puis utilise P(R ∪ T) = P(R) + P(T) − P(R ∩ T)."
  },
  {
    id: "U41-075", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "facile",
    question: "10 % des lentilles d'un stock sont défectueuses. On en prélève 30 au hasard, avec remise. X est le nombre de lentilles défectueuses. Quelle loi suit X et quelle est son espérance ?",
    choix: ["Loi binomiale B(30 ; 0,1), E(X) = 3", "Loi binomiale B(0,1 ; 30), E(X) = 15", "Loi de Poisson de paramètre 30, E(X) = 30", "Loi binomiale B(30 ; 0,1), E(X) = 0,3"],
    bonne: 0,
    explication: "On répète 30 fois, de façon identique et indépendante, une épreuve à deux issues de probabilité de succès 0,1 : X suit B(30 ; 0,1). E(X) = n × p = 30 × 0,1 = 3 lentilles défectueuses en moyenne.",
    indice: "Repère le nombre d'épreuves et la probabilité de succès. L'espérance d'une loi binomiale vaut n × p."
  },
  {
    id: "U41-076", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    question: "X suit la loi binomiale B(30 ; 0,1). Calcule P(X = 0), la probabilité qu'aucune lentille ne soit défectueuse, arrondie à 10⁻³.",
    reponse: {"valeur": 0.042, "unite": "", "decimales": 3, "signe": false},
    explication: "P(X = 0) = 0,9³⁰ ≈ 0,04239, soit 0,042 arrondi à 10⁻³. La probabilité qu'au moins une lentille soit défectueuse vaut alors 1 − 0,042 = 0,958.",
    indice: "P(X = 0) est la probabilité d'avoir 0 succès. Utilise la probabilité binomiale en un point, ou la formule avec 0,9 à la puissance 30."
  },
  {
    id: "U41-077", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "X suit la loi binomiale B(900 ; 0,2). On l'approche par une loi normale. Quels sont ses paramètres ?",
    choix: ["Moyenne 180, écart type 12", "Moyenne 180, écart type 144", "Moyenne 0,2, écart type 0,8", "Moyenne 900, écart type 30"],
    bonne: 0,
    explication: "Moyenne = np = 900 × 0,2 = 180. Écart type = √(np(1 − p)) = √(900 × 0,2 × 0,8) = √144 = 12. La réponse 144 est la variance, il faut prendre la racine carrée.",
    indice: "La moyenne vaut np. Pour l'écart type, calcule np(1 − p), puis prends la racine carrée."
  },
  {
    id: "U41-078", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    question: "Le temps d'attente T, en minutes, au comptoir suit la loi exponentielle de paramètre λ = 0,5. Calcule P(T ≤ 3), arrondie à 10⁻³.",
    reponse: {"valeur": 0.777, "unite": "", "decimales": 3, "signe": false},
    explication: "P(T ≤ 3) = 1 − e^(−0,5 × 3) = 1 − e^(−1,5)\nP(T ≤ 3) ≈ 1 − 0,2231 = 0,7769, soit 0,777 arrondi à 10⁻³.\nL'attente moyenne vaut [[1|λ]] = [[1|0,5]] = 2 minutes.",
    indice: "Pour une loi exponentielle, P(T ≤ t) = 1 − e^(−λt). Remplace λ et t, puis calcule."
  },
  {
    id: "U41-079", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "facile",
    question: "Le temps d'attente T, en minutes, suit la loi uniforme sur [2 ; 10]. Quelle est la probabilité d'attendre au plus 7 minutes ?",
    choix: ["0,625", "0,7", "0,5", "0,875"],
    bonne: 0,
    explication: "Pour la loi uniforme sur [a ; b], P(T ≤ t) = (t − a) / (b − a) = (7 − 2) / (10 − 2) = 5/8 = 0,625. La réponse 0,7 oublie de retrancher a, et 0,875 divise 7 par 8.",
    indice: "Compte la longueur de la partie qui t'intéresse, puis divise par la longueur totale de l'intervalle."
  },
  {
    id: "U41-080", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Sur 400 clients interrogés, 240 sont satisfaits de leurs verres. Quel est l'intervalle de confiance de la proportion p à 95 % ? (formule : f ± 1,96 √(f(1 − f)/n))",
    choix: ["[0,552 ; 0,648]", "[0,575 ; 0,625]", "[0,5 ; 0,7]", "[0,4 ; 0,8]"],
    bonne: 0,
    explication: "f = 240/400 = 0,6. √(0,6 × 0,4 / 400) = √0,0006 ≈ 0,0245. Puis 1,96 × 0,0245 ≈ 0,048. Intervalle : [0,6 − 0,048 ; 0,6 + 0,048] = [0,552 ; 0,648]. La réponse [0,575 ; 0,625] oublie le coefficient 1,96.",
    indice: "Calcule f, puis la demi-largeur 1,96 √(f(1 − f)/n), puis retire-la et ajoute-la à f."
  },
  {
    id: "U41-081", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Sur 200 porteurs de lentilles interrogés, 160 sont satisfaits. Calcule la demi-largeur 1,96 √(f(1 − f)/n) de l'intervalle de confiance à 95 %, arrondie à 10⁻³.",
    reponse: {"valeur": 0.055, "unite": "", "decimales": 3, "signe": false},
    explication: "f = [[160|200]] = 0,8\n√([[f(1 − f)|n]]) = √([[0,8 × 0,2|200]]) = √0,0008 ≈ 0,02828\nDemi-largeur = 1,96 × 0,02828 ≈ 0,0554, soit 0,055 arrondi à 10⁻³.\nL'intervalle de confiance est alors environ [0,745 ; 0,855].",
    indice: "Calcule d'abord f, puis la racine, puis multiplie par 1,96. Garde assez de chiffres avant d'arrondir à la fin."
  },
  {
    id: "U41-082", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Test bilatéral à 5 % : H0 « le diamètre moyen vaut 25 mm ». Sous H0, la moyenne d'un échantillon de 100 pièces suit la loi normale de moyenne 25 et d'écart type 0,1. Un échantillon donne 25,15 mm. Quelle est la conclusion ?",
    choix: ["On ne rejette pas H0, car 25,15 est dans l'intervalle [24,804 ; 25,196]", "On rejette H0, car 25,15 est différent de 25, la valeur annoncée par le fabricant", "On rejette H0, car 25,15 est dans la région de rejet du test bilatéral", "On ne peut pas conclure sans connaître l'écart type de la population"],
    bonne: 0,
    explication: "On rejette H0 si la moyenne observée sort de 25 ± 1,96 × 0,1 = 25 ± 0,196, soit [24,804 ; 25,196]. Ici 25,15 est dans cet intervalle : on ne rejette pas H0 au seuil de 5 %. Être différent de 25 ne suffit pas, il faut sortir de l'intervalle.",
    indice: "Calcule d'abord la zone 25 ± 1,96 × 0,1, puis regarde si la moyenne observée tombe dedans ou dans la région de rejet."
  },
  {
    id: "U41-083", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Un magasin dépense 12 000 € en publicité la première année. Chaque année, ce budget baisse de 10 %. Calcule la somme des budgets des 5 premières années, arrondie à l'euro.",
    reponse: {"valeur": 49141, "unite": "€", "decimales": 0, "signe": false},
    explication: "Suite géométrique de premier terme 12 000 et de raison 0,9.\nS = 12 000 × [[1 − 0,9⁵|1 − 0,9]]\nS = 12 000 × [[0,40951|0,1]] = 49 141,2\nSoit 49 141 € arrondi à l'euro. Le piège : additionner 12 000 × 5 sans tenir compte de la baisse.",
    indice: "Premier terme × (1 − raison^nombre de termes) / (1 − raison). Compte bien 5 termes, de la première à la cinquième année."
  },
  {
    id: "U41-084", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Un stock compte 240 montures. On en vend 18 par mois sans jamais réapprovisionner. Au bout de combien de mois le stock devient-il strictement inférieur à 30 ?",
    choix: ["11 mois", "12 mois", "13 mois", "10 mois"],
    bonne: 1,
    explication: "Le stock au bout de n mois est u(n) = 240 − 18n. On veut 240 − 18n < 30, donc 18n > 210 et n > 11,67. Le premier entier qui convient est 12 : u(12) = 24 < 30, alors que u(11) = 42 est encore au-dessus de 30. Arrondir 11,67 à 11 est l'erreur classique.",
    indice: "Résous l'inéquation, puis prends le premier entier strictement supérieur au résultat. Vérifie avec les rangs voisins."
  },
  {
    id: "U41-085", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "On a u(0) = 100 et u(n+1) = 0,5 u(n) + 40. Sans calculer de termes, que peut-on dire du sens de variation de la suite ?",
    choix: ["Elle est décroissante, car elle part au-dessus de sa limite 80", "Elle est croissante, car on ajoute 40 à chaque étape à la valeur précédente", "Elle est constante, car les coefficients 0,5 et 40 sont fixes", "Elle alterne au-dessus puis en dessous de 80 à chaque étape"],
    bonne: 0,
    explication: "La valeur qui ne bouge plus vérifie ℓ = 0,5 ℓ + 40, donc ℓ = 80. Comme 0 < 0,5 < 1, la suite se rapproche de 80 sans la dépasser. Elle part de 100, au-dessus de 80, donc elle décroît : u(1) = 90, u(2) = 85, u(3) = 82,5. Ajouter 40 ne rend pas la suite croissante, car on multiplie aussi par 0,5.",
    indice: "Cherche d'abord la valeur ℓ qui ne bouge plus. La suite s'en rapproche : par le haut ou par le bas ?"
  },
  {
    id: "U41-086", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Un équipement vaut 18 000 € à l'achat et perd 12 % de sa valeur chaque année. Au bout de combien d'années sa valeur passe-t-elle sous 9 000 € pour la première fois ?",
    reponse: {"valeur": 6, "unite": "ans", "decimales": 0, "signe": false},
    explication: "La valeur après n années est 18 000 × 0,88ⁿ.\nOn veut 18 000 × 0,88ⁿ < 9 000, donc 0,88ⁿ < 0,5\nn > [[ln 0,5|ln 0,88]] ≈ 5,42\nLe premier entier est 6.\nContrôle au tableau : 9 499 € après 5 ans (encore au-dessus de 9 000), 8 359 € après 6 ans.",
    indice: "Écris 0,88ⁿ < 0,5 puis utilise le logarithme, ou fais défiler le tableau de valeurs de la calculatrice. Attention au sens de l'inégalité quand on divise par ln 0,88."
  },
  {
    id: "U41-087", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Quelle est la dérivée de g(t) = (t + 2) e^(−0,5t) ?",
    choix: ["g'(t) = e^(−0,5t)", "g'(t) = −0,5 (t + 2) e^(−0,5t)", "g'(t) = −0,5 t e^(−0,5t)", "g'(t) = 0,5 t e^(−0,5t)"],
    bonne: 2,
    explication: "Produit u × v avec u = t + 2 (u' = 1) et v = e^(−0,5t) (v' = −0,5 e^(−0,5t)). Donc g' = e^(−0,5t) + (t + 2)(−0,5) e^(−0,5t) = e^(−0,5t) (1 − 0,5t − 1) = −0,5 t e^(−0,5t). Dériver chaque facteur séparément et multiplier ne marche pas.",
    indice: "Formule du produit : (u v)' = u' v + u v'. Factorise ensuite par e^(−0,5t)."
  },
  {
    id: "U41-088", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "La température d'un verre en °C est f(t) = 40 + 60 e^(−0,1t), t en minutes. Calcule f'(5), la vitesse de variation de la température à t = 5 min, arrondie au centième. Le signe compte.",
    reponse: {"valeur": -3.64, "unite": "°C/min", "decimales": 2, "signe": true},
    explication: "f'(t) = 60 × (−0,1) e^(−0,1t) = −6 e^(−0,1t). Donc f'(5) = −6 e^(−0,5) ≈ −6 × 0,6065 = −3,64 °C/min. Le signe négatif veut dire que le verre refroidit.",
    indice: "Dérive d'abord f, puis remplace t par 5 à la calculatrice. Une température qui baisse a une dérivée négative."
  },
  {
    id: "U41-089", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Quelle est la valeur maximale de f(x) = x e^(−x) sur [0 ; +∞[ ?",
    choix: ["e⁻¹ ≈ 0,368", "1", "0,5", "e⁻² ≈ 0,135"],
    bonne: 0,
    explication: "f'(x) = e^(−x) − x e^(−x) = (1 − x) e^(−x). Cette dérivée est positive avant x = 1 et négative après : f admet son maximum en x = 1, et f(1) = 1 × e⁻¹ ≈ 0,368. Attention : 1 est l'abscisse du maximum, pas sa valeur.",
    indice: "Étudie le signe de f'(x). Le maximum est atteint là où la dérivée change de signe : ensuite, calcule f en ce point."
  },
  {
    id: "U41-090", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Quel est le développement limité de e^(−2x) à l'ordre 2 en 0 ? (Rappel : e^u = 1 + u + u²/2 + …)",
    choix: ["1 − 2x + 4x²", "1 − 2x − 2x²", "1 + 2x + 2x²", "1 − 2x + 2x²"],
    bonne: 3,
    explication: "On remplace u par −2x : 1 + (−2x) + (−2x)²/2 = 1 − 2x + 4x²/2 = 1 − 2x + 2x². La réponse avec 4x² oublie de diviser par 2 ; celle avec −2x² oublie que le carré d'un nombre négatif est positif.",
    indice: "Remplace u par −2x dans la formule, sans oublier de diviser u² par 2."
  },
  {
    id: "U41-091", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Calcule I = ∫ de 0 à 2 de 3 e^(−x) dx, arrondie au millième.",
    reponse: {"valeur": 2.594, "unite": "", "decimales": 3, "signe": false},
    explication: "Une primitive de 3 e^(−x) est −3 e^(−x). Donc I = [−3 e^(−x)] de 0 à 2 = −3 e^(−2) + 3 = 3 (1 − e^(−2)) ≈ 3 × 0,8647 = 2,594.",
    indice: "La primitive de e^(−x) est −e^(−x). Calcule F(2) − F(0)."
  },
  {
    id: "U41-092", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "La température d'un verre est f(t) = 20 + 60 e^(−0,5t) en °C, t en minutes. Quelle est sa valeur moyenne sur [0 ; 4], arrondie au centième ?",
    choix: ["54,06 °C", "45,94 °C", "26,48 °C", "183,76 °C"],
    bonne: 1,
    explication: "Une primitive de f est F(t) = 20t − 120 e^(−0,5t). Donc ∫ de 0 à 4 de f = F(4) − F(0) = (80 − 120 e⁻²) − (−120) = 200 − 120 e⁻² ≈ 183,76. La valeur moyenne vaut 183,76 / 4 ≈ 45,94 °C. 183,76 oublie de diviser par la longueur 4 ; 54,06 est la moyenne de f(0) et f(4), pas l'intégrale ; 26,48 vient d'une primitive fausse (on multiplie par −0,5 au lieu de diviser).",
    indice: "Valeur moyenne = (1 / (b − a)) × l'intégrale. La primitive de 60 e^(−0,5t) est 60 / (−0,5) e^(−0,5t)."
  },
  {
    id: "U41-093", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Sur [0 ; 2], la droite d'équation y = x + 3 est au-dessus de la parabole y = x². Quelle est l'aire (en unités d'aire) entre les deux courbes ?",
    choix: ["16/3 ≈ 5,33", "8/3 ≈ 2,67", "14/3 ≈ 4,67", "−16/3 ≈ −5,33"],
    bonne: 0,
    explication: "L'aire est ∫ de 0 à 2 de (x + 3 − x²) dx = [x²/2 + 3x − x³/3] de 0 à 2 = 2 + 6 − 8/3 = 16/3 ≈ 5,33. On soustrait la courbe du bas à la courbe du haut. 8/3 est seulement l'aire sous la parabole ; −16/3 vient d'une soustraction dans le mauvais ordre : une aire n'est jamais négative.",
    indice: "Aire entre deux courbes = intégrale de (courbe du haut − courbe du bas)."
  },
  {
    id: "U41-094", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Quelles sont les solutions de l'équation différentielle 2y' + 4y = 6 ?",
    choix: ["y(t) = k e^(−0,5t) + 1,5", "y(t) = k e^(−2t) + 3", "y(t) = k e^(2t) + 1,5", "y(t) = k e^(−2t) + 1,5"],
    bonne: 3,
    explication: "On divise par 2 : y' + 2y = 3. La solution constante c vérifie 2c = 3, donc c = 1,5. Les solutions de y' + 2y = 0 sont k e^(−2t). La solution générale est y(t) = k e^(−2t) + 1,5. L'exposant −0,5 vient d'une division à l'envers (a/b au lieu de b/a), et la constante 3 oublie de diviser par 2.",
    indice: "Cherche une solution constante c, puis ajoute les solutions de l'équation sans second membre. Attention à l'exposant : −b/a."
  },
  {
    id: "U41-095", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Soit y' + 0,4y = 8 avec y(0) = 5. Calcule y(3), arrondie au centième.",
    reponse: {"valeur": 15.48, "unite": "", "decimales": 2, "signe": false},
    explication: "Solution constante : 0,4c = 8, donc c = 20. Solution générale : y = k e^(−0,4t) + 20. Avec y(0) = 5 : k + 20 = 5, donc k = −15. Ainsi y(t) = 20 − 15 e^(−0,4t) et y(3) = 20 − 15 e^(−1,2) ≈ 20 − 15 × 0,3012 ≈ 15,48.",
    indice: "Trouve la solution constante, écris la solution générale, utilise y(0) = 5 pour trouver k, puis calcule en t = 3."
  },
  {
    id: "U41-096", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Une température suit y(t) = 20 − 15 e^(−0,4t). Au bout de combien de minutes atteint-elle 18 °C ? (arrondi au centième)",
    choix: ["2,01 min", "5,04 min", "0,81 min", "18,75 min"],
    bonne: 1,
    explication: "20 − 15 e^(−0,4t) = 18 donne e^(−0,4t) = 2/15. On prend le logarithme : −0,4t = ln(2/15), donc t = ln(7,5) / 0,4 ≈ 2,015 / 0,4 ≈ 5,04 min. 2,01 oublie de diviser par 0,4, 0,81 multiplie par 0,4 au lieu de diviser, 18,75 divise 7,5 par 0,4 sans passer par le logarithme.",
    indice: "Isole l'exponentielle, prends ln des deux côtés, puis divise par le coefficient de t."
  },
  {
    id: "U41-097", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Un ajustement donne z = ln y = 0,2x + 3, où x est le rang de l'année. Quelle valeur de y prévoit-on pour x = 5 ? (arrondie au dixième)",
    reponse: {"valeur": 54.6, "unite": "", "decimales": 1, "signe": false},
    explication: "Pour x = 5 : z = 0,2 × 5 + 3 = 4. Comme z = ln y, on a y = e⁴ ≈ 54,6. La réponse 4 est la valeur de z, pas celle de y.",
    indice: "Calcule z, puis reviens à y avec la fonction exponentielle."
  },
  {
    id: "U41-098", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Une série de mesures a pour moyenne 12 et pour écart type 3. On multiplie chaque valeur par 2 puis on ajoute 5. Quelles sont la nouvelle moyenne et le nouvel écart type ?",
    choix: ["Moyenne 29, écart type 11", "Moyenne 24, écart type 6", "Moyenne 29, écart type 8", "Moyenne 29, écart type 6"],
    bonne: 3,
    explication: "La moyenne subit les deux opérations : 12 × 2 + 5 = 29. L'écart type mesure la dispersion : ajouter 5 décale toutes les valeurs sans changer leur écart, mais multiplier par 2 double la dispersion. Il vaut 3 × 2 = 6.",
    indice: "Ajouter une constante décale les valeurs. Multiplier les écarte. Que devient l'écart type dans chaque cas ?"
  },
  {
    id: "U41-099", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Un ajustement exponentiel donne z = ln y = −0,3x + 4,6. Chaque fois que x augmente de 1, y est multiplié par un même nombre. De quel pourcentage y baisse-t-il ? (arrondi au dixième de pourcent)",
    reponse: {"valeur": 25.9, "unite": "%", "decimales": 1, "signe": false},
    explication: "Quand x augmente de 1, z baisse de 0,3, donc y est multiplié par e^(−0,3) ≈ 0,7408. Le taux de variation est 0,7408 − 1 = −0,2592, soit une baisse de 25,9 %. Piège : −0,3 n'est pas un taux de 30 %.",
    indice: "Passe de z à y : y est multiplié par e^(−0,3) à chaque pas. Un coefficient multiplicateur CM donne un taux CM − 1."
  },
  {
    id: "U41-100", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Dans un dépistage, 2 % des personnes ont une anomalie. Le test est positif dans 95 % des cas chez une personne avec anomalie, et dans 8 % des cas chez une personne sans anomalie. Une personne a un test positif. Quelle est la probabilité qu'elle ait l'anomalie ? (arrondie au millième)",
    reponse: {"valeur": 0.195, "unite": "", "decimales": 3, "signe": false},
    explication: "P(A ∩ +) = 0,02 × 0,95 = 0,019\nP(non A ∩ +) = 0,98 × 0,08 = 0,0784\nP(+) = 0,019 + 0,0784 = 0,0974\nP_+(A) = [[P(A ∩ +)|P(+)]] = [[0,019|0,0974]] ≈ 0,195\nUn test positif ne donne l'anomalie qu'une fois sur cinq environ, parce que l'anomalie est rare.",
    indice: "Calcule P(+) avec les deux branches de l'arbre, puis divise la branche « anomalie et positif » par P(+)."
  },
  {
    id: "U41-101", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "On a P(A) = 0,4, P(B) = 0,5 et P(A ∪ B) = 0,7. Les événements A et B sont-ils indépendants ?",
    choix: ["Oui, car P(A ∩ B) = 0,2 = P(A) × P(B)", "Non, car P(A ∪ B) est différent de P(A) + P(B)", "Non, car P(A ∩ B) n'est pas nul", "On ne peut pas conclure sans arbre"],
    bonne: 0,
    explication: "On déduit P(A ∩ B) = P(A) + P(B) − P(A ∪ B) = 0,4 + 0,5 − 0,7 = 0,2. Or P(A) × P(B) = 0,4 × 0,5 = 0,2 : l'égalité est vraie, A et B sont indépendants. Une intersection non nulle n'empêche pas l'indépendance, et P(A ∪ B) ≠ P(A) + P(B) est vrai pour deux événements qui se recoupent, indépendants ou non.",
    indice: "Retrouve d'abord P(A ∩ B) avec la formule de l'union, puis compare-la à P(A) × P(B)."
  },
  {
    id: "U41-102", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Trois contrôles de qualité indépendants détectent chacun un défaut avec la probabilité 0,7. Quelle est la probabilité qu'au moins un des trois détecte le défaut ? (arrondie au millième)",
    reponse: {"valeur": 0.973, "unite": "", "decimales": 3, "signe": false},
    explication: "L'événement contraire est « aucun contrôle ne détecte le défaut » : chacun échoue avec la probabilité 0,3, donc 0,3³ = 0,027. Donc P(au moins un) = 1 − 0,027 = 0,973.",
    indice: "« Au moins un » se calcule presque toujours avec le contraire « aucun »."
  },
  {
    id: "U41-103", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Le nombre de clients qui entrent entre 12 h et 13 h suit une loi de Poisson de paramètre 3. Calcule la probabilité d'avoir au moins 2 clients, arrondie au millième.",
    reponse: {"valeur": 0.801, "unite": "", "decimales": 3, "signe": false},
    explication: "P(X ≥ 2) = 1 − P(X = 0) − P(X = 1) = 1 − e⁻³ (1 + 3) = 1 − 4 × 0,04979 ≈ 0,801. À la calculatrice : 1 − poissonFRép(3 ; 1).",
    indice: "Passe par le contraire : « au moins 2 » = 1 − (0 ou 1)."
  },
  {
    id: "U41-104", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Le diamètre X d'une pièce suit la loi normale d'espérance 60 et d'écart type 4. Quelle est P(52 ≤ X ≤ 64), arrondie au millième ?",
    choix: ["0,683", "0,819", "0,954", "0,136"],
    bonne: 1,
    explication: "On se ramène à Z = (X − 60) / 4 : 52 devient −2 et 64 devient +1. P(−2 ≤ Z ≤ 1) = 0,8413 − 0,0228 = 0,819. La réponse 0,683 est l'intervalle à ±1 écart type, 0,954 celui à ±2 : les bornes ne sont pas symétriques ici.",
    indice: "Calcule les deux valeurs centrées réduites. Les bornes sont-elles à la même distance de 60 ?"
  },
  {
    id: "U41-105", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Le temps d'attente T d'un client suit une loi exponentielle de paramètre λ = 0,2 (en minutes). Il a déjà attendu 5 minutes. Quelle est la probabilité qu'il attende encore plus de 3 minutes ?",
    choix: ["0,549", "0,368", "0,202", "0,451"],
    bonne: 0,
    explication: "La loi exponentielle est sans mémoire : P(T > 8 sachant T > 5) = P(T > 3) = e^(−0,2 × 3) = e^(−0,6) ≈ 0,549. 0,368 serait P(T > 5), 0,202 serait P(T > 8), et 0,451 est la probabilité d'attendre moins de 3 minutes de plus.",
    indice: "Sans mémoire : le temps déjà attendu ne compte plus. Ramène la question à une attente de 3 minutes depuis le début."
  },
  {
    id: "U41-106", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "On veut estimer une proportion avec un intervalle de confiance de demi-largeur au plus 0,03. On utilise la majoration de la demi-largeur par 1/√n. Quel est le plus petit nombre n de personnes à interroger ?",
    reponse: {"valeur": 1112, "unite": "", "decimales": 0, "signe": false},
    explication: "On veut [[1|√n]] ≤ 0,03\ndonc √n ≥ [[1|0,03]]\net n ≥ [[1|0,03²]] = [[1|0,0009]] ≈ 1 111,1\nIl faut arrondir par excès : n = 1 112. Prendre 1 111 donnerait une marge un peu trop grande.",
    indice: "Résous 1/√n ≤ 0,03 en élevant au carré. Dans quel sens faut-il arrondir ?"
  },
  {
    id: "U41-107", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Un échantillon de 64 pièces donne une moyenne de 25,2 mm. L'écart type estimé de la population est 0,8 mm. Quel est l'intervalle de confiance à 95 % de la moyenne ? (formule : m ± 1,96 s / √n)",
    choix: ["[23,632 ; 26,768]", "[25,175 ; 25,225]", "[25,004 ; 25,396]", "[25,100 ; 25,300]"],
    bonne: 2,
    explication: "La demi-largeur vaut 1,96 × 0,8 / √64 = 1,96 × 0,8 / 8 = 0,196. L'intervalle est [25,2 − 0,196 ; 25,2 + 0,196] = [25,004 ; 25,396]. Oublier √n donne 1,568 ; diviser par 64 au lieu de 8 donne 0,0245 ; oublier 1,96 donne 0,1.",
    indice: "Calcule la demi-largeur : coefficient 1,96, fois l'écart type, divisé par la racine de n."
  },
  {
    id: "U41-108", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Deux forfaits : le forfait A coûte u(n) = 1 000 + 80n € après n années ; le forfait B coûte v(n) = 800 × 1,05ⁿ €. À la calculatrice, trouve le premier rang n tel que v(n) > u(n).",
    reponse: {"valeur": 30, "unite": "", "decimales": 0, "signe": false},
    explication: "Au tableau de valeurs : n = 29 donne v ≈ 3 292,9 et u = 3 320 (v encore en dessous) ; n = 30 donne v ≈ 3 457,6 et u = 3 400 (v passe au-dessus). Le premier rang est 30. Une suite arithmétique croît d'un pas fixe, une suite géométrique finit toujours par la rattraper.",
    indice: "Entre les deux suites dans le tableau de valeurs, avec un pas de 1, et cherche le premier rang où la colonne de v dépasse celle de u."
  },
  {
    id: "U41-109", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Le nombre d'abonnés d'une newsletter est donné par u(n) = 5 000 × 0,92ⁿ, n en années. Quel est le taux d'évolution global au bout de 3 ans ?",
    choix: ["Une baisse d'environ 22,1 %", "Une baisse de 24 %", "Une baisse de 8 %", "Une hausse d'environ 22,1 %"],
    bonne: 0,
    explication: "Trois baisses successives de 8 % multiplient par 0,92³ ≈ 0,7787. Le taux global vaut 0,7787 − 1 = −0,2213, soit une baisse de 22,1 %. Additionner 3 × 8 % donne 24 %, mais les taux ne s'additionnent pas.",
    indice: "Calcule le coefficient multiplicateur global, puis retire 1."
  },
  {
    id: "U41-110", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "On a u(0) = 0 et u(n+1) = −0,5 u(n) + 9. Les premiers termes sont 0 ; 9 ; 4,5 ; 6,75 ; 5,625. Que peut-on dire de cette suite ?",
    choix: ["Elle converge vers 18 sans osciller", "Elle diverge, car elle n'est pas monotone", "Elle converge vers 4,5 en restant au-dessus", "Elle converge vers 6 en oscillant"],
    bonne: 3,
    explication: "La valeur fixe vérifie ℓ = −0,5 ℓ + 9, donc 1,5 ℓ = 9 et ℓ = 6. Comme |−0,5| < 1, la suite converge vers 6. La raison est négative, donc les termes passent alternativement au-dessus et en dessous de 6. Ne pas être monotone n'empêche pas de converger.",
    indice: "Résous ℓ = −0,5 ℓ + 9. Une raison négative fait alterner les termes de part et d'autre de la limite."
  },
  {
    id: "U41-111", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Pour quelles valeurs de x a-t-on 5 − 4 e^(−0,2x) ≥ 4,5 ?",
    choix: ["x ≤ 10,40 environ", "x ≥ 2,08 environ", "x ≥ 10,40 environ (5 ln 8)", "x ≥ −10,40 environ"],
    bonne: 2,
    explication: "5 − 4 e^(−0,2x) ≥ 4,5 équivaut à 4 e^(−0,2x) ≤ 0,5, donc e^(−0,2x) ≤ 0,125. Avec ln (croissante) : −0,2x ≤ ln 0,125 = −ln 8. On divise par −0,2, nombre négatif : l'inégalité change de sens et x ≥ ln 8 / 0,2 = 5 ln 8 ≈ 10,40. Oublier de diviser par 0,2 donne 2,08.",
    indice: "Isole l'exponentielle, applique ln, puis attention au sens de l'inégalité quand on divise par un nombre négatif."
  },
  {
    id: "U41-112", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Quel est le maximum local de f(x) = x³ − 6x² + 9x ?",
    choix: ["0", "4", "1", "3"],
    bonne: 1,
    explication: "f'(x) = 3x² − 12x + 9 = 3 (x − 1)(x − 3). La dérivée est positive avant 1, négative entre 1 et 3, positive après 3 : f a un maximum local en x = 1, de valeur f(1) = 1 − 6 + 9 = 4, et un minimum local en x = 3, de valeur f(3) = 0. 1 et 3 sont des abscisses, pas des valeurs.",
    indice: "Factorise la dérivée, dresse son signe, puis calcule f à l'endroit où elle passe de + à −."
  },
  {
    id: "U41-113", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Quelle est la limite de f(t) = t e^(−t) quand t tend vers +∞ ?",
    choix: ["0", "+∞", "1", "−∞"],
    bonne: 0,
    explication: "Par croissances comparées, l'exponentielle l'emporte sur t : t e^(−t) = t / eᵗ tend vers 0. Un produit « grand × petit » n'est pas toujours infini : ici le facteur e^(−t) tend vers 0 plus vite que t ne grandit.",
    indice: "Écris t e^(−t) comme une fraction t / eᵗ. Lequel des deux grandit le plus vite ?"
  },
  {
    id: "U41-114", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Calcule I = ∫ de 1 à 4 de 3/x dx, arrondie au millième.",
    reponse: {"valeur": 4.159, "unite": "", "decimales": 3, "signe": false},
    explication: "Une primitive de 3/x est 3 ln x. Donc I = 3 ln 4 − 3 ln 1 = 3 ln 4 ≈ 3 × 1,3863 = 4,159.",
    indice: "Une primitive de 1/x est ln x. Rappelle-toi que ln 1 = 0."
  },
  {
    id: "U41-115", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Le temps d'attente suit la densité f(x) = 0,5 e^(−0,5x) sur [0 ; +∞[. Quelle est l'aire sous la courbe de f entre 0 et 4, c'est-à-dire P(0 ≤ T ≤ 4) ?",
    choix: ["e⁻² ≈ 0,135", "2 e⁻² ≈ 0,271", "1 − e⁻² ≈ 0,865", "0,5"],
    bonne: 2,
    explication: "Une primitive de 0,5 e^(−0,5x) est −e^(−0,5x). L'intégrale de 0 à 4 vaut −e⁻² + e⁰ = 1 − e⁻² ≈ 0,865. e⁻² ≈ 0,135 est la probabilité du contraire, P(T > 4).",
    indice: "Cherche la primitive de f, puis calcule F(4) − F(0). Que vaut e⁰ ?"
  },
  {
    id: "U41-116", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "La fonction g(t) = 5 − 2 e^(−0,5t) est solution de quelle équation différentielle ?",
    choix: ["y' + 0,5y = 5", "y' + 0,5y = 2,5", "y' − 0,5y = 2,5", "y' + 2y = 10"],
    bonne: 1,
    explication: "g'(t) = −2 × (−0,5) e^(−0,5t) = e^(−0,5t). Alors g' + 0,5g = e^(−0,5t) + 2,5 − e^(−0,5t) = 2,5 : les exponentielles se compensent. Pour y' + 0,5y = 5, la solution constante serait 10 ; avec y' + 2y = 10 l'exponentielle ne disparaît pas.",
    indice: "Calcule g' puis remplace dans chaque équation proposée : le terme en exponentielle doit disparaître."
  },
  {
    id: "U41-117", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "La concentration y(t) vérifie y' = −0,3y + 6 avec y(0) = 10. Au bout de combien de minutes atteint-elle 19 ? (arrondi au centième)",
    reponse: {"valeur": 7.68, "unite": "min", "decimales": 2, "signe": false},
    explication: "Solution constante : 0,3c = 6, donc c = [[6|0,3]] = 20\nAvec y(0) = 10 : y(t) = 20 − 10 e^(−0,3t)\nOn résout 20 − 10 e^(−0,3t) = 19, soit e^(−0,3t) = [[1|10]] = 0,1\nt = [[ln 10|0,3]] ≈ [[2,3026|0,3]] ≈ 7,68 min.",
    indice: "Écris l'équation sous la forme y' + 0,3y = 6. Trouve y(t), puis résous y(t) = 19 avec un logarithme."
  },
  {
    id: "U41-118", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Une population de bactéries vérifie y' = 0,1y. Au bout de combien de temps double-t-elle ? (arrondi au centième)",
    choix: ["10 unités de temps", "7 unités de temps", "0,69 unité de temps", "6,93 unités de temps"],
    bonne: 3,
    explication: "y(t) = y(0) e^(0,1t). Elle double quand e^(0,1t) = 2, donc t = ln 2 / 0,1 ≈ 6,93. Le temps de doublement ne dépend pas de la valeur de départ. 0,69 oublie de diviser par 0,1.",
    indice: "Cherche t tel que e^(0,1t) = 2. Utilise ln."
  },
  {
    id: "U41-119", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Série ordonnée de 9 valeurs : 12 ; 15 ; 15 ; 18 ; 20 ; 22 ; 25 ; 30 ; 41. Quel est l'écart interquartile Q3 − Q1 ? (Q1 : plus petite valeur telle qu'au moins 25 % des valeurs lui soient inférieures ou égales ; Q3 : idem avec 75 %.)",
    choix: ["29", "5", "10", "20"],
    bonne: 2,
    explication: "25 % de 9 = 2,25 : Q1 est la 3e valeur, soit 15. 75 % de 9 = 6,75 : Q3 est la 7e valeur, soit 25. L'écart interquartile est 25 − 15 = 10. 29 est l'étendue (41 − 12), 20 la médiane.",
    indice: "Calcule 25 % et 75 % de l'effectif et prends le rang entier supérieur."
  },
  {
    id: "U41-120", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Les couples (x ; y) sont (1 ; 3), (2 ; 5), (3 ; 4), (4 ; 8), (5 ; 10). À la calculatrice, donne le coefficient de corrélation linéaire r, arrondi au millième.",
    reponse: {"valeur": 0.922, "unite": "", "decimales": 3, "signe": false},
    explication: "On entre les listes L1 = 1 ; 2 ; 3 ; 4 ; 5 et L2 = 3 ; 5 ; 4 ; 8 ; 10, puis on lance la régression linéaire. La calculatrice donne r ≈ 0,922. Un r proche de 1 montre une liaison linéaire forte, mais ne prouve pas qu'une variable cause l'autre.",
    indice: "Menu statistiques, deux listes, régression linéaire y = ax + b. Si r n'apparaît pas, active l'affichage des diagnostics."
  },
  {
    id: "U41-121", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Les ventes d'un modèle suivent la droite y = −4,2x + 130, avec x le nombre d'années depuis 2020. Pourquoi la prévision pour 2060 n'a-t-elle pas de sens ?",
    choix: ["Elle donne une valeur négative (−38) : la droite n'est valable que près de la période observée", "Elle donne 130 ventes, ce qui est trop élevé pour un magasin de cette taille", "On ne peut prévoir qu'avec une droite croissante, jamais avec une droite décroissante", "Le coefficient −4,2 est trop petit pour être utilisé dans une prévision fiable"],
    bonne: 0,
    explication: "Pour 2060, x = 40 et y = −4,2 × 40 + 130 = −38 ventes, ce qui est impossible. Une droite d'ajustement décrit bien les données observées, pas un avenir lointain : on évite l'extrapolation loin de la zone d'étude.",
    indice: "Calcule la valeur pour 2060. Le résultat est-il possible pour un nombre de ventes ?"
  },
  {
    id: "U41-122", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Un atelier reçoit ses verres de trois fournisseurs : F1 (50 %), F2 (30 %) et F3 (20 %). Les taux de verres défectueux sont 2 %, 3 % et 5 %. Quelle est la probabilité qu'un verre pris au hasard soit défectueux ?",
    choix: ["0,033", "0,1", "0,02", "0,029"],
    bonne: 3,
    explication: "Formule des probabilités totales : 0,5 × 0,02 + 0,3 × 0,03 + 0,2 × 0,05 = 0,010 + 0,009 + 0,010 = 0,029. La moyenne simple des taux (0,033) ignore les parts de chaque fournisseur, et 0,1 est leur somme.",
    indice: "Pondère chaque taux par la part du fournisseur correspondant, puis additionne."
  },
  {
    id: "U41-123", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Même atelier : F1 (50 %, 2 % de défauts), F2 (30 %, 3 %) et F3 (20 %, 5 %). Un verre est défectueux. Quelle est la probabilité qu'il vienne de F3 ? (arrondie au millième)",
    reponse: {"valeur": 0.345, "unite": "", "decimales": 3, "signe": false},
    explication: "P(D) = 0,5 × 0,02 + 0,3 × 0,03 + 0,2 × 0,05 = 0,029\nP(F3 ∩ D) = 0,2 × 0,05 = 0,010\nP_D(F3) = [[P(F3 ∩ D)|P(D)]] = [[0,010|0,029]] ≈ 0,345\nF3 fournit 20 % des verres mais 34,5 % des défauts.",
    indice: "Probabilité conditionnelle : P(F3 ∩ D) divisé par P(D), que tu calcules avec les trois branches."
  },
  {
    id: "U41-124", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    question: "Un lot contient 10 montures dont 3 sont défectueuses. On en tire 2 successivement, sans remise. Quelle est la probabilité que les deux soient défectueuses ?",
    choix: ["9/100 = 0,09", "1/15 ≈ 0,067", "1/3 ≈ 0,333", "2/15 ≈ 0,133"],
    bonne: 1,
    explication: "Première défectueuse : 3/10. Il reste alors 9 montures dont 2 défectueuses : 2/9. Donc 3/10 × 2/9 = 6/90 = 1/15 ≈ 0,067. La réponse 0,09 = (3/10)² suppose un tirage avec remise.",
    indice: "Sans remise : la composition du lot change après le premier tirage."
  },
  {
    id: "U41-125", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "X suit la loi binomiale B(20 ; 0,15). À la calculatrice, calcule P(X ≤ 2), arrondie au millième.",
    reponse: {"valeur": 0.405, "unite": "", "decimales": 3, "signe": false},
    explication: "On utilise la fonction de répartition binomiale : binomFRép(20 ; 0,15 ; 2) ≈ 0,405. Cela revient à P(X = 0) + P(X = 1) + P(X = 2). Ne pas confondre avec binomFdP, qui donne P(X = 2) seule.",
    indice: "« Au plus 2 » est un cumul : utilise la fonction de répartition, pas la probabilité en un point."
  },
  {
    id: "U41-126", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "X suit la loi binomiale B(200 ; 0,01). Quelle approximation est la plus adaptée ?",
    choix: ["Une loi normale d'espérance 2", "Une loi de Poisson de paramètre 200", "Une loi normale d'espérance 200", "Une loi de Poisson de paramètre 2"],
    bonne: 3,
    explication: "n est grand et p est petit : np = 200 × 0,01 = 2 est trop faible pour la loi normale (on veut np et n(1 − p) au moins égaux à 5 environ). On utilise la loi de Poisson de paramètre λ = np = 2. Le paramètre 200 est n, pas np.",
    indice: "Calcule np. Si np est très petit et n grand, quelle loi est la mieux adaptée ?"
  },
  {
    id: "U41-127", epreuve: "U41", theme: "Lois de probabilité", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Le diamètre X d'une lentille, en mm, suit la loi normale d'espérance 25 et d'écart type 0,2. À la calculatrice (FracNormale), trouve h tel que P(X ≤ h) = 0,99. Arrondis au centième.",
    reponse: {"valeur": 25.47, "unite": "mm", "decimales": 2, "signe": false},
    explication: "Pour 0,99, la valeur centrée réduite est z ≈ 2,3263. Donc h = 25 + 0,2 × 2,3263 ≈ 25,465, soit 25,47 mm. À la calculatrice : FracNormale(0,99 ; 25 ; 0,2).",
    indice: "Fonction réciproque de la loi normale : aire à gauche 0,99, moyenne 25, écart type 0,2."
  },
  {
    id: "U41-128", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Test unilatéral à 5 % : H0 « p = 0,9 » contre H1 « p < 0,9 ». Sous H0, la fréquence f d'un échantillon de 100 suit approximativement une loi normale d'espérance 0,9 et d'écart type 0,03. On rejette H0 si f est inférieure à 0,9 − 1,645 × 0,03. Quelle est la borne de rejet ? (arrondie au millième)",
    reponse: {"valeur": 0.851, "unite": "", "decimales": 3, "signe": false},
    explication: "0,9 − 1,645 × 0,03 = 0,9 − 0,04935 = 0,85065, soit 0,851. On rejette H0 si f < 0,851. Dans un test unilatéral à 5 %, on utilise 1,645 et non 1,96, qui sert au test bilatéral.",
    indice: "Calcule 1,645 × 0,03, puis retranche-le de 0,9."
  },
  {
    id: "U41-129", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Avec les mêmes données, une demi-largeur de 0,048 correspond à un niveau de confiance de 95 % (coefficient 1,96). On passe à un niveau de 99 % (coefficient 2,58). Quelle devient la demi-largeur ? (arrondie au millième)",
    reponse: {"valeur": 0.063, "unite": "", "decimales": 3, "signe": false},
    explication: "La demi-largeur est proportionnelle au coefficient.\nNouvelle demi-largeur = 0,048 × [[2,58|1,96]] ≈ 0,063\nUn niveau de confiance plus élevé donne un intervalle plus large : on est plus sûr de couvrir la vraie valeur, mais moins précis.",
    indice: "La demi-largeur est proportionnelle au coefficient 1,96 ou 2,58."
  },
  {
    id: "U41-130", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Test bilatéral à 5 % sur H0 « μ = 25 mm ». Sous H0, la moyenne d'un échantillon suit une loi normale d'espérance 25 et d'écart type 0,12. L'échantillon observé a pour moyenne 25,30 mm. Quelle conclusion est correcte ?",
    choix: ["On ne rejette pas H0, car 25,30 est proche de la valeur 25 annoncée", "On rejette H0 : cela prouve que la moyenne μ vaut exactement 25,30", "On rejette H0 avec certitude, sans aucun risque d'erreur", "On rejette H0 au risque de 5 %, car 25,30 sort de [24,765 ; 25,235]"],
    bonne: 3,
    explication: "Zone d'acceptation : 25 ± 1,96 × 0,12 = 25 ± 0,235, soit [24,765 ; 25,235]. 25,30 est à l'extérieur : on rejette H0 au risque de 5 % de se tromper. Rejeter H0 ne prouve pas que μ vaut 25,30, et ne donne jamais de certitude.",
    indice: "Calcule la zone 25 ± 1,96 × 0,12. Si la moyenne observée est dehors, qu'en conclure et avec quel risque ?"
  },
  {
    id: "U41-131", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Sur une droite graduée : A(0), B(8), C(2). Quelle est l'abscisse de D pour que (A, B ; C, D) soit une division harmonique ?",
    choix: ["4", "10", "−4", "16"],
    bonne: 2,
    explication: "Le milieu de [AB] est I(4), avec IA = 4. Dans une division harmonique, IA² = IC × ID (C et D du même côté de I). IC = 2, donc ID = 16 / 2 = 8, et D est du même côté que C : D = 4 − 8 = −4. Contrôle : DA/DB = 4/12 = 1/3 et CA/CB = 2/6 = 1/3, avec D à l'extérieur de [AB] et C à l'intérieur.",
    indice: "Utilise le milieu I de [AB] : IA² = IC × ID. D est-il d'un côté ou de l'autre de I par rapport à C ?"
  },
  {
    id: "U41-132", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "AB = 12 cm. Le point C est sur [AB] avec AC = 3 cm. Le point D est sur la droite (AB), à l'extérieur de [AB], tel que (A, B ; C, D) soit une division harmonique. Calcule DA en cm.",
    reponse: {"valeur": 6, "unite": "cm", "decimales": 0, "signe": false},
    explication: "Division harmonique : [[CA|CB]] = [[DA|DB]]\nIci [[CA|CB]] = [[3|9]] = [[1|3]]\nD est du côté de A, donc DB = DA + 12.\n[[DA|DA + 12]] = [[1|3]]\n3 DA = DA + 12, donc DA = 6 cm\nContrôle : [[6|18]] = [[1|3]].",
    indice: "Écris le rapport CA / CB, puis le même rapport DA / DB en notant DA = x et DB = x + 12."
  },
  {
    id: "U41-147", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "Le chiffre d'affaires mensuel d'un magasin (en k€) suit la droite de régression y = 1,8x + 22, où x est le rang du mois (x = 0 pour janvier).",
    question: "Quelle prévision cette droite donne-t-elle pour décembre ?",
    choix: ["43,6 k€", "21,6 k€", "41,8 k€", "23,8 k€"],
    bonne: 2,
    explication: "Décembre est le douzième mois, donc x = 11 (janvier a le rang 0).\ny = 1,8 × 11 + 22 = 19,8 + 22 = 41,8 k€\nLe rang 12 donnerait 43,6 k€ : c'est l'erreur de départ classique. 21,6 vient de 1,8 × 12 sans la constante, et 23,8 de 1,8 + 22.",
    indice: "Quel rang a décembre quand janvier a le rang 0 ? Remplace ensuite x dans l'équation."
  },
  {
    id: "U41-148", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "Série de 5 mesures : x = 2 ; 4 ; 6 ; 8 ; 10 et y = 11 ; 13 ; 18 ; 20 ; 23. La droite de régression de y en x est y = ax + b avec a = 1,55.",
    question: "La droite passe par le point moyen G. Calcule b sans refaire la régression, arrondi au dixième.",
    reponse: {"valeur": 7.7, "unite": "", "decimales": 1, "signe": false},
    explication: "Moyennes : x̄ = [[2 + 4 + 6 + 8 + 10|5]] = 6 et ȳ = [[11 + 13 + 18 + 20 + 23|5]] = 17\nLa droite passe par G(6 ; 17) : 17 = 1,55 × 6 + b\nb = 17 − 9,3 = 7,7\nLa calculatrice donne bien b = 7,7.",
    indice: "Calcule les deux moyennes, puis remplace x et y par ces moyennes dans y = ax + b."
  },
  {
    id: "U41-149", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un ajustement exponentiel donne z = ln y = 0,15x + 2,3, où x est le rang de l'année.",
    question: "De quel pourcentage y augmente-t-il en moyenne quand x augmente de 1 ?",
    choix: ["Environ 16,2 %", "15 %", "150 %", "Environ 10 %"],
    bonne: 0,
    explication: "Quand x augmente de 1, z augmente de 0,15, donc y est multiplié par e^(0,15) ≈ 1,1618.\nTaux de variation : 1,1618 − 1 = 0,1618, soit environ 16,2 %.\nLe coefficient 0,15 n'est pas un taux : on ne peut pas lire directement 15 %. Dire 150 % confond 0,15 et 1,5, et 10 % ne correspond à aucun calcul : seul e^(0,15) − 1 donne le taux.",
    indice: "Passe de z à y avec l'exponentielle : y est multiplié par e^(0,15) à chaque pas."
  },
  {
    id: "U41-150", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Sur douze mois, le nombre de lunettes de soleil vendues et le nombre de glaces vendues dans la même ville ont un coefficient de corrélation r ≈ 0,96.",
    question: "Que peut-on conclure de ce coefficient de corrélation ? Choisis la rédaction correcte.",
    choix: ["Comme r est proche de 1, les ventes de lunettes de soleil sont la cause des ventes de glaces, et on peut donc le démontrer avec ce seul coefficient.", "Comme r est proche de 1, les deux grandeurs sont indépendantes : l'une ne dépend pas de l'autre, et aucun lien n'existe entre ces deux séries de ventes.", "Comme r est proche de 1, la droite d'ajustement est exacte, et chaque point du nuage se trouve exactement sur la droite de régression : il n'y a aucune erreur.", "Les deux grandeurs varient presque ensemble, mais cela ne prouve pas que l'une cause l'autre : une cause commune, comme la chaleur, peut expliquer les deux."],
    bonne: 3,
    explication: "Un r proche de 1 montre une liaison linéaire forte entre les deux séries, pas une relation de cause à effet. Ici, la chaleur augmente les deux ventes à la fois. Dire que r démontre la cause est faux. Dire « indépendantes » est faux aussi : r proche de 1 indique le contraire. Et r proche de 1 ne veut pas dire que les points sont exactement alignés.",
    indice: "Une forte corrélation prouve-t-elle qu'une variable en provoque une autre ? Cherche une troisième variable qui agit sur les deux."
  },
  {
    id: "U41-151", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un nuage de points (x ; y) est courbé. Le coefficient de corrélation est r ≈ 0,93 pour (x ; y) et r ≈ 0,998 pour (x ; z) avec z = ln y.",
    question: "Quel ajustement faut-il retenir ? Choisis la conclusion correctement rédigée.",
    choix: ["Comme 0,93 est déjà proche de 1, l'ajustement affine de y en x est parfait, donc le changement de variable est inutile ici et on peut simplement l'ignorer sans rien perdre.", "Le plus grand |r| est toujours celui du couple de départ (x ; y), car on garde les variables d'origine et non les variables transformées par le logarithme : on garde donc la droite de y en x.", "Le nuage est courbé et |r| passe de 0,93 à 0,998 après le changement de variable : l'ajustement affine de z en x est plus adapté que celui de y en x.", "On choisit l'ajustement dont le r est le plus proche de 0, car il contient moins de corrélation parasite entre les points du nuage observé : ici, c'est celui de y en x."],
    bonne: 2,
    explication: "Quand le nuage est courbé, un r de 0,93 ne suffit pas à valider l'ajustement affine, et on compare avec celui obtenu après changement de variable : 0,998 est plus proche de 1. Il faut aussi regarder la forme du nuage, pas seulement r. Choisir le r le plus proche de 0 est absurde. Dire que le r de départ est toujours le plus grand est faux.",
    indice: "Compare les deux |r|, puis regarde la forme du nuage : lequel des deux ajustements suit le mieux les points ?"
  },
  {
    id: "U41-152", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "Série (x ; y) : (1 ; 2,1), (2 ; 3,4), (3 ; 5,0), (4 ; 4,6), (5 ; 7,2), (6 ; 8,1).",
    question: "À la calculatrice, donne le coefficient de corrélation linéaire r, arrondi au millième.",
    reponse: {"valeur": 0.969, "unite": "", "decimales": 3, "signe": false},
    explication: "Liste L1 : 1 ; 2 ; 3 ; 4 ; 5 ; 6 et liste L2 : 2,1 ; 3,4 ; 5,0 ; 4,6 ; 7,2 ; 8,1.\nRégression linéaire y = ax + b : a ≈ 1,171 et b ≈ 0,967, avec r ≈ 0,9694, soit 0,969.\nSi r n'apparaît pas, active l'affichage des diagnostics (CorrelAff sur TI).",
    indice: "Entre les deux listes, lance la régression linéaire de y en x et lis r, pas r²."
  },
  {
    id: "U41-153", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un nuage de 10 points est presque aligné, sauf un point très éloigné des autres (probablement une erreur de saisie).",
    question: "Quelle rédaction décrit correctement son effet et la bonne conduite ?",
    choix: ["Ce point peut tirer la droite vers lui et faire baisser |r| : on vérifie la mesure, puis on décide de le garder ou de l'écarter en le justifiant.", "Ce point n'a aucun effet sur la droite, car les neuf autres points suffisent à la déterminer : on garde la droite telle quelle sans rien vérifier du tout.", "Ce point fait toujours monter |r| vers 1 : on le garde pour obtenir la meilleure corrélation possible, sans aucune autre vérification de la mesure.", "Ce point doit toujours être supprimé sans rien dire, car un seul point faux rend le coefficient r impossible à calculer avec la calculatrice."],
    bonne: 0,
    explication: "La droite des moindres carrés est sensible aux points éloignés : un seul point peut la dévier et, en général, faire baisser |r|. La bonne conduite est de vérifier la mesure puis de justifier le choix. Supprimer en silence ou garder pour « arranger » r est malhonnête. Dire qu'il n'a aucun effet est faux.",
    indice: "Les moindres carrés pèsent beaucoup les grands écarts. Que faut-il faire d'un point suspect ?"
  },
  {
    id: "U41-154", epreuve: "U41", theme: "Statistique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    contexte: "Une droite d'ajustement donne les ventes y = 3,2x + 41,5, où x est le rang de l'année.",
    question: "À partir de quel rang entier x les ventes prévues atteignent-elles au moins 100 ?",
    reponse: {"valeur": 19, "unite": "", "decimales": 0, "signe": false},
    explication: "On résout 3,2 x + 41,5 ≥ 100, donc 3,2 x ≥ 58,5\nx ≥ [[100 − 41,5|3,2]] = [[58,5|3,2]] ≈ 18,28\nLe rang doit être entier : on arrondit par excès, donc x = 19.\nContrôle : y(18) = 99,1 (trop bas) et y(19) = 102,3.",
    indice: "Résous l'inéquation, puis prends le premier entier qui convient : attention au sens de l'arrondi."
  },
  {
    id: "U41-155", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Sur une droite graduée : A(0), B(12), C(8).",
    question: "Quelle est l'abscisse de D pour que (A, B ; C, D) soit une division harmonique ?",
    choix: ["16", "20", "24", "32"],
    bonne: 2,
    explication: "On cherche D tel que [[CA|CB]] = [[DA|DB]] en distances. CA = 8 et CB = 4, donc [[CA|CB]] = 2.\nC est à l'intérieur de [AB], D est à l'extérieur, du côté de B (rapport plus grand que 1). Si DB = y, alors DA = 12 + y.\n[[12 + y|y]] = 2, donc 12 + y = 2y et y = 12. D = 12 + 12 = 24.\nContrôle : DA = 24 et DB = 12, rapport 2.",
    indice: "Calcule le rapport CA ÷ CB. D est du côté de B si ce rapport dépasse 1."
  },
  {
    id: "U41-156", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "Sur une droite graduée : A(0), B(10), D(−15).",
    question: "Quelle est l'abscisse de C, entre A et B, pour que (A, B ; C, D) soit une division harmonique ? (arrondie au centième)",
    reponse: {"valeur": 3.75, "unite": "", "decimales": 2, "signe": false},
    explication: "DA = 15 et DB = 25, donc [[DA|DB]] = [[15|25]] = [[3|5]]\nC est à l'intérieur de [AB] : posons AC = x et CB = 10 − x, avec [[x|10 − x]] = [[3|5]]\n5x = 3 (10 − x), donc 8x = 30 et x = 3,75\nC a pour abscisse 3,75.",
    indice: "Calcule d'abord le rapport DA ÷ DB, puis écris le même rapport avec AC = x et CB = 10 − x."
  },
  {
    id: "U41-157", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Sur une droite graduée : A(0), B(6), C(−3).",
    question: "Quelle est l'abscisse de D, à l'intérieur de [AB], pour que (A, B ; C, D) soit une division harmonique ?",
    choix: ["1,5", "−1,5", "9", "2"],
    bonne: 0,
    explication: "C est à l'extérieur de [AB] : CA = 3 et CB = 9, donc [[CA|CB]] = [[1|3]].\nD est donc à l'intérieur de [AB], avec [[DA|DB]] = [[1|3]]. Si DA = x, alors DB = 6 − x.\n[[x|6 − x]] = [[1|3]], donc 3x = 6 − x et x = 1,5.\nD a pour abscisse 1,5. Le point −1,5 serait à l'extérieur de [AB], de l'autre côté de A.",
    indice: "Si C est à l'extérieur de [AB], où doit se trouver D ? Pose DA = x et DB = 6 − x."
  },
  {
    id: "U41-158", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Sur une droite graduée : A(0), B(9), C(3), D(−9).",
    question: "Quelle rédaction détermine correctement si (A, B ; C, D) est une division harmonique ?",
    choix: ["Non : CA/CB = −1/2 et DA/DB = 1/2 sont des valeurs différentes, donc ce n'est pas une division harmonique.", "Non : C et D ne sont pas symétriques par rapport au milieu de [AB], donc ce n'est pas une division harmonique.", "Oui : D est le symétrique de C par rapport à A, donc la division est harmonique.", "Oui : en mesures algébriques, CA/CB = (−3)/6 = −1/2 et DA/DB = 9/18 = 1/2, donc CA/CB = −DA/DB."],
    bonne: 3,
    explication: "En mesures algébriques, la condition est CA/CB = −DA/DB. Ici −1/2 = −(1/2) : la condition est vérifiée. Dire que −1/2 et 1/2 sont « différents » oublie le signe de la condition. Un symétrique par rapport au milieu n'est pas la condition, et le symétrique de C par rapport à A serait −3, pas −9.",
    indice: "Calcule les deux rapports avec leur signe, puis compare CA/CB avec le contraire de DA/DB."
  },
  {
    id: "U41-159", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "AB = 15 cm. Le point C est sur [AB] avec AC = 9 cm. Le point D est sur la droite (AB), à l'extérieur de [AB], tel que (A, B ; C, D) soit une division harmonique.",
    question: "Calcule DB, en cm.",
    reponse: {"valeur": 30, "unite": "cm", "decimales": 0, "signe": false},
    explication: "CA = 9 et CB = 6, donc [[CA|CB]] = [[9|6]] = [[3|2]] : ce rapport dépasse 1, donc D est du côté de B.\nPosons DB = y et DA = y + 15 : [[y + 15|y]] = [[3|2]]\n2 (y + 15) = 3y, donc 2y + 30 = 3y et y = 30\nDB = 30 cm. Contrôle : DA = 45 et [[45|30]] = [[3|2]].",
    indice: "Calcule CA ÷ CB. Si ce rapport est plus grand que 1, D est du côté de B : pose DB = y et DA = y + 15."
  },
  {
    id: "U41-160", epreuve: "U41", theme: "Division harmonique", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "(A, B ; C, D) est une division harmonique.",
    question: "Que peut-on dire de (A, B ; D, C), où l'on a échangé C et D ?",
    choix: ["Ce n'est plus une division harmonique : il faudrait aussi échanger A et B pour que la condition reste vraie.", "C'est aussi une division harmonique : la condition ne change pas quand on échange C et D.", "Ce n'est plus une division harmonique, car le rapport devient son inverse et la condition n'est plus vérifiée.", "On ne peut rien dire sans connaître les abscisses des quatre points A, B, C et D sur la droite graduée."],
    bonne: 1,
    explication: "La condition s'écrit CA/CB = −DA/DB. Échanger C et D donne DA/DB = −CA/CB, qui est exactement la même égalité. La division reste donc harmonique : C et D jouent des rôles symétriques. Les abscisses sont inutiles ici : l'égalité est la même quelles que soient les positions, et les autres réponses inventent une condition qui n'existe pas.",
    indice: "Écris la condition de départ, puis écris-la en échangeant C et D. Est-ce la même égalité ?"
  },
  {
    id: "U41-161", epreuve: "U41", theme: "Équations différentielles", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "Un élève résout l'équation différentielle 3y' + 12y = 24.",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "Solution constante : 12c = 24, donc c = 2."], ["2", "Sans second membre : 3y' + 12y = 0, donc y = k e^(−(3/12)t) = k e^(−0,25t)."], ["3", "Solutions de l'équation : y(t) = k e^(−0,25t) + 2."]]},
    question: "Dans cette résolution d'équation différentielle, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 2 : l'exposant est −b/a = −12/3 = −4, pas −a/b : les solutions sans second membre sont k e^(−4t).", "Ligne 1 : la constante vaut c = 24 ÷ 3 = 8, car on divise par le coefficient de y', pas par celui de y.", "Ligne 3 : il faut soustraire la constante 2 et non l'ajouter, car la solution générale est k e^(−0,25t) − 2.", "Il n'y a aucune erreur : la copie est correcte du début à la fin, et la solution proposée vérifie l'équation."],
    bonne: 0,
    explication: "Pour a y' + b y = c, les solutions sans second membre sont k e^(−(b/a)t). Ici b/a = [[12|3]] = 4, donc k e^(−4t), et la solution constante vaut [[24|12]] = 2. La solution correcte est y(t) = k e^(−4t) + 2. La ligne 1 est juste : on divise par b = 12, le coefficient de y. La ligne 3 est cohérente avec la ligne 2 et ajoute bien la constante : seule l'erreur d'exposant en ligne 2 est à corriger.",
    indice: "Vérifie l'exposant : c'est −b/a, avec a devant y' et b devant y. Teste ensuite la solution dans l'équation."
  },
  {
    id: "U41-162", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un élève dérive f(t) = (2t + 1) e^(−t).",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "u = 2t + 1, u' = 2 ; v = e^(−t), v' = e^(−t)."], ["2", "f'(t) = u'v + uv' = 2 e^(−t) + (2t + 1) e^(−t)."], ["3", "f'(t) = (2t + 3) e^(−t) > 0, donc f est croissante sur [0 ; +∞[."]]},
    question: "Dans cette dérivation, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 2 : la formule du produit est (uv)' = u'v − uv' : il faut un signe moins entre les deux termes de la dérivée.", "Ligne 3 : la factorisation donne 2 + 2t + 1 = 2t + 1 et non 2t + 3, car il faut regrouper les termes semblables.", "Ligne 1 : u' = 2t, car on dérive 2t + 1 en gardant la variable t à la puissance un devant le coefficient 2.", "Ligne 1 : la dérivée de e^(−t) est −e^(−t) (on multiplie par −1), pas e^(−t)."],
    bonne: 3,
    explication: "Avec v = e^(−t), on a v' = −e^(−t). Donc f'(t) = 2 e^(−t) − (2t + 1) e^(−t) = (1 − 2t) e^(−t), qui change de signe en t = 0,5 : f n'est pas croissante sur [0 ; +∞[. La formule du produit (uv)' = u'v + uv' est juste, la factorisation de la ligne 3 est cohérente avec la ligne 2, et u' = 2 est bien la dérivée de 2t + 1.",
    indice: "Dérive chaque morceau séparément et vérifie la dérivée de e^(−t) : que vaut le facteur devant l'exponentielle ?"
  },
  {
    id: "U41-163", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "On a u(n+1) = 0,6 u(n) + 20 et u(0) = 10. Un élève cherche l'expression de u(n).",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "ℓ = 0,6 ℓ + 20, donc 0,4 ℓ = 20 et ℓ = 50. On pose v(n) = u(n) − 50."], ["2", "v(n+1) = 0,6 u(n) − 30 = 0,6 v(n) : (v(n)) est géométrique de raison 0,6."], ["3", "v(0) = 10 − 50 = −40, donc v(n) = −40 × 0,6ⁿ."], ["4", "Donc u(n) = −40 × 0,6ⁿ."]]},
    question: "Dans cette étude de suite, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 3 : v(0) = 10 − 50 = 40 et non −40, car la valeur absolue d'une différence est toujours positive.", "Ligne 2 : la raison de (v(n)) est 0,4, car 1 − 0,6 = 0,4 : la raison est le complément du coefficient 0,6.", "Ligne 4 : on a oublié d'ajouter ℓ = 50 : u(n) = v(n) + 50 = 50 − 40 × 0,6ⁿ.", "Ligne 1 : ℓ = 20 ÷ 0,6 ≈ 33,3, car on divise la constante par le coefficient de u(n) sans rien soustraire."],
    bonne: 2,
    explication: "On revient de v à u avec u(n) = v(n) + ℓ = v(n) + 50. Donc u(n) = 50 − 40 × 0,6ⁿ. Contrôle : n = 0 donne 50 − 40 = 10 = u(0), et la copie donnait −40, qui ne vérifie pas u(0) = 10. Les lignes 1 à 3 sont justes : ℓ = [[20|0,4]] = 50, la raison est bien 0,6 et v(0) = −40 (le signe compte).",
    indice: "Vérifie ton résultat avec n = 0 : retrouves-tu u(0) = 10 ?"
  },
  {
    id: "U41-164", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Sur 200 clients, 90 sont satisfaits. Un élève calcule l'intervalle de confiance à 95 % de la proportion.",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "f = 90/200 = 0,45."], ["2", "Écart type de la fréquence : f(1 − f)/n = 0,45 × 0,55 / 200 ≈ 0,0012."], ["3", "1,96 × 0,0012 ≈ 0,0024."], ["4", "Intervalle : [0,45 − 0,0024 ; 0,45 + 0,0024] = [0,448 ; 0,452]."]]},
    question: "Dans ce calcul d'intervalle de confiance, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 1 : f est la proportion de clients mécontents, donc f = 110/200 = 0,55 et non 90/200 = 0,45.", "Ligne 2 : il manque la racine carrée : il faut √0,0012375 ≈ 0,0352 pour la demi-largeur.", "Ligne 3 : pour un niveau de confiance de 95 %, il faut multiplier par 2,58 et non par 1,96, car 2,58 est plus sûr.", "Ligne 4 : l'intervalle doit être [f − 0,0024 ; f + 0,0048], car la demi-largeur est asymétrique autour de f."],
    bonne: 1,
    explication: "La demi-largeur est 1,96 √([[f(1 − f)|n]]) : sans la racine, l'élève obtient un intervalle de largeur 0,5 point, anormalement étroit.\nf(1 − f)/n = [[0,45 × 0,55|200]] = 0,0012375 → √0,0012375 ≈ 0,0352\nDemi-largeur = 1,96 × 0,0352 ≈ 0,069 → intervalle [0,381 ; 0,519]. Les lignes 1, 3 et 4 sont justes : f = 0,45 compte les satisfaits, 1,96 est le coefficient de 95 %, et l'intervalle est symétrique.",
    indice: "Un intervalle de confiance sur 200 personnes aussi étroit est suspect. Relis la formule : que manque-t-il avant de multiplier par 1,96 ?"
  },
  {
    id: "U41-165", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "30 % des verres sont photochromiques (A). 80 % des verres photochromiques ont un antireflet (B), contre 20 % des autres verres. Un élève cherche la probabilité qu'un verre avec antireflet soit photochromique.",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "P(A ∩ B) = 0,3 × 0,8 = 0,24."], ["2", "P(non A ∩ B) = 0,2."], ["3", "P(B) = 0,24 + 0,2 = 0,44."], ["4", "P_B(A) = 0,24 / 0,44 ≈ 0,545."]]},
    question: "Dans ce calcul de probabilité conditionnelle, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 2 : on a oublié de multiplier par P(non A) = 0,7 : P(non A ∩ B) = 0,7 × 0,2 = 0,14.", "Ligne 1 : P(A ∩ B) = 0,3 + 0,8 − 0,3 × 0,8 = 0,86, car on cherche la probabilité d'au moins l'un des deux événements.", "Ligne 3 : il faut multiplier les deux probabilités et non les additionner, car P(B) est le produit des deux branches.", "Ligne 4 : il faut diviser par P(A) = 0,3 et non par P(B), car la condition porte sur les verres photochromiques."],
    bonne: 0,
    explication: "La branche « non photochromique et antireflet » se calcule comme les autres : P(non A) × P_nonA(B) = 0,7 × 0,2 = 0,14.\nP(B) = 0,24 + 0,14 = 0,38\nP_B(A) = [[P(A ∩ B)|P(B)]] = [[0,24|0,38]] ≈ 0,632\nLes lignes 1, 3 et 4 sont justes : un chemin se multiplie, deux chemins s'additionnent, et on divise par P(B) car on sait que le verre a un antireflet.",
    indice: "Chaque branche de l'arbre est un produit. Compare les lignes 1 et 2 : ont-elles la même forme ?"
  },
  {
    id: "U41-166", epreuve: "U41", theme: "Calcul intégral", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un élève calcule I = ∫ de 0 à 2 de (3 − e^(−x)) dx.",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "Une primitive de 3 − e^(−x) est F(x) = 3x − e^(−x)."], ["2", "F(2) = 6 − e^(−2) et F(0) = 0 − 1 = −1."], ["3", "I = F(2) − F(0) = 6 − e^(−2) + 1 = 7 − e^(−2)."]]},
    question: "Dans ce calcul d'intégrale, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 2 : F(0) = 0 − 1 vaut +1, car le calcul d'une primitive en 0 donne toujours une valeur positive pour l'exponentielle.", "Ligne 3 : il faut calculer F(0) − F(2) et non F(2) − F(0), car la borne 0 est celle qui est écrite en bas de l'intégrale.", "Ligne 1 : la primitive de 3 est 3, car la primitive d'une constante est la constante elle-même, sans le facteur x.", "Ligne 1 : la primitive de −e^(−x) est +e^(−x), pas −e^(−x) : F(x) = 3x + e^(−x)."],
    bonne: 3,
    explication: "On dérive F pour vérifier : (3x − e^(−x))' = 3 + e^(−x), ce qui n'est pas 3 − e^(−x). La bonne primitive est F(x) = 3x + e^(−x), puisque (e^(−x))' = −e^(−x).\nF(2) = 6 + e^(−2) et F(0) = 0 + 1 = 1\nI = F(2) − F(0) = 5 + e^(−2) ≈ 5,135\nLa formule F(b) − F(a) de la ligne 3 est juste, et la primitive d'une constante 3 est 3x.",
    indice: "Dérive la primitive proposée : retrouves-tu la fonction de départ ? Fais attention au signe de la dérivée de e^(−x)."
  },
  {
    id: "U41-167", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "Algorithme :",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "n ← 0 ; u ← 100"], ["2", "Tant que u < 200 :"], ["3", "    u ← 1,2 × u"], ["4", "    n ← n + 1"], ["5", "Fin Tant que"]]},
    question: "Quelles sont les valeurs de n et de u à la fin de l'algorithme ?",
    choix: ["n = 3 et u ≈ 172,8, car la boucle s'arrête dès que u est proche de 200", "n = 4 et u = 200, car la boucle s'arrête exactement quand u atteint 200", "n = 4 et u ≈ 207,36, car la boucle s'arrête dès que u dépasse 200", "n = 5 et u ≈ 248,83, car il faut un tour de plus après avoir dépassé 200"],
    bonne: 2,
    explication: "À chaque tour, u est multiplié par 1,2 : 120 (n = 1), 144 (n = 2), 172,8 (n = 3), 207,36 (n = 4). À la fin du tour 3, u = 172,8 est encore inférieur à 200 : la boucle continue. À la fin du tour 4, u = 207,36 n'est plus inférieur à 200 : la boucle s'arrête. u n'a aucune raison de valoir exactement 200 : c'est 100 × 1,2⁴ = 207,36.",
    indice: "Fais un tableau tour par tour : n, u, et le test u < 200 à la fin de chaque tour."
  },
  {
    id: "U41-168", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "On veut afficher le plus petit rang n tel que 500 × 0,9ⁿ < 100.",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "n ← 0 ; u ← 500"], ["2", "Tant que … :"], ["3", "    u ← 0,9 × u"], ["4", "    n ← n + 1"], ["5", "Fin Tant que"], ["6", "Afficher n"]]},
    question: "Quelle condition faut-il écrire à la ligne 2, et quelle valeur l'algorithme affiche-t-il ?",
    choix: ["u ≥ 100, et l'algorithme affiche 15, car u vaut encore 102,95 à ce rang", "u ≥ 100, et l'algorithme affiche 16, car la boucle s'arrête au premier u sous 100", "u < 100, et l'algorithme affiche 0, car la boucle ne s'exécute pas du tout", "u ≥ 100, et l'algorithme affiche 17, car il faut un tour de plus après avoir franchi le seuil"],
    bonne: 1,
    explication: "On continue tant que le seuil n'est pas atteint, donc la condition est u ≥ 100. Avec u < 100, la boucle ne s'exécute jamais (500 n'est pas inférieur à 100) et l'algorithme affiche 0.\nn = 15 : 500 × 0,9¹⁵ ≈ 102,95 ≥ 100 → la boucle continue\nn = 16 : 500 × 0,9¹⁶ ≈ 92,65 < 100 → elle s'arrête\nL'algorithme affiche 16. Contrôle par le calcul : n > [[ln 0,2|ln 0,9]] ≈ 15,28.",
    indice: "La boucle tourne tant qu'on n'a pas atteint le but. Fais ensuite défiler les rangs autour de 15 et 16."
  },
  {
    id: "U41-169", epreuve: "U41", theme: "Fonctions", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "La température d'un verre, en °C, est f(t) = 20 + 60 e^(−0,5t), t en minutes (f(3) ≈ 33,4 et f(4) ≈ 28,1).",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "t ← 0"], ["2", "Tant que 20 + 60 × exp(−0,5 × t) > 30 :"], ["3", "    t ← t + 1"], ["4", "Fin Tant que"], ["5", "Afficher t"]]},
    question: "Quelle valeur l'algorithme affiche-t-il, et comment s'interprète-t-elle ?",
    choix: ["4 : c'est le premier instant entier où la température est inférieure ou égale à 30 °C", "3 : c'est le dernier instant entier où la température est supérieure à 30 °C, juste avant de repasser sous le seuil", "3,58 : c'est l'instant exact où la température atteint 30 °C, calculé avec le logarithme pendant la boucle", "5 : c'est le premier instant entier où la température est strictement inférieure à 28 °C, après le seuil"],
    bonne: 0,
    explication: "L'algorithme teste des instants entiers : f(0) = 80, f(1) ≈ 56,4, f(2) ≈ 42,1, f(3) ≈ 33,4 : tous supérieurs à 30, la boucle continue. f(4) ≈ 28,1 ≤ 30 : la boucle s'arrête avec t = 4. L'algorithme donne donc un entier : 4 minutes. Il ne donne pas la valeur exacte t = 2 ln 6 ≈ 3,58, qu'on obtient en résolvant l'inéquation avec le logarithme.",
    indice: "La boucle teste seulement t = 0, 1, 2… Calcule f pour chaque entier et regarde quand le test devient faux."
  },
  {
    id: "U41-170", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "La fonction alea() renvoie un nombre au hasard entre 0 et 1.",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "c ← 0"], ["2", "Pour i de 1 à 1000 :"], ["3", "    Si alea() < 0,3 alors c ← c + 1"], ["4", "Fin Pour"], ["5", "Afficher c / 1000"]]},
    question: "Que représente la valeur affichée ?",
    choix: ["La probabilité exacte de l'événement, qui vaut toujours 0,3 à chaque exécution, quel que soit le nombre de tirages", "Le nombre de fois où alea() est inférieur à 0,3, qui vaut environ 300 et non une valeur proche de 0,3", "La probabilité qu'un tirage de plus soit inférieur à 0,3, qui augmente à chaque tirage grâce à la loi des grands nombres", "Une fréquence d'un événement de probabilité 0,3 : proche de 0,3, mais variable d'une exécution à l'autre"],
    bonne: 3,
    explication: "c compte les tirages inférieurs à 0,3 : c / 1000 est la fréquence observée sur 1000 tirages. Elle se rapproche de 0,3 quand le nombre de tirages augmente, mais elle varie d'une exécution à l'autre (0,287 ; 0,312…). La probabilité 0,3 est un fait du modèle, pas un résultat de la simulation.",
    indice: "Que compte c ? Que devient c divisé par le nombre de tirages ? Deux exécutions donnent-elles exactement le même nombre ?"
  },
  {
    id: "U41-171", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "facile",
    contexte: "Algorithme :",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "u ← 5"], ["2", "Pour k de 1 à 3 :"], ["3", "    u ← 2 × u − 1"], ["4", "Fin Pour"], ["5", "Afficher u"]]},
    question: "Quelle valeur l'algorithme affiche-t-il ?",
    choix: ["17", "9", "33", "65"],
    bonne: 2,
    explication: "Tour 1 : u = 2 × 5 − 1 = 9\nTour 2 : u = 2 × 9 − 1 = 17\nTour 3 : u = 2 × 17 − 1 = 33\nLa boucle « Pour k de 1 à 3 » fait 3 tours : l'algorithme affiche 33. 17 est la valeur après 2 tours seulement, 9 après 1 tour, et 65 après 4 tours.",
    indice: "Compte les tours : « de 1 à 3 » fait trois passages. Écris u à la fin de chaque tour."
  },
  {
    id: "U41-172", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "On veut afficher le plus petit rang n tel que u(n) > 350, avec u(0) = 200 et u(n+1) = 0,95 u(n) + 20 (la limite de la suite est 400).",
    annexe: {"titre": "Algorithme (ne donne pas le bon résultat)", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "n ← 0 ; u ← 200"], ["2", "Tant que u ≤ 350 :"], ["3", "    u ← 0,95 × u + 20"], ["4", "Fin Tant que"], ["5", "Afficher n"]]},
    question: "Quel est le défaut de cet algorithme ?",
    choix: ["La boucle ne s'arrête jamais, car la suite se rapproche de 400 sans jamais atteindre 350 et reste donc au-dessus de la condition", "n n'augmente jamais dans la boucle : l'algorithme s'arrête bien, mais affiche toujours 0 au lieu du rang", "La condition devrait être u < 350, sinon l'algorithme s'arrête trop tôt et affiche un rang trop petit d'une unité", "u doit être initialisé à 350 et non à 200, sinon l'algorithme compte des rangs qui précèdent le début de la suite"],
    bonne: 1,
    explication: "La ligne « n ← n + 1 » manque. La suite dépasse bien 350 (sa limite est 400), donc la boucle se termine, mais n reste à 0 et l'algorithme affiche 0. Corrigé : ajouter n ← n + 1 dans la boucle, ce qui donne n = 28 (u(27) ≈ 349,94 ≤ 350 et u(28) ≈ 352,4 > 350).",
    indice: "Que contient n à la fin ? Que fait la boucle sur n ?"
  },
  {
    id: "U41-179", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "Une urne contient 12 verres de démonstration, dont 4 sont teintés. On en tire 2 successivement, sans remise.",
    question: "Calcule la probabilité qu'aucun des deux verres tirés ne soit teinté, arrondie au millième.",
    reponse: {"valeur": 0.424, "unite": "", "decimales": 3, "signe": false},
    explication: "Premier verre non teinté : [[8|12]]. Il reste alors 11 verres dont 7 non teintés : [[7|11]].\nP = [[8|12]] × [[7|11]] = [[56|132]] ≈ 0,424\nAvec remise, on aurait obtenu ([[8|12]])² ≈ 0,444 : sans remise, la composition de l'urne change après le premier tirage.",
    indice: "Après le premier tirage sans remise, combien de verres reste-t-il, et combien sont non teintés ?"
  },
  {
    id: "U41-180", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "On a P(A) = 0,3, P(B) = 0,4 et P(A ∩ B) = 0,15.",
    question: "Quelle rédaction conclut correctement sur l'indépendance de A et B ?",
    choix: ["P(A ∩ B) = 0,15 est inférieur à P(A) = 0,3 et à P(B) = 0,4, donc A et B sont indépendants.", "P(A) × P(B) = 0,3 × 0,4 = 0,12, différent de P(A ∩ B) = 0,15 : A et B ne sont pas indépendants.", "P(A) + P(B) = 0,7 est inférieur à 1, donc A et B sont indépendants, car leur somme ne dépasse pas 1.", "P(A ∩ B) = 0,15 est proche de P(A) × P(B) = 0,12, donc on peut considérer que A et B sont indépendants."],
    bonne: 1,
    explication: "A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B). Ici 0,3 × 0,4 = 0,12 et P(A ∩ B) = 0,15 : l'égalité est fausse, même de peu. Une intersection plus petite que chacun des deux événements, ou une somme inférieure à 1, n'a rien à voir avec l'indépendance. « Proche de » ne suffit pas : l'égalité doit être exacte.",
    indice: "Compare P(A ∩ B) avec le produit P(A) × P(B). L'égalité est-elle exacte ?"
  },
  {
    id: "U41-181", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "X suit la loi binomiale B(25 ; 0,08) : 25 verres sont prélevés, chacun étant défectueux avec la probabilité 0,08.",
    question: "À la calculatrice, calcule P(X ≤ 1), arrondie au millième.",
    reponse: {"valeur": 0.395, "unite": "", "decimales": 3, "signe": false},
    explication: "On utilise la fonction de répartition binomiale : binomFRép(25 ; 0,08 ; 1) ≈ 0,3947, soit 0,395.\nCela revient à P(X = 0) + P(X = 1) = 0,92²⁵ + 25 × 0,08 × 0,92²⁴ ≈ 0,1244 + 0,2703.",
    indice: "« Au plus 1 » est un cumul de P(X = 0) et P(X = 1) : utilise la fonction de répartition."
  },
  {
    id: "U41-182", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "X suit la loi binomiale B(10 ; 0,2).",
    question: "Quelle est la probabilité d'avoir au moins un succès, arrondie au millième ?",
    choix: ["0,8¹⁰ ≈ 0,107, qui est la probabilité de n'avoir aucun succès", "10 × 0,2 = 2, qui est l'espérance de X et pas une probabilité", "0,2 × 0,8⁹ ≈ 0,027, qui est la probabilité d'un succès au premier essai puis de 9 échecs", "1 − 0,8¹⁰ ≈ 0,893, en passant par le contraire « aucun succès »"],
    bonne: 3,
    explication: "« Au moins un » se calcule avec le contraire « aucun succès » : P(X ≥ 1) = 1 − P(X = 0) = 1 − 0,8¹⁰ ≈ 1 − 0,107 = 0,893. 0,107 est la probabilité du contraire. 2 est l'espérance, qui n'est pas une probabilité. 0,027 est la probabilité d'une suite précise de résultats, pas celle de P(X = 1).",
    indice: "Passe par le contraire « aucun succès », dont la probabilité est 0,8 élevé à la puissance 10."
  },
  {
    id: "U41-183", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    contexte: "1 % des porteurs ont une anomalie. Le test est positif dans 90 % des cas chez une personne avec anomalie, et dans 5 % des cas chez une personne sans anomalie. Une personne a un test négatif.",
    question: "Quelle est la probabilité qu'elle n'ait pas l'anomalie ? (arrondie au millième)",
    reponse: {"valeur": 0.999, "unite": "", "decimales": 3, "signe": false},
    explication: "P(test négatif et sans anomalie) = 0,99 × 0,95 = 0,9405\nP(test négatif et avec anomalie) = 0,01 × 0,10 = 0,001\nP(test négatif) = 0,9405 + 0,001 = 0,9415\nP(sans anomalie sachant négatif) = [[0,9405|0,9415]] ≈ 0,999\nUn test négatif est donc très rassurant ici.",
    indice: "Calcule P(test négatif) avec les deux branches, puis divise la branche « sans anomalie et négatif » par ce total."
  },
  {
    id: "U41-184", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "X suit la loi binomiale B(60 ; 0,05).",
    question: "Quel est l'écart type de X, arrondi au centième ?",
    choix: ["60 × 0,05 × 0,95 = 2,85, qui est la variance et pas l'écart type", "√(60 × 0,05 × 0,95) = √2,85 ≈ 1,69, la racine de la variance", "60 × 0,05 = 3, qui est l'espérance et pas l'écart type", "√(60 × 0,05) = √3 ≈ 1,73, en oubliant le facteur 1 − p"],
    bonne: 1,
    explication: "L'écart type de B(n ; p) est σ = √(np(1 − p)) = √2,85 ≈ 1,69. 2,85 est la variance : il manque la racine carrée. 3 est l'espérance np. 1,73 oublie le facteur 0,95.",
    indice: "Écart type = racine de np(1 − p). Fais attention à ne pas t'arrêter à la variance."
  },
  {
    id: "U41-185", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "On a P(A) = 0,35, P(B) = 0,45 et P(A ∩ B) = 0,2.",
    question: "Calcule la probabilité qu'aucun des deux événements ne se réalise, c'est-à-dire P(non A ∩ non B).",
    reponse: {"valeur": 0.4, "unite": "", "decimales": 1, "signe": false},
    explication: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B) = 0,35 + 0,45 − 0,2 = 0,6\nL'événement « ni A ni B » est le contraire de A ∪ B :\nP(non A ∩ non B) = 1 − 0,6 = 0,4\nSans retrancher P(A ∩ B), on aurait obtenu 1 − 0,8 = 0,2.",
    indice: "Calcule d'abord P(A ∪ B) sans compter deux fois l'intersection, puis passe au contraire."
  },
  {
    id: "U41-186", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "25 % des verres sont photochromiques (A). 80 % des verres photochromiques ont un traitement dur (B), contre 15 % des autres verres. Un élève cherche P(B).",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "P(A ∩ B) = 0,25 × 0,8 = 0,20."], ["2", "P(non A ∩ B) = 0,25 × 0,15 = 0,0375."], ["3", "P(B) = 0,20 + 0,0375 = 0,2375."]]},
    question: "Dans ce calcul de probabilité, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 1 : P(A ∩ B) = 0,25 + 0,8 − 0,25 × 0,8 = 0,85, car les deux événements peuvent se réaliser en même temps.", "Ligne 3 : il faut multiplier les deux probabilités et non les additionner, car P(B) est le produit des deux branches.", "Ligne 2 : la probabilité d'un verre non photochromique avec traitement est 0,8, car 80 % des verres ont le traitement.", "Ligne 2 : P(non A) vaut 0,75 et non 0,25 : P(non A ∩ B) = 0,75 × 0,15 = 0,1125, donc P(B) = 0,3125."],
    bonne: 3,
    explication: "La branche « non photochromique » commence par P(non A) = 1 − 0,25 = 0,75. Donc P(non A ∩ B) = 0,75 × 0,15 = 0,1125 et P(B) = 0,20 + 0,1125 = 0,3125. La copie utilise P(A) à la place de P(non A) : elle a recopié 0,25. La ligne 1 est juste (un chemin se multiplie) et deux chemins s'additionnent bien en ligne 3.",
    indice: "Quelle est la probabilité de « non A » ? Compare les lignes 1 et 2 : le premier facteur est-il le bon ?"
  },
  {
    id: "U41-187", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "X suit la loi binomiale B(8 ; 0,25).",
    question: "Calcule P(X = 2), arrondie au millième.",
    reponse: {"valeur": 0.311, "unite": "", "decimales": 3, "signe": false},
    explication: "P(X = 2) = (2 parmi 8) × 0,25² × 0,75⁶ = 28 × 0,0625 × 0,17798 ≈ 0,3115, soit 0,311.\nÀ la calculatrice : binomFdp(8 ; 0,25 ; 2). Ne pas confondre avec P(X ≤ 2), qui vaut environ 0,679.",
    indice: "« Exactement 2 » : utilise la probabilité en un point, pas la fonction de répartition."
  },
  {
    id: "U41-188", epreuve: "U41", theme: "Probabilités", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "A et B sont deux événements incompatibles, avec P(A) = 0,3 et P(B) = 0,5.",
    question: "Quelle rédaction décrit correctement P(A ∪ B) et l'indépendance de A et B ?",
    choix: ["P(A ∪ B) = 0,3 + 0,5 = 0,8. Comme A et B sont incompatibles, ils sont indépendants : P(A ∩ B) = 0 = P(A) × P(B).", "P(A ∪ B) = 0,3 + 0,5 = 0,8. Mais P(A ∩ B) = 0 est différent de 0,3 × 0,5 = 0,15 : A et B ne sont pas indépendants.", "P(A ∪ B) = 0,3 + 0,5 − 0,15 = 0,65. A et B sont indépendants car P(A ∩ B) = P(A) × P(B) = 0,15.", "P(A ∪ B) = 0,3 × 0,5 = 0,15. A et B sont donc indépendants, puisque leur probabilité commune est le produit."],
    bonne: 1,
    explication: "Des événements incompatibles n'ont aucune issue commune : P(A ∩ B) = 0, donc P(A ∪ B) = 0,3 + 0,5 = 0,8. Comme P(A) × P(B) = 0,15 ≠ 0, A et B ne sont pas indépendants : incompatible et indépendant sont deux idées différentes (sauf si l'un des deux est impossible). Les autres rédactions confondent l'union avec l'intersection ou supposent à tort que P(A ∩ B) = 0,15.",
    indice: "Incompatibles : aucune issue commune. Que vaut alors P(A ∩ B), et est-ce égal à P(A) × P(B) ?"
  },
  {
    id: "U41-189", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "facile",
    contexte: "On a u(n) = 12 + 5n.",
    question: "Calcule la somme des 10 premiers termes, de u(0) à u(9).",
    reponse: {"valeur": 345, "unite": "", "decimales": 0, "signe": false},
    explication: "u(0) = 12 et u(9) = 12 + 45 = 57\nSomme d'une suite arithmétique : nombre de termes × [[premier terme + dernier terme|2]]\nS = 10 × [[12 + 57|2]] = 10 × 34,5 = 345",
    indice: "Il y a 10 termes, de u(0) à u(9). Moyenne du premier et du dernier, fois le nombre de termes."
  },
  {
    id: "U41-190", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "Un magasin augmente ses prix de 3 % par an pendant 5 ans.",
    question: "Quelle est la hausse globale sur les 5 ans, arrondie au dixième de pourcent ?",
    choix: ["15 %, car 3 % × 5 donne 15 %", "Environ 3,1 %, car 1,03⁵ vaut 1,031", "Environ 16,0 %, car 1,03⁵ arrondi d'abord à 1,16", "Environ 15,9 %, avec 1,03⁵ ≈ 1,159"],
    bonne: 3,
    explication: "Les hausses se composent : le coefficient global est 1,03⁵ ≈ 1,1593, soit une hausse de 15,9 %. Additionner 5 × 3 % donne 15 %, mais les taux ne s'additionnent pas : chaque hausse s'applique au prix déjà augmenté.",
    indice: "Calcule le coefficient multiplicateur global 1,03 puissance 5, puis retire 1."
  },
  {
    id: "U41-191", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    contexte: "Un plan d'épargne : u(0) = 1 000 € et u(n+1) = 1,02 u(n) + 100, n en années.",
    question: "À la calculatrice, calcule u(5), arrondi à l'euro.",
    reponse: {"valeur": 1624, "unite": "€", "decimales": 0, "signe": false},
    explication: "On entre la suite dans le tableau de valeurs : u(1) = 1 120, u(2) = 1 242,4, u(3) = 1 367,25, u(4) = 1 494,59, u(5) ≈ 1 624,48.\nSoit 1 624 € arrondi à l'euro.\nPar la formule : ℓ = [[100|1 − 1,02]] = −5 000 et u(n) = 6 000 × 1,02ⁿ − 5 000, d'où u(5) ≈ 6 000 × 1,1041 − 5 000.",
    indice: "Entre la relation de récurrence et u(0), puis lis la valeur du rang 5 dans le tableau."
  },
  {
    id: "U41-192", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "On a v(n) = 3 × 2ⁿ.",
    question: "À la calculatrice, trouve le plus petit rang n tel que v(n) > 1 000.",
    reponse: {"valeur": 9, "unite": "", "decimales": 0, "signe": false},
    explication: "Au tableau de valeurs : v(8) = 768 (encore inférieur à 1 000) et v(9) = 1 536 (supérieur).\nPar le calcul : 3 × 2ⁿ > 1 000 donne 2ⁿ > [[1 000|3]] ≈ 333,3, donc n > [[ln 333,3|ln 2]] ≈ 8,38.\nLe premier entier est n = 9.",
    indice: "Fais défiler le tableau de valeurs, ou résous 2ⁿ > 333,3 avec le logarithme."
  },
  {
    id: "U41-193", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "Un élève calcule la somme des termes de u(0) à u(5) d'une suite géométrique de premier terme 4 et de raison 3.",
    annexe: {"titre": "Copie de l'élève", "colonnes": ["Ligne", "Calcul"], "lignes": [["1", "Il y a 6 termes de u(0) à u(5)."], ["2", "S = u(0) × (1 − q⁵) / (1 − q)."], ["3", "S = 4 × (1 − 243) / (1 − 3) = 4 × 121 = 484."]]},
    question: "Dans cette somme géométrique, quelle est la première ligne fausse, et pourquoi ?",
    choix: ["Ligne 2 : il y a 6 termes, donc l'exposant est 6 et non 5 : S = 4 × (1 − 3⁶) ÷ (1 − 3) = 1 456.", "Ligne 1 : il y a 5 termes de u(0) à u(5), car on compte les rangs 1 à 5 et on ne compte pas u(0).", "Ligne 3 : (1 − 243) ÷ (1 − 3) = 121 est faux, il faut trouver −121, car un quotient de deux négatifs est négatif.", "Ligne 2 : la formule est S = u(0) × (1 − q) ÷ (1 − qⁿ), avec n = 6 : on inverse numérateur et dénominateur."],
    bonne: 0,
    explication: "De u(0) à u(5), il y a 6 termes : la somme est S = u(0) × [[1 − q⁶|1 − q]] = 4 × [[1 − 729|−2]] = 4 × 364 = 1 456. La copie a pris l'exposant 5 (le dernier rang) au lieu du nombre de termes, 6. La ligne 1 est juste, et (−242) ÷ (−2) = 121 est bien positif : l'erreur est dans l'exposant.",
    indice: "Compte les termes de u(0) à u(5). L'exposant de q est le nombre de termes, pas le dernier rang."
  },
  {
    id: "U41-194", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    contexte: "On a u(0) = 30 et u(n+1) = 1,5 u(n) − 10.",
    question: "Calcule u(3).",
    reponse: {"valeur": 53.75, "unite": "", "decimales": 2, "signe": false},
    explication: "u(1) = 1,5 × 30 − 10 = 35\nu(2) = 1,5 × 35 − 10 = 42,5\nu(3) = 1,5 × 42,5 − 10 = 53,75\nOn applique la relation de récurrence trois fois de suite, sans sauter d'étape.",
    indice: "Calcule u(1), puis u(2), puis u(3) : chaque terme sert à calculer le suivant."
  },
  {
    id: "U41-195", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "On a u(0) = 100 et u(n+1) = 0,8 u(n) + 30.",
    question: "Quel est le sens de variation de la suite ?",
    choix: ["Décroissante : on multiplie par 0,8, qui est inférieur à 1", "Constante : 0,8 et 30 sont des valeurs fixes à chaque étape", "Croissante : sa limite est 150, au-dessus de u(0) = 100", "Alternée : elle passe au-dessus puis en dessous de 150 à chaque étape"],
    bonne: 2,
    explication: "La valeur qui ne bouge plus vérifie ℓ = 0,8 ℓ + 30, donc ℓ = [[30|0,2]] = 150. On a u(n+1) − u(n) = 0,2 × (150 − u(n)), positif tant que u(n) < 150 : la suite part de 100, sous 150, donc elle est croissante (u(1) = 110, u(2) = 118). Multiplier par 0,8 ne suffit pas à conclure : il faut aussi tenir compte du +30.",
    indice: "Calcule la limite ℓ, puis regarde si u(0) est au-dessus ou en dessous d'elle."
  },
  {
    id: "U41-196", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    contexte: "Un lot de lentilles perd 15 % de sa valeur par an : u(n) = 5 000 × 0,85ⁿ, en euros.",
    question: "Au bout de combien d'années la valeur passe-t-elle sous 1 000 € pour la première fois ?",
    reponse: {"valeur": 10, "unite": "ans", "decimales": 0, "signe": false},
    explication: "On veut 5 000 × 0,85ⁿ < 1 000, donc 0,85ⁿ < 0,2\nn > [[ln 0,2|ln 0,85]] ≈ 9,90\nLe premier entier est 10.\nContrôle : 0,85⁹ ≈ 0,2316 (encore au-dessus de 0,2) et 0,85¹⁰ ≈ 0,1969 (en dessous).",
    indice: "Écris 0,85ⁿ < 0,2, puis utilise le logarithme ou le tableau. Attention au sens de l'inégalité avec ln 0,85."
  },
  {
    id: "U41-197", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "difficile",
    contexte: "On a u(0) = 5 et u(n+1) = 0,7 u(n) + 6. On pose v(n) = u(n) − 20, et on a montré que (v(n)) est géométrique de raison 0,7.",
    question: "Quelle est l'expression correcte de u(n) ?",
    choix: ["u(n) = 20 − 15 × 0,7ⁿ, car u = v + 20", "u(n) = −15 × 0,7ⁿ, car v(0) = 5 − 20 = −15", "u(n) = 20 + 15 × 0,7ⁿ, car v(0) = 5 − 20 = 15", "u(n) = 20 − 15 × 0,7ⁿ⁺¹, car la suite commence à n = 1"],
    bonne: 0,
    explication: "v(0) = u(0) − 20 = 5 − 20 = −15, donc v(n) = −15 × 0,7ⁿ. On revient à u : u(n) = v(n) + 20 = 20 − 15 × 0,7ⁿ. Contrôle avec n = 1 : 20 − 10,5 = 9,5 = 0,7 × 5 + 6. Oublier d'ajouter 16 donne un résultat négatif, ce qui est absurde ici.",
    indice: "v(0) vaut −15. Une fois v(n) trouvé, que faut-il faire pour revenir à u(n) ? Vérifie avec n = 0."
  },
  {
    id: "U41-198", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true,
    difficulte: "moyen",
    contexte: "Algorithme :",
    annexe: {"titre": "Algorithme", "colonnes": ["Ligne", "Instruction"], "lignes": [["1", "S ← 0"], ["2", "Pour k de 1 à 4 :"], ["3", "    S ← S + 2^k"], ["4", "Fin Pour"], ["5", "Afficher S"]]},
    question: "Quelle valeur de S l'algorithme affiche-t-il à la fin de cette boucle de sommes ?",
    choix: ["15, car S = 1 + 2 + 4 + 8 en partant de k = 0", "31, car S = 1 + 2 + 4 + 8 + 16 en comptant 2⁰", "62, car S = 2 + 4 + 8 + 16 + 32 avec un tour de plus", "30, car S = 2 + 4 + 8 + 16 : le premier terme est 2¹"],
    bonne: 3,
    explication: "La boucle fait 4 tours : k = 1, 2, 3, 4. S devient 2, puis 6, puis 14, puis 30. Le terme 2⁰ = 1 n'est pas compté, car k commence à 1 ; 31 et 15 le comptent à tort, et 62 ajoute un cinquième tour qui n'existe pas.",
    indice: "Écris S à la fin de chaque tour : k vaut 1, 2, 3 puis 4."
  }
);
