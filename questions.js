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
  }
];
