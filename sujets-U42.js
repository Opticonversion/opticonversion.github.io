// Sujets blancs d'Optique géométrique et physique (U42).
// Un sujet = un seul appareil du début à la fin, des documents, 5 parties notées sur 20.
// Format : notes/coordination/sujet-blanc.md. Chargé plus tard par qcm.html, après questions-U42.js.
// Les questions d'un sujet ne sortent nulle part ailleurs (ni thèmes, ni Essentiel, ni examen blanc).
// Énoncés, appareil et chiffres écrits par Opticonversion.

SUJETS.push({
  id: "SUJET-U42-01",
  epreuve: "U42",
  titre: "Une lentille macro pour photographier des timbres",
  contexte: "M. Garnier, 67 ans, collectionne les timbres et veut vendre les doubles en ligne. Les acheteurs demandent des photos où l'on voit les dents et les petits défauts d'impression. Vous lui présentez une lentille macro qui se clipse devant l'objectif de son téléphone. Toutes les lentilles sont considérées comme minces.",
  annexe: {
    titre: "Fiche technique",
    colonnes: ["", "Valeur"],
    lignes: [
      ["Objectif du téléphone (L₂)", "Convergent, f'₂ = +4,0 mm, nombre d'ouverture N = 2"],
      ["Mise au point du téléphone", "De l'infini à 10 cm devant l'objectif"],
      ["Capteur", "6,4 mm × 4,8 mm, pixels carrés de 1,0 µm de côté"],
      ["Lentille macro (L₁)", "Doublet collé convergent, f'₁ = +25 mm, diamètre utile 11 mm"],
      ["Position de la lentille macro", "Clipsée à 5,0 mm devant l'objectif du téléphone"],
      ["Timbre type", "26 mm × 36 mm"]
    ]
  },
  schema: "img/schemas/U42/sujet-macro-montage.svg",
  schemaTexte: "Schéma du montage, sur l'axe optique, de gauche à droite : le timbre, son pied A au foyer objet F₁ ; 25 mm plus loin, la lentille macro L₁ ; 5,0 mm après, l'objectif L₂ et sa pupille ; 4,0 mm après, le capteur. Deux rayons partent de A, sortent parallèles de L₁ et convergent sur le capteur.",
  parties: [
    { lettre: "A", titre: "Le téléphone seul", points: 3,
      contexte: "Sans la lentille macro. Pour faire la mise au point, l'objectif L₂ avance ou recule ; le capteur, lui, reste fixe." },
    { lettre: "B", titre: "La lentille macro", points: 5.5,
      contexte: "La lentille macro L₁ est clipsée à 5,0 mm devant l'objectif L₂. Sauf indication contraire, le téléphone est réglé sur l'infini.",
      annexe: {
        titre: "Les deux verres de la lentille macro",
        colonnes: ["Verre", "Indice n", "Constringence ν"],
        lignes: [
          ["Crown (face avant)", "1,52", "60"],
          ["Flint (face arrière)", "1,69", "30"]
        ]
      }
    },
    { lettre: "C", titre: "Le champ photographié", points: 4.5,
      contexte: "Téléphone réglé sur l'infini, timbre au foyer objet de L₁, à 25 mm devant elle. Le diaphragme d'ouverture est la pupille de l'objectif du téléphone, dans le plan de L₂. La monture de L₁ (diamètre 11 mm) peut couper une partie des faisceaux venus des bords du timbre." },
    { lettre: "D", titre: "Le plus petit détail visible", points: 3.5,
      contexte: "Même réglage que dans la partie C. Lumière verte : λ = 550 nm. Pupille de l'objectif : 2,0 mm de diamètre." },
    { lettre: "E", titre: "Le traitement antireflet", points: 3.5,
      contexte: "Les faces de la lentille macro ne sont pas encore traitées. Face avant en crown (n = 1,52), face arrière en flint (n = 1,69), dans l'air. On travaille à λ = 550 nm, sous incidence normale." }
  ]
});

