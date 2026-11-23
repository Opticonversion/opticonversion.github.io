// Sujets blancs de Mathématiques (U41).
// Un sujet = une situation de départ et 2 exercices de 10 points, comme l'écrit de 2 h.
// Format : notes/coordination/sujet-blanc.md. Chargé plus tard par qcm.html, après questions-U41.js.
// Les questions d'un sujet ne sortent nulle part ailleurs (ni thèmes, ni Essentiel, ni examen blanc).
// Énoncés, situations et chiffres écrits par Opticonversion. Calculatrice autorisée.

SUJETS.push({
  id: "SUJET-U41-01",
  epreuve: "U41",
  titre: "Le laboratoire de verres organiques",
  contexte: "Vous travaillez dans un laboratoire qui fabrique et traite des verres organiques pour les magasins d'optique. L'exercice 1 suit le refroidissement d'un verre à la sortie de l'étuve de vernissage. L'exercice 2 porte sur le contrôle des verres et la satisfaction des clients. Les deux exercices sont indépendants. La calculatrice est autorisée.",
  parties: [
    { lettre: "A", titre: "Exercice 1 : refroidissement d'un verre après vernissage", points: 10,
      contexte: "Un verre sort de l'étuve de vernissage à 180 °C, puis refroidit dans l'atelier, où il fait 22 °C. On relève sa température T (en °C) toutes les 5 minutes, t étant le temps en minutes depuis la sortie de l'étuve.",
      annexe: {
        titre: "Relevés de température du verre",
        colonnes: ["t (min)", "0", "5", "10", "15", "20", "25"],
        lignes: [["T (°C)", "180", "145", "118", "97", "80", "67"]]
      }
    },
    { lettre: "B", titre: "Exercice 2 : contrôle des verres et satisfaction des clients", points: 10,
      contexte: "Le laboratoire possède deux machines de surfaçage, M1 et M2. M1 fabrique 60 % des verres et M2 le reste. 3 % des verres de M1 et 5 % des verres de M2 ont un défaut." }
  ]
});

