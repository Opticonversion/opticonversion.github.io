// =====================================================================
//  ATELIER DES TRACÉS · U42 (Optique géométrique et physique)
//  Chaque niveau décrit seulement le montage et les gestes de l'élève :
//  le moteur (traces.js + optique.js) calcule toujours la bonne réponse.
//  Format complet : notes/coordination/etape2-formats.md
//  id : "U42-<n>", jamais réutilisé (les étoiles des élèves y sont rangées).
//  Longueurs en mm, lumière de gauche à droite, lentille en x = 0.
// =====================================================================

// Cadrage des 9 premiers niveaux : 1 carreau = 20 mm, lentille au milieu
const VUE_U42_LENTILLE = { xmin: -240, xmax: 240, hmax: 150, carreauX: 20, carreauY: 20 };

TRACES.push(
  {
    id: "U42-1", epreuve: "U42", chapitre: "Lentille mince", titre: "Le rayon parallèle à l'axe",
    regle: "Règle 1 : un rayon qui arrive parallèle à l'axe ressort en passant par le foyer image F'.",
    consigne: "Un rayon part de B parallèlement à l'axe. Par où ressort-il après la lentille ?",
    systeme: { objet: { x: -180, h: 70 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 80 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "rayon", apres: "L", rayon: { depuis: "B", par: "parallele" } }]
  },
  {
    id: "U42-2", epreuve: "U42", chapitre: "Lentille mince", titre: "Le rayon qui passe par le centre",
    regle: "Règle 2 : un rayon qui passe par le centre optique O n'est pas dévié.",
    consigne: "Ce rayon passe par le centre O de la lentille. Que devient-il ?",
    systeme: { objet: { x: -180, h: 70 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 80 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "rayon", apres: "L", rayon: { depuis: "B", par: "O" } }]
  },
  {
    id: "U42-3", epreuve: "U42", chapitre: "Lentille mince", titre: "Le rayon qui passe par le foyer objet",
    regle: "Règle 3 : un rayon qui passe par le foyer objet F ressort parallèle à l'axe.",
    consigne: "Ce rayon passe par le foyer objet F avant la lentille. Que devient-il ?",
    systeme: { objet: { x: -200, h: 60 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 80 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "rayon", apres: "L", rayon: { depuis: "B", par: "F" } }]
  },
  {
    id: "U42-4", epreuve: "U42", chapitre: "Lentille mince", titre: "Place l'image",
    regle: "L'image B' est le point où les rayons issus de B se croisent après la lentille.",
    consigne: "Les trois rayons sont tracés. Amène B' là où ils se croisent : touche le croisement, ou fais glisser le réticule doré. Puis valide.",
    systeme: { objet: { x: -200, h: 60 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 80 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "placer", quoi: "image", apres: "L", rayons: ["parallele", "O", "F"], tolerance: 0.8 }]
  },
  {
    id: "U42-5", epreuve: "U42", chapitre: "Lentille mince", titre: "Construis l'image toi-même",
    regle: "Deux rayons suffisent : le parallèle (qui ressort par F') et celui qui passe par O.",
    consigne: "Choisis d'abord le trajet des deux rayons, puis place l'image B'.",
    systeme: { objet: { x: -100, h: 40 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 60 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [
      { action: "rayon", apres: "L", rayon: { depuis: "B", par: "parallele" } },
      { action: "rayon", apres: "L", rayon: { depuis: "B", par: "O" } },
      { action: "placer", quoi: "image", apres: "L", tolerance: 0.8, texte: "Amène B' au croisement des deux rayons (touche le croisement, ou fais glisser le réticule doré), puis valide." }
    ]
  },
  {
    id: "U42-6", epreuve: "U42", chapitre: "Lentille mince", titre: "La loupe : image virtuelle",
    regle: "Objet entre F et la lentille : les rayons ressortent en s'écartant. L'image est là où se croisent leurs prolongements, du côté de l'objet : elle est virtuelle et droite.",
    consigne: "Les rayons ne se croisent pas après la lentille. Touche chaque rayon pour le prolonger en pointillés, puis pose B' sur leur croisement.",
    systeme: { objet: { x: -60, h: 30 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 100 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "placer", quoi: "image", apres: "L", rayons: ["parallele", "O"], prolonger: true, tolerance: 0.8 }]
  },
  {
    id: "U42-7", epreuve: "U42", chapitre: "Lentille mince", titre: "Lentille divergente : le rayon parallèle",
    regle: "Lentille divergente : F' est AVANT la lentille. Un rayon parallèle à l'axe ressort en s'écartant, comme s'il venait de F'.",
    consigne: "Avec une lentille divergente, par où ressort ce rayon parallèle à l'axe ?",
    systeme: { objet: { x: -150, h: 60 }, elements: [{ type: "lentille", nom: "L", x: 0, f: -100 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "rayon", apres: "L", rayon: { depuis: "B", par: "parallele" } }]
  },
  {
    id: "U42-8", epreuve: "U42", chapitre: "Lentille mince", titre: "Lentille divergente : l'image",
    regle: "Avec une lentille divergente, l'image d'un objet réel est toujours virtuelle, droite et plus petite, entre F' et la lentille.",
    consigne: "Place l'image B' donnée par la lentille divergente : touche les rayons qui sortent pour les prolonger en pointillés, puis pose B' sur leur croisement.",
    systeme: { objet: { x: -150, h: 60 }, elements: [{ type: "lentille", nom: "L", x: 0, f: -100 }] },
    vue: VUE_U42_LENTILLE,
    etapes: [{ action: "placer", quoi: "image", apres: "L", rayons: ["parallele", "O"], prolonger: true, tolerance: 0.8 }]
  },
  {
    id: "U42-9", epreuve: "U42", chapitre: "Lentille mince", titre: "Défi : 5 tracés sans aide",
    regle: "Plus de rayons tracés d'avance ni d'indice : trace-les toi-même (de B vers O ; de B vers la lentille à la même hauteur, puis vers F'), puis pose B' sur leur croisement. 4 bonnes réponses sur 5 pour réussir.",
    consigne: "Construis l'image B' de l'objet AB.",
    defi: { manches: 5, reussir: 4 }
  }
);

// =====================================================================
//  Niveaux 10 et suivants (qcm-ogp) : loupe, doublets, lunettes, champs.
//  Du plus facile au plus dur. Chaque chapitre se débloque niveau après niveau.
//  Même grille que plus haut (24 × 15 carreaux), mais avec DEUX échelles,
//  comme sur les documents réponse des sujets : 1 carreau = 10 mm le long
//  de l'axe et 4 mm en hauteur.
//  Montages relus avec optique.js le 12/11/2026 : tout tient dans le cadre.
//  Champs : dans les trois montages, le plan de l'objet est EN DEHORS de
//  l'intervalle pupille-lucarne (sinon « bords du même côté » serait faux).
// =====================================================================
const VUE_U42_CENTRE  = { xmin: -120, xmax: 120, hmax: 30, carreauX: 10, carreauY: 4 };   // première lentille au milieu
const VUE_U42_LUNETTE = { xmin: -50,  xmax: 190, hmax: 30, carreauX: 10, carreauY: 4 };   // objectif à gauche, oculaire à droite
const VUE_U42_CHAMPS  = { xmin: -90,  xmax: 150, hmax: 30, carreauX: 10, carreauY: 4 };   // objet, lentille et image
const VUE_U42_ZOOM    = { xmin: -40,  xmax: 80,  hmax: 22.5, carreauX: 5, carreauY: 3 };  // doublet serré, vu de près

TRACES.push(

  // ---------------- Loupe ----------------
  {
    id: "U42-10", epreuve: "U42", chapitre: "Loupe", titre: "La loupe : image à l'infini et grossissement",
    regle: "Objet dans le plan focal objet de la loupe : tous les rayons issus de B ressortent parallèles entre eux. L'image est à l'infini et l'œil emmétrope la voit sans accommoder. Grossissement commercial : Gc = P / 4, avec P = 1 / f' en dioptries (f' en mètres).",
    consigne: "L'objet AB est dans le plan focal objet d'une loupe de f' = 50 mm. Trace deux rayons issus de B, puis calcule le grossissement commercial.",
    theme: "Loupe et microscope",
    systeme: { objet: { x: -50, h: 10 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 50 }, { type: "oeil", nom: "Œil", x: 80 }] },
    vue: VUE_U42_CENTRE,
    etapes: [
      { action: "rayon", apres: "L", rayon: { depuis: "B", par: "parallele" }, texte: "Ce rayon part de B parallèlement à l'axe. Par où ressort-il ?" },
      { action: "rayon", apres: "L", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon part de B et passe par le centre O. Que devient-il ?" },
      { action: "calcul", grandeur: "grossissement", decimales: 0, unite: "", signe: false, texte: "Les deux rayons ressortent parallèles : l'image est à l'infini. Calcule le grossissement commercial de la loupe." }
    ],
    conclusion: "Les rayons issus de B ressortent parallèles : l'œil, placé derrière la loupe, voit l'image à l'infini sans accommoder. Plus la focale est courte, plus la loupe grossit."
  },

  // ---------------- Doublets ----------------
  // Le moteur trace les rayons lentille par lentille, à partir de l'objet de chaque lentille.
  // On construit donc l'image d'un objet À L'INFINI : elle se forme dans le plan focal image
  // du doublet, et F' est son pied sur l'axe. B₁ tombe derrière L2 (objet virtuel pour L2).
  {
    id: "U42-11", epreuve: "U42", chapitre: "Doublets", titre: "Doublet : trouve le foyer image",
    regle: "L'image d'un objet à l'infini se forme dans le plan focal image du système. On la construit lentille après lentille : B₁ donnée par L1 sert d'objet à L2, qui donne B₂. Le foyer image F' du doublet est le pied de B₂ sur l'axe. Sa distance focale : f' = f'1 × f'2 / (f'1 + f'2 − e).",
    consigne: "Doublet de symbole (3 ; 2 ; 1) avec a = 20 mm : f'1 = 60 mm, e = 40 mm, f'2 = 20 mm. L'objet est à l'infini, vu sous 7°. Construis son image, place F', puis calcule f'.",
    theme: "Doublets et achromatisme",
    systeme: { objet: { infini: true, angle: 7 }, elements: [{ type: "lentille", nom: "L1", x: 0, f: 60 }, { type: "lentille", nom: "L2", x: 40, f: 20 }] },
    vue: VUE_U42_ZOOM,
    etapes: [
      { action: "rayon", apres: "L1", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon vient de B, à l'infini, et passe par le centre de L1. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "L1", rayons: ["O", "F"], tolerance: 0.6, texte: "Fais comme si L2 n'était pas là : B₁ est dans le plan focal image de L1, là où les deux rayons se croiseraient. Place B₁." },
      { action: "rayon", apres: "L2", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon vise B₁ en passant par le centre de L2. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "L2", rayons: ["O", "parallele"], tolerance: 0.6, texte: "Deux rayons qui visaient B₁ sont tracés après L2. Place l'image finale B₂ à leur croisement." },
      { action: "placer", quoi: "foyer-image", tolerance: 0.5, texte: "B₂ est l'image d'un objet à l'infini : elle est dans le plan focal image du doublet. Place F' sur l'axe." },
      { action: "calcul", grandeur: "f-systeme", decimales: 0, unite: "mm", signe: true, texte: "Calcule la distance focale image f' du doublet." }
    ],
    conclusion: "F' n'est ni le foyer de L1 ni celui de L2 : c'est l'image du foyer F'₁ donnée par L2. Et f' ne se mesure pas depuis L2, mais depuis le plan principal image H'."
  },
  {
    id: "U42-12", epreuve: "U42", chapitre: "Doublets", titre: "Le téléobjectif : plus court que sa focale",
    regle: "Une lentille convergente suivie d'une divergente forme un téléobjectif. La divergente fait converger les rayons plus loin : le foyer image F' recule, et la distance focale f' devient plus grande que la longueur du tube.",
    consigne: "Doublet de symbole (4 ; 2 ; −3) avec a = 10 mm : f'1 = 40 mm, e = 20 mm, f'2 = −30 mm. L'objet est à l'infini, vu sous 7°. Construis son image, place F', puis calcule f'.",
    theme: "Doublets et achromatisme",
    systeme: { objet: { infini: true, angle: 7 }, elements: [{ type: "lentille", nom: "L1", x: 0, f: 40 }, { type: "lentille", nom: "L2", x: 20, f: -30 }] },
    vue: VUE_U42_CENTRE,
    etapes: [
      { action: "rayon", apres: "L1", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon vient de B, à l'infini, et passe par le centre de L1. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "L1", rayons: ["O", "F"], tolerance: 0.6, texte: "Fais comme si L2 n'était pas là : B₁ est dans le plan focal image de L1, là où les deux rayons se croiseraient. Place B₁." },
      { action: "rayon", apres: "L2", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon vise B₁ en passant par le centre de L2, qui est divergente. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "L2", rayons: ["O", "parallele"], tolerance: 0.6, texte: "Deux rayons qui visaient B₁ sont tracés après L2. Place l'image finale B₂ à leur croisement." },
      { action: "placer", quoi: "foyer-image", tolerance: 0.5, texte: "B₂ est dans le plan focal image du doublet. Place F' sur l'axe." },
      { action: "calcul", grandeur: "f-systeme", decimales: 0, unite: "mm", signe: true, texte: "Calcule la distance focale image f' du doublet." }
    ],
    conclusion: "Compare la distance de L1 au foyer F' avec la focale f' : le tube est plus court que la focale. C'est tout l'intérêt du téléobjectif."
  },

  // ---------------- Lunettes ----------------
  {
    id: "U42-13", epreuve: "U42", chapitre: "Lunettes", titre: "La lunette de Kepler",
    regle: "Lunette afocale : le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. L'image intermédiaire B₁ se forme dans ce plan focal commun, et les rayons ressortent parallèles entre eux. Grossissement : G = −f'ob / f'oc.",
    consigne: "Objectif Ob de f' = 80 mm, oculaire Oc de f' = 20 mm, objet à l'infini vu sous 3°. Construis l'image intermédiaire, trace les rayons qui sortent de l'oculaire, puis calcule le grossissement.",
    theme: "Lunettes afocales",
    systeme: { objet: { infini: true, angle: 3 }, elements: [{ type: "lentille", nom: "Ob", x: 0, f: 80 }, { type: "lentille", nom: "Oc", x: 100, f: 20 }] },
    vue: VUE_U42_LUNETTE,
    etapes: [
      { action: "rayon", apres: "Ob", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon vient du point B, à l'infini, et passe par le centre de l'objectif. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "Ob", rayons: ["O", "F"], tolerance: 0.6, texte: "L'objet est à l'infini : son image B₁ est dans le plan focal image de l'objectif, au croisement des deux rayons. Place B₁." },
      { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "parallele" }, texte: "Ce rayon passe par B₁ parallèlement à l'axe. Par où ressort-il de l'oculaire ?" },
      { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon passe par B₁, puis par le centre de l'oculaire. Que devient-il ?" },
      { action: "calcul", grandeur: "grossissement", decimales: 0, unite: "", signe: true, texte: "Les rayons ressortent parallèles : l'image finale est à l'infini. Calcule le grossissement G, avec son signe." }
    ],
    conclusion: "Les rayons ressortent inclinés de l'autre côté de l'axe : l'image est renversée, d'où le signe moins. Pour observer un paysage à l'endroit, il faut ajouter un redresseur."
  },
  {
    id: "U42-14", epreuve: "U42", chapitre: "Lunettes", titre: "La lunette de Galilée",
    regle: "Lunette de Galilée : l'oculaire est divergent et placé AVANT le foyer image de l'objectif. L'image intermédiaire B₁ ne se forme pas vraiment : c'est un objet virtuel pour l'oculaire, situé derrière lui. La lunette est afocale si B₁ est dans le plan focal objet de l'oculaire.",
    consigne: "Objectif Ob de f' = 120 mm, oculaire divergent Oc de f' = −40 mm placé 80 mm plus loin, objet à l'infini vu sous 3°. Place B₁, trace les rayons qui sortent de l'oculaire, puis calcule le grossissement.",
    theme: "Lunettes afocales",
    systeme: { objet: { infini: true, angle: 3 }, elements: [{ type: "lentille", nom: "Ob", x: 0, f: 120 }, { type: "lentille", nom: "Oc", x: 80, f: -40 }] },
    vue: VUE_U42_LUNETTE,
    etapes: [
      { action: "rayon", apres: "Ob", rayon: { depuis: "B", par: "O" }, texte: "Ce rayon vient du point B, à l'infini, et passe par le centre de l'objectif. Que devient-il ?" },
      { action: "placer", quoi: "image", apres: "Ob", rayons: ["O", "F"], tolerance: 0.6, texte: "Fais comme si l'oculaire n'était pas là : B₁ est dans le plan focal image de l'objectif, là où les deux rayons se croiseraient. Place B₁." },
      { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "O" }, texte: "Ce rayon vise B₁ en passant par le centre de l'oculaire. Que devient-il ?" },
      { action: "rayon", apres: "Oc", rayon: { depuis: "B1", par: "parallele" }, texte: "Ce rayon vise B₁ en arrivant parallèlement à l'axe. Que devient-il après l'oculaire divergent ?" },
      { action: "calcul", grandeur: "grossissement", decimales: 0, unite: "", signe: true, texte: "Les rayons ressortent parallèles : l'image finale est à l'infini. Calcule le grossissement G, avec son signe." }
    ],
    conclusion: "Les rayons ressortent inclinés du même côté qu'à l'entrée : l'image est droite, le grossissement est positif. Pas besoin de redresseur : c'est le principe des jumelles de théâtre."
  },

  // ---------------- Champs ----------------
  {
    id: "U42-15", epreuve: "U42", chapitre: "Champs", titre: "Pupille et lucarne",
    regle: "Vue depuis le point A, l'ouverture qui paraît la plus petite (le plus petit angle) limite la lumière : c'est la pupille d'entrée. L'autre limite l'étendue de ce qu'on voit : c'est la lucarne d'entrée. Le champ de pleine lumière est limité par la droite appuyée sur un bord de chacune.",
    consigne: "Un diaphragme D est placé devant une lentille L, dont la monture est aussi une ouverture. Trouve la pupille, puis la lucarne, et trace la limite du champ de pleine lumière.",
    theme: "Champs et diaphragmes",
    systeme: { objet: { x: -60, h: 8 }, elements: [{ type: "diaphragme", nom: "D", x: -20, rayon: 4 }, { type: "lentille", nom: "L", x: 0, f: 40, rayon: 12 }] },
    vue: VUE_U42_CHAMPS,
    etapes: [
      { action: "designer", quoi: "pupille-entree", texte: "Depuis A, quelle ouverture est vue sous le plus petit angle ? Touche-la : c'est la pupille d'entrée." },
      { action: "designer", quoi: "lucarne-entree", texte: "L'autre ouverture limite le champ. Touche la lucarne d'entrée." },
      { action: "relier", quoi: "champ-pleine-lumiere", texte: "Touche les deux bords qui donnent la limite du champ de pleine lumière. La droite doit rejoindre le plan de l'objet." }
    ],
    conclusion: "Ici le plan de l'objet est en dehors de l'intervalle pupille-lucarne : la pleine lumière s'appuie sur les bords du même côté. Les points de l'objet situés entre l'axe et cette limite envoient tout leur faisceau à travers l'instrument."
  },
  {
    id: "U42-16", epreuve: "U42", chapitre: "Champs", titre: "Pleine lumière, champ moyen, champ total",
    regle: "Trois droites partent de la pupille et s'appuient sur le bord de la lucarne. Bords du même côté : champ de pleine lumière. Centre de la pupille : champ moyen. Bords opposés : champ total. Cela vaut quand le plan de l'objet est en dehors de l'intervalle pupille-lucarne.",
    consigne: "Le diaphragme D est la pupille d'entrée, la monture de la lentille L est la lucarne. Trace les trois limites du champ dans le plan de l'objet et calcule le rayon du champ de pleine lumière.",
    theme: "Champs et diaphragmes",
    systeme: { objet: { x: -60, h: 4 }, elements: [{ type: "diaphragme", nom: "D", x: -30, rayon: 4 }, { type: "lentille", nom: "L", x: 0, f: 30, rayon: 16 }] },
    vue: VUE_U42_CENTRE,
    etapes: [
      { action: "relier", quoi: "champ-pleine-lumiere", texte: "Commence par la pleine lumière : touche les deux bords qui la limitent." },
      { action: "calcul", grandeur: "rayon-champ", decimales: 0, unite: "mm", signe: false, texte: "Calcule le rayon du champ de pleine lumière dans le plan de l'objet (équation de la droite, ou Thalès)." },
      { action: "relier", quoi: "champ-moyen", texte: "Champ moyen : touche les deux points qui le limitent." },
      { action: "relier", quoi: "champ-total", texte: "Champ total : touche les deux bords qui le limitent." }
    ],
    conclusion: "Entre la pleine lumière et le champ total, l'éclairement baisse peu à peu : c'est le champ de contour. Un diaphragme placé dans le plan de l'image le supprimerait."
  },
  {
    id: "U42-17", epreuve: "U42", chapitre: "Champs", titre: "Le diaphragme est derrière la lentille",
    regle: "Un diaphragme placé après une lentille ne se voit pas directement depuis l'objet : on le remplace par son image à travers la lentille, dans l'espace objet. C'est cette image qu'on compare à la monture pour trouver la pupille d'entrée.",
    consigne: "Le diaphragme D est derrière la lentille L. Son image dans l'espace objet est dessinée. Trouve la pupille d'entrée, trace la limite du champ de pleine lumière, calcule son rayon, puis choisis le bon faisceau issu de B.",
    theme: "Champs et diaphragmes",
    systeme: { objet: { x: -60, h: 8 }, elements: [{ type: "lentille", nom: "L", x: 0, f: 40, rayon: 12 }, { type: "diaphragme", nom: "D", x: 20, rayon: 4 }] },
    vue: VUE_U42_CHAMPS,
    etapes: [
      { action: "designer", quoi: "pupille-entree", images: true, texte: "Depuis A, compare la monture de L et l'image de D. Touche la pupille d'entrée." },
      { action: "relier", quoi: "champ-pleine-lumiere", texte: "Touche les deux bords qui donnent la limite du champ de pleine lumière." },
      { action: "calcul", grandeur: "rayon-champ", decimales: 0, unite: "mm", signe: false, texte: "Calcule le rayon du champ de pleine lumière dans le plan de l'objet." },
      { action: "faisceau", depuis: "B", texte: "B est dans le champ de pleine lumière. Quel faisceau issu de B traverse vraiment l'instrument ?" }
    ],
    conclusion: "L'image du diaphragme joue le rôle de pupille d'entrée : le faisceau utile est celui qui s'appuie sur ses bords. Dans l'instrument, il passe exactement par les bords du diaphragme réel."
  }
);
