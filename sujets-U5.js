// Sujets blancs d'Analyse de la vision (U5).
// Un sujet = une situation de départ, des documents, 7 parties notées sur 20.
// Format : notes/coordination/sujet-blanc.md. Chargé plus tard par qcm.html, après questions-U5.js.
// Les questions d'un sujet ne sortent nulle part ailleurs (ni thèmes, ni Essentiel, ni examen blanc).
// Énoncés, cliente et chiffres écrits par Opticonversion.

SUJETS.push({
  id: "SUJET-U5-01",
  epreuve: "U5",
  titre: "Manon, 31 ans, infirmière de nuit",
  contexte: "Vous réalisez l'examen de vue de Manon Delcourt, 31 ans, infirmière de nuit aux urgences. Elle vient pour des maux de tête et voudrait essayer des lentilles pour ses gardes.",
  annexe: {
    titre: "Fiche de la cliente",
    colonnes: ["", "Ce qu'elle dit"],
    lignes: [
      ["Plaintes", "Mal au front en fin de garde. Les étiquettes des médicaments deviennent floues en fin de nuit. Avec ses lunettes, il lui arrive de les voir doubles quand elle baisse les yeux."],
      ["Vision de loin", "Voit bien de loin sans lunettes. Dit que son œil gauche « a toujours été le moins bon »."],
      ["Lunettes", "Faites il y a 4 ans : OD +0,50, OG +2,00. Elle les met seulement pour lire les étiquettes et les dossiers."],
      ["Santé", "Aucun traitement. Son père est suivi pour un glaucome."],
      ["Besoins", "Lecture à 40 cm (étiquettes, seringues, dossiers), écran, conduite de nuit pour rentrer chez elle."]
    ]
  },
  parties: [
    { lettre: "A", titre: "Histoire de cas", points: 2 },
    { lettre: "B", titre: "Examen préliminaire", points: 3,
      contexte: "Mesures en vision de loin.",
      annexe: {
        titre: "Acuités visuelles en vision de loin",
        colonnes: ["", "OD", "OG"],
        lignes: [
          ["Sans lunettes", "10/10", "5/10"],
          ["Avec ses lunettes", "10/10", "7/10"],
          ["Avec ses lunettes et +2,00 ajouté", "non mesuré", "5/10"]
        ]
      }
    },
    { lettre: "C", titre: "Réfraction subjective", points: 3.5,
      contexte: "Réfraction en lunettes d'essai, verres à 12 mm de la cornée. Avec la compensation finale, elle lit 10/10 de l'OD et 8/10 de l'OG." },
    { lettre: "D", titre: "Accommodation et vision de près", points: 2.5,
      contexte: "On néglige ici la distance verre-œil : on prend les équivalents sphériques des verres, OD +1,00 ; OG +3,50." },
    { lettre: "E", titre: "Vision binoculaire", points: 3.5,
      contexte: "Tests de la vision binoculaire, avec ses anciennes lunettes puis avec la nouvelle compensation." },
    { lettre: "F", titre: "Anisométropie en lunettes", points: 2.5,
      contexte: "Lunettes avec la nouvelle compensation, verres à 12 mm de l'œil : OD +1,00 ; OG +3,75 (−0,50) 90°. En lisant, son regard passe 8 mm sous les centres optiques.",
      annexe: {
        titre: "Kératométrie",
        colonnes: ["", "OD", "OG"],
        lignes: [
          ["Méridien horizontal", "7,70 mm", "8,10 mm"],
          ["Méridien vertical", "7,70 mm", "8,10 mm"]
        ]
      }
    },
    { lettre: "G", titre: "Lentilles et synthèse", points: 3,
      contexte: "Elle choisit des lentilles souples sphériques en silicone-hydrogel, à porter pendant ses gardes." }
  ]
});

