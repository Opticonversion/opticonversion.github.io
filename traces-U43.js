// ==============================================================
//  ATELIER DES TRACÉS · Étude technique des systèmes optiques (U43)
//  Montages et chiffres à Opticonversion. Les réponses ne sont jamais écrites ici :
//  le moteur les calcule (relation de conjugaison, lentille après lentille).
//  Les id (U43-1, U43-2…) ne changent jamais : les étoiles des élèves y sont rangées.
// ==============================================================

TRACES.push({
  "id": "U43-1",
  "epreuve": "U43",
  "chapitre": "Chaîne des images",
  "titre": "Le microscope de poche : objectif puis oculaire",
  "regle": "Dans une chaîne de lentilles, l'image donnée par la première lentille devient l'objet de la suivante. On traite les lentilles une par une, dans le sens de la lumière.",
  "consigne": "Trouve l'image B₁ donnée par l'objectif Ob, puis l'image finale B₂ donnée par l'oculaire Oc.",
  "theme": "Chaîne des conjugués",
  "systeme": {
    "objet": {
      "x": -30,
      "h": 4
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 20
      },
      {
        "type": "lentille",
        "nom": "Oc",
        "x": 90,
        "f": 40
      }
    ]
  },
  "vue": {
    "xmin": -60,
    "xmax": 140,
    "hmax": 36,
    "carreauX": 10,
    "carreauY": 4
  },
  "etapes": [
    {
      "action": "rayon",
      "apres": "Ob",
      "rayon": {
        "depuis": "B",
        "par": "parallele"
      },
      "texte": "Le rayon issu de B, parallèle à l'axe : que devient-il après l'objectif ?"
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "Ob",
      "tolerance": 0.8,
      "texte": "Place B₁, l'image de B par l'objectif."
    },
    {
      "action": "rayon",
      "apres": "Oc",
      "rayon": {
        "depuis": "B1",
        "par": "O"
      },
      "texte": "Le rayon issu de B₁ qui passe par le centre de l'oculaire : que devient-il ?"
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "Oc",
      "rayons": [
        "parallele",
        "O"
      ],
      "prolonger": true,
      "tolerance": 0.8,
      "texte": "Place B₂, l'image finale. Attention : elle peut être virtuelle."
    }
  ],
  "conclusion": "B₁ est entre le foyer objet de l'oculaire et l'oculaire : l'image finale est virtuelle, droite par rapport à B₁ et agrandie. C'est le principe du microscope."
});

TRACES.push({
  "id": "U43-2",
  "epreuve": "U43",
  "chapitre": "Chaîne des images",
  "titre": "Deux lentilles, sans rayon donné",
  "regle": "Pour placer une image sans aide, trace toi-même deux rayons particuliers : le rayon parallèle à l'axe (il ressort par F') et le rayon qui passe par le centre (il n'est pas dévié).",
  "consigne": "Place B₁ puis B₂, puis calcule la position de l'image finale par rapport à L2.",
  "theme": "Chaîne des conjugués",
  "systeme": {
    "objet": {
      "x": -120,
      "h": 10
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "L1",
        "x": 0,
        "f": 60
      },
      {
        "type": "lentille",
        "nom": "L2",
        "x": 170,
        "f": 30
      }
    ]
  },
  "vue": {
    "xmin": -140,
    "xmax": 260,
    "hmax": 20,
    "carreauX": 20,
    "carreauY": 5
  },
  "etapes": [
    {
      "action": "placer",
      "quoi": "image",
      "apres": "L1",
      "tolerance": 1
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "L2",
      "tolerance": 1
    },
    {
      "action": "calcul",
      "grandeur": "OA'",
      "apres": "L2",
      "decimales": 0,
      "unite": "mm",
      "texte": "Calcule O₂A₂, la position de l'image finale par rapport à L2."
    }
  ],
  "conclusion": "Deux images réelles successives : l'image finale est droite par rapport à l'objet, car chaque lentille la renverse une fois."
});

