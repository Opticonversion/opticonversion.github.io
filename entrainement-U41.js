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
    explication: "Le tableau donne u15 ≈ 248,5 (encore inférieur à 250) et u16 ≈ 253,7 (supérieur à 250). Le premier rang qui convient est donc n = 16. La limite de la suite est 30 / 0,1 = 300, ce qui confirme que 250 finit par être dépassé.",
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
    explication: "g(t) ≤ 30 équivaut à 60 e^(−0,5t) ≤ 10, donc e^(−0,5t) ≤ 1/6. En passant au logarithme, −0,5 t ≤ −ln 6, donc t ≥ 2 ln 6 ≈ 3,5835. Le plus petit t est 3,58 min. Attention : diviser par −0,5 change le sens de l'inégalité.",
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
    explication: "Une constante a une dérivée nulle : 3 × 0 + 0,6 c = 12, donc c = 12 / 0,6 = 20.",
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
    choix: ["L'ajustement affine de z en x est pertinent, car |r| est très proche de 1", "L'ajustement affine de z en x n'est pas pertinent, car r est négatif", "L'ajustement affine de z en x est pertinent, car r est proche de 0", "Impossible de conclure sans tracer le nuage de points"],
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
    explication: "P(O ∩ P) = 0,6 × 0,30 = 0,18. P(P) = 0,18 + 0,4 × 0,25 = 0,28. P_P(O) = P(O ∩ P) / P(P) = 0,18 / 0,28 = 9/14 ≈ 0,643.",
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
    explication: "P(T ≤ 3) = 1 − e^(−0,5 × 3) = 1 − e^(−1,5) ≈ 1 − 0,2231 = 0,7769, soit 0,777 arrondi à 10⁻³. L'attente moyenne vaut 1/λ = 2 minutes.",
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
    explication: "f = 160/200 = 0,8. √(0,8 × 0,2 / 200) = √0,0008 ≈ 0,02828. Puis 1,96 × 0,02828 ≈ 0,0554, soit 0,055 arrondi à 10⁻³. L'intervalle de confiance est alors environ [0,745 ; 0,855].",
    indice: "Calcule d'abord f, puis la racine, puis multiplie par 1,96. Garde assez de chiffres avant d'arrondir à la fin."
  },
  {
    id: "U41-082", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Test bilatéral à 5 % : H0 « le diamètre moyen vaut 25 mm ». Sous H0, la moyenne d'un échantillon de 100 pièces suit la loi normale de moyenne 25 et d'écart type 0,1. Un échantillon donne 25,15 mm. Quelle est la conclusion ?",
    choix: ["On ne rejette pas H0, car 25,15 est dans l'intervalle [24,804 ; 25,196]", "On rejette H0, car 25,15 est différent de 25", "On rejette H0, car 25,15 est dans la région de rejet", "On ne peut pas conclure sans connaître l'écart type de la population"],
    bonne: 0,
    explication: "On rejette H0 si la moyenne observée sort de 25 ± 1,96 × 0,1 = 25 ± 0,196, soit [24,804 ; 25,196]. Ici 25,15 est dans cet intervalle : on ne rejette pas H0 au seuil de 5 %. Être différent de 25 ne suffit pas, il faut sortir de l'intervalle.",
    indice: "Calcule d'abord la zone 25 ± 1,96 × 0,1, puis regarde si la moyenne observée tombe dedans ou dans la région de rejet."
  },
  {
    id: "U41-083", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "moyen",
    question: "Un magasin dépense 12 000 € en publicité la première année. Chaque année, ce budget baisse de 10 %. Calcule la somme des budgets des 5 premières années, arrondie à l'euro.",
    reponse: {"valeur": 49141, "unite": "€", "decimales": 0, "signe": false},
    explication: "Les budgets forment une suite géométrique de premier terme 12 000 et de raison 0,9. La somme de 5 termes vaut 12 000 × (1 − 0,9⁵) / (1 − 0,9) = 12 000 × 0,40951 / 0,1 = 49 141,2, soit 49 141 € arrondi à l'euro. Le piège : additionner 12 000 × 5 sans tenir compte de la baisse.",
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
    choix: ["Elle est décroissante, car elle part au-dessus de sa limite 80", "Elle est croissante, car on ajoute 40 à chaque étape", "Elle est constante, car 0,5 et 40 sont fixes", "Elle alterne au-dessus puis en dessous de 80"],
    bonne: 0,
    explication: "La valeur qui ne bouge plus vérifie ℓ = 0,5 ℓ + 40, donc ℓ = 80. Comme 0 < 0,5 < 1, la suite se rapproche de 80 sans la dépasser. Elle part de 100, au-dessus de 80, donc elle décroît : u(1) = 90, u(2) = 85, u(3) = 82,5. Ajouter 40 ne rend pas la suite croissante, car on multiplie aussi par 0,5.",
    indice: "Cherche d'abord la valeur ℓ qui ne bouge plus. La suite s'en rapproche : par le haut ou par le bas ?"
  },
  {
    id: "U41-086", epreuve: "U41", theme: "Suites", session: "complément", entrainement: true, type: "calcul",
    difficulte: "difficile",
    question: "Un équipement vaut 18 000 € à l'achat et perd 12 % de sa valeur chaque année. Au bout de combien d'années sa valeur passe-t-elle sous 9 000 € pour la première fois ?",
    reponse: {"valeur": 6, "unite": "ans", "decimales": 0, "signe": false},
    explication: "La valeur après n années est 18 000 × 0,88ⁿ. On veut 0,88ⁿ < 0,5, donc n > ln 0,5 / ln 0,88 ≈ 5,42. Le premier entier est 6. Contrôle au tableau : 9 499 € après 5 ans (encore au-dessus de 9 000), 8 359 € après 6 ans.",
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
    explication: "P(A ∩ +) = 0,02 × 0,95 = 0,019 et P(non A ∩ +) = 0,98 × 0,08 = 0,0784. Donc P(+) = 0,0974 et P(A sachant +) = 0,019 / 0,0974 ≈ 0,195. Un test positif ne donne l'anomalie qu'une fois sur cinq environ, parce que l'anomalie est rare.",
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
    explication: "On veut 1/√n ≤ 0,03, donc √n ≥ 1/0,03 et n ≥ 1/0,03² = 1 111,1. Il faut arrondir par excès : n = 1 112. Prendre 1 111 donnerait une marge un peu trop grande.",
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
    choix: ["Elle converge vers 18", "Elle diverge, car elle n'est pas monotone", "Elle converge vers 4,5", "Elle converge vers 6 en oscillant autour de 6"],
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
    explication: "Solution constante : 0,3c = 6, donc c = 20. Avec y(0) = 10 : y(t) = 20 − 10 e^(−0,3t). On résout 20 − 10 e^(−0,3t) = 19 : e^(−0,3t) = 0,1, d'où t = ln 10 / 0,3 ≈ 2,3026 / 0,3 ≈ 7,68 min.",
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
    choix: ["Elle donne une valeur négative (−38) : la droite n'est valable que près de la période observée", "Elle donne 130 ventes, ce qui est trop élevé", "On ne peut prévoir qu'avec une droite croissante", "Le coefficient −4,2 est trop petit pour être utilisé"],
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
    explication: "P(D) = 0,5 × 0,02 + 0,3 × 0,03 + 0,2 × 0,05 = 0,029 et P(F3 ∩ D) = 0,2 × 0,05 = 0,010. Donc P(F3 sachant D) = 0,010 / 0,029 ≈ 0,345. F3 fournit 20 % des verres mais 34,5 % des défauts.",
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
    explication: "La demi-largeur est proportionnelle au coefficient : 0,048 × 2,58 / 1,96 ≈ 0,063. Un niveau de confiance plus élevé donne un intervalle plus large : on est plus sûr de couvrir la vraie valeur, mais moins précis.",
    indice: "La demi-largeur est proportionnelle au coefficient 1,96 ou 2,58."
  },
  {
    id: "U41-130", epreuve: "U41", theme: "Estimation et tests", session: "complément", entrainement: true,
    difficulte: "difficile",
    question: "Test bilatéral à 5 % sur H0 « μ = 25 mm ». Sous H0, la moyenne d'un échantillon suit une loi normale d'espérance 25 et d'écart type 0,12. L'échantillon observé a pour moyenne 25,30 mm. Quelle conclusion est correcte ?",
    choix: ["On ne rejette pas H0, car 25,30 est proche de 25", "On rejette H0 : cela prouve que μ = 25,30", "On rejette H0 avec certitude", "On rejette H0 au risque de 5 %, car 25,30 sort de [24,765 ; 25,235]"],
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
    explication: "Dans une division harmonique, CA / CB = DA / DB. Ici CA / CB = 3 / 9 = 1/3. D est du côté de A, donc DB = DA + 12. On résout DA / (DA + 12) = 1/3 : 3 DA = DA + 12 et DA = 6 cm. Contrôle : 6 / 18 = 1/3.",
    indice: "Écris le rapport CA / CB, puis le même rapport DA / DB en notant DA = x et DB = x + 12."
  }
);
