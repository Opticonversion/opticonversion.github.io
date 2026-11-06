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
    epreuve: "U43", theme: "Chaîne des conjugués", session: "2022",
    question: "Dans une chaîne des conjugués, un point objet placé au foyer objet F d'une lentille mince a pour image :",
    choix: ["Le foyer image F'", "Un point à l'infini", "Un point sur la lentille", "Un point symétrique de F par rapport à la lentille"],
    bonne: 1,
    explication: "Par définition, les rayons issus du foyer objet ressortent parallèles : l'image est rejetée à l'infini. Dans la chaîne, on note « A = F → A' à l'infini »."
  },
  {
    epreuve: "U43", theme: "Chaîne des conjugués", session: "2017",
    question: "Une lunette est réglée pour un œil emmétrope qui n'accommode pas. Où se trouve l'image intermédiaire d'une étoile donnée par l'objectif ?",
    choix: ["Au foyer objet de l'objectif", "Au foyer image de l'objectif, confondu avec le foyer objet de l'oculaire", "Au foyer image de l'oculaire", "Sur la rétine"],
    bonne: 1,
    explication: "Objet à l'infini → image au foyer image F'obj. Pour que l'image finale soit à l'infini (emmétrope désaccommodé), cette image doit être au foyer objet de l'oculaire : F'obj = Foc. C'est un système afocal."
  },
  {
    epreuve: "U43", theme: "Chaîne des conjugués", session: "2021",
    question: "Un utilisateur amétrope, sans lunettes et sans accommoder, voit net à travers un instrument. Où est l'image finale donnée par l'instrument ?",
    choix: ["À l'infini", "Sur le remotum de l'utilisateur", "Sur son punctum proximum", "Au foyer objet de son œil"],
    bonne: 1,
    explication: "Un œil qui n'accommode pas voit net uniquement les objets placés sur son remotum. L'instrument doit donc conjuguer l'image finale avec le remotum. À l'infini, ce n'est vrai que pour l'emmétrope."
  },
  {
    epreuve: "U43", theme: "Chaîne des conjugués", session: "2023",
    question: "Un miroir plan (miroir d'un reflex, miroir de renvoi d'un télescope) donne d'un objet réel une image :",
    choix: ["Réelle, renversée, de même taille", "Virtuelle, symétrique par rapport au miroir, de même taille", "Virtuelle, agrandie", "Réelle, à l'infini"],
    bonne: 1,
    explication: "Le miroir plan a une vergence nulle : l'image est symétrique de l'objet par rapport au miroir et de même taille. Il ne fait que renvoyer la lumière dans une autre direction."
  },
  {
    epreuve: "U43", theme: "Chaîne des conjugués", session: "2018",
    question: "Microscope réglé pour un emmétrope qui n'accommode pas. Où est placée la préparation par rapport à l'objectif ?",
    choix: ["Exactement au foyer objet de l'objectif", "Un peu au-delà du foyer objet (plus loin de l'objectif que F)", "Entre le foyer objet et l'objectif", "À l'infini, très loin de l'objectif"],
    bonne: 1,
    explication: "L'objectif doit donner une image réelle et agrandie, située au foyer objet de l'oculaire. Pour une image réelle agrandie, l'objet est placé un peu plus loin que le foyer objet (entre F et 2F). Au foyer même, l'image partirait à l'infini ; entre F et l'objectif, l'image serait virtuelle."
  },

  // ---------- Vergences et focales ----------
  {
    epreuve: "U43", theme: "Vergences et focales", session: "2021",
    question: "Sur le tracé, on cote la distance focale image d'un collimateur : f' = 125 mm. Quelle est sa vergence ?",
    choix: ["+0,125 δ", "+1,25 δ", "+8,00 δ", "+12,50 δ"],
    bonne: 2,
    explication: "D = 1/f' avec f' en mètres : 1/0,125 = +8,00 δ. Attention à l'échelle du dessin : on convertit la cote en vraie grandeur avant de calculer."
  },
  {
    epreuve: "U43", theme: "Vergences et focales", session: "2024",
    question: "Un condenseur plan-convexe a un indice n = 1,5 et un rayon de courbure de 50 mm (l'autre face est plane). Sa vergence vaut environ :",
    choix: ["+5 δ", "+10 δ", "+20 δ", "+30 δ"],
    bonne: 1,
    explication: "La face plane a une vergence nulle. Il reste celle du dioptre sphérique : D = (n − 1)/r = 0,5/0,050 = +10 δ."
  },
  {
    epreuve: "U43", theme: "Vergences et focales", session: "2023",
    question: "On clipse une lentille macro de +4 δ sur un objectif photo réglé sur l'infini. Quel objet sera net sur la pellicule ?",
    choix: ["Un objet à 4 cm", "Un objet à 25 cm", "Un objet à 40 cm", "Un objet à l'infini"],
    bonne: 1,
    explication: "L'objectif réglé sur l'infini a besoin de rayons parallèles. La lentille macro les fournit si l'objet est à son foyer objet : 1/4 = 0,25 m, soit 25 cm devant elle."
  },

  // ---------- Œil et instrument (6/8) ----------
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2024",
    question: "Sur le tracé, on cote le remotum de l'œil : HR = −125 mm (R devant l'œil). Réfraction axiale et amétropie ?",
    choix: ["R = +8,00 δ, hypermétrope", "R = −8,00 δ, myope", "R = −0,125 δ, myope", "R = −12,50 δ, myope"],
    bonne: 1,
    explication: "R = 1/HR = 1/(−0,125) = −8,00 δ. Remotum réel devant l'œil, donc R négatif : l'œil est myope."
  },
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2018",
    question: "Le remotum est derrière l'œil : HR = +250 mm. Réfraction axiale et amétropie ?",
    choix: ["R = −4,00 δ, myope", "R = +4,00 δ, hypermétrope", "R = +2,50 δ, hypermétrope", "R = 0, emmétrope"],
    bonne: 1,
    explication: "R = 1/HR = 1/(+0,25) = +4,00 δ. Remotum virtuel derrière l'œil, donc R positif : l'œil est hypermétrope."
  },
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2023",
    question: "Un myope de −4,00 δ, sans lunettes, regarde dans un viseur dont l'image finale se trouve à 20 cm devant son œil. Quelle accommodation lui faut-il ?",
    choix: ["0 δ", "+1,00 δ", "+4,00 δ", "+5,00 δ"],
    bonne: 1,
    explication: "Proximité de l'image : 1/(−0,20) = −5 δ. Accommodation = R − proximité = −4 − (−5) = +1,00 δ. Son remotum est à 25 cm : l'image à 20 cm est un peu plus près, il accommode un peu."
  },
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2023",
    question: "Le même myope (−4,00 δ), sans lunettes, regarde dans un instrument réglé pour un emmétrope (image finale à l'infini). Que se passe-t-il ?",
    choix: ["Il voit net en accommodant de 4 δ", "Il voit net sans accommoder", "Il ne peut pas voir net : l'image est au-delà de son remotum", "Il voit net en accommodant de 0,25 δ"],
    bonne: 2,
    explication: "L'accommodation sert uniquement à voir plus près que le remotum. Une image à l'infini est plus loin que son remotum (25 cm) : flou impossible à rattraper. Il faut régler l'oculaire ou garder ses lunettes."
  },
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2021",
    question: "Par rapport au réglage pour un emmétrope, comment faut-il déplacer l'oculaire pour un utilisateur myope ?",
    choix: ["L'éloigner de l'image intermédiaire", "Le rapprocher de l'image intermédiaire (vers l'objectif)", "Le tourner de 90°", "Ne pas le bouger"],
    bonne: 1,
    explication: "Le myope doit recevoir une image virtuelle à distance finie (sur son remotum). Pour cela, l'image intermédiaire doit se trouver entre le foyer objet et l'oculaire, donc on rapproche l'oculaire de cette image."
  },
  {
    epreuve: "U43", theme: "Œil et instrument", session: "2018",
    question: "Oculaire de focale 25 mm, œil placé à son foyer image. On le règle pour un myope de −4,00 δ (remotum à 250 mm), l'œil restant au foyer image de l'oculaire. De combien déplacer l'oculaire depuis le réglage emmétrope ?",
    choix: ["0,25 mm", "2,5 mm", "4 mm", "25 mm"],
    bonne: 1,
    explication: "Relation de Newton : x·x' = −f'². Image sur le remotum : x' = F'A' = −250 mm. Donc x = −625/(−250) = +2,5 mm. L'image intermédiaire doit être 2,5 mm après le foyer objet : on rapproche l'oculaire de 2,5 mm."
  },

  // ---------- Étude des champs (8/8) ----------
  {
    epreuve: "U43", theme: "Étude des champs", session: "2022",
    question: "Dans l'espace d'étude, comment identifie-t-on la pupille ?",
    choix: ["Le plus grand des diaphragmes, une fois conjugués dans l'espace d'étude", "Celui (ou son conjugué) vu sous le plus petit angle depuis le centre du plan des champs", "Toujours la monture de l'objectif, quel que soit l'instrument", "Le diaphragme le plus proche de l'œil de l'observateur"],
    bonne: 1,
    explication: "On conjugue d'abord tous les diaphragmes dans l'espace d'étude. Depuis le point axial du plan des champs, celui qu'on voit sous le plus petit angle limite l'ouverture : c'est la pupille. Les autres jouent le rôle de lucarnes."
  },
  {
    epreuve: "U43", theme: "Étude des champs", session: "2019",
    question: "Qu'est-ce que le champ de pleine lumière ?",
    choix: ["La zone où l'image est la plus nette, au centre du champ", "La zone où chaque faisceau remplit toute la pupille, sans être coupé", "La zone où l'éclairement vaut la moitié du maximum", "Tout ce que l'on voit dans l'instrument, même faiblement"],
    bonne: 1,
    explication: "Dans le champ de pleine lumière, la lucarne ne coupe aucun faisceau : chaque point utilise toute la pupille. L'éclairement y est maximal et uniforme."
  },
  {
    epreuve: "U43", theme: "Étude des champs", session: "2023",
    question: "La zone comprise entre le bord du champ de pleine lumière et le bord du champ total s'appelle :",
    choix: ["Le champ moyen", "Le champ de contour", "La pupille de sortie", "Le cercle oculaire"],
    bonne: 1,
    explication: "Dans le champ de contour, le faisceau est en partie coupé par une lucarne : l'éclairement décroît du bord de la pleine lumière jusqu'à zéro au bord du champ total. Sur une photo, c'est le vignettage (bords assombris)."
  },
  {
    epreuve: "U43", theme: "Étude des champs", session: "2021",
    question: "Comment supprimer le champ de contour d'un instrument ?",
    choix: ["En fermant davantage la pupille de l'instrument", "En plaçant un diaphragme dans le plan d'une image réelle", "En prenant un oculaire de plus grand diamètre", "En éloignant l'œil du cercle oculaire"],
    bonne: 1,
    explication: "Un diaphragme placé dans un plan où se forme une image réelle coupe le champ net, sans dégradé : champ total = champ de pleine lumière. C'est le diaphragme de champ des oculaires."
  },
  {
    epreuve: "U43", theme: "Étude des champs", session: "2018",
    question: "Au bord du champ moyen, l'éclairement de l'image vaut environ :",
    choix: ["100 % de l'éclairement maximal", "50 % de l'éclairement maximal", "0 %", "25 %"],
    bonne: 1,
    explication: "Le bord du champ moyen est le point dont le rayon passant par le centre de la pupille rase le bord de la lucarne : la moitié du faisceau passe environ. On est au milieu du champ de contour (valeur approchée retenue au BTS)."
  },
  {
    epreuve: "U43", theme: "Étude des champs", session: "2020",
    question: "Pour qu'une photo soit éclairée en entier et de façon uniforme, le cercle du champ de pleine lumière image doit avoir un diamètre au moins égal à :",
    choix: ["La hauteur du capteur", "La largeur du capteur", "La diagonale du capteur", "La focale de l'objectif"],
    bonne: 2,
    explication: "Le capteur est un rectangle inscrit dans le cercle de pleine lumière. Ses coins sont les points les plus éloignés du centre, il faut donc que le diamètre du cercle atteigne la diagonale."
  },

  // ---------- Liaisons mécaniques (8/8) ----------
  {
    epreuve: "U43", theme: "Liaisons mécaniques", session: "2024",
    question: "Une molette ne peut que tourner autour de son axe X par rapport au boîtier. Quelle est la liaison ?",
    choix: ["Glissière d'axe X", "Pivot d'axe X", "Pivot glissant d'axe X", "Encastrement"],
    bonne: 1,
    explication: "Une seule rotation, aucune translation : liaison pivot. On donne toujours l'axe : « pivot d'axe X »."
  },
  {
    epreuve: "U43", theme: "Liaisons mécaniques", session: "2019",
    question: "Un porte-mire ne peut que coulisser suivant l'axe optique Z, sans tourner. Quelle est la liaison ?",
    choix: ["Pivot d'axe Z", "Glissière d'axe Z", "Hélicoïdale d'axe Z", "Rotule"],
    bonne: 1,
    explication: "Une seule translation, aucune rotation : liaison glissière. Une rainure ou un méplat empêche la rotation."
  },
  {
    epreuve: "U43", theme: "Liaisons mécaniques", session: "2017",
    question: "Un tube peut, à la main, à la fois tourner sur lui-même et coulisser suivant son axe, ces deux mouvements étant indépendants. Quelle est la liaison ?",
    choix: ["Pivot", "Glissière", "Pivot glissant", "Hélicoïdale"],
    bonne: 2,
    explication: "Une rotation et une translation de même axe, indépendantes : pivot glissant (2 degrés de liberté). Si elles étaient liées (on avance en tournant), ce serait une hélicoïdale."
  },
  {
    epreuve: "U43", theme: "Liaisons mécaniques", session: "2023",
    question: "Pour faire la mise au point, on tourne la bague de l'objectif : le bloc optique avance en tournant sur lui-même. Quelle est la liaison entre le bloc optique et la monture ?",
    choix: ["Pivot glissant", "Hélicoïdale", "Glissière", "Pivot"],
    bonne: 1,
    explication: "Le filetage lie les deux mouvements : chaque tour fait avancer d'un pas. Un seul degré de liberté : liaison hélicoïdale."
  },
  {
    epreuve: "U43", theme: "Liaisons mécaniques", session: "2022",
    question: "Lors d'une mise au point, on tourne une molette. Quel est le « mouvement utile » demandé pour l'élément optique ?",
    choix: ["La rotation de la molette", "La translation de l'élément optique suivant l'axe optique", "Une rotation de la lentille sur elle-même", "Aucun mouvement"],
    bonne: 1,
    explication: "Ce qui change la mise au point, c'est la position de la lentille sur l'axe optique : une translation. La rotation de la molette n'est que le moyen de la produire."
  },

  // ---------- Mécanismes de réglage ----------
  {
    epreuve: "U43", theme: "Mécanismes de réglage", session: "2021",
    question: "Mise au point d'un microscope : on tourne un bouton et le tube monte grâce à une roue dentée qui engrène sur une barre dentée. Mécanisme ?",
    choix: ["Vis-écrou", "Pignon-crémaillère", "Came", "Courroie"],
    bonne: 1,
    explication: "Le pignon (roue dentée) tourne, la crémaillère (barre dentée) se déplace : rotation → translation. C'est le réglage rapide (macrométrique) classique des microscopes."
  },
  {
    epreuve: "U43", theme: "Mécanismes de réglage", session: "2022",
    question: "Une bague de mise au point (système vis-écrou) est filetée au pas de 0,75 mm. Combien de tours faut-il pour déplacer l'oculaire de 3 mm ?",
    choix: ["2 tours", "3 tours", "4 tours", "2,25 tours"],
    bonne: 2,
    explication: "Un système vis-écrou transforme une rotation en translation : un tour fait avancer d'un pas. Nombre de tours = course ÷ pas = 3 ÷ 0,75 = 4 tours."
  },

  // ---------- Grossissement et photo ----------
  {
    epreuve: "U43", theme: "Grossissement et photo", session: "2017",
    question: "Lunette afocale : objectif de focale 600 mm, oculaire de focale 20 mm. Grossissement ?",
    choix: ["×12", "×30", "×580", "×0,033"],
    bonne: 1,
    explication: "G = f'obj / f'oc = 600/20 = 30."
  },
  {
    epreuve: "U43", theme: "Grossissement et photo", session: "2017",
    question: "On ajoute à cette lunette une lentille de Barlow qui double la focale de l'objectif. Que deviennent le grossissement et le champ observable ?",
    choix: ["G ×2, champ plus grand", "G ×2, champ plus petit", "G inchangé, champ plus petit", "G ÷2, champ plus grand"],
    bonne: 1,
    explication: "La focale de l'objectif passe à 1 200 mm : G = 1 200/20 = 60. On voit plus gros, mais une portion du ciel plus petite."
  },
  {
    epreuve: "U43", theme: "Grossissement et photo", session: "2018",
    question: "Microscope : objectif ×40, oculaire ×10. Grossissement commercial ?",
    choix: ["×50", "×400", "×4", "×30"],
    bonne: 1,
    explication: "Le grossissement d'un microscope est le produit : grandissement de l'objectif × grossissement de l'oculaire = 40 × 10 = 400."
  },
  {
    epreuve: "U43", theme: "Grossissement et photo", session: "2020",
    question: "Objectif photo de focale 100 mm dont la pupille d'entrée mesure 25 mm. Nombre d'ouverture ?",
    choix: ["f/2,5", "f/4", "f/25", "f/0,25"],
    bonne: 1,
    explication: "N = focale ÷ diamètre de la pupille d'entrée = 100/25 = 4. On écrit f/4."
  },
  {
    epreuve: "U43", theme: "Grossissement et photo", session: "2020",
    question: "On monte un multiplicateur ×2 sur cet objectif (100 mm, f/4). Résultat ?",
    choix: ["200 mm, f/4, même luminosité", "200 mm, f/8, luminosité divisée par 4", "50 mm, f/2, luminosité ×4", "200 mm, f/8, luminosité divisée par 2"],
    bonne: 1,
    explication: "La focale double (200 mm) mais la pupille d'entrée ne change pas : N = 200/25 = 8. L'éclairement varie comme 1/N² : (8/4)² = 4, donc 4 fois moins de lumière."
  },

  // ---------- Œil astigmate (3/8) ----------
  {
    epreuve: "U43", theme: "Œil astigmate", session: "2021",
    question: "Un astigmate regarde un point dans un instrument. La tache de diffusion sur sa rétine est un petit segment horizontal. Cela signifie que :",
    choix: ["Le méridien horizontal est net sur la rétine", "Le méridien vertical est mis au point sur la rétine, le méridien horizontal ne l'est pas", "Aucun méridien n'est mis au point", "L'œil n'est pas astigmate"],
    bonne: 1,
    explication: "Les rayons du méridien vertical convergent en un point dans ce plan, mais ceux du méridien horizontal restent étalés : on obtient une focale horizontale. Une focale horizontale sur la rétine signifie que c'est le méridien vertical qui est net."
  },
  {
    epreuve: "U43", theme: "Œil astigmate", session: "2022",
    question: "Un client astigmate veut utiliser un télescope sans ses lunettes. Que lui conseiller ?",
    choix: ["Régler l'oculaire : cela compense toute l'amétropie", "Garder ses lunettes ou ses lentilles pendant l'observation", "Fermer l'œil le plus astigmate pendant l'observation", "Prendre un objectif de plus grande focale"],
    bonne: 1,
    explication: "Le réglage de l'oculaire déplace l'image, comme une sphère : il ne compense que la partie sphérique de l'amétropie. Pour l'astigmatisme, il faut garder sa compensation."
  },

  // ---------- Skiascopie (2024) ----------
  {
    epreuve: "U43", theme: "Skiascopie", session: "2024",
    question: "Skiascopie à 50 cm : le point neutre est obtenu avec un verre de +3,00 δ. Réfraction de l'œil ?",
    choix: ["+3,00 δ", "+1,00 δ", "+5,00 δ", "−1,00 δ"],
    bonne: 1,
    explication: "On retire la vergence liée à la distance de travail : R = verre de point neutre − 1/d = +3 − 1/0,5 = +3 − 2 = +1,00 δ. L'œil est hypermétrope d'une dioptrie."
  },
  {
    epreuve: "U43", theme: "Skiascopie", session: "2024",
    question: "Skiascopie à 50 cm, faisceau divergent, sans verre : le reflet bouge en sens inverse du skiascope. Conclusion ?",
    choix: ["Hypermétropie", "Emmétropie", "Myopie de plus de 2 δ", "Myopie de moins de 2 δ"],
    bonne: 2,
    explication: "Le mouvement est inverse quand le remotum se trouve entre le patient et l'examinateur, donc à moins de 50 cm : myopie de plus de 1/0,5 = 2 δ. Pour une myopie de 2 δ exactement, on aurait le point neutre."
  },

  // ---------- Frontofocomètre (2019) ----------
  {
    epreuve: "U43", theme: "Frontofocomètre", session: "2019",
    question: "Pourquoi la mire d'un frontofocomètre est-elle éclairée en lumière verte de 546,07 nm ?",
    choix: ["Pour ne pas éblouir l'opticien pendant la mesure", "C'est la longueur d'onde de référence (raie e) des vergences", "Pour contrôler l'efficacité des traitements antireflet", "Pour bien voir la mire à travers les verres teintés"],
    bonne: 1,
    explication: "La vergence d'un verre change un peu avec la couleur de la lumière (dispersion). En mesurant à la longueur d'onde de référence (raie e, 546,07 nm), on évite les écarts dus au chromatisme et on mesure la valeur exacte annoncée par le fabricant."
  },
  {
    epreuve: "U43", theme: "Frontofocomètre", session: "2019",
    question: "Au frontofocomètre, un verre de +4,00 δ montre un effet prismatique de 2 Δ. De combien est-il décentré ?",
    choix: ["2 mm", "5 mm", "8 mm", "0,5 mm"],
    bonne: 1,
    explication: "Règle de Prentice : P = c (cm) × D, donc c = P/D = 2/4 = 0,5 cm = 5 mm."
  },

  // ---------- Aberrations ----------
  {
    epreuve: "U43", theme: "Aberrations", session: "2020",
    question: "Un doublet achromatique associe :",
    choix: ["Deux lentilles convergentes taillées dans le même verre", "Une convergente en crown et une divergente en flint", "Deux lentilles divergentes en flint, collées", "Une lentille convergente et un miroir concave"],
    bonne: 1,
    explication: "Le crown est peu dispersif (constringence élevée), le flint très dispersif (constringence faible) : leurs dispersions se compensent alors que la vergence totale reste convergente. On corrige ainsi l'aberration chromatique (les franges colorées)."
  },
  {
    epreuve: "U43", theme: "Aberrations", session: "2022",
    question: "Hors des conditions de Gauss, quelle aberration présente un miroir sphérique ?",
    choix: ["L'aberration chromatique", "L'aberration de sphéricité", "Aucune aberration", "La dispersion"],
    bonne: 1,
    explication: "Un miroir réfléchit toutes les couleurs de la même façon : pas de chromatisme. Mais les rayons du bord ne convergent pas au même point que ceux du centre : aberration de sphéricité. La lame de Schmidt la corrige."
  }
);
