// ==============================================================
//  QUESTIONS · Optique géométrique et physique (U42)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U42" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : calculatrice AUTORISÉE à l'U42 (mode examen ou type collège),
//  mais on garde des chiffres simples pour calculer vite.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Analyse des sujets : notes/analyse-U42.md
// ==============================================================

QUESTIONS.push(

  // ---------- Conjugaison (tombé 7 années sur 7) ----------
  {
    epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Une lentille mince convergente a une distance focale image f' = 50 mm. Un objet réel est placé à 75 mm devant elle (OA = −75 mm). Où se trouve l'image ?",
    choix: ["OA' = +150 mm (image réelle)", "OA' = +37,5 mm", "OA' = −150 mm (image virtuelle)", "OA' = +30 mm"],
    bonne: 0,
    explication: "Relation de Descartes : 1/OA' − 1/OA = 1/f'. Donc 1/OA' = 1/50 + 1/(−75) = 3/150 − 2/150 = 1/150, soit OA' = +150 mm. Positif = après la lentille = image réelle."
  },
  {
    epreuve: "U42", theme: "Conjugaison", session: "2025",
    question: "Un objectif assimilé à une lentille mince de f' = 20 mm donne d'un objet placé à OA = −25 mm une image à OA' = +100 mm. Quel est le grandissement transversal gy ?",
    choix: ["−0,25", "−4", "−5", "+4"],
    bonne: 1,
    explication: "gy = OA'/OA = 100 / (−25) = −4. L'image est 4 fois plus grande et renversée (signe −). C'est le calcul de l'objectif d'un microscope ou d'une télé-loupe."
  },
  {
    epreuve: "U42", theme: "Conjugaison", session: "2022",
    question: "Objectif photo de f' = 40 mm. L'objet est à 2 m avant le foyer objet : FA = −2 000 mm. Où se forme l'image par rapport au foyer image F' (formule de Newton) ?",
    choix: ["F'A' = +1,25 mm", "F'A' = −0,8 mm", "F'A' = +0,8 mm", "F'A' = +50 mm"],
    bonne: 2,
    explication: "Newton : FA × F'A' = −f'². Donc F'A' = −1 600 / (−2 000) = +0,8 mm. L'image est 0,8 mm après F' : il faut éloigner un peu le capteur du foyer pour faire la mise au point sur un objet proche."
  },
  {
    epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Un observateur emmétrope qui n'accommode pas regarde dans un instrument (objectif + oculaire). Où doit se trouver l'image intermédiaire donnée par l'objectif ?",
    choix: ["Au centre optique de l'oculaire", "À 25 cm de l'œil", "Au foyer image de l'objectif, toujours", "Dans le plan focal objet de l'oculaire"],
    bonne: 3,
    explication: "Emmétrope sans accommoder = il voit net à l'infini. L'image finale doit donc être à l'infini, et pour cela l'objet de l'oculaire (l'image intermédiaire) doit être dans son plan focal objet Foc. Cette phrase revient dans presque tous les sujets."
  },
  {
    epreuve: "U42", theme: "Conjugaison", session: "2018",
    question: "On veut tailler une lentille mince équiconvexe (deux faces de même rayon R) d'indice n = 1,5 et de distance focale f' = 100 mm. Quelle valeur de R ?",
    choix: ["100 mm", "150 mm", "200 mm", "50 mm"],
    bonne: 0,
    explication: "1/f' = (n − 1) × (1/R1 − 1/R2) avec R1 = +R et R2 = −R, donc 1/f' = (n − 1) × 2/R. D'où R = 2 × (n − 1) × f' = 2 × 0,5 × 100 = 100 mm."
  },

  // ---------- Loupe et microscope ----------
  {
    epreuve: "U42", theme: "Loupe et microscope", session: "2018",
    question: "Une loupe a une distance focale f' = 50 mm. Quel est son grossissement commercial Gc ?",
    choix: ["Gc = 2", "Gc = 5", "Gc = 12,5", "Gc = 20"],
    bonne: 1,
    explication: "Gc = P / 4, avec P la puissance (ici la vergence) en dioptries. P = 1 / 0,050 m = 20 δ, donc Gc = 20 / 4 = 5. Le 4 vient de la distance de référence 25 cm (1 / 0,25 = 4)."
  },
  {
    epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un fabricant annonce un oculaire « 8× » (grossissement commercial Gc = 8). Quelle est sa distance focale ?",
    choix: ["50 mm", "12,5 mm", "31,25 mm", "32 mm"],
    bonne: 2,
    explication: "Gc = P / 4 → P = 4 × 8 = 32 δ. f' = 1 / 32 = 0,03125 m = 31,25 mm. Piège : 32 est la puissance en dioptries, pas la focale."
  },
  {
    epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un microscope a un objectif de grandissement gy = −40 et un oculaire de grossissement commercial 10×. Quel est le grossissement commercial du microscope ?",
    choix: ["−4", "4 000", "50", "400"],
    bonne: 3,
    explication: "Gc microscope = |gy objectif| × Gc oculaire = 40 × 10 = 400. L'objectif agrandit l'objet en une image intermédiaire, l'oculaire joue le rôle de loupe sur cette image."
  },

  // ---------- Lunettes afocales ----------
  {
    epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Une lunette de Kepler a un objectif de f'ob = 120 mm et un oculaire de f'oc = 20 mm. Quel est son grossissement (en valeur absolue) ?",
    choix: ["6", "100", "140", "2,4"],
    bonne: 0,
    explication: "Pour une lunette afocale : G = f'ob / f'oc = 120 / 20 = 6. Avec Kepler (deux lentilles convergentes), l'image est renversée : G = −6, d'où le redresseur (prismes) sur les modèles terrestres."
  },
  {
    epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Même lunette de Kepler afocale (f'ob = 120 mm, f'oc = 20 mm). Quelle est la distance entre l'objectif et l'oculaire ?",
    choix: ["120 mm", "140 mm", "2 400 mm", "100 mm"],
    bonne: 1,
    explication: "Afocale = le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. La longueur vaut donc f'ob + f'oc = 120 + 20 = 140 mm."
  },
  {
    epreuve: "U42", theme: "Lunettes afocales", session: "2018",
    question: "Lunette de Galilée afocale : objectif convergent f'1 = 90 mm, oculaire divergent f'2 = −30 mm. Quelle distance entre les deux lentilles ?",
    choix: ["120 mm", "30 mm", "60 mm", "90 mm"],
    bonne: 2,
    explication: "Comme pour Kepler, F'1 = F2, donc O1O2 = f'1 + f'2 = 90 + (−30) = 60 mm. La Galilée est plus courte. G = −f'1/f'2 = 3, positif : l'image est droite, pas besoin de redresseur."
  },
  {
    epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Une cliente malvoyante a une acuité de loin de 2/10. On lui propose une lunette de grossissement 4×. Quelle acuité peut-elle espérer avec la lunette ?",
    choix: ["10/10", "2/10", "6/10", "8/10"],
    bonne: 3,
    explication: "En aide visuelle, on estime : AV avec l'instrument = AV du client × G = 2/10 × 4 = 8/10. Il faut ensuite comparer à l'acuité demandée par la tâche (lire un panneau, un prix…)."
  },
  {
    epreuve: "U42", theme: "Lunettes afocales", session: "2026",
    question: "Dans une lunette terrestre, un véhicule redresseur (lentille mince f'V = 15 mm) donne une image de même taille et renversée (gy = −1). De combien allonge-t-il la lunette ?",
    choix: ["60 mm", "15 mm", "30 mm", "45 mm"],
    bonne: 0,
    explication: "gy = −1 : l'objet est à 2f' avant la lentille (−30 mm) et l'image à 2f' après (+30 mm). L'image intermédiaire est donc déplacée de 30 + 30 = 60 mm, soit 4 × f'V."
  },

  // ---------- Doublets et achromatisme ----------
  {
    epreuve: "U42", theme: "Doublets et achromatisme", session: "2025",
    question: "Un oculaire est formé de deux lentilles minces convergentes de f'1 = f'2 = 40 mm, séparées de e = 30 mm. Quelle est sa distance focale image ?",
    choix: ["20 mm", "32 mm", "40 mm", "80 mm"],
    bonne: 1,
    explication: "Formule du doublet : f' = f'1 × f'2 / (f'1 + f'2 − e) = 40 × 40 / (40 + 40 − 30) = 1 600 / 50 = 32 mm. (Ou en vergences : V = V1 + V2 − e·V1·V2.)"
  },
  {
    epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un doublet a pour symbole (3 ; 2 ; 1) avec a = 10 mm. Quelle est sa distance focale image ?",
    choix: ["60 mm", "7,5 mm", "15 mm", "20 mm"],
    bonne: 2,
    explication: "Symbole (m ; n ; p) : f'1 = m·a = 30 mm, e = n·a = 20 mm, f'2 = p·a = 10 mm. f' = 30 × 10 / (30 + 10 − 20) = 300 / 20 = 15 mm."
  },
  {
    epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un téléobjectif associe une lentille convergente puis une divergente. Quel est son principal intérêt par rapport à une lentille unique de même focale ?",
    choix: ["Il supprime la diffraction", "Il redresse l'image", "Il donne une image plus lumineuse", "Il est plus court : la distance 1re lentille → foyer image est inférieure à la focale"],
    bonne: 3,
    explication: "Le plan principal image est rejeté en avant de la première lentille. On obtient une grande focale f' dans un tube nettement plus court que f' : c'est tout l'intérêt du téléobjectif, il est moins encombrant."
  },
  {
    epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "On veut un doublet achromatique accolé de vergence V = +2 δ, avec un verre de nombre d'Abbe ν1 = 60 et un verre ν2 = 30. Quelles vergences V1 et V2 ?",
    choix: ["V1 = +4 δ ; V2 = −2 δ", "V1 = −2 δ ; V2 = +4 δ", "V1 = +3 δ ; V2 = −1 δ", "V1 = +1 δ ; V2 = +1 δ"],
    bonne: 0,
    explication: "Deux conditions : V1 + V2 = 2 et V1/ν1 + V2/ν2 = 0 (achromatisme). V1/60 = −V2/30 → V1 = −2·V2. Donc −2V2 + V2 = 2 → V2 = −2 δ et V1 = +4 δ. La lentille convergente est dans le verre le moins dispersif (ν le plus grand)."
  },
  {
    epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "Un verre a les indices nd = 1,500, nF = 1,505 et nC = 1,497. Quel est son nombre d'Abbe ?",
    choix: ["0,008", "62,5", "100", "187,5"],
    bonne: 1,
    explication: "ν = (nd − 1) / (nF − nC) = 0,500 / 0,008 = 62,5. Plus ν est grand, moins le verre disperse les couleurs. Un verre « ED » (Extra low Dispersion) a un ν très élevé (souvent > 80)."
  },

  // ---------- Champs et diaphragmes (tombé 7 années sur 7) ----------
  {
    epreuve: "U42", theme: "Champs et diaphragmes", session: "2022",
    question: "Qu'appelle-t-on la pupille d'entrée d'un système optique ?",
    choix: ["La pupille de l'œil de l'observateur", "La première lentille du système", "L'image du diaphragme d'ouverture par la partie du système placée avant lui", "L'image du diaphragme de champ par tout le système"],
    bonne: 2,
    explication: "La pupille d'entrée est l'image du diaphragme d'ouverture « vue depuis l'objet », à travers les lentilles qui le précèdent. La pupille de sortie est son image par les lentilles qui le suivent."
  },
  {
    epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Dans l'espace d'étude : pupille de rayon 6 mm en x = 0, diaphragme de champ de rayon 4 mm en x = 20 mm, plan des champs en x = 40 mm. Rayon du champ de pleine lumière ?",
    choix: ["4 mm", "8 mm", "14 mm", "2 mm"],
    bonne: 3,
    explication: "Pleine lumière : droite passant par les bords DU MÊME CÔTÉ de la pupille (0 ; 6) et du diaphragme (20 ; 4). Pente = (4 − 6)/20 = −0,1. En x = 40 : r = 6 − 0,1 × 40 = 2 mm. (Champ moyen, par le centre de la pupille : 8 mm ; champ total, bords opposés : 14 mm.)"
  },
  {
    epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Un fabricant place un diaphragme dans le plan de l'image intermédiaire (plan des champs), avec un diamètre égal au champ de pleine lumière. À quoi sert-il ?",
    choix: ["À supprimer le champ de contour : bord du champ net, éclairement uniforme", "À réduire la diffraction", "À redresser l'image", "À augmenter la luminosité"],
    bonne: 0,
    explication: "Le champ de contour est la zone du bord où l'éclairement baisse progressivement (vignettage). Un diaphragme dans le plan des champs le coupe net : on ne voit que la zone de pleine lumière, avec un bord franc."
  },
  {
    epreuve: "U42", theme: "Champs et diaphragmes", session: "2026",
    question: "Un capteur photo mesure 24 × 36 mm. Le rayon du champ de pleine lumière image est 20 mm. Le capteur est-il éclairé uniformément ?",
    choix: ["Oui, car 20 mm > 18 mm (demi-largeur)", "Non, la demi-diagonale (≈ 21,6 mm) dépasse 20 mm : coins assombris", "Non, il faudrait 36 mm", "Oui, car 20 mm > 12 mm (demi-hauteur)"],
    bonne: 1,
    explication: "Il faut comparer la DEMI-DIAGONALE : √(24² + 36²) = √1 872 ≈ 43,3 mm, la moitié ≈ 21,6 mm. Comme 21,6 > 20 mm, les coins sortent du champ de pleine lumière : vignettage."
  },
  {
    epreuve: "U42", theme: "Champs et diaphragmes", session: "2023",
    question: "Une lunette a un objectif de f'ob = 60 mm. Dans son plan focal, le champ de pleine lumière a un rayon de 3 mm. Quelle largeur de champ voit-on sur un panneau à 20 m ?",
    choix: ["0,5 m", "1 m", "2 m", "4 m"],
    bonne: 2,
    explication: "Demi-champ angulaire : tan ω = 3 / 60 = 0,05. À 20 m, demi-largeur = 20 × 0,05 = 1 m, donc largeur totale 2 × 1 = 2 m. Piège : ne pas oublier de doubler."
  },

  // ---------- Ouverture et résolution ----------
  {
    epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un téléobjectif de focale 200 mm est ouvert à f/4 (nombre d'ouverture N = 4). Quel est le diamètre de sa pupille d'entrée ?",
    choix: ["800 mm", "4 mm", "25 mm", "50 mm"],
    bonne: 3,
    explication: "N = f' / D_PE → D_PE = 200 / 4 = 50 mm. Rappel : plus N est petit, plus la pupille est grande, plus il entre de lumière."
  },
  {
    epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Un objectif a une pupille d'entrée de 10 mm. Limite de résolution angulaire due à la diffraction pour λ = 500 nm ?",
    choix: ["6,1 × 10⁻⁵ rad", "1,2 × 10⁻⁴ rad", "6,1 × 10⁻² rad", "5,0 × 10⁻⁵ rad"],
    bonne: 0,
    explication: "α = 1,22 × λ / D = 1,22 × 500 × 10⁻⁹ / 10 × 10⁻³ = 1,22 × 5 × 10⁻⁵ = 6,1 × 10⁻⁵ rad. Piège : mettre λ et D dans la même unité (mètres)."
  },
  {
    epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Un horloger utilise une loupe de puissance P = 10 δ. Son œil sépare 3 × 10⁻⁴ rad. Quel est le plus petit détail qu'il peut distinguer sur l'objet ?",
    choix: ["3 µm", "30 µm", "300 µm", "3 mm"],
    bonne: 1,
    explication: "Puissance P = α' / y (angle de l'image en rad par taille de l'objet en m). Donc y = ε / P = 3 × 10⁻⁴ / 10 = 3 × 10⁻⁵ m = 30 µm."
  },
  {
    epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un appareil photo a des pixels de 5 µm et un objectif de focale 250 mm. Quelle est la limite de résolution angulaire due au capteur ?",
    choix: ["2 × 10⁻² rad", "1,25 × 10⁻³ rad", "2 × 10⁻⁵ rad", "5 × 10⁻⁶ rad"],
    bonne: 2,
    explication: "Au BTS, on admet que la limite due au capteur correspond à la taille d'un pixel vue depuis l'objectif : α = a' / f' = 5 × 10⁻⁶ / 0,250 = 2 × 10⁻⁵ rad. Si la diffraction donne une limite plus petite (ex. 1 × 10⁻⁵ rad), c'est le capteur qui limite : c'est toujours la plus grande des deux limites qui l'emporte."
  },
  {
    epreuve: "U42", theme: "Ouverture et résolution", session: "2019",
    question: "Avec un instrument, le plus petit détail séparable vaut 8 µm à cause de la diffraction et 12 µm à cause de l'œil. Peut-on séparer deux traits distants de 10 µm ?",
    choix: ["Non, c'est la diffraction qui limite à 8 µm", "Oui, car 10 µm > 8 µm", "Oui, en moyenne la limite est 10 µm", "Non, c'est l'œil qui limite à 12 µm"],
    bonne: 3,
    explication: "La limite de l'ensemble est la PLUS GRANDE des deux : ici l'œil (12 µm). 10 µm < 12 µm, donc les deux traits ne sont pas séparés."
  },

  // ---------- Transmission et antireflet ----------
  {
    epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Quel pourcentage de lumière est réfléchi par un dioptre air / verre d'indice 1,5 en incidence normale ?",
    choix: ["4 %", "8 %", "20 %", "1,5 %"],
    bonne: 0,
    explication: "R = ((n − 1)/(n + 1))² = (0,5 / 2,5)² = 0,2² = 0,04, soit 4 %. Le dioptre transmet donc T = 1 − R = 96 %."
  },
  {
    epreuve: "U42", theme: "Transmission et antireflet", session: "2024",
    question: "Une lunette compte 3 lentilles non traitées dans l'air (T = 0,96 par dioptre). Quelle est sa transmission totale ?",
    choix: ["88 %", "78 %", "76 %", "96 %"],
    bonne: 1,
    explication: "3 lentilles = 6 dioptres. T totale = 0,96⁶ ≈ 0,78, soit 78 %. Piège : ce n'est pas 1 − 6 × 0,04 = 76 %, on multiplie les transmissions."
  },
  {
    epreuve: "U42", theme: "Transmission et antireflet", session: "2024",
    question: "Quel est le principe d'un traitement antireflet monocouche ?",
    choix: ["Augmenter l'indice du verre", "Absorber la lumière réfléchie", "Faire interférer de façon destructive les deux ondes réfléchies (sur la couche et sur le verre)", "Polariser la lumière réfléchie"],
    bonne: 2,
    explication: "Les ondes réfléchies sur la face avant de la couche et sur le verre doivent être en opposition de phase (différence de marche λ/2) et de même intensité. Elles s'annulent : la lumière n'est plus réfléchie, elle est transmise."
  },
  {
    epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Pour un verre d'indice 1,69, quel est l'indice théorique idéal de la couche antireflet ?",
    choix: ["1,50", "1,69", "0,845", "1,30"],
    bonne: 3,
    explication: "Pour que les deux réflexions aient la même intensité : n_ar = √n_verre = √1,69 = 1,30."
  },
  {
    epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Une couche antireflet d'indice 1,30 est optimisée pour λ = 520 nm. Quelle est son épaisseur minimale ?",
    choix: ["100 nm", "130 nm", "200 nm", "400 nm"],
    bonne: 0,
    explication: "Aller-retour dans la couche = 2·n·e = λ/2, donc e = λ / (4·n_ar) = 520 / (4 × 1,30) = 520 / 5,2 = 100 nm. Utiliser l'indice de la COUCHE, pas celui du verre."
  },

  // ---------- Interférences et réseaux ----------
  {
    epreuve: "U42", theme: "Interférences et réseaux", session: "2025",
    question: "Une lame mince d'indice 1,5 est éclairée en réflexion sous incidence nulle (δ = 2ne + λ/2). Épaisseur minimale pour renforcer au maximum λ = 600 nm ?",
    choix: ["50 nm", "100 nm", "200 nm", "400 nm"],
    bonne: 1,
    explication: "Maximum si δ = kλ : 2ne + λ/2 = λ (k = 1) → 2ne = λ/2 → e = λ / (4n) = 600 / 6 = 100 nm. C'est ce qui donne les couleurs irisées des ailes de papillon ou des bulles de savon."
  },
  {
    epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Un réseau a 500 traits par mm. Éclairé en incidence normale, à quel angle voit-on la lumière de 600 nm dans l'ordre 1 ?",
    choix: ["0,3°", "8,6°", "17,5°", "36,9°"],
    bonne: 2,
    explication: "Pas a = 1/500 mm = 2 µm. Formule des réseaux : a × sin i' = k × λ → sin i' = 0,6 / 2 = 0,3 → i' ≈ 17,5°. (36,9° serait l'ordre 2.)"
  },
  {
    epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Réseau de pas a = 2 µm, lumière blanche de 400 à 800 nm, incidence normale. Quel est l'ordre le plus élevé où le spectre est encore complet ?",
    choix: ["4", "5", "1", "2"],
    bonne: 3,
    explication: "Il faut sin i' = kλ/a ≤ 1 pour TOUTES les couleurs, donc pour le rouge : k ≤ a / λ rouge = 2 / 0,8 = 2,5. L'ordre complet le plus élevé est k = 2."
  },

  // ---------- Polarisation ----------
  {
    epreuve: "U42", theme: "Polarisation", session: "2019",
    question: "Lumière naturelle à travers deux polariseurs parfaits dont les directions font 60°. Quelle fraction de la lumière sort ?",
    choix: ["12,5 %", "6,25 %", "50 %", "25 %"],
    bonne: 0,
    explication: "Le 1er polariseur laisse passer la moitié de la lumière naturelle : 50 %. Puis loi de Malus : × cos²60° = × 0,25. Total = 0,5 × 0,25 = 0,125, soit 12,5 %."
  },
  {
    epreuve: "U42", theme: "Polarisation", session: "2022",
    question: "Pour quel angle d'incidence la lumière réfléchie par une vitrine d'indice 1,5 est-elle totalement polarisée (angle de Brewster) ?",
    choix: ["41,8°", "56,3°", "60°", "33,7°"],
    bonne: 1,
    explication: "tan iB = n = 1,5 → iB ≈ 56,3°. À cet angle, rayons réfléchi et réfracté sont perpendiculaires (i + r = 90°). Un filtre polarisant bien orienté éteint alors le reflet. (41,8° est l'angle limite de réflexion totale, un autre phénomène.)"
  },

  // ---------- Photométrie ----------
  {
    epreuve: "U42", theme: "Photométrie", session: "2024",
    question: "Une lampe de travail donne 8 000 lx à 25 cm (incidence normale). Quel éclairement donne-t-elle à 50 cm ?",
    choix: ["16 000 lx", "1 000 lx", "2 000 lx", "4 000 lx"],
    bonne: 2,
    explication: "Loi de Bouguer : E = I / d². I = 8 000 × 0,25² = 500 cd. À 0,5 m : E = 500 / 0,25 = 2 000 lx. Distance × 2 → éclairement ÷ 4."
  },
  {
    epreuve: "U42", theme: "Photométrie", session: "2022",
    question: "On ajoute un filtre polarisant qui transmet 25 % de la lumière. Sans filtre, le temps de pose était 1/200 s. Quel temps de pose garde la même exposition ?",
    choix: ["1/800 s", "1/200 s", "1/100 s", "1/50 s"],
    bonne: 3,
    explication: "Exposition = E × t constante. Avec le filtre, E2 = 0,25 × E1, donc t2 = t1 / 0,25 = 4 × t1 = 4/200 = 1/50 s. Le temps de pose augmente."
  }

);