TRACES.push({
  "id": "U43-3",
  "epreuve": "U43",
  "chapitre": "Chaîne des images",
  "titre": "La lunette terrestre : trois lentilles",
  "regle": "Une lunette terrestre ajoute une lentille entre l'objectif et l'oculaire (le véhicule) pour redresser l'image. La méthode ne change pas : une lentille à la fois.",
  "consigne": "Suis l'image à travers l'objectif L1, le véhicule L2 et l'oculaire L3.",
  "theme": "Chaîne des conjugués",
  "systeme": {
    "objet": {
      "x": -100,
      "h": 6
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "L1",
        "x": 0,
        "f": 50
      },
      {
        "type": "lentille",
        "nom": "L2",
        "x": 160,
        "f": 40
      },
      {
        "type": "lentille",
        "nom": "L3",
        "x": 300,
        "f": 30
      }
    ]
  },
  "vue": {
    "xmin": -120,
    "xmax": 320,
    "hmax": 40,
    "carreauX": 20,
    "carreauY": 5
  },
  "etapes": [
    {
      "action": "rayon",
      "apres": "L1",
      "rayon": {
        "depuis": "B",
        "par": "O"
      }
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "L1",
      "tolerance": 0.8
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "L2",
      "rayons": [
        "parallele",
        "O"
      ],
      "tolerance": 0.8
    },
    {
      "action": "rayon",
      "apres": "L3",
      "rayon": {
        "depuis": "B2",
        "par": "parallele"
      }
    },
    {
      "action": "placer",
      "quoi": "image",
      "apres": "L3",
      "rayons": [
        "parallele",
        "O"
      ],
      "prolonger": true,
      "tolerance": 0.8
    }
  ],
  "conclusion": "Après le véhicule, l'image B₂ est de nouveau droite. L'oculaire en donne une image virtuelle agrandie, dans le même sens que l'objet : c'est l'intérêt d'une lunette terrestre."
});

TRACES.push({
  "id": "U43-4",
  "epreuve": "U43",
  "chapitre": "Pupille",
  "titre": "L'objectif photo et son iris",
  "regle": "La pupille d'entrée est le diaphragme (ou son image dans l'espace objet) vu sous le plus petit angle depuis A, le point de l'objet sur l'axe.",
  "consigne": "Les images des diaphragmes dans l'espace objet sont dessinées. Désigne la pupille d'entrée.",
  "theme": "Étude des champs",
  "systeme": {
    "objet": {
      "x": -200,
      "h": 15
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 50,
        "rayon": 12
      },
      {
        "type": "diaphragme",
        "nom": "Iris",
        "x": 20,
        "rayon": 5
      },
      {
        "type": "diaphragme",
        "nom": "D",
        "x": 40,
        "rayon": 9
      }
    ]
  },
  "vue": {
    "xmin": -220,
    "xmax": 240,
    "hmax": 90,
    "carreauX": 20,
    "carreauY": 10
  },
  "etapes": [
    {
      "action": "designer",
      "quoi": "pupille-entree",
      "images": true
    }
  ],
  "conclusion": "L'iris n'est pas le plus grand diaphragme, mais son image est vue sous le plus petit angle depuis A : c'est lui qui limite la lumière qui entre."
});

TRACES.push({
  "id": "U43-5",
  "epreuve": "U43",
  "chapitre": "Pupille",
  "titre": "Le microscope : chercher soi-même les images",
  "regle": "Avant de comparer les angles, il faut ramener chaque diaphragme dans l'espace objet : on cherche son image à travers les lentilles placées avant lui.",
  "consigne": "Place l'image du diaphragme D à travers l'objectif, puis désigne la pupille d'entrée.",
  "theme": "Étude des champs",
  "systeme": {
    "objet": {
      "x": -30,
      "h": 3
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 20,
        "rayon": 6
      },
      {
        "type": "diaphragme",
        "nom": "D",
        "x": 10,
        "rayon": 2.5
      }
    ]
  },
  "vue": {
    "xmin": -40,
    "xmax": 70,
    "hmax": 25,
    "carreauX": 5,
    "carreauY": 2.5
  },
  "etapes": [
    {
      "action": "placer",
      "quoi": "image-diaphragme",
      "diaphragme": "D",
      "tolerance": 0.8,
      "texte": "Place D', l'image du diaphragme D à travers l'objectif."
    },
    {
      "action": "designer",
      "quoi": "pupille-entree"
    }
  ],
  "conclusion": "D est entre l'objectif et son foyer : son image D' est virtuelle, plus loin et plus grande. Vue depuis A, elle reste pourtant sous un angle plus petit que la monture de l'objectif."
});

TRACES.push({
  "id": "U43-6",
  "epreuve": "U43",
  "chapitre": "Champs",
  "titre": "Le champ de pleine lumière d'un objectif",
  "regle": "La lucarne d'entrée est vue sous le plus petit angle depuis le centre de la pupille d'entrée. Le bord du champ de pleine lumière : la droite qui joint deux bords du même côté de la pupille et de la lucarne.",
  "consigne": "Désigne la pupille et la lucarne d'entrée, trace le bord du champ de pleine lumière, puis calcule son rayon dans le plan de l'objet.",
  "theme": "Étude des champs",
  "systeme": {
    "objet": {
      "x": -300,
      "h": 10
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "L",
        "x": 0,
        "f": 100,
        "rayon": 20
      },
      {
        "type": "diaphragme",
        "nom": "D",
        "x": 60,
        "rayon": 6
      }
    ]
  },
  "vue": {
    "xmin": -320,
    "xmax": 180,
    "hmax": 100,
    "carreauX": 20,
    "carreauY": 10
  },
  "etapes": [
    {
      "action": "designer",
      "quoi": "pupille-entree",
      "images": true
    },
    {
      "action": "designer",
      "quoi": "lucarne-entree",
      "images": true
    },
    {
      "action": "relier",
      "quoi": "champ-pleine-lumiere"
    },
    {
      "action": "calcul",
      "grandeur": "rayon-champ",
      "decimales": 0,
      "unite": "mm",
      "texte": "Calcule le rayon du champ de pleine lumière dans le plan de l'objet."
    }
  ],
  "conclusion": "Tous les points de l'objet à moins de ce rayon de l'axe envoient un faisceau qui remplit toute la pupille : leur image est éclairée au maximum."
});

