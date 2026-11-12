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
