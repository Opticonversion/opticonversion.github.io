// =====================================================================
//  QUESTIONS D'ENTRAÎNEMENT · U43 (Étude technique des systèmes optiques)
//  Les mêmes notions que questions-U43.js, avec d'autres chiffres, pour les
//  élèves qui veulent s'entraîner plus. Elles ne comptent pas dans l'Essentiel.
//  Même format qu'une question normale, avec en plus  entrainement: true.
//  Format complet : notes/coordination/format-entrainement.md
// =====================================================================
QUESTIONS.push(
{
  "id": "U43-051",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "type": "calcul",
  "question": "L'objectif d'un microscope est une lentille mince de focale 30 mm. La préparation est à 40 mm devant elle. Calcule OA', la position de l'image par rapport à l'objectif.",
  "reponse": {
    "valeur": 120,
    "unite": "mm",
    "decimales": 0,
    "signe": true
  },
  "explication": "Relation de conjugaison :\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|30]] + [[1|−40]]\n[[1|OA']] = [[4|120]] − [[3|120]] = [[1|120]]\nDonc OA' = +120 mm. Positif : l'image est réelle, après l'objectif.\nGrandissement : γ = [[OA'|OA]] = [[120|−40]] = −3\nImage renversée, 3 fois plus grande.",
  "indice": "La préparation est un objet réel avant la lentille : OA = −40 mm. Applique [[1|OA']] = [[1|f']] + [[1|OA]], puis inverse."
},
{
  "id": "U43-052",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "type": "calcul",
  "question": "Une lentille de loupe a une distance focale image de 80 mm. Quelle est sa vergence, arrondie au dixième ?",
  "reponse": {
    "valeur": 12.5,
    "unite": "δ",
    "decimales": 1,
    "signe": true
  },
  "explication": "D = [[1|f']] avec f' en mètres :\nD = [[1|0,08]] = +12,5 δ\nPositive : lentille convergente.",
  "indice": "Convertis d'abord les millimètres en mètres, puis prends l'inverse de la focale."
},
{
  "id": "U43-053",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "question": "Une lentille plan-convexe est taillée dans un verre d'indice 1,6. La face courbe a un rayon de 40 mm, l'autre face est plane. Sa vergence vaut :",
  "choix": [
    "+15 δ",
    "+40 δ",
    "−15 δ",
    "+0,015 δ"
  ],
  "bonne": 0,
  "explication": "La face plane n'apporte rien. Pour la face courbe :\nD = [[n − 1|r]] = [[0,6|0,040]] = +15 δ\nOublier le « − 1 » donne +40 δ ; garder les millimètres donne +0,015 δ.",
  "indice": "Seule la face courbe compte. Utilise D = [[n − 1|r]], avec r en mètres."
},
{
  "id": "U43-054",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "type": "calcul",
  "question": "Sur un schéma dessiné deux fois plus grand que la réalité (échelle axiale 2:1), on mesure 40 mm entre le plan principal et le foyer image d'un collimateur. Quelle est sa vergence ?",
  "reponse": {
    "valeur": 50,
    "unite": "δ",
    "decimales": 0,
    "signe": true
  },
  "explication": "Il faut d'abord revenir à la vraie grandeur :\nf' = [[40|2]] = 20 mm = 0,020 m\nD = [[1|0,020]] = +50 δ\nSans convertir l'échelle, on trouverait +25 δ.",
  "indice": "Le dessin est agrandi : divise la cote mesurée par l'échelle avant de calculer, puis convertis en mètres."
},
{
  "id": "U43-055",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "question": "On clipse une lentille macro de +2,5 δ sur un objectif photo réglé sur l'infini. À quelle distance de la lentille macro l'objet net se trouve-t-il ?",
  "choix": [
    "2,5 cm",
    "25 cm",
    "40 cm",
    "1 m"
  ],
  "bonne": 2,
  "explication": "L'objectif réglé sur l'infini attend des rayons parallèles : l'objet doit être au foyer objet de la lentille macro.\nDistance = [[1|D]] = [[1|2,5]] = 0,4 m, soit 40 cm.",
  "indice": "Les rayons doivent ressortir parallèles : l'objet est au foyer objet de la lentille macro. Quelle distance donne [[1|D]] ?"
},
{
  "id": "U43-056",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "type": "calcul",
  "question": "Sur un tracé, le remotum d'un œil est coté à 160 mm devant l'œil (HR = −160 mm). Quelle est sa réfraction axiale R ?",
  "reponse": {
    "valeur": -6.25,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "R = [[1|HR]] = [[1|−0,160]] = −6,25 δ\nRemotum réel devant l'œil, donc R négatif : l'œil est myope.",
  "indice": "R = [[1|HR]], avec HR en mètres et son signe : le remotum est devant l'œil."
},
{
  "id": "U43-057",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Le remotum d'un œil est derrière l'œil, à 400 mm (HR = +400 mm). Quelle est son amétropie ?",
  "choix": [
    "R = −2,5 δ, myope",
    "R = +2,5 δ, hypermétrope",
    "R = +0,4 δ, hypermétrope",
    "R = +25 δ, hypermétrope"
  ],
  "bonne": 1,
  "explication": "R = [[1|HR]] = [[1|0,4]] = +2,5 δ\nRemotum virtuel derrière l'œil, R positif : l'œil est hypermétrope de 2,5 δ. Oublier d'inverser donne +0,4 δ.",
  "indice": "R = [[1|HR]], avec HR en mètres. Un remotum derrière l'œil donne quel signe ?"
},
{
  "id": "U43-058",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
    "difficulte": "difficile",
  "type": "calcul",
  "question": "Un myope de −2,5 δ, sans lunettes, regarde dans un viseur dont l'image finale est à 25 cm devant son œil. Quelle accommodation lui faut-il ?",
  "reponse": {
    "valeur": 1.5,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "Proximité de l'image : [[1|−0,25]] = −4 δ\nAccommodation = R − proximité = −2,5 − (−4) = +1,5 δ\nSon remotum est à 40 cm : l'image à 25 cm est plus près, il accommode un peu.",
  "indice": "Calcule la proximité de l'image ([[1|distance]], négative devant l'œil). L'accommodation est l'écart entre R et cette proximité."
},
{
  "id": "U43-059",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
    "difficulte": "difficile",
  "type": "calcul",
  "question": "Un oculaire de focale 20 mm est réglé pour un myope de −5 δ, dont l'œil reste au foyer image de l'oculaire. De combien de millimètres déplace-t-on l'oculaire depuis le réglage emmétrope ?",
  "reponse": {
    "valeur": 2,
    "unite": "mm",
    "decimales": 1,
    "signe": false
  },
  "explication": "Remotum à [[1|5]] m = 0,2 m, donc x' = F'A' = −200 mm.\nRelation de Newton : x·x' = −f'²\nx = [[−f'²|x']] = [[−400|−200]] = +2 mm\nOn rapproche l'oculaire de l'image intermédiaire de 2 mm.",
  "indice": "Utilise x·x' = −f'², avec x' = F'A' compté depuis l'œil, c'est-à-dire la distance du remotum. Attention au signe de x'."
},
{
  "id": "U43-060",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "question": "Trois diaphragmes sont déjà ramenés dans l'espace d'étude. Vus depuis A, centre du plan des champs : [D₁] de rayon 8 mm à 50 mm, [D₂] de rayon 10 mm à 125 mm, [D₃] de rayon 24 mm à 200 mm. Lequel est la pupille ?",
  "choix": [
    "[D₁], le plus petit",
    "[D₂]",
    "[D₃], le plus grand",
    "On ne peut pas le savoir sans connaître le champ"
  ],
  "bonne": 1,
  "explication": "On compare les angles depuis A : tan = [[rayon|distance]].\n[D₁] : [[8|50]] = 0,16\n[D₂] : [[10|125]] = 0,08\n[D₃] : [[24|200]] = 0,12\n[D₂] est vu sous le plus petit angle : c'est la pupille, même si ce n'est ni le plus petit ni le plus grand.",
  "indice": "Ne regarde pas seulement la taille : compare l'angle sous lequel on voit chaque diaphragme depuis A (rayon ÷ distance)."
},
{
  "id": "U43-061",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
    "difficulte": "difficile",
  "type": "calcul",
  "contexte": "Dans l'espace d'étude, la lucarne (rayon 15 mm) est à 120 mm du plan des champs et la pupille (rayon 12 mm) à 240 mm. Les distances sont comptées depuis le centre du plan des champs.",
  "question": "Quel est le rayon du champ de pleine lumière dans le plan des champs ?",
  "reponse": {
    "valeur": 18,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Le bord du champ de pleine lumière est la droite qui joint le bord haut de la pupille (+12 mm à 240 mm) au bord haut de la lucarne (+15 mm à 120 mm).\nPente : [[12 − 15|120]] = −0,025 mm par mm\nEn remontant jusqu'au plan des champs : 15 + 0,025 × 120 = 18 mm",
  "indice": "Trace la droite qui passe par les bords du même côté de la pupille et de la lucarne, puis prolonge-la jusqu'au plan des champs."
},
{
  "id": "U43-062",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
    "difficulte": "difficile",
  "contexte": "Dans l'espace d'étude, la lucarne (rayon 15 mm) est à 120 mm du plan des champs et la pupille (rayon 12 mm) à 240 mm. Les distances sont comptées depuis le centre du plan des champs.",
  "question": "Même montage : quel est le rayon du champ total dans le plan des champs ?",
  "choix": [
    "42 mm",
    "18 mm",
    "30 mm",
    "27 mm"
  ],
  "bonne": 0,
  "explication": "Le bord du champ total est la droite qui joint le bord bas de la pupille (−12 mm à 240 mm) au bord haut de la lucarne (+15 mm à 120 mm).\nPente : [[−12 − 15|120]] = −0,225\nAu plan des champs : 15 + 0,225 × 120 = 42 mm\n18 mm est le champ de pleine lumière, 27 mm vient d'une addition sans tenir compte des distances.",
  "indice": "Cette fois, prends les bords opposés : le bord bas de la pupille et le bord haut de la lucarne."
},
{
  "id": "U43-063",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Le volet d'une loupe pivote autour d'une charnière d'axe Y. Il ne peut ni coulisser ni tourner autour d'un autre axe. Quelle est la liaison ?",
  "choix": [
    "Glissière d'axe Y",
    "Pivot d'axe Y",
    "Pivot glissant d'axe Y",
    "Hélicoïdale d'axe Y"
  ],
  "bonne": 1,
  "explication": "Une seule rotation, aucune translation : liaison pivot d'axe Y.",
  "indice": "Compte les mouvements possibles : combien de rotations, combien de translations ?"
},
{
  "id": "U43-064",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Le chariot d'une platine de microscope se déplace seulement suivant X, guidé par une queue d'aronde. Quelle est la liaison entre le chariot et le bâti ?",
  "choix": [
    "Pivot d'axe X",
    "Glissière d'axe X",
    "Hélicoïdale d'axe X",
    "Pivot glissant d'axe X"
  ],
  "bonne": 1,
  "explication": "Une seule translation, aucune rotation possible : liaison glissière d'axe X.",
  "indice": "Le guidage empêche toute rotation. Quel mouvement reste-t-il, et suivant quel axe ?"
},
{
  "id": "U43-065",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Combien de degrés de liberté une liaison hélicoïdale laisse-t-elle ?",
  "choix": [
    "0",
    "1",
    "2",
    "3"
  ],
  "bonne": 1,
  "explication": "Une seule : rotation et translation sont liées par le filetage, on ne peut pas faire l'une sans l'autre. C'est ce qui la distingue du pivot glissant, qui en a 2.",
  "indice": "Dans un filetage, peut-on avancer sans tourner ? Cela dit combien de mouvements sont indépendants."
},
{
  "id": "U43-066",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "type": "calcul",
  "question": "Une bague de réglage (système vis-écrou) a un pas de 0,75 mm. Combien de tours faut-il pour déplacer l'oculaire de 4,5 mm ?",
  "reponse": {
    "valeur": 6,
    "unite": "tours",
    "decimales": 0,
    "signe": false
  },
  "explication": "Un tour fait avancer d'un pas.\nNombre de tours = [[course|pas]] = [[4,5|0,75]] = 6 tours",
  "indice": "Un tour de vis fait avancer d'un pas. Combien de pas dans la course demandée ?"
},
{
  "id": "U43-067",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Un réglage micrométrique doit être lent et précis : un tour de bouton déplace la platine de 0,5 mm seulement. Quel mécanisme convient ?",
  "choix": [
    "Pignon-crémaillère",
    "Vis-écrou",
    "Came",
    "Courroie"
  ],
  "bonne": 1,
  "explication": "Le système vis-écrou transforme la rotation en une translation très faible, d'un pas par tour : réglage fin. Le pignon-crémaillère déplace beaucoup plus vite et sert au réglage rapide.",
  "indice": "Quel mécanisme avance d'un pas, petit, à chaque tour ? L'autre sert au réglage rapide."
},
{
  "id": "U43-068",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "type": "calcul",
  "question": "Le pignon d'une molette a 20 dents. Les dents de la crémaillère sont espacées de 2 mm. De combien le tube avance-t-il pour un tour complet de la molette ?",
  "reponse": {
    "valeur": 40,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Un tour fait défiler les 20 dents du pignon devant la crémaillère. Déplacement = 20 × 2 mm = 40 mm.",
  "indice": "Combien de dents passent pendant un tour, et de quelle distance avance la crémaillère à chaque dent ?"
},
{
  "id": "U43-069",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "type": "calcul",
  "question": "Une lunette afocale a un objectif de focale 800 mm et un oculaire de focale 25 mm. Quel est son grossissement, en valeur absolue ?",
  "reponse": {
    "valeur": 32,
    "unite": "",
    "decimales": 0,
    "signe": false
  },
  "explication": "G = [[f'objectif|f'oculaire]] = [[800|25]] = 32\nPour une lunette astronomique, G = −[[f'objectif|f'oculaire]] = −32 : l'image est renversée ; en valeur absolue, 32.",
  "indice": "Pour une lunette afocale, G = [[f'objectif|f'oculaire]], les deux focales dans la même unité."
},
{
  "id": "U43-070",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "question": "Un microscope a un objectif ×20 et un oculaire ×15. Quel est son grossissement commercial ?",
  "choix": [
    "×35",
    "×300",
    "×1,3",
    "×150"
  ],
  "bonne": 1,
  "explication": "Le grossissement d'un microscope est le produit de celui de l'objectif par celui de l'oculaire : 20 × 15 = ×300. Additionner donne ×35.",
  "indice": "Les deux grossissements se combinent : addition ou multiplication ?"
},
{
  "id": "U43-071",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
    "difficulte": "facile",
  "type": "calcul",
  "question": "Un objectif photo a une focale de 150 mm et une pupille d'entrée de 30 mm de diamètre. Quel est son nombre d'ouverture N (il se note f/N) ?",
  "reponse": {
    "valeur": 5,
    "unite": "",
    "decimales": 0,
    "signe": true
  },
  "explication": "N = [[focale|diamètre de la pupille d'entrée]] = [[150|30]] = 5\nL'objectif s'ouvre à f/5.",
  "indice": "N = focale ÷ diamètre de la pupille d'entrée, les deux dans la même unité."
},
{
  "id": "U43-072",
  "epreuve": "U43",
  "theme": "Œil astigmate",
  "session": "complément",
  "entrainement": true,
    "difficulte": "difficile",
  "question": "Un astigmate regarde un point dans un instrument. La tache de diffusion sur sa rétine est un petit segment vertical. Que peut-on en conclure ?",
  "choix": [
    "Le méridien vertical est net",
    "Le méridien horizontal est net",
    "Les deux méridiens sont nets",
    "Aucun des deux méridiens n'est net"
  ],
  "bonne": 1,
  "explication": "Un segment vertical est la focale d'un faisceau dont le méridien horizontal converge sur la rétine, tandis que le méridien vertical ne converge pas encore. C'est donc le méridien horizontal qui est mis au point.",
  "indice": "Le segment est perpendiculaire au méridien dont les rayons convergent. Quel méridien converge ici ?"
},
{
  "id": "U43-073",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "type": "calcul",
  "question": "En skiascopie à 40 cm, le point neutre est obtenu avec un verre de +4,00 δ. Quelle est la réfraction de l'œil ?",
  "reponse": {
    "valeur": 1.5,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "R = verre de point neutre − [[1|d]] = +4 − [[1|0,4]] = +4 − 2,5 = +1,5 δ\nL'œil est hypermétrope de 1,5 δ.",
  "indice": "On retire la vergence liée à la distance de travail : [[1|d]], avec d en mètres."
},
{
  "id": "U43-074",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "question": "Skiascopie à 1 m : le point neutre est obtenu avec un verre de +1,00 δ. Quelle est la réfraction de l'œil ?",
  "choix": [
    "+2,00 δ",
    "0 (emmétrope)",
    "+1,00 δ",
    "−1,00 δ"
  ],
  "bonne": 1,
  "explication": "R = +1 − [[1|1]] = 0 : l'œil est emmétrope.\nAjouter au lieu de retrancher donnerait +2 δ ; oublier la distance donnerait +1 δ.",
  "indice": "Retire de la vergence du verre celle de la distance de travail, [[1|d]], avec d en mètres."
},
{
  "id": "U43-075",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "entrainement": true,
    "difficulte": "moyen",
  "type": "calcul",
  "question": "Un verre de −5,00 δ est décentré de 4 mm. Quel est l'effet prismatique en dioptries prismatiques ?",
  "reponse": {
    "valeur": 2,
    "unite": "Δ",
    "decimales": 0,
    "signe": false
  },
  "explication": "Règle de Prentice : P = décentrement (cm) × |vergence| = 0,4 × 5 = 2 Δ. Il faut convertir les 4 mm en 0,4 cm avant de multiplier.",
  "indice": "P (Δ) = décentrement en cm × vergence en dioptries. Convertis d'abord les millimètres en centimètres."
},
{
  "id": "U43-076",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Une lentille L₁ de focale image 100 mm est suivie, à 150 mm, d'une lentille L₂ de focale image 50 mm. Un objet est placé à 150 mm devant L₁. Calcule O₂A', la position de l'image finale par rapport à L₂ (en mm, mesure algébrique, sens de la lumière positif, arrondie au dixième).",
  "reponse": {
    "valeur": 37.5,
    "unite": "mm",
    "decimales": 1,
    "signe": true
  },
  "explication": "L₁ : [[1|O₁A₁]] = [[1|100]] + [[1|−150]] = [[3|300]] − [[2|300]] = [[1|300]]\nL'image intermédiaire est à +300 mm de L₁, soit 150 mm après L₂. Pour L₂, c'est un objet virtuel : O₂A₁ = +150 mm.\nL₂ : [[1|O₂A']] = [[1|50]] + [[1|150]] = [[3|150]] + [[1|150]] = [[4|150]]\nDonc O₂A' = +37,5 mm.\nTraiter A₁ comme un objet réel (O₂A₁ = −150 mm) donnerait +75 mm, faux.",
  "indice": "Deux conjugaisons à la suite. Calcule A₁ avec L₁, puis repère-le par rapport à L₂ : il est après L₂ ou avant ?"
},
{
  "id": "U43-077",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Dans une chaîne de deux lentilles, l'image A₁ donnée par L₁ se forme 20 mm derrière L₂. Pour L₂, le point A₁ est :",
  "choix": [
    "Un objet réel",
    "Un objet virtuel",
    "Une image réelle",
    "Un objet à l'infini"
  ],
  "bonne": 1,
  "explication": "Un objet est réel s'il est avant la lentille (côté d'où arrive la lumière), virtuel s'il est après. Les rayons issus de L₁ convergeraient vers A₁, mais L₂ les intercepte avant : A₁ est un objet virtuel pour L₂, avec O₂A₁ = +20 mm.",
  "indice": "Compare la position de A₁ à celle de L₂ dans le sens de la lumière."
},
{
  "id": "U43-078",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Deux lentilles minces se suivent, de grandissements γ₁ = −0,5 et γ₂ = −6. Que valent le grandissement total et le sens de l'image finale ?",
  "choix": [
    "γ = −6,5 : image renversée",
    "γ = −3 : image renversée",
    "γ = +3 : image droite",
    "γ = +0,083 : image droite"
  ],
  "bonne": 2,
  "explication": "Dans une chaîne, les grandissements se multiplient : γ = γ₁ × γ₂ = (−0,5) × (−6) = +3. Le signe est positif : l'image finale est droite (deux renversements s'annulent). Additionner les grandissements est une erreur fréquente.",
  "indice": "Les grandissements se multiplient, ils ne s'additionnent pas. Regarde le signe du produit."
},
{
  "id": "U43-079",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Une lentille de +6 δ et une lentille de −2 δ sont séparées par 100 mm d'air. Quelle est la vergence du système (en δ, arrondie au dixième) ?",
  "reponse": {
    "valeur": 5.2,
    "unite": "δ",
    "decimales": 1,
    "signe": true
  },
  "explication": "Formule de Gullstrand, avec e en mètres : V = V₁ + V₂ − e·V₁·V₂ = 6 − 2 − 0,1 × 6 × (−2) = 4 + 1,2 = +5,2 δ. Additionner simplement les vergences (4 δ) n'est valable que pour des lentilles accolées (e = 0).",
  "indice": "V = V₁ + V₂ − e·V₁·V₂, avec e en mètres. Attention au signe de V₂."
},
{
  "id": "U43-080",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Un ménisque en verre d'indice 1,5 a une face avant de rayon +50 mm et une face arrière de rayon +100 mm (les deux centres de courbure sont du côté de la sortie de la lumière). Sa vergence vaut :",
  "choix": [
    "+15 δ",
    "−5 δ",
    "+5 δ",
    "+10 δ"
  ],
  "bonne": 2,
  "explication": "V = (n − 1)([[1|R₁]] − [[1|R₂]]) = 0,5 × ([[1|0,05]] − [[1|0,1]])\nV = 0,5 × (20 − 10) = +5 δ\nLes deux rayons ont le même signe : les effets des deux faces se retranchent. Mettre un signe + entre les deux termes donnerait +15 δ, et ne regarder que la première face +10 δ.",
  "indice": "Garde les signes des rayons dans la formule : V = (n − 1)([[1|R₁]] − [[1|R₂]]), rayons en mètres."
},
{
  "id": "U43-081",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Une lentille divergente de vergence −4 δ reçoit un faisceau parallèle à son axe. Où se trouve son foyer image F' ?",
  "choix": [
    "À 250 mm avant la lentille (F' est virtuel)",
    "À 250 mm après la lentille",
    "À 400 mm avant la lentille",
    "Il n'y a pas de foyer image"
  ],
  "bonne": 0,
  "explication": "f' = [[1|V]] = [[1|−4]] = −0,25 m = −250 mm\nLe signe négatif place F' avant la lentille, du côté d'où arrive la lumière : les rayons émergents divergent et semblent venir de ce point. C'est un foyer virtuel, mais il existe bien.",
  "indice": "f' = [[1|V]], puis regarde le signe : positif = après la lentille, négatif = avant."
},
{
  "id": "U43-082",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Un hypermétrope de +3 δ, sans lunettes, regarde dans un viseur dont l'image finale est à 40 cm devant son œil. Quelle accommodation lui faut-il (en δ) ?",
  "reponse": {
    "valeur": 5.5,
    "unite": "δ",
    "decimales": 1,
    "signe": false
  },
  "explication": "Pour voir net à 40 cm : [[1|0,4]] = 2,5 δ.\nIl faut en plus 3 δ simplement pour ramener sur la rétine l'image d'un objet à l'infini (son remotum est derrière l'œil).\nA = 2,5 + 3 = 5,5 δ\nUn myope de −3 δ, lui, ne verrait pas net cette image : son remotum est à 33 cm, et l'accommodation ne permet pas de voir plus loin que le remotum.",
  "indice": "A = [[1|d]] + R, avec R la réfraction algébrique de l'œil (positive pour un hypermétrope)."
},
{
  "id": "U43-083",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un hypermétrope de +2,00 δ, sans lunettes, regarde dans un instrument réglé pour un emmétrope (image finale à l'infini). Que doit-il faire pour voir net ?",
  "choix": [
    "Accommoder de 2 δ",
    "Rien : il voit net sans effort comme un emmétrope",
    "Accommoder de 0,5 δ",
    "Rien faire, mais il ne verra jamais net à l'infini"
  ],
  "bonne": 0,
  "explication": "Son remotum est derrière l'œil : sans accommoder, l'image d'un objet à l'infini se forme derrière la rétine. Il doit fournir +2 δ d'accommodation pour la ramener dessus. Ce que l'emmétrope ne fait pas, car son remotum est à l'infini.",
  "indice": "Où est le remotum d'un hypermétrope par rapport à l'œil ? Que faut-il faire pour voir net un point à l'infini ?"
},
{
  "id": "U43-084",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Dans l'espace d'étude, un point de hauteur y dans le plan des champs voit une pupille circulaire de rayon 5 mm, à 200 mm du plan des champs, et un diaphragme de rayon 14 mm placé entre les deux, à 80 mm du plan des champs. Quel est le rayon du champ de pleine lumière dans le plan des champs, en mm ? (On ignore le reste de l'instrument.)",
  "reponse": {
    "valeur": 20,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "À 80 mm du plan des champs, soit [[80|200]] = 40 % du chemin vers la pupille, le faisceau issu du point y couvre 0,6·y ± 0,4 × 5 = 0,6·y ± 2.\nPleine lumière : tout le faisceau passe, donc 0,6·y + 2 ≤ 14, soit y ≤ [[12|0,6]] = 20 mm",
  "indice": "Pleine lumière : le faisceau entier, jusqu'au bord de la pupille, doit traverser le diaphragme de rayon 14 mm. À 80 mm du plan, la hauteur du bord du faisceau est 0,6·y + 0,4 × 5."
},
{
  "id": "U43-085",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Dans l'espace d'étude, un point de hauteur y dans le plan des champs voit une pupille circulaire de rayon 5 mm, à 200 mm du plan des champs, et un diaphragme de rayon 14 mm placé entre les deux, à 80 mm du plan des champs. Quel est le rayon du champ total dans le plan des champs ?",
  "choix": [
    "26,7 mm",
    "20,0 mm",
    "23,3 mm",
    "14,0 mm"
  ],
  "bonne": 0,
  "explication": "Champ total : un seul rayon, celui du bord de la pupille le plus favorable, doit encore passer. À 80 mm du plan, le faisceau couvre 0,6·y ± 2.\nOn veut 0,6·y − 2 ≤ 14, donc y ≤ [[16|0,6]] = 26,7 mm\n20 mm est le champ de pleine lumière, 23,3 mm ([[14|0,6]]) est le champ moyen, donné par le rayon qui passe au centre de la pupille.",
  "indice": "Pour le champ total, il suffit que le rayon le plus bas du faisceau passe : 0,6·y − 2 ≤ 14."
},
{
  "id": "U43-086",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Dans l'espace d'étude, un point du plan des champs voit une pupille circulaire de rayon 5 mm, à 200 mm du plan des champs, et un diaphragme de rayon 14 mm placé entre les deux, à 80 mm du plan des champs. On ferme l'iris pour réduire la pupille à un rayon de 2 mm, sans rien changer d'autre. Que deviennent les champs ?",
  "choix": [
    "Les deux champs grandissent",
    "Le champ de pleine lumière grandit, le champ total diminue : le champ de contour rétrécit",
    "Les deux champs diminuent",
    "Rien ne change : les champs ne dépendent pas de la pupille"
  ],
  "bonne": 1,
  "explication": "Pupille de 5 mm : pleine lumière 20 mm, champ total 26,7 mm. Pupille de 2 mm : 0,6·y + 0,8 ≤ 14 donne 22 mm, et 0,6·y − 0,8 ≤ 14 donne 24,7 mm. Une pupille plus petite rend le faisceau plus fin, donc moins facile à arrêter en partie : le champ de contour (la zone entre les deux) se resserre.",
  "indice": "Compare avec la pupille de 5 mm : un faisceau plus fin est-il plus ou moins facilement coupé par le diaphragme ?"
},
{
  "id": "U43-087",
  "epreuve": "U43",
  "theme": "Œil astigmate",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Un œil myope astigmate a son remotum à 500 mm pour le méridien horizontal et à 250 mm pour le méridien vertical. Il regarde sans accommoder un point situé à 350 mm. Que se passe-t-il ?",
  "choix": [
    "Les deux méridiens forment leur image devant la rétine",
    "Les deux méridiens forment leur image derrière la rétine",
    "Le point est net : 350 mm est entre les deux remotums",
    "L'image du méridien horizontal se forme derrière la rétine, celle du méridien vertical devant : les deux focales encadrent la rétine : le point reste flou"
  ],
  "bonne": 3,
  "explication": "Le méridien horizontal verrait net à 500 mm : le point à 350 mm est plus près, son image passe derrière la rétine. Le méridien vertical verrait net à 250 mm : le point à 350 mm est plus loin, son image est devant la rétine. Un point situé entre les deux remotums donne donc une image de part et d'autre de la rétine, et reste flou.",
  "indice": "Un point plus près que le remotum d'un méridien donne une image derrière la rétine pour ce méridien. Applique-le à chaque méridien."
},
{
  "id": "U43-088",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Un patient myope porte ses lunettes de −3,00 δ. En skiascopie à 50 cm, on obtient le point neutre en ajoutant +0,50 δ devant ses lunettes. Quelle est sa réfraction sans lunettes (en δ, au centième comme sur une ordonnance, distance verre-œil négligée) ?",
  "reponse": {
    "valeur": -4.5,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "Les deux verres cumulés donnent −3,00 + 0,50 = −2,50 δ.\nRéfraction de l'œil = verre au point neutre − [[1|d]] = −2,50 − 2,00 = −4,50 δ\nOublier la distance de travail donnerait −2,50 δ, ne pas ajouter les lunettes −2,00 δ.",
  "indice": "Additionne d'abord tous les verres devant l'œil, puis retranche la distance de travail [[1|d]]."
},
{
  "id": "U43-089",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "En skiascopie à 40 cm, quel verre neutralise un œil emmétrope ?",
  "choix": [
    "+2,50 δ",
    "−2,50 δ",
    "Aucun verre : l'œil emmétrope est déjà neutre",
    "+0,40 δ"
  ],
  "bonne": 0,
  "explication": "La distance de travail de 40 cm équivaut à [[1|0,4]] = 2,5 δ.\nRéfraction = verre − [[1|d]], donc pour R = 0 il faut un verre de +2,50 δ.\nSans verre, l'œil emmétrope n'est pas neutre : son remotum est à l'infini, au-delà de l'examinateur.",
  "indice": "Réfraction de l'œil = verre neutralisant − [[1|d]]. Cherche le verre pour R = 0."
},
{
  "id": "U43-090",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Chez un enfant hypermétrope, une skiascopie faite sans cycloplégie donne en général :",
  "choix": [
    "Une hypermétropie sous-estimée, car l'enfant accommode",
    "Une hypermétropie surestimée",
    "La valeur exacte, car la skiascopie est une mesure objective",
    "Une myopie, jamais une hypermétropie"
  ],
  "bonne": 0,
  "explication": "Sans cycloplégique, l'enfant accommode involontairement, ce qui masque une partie de l'hypermétropie (hypermétropie latente). Le point neutre trouvé est donc moins positif que la réfraction réelle. La cycloplégie bloque l'accommodation et donne la valeur complète.",
  "indice": "Que fait l'accommodation d'un enfant face à un œil trop court ?"
},
{
  "id": "U43-091",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Un verre sphéro-cylindrique +2,00 (−1,00) à 90° est décentré de 6 mm horizontalement. Quel est l'effet prismatique horizontal, en Δ ?",
  "reponse": {
    "valeur": 0.6,
    "unite": "Δ",
    "decimales": 1,
    "signe": false
  },
  "explication": "Un cylindre d'axe 90° agit dans le méridien horizontal : la puissance horizontale est +2,00 − 1,00 = +1,00 δ. Prentice : P = 0,6 cm × 1,00 = 0,6 Δ. Avec la seule sphère (+2,00 δ), on trouverait 1,2 Δ, ce qui est faux.",
  "indice": "Quelle est la puissance du verre dans le méridien horizontal ? Un cylindre d'axe 90° n'a aucun effet le long de son axe."
},
{
  "id": "U43-092",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Pourquoi pose-t-on le verre face arrière contre la butée du frontofocomètre ?",
  "choix": [
    "Parce que la puissance frontale image se mesure à partir du sommet de la face arrière",
    "Pour ne pas rayer la face avant, plus courbe",
    "Pour annuler l'effet prismatique",
    "Pour que l'axe du cylindre soit lu dans le bon sens"
  ],
  "bonne": 0,
  "explication": "Le frontofocomètre donne la puissance frontale image, c'est-à-dire la vergence mesurée depuis le sommet de la face arrière du verre. Pour des verres épais ou forts, la différence avec la face avant est mesurable : le sens de pose compte.",
  "indice": "Une puissance frontale image se rapporte à un point précis du verre. Lequel ?"
},
{
  "id": "U43-093",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Quelle aberration transforme l'image d'un point hors axe en une tache dissymétrique, en forme de comète ?",
  "choix": [
    "La coma",
    "L'aberration sphérique",
    "La distorsion",
    "L'aberration chromatique"
  ],
  "bonne": 0,
  "explication": "La coma affecte les points hors de l'axe : les rayons passant par les différentes zones de la lentille se croisent à des endroits différents, et la tache s'étire en queue de comète. L'aberration sphérique concerne les points sur l'axe, et donne une tache ronde.",
  "indice": "Elle porte le nom d'un astre à queue. Concerne-t-elle les points sur l'axe ou hors axe ?"
},
{
  "id": "U43-094",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "On ferme le diaphragme d'un objectif photo pour réduire l'aberration sphérique. Quel est le prix à payer ?",
  "choix": [
    "Plus de distorsion",
    "Une aberration chromatique plus forte",
    "Moins de lumière sur le capteur, et à très petite ouverture une image floutée par la diffraction",
    "Un champ plus petit"
  ],
  "bonne": 2,
  "explication": "Fermer le diaphragme n'utilise que le centre de la lentille, où l'aberration sphérique est faible. Mais la quantité de lumière diminue, et à très petite ouverture la diffraction agrandit la tache. D'où un compromis : une ouverture moyenne donne souvent la meilleure netteté.",
  "indice": "Fermer le diaphragme laisse passer moins de lumière. Que se passe-t-il aussi quand l'ouverture devient très petite ?"
},
{
  "id": "U43-095",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un objectif photographie une grille de lignes droites. Les lignes ressortent bombées vers l'extérieur du cadre. De quelle aberration s'agit-il ?",
  "choix": [
    "Une distorsion en barillet",
    "Une distorsion en coussinet",
    "La coma",
    "L'aberration sphérique"
  ],
  "bonne": 0,
  "explication": "La distorsion déforme l'image sans la rendre floue. En barillet, le grandissement diminue vers les bords et les lignes se bombent vers l'extérieur. En coussinet, c'est l'inverse : elles se creusent vers le centre.",
  "indice": "La forme rappelle un tonneau. Les images restent-elles nettes ?"
},
{
  "id": "U43-096",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Une platine repose sur un plan : elle peut glisser dans toutes les directions de ce plan et pivoter autour de la normale au plan, mais sans décoller. Quelle est la liaison avec le bâti, et combien de degrés de liberté laisse-t-elle ?",
  "choix": [
    "Rotule, 3 degrés de liberté",
    "Appui plan, 3 degrés de liberté",
    "Glissière, 1 degré de liberté",
    "Pivot glissant, 2 degrés de liberté"
  ],
  "bonne": 1,
  "explication": "Deux translations dans le plan plus une rotation autour de la normale : 3 degrés de liberté, c'est l'appui plan. La rotule a aussi 3 degrés de liberté, mais ce sont trois rotations.",
  "indice": "Compte séparément les translations et les rotations permises."
},
{
  "id": "U43-097",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un support de miroir peut s'orienter dans toutes les directions autour d'un point fixe, sans pouvoir se déplacer. Quels mouvements la liaison laisse-t-elle ?",
  "choix": [
    "3 rotations et aucune translation (rotule)",
    "3 translations et aucune rotation",
    "1 rotation et 1 translation",
    "3 rotations et 1 translation"
  ],
  "bonne": 0,
  "explication": "Une rotule laisse les trois rotations autour du centre de la sphère et supprime les trois translations : 3 degrés de liberté. Un pivot ne laisserait que l'une des trois rotations.",
  "indice": "Le point est fixe : quelles translations restent possibles ?"
},
{
  "id": "U43-098",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Une tige à section carrée coulisse dans un fourreau de même section carrée, sans jeu. Quelle est la liaison ?",
  "choix": [
    "Une glissière",
    "Un pivot glissant",
    "Une rotule",
    "Une hélicoïdale"
  ],
  "bonne": 0,
  "explication": "La forme carrée interdit toute rotation de la tige : il ne reste que la translation le long de l'axe, c'est-à-dire une glissière (1 degré de liberté). Avec une tige ronde dans un fourreau rond, la rotation resterait possible : ce serait un pivot glissant.",
  "indice": "Une tige ronde pourrait tourner. Et une tige carrée ?"
},
{
  "id": "U43-099",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une vis micrométrique a un pas de 0,5 mm. Son tambour est gradué en 50 divisions. De combien avance la vis quand on tourne le tambour d'une division (en micromètres) ?",
  "reponse": {
    "valeur": 10,
    "unite": "µm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Un tour fait avancer la vis de 0,5 mm = 500 µm.\nUne division est [[1|50]] de tour : [[500|50]] = 10 µm\nSans convertir, on trouverait 0,01 mm : c'est la même valeur, mais la réponse est demandée en micromètres.",
  "indice": "Un tour = un pas. Divise par le nombre de divisions, puis convertis en µm (1 mm = 1000 µm)."
},
{
  "id": "U43-100",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Le pignon d'une molette a 10 dents et engrène sur une roue de 40 dents solidaire de la vis de réglage. Quand on fait 4 tours de molette, la vis fait :",
  "choix": [
    "16 tours, dans le même sens",
    "1 tour, dans le sens contraire de la molette",
    "1 tour, dans le même sens",
    "4 tours, dans le sens contraire"
  ],
  "bonne": 1,
  "explication": "Rapport de réduction : [[10|40]] = [[1|4]]\nLa roue tourne 4 fois moins vite que le pignon : 4 tours de molette donnent 1 tour de vis. Deux roues dentées engrenées tournent en sens contraires. Un tel réducteur rend le réglage plus fin.",
  "indice": "Pendant que la petite roue fait un tour, combien de dents passent ? Et la grande roue avance de combien de tour ?"
},
{
  "id": "U43-101",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une loupe a une distance focale image de 40 mm. Quel est son grossissement commercial ?",
  "reponse": {
    "valeur": 6.25,
    "unite": "",
    "decimales": 2,
    "signe": false
  },
  "explication": "Vergence : V = [[1|0,040]] = 25 δ\nG = [[V|4]] = [[25|4]] = 6,25\nLe « 4 » vient de la distance conventionnelle de 25 cm ([[1|0,25]] = 4 δ). Confondre avec [[40|25]] = 1,6 est une erreur courante.",
  "indice": "G = [[V|4]], avec V en dioptries : convertis d'abord la focale en mètres."
},
{
  "id": "U43-102",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une lunette a un objectif de 80 mm de diamètre et un grossissement de 16. Quel est le diamètre de son cercle oculaire (pupille de sortie), en mm ?",
  "reponse": {
    "valeur": 5,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Diamètre du cercle oculaire = [[diamètre de l'objectif|G]] = [[80|16]] = 5 mm\nC'est la section du faisceau lumineux qui sort de l'oculaire : plus le grossissement est fort, plus il est fin.",
  "indice": "Le cercle oculaire est l'image de la monture de l'objectif par l'oculaire : son diamètre est D divisé par G."
},
{
  "id": "U43-103",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Une lunette dont le cercle oculaire mesure 5 mm est utilisée de jour, œil bien placé, la pupille de l'œil mesurant 3 mm. Quelle part de la lumière captée par l'objectif entre dans l'œil ?",
  "choix": [
    "Environ 36 %",
    "Environ 60 %",
    "100 %, car tout le faisceau sort de l'oculaire",
    "Environ 25 %"
  ],
  "bonne": 0,
  "explication": "Le faisceau sortant a 5 mm de diamètre, la pupille de l'œil 3 mm : c'est elle qui limite. La lumière est proportionnelle à la surface :\n([[3|5]])² = 0,36, soit 36 %\nLe rapport des diamètres (60 %) oublie de passer aux surfaces.",
  "indice": "L'œil joue le rôle de pupille de l'ensemble. La lumière varie comme la surface, c'est-à-dire comme le carré du diamètre."
},
{
  "id": "U43-104",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "À f/4, un appareil photo indique 1/500 s pour une exposition correcte. On ferme à f/8 sans changer la lumière de la scène. Quel temps de pose garde la même exposition ?",
  "choix": [
    "1/250 s",
    "1/125 s",
    "1/1000 s",
    "1/2000 s"
  ],
  "bonne": 1,
  "explication": "Passer de f/4 à f/8 double N, donc divise par 2 le diamètre de la pupille d'entrée et par 4 sa surface. Il entre 4 fois moins de lumière : il faut un temps de pose 4 fois plus long, 1/500 × 4 = 1/125 s.",
  "indice": "L'éclairement varie avec la surface de la pupille, c'est-à-dire avec le carré de son diamètre."
},
{
  "id": "U43-105",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Un objectif de 50 mm photographie une personne de 1,80 m située à 10 m. Quelle est la hauteur de son image sur le capteur, en mm, arrondie au dixième ? (Utilise la relation de conjugaison.)",
  "reponse": {
    "valeur": 9.0,
    "unite": "mm",
    "decimales": 1,
    "signe": false,
    "tolerance": 0.1
  },
  "explication": "[[1|OA']] = [[1|50]] + [[1|−10 000]] = [[199|10 000]]\nDonc OA' = 50,25 mm.\nGrandissement : γ = [[OA'|OA]] = [[50,25|−10 000]] = −0,00503\nHauteur de l'image : 1800 × 0,00503 ≈ 9,0 mm (image renversée)\nComme l'objet est loin, le résultat est très proche de [[1800 × 50|10 000]] = 9 mm.",
  "indice": "Calcule OA' avec la relation de conjugaison (OA = −10 000 mm), puis le grandissement [[OA'|OA]]."
},
{
  "id": "U43-106",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Un microscope a un intervalle optique de 160 mm, un objectif de focale 8 mm et un oculaire de focale 25 mm. Quel est son grossissement commercial, en valeur absolue ?",
  "reponse": {
    "valeur": 200,
    "unite": "",
    "decimales": 0,
    "signe": false
  },
  "explication": "Grandissement de l'objectif : ∣γ∣ = [[Δ|f'obj]] = [[160|8]] = 20\nGrossissement de l'oculaire : Goc = [[250|f'oc]] = [[250|25]] = 10\nGrossissement commercial : 20 × 10 = 200\nLes deux facteurs se multiplient.",
  "indice": "G = ∣γ objectif∣ × G oculaire, avec γ = [[Δ|f']] pour l'objectif et G = [[250|f']] (en mm) pour l'oculaire."
},
{
  "id": "U43-107",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Un appareil photo a un capteur de 36 mm de large et un objectif de 50 mm. Quel est l'angle de champ horizontal, en degrés, arrondi au dixième ?",
  "reponse": {
    "valeur": 39.6,
    "unite": "°",
    "decimales": 1,
    "signe": false
  },
  "explication": "Le demi-champ vérifie tan α = [[18|50]] = 0,36, donc α = 19,8°.\nL'angle de champ vaut 2α = 39,6°.\nDiviser 36 par 50 et convertir directement ne marche pas : la relation passe par la tangente.",
  "indice": "Dessine le triangle rectangle : [[demi-largeur du capteur|focale]] = tangente du demi-angle. Pense à doubler."
},
{
  "id": "U43-108",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Sur un appareil photo, on ferme le diaphragme de f/2 à f/8. Que devient la profondeur de champ ?",
  "choix": [
    "Elle augmente : une plus grande zone est nette",
    "Elle diminue : seul le sujet est net",
    "Elle ne change pas : elle dépend seulement de la focale",
    "Elle augmente, mais l'image devient plus lumineuse"
  ],
  "bonne": 0,
  "explication": "Un diaphragme plus fermé réduit le diamètre du faisceau, donc la tache de flou d'un objet hors du plan net : une zone plus profonde reste acceptable. Le prix est une image moins lumineuse, d'où un temps de pose plus long.",
  "indice": "Un faisceau plus fin donne une tache de flou plus petite pour les objets hors du plan de netteté."
},
{
  "id": "U43-109",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un miroir sphérique concave de rayon de courbure 600 mm reçoit un faisceau parallèle à son axe. Où converge-t-il ?",
  "choix": [
    "À 300 mm devant le miroir, au foyer",
    "À 600 mm devant le miroir",
    "À 300 mm derrière le miroir",
    "À 150 mm devant le miroir"
  ],
  "bonne": 0,
  "explication": "Pour un miroir sphérique, f = [[R|2]] = [[600|2]] = 300 mm\nLe faisceau est réfléchi : il converge devant le miroir, du côté d'où vient la lumière, à 300 mm. Le centre de courbure (600 mm) n'est pas le foyer.",
  "indice": "Le foyer d'un miroir sphérique est à mi-chemin entre le sommet et le centre de courbure."
},
{
  "id": "U43-110",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une lunette de Galilée est afocale : l'objectif convergent a une focale de 200 mm, l'oculaire divergent une focale de −50 mm. Quelle distance sépare les deux lentilles, en mm ?",
  "reponse": {
    "valeur": 150,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Afocal : le foyer image de l'objectif (à 200 mm après lui) doit coïncider avec le foyer objet de l'oculaire. Le foyer objet d'une lentille divergente est placé 50 mm après elle : l'oculaire est à 200 − 50 = 150 mm de l'objectif. Avec un oculaire convergent, la lunette de Kepler demanderait 200 + 50 = 250 mm.",
  "indice": "Où est le foyer objet d'une lentille divergente : avant ou après elle ?"
},
{
  "id": "U43-111",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Deux lentilles minces accolées ont pour focales images +100 mm et −200 mm. Quelle est la focale image de l'association, en mm ?",
  "reponse": {
    "valeur": 200,
    "unite": "mm",
    "decimales": 0,
    "signe": true
  },
  "explication": "Vergences : [[1|0,1]] = +10 δ et [[1|−0,2]] = −5 δ. Elles s'additionnent pour des lentilles accolées : +5 δ.\nf' = [[1|5]] = 0,2 m = +200 mm\nAdditionner les focales (−100 mm) est faux : ce sont les vergences qui s'ajoutent.",
  "indice": "Ce sont les vergences qui s'additionnent. Convertis d'abord chaque focale."
},
{
  "id": "U43-112",
  "epreuve": "U43",
  "theme": "Vergences et focales",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une lentille convergente de +25 δ doit donner une image à 100 mm derrière elle. Calcule OA, la position de l'objet par rapport à la lentille (en mm, mesure algébrique, arrondie au dixième).",
  "reponse": {
    "valeur": -66.7,
    "unite": "mm",
    "decimales": 1,
    "signe": true
  },
  "explication": "[[1|OA]] = [[1|OA']] − V = [[1|0,1]] − 25 = 10 − 25 = −15\nDonc OA = [[1|−15]] = −0,0667 m = −66,7 mm\nL'objet est à 66,7 mm devant la lentille, entre le foyer (40 mm) et 2f'. Le signe négatif indique un objet réel.",
  "indice": "[[1|OA']] − [[1|OA]] = V. Isole [[1|OA]], avec les distances en mètres."
},
{
  "id": "U43-113",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Une lunette astronomique est réglée pour un œil emmétrope (image intermédiaire au foyer objet de l'oculaire). Un hypermétrope de +2 δ, sans lunettes et sans accommoder, veut l'utiliser. Comment déplace-t-on l'oculaire ?",
  "choix": [
    "On l'éloigne de l'objectif",
    "On le rapproche de l'objectif",
    "On ne le déplace pas : il accommode",
    "On l'éloigne, mais seulement si l'objet est proche"
  ],
  "bonne": 0,
  "explication": "Pour un hypermétrope, l'image finale doit se former sur son remotum, derrière l'œil : le faisceau sortant doit être convergent. Pour cela, l'image intermédiaire doit être avant le foyer objet de l'oculaire, plus loin de l'oculaire que dans le réglage emmétrope : on éloigne l'oculaire de l'objectif. C'est l'inverse du myope.",
  "indice": "Le faisceau qui sort doit converger vers un point derrière l'œil. Pour une lentille, quel est le cas où l'objet est plus loin que le foyer ?"
},
{
  "id": "U43-114",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un presbyte emmétrope (proximum à 50 cm), sans lunettes, regarde dans un microscope. Entre quelles positions l'image finale doit-elle se trouver pour qu'il la voie nette ?",
  "choix": [
    "Entre 50 cm devant l'œil et l'infini",
    "Entre l'œil et 50 cm",
    "Uniquement à 50 cm",
    "Uniquement à l'infini"
  ],
  "bonne": 0,
  "explication": "L'œil voit net entre son remotum (ici l'infini, car emmétrope) et son proximum (50 cm). Il voit donc net toute image comprise entre 50 cm et l'infini, avec ou sans accommodation. Plus près que 50 cm, elle est floue.",
  "indice": "Un œil voit net entre son remotum et son proximum."
},
{
  "id": "U43-115",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Dans une lunette, le diaphragme de champ de l'oculaire, de diamètre 20 mm, se trouve dans le plan focal image de l'objectif, de focale 500 mm. Quel est le champ réel total, en degrés, arrondi au dixième ?",
  "reponse": {
    "valeur": 2.3,
    "unite": "°",
    "decimales": 1,
    "signe": false
  },
  "explication": "Le diaphragme de champ est la lucarne : son rayon (10 mm) est vu depuis l'objectif sous un demi-angle tel que\ntan α = [[10|500]] = 0,02, soit α = 1,15°\nLe champ réel total est 2α ≈ 2,3°. Il ne dépend que du diamètre de la lucarne et de la focale de l'objectif.",
  "indice": "Demi-champ : tan α = [[rayon de la lucarne|focale de l'objectif]]. Pense à doubler."
},
{
  "id": "U43-116",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Où faut-il placer l'œil pour profiter de toute la lumière et de tout le champ d'une lunette ?",
  "choix": [
    "Contre l'oculaire",
    "Au cercle oculaire (pupille de sortie)",
    "Au foyer objet de l'oculaire",
    "Sur l'image intermédiaire"
  ],
  "bonne": 1,
  "explication": "Tous les rayons qui traversent l'instrument passent par le cercle oculaire, image de la pupille par la partie du système qui la suit. Placé là, l'œil reçoit toute la lumière et voit tout le champ. Trop près ou trop loin, la pupille de l'œil coupe une partie du faisceau.",
  "indice": "Où est le plus étroit du faisceau qui sort de l'oculaire ?"
},
{
  "id": "U43-117",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "question": "Dans l'espace d'étude, un point du plan des champs voit une pupille circulaire de rayon 5 mm, à 200 mm du plan des champs, et un diaphragme de rayon 14 mm placé entre les deux, à 80 mm du plan des champs (champ de pleine lumière 20 mm, champ total 26,7 mm). On déplace le diaphragme jusqu'à le mettre dans le plan des champs. Que valent alors les champs ?",
  "choix": [
    "Pleine lumière et champ total valent tous les deux 14 mm : plus de champ de contour",
    "Pleine lumière 14 mm, champ total 20 mm",
    "Pleine lumière 20 mm, champ total 26,7 mm : inchangés",
    "Pleine lumière 14 mm, champ total plus grand que 100 mm"
  ],
  "bonne": 0,
  "explication": "Un diaphragme situé dans le plan des champs coupe nettement le faisceau de chaque point : il est entièrement passé ou entièrement arrêté. Le champ de pleine lumière et le champ total sont tous deux égaux au rayon du diaphragme, 14 mm, et le champ de contour disparaît.",
  "indice": "Un diaphragme dans le plan des champs agit comme une lucarne. Que fait-il du faisceau d'un point du plan ?"
},
{
  "id": "U43-118",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Un solide libre dans l'espace a 6 degrés de liberté. Combien en supprime une liaison pivot ?",
  "choix": [
    "1",
    "3",
    "5",
    "4"
  ],
  "bonne": 2,
  "explication": "Une pivot ne laisse qu'une rotation, autour de son axe : elle supprime 6 − 1 = 5 degrés de liberté (les 3 translations et 2 rotations). Il faut distinguer ce que la liaison laisse (1) de ce qu'elle supprime (5).",
  "indice": "Combien de mouvements la pivot laisse-t-elle libres ? Retire-les de 6."
},
{
  "id": "U43-119",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Après réglage, on serre la bague de blocage d'un barillet vissé dans son tube. Quelle est la liaison devenue entre le barillet et le tube ?",
  "choix": [
    "Une hélicoïdale",
    "Un encastrement (0 degré de liberté)",
    "Un pivot glissant",
    "Une glissière"
  ],
  "bonne": 1,
  "explication": "Avant le serrage, le barillet pouvait avancer en tournant : liaison hélicoïdale. Une fois bloqué, il ne peut plus bouger du tout par rapport au tube : encastrement, aucun degré de liberté.",
  "indice": "Une fois la bague serrée, le barillet peut-il encore bouger ?"
},
{
  "id": "U43-120",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une bague filetée a un pas de 1,25 mm. De quel angle faut-il la tourner, en degrés, pour déplacer l'oculaire de 0,5 mm ?",
  "reponse": {
    "valeur": 144,
    "unite": "°",
    "decimales": 0,
    "signe": false
  },
  "explication": "Un tour (360°) déplace de 1,25 mm.\nFraction de tour = [[0,5|1,25]] = 0,4 tour\nAngle : 0,4 × 360 = 144°",
  "indice": "Fraction de tour = [[déplacement|pas]]. Multiplie ensuite par 360°."
},
{
  "id": "U43-121",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "entrainement": true,
  "difficulte": "difficile",
  "type": "calcul",
  "question": "Une molette porte un pignon de 12 dents qui engrène sur une roue de 36 dents. La roue est solidaire d'une vis de pas 1,5 mm. De combien avance l'écrou pour un tour complet de la molette (en mm, arrondie au dixième) ?",
  "reponse": {
    "valeur": 0.5,
    "unite": "mm",
    "decimales": 1,
    "signe": false
  },
  "explication": "La roue de 36 dents tourne [[12|36]] = [[1|3]] de tour quand la molette fait un tour.\nLa vis de pas 1,5 mm avance de [[1|3]] × 1,5 = 0,5 mm\nDeux transformations se suivent : réduction par engrenage, puis rotation en translation.",
  "indice": "Première étape : fraction de tour de la roue. Deuxième : avance de la vis pour cette fraction de tour."
},
{
  "id": "U43-122",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "En skiascopie à 50 cm, on neutralise le méridien horizontal avec +1,50 δ et le méridien vertical avec +3,00 δ. Quelle est la valeur de l'astigmatisme (différence de réfraction entre les deux méridiens), en δ, écrite au centième ?",
  "reponse": {
    "valeur": 1.5,
    "unite": "δ",
    "decimales": 2,
    "signe": false
  },
  "explication": "Réfraction de chaque méridien : verre − 2,00 δ, soit −0,50 δ à l'horizontale et +1,00 δ à la verticale. L'écart est de 1,50 δ : la distance de travail s'élimine dans la différence, c'est donc aussi l'écart entre les deux verres neutralisants.",
  "indice": "Calcule la réfraction de chaque méridien, puis leur différence. La distance de travail joue-t-elle encore ?"
},
{
  "id": "U43-123",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Au frontofocomètre, les lignes de la mire sont nettes à +2,50 δ pour un méridien, puis à +1,00 δ pour l'autre. Quelle écriture en cylindre négatif convient (sans l'axe) ?",
  "choix": [
    "+2,50 (−1,50)",
    "+1,00 (+1,50)",
    "+2,50 (+1,50)",
    "+1,00 (−1,50)"
  ],
  "bonne": 0,
  "explication": "En cylindre négatif, la sphère est la puissance la plus positive (+2,50 δ) et le cylindre est la différence, négative : 1,00 − 2,50 = −1,50 δ. L'écriture « +1,00 (+1,50) » est la même correction en cylindre positif.",
  "indice": "En cylindre négatif, la sphère est le méridien le plus positif. Le cylindre est ce qu'il faut retrancher pour obtenir l'autre."
},
{
  "id": "U43-124",
  "epreuve": "U43",
  "theme": "Œil astigmate",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Un œil astigmate est corrigé par +1,00 (−2,00) à 90°. Quelle sphère place le cercle de moindre diffusion sur la rétine, en δ, écrite au centième ?",
  "reponse": {
    "valeur": 0,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "Le cercle de moindre diffusion est à mi-chemin entre les deux focales : il correspond à la sphère moyenne S + [[C|2]] = +1,00 + [[−2,00|2]] = 0,00 δ\nCette puissance place le cercle de moindre diffusion, entre les deux lignes focales, sur la rétine. Ne garder que la sphère donnerait +1,00 δ.",
  "indice": "Le cercle de moindre diffusion est à mi-chemin entre les deux focales : sphère + la moitié du cylindre, signes compris."
},
{
  "id": "U43-125",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "entrainement": true,
  "difficulte": "moyen",
  "question": "Pourquoi un miroir ne présente-t-il pas d'aberration chromatique ?",
  "choix": [
    "Parce que la réflexion ne dépend pas de la longueur d'onde",
    "Parce qu'il est toujours parabolique",
    "Parce qu'il ne réfléchit que la lumière verte",
    "Parce qu'il est exempt de toute aberration"
  ],
  "bonne": 0,
  "explication": "L'aberration chromatique vient de la dispersion : l'indice du verre change avec la couleur, donc la réfraction aussi. Un miroir réfléchit toutes les couleurs de la même manière. C'est pourquoi les grands télescopes en utilisent. Il garde en revanche l'aberration sphérique s'il est sphérique.",
  "indice": "Quel phénomène physique cause l'aberration chromatique : la réflexion ou la réfraction ?"
}
);