TRACES.push({
  "id": "U43-7",
  "epreuve": "U43",
  "chapitre": "Champs",
  "titre": "Pleine lumière, champ moyen, champ total",
  "regle": "Champ de pleine lumière : bords du même côté. Champ total : bords opposés. Champ moyen : centre de la pupille et bord de la lucarne.",
  "consigne": "Trace les trois limites du champ de ce petit objectif de microscope.",
  "theme": "Étude des champs",
  "systeme": {
    "objet": {
      "x": -40,
      "h": 4
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 25,
        "rayon": 8
      },
      {
        "type": "diaphragme",
        "nom": "D",
        "x": 12,
        "rayon": 3
      }
    ]
  },
  "vue": {
    "xmin": -50,
    "xmax": 80,
    "hmax": 40,
    "carreauX": 5,
    "carreauY": 4
  },
  "etapes": [
    {
      "action": "designer",
      "quoi": "pupille-entree",
      "images": true
    },
    {
      "action": "designer",
      "quoi": "lucarne-entree",
      "images": true
    },
    {
      "action": "relier",
      "quoi": "champ-pleine-lumiere"
    },
    {
      "action": "relier",
      "quoi": "champ-moyen"
    },
    {
      "action": "relier",
      "quoi": "champ-total"
    }
  ],
  "conclusion": "Entre la pleine lumière et le champ total, c'est le champ de contour : l'image s'assombrit vers le bord. Un diaphragme de champ placé dans le plan d'une image réelle le supprimerait."
});

TRACES.push({
  "id": "U43-8",
  "epreuve": "U43",
  "chapitre": "Faisceau",
  "titre": "Le faisceau utile dans un appareil photo",
  "regle": "Le faisceau utile issu d'un point de l'objet s'appuie sur le bord de la pupille d'entrée, puis traverse tout l'instrument jusqu'à l'image.",
  "consigne": "Trouve la pupille d'entrée, puis choisis le bon faisceau issu de B.",
  "theme": "Étude des champs",
  "systeme": {
    "objet": {
      "x": -400,
      "h": 40
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 50,
        "rayon": 15
      },
      {
        "type": "diaphragme",
        "nom": "Iris",
        "x": 15,
        "rayon": 6
      }
    ]
  },
  "vue": {
    "xmin": -420,
    "xmax": 80,
    "hmax": 45,
    "carreauX": 20,
    "carreauY": 5
  },
  "etapes": [
    {
      "action": "designer",
      "quoi": "pupille-entree",
      "images": true
    },
    {
      "action": "faisceau",
      "depuis": "B"
    }
  ],
  "conclusion": "Le faisceau est limité par l'iris, pas par la monture de l'objectif : c'est l'iris qui règle la quantité de lumière qui entre. Le fermer rend l'image plus sombre."
});

TRACES.push({
  "id": "U43-9",
  "epreuve": "U43",
  "chapitre": "Faisceau",
  "titre": "La lunette astronomique",
  "regle": "Une étoile est à l'infini : son image par l'objectif est dans le plan focal image. Lunette réglée pour un emmétrope : ce plan est aussi le plan focal objet de l'oculaire, le faisceau ressort parallèle.",
  "consigne": "Place l'image intermédiaire de l'étoile, suis un rayon dans l'oculaire, choisis le faisceau utile, puis calcule le grossissement.",
  "theme": "Chaîne des conjugués",
  "systeme": {
    "objet": {
      "infini": true,
      "angle": 2
    },
    "elements": [
      {
        "type": "lentille",
        "nom": "Ob",
        "x": 0,
        "f": 200,
        "rayon": 20
      },
      {
        "type": "lentille",
        "nom": "Oc",
        "x": 240,
        "f": 40,
        "rayon": 12
      }
    ]
  },
  "vue": {
    "xmin": -40,
    "xmax": 300,
    "hmax": 25,
    "carreauX": 20,
    "carreauY": 2.5
  },
  "etapes": [
    {
      "action": "placer",
      "quoi": "image",
      "apres": "Ob",
      "tolerance": 0.8
    },
    {
      "action": "rayon",
      "apres": "Oc",
      "rayon": {
        "depuis": "B1",
        "par": "O"
      }
    },
    {
      "action": "faisceau",
      "depuis": "B"
    },
    {
      "action": "calcul",
      "grandeur": "grossissement",
      "decimales": 0,
      "unite": ""
    }
  ],
  "conclusion": "Grossissement d'une lunette afocale : f'objectif / f'oculaire. Le faisceau ressort parallèle, mais plus incliné : l'étoile paraît vue sous un plus grand angle."
});

