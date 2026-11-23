// Sujets blancs d'Étude technique des systèmes optiques (U43).
// Un sujet = un instrument avec son dossier technique, 5 parties notées sur 20.
// Format : notes/coordination/sujet-blanc.md. Chargé plus tard par qcm.html, après questions-U43.js.
// Les questions d'un sujet ne sortent nulle part ailleurs (ni thèmes, ni Essentiel, ni examen blanc).
// Énoncés, instrument et chiffres écrits par Opticonversion.

SUJETS.push({
  id: "SUJET-U43-01",
  epreuve: "U43",
  titre: "Le monoculaire de randonnée Crête 8×40",
  contexte: "Karim, 45 ans, randonneur, cherche un monoculaire pour observer les oiseaux en montagne. Vous lui présentez le modèle Crête 8×40 et vous étudiez son dossier technique. Dans tout le sujet, les lentilles sont minces et les prismes ne changent pas les distances : on n'en tient pas compte dans les calculs.",
  annexe: {
    titre: "Fiche du fabricant",
    colonnes: ["", "Crête 8×40"],
    lignes: [
      ["Grossissement", "8"],
      ["Objectif", "Doublet achromatique collé, focale 200 mm, diamètre utile 40 mm"],
      ["Oculaire", "Focale 25 mm, diamètre 24 mm"],
      ["Redressement de l'image", "Prismes de Porro"],
      ["Champ", "70 m à 1 000 m"],
      ["Dégagement oculaire", "28 mm (de l'oculaire au cercle oculaire)"],
      ["Mise au point", "De l'infini à 5,2 m (distance comptée depuis l'objectif) pour un emmétrope ; pour les myopes, la bague dépasse le repère ∞ de 4 mm (jusqu'à −6 δ environ). Une seule bague déplace l'oculaire."],
      ["Œilleton", "Caoutchouc rabattable"]
    ]
  },
  parties: [
    { lettre: "A", titre: "L'objectif et le grossissement", points: 3,
      contexte: "Le doublet de l'objectif associe une lentille en crown, de vergence +12,50 δ, collée à une lentille en flint." },
    { lettre: "B", titre: "Chaîne des conjugués", points: 4,
      contexte: "L'utilisateur est emmétrope et n'accommode pas. Réglé sur l'infini, l'oculaire est à 225 mm de l'objectif." },
    { lettre: "C", titre: "L'œil de l'utilisateur", points: 4,
      contexte: "Karim est myope de −4,00 δ aux deux yeux, sans astigmatisme. Il retire ses lunettes, n'accommode pas et vise une crête lointaine (à l'infini). Pour simplifier les calculs, on place son œil au foyer image de l'oculaire (en réalité 3 mm plus loin, au cercle oculaire)." },
    { lettre: "D", titre: "Mécanique de la mise au point", points: 4,
      contexte: "Tourner la bague (3) déplace le porte-oculaire (4) et l'oculaire (5) le long de l'axe optique, noté axe X.",
      annexe: {
        titre: "Pièces et montage",
        colonnes: ["Repère", "Pièce", "Montage"],
        lignes: [
          ["1", "Corps", "Pièce de référence"],
          ["2", "Barillet de l'objectif", "Vissé dans le corps puis collé"],
          ["3", "Bague de mise au point", "Tourne autour du corps ; deux butées l'empêchent d'avancer ou de reculer"],
          ["4", "Porte-oculaire", "Filetage extérieur (pas 2 mm) engagé dans le filetage intérieur de la bague ; un ergot du corps glisse dans une rainure droite du porte-oculaire"],
          ["5", "Oculaire", "Serré dans le porte-oculaire"]
        ]
      }
    },
    { lettre: "E", titre: "Étude des champs", points: 5,
      contexte: "Instrument réglé sur l'infini pour un emmétrope : l'oculaire est à 225 mm de l'objectif. Les prismes n'arrêtent aucun rayon.",
      annexe: {
        titre: "Diaphragmes de l'instrument",
        colonnes: ["Diaphragme", "Position", "Diamètre"],
        lignes: [
          ["Monture de l'objectif", "Sur l'objectif", "40 mm"],
          ["Diaphragme de champ", "Dans le plan focal image de l'objectif", "14 mm"],
          ["Monture de l'oculaire", "Sur l'oculaire, à 225 mm de l'objectif", "24 mm"]
        ]
      }
    }
  ]
});