QUESTIONS.push(

  // ---------- Partie A : histoire de cas (2 points) ----------
  {
    id: "U5-326", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "A", etape: 1,
    question: "D'après la fiche, quelle amétropie suspectez-vous ?",
    choix: [
      "Une myopie aux deux yeux, plus forte à l'œil gauche",
      "Une presbytie précoce, la même aux deux yeux, déjà gênante",
      "Une hypermétropie aux deux yeux, plus forte à gauche",
      "Un astigmatisme fort, surtout de l'œil droit"
    ],
    bonne: 2,
    explication: "Ses verres sont convexes (+0,50 et +2,00). Elle voit bien de loin sans lunettes mais se fatigue de près : c'est le tableau d'une hypermétropie que l'accommodation compense. Le verre de l'OG est plus fort de 1,50 δ et cet œil a « toujours été le moins bon » : il y a anisométropie, l'OG est le plus hypermétrope. À 31 ans, une presbytie est exclue.",
    surLaCopie: "Ses verres sont convexes et elle voit bien de loin, mais se fatigue de près : je suspecte une hypermétropie compensée par l'accommodation.\nL'OG porte le verre le plus fort et a toujours été le moins bon : il est le plus hypermétrope, il y a anisométropie."
  },
  {
    id: "U5-327", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "A", etape: 2,
    question: "Pourquoi Manon voit-elle bien de loin sans lunettes ?",
    choix: [
      "Son hypermétropie disparaît de loin et ne gêne que de près",
      "Elle accommode pour ramener l'image sur la rétine, sans répit",
      "Sa pupille se resserre et rend l'image nette à toute distance",
      "Son œil droit voit seul de loin, le gauche ne sert que de près"
    ],
    bonne: 1,
    explication: "L'œil hypermétrope forme l'image d'un objet éloigné derrière la rétine. Un sujet jeune accommode pour l'avancer : il voit net de loin, mais cet effort ne s'arrête jamais, et celui de la vision de près s'y ajoute."
  },
  {
    id: "U5-328", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "A", etape: 3,
    question: "Son œil gauche a « toujours été le moins bon ». Quelle explication est la plus probable ?",
    choix: [
      "Une amblyopie fonctionnelle : l'OG, plus hypermétrope, était flou enfant",
      "Un glaucome de l'OG, hérité de son père, qui baisse son acuité depuis l'enfance",
      "Une cataracte congénitale de l'OG, que des lunettes ne peuvent pas compenser",
      "Une myopie de l'OG apparue à l'adolescence et jamais compensée par des verres"
    ],
    bonne: 0,
    explication: "Les deux yeux accommodent de la même quantité. L'enfant met au point pour l'œil le moins hypermétrope, l'OD : l'OG reste flou. Pendant la période de maturation visuelle, le cerveau privilégie l'image nette de l'OD et l'OG ne développe pas toute son acuité. Sans lésion, c'est une amblyopie fonctionnelle, d'origine anisométropique. Un glaucome se déclare à l'âge adulte et ne baisse pas l'acuité dès l'enfance.",
    surLaCopie: "Les deux yeux accommodent autant : l'enfant met au point pour l'OD, et l'OG, plus hypermétrope, reste flou.\nPendant la maturation visuelle, le cerveau néglige cette image : l'OG a une amblyopie fonctionnelle, anisométropique."
  },
  {
    id: "U5-329", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "A", etape: 4,
    question: "Pourquoi ses maux de tête apparaissent-ils surtout en fin de garde ?",
    choix: [
      "L'éclairage faible dilate sa pupille et déclenche une crise de glaucome",
      "La lecture augmente sa myopie au fil des heures et brouille le loin",
      "La lumière bleue des écrans abîme la rétine et donne une douleur",
      "Elle accommode toute la nuit, et la fatigue rend l'effort plus dur"
    ],
    bonne: 3,
    explication: "Hypermétrope peu ou pas compensée, elle accommode en permanence, de loin comme de près, et beaucoup pour lire ses étiquettes. Au fil de la nuit, l'effort devient difficile à tenir : maux de tête frontaux et flou en vision de près. Rien n'évoque une crise de glaucome (ni œil rouge, ni douleur brutale, ni halos)."
  },
  {
    id: "U5-330", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "A", etape: 5,
    question: "Avec ses lunettes, les étiquettes lui paraissent parfois doubles quand elle baisse les yeux. Quelle hypothèse vient en premier ?",
    choix: [
      "Ses verres trop faibles grossissent les lettres au point de les dédoubler",
      "Son œil gauche louche vers l'intérieur dès qu'elle met ses lunettes",
      "Ses deux verres, de puissances différentes, créent des prismes différents",
      "Un verre convexe donne toujours une image double hors de son centre"
    ],
    bonne: 2,
    explication: "En regardant sous les centres optiques, chaque verre agit comme un prisme (règle de Prentice : P = d × D). Le verre de l'OG est plus fort, son prisme est plus grand : la différence crée une déviation verticale que la fusion compense mal, car les réserves verticales sont faibles. C'est l'effet prismatique vertical différentiel, étudié dans la partie F.",
    surLaCopie: "Sous les centres optiques, chaque verre crée un prisme vertical (Prentice) ; celui de l'OG, plus fort, crée le plus grand.\nLa différence donne une déviation verticale que la fusion compense mal : c'est l'effet prismatique vertical différentiel."
  },

  // ---------- Partie B : examen préliminaire (3 points) ----------
  {
    id: "U5-331", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 1,
    question: "Sans lunettes, l'OD lit 10/10 et l'OG seulement 5/10. Comment l'expliquer ?",
    choix: [
      "L'OD est emmétrope et n'a besoin d'aucun verre, ni de loin ni de près, à son âge",
      "L'OG est myope : de loin, son image se forme en avant de la rétine",
      "L'OD est déjà presbyte : il voit bien de loin mais plus de près",
      "L'OG, plus hypermétrope et amblyope, ne compense pas tout en accommodant"
    ],
    bonne: 3,
    explication: "L'acuité sans lunettes se mesure œil par œil. L'OD, faiblement hypermétrope, compense son défaut en accommodant : 10/10. Le 5/10 de l'OG vient surtout de son amblyopie ; un œil amblyope accommode aussi moins bien (retard accommodatif) et laisse une part de son hypermétropie non compensée. Ses verres convexes excluent une myopie, et l'OD a besoin de positif : il n'est pas emmétrope."
  },
  {
    id: "U5-332", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 2,
    type: "calcul",
    question: "Avec ses lunettes, on ajoute +2,00 devant l'OG : son acuité passe à 5/10. Estimez, avec la règle de Swaine, la défocalisation créée.",
    reponse: { valeur: 0.5, unite: "δ", decimales: 2, signe: false },
    erreurs: [
      { valeur: 2, type: "notion", message: "Swaine divise 1 par 4 × AV, pas par l'acuité seule : 1 / (4 × 0,5) = 0,50 δ." }
    ],
    explication: "Règle de Swaine, valable pour une acuité de 5/10 ou moins :\ndéfocalisation ≈ [[1|4 × AV]] = [[1|4 × 0,5]] = [[1|2]] = 0,50 δ.",
    indice: "Swaine : défocalisation ≈ [[1|4 × AV]], avec l'acuité en décimal (5/10 = 0,5)."
  },
  {
    id: "U5-333", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 3,
    type: "calcul",
    question: "Déduisez-en la sphère résiduelle de l'OG avec ses lunettes, avec son signe.",
    reponse: { valeur: 1.5, unite: "δ", decimales: 2, signe: true },
    erreurs: [
      { valeur: 2.5, type: "notion", message: "Tu as ajouté le brouillage au verre. Le +2,00 compense d'abord la sphère résiduelle, seul le reste brouille : 2,00 − 0,50 = +1,50." },
      { valeur: -1.5, type: "signe", message: "Le verre convexe a d'abord compensé un manque de positif : la sphère résiduelle est positive, +1,50." }
    ],
    explication: "Le verre ajouté se partage entre la sphère résiduelle et le brouillage :\n+2,00 = résiduelle + 0,50, donc résiduelle = +2,00 − 0,50 = +1,50 δ.\nAvec ses lunettes, l'OG reste sous-compensé de +1,50 : une partie de son hypermétropie n'est pas corrigée.",
    indice: "Le verre de +2,00 compense d'abord ce qui manque, puis brouille de 0,50 δ. Fais la différence."
  },
  {
    id: "U5-334", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 4,
    question: "Que montre ce test du verre convexe sur l'OG ?",
    choix: [
      "Ses lunettes laissent environ +1,50 d'hypermétropie non compensée",
      "Ses lunettes sont trop fortes : l'OG est surcompensé en positif",
      "L'OG est devenu myope : le verre convexe aggrave beaucoup son flou",
      "L'amblyopie fausse le test : aucun verre convexe ne peut la brouiller"
    ],
    bonne: 0,
    explication: "Un œil bien compensé, brouillé de 2,00 δ, tomberait vers 1/10 (Swaine : 1 / (4 × 2) ≈ 0,12). Ici l'acuité reste à 5/10 : le verre a d'abord comblé un manque de positif. L'OG est sous-compensé d'environ +1,50, une hypermétropie que l'accommodation masquait.",
    surLaCopie: "Avec +2,00, l'acuité tombe seulement à 5/10, soit un brouillage de 0,50 δ (Swaine).\nLe verre a d'abord compensé une sphère résiduelle de +2,00 − 0,50 = +1,50 : l'OG est sous-compensé."
  },
  {
    id: "U5-335", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 5,
    contexte: "Sur l'OG, on place +4,25 pour le myopiser légèrement, puis on montre le cadran de Parent. La ligne 3h-9h est vue la plus noire.",
    question: "Quel cylindre compensateur cela indique-t-il ?",
    choix: [
      "Un cylindre négatif d'axe 180°",
      "Un cylindre négatif d'axe 45°",
      "Un cylindre négatif d'axe 90°",
      "Aucun : l'OG n'est pas astigmate"
    ],
    bonne: 2,
    explication: "Myopisé, l'OG a ses deux focales en avant de la rétine. La ligne vue la plus noire est parallèle à la focale arrière, la plus proche de la rétine : ici, elle est horizontale. L'axe du cylindre négatif est perpendiculaire à cette ligne : 90°. Si toutes les lignes étaient identiques, l'œil ne serait pas astigmate.",
    surLaCopie: "L'OG est myopisé : ses deux focales sont en avant de la rétine, et la ligne la plus noire est parallèle à la focale arrière.\nElle est horizontale : l'axe du cylindre négatif est perpendiculaire, à 90°."
  },
  {
    id: "U5-336", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "B", etape: 6,
    annexe: {
      titre: "Ticket de l'autoréfractomètre",
      colonnes: ["", "Sphère", "Cylindre", "Axe"],
      lignes: [["OD", "+0,75", "−0,25", "180°"], ["OG", "+3,25", "−0,50", "90°"]]
    },
    question: "Le ticket donne moins de positif que le test du verre convexe ne le laissait prévoir. Quelle est l'explication la plus probable ?",
    choix: [
      "Son film lacrymal, asséché par la nuit, fausse surtout la sphère",
      "Elle a accommodé pendant la mesure, en regardant dans l'appareil",
      "L'amblyopie de l'OG empêche l'appareil de mesurer la sphère",
      "L'appareil donne toujours plus de positif qu'il n'en faut"
    ],
    bonne: 1,
    explication: "Devant l'appareil, le sujet sait que la cible est proche et accommode souvent un peu (accommodation instrumentale). Chez un jeune hypermétrope, le ticket donne donc moins de positif que la réfraction réelle : il sert de point de départ, pas de résultat. Un film lacrymal instable fait plutôt varier le cylindre et l'axe."
  },

  // ---------- Partie C : réfraction subjective (3,5 points) ----------
  {
    id: "U5-337", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "C", etape: 1,
    question: "Pourquoi commence-t-on chaque œil par un brouillage chez Manon ?",
    choix: [
      "Pour mesurer son amplitude d'accommodation avant de chercher la sphère",
      "Pour obliger l'OG amblyope à travailler plus que l'OD",
      "Pour trouver l'axe du cylindre sans cylindre croisé",
      "Pour relâcher son accommodation et ne pas la sous-compenser"
    ],
    bonne: 3,
    explication: "Le brouillage place l'image en avant de la rétine : accommoder aggraverait le flou, donc le sujet relâche son accommodation. Chez un jeune hypermétrope, sans brouillage, une partie de l'hypermétropie resterait cachée par l'accommodation et on la sous-compenserait.",
    surLaCopie: "Le brouillage place l'image en avant de la rétine : accommoder aggraverait le flou, la cliente relâche donc son accommodation.\nCela évite de laisser une hypermétropie latente non compensée."
  },
  {
    id: "U5-338", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "C", etape: 2,
    type: "calcul",
    annexe: {
      titre: "Ticket de l'autoréfractomètre",
      colonnes: ["", "Sphère", "Cylindre", "Axe"],
      lignes: [["OD", "+0,75", "−0,25", "180°"], ["OG", "+3,25", "−0,50", "90°"]]
    },
    question: "Calculez l'équivalent sphérique de l'OG donné par l'autoréfractomètre, avec son signe.",
    reponse: { valeur: 3, unite: "δ", decimales: 2, signe: true },
    erreurs: [
      { valeur: 2.75, type: "notion", message: "Tu as ajouté tout le cylindre. L'équivalent sphérique prend la moitié du cylindre : +3,25 + (−0,50 / 2) = +3,00." }
    ],
    explication: "ES = S + [[C|2]] = +3,25 + [[−0,50|2]] = +3,25 − 0,25 = +3,00 δ.",
    indice: "ES = sphère + la moitié du cylindre, avec son signe."
  },
  {
    id: "U5-339", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "C", etape: 3,
    question: "OD : avec +0,75, Manon lit mieux les lettres sur le fond vert du test bichrome. Que faites-vous ?",
    choix: [
      "J'ajoute −0,25, car le vert signale un œil trop convergent",
      "J'ajoute +0,25, puis je recommence jusqu'à l'égalité",
      "Je garde +0,75 : un hypermétrope doit finir sur le vert",
      "J'ajoute −0,50 pour que le rouge devienne le plus net"
    ],
    bonne: 1,
    explication: "Le vert, plus réfracté, se forme en avant du rouge. S'il est plus net, l'image est encore derrière la rétine : il manque du positif. On ajoute +0,25 jusqu'à l'égalité des deux fonds, ou un léger avantage au rouge. Ici l'OD finit à +1,00.",
    surLaCopie: "Le vert plus net montre que l'image est encore derrière la rétine : l'OD manque de positif.\nJ'ajoute +0,25 et je recommence jusqu'à l'égalité du rouge et du vert."
  },
  {
    id: "U5-340", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "C", etape: 4,
    contexte: "OG : après le brouillage, la meilleure sphère seule est +3,50. Le cylindre croisé montre qu'il faut un cylindre négatif d'axe 90° ; on place −0,50.",
    question: "Quelle formule placez-vous pour garder le même équivalent sphérique ?",
    choix: ["+3,75 (−0,50) 90°", "+3,25 (−0,50) 90°", "+3,75 (−0,50) 180°", "+3,50 (−0,50) 90°"],
    bonne: 0,
    explication: "L'équivalent sphérique doit rester +3,50 pour garder le cercle de moindre diffusion sur la rétine. ES = S + [[C|2]] : S = +3,50 − [[−0,50|2]] = +3,50 + 0,25 = +3,75. L'axe trouvé au cylindre croisé, 90°, ne change pas.",
    surLaCopie: "Ajouter −0,50 de cylindre fait baisser l'équivalent sphérique de 0,25.\nPour garder le cercle de moindre diffusion sur la rétine, j'ajoute +0,25 à la sphère : OG +3,75 (−0,50) 90°."
  },
  {
    id: "U5-341", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "C", etape: 5,
    type: "calcul",
    question: "Avec OG +3,75 (−0,50) 90°, quelle est la puissance du verre dans le méridien vertical, avec son signe ?",
    reponse: { valeur: 3.75, unite: "δ", decimales: 2, signe: true },
    erreurs: [
      { valeur: 3.25, type: "notion", message: "Un cylindre n'a aucune puissance le long de son axe. Axe à 90° : le méridien vertical garde la sphère seule, +3,75." },
      { valeur: 3.5, type: "notion", message: "C'est l'équivalent sphérique. La question demande la puissance dans le méridien vertical : la sphère seule, +3,75." }
    ],
    explication: "Un cylindre agit perpendiculairement à son axe. D'axe 90°, il agit dans le méridien horizontal : +3,75 − 0,50 = +3,25. Le méridien vertical garde la sphère seule : +3,75 δ. C'est cette puissance qui compte pour un effet prismatique vertical (partie F).",
    indice: "Le cylindre agit à 90° de son axe. Son axe est vertical : agit-il dans le méridien vertical ?"
  },
  {
    id: "U5-342", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U5-01", partie: "C", etape: 6,
    contexte: "Équilibre bioculaire par prismes dissociants, +0,75 de brouillage sur chaque œil. Manon voit toujours la ligne de l'OD plus nette, même après +0,50 de plus sur l'OD.",
    question: "Que faites-vous ?",
    choix: [
      "J'ajoute encore du positif sur l'OD jusqu'à voir les deux lignes égales",
      "J'ajoute du négatif sur l'OG jusqu'à ce que sa ligne soit la plus nette",
      "Je retire ce +0,50 : l'OG amblyope ne verra jamais aussi net que l'OD",
      "J'arrête l'examen : un écart qui persiste signe une maladie à orienter"
    ],
    bonne: 2,
    explication: "L'équilibre bioculaire cherche le même relâchement d'accommodation aux deux yeux, en jugeant la netteté. L'amblyopie limite l'acuité de l'OG (8/10 au mieux) : même bien compensé, il ne verra pas aussi net. Brouiller l'OD pour égaliser le sous-compenserait, et ajouter du négatif sur l'OG le ferait accommoder. On garde les sphères trouvées œil par œil, ou l'on termine par un bichrome en binoculaire. L'amblyopie est déjà connue : rien de nouveau à orienter.",
    surLaCopie: "L'amblyopie limite l'acuité de l'OG : il ne verra jamais aussi net que l'OD, même bien compensé.\nÉgaliser la netteté sous-compenserait l'OD : je retire le +0,50 et je garde les sphères monoculaires."
  },
  {
    id: "U5-343", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "C", etape: 7,
    question: "Chez un jeune hypermétrope comme Manon, quelle sphère retient-on en fin de réfraction ?",
    choix: [
      "La moins convexe qui donne la meilleure acuité",
      "La valeur exacte affichée par l'autoréfractomètre",
      "La plus convexe qui donne la meilleure acuité",
      "La sphère de ses anciennes lunettes, pour ne pas la gêner"
    ],
    bonne: 2,
    explication: "On retient le maximum de positif qui donne la meilleure acuité : tout positif retiré devrait être compensé par l'accommodation. Le changement est fort sur l'OG (+1,50 de plus) : on vérifie le confort à l'essai en lunettes, car certains jeunes hypermétropes acceptent mal tout le positif d'un coup. À l'inverse, chez un myope, on garde le moins de négatif possible."
  },

  // ---------- Partie D : accommodation et vision de près (2,5 points) ----------
  {
    id: "U5-344", epreuve: "U5", theme: "Réfraction", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "D", etape: 1,
    question: "Où se trouve le remotum de l'OD, hypermétrope de +1,00 ?",
    choix: [
      "À 1 m devant l'œil : il est réel",
      "À l'infini, comme celui d'un œil emmétrope",
      "À 25 cm devant l'œil, au punctum proximum",
      "À 1 m derrière l'œil : il est virtuel"
    ],
    bonne: 3,
    explication: "Le remotum est le point vu net sans accommoder. Pour un hypermétrope, c'est un point virtuel situé derrière l'œil, à [[1|R]] : [[1|1,00]] = 1 m derrière l'œil. Seul un myope a un remotum réel, devant l'œil."
  },
  {
    id: "U5-345", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "D", etape: 2,
    type: "calcul",
    question: "Estimez l'amplitude d'accommodation minimale de Manon avec la formule de Hofstetter : Amin = 15 − 0,25 × âge.",
    reponse: { valeur: 7.25, unite: "δ", decimales: 2, signe: false },
    explication: "Amin = 15 − 0,25 × 31 = 15 − 7,75 = 7,25 δ. C'est la valeur minimale attendue à son âge ; l'amplitude moyenne est plus forte.",
    indice: "Remplace l'âge par 31 : 0,25 × 31 = ?"
  },
  {
    id: "U5-346", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "D", etape: 3,
    type: "calcul",
    question: "Sans lunettes, quelle accommodation l'OG met-il en jeu pour lire une étiquette à 40 cm ?",
    reponse: { valeur: 6, unite: "δ", decimales: 2, signe: false },
    erreurs: [
      { valeur: 2.5, type: "notion", message: "Tu as oublié l'hypermétropie : un hypermétrope accommode déjà de loin. Il faut 3,50 + 2,50 = 6,00 δ." },
      { valeur: 1, type: "notion", message: "Tu as soustrait l'hypermétropie. Elle s'ajoute à l'accommodation demandée par la distance : 3,50 + 2,50 = 6,00 δ." }
    ],
    explication: "Acc = R − [[1|HT]] = +3,50 − [[1|−0,40]] = 3,50 + 2,50 = 6,00 δ.\nC'est 3,50 δ pour compenser son hypermétropie, plus 2,50 δ pour la distance de 40 cm.",
    indice: "Un hypermétrope accommode déjà pour voir net de loin. Ajoute la vergence de la distance : 1 / 0,40."
  },
  {
    id: "U5-347", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "D", etape: 4,
    type: "pose",
    question: "Avec ses anciennes lunettes (OG +2,00), calculez l'accommodation de l'OG pour lire à 40 cm, étape par étape.",
    etapes: [
      {
        consigne: "Hypermétropie qui reste non compensée avec le verre de +2,00 (en δ, avec son signe)",
        reponse: { valeur: 1.5, unite: "δ", decimales: 2, signe: true },
        aide: "Le verre compense une partie de l'hypermétropie de +3,50 : fais la différence.",
        ligne: "+3,50 − 2,00 = +1,50 δ",
        erreurs: [{ valeur: 5.5, type: "notion", message: "Le verre convexe compense l'hypermétropie : on retire +2,00 de +3,50, il reste +1,50." }]
      },
      {
        consigne: "Accommodation à 40 cm (en δ)",
        reponse: { valeur: 4, unite: "δ", decimales: 2, signe: false },
        aide: "À cette hypermétropie restante, ajoute la vergence de la distance de lecture.",
        ligne: "Acc = 1,50 + [[1|0,40]] = 1,50 + 2,50 = 4,00 δ",
        erreurs: [{ valeur: 2.5, type: "notion", message: "Tu as compté seulement la distance. Les lunettes laissent +1,50 d'hypermétropie que l'œil compense aussi : 1,50 + 2,50 = 4,00 δ." }]
      }
    ],
    explication: "Ses lunettes ne compensent que +2,00 sur +3,50 : il reste +1,50 d'hypermétropie, que l'OG compense en accommodant, en plus des 2,50 δ demandés par la distance. Acc = 1,50 + 2,50 = 4,00 δ. Bien compensée, elle n'accommoderait que 2,50 δ."
  },
  {
    id: "U5-348", epreuve: "U5", theme: "Examen préliminaire", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U5-01", partie: "D", etape: 5,
    question: "On lit sans fatigue en utilisant au plus la moitié de son amplitude. Avec son amplitude minimale estimée (7,25 δ), que conclure pour l'OG ?",
    choix: [
      "Sans lunettes, elle dépasse son amplitude : elle ne peut pas lire du tout de près",
      "Avec ses lunettes, elle reste sous la moitié : la gêne vient d'ailleurs",
      "À 31 ans son amplitude est trop faible : il lui faut déjà une addition",
      "Même avec ses lunettes, 4,00 δ dépasse la moitié de 7,25 δ : d'où la fatigue"
    ],
    bonne: 3,
    explication: "Moitié de l'amplitude : 7,25 / 2 ≈ 3,60 δ. Sans lunettes, 6,00 δ : possible (moins que 7,25) mais très fatigant. Avec ses lunettes, 4,00 δ : encore au-dessus de 3,60. Bien compensée, elle n'accommode plus que 2,50 δ, sous la moitié : aucune addition n'est utile à 31 ans.",
    surLaCopie: "Elle peut accommoder 7,25 δ au minimum, donc environ 3,60 δ sans fatigue. Avec ses lunettes elle en utilise 4,00, sans lunettes 6,00 : la fatigue est expliquée.\nBien compensée, elle n'accommodera que 2,50 δ."
  },

  // ---------- Partie E : vision binoculaire (3,5 points) ----------
  {
    id: "U5-349", epreuve: "U5", theme: "Masquage et phories", session: "complément", difficulte: "facile",
    sujet: "SUJET-U5-01", partie: "E", etape: 1,
    contexte: "Masquage unilatéral à 40 cm, avec ses anciennes lunettes.",
    question: "Rien ne bouge au masquage. Au démasquage de l'OG, il fait un mouvement naso-temporal. Que concluez-vous ?",
    choix: ["Une ésophorie", "Une ésotropie de l'OG", "Une exophorie", "Une exotropie de l'OG"],
    bonne: 0,
    explication: "Aucun mouvement au masquage : pas de tropie. Un mouvement au seul démasquage signe une phorie. L'OG repart vers la tempe : sous le cache, il était parti vers le nez. C'est une ésophorie.",
    surLaCopie: "Rien au masquage : pas de tropie. Le mouvement au seul démasquage signe une phorie.\nL'OG repart vers la tempe : sous le cache, il était parti vers le nez. Je conclus à une ésophorie."
  },
  {
    id: "U5-350", epreuve: "U5", theme: "Masquage et phories", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "E", etape: 2,
    question: "Pourquoi cette ésophorie de près est-elle plus forte avec ses anciennes lunettes qu'avec une compensation complète ?",
    choix: [
      "Les verres trop faibles agissent comme des prismes base externe",
      "L'amblyopie de l'OG le fait dévier vers le nez dès qu'elle lit",
      "La fatigue de la nuit relâche la convergence des deux yeux",
      "L'accommodation en trop entraîne de la convergence en trop"
    ],
    bonne: 3,
    explication: "Accommodation et convergence sont liées : chaque dioptrie accommodée entraîne de la convergence (convergence accommodative, rapport AC/A). Sous-compensée, Manon accommode 4,00 δ au lieu de 2,50 : ses yeux convergent trop, d'où l'ésophorie. Une compensation complète réduit l'accommodation, donc l'ésophorie. La fatigue, elle, relâche plutôt la convergence et pousse vers l'exophorie."
  },
  {
    id: "U5-351", epreuve: "U5", theme: "Masquage et phories", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "E", etape: 3,
    contexte: "Baguette de Maddox à stries horizontales sur l'OD, point lumineux à 40 cm, anciennes lunettes.",
    question: "Manon voit la barre rouge à droite du point. Que concluez-vous ?",
    choix: [
      "Diplopie croisée, donc exophorie",
      "Diplopie homonyme, donc ésophorie",
      "Diplopie homonyme, donc exophorie",
      "Diplopie croisée, donc ésophorie"
    ],
    bonne: 1,
    explication: "Les stries horizontales donnent une barre verticale : on mesure la phorie horizontale. La barre est vue par l'OD, et elle est du côté de l'OD (à droite) : la diplopie est homonyme. D'après la loi de Desmarres, une diplopie homonyme traduit une ésophorie, ce qui confirme le masquage.",
    surLaCopie: "La barre de l'OD est vue à droite, du côté de l'OD : la diplopie est homonyme.\nD'après la loi de Desmarres, c'est une ésophorie, ce qui confirme le masquage."
  },
  {
    id: "U5-352", epreuve: "U5", theme: "Masquage et phories", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "E", etape: 4,
    type: "calcul",
    question: "La barre est vue à 1,6 cm du point, à 40 cm. Calculez la phorie.",
    reponse: { valeur: 4, unite: "Δ", decimales: 1, signe: false },
    erreurs: [
      { valeur: 0.64, type: "notion", message: "Tu as multiplié. La phorie vaut le déplacement en cm divisé par la distance en m : 1,6 / 0,40 = 4 Δ." }
    ],
    explication: "1 Δ = 1 cm de déviation à 1 m.\nP = [[1,6 cm|0,40 m]] = 4,0 Δ d'ésophorie.",
    indice: "1 Δ dévie de 1 cm à 1 m. Divise le déplacement (en cm) par la distance (en m)."
  },
  {
    id: "U5-353", epreuve: "U5", theme: "Masquage et phories", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U5-01", partie: "E", etape: 5,
    question: "Sa réserve fusionnelle de divergence (base interne) à 40 cm vaut 6 Δ. Selon le critère de Sheard, cette ésophorie de 4 Δ est-elle bien compensée ?",
    choix: [
      "Oui : la réserve en divergence est plus grande que la phorie",
      "Non : il faudrait au moins 8 Δ de réserve en divergence",
      "Oui : seule la réserve en convergence compte pour une ésophorie",
      "Non : il faudrait au moins 12 Δ de réserve en convergence"
    ],
    bonne: 1,
    explication: "Sheard : la réserve opposée à la phorie doit valoir au moins deux fois la phorie. Une ésophorie se compense par la divergence fusionnelle, mesurée avec des prismes base interne. Il faudrait 2 × 4 = 8 Δ ; avec 6 Δ, le critère n'est pas respecté : inconfort probable en vision de près.",
    surLaCopie: "Une ésophorie se compense par la divergence fusionnelle. Sheard demande au moins 2 × 4 = 8 Δ de réserve en divergence.\nAvec 6 Δ, le critère n'est pas respecté : l'ésophorie est mal compensée de près."
  },
  {
    id: "U5-354", epreuve: "U5", theme: "Worth", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "E", etape: 6,
    contexte: "Test de Worth en vision de loin, filtre rouge sur l'OD, filtre vert sur l'OG.",
    question: "Sans lunettes, Manon ne voit que 2 symboles rouges. Que concluez-vous ?",
    choix: [
      "Une neutralisation de l'OG",
      "Une diplopie homonyme",
      "Une vision binoculaire normale",
      "Une neutralisation de l'OD"
    ],
    bonne: 0,
    explication: "Elle ne voit que les symboles rouges : seul l'OD, derrière le filtre rouge, transmet une image. L'OG, flou et amblyope, est neutralisé : pas de vision simultanée. Une diplopie donnerait 5 symboles, une vision binoculaire normale 4.",
    surLaCopie: "Elle ne voit que les 2 symboles rouges : seul l'OD, au filtre rouge, transmet une image.\nL'OG est neutralisé : il n'y a pas de vision simultanée sans compensation."
  },
  {
    id: "U5-355", epreuve: "U5", theme: "Worth", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "E", etape: 7,
    question: "Avec la nouvelle compensation, elle voit 4 symboles, et le rond blanc lui paraît rosé. Que concluez-vous ?",
    choix: [
      "Vision simultanée et fusion, avec l'OG dominant",
      "Vision simultanée et fusion, avec l'OD dominant",
      "Neutralisation de l'OG : seul l'OD voit le test",
      "Diplopie : les deux yeux voient sans fusionner"
    ],
    bonne: 1,
    explication: "4 symboles : les deux yeux voient (vision simultanée) et le rond blanc est vu une seule fois (fusion). Il prend la couleur du filtre rouge, celui de l'OD : l'OD domine. La compensation a supprimé la neutralisation de l'OG."
  },

  // ---------- Partie F : anisométropie en lunettes (2,5 points) ----------
  {
    id: "U5-356", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "F", etape: 1,
    type: "calcul",
    question: "En équivalents sphériques, ses verres valent OD +1,00 et OG +3,50. Estimez l'aniséiconie induite par les lunettes.",
    reponse: { valeur: 3, unite: "%", decimales: 1, signe: false },
    erreurs: [
      { valeur: 3.3, type: "notion", message: "Tu as pris la sphère de l'OG, +3,75, au lieu de son équivalent sphérique. Avec 3,50 − 1,00 = 2,50 δ : 1,2 × 2,50 = 3,0 %." },
      { valeur: 2.5, type: "notion", message: "Tu as oublié de multiplier par la distance verre-œil, 1,2 cm : 1,2 × 2,50 = 3,0 %." }
    ],
    explication: "Aniséiconie induite ≈ distance verre-œil (en cm) × différence des verres = 1,2 × (3,50 − 1,00) = 1,2 × 2,50 = 3,0 %. L'image de l'OG est la plus grande : un verre convexe grossit. Repères : moins de 3 %, pas de gêne ; de 3 à 10 %, la fusion peut être gênée.",
    indice: "Distance verre-œil en cm (12 mm = 1,2 cm) × différence de puissance des verres."
  },
  {
    id: "U5-357", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "F", etape: 2,
    type: "pose",
    question: "En lecture, son regard passe 8 mm sous les centres optiques. Calculez l'effet prismatique vertical différentiel, étape par étape.",
    etapes: [
      {
        consigne: "Effet prismatique vertical de l'OD (en Δ)",
        reponse: { valeur: 0.8, unite: "Δ", decimales: 1, signe: false },
        aide: "Prentice : P = d (cm) × D. 8 mm = 0,8 cm.",
        ligne: "P(OD) = 0,8 × 1,00 = 0,8 Δ"
      },
      {
        consigne: "Effet prismatique vertical de l'OG (en Δ)",
        reponse: { valeur: 3, unite: "Δ", decimales: 1, signe: false },
        aide: "Le décentrement est vertical : prends la puissance du verre dans le méridien vertical.",
        ligne: "P(OG) = 0,8 × 3,75 = 3,0 Δ",
        erreurs: [
          { valeur: 2.8, type: "notion", message: "Tu as pris l'équivalent sphérique. Pour un effet vertical, il faut le méridien vertical, +3,75 : 0,8 × 3,75 = 3,0 Δ." },
          { valeur: 2.6, type: "notion", message: "Tu as pris le méridien horizontal (+3,25). Le décentrement est vertical : il faut le méridien vertical, +3,75." }
        ]
      },
      {
        consigne: "Effet prismatique vertical différentiel (en Δ)",
        reponse: { valeur: 2.2, unite: "Δ", decimales: 1, signe: false },
        aide: "Les deux verres sont convexes et le regard passe sous les deux centres : les bases sont du même côté.",
        ligne: "3,0 − 0,8 = 2,2 Δ",
        erreurs: [{ valeur: 3.8, type: "notion", message: "Tu as additionné. Les bases sont du même côté (supérieures) : on soustrait, 3,0 − 0,8 = 2,2 Δ." }]
      }
    ],
    explication: "Règle de Prentice, d en cm. OD : 0,8 × 1,00 = 0,8 Δ. OG : on prend le méridien vertical, +3,75 (le cylindre d'axe 90° n'y agit pas) : 0,8 × 3,75 = 3,0 Δ. Bases du même côté, donc différentiel = 3,0 − 0,8 = 2,2 Δ. Les réserves de fusion verticale sont faibles. Ses anciennes lunettes donnaient déjà 0,8 × 1,50 = 1,2 Δ, assez pour la gêner (étiquettes vues doubles). Les nouvelles en donneraient 2,2 Δ : c'est un argument pour les lentilles."
  },
  {
    id: "U5-358", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "F", etape: 3,
    question: "Quelle est l'orientation de ces prismes quand elle lit ?",
    choix: [
      "Base inférieure aux deux yeux, plus forte sur l'OG",
      "Base supérieure sur l'OD, base inférieure sur l'OG",
      "Base supérieure aux deux yeux, plus forte sur l'OG",
      "Base externe aux deux yeux, plus forte sur l'OG"
    ],
    bonne: 2,
    explication: "Un verre convexe est plus épais au centre. Sous le centre optique, le verre s'épaissit vers le haut : il agit comme un prisme base supérieure. Les deux verres sont convexes, donc base supérieure aux deux yeux, plus forte sur l'OG dont le verre est le plus puissant. Un décentrement vertical ne crée pas de prisme horizontal."
  },
  {
    id: "U5-359", epreuve: "U5", theme: "Lentilles", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "F", etape: 4,
    type: "calcul",
    question: "La cornée de l'OG a un rayon plus grand de 0,40 mm que celle de l'OD. Avec le repère 0,05 mm ≈ 0,25 δ, estimez l'écart de puissance entre les deux cornées.",
    reponse: { valeur: 2, unite: "δ", decimales: 2, signe: false, tolerance: 0.2 },
    explication: "0,40 / 0,05 = 8 ; 8 × 0,25 = 2,00 δ. La cornée de l'OG, plus plate, est moins convergente d'environ 2,00 δ.\nVérification avec K ≈ [[337,5|r]] : OD 337,5 / 7,70 ≈ 43,8 δ ; OG 337,5 / 8,10 ≈ 41,7 δ ; écart ≈ 2,1 δ.",
    indice: "Combien de fois 0,05 mm dans 0,40 mm ? Chaque fois vaut 0,25 δ."
  },
  {
    id: "U5-360", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U5-01", partie: "F", etape: 5,
    question: "Les réfractions diffèrent de 2,50 δ et les cornées de 2,00 δ. Quel équipement réduit le plus l'aniséiconie ?",
    choix: [
      "Les lunettes : l'anisométropie est surtout axile, Knapp les favorise",
      "Les lunettes : en lentilles, l'aniséiconie augmente toujours",
      "Aucun : l'aniséiconie ne dépend pas de l'équipement porté",
      "Les lentilles : l'anisométropie est surtout de puissance"
    ],
    bonne: 3,
    explication: "La cornée de l'OG, plus plate de 2,00 δ, explique l'essentiel des 2,50 δ d'écart : l'anisométropie est surtout de puissance (réfractive). Les deux yeux ont presque la même longueur, l'aniséiconie vient surtout des lunettes (environ 3 %). En lentilles, la distance verre-œil devient presque nulle et l'aniséiconie induite presque aussi. La loi de Knapp, qui favorise les lunettes, ne vaut que pour une anisométropie axile.",
    surLaCopie: "La cornée de l'OG est plus plate de 2,00 δ pour 2,50 δ d'écart de réfraction : l'anisométropie est surtout de puissance.\nL'aniséiconie vient des lunettes (environ 3 %) ; en lentilles, elle devient très faible : je conseille les lentilles."
  },

  // ---------- Partie G : lentilles et synthèse (3 points) ----------
  {
    id: "U5-361", epreuve: "U5", theme: "Lentilles", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "G", etape: 1,
    type: "pose",
    question: "Calculez la puissance de la lentille de l'OG à partir de l'équivalent sphérique en lunettes, +3,50 à 12 mm, étape par étape.",
    etapes: [
      {
        consigne: "Dénominateur 1 − d·P (d en mètres, P en dioptries)",
        reponse: { valeur: 0.958, unite: "", decimales: 3, signe: false },
        aide: "d = 0,012 m et P = +3,50 δ. Le produit d·P est positif, donc 1 − d·P est plus petit que 1.",
        ligne: "d·P = 0,012 × 3,50 = 0,042\n1 − d·P = 1 − 0,042 = 0,958",
        erreurs: [{ valeur: 1.042, type: "signe", message: "Pour un verre convexe, d·P est positif : 1 − 0,042 = 0,958, pas 1,042." }]
      },
      {
        consigne: "Puissance de la lentille (en δ)",
        reponse: { valeur: 3.65, unite: "δ", decimales: 2, signe: true, tolerance: 0.02 },
        aide: "P' = P divisé par 1 − d·P. Un verre convexe est plus fort en lentille.",
        ligne: "P' = [[3,50|0,958]] ≈ +3,65 δ",
        erreurs: [{ valeur: 3.36, type: "signe", message: "Tu as divisé par 1,042. Pour un hypermétrope, le dénominateur est 0,958 : la lentille est plus forte, +3,65 δ." }]
      },
      {
        consigne: "Puissance à commander, au pas de 0,25 δ (en δ)",
        reponse: { valeur: 3.75, unite: "δ", decimales: 2, signe: true },
        aide: "Cherche la valeur au pas de 0,25 la plus proche de ton résultat.",
        ligne: "+3,65 est plus proche de +3,75 que de +3,50 : je commande +3,75 δ."
      }
    ],
    explication: "P' = [[P|1 − d·P]] = [[3,50|0,958]] ≈ +3,65 δ, arrondi au pas de 0,25 : +3,75 δ. Pour un verre convexe, la lentille est plus forte que le verre de lunettes. Pour l'OD, +1,00, l'écart est négligeable (moins de 0,02 δ) : la lentille vaut +1,00."
  },
  {
    id: "U5-362", epreuve: "U5", theme: "Lentilles", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "G", etape: 2,
    contexte: "Kératométrie de l'OG : 8,10 mm dans les deux méridiens. Réfraction de l'OG : +3,75 (−0,50) 90°.",
    question: "Que devient l'astigmatisme de 0,50 δ de l'OG avec une lentille souple sphérique ?",
    choix: [
      "La lentille souple le compense : le film de larmes remplit l'écart",
      "Il disparaît, car il venait seulement de la forme de la cornée",
      "Il reste, car il est interne ; à 0,50 δ, il est souvent bien toléré",
      "Il double, car la lentille souple épouse exactement la forme de la cornée"
    ],
    bonne: 2,
    explication: "Astigmatisme total = cornéen + interne. La cornée est sphérique (même rayon dans les deux méridiens) : les 0,50 δ inverses sont internes, une valeur courante. Aucune lentille sphérique, souple ou rigide, ne compense un astigmatisme interne ; le film de larmes sous une lentille rigide ne corrige que l'astigmatisme cornéen. 0,50 δ résiduel est souvent bien toléré, d'autant que l'acuité de l'OG est limitée par l'amblyopie ; sinon, lentille torique.",
    surLaCopie: "La cornée de l'OG est sphérique : ses 0,50 δ d'astigmatisme sont internes, et une lentille sphérique ne les compense pas.\nCe résiduel de 0,50 δ est souvent bien toléré ; sinon, je propose une lentille torique."
  },
  {
    id: "U5-363", epreuve: "U5", theme: "Lentilles", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "G", etape: 3,
    type: "calcul",
    question: "Le matériau a un Dk de 140 × 10⁻¹¹ et la lentille de l'OG mesure 0,10 mm d'épaisseur au centre. Calculez sa transmissibilité Dk/e, en 10⁻⁹ unités Fatt.",
    reponse: { valeur: 140, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 14, type: "unite", message: "Tu as gardé l'épaisseur en mm (0,1). Il faut des cm : 0,10 mm = 0,01 cm, donc Dk/e = 140 × 10⁻¹¹ / 0,01 = 140 × 10⁻⁹." },
      { valeur: 1400, type: "unite", message: "Tu as mis l'épaisseur en mètres (0,0001 m). Il faut des cm : 0,01 cm, donc Dk/e = 140 × 10⁻¹¹ / 0,01 = 140 × 10⁻⁹." }
    ],
    explication: "Épaisseur en cm : 0,10 mm = 0,01 cm.\nDk/e = [[140 × 10⁻¹¹|0,01]] = 140 × 10⁻⁹.\nCritère de Harvitt et Bonanno : 35 pour le port journalier, 125 pour le port prolongé. Ce matériau convient à ses gardes. Dormir avec ses lentilles après la garde reste déconseillé sans avis, même avec un Dk/e élevé : le risque d'infection augmente.",
    indice: "Passe l'épaisseur en cm, puis divise le Dk par cette épaisseur."
  },
  {
    id: "U5-364", epreuve: "U5", theme: "Pathologie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "G", etape: 4,
    question: "Son père est suivi pour un glaucome. Que faites-vous ?",
    choix: [
      "Je lui dis qu'elle a un risque de glaucome et je refuse de lui adapter des lentilles",
      "Je la rassure : avec une bonne acuité, un glaucome est écarté",
      "Je ne dis rien : le glaucome ne touche jamais les moins de 40 ans",
      "Je lui explique ce facteur de risque et conseille un suivi ophtalmologique"
    ],
    bonne: 3,
    explication: "Un glaucome chez un parent proche est un facteur de risque. L'opticien ne pose pas de diagnostic : il l'explique sans inquiéter et conseille un suivi chez l'ophtalmologiste, qui examinera le nerf optique et la pression. Une bonne acuité ne rassure pas, le glaucome à angle ouvert atteint d'abord le champ visuel périphérique. Rien ne contre-indique les lentilles.",
    surLaCopie: "Le glaucome de son père est un facteur de risque, qu'une bonne acuité n'écarte pas.\nSans poser de diagnostic, je le lui explique et lui conseille un suivi chez l'ophtalmologiste ; je le note sur sa fiche."
  },
  {
    id: "U5-365", epreuve: "U5", theme: "Anisométropie", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U5-01", partie: "G", etape: 5,
    question: "Pourquoi une compensation complète en lentilles répond-elle à ses plaintes de départ ?",
    choix: [
      "Elle accommode moins, sans prisme vertical en lecture, avec moins d'aniséiconie",
      "Les lentilles guérissent l'amblyopie : l'OG retrouvera 10/10 en quelques semaines",
      "Les lentilles corrigent l'astigmatisme interne, la vraie cause de ses maux de tête",
      "Les lentilles laissent travailler l'accommodation, ce qui muscle ses yeux la nuit"
    ],
    bonne: 0,
    explication: "Bien compensée, elle n'accommode plus que 2,50 δ pour lire : moins de fatigue, et moins d'ésophorie (convergence accommodative). La lentille suit l'œil : le regard passe toujours par son centre, il n'y a plus de prisme vertical différentiel en lecture, donc plus d'étiquettes doubles. L'aniséiconie, venue des lunettes, devient très faible. L'amblyopie de l'adulte, elle, ne guérit pas : l'OG restera à 8/10 environ.",
    surLaCopie: "Bien compensée, elle n'accommode plus que 2,50 δ de près : moins de fatigue et moins d'ésophorie.\nLa lentille suit l'œil : plus de prisme vertical en lecture ni de vision double, et l'aniséiconie devient très faible."
  }
);