// ==============================================================
//  Instrument et œil (ajout du 14/11/2026) : l'œil réduit du moteur (60 δ) entre dans la chaîne des images,
//  dessiné à l'échelle (echelle: true), comme sur les documents réponse d'ETSO. Tombé en 2017, 2018, 2019,
//  2021, 2023, 2024. Même lunette dans les deux niveaux : réglée pour un emmétrope, puis pour un myope.
// ==============================================================
TRACES.push({
  id: "U43-10", epreuve: "U43", chapitre: "Instrument et œil",
  titre: "La lunette et l'œil : jusqu'à la rétine",
  regle: "L'œil prolonge la chaîne des images : A → A₁ (objectif) → A₂ (oculaire) → A₃ (œil). Un œil emmétrope qui n'accommode pas forme sur sa rétine R' l'image d'un objet à l'infini : la lunette est réglée pour lui si A₂ est à l'infini, donc si A₁ est au foyer objet de l'oculaire.",
  consigne: "Lunette réglée pour un œil emmétrope : objectif Ob de f' = 60 mm, oculaire Oc de f' = 20 mm, œil placé 20 mm derrière l'oculaire. L'étoile est vue sous 3°. Suis son image jusqu'à la rétine.",
  theme: "Œil et instrument",
  systeme: { objet: { infini: true, angle: 3 }, elements: [
    { type: "lentille", nom: "Ob", x: 0, f: 60 },
    { type: "lentille", nom: "Oc", x: 80, f: 20 },
    { type: "oeil", nom: "Œil", x: 100, ametropie: 0, echelle: true }
  ] },
  vue: { xmin: -20, xmax: 130, hmax: 6, carreauX: 5, carreauY: 0.5 },
  etapes: [
    { action: "placer", quoi: "image", apres: "Ob", rayons: ["O", "F"], texte: "L'étoile est à l'infini : son image B₁ par l'objectif est dans son plan focal image. Place B₁ au croisement des deux rayons." },
    { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon part de B₁ et passe par le centre de l'oculaire. Que devient-il ?" },
    { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "parallele" }, texte: "Ce rayon part de B₁ parallèlement à l'axe. Par où ressort-il de l'oculaire ?" },
    { action: "placer", quoi: "image", apres: "Œil", rayons: ["O", "F"], texte: "Les rayons sortent parallèles : B₂ est à l'infini. L'œil les fait converger. Place B₃, l'image sur la rétine." },
    { action: "calcul", grandeur: "A'B'", apres: "Œil", decimales: 1, unite: "mm", signe: false, texte: "Calcule la taille de l'image A₃B₃ sur la rétine (sans le signe). Aide : tan α' = |G| × tan α, puis taille = (1/60 m) × tan α'." }
  ],
  conclusion: "B₃ tombe exactement sur la rétine : l'œil emmétrope voit l'étoile nette sans accommoder. Grâce au grossissement de 3, son image sur la rétine est 3 fois plus grande qu'à l'œil nu."
});

TRACES.push({
  id: "U43-11", epreuve: "U43", chapitre: "Instrument et œil",
  titre: "Régler la lunette pour un myope",
  regle: "Un myope qui n'accommode pas voit net un point situé à son remotum R, devant l'œil : HR = 1 / R, avec R la réfraction en δ et HR en mètres. On règle la lunette pour que l'image finale A₂B₂ soit en R : l'oculaire se rapproche de l'objectif, A₁ passe juste après le foyer objet de l'oculaire. Relation de Newton : FA × F'A' = −f'².",
  consigne: "Même lunette (Ob : f' = 60 mm ; Oc : f' = 20 mm), regardée par un myope de −5,00 δ qui n'accommode pas. L'oculaire a été réglé pour lui ; l'œil reste 20 mm derrière l'oculaire. Vérifie le réglage, puis chiffre-le.",
  theme: "Œil et instrument",
  systeme: { objet: { infini: true, angle: 1 }, elements: [
    { type: "lentille", nom: "Ob", x: 2, f: 60 },
    { type: "lentille", nom: "Oc", x: 80, f: 20 },
    { type: "oeil", nom: "Œil", x: 100, ametropie: -5, echelle: true }
  ] },
  vue: { xmin: -110, xmax: 130, hmax: 12, carreauX: 5, carreauY: 1 },
  etapes: [
    { action: "placer", quoi: "remotum", texte: "Place le remotum R du myope sur l'axe (calcule d'abord HR)." },
    { action: "placer", quoi: "image", apres: "Ob", rayons: ["O", "F"], texte: "Place B₁, l'image de l'étoile par l'objectif." },
    { action: "placer", quoi: "image", apres: "Oc", rayons: ["parallele", "O"], prolonger: true, texte: "Place B₂, l'image de B₁ par l'oculaire. Les rayons ressortent en s'écartant : prolonge-les vers l'arrière." },
    { action: "placer", quoi: "image", apres: "Œil", rayons: ["O", "F"], texte: "B₂ sert d'objet à l'œil. Place B₃, son image dans l'œil." },
    { action: "calcul", grandeur: "FA", apres: "Oc", decimales: 1, unite: "mm", signe: true, texte: "Pour un emmétrope, A₁ serait sur le foyer objet F₂ de l'oculaire. L'œil est au foyer image F'₂ de l'oculaire, donc F'₂A₂ = HR. Calcule F₂A₁ avec Newton : c'est le déplacement de l'oculaire vers l'objectif." }
  ],
  conclusion: "B₂ est au remotum et B₃ sur la rétine : le myope voit net sans accommoder. L'oculaire a été rapproché de l'objectif de F₂A₁ ; pour un hypermétrope, il faudrait l'éloigner (A₁ avant F₂)."
});