QUESTIONS.push(

  // ---------- Partie A : l'objectif et le grossissement (3 points) ----------
  {
    id: "U43-326", epreuve: "U43", theme: "Vergences et focales", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "A", etape: 1,
    question: "Quelle est la vergence de l'objectif ?",
    choix: ["+0,20 δ", "+5,00 δ", "+50,0 δ", "+2,00 δ"],
    bonne: 1,
    explication: "D = 1/f', avec f' en mètres : D = 1/0,200 = +5,00 δ. Le piège : prendre la focale en mètres, 0,200, pour la vergence.",
    erreurs: { 0: { type: "notion", message: "0,20 est la focale en mètres, pas la vergence : D = 1/f' = 1/0,200 = +5,00 δ." } }
  },
  {
    id: "U43-327", epreuve: "U43", theme: "Vergences et focales", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "A", etape: 2,
    question: "Quelle est la vergence de la lentille en flint du doublet ?",
    choix: ["+7,50 δ", "+17,50 δ", "−7,50 δ", "−17,50 δ"],
    bonne: 2,
    explication: "Deux lentilles minces accolées : leurs vergences s'ajoutent. D = Dcrown + Dflint, donc Dflint = 5,00 − 12,50 = −7,50 δ. Le flint est divergent, le crown convergent : le doublet reste convergent.",
    surLaCopie: "Lentilles minces accolées : D = Dcrown + Dflint.\nDflint = D − Dcrown = 5,00 − 12,50 = −7,50 δ : le flint est divergent.",
    erreurs: { 0: { type: "signe", message: "Dflint = 5,00 − 12,50 : le résultat est négatif. Le flint d'un doublet achromatique est divergent." } }
  },
  {
    id: "U43-328", epreuve: "U43", theme: "Aberrations", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "A", etape: 3,
    question: "Pourquoi l'objectif associe-t-il un crown et un flint collés ?",
    choix: [
      "Pour redresser l'image, que l'objectif seul donnerait renversée",
      "Pour doubler la focale sans allonger le tube de l'instrument",
      "Pour compenser la myopie de l'utilisateur sans ses lunettes",
      "Pour corriger l'aberration chromatique, les bords colorés"
    ],
    bonne: 3,
    explication: "Le crown est peu dispersif, le flint très dispersif. Leurs dispersions se compensent alors que la vergence totale reste positive : c'est un doublet achromatique, qui supprime les franges colorées autour des oiseaux. Le redressement est le rôle des prismes, la compensation de l'amétropie celui de la bague de mise au point."
  },
  {
    id: "U43-329", epreuve: "U43", theme: "Grossissement et photo", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "A", etape: 4,
    question: "À l'œil nu, un aigle lointain est vu sous un angle de 0,5°. Sous quel angle Karim le voit-il dans le monoculaire ?",
    choix: ["Environ 0,06°", "Environ 1°", "Environ 4°", "Environ 8°"],
    bonne: 2,
    explication: "Grossissement d'un instrument afocal : G = f'obj / f'oc = 200 / 25 = 8. C'est le rapport des tangentes des angles : tan α' = 8 × tan 0,5° = 8 × 0,0087 = 0,070, soit α' ≈ 4,0°. Diviser par 8 donnerait 0,06° : l'instrument rapetisserait l'aigle.",
    erreurs: { 0: { type: "notion", message: "Le monoculaire grossit : l'angle est multiplié par 8, pas divisé. tan α' = 8 × tan 0,5°, soit environ 4°." } }
  },
  {
    id: "U43-330", epreuve: "U43", theme: "Grossissement et photo", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "A", etape: 5,
    question: "Le magasin propose aussi un 10×40 : même objectif, oculaire de 20 mm. Par rapport au 8×40 :",
    choix: [
      "Il grossit autant, car c'est l'objectif seul qui fixe le grossissement",
      "Il grossit plus, mais son image est moins lumineuse au crépuscule",
      "Il grossit plus et son image est aussi plus lumineuse au crépuscule",
      "Il grossit moins, car un oculaire plus court réduit le grossissement"
    ],
    bonne: 1,
    explication: "G = 200 / 20 = 10 : il grossit plus. Le cercle oculaire mesure diamètre de l'objectif / G = 40 / 10 = 4 mm, contre 40 / 8 = 5 mm pour le 8×40. Au crépuscule, la pupille de l'œil s'ouvre vers 6 mm : un cercle oculaire plus petit laisse entrer moins de lumière dans l'œil, l'image est plus sombre."
  },

  // ---------- Partie B : chaîne des conjugués (4 points) ----------
  {
    id: "U43-331", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "B", etape: 1,
    question: "L'oiseau observé est à l'infini. Où l'objectif forme-t-il son image A₁ ?",
    choix: [
      "Au foyer objet de l'objectif, devant lui",
      "Au foyer image de l'objectif, 200 mm après lui",
      "Au foyer image de l'oculaire, 25 mm après lui",
      "Sur l'objectif lui-même, à distance nulle"
    ],
    bonne: 1,
    explication: "Un objet à l'infini sur l'axe a son image au foyer image de la lentille : A₁ = F'obj, à 200 mm après l'objectif. Cette image est réelle et renversée."
  },
  {
    id: "U43-332", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "B", etape: 2,
    question: "Quelle chaîne des conjugués est juste pour cet utilisateur emmétrope qui n'accommode pas ?",
    choix: [
      "A à l'infini → A₁ = Fobj → A' = F'oc → A'' sur la rétine",
      "A à l'infini → A₁ = F'obj = F'oc → A' au proximum → A'' sur la rétine",
      "A à l'infini → A₁ = F'obj = Foc → A' à l'infini → A'' sur la rétine",
      "A à l'infini → A₁ = F'obj → A' sur l'oculaire → A'' sur la rétine"
    ],
    bonne: 2,
    explication: "L'objectif forme A₁ en F'obj. Un emmétrope qui n'accommode pas voit net à l'infini : l'image A' doit être à l'infini, donc A₁ doit être au foyer objet de l'oculaire. F'obj = Foc : le monoculaire est afocal. L'œil forme enfin A'' sur la rétine.",
    surLaCopie: "A à l'infini → A₁ = F'obj = Foc → A' à l'infini → A'' sur la rétine.\nF'obj et Foc sont confondus : l'instrument est afocal."
  },
  {
    id: "U43-333", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "B", etape: 3,
    question: "D'où vient la distance de 225 mm entre l'objectif et l'oculaire, réglé sur l'infini ?",
    choix: [
      "De la somme des focales : 200 + 25 = 225 mm",
      "Du produit des focales divisé par 8, le grossissement",
      "De la différence des focales : 200 − 25 = 175 mm",
      "Du double de la focale de l'objectif, divisé par 1,8"
    ],
    bonne: 0,
    explication: "F'obj est à 200 mm après l'objectif, Foc à 25 mm avant l'oculaire. Pour que F'obj = Foc, il faut O₁O₂ = f'obj + f'oc = 200 + 25 = 225 mm. La différence des focales (175 mm) serait celle d'une lunette de Galilée, à oculaire divergent."
  },
  {
    id: "U43-334", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "B", etape: 4,
    question: "Si on retirait les prismes (en gardant les mêmes distances), comment Karim verrait-il l'oiseau ?",
    choix: [
      "Droit, mais avec des bords colorés que les prismes corrigent",
      "Droit, mais flou, car les prismes font la mise au point",
      "Droit et net, car l'oculaire redresse l'image à lui seul",
      "Renversé, car rien ne redresse l'image de l'objectif"
    ],
    bonne: 3,
    explication: "L'objectif donne une image intermédiaire réelle renversée. L'oculaire, utilisé comme une loupe, en donne une image virtuelle de même sens : l'image finale reste renversée. Les prismes de Porro redressent l'image (haut-bas et gauche-droite) ; ils replient aussi le trajet de la lumière, ce qui raccourcit l'instrument."
  },
  {
    id: "U43-335", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "B", etape: 5,
    question: "L'oiseau se pose plus près, à quelques mètres. Comment bouge son image A₁, et que faut-il faire ?",
    choix: [
      "A₁ s'éloigne de l'objectif : il faut éloigner l'oculaire de l'objectif",
      "A₁ se rapproche de l'objectif : il faut rapprocher l'oculaire de l'objectif",
      "A₁ reste en F'obj, car l'objectif ne bouge pas : rien à faire",
      "A₁ passe à l'infini : il faut tourner la bague jusqu'au repère ∞"
    ],
    bonne: 0,
    explication: "Pour une lentille convergente, quand l'objet réel se rapproche, l'image réelle s'éloigne de la lentille : A₁ passe au-delà de F'obj. Pour que A₁ reste au foyer objet de l'oculaire, on éloigne l'oculaire de l'objectif."
  },
  {
    id: "U43-336", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "B", etape: 6,
    type: "pose",
    question: "Un oiseau est posé à 5,2 m devant l'objectif. L'utilisateur est emmétrope et n'accommode pas. Trouvez de combien l'oculaire doit bouger par rapport au réglage sur l'infini, étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image A₁ donnée par l'objectif, O₁A₁ (en mm)",
        reponse: { valeur: 208, unite: "mm", decimales: 0, signe: true },
        aide: "Relation de conjugaison : [[1|O₁A₁]] = [[1|f'obj]] + [[1|O₁A]], avec O₁A = −5 200 mm.",
        ligne: "[[1|O₁A₁]] = [[1|200]] + [[1|−5 200]] = [[26|5 200]] − [[1|5 200]] = [[25|5 200]]\nDonc O₁A₁ = +208 mm",
        erreurs: [{ valeur: 192.6, type: "signe", message: "Tu as pris O₁A = +5 200 mm. L'oiseau est un objet réel, devant l'objectif : O₁A = −5 200 mm." }]
      },
      {
        consigne: "Distance entre l'objectif et l'oculaire, O₁O₂ (en mm)",
        reponse: { valeur: 233, unite: "mm", decimales: 0, signe: false },
        aide: "Pour un emmétrope qui n'accommode pas, A₁ doit être au foyer objet de l'oculaire, 25 mm avant lui.",
        ligne: "A₁ = Foc, donc O₁O₂ = O₁A₁ + f'oc = 208 + 25 = 233 mm",
        erreurs: [{ valeur: 183, type: "signe", message: "Le foyer objet Foc est avant l'oculaire : l'oculaire est 25 mm après A₁. O₁O₂ = 208 + 25 = 233 mm." }]
      },
      {
        consigne: "Déplacement de l'oculaire depuis le réglage sur l'infini (en mm)",
        reponse: { valeur: 8, unite: "mm", decimales: 0, signe: false },
        aide: "Réglé sur l'infini, l'oculaire est à 225 mm de l'objectif.",
        ligne: "233 − 225 = 8 mm : l'oculaire s'éloigne de 8 mm de l'objectif."
      }
    ],
    explication: "Chaîne : A (5,2 m devant l'objectif) → A₁ = Foc, à 208 mm après l'objectif → A' à l'infini → A'' sur la rétine. L'oculaire s'éloigne de 8 mm de l'objectif par rapport au réglage sur l'infini."
  },

  // ---------- Partie C : l'œil de l'utilisateur (4 points) ----------
  {
    id: "U43-337", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "C", etape: 1,
    question: "Où se trouve le remotum de Karim, myope de −4,00 δ ?",
    choix: [
      "À 25 cm derrière son œil",
      "À 4 m devant son œil",
      "À 25 cm devant son œil",
      "À l'infini, devant son œil"
    ],
    bonne: 2,
    explication: "HR = 1/R = 1/(−4,00) = −0,25 m. Le signe moins place le remotum devant l'œil, à 25 cm : c'est le cas d'un myope. Un remotum derrière l'œil serait celui d'un hypermétrope, à l'infini celui d'un emmétrope.",
    erreurs: { 0: { type: "signe", message: "HR = 1/R = −0,25 m : le signe moins place le remotum devant l'œil. Derrière l'œil, ce serait un hypermétrope." } }
  },
  {
    id: "U43-338", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "C", etape: 2,
    question: "Sans lunettes et sans accommoder, Karim voit net l'image finale A' donnée par l'oculaire si elle est :",
    choix: [
      "À l'infini, comme pour tout utilisateur réglé sur ∞",
      "Sur son remotum, à 250 mm devant son œil",
      "Au foyer image de l'oculaire, sur son œil",
      "Sur sa rétine, à 17 mm derrière la cornée"
    ],
    bonne: 1,
    explication: "Un œil qui n'accommode pas voit net seulement les objets placés sur son remotum. Il faut donc A' sur le remotum de Karim, 250 mm devant son œil. Pour lui, une image à l'infini serait floue.",
    surLaCopie: "Sans accommoder, Karim voit net seulement sur son remotum.\nA' doit donc être en R, à 250 mm devant son œil : A₁ → A' = R → A'' sur la rétine."
  },
  {
    id: "U43-339", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U43-01", partie: "C", etape: 3,
    type: "pose",
    question: "Karim, myope de −4,00 δ, sans lunettes et sans accommoder, vise une crête à l'infini. Son œil est au foyer image de l'oculaire. Trouvez où placer l'oculaire, étape par étape.",
    etapes: [
      {
        consigne: "Position du remotum par rapport à l'œil, HR (en mm)",
        reponse: { valeur: -250, unite: "mm", decimales: 0, signe: true },
        aide: "HR = [[1|R]], en mètres puis en millimètres.",
        ligne: "HR = [[1|−4]] = −0,25 m = −250 mm\nL'œil est en F'oc, donc x' = F'oc A' = −250 mm.",
        erreurs: [{ valeur: 250, type: "signe", message: "Le remotum d'un myope est devant l'œil : HR est négatif, −250 mm." }]
      },
      {
        consigne: "Position de A₁ par rapport au foyer objet de l'oculaire, Foc A₁ (en mm)",
        reponse: { valeur: 2.5, unite: "mm", decimales: 1, signe: true },
        aide: "Newton avec l'oculaire : x·x' = −f'oc², avec x' = −250 mm et f'oc = 25 mm.",
        ligne: "x = [[−f'oc²|x']] = [[−625|−250]] = +2,5 mm\nA₁ est 2,5 mm après Foc.",
        erreurs: [{ valeur: -2.5, type: "signe", message: "Avec x' = −250 mm, x = −625 / (−250) = +2,5 mm : A₁ est après Foc, entre Foc et l'oculaire." }]
      },
      {
        consigne: "Distance entre l'objectif et l'oculaire, O₁O₂ (en mm)",
        reponse: { valeur: 222.5, unite: "mm", decimales: 1, signe: false },
        aide: "A₁ est en F'obj, à 200 mm de l'objectif. Foc est 2,5 mm avant A₁, et l'oculaire 25 mm après Foc.",
        ligne: "Foc est à 200 − 2,5 = 197,5 mm de l'objectif.\nO₁O₂ = 197,5 + 25 = 222,5 mm",
        erreurs: [{ valeur: 227.5, type: "notion", message: "A₁ est après Foc : Foc est donc avant A₁, à 197,5 mm de l'objectif. O₁O₂ = 197,5 + 25 = 222,5 mm." }]
      }
    ],
    explication: "Chaîne : A à l'infini → A₁ = F'obj, 2,5 mm après Foc → A' = R, 250 mm devant l'œil → A'' sur la rétine. Pour Karim, l'oculaire se rapproche de 2,5 mm de l'objectif par rapport au réglage d'un emmétrope."
  },
  {
    id: "U43-340", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "C", etape: 4,
    question: "Karim préfère garder ses lunettes (−4,00 δ, bien adaptées). Quel réglage lui faut-il pour la crête lointaine ?",
    choix: [
      "Celui d'un emmétrope, oculaire à 225 mm : avec ses lunettes, il voit net à l'infini",
      "Le même que sans lunettes, oculaire à 222,5 mm : ses lunettes ne changent rien",
      "Un réglage pour −8,00 δ, car l'oculaire et les lunettes ajoutent leurs vergences",
      "Aucun réglage n'est possible : on ne regarde jamais dans un monoculaire avec des lunettes"
    ],
    bonne: 0,
    explication: "Avec sa compensation, l'œil de Karim se comporte comme un œil emmétrope : sans accommoder, il voit net à l'infini. L'image finale doit donc être à l'infini, comme pour un emmétrope : A₁ = Foc, oculaire à 225 mm de l'objectif."
  },
  {
    id: "U43-341", epreuve: "U43", theme: "Œil astigmate", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "C", etape: 5,
    question: "Lucie, sa compagne, porte OD +0,50 (−2,00) 180°. Sans lunettes, peut-elle voir net dans le monoculaire en tournant la bague ?",
    choix: [
      "Oui : en tournant la bague, l'oculaire compense aussi l'astigmatisme",
      "Oui : avec un grossissement de 8, l'astigmatisme ne se remarque plus",
      "Non : un monoculaire n'est fait que pour les yeux emmétropes",
      "Non : la bague déplace un oculaire sphérique, l'astigmatisme reste"
    ],
    bonne: 3,
    explication: "Déplacer l'oculaire déplace l'image finale, comme une sphère qu'on ajouterait : on règle une seule focale de l'œil astigmate. Les deux focales restent séparées et l'image sur la rétine reste floue (tache de diffusion). Le conseil : garder ses lunettes, qui compensent le cylindre.",
    surLaCopie: "La bague déplace un oculaire sphérique : elle règle une seule des deux focales de l'œil astigmate.\nL'image reste floue ; je conseille à Lucie de garder ses lunettes."
  },
  {
    id: "U43-342", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "C", etape: 6,
    question: "Pourquoi l'œilleton est-il rabattable ?",
    choix: [
      "Pour protéger l'oculaire des rayures quand on range l'instrument",
      "Pour régler la myopie de l'utilisateur sans tourner la bague",
      "Pour changer le grossissement selon la distance de l'oiseau",
      "Pour qu'un porteur de lunettes place son œil au cercle oculaire"
    ],
    bonne: 3,
    explication: "Tout le champ n'est vu que si la pupille de l'œil est au cercle oculaire, 28 mm après l'oculaire. Avec des lunettes, l'œil est déjà à une douzaine de millimètres derrière le verre : œilleton déplié, il ne pourrait pas s'approcher assez et ne verrait qu'une partie du champ. Œilleton rabattu, le verre vient près de l'oculaire et l'œil atteint le cercle oculaire."
  },

  // ---------- Partie D : mécanique de la mise au point (4 points) ----------
  {
    id: "U43-343", epreuve: "U43", theme: "Liaisons mécaniques", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "D", etape: 1,
    question: "Quelle est la liaison entre la bague de mise au point (3) et le corps (1) ?",
    choix: ["Glissière d'axe X", "Encastrement", "Hélicoïdale d'axe X", "Pivot d'axe X"],
    bonne: 3,
    explication: "La bague tourne autour du corps et les butées l'empêchent d'avancer : une seule rotation, autour de X, aucune translation. C'est une liaison pivot d'axe X."
  },
  {
    id: "U43-344", epreuve: "U43", theme: "Liaisons mécaniques", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "D", etape: 2,
    question: "Quelle est la liaison entre le porte-oculaire (4) et le corps (1) ?",
    choix: ["Pivot d'axe X", "Pivot glissant d'axe X", "Glissière d'axe X", "Hélicoïdale d'axe X"],
    bonne: 2,
    explication: "L'ergot du corps glisse dans une rainure droite du porte-oculaire : le porte-oculaire peut avancer ou reculer le long de X, mais il ne peut pas tourner. Une seule translation : liaison glissière d'axe X."
  },
  {
    id: "U43-345", epreuve: "U43", theme: "Liaisons mécaniques", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "D", etape: 3,
    question: "Quelle est la liaison entre le porte-oculaire (4) et la bague (3) ?",
    choix: ["Hélicoïdale d'axe X", "Pivot glissant d'axe X", "Glissière d'axe X", "Pivot d'axe X"],
    bonne: 0,
    explication: "Le filetage extérieur du porte-oculaire est engagé dans le filetage intérieur de la bague, comme une vis dans un écrou. Rotation et translation suivant X sont liées : un tour donne un avancement d'un pas. C'est une liaison hélicoïdale d'axe X (un pivot glissant laisserait les deux mouvements indépendants).",
    surLaCopie: "Porte-oculaire (4) / bague (3) : liaison hélicoïdale d'axe X.\nLa rotation et la translation suivant X sont liées par le pas du filetage (2 mm par tour)."
  },
  {
    id: "U43-346", epreuve: "U43", theme: "Mécanismes de réglage", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "D", etape: 4,
    question: "Lors de la mise au point, quel est le mouvement d'entrée, et quel est le mouvement utile ?",
    choix: [
      "Entrée : translation de la bague suivant X ; utile : rotation de l'oculaire",
      "Entrée : rotation de la bague autour de X ; utile : translation de l'oculaire",
      "Entrée : rotation de la bague autour de X ; utile : rotation de l'oculaire",
      "Entrée : translation de l'objectif suivant X ; utile : rotation de la bague"
    ],
    bonne: 1,
    explication: "On tourne la bague (rotation autour de X) ; ce qui compte pour l'optique, c'est que l'oculaire avance ou recule le long de l'axe (translation suivant X). Le système vis-écrou transforme la rotation en translation."
  },
  {
    id: "U43-347", epreuve: "U43", theme: "Mécanismes de réglage", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "D", etape: 5,
    question: "À quoi sert l'ergot du corps qui glisse dans la rainure droite du porte-oculaire ?",
    choix: [
      "À bloquer la bague pour que le réglage ne bouge plus dans le sac",
      "À faire avancer l'oculaire plus vite à chaque tour de bague",
      "À empêcher le porte-oculaire de tourner avec la bague",
      "À centrer l'objectif sur l'axe optique de l'instrument"
    ],
    bonne: 2,
    explication: "Sans cette glissière, le porte-oculaire tournerait avec la bague, comme un écrou qui tourne avec sa vis : il n'avancerait pas. Bloqué en rotation, il ne peut que se translater quand la bague tourne. C'est la condition pour qu'un système vis-écrou transforme la rotation en translation."
  },
  {
    id: "U43-348", epreuve: "U43", theme: "Mécanismes de réglage", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U43-01", partie: "D", etape: 6,
    type: "pose",
    contexte: "Karim, sans lunettes, veut voir net un oiseau posé à 5,2 m de l'objectif. L'objectif en donne l'image A₁ à 208 mm après lui. Pour Karim, A₁ doit se trouver 2,5 mm après le foyer objet de l'oculaire. Au départ, la bague est sur le repère ∞ d'un emmétrope : oculaire à 225 mm de l'objectif.",
    question: "Combien de tours de bague faut-il, depuis le repère ∞ ? Trouvez-le étape par étape.",
    etapes: [
      {
        consigne: "Nouvelle distance entre l'objectif et l'oculaire, O₁O₂ (en mm)",
        reponse: { valeur: 230.5, unite: "mm", decimales: 1, signe: false },
        aide: "Foc est 2,5 mm avant A₁ ; l'oculaire est 25 mm après Foc.",
        ligne: "Foc est à 208 − 2,5 = 205,5 mm de l'objectif.\nO₁O₂ = 205,5 + 25 = 230,5 mm",
        erreurs: [{ valeur: 235.5, type: "notion", message: "A₁ est après Foc : Foc est donc avant A₁, à 205,5 mm de l'objectif. O₁O₂ = 205,5 + 25 = 230,5 mm." }]
      },
      {
        consigne: "Course de l'oculaire depuis le repère ∞ (en mm)",
        reponse: { valeur: 5.5, unite: "mm", decimales: 1, signe: false },
        aide: "Au repère ∞, O₁O₂ = 225 mm.",
        ligne: "230,5 − 225 = 5,5 mm : l'oculaire s'éloigne de l'objectif."
      },
      {
        consigne: "Nombre de tours de bague",
        reponse: { valeur: 2.75, unite: "tours", decimales: 2, signe: false },
        aide: "Liaison hélicoïdale : un tour de bague fait avancer l'oculaire d'un pas, 2 mm.",
        ligne: "Nombre de tours = [[course|pas]] = [[5,5|2]] = 2,75 tours",
        erreurs: [{ valeur: 11, type: "notion", message: "On divise la course par le pas, on ne la multiplie pas : 5,5 / 2 = 2,75 tours." }]
      }
    ],
    explication: "L'oculaire passe de 225 à 230,5 mm de l'objectif : 5,5 mm de course. Avec un pas de 2 mm, il faut 2,75 tours de bague, soit 2 tours et trois quarts."
  },

  // ---------- Partie E : étude des champs (5 points) ----------
  {
    id: "U43-349", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "E", etape: 1,
    question: "Quel diaphragme est la pupille d'entrée du monoculaire ?",
    choix: [
      "La monture de l'oculaire, de 24 mm",
      "La pupille de l'œil de l'utilisateur",
      "Le diaphragme de champ, de 14 mm",
      "La monture de l'objectif, de 40 mm"
    ],
    bonne: 3,
    explication: "On conjugue les diaphragmes dans l'espace objet, à travers l'objectif. Le diaphragme de champ, en F'obj, a son image à l'infini. La monture de l'oculaire a son image à 1,8 m devant l'objectif, avec un diamètre de 192 mm. Pour un objet sur l'axe à l'infini (faisceau parallèle), le diaphragme qui limite le faisceau est la monture de l'objectif (40 mm) : c'est la pupille d'entrée.",
    surLaCopie: "Pour un objet à l'infini sur l'axe, le faisceau est limité par la monture de l'objectif (40 mm) ; l'image de la monture de l'oculaire, 192 mm, ne le limite pas.\nPupille d'entrée : la monture de l'objectif."
  },
  {
    id: "U43-350", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "E", etape: 2,
    question: "Quel diaphragme est la lucarne d'entrée ?",
    choix: [
      "Le diaphragme de champ, de 14 mm",
      "La monture de l'oculaire, de 24 mm",
      "La monture de l'objectif, déjà pupille",
      "Le bord du prisme de Porro le plus étroit"
    ],
    bonne: 0,
    explication: "La lucarne est le diaphragme vu sous le plus petit angle depuis le centre de la pupille d'entrée (le centre de l'objectif). Le diaphragme de champ, à l'infini dans l'espace objet, est vu sous un demi-angle de tangente 7/200 = 0,035. L'image de la monture de l'oculaire (rayon 96 mm à 1 800 mm) est vue sous 96/1 800 = 0,053. Le plus petit angle : le diaphragme de champ est la lucarne."
  },
  {
    id: "U43-351", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "E", etape: 3,
    question: "Le diaphragme de champ est dans le plan de l'image intermédiaire. Quelle conséquence pour le champ ?",
    choix: [
      "Le champ de pleine lumière est nul : tout le champ est assombri",
      "Le champ total vaut le double du champ de pleine lumière",
      "Les champs de pleine lumière, moyen et total sont égaux",
      "Le champ dépend de l'œil : il change d'un utilisateur à l'autre"
    ],
    bonne: 2,
    explication: "La lucarne est conjuguée avec l'objet (son image est à l'infini, comme l'oiseau). Un point de l'objet est soit dans l'ouverture du diaphragme, et son faisceau passe en entier, soit hors de l'ouverture, et rien ne passe. Il n'y a pas de zone de contour : le champ de pleine lumière, le champ moyen et le champ total sont égaux, et le bord du champ est net.",
    surLaCopie: "La lucarne est dans le plan de l'image intermédiaire, conjuguée avec l'objet.\nPas de champ de contour : champ de pleine lumière = champ moyen = champ total, bord du champ net."
  },
  {
    id: "U43-352", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "E", etape: 4,
    question: "Vérifiez le champ annoncé par le fabricant : quelle largeur de paysage voit-on à 1 000 m ?",
    choix: ["35 m", "70 m", "140 m", "560 m"],
    bonne: 1,
    explication: "Le bord du champ correspond au bord du diaphragme de champ, à 7 mm de l'axe, dans le plan focal de l'objectif : tan α = 7 / 200 = 0,035. À 1 000 m, demi-largeur = 1 000 × 0,035 = 35 m, soit 70 m en tout. Le fabricant dit vrai. 35 m n'est que la moitié du champ.",
    erreurs: { 0: { type: "notion", message: "35 m est la demi-largeur, d'un bord à l'axe. Le champ s'étend des deux côtés : 2 × 35 = 70 m." } }
  },
  {
    id: "U43-353", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U43-01", partie: "E", etape: 5,
    question: "Sous quel angle total l'œil voit-il le champ dans l'oculaire (champ apparent) ?",
    choix: ["Environ 4°", "Environ 16°", "Environ 31°", "Environ 63°"],
    bonne: 2,
    explication: "Le bord du diaphragme de champ, à 7 mm de l'axe, est au foyer objet de l'oculaire : l'œil le voit sous un demi-angle de tangente 7 / 25 = 0,28, soit 15,6°. Le champ apparent total vaut environ 31°. 4° est le champ réel (côté paysage), 16° seulement le demi-angle."
  },
  {
    id: "U43-354", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "facile",
    sujet: "SUJET-U43-01", partie: "E", etape: 6,
    question: "Qu'est-ce que le cercle oculaire de ce monoculaire ?",
    choix: [
      "L'image de la monture de l'objectif par l'oculaire, où placer l'œil",
      "L'image du diaphragme de champ par l'oculaire, le bord net du champ",
      "La monture de l'oculaire elle-même, contre laquelle on pose l'œil",
      "L'image de la pupille de l'œil par l'objectif, vue depuis l'oiseau"
    ],
    bonne: 0,
    explication: "Le cercle oculaire est la pupille de sortie : l'image de la pupille d'entrée (la monture de l'objectif) donnée par l'oculaire. Tous les faisceaux qui sortent de l'instrument y passent : c'est là qu'on place la pupille de l'œil pour voir tout le champ."
  },
  {
    id: "U43-355", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U43-01", partie: "E", etape: 7,
    type: "pose",
    question: "Instrument réglé sur l'infini, oculaire à 225 mm de l'objectif. Trouvez la position et le diamètre du cercle oculaire, étape par étape, et vérifiez le dégagement annoncé.",
    etapes: [
      {
        consigne: "Position du cercle oculaire après l'oculaire, O₂A' (en mm, au dixième)",
        reponse: { valeur: 28.1, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "Conjugaison avec l'oculaire : l'objet est la monture de l'objectif, O₂A = −225 mm.",
        ligne: "[[1|O₂A']] = [[1|25]] + [[1|−225]] = [[9|225]] − [[1|225]] = [[8|225]]\nO₂A' = [[225|8]] = +28,1 mm",
        erreurs: [{ valeur: 22.5, type: "signe", message: "Tu as pris O₂A = +225 mm. La monture de l'objectif est avant l'oculaire : O₂A = −225 mm." }]
      },
      {
        consigne: "Grandissement γ de l'oculaire pour ce couple",
        reponse: { valeur: -0.125, unite: "", decimales: 3, signe: true },
        aide: "γ = [[O₂A'|O₂A]].",
        ligne: "γ = [[28,125|−225]] = −0,125"
      },
      {
        consigne: "Diamètre du cercle oculaire (en mm)",
        reponse: { valeur: 5, unite: "mm", decimales: 1, signe: false },
        aide: "Diamètre de la monture de l'objectif × |γ|.",
        ligne: "40 × 0,125 = 5,0 mm (on retrouve [[40|8]], diamètre de l'objectif divisé par le grossissement)"
      }
    ],
    explication: "Le cercle oculaire est à 28,1 mm après l'oculaire : le dégagement de 28 mm annoncé est juste. Son diamètre, 5 mm, vaut le diamètre de l'objectif divisé par le grossissement : 40 / 8."
  }

);