QUESTIONS.push(

  // ---------- Partie A : le téléphone seul (3 points) ----------
  {
    id: "U42-341", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "A", etape: 1,
    question: "Le téléphone photographie un paysage lointain. Où doit se trouver le capteur ?",
    choix: [
      "Au foyer objet F₂, à 4,0 mm devant l'objectif",
      "Au foyer image F'₂, à 4,0 mm derrière l'objectif",
      "À 8,0 mm derrière l'objectif, à deux fois la focale",
      "Contre l'objectif, car l'image d'un objet lointain est à l'infini"
    ],
    bonne: 1,
    explication: "Un objet à l'infini donne son image dans le plan focal image de la lentille. Pour une photo nette du paysage, le capteur est donc au foyer image F'₂, à f'₂ = 4,0 mm derrière l'objectif.",
    surLaCopie: "L'objet est à l'infini : son image se forme au foyer image F'₂.\nLe capteur est donc à 4,0 mm derrière l'objectif."
  },
  {
    id: "U42-342", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "A", etape: 2,
    type: "calcul",
    question: "Le téléphone fait la mise au point sur un timbre posé à 10 cm devant l'objectif. Calculez la distance O₂A' entre l'objectif et l'image du timbre.",
    reponse: { valeur: 4.17, unite: "mm", decimales: 2, signe: false, tolerance: 0.01 },
    erreurs: [
      { valeur: 3.85, type: "signe", message: "Le timbre est un objet réel, devant l'objectif : O₂A = −100 mm, pas +100 mm. On trouve alors 4,17 mm." }
    ],
    explication: "Relation de conjugaison avec O₂A = −100 mm et f'₂ = +4,0 mm :\n[[1|O₂A']] = [[1|f'₂]] + [[1|O₂A]] = [[1|4]] − [[1|100]] = 0,24 mm⁻¹\nO₂A' = [[1|0,24]] ≈ 4,17 mm.",
    indice: "Descartes : [[1|O₂A']] − [[1|O₂A]] = [[1|f'₂]], avec O₂A négatif pour un objet réel."
  },
  {
    id: "U42-343", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "A", etape: 3,
    question: "Le capteur est fixe. Pour passer du paysage au timbre à 10 cm, que fait l'objectif ?",
    choix: [
      "Il s'éloigne du capteur d'environ 0,17 mm",
      "Il se rapproche du capteur d'environ 0,17 mm",
      "Il ne bouge pas : seule la pupille se ferme",
      "Il s'éloigne du capteur de 10 cm environ"
    ],
    bonne: 0,
    explication: "Pour le paysage, l'image est à 4,00 mm de l'objectif ; pour le timbre, à 4,17 mm. Le capteur étant fixe, l'objectif doit s'en éloigner de 4,17 − 4,00 ≈ 0,17 mm. Un objet qui se rapproche donne une image qui s'éloigne de la lentille."
  },
  {
    id: "U42-344", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "A", etape: 4,
    type: "calcul",
    question: "Toujours à 10 cm, calculez la longueur de l'image du grand côté du timbre (36 mm) sur le capteur.",
    reponse: { valeur: 1.5, unite: "mm", decimales: 2, signe: false, tolerance: 0.02 },
    erreurs: [
      { valeur: 863, type: "notion", message: "Tu as multiplié par O₂A/O₂A' au lieu de O₂A'/O₂A. L'image est bien plus petite que le timbre : 36 × 4,17 / 100 ≈ 1,50 mm." }
    ],
    explication: "Grandissement : γ = [[O₂A'|O₂A]] = [[4,17|−100]] ≈ −0,0417.\nLongueur de l'image : 36 × 0,0417 ≈ 1,50 mm (image renversée).",
    indice: "Grandissement γ = [[O₂A'|O₂A]], puis longueur de l'image = |γ| × 36 mm."
  },
  {
    id: "U42-345", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "A", etape: 5,
    question: "L'image du timbre mesure 1,50 mm sur un capteur large de 6,4 mm. Que concluez-vous pour M. Garnier ?",
    choix: [
      "Le timbre déborde du capteur : la photo sera coupée sur les côtés",
      "Le timbre remplit toute la photo : la lentille macro est inutile",
      "Le timbre est flou à 10 cm, car le téléphone ne fait pas la mise au point si près",
      "Le timbre n'occupe qu'un quart de la largeur : les dents seront trop petites"
    ],
    bonne: 3,
    explication: "1,50 / 6,4 ≈ 0,23 : le timbre occupe à peine un quart de la largeur de la photo. Il est net (10 cm est la limite de mise au point), mais trop petit pour montrer les dents et les défauts d'impression. Il faut grossir davantage : c'est le rôle de la lentille macro.",
    surLaCopie: "L'image du timbre (1,50 mm) n'occupe qu'un quart de la largeur du capteur (6,4 mm).\nLes détails seront trop petits : la lentille macro est utile."
  },

  // ---------- Partie B : la lentille macro (5,5 points) ----------
  {
    id: "U42-346", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "B", etape: 1,
    question: "Le téléphone est réglé sur l'infini. Où faut-il placer le timbre devant la lentille macro pour qu'il soit net ?",
    choix: [
      "À 5,0 mm devant L₁, la distance entre les deux lentilles",
      "À 50 mm devant L₁, à deux fois sa focale",
      "Au foyer objet de L₁, à 25 mm devant elle",
      "Au foyer image de L₁, à 25 mm derrière elle"
    ],
    bonne: 2,
    explication: "Réglé sur l'infini, le téléphone ne rend net qu'un objet à l'infini. L₁ doit donc donner du timbre une image à l'infini : le timbre est dans son plan focal objet, à 25 mm devant elle. Les rayons sortent alors parallèles et l'objectif les fait converger sur le capteur.",
    surLaCopie: "Le téléphone, réglé sur l'infini, attend une image intermédiaire à l'infini.\nLe timbre doit donc être au foyer objet F₁ de la lentille macro, à 25 mm devant elle."
  },
  {
    id: "U42-347", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "B", etape: 2,
    type: "calcul",
    question: "Timbre au foyer objet de L₁, image sur le capteur au foyer image de L₂. Calculez le grandissement γ de l'ensemble, avec son signe.",
    reponse: { valeur: -0.16, unite: "", decimales: 2, signe: true, tolerance: 0.005 },
    erreurs: [
      { valeur: -6.25, type: "notion", message: "Tu as fait f'₁ / f'₂. L'image sur le capteur est plus petite que le timbre : γ = −f'₂ / f'₁ = −4 / 25 = −0,16." },
      { valeur: 0.16, type: "signe", message: "L'image finale est renversée par rapport au timbre : le grandissement est négatif, −0,16." }
    ],
    explication: "Un point du bord du timbre, à la hauteur AB du foyer F₁, envoie un faisceau parallèle incliné de α = [[AB|f'₁]]. L'objectif le concentre à la hauteur A'B' = −f'₂ × α sur le capteur.\nγ = [[A'B'|AB]] = −[[f'₂|f'₁]] = −[[4,0|25]] = −0,16.",
    indice: "Le faisceau entre les deux lentilles est parallèle. Passe par l'angle α = [[AB|f'₁]], puis A'B' = −f'₂ × α."
  },
  {
    id: "U42-348", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "B", etape: 3,
    question: "Avec γ = −0,16, quelle surface du timbre couvre le capteur (6,4 mm × 4,8 mm) ?",
    choix: [
      "1,0 mm × 0,77 mm : on ne voit qu'un coin du timbre",
      "40 mm × 30 mm : le timbre posé en largeur y tient",
      "160 mm × 120 mm : on photographie toute la page de l'album",
      "6,4 mm × 4,8 mm : la même surface que le capteur"
    ],
    bonne: 1,
    explication: "Surface couverte = taille du capteur / |γ| : 6,4 / 0,16 = 40 mm et 4,8 / 0,16 = 30 mm. Le timbre posé en largeur (36 mm × 26 mm) remplit presque toute la photo : c'est bien plus grand qu'avec le téléphone seul."
  },
  {
    id: "U42-349", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "B", etape: 4,
    type: "pose",
    question: "Le téléphone est maintenant réglé sur sa distance la plus courte : il rend net un objet à 10 cm devant L₂. Calculez à quelle distance de L₁ placer le timbre, étape par étape.",
    etapes: [
      {
        consigne: "Position O₁A₁ de l'image intermédiaire donnée par L₁ (en mm, avec son signe)",
        reponse: { valeur: -95, unite: "mm", decimales: 0, signe: true, tolerance: 0.5 },
        aide: "Cette image doit être à 10 cm devant L₂. Or L₁ est à 5,0 mm devant L₂.",
        ligne: "O₁A₁ = O₁O₂ + O₂A₁ = 5 − 100 = −95 mm",
        erreurs: [{ valeur: -100, type: "notion", message: "Les 10 cm se comptent depuis L₂. Depuis L₁, qui est 5 mm plus en avant, il reste 95 mm : O₁A₁ = −95 mm." }]
      },
      {
        consigne: "Position O₁A du timbre (en mm, avec son signe)",
        reponse: { valeur: -19.8, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "Relation de conjugaison de L₁, dans l'autre sens : [[1|O₁A]] = [[1|O₁A₁]] − [[1|f'₁]].",
        ligne: "[[1|O₁A]] = −[[1|95]] − [[1|25]] ≈ −0,0505 mm⁻¹, donc O₁A ≈ −19,8 mm",
        erreurs: [{ valeur: 33.9, type: "signe", message: "Tu as pris +[[1|25]] au lieu de −[[1|25]] : [[1|O₁A]] = [[1|O₁A₁]] − [[1|f'₁]] = −[[1|95]] − [[1|25]], d'où O₁A ≈ −19,8 mm." }]
      }
    ],
    explication: "L'image donnée par L₁ sert d'objet au téléphone : elle doit être à 10 cm devant L₂, soit à 95 mm devant L₁ (O₁A₁ = −95 mm). On remonte à l'objet :\n[[1|O₁A]] = [[1|O₁A₁]] − [[1|f'₁]] = −[[1|95]] − [[1|25]] ≈ −0,0505 mm⁻¹\nO₁A ≈ −19,8 mm : le timbre est à 19,8 mm devant la lentille macro, et l'image intermédiaire est virtuelle."
  },
  {
    id: "U42-350", epreuve: "U42", theme: "Conjugaison", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "B", etape: 5,
    question: "Le timbre est net entre 19,8 mm et 25 mm devant la lentille macro. Quel conseil donnez-vous à M. Garnier ?",
    choix: [
      "Tenir le téléphone à bout de bras, à 30 cm du timbre, pour éviter les ombres",
      "Coller la lentille contre le timbre : la mise au point se fera toute seule",
      "Retirer la lentille et zoomer : on obtient le même grossissement",
      "Utiliser un support qui tient la lentille à 2 ou 2,5 cm du timbre"
    ],
    bonne: 3,
    explication: "La zone de netteté ne fait que 5,2 mm de profondeur (de 19,8 à 25 mm) : à main levée, le moindre mouvement rend la photo floue. Un support fixe, qui tient la lentille vers 2,2 cm du timbre (milieu de la zone), garde le timbre net. Un zoom numérique agrandit les pixels sans ajouter de détails.",
    surLaCopie: "Le timbre doit rester entre 19,8 mm et 25 mm de la lentille : la zone de netteté est très courte.\nJe conseille un support qui tient la lentille à environ 2,2 cm du timbre, au milieu de cette zone."
  },
  {
    id: "U42-351", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "B", etape: 6,
    type: "calcul",
    question: "Calculez la vergence V de l'ensemble lentille macro et objectif (L₁ puis L₂, séparés de 5,0 mm).",
    reponse: { valeur: 240, unite: "δ", decimales: 0, signe: false, tolerance: 0.5 },
    erreurs: [
      { valeur: 290, type: "notion", message: "Tu as additionné les vergences comme si les lentilles étaient accolées. Elles sont à 5 mm : il faut retirer e × V₁ × V₂ = 50 δ, d'où 240 δ." },
      { valeur: 0.24, type: "unite", message: "Mets e en mètres et les vergences en dioptries : V = 40 + 250 − 0,005 × 40 × 250 = 240 δ." }
    ],
    explication: "V₁ = [[1|0,025]] = 40 δ et V₂ = [[1|0,004]] = 250 δ. Formule de Gullstrand, avec e = 0,005 m :\nV = V₁ + V₂ − e × V₁ × V₂ = 40 + 250 − 0,005 × 40 × 250 = 290 − 50 = 240 δ.",
    indice: "Gullstrand : V = V₁ + V₂ − e V₁ V₂, avec les focales en mètres pour avoir des dioptries."
  },
  {
    id: "U42-352", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "B", etape: 7,
    type: "calcul",
    question: "La lentille macro seule (V_L1 = 40 δ) est un doublet collé achromatique. Calculez la vergence V_c de sa lentille en crown.",
    reponse: { valeur: 80, unite: "δ", decimales: 0, signe: true, tolerance: 0.5 },
    erreurs: [
      { valeur: -40, type: "notion", message: "C'est la vergence du flint. Le crown, de plus grande constringence, est la lentille convergente : V_c = +80 δ." },
      { valeur: 26.7, type: "notion", message: "Tu as réparti 40 δ au prorata des constringences. L'achromatisme impose V_c/60 + V_f/30 = 0 avec V_c + V_f = 40 : V_c = +80 δ." }
    ],
    explication: "Deux conditions, avec V_c (crown) et V_f (flint) : V_c + V_f = 40 et [[V_c|60]] + [[V_f|30]] = 0, donc V_f = −[[V_c|2]].\nV_c − [[V_c|2]] = 40, d'où V_c = +80 δ et V_f = −40 δ.\nLe crown est convergent, le flint divergent.",
    indice: "Achromatisme d'un doublet collé : V_c + V_f = V_L1 et [[V_c|ν_c]] + [[V_f|ν_f]] = 0."
  },
  {
    id: "U42-353", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "B", etape: 8,
    question: "Pourquoi le fabricant a-t-il fait de la lentille macro un doublet achromatique plutôt qu'une simple lentille ?",
    choix: [
      "Pour que le bleu et le rouge aient le même foyer : pas de bords colorés",
      "Pour doubler la vergence sans changer l'épaisseur de la lentille",
      "Pour supprimer les reflets sur les faces avant et arrière de la lentille",
      "Pour que la lentille polarise la lumière et coupe les reflets du timbre"
    ],
    bonne: 0,
    explication: "L'indice d'un verre dépend de la longueur d'onde : une lentille simple fait converger le bleu plus près que le rouge, et les bords des dents du timbre seraient frangés de couleur (aberration chromatique). En associant un crown convergent et un flint divergent plus dispersif, on fait coïncider les foyers du bleu et du rouge.",
    surLaCopie: "Une lentille simple disperse la lumière : le bleu et le rouge n'ont pas le même foyer, d'où des bords colorés.\nLe doublet crown-flint corrige cette aberration chromatique."
  },

  // ---------- Partie C : le champ photographié (4,5 points) ----------
  {
    id: "U42-354", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "C", etape: 1,
    question: "Le nombre d'ouverture de l'objectif est N = 2. Quel est le diamètre de sa pupille ?",
    choix: [
      "8,0 mm",
      "0,50 mm",
      "2,0 mm",
      "4,0 mm"
    ],
    bonne: 2,
    explication: "N = [[f'|D]], donc D = [[f'|N]] = [[4,0|2]] = 2,0 mm."
  },
  {
    id: "U42-355", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "C", etape: 2,
    question: "Quel est le rôle de la pupille de l'objectif, diaphragme d'ouverture de l'ensemble ?",
    choix: [
      "Elle fixe la taille de la zone du timbre qui apparaît sur la photo",
      "Elle fixe la lumière reçue par chaque point de l'image",
      "Elle règle la distance de mise au point du téléphone",
      "Elle supprime les reflets entre les deux lentilles"
    ],
    bonne: 1,
    explication: "Le diaphragme d'ouverture limite le faisceau issu de chaque point de l'objet : il règle la lumière reçue et la diffraction. L'étendue du timbre visible sur la photo dépend, elle, du champ (capteur et montures)."
  },
  {
    id: "U42-356", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "C", etape: 3,
    type: "pose",
    question: "Déterminez la pupille d'entrée de l'ensemble, c'est-à-dire l'image de la pupille de l'objectif (2,0 mm, dans le plan de L₂) donnée par L₁ vers l'avant, étape par étape.",
    etapes: [
      {
        consigne: "Position O₁P de la pupille d'entrée par rapport à L₁ (en mm, avec son signe)",
        reponse: { valeur: 6.25, unite: "mm", decimales: 2, signe: true, tolerance: 0.02 },
        aide: "La pupille de l'objectif est l'image de la pupille d'entrée par L₁ : O₁O₂ = +5,0 mm joue le rôle de l'image. Cherche l'objet O₁P.",
        ligne: "[[1|O₁P]] = [[1|5]] − [[1|25]] = 0,16 mm⁻¹, donc O₁P = +6,25 mm",
        erreurs: [{ valeur: 4.17, type: "signe", message: "Tu as ajouté [[1|25]] au lieu de le retirer. La pupille de l'objectif est l'image : [[1|O₁P]] = [[1|5]] − [[1|25]] = 0,16 mm⁻¹, O₁P = +6,25 mm." }]
      },
      {
        consigne: "Diamètre de la pupille d'entrée (en mm)",
        reponse: { valeur: 2.5, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
        aide: "Grandissement de L₁ entre P et la pupille de l'objectif : γ = [[O₁O₂|O₁P]].",
        ligne: "γ = [[5|6,25]] = 0,8, donc diamètre = [[2,0|0,8]] = 2,5 mm",
        erreurs: [{ valeur: 1.6, type: "notion", message: "Tu as multiplié par 0,8. La pupille de l'objectif (2,0 mm) est l'image : c'est elle qui vaut 0,8 fois la pupille d'entrée, donc 2,0 / 0,8 = 2,5 mm." }]
      }
    ],
    explication: "La pupille de l'objectif est l'image, par L₁, de la pupille d'entrée P. Avec O₁O₂ = +5 mm comme image :\n[[1|O₁P]] = [[1|O₁O₂]] − [[1|f'₁]] = [[1|5]] − [[1|25]] = 0,16 mm⁻¹, O₁P = +6,25 mm.\nγ = [[5|6,25]] = 0,8, donc la pupille d'entrée mesure 2,0 / 0,8 = 2,5 mm. Elle est virtuelle, 6,25 mm derrière L₁."
  },
  {
    id: "U42-357", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "C", etape: 4,
    schemaQuestion: "img/schemas/U42/sujet-macro-champ.svg",
    schemaTexte: "Sur l'axe, de gauche à droite : le plan du timbre ; 25 mm plus loin, la monture de L₁, de bords M₁ (en haut) et M₂ (en bas), 11 mm de diamètre ; 6,25 mm derrière L₁, la pupille d'entrée virtuelle, de bords P₁ (en haut) et P₂ (en bas), 2,5 mm de diamètre.",
    question: "Le timbre est à 25 mm devant L₁, la pupille d'entrée 6,25 mm derrière. Pour le champ de pleine lumière, la droite à tracer passe par :",
    choix: [
      "Le centre de la pupille d'entrée et M₁",
      "P₂ et M₁, des bords situés de part et d'autre de l'axe",
      "P₁ et M₁, des bords situés du même côté de l'axe",
      "M₁ et le foyer objet de L₁"
    ],
    bonne: 2,
    explication: "Le plan du timbre est en dehors de l'intervalle entre la monture de L₁ et la pupille d'entrée : la pleine lumière s'appuie sur les bords situés du même côté de l'axe. La droite passant par le centre de la pupille donne le champ moyen, celle passant par les bords opposés donne le champ total.",
    surLaCopie: "Le plan du timbre est en dehors de l'intervalle monture-pupille d'entrée.\nLe champ de pleine lumière s'obtient avec la droite joignant les bords de la pupille d'entrée et de la monture situés du même côté."
  },
  {
    id: "U42-358", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "C", etape: 5,
    type: "pose",
    question: "Calculez le rayon du champ de pleine lumière dans le plan du timbre, étape par étape (rayon de la monture : 5,5 mm ; rayon de la pupille d'entrée : 1,25 mm).",
    etapes: [
      {
        consigne: "De combien la droite monte-t-elle entre la pupille d'entrée et la monture, sur 6,25 mm ? (en mm)",
        reponse: { valeur: 4.25, unite: "mm", decimales: 2, signe: false, tolerance: 0.01 },
        aide: "Elle part du bord de la pupille d'entrée (1,25 mm) et arrive au bord de la monture (5,5 mm), du même côté.",
        ligne: "5,5 − 1,25 = 4,25 mm"
      },
      {
        consigne: "De combien monte-t-elle encore entre la monture et le timbre, sur 25 mm ? (en mm)",
        reponse: { valeur: 17, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
        aide: "Thalès : la montée est proportionnelle à la distance parcourue.",
        ligne: "4,25 × [[25|6,25]] = 4,25 × 4 = 17 mm"
      },
      {
        consigne: "Rayon du champ de pleine lumière dans le plan du timbre (en mm)",
        reponse: { valeur: 22.5, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
        aide: "Ajoute cette montée au rayon de la monture.",
        ligne: "R = 5,5 + 17 = 22,5 mm",
        erreurs: [{ valeur: 32.5, type: "notion", message: "C'est le champ total (bords opposés : 5,5 + 6,75 × 4). La pleine lumière utilise les bords du même côté : 5,5 + 4,25 × 4 = 22,5 mm." }]
      }
    ],
    explication: "Droite passant par le bord de la pupille d'entrée (6,25 mm derrière L₁, à 1,25 mm de l'axe) et le bord de la monture (dans le plan de L₁, à 5,5 mm).\nSur 6,25 mm, elle monte de 5,5 − 1,25 = 4,25 mm ; sur les 25 mm suivants, de 4,25 × 4 = 17 mm.\nRayon de pleine lumière : 5,5 + 17 = 22,5 mm, soit un cercle de 45 mm de diamètre."
  },
  {
    id: "U42-359", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "C", etape: 6,
    type: "calcul",
    question: "De la même façon, avec les bords opposés, calculez le rayon du champ total limité par la monture de L₁, dans le plan du timbre.",
    reponse: { valeur: 32.5, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
    erreurs: [
      { valeur: 22.5, type: "notion", message: "C'est la pleine lumière (bords du même côté). Pour le champ total, la droite part du bord opposé de la pupille : 5,5 + (5,5 + 1,25) × 4 = 32,5 mm." },
      { valeur: 27.5, type: "notion", message: "C'est le champ moyen (centre de la pupille d'entrée). Le champ total s'appuie sur le bord opposé : 5,5 + 6,75 × 4 = 32,5 mm." }
    ],
    explication: "La droite part du bord inférieur de la pupille d'entrée (−1,25 mm) et passe par le bord supérieur de la monture (+5,5 mm) : elle monte de 6,75 mm sur 6,25 mm.\nSur 25 mm de plus : 6,75 × 4 = 27 mm. Rayon du champ total : 5,5 + 27 = 32,5 mm.",
    indice: "Même méthode, mais la montée entre la pupille d'entrée et la monture vaut 5,5 + 1,25."
  },
  {
    id: "U42-360", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "C", etape: 7,
    type: "calcul",
    question: "La photo couvre 40 mm × 30 mm du timbre (partie B). Calculez la demi-diagonale de cette zone.",
    reponse: { valeur: 25, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
    erreurs: [
      { valeur: 50, type: "notion", message: "C'est la diagonale entière. Le rayon du champ se compare à la demi-diagonale : 50 / 2 = 25 mm." }
    ],
    explication: "Diagonale : √(40² + 30²) = √2500 = 50 mm. Demi-diagonale : 25 mm. C'est la distance entre le centre et un coin de la photo.",
    indice: "Pythagore sur la largeur et la hauteur, puis divise par 2."
  },
  {
    id: "U42-361", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "C", etape: 8,
    question: "Pleine lumière : rayon 22,5 mm ; champ total : 32,5 mm ; demi-diagonale de la photo : 25 mm. Que verra M. Garnier sur sa photo ?",
    choix: [
      "Une photo uniformément éclairée jusque dans les coins",
      "Un cercle de 45 mm entouré de noir, car la monture coupe tout au-delà",
      "Des bords et des coins sombres, car la demi-largeur (20 mm) dépasse le rayon de pleine lumière",
      "Bords éclairés, coins un peu assombris ; un timbre centré reste en pleine lumière"
    ],
    bonne: 3,
    explication: "Le milieu des bords est à 20 mm (largeur) et 15 mm (hauteur) du centre, sous 22,5 mm : il est en pleine lumière. Les coins, à 25 mm, dépassent 22,5 mm mais restent sous 32,5 mm : ils reçoivent moins de lumière, sans être noirs (vignettage). Le timbre posé en largeur a une demi-diagonale de √(18² + 13²) ≈ 22,2 mm : centré, il est entièrement en pleine lumière. On compare bien la demi-diagonale, pas la demi-largeur.",
    surLaCopie: "Demi-largeur 20 mm et demi-hauteur 15 mm < 22,5 mm : les bords sont en pleine lumière. Demi-diagonale 25 mm > 22,5 mm : les coins sont un peu assombris.\nUn timbre de 26 × 36 mm centré (demi-diagonale 22,2 mm) reste entièrement en pleine lumière."
  },

  // ---------- Partie D : le plus petit détail visible (3,5 points) ----------
  {
    id: "U42-362", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "D", etape: 1,
    question: "Un autre téléphone a le même objectif, mais avec N = 4. Qu'est-ce qui change ?",
    choix: [
      "Plus de lumière et une diffraction plus faible",
      "Moins de lumière et une diffraction plus forte",
      "Moins de lumière, mais une diffraction plus faible",
      "Rien : N ne joue que sur la mise au point"
    ],
    bonne: 1,
    explication: "N = 4 avec la même focale donne une pupille deux fois plus petite (1,0 mm) : quatre fois moins de surface, donc moins de lumière. La tache de diffraction (1,22 λ / D) devient deux fois plus grande : les détails fins se perdent davantage."
  },
  {
    id: "U42-363", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "D", etape: 2,
    type: "pose",
    question: "Calculez le plus petit détail du timbre séparable à cause de la diffraction, étape par étape.",
    etapes: [
      {
        consigne: "Limite angulaire de diffraction de l'objectif, entre les deux lentilles (en mrad)",
        reponse: { valeur: 0.34, unite: "mrad", decimales: 2, signe: false, tolerance: 0.005 },
        aide: "α = 1,22 [[λ|D]], avec λ et D dans la même unité. 550 nm = 550 × 10⁻⁹ m ; 2,0 mm = 2,0 × 10⁻³ m.",
        ligne: "α = 1,22 × [[550 × 10⁻⁹|2,0 × 10⁻³]] ≈ 3,4 × 10⁻⁴ rad = 0,34 mrad",
        erreurs: [{ valeur: 0.28, type: "notion", message: "Tu as oublié le facteur 1,22 : α = 1,22 × λ / D ≈ 0,34 mrad." }]
      },
      {
        consigne: "Plus petit détail séparable sur le timbre (en µm)",
        reponse: { valeur: 8.4, unite: "µm", decimales: 1, signe: false, tolerance: 0.2 },
        aide: "Le timbre est au foyer objet de L₁ : un détail y vu sous l'angle α vérifie y = α × f'₁.",
        ligne: "y = 3,4 × 10⁻⁴ × 25 mm ≈ 8,4 × 10⁻³ mm = 8,4 µm",
        erreurs: [{ valeur: 1.3, type: "notion", message: "Tu as multiplié par f'₂ : c'est la tache sur le capteur. Sur le timbre, au foyer de L₁, on multiplie par f'₁ = 25 mm." }]
      }
    ],
    explication: "Entre les deux lentilles, les faisceaux sont parallèles et la pupille de l'objectif (2,0 mm) les diffracte :\nα = 1,22 × [[550 × 10⁻⁹|2,0 × 10⁻³]] ≈ 3,36 × 10⁻⁴ rad.\nLe timbre est au foyer objet de L₁ : y = α × f'₁ = 3,36 × 10⁻⁴ × 25 ≈ 8,4 × 10⁻³ mm, soit 8,4 µm."
  },
  {
    id: "U42-364", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "D", etape: 3,
    type: "calcul",
    question: "Un pixel du capteur mesure 1,0 µm. Quelle longueur du timbre correspond à un pixel (γ = −0,16) ?",
    reponse: { valeur: 6.25, unite: "µm", decimales: 2, signe: false, tolerance: 0.05 },
    erreurs: [
      { valeur: 0.16, type: "notion", message: "Tu as multiplié par |γ|. Le capteur voit le timbre réduit : un pixel couvre une longueur plus grande sur le timbre, 1,0 / 0,16 = 6,25 µm." }
    ],
    explication: "Le capteur reçoit une image réduite : longueur sur le timbre = [[taille du pixel|γ]] en valeur absolue = [[1,0|0,16]] = 6,25 µm.",
    indice: "Ramène le pixel sur le timbre en divisant par |γ|."
  },
  {
    id: "U42-365", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "D", etape: 4,
    question: "Diffraction : 8,4 µm ; pixel ramené sur le timbre : 6,25 µm. Qu'est-ce qui limite la finesse des photos ?",
    choix: [
      "La diffraction, car sa limite est la plus grande des deux",
      "Les pixels, car ils sont plus petits que la tache de diffraction",
      "Les pixels, car un capteur limite toujours avant l'optique",
      "Aucun des deux : seule la mise au point compte"
    ],
    bonne: 0,
    explication: "Le détail le plus fin visible est fixé par la limite la plus grande : ici la diffraction (8,4 µm), plus grande que le pixel ramené (6,25 µm). Des pixels encore plus petits n'apporteraient aucun détail en plus.",
    surLaCopie: "La limite de diffraction (8,4 µm) est plus grande que celle du capteur (6,25 µm).\nC'est donc la diffraction qui limite la résolution."
  },
  {
    id: "U42-366", epreuve: "U42", theme: "Ouverture et résolution", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "D", etape: 5,
    question: "À l'œil nu, à 25 cm, M. Garnier sépare deux points vus sous 1′ d'arc (3 × 10⁻⁴ rad environ). Comparez à la photo.",
    choix: [
      "8 µm environ à l'œil nu : autant que sur la photo",
      "7 mm environ à l'œil nu : la photo est 1000 fois plus fine",
      "75 µm environ à l'œil nu : la photo montre des détails 9 fois plus fins",
      "0,75 µm environ à l'œil nu : il voit plus fin que la photo"
    ],
    bonne: 2,
    explication: "À 25 cm : y = 250 mm × 3 × 10⁻⁴ ≈ 0,075 mm = 75 µm (73 µm avec la valeur exacte de 1′). La photo sépare 8,4 µm : des détails environ 9 fois plus fins. Les petits défauts d'impression seront visibles une fois la photo agrandie à l'écran.",
    surLaCopie: "À l'œil nu, à 25 cm : 250 × 3 × 10⁻⁴ ≈ 0,075 mm, soit 75 µm.\nLa photo sépare 8,4 µm, environ 9 fois mieux : les défauts d'impression seront visibles."
  },

  // ---------- Partie E : le traitement antireflet (3,5 points) ----------
  {
    id: "U42-367", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", difficulte: "facile",
    sujet: "SUJET-U42-01", partie: "E", etape: 1,
    type: "calcul",
    question: "Calculez, en %, la part de lumière réfléchie par la face arrière (flint, n = 1,69) non traitée.",
    reponse: { valeur: 6.6, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
    erreurs: [
      { valeur: 25.7, type: "notion", message: "Tu as oublié d'élever au carré : R = ((n − 1)/(n + 1))² = (0,69/2,69)² ≈ 0,066, soit 6,6 %." },
      { valeur: 0.066, type: "unite", message: "La réponse est demandée en % : 0,066 = 6,6 %." }
    ],
    explication: "R = ([[n − 1|n + 1]])² = ([[0,69|2,69]])² ≈ 0,2565² ≈ 0,066, soit 6,6 %.",
    indice: "Facteur de réflexion sous incidence normale : R = ([[n − 1|n + 1]])²."
  },
  {
    id: "U42-368", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "E", etape: 2,
    type: "calcul",
    question: "La face avant (crown, n = 1,52) réfléchit 4,3 %. Calculez, en %, la part de lumière transmise par les deux faces de la lentille macro. On néglige l'absorption et la face collée.",
    reponse: { valeur: 89.4, unite: "%", decimales: 1, signe: false, tolerance: 0.2 },
    erreurs: [
      { valeur: 89.1, type: "notion", message: "Tu as soustrait les deux réflexions (100 − 4,3 − 6,6). Les pertes se multiplient : T = 0,957 × 0,934 ≈ 0,894, soit 89,4 %." }
    ],
    explication: "Chaque face laisse passer 1 − R : 1 − 0,043 = 0,957 et 1 − 0,066 = 0,934.\nT = 0,957 × 0,934 ≈ 0,894, soit 89,4 % : plus d'un dixième de la lumière est perdu en reflets.",
    indice: "Les transmissions des faces se multiplient : T = (1 − R₁)(1 − R₂)."
  },
  {
    id: "U42-369", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "E", etape: 3,
    question: "On dépose une couche antireflet unique sur la face arrière (n = 1,69). Quel indice doit avoir la couche pour supprimer le reflet à 550 nm ?",
    choix: [
      "1,69, le même indice que le verre",
      "1,30, la racine carrée de l'indice du verre",
      "0,85, la moitié de l'indice du verre",
      "1,35, la moyenne entre l'indice de l'air et celui du verre"
    ],
    bonne: 1,
    explication: "Pour que les deux ondes réfléchies (air-couche et couche-verre) aient la même amplitude, il faut n_c = √(n_air × n_verre) = √1,69 = 1,30.",
    surLaCopie: "Pour que les deux ondes réfléchies aient la même amplitude : n_c = √(1 × 1,69) = 1,30."
  },
  {
    id: "U42-370", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U42-01", partie: "E", etape: 4,
    type: "calcul",
    question: "Calculez l'épaisseur minimale de cette couche (n = 1,30) pour λ = 550 nm.",
    reponse: { valeur: 106, unite: "nm", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 81, type: "notion", message: "Tu as pris l'indice du verre (1,69). L'épaisseur dépend de l'indice de la couche : e = 550 / (4 × 1,30) ≈ 106 nm." },
      { valeur: 212, type: "notion", message: "Tu as pris λ / 2n. Les deux ondes doivent être décalées d'une demi-longueur d'onde : 2 n e = λ/2, donc e = λ / 4n ≈ 106 nm." },
      { valeur: 138, type: "notion", message: "Tu as oublié l'indice de la couche : e = λ / (4 n) = 550 / (4 × 1,30) ≈ 106 nm." }
    ],
    explication: "Différence de marche entre les deux ondes réfléchies : 2 n e. Pour qu'elles s'éteignent, 2 n e = [[λ|2]], donc :\ne = [[λ|4 n]] = [[550|4 × 1,30]] ≈ 106 nm.",
    indice: "Épaisseur minimale d'une couche antireflet : e = [[λ|4 n]], avec l'indice de la couche."
  },
  {
    id: "U42-371", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U42-01", partie: "E", etape: 5,
    question: "Pourquoi n'ajoute-t-on pas λ/2 à la différence de marche, comme pour une bulle de savon dans l'air ?",
    choix: [
      "Parce que la couche est trop mince pour que la lumière s'y réfléchisse",
      "Parce que λ/2 ne s'ajoute que pour la lumière blanche, pas à 550 nm",
      "Les deux réflexions ont lieu sur un milieu plus réfringent : même déphasage",
      "Parce que la face arrière, collée au crown, ne réfléchit presque aucune lumière"
    ],
    bonne: 2,
    explication: "Air (1) puis couche (1,30) puis verre (1,69) : les deux réflexions se font sur un milieu plus réfringent et donnent chacune le même déphasage d'une demi-onde, qui s'annule dans la différence. Dans une bulle de savon, une seule des deux réflexions a ce déphasage : on ajoute λ/2.",
    surLaCopie: "Les indices croissent (1 ; 1,30 ; 1,69) : les deux réflexions se font sur un milieu plus réfringent.\nElles subissent le même déphasage, qui ne change pas la différence de marche 2 n e."
  }
);