// ==============================================================
//  Chaîne des images, suite (ajout du 15/11/2026) : 4 niveaux de plus dans le chapitre « Chaîne des images »
//  (le moteur les range après U43-3) et 2 dans « Instrument et œil ». Tombé dans les 8 sujets d'ETSO.
// ==============================================================
TRACES.push({
  id: "U43-12", epreuve: "U43", chapitre: "Chaîne des images",
  titre: "Le viseur : l'oculaire travaille en loupe",
  regle: "Chaîne : A → A₁ (objectif) → A' (oculaire). Si A₁ est entre le foyer objet de l'oculaire et l'oculaire, celui-ci agit comme une loupe : l'image finale est virtuelle, du même côté que A₁, et agrandie.",
  consigne: "Objectif Ob (f' = 50 mm), objet à 75 mm devant lui. Oculaire Oc (f' = 40 mm), 170 mm après l'objectif. Construis B₁ puis l'image finale B₂, puis calcule le grandissement total.",
  theme: "Chaîne des conjugués",
  systeme: { objet: { x: -75, h: 6 }, elements: [
    { type: "lentille", nom: "Ob", x: 0, f: 50 },
    { type: "lentille", nom: "Oc", x: 170, f: 40 }
  ] },
  vue: { xmin: -90, xmax: 230, hmax: 30, carreauX: 20, carreauY: 5 },
  etapes: [
    { action: "rayon", apres: "Ob", rayon: { depuis: "B", par: "parallele" }, texte: "Ce rayon part de B parallèlement à l'axe. Que devient-il après l'objectif ?" },
    { action: "placer", quoi: "image", apres: "Ob", rayons: ["parallele", "O"], texte: "Place B₁, l'image de B par l'objectif." },
    { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "parallele" }, texte: "Ce rayon part de B₁ parallèlement à l'axe. Par où ressort-il de l'oculaire ?" },
    { action: "placer", quoi: "image", apres: "Oc", rayons: ["parallele", "O"], prolonger: true, texte: "Les rayons ressortent en s'écartant : prolonge-les vers l'arrière et place B₂." },
    { action: "calcul", grandeur: "gamma", decimales: 0, unite: "", signe: true, texte: "Calcule le grandissement total γ = A₂B₂ / AB, avec son signe." }
  ],
  conclusion: "Chaîne : A → A₁ réelle (150 mm après Ob, entre Foc et Oc) → A₂ virtuelle, 40 mm avant Oc. γ₁ = −2 et γ₂ = +2 : γ = −4."
});

