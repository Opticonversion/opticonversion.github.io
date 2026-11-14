// ==============================================================
//  QUESTIONS · Étude technique des systèmes optiques (U43)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U43" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : à l'U43, la calculatrice est AUTORISÉE, mais on garde des chiffres simples.
//  L'épreuve porte sur un instrument d'optique (tracés, champs, mécanique) :
//  voir notes/analyse-U43.md.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
// ==============================================================

QUESTIONS.push(

  // ---------- Chaîne des conjugués (8/8) ----------
  {
    id: "U43-001", epreuve: "U43", theme: "Chaîne des conjugués", session: "2022", difficulte: "facile",
    question: "Dans une chaîne des conjugués, un point objet placé au foyer objet F d'une lentille mince a pour image :",
    choix: ["Le foyer image F'", "Un point à l'infini", "Un point sur la lentille", "Un point symétrique de F par rapport à la lentille"],
    bonne: 1,
    explication: "Par définition, les rayons issus du foyer objet ressortent parallèles : l'image est rejetée à l'infini. Dans la chaîne, on note « A = F → A' à l'infini ».",
    indice: "Rappelle-toi la définition du foyer objet : que deviennent, après la lentille, les rayons qui en sont issus ?"
  },
  {
    id: "U43-002", epreuve: "U43", theme: "Chaîne des conjugués", session: "2017", difficulte: "moyen",
    question: "Une lunette est réglée pour un œil emmétrope qui n'accommode pas. Où se trouve l'image intermédiaire d'une étoile donnée par l'objectif ?",
    choix: ["Au foyer objet de l'objectif", "Au foyer image de l'objectif, confondu avec le foyer objet de l'oculaire", "Au foyer image de l'oculaire", "Sur la rétine"],
    bonne: 1,
    explication: "Objet à l'infini → image au foyer image F'obj. Pour que l'image finale soit à l'infini (emmétrope désaccommodé), cette image doit être au foyer objet de l'oculaire : F'obj = Foc. C'est un système afocal.",
    indice: "Une étoile est à l'infini : où l'objectif en forme-t-il l'image ? Et où doit se trouver l'objet de l'oculaire pour que l'image finale reparte à l'infini ?"
  },
  {
    id: "U43-003", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "difficile",
    question: "Lunette réglée pour un œil emmétrope qui n'accommode pas. On vise une étoile B située hors de l'axe (faisceau incident incliné). Quel tracé est juste ?",
    choix: ["Tracé juste : image B₁ dans le plan F'obj = Foc, faisceau émergent parallèle et incliné", "Les rayons convergent sur l'axe, au foyer image de l'objectif", "Le faisceau émergent ressort parallèle à l'axe", "Le faisceau émergent converge : F'obj et Foc ne sont pas confondus"],
    choixSchemas: ["img/schemas/U43/lunette-trace-juste.svg", "img/schemas/U43/lunette-trace-faux-image-sur-axe.svg", "img/schemas/U43/lunette-trace-faux-parallele-axe.svg", "img/schemas/U43/lunette-trace-faux-foyers-separes.svg"],
    bonne: 0,
    explication: "Un faisceau parallèle incliné converge dans le plan focal image de l'objectif, mais hors de l'axe : c'est l'image B₁. Lunette afocale : ce plan est aussi le plan focal objet de l'oculaire, donc le faisceau ressort parallèle, incliné dans la direction qui va de B₁ au centre de l'oculaire. Les pièges : faire converger un faisceau incliné sur l'axe (c'est seulement le cas d'un faisceau parallèle à l'axe), faire ressortir les rayons parallèles à l'axe, ou séparer F'obj et Foc (le faisceau converge alors au lieu d'être parallèle).",
    indice: "Un faisceau parallèle incliné converge dans le plan focal image, mais pas forcément sur l'axe. Et un point du plan focal objet de l'oculaire donne un faisceau émergent… ?"
  },
  {
    id: "U43-004", epreuve: "U43", theme: "Chaîne des conjugués", session: "2021", difficulte: "moyen",
    question: "Un utilisateur amétrope, sans lunettes et sans accommoder, voit net à travers un instrument. Où est l'image finale donnée par l'instrument ?",
    choix: ["À l'infini", "Sur le remotum de l'utilisateur", "Sur son proximum", "Au foyer objet de son œil"],
    bonne: 1,
    explication: "Un œil qui n'accommode pas voit net uniquement les objets placés sur son remotum. L'instrument doit donc conjuguer l'image finale avec le remotum. À l'infini, ce n'est vrai que pour l'emmétrope.",
    indice: "Sans accommoder, un œil ne voit net qu'un seul point de l'espace. Lequel ?"
  },
  {
    id: "U43-005", epreuve: "U43", theme: "Chaîne des conjugués", session: "2023", difficulte: "facile",
    question: "Un miroir plan (miroir d'un reflex, miroir de renvoi d'un télescope) donne d'un objet réel une image :",
    choix: ["Réelle, renversée, de même taille", "Virtuelle, symétrique par rapport au miroir, de même taille", "Virtuelle, agrandie", "Réelle, à l'infini"],
    bonne: 1,
    explication: "Le miroir plan a une vergence nulle : l'image est symétrique de l'objet par rapport au miroir et de même taille. Il ne fait que renvoyer la lumière dans une autre direction.",
    indice: "Pense à ton reflet dans une glace : où semble-t-il se trouver, et a-t-il changé de taille ?"
  },
  {
    id: "U43-006", epreuve: "U43", theme: "Chaîne des conjugués", session: "2018", difficulte: "moyen",
    question: "Microscope réglé pour un emmétrope qui n'accommode pas. Où est placée la préparation par rapport à l'objectif ?",
    choix: ["Exactement au foyer objet de l'objectif", "Un peu au-delà du foyer objet (plus loin de l'objectif que F)", "Entre le foyer objet et l'objectif", "À l'infini, très loin de l'objectif"],
    bonne: 1,
    explication: "L'objectif doit donner une image réelle et agrandie, située au foyer objet de l'oculaire. Pour une image réelle agrandie, l'objet est placé un peu plus loin que le foyer objet (entre F et 2F). Au foyer même, l'image partirait à l'infini ; entre F et l'objectif, l'image serait virtuelle.",
    indice: "L'objectif doit donner une image réelle et agrandie. Où placer l'objet par rapport à F pour obtenir ça avec une lentille convergente ?",
    schema: "img/schemas/U43/microscope-chaine-emmetrope.svg",
    schemaTexte: "Tracé à l'échelle : la préparation AB, placée à 24 mm de l'objectif (f' = 20 mm), donne une image A₁B₁ réelle, renversée, 5 fois plus grande, à 120 mm, dans le plan focal objet de l'oculaire ; les rayons ressortent parallèles."
  },

  // ---------- Vergences et focales ----------
  {
    id: "U43-007", epreuve: "U43", theme: "Vergences et focales", session: "2021", difficulte: "facile",
    question: "Sur le tracé, on cote la distance focale image d'un collimateur : f' = 125 mm. Quelle est sa vergence ?",
    choix: ["+0,125 δ", "+1,25 δ", "+8,00 δ", "+12,50 δ"],
    bonne: 2,
    explication: "D = [[1|f']] avec f' en mètres.\nD = [[1|0,125]] = +8,00 δ\nAttention à l'échelle du dessin : on convertit la cote en vraie grandeur avant de calculer.",
    indice: "D = [[1|f']], mais avec f' en mètres. Convertis d'abord les millimètres."
  },
  {
    id: "U43-008", epreuve: "U43", theme: "Vergences et focales", session: "2024", difficulte: "moyen",
    question: "Un condenseur plan-convexe a un indice n = 1,5 et un rayon de courbure de 50 mm (l'autre face est plane). Sa vergence vaut environ :",
    choix: ["+5 δ", "+10 δ", "+20 δ", "+30 δ"],
    bonne: 1,
    explication: "La face plane a une vergence nulle. Il reste celle du dioptre sphérique :\nD = [[n − 1|r]] = [[0,5|0,050]] = +10 δ",
    indice: "Une face plane n'a aucune vergence. Pour le dioptre sphérique, utilise D = [[n − 1|r]], avec r en mètres."
  },
  {
    id: "U43-009", epreuve: "U43", theme: "Vergences et focales", session: "2023", difficulte: "moyen",
    question: "On clipse une lentille macro de +5 δ sur un objectif photo réglé sur l'infini. Quel objet sera net sur la pellicule ?",
    choix: ["Un objet à 5 cm", "Un objet à 20 cm", "Un objet à 50 cm", "Un objet à l'infini"],
    bonne: 1,
    explication: "L'objectif réglé sur l'infini a besoin de rayons parallèles. La lentille macro les fournit si l'objet est à son foyer objet :\nd = [[1|D]] = [[1|5]] = 0,20 m\nSoit 20 cm devant elle.",
    indice: "L'objectif réglé sur l'infini attend des rayons parallèles. Où placer l'objet pour que la lentille macro les rende parallèles ?"
  },

  // ---------- Œil et instrument (6/8) ----------
  {
    id: "U43-010", epreuve: "U43", theme: "Œil et instrument", session: "2024", difficulte: "facile",
    question: "Sur le tracé, on cote le remotum de l'œil : HR = −125 mm (R devant l'œil). Réfraction axiale et amétropie ?",
    choix: ["R = +8,00 δ, hypermétrope", "R = −8,00 δ, myope", "R = −0,125 δ, myope", "R = −12,50 δ, myope"],
    bonne: 1,
    explication: "R = [[1|HR]] = [[1|−0,125]] = −8,00 δ\nRemotum réel devant l'œil, donc R négatif : l'œil est myope.",
    indice: "R = [[1|HR]], avec HR en mètres et son signe. Un remotum devant l'œil donne quel signe ?"
  },
  {
    id: "U43-011", epreuve: "U43", theme: "Œil et instrument", session: "2018", difficulte: "facile",
    question: "Le remotum est derrière l'œil : HR = +250 mm. Réfraction axiale et amétropie ?",
    choix: ["R = −4,00 δ, myope", "R = +4,00 δ, hypermétrope", "R = +2,50 δ, hypermétrope", "R = 0, emmétrope"],
    bonne: 1,
    explication: "R = [[1|HR]] = [[1|+0,25]] = +4,00 δ\nRemotum virtuel derrière l'œil, donc R positif : l'œil est hypermétrope.",
    indice: "R = [[1|HR]], avec HR en mètres. Un remotum virtuel derrière l'œil, c'est quelle amétropie ?"
  },
  {
    id: "U43-012", epreuve: "U43", theme: "Œil et instrument", session: "2023", difficulte: "difficile",
    question: "Un myope de −4,00 δ, sans lunettes, regarde dans un viseur dont l'image finale se trouve à 20 cm devant son œil. Quelle accommodation lui faut-il ?",
    choix: ["0 δ", "+1,00 δ", "+4,00 δ", "+5,00 δ"],
    bonne: 1,
    explication: "Proximité de l'image : [[1|−0,20]] = −5 δ\nAccommodation = R − proximité = −4 − (−5) = +1,00 δ\nSon remotum est à 25 cm : l'image à 20 cm est un peu plus près, il accommode un peu.",
    indice: "Calcule d'abord la proximité de l'image ([[1|distance]] en m, négative devant l'œil). L'accommodation est l'écart entre R et cette proximité."
  },
  {
    id: "U43-013", epreuve: "U43", theme: "Œil et instrument", session: "2023", difficulte: "moyen",
    question: "Le même myope (−4,00 δ), sans lunettes, regarde dans un instrument réglé pour un emmétrope (image finale à l'infini). Que se passe-t-il ?",
    choix: ["Il voit net en accommodant de 4 δ", "Il voit net sans accommoder", "Il ne peut pas voir net : l'image est au-delà de son remotum", "Il voit net en accommodant de 0,25 δ"],
    bonne: 2,
    explication: "L'accommodation sert uniquement à voir plus près que le remotum. Une image à l'infini est plus loin que son remotum (25 cm) : flou impossible à rattraper. Il faut régler l'oculaire ou garder ses lunettes.",
    indice: "Où est le remotum d'un myope de −4 δ ? L'accommodation permet-elle de voir plus loin que lui, ou seulement plus près ?"
  },
  {
    id: "U43-014", epreuve: "U43", theme: "Œil et instrument", session: "2021", difficulte: "moyen",
    question: "Par rapport au réglage pour un emmétrope, comment faut-il déplacer l'oculaire pour un utilisateur myope ?",
    choix: ["L'éloigner de l'image intermédiaire", "Le rapprocher de l'image intermédiaire (vers l'objectif)", "Le tourner de 90°", "Ne pas le bouger"],
    bonne: 1,
    explication: "Le myope doit recevoir une image virtuelle à distance finie (sur son remotum). Pour cela, l'image intermédiaire doit se trouver entre le foyer objet et l'oculaire, donc on rapproche l'oculaire de cette image.",
    indice: "Le myope a besoin d'une image virtuelle à distance finie, pas à l'infini. Où doit alors se trouver l'image intermédiaire par rapport au foyer objet de l'oculaire ?"
  },
  {
    id: "U43-015", epreuve: "U43", theme: "Œil et instrument", session: "2018", difficulte: "difficile",
    question: "Oculaire de focale 25 mm, œil placé à son foyer image. On le règle pour un myope de −4,00 δ (remotum à 250 mm), l'œil restant au foyer image de l'oculaire. De combien déplacer l'oculaire depuis le réglage emmétrope ?",
    choix: ["0,25 mm", "2,5 mm", "4 mm", "25 mm"],
    bonne: 1,
    explication: "Relation de Newton : x·x' = −f'²\nImage sur le remotum : x' = F'A' = −250 mm.\nx = [[−f'²|x']] = [[−625|−250]] = +2,5 mm\nL'image intermédiaire doit être 2,5 mm après le foyer objet : on rapproche l'oculaire de 2,5 mm.",
    indice: "Utilise la relation de Newton x·x' = −f'², avec x' = F'A' compté depuis l'œil (en F'). Attention au signe de x'.",
    schema: "img/schemas/U43/oculaire-reglage-myope-2-5-mm.svg",
    schemaTexte: "Oculaire de 25 mm réglé pour un myope de −4 δ : l'image intermédiaire A₁ est 2,5 mm après le foyer objet F, et l'image finale B' se forme sur le remotum, 250 mm devant l'œil placé en F'."
  },

  // ---------- Étude des champs (8/8) ----------
  {
    id: "U43-016", epreuve: "U43", theme: "Étude des champs", session: "2022", difficulte: "moyen",
    question: "Dans l'espace d'étude, comment identifie-t-on la pupille ?",
    choix: ["Le plus grand des diaphragmes, une fois conjugués dans l'espace d'étude", "Celui (ou son conjugué) vu sous le plus petit angle depuis le centre du plan des champs", "Toujours la monture de l'objectif, quel que soit l'instrument", "Le diaphragme le plus proche de l'œil de l'observateur"],
    bonne: 1,
    explication: "On conjugue d'abord tous les diaphragmes dans l'espace d'étude. Depuis le point axial du plan des champs, celui qu'on voit sous le plus petit angle limite l'ouverture : c'est la pupille. Les autres jouent le rôle de lucarnes.",
    indice: "Place-toi au centre du plan des champs et regarde chaque diaphragme : lequel limite le plus l'ouverture du faisceau ?",
    schema: "img/schemas/U43/champs-pupille-plus-petit-angle.svg",
    schemaTexte: "Depuis le centre A du plan des champs, le diaphragme D₁ (rayon 35 mm à 120 mm) est vu sous un angle plus grand que D₂ (rayon 50 mm à 300 mm) : D₂ est la pupille, D₁ la lucarne."
  },
  {
    id: "U43-017", epreuve: "U43", theme: "Étude des champs", session: "2019", difficulte: "facile",
    question: "Qu'est-ce que le champ de pleine lumière ?",
    choix: ["La zone où l'image est la plus nette, au centre du champ", "La zone où chaque faisceau remplit toute la pupille, sans être coupé", "La zone où l'éclairement vaut la moitié du maximum", "Tout ce que l'on voit dans l'instrument, même faiblement"],
    bonne: 1,
    explication: "Dans le champ de pleine lumière, la lucarne ne coupe aucun faisceau : chaque point utilise toute la pupille. L'éclairement y est maximal et uniforme.",
    indice: "Pense au faisceau issu d'un point du champ : dans cette zone, est-il coupé par la lucarne ou passe-t-il en entier ?",
    schema: "img/schemas/U43/champs-pleine-lumiere-interactif.svg",
    schemaTexte: "Schéma interactif : on fait varier le rayon de la lucarne D₁ et on voit le faisceau de pleine ouverture, les bords du champ de pleine lumière, du champ moyen et du champ total, et la vue de gauche."
  },
  {
    id: "U43-018", epreuve: "U43", theme: "Étude des champs", session: "2023", difficulte: "facile",
    question: "La zone comprise entre le bord du champ de pleine lumière et le bord du champ total s'appelle :",
    choix: ["Le champ moyen", "Le champ de contour", "La pupille de sortie", "Le cercle oculaire"],
    bonne: 1,
    explication: "Dans le champ de contour, le faisceau est en partie coupé par une lucarne : l'éclairement décroît du bord de la pleine lumière jusqu'à zéro au bord du champ total. Sur une photo, c'est le vignettage (bords assombris).",
    indice: "Dans cette zone, l'éclairement baisse peu à peu jusqu'à zéro. Comment appelle-t-on ce bord dégradé ?",
    schema: "img/schemas/U43/champs-vue-de-gauche-contour.svg",
    schemaTexte: "Vue de gauche : au centre, le champ de pleine lumière éclairé uniformément ; autour, le champ de contour où l'éclairement baisse jusqu'à zéro au bord du champ total ; le cercle du champ moyen est au milieu."
  },
  {
    id: "U43-019", epreuve: "U43", theme: "Étude des champs", session: "2021", difficulte: "moyen",
    question: "Comment supprimer le champ de contour d'un instrument ?",
    choix: ["En fermant davantage la pupille de l'instrument", "En plaçant un diaphragme dans le plan d'une image réelle", "En prenant un oculaire de plus grand diamètre", "En éloignant l'œil du cercle oculaire"],
    bonne: 1,
    explication: "Un diaphragme placé dans un plan où se forme une image réelle coupe le champ net, sans dégradé : champ total = champ de pleine lumière. C'est le diaphragme de champ des oculaires.",
    indice: "Le contour vient d'une lucarne qui coupe les faisceaux progressivement. Où placer un diaphragme pour couper le champ net, sans dégradé ?"
  },
  {
    id: "U43-020", epreuve: "U43", theme: "Étude des champs", session: "2018", difficulte: "facile",
    question: "Au bord du champ moyen, l'éclairement de l'image vaut environ :",
    choix: ["100 % de l'éclairement maximal", "50 % de l'éclairement maximal", "0 %", "25 %"],
    bonne: 1,
    explication: "Le bord du champ moyen est le point dont le rayon passant par le centre de la pupille rase le bord de la lucarne : la moitié du faisceau passe environ. On est au milieu du champ de contour (valeur approchée retenue au BTS).",
    indice: "Au bord du champ moyen, le rayon qui passe par le centre de la pupille rase la lucarne. Quelle part du faisceau passe alors ?"
  },
  {
    id: "U43-021", epreuve: "U43", theme: "Étude des champs", session: "2020", difficulte: "facile",
    question: "Pour qu'une photo soit éclairée en entier et de façon uniforme, le cercle du champ de pleine lumière image doit avoir un diamètre au moins égal à :",
    choix: ["La hauteur du capteur", "La largeur du capteur", "La diagonale du capteur", "La focale de l'objectif"],
    bonne: 2,
    explication: "Le capteur est un rectangle inscrit dans le cercle de pleine lumière. Ses coins sont les points les plus éloignés du centre, il faut donc que le diamètre du cercle atteigne la diagonale.",
    indice: "Le capteur est un rectangle placé dans un cercle. Quels points du rectangle sont les plus loin du centre ?"
  },

  // ---------- Liaisons mécaniques (8/8) ----------
  {
    id: "U43-022", epreuve: "U43", theme: "Liaisons mécaniques", session: "2024", difficulte: "facile",
    question: "Une molette ne peut que tourner autour de son axe X par rapport au boîtier. Quelle est la liaison ?",
    choix: ["Glissière d'axe X", "Pivot d'axe X", "Pivot glissant d'axe X", "Encastrement"],
    bonne: 1,
    explication: "Une seule rotation, aucune translation : liaison pivot. On donne toujours l'axe : « pivot d'axe X ».",
    indice: "Compte les mouvements possibles : combien de rotations, combien de translations ?"
  },
  {
    id: "U43-023", epreuve: "U43", theme: "Liaisons mécaniques", session: "2019", difficulte: "facile",
    question: "Un porte-mire ne peut que coulisser suivant l'axe optique Z, sans tourner. Quelle est la liaison ?",
    choix: ["Pivot d'axe Z", "Glissière d'axe Z", "Hélicoïdale d'axe Z", "Rotule"],
    bonne: 1,
    explication: "Une seule translation, aucune rotation : liaison glissière. Une rainure ou un méplat empêche la rotation.",
    indice: "Une seule translation, aucune rotation : quelle liaison autorise exactement ce mouvement ?"
  },
  {
    id: "U43-024", epreuve: "U43", theme: "Liaisons mécaniques", session: "2017", difficulte: "facile",
    question: "Un tube peut, à la main, à la fois tourner sur lui-même et coulisser suivant son axe, ces deux mouvements étant indépendants. Quelle est la liaison ?",
    choix: ["Pivot", "Glissière", "Pivot glissant", "Hélicoïdale"],
    bonne: 2,
    explication: "Une rotation et une translation de même axe, indépendantes : pivot glissant (2 degrés de liberté). Si elles étaient liées (on avance en tournant), ce serait une hélicoïdale.",
    indice: "Deux mouvements de même axe : sont-ils liés (on avance en tournant) ou indépendants ? C'est ce qui départage deux liaisons.",
    schema: "img/schemas/U43/liaisons-mouvements-axe-x.svg",
    schemaTexte: "Tableau des mouvements suivant l'axe X : pivot (1 rotation), glissière (1 translation), pivot glissant (rotation et translation indépendantes, 2 ddl), hélicoïdale (rotation et translation liées, 1 ddl)."
  },
  {
    id: "U43-025", epreuve: "U43", theme: "Liaisons mécaniques", session: "2023", difficulte: "moyen",
    question: "Pour faire la mise au point, on tourne la bague de l'objectif : le bloc optique avance en tournant sur lui-même. Quelle est la liaison entre le bloc optique et la monture ?",
    choix: ["Pivot glissant", "Hélicoïdale", "Glissière", "Pivot"],
    bonne: 1,
    explication: "Le filetage lie les deux mouvements : chaque tour fait avancer d'un pas. Un seul degré de liberté : liaison hélicoïdale.",
    indice: "Ici, impossible de tourner sans avancer. Les deux mouvements sont-ils indépendants ou liés ? Combien de degrés de liberté reste-t-il ?"
  },
  {
    id: "U43-026", epreuve: "U43", theme: "Liaisons mécaniques", session: "2022", difficulte: "moyen",
    question: "Lors d'une mise au point, on tourne une molette. Quel est le « mouvement utile » demandé pour l'élément optique ?",
    choix: ["La rotation de la molette", "La translation de l'élément optique suivant l'axe optique", "Une rotation de la lentille sur elle-même", "Aucun mouvement"],
    bonne: 1,
    explication: "Ce qui change la mise au point, c'est la position de la lentille sur l'axe optique : une translation. La rotation de la molette n'est que le moyen de la produire.",
    indice: "Ne confonds pas ce que fait ta main et ce que fait la lentille. Qu'est-ce qui change la mise au point ?"
  },

  // ---------- Mécanismes de réglage ----------
  {
    id: "U43-027", epreuve: "U43", theme: "Mécanismes de réglage", session: "2021", difficulte: "facile",
    question: "Mise au point d'un microscope : on tourne un bouton et le tube monte grâce à une roue dentée qui engrène sur une barre dentée. Mécanisme ?",
    choix: ["Vis-écrou", "Pignon-crémaillère", "Came", "Courroie"],
    bonne: 1,
    explication: "Le pignon (roue dentée) tourne, la crémaillère (barre dentée) se déplace : rotation → translation. C'est le réglage rapide (macrométrique) classique des microscopes.",
    indice: "Roue dentée = pignon, barre dentée = … ? Rotation d'un côté, translation de l'autre."
  },
  {
    id: "U43-028", epreuve: "U43", theme: "Mécanismes de réglage", session: "2021", difficulte: "facile",
    question: "Une bague de mise au point (système vis-écrou) est filetée au pas de 0,6 mm. Combien de tours faut-il pour déplacer l'oculaire de 2,4 mm ?",
    choix: ["2 tours", "3 tours", "4 tours", "1,44 tour"],
    bonne: 2,
    explication: "Un système vis-écrou transforme une rotation en translation : un tour fait avancer d'un pas.\nNombre de tours = [[course|pas]] = [[2,4|0,6]] = 4 tours",
    indice: "Un tour de vis fait avancer d'un pas. Combien de pas faut-il pour parcourir la course demandée ?"
  },

  // ---------- Grossissement et photo ----------
  {
    id: "U43-029", epreuve: "U43", theme: "Grossissement et photo", session: "2017", difficulte: "facile",
    question: "Lunette afocale : objectif de focale 600 mm, oculaire de focale 20 mm. Grossissement ?",
    choix: ["×12", "×30", "×580", "×0,033"],
    bonne: 1,
    explication: "G = [[f'obj|f'oc]] = [[600|20]] = 30",
    indice: "Pour une lunette afocale, G = [[f'objectif|f'oculaire]]."
  },
  {
    id: "U43-030", epreuve: "U43", theme: "Grossissement et photo", session: "2017", difficulte: "moyen",
    question: "On ajoute à cette lunette une lentille de Barlow qui double la focale de l'objectif. Que deviennent le grossissement et le champ observable ?",
    choix: ["G ×2, champ plus grand", "G ×2, champ plus petit", "G inchangé, champ plus petit", "G ÷2, champ plus grand"],
    bonne: 1,
    explication: "La focale de l'objectif passe à 1 200 mm :\nG = [[1 200|20]] = 60\nOn voit plus gros, mais une portion du ciel plus petite.",
    indice: "Que devient f'objectif, donc G ? Et si on voit plus gros, voit-on une plus grande ou une plus petite partie du ciel ?"
  },
  {
    id: "U43-031", epreuve: "U43", theme: "Grossissement et photo", session: "2018", difficulte: "facile",
    question: "Microscope : objectif ×40, oculaire ×10. Grossissement commercial ?",
    choix: ["×50", "×400", "×4", "×30"],
    bonne: 1,
    explication: "Le grossissement d'un microscope est le produit : grandissement de l'objectif × grossissement de l'oculaire = 40 × 10 = 400.",
    indice: "Le grossissement commercial d'un microscope combine celui de l'objectif et celui de l'oculaire : addition ou multiplication ?"
  },
  {
    id: "U43-032", epreuve: "U43", theme: "Grossissement et photo", session: "2020", difficulte: "facile",
    question: "Objectif photo de focale 100 mm dont la pupille d'entrée mesure 25 mm. Nombre d'ouverture ?",
    choix: ["f/2,5", "f/4", "f/25", "f/0,25"],
    bonne: 1,
    explication: "N = [[focale|diamètre de la pupille d'entrée]] = [[100|25]] = 4\nOn écrit f/4.",
    indice: "N = focale ÷ diamètre de la pupille d'entrée, les deux dans la même unité."
  },
  {
    id: "U43-033", epreuve: "U43", theme: "Grossissement et photo", session: "2020", difficulte: "moyen",
    question: "On monte un multiplicateur ×2 sur cet objectif (100 mm, f/4). Résultat ?",
    choix: ["200 mm, f/4, même luminosité", "200 mm, f/8, luminosité divisée par 4", "50 mm, f/2, luminosité ×4", "200 mm, f/8, luminosité divisée par 2"],
    bonne: 1,
    explication: "La focale double (200 mm) mais la pupille d'entrée ne change pas :\nN = [[200|25]] = 8\nL'éclairement varie comme [[1|N²]] : ([[8|4]])² = 4, donc 4 fois moins de lumière.",
    indice: "La focale change, mais la pupille d'entrée de l'objectif, elle, reste la même. Et l'éclairement varie comme [[1|N²]]."
  },

  // ---------- Œil astigmate (3/8) ----------
  {
    id: "U43-034", epreuve: "U43", theme: "Œil astigmate", session: "2021", difficulte: "difficile",
    question: "Un astigmate regarde un point dans un instrument. La tache de diffusion sur sa rétine est un petit segment horizontal. Cela signifie que :",
    choix: ["Le méridien horizontal est net sur la rétine", "Le méridien vertical est mis au point sur la rétine, le méridien horizontal ne l'est pas", "Aucun méridien n'est mis au point", "L'œil n'est pas astigmate"],
    bonne: 1,
    explication: "Les rayons du méridien vertical convergent en un point dans ce plan, mais ceux du méridien horizontal restent étalés : on obtient une focale horizontale. Une focale horizontale sur la rétine signifie que c'est le méridien vertical qui est net.",
    indice: "Les rayons d'un méridien qui convergent sur la rétine donnent une focale perpendiculaire à ce méridien. Une focale horizontale vient donc de quel méridien ?"
  },
  {
    id: "U43-035", epreuve: "U43", theme: "Œil astigmate", session: "2022", difficulte: "moyen",
    question: "Un client astigmate veut utiliser un télescope sans ses lunettes. Que lui conseiller ?",
    choix: ["Régler l'oculaire : cela compense toute l'amétropie", "Garder ses lunettes ou ses lentilles pendant l'observation", "Fermer l'œil le plus astigmate pendant l'observation", "Prendre un objectif de plus grande focale"],
    bonne: 1,
    explication: "Le réglage de l'oculaire déplace l'image, comme une sphère : il ne compense que la partie sphérique de l'amétropie. Pour l'astigmatisme, il faut garder sa compensation.",
    indice: "Régler l'oculaire déplace l'image comme le ferait un verre sphérique. Peut-il compenser un cylindre ?"
  },

  // ---------- Skiascopie (2024) ----------
  {
    id: "U43-036", epreuve: "U43", theme: "Skiascopie", session: "2024", difficulte: "moyen",
    question: "Skiascopie à 50 cm : le point neutre est obtenu avec un verre de +3,00 δ. Réfraction de l'œil ?",
    choix: ["+3,00 δ", "+1,00 δ", "+5,00 δ", "−1,00 δ"],
    bonne: 1,
    explication: "On retire la vergence liée à la distance de travail :\nR = verre de point neutre − [[1|d]] = +3 − [[1|0,5]] = +3 − 2 = +1,00 δ\nL'œil est hypermétrope d'une dioptrie.",
    indice: "Au point neutre, le remotum est sur ton skiascope. Retire la vergence liée à la distance de travail : [[1|d]], avec d en mètres."
  },
  {
    id: "U43-037", epreuve: "U43", theme: "Skiascopie", session: "2024", difficulte: "difficile",
    question: "Skiascopie à 50 cm, faisceau divergent, sans verre : le reflet bouge en sens inverse du skiascope. Conclusion ?",
    choix: ["Hypermétropie", "Emmétropie", "Myopie de plus de 2 δ", "Myopie de moins de 2 δ"],
    bonne: 2,
    explication: "Le mouvement est inverse quand le remotum se trouve entre le sujet et l'examinateur, donc à moins de 50 cm : myopie de plus de [[1|0,5]] = 2 δ.\nPour une myopie de 2 δ exactement, on aurait le point neutre.",
    indice: "Le sens du reflet dépend de la position du remotum par rapport au skiascope. Où est le remotum quand le mouvement est inverse ?",
    schema: "img/schemas/U43/skiascopie-sens-du-reflet-50cm.svg",
    schemaTexte: "Skiascopie à 50 cm : un remotum entre le patient et le skiascope (myope de −4 δ) donne un mouvement inverse ; à 50 cm (−2 δ), c'est le point neutre ; au-delà (−1 δ) ou derrière l'œil, le mouvement est direct."
  },

  // ---------- Frontofocomètre (2019) ----------
  {
    id: "U43-038", epreuve: "U43", theme: "Frontofocomètre", session: "2019", difficulte: "facile",
    question: "Au frontofocomètre, la puissance frontale image d'un verre se mesure en lumière verte (raie e du mercure). Pourquoi impose-t-on une couleur précise ?",
    choix: ["Pour ne pas éblouir l'opticien pendant la mesure", "C'est la longueur d'onde de référence (raie e, 546 nm) pour mesurer les puissances", "Pour contrôler l'efficacité des traitements antireflet", "Pour bien voir la mire à travers les verres teintés"],
    bonne: 1,
    explication: "La vergence d'un verre change un peu avec la couleur de la lumière (dispersion). En mesurant à la longueur d'onde de référence (raie e, 546,07 nm), on évite les écarts dus au chromatisme et on mesure la valeur exacte annoncée par le fabricant.",
    indice: "La vergence d'un verre change-t-elle avec la couleur de la lumière ? Pense à la dispersion."
  },
  {
    id: "U43-039", epreuve: "U43", theme: "Frontofocomètre", session: "2019", difficulte: "moyen",
    question: "Au frontofocomètre, un verre de +4,00 δ montre un effet prismatique de 2 Δ. De combien est-il décentré ?",
    choix: ["2 mm", "5 mm", "8 mm", "0,5 mm"],
    bonne: 1,
    explication: "Règle de Prentice : P = c (cm) × D\nc = [[P|D]] = [[2|4]] = 0,5 cm = 5 mm",
    indice: "Règle de Prentice : P (Δ) = c (cm) × D. Isole c, puis convertis les centimètres en millimètres."
  },

  // ---------- Aberrations ----------
  {
    id: "U43-040", epreuve: "U43", theme: "Aberrations", session: "2020", difficulte: "facile",
    question: "Un doublet achromatique associe :",
    choix: ["Deux lentilles convergentes taillées dans le même verre", "Une convergente en crown et une divergente en flint", "Deux lentilles divergentes en flint, collées", "Une lentille convergente et un miroir concave"],
    bonne: 1,
    explication: "Le crown est peu dispersif (constringence, ou nombre d'Abbe, élevée), le flint très dispersif (constringence faible) : leurs dispersions se compensent alors que la vergence totale reste convergente. On corrige ainsi l'aberration chromatique (les franges colorées).",
    indice: "Pour annuler les couleurs, il faut deux verres de dispersions très différentes, et un ensemble qui reste convergent."
  },
  {
    id: "U43-041", epreuve: "U43", theme: "Aberrations", session: "2022", difficulte: "moyen",
    question: "Hors des conditions de Gauss, quelle aberration présente un miroir sphérique ?",
    choix: ["L'aberration chromatique", "L'aberration de sphéricité", "Aucune aberration", "La dispersion"],
    bonne: 1,
    explication: "Un miroir réfléchit toutes les couleurs de la même façon : pas de chromatisme. Mais les rayons du bord ne convergent pas au même point que ceux du centre : aberration de sphéricité. La lame de Schmidt la corrige.",
    indice: "Un miroir ne traverse pas de verre : peut-il disperser les couleurs ? Et que font les rayons du bord d'une surface sphérique ?"
  },
  // ---------- Lecture de schéma ----------
  {
    id: "U43-048", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    question: "Les trois diaphragmes du schéma sont déjà ramenés dans l'espace d'étude. Lequel est la pupille ?",
    choix: ["[D₁], le plus petit", "[D₂]", "[D₃], le plus grand", "On ne peut pas savoir sans connaître le champ"],
    bonne: 1,
    explication: "Depuis A, centre du plan des champs, on compare les angles : tan = [[rayon|distance]].\n[D₁] : [[6|40]] = 0,15\n[D₃] : [[20|100]] = 0,20\n[D₂] : [[15|150]] = 0,10\n[D₂] est vu sous le plus petit angle : c'est la pupille, même s'il n'est pas le plus petit.",
    indice: "Ne regarde pas seulement la taille : compare l'angle sous lequel on voit chaque diaphragme depuis A (rayon ÷ distance).",
    schemaQuestion: "img/schemas/U43/champs-trois-diaphragmes.svg",
    schemaTexte: "Depuis le point A du plan des champs : [D₁] de rayon 6 mm à 40 mm, [D₃] de rayon 20 mm à 100 mm, [D₂] de rayon 15 mm à 150 mm."
  },
  {
    id: "U43-049", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "difficile",
    question: "Le point Y du plan des champs envoie vers la pupille le faisceau dessiné : une partie est arrêtée par la lucarne. À quelle zone du champ appartient Y ?",
    choix: ["Au champ de pleine lumière", "Au champ de contour", "Hors du champ total", "Exactement au bord du champ total"],
    bonne: 1,
    explication: "Une partie du faisceau passe (zone en or) et une partie est arrêtée par la lucarne : l'image de Y est moins éclairée que le centre, mais pas noire. C'est le champ de contour. En pleine lumière, tout le faisceau atteindrait la pupille ; hors du champ total, rien ne passerait.",
    indice: "Le faisceau issu de Y remplit-il toute la pupille, une partie seulement, ou rien du tout ?",
    schemaQuestion: "img/schemas/U43/champs-point-y-faisceau.svg",
    schemaTexte: "Un point Y du plan des champs, une lucarne et une pupille : le cône de lumière issu de Y vers la pupille est en partie arrêté par le bord de la lucarne ; seule la partie basse atteint la pupille."
  },
  {
    id: "U43-050", epreuve: "U43", theme: "Mécanismes de réglage", session: "complément", difficulte: "moyen",
    question: "Sur le dessin, on tourne la molette autour de l'axe Z. Quel est le mouvement du tube ?",
    choix: ["Une rotation autour de Z", "Une translation suivant X", "Une translation suivant Y", "Une translation suivant Z"],
    bonne: 2,
    explication: "La molette porte un pignon (roue dentée) qui engrène sur une crémaillère (barre dentée) fixée au tube. La rotation du pignon autour de Z fait glisser la crémaillère le long de ses dents, ici verticalement : le tube translate suivant Y. C'est le système pignon-crémaillère.",
    indice: "Repère la direction dans laquelle s'alignent les dents fixées au tube : c'est la seule direction où il peut glisser.",
    schemaQuestion: "img/schemas/U43/mecanisme-molette-tube.svg",
    schemaTexte: "Vue de face : une roue dentée (molette, axe Z sortant de l'écran) engrène sur une barre dentée verticale fixée au tube ; axes X vers la droite et Y vers le haut."
  },

  // ---------- Mini-sujet : microscope d'atelier ----------
  {
    id: "U43-042", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 1,
    question: "Où se forme l'image intermédiaire A₁B₁ de la charnière, donnée par l'objectif ?",
    choix: ["À 120 mm après l'objectif, réelle et renversée", "À 60 mm après l'objectif, réelle et renversée", "À 120 mm avant l'objectif, virtuelle et droite", "Au foyer image de l'objectif, à 20 mm"],
    bonne: 0,
    explication: "Relation de conjugaison :\n[[1|OA₁]] = [[1|f']] + [[1|OA]] = [[1|20]] + [[1|−24]]\n[[1|OA₁]] = [[6|120]] − [[5|120]] = [[1|120]]\nDonc OA₁ = +120 mm. Positive : image réelle, après l'objectif.\nGrandissement : γ = [[OA₁|OA]] = [[120|−24]] = −5\nL'image est renversée et 5 fois plus grande.",
    indice: "La charnière est un objet réel avant l'objectif : OA = −24 mm. Utilise la relation de conjugaison avec f' = 20 mm.",
    schema: "img/schemas/U43/microscope-chaine-emmetrope.svg",
    schemaTexte: "Tracé à l'échelle : l'objet AB à 24 mm de l'objectif (f' = 20 mm) donne une image A₁B₁ réelle, renversée, 5 fois plus grande, à 120 mm, dans le plan focal objet de l'oculaire."
  },
  {
    id: "U43-043", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 2,
    question: "Le microscope est réglé pour un œil emmétrope qui n'accommode pas. Quelle distance sépare l'objectif de l'oculaire ?",
    choix: ["120 mm", "145 mm", "95 mm", "170 mm"],
    bonne: 1,
    explication: "L'image finale doit être à l'infini : A₁B₁ doit donc se trouver au foyer objet de l'oculaire, 25 mm avant lui. Distance objectif-oculaire = 120 + 25 = 145 mm. Dans la chaîne, on note « A₁ = Foc ».",
    indice: "Pour un emmétrope qui n'accommode pas, où doit se trouver A₁B₁ par rapport à l'oculaire ?"
  },
  {
    id: "U43-044", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 3,
    contexte: "On étudie les champs dans l'espace entre l'objectif et l'oculaire. Le plan des champs est le plan de A₁B₁. Seules les montures des deux lentilles limitent la lumière.",
    question: "D'après le schéma, quel diaphragme est la pupille ?",
    choix: ["La monture de l'objectif", "La monture de l'oculaire", "Aucune : il faut d'abord un diaphragme de champ", "Les deux montures jouent ce rôle à égalité"],
    bonne: 0,
    explication: "Depuis A₁, on compare les angles : tan = [[rayon|distance]].\nMonture de l'objectif : [[4|120]] ≈ 0,03\nMonture de l'oculaire : [[10|25]] = 0,40\nLa monture de l'objectif est vue sous le plus petit angle : c'est la pupille. La monture de l'oculaire est la lucarne.",
    indice: "Les deux montures sont déjà dans l'espace d'étude. Compare rayon ÷ distance à A₁ pour chacune.",
    schemaQuestion: "img/schemas/U43/cas-microscope-diaphragmes.svg",
    schema: "img/schemas/U43/cas-microscope-diaphragmes-correction.svg",
    schemaTexte: "Plan des champs en A₁ ; monture de l'objectif de rayon 4 mm, 120 mm avant ; monture de l'oculaire de rayon 10 mm, 25 mm après."
  },
  {
    id: "U43-045", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 4,
    question: "Avec la monture de l'oculaire comme lucarne, le bord de l'image est dégradé. Où placer un diaphragme pour obtenir un bord net ?",
    choix: ["Dans le plan de A₁B₁, au foyer objet de l'oculaire", "Contre l'objectif", "Contre l'oculaire", "Au foyer image de l'oculaire"],
    bonne: 0,
    explication: "Un diaphragme placé dans le plan d'une image réelle (ici A₁B₁, plan des champs) coupe le champ net : il supprime le champ de contour. C'est le diaphragme de champ des oculaires. Contre l'objectif, il réduirait la lumière (c'est la pupille) sans rendre le bord net.",
    indice: "Le champ de contour disparaît quand le diaphragme est dans un plan où se forme une image réelle. Lequel, ici ?"
  },
  {
    id: "U43-046", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "difficile",
    cas: "CAS-U43-01", etape: 5,
    contexte: "Un collègue myope de −8,00 δ veut utiliser le microscope sans ses lunettes. Son œil reste au foyer image de l'oculaire.",
    question: "De combien, et dans quel sens, faut-il déplacer l'oculaire par rapport au réglage emmétrope ?",
    choix: ["5 mm, en le rapprochant de l'objectif", "5 mm, en l'éloignant de l'objectif", "8 mm, en le rapprochant de l'objectif", "0,2 mm, en le rapprochant de l'objectif"],
    bonne: 0,
    explication: "Remotum à [[1|8]] m = 0,125 m devant l'œil, donc x' = F'A' = −125 mm.\nNewton : x = [[−f'²|x']] = [[−625|−125]] = +5 mm\nA₁ doit être 5 mm après le foyer objet de l'oculaire, c'est-à-dire entre Foc et l'oculaire : on rapproche l'oculaire de l'objectif de 5 mm.",
    indice: "Place l'image finale sur le remotum du myope, puis utilise x·x' = −f'² avec f' = 25 mm. Attention au signe de x'."
  },
  {
    id: "U43-047", epreuve: "U43", theme: "Liaisons mécaniques", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 6,
    contexte: "L'oculaire est monté dans une bague filetée au pas de 0,5 mm : en la tournant, l'oculaire avance en tournant.",
    question: "Quelle est la liaison entre la bague et le tube, et combien de tours faut-il pour le réglage de l'étape précédente ?",
    choix: ["Hélicoïdale, 10 tours", "Pivot glissant, 10 tours", "Hélicoïdale, 2,5 tours", "Glissière, 5 tours"],
    bonne: 0,
    explication: "Rotation et translation liées par un filetage : liaison hélicoïdale (1 degré de liberté). Chaque tour fait avancer d'un pas : N = course ÷ pas = 5 ÷ 0,5 = 10 tours.",
    indice: "Les deux mouvements sont-ils liés ou indépendants ? Pour le nombre de tours, divise la course par le pas."
  },
{
  "id": "U43-126",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Deux lentilles minces : L₁ (f'₁ = 60 mm), puis L₂ (f'₂ = 40 mm) placée 100 mm après L₁. Un objet réel AB est à 90 mm devant L₁. Trouve la position de l'image finale et le grandissement total, étape par étape.",
  "etapes": [
    {
      "consigne": "Position de l'image intermédiaire O₁A₁ (en mm)",
      "reponse": {
        "valeur": 180,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "Relation de conjugaison avec L₁ : [[1|O₁A₁]] = [[1|f'₁]] + [[1|O₁A]], avec O₁A = −90 mm (objet réel, avant la lentille).",
      "ligne": "[[1|O₁A₁]] = [[1|60]] + [[1|−90]] = [[3|180]] − [[2|180]] = [[1|180]]\nDonc O₁A₁ = +180 mm"
    },
    {
      "consigne": "Position de A₁ par rapport à L₂, O₂A₁ (en mm)",
      "reponse": {
        "valeur": 80,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "L₂ est à 100 mm de L₁ et A₁ à 180 mm de L₁. Compte la distance de L₂ à A₁ dans le sens de la lumière.",
      "ligne": "O₂A₁ = O₁A₁ − O₁O₂ = 180 − 100 = +80 mm\nPositif : A₁ est après L₂, c'est un objet virtuel pour L₂."
    },
    {
      "consigne": "Position de l'image finale O₂A' (en mm, au dixième)",
      "reponse": {
        "valeur": 26.7,
        "unite": "mm",
        "decimales": 1,
        "signe": true,
        "tolerance": 0.1
      },
      "aide": "Relation de conjugaison avec L₂ : [[1|O₂A']] = [[1|f'₂]] + [[1|O₂A₁]], avec O₂A₁ positif.",
      "ligne": "[[1|O₂A']] = [[1|40]] + [[1|80]] = [[2|80]] + [[1|80]] = [[3|80]]\nDonc O₂A' = +26,7 mm"
    },
    {
      "consigne": "Grandissement total γ (au centième)",
      "reponse": {
        "valeur": -0.67,
        "unite": "",
        "decimales": 2,
        "signe": true,
        "tolerance": 0.015
      },
      "aide": "γ = γ₁ × γ₂, avec γ₁ = [[O₁A₁|O₁A]] et γ₂ = [[O₂A'|O₂A₁]].",
      "ligne": "γ₁ = [[180|−90]] = −2      γ₂ = [[26,7|80]] ≈ +0,33\nγ = γ₁ × γ₂ ≈ −0,67"
    }
  ],
  "explication": "L'image finale est réelle, à 26,7 mm après L₂. Le grandissement total vaut −0,67 : elle est renversée et réduite."
},
{
  "id": "U43-127",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Une lunette a un oculaire de focale 30 mm. Un myope de −5 δ, sans lunettes, l'utilise sans accommoder, l'œil au foyer image de l'oculaire. La bague de réglage a un pas de 0,75 mm. Trouve le réglage depuis la position emmétrope, étape par étape.",
  "etapes": [
    {
      "consigne": "Position du remotum HR (en mm)",
      "reponse": {
        "valeur": -200,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "HR = [[1|R]], en mètres et avec son signe : le remotum d'un myope est devant l'œil.",
      "ligne": "HR = [[1|R]] = [[1|−5]] = −0,20 m = −200 mm"
    },
    {
      "consigne": "Déplacement x de l'image intermédiaire par rapport au foyer objet (en mm)",
      "reponse": {
        "valeur": 4.5,
        "unite": "mm",
        "decimales": 1,
        "signe": true
      },
      "aide": "L'œil est au foyer image de l'oculaire : x' = F'A' = HR. Relation de Newton : x · x' = −f'², avec f' = 30 mm.",
      "ligne": "x' = HR = −200 mm\nx = [[−f'²|x']] = [[−900|−200]] = +4,5 mm\nPositif : on rapproche l'oculaire de l'objectif de 4,5 mm."
    },
    {
      "consigne": "Nombre de tours de bague",
      "reponse": {
        "valeur": 6,
        "unite": "tours",
        "decimales": 0,
        "signe": false
      },
      "aide": "Un tour fait avancer d'un pas : nombre de tours = [[course|pas]], les deux dans la même unité.",
      "ligne": "N = [[course|pas]] = [[4,5|0,75]] = 6 tours"
    }
  ],
  "explication": "Pour ce myope, on rapproche l'oculaire de l'objectif de 4,5 mm, soit 6 tours de bague."
},
{
  "id": "U43-128",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Au frontofocomètre, un verre porte la correction +4,00 (−2,00) à 180°. Il est décentré de 5 mm horizontalement et de 3 mm verticalement. Trouve l'effet prismatique résultant, étape par étape.",
  "etapes": [
    {
      "consigne": "Puissance du méridien horizontal D_H (en δ, au centième)",
      "reponse": {
        "valeur": 4,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Un cylindre n'a aucun effet le long de son axe. L'axe 180° est horizontal.",
      "ligne": "Méridien horizontal = méridien de l'axe : D_H = +4,00 δ"
    },
    {
      "consigne": "Puissance du méridien vertical D_V (en δ, au centième)",
      "reponse": {
        "valeur": 2,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Dans le méridien perpendiculaire à l'axe, la puissance est la sphère plus le cylindre.",
      "ligne": "D_V = +4,00 + (−2,00) = +2,00 δ"
    },
    {
      "consigne": "Prisme horizontal P_H (en Δ, au dixième)",
      "reponse": {
        "valeur": 2,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Règle de Prentice : P = décentrement (cm) × puissance. Convertis 5 mm en cm.",
      "ligne": "P_H = 0,5 × 4,00 = 2,0 Δ"
    },
    {
      "consigne": "Prisme vertical P_V (en Δ, au dixième)",
      "reponse": {
        "valeur": 0.6,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Même règle avec le décentrement vertical et la puissance verticale.",
      "ligne": "P_V = 0,3 × 2,00 = 0,6 Δ"
    },
    {
      "consigne": "Prisme résultant P (en Δ, au dixième)",
      "reponse": {
        "valeur": 2.1,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Les deux prismes sont perpendiculaires : combine-les comme les côtés d'un triangle rectangle.",
      "ligne": "P = √(P_H² + P_V²) = √(2,0² + 0,6²) = √4,36 ≈ 2,1 Δ"
    }
  ],
  "explication": "Chaque méridien a sa propre puissance, donc son propre prisme. Le prisme résultant est de 2,1 Δ."
},
{
  "id": "U43-129",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "moyen",
  "type": "pose",
  "question": "Une lunette afocale a un objectif de focale 900 mm et de diamètre 90 mm, avec un oculaire de focale 18 mm. On ajoute une lentille de Barlow ×2 qui double la focale de l'objectif. Étudie l'effet, étape par étape.",
  "etapes": [
    {
      "consigne": "Grossissement sans Barlow G₀",
      "reponse": {
        "valeur": 50,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G = [[f'obj|f'oc]], les deux focales dans la même unité.",
      "ligne": "G₀ = [[900|18]] = 50"
    },
    {
      "consigne": "Focale de l'objectif avec la Barlow (en mm)",
      "reponse": {
        "valeur": 1800,
        "unite": "mm",
        "decimales": 0,
        "signe": false
      },
      "aide": "La Barlow ×2 double la focale : on multiplie.",
      "ligne": "f'obj = 2 × 900 = 1 800 mm"
    },
    {
      "consigne": "Grossissement avec la Barlow G",
      "reponse": {
        "valeur": 100,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "Même formule, avec la nouvelle focale.",
      "ligne": "G = [[1 800|18]] = 100"
    },
    {
      "consigne": "Diamètre du cercle oculaire avec la Barlow (en mm, au centième)",
      "reponse": {
        "valeur": 0.9,
        "unite": "mm",
        "decimales": 2,
        "signe": false
      },
      "aide": "Diamètre du cercle oculaire = [[diamètre de l'objectif|G]].",
      "ligne": "d = [[90|100]] = 0,90 mm"
    }
  ],
  "explication": "La Barlow double le grossissement (de 50 à 100) et divise par deux le cercle oculaire (de 1,8 à 0,9 mm) : l'image est plus grosse et moins lumineuse."
},
{
  "id": "U43-130",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "type": "pose",
  "question": "Un microscope a un objectif de focale 10 mm et un oculaire de focale 25 mm. La préparation est à 12 mm devant l'objectif. Il est réglé pour un œil emmétrope qui n'accommode pas. Étudie-le étape par étape.",
  "etapes": [
    {
      "consigne": "Position de l'image intermédiaire O₁A₁ (en mm)",
      "reponse": {
        "valeur": 60,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "Relation de conjugaison : [[1|O₁A₁]] = [[1|f'obj]] + [[1|O₁A]], avec O₁A = −12 mm.",
      "ligne": "[[1|O₁A₁]] = [[1|10]] + [[1|−12]] = [[6|60]] − [[5|60]] = [[1|60]]\nDonc O₁A₁ = +60 mm"
    },
    {
      "consigne": "Grandissement de l'objectif γ",
      "reponse": {
        "valeur": -5,
        "unite": "",
        "decimales": 0,
        "signe": true
      },
      "aide": "γ = [[O₁A₁|O₁A]], avec les signes.",
      "ligne": "γ = [[O₁A₁|O₁A]] = [[60|−12]] = −5"
    },
    {
      "consigne": "Distance entre l'objectif et l'oculaire (en mm)",
      "reponse": {
        "valeur": 85,
        "unite": "mm",
        "decimales": 0,
        "signe": false
      },
      "aide": "Pour un emmétrope sans accommodation, l'image finale est à l'infini : A₁ doit être au foyer objet de l'oculaire, 25 mm avant lui.",
      "ligne": "A₁ est à 60 mm après l'objectif et à 25 mm avant l'oculaire :\nO₁O₂ = 60 + 25 = 85 mm"
    },
    {
      "consigne": "Grossissement de l'oculaire G_oc",
      "reponse": {
        "valeur": 10,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G_oc = [[250|f'oc]], avec f'oc en mm.",
      "ligne": "G_oc = [[250|25]] = 10"
    },
    {
      "consigne": "Grossissement commercial G",
      "reponse": {
        "valeur": 50,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G = ∣γ objectif∣ × G_oc.",
      "ligne": "G = ∣−5∣ × 10 = 50"
    }
  ],
  "explication": "L'image intermédiaire est à 60 mm après l'objectif, agrandie 5 fois. Les lentilles sont à 85 mm l'une de l'autre et le grossissement commercial vaut 50."
}
);

// ---------- Mini-sujet (cas) ----------
CAS.push({
  id: "CAS-U43-01",
  epreuve: "U43",
  titre: "Le microscope d'atelier",
  contexte: "Ton magasin achète un petit microscope pour contrôler l'usure des charnières de montures. L'objectif est une lentille mince de focale 20 mm, l'oculaire une lentille mince de focale 25 mm. La charnière observée est placée à 24 mm devant l'objectif.",
  annexe: { titre: "Données", colonnes: ["Élément", "Valeur"], lignes: [["Focale de l'objectif", "f'obj = 20 mm"], ["Focale de l'oculaire", "f'oc = 25 mm"], ["Position de la charnière", "OA = −24 mm"]] }
});
