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
//    indice, schema, schemaTexte… : facultatifs (voir .claude/guide-schemas-indices.md)
//    type: "calcul" + reponse : question où l'élève tape la valeur (pas de choix ni de bonne)
//    cas, etape, contexte : seulement pour les questions du mini-sujet
//                  (déclaré par CAS.push tout en bas du fichier)
//
//  Règles : calculatrice AUTORISÉE à l'U42 (mode examen ou type collège),
//  mais on garde des chiffres simples pour calculer vite.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Analyse des sujets : notes/analyse-U42.md
// ==============================================================

QUESTIONS.push(

  // ---------- Conjugaison (tombé 8 années sur 8) ----------
  {
    id: "U42-001", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Une lentille mince convergente a une distance focale image f' = 50 mm. Un objet réel est placé à 75 mm devant elle (OA = −75 mm). Où se trouve l'image ?",
    choix: ["OA' = +150 mm (image réelle)", "OA' = +37,5 mm", "OA' = −150 mm (image virtuelle)", "OA' = +30 mm"],
    bonne: 0,
    explication: "Relation de Descartes :\n[[1|OA']] − [[1|OA]] = [[1|f']]\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|50]] + [[1|−75]]\n[[1|OA']] = [[3|150]] − [[2|150]] = [[1|150]]\nSoit OA' = +150 mm. Positif = après la lentille = image réelle.",
    indice: "Un objet réel placé avant la lentille a un OA négatif. Utilise la relation de conjugaison de Descartes, en gardant bien les signes.",
    schema: "img/schemas/U42/conjugaison-f50-objet75.svg",
    schemaTexte: "Tracé des trois rayons utiles : l'objet AB à 75 mm devant la lentille donne une image A'B' réelle, renversée et deux fois plus grande, à 150 mm derrière."
  },
  {
    id: "U42-002", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Lentille mince convergente, objet réel AB placé avant le foyer objet F. Quel tracé de l'image est juste ?",
    choix: ["Tracé juste : rayon parallèle par F', rayon par O non dévié", "Le rayon passant par O est dévié", "Le rayon parallèle ressort comme avec une lentille divergente", "Les rayons sont justes mais l'image est placée au foyer F'"],
    choixSchemas: ["img/schemas/U42/trace-juste.svg", "img/schemas/U42/trace-faux-centre-devie.svg", "img/schemas/U42/trace-faux-divergent.svg", "img/schemas/U42/trace-faux-image-au-foyer.svg"],
    bonne: 0,
    explication: "Deux règles suffisent : un rayon parallèle à l'axe ressort en passant par le foyer image F', et un rayon qui passe par le centre optique O n'est pas dévié. L'image B' est là où ces rayons se croisent, ici après F', réelle et renversée. Les pièges : dévier le rayon qui passe par O, faire diverger le rayon parallèle (c'est le comportement d'une lentille divergente), ou poser l'image sur F' alors que les rayons ne s'y croisent pas.",
    indice: "Pour une lentille convergente, deux rayons particuliers suffisent : celui qui arrive parallèle à l'axe, et celui qui passe par le centre optique. Que devient chacun d'eux ?"
  },
  {
    id: "U42-003", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Lentille mince divergente (f' < 0), objet réel AB placé avant la lentille. Quel tracé de l'image est juste ?",
    choix: ["Le rayon parallèle converge vers F, comme avec une lentille convergente", "Les rayons sont justes mais l'image est placée réelle et renversée derrière la lentille", "Tracé juste : le rayon parallèle ressort en semblant venir de F', le rayon par O n'est pas dévié", "Le rayon passant par O est dévié"],
    choixSchemas: ["img/schemas/U42/trace-div-faux-converge.svg", "img/schemas/U42/trace-div-faux-image-reelle.svg", "img/schemas/U42/trace-div-juste.svg", "img/schemas/U42/trace-div-faux-centre-devie.svg"],
    bonne: 2,
    explication: "Pour une lentille divergente, le foyer image F' est AVANT la lentille. Un rayon parallèle à l'axe ressort en s'écartant, comme s'il venait de F' : on prolonge ce rayon en pointillés vers l'arrière. Le rayon qui passe par O n'est pas dévié. L'image est au croisement du prolongement et de ce rayon : virtuelle, droite, plus petite que l'objet, entre F' et la lentille. Les pièges : faire converger le rayon vers F, placer l'image derrière la lentille, ou dévier le rayon qui passe par O.",
    indice: "Pour une divergente, le foyer image F' est du côté de l'objet. Le rayon parallèle ressort en s'écartant de l'axe : d'où semble-t-il venir ? Et le rayon qui passe par O ?"
  },
  {
    id: "U42-004", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2025",
    question: "Un objectif assimilé à une lentille mince de f' = 20 mm donne d'un objet placé à OA = −25 mm une image à OA' = +100 mm. Quel est le grandissement transversal gy ?",
    choix: ["−0,25", "−4", "−5", "+4"],
    bonne: 1,
    explication: "gy = OA'/OA = 100 / (−25) = −4. L'image est 4 fois plus grande et renversée (signe −). C'est le calcul de l'objectif d'un microscope ou d'une télé-loupe.",
    indice: "Le grandissement transversal compare la position de l'image à celle de l'objet, par rapport au centre O. Garde bien les signes : son signe dit si l'image est droite ou renversée."
  },
  {
    id: "U42-005", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2022",
    question: "Objectif photo de f' = 50 mm. L'objet est à 2,5 m avant le foyer objet : FA = −2 500 mm. Où se forme l'image par rapport au foyer image F' (formule de Newton) ?",
    choix: ["F'A' = +2,5 mm", "F'A' = −1,0 mm", "F'A' = +1,0 mm", "F'A' = +50 mm"],
    bonne: 2,
    explication: "Newton : FA × F'A' = −f'². Donc F'A' = −2 500 / (−2 500) = +1,0 mm. L'image est 1 mm après F' : il faut éloigner un peu le capteur du foyer pour faire la mise au point sur un objet proche.",
    indice: "La formule de Newton mesure les distances à partir des foyers : FA côté objet, F'A' côté image. Elle fait intervenir le carré de la focale, avec un signe moins."
  },
  {
    id: "U42-006", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Un observateur emmétrope qui n'accommode pas regarde dans un instrument (objectif + oculaire). Où doit se trouver l'image intermédiaire donnée par l'objectif ?",
    choix: ["Au centre optique de l'oculaire", "À 25 cm de l'œil", "Au foyer image de l'objectif, toujours", "Dans le plan focal objet de l'oculaire"],
    bonne: 3,
    explication: "Emmétrope sans accommoder = il voit net à l'infini. L'image finale doit donc être à l'infini, et pour cela l'objet de l'oculaire (l'image intermédiaire) doit être dans son plan focal objet Foc. Cette phrase revient dans presque tous les sujets.",
    indice: "Un emmétrope qui n'accommode pas voit net à l'infini. Où doit être un objet pour que l'oculaire en donne une image à l'infini ?"
  },
  {
    id: "U42-007", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "2018",
    question: "On veut tailler une lentille mince équiconvexe (deux faces de même rayon R) d'indice n = 1,5 et de distance focale f' = 100 mm. Quelle valeur de R ?",
    choix: ["100 mm", "150 mm", "200 mm", "50 mm"],
    bonne: 0,
    explication: "1/f' = (n − 1) × (1/R1 − 1/R2) avec R1 = +R et R2 = −R, donc 1/f' = (n − 1) × 2/R. D'où R = 2 × (n − 1) × f' = 2 × 0,5 × 100 = 100 mm.",
    indice: "Utilise la formule des opticiens 1/f' = (n − 1)(1/R1 − 1/R2). Pour une lentille équiconvexe, attention au signe de R2 : la deuxième face est bombée dans l'autre sens."
  },
  {
    id: "U42-043", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2021 et 2024",
    question: "Consigne du sujet : « Montrer que l'image se forme à 60 mm après la lentille. » Lentille mince convergente de f' = +20 mm, objet réel placé à 30 mm devant elle. Quelle démarche est juste ?",
    choix: [
      "OA = +30 mm. Descartes : 1/OA' = 1/OA − 1/f' = 1/30 − 1/20 = −1/60. Donc l'image est à 60 mm de la lentille.",
      "D'après la relation de conjugaison de Descartes, on trouve directement OA' = +60 mm.",
      "Objet réel : OA = −30 mm. Descartes : 1/OA' = 1/f' + 1/OA = 1/20 − 1/30 = 1/60. Donc OA' = +60 mm : l'image est réelle, 60 mm après la lentille.",
      "Objet réel : OA = −30 mm. Descartes : 1/OA' − 1/OA = 1/f', donc 1/OA' = 1/20 − 1/30."
    ],
    bonne: 2,
    explication: "Dans un « Montrer que », la valeur est donnée : ce sont la méthode et la rédaction qui rapportent les points. Trois temps : la donnée avec son signe (objet réel, OA = −30 mm), la relation appliquée avec les chiffres (1/OA' = 1/20 − 1/30 = 1/60), la conclusion (OA' = +60 mm, image réelle). La copie qui part de OA = +30 mm trouve −1/60 puis écrit « 60 mm » : elle arrange le résultat, et le correcteur le voit. Citer Descartes sans calcul ne démontre rien. S'arrêter avant le résultat ne répond pas à la consigne.",
    indice: "Une démarche complète tient en trois temps : la donnée avec son signe, la relation appliquée avec les chiffres, puis une phrase de conclusion."
  },
  {
    id: "U42-044", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Copie d'un élève : « Lentille divergente de distance focale 40 mm, objet réel à 40 mm devant elle, donc OA = −40 mm. Descartes : 1/OA' = 1/40 − 1/40 = 0. L'image est à l'infini. » Où est l'erreur ?",
    choix: [
      "OA devrait être positif, puisque l'objet est réel",
      "Il n'y a pas d'erreur : un objet placé à la distance focale donne une image à l'infini",
      "La relation de Descartes ne s'applique pas à une lentille divergente",
      "Pour une divergente, f' = −40 mm : 1/OA' = −1/40 − 1/40, donc OA' = −20 mm"
    ],
    bonne: 3,
    explication: "Une lentille divergente a une distance focale image négative : f' = −40 mm. Alors 1/OA' = 1/f' + 1/OA = −1/40 − 1/40 = −1/20, donc OA' = −20 mm. L'image est virtuelle, droite et deux fois plus petite, entre l'objet et la lentille. L'objet n'est pas au foyer objet : pour une divergente, F est de l'autre côté, après la lentille. Avec une lentille divergente, un objet réel donne toujours une image virtuelle.",
    indice: "Relis la copie signe par signe. Quel est le signe de la distance focale image d'une lentille divergente ?"
  },
  {
    id: "U42-054", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2021 et 2024",
    type: "calcul",
    question: "Lentille mince convergente de f' = +40 mm. Un objet réel est placé à 60 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: 120, unite: "mm", decimales: 0, signe: true },
    explication: "Objet réel : OA = −60 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = [[1|40]] − [[1|60]]\n[[1|OA']] = [[3|120]] − [[2|120]] = [[1|120]]\nDonc OA' = +120 mm : l'image est réelle, 120 mm après la lentille.",
    indice: "Un objet réel placé devant la lentille a un OA négatif. Utilise la relation de conjugaison de Descartes, sans perdre les signes."
  },
  {
    id: "U42-055", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2024 et 2025",
    type: "calcul",
    question: "Un objectif donne d'un objet placé à OA = −36 mm une image à OA' = +180 mm. Calcule le grandissement transversal, avec son signe.",
    reponse: { valeur: -5, unite: "", decimales: 0, signe: true },
    explication: "γ = [[OA'|OA]]\nγ = [[180|−36]] = −5\nL'image est 5 fois plus grande que l'objet, et renversée : c'est ce que dit le signe moins.",
    indice: "Le grandissement transversal est le rapport de la position de l'image à celle de l'objet, mesurées depuis le centre O. Garde les signes."
  },
  {
    id: "U42-056", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Lentille mince divergente de f' = −50 mm. Un objet réel est placé à 200 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: -40, unite: "mm", decimales: 0, signe: true },
    explication: "OA = −200 mm et f' = −50 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = −[[1|50]] − [[1|200]]\n[[1|OA']] = −[[4|200]] − [[1|200]] = −[[5|200]]\nDonc OA' = −[[200|5]] = −40 mm : l'image est virtuelle, du côté de l'objet, droite et 5 fois plus petite.\nγ = [[OA'|OA]] = [[−40|−200]] = +0,2",
    indice: "Deux signes à ne pas oublier : celui de OA (objet réel) et celui de f' (lentille divergente)."
  },

  // ---------- Loupe et microscope ----------
  {
    id: "U42-008", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2018",
    question: "Une loupe a une distance focale f' = 50 mm. Quel est son grossissement commercial Gc ?",
    choix: ["Gc = 2", "Gc = 5", "Gc = 12,5", "Gc = 20"],
    bonne: 1,
    explication: "Gc = P / 4, avec P la puissance (ici la vergence) en dioptries. P = 1 / 0,050 m = 20 δ, donc Gc = 20 / 4 = 5. Le 4 vient de la distance de référence 25 cm (1 / 0,25 = 4).",
    indice: "Commence par la puissance en dioptries (la focale doit être en mètres), puis rappelle-toi que le grossissement commercial se rapporte à une distance de 25 cm."
  },
  {
    id: "U42-009", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un fabricant annonce un oculaire « 8× » (grossissement commercial Gc = 8). Quelle est sa distance focale ?",
    choix: ["50 mm", "12,5 mm", "31,25 mm", "32 mm"],
    bonne: 2,
    explication: "Gc = P / 4 → P = 4 × 8 = 32 δ. f' = 1 / 32 = 0,03125 m = 31,25 mm. Piège : 32 est la puissance en dioptries, pas la focale.",
    indice: "Fais le chemin à l'envers : grossissement commercial → puissance en dioptries → focale. Attention à ne pas confondre une puissance (en δ) et une focale (en mm)."
  },
  {
    id: "U42-010", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un microscope a un objectif de grandissement gy = −40 et un oculaire de grossissement commercial 10×. Quel est le grossissement commercial du microscope ?",
    choix: ["−4", "4 000", "50", "400"],
    bonne: 3,
    explication: "Gc microscope = |gy objectif| × Gc oculaire = 40 × 10 = 400. L'objectif agrandit l'objet en une image intermédiaire, l'oculaire joue le rôle de loupe sur cette image.",
    indice: "Dans un microscope, l'objectif agrandit d'abord l'objet, puis l'oculaire sert de loupe sur cette image. Les deux effets se multiplient (on prend le grandissement en valeur absolue)."
  },
  {
    id: "U42-057", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2018 et 2025",
    type: "calcul",
    question: "Une loupe a une distance focale f' = 40 mm. Calcule son grossissement commercial.",
    reponse: { valeur: 6.25, unite: "", decimales: 2, signe: false },
    explication: "P = [[1|f']] = [[1|0,040]] = 25 δ\nGc = [[P|4]] = [[25|4]] = 6,25\nLe 4 vient de la distance de référence de 25 cm : [[1|0,25]] = 4.",
    indice: "Passe d'abord par la puissance en dioptries, avec la focale en mètres. Le grossissement commercial se rapporte à une distance de 25 cm."
  },

  // ---------- Lunettes afocales ----------
  {
    id: "U42-011", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Une lunette de Kepler a un objectif de f'ob = 120 mm et un oculaire de f'oc = 20 mm. Quel est son grossissement (en valeur absolue) ?",
    choix: ["6", "100", "140", "2,4"],
    bonne: 0,
    explication: "Pour une lunette afocale : G = f'ob / f'oc = 120 / 20 = 6. Avec Kepler (deux lentilles convergentes), l'image est renversée : G = −6, d'où le redresseur (prismes) sur les modèles terrestres.",
    indice: "Pour une lunette afocale, le grossissement ne dépend que des deux focales. Laquelle doit être grande pour bien grossir ?"
  },
  {
    id: "U42-012", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Même lunette de Kepler afocale (f'ob = 120 mm, f'oc = 20 mm). Quelle est la distance entre l'objectif et l'oculaire ?",
    choix: ["120 mm", "140 mm", "2 400 mm", "100 mm"],
    bonne: 1,
    explication: "Afocale = le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. La longueur vaut donc f'ob + f'oc = 120 + 20 = 140 mm.",
    indice: "Une lunette afocale transforme un faisceau parallèle en faisceau parallèle. Quel foyer de l'objectif doit alors coïncider avec quel foyer de l'oculaire ?",
    schema: "img/schemas/U42/kepler-afocale-120-20.svg",
    schemaTexte: "Lunette de Kepler : les rayons parallèles convergent au foyer image de l'objectif, confondu avec le foyer objet de l'oculaire, puis ressortent parallèles. Distance entre les lentilles : 120 + 20 mm."
  },
  {
    id: "U42-013", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2018",
    question: "Lunette de Galilée afocale : objectif convergent f'1 = 90 mm, oculaire divergent f'2 = −30 mm. Quelle distance entre les deux lentilles ?",
    choix: ["120 mm", "30 mm", "60 mm", "90 mm"],
    bonne: 2,
    explication: "Comme pour Kepler, F'1 = F2, donc O1O2 = f'1 + f'2 = 90 + (−30) = 60 mm. La Galilée est plus courte. G = −f'1/f'2 = 3, positif : l'image est droite, pas besoin de redresseur.",
    indice: "Comme pour Kepler, le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. Mais ici l'oculaire est divergent : garde le signe de sa focale.",
    schema: "img/schemas/U42/galilee-afocale-90-30.svg",
    schemaTexte: "Lunette de Galilée : les rayons parallèles visent le foyer F'1, confondu avec le foyer objet F2 de l'oculaire divergent, et ressortent parallèles. L'oculaire est à 90 − 30 = 60 mm de l'objectif."
  },
  {
    id: "U42-014", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Un client malvoyant a une acuité de loin de 1,5/10. On lui propose une lunette de grossissement 6×. Quelle acuité peut-il espérer avec la lunette ?",
    choix: ["10/10", "1,5/10", "6/10", "9/10"],
    bonne: 3,
    explication: "En aide visuelle, on estime : AV avec l'instrument = AV du client × G = 1,5/10 × 6 = 9/10. Il faut ensuite comparer à l'acuité demandée par la tâche (lire un panneau, un prix…).",
    indice: "En basse vision, l'aide visuelle multiplie l'acuité du client par son grossissement. Calcule, puis vérifie que le résultat reste réaliste."
  },
  {
    id: "U42-015", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "2026",
    question: "Dans une lunette terrestre, un véhicule redresseur (lentille mince f'V = 25 mm) donne une image de même taille et renversée (gy = −1). De combien allonge-t-il la lunette ?",
    choix: ["100 mm", "25 mm", "50 mm", "75 mm"],
    bonne: 0,
    explication: "gy = −1 : l'objet est à 2f' avant la lentille (−50 mm) et l'image à 2f' après (+50 mm). L'image intermédiaire est donc déplacée de 50 + 50 = 100 mm, soit 4 × f'V.",
    indice: "Avec un grandissement de −1, l'objet et l'image sont à la même distance de la lentille, de part et d'autre. Laquelle ? Pense au cas « 2f' »."
  },
  {
    id: "U42-058", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023 et 2026",
    type: "calcul",
    question: "Lunette de Kepler afocale : objectif de f'ob = 200 mm, oculaire de f'oc = 25 mm. Calcule son grossissement, avec son signe.",
    reponse: { valeur: -8, unite: "", decimales: 0, signe: true },
    explication: "G = −[[f'ob|f'oc]] = −[[200|25]] = −8\nLe signe moins indique une image renversée : c'est le cas de toute lunette de Kepler sans redresseur.",
    indice: "Pour une lunette afocale, le grossissement est le rapport des deux focales. Demande-toi si l'image d'une lunette de Kepler est droite ou renversée."
  },

  // ---------- Doublets et achromatisme ----------
  {
    id: "U42-016", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2025",
    question: "Un oculaire est formé de deux lentilles minces convergentes de f'1 = f'2 = 40 mm, séparées de e = 30 mm. Quelle est sa distance focale image ?",
    choix: ["20 mm", "32 mm", "40 mm", "80 mm"],
    bonne: 1,
    explication: "Formule du doublet : f' = f'1 × f'2 / (f'1 + f'2 − e) = 40 × 40 / (40 + 40 − 30) = 1 600 / 50 = 32 mm. (Ou en vergences : V = V1 + V2 − e·V1·V2.)",
    indice: "Formule du doublet (Gullstrand) : f' = f'1·f'2 / (f'1 + f'2 − e). Remplace avec les valeurs en mm, sans te tromper dans le dénominateur.",
    schema: "img/schemas/U42/doublet-40-40-e30.svg",
    schemaTexte: "Un rayon parallèle traverse L1, se dirige vers F'1, puis L2 le fait couper l'axe en F', 8 mm après L2. En prolongeant les rayons, on trouve le plan principal H', et f' = H'F' = 32 mm."
  },
  {
    id: "U42-017", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un doublet a pour symbole (3 ; 2 ; 1) avec a = 10 mm. Quelle est sa distance focale image ?",
    choix: ["60 mm", "7,5 mm", "15 mm", "20 mm"],
    bonne: 2,
    explication: "Symbole (m ; n ; p) : f'1 = m·a = 30 mm, e = n·a = 20 mm, f'2 = p·a = 10 mm. f' = 30 × 10 / (30 + 10 − 20) = 300 / 20 = 15 mm.",
    indice: "Le symbole (m ; n ; p) donne, dans l'ordre, f'1, l'écart e et f'2 en multiples de a. Calcule les trois longueurs, puis applique la formule du doublet."
  },
  {
    id: "U42-018", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un téléobjectif associe une lentille convergente puis une divergente. Quel est son principal intérêt par rapport à une lentille unique de même focale ?",
    choix: ["Il supprime la diffraction", "Il redresse l'image", "Il donne une image plus lumineuse", "Il est plus court : la distance 1re lentille → foyer image est inférieure à la focale"],
    bonne: 3,
    explication: "Le plan principal image est rejeté en avant de la première lentille. On obtient une grande focale f' dans un tube nettement plus court que f' : c'est tout l'intérêt du téléobjectif, il est moins encombrant.",
    indice: "Compare la longueur du tube (de la première lentille au capteur) à la focale de l'objectif. Qu'est-ce que le photographe y gagne ?"
  },
  {
    id: "U42-019", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "On veut un doublet achromatique accolé de vergence V = +2 δ, avec un verre de nombre d'Abbe ν1 = 60 et un verre ν2 = 30. Quelles vergences V1 et V2 ?",
    choix: ["V1 = +4 δ ; V2 = −2 δ", "V1 = −2 δ ; V2 = +4 δ", "V1 = +3 δ ; V2 = −1 δ", "V1 = +1 δ ; V2 = +1 δ"],
    bonne: 0,
    explication: "Deux conditions : V1 + V2 = 2 et V1/ν1 + V2/ν2 = 0 (achromatisme). V1/60 = −V2/30 → V1 = −2·V2. Donc −2V2 + V2 = 2 → V2 = −2 δ et V1 = +4 δ. La lentille convergente est dans le verre le moins dispersif (ν le plus grand).",
    indice: "Deux équations : les vergences s'additionnent (lentilles accolées), et la somme V/ν doit être nulle pour supprimer le chromatisme. Résous ce petit système."
  },
  {
    id: "U42-020", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "Un verre a les indices nd = 1,500, nF = 1,505 et nC = 1,497. Quel est son nombre d'Abbe ?",
    choix: ["0,008", "62,5", "100", "187,5"],
    bonne: 1,
    explication: "ν = (nd − 1) / (nF − nC) = 0,500 / 0,008 = 62,5. Plus ν est grand, moins le verre disperse les couleurs. Un verre « ED » (Extra low Dispersion) a un ν très élevé (souvent > 80).",
    indice: "Le nombre d'Abbe compare l'écart à l'air (nd − 1) à l'écart entre le bleu et le rouge (nF − nC). Un grand nombre veut dire peu de dispersion."
  },
  {
    id: "U42-059", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2025 et 2026",
    type: "calcul",
    question: "Doublet de deux lentilles minces : f'1 = 60 mm, f'2 = 30 mm, séparées de e = 40 mm. Calcule sa distance focale image f'.",
    reponse: { valeur: 36, unite: "mm", decimales: 0, signe: true },
    explication: "Formule de Gullstrand : f' = [[f'1 × f'2|f'1 + f'2 − e]]\nf' = [[60 × 30|60 + 30 − 40]] = [[1 800|50]] = 36 mm\nLe doublet a une distance focale image de 36 mm.",
    indice: "Formule du doublet (Gullstrand) : le produit des deux focales, divisé par leur somme diminuée de l'écart e."
  },

  // ---------- Champs et diaphragmes (tombé 8 années sur 8) ----------
  {
    id: "U42-021", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022",
    question: "Qu'appelle-t-on la pupille d'entrée d'un système optique ?",
    choix: ["La pupille de l'œil de l'observateur", "La première lentille du système", "L'image du diaphragme d'ouverture par la partie du système placée avant lui", "L'image du diaphragme de champ par tout le système"],
    bonne: 2,
    explication: "La pupille d'entrée est l'image du diaphragme d'ouverture « vue depuis l'objet », à travers les lentilles qui le précèdent. La pupille de sortie est son image par les lentilles qui le suivent.",
    indice: "Il y a deux diaphragmes importants : celui d'ouverture (la lumière) et celui de champ (l'étendue). La pupille d'entrée, c'est l'un des deux « vu depuis l'objet »."
  },
  {
    id: "U42-022", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Dans l'espace d'étude : pupille de rayon 6 mm en x = 0, diaphragme de champ de rayon 4 mm en x = 20 mm, plan des champs en x = 40 mm. Rayon du champ de pleine lumière ?",
    choix: ["4 mm", "8 mm", "14 mm", "2 mm"],
    bonne: 3,
    explication: "Pleine lumière : droite passant par les bords DU MÊME CÔTÉ de la pupille (0 ; 6) et du diaphragme (20 ; 4). Pente = (4 − 6)/20 = −0,1. En x = 40 : r = 6 − 0,1 × 40 = 2 mm. (Champ moyen, par le centre de la pupille : 8 mm ; champ total, bords opposés : 14 mm.)",
    indice: "Pour la pleine lumière, trace la droite qui passe par les bords DU MÊME CÔTÉ de la pupille et du diaphragme de champ, puis prolonge-la jusqu'au plan des champs.",
    schema: "img/schemas/U42/champs-pleine-lumiere-6-4.svg",
    schemaTexte: "Trois droites partent de la pupille et passent par le bord du diaphragme : bords du même côté (pleine lumière, 2 mm), centre de la pupille (champ moyen, 8 mm), bords opposés (champ total, 14 mm)."
  },
  {
    id: "U42-023", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Un fabricant place un diaphragme dans le plan de l'image intermédiaire (plan des champs), avec un diamètre égal (ou très légèrement inférieur) au champ de pleine lumière. À quoi sert-il ?",
    choix: ["À supprimer le champ de contour : bord du champ net, éclairement uniforme", "À réduire la diffraction", "À redresser l'image", "À augmenter la luminosité"],
    bonne: 0,
    explication: "Le champ de contour est la zone du bord où l'éclairement baisse progressivement (vignettage). Un diaphragme dans le plan des champs le coupe net : on ne voit que la zone de pleine lumière, avec un bord franc.",
    indice: "Au bord du champ, l'éclairement baisse peu à peu : c'est le champ de contour. Un diaphragme placé net dans le plan de l'image agit sur ce bord."
  },
  {
    id: "U42-024", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2026",
    question: "Un capteur photo mesure 18 × 24 mm. Le rayon du champ de pleine lumière image est 14 mm. Le capteur est-il éclairé uniformément ?",
    choix: ["Oui, car 14 mm > 12 mm (demi-largeur)", "Non, la demi-diagonale (15 mm) dépasse 14 mm : coins assombris", "Non, il faudrait 24 mm", "Oui, car 14 mm > 9 mm (demi-hauteur)"],
    bonne: 1,
    explication: "Il faut comparer la DEMI-DIAGONALE : √(18² + 24²) = √900 = 30 mm, la moitié = 15 mm. Comme 15 > 14 mm, les coins sortent du champ de pleine lumière : vignettage.",
    indice: "Un rectangle n'est entièrement dans un cercle que si ses quatre coins y sont. Quelle est la distance entre le centre du capteur et un coin ?",
    schema: "img/schemas/U42/capteur-18x24-cercle14.svg",
    schemaTexte: "Capteur rectangulaire 18 × 24 mm centré dans un cercle de rayon 14 mm : la demi-diagonale mesure 15 mm, les quatre coins dépassent du cercle et sont assombris."
  },
  {
    id: "U42-025", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2023",
    question: "Une lunette a un objectif de f'ob = 60 mm. Dans son plan focal, le champ de pleine lumière a un rayon de 3 mm. Quelle largeur de champ voit-on sur un bateau à 50 m ?",
    choix: ["1,25 m", "2,5 m", "5 m", "10 m"],
    bonne: 2,
    explication: "Demi-champ angulaire : tan ω = 3 / 60 = 0,05. À 50 m, demi-largeur = 50 × 0,05 = 2,5 m, donc largeur totale 2 × 2,5 = 5 m. Piège : ne pas oublier de doubler.",
    indice: "Le rayon dans le plan focal et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 50 m, et n'oublie pas de doubler."
  },
  {
    id: "U42-045", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022 et 2023",
    question: "Consigne du sujet : « Montrer que le rayon du champ de pleine lumière vaut 3 mm. » Pupille de rayon 9 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 40 mm, plan des champs en x = 60 mm. Quelle démarche est juste ?",
    choix: [
      "Droite par les bords du même côté, (0 ; 9) et (40 ; 5) : pente = (5 − 9)/40 = −0,1. En x = 60 : 9 − 0,1 × 60 = 3 mm. Le rayon du champ de pleine lumière vaut bien 3 mm.",
      "Droite par le centre de la pupille (0 ; 0) et le bord du diaphragme (40 ; 5) : pente = 5/40 = 0,125. En x = 60 : 0,125 × 60 = 7,5 mm. Le rayon du champ vaut 7,5 mm.",
      "Sur le schéma, le rayon tracé arrive à 3 mm de l'axe dans le plan des champs. Le rayon du champ de pleine lumière vaut donc bien 3 mm.",
      "Droite par les bords du même côté, (0 ; 9) et (40 ; 5) : pente = (5 − 9)/40 = −0,1. L'équation de la droite est y = 9 − 0,1 x."
    ],
    bonne: 0,
    explication: "Dans un « Montrer que », la valeur est donnée : les points sont pour la méthode, le calcul et la conclusion. Ici le plan des champs (x = 60) est au-delà du diaphragme (x = 40) : la droite de pleine lumière passe par les bords du même côté. Pente −0,1, donc en x = 60 : 9 − 6 = 3 mm. La droite par le centre de la pupille donne le champ moyen (7,5 mm). Lire la valeur sur le schéma ne démontre rien. S'arrêter à l'équation de la droite ne répond pas à la consigne.",
    indice: "Trois temps : quelle droite (et pourquoi celle-là), le calcul jusqu'au plan des champs, puis la phrase qui répond à la consigne."
  },
  {
    id: "U42-046", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2025",
    question: "Copie d'un élève : « Pupille de rayon 2 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 100 mm, plan des champs en x = 80 mm. Pleine lumière : bords du même côté, (0 ; 2) et (100 ; 5). En x = 80 : 2 + 0,03 × 80 = 4,4 mm. » Où est l'erreur ?",
    choix: [
      "Il fallait passer par le centre de la pupille : on trouve 4 mm",
      "Le plan des champs est entre la pupille et le diaphragme : il fallait les bords opposés, on trouve 3,6 mm",
      "Le calcul est faux : 2 + 0,03 × 80 = 4,8 mm",
      "Il n'y a pas d'erreur : la pleine lumière, c'est toujours les bords du même côté"
    ],
    bonne: 1,
    explication: "Ici le plan des champs (x = 80) est ENTRE la pupille (x = 0) et le diaphragme de champ (x = 100). Les rayons se croisent dans ce plan avant d'atteindre le diaphragme : celui qui limite la pleine lumière joint les bords opposés, (0 ; −2) et (100 ; 5). Pente = 7/100 = 0,07, donc en x = 80 : −2 + 0,07 × 80 = 3,6 mm. Les 4,4 mm de la copie sont la limite du champ total. Méthode sûre : trace les deux droites qui s'appuient sur les bords ; celle qui donne le plus petit champ limite la pleine lumière. La règle « bords du même côté » vaut quand le plan des champs est en dehors de l'intervalle pupille-diaphragme, le cas le plus fréquent.",
    indice: "Regarde où se trouve le plan des champs par rapport à la pupille et au diaphragme de champ. Les rayons se croisent-ils avant d'atteindre le diaphragme ?",
    schema: "img/schemas/U42/champs-plan-entre-pupille-diaphragme.svg",
    schemaTexte: "Pupille de rayon 2 mm, diaphragme de champ de rayon 5 mm, plan des champs placé entre les deux. Le faisceau converge en B puis s'ouvre jusqu'au diaphragme : la droite par les bords opposés donne 3,6 mm (pleine lumière), celle par les bords du même côté 4,4 mm (champ total)."
  },
  {
    id: "U42-047", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022 et 2026",
    question: "Un capteur mesure 6 × 8 mm. Le champ de pleine lumière image a un rayon de 5,5 mm. Consigne du sujet : « Le capteur est-il éclairé uniformément ? Justifier. » Quelle réponse est complète et juste ?",
    choix: [
      "Diagonale du capteur : √(6² + 8²) = 10 mm. Elle est plus grande que le rayon du champ (5,5 mm) : les coins sont assombris, le capteur n'est pas éclairé uniformément.",
      "Oui : le capteur est entièrement dans le champ de pleine lumière, il est donc éclairé uniformément.",
      "Demi-diagonale du capteur : √(3² + 4²) = 5 mm. Elle est plus petite que le rayon du champ (5,5 mm) : même les coins sont en pleine lumière, le capteur est éclairé uniformément.",
      "La demi-diagonale du capteur vaut √(3² + 4²) = 5 mm et le rayon du champ de pleine lumière vaut 5,5 mm."
    ],
    bonne: 2,
    explication: "On compare ce qui est comparable : la distance du centre à un coin (la demi-diagonale) et le RAYON du champ. √(3² + 4²) = 5 mm, plus petit que 5,5 mm : même les coins reçoivent toute la lumière. Comparer la diagonale entière (10 mm) au rayon est faux : il faudrait la comparer au diamètre (11 mm). Répondre « oui » sans chiffre ne justifie rien. Donner les deux chiffres sans conclure ne répond pas à la question.",
    indice: "Quel point du capteur est le plus éloigné du centre ? Compare cette distance au rayon du champ, sans oublier la phrase de conclusion."
  },
  {
    id: "U42-060", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2023 et 2024",
    type: "calcul",
    question: "Dans l'espace d'étude : pupille de rayon 10 mm en x = 0, diaphragme de champ de rayon 6 mm en x = 40 mm, plan des champs en x = 60 mm. Calcule le rayon du champ de pleine lumière.",
    reponse: { valeur: 4, unite: "mm", decimales: 0, signe: false },
    explication: "Le plan des champs (x = 60) est au-delà du diaphragme (x = 40) : on prend la droite par les bords du même côté, (0 ; 10) et (40 ; 6).\nPente = [[6 − 10|40]] = −0,1\nEn x = 60 : 10 − 0,1 × 60 = 4 mm.\nPour comparer : champ moyen 9 mm, champ total 14 mm.",
    indice: "Écris l'équation de la droite appuyée sur les deux bords du même côté, puis prolonge-la jusqu'au plan des champs."
  },
  {
    id: "U42-061", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018 et 2023",
    type: "calcul",
    question: "Une lunette a un objectif de f'ob = 100 mm. Dans son plan focal image, le champ de pleine lumière a un rayon de 4 mm. Calcule la largeur du champ de pleine lumière sur un objet situé à 30 m.",
    reponse: { valeur: 2.4, unite: "m", decimales: 1, signe: false },
    explication: "tan ω = [[4|100]] = 0,04\nÀ 30 m : demi-largeur = 30 × 0,04 = 1,2 m\nLargeur = 2 × 1,2 = 2,4 m. Piège : ne pas oublier de doubler.",
    indice: "Le rayon du champ et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 30 m. On demande une largeur, pas une demi-largeur."
  },

  // ---------- Ouverture et résolution ----------
  {
    id: "U42-026", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un téléobjectif de focale 400 mm est ouvert à f/8 (nombre d'ouverture N = 8). Quel est le diamètre de sa pupille d'entrée ?",
    choix: ["3 200 mm", "8 mm", "25 mm", "50 mm"],
    bonne: 3,
    explication: "N = f' / D_PE → D_PE = 400 / 8 = 50 mm. Rappel : plus N est petit, plus la pupille est grande, plus il entre de lumière.",
    indice: "Le nombre d'ouverture est le rapport de la focale au diamètre de la pupille d'entrée. Isole le diamètre."
  },
  {
    id: "U42-027", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Un objectif a une pupille d'entrée de 10 mm. Limite de résolution angulaire due à la diffraction pour λ = 500 nm ?",
    choix: ["6,1 × 10⁻⁵ rad", "1,2 × 10⁻⁴ rad", "6,1 × 10⁻² rad", "5,0 × 10⁻⁵ rad"],
    bonne: 0,
    explication: "α = 1,22 × λ / D = 1,22 × 500 × 10⁻⁹ / 10 × 10⁻³ = 1,22 × 5 × 10⁻⁵ = 6,1 × 10⁻⁵ rad. Piège : mettre λ et D dans la même unité (mètres).",
    indice: "Utilise α = 1,22 λ / D, avec λ et D dans la même unité (mètres). Le résultat est en radians."
  },
  {
    id: "U42-028", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Une bijoutière utilise une loupe de puissance P = 12,5 δ. La limite de résolution angulaire de son œil est 3 × 10⁻⁴ rad. Quel est le plus petit détail qu'elle peut distinguer sur l'objet ?",
    choix: ["2,4 µm", "24 µm", "240 µm", "2,4 mm"],
    bonne: 1,
    explication: "Puissance P = α' / y (angle de l'image en rad par taille de l'objet en m). Donc y = ε / P = 3 × 10⁻⁴ / 12,5 = 2,4 × 10⁻⁵ m = 24 µm.",
    indice: "La puissance relie l'angle sous lequel on voit l'image à la taille de l'objet : P = α' / y. L'œil sépare au mieux un angle de 3 × 10⁻⁴ rad."
  },
  {
    id: "U42-029", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un appareil photo a des pixels de 5 µm et un objectif de focale 250 mm. Quelle est la limite de résolution angulaire due au capteur ?",
    choix: ["2 × 10⁻² rad", "1,25 × 10⁻³ rad", "2 × 10⁻⁵ rad", "5 × 10⁻⁶ rad"],
    bonne: 2,
    explication: "Au BTS, on admet que la limite due au capteur correspond à la taille d'un pixel vue depuis l'objectif : α = a' / f' = 5 × 10⁻⁶ / 0,250 = 2 × 10⁻⁵ rad. Si la diffraction donne une limite plus petite (ex. 1 × 10⁻⁵ rad), c'est le capteur qui limite : c'est toujours la plus grande des deux limites qui l'emporte.",
    indice: "Le capteur ne sépare pas deux points dont les images tombent sur le même pixel. Quel angle représente la taille d'un pixel vue depuis l'objectif ? Mets tout en mètres."
  },
  {
    id: "U42-030", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Avec un instrument, le plus petit détail séparable vaut 8 µm à cause de la diffraction et 12 µm à cause de l'œil. Peut-on séparer deux traits distants de 10 µm ?",
    choix: ["Non, c'est la diffraction qui limite à 8 µm", "Oui, car 10 µm > 8 µm", "Oui, en moyenne la limite est 10 µm", "Non, c'est l'œil qui limite à 12 µm"],
    bonne: 3,
    explication: "La limite de l'ensemble est la PLUS GRANDE des deux : ici l'œil (12 µm). 10 µm < 12 µm, donc les deux traits ne sont pas séparés.",
    indice: "Quand deux causes limitent la résolution, c'est la plus sévère qui commande. Compare ensuite l'écart entre les traits à cette limite."
  },
  {
    id: "U42-062", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "2018 et 2024",
    type: "calcul",
    question: "Un objectif a une pupille d'entrée de diamètre 20 mm. Pour λ = 550 nm, la diffraction limite sa résolution à α = 1,22 λ / D. Calcule le plus petit détail qu'il sépare sur un objet situé à 50 m.",
    reponse: { valeur: 1.7, unite: "mm", decimales: 1, tolerance: 0.06, signe: false },
    explication: "Tout en mètres : α = [[1,22 × λ|D]]\nα = [[1,22 × 550 × 10⁻⁹|0,020]] ≈ 3,36 × 10⁻⁵ rad\nÀ 50 m : détail = α × 50 ≈ 1,68 × 10⁻³ m, soit environ 1,7 mm.\nPiège : les nanomètres et les millimètres doivent être convertis en mètres avant de diviser.",
    indice: "Calcule d'abord l'angle limite en radians, avec λ et D en mètres. Un angle petit multiplié par une distance donne une longueur."
  },

  // ---------- Transmission et antireflet ----------
  {
    id: "U42-031", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Quel pourcentage de lumière est réfléchi par un dioptre air / verre d'indice 1,5 en incidence normale ?",
    choix: ["4 %", "8 %", "20 %", "1,5 %"],
    bonne: 0,
    explication: "R = ((n − 1)/(n + 1))² = (0,5 / 2,5)² = 0,2² = 0,04, soit 4 %. Le dioptre transmet donc T = 1 − R = 96 %.",
    indice: "En incidence normale, R = ((n − 1)/(n + 1))². Calcule le rapport avant de l'élever au carré."
  },
  {
    id: "U42-032", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Un viseur compte 4 lentilles non traitées dans l'air (T = 0,96 par dioptre). Quelle est sa transmission totale ?",
    choix: ["80 %", "72 %", "68 %", "96 %"],
    bonne: 1,
    explication: "4 lentilles = 8 dioptres. T totale = 0,96⁸ ≈ 0,72, soit 72 %. Piège : ce n'est pas 1 − 8 × 0,04 = 68 %, on multiplie les transmissions.",
    indice: "Compte d'abord les dioptres (combien par lentille ?). Les transmissions successives se multiplient, elles ne se soustraient pas."
  },
  {
    id: "U42-033", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2024",
    question: "Quel est le principe d'un traitement antireflet monocouche ?",
    choix: ["Augmenter l'indice du verre", "Absorber la lumière réfléchie", "Faire interférer de façon destructive les deux ondes réfléchies (sur la couche et sur le verre)", "Polariser la lumière réfléchie"],
    bonne: 2,
    explication: "Les ondes réfléchies sur la face avant de la couche et sur le verre doivent être en opposition de phase (différence de marche λ/2) et de même intensité. Elles s'annulent : la lumière n'est plus réfléchie, elle est transmise.",
    indice: "Un antireflet est une couche très mince. Deux reflets se forment : un sur la couche, un sur le verre. Que peuvent faire deux ondes qui se superposent ?"
  },
  {
    id: "U42-034", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Pour un verre d'indice 1,69, quel est l'indice théorique idéal de la couche antireflet ?",
    choix: ["1,50", "1,69", "0,845", "1,30"],
    bonne: 3,
    explication: "Pour que les deux réflexions aient la même intensité : n_ar = √n_verre = √1,69 = 1,30.",
    indice: "Pour que les deux reflets s'annulent, ils doivent avoir la même intensité. L'indice de la couche est alors « entre » celui de l'air et celui du verre, au sens d'une racine."
  },
  {
    id: "U42-035", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Une couche antireflet d'indice 1,30 est optimisée pour λ = 520 nm. Quelle est son épaisseur minimale ?",
    choix: ["100 nm", "130 nm", "200 nm", "400 nm"],
    bonne: 0,
    explication: "Aller-retour dans la couche = 2·n·e = λ/2, donc e = λ / (4·n_ar) = 520 / (4 × 1,30) = 520 / 5,2 = 100 nm. Utiliser l'indice de la COUCHE, pas celui du verre.",
    indice: "La lumière fait un aller-retour dans la couche. Ce trajet, multiplié par l'indice de la couche, doit valoir une demi-longueur d'onde.",
    schema: "img/schemas/U42/antireflet-couche-130-520nm.svg",
    schemaTexte: "Un rayon se réfléchit une fois sur la couche et une fois sur le verre. Les deux reflets sont décalés d'une demi-longueur d'onde : ils s'annulent. Épaisseur e = 520 / (4 × 1,30) = 100 nm."
  },
  {
    id: "U42-063", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023 et 2024",
    type: "calcul",
    question: "Un instrument compte 5 lentilles non traitées dans l'air (T = 0,96 par face). Calcule sa transmission totale, en pourcentage.",
    reponse: { valeur: 66, unite: "%", decimales: 0, signe: false },
    explication: "5 lentilles = 10 faces. T totale = 0,96¹⁰ ≈ 0,665, soit environ 66 %. Piège : ce n'est pas 1 − 10 × 0,04 = 60 %, car les transmissions se multiplient.",
    indice: "Compte les faces traversées (combien par lentille ?). Les transmissions successives se multiplient, elles ne se soustraient pas."
  },

  // ---------- Interférences et réseaux ----------
  {
    id: "U42-036", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "2025",
    question: "Un film de savon d'indice 1,33 est éclairé en réflexion sous incidence nulle (δ = 2ne + λ/2). Épaisseur minimale pour renforcer au maximum λ = 532 nm ?",
    choix: ["50 nm", "100 nm", "200 nm", "400 nm"],
    bonne: 1,
    explication: "Maximum si δ = kλ : 2ne + λ/2 = λ (k = 1) → 2ne = λ/2 → e = λ / (4n) = 532 / 5,32 = 100 nm. C'est ce qui donne les couleurs irisées des bulles de savon ou des taches d'huile.",
    indice: "Un maximum en réflexion demande δ = kλ. Prends le plus petit k possible, puis isole l'épaisseur e."
  },
  {
    id: "U42-037", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Un réseau a 500 traits par mm. Éclairé en incidence normale, à quel angle voit-on la lumière de 600 nm dans l'ordre 1 ?",
    choix: ["0,3°", "8,6°", "17,5°", "36,9°"],
    bonne: 2,
    explication: "Pas a = 1/500 mm = 2 µm. Formule des réseaux : a × sin i' = k × λ → sin i' = 0,6 / 2 = 0,3 → i' ≈ 17,5°. (36,9° serait l'ordre 2.)",
    indice: "Calcule d'abord le pas a (en µm) à partir du nombre de traits par mm, puis utilise a × sin i' = k × λ avec k = 1.",
    schema: "img/schemas/U42/reseau-500-traits-600nm.svg",
    schemaTexte: "Le faisceau traverse le réseau : l'ordre 0 continue tout droit, les ordres ±1 partent à 17,5° de part et d'autre, les ordres ±2 à 36,9°."
  },
  {
    id: "U42-038", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Réseau de pas a = 2 µm, lumière blanche de 400 à 800 nm, incidence normale. Quel est l'ordre le plus élevé où le spectre est encore complet ?",
    choix: ["4", "5", "1", "2"],
    bonne: 3,
    explication: "Il faut sin i' = kλ/a ≤ 1 pour TOUTES les couleurs, donc pour le rouge : k ≤ a / λ rouge = 2 / 0,8 = 2,5. L'ordre complet le plus élevé est k = 2.",
    indice: "Un spectre d'ordre k est complet si TOUTES ses couleurs existent, donc si sin i' ≤ 1 même pour la plus grande longueur d'onde."
  },

  // ---------- Polarisation ----------
  {
    id: "U42-039", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "2019",
    question: "Lumière naturelle à travers deux polariseurs parfaits dont les directions font 60°. Quelle fraction de la lumière sort ?",
    choix: ["12,5 %", "6,25 %", "50 %", "25 %"],
    bonne: 0,
    explication: "Le 1er polariseur laisse passer la moitié de la lumière naturelle : 50 %. Puis loi de Malus : × cos²60° = × 0,25. Total = 0,5 × 0,25 = 0,125, soit 12,5 %.",
    indice: "Deux étapes : que fait le premier polariseur à une lumière naturelle, non polarisée ? Ensuite, applique la loi de Malus au second polariseur.",
    schema: "img/schemas/U42/malus-deux-polariseurs-60.svg",
    schemaTexte: "La lumière naturelle traverse un premier polariseur vertical, qui en laisse passer la moitié, puis un second polariseur tourné de 60°, qui en garde cos² 60°, soit un quart."
  },
  {
    id: "U42-040", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "2022",
    question: "Pour quel angle d'incidence la lumière réfléchie par la surface d'un lac (n = 1,33) est-elle totalement polarisée (angle de Brewster) ?",
    choix: ["48,8°", "53,1°", "60°", "36,9°"],
    bonne: 1,
    explication: "tan iB = n = 1,33 → iB ≈ 53,1°. À cet angle, rayons réfléchi et réfracté sont perpendiculaires (i + r = 90°). Des lunettes polarisantes bien orientées éteignent alors le reflet de l'eau. (48,8° est l'angle limite de réflexion totale, un autre phénomène ; 36,9° est l'angle de réfraction.)",
    indice: "À l'incidence de Brewster, le rayon réfléchi et le rayon réfracté sont perpendiculaires. Une relation trigonométrique simple relie alors cet angle à l'indice de l'eau.",
    schema: "img/schemas/U42/brewster-lac-133.svg",
    schemaTexte: "Rayon arrivant sur l'eau sous 53,1° de la normale : le rayon réfléchi et le rayon réfracté, à 36,9°, forment un angle droit. Le reflet est totalement polarisé."
  },

  // ---------- Photométrie ----------
  {
    id: "U42-041", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "2024",
    question: "Une lampe de travail donne 8 000 lx à 30 cm (incidence normale). Quel éclairement donne-t-elle à 60 cm ?",
    choix: ["16 000 lx", "1 000 lx", "2 000 lx", "4 000 lx"],
    bonne: 2,
    explication: "Loi de Bouguer : E = I / d². I = 8 000 × 0,3² = 720 cd. À 0,6 m : E = 720 / 0,36 = 2 000 lx. Distance × 2 → éclairement ÷ 4.",
    indice: "Loi de Bouguer : l'éclairement varie comme 1/d². Que devient-il quand la distance double ?"
  },
  {
    id: "U42-042", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "2022",
    question: "On ajoute un filtre gris neutre qui transmet 25 % de la lumière. Sans filtre, le temps de pose était 1/500 s. Quel temps de pose garde la même exposition ?",
    choix: ["1/2 000 s", "1/500 s", "1/250 s", "1/125 s"],
    bonne: 3,
    explication: "Exposition = E × t constante. Avec le filtre, E2 = 0,25 × E1, donc t2 = t1 / 0,25 = 4 × t1 = 4/500 = 1/125 s. Le temps de pose augmente.",
    indice: "Pour garder la même exposition, le produit éclairement × temps de pose doit rester constant. Si le filtre retire de la lumière, le temps doit compenser."
  },

  // ---------- Mini-sujet : jumelles de théâtre (6 étapes, déclaré par CAS.push en bas du fichier) ----------
  {
    id: "U42-048", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2023 et 2026",
    cas: "CAS-U42-01", etape: 1,
    question: "La scène, à 24 m, est considérée comme à l'infini. Quelle chaîne des images est juste ?",
    choix: [
      "AB à l'infini → A1B1 en F'1, confondu avec F2 → A'B' à l'infini",
      "AB à l'infini → A1B1 en F'1, confondu avec F'2 → A'B' à l'infini",
      "AB à l'infini → A1B1 à l'infini → A'B' en F'2",
      "AB en F1 → A1B1 à l'infini → A'B' en F'2"
    ],
    bonne: 0,
    explication: "L'objet est à l'infini : son image par l'objectif se forme dans le plan focal image, en F'1. La cliente est emmétrope et n'accommode pas : l'image finale doit être à l'infini. Pour cela, A1B1 doit se trouver au foyer OBJET de l'oculaire, F2. Donc F'1 = F2 : les jumelles sont afocales, et la distance entre les lentilles vaut f'1 + f'2 = 120 − 40 = 80 mm, comme sur la notice. Piège : pour une lentille divergente, F2 est après la lentille et F'2 avant.",
    indice: "Deux questions à te poser : où se forme l'image d'un objet à l'infini ? Et où doit se trouver un objet pour que l'oculaire renvoie son image à l'infini ?"
  },
  {
    id: "U42-049", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2018",
    cas: "CAS-U42-01", etape: 2,
    question: "Quel est le grossissement de ces jumelles ? Est-il conforme à la notice, et l'image est-elle à l'endroit ?",
    choix: [
      "G = −3 : conforme à la notice, mais image renversée",
      "G = +3 : conforme à la notice, image droite",
      "G ≈ 2 : non conforme à la notice",
      "G = +1/3 : la scène paraît 3 fois plus petite"
    ],
    bonne: 1,
    explication: "Pour une lunette afocale : G = −f'1 / f'2 = −120 / (−40) = +3. C'est bien le « 3× » de la notice. Le signe + veut dire que l'image est droite : pas besoin de prismes pour la redresser, c'est pour cela que des jumelles de théâtre sont si courtes. Avec deux lentilles convergentes (lunette de Kepler), G serait négatif et l'image renversée. Le « 2 » vient de la formule de la loupe (Gc = P/4), qui ne s'applique pas à une lunette.",
    indice: "Pour une lunette afocale, le grossissement est le rapport des deux focales, avec un signe moins devant. Garde le signe de f'2 : l'oculaire est divergent."
  },
  {
    id: "U42-050", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018",
    cas: "CAS-U42-01", etape: 3,
    contexte: "La monture de l'objectif (rayon 20 mm) est le diaphragme d'ouverture. La monture de l'oculaire (rayon 10 mm), 80 mm plus loin, est le diaphragme de champ. Le plan des champs est celui de l'image intermédiaire A1B1, à 120 mm de l'objectif.",
    question: "Quel est le rayon du champ de pleine lumière dans le plan de l'image intermédiaire ?",
    choix: ["10 mm", "15 mm", "5 mm", "25 mm"],
    bonne: 2,
    explication: "Le plan des champs (x = 120) est au-delà du diaphragme de champ (x = 80) : la droite de pleine lumière passe par les bords du même côté, (0 ; 20) et (80 ; 10). Pente = (10 − 20)/80 = −0,125. En x = 120 : 20 − 0,125 × 120 = 5 mm. Par le centre de l'objectif, on trouve le champ moyen (15 mm) ; par les bords opposés, le champ total (25 mm). 10 mm est seulement le rayon de l'oculaire.",
    indice: "Place l'objectif en x = 0, l'oculaire en x = 80 et le plan des champs en x = 120. Quelle droite, appuyée sur deux bords, limite la pleine lumière ?",
    schema: "img/schemas/U42/cas-jumelles-champ.svg",
    schemaTexte: "Objectif de rayon 20 mm, oculaire de rayon 10 mm placé 80 mm plus loin, plan de l'image intermédiaire à 120 mm. Trois droites passent par le bord de l'oculaire : bords du même côté (5 mm, pleine lumière), centre de l'objectif (15 mm, champ moyen), bords opposés (25 mm, champ total)."
  },
  {
    id: "U42-051", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018 et 2023",
    cas: "CAS-U42-01", etape: 4,
    contexte: "Résultat à garder pour la suite : dans le plan de l'image intermédiaire, le champ de pleine lumière a un rayon de 5 mm.",
    question: "Depuis sa place, à 24 m, quelle largeur de scène la cliente voit-elle en pleine lumière ?",
    choix: ["1 m", "6 m", "8 m", "2 m"],
    bonne: 3,
    explication: "Le rayon du champ dans le plan focal de l'objectif donne l'angle : tan ω = 5 / 120 ≈ 0,042, soit ω ≈ 2,4°. À 24 m : demi-largeur = 24 × 5 / 120 = 1 m, donc largeur = 2 × 1 = 2 m. Elle voit un chanteur en entier, mais pas toute la scène d'un seul regard. Pièges : oublier de doubler (1 m), diviser par la focale de l'oculaire (6 m), ou partir du rayon de l'objectif au lieu du rayon du champ (8 m).",
    indice: "Le rayon du champ et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 24 m, et pense que la largeur vaut deux fois la demi-largeur."
  },
  {
    id: "U42-052", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "2018",
    cas: "CAS-U42-01", etape: 5,
    contexte: "Résultat à garder : à 24 m, le champ de pleine lumière couvre 2 m de large. L'œil de la cliente sépare deux points vus sous un angle d'au moins 3 × 10⁻⁴ rad. La diffraction par l'objectif donne une limite de 1,7 × 10⁻⁵ rad.",
    question: "Avec les jumelles, quel est le plus petit détail qu'elle peut distinguer sur la scène, à 24 m ?",
    choix: ["7,2 mm", "2,4 mm", "0,4 mm", "21,6 mm"],
    bonne: 1,
    explication: "Les jumelles grossissent 3 fois : ramenée dans l'espace objet, la limite de l'œil vaut 3 × 10⁻⁴ / 3 = 1 × 10⁻⁴ rad. Elle est plus grande que la limite de diffraction (1,7 × 10⁻⁵ rad) : c'est donc l'œil qui limite. À 24 m : 24 × 1 × 10⁻⁴ = 2,4 × 10⁻³ m, soit 2,4 mm. Sans jumelles, elle ne séparerait que 24 × 3 × 10⁻⁴ m, soit 7,2 mm. 0,4 mm est la limite de diffraction seule ; 21,6 mm vient d'une multiplication par 3 au lieu d'une division.",
    indice: "Ramène d'abord la limite de l'œil dans l'espace objet en la divisant par le grossissement. Compare-la à la limite de diffraction : laquelle commande ?"
  },
  {
    id: "U42-053", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2019 et 2023",
    cas: "CAS-U42-01", etape: 6,
    contexte: "Résultats à garder : avec les jumelles, elle sépare des détails de 2,4 mm à 24 m (7,2 mm à l'œil nu). Elle veut lire les expressions des chanteurs, donc distinguer des détails de 5 mm. La scène mesure 12 m de large.",
    question: "Quelle conclusion donner à la cliente ?",
    choix: [
      "Le grossissement vaut 3, le champ de pleine lumière 2 m et le plus petit détail séparé 2,4 mm.",
      "Ces jumelles conviennent à ce qu'elle veut faire.",
      "Elles ne conviennent pas : le champ de 2 m est plus petit que la scène de 12 m, elle ne verra donc pas les chanteurs.",
      "Elles conviennent : elle sépare des détails de 2,4 mm, donc ceux de 5 mm (impossible à l'œil nu : 7,2 mm), et voit un chanteur en entier dans un champ de 2 m. Elle ne verra pas toute la scène d'un seul regard."
    ],
    bonne: 3,
    explication: "Une conclusion complète fait trois choses : elle répond à la question du client, elle s'appuie sur les chiffres trouvés et elle signale la limite de l'appareil. Ici : détails de 2,4 mm séparés, donc ceux de 5 mm aussi, alors qu'à l'œil nu elle s'arrête à 7,2 mm ; champ de 2 m, donc un chanteur en entier, mais pas les 12 m de scène à la fois. Écrire seulement « elles conviennent » ne rapporte pas les points. Aligner les chiffres sans conclure non plus. Et un petit champ n'empêche pas de voir les chanteurs : il oblige seulement à déplacer les jumelles.",
    indice: "Une bonne conclusion répond à la question du client, s'appuie sur les chiffres trouvés et signale la limite de l'appareil."
  }
,

  // ---------- Calculs posés étape par étape ----------
  {
    id: "U42-139", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", type: "pose",
    question: "Un objectif assimilé à une lentille mince convergente a une distance focale image f' = +25 mm. Un objet réel est placé 40 mm devant elle. Trouve la position de l'image et le grandissement, étape par étape.",
    etapes: [
      { consigne: "Vergence de la lentille V", reponse: { valeur: 40, unite: "δ", decimales: 0, signe: true },
        aide: "V = [[1|f']] avec f' en mètres : 25 mm = 0,025 m.", ligne: "V = [[1|f']] = [[1|0,025]] = +40 δ" },
      { consigne: "Vergence de l'objet [[1|OA]]", reponse: { valeur: -25, unite: "δ", decimales: 0, signe: true },
        aide: "L'objet est réel, avant la lentille : OA est négatif. OA = −40 mm = −0,040 m.", ligne: "[[1|OA]] = [[1|−0,040]] = −25 δ" },
      { consigne: "Vergence de l'image [[1|OA']]", reponse: { valeur: 15, unite: "δ", decimales: 0, signe: true },
        aide: "Relation de conjugaison : [[1|OA']] = [[1|OA]] + V.", ligne: "[[1|OA']] = [[1|OA]] + V = −25 + 40 = +15 δ" },
      { consigne: "Position de l'image OA'", reponse: { valeur: 66.7, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "OA' = [[1|15]] en mètres, puis convertis en millimètres.", ligne: "OA' = [[1|15]] = +0,0667 m = +66,7 mm" },
      { consigne: "Grandissement γ", reponse: { valeur: -1.67, unite: "", decimales: 2, signe: true, tolerance: 0.02 },
        aide: "γ = [[OA'|OA]], avec les signes. OA' et OA se prennent dans la même unité.", ligne: "γ = [[OA'|OA]] = [[+66,7|−40]] = −1,67" }
    ],
    explication: "L'image est réelle (OA' > 0), renversée (γ < 0) et 1,67 fois plus grande que l'objet. Contrôle avec les vergences : γ = [[−25|+15]] = −1,67."
  },
  {
    id: "U42-140", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", type: "pose",
    question: "Un doublet est formé de deux lentilles minces convergentes : f'1 = +80 mm et f'2 = +40 mm, séparées de e = 40 mm. Calcule sa distance focale image, étape par étape, avec V = V1 + V2 − e × V1 × V2.",
    etapes: [
      { consigne: "Vergence V1 de la 1re lentille", reponse: { valeur: 12.5, unite: "δ", decimales: 1, signe: true },
        aide: "V1 = [[1|f'1]] avec f'1 en mètres : 80 mm = 0,080 m.", ligne: "V1 = [[1|0,080]] = +12,5 δ" },
      { consigne: "Vergence V2 de la 2e lentille", reponse: { valeur: 25, unite: "δ", decimales: 0, signe: true },
        aide: "V2 = [[1|f'2]] avec f'2 en mètres : 40 mm = 0,040 m.", ligne: "V2 = [[1|0,040]] = +25 δ" },
      { consigne: "Le terme e × V1 × V2", reponse: { valeur: 12.5, unite: "δ", decimales: 1, signe: false },
        aide: "Mets l'écart e en mètres : 40 mm = 0,040 m. Multiplie ensuite 0,040 par 12,5 et par 25.", ligne: "e × V1 × V2 = 0,040 × 12,5 × 25 = 12,5 δ" },
      { consigne: "Vergence V du doublet", reponse: { valeur: 25, unite: "δ", decimales: 0, signe: true },
        aide: "V = V1 + V2 − e × V1 × V2 : additionne les deux vergences, puis retire le terme précédent.", ligne: "V = 12,5 + 25 − 12,5 = +25 δ" },
      { consigne: "Distance focale image f' du doublet", reponse: { valeur: 40, unite: "mm", decimales: 0, signe: true, tolerance: 0.5 },
        aide: "f' = [[1|V]] en mètres, puis convertis en millimètres.", ligne: "f' = [[1|V]] = [[1|25]] = 0,040 m = 40 mm" }
    ],
    explication: "La même formule écrite avec les focales donne le même résultat : f' = [[f'1 × f'2|f'1 + f'2 − e]] = [[80 × 40|80 + 40 − 40]] = [[3 200|80]] = 40 mm."
  },
  {
    id: "U42-141", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément", type: "pose",
    question: "Lunette de Kepler afocale : objectif de f'ob = 240 mm et de diamètre 48 mm, oculaire de f'oc = 30 mm. L'œil de l'observateur a une pupille de 4 mm. Étudie la lunette étape par étape.",
    etapes: [
      { consigne: "Grossissement G", reponse: { valeur: -8, unite: "", decimales: 0, signe: true },
        aide: "G = −[[f'ob|f'oc]]. Le signe moins : une lunette de Kepler renverse l'image.", ligne: "G = −[[f'ob|f'oc]] = −[[240|30]] = −8" },
      { consigne: "Longueur de la lunette", reponse: { valeur: 270, unite: "mm", decimales: 0, signe: false },
        aide: "Une lunette afocale a ses foyers confondus : longueur = f'ob + f'oc.", ligne: "L = f'ob + f'oc = 240 + 30 = 270 mm" },
      { consigne: "Diamètre du cercle oculaire D'", reponse: { valeur: 6, unite: "mm", decimales: 0, signe: false },
        aide: "D' = [[D|∣G∣]], avec le diamètre D de l'objectif et la valeur absolue du grossissement.", ligne: "D' = [[D|∣G∣]] = [[48|8]] = 6 mm" },
      { consigne: "Part de la lumière qui entre dans l'œil", reponse: { valeur: 44, unite: "%", decimales: 0, signe: false, tolerance: 1 },
        aide: "Le cercle oculaire (6 mm) est plus grand que la pupille (4 mm). Compare les surfaces : [[4²|6²]].", ligne: "[[4²|6²]] = [[16|36]] = 0,44, soit 44 %" }
    ],
    explication: "Le cercle oculaire dépasse la pupille de l'œil : environ 44 % de la lumière captée entre dans l'œil. Pour tout utiliser, il faudrait un cercle oculaire de 4 mm au plus, donc un grossissement d'au moins [[48|4]] = 12 (en valeur absolue)."
  },
  {
    id: "U42-142", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément", type: "pose",
    question: "Un microscope a un objectif de focale f'ob = 10 mm, un intervalle optique Δ = 160 mm et un oculaire de focale f'oc = 25 mm. L'œil sépare deux points vus sous 3 × 10⁻⁴ rad. Étudie le microscope étape par étape.",
    etapes: [
      { consigne: "Grandissement de l'objectif γob", reponse: { valeur: -16, unite: "", decimales: 0, signe: true },
        aide: "γob = −[[Δ|f'ob]] : l'objectif d'un microscope donne une image intermédiaire renversée.", ligne: "γob = −[[Δ|f'ob]] = −[[160|10]] = −16" },
      { consigne: "Grossissement commercial de l'oculaire Gc", reponse: { valeur: 10, unite: "", decimales: 0, signe: false },
        aide: "Gc oculaire = [[250|f'oc]], avec f'oc en millimètres.", ligne: "Gc = [[250|f'oc]] = [[250|25]] = 10" },
      { consigne: "Grossissement commercial du microscope", reponse: { valeur: 160, unite: "", decimales: 0, signe: false },
        aide: "Les deux effets se multiplient. Prends le grandissement de l'objectif en valeur absolue.", ligne: "Gc = ∣γob∣ × Gc oculaire = 16 × 10 = 160" },
      { consigne: "Plus petit détail visible à travers le microscope", reponse: { valeur: 0.47, unite: "µm", decimales: 2, signe: false, tolerance: 0.01 },
        aide: "À l'œil nu à 25 cm : 3 × 10⁻⁴ × 250 mm = 0,075 mm = 75 µm. Divise ensuite par le grossissement.", ligne: "d = [[75|160]] = 0,47 µm" }
    ],
    explication: "À l'œil nu, le plus petit détail séparé à 25 cm vaut 75 µm. Le microscope divise cette taille par son grossissement : [[75|160]] ≈ 0,47 µm. Il faut aussi vérifier la limite due à la diffraction de l'objectif : la plus grande des deux limites l'emporte."
  },
  {
    id: "U42-143", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", type: "pose",
    question: "Dans l'espace d'étude : pupille de rayon 8 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 20 mm, plan des champs en x = 40 mm. Calcule les trois rayons de champ, étape par étape.",
    etapes: [
      { consigne: "Pente de la droite de pleine lumière (bords du même côté)", reponse: { valeur: -0.15, unite: "", decimales: 2, signe: true },
        aide: "La droite passe par (0 ; 8) et (20 ; 5) : pente = [[y2 − y1|x2 − x1]].", ligne: "pente = [[5 − 8|20 − 0]] = −0,15" },
      { consigne: "Rayon du champ de pleine lumière", reponse: { valeur: 2, unite: "mm", decimales: 0, signe: false },
        aide: "En x = 40 : rayon = 8 + pente × 40.", ligne: "r = 8 − 0,15 × 40 = 2 mm" },
      { consigne: "Rayon du champ moyen (droite par le centre de la pupille)", reponse: { valeur: 10, unite: "mm", decimales: 0, signe: false },
        aide: "La droite passe par (0 ; 0) et (20 ; 5) : pente = [[5|20]]. Prolonge-la jusqu'à x = 40.", ligne: "r = [[5|20]] × 40 = 10 mm" },
      { consigne: "Rayon du champ total (bords opposés)", reponse: { valeur: 18, unite: "mm", decimales: 0, signe: false },
        aide: "La droite passe par (0 ; −8) et (20 ; 5) : pente = [[5 − (−8)|20]]. Prolonge-la jusqu'à x = 40.", ligne: "r = −8 + [[13|20]] × 40 = −8 + 26 = 18 mm" }
    ],
    explication: "Comme toujours, le champ de pleine lumière (2 mm) est plus petit que le champ moyen (10 mm), lui-même plus petit que le champ total (18 mm). Entre 2 et 18 mm, l'image s'assombrit peu à peu : c'est le vignettage."
  }
);

// ---------- Mini-sujet (cas pratique) : ses questions portent cas: "CAS-U42-01" et etape: 1, 2, 3… ----------
CAS.push({
  id: "CAS-U42-01",
  epreuve: "U42",
  titre: "Des jumelles de théâtre pour une abonnée de l'opéra",
  contexte: "Une cliente abonnée à l'opéra veut mieux voir les chanteurs depuis sa place au balcon, à 24 m de la scène. Tu lui proposes des jumelles de théâtre : une lunette de Galilée, faite d'un objectif convergent et d'un oculaire divergent, sans prisme. Elle est emmétrope et regarde sans accommoder.",
  annexe: { titre: "Notice des jumelles", colonnes: ["Caractéristique", "Valeur"], lignes: [["Grossissement", "3×"], ["Objectif (convergent)", "f'1 = +120 mm, diamètre 40 mm"], ["Oculaire (divergent)", "f'2 = −40 mm, diamètre 20 mm"], ["Distance entre les lentilles", "80 mm"]] }
});
