// ==============================================================
//  BANQUE DE QUESTIONS — c'est ICI que tu ajoutes tes questions.
//
//  Chaque question est un bloc entre { } avec :
//    theme       : le thème (sert au filtre du QCM)
//    question    : l'énoncé
//    choix       : la liste des réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse, en comptant à partir de 0
//                  (0 = la 1re, 1 = la 2e, 2 = la 3e, 3 = la 4e)
//    explication : ce qui s'affiche après la réponse
//
//  Pour ajouter une question : copie un bloc { ... }, colle-le
//  avant le "];" final, change le texte. N'oublie pas la virgule
//  entre deux blocs.
// ==============================================================

const QUESTIONS = [
  {
    theme: "Calculs",
    question: "Transposez : −1,00 (−2,00) 30°",
    choix: ["−3,00 (+2,00) 120°", "+1,00 (+2,00) 120°", "−3,00 (+2,00) 30°", "+1,00 (−2,00) 120°"],
    bonne: 0,
    explication: "Sphère : −1,00 + (−2,00) = −3,00. Cylindre : signe inversé → +2,00. Axe : 30° + 90° = 120°."
  },
  {
    theme: "Calculs",
    question: "Quel est l'équivalent sphérique de +1,00 (−2,00) 90° ?",
    choix: ["−1,00", "0,00", "+1,00", "−2,00"],
    bonne: 1,
    explication: "ES = sphère + cylindre ÷ 2 = +1,00 + (−1,00) = 0,00."
  },
  {
    theme: "Calculs",
    question: "Un verre de +6,00 D est décentré de 3 mm. Quel effet prismatique induit-il ?",
    choix: ["0,18 Δ", "18 Δ", "1,8 Δ", "2,0 Δ"],
    bonne: 2,
    explication: "Prentice : P = c (cm) × F = 0,3 × 6 = 1,8 Δ. Attention à bien convertir les mm en cm."
  },
  {
    theme: "Calculs",
    question: "Un patient regarde 5 mm sous le centre optique d'un verre de +4,00 D. Quelle est l'orientation de la base du prisme induit ?",
    choix: ["Base inférieure", "Base supérieure", "Base nasale", "Base temporale"],
    bonne: 1,
    explication: "Verre convexe : la base est tournée vers le centre optique. Le point est sous le centre → base supérieure (2 Δ)."
  },
  {
    theme: "Calculs",
    question: "Un hypermétrope porte +8,00 D en lunettes à 12 mm de l'œil. Quelle puissance de lentille lui faut-il (arrondie au 0,25) ?",
    choix: ["+7,25", "+8,00", "+8,75", "+9,50"],
    bonne: 2,
    explication: "F' = F / (1 − d·F) = 8 / (1 − 0,012 × 8) = 8 / 0,904 ≈ +8,85 → +8,75. Un hypermétrope a besoin de PLUS de puissance en lentilles."
  },
  {
    theme: "Réfraction",
    question: "Où se situe le punctum remotum d'un myope de −4,00 D non corrigé ?",
    choix: ["À 4 m", "À 40 cm", "À 25 cm", "À l'infini"],
    bonne: 2,
    explication: "PR = 1 / 4 = 0,25 m, soit 25 cm devant l'œil."
  },
  {
    theme: "Réfraction",
    question: "Selon la formule moyenne de Hofstetter, quelle est l'amplitude d'accommodation à 40 ans ?",
    choix: ["4,5 D", "6,5 D", "8,5 D", "10,5 D"],
    bonne: 1,
    explication: "Amplitude moyenne = 18,5 − 0,3 × âge = 18,5 − 12 = 6,5 D."
  },
  {
    theme: "Réfraction",
    question: "Au test duochrome (rouge-vert), le patient voit plus net sur le rouge. Que faites-vous ?",
    choix: ["Ajouter −0,25 D", "Ajouter +0,25 D", "Tourner l'axe du cylindre", "Rien, l'équilibre est bon"],
    bonne: 0,
    explication: "Moyen mnémotechnique « RAM » : Rouge → Ajouter du Moins. Le patient est sous-corrigé en négatif (ou sur-corrigé en positif)."
  },
  {
    theme: "Réfraction",
    question: "À quoi servent les cylindres croisés de Jackson en réfraction subjective ?",
    choix: ["Mesurer l'acuité visuelle", "Équilibrer les deux yeux", "Affiner l'axe et la puissance du cylindre", "Mesurer l'écart pupillaire"],
    bonne: 2,
    explication: "Le cylindre croisé sert à affiner d'abord l'axe, puis la puissance du cylindre."
  },
  {
    theme: "Réfraction",
    question: "Un astigmatisme « conforme à la règle » correspond, en cylindre négatif, à un axe proche de :",
    choix: ["45°", "90°", "135°", "180°"],
    bonne: 3,
    explication: "Conforme à la règle : le méridien vertical est le plus puissant, donc le cylindre négatif est à axe proche de 180°."
  },
  {
    theme: "Contactologie",
    question: "Un myope passe des lunettes aux lentilles. Par rapport aux lunettes, il doit accommoder :",
    choix: ["Davantage", "Moins", "Autant", "Il n'accommode plus"],
    bonne: 0,
    explication: "En lentilles, un myope accommode davantage qu'en lunettes. Un presbyte débutant myope peut donc ressentir plus tôt une gêne en vision de près en lentilles."
  },

  // ---------------- Contactologie ----------------
  {
    theme: "Contactologie",
    question: "Un myope porte −6,00 D en lunettes à 12 mm. Quelle puissance de lentille lui prescrire (arrondie au 0,25) ?",
    choix: ["−6,50", "−6,00", "−5,50", "−5,00"],
    bonne: 2,
    explication: "F' = −6 / (1 + 0,012 × 6) = −6 / 1,072 ≈ −5,60 → −5,50. Un myope a besoin de MOINS de puissance en lentilles."
  },
  {
    theme: "Contactologie",
    question: "Sur une lentille rigide, diminuer le rayon de courbure de la face interne rend l'adaptation :",
    choix: ["Plus serrée", "Plus plate", "Inchangée", "Plus mobile"],
    bonne: 0,
    explication: "Un rayon plus petit = une lentille plus cambrée, donc plus serrée sur la cornée."
  },
  {
    theme: "Contactologie",
    question: "À la fluorescéine, une lentille rigide montre une accumulation de fluo au centre et un appui en périphérie. L'adaptation est :",
    choix: ["Plate", "Parallèle", "Serrée", "Décentrée en bas"],
    bonne: 2,
    explication: "Fluo au centre (« flaque ») + touche périphérique = lentille trop serrée. À l'inverse, une zone sombre centrale (appui central) = lentille plate."
  },
  {
    theme: "Contactologie",
    question: "Sur une lentille torique, le repère a tourné de 10° vers la GAUCHE de l'observateur. Comment corriger l'axe commandé ?",
    choix: ["Ajouter 10° à l'axe", "Retirer 10° à l'axe", "Ajouter 90° à l'axe", "Ne rien changer"],
    bonne: 0,
    explication: "Règle « LARS » (Left Add, Right Subtract), vue de l'observateur : rotation à gauche → on ajoute ; à droite → on soustrait."
  },
  {
    theme: "Contactologie",
    question: "La transmissibilité à l'oxygène d'une lentille (Dk/e) diminue quand :",
    choix: ["L'épaisseur de la lentille augmente", "Le Dk du matériau augmente", "Le diamètre diminue", "La lentille est neuve"],
    bonne: 0,
    explication: "Dk/e = perméabilité du matériau ÷ épaisseur. Plus la lentille est épaisse, moins l'oxygène passe."
  },
  {
    theme: "Contactologie",
    question: "Pour un hydrogel classique (sans silicone), la perméabilité à l'oxygène augmente avec :",
    choix: ["La teneur en eau", "Le diamètre", "La puissance négative", "La rigidité du matériau"],
    bonne: 0,
    explication: "Dans un hydrogel classique, l'oxygène passe par l'eau : plus d'eau = plus de Dk. Les silicones-hydrogels échappent à cette règle grâce au silicone."
  },
  {
    theme: "Contactologie",
    question: "Quel est le principal facteur de risque de kératite à Acanthamoeba chez un porteur de lentilles ?",
    choix: ["Le contact des lentilles avec l'eau (robinet, piscine, douche)", "Le port de lunettes de soleil", "Une myopie forte", "Le port de lentilles journalières"],
    bonne: 0,
    explication: "Acanthamoeba vit dans l'eau. Les lentilles ne doivent jamais être rincées ni conservées dans l'eau du robinet, ni portées à la piscine sans protection."
  },
  {
    theme: "Contactologie",
    question: "La conjonctivite gigantopapillaire chez un porteur de lentilles est surtout liée à :",
    choix: ["Une sécheresse due au chauffage", "Une infection bactérienne aiguë", "Les dépôts sur la lentille et le frottement de la paupière", "Une erreur de puissance de la lentille"],
    bonne: 2,
    explication: "C'est une réaction inflammatoire de la conjonctive tarsale supérieure aux dépôts (surtout protéiques) et au frottement mécanique. On renouvelle plus souvent les lentilles, voire on passe en journalières."
  },
  {
    theme: "Contactologie",
    question: "En monovision, quel œil est généralement corrigé pour la vision de loin ?",
    choix: ["L'œil dominant", "L'œil non dominant", "L'œil le plus myope", "Les deux, avec une addition"],
    bonne: 0,
    explication: "Par convention, l'œil dominant voit de loin et l'œil non dominant de près."
  },
  {
    theme: "Contactologie",
    question: "Posée sur le bout du doigt, une lentille souple a les bords qui s'évasent vers l'extérieur. Cela signifie :",
    choix: ["Elle est à l'envers", "Elle est à l'endroit", "Elle est déchirée", "Elle est trop sèche"],
    bonne: 0,
    explication: "À l'endroit, la lentille forme une coupelle aux bords bien droits. Des bords évasés (forme de soucoupe) = lentille retournée."
  },

  // ---------------- Vision binoculaire ----------------
  {
    theme: "Vision binoculaire",
    question: "Au cover test unilatéral, quand on cache un œil, l'autre œil bouge pour reprendre la fixation. Il s'agit :",
    choix: ["D'une hétérophorie", "D'une hétérotropie (strabisme manifeste)", "D'une orthophorie", "D'une insuffisance d'accommodation"],
    bonne: 1,
    explication: "Si l'œil NON caché bouge, c'est qu'il ne fixait pas : la déviation est manifeste (tropie). La phorie se révèle à la découverte ou au cover test alterné."
  },
  {
    theme: "Vision binoculaire",
    question: "Au cover test unilatéral, l'œil non caché fait un mouvement vers l'intérieur (vers le nez) pour fixer. Cet œil était en :",
    choix: ["Ésotropie", "Exotropie", "Hypertropie", "Orthotropie"],
    bonne: 1,
    explication: "Pour aller vers le nez, l'œil était dévié vers l'extérieur : c'est une exotropie."
  },
  {
    theme: "Vision binoculaire",
    question: "Quelle est la valeur moyenne habituelle du rapport AC/A ?",
    choix: ["Environ 1 Δ/D", "Environ 4 Δ/D", "Environ 10 Δ/D", "Environ 15 Δ/D"],
    bonne: 1,
    explication: "La norme se situe autour de 3 à 5 Δ/D. Un AC/A élevé oriente vers un excès de convergence, un AC/A bas vers une insuffisance de convergence."
  },
  {
    theme: "Vision binoculaire",
    question: "Selon le critère de Sheard, la réserve fusionnelle compensatrice doit être au moins :",
    choix: ["Égale à la phorie", "Le double de la phorie", "Le triple de la phorie", "La moitié de la phorie"],
    bonne: 1,
    explication: "Sheard : réserve compensatrice ≥ 2 × phorie. Sinon, la phorie risque d'être mal compensée et symptomatique."
  },
  {
    theme: "Vision binoculaire",
    question: "Un tableau typique d'insuffisance de convergence associe :",
    choix: ["Une ésophorie plus forte de près", "Une exophorie plus forte de près que de loin et un PPC éloigné", "Une exophorie plus forte de loin", "Une orthophorie et un PPC à 5 cm"],
    bonne: 1,
    explication: "Insuffisance de convergence : exophorie de près > de loin, punctum proximum de convergence éloigné, réserves convergentes faibles, souvent un AC/A bas."
  },
  {
    theme: "Vision binoculaire",
    question: "Pour soulager une exophorie décompensée avec un prisme, on oriente sa base :",
    choix: ["En interne (nasale)", "En externe (temporale)", "En haut", "En bas"],
    bonne: 0,
    explication: "Exo → base interne ; éso → base externe. Le prisme compense la déviation sans demander d'effort fusionnel."
  },
  {
    theme: "Vision binoculaire",
    question: "Une valeur de punctum proximum de convergence considérée comme normale est :",
    choix: ["Moins de 10 cm", "Entre 15 et 20 cm", "Environ 30 cm", "À l'infini"],
    bonne: 0,
    explication: "Un PPC normal est proche (environ 5 à 10 cm). Au-delà de 10 cm, on suspecte une insuffisance de convergence."
  },

  // ---------------- Réfraction / optique ----------------
  {
    theme: "Réfraction",
    question: "Pourquoi utilise-t-on le brouillage en réfraction subjective ?",
    choix: ["Pour relâcher l'accommodation", "Pour mesurer l'astigmatisme", "Pour tester la vision des couleurs", "Pour stimuler la convergence"],
    bonne: 0,
    explication: "En ajoutant du positif, on rend l'image floue : le patient n'a plus intérêt à accommoder. Indispensable pour ne pas sous-corriger un hypermétrope."
  },
  {
    theme: "Réfraction",
    question: "Quelle est la puissance de la correction −1,00 (−2,00) 180° dans le méridien vertical (90°) ?",
    choix: ["−1,00 D", "−2,00 D", "−3,00 D", "+1,00 D"],
    bonne: 2,
    explication: "Dans l'axe du cylindre (180°), seule la sphère agit : −1,00. À 90° de l'axe, on ajoute le cylindre : −1,00 + (−2,00) = −3,00."
  },
  {
    theme: "Réfraction",
    question: "Une acuité visuelle de 5/10 correspond en logMAR à :",
    choix: ["0,0", "0,3", "0,5", "1,0"],
    bonne: 1,
    explication: "logMAR = log10(1 / acuité décimale) = log10(2) ≈ 0,3. Et 10/10 = 0,0 logMAR."
  },
  {
    theme: "Calculs",
    question: "Une lentille convergente a une distance focale de 50 cm. Quelle est sa puissance ?",
    choix: ["+0,50 D", "+2,00 D", "+5,00 D", "+50 D"],
    bonne: 1,
    explication: "P = 1 / f (en mètres) = 1 / 0,5 = +2,00 D."
  },
  {
    theme: "Calculs",
    question: "Un presbyte emmétrope a 2,00 D d'amplitude et lit à 40 cm. On lui laisse la moitié de son amplitude en réserve. Quelle addition ?",
    choix: ["+1,00", "+1,50", "+2,00", "+2,50"],
    bonne: 1,
    explication: "Besoin à 40 cm : 1 / 0,4 = 2,50 D. Il utilise la moitié de son amplitude : 1,00 D. Addition = 2,50 − 1,00 = +1,50."
  }
];
