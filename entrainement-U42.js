// =====================================================================
//  QUESTIONS D'ENTRAÎNEMENT · U42 (Optique géométrique et physique)
//  Les mêmes notions que questions-U42.js, avec d'autres chiffres, pour les
//  élèves qui veulent s'entraîner plus. Elles ne comptent pas dans l'Essentiel.
//  Même format qu'une question normale, avec en plus  entrainement: true.
//  Format complet : notes/coordination/format-entrainement.md
//  Ids : suite de U42 (064 à 088), jamais réutilisés.
// =====================================================================
QUESTIONS.push(

  // ---------- Conjugaison ----------
  {
    id: "U42-064", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Lentille mince convergente de f' = +30 mm. Un objet réel est placé à 45 mm devant elle (OA = −45 mm). Où se trouve l'image ?",
    choix: ["OA' = +18 mm", "OA' = −90 mm", "OA' = +90 mm", "OA' = +75 mm"],
    bonne: 2,
    explication: "Descartes : 1/OA' = 1/f' + 1/OA = 1/30 − 1/45 = 3/90 − 2/90 = 1/90. Donc OA' = +90 mm : image réelle, après la lentille. Les +18 mm viennent d'un objet compté en OA = +45 mm. Les +75 mm sont la somme 30 + 45, qui ne repose sur aucune formule.",
    indice: "Un objet réel est avant la lentille : OA est négatif. Utilise 1/OA' = 1/f' + 1/OA."
  },
  {
    id: "U42-065", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un objectif donne d'un objet placé à OA = −24 mm une image à OA' = +72 mm. Calcule le grandissement transversal, avec son signe.",
    reponse: { valeur: -3, unite: "", decimales: 0, signe: true },
    explication: "γ = [[OA'|OA]] = [[72|−24]] = −3\nL'image est 3 fois plus grande que l'objet et renversée : c'est ce que dit le signe moins.",
    indice: "Le grandissement est le rapport de la position de l'image à celle de l'objet, mesurées depuis O. Garde les signes."
  },
  {
    id: "U42-066", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Objectif photo de f' = 40 mm. L'objet est à 160 mm avant le foyer objet (FA = −160 mm). Où se forme l'image par rapport au foyer image F' (formule de Newton) ?",
    choix: ["F'A' = +10 mm", "F'A' = −10 mm", "F'A' = +40 mm", "F'A' = +4 mm"],
    bonne: 0,
    explication: "Newton : FA × F'A' = −f'². Donc F'A' = −1 600 / (−160) = +10 mm. L'image est 10 mm après F'. Avec le signe moins oublié devant f'², on trouverait −10 mm. Les +4 mm viennent de 160 / 40, qui ne mélange pas les bonnes grandeurs.",
    indice: "Newton mesure à partir des foyers et fait intervenir f' au carré, avec un signe moins."
  },
  {
    id: "U42-067", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "Lentille mince divergente de f' = −60 mm. Un objet réel est placé à 120 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: -40, unite: "mm", decimales: 0, signe: true },
    explication: "OA = −120 mm et f' = −60 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = −[[1|60]] − [[1|120]] = −[[2|120]] − [[1|120]] = −[[3|120]]\nDonc OA' = −[[120|3]] = −40 mm : image virtuelle, du côté de l'objet, droite et 3 fois plus petite.\nγ = [[OA'|OA]] = [[−40|−120]] = +[[1|3]]",
    indice: "Deux signes à ne pas perdre : celui de OA (objet réel) et celui de f' (lentille divergente)."
  },
  {
    id: "U42-068", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Lentille mince équiconvexe (deux faces de même rayon R) d'indice n = 1,6 et de distance focale f' = 75 mm. Quelle valeur de R ?",
    choix: ["45 mm", "125 mm", "240 mm", "90 mm"],
    bonne: 3,
    explication: "1/f' = (n − 1) × (1/R1 − 1/R2) avec R1 = +R et R2 = −R, donc 1/f' = (n − 1) × 2/R. D'où R = 2 × (n − 1) × f' = 2 × 0,6 × 75 = 90 mm. 45 mm : le facteur 2 est oublié. 240 mm : n a été pris à la place de n − 1.",
    indice: "Formule des opticiens avec R1 = +R et R2 = −R. Attention au facteur 2 et à n − 1."
  },

  // ---------- Loupe et microscope ----------
  {
    id: "U42-069", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une loupe a une distance focale f' = 25 mm. Calcule son grossissement commercial.",
    reponse: { valeur: 10, unite: "", decimales: 0, signe: false },
    explication: "P = [[1|f']] = [[1|0,025]] = 40 δ\nGc = [[P|4]] = [[40|4]] = 10\nLe 4 vient de la distance de référence de 25 cm : [[1|0,25]] = 4.",
    indice: "Passe d'abord par la puissance en dioptries, avec f' en mètres. Le grossissement commercial se rapporte à 25 cm."
  },
  {
    id: "U42-070", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    question: "Un oculaire porte l'indication « 12,5× » (grossissement commercial Gc = 12,5). Quelle est sa distance focale ?",
    choix: ["50 mm", "20 mm", "80 mm", "12,5 mm"],
    bonne: 1,
    explication: "Gc = P / 4, donc P = 4 × 12,5 = 50 δ. Puis f' = 1 / 50 = 0,020 m = 20 mm. 50 mm confond la puissance (en dioptries) et la focale. 80 mm : le 4 de la formule est oublié (1 000 / 12,5).",
    indice: "Remonte la chaîne : grossissement commercial, puis puissance en dioptries, puis focale en mètres."
  },
  {
    id: "U42-071", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un microscope a un objectif de grandissement γ = −25 et un oculaire de grossissement commercial 8×. Calcule le grossissement commercial du microscope (valeur positive).",
    reponse: { valeur: 200, unite: "", decimales: 0, signe: false },
    explication: "Gc du microscope = |γ de l'objectif| × Gc de l'oculaire = 25 × 8 = 200. L'objectif forme une image intermédiaire agrandie, que l'oculaire observe comme une loupe : les deux effets se multiplient.",
    indice: "Les effets de l'objectif et de l'oculaire se multiplient. Prends le grandissement de l'objectif en valeur absolue."
  },

  // ---------- Lunettes afocales ----------
  {
    id: "U42-072", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    question: "Lunette de Kepler afocale : objectif de f'ob = 150 mm et oculaire de f'oc = 25 mm. Quelle est la distance entre l'objectif et l'oculaire ?",
    choix: ["125 mm", "3 750 mm", "175 mm", "6 mm"],
    bonne: 2,
    explication: "Une lunette afocale a son foyer image d'objectif confondu avec le foyer objet d'oculaire, donc la longueur vaut f'ob + f'oc = 150 + 25 = 175 mm. 125 mm est la différence, valable pour une lunette de Galilée (oculaire divergent), pas pour Kepler. 6 est le grossissement, pas une longueur.",
    indice: "Le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. Les deux focales mises bout à bout donnent la longueur."
  },
  {
    id: "U42-073", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    type: "calcul",
    question: "Lunette de Galilée afocale : objectif de f'1 = +100 mm, oculaire divergent de f'2 = −25 mm. Calcule son grossissement, avec son signe.",
    reponse: { valeur: 4, unite: "", decimales: 0, signe: true },
    explication: "G = −[[f'1|f'2]] = −[[100|−25]] = +4\nLe signe plus indique une image droite : une lunette de Galilée ne demande pas de redresseur. Avec deux lentilles convergentes (Kepler), le résultat serait négatif.",
    indice: "Pour une lunette afocale, G = −[[f'1|f'2]]. Garde le signe de f'2 : l'oculaire est divergent."
  },
  {
    id: "U42-074", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    question: "Un client a une acuité de loin de 3/10. Il essaie une lunette de grossissement 3×. Il veut lire des détails qui demandent 8/10. Que peut-on lui répondre ?",
    choix: [
      "Oui : 3/10 × 3 = 9/10, qui dépasse 8/10",
      "Non : l'acuité reste 3/10, inférieure à 8/10",
      "Non : 3/10 ÷ 3 = 1/10, inférieure à 8/10",
      "Non : il faudrait un grossissement d'au moins 4"
    ],
    bonne: 0,
    explication: "Avec une aide visuelle : AV avec l'instrument = AV du client × G = 3/10 × 3 = 9/10. C'est plus que les 8/10 demandés, donc la lunette convient. Il suffirait d'un grossissement de 8 / 3, soit environ 2,7. Les autres réponses oublient de multiplier, divisent par G, ou exigent un grossissement trop fort.",
    indice: "L'acuité avec l'instrument est celle du client multipliée par le grossissement. Compare ensuite au besoin."
  },

  // ---------- Doublets et achromatisme ----------
  {
    id: "U42-075", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    type: "calcul",
    question: "Doublet de deux lentilles minces : f'1 = 60 mm et f'2 = 60 mm, séparées de e = 40 mm. Calcule sa distance focale image f'.",
    reponse: { valeur: 45, unite: "mm", decimales: 0, signe: true },
    explication: "Formule de Gullstrand : f' = [[f'1 × f'2|f'1 + f'2 − e]]\nf' = [[60 × 60|60 + 60 − 40]] = [[3 600|80]] = 45 mm",
    indice: "Formule du doublet : le produit des deux focales, divisé par leur somme diminuée de e."
  },
  {
    id: "U42-076", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    question: "Un doublet a pour symbole (3 ; 1 ; 3) avec a = 10 mm. Quelle est sa distance focale image ?",
    choix: ["13 mm", "18 mm", "30 mm", "15 mm"],
    bonne: 1,
    explication: "Symbole (m ; n ; p) : f'1 = 30 mm, e = 10 mm, f'2 = 30 mm. Gullstrand : f' = 30 × 30 / (30 + 30 − 10) = 900 / 50 = 18 mm. 13 mm vient d'un e ajouté au lieu d'être retranché (900 / 70). 15 mm serait le résultat de deux lentilles accolées (e = 0).",
    indice: "Calcule d'abord f'1, e et f'2 avec a, puis applique la formule du doublet. Le e se retranche."
  },
  {
    id: "U42-077", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    question: "Un verre a pour indices nd = 1,600, nF = 1,607 et nC = 1,595. Quel est son nombre d'Abbe ?",
    choix: ["≈ 133", "≈ 83", "0,012", "50"],
    bonne: 3,
    explication: "ν = (nd − 1) / (nF − nC) = 0,600 / 0,012 = 50. Environ 133 : le 1 n'a pas été retranché de nd. Environ 83 : le numérateur a été pris égal à 1. 0,012 est seulement l'écart nF − nC.",
    indice: "Écart à l'air divisé par écart entre le bleu et le rouge. Pense à retrancher 1 à nd."
  },

  // ---------- Champs et diaphragmes ----------
  {
    id: "U42-078", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    type: "calcul",
    question: "Dans l'espace d'étude : pupille de rayon 8 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 30 mm, plan des champs en x = 50 mm. Calcule le rayon du champ de pleine lumière.",
    reponse: { valeur: 3, unite: "mm", decimales: 0, signe: false },
    explication: "Le plan des champs (x = 50) est au-delà du diaphragme (x = 30) : on prend la droite par les bords du même côté, (0 ; 8) et (30 ; 5).\nPente = [[5 − 8|30]] = −0,1\nEn x = 50 : 8 − 0,1 × 50 = 3 mm.",
    indice: "Écris l'équation de la droite appuyée sur les deux bords du même côté, puis prolonge-la jusqu'au plan des champs."
  },
  {
    id: "U42-079", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    question: "Pupille de rayon 10 mm en x = 0, diaphragme de champ de rayon 7 mm en x = 30 mm, plan des champs en x = 60 mm. Quel est le rayon du champ total (bords opposés) ?",
    choix: ["14 mm", "4 mm", "24 mm", "17 mm"],
    bonne: 2,
    explication: "Champ total : droite par les bords opposés, (0 ; −10) et (30 ; 7). Pente = 17 / 30. En x = 60 : −10 + (17 / 30) × 60 = 24 mm. Par les bords du même côté on trouve 4 mm (pleine lumière), par le centre de la pupille 14 mm (champ moyen). 17 mm est la somme des deux rayons.",
    indice: "Pour le champ total, la droite relie un bord de la pupille au bord opposé du diaphragme de champ."
  },
  {
    id: "U42-080", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    question: "Un capteur mesure 12 × 16 mm. Le rayon du champ de pleine lumière image est 9,5 mm. Le capteur est-il éclairé uniformément ?",
    choix: [
      "Non : la demi-diagonale (10 mm) dépasse 9,5 mm, les coins sont assombris",
      "Oui : 9,5 mm dépasse la demi-largeur (8 mm)",
      "Oui : 9,5 mm dépasse la demi-hauteur (6 mm)",
      "Non : il faudrait un rayon d'au moins 16 mm"
    ],
    bonne: 0,
    explication: "Ce sont les coins qui sortent en premier. Demi-diagonale = √(6² + 8²) = √100 = 10 mm. Comme 10 > 9,5, les coins ne sont pas dans le champ de pleine lumière : vignettage. Comparer au bord (demi-largeur ou demi-hauteur) est trop optimiste. Un rayon de 16 mm serait bien plus que nécessaire.",
    indice: "Quel point du capteur est le plus éloigné du centre ? Compare sa distance au rayon du champ."
  },
  {
    id: "U42-081", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une lunette a un objectif de f'ob = 80 mm. Dans son plan focal image, le champ de pleine lumière a un rayon de 4 mm. Calcule la largeur du champ de pleine lumière sur un objet situé à 40 m.",
    reponse: { valeur: 4, unite: "m", decimales: 0, signe: false },
    explication: "tan ω = [[4|80]] = 0,05\nÀ 40 m : demi-largeur = 40 × 0,05 = 2 m\nLargeur = 2 × 2 = 4 m. Piège : donner la demi-largeur.",
    indice: "Le rayon du champ et la focale de l'objectif donnent la tangente du demi-champ. On demande une largeur, pas une demi-largeur."
  },

  // ---------- Ouverture et résolution ----------
  {
    id: "U42-082", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un objectif de focale 300 mm est ouvert à f/6 (nombre d'ouverture N = 6). Calcule le diamètre de sa pupille d'entrée.",
    reponse: { valeur: 50, unite: "mm", decimales: 0, signe: false },
    explication: "N = [[f'|D]], donc D = [[f'|N]] = [[300|6]] = 50 mm\nPlus N est petit, plus la pupille est grande.",
    indice: "Le nombre d'ouverture est le rapport de la focale au diamètre. Isole le diamètre."
  },
  {
    id: "U42-083", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    question: "Un objectif a une pupille d'entrée de diamètre 5 mm. Quelle est la limite de résolution angulaire due à la diffraction pour λ = 600 nm ?",
    choix: ["1,2 × 10⁻⁴ rad", "1,5 × 10⁻⁴ rad", "1,5 × 10⁻¹ rad", "7,3 × 10⁻⁵ rad"],
    bonne: 1,
    explication: "α = 1,22 × λ / D = 1,22 × 600 × 10⁻⁹ / 5 × 10⁻³ ≈ 1,46 × 10⁻⁴ rad, soit 1,5 × 10⁻⁴ rad. 1,2 × 10⁻⁴ : le coefficient 1,22 est oublié. 7,3 × 10⁻⁵ : D a été pris égal à 10 mm. 1,5 × 10⁻¹ : une erreur de conversion en mètres.",
    indice: "α = 1,22 λ / D, avec λ et D en mètres. Le résultat est en radians."
  },
  {
    id: "U42-084", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un bijoutier utilise une loupe de puissance P = 20 δ. La limite de résolution angulaire de son œil est 3 × 10⁻⁴ rad. Quel est le plus petit détail qu'il distingue sur l'objet, en µm ?",
    reponse: { valeur: 15, unite: "µm", decimales: 0, signe: false },
    explication: "P = [[α'|y]], donc y = [[α'|P]]\nLe plus petit détail vu est celui dont l'image est vue sous la limite de résolution de l'œil : α' = ε = 3 × 10⁻⁴ rad.\ny = [[3 × 10⁻⁴|20]] = 1,5 × 10⁻⁵ m = 15 µm",
    indice: "La puissance relie l'angle de l'image à la taille de l'objet : P = [[α'|y]]. Convertis ensuite le résultat de mètres en micromètres."
  },

  // ---------- Transmission et antireflet ----------
  {
    id: "U42-085", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    question: "Quel pourcentage de lumière est réfléchi par un dioptre air / verre d'indice 2,0, en incidence normale ?",
    choix: ["33 %", "50 %", "5,5 %", "11 %"],
    bonne: 3,
    explication: "R = ((n − 1) / (n + 1))² = (1 / 3)² = 1/9 ≈ 0,11, soit environ 11 %. 33 % est la valeur de (n − 1) / (n + 1) avant de l'élever au carré.",
    indice: "En incidence normale, R = ((n − 1) / (n + 1))². Pense au carré."
  },
  {
    id: "U42-086", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un instrument compte 3 lentilles non traitées dans l'air, avec T = 0,95 par face. Calcule sa transmission totale, en pourcentage arrondi à l'unité.",
    reponse: { valeur: 74, unite: "%", decimales: 0, signe: false },
    explication: "3 lentilles = 6 faces. T totale = 0,95⁶ ≈ 0,735, soit environ 74 %. Les transmissions se multiplient : ce n'est pas 1 − 6 × 0,05 = 70 %.",
    indice: "Compte les faces traversées, puis multiplie les transmissions successives."
  },

  // ---------- Interférences et réseaux ----------
  {
    id: "U42-087", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un réseau a 400 traits par mm. Éclairé en incidence normale, sous quel angle voit-on la lumière de 500 nm dans l'ordre 1 ? Donne l'angle en degrés, au dixième.",
    reponse: { valeur: 11.5, unite: "°", decimales: 1, signe: false },
    explication: "Pas a = [[1|400]] mm = 2,5 µm\nRéseaux : a × sin i' = k × λ, donc sin i' = [[k × λ|a]] = [[0,5|2,5]] = 0,2\nDonc i' ≈ 11,5°.",
    indice: "Calcule d'abord le pas du réseau en micromètres, puis utilise a × sin i' = k × λ avec k = 1."
  },

  // ---------- Polarisation ----------
  {
    id: "U42-088", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "complément", entrainement: true,
    question: "Une lumière déjà polarisée rectilignement, d'intensité I0, traverse un analyseur parfait dont la direction fait 30° avec la sienne. Quelle intensité ressort ?",
    choix: ["0,75 × I0", "0,87 × I0", "0,5 × I0", "0,25 × I0"],
    bonne: 0,
    explication: "Loi de Malus : I = I0 × cos² θ = I0 × cos² 30° = I0 × 0,75. Comme la lumière est déjà polarisée, on ne retire pas la moitié d'abord. 0,87 est cos 30° sans le carré. 0,25 est sin² 30°.",
    indice: "Loi de Malus avec un carré. La lumière étant déjà polarisée, aucune perte de moitié au départ."
  },

  // ---------- EN PLUS, lot 1 : notions moins vues et raisonnements en plusieurs étapes ----------

  // Conjugaison
  {
    id: "U42-089", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Lentille mince convergente de f' = +40 mm. Un faisceau convergent la traverse et viendrait former l'image de l'objet 20 mm après la lentille : l'objet est virtuel, OA = +20 mm. Où se trouve l'image finale ?",
    choix: ["OA' = +13,3 mm", "OA' = −40 mm", "OA' = +60 mm", "OA' = +0,075 mm"],
    bonne: 0,
    explication: "Un objet virtuel est après la lentille : OA est positif. 1/OA' = 1/f' + 1/OA = 1/40 + 1/20 = 3/40, donc OA' = 40/3 = +13,3 mm. L'image est réelle et plus proche que le foyer. −40 mm vient d'un OA pris négatif (1/40 − 1/20). +60 mm est la somme 40 + 20. +0,075 mm est 3/40 sans avoir pris l'inverse.",
    indice: "Un objet virtuel se trouve après la lentille : donne-lui un OA positif, puis 1/OA' = 1/f' + 1/OA."
  },
  {
    id: "U42-090", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "Lentille mince divergente de f' = −50 mm. Un faisceau convergent la traverse et viendrait former l'image de l'objet 25 mm après la lentille (objet virtuel, OA = +25 mm). Calcule OA', avec son signe.",
    reponse: { valeur: 50, unite: "mm", decimales: 0, signe: true },
    explication: "Descartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = −[[1|50]] + [[1|25]] = −[[1|50]] + [[2|50]] = +[[1|50]]\nDonc OA' = +50 mm. Une lentille divergente peut donner une image réelle si l'objet est virtuel et plus proche que son foyer (25 mm < 50 mm).",
    indice: "Objet virtuel : OA = +25 mm. Garde le signe négatif de f' pour une divergente."
  },
  {
    id: "U42-091", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Deux lentilles minces convergentes : L1 (f'1 = +60 mm) puis L2 (f'2 = +30 mm), séparées de 120 mm. Un objet réel est à 90 mm avant L1 (OA1 = −90 mm). Où se forme l'image finale, comptée depuis L2 ?",
    choix: ["OA2' = +60 mm", "OA2' = +20 mm", "OA2' = +180 mm", "OA2' = −20 mm"],
    bonne: 1,
    explication: "L1 : 1/OA1' = 1/60 − 1/90 = 1/180, donc OA1' = +180 mm (après L1). L2 est à 120 mm de L1 : l'image de L1 est 60 mm après L2, donc objet virtuel pour L2 : OA2 = +60 mm. 1/OA2' = 1/30 + 1/60 = 3/60 = 1/20, donc OA2' = +20 mm. +60 mm vient d'un OA2 pris négatif. +180 mm est l'image de L1, qui n'est pas l'image finale.",
    indice: "L'image donnée par L1 sert d'objet à L2. Compte sa position depuis L2 : après L2, elle est virtuelle (OA2 positif)."
  },
  {
    id: "U42-092", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "Deux lentilles minces convergentes : L1 (f'1 = +60 mm) puis L2 (f'2 = +30 mm), séparées de 120 mm. Un objet réel est à 90 mm avant L1. Calcule le grandissement transversal total du système, avec son signe, à 0,01 près.",
    reponse: { valeur: -0.67, unite: "", decimales: 2, tolerance: 0.01, signe: true },
    explication: "L1 : OA1' = +180 mm\nγ1 = [[OA1'|OA1]] = [[180|−90]] = −2\nL2 : objet virtuel OA2 = +60 mm, image OA2' = +20 mm\nγ2 = [[OA2'|OA2]] = [[20|60]] = +[[1|3]]\nLes grandissements se multiplient : γ = −2 × [[1|3]] = −0,67\nL'image finale est renversée et plus petite que l'objet.",
    indice: "Calcule le grandissement de chaque lentille, puis multiplie-les. Pour L2, l'objet est virtuel."
  },
  {
    id: "U42-093", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "On veut projeter sur un écran l'image réelle d'un objet réel avec une lentille convergente de f' = 50 mm. Quelle est la plus petite distance possible entre l'objet et l'écran ?",
    choix: ["100 mm", "150 mm", "200 mm", "50 mm"],
    bonne: 2,
    explication: "La distance objet-écran vaut D = OA' − OA. Elle est minimale quand l'objet est à 2f' devant la lentille et l'image à 2f' derrière (γ = −1) : D = 4f' = 200 mm. En dessous de 4f', aucune position de la lentille ne donne d'image réelle nette. 100 mm serait 2f' seulement.",
    indice: "Cherche la position où objet et image sont à égale distance de la lentille (γ = −1)."
  },
  {
    id: "U42-094", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "On taille une face sphérique convexe (tournée vers la lumière) entre l'air et un verre d'indice 1,5. Pour que ce dioptre ait une vergence de +12,5 δ, quel rayon de courbure faut-il ?",
    reponse: { valeur: 40, unite: "mm", decimales: 0, signe: false },
    explication: "V = [[n' − n|R]], donc R = [[n' − n|V]]\nR = [[1,5 − 1|12,5]] = 0,04 m = 40 mm\nPiège : donner la réponse en mètres (0,04) sans convertir.",
    indice: "V = [[n' − n|R]] avec R en mètres. Isole R, puis convertis en millimètres."
  },
  {
    id: "U42-095", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    question: "Une lentille mince convergente en verre (n = 1,5) est plongée dans l'eau (n = 1,33) sans changer de forme. Que devient sa vergence ?",
    choix: ["Elle est divisée par 3 environ", "Elle ne change pas, la forme est la même", "Elle est multipliée par 1,33", "Elle devient négative"],
    bonne: 0,
    explication: "La vergence d'une lentille mince dans un milieu vaut V = (n_verre − n_milieu) × (1/R1 − 1/R2). Dans l'air : 1,5 − 1 = 0,5. Dans l'eau : 1,5 − 1,33 = 0,17. Le rapport vaut 0,5 / 0,17 ≈ 3 : la lentille devient beaucoup moins convergente. Elle ne deviendrait divergente que si l'indice du milieu dépassait celui du verre.",
    indice: "Compare l'indice du verre à celui du milieu qui l'entoure : plus ils sont proches, moins la lentille dévie la lumière."
  },
  {
    id: "U42-096", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un objectif de f' = +30 mm doit donner d'un objet réel une image réelle 5 fois plus grande et renversée (γ = −5). À quelle distance de la lentille faut-il placer l'objet ? Donne OA, avec son signe.",
    reponse: { valeur: -36, unite: "mm", decimales: 0, signe: true },
    explication: "γ = [[OA'|OA]] = −5, donc OA' = −5 × OA\nDescartes : [[1|OA']] − [[1|OA]] = [[1|f']]\n−[[1|5 OA]] − [[1|OA]] = [[1|30]]\n−[[6|5 OA]] = [[1|30]]\nDonc OA = −[[6 × 30|5]] = −36 mm\nContrôle : OA' = +180 mm, et [[1|180]] + [[1|36]] = [[1|30]]. L'objet est juste au-delà du foyer objet (30 mm).",
    indice: "Remplace OA' par γ × OA dans la relation de Descartes, puis isole OA."
  },

  // Loupe et microscope
  {
    id: "U42-097", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une loupe a une distance focale f' = 40 mm. Un observateur veut voir l'image virtuelle à 250 mm devant la loupe (OA' = −250 mm). À quelle distance de la loupe faut-il placer l'objet ? Donne OA, avec son signe, à 0,1 mm près.",
    reponse: { valeur: -34.5, unite: "mm", decimales: 1, signe: true },
    explication: "OA' = −250 mm. Descartes : [[1|OA']] − [[1|OA]] = [[1|f']]\n[[1|OA]] = [[1|OA']] − [[1|f']] = −[[1|250]] − [[1|40]]\n[[1|OA]] = −[[4|1000]] − [[25|1000]] = −[[29|1000]]\nDonc OA = −[[1 000|29]] = −34,5 mm. L'objet est entre le foyer objet (40 mm) et la loupe : c'est ce qui donne une image virtuelle.",
    indice: "Isole 1/OA dans la relation de conjugaison avec OA' = −250 mm. Le signe moins sur OA' est important."
  },
  {
    id: "U42-098", difficulte: "difficile", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    question: "Même loupe (f' = 40 mm) : l'objet est placé de façon que l'image virtuelle soit à 250 mm de la loupe (objet à 34,5 mm). Quel est alors le grandissement transversal γ ?",
    choix: ["+7,25", "+6,25", "−7,25", "+0,14"],
    bonne: 0,
    explication: "γ = OA'/OA = (−250) / (−34,5) = +7,25. L'image est droite (γ > 0). Le grossissement commercial 250/f' = 6,25 est défini pour une image à l'infini : avec une image à 250 mm, le grandissement vaut 1 + 250/f' = 7,25. −7,25 aurait une image renversée, impossible avec une loupe. 0,14 est l'inverse.",
    indice: "γ = OA'/OA avec les deux signes. Compare au grossissement commercial, qui suppose une image à l'infini."
  },
  {
    id: "U42-099", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un microscope a un objectif de focale f'ob = 4 mm, un oculaire de focale f'oc = 25 mm et un intervalle optique Δ = 160 mm (distance entre le foyer image de l'objectif et le foyer objet de l'oculaire). Calcule son grossissement commercial.",
    reponse: { valeur: 400, unite: "", decimales: 0, signe: false },
    explication: "Objectif : ∣γob∣ = [[Δ|f'ob]] = [[160|4]] = 40\nOculaire : Gc = [[250|f'oc]] = [[250|25]] = 10\nMicroscope : Gc = 40 × 10 = 400",
    indice: "Le grandissement de l'objectif vaut [[Δ|f'ob]]. Multiplie-le par le grossissement commercial de l'oculaire ([[250|f'oc]], f' en mm)."
  },
  {
    id: "U42-100", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément", entrainement: true,
    question: "Une loupe porte la mention « 5× » (grossissement commercial 5). Quelle est sa puissance ?",
    choix: ["20 δ", "5 δ", "1,25 δ", "10 δ"],
    bonne: 0,
    explication: "Gc = 0,25 × P (P en dioptries, 0,25 m est la distance de référence de 25 cm), donc P = 4 × Gc = 20 δ. Cela correspond à f' = 50 mm, et 250 / 50 = 5. 5 δ confond puissance et grossissement. 1,25 δ est Gc / 4.",
    indice: "Le grossissement commercial est Gc = 0,25 × P, avec 0,25 m = 25 cm."
  },

  // Lunettes afocales
  {
    id: "U42-101", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    type: "calcul",
    question: "Des jumelles portent la mention « 8 × 42 » : grossissement 8, objectifs de diamètre 42 mm. Quel est le diamètre du cercle oculaire (pupille de sortie) ?",
    reponse: { valeur: 5.25, unite: "mm", decimales: 2, signe: false },
    explication: "D' = [[D|G]] = [[42|8]] = 5,25 mm\nPour utiliser toute la lumière captée, il doit être inférieur ou égal à la pupille de l'œil.",
    indice: "Le cercle oculaire est l'image de l'objectif donnée par l'oculaire. Son diamètre vaut D / G."
  },
  {
    id: "U42-102", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    question: "Un client myope retire ses lunettes et regarde dans des jumelles de type Kepler réglées pour un œil emmétrope. L'image est floue. Que doit-il faire ?",
    choix: [
      "Rapprocher l'oculaire de l'objectif (raccourcir les jumelles)",
      "Éloigner l'oculaire de l'objectif (allonger les jumelles)",
      "Rien : une lunette afocale convient à tous les yeux",
      "Retourner les jumelles"
    ],
    bonne: 0,
    explication: "L'œil myope a besoin d'une image virtuelle proche, au niveau de son punctum remotum. Pour cela, l'image intermédiaire doit passer en deçà du foyer objet de l'oculaire : on rapproche donc l'oculaire de l'objectif. Un hypermétrope fait l'inverse. Le réglage afocal (écart f'ob + f'oc) ne convient qu'à l'emmétrope qui n'accommode pas.",
    indice: "Le myope a besoin d'une image virtuelle à distance finie : l'objet de l'oculaire doit être entre son foyer objet et lui."
  },
  {
    id: "U42-103", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    type: "calcul",
    question: "Des jumelles de grossissement 8 sont pointées vers un point du bord de la scène vu à 6,0° de l'axe optique. Sous quel angle, par rapport à l'axe, l'observateur voit-il ce point dans l'instrument ? Donne l'angle en degrés, à l'unité près.",
    reponse: { valeur: 40, unite: "°", decimales: 0, signe: false },
    explication: "Le grossissement relie les tangentes des angles : tan ω' = G × tan ω = 8 × tan 6,0° = 8 × 0,1051 = 0,841, donc ω' ≈ 40°. Multiplier directement les angles (8 × 6 = 48°) est faux : c'est valable seulement pour les petits angles.",
    indice: "Passe par les tangentes : tan ω' = G × tan ω. Utilise ta calculatrice en degrés."
  },
  {
    id: "U42-104", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    question: "Lunette de Kepler afocale : f'ob = 300 mm et f'oc = 30 mm. On remplace l'oculaire par un autre de f'oc = 15 mm, en refaisant le réglage afocal. Que valent alors le grossissement (valeur absolue) et la longueur de la lunette ?",
    choix: ["20 ; 315 mm", "20 ; 330 mm", "10 ; 315 mm", "5 ; 315 mm"],
    bonne: 0,
    explication: "Grossissement : f'ob / f'oc = 300 / 15 = 20. Longueur : f'ob + f'oc = 300 + 15 = 315 mm. Avant, on avait 10 et 330 mm : changer l'oculaire change les deux. Garder 330 mm oublie que la lunette raccourcit avec un oculaire plus court.",
    indice: "Les deux grandeurs dépendent de l'oculaire : le grossissement est un rapport, la longueur une somme."
  },
  {
    id: "U42-105", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "complément", entrainement: true,
    type: "calcul",
    question: "Lunette de Kepler : f'ob = 200 mm, f'oc = 25 mm, réglée afocale. Un myope rapproche l'oculaire de l'objectif de 1 mm. Où se forme alors l'image donnée par l'oculaire ? Donne OA', avec son signe, depuis l'oculaire.",
    reponse: { valeur: -600, unite: "mm", decimales: 0, signe: true },
    explication: "L'image donnée par l'objectif reste au foyer image de l'objectif. Après déplacement, elle est à 25 − 1 = 24 mm avant l'oculaire : OA = −24 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = [[1|25]] − [[1|24]] = [[24|600]] − [[25|600]] = −[[1|600]]\nDonc OA' = −600 mm : image virtuelle, à 60 cm devant l'œil, de quoi corriger une myopie d'environ 1,7 δ.",
    indice: "L'objet de l'oculaire est maintenant à 24 mm de lui (avant). Applique Descartes à l'oculaire seul."
  },

  // Doublets et achromatisme
  {
    id: "U42-106", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    type: "calcul",
    question: "Deux lentilles minces accolées (distance nulle) ont pour vergences V1 = +8 δ et V2 = −3 δ. Calcule la distance focale image du doublet.",
    reponse: { valeur: 200, unite: "mm", decimales: 0, signe: true },
    explication: "Lentilles accolées : les vergences s'ajoutent.\nV = V1 + V2 = 8 − 3 = +5 δ\nf' = [[1|V]] = [[1|5]] = 0,2 m = 200 mm\nLe doublet est convergent.",
    indice: "Lentilles accolées : les vergences s'additionnent avec leur signe. Convertis la focale en millimètres."
  },
  {
    id: "U42-107", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    question: "Deux lentilles minces convergentes identiques (f'1 = f'2 = 50 mm) sont séparées de e = 100 mm. Que vaut la distance focale du doublet ?",
    choix: ["Infinie : le doublet est afocal", "25 mm", "50 mm", "100 mm"],
    bonne: 0,
    explication: "V = V1 + V2 − e × V1 × V2 = 20 + 20 − 0,1 × 20 × 20 = 40 − 40 = 0. La vergence est nulle : le doublet est afocal, c'est la lunette de Kepler (e = f'1 + f'2). 25 mm serait la valeur de lentilles accolées (V = 40 δ).",
    indice: "Calcule la vergence avec V = V1 + V2 − e V1 V2, e en mètres."
  },
  {
    id: "U42-108", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    type: "calcul",
    question: "On veut un doublet achromatique accolé de vergence totale V = +4 δ avec deux verres de nombres d'Abbe ν1 = 60 et ν2 = 36. Quelle est la distance focale de la lentille convergente ?",
    reponse: { valeur: 100, unite: "mm", decimales: 0, signe: false },
    explication: "V1 + V2 = 4 et [[V1|ν1]] + [[V2|ν2]] = 0\n[[V1|60]] + [[V2|36]] = 0, donc V1 = −[[5|3]] V2\n−[[5|3]] V2 + V2 = 4, soit −[[2|3]] V2 = 4\nDonc V2 = −6 δ et V1 = +10 δ\nf'1 = [[1|V1]] = [[1|10]] = 0,1 m = 100 mm",
    indice: "Écris les deux équations (somme des vergences, condition d'achromatisme) et résous le système."
  },
  {
    id: "U42-109", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", entrainement: true,
    question: "Dans un doublet achromatique accolé convergent, où place-t-on le verre qui disperse le plus (nombre d'Abbe le plus faible) ?",
    choix: [
      "Dans la lentille divergente, qui a la plus petite vergence en valeur absolue",
      "Dans la lentille convergente, qui est alors la plus forte",
      "Dans la lentille divergente, avec la même vergence en valeur absolue",
      "Peu importe : seul le doublet compte"
    ],
    bonne: 0,
    explication: "Condition d'achromatisme : V1/ν1 + V2/ν2 = 0. Donc |V2| = |V1| × ν2/ν1. Si ν2 < ν1 (verre très dispersif), |V2| < |V1| : la lentille divergente est moins forte et la somme reste positive, donc le doublet est convergent. Le verre peu dispersif (crown, ν grand) fait la lentille convergente, le verre très dispersif (flint, ν petit) la divergente.",
    indice: "Pars de V1/ν1 + V2/ν2 = 0 et compare les valeurs absolues des deux vergences."
  },

  // Champs et diaphragmes
  {
    id: "U42-110", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    question: "Dans un système, le diaphragme de champ se trouve exactement dans le plan des champs. Que peut-on dire du champ de pleine lumière, du champ moyen et du champ total ?",
    choix: [
      "Ils ont le même rayon, celui du diaphragme de champ : le bord est net",
      "Le champ total est plus grand : le bord est très flou",
      "Le champ de pleine lumière est nul",
      "On ne peut rien dire sans connaître la pupille"
    ],
    bonne: 0,
    explication: "Toutes les droites (bords du même côté, centre, bords opposés) passent par le bord du diaphragme de champ quand le plan des champs est le sien : les trois champs valent son rayon et le vignettage disparaît. C'est pourquoi on place ce diaphragme dans un plan où se forme une image intermédiaire : le bord de l'image est net.",
    indice: "Les droites qui définissent les trois champs passent toutes par le bord du diaphragme de champ. Où coupent-elles son plan ?"
  },
  {
    id: "U42-111", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    type: "calcul",
    question: "Dans l'espace d'étude : pupille de rayon 12 mm en x = 0, diaphragme de champ de rayon 7 mm en x = 20 mm, plan des champs en x = 40 mm. Calcule le rayon du champ de pleine lumière.",
    reponse: { valeur: 2, unite: "mm", decimales: 0, signe: false },
    explication: "La droite de pleine lumière passe par les bords du même côté : (0 ; 12) et (20 ; 7).\nPente = [[7 − 12|20]] = −0,25\nEn x = 40 : 12 − 0,25 × 40 = 2 mm.",
    indice: "Droite par les deux bords du même côté, prolongée jusqu'au plan des champs (x = 40)."
  },
  {
    id: "U42-112", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    question: "Pupille de rayon 10 mm en x = 0, diaphragme de champ en x = 30 mm, plan des champs en x = 60 mm. Quel rayon minimal doit avoir le diaphragme de champ pour qu'il existe un champ de pleine lumière (rayon strictement positif) ?",
    choix: ["Plus de 5 mm", "Plus de 10 mm", "Plus de 2,5 mm", "Plus de 20 mm"],
    bonne: 0,
    explication: "Rayon de pleine lumière en x = 60 : 10 + (r − 10) × 60/30 = 2r − 10, où r est le rayon du diaphragme de champ. Il est positif si r > 5 mm. Pas besoin que r dépasse le rayon de la pupille (10 mm) : comme le plan des champs est deux fois plus loin que le diaphragme, la droite se resserre vite.",
    indice: "Écris le rayon de pleine lumière en fonction de r, puis cherche quand il devient nul."
  },
  {
    id: "U42-113", difficulte: "facile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    type: "calcul",
    question: "Dans l'espace d'étude : pupille de rayon 6 mm en x = 0, diaphragme de champ de rayon 3 mm en x = 15 mm, plan des champs en x = 50 mm. Calcule le rayon du champ moyen (droite passant par le centre de la pupille et le bord du diaphragme de champ).",
    reponse: { valeur: 10, unite: "mm", decimales: 0, signe: false },
    explication: "La droite passe par (0 ; 0) et (15 ; 3).\nPente = [[3|15]] = 0,2\nEn x = 50 : 0,2 × 50 = 10 mm. Le rayon de la pupille n'intervient pas pour le champ moyen.",
    indice: "Droite du centre de la pupille au bord du diaphragme de champ, prolongée jusqu'au plan des champs."
  },

  // ---------- EN PLUS, lot 2 ----------

  // Champs et diaphragmes
  {
    id: "U42-114", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", entrainement: true,
    question: "Pupille de rayon 12 mm en x = 0, diaphragme de champ de rayon 7 mm en x = 20 mm, plan des champs en x = 40 mm : le champ de pleine lumière vaut 2 mm. On ferme l'objectif et la pupille passe à 8 mm de rayon, le reste ne bouge pas. Que devient le champ de pleine lumière ?",
    choix: ["Il passe de 2 mm à 6 mm", "Il reste égal à 2 mm", "Il passe de 2 mm à 1,3 mm", "Il passe de 2 mm à 0 mm"],
    bonne: 0,
    explication: "Nouvelle droite par (0 ; 8) et (20 ; 7) : pente = −1/20 = −0,05. En x = 40 : 8 − 0,05 × 40 = 6 mm. Fermer la pupille réduit le vignettage : le champ de pleine lumière grandit (au prix de moins de lumière). Il ne reste pas fixe, car la droite appuyée sur le bord de la pupille change. 1,3 mm viendrait d'un calcul proportionnel à la pupille (2 × 8/12).",
    indice: "Refais le calcul de la droite par les bords du même côté avec la nouvelle pupille, puis compare."
  },

  // Ouverture et résolution
  {
    id: "U42-115", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    question: "Un objectif a une pupille d'entrée de diamètre D = 2,5 mm. Pour λ = 500 nm, quelle est la limite de résolution angulaire due à la diffraction (α = 1,22 λ / D) ?",
    choix: ["2,44 × 10⁻⁴ rad", "2,0 × 10⁻⁴ rad", "2,44 × 10⁻⁷ rad", "4,88 × 10⁻⁴ rad"],
    bonne: 0,
    explication: "α = 1,22 × 500 × 10⁻⁹ / 2,5 × 10⁻³ = 2,44 × 10⁻⁴ rad. 2,0 × 10⁻⁴ oublie le facteur 1,22. 2,44 × 10⁻⁷ vient d'une erreur d'unité sur D (mm pris pour des mètres). 4,88 × 10⁻⁴ utilise le rayon à la place du diamètre.",
    indice: "Convertis λ et D en mètres avant de diviser. D est le diamètre de la pupille, pas son rayon."
  },
  {
    id: "U42-116", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un microscope a un objectif d'ouverture numérique ON = 0,85. Pour λ = 510 nm, la plus petite distance séparable vaut d = 0,61 λ / ON. Calcule d.",
    reponse: { valeur: 366, unite: "nm", decimales: 0, signe: false },
    explication: "d = [[0,61 × λ|ON]]\nd = [[0,61 × 510|0,85]] = [[311,1|0,85]] = 366 nm\nOn garde la même unité que λ : nanomètres, soit 0,37 µm.",
    indice: "Garde λ en nanomètres : le résultat sort dans la même unité."
  },
  {
    id: "U42-117", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    question: "Un objectif est ouvert à f/16 (N = 16). Pour λ = 550 nm, quel est le diamètre du disque d'Airy sur le capteur (2,44 λ N) ?",
    choix: ["21,5 µm", "10,7 µm", "8,8 µm", "43 µm"],
    bonne: 0,
    explication: "Diamètre = 2,44 × 0,55 µm × 16 = 21,5 µm. 10,7 µm est le rayon du disque (1,22 λ N). 8,8 µm est λ × N, sans le facteur 2,44. 43 µm double encore le résultat.",
    indice: "Le disque d'Airy mesure 2,44 λ N de diamètre : pas 1,22, qui est le rayon."
  },
  {
    id: "U42-118", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un objectif de pupille D = 5 mm observe une scène à 25 m, en lumière de 500 nm. Quel est le plus petit écart séparable à cette distance, limité par la diffraction ? Donne la réponse à 0,01 mm près.",
    reponse: { valeur: 3.05, unite: "mm", decimales: 2, signe: false },
    explication: "α = [[1,22 × λ|D]] = [[1,22 × 500 × 10⁻⁹|5 × 10⁻³]] = 1,22 × 10⁻⁴ rad\nÀ 25 m : écart = α × L = 1,22 × 10⁻⁴ × 25 = 3,05 × 10⁻³ m = 3,05 mm.",
    indice: "Calcule d'abord l'angle limite, puis multiplie-le par la distance (petits angles)."
  },
  {
    id: "U42-119", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    question: "On passe d'un réglage f/4 à f/8 sur le même objectif, pour la même longueur d'onde. Que devient le diamètre du disque d'Airy sur le capteur ?",
    choix: ["Il double", "Il est divisé par 2", "Il reste le même", "Il est multiplié par 4"],
    bonne: 0,
    explication: "Le diamètre du disque d'Airy vaut 2,44 λ N : il est proportionnel au nombre d'ouverture. Passer de N = 4 à N = 8 le double. Fermer le diaphragme dégrade donc la résolution due à la diffraction, même si cela améliore d'autres défauts. ×4 serait la variation de la surface du disque, pas de son diamètre.",
    indice: "Écris la formule du diamètre en fonction de N et regarde comment il dépend de N."
  },
  {
    id: "U42-120", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un objectif de microscope à immersion à huile (indice 1,5) accepte des rayons jusqu'à un demi-angle de 60° par rapport à l'axe. Calcule son ouverture numérique ON = n sin u, à 0,01 près.",
    reponse: { valeur: 1.3, unite: "", decimales: 2, signe: false },
    explication: "ON = n × sin u = 1,5 × sin 60° = 1,5 × 0,866 = 1,30. Une ouverture numérique supérieure à 1 n'est possible qu'avec une immersion : dans l'air, elle ne dépasse jamais 1.",
    indice: "Utilise ta calculatrice en degrés pour sin 60°, puis multiplie par l'indice."
  },

  // Transmission et antireflet
  {
    id: "U42-121", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un verre non traité d'indice 1,74 est entouré d'air (on néglige l'absorption). Chaque face réfléchit R = ((n − 1)/(n + 1))². Quelle part de la lumière traverse le verre (les deux faces), en pourcentage arrondi à l'unité ?",
    reponse: { valeur: 86, unite: "%", decimales: 0, signe: false },
    explication: "R = ([[n − 1|n + 1]])² = ([[0,74|2,74]])² = 0,0729, soit 7,3 % par face\nTransmission d'une face : 0,927. Deux faces : 0,927² = 0,859, soit 86 %.\nPiège : retirer 7,3 % une seule fois (92,7 %) oublie la seconde face.",
    indice: "Calcule R pour une face, puis la transmission 1 − R, puis élève au carré pour deux faces."
  },
  {
    id: "U42-122", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    question: "Un verre traité antireflet a été optimisé pour le milieu du spectre visible (vert, vers 550 nm). Il garde pourtant un reflet résiduel de couleur pourpre. Pourquoi ?",
    choix: [
      "Le vert est le mieux éliminé : il reste surtout le rouge et le bleu, dont le mélange paraît pourpre",
      "Le traitement ajoute un colorant pourpre dans le verre",
      "Le pourpre est la couleur du reflet du verre nu",
      "Le traitement ne marche que pour le pourpre"
    ],
    bonne: 0,
    explication: "L'épaisseur λ/(4n) n'est exacte que pour une longueur d'onde. Le vert est presque entièrement supprimé, les extrémités du spectre (rouge, bleu-violet) le sont moins bien : la lumière réfléchie résiduelle est un mélange de ces deux couleurs, d'où le reflet pourpre ou violet.",
    indice: "Une couche d'épaisseur donnée n'élimine parfaitement qu'une seule longueur d'onde. Laquelle reste le plus ?"
  },
  {
    id: "U42-123", difficulte: "difficile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une couche antireflet d'indice 1,25 est optimisée pour λ = 600 nm. Épaisseur minimale : e = λ / (4n) = 120 nm. Quelle est l'épaisseur suivante (la deuxième plus petite) qui convient aussi ?",
    reponse: { valeur: 360, unite: "nm", decimales: 0, signe: false },
    explication: "Condition : e = (2k + 1) × [[λ|4n]]\nk = 0 : e = [[600|4 × 1,25]] = 120 nm\nk = 1 : e = 3 × 120 = 360 nm\nCe n'est pas 240 nm ([[λ|2n]]) : cette épaisseur annule l'effet de la couche.",
    indice: "Les épaisseurs qui conviennent sont des multiples impairs de [[λ|4n]]."
  },
  {
    id: "U42-124", difficulte: "difficile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    question: "Une couche d'indice intermédiaire est optimisée pour une longueur d'onde λ avec l'épaisseur λ/(4n). Si on la fabrique par erreur avec l'épaisseur λ/(2n), que se passe-t-il pour cette longueur d'onde ?",
    choix: [
      "Le traitement est sans effet : on retrouve la réflexion du verre nu",
      "Les reflets disparaissent complètement",
      "Le reflet est doublé",
      "Rien ne change, le traitement marche toujours"
    ],
    bonne: 0,
    explication: "Avec e = λ/(2n), la différence de marche aller-retour dans la couche vaut une longueur d'onde entière : les deux ondes réfléchies se retrouvent comme si la couche n'existait pas. La réflexion est celle du verre nu. L'effet antireflet demande un quart d'onde, qui donne une demi-longueur d'onde de retard.",
    indice: "Calcule la différence de marche 2ne pour e = λ/(2n) et compare à la condition de destruction."
  },
  {
    id: "U42-125", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un viseur compte 4 lentilles, toutes traitées antireflet : chaque face laisse passer 99 % de la lumière. Quelle est sa transmission totale, en pourcentage arrondi à l'unité ?",
    reponse: { valeur: 92, unite: "%", decimales: 0, signe: false },
    explication: "4 lentilles ont 8 faces : T = 0,99⁸ = 0,923, soit 92 %. Piège : compter 4 faces donne 96 %. Sans traitement (96 % par face) on tomberait à 0,96⁸ = 72 %.",
    indice: "Compte les faces, pas les lentilles : chaque lentille en a deux."
  },
  {
    id: "U42-126", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", entrainement: true,
    question: "Deux verres non traités, d'indices 1,5 et 1,9, sont entourés d'air (R = ((n − 1)/(n + 1))² par face). Quelle part de la lumière est perdue par réflexion sur les deux faces, environ ?",
    choix: ["8 % et 18 %", "4 % et 10 %", "8 % et 9,6 %", "16 % et 36 %"],
    bonne: 0,
    explication: "n = 1,5 : R = 4 % par face, T = 0,96² = 0,92, perte ≈ 8 %. n = 1,9 : R = 9,6 % par face, T = 0,904² = 0,817, perte ≈ 18 %. Un verre à indice élevé réfléchit beaucoup plus : le traitement antireflet est alors encore plus utile. 4 % et 10 % ne comptent qu'une face. 16 % et 36 % doublent à tort.",
    indice: "Calcule R de chaque verre, puis la transmission des deux faces : (1 − R)²."
  },

  // Interférences et réseaux
  {
    id: "U42-127", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    type: "calcul",
    question: "Fentes d'Young distantes de a = 0,4 mm, écran à D = 2 m, lumière de λ = 600 nm. Calcule l'interfrange i = λ D / a.",
    reponse: { valeur: 3, unite: "mm", decimales: 0, signe: false },
    explication: "i = [[λ × D|a]]\ni = [[600 × 10⁻⁹ × 2|0,4 × 10⁻³]] = 3 × 10⁻³ m = 3 mm\nPiège : garder λ en nm et a en mm sans convertir donne 3 000 au lieu de 0,003 m, un résultat faux d'un facteur un million.",
    indice: "Convertis tout en mètres avant de calculer."
  },
  {
    id: "U42-128", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    question: "Dans l'air, un montage de fentes d'Young donne un interfrange de 3 mm. On remplit tout le dispositif d'eau (n = 1,33). Que devient l'interfrange ?",
    choix: ["2,26 mm", "4 mm", "3 mm", "1,70 mm"],
    bonne: 0,
    explication: "Dans l'eau, la longueur d'onde est divisée par n : λ' = λ / 1,33. L'interfrange est proportionnel à λ, donc i' = 3 / 1,33 ≈ 2,26 mm. 4 mm multiplie par 1,33 au lieu de diviser. 1,70 mm divise par 1,33 deux fois.",
    indice: "Dans un milieu d'indice n, la longueur d'onde est divisée par n."
  },
  {
    id: "U42-129", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un réseau a 600 traits par mm. Éclairé en incidence normale par une lumière de 500 nm, combien de faisceaux émergent au total (ordre 0 compris, ordres positifs et négatifs) ?",
    reponse: { valeur: 7, unite: "", decimales: 0, signe: false },
    explication: "Pas a = [[1|600]] mm = 1,667 µm\nUn ordre k existe si sin i' = [[k × λ|a]] ≤ 1, donc k ≤ [[a|λ]] = [[1,667|0,5]] = 3,33\nOrdres possibles : −3, −2, −1, 0, 1, 2, 3, soit 7 faisceaux. Piège : répondre 3 oublie les ordres négatifs et l'ordre 0.",
    indice: "Cherche l'ordre maximal k tel que sin i' ne dépasse pas 1. Compte ensuite les deux côtés."
  },
  {
    id: "U42-130", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un réseau de 500 traits par mm, en incidence normale, étale la lumière blanche. À l'ordre 1, de quel angle sont écartées la lumière de 400 nm et celle de 600 nm ? Donne l'écart en degrés, à 0,1° près.",
    reponse: { valeur: 5.9, unite: "°", decimales: 1, signe: false },
    explication: "Pas a = 2 µm. Ordre 1 : sin i' = [[k × λ|a]]\n400 nm : sin i' = [[0,4|2]] = 0,2, soit 11,54°\n600 nm : sin i' = [[0,6|2]] = 0,3, soit 17,46°\nÉcart = 17,46 − 11,54 = 5,9°. Il faut calculer les deux angles puis soustraire, et non soustraire d'abord les longueurs d'onde.",
    indice: "Calcule l'angle de chaque couleur avec a sin i' = λ, puis fais la différence."
  },
  {
    id: "U42-131", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", entrainement: true,
    question: "Un réseau étale la lumière blanche à l'ordre 1. Quelle couleur est la plus déviée, et en quoi est-ce différent d'un prisme ?",
    choix: [
      "Le rouge est le plus dévié, alors que le prisme dévie le plus le violet",
      "Le violet est le plus dévié, comme avec un prisme",
      "Toutes les couleurs sont déviées pareillement",
      "Le vert est le plus dévié, au centre du spectre"
    ],
    bonne: 0,
    explication: "Pour un réseau, sin i' = kλ/a : plus λ est grand, plus l'angle est grand, donc le rouge est le plus dévié. Dans un prisme, l'indice est plus grand pour le violet, qui est donc le plus dévié. Les deux spectres sont dans l'ordre inverse.",
    indice: "Dans la formule du réseau, l'angle augmente avec la longueur d'onde. Dans un prisme, c'est l'indice qui décide."
  },

  // Polarisation
  {
    id: "U42-132", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément", entrainement: true,
    question: "De la lumière naturelle traverse deux polariseurs parfaits croisés (directions à 90°) : il ne sort rien. On glisse un troisième polariseur parfait entre eux, orienté à 45° des deux. Quelle fraction de la lumière sort maintenant ?",
    choix: ["12,5 %", "0 %", "25 %", "6,25 %"],
    bonne: 0,
    explication: "Le 1er polariseur laisse passer 50 %. Le polariseur à 45° applique cos² 45° = 0,5 : il reste 25 %. Le dernier, à 45° du précédent, applique encore 0,5 : 12,5 %. Ajouter un élément qui absorbe pourtant fait passer de la lumière, car il tourne la polarisation. 0 % est le résultat sans le polariseur intermédiaire.",
    indice: "Applique la loi de Malus à chaque polariseur, avec l'angle par rapport au précédent. Commence par la moitié due à la lumière naturelle."
  },
  {
    id: "U42-133", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément", entrainement: true,
    type: "calcul",
    question: "La lumière arrive sur une plaque de verre d'indice 1,5 à l'angle de Brewster. Quel est alors l'angle du rayon réfracté, par rapport à la normale ? Donne-le en degrés, à 0,1° près.",
    reponse: { valeur: 33.7, unite: "°", decimales: 1, signe: false },
    explication: "tan iB = n = 1,5, donc iB = 56,3°. À cet angle, les rayons réfléchi et réfracté sont perpendiculaires : r = 90° − 56,3° = 33,7°. On peut le vérifier : sin 56,3° = 1,5 × sin 33,7°.",
    indice: "Trouve d'abord iB avec tan iB = n, puis utilise le fait que réfléchi et réfracté sont à 90° l'un de l'autre."
  },
  {
    id: "U42-134", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément", entrainement: true,
    question: "On veut supprimer le reflet du soleil sur une route mouillée avec des lunettes polarisantes. Le reflet est surtout polarisé horizontalement. Comment doit être orientée la direction de transmission du filtre ?",
    choix: ["Verticale", "Horizontale", "À 45°", "Peu importe"],
    bonne: 0,
    explication: "Le filtre arrête la lumière dont la polarisation est perpendiculaire à sa direction de transmission. Le reflet est polarisé horizontalement : le filtre doit donc laisser passer le vertical. Un filtre horizontal laisserait passer le reflet et bloquerait le reste. C'est pourquoi les verres polarisants ont toujours un axe vertical, et pourquoi on ne doit pas incliner la tête.",
    indice: "On veut éteindre la polarisation du reflet : le filtre doit être perpendiculaire à elle."
  },
  {
    id: "U42-135", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une lumière polarisée rectilignement traverse un analyseur parfait. Pour quel angle entre sa polarisation et l'analyseur ne laisse-t-il passer que 20 % de l'intensité ? Donne l'angle en degrés, à 0,1° près.",
    reponse: { valeur: 63.4, unite: "°", decimales: 1, signe: false },
    explication: "Loi de Malus : [[I|I0]] = cos² θ = 0,2\ncos θ = √0,2 = 0,447, donc θ = 63,4°\nPiège : prendre cos θ = 0,2 donnerait 78,5°.",
    indice: "Résous cos² θ = 0,2 : prends d'abord la racine carrée."
  },

  // Photométrie
  {
    id: "U42-136", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une source ponctuelle d'intensité 500 cd éclaire, à 2 m, un plan dont la normale fait 60° avec la direction de la lumière. Calcule l'éclairement, avec E = I cos θ / d².",
    reponse: { valeur: 62.5, unite: "lx", decimales: 1, signe: false },
    explication: "E = [[I × cos θ|d²]] = [[500 × cos 60°|2²]] = [[500 × 0,5|4]] = 62,5 lx\nÀ incidence normale, on aurait 125 lx : l'inclinaison divise ici l'éclairement par 2.",
    indice: "L'angle est celui entre la normale du plan et les rayons. Ne l'oublie pas dans la formule."
  },
  {
    id: "U42-137", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément", entrainement: true,
    question: "Une source ponctuelle émet la même intensité de 100 cd dans toutes les directions. Quel est son flux lumineux total ?",
    choix: ["1 257 lm", "100 lm", "314 lm", "628 lm"],
    bonne: 0,
    explication: "L'intensité est un flux par angle solide (cd = lm/sr). L'espace entier fait 4π sr : Φ = 4π × 100 ≈ 1 257 lm. 100 lm oublie l'angle solide. 314 lm utilise π, et 628 lm utilise 2π (un demi-espace).",
    indice: "Intensité × angle solide. Quel est l'angle solide de tout l'espace autour d'un point ?"
  },
  {
    id: "U42-138", difficulte: "difficile", epreuve: "U42", theme: "Photométrie", session: "complément", entrainement: true,
    type: "calcul",
    question: "Deux lampes ponctuelles de 100 cd et 400 cd sont alignées à 3 m l'une de l'autre. Entre elles, un point est éclairé à égalité par les deux (incidence normale pour les deux). À quelle distance de la lampe de 100 cd se trouve-t-il ?",
    reponse: { valeur: 1, unite: "m", decimales: 0, signe: false },
    explication: "E1 = E2 donne [[I1|d1²]] = [[I2|d2²]]\n[[d2|d1]] = √([[I2|I1]]) = √([[400|100]]) = 2\nAvec d1 + d2 = 3 m : d1 + 2 d1 = 3, donc d1 = 1 m (et d2 = 2 m). Le point d'égalité est plus près de la lampe la plus faible.",
    indice: "Égalise les deux éclairements en utilisant E = [[I|d²]], puis ajoute la condition d1 + d2 = 3 m."
  }

);