TRACES.push({
  id: "U43-13", epreuve: "U43", chapitre: "Chaîne des images",
  titre: "Objet au foyer : l'image intermédiaire à l'infini",
  regle: "Un point placé au foyer objet de L1 donne une image à l'infini : les rayons sortent parallèles. L2 reçoit donc un objet à l'infini et en forme l'image dans son plan focal image. Chaîne : A = F1 → A₁ à l'infini → A' = F'2.",
  consigne: "L1 (f'1 = 40 mm), objet placé à son foyer objet. L2 (f'2 = 60 mm), 80 mm après L1. Suis les rayons dans L1, puis place l'image finale B₂ et calcule sa taille.",
  theme: "Chaîne des conjugués",
  systeme: { objet: { x: -40, h: 5 }, elements: [
    { type: "lentille", nom: "L1", x: 0, f: 40 },
    { type: "lentille", nom: "L2", x: 80, f: 60 }
  ] },
  vue: { xmin: -50, xmax: 160, hmax: 10, carreauX: 10, carreauY: 2 },
  etapes: [
    { action: "rayon", apres: "L1", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon part de B et passe par le centre de L1. Que devient-il ?" },
    { action: "rayon", apres: "L1", rayon: { depuis: "B", par: "parallele" }, texte: "Ce rayon part de B parallèlement à l'axe. Que devient-il après L1 ?" },
    { action: "placer", quoi: "image", apres: "L2", rayons: ["O", "F"], texte: "Les rayons sortent de L1 parallèles entre eux : B₁ est à l'infini. Place B₂, l'image donnée par L2." },
    { action: "calcul", grandeur: "A'B'", apres: "L2", decimales: 1, unite: "mm", signe: true, texte: "Calcule A₂B₂, la taille de l'image finale, avec son signe." }
  ],
  conclusion: "B₂ est dans le plan focal image de L2, quelle que soit la distance entre les lentilles. Sa taille vaut −f'2 × AB / f'1 = −60 × 5 / 40 = −7,5 mm."
});

TRACES.push({
  id: "U43-14", epreuve: "U43", chapitre: "Chaîne des images",
  titre: "Une divergente reçoit un objet virtuel",
  regle: "L1 fait converger la lumière vers A₁, mais L2 est placée avant ce point : A₁ est un objet virtuel pour L2. Une divergente peut alors donner une image réelle, plus loin que A₁.",
  consigne: "L1 (f'1 = 40 mm), objet à 60 mm devant elle. L2 divergente (f'2 = −60 mm), 90 mm après L1. Place B₁ comme si L2 n'existait pas, puis l'image finale B₂, puis calcule O₂A₂.",
  theme: "Chaîne des conjugués",
  systeme: { objet: { x: -60, h: 5 }, elements: [
    { type: "lentille", nom: "L1", x: 0, f: 40 },
    { type: "lentille", nom: "L2", x: 90, f: -60 }
  ] },
  vue: { xmin: -70, xmax: 170, hmax: 25, carreauX: 10, carreauY: 5 },
  etapes: [
    { action: "placer", quoi: "image", apres: "L1", rayons: ["parallele", "O"], prolonger: true, texte: "Place B₁, là où les rayons issus de B se croiseraient sans L2." },
    { action: "rayon", apres: "L2", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon vise B₁ en passant par le centre de L2. Que devient-il ?" },
    { action: "placer", quoi: "image", apres: "L2", rayons: ["O", "parallele"], texte: "Place l'image finale B₂ au croisement des rayons qui sortent de L2." },
    { action: "calcul", grandeur: "OA'", apres: "L2", decimales: 0, unite: "mm", signe: true, texte: "Calcule O₂A₂, la position de l'image finale par rapport à L2." }
  ],
  conclusion: "O₂A₁ = +30 mm (objet virtuel). La divergente écarte les rayons : l'image se forme plus loin, à 60 mm après L2, réelle et deux fois plus grande que A₁B₁."
});

TRACES.push({
  id: "U43-15", epreuve: "U43", chapitre: "Chaîne des images",
  titre: "Défi : deux lentilles sans aide",
  regle: "Sur la copie, on écrit la chaîne avant de tracer : A → A₁ → A₂, avec la nature de chaque image (réelle ou virtuelle) et les positions particulières. Puis on construit chaque image avec deux rayons particuliers.",
  consigne: "L1 (f'1 = 60 mm), objet à 120 mm devant elle. L2 (f'2 = 40 mm), 90 mm après L1. Construis B₁ et B₂ sans rayon donné, puis calcule O₂A₂ au dixième.",
  theme: "Chaîne des conjugués",
  systeme: { objet: { x: -120, h: 5 }, elements: [
    { type: "lentille", nom: "L1", x: 0, f: 60 },
    { type: "lentille", nom: "L2", x: 90, f: 40 }
  ] },
  vue: { xmin: -130, xmax: 140, hmax: 8, carreauX: 10, carreauY: 1 },
  etapes: [
    { action: "placer", quoi: "image", apres: "L1", rayons: ["parallele", "O"], construire: true, prolonger: true, texte: "Place B₁, l'image de B par L1 seule. Trace toi-même les rayons." },
    { action: "placer", quoi: "image", apres: "L2", rayons: ["O", "parallele"], construire: true, texte: "Place B₂, l'image finale donnée par L2." },
    { action: "calcul", grandeur: "OA'", apres: "L2", decimales: 1, unite: "mm", signe: true, texte: "Calcule O₂A₂, la position de l'image finale par rapport à L2." }
  ],
  conclusion: "Chaîne : A → A₁ (120 mm après L1, donc 30 mm après L2 : objet virtuel) → A₂ réelle, à 17,1 mm après L2."
});

TRACES.push({
  id: "U43-16", epreuve: "U43", chapitre: "Instrument et œil",
  titre: "Le microscope et l'œil : jusqu'à la rétine",
  regle: "Microscope réglé pour un emmétrope qui n'accommode pas : A → A₁ = Foc (objectif) → A₂ à l'infini (oculaire) → A₃ = F'œil, sur la rétine. L'œil est placé au foyer image de l'oculaire.",
  consigne: "Objectif Ob (f' = 10 mm), préparation à 12 mm devant lui. Oculaire Oc (f' = 20 mm), 80 mm après l'objectif. Œil emmétrope, 20 mm après l'oculaire. Suis l'image jusqu'à la rétine.",
  theme: "Œil et instrument",
  systeme: { objet: { x: -12, h: 1 }, elements: [
    { type: "lentille", nom: "Ob", x: 0, f: 10 },
    { type: "lentille", nom: "Oc", x: 80, f: 20 },
    { type: "oeil", nom: "Œil", x: 100, ametropie: 0, echelle: true }
  ] },
  vue: { xmin: -20, xmax: 125, hmax: 8, carreauX: 5, carreauY: 1 },
  etapes: [
    { action: "placer", quoi: "image", apres: "Ob", rayons: ["parallele", "O"], texte: "Place B₁, l'image de la préparation par l'objectif." },
    { action: "calcul", grandeur: "FA", apres: "Oc", decimales: 0, unite: "mm", signe: true, texte: "Calcule F₂A₁, la position de A₁ par rapport au foyer objet de l'oculaire." },
    { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon part de B₁ et passe par le centre de l'oculaire. Que devient-il ?" },
    { action: "placer", quoi: "image", apres: "Œil", rayons: ["O", "F"], texte: "Les rayons sortent de l'oculaire parallèles : B₂ est à l'infini. Place B₃, son image sur la rétine." },
    { action: "calcul", grandeur: "A'B'", apres: "Œil", decimales: 1, unite: "mm", signe: false, texte: "Calcule la taille de l'image A₃B₃ sur la rétine (sans le signe)." }
  ],
  conclusion: "A₁ est sur Foc : l'image finale est à l'infini et l'œil emmétrope la voit nette sans accommoder, sur sa rétine. La préparation de 1 mm donne une image rétinienne d'environ 4 mm."
});

TRACES.push({
  id: "U43-17", epreuve: "U43", chapitre: "Instrument et œil",
  titre: "La loupe pour un myope sans lunettes",
  regle: "Un myope qui n'accommode pas voit net à son remotum R. L'image donnée par la loupe doit donc être sur R : A → A₁ = R (loupe) → A₂ sur la rétine (œil). Si l'œil est au foyer image de la loupe, Newton donne la place de l'objet : FA × F'A' = −f'².",
  consigne: "Loupe L (f' = 50 mm), œil myope de −10 δ placé à son foyer image, sans lunettes et sans accommoder. Le petit objet est déjà à la bonne place. Vérifie la chaîne, puis chiffre la position de l'objet.",
  theme: "Œil et instrument",
  systeme: { objet: { x: -25, h: 4 }, elements: [
    { type: "lentille", nom: "L", x: 0, f: 50 },
    { type: "oeil", nom: "Œil", x: 50, ametropie: -10, echelle: true }
  ] },
  vue: { xmin: -70, xmax: 80, hmax: 10, carreauX: 5, carreauY: 1 },
  etapes: [
    { action: "placer", quoi: "remotum", texte: "Place le remotum R du myope sur l'axe (calcule d'abord HR)." },
    { action: "placer", quoi: "image", apres: "L", rayons: ["parallele", "O"], prolonger: true, texte: "Place B₁, l'image de B par la loupe. Les rayons ressortent en s'écartant : prolonge-les vers l'arrière." },
    { action: "placer", quoi: "image", apres: "Œil", rayons: ["O", "parallele"], texte: "B₁ sert d'objet à l'œil. Place B₂, son image dans l'œil." },
    { action: "calcul", grandeur: "FA", apres: "L", decimales: 0, unite: "mm", signe: true, texte: "L'œil est en F', donc F'A₁ = HR. Calcule FA, la position de l'objet par rapport au foyer objet de la loupe, avec Newton." }
  ],
  conclusion: "A₁ tombe sur R et A₂ sur la rétine : le myope voit net sans accommoder. FA = −2 500 / (−100) = +25 mm : l'objet est entre F et la loupe, plus près d'elle que pour un emmétrope."
});

// ==============================================================
//  Le monoculaire 8×40 du sujet blanc U43 (SUJET-U43-01, ajout du 28/11/2026) : mêmes chiffres que le sujet.
//  U43-18 : le champ entre l'objectif et l'oculaire, sans le diaphragme de champ (à quoi il sert).
//  U43-19 : le cercle oculaire, image de la monture de l'objectif par l'oculaire.
// ==============================================================
TRACES.push({
  // angle négatif : B₁ au-dessus de l'axe, sinon la flèche A₁B₁ cache F'obj (confondu avec Foc)
  id: "U43-18", epreuve: "U43", chapitre: "Champs",
  titre: "Le monoculaire sans son diaphragme de champ",
  regle: "Entre l'objectif et l'oculaire, la pupille est la monture de l'objectif et la lucarne celle de l'oculaire. Le plan des champs, plan focal de l'objectif, est ENTRE les deux : la pleine lumière s'appuie sur les bords opposés, le champ total sur les bords du même côté.",
  consigne: "Monoculaire 8×40 : objectif Ob (f' = 200 mm, diamètre 40 mm), oculaire Oc (f' = 25 mm, diamètre 24 mm), 225 mm après Ob. On a retiré son diaphragme de champ pour voir à quoi il sert. L'oiseau est à l'infini. Étudie le champ entre Ob et Oc.",
  theme: "Étude des champs",
  systeme: { objet: { infini: true, angle: -3 }, elements: [
    { type: "lentille", nom: "Ob", x: 0, f: 200, rayon: 20 },
    { type: "lentille", nom: "Oc", x: 225, f: 25, rayon: 12 }
  ] },
  espaceChamps: { apres: "Ob", pupille: "Ob", lucarne: "Oc" },
  vue: { xmin: -20, xmax: 260, hmax: 25, carreauX: 20, carreauY: 2.5 },
  etapes: [
    { action: "placer", quoi: "image", apres: "Ob", rayons: ["O", "F"], texte: "L'oiseau est à l'infini : son image B₁ se forme dans le plan focal image de l'objectif. C'est le plan des champs. Place B₁." },
    { action: "relier", quoi: "champ-pleine-lumiere", texte: "Touche les deux bords qui limitent le champ de pleine lumière dans le plan de B₁. Ce plan est-il entre Ob et Oc ?" },
    { action: "calcul", grandeur: "rayon-champ", decimales: 1, unite: "mm", signe: false, texte: "Calcule le rayon du champ de pleine lumière dans le plan focal de l'objectif (Thalès entre le bord bas de Ob et le bord haut de Oc)." },
    { action: "relier", quoi: "champ-total", texte: "Champ total : touche les deux bords qui le limitent." }
  ],
  conclusion: "Sans diaphragme, l'image s'assombrit entre 8,4 mm et 12,9 mm de l'axe : c'est le champ de contour. Le fabricant place donc dans ce plan un diaphragme de 14 mm de diamètre (rayon 7 mm, plus petit que la pleine lumière) : le bord du champ devient net, tan α = 7 / 200 = 0,035, soit 70 m à 1 000 m."
});

TRACES.push({
  id: "U43-19", epreuve: "U43", chapitre: "Instrument et œil",
  titre: "Le cercle oculaire du monoculaire",
  regle: "Le cercle oculaire est la pupille de sortie : l'image de la pupille d'entrée (ici la monture de l'objectif) donnée par l'oculaire. On y place la pupille de l'œil pour voir tout le champ ; sa distance à l'oculaire est le dégagement oculaire.",
  consigne: "Monoculaire 8×40 réglé sur l'infini : oculaire Oc (f' = 25 mm) à 225 mm de l'objectif. L'objet AB est la monture de l'objectif : A au centre, B au bord, à 20 mm de l'axe. Construis son image par l'oculaire, puis chiffre le cercle oculaire.",
  theme: "Étude des champs",
  systeme: { objet: { x: 0, h: 20 }, elements: [
    { type: "lentille", nom: "Oc", x: 225, f: 25 }
  ] },
  vue: { xmin: -10, xmax: 290, hmax: 22, carreauX: 10, carreauY: 2 },
  etapes: [
    { action: "rayon", apres: "Oc", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon part du bord B de la monture et passe par le centre de l'oculaire. Que devient-il ?" },
    { action: "rayon", apres: "Oc", rayon: { depuis: "B", par: "parallele" }, texte: "Ce rayon part de B parallèlement à l'axe. Par où ressort-il de l'oculaire ?" },
    { action: "placer", quoi: "image", apres: "Oc", rayons: ["O", "parallele"], texte: "Place B', l'image du bord de la monture : c'est le bord du cercle oculaire." },
    { action: "calcul", grandeur: "OA'", apres: "Oc", decimales: 1, unite: "mm", signe: true, texte: "Calcule O₂A', la position du cercle oculaire par rapport à l'oculaire." },
    { action: "calcul", grandeur: "A'B'", apres: "Oc", decimales: 1, unite: "mm", signe: true, texte: "Calcule A'B', le rayon du cercle oculaire, avec son signe." }
  ],
  conclusion: "Le cercle oculaire est à 28,1 mm après l'oculaire : c'est le dégagement de 28 mm annoncé par le fabricant. Son diamètre, 2 × 2,5 = 5 mm, vaut le diamètre de l'objectif divisé par le grossissement : 40 / 8."
});