QUESTIONS.push(

  // ================= Exercice 1 : refroidissement d'un verre (10 points) =================

  // ----- Partie A : ajustement (statistique) -----
  {
    id: "U41-372", epreuve: "U41", theme: "Statistique", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 1,
    type: "calcul",
    contexte: "Exercice 1, partie A : ajustement. On pose z = ln(T − 22).",
    question: "Calculez la valeur de z pour t = 10 min, arrondie à 10⁻².",
    reponse: { valeur: 4.56, unite: "", decimales: 2, signe: true, tolerance: 0.005 },
    erreurs: [
      { valeur: 4.77, type: "notion", message: "Tu as pris ln(118). Il faut d'abord retirer 22 : z = ln(118 − 22) = ln(96) ≈ 4,56." }
    ],
    explication: "Pour t = 10, T = 118 °C.\nz = ln(118 − 22) = ln(96) ≈ 4,56.",
    indice: "Retire d'abord 22 à la température, puis prends le logarithme népérien (touche ln)."
  },
  {
    id: "U41-373", epreuve: "U41", theme: "Statistique", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 2,
    question: "À la calculatrice, quelle est l'équation de la droite de régression de z en t, par la méthode des moindres carrés (coefficients arrondis à 10⁻³) ?",
    choix: [
      "z = −0,050t + 5,065",
      "z = −0,050t + 158,4",
      "z = −4,463t + 170,286",
      "z = 0,050t + 3,807"
    ],
    bonne: 0,
    explication: "On entre t en liste 1 et z = ln(T − 22) en liste 2 : z ≈ 5,063 ; 4,812 ; 4,564 ; 4,317 ; 4,060 ; 3,807. La régression linéaire donne a ≈ −0,050 et b ≈ 5,065, donc z = −0,050t + 5,065. La pente est négative car z diminue quand t augmente.",
    erreurs: { 2: { type: "notion", message: "Cette droite ajuste T en t, pas z en t. Il faut d'abord calculer z = ln(T − 22) pour chaque relevé." } },
    surLaCopie: "À la calculatrice, avec t en liste 1 et z en liste 2 :\nz = −0,050t + 5,065 (coefficients arrondis à 10⁻³)."
  },
  {
    id: "U41-374", epreuve: "U41", theme: "Statistique", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 3,
    question: "Avec z = −0,05t + 5,065, comment s'écrit T en fonction de t ?",
    choix: [
      "T = 22 + 5,065 e^(−0,05t)",
      "T = 22 + e^(5,065) × e^(−0,05t)",
      "T = e^(5,065) × e^(−0,05t) − 22",
      "T = 22 + ln(−0,05t + 5,065)"
    ],
    bonne: 1,
    explication: "ln(T − 22) = −0,05t + 5,065, donc T − 22 = e^(−0,05t + 5,065) = e^(5,065) × e^(−0,05t). D'où T = 22 + e^(5,065) e^(−0,05t).",
    erreurs: { 0: { type: "notion", message: "On passe de ln à exponentielle : T − 22 = e^(5,065) × e^(−0,05t). Le nombre 5,065 reste en exposant, il ne devient pas un facteur." } }
  },
  {
    id: "U41-375", epreuve: "U41", theme: "Statistique", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 4,
    type: "calcul",
    question: "Calculez e^(5,065), arrondi à l'unité. On obtient ainsi T = 22 + C e^(−0,05t).",
    reponse: { valeur: 158, unite: "", decimales: 0, signe: false, tolerance: 0.5 },
    explication: "e^(5,065) ≈ 158,4, soit 158 à l'unité.\nL'ajustement donne T ≈ 22 + 158 e^(−0,05t).",
    indice: "Touche e^x de la calculatrice."
  },

  // ----- Partie B : équation différentielle -----
  {
    id: "U41-376", epreuve: "U41", theme: "Équations différentielles", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 5,
    contexte: "Exercice 1, partie B : équation différentielle. On admet que la température du verre est la solution de (E) : y' + 0,05y = 1,1, où y est une fonction de t, définie et dérivable sur [0 ; +∞[.",
    question: "Quelles sont les solutions de l'équation y' + 0,05y = 0 ?",
    choix: [
      "y = k e^(0,05t), k réel",
      "y = k e^(−20t), k réel",
      "y = k e^(−0,05t), k réel",
      "y = k e^(−1,1t), k réel"
    ],
    bonne: 2,
    explication: "Les solutions de ay' + by = 0 sont y = k e^(−(b/a)t). Ici a = 1 et b = 0,05, donc −b/a = −0,05 : y = k e^(−0,05t), k réel.",
    erreurs: { 0: { type: "signe", message: "Le signe moins de −b/a a disparu : l'exposant est −0,05, pas +0,05." }, 1: { type: "notion", message: "Tu as inversé le quotient : l'exposant est −b/a = −0,05/1 = −0,05, pas −1/0,05 = −20." } }
  },
  {
    id: "U41-377", epreuve: "U41", theme: "Équations différentielles", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 6,
    type: "calcul",
    question: "Déterminez la constante c telle que la fonction constante g(t) = c soit solution de (E).",
    reponse: { valeur: 22, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: 1.1, type: "notion", message: "Une constante a une dérivée nulle : 0 + 0,05c = 1,1, donc il faut diviser : c = 1,1 / 0,05 = 22." },
      { valeur: 0.055, type: "notion", message: "Tu as multiplié. On résout 0,05c = 1,1, donc c = 1,1 / 0,05 = 22." }
    ],
    explication: "g est constante, donc g'(t) = 0.\n0 + 0,05c = 1,1, donc c = [[1,1|0,05]] = 22.\nC'est la température de l'atelier, vers laquelle le verre refroidit.",
    indice: "La dérivée d'une constante est nulle : remplace y' par 0."
  },
  {
    id: "U41-378", epreuve: "U41", theme: "Équations différentielles", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 7,
    question: "Le verre sort à 180 °C : f(0) = 180. Quelle est la solution f de (E) qui vérifie cette condition ?",
    choix: [
      "f(t) = 180 e^(−0,05t)",
      "f(t) = 22 + 180 e^(−0,05t)",
      "f(t) = 180 − 158 e^(−0,05t)",
      "f(t) = 22 + 158 e^(−0,05t)"
    ],
    bonne: 3,
    explication: "Solutions de (E) : f(t) = k e^(−0,05t) + 22. f(0) = k + 22 = 180, donc k = 158. D'où f(t) = 22 + 158 e^(−0,05t), ce qui confirme l'ajustement de la partie A.",
    erreurs: { 1: { type: "notion", message: "Avec k = 180, f(0) = 180 + 22 = 202. Il faut k + 22 = 180, donc k = 158." } },
    surLaCopie: "Les solutions de (E) sont f(t) = k e^(−0,05t) + 22, k réel.\nf(0) = 180 donne k + 22 = 180, soit k = 158.\nDonc f(t) = 22 + 158 e^(−0,05t)."
  },

  // ----- Partie C : étude de la fonction -----
  {
    id: "U41-379", epreuve: "U41", theme: "Fonctions", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 8,
    contexte: "Exercice 1, partie C : étude de la fonction. f est définie sur [0 ; +∞[ par f(t) = 22 + 158 e^(−0,05t).",
    question: "Quelle est la dérivée f' de f ?",
    choix: [
      "f'(t) = 158 e^(−0,05t)",
      "f'(t) = −7,9 e^(−0,05t)",
      "f'(t) = 22 − 7,9 e^(−0,05t)",
      "f'(t) = 7,9 e^(−0,05t)"
    ],
    bonne: 1,
    explication: "La dérivée d'une constante est nulle et (e^(at))' = a e^(at). Donc f'(t) = 158 × (−0,05) e^(−0,05t) = −7,9 e^(−0,05t).",
    erreurs: { 2: { type: "notion", message: "La constante 22 disparaît en dérivant : sa dérivée est nulle." }, 3: { type: "signe", message: "La dérivée de e^(−0,05t) est −0,05 e^(−0,05t) : le coefficient −0,05 garde son signe moins." } }
  },
  {
    id: "U41-380", epreuve: "U41", theme: "Fonctions", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "A", etape: 9,
    question: "Quel est le sens de variation de f sur [0 ; +∞[ ?",
    choix: [
      "f est croissante, car e^(−0,05t) est toujours positif",
      "f est croissante puis décroissante, avec un maximum en t = 0",
      "f est décroissante, car f'(t) est négatif pour tout t",
      "f est constante, égale à 22 °C"
    ],
    bonne: 2,
    explication: "Une exponentielle est toujours strictement positive, donc f'(t) = −7,9 e^(−0,05t) < 0 pour tout t. f est strictement décroissante : le verre refroidit sans cesse.",
    surLaCopie: "Pour tout t ≥ 0, e^(−0,05t) > 0, donc f'(t) = −7,9 e^(−0,05t) < 0.\nf est strictement décroissante sur [0 ; +∞[."
  },
  {
    id: "U41-381", epreuve: "U41", theme: "Fonctions", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 10,
    question: "Que vaut la limite de f(t) quand t tend vers +∞, et que veut-elle dire pour le verre ?",
    choix: [
      "+∞ : le verre chauffe sans fin",
      "0 : le verre finit à 0 °C",
      "180 : le verre garde sa température de sortie",
      "22 : la température du verre se rapproche de celle de l'atelier"
    ],
    bonne: 3,
    explication: "Quand t tend vers +∞, −0,05t tend vers −∞, donc e^(−0,05t) tend vers 0 et f(t) tend vers 22. La droite d'équation y = 22 est asymptote à la courbe : le verre se rapproche de la température de l'atelier sans jamais descendre en dessous.",
    erreurs: { 1: { type: "notion", message: "C'est e^(−0,05t) qui tend vers 0, pas f(t). Il reste la constante : f(t) tend vers 22 + 0 = 22." } }
  },
  {
    id: "U41-382", epreuve: "U41", theme: "Fonctions", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 11,
    question: "Quelle est l'équation de la tangente à la courbe de f au point d'abscisse 0 ?",
    choix: [
      "y = −7,9t + 180",
      "y = −7,9t + 22",
      "y = 180t − 7,9",
      "y = −0,05t + 180"
    ],
    bonne: 0,
    explication: "Tangente en 0 : y = f'(0)(t − 0) + f(0). f(0) = 22 + 158 = 180 et f'(0) = −7,9. Donc y = −7,9t + 180. Au départ, le verre perd environ 7,9 °C par minute.",
    erreurs: { 1: { type: "notion", message: "L'ordonnée à l'origine de la tangente est f(0) = 22 + 158 = 180, pas 22." } }
  },
  {
    id: "U41-383", epreuve: "U41", theme: "Fonctions", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U41-01", partie: "A", etape: 12,
    type: "pose",
    question: "Le verre peut être manipulé sans gant quand sa température est inférieure à 40 °C. Résolvez f(t) < 40, étape par étape.",
    etapes: [
      {
        consigne: "Isolez l'exponentielle : e^(−0,05t) < … (arrondi à 10⁻³)",
        reponse: { valeur: 0.114, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
        aide: "Retire 22 des deux côtés, puis divise par 158 (positif, l'inégalité garde son sens).",
        ligne: "22 + 158 e^(−0,05t) < 40 donc e^(−0,05t) < [[18|158]] ≈ 0,114",
        erreurs: [{ valeur: 0.253, type: "notion", message: "Tu as divisé 40 par 158. Il faut d'abord retirer 22 : 40 − 22 = 18, puis 18 / 158 ≈ 0,114." }]
      },
      {
        consigne: "Durée à partir de laquelle on peut manipuler le verre (en min, arrondie au dixième)",
        reponse: { valeur: 43.4, unite: "min", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "Prends ln des deux côtés, puis divise par −0,05 : diviser par un nombre négatif change le sens de l'inégalité.",
        ligne: "−0,05t < ln([[18|158]]) donc t > [[ln(18/158)|−0,05]] ≈ 43,4 min",
        erreurs: [{ valeur: -43.4, type: "signe", message: "ln(18/158) est négatif et on divise par −0,05 : le résultat est positif, t > 43,4 min." }]
      }
    ],
    explication: "f(t) < 40 équivaut à 158 e^(−0,05t) < 18, soit e^(−0,05t) < 18/158. La fonction ln est croissante : −0,05t < ln(18/158). On divise par −0,05, négatif, donc le sens change : t > −20 ln(18/158) ≈ 43,4 min. Le verre se manipule sans gant à partir d'environ 43,4 min, soit 44 min en minutes entières.",
    surLaCopie: "f(t) < 40 ⟺ e^(−0,05t) < 18/158 ⟺ −0,05t < ln(18/158) ⟺ t > ln(18/158)/(−0,05) ≈ 43,4.\nLe verre se manipule sans gant à partir d'environ 43,4 min."
  },

  // ----- Partie D : valeur moyenne -----
  {
    id: "U41-384", epreuve: "U41", theme: "Calcul intégral", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "A", etape: 13,
    contexte: "Exercice 1, partie D : température moyenne. On s'intéresse aux 20 premières minutes après la sortie de l'étuve.",
    question: "Quelle fonction F est une primitive de f(t) = 22 + 158 e^(−0,05t) sur [0 ; +∞[ ?",
    choix: [
      "F(t) = 22t − 7,9 e^(−0,05t)",
      "F(t) = 22t + 3 160 e^(−0,05t)",
      "F(t) = 22t − 3 160 e^(−0,05t)",
      "F(t) = 22 − 3 160 e^(−0,05t)"
    ],
    bonne: 2,
    explication: "Une primitive de e^(at) est (1/a) e^(at). Ici 158 / (−0,05) = −3 160. Donc F(t) = 22t − 3 160 e^(−0,05t). Vérification : F'(t) = 22 − 3 160 × (−0,05) e^(−0,05t) = 22 + 158 e^(−0,05t).",
    erreurs: { 0: { type: "notion", message: "Tu as multiplié 158 par −0,05 : c'est la dérivée. Pour une primitive, on divise : 158 / (−0,05) = −3 160." }, 1: { type: "signe", message: "158 / (−0,05) = −3 160 : le quotient est négatif." } }
  },
  {
    id: "U41-385", epreuve: "U41", theme: "Calcul intégral", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U41-01", partie: "A", etape: 14,
    type: "pose",
    question: "Calculez la température moyenne du verre pendant les 20 premières minutes, étape par étape. Rappel : valeur moyenne = [[1|b − a]] ∫ f(t) dt sur [a ; b].",
    etapes: [
      {
        consigne: "Intégrale de f entre 0 et 20, c'est-à-dire F(20) − F(0) (arrondie à l'unité)",
        reponse: { valeur: 2438, unite: "", decimales: 0, signe: false, tolerance: 1 },
        aide: "F(20) = 440 − 3 160 e^(−1) et F(0) = −3 160. Fais la différence.",
        ligne: "F(20) − F(0) = (440 − 3 160 e^(−1)) − (−3 160) = 440 + 3 160(1 − e^(−1)) ≈ 2 438",
        erreurs: [{ valeur: -722, type: "notion", message: "F(0) = −3 160 : en le retranchant, on ajoute 3 160. F(20) − F(0) ≈ −722,5 + 3 160 ≈ 2 438." }]
      },
      {
        consigne: "Température moyenne sur [0 ; 20] (en °C, arrondie au dixième)",
        reponse: { valeur: 121.9, unite: "°C", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "Divise l'intégrale par la longueur de l'intervalle, 20 − 0.",
        ligne: "Tm = [[1|20]] × 2 438 ≈ 121,9 °C",
        erreurs: [{ valeur: 2437.5, type: "notion", message: "Il reste à diviser par la longueur de l'intervalle : 2 437,5 / 20 ≈ 121,9 °C." }]
      }
    ],
    explication: "∫ de 0 à 20 de f(t) dt = F(20) − F(0) = 440 − 3 160 e^(−1) + 3 160 ≈ 2 437,5. Valeur moyenne = 2 437,5 / 20 ≈ 121,9 °C. Pendant les 20 premières minutes, le verre est en moyenne à près de 122 °C."
  },

  // ================= Exercice 2 : contrôle des verres (10 points) =================

  // ----- Partie A : probabilités conditionnelles -----
  {
    id: "U41-386", epreuve: "U41", theme: "Probabilités", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "B", etape: 1,
    contexte: "Exercice 2, partie A : probabilités. On prend un verre au hasard dans la production. On note M1 l'événement « le verre vient de M1 », M2 « le verre vient de M2 » et D « le verre a un défaut ».",
    question: "Quelle est la probabilité que le verre vienne de M1 et ait un défaut ?",
    choix: ["0,03", "0,018", "0,63", "0,038"],
    bonne: 1,
    explication: "On suit la branche M1 puis D de l'arbre : P(M1 ∩ D) = P(M1) × P_M1(D) = 0,6 × 0,03 = 0,018.",
    erreurs: { 0: { type: "notion", message: "0,03 est P_M1(D), la probabilité d'un défaut SACHANT que le verre vient de M1. Pour « M1 et D », on multiplie : 0,6 × 0,03 = 0,018." } }
  },
  {
    id: "U41-387", epreuve: "U41", theme: "Probabilités", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 2,
    type: "calcul",
    question: "Calculez P(D), la probabilité que le verre ait un défaut.",
    reponse: { valeur: 0.038, unite: "", decimales: 3, signe: false },
    erreurs: [
      { valeur: 0.08, type: "notion", message: "On n'ajoute pas les pourcentages de défauts. Chaque branche est pondérée : 0,6 × 0,03 + 0,4 × 0,05 = 0,038." },
      { valeur: 0.04, type: "notion", message: "La moyenne simple de 3 % et 5 % ne tient pas compte des 60 % et 40 % produits. Probabilités totales : 0,018 + 0,020 = 0,038." }
    ],
    explication: "Formule des probabilités totales :\nP(D) = P(M1 ∩ D) + P(M2 ∩ D) = 0,6 × 0,03 + 0,4 × 0,05 = 0,018 + 0,020 = 0,038.",
    indice: "Additionne les deux branches qui finissent par D.",
    surLaCopie: "D'après la formule des probabilités totales :\nP(D) = P(M1 ∩ D) + P(M2 ∩ D) = 0,6 × 0,03 + 0,4 × 0,05 = 0,038."
  },
  {
    id: "U41-388", epreuve: "U41", theme: "Probabilités", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 3,
    type: "calcul",
    question: "Un verre a un défaut. Calculez la probabilité qu'il vienne de M2, arrondie à 10⁻³.",
    reponse: { valeur: 0.526, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
    erreurs: [
      { valeur: 0.05, type: "notion", message: "0,05 est P_M2(D), la probabilité conditionnelle dans l'autre sens. On veut P_D(M2) = P(M2 ∩ D) / P(D) = 0,020 / 0,038 ≈ 0,526." },
      { valeur: 0.02, type: "notion", message: "0,020 est P(M2 ∩ D). Il faut encore diviser par P(D) : 0,020 / 0,038 ≈ 0,526." }
    ],
    explication: "P_D(M2) = [[P(M2 ∩ D)|P(D)]] = [[0,020|0,038]] ≈ 0,526.\nM2 fabrique 40 % des verres mais plus de la moitié des verres à défaut.",
    indice: "« Sachant que le verre a un défaut » : divise par P(D)."
  },

  // ----- Partie B : loi binomiale et loi normale -----
  {
    id: "U41-389", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "B", etape: 4,
    contexte: "Exercice 2, partie B : lots de verres. Dans cette partie, on admet que la probabilité qu'un verre ait un défaut est 0,04. Un magasin reçoit un lot de 50 verres, pris au hasard dans une production assez grande pour assimiler ce choix à des tirages avec remise. X est le nombre de verres à défaut du lot.",
    question: "Quelle loi suit X ?",
    choix: [
      "La loi binomiale de paramètres n = 50 et p = 0,04",
      "La loi binomiale de paramètres n = 0,04 et p = 50",
      "La loi normale de moyenne 50 et d'écart type 0,04",
      "La loi exponentielle de paramètre 0,04"
    ],
    bonne: 0,
    explication: "On répète 50 fois, de façon indépendante (tirages assimilés à des tirages avec remise), la même épreuve à deux issues : « défaut », de probabilité 0,04, ou non. X compte les succès : X suit la loi binomiale B(50 ; 0,04).",
    surLaCopie: "On répète 50 fois, de manière indépendante, une épreuve à deux issues dont le succès « défaut » a pour probabilité 0,04.\nX compte les succès : X suit la loi binomiale B(50 ; 0,04)."
  },
  {
    id: "U41-390", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "B", etape: 5,
    question: "Combien de verres à défaut le magasin peut-il attendre, en moyenne, par lot de 50 ?",
    choix: ["0,04", "1,92", "2", "4"],
    bonne: 2,
    explication: "Pour une loi binomiale, E(X) = np = 50 × 0,04 = 2. En moyenne, 2 verres à défaut par lot de 50.",
    erreurs: { 1: { type: "notion", message: "1,92 est la variance np(1 − p). L'espérance est np = 50 × 0,04 = 2." } }
  },
  {
    id: "U41-391", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 6,
    type: "pose",
    question: "Calculez la probabilité que le lot contienne au moins un verre à défaut, étape par étape.",
    etapes: [
      {
        consigne: "P(X = 0), arrondie à 10⁻³",
        reponse: { valeur: 0.130, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
        aide: "Aucun défaut : les 50 verres sont bons, chacun avec la probabilité 0,96.",
        ligne: "P(X = 0) = 0,96⁵⁰ ≈ 0,130",
        erreurs: [{ valeur: 0.96, type: "notion", message: "0,96 est la probabilité qu'UN verre soit bon. Les 50 doivent l'être : 0,96 × 0,96 × … = 0,96⁵⁰ ≈ 0,130." }]
      },
      {
        consigne: "P(X ≥ 1), arrondie à 10⁻³",
        reponse: { valeur: 0.870, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
        aide: "« Au moins un » est le contraire de « aucun ».",
        ligne: "P(X ≥ 1) = 1 − P(X = 0) ≈ 1 − 0,130 = 0,870",
        erreurs: [{ valeur: 0.271, type: "notion", message: "Tu as calculé P(X = 1). « Au moins un » regroupe 1, 2, 3… défauts : on passe par le contraire, 1 − P(X = 0) ≈ 0,870." }]
      }
    ],
    explication: "P(X = 0) = 0,96⁵⁰ ≈ 0,130. L'événement « au moins un verre à défaut » est le contraire de « aucun » : P(X ≥ 1) = 1 − 0,96⁵⁰ ≈ 0,870. Il y a environ 87 % de chances qu'un lot contienne au moins un verre à défaut."
  },
  {
    id: "U41-392", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 7,
    contexte: "Le laboratoire fabrique 1 000 verres par semaine. Y, le nombre de verres à défaut de la semaine, suit la loi binomiale B(1 000 ; 0,04). On l'approche par une loi normale de même espérance et de même écart type.",
    question: "Quels sont les paramètres de cette loi normale (écart type arrondi à 10⁻²) ?",
    choix: [
      "Moyenne 40 et écart type 38,40",
      "Moyenne 40 et écart type 6,20",
      "Moyenne 4 et écart type 1,96",
      "Moyenne 1 000 et écart type 0,04"
    ],
    bonne: 1,
    explication: "Espérance : np = 1 000 × 0,04 = 40. Écart type : √(np(1 − p)) = √(1 000 × 0,04 × 0,96) = √38,4 ≈ 6,20. On approche Y par la loi normale N(40 ; 6,20).",
    erreurs: { 0: { type: "notion", message: "38,4 est la variance np(1 − p). L'écart type est sa racine carrée : √38,4 ≈ 6,20." } }
  },
  {
    id: "U41-393", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U41-01", partie: "B", etape: 8,
    type: "calcul",
    question: "Avec cette loi normale et la correction de continuité, calculez la probabilité qu'il y ait au plus 45 verres à défaut dans la semaine, c'est-à-dire P(Z ≤ 45,5). Arrondissez à 10⁻².",
    reponse: { valeur: 0.81, unite: "", decimales: 2, signe: false, tolerance: 0.005 },
    erreurs: [
      { valeur: 0.79, type: "notion", message: "Tu as calculé P(Z ≤ 45) sans la correction de continuité. On prend 45,5 : P(Z ≤ 45,5) ≈ 0,81." }
    ],
    explication: "Z suit N(40 ; 6,20).\nÀ la calculatrice : P(Z ≤ 45,5) ≈ 0,81.\nIl y a environ 81 % de chances d'avoir au plus 45 verres à défaut dans la semaine.",
    indice: "Calculatrice : loi normale cumulée (NormalFRép, normalcdf…), borne basse très petite (−10⁹⁹), borne haute 45,5, moyenne 40, écart type 6,20."
  },

  // ----- Partie C : loi exponentielle -----
  {
    id: "U41-394", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "facile",
    sujet: "SUJET-U41-01", partie: "B", etape: 9,
    contexte: "Exercice 2, partie C : durée de vie d'une polisseuse. La durée de fonctionnement sans panne T (en heures) de la polisseuse du laboratoire suit la loi exponentielle de paramètre λ = 0,0004. On rappelle que P(T ≤ t) = 1 − e^(−λt).",
    question: "Quelle est la durée moyenne de fonctionnement sans panne de cette polisseuse ?",
    choix: ["400 h", "4 000 h", "0,0004 h", "2 500 h"],
    bonne: 3,
    explication: "Pour une loi exponentielle, E(T) = 1/λ = 1 / 0,0004 = 2 500 heures."
  },
  {
    id: "U41-395", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 10,
    type: "calcul",
    question: "Calculez la probabilité que la polisseuse tombe en panne avant 1 500 heures, arrondie à 10⁻³.",
    reponse: { valeur: 0.451, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
    erreurs: [
      { valeur: 0.549, type: "notion", message: "0,549 = e^(−0,6) est la probabilité de fonctionner PLUS de 1 500 h. Panne avant 1 500 h : 1 − e^(−0,6) ≈ 0,451." }
    ],
    explication: "P(T ≤ 1 500) = 1 − e^(−0,0004 × 1 500) = 1 − e^(−0,6) ≈ 0,451.",
    indice: "λt = 0,0004 × 1 500 = 0,6."
  },
  {
    id: "U41-396", epreuve: "U41", theme: "Lois de probabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 11,
    question: "Quelle est la probabilité que la polisseuse fonctionne plus de 4 000 heures sans panne (arrondie à 10⁻²) ?",
    choix: ["0,80", "0,20", "0,55", "0,04"],
    bonne: 1,
    explication: "P(T > 4 000) = 1 − P(T ≤ 4 000) = e^(−0,0004 × 4 000) = e^(−1,6) ≈ 0,20.",
    erreurs: { 0: { type: "notion", message: "0,80 = 1 − e^(−1,6) est la probabilité d'une panne AVANT 4 000 h. Plus de 4 000 h : e^(−1,6) ≈ 0,20." } }
  },

  // ----- Partie D : intervalle de confiance -----
  {
    id: "U41-397", epreuve: "U41", theme: "Estimation et tests", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 12,
    type: "calcul",
    contexte: "Exercice 2, partie D : satisfaction des clients. Sur un échantillon de 400 porteurs de verres du laboratoire, pris au hasard, 332 se disent satisfaits de leur vision. On admet que l'intervalle de confiance à 95 % de la proportion p de clients satisfaits est [f − 1,96 √(f(1 − f)/n) ; f + 1,96 √(f(1 − f)/n)].",
    question: "Calculez la borne inférieure de l'intervalle de confiance de p au niveau 95 %, arrondie à 10⁻³.",
    reponse: { valeur: 0.793, unite: "", decimales: 3, signe: false, tolerance: 0.001 },
    erreurs: [
      { valeur: 0.811, type: "notion", message: "Tu as oublié le 1,96 : la demi-largeur est 1,96 × √(0,83 × 0,17 / 400) ≈ 0,037, d'où 0,83 − 0,037 ≈ 0,793." },
      { valeur: 0.867, type: "notion", message: "C'est la borne supérieure. La borne inférieure est f − 0,037 ≈ 0,793." }
    ],
    explication: "f = [[332|400]] = 0,83.\n1,96 × √([[0,83 × 0,17|400]]) ≈ 1,96 × 0,0188 ≈ 0,037.\nBorne inférieure : 0,83 − 0,037 ≈ 0,793. L'intervalle est environ [0,793 ; 0,867].",
    indice: "Commence par la fréquence f = 332 / 400, puis calcule la demi-largeur 1,96 × √(f(1 − f)/n)."
  },
  {
    id: "U41-398", epreuve: "U41", theme: "Estimation et tests", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U41-01", partie: "B", etape: 13,
    question: "L'intervalle obtenu est environ [0,793 ; 0,867]. Quelle phrase est juste ?",
    choix: [
      "Il est certain que la proportion p de clients satisfaits se trouve dans cet intervalle",
      "Exactement 95 % des clients du laboratoire sont satisfaits de leur vision",
      "Environ 95 % des intervalles ainsi obtenus contiennent p, mais ce n'est pas certain ici",
      "Entre 79,3 % et 86,7 % des clients de tous les laboratoires sont satisfaits"
    ],
    bonne: 2,
    explication: "Le niveau 95 % porte sur la méthode : sur un grand nombre d'échantillons de 400 clients, environ 95 % des intervalles obtenus contiennent la vraie proportion p. Pour un échantillon donné, on n'est jamais certain que p soit dans l'intervalle.",
    erreurs: { 0: { type: "notion", message: "On n'est jamais certain : environ 5 % des échantillons donnent un intervalle qui ne contient pas p." } }
  }
);
