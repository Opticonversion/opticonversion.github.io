// ==============================================================
//  BANQUE DE QUESTIONS — c'est ICI que tu ajoutes tes questions.
//
//  1) La liste EPREUVES décrit les épreuves du BTS OL.
//  2) La liste QUESTIONS contient les questions. Chaque question a :
//       epreuve     : le code de l'épreuve (ex. "U5")
//       theme       : le thème dans l'épreuve (sert au filtre)
//       question    : l'énoncé
//       choix       : 4 réponses proposées
//       bonne       : le NUMÉRO de la bonne réponse, en comptant à partir de 0
//                     (0 = la 1re, 1 = la 2e, 2 = la 3e, 3 = la 4e)
//       explication : ce qui s'affiche après la réponse
//
//  Pour ajouter une question : copie un bloc { ... }, colle-le
//  avant le "];" final, change le texte. Virgule entre deux blocs.
//  Règle : calculatrice interdite à l'examen → des chiffres qui tombent juste.
// ==============================================================

const EPREUVES = [
  { code: "U41", nom: "Mathématiques", detail: "E4 · CCF" },
  { code: "U42", nom: "Optique géométrique et physique", court: "OGP", detail: "E4 · écrit 2 h · coef 3" },
  { code: "U43", nom: "Étude technique des systèmes optiques", court: "ETSO", detail: "E4 · écrit 2 h · coef 3" },
  { code: "U5",  nom: "Analyse de la vision", detail: "E5 · écrit 3 h · coef 6" },
  { code: "U3",  nom: "Économie et gestion de l'entreprise", detail: "E3 · écrit 3 h · coef 5" }
];

const QUESTIONS = [

  // ================= U5 · ANALYSE DE LA VISION =================

  // ---------- Test de Worth (tombé 4 années sur 4) ----------
  {
    epreuve: "U5", theme: "Worth",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 2 symboles rouges. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie", "Vision binoculaire normale"],
    bonne: 0,
    explication: "Seul l'œil qui porte le filtre rouge (OD) perçoit : il voit le symbole rouge et le symbole blanc, qui lui paraît rouge. Rien n'arrive de l'OG, qui est neutralisé."
  },
  {
    epreuve: "U5", theme: "Worth",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 3 symboles verts. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie croisée", "Dominance de l'OD"],
    bonne: 1,
    explication: "Seul l'œil au filtre vert (OG) perçoit : les 2 symboles verts plus le blanc, vu vert. L'OD est neutralisé."
  },
  {
    epreuve: "U5", theme: "Worth",
    question: "Au test de Worth, le sujet voit 5 symboles. Que met-on en évidence ?",
    choix: ["Une neutralisation", "Une diplopie (absence de fusion)", "Une vision binoculaire normale", "Une amblyopie"],
    bonne: 1,
    explication: "2 rouges + 3 verts = les deux yeux voient, mais les images ne sont pas fusionnées : c'est une diplopie."
  },
  {
    epreuve: "U5", theme: "Worth",
    question: "Filtre rouge sur l'OD. Le sujet voit 4 symboles, le symbole du bas lui paraît rosé ou rouge. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Diplopie homonyme", "Vision binoculaire avec dominance de l'OD", "Vision binoculaire avec dominance de l'OG"],
    bonne: 2,
    explication: "4 symboles = fusion. Le symbole blanc prend la couleur de l'œil dominant : rouge = l'œil au filtre rouge, l'OD."
  },
  {
    epreuve: "U5", theme: "Worth",
    question: "Filtre rouge sur l'OD. Le sujet voit 5 symboles, les rouges à DROITE des verts. Type de diplopie et déviation ?",
    choix: ["Diplopie croisée, exodéviation", "Diplopie homonyme, ésodéviation", "Diplopie croisée, ésodéviation", "Diplopie homonyme, exodéviation"],
    bonne: 1,
    explication: "L'image de l'OD (rouge) est du côté de l'OD (à droite) : diplopie homonyme, qui correspond à une ésodéviation. Croisée = exo."
  },

  // ---------- Masquage (cover test) ----------
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Au masquage unilatéral, aucun mouvement au masquage. Au DÉMASQUAGE, l'œil fait un mouvement temporo-nasal. Conclusion ?",
    choix: ["Exophorie", "Ésophorie", "Exotropie", "Ésotropie"],
    bonne: 0,
    explication: "Mouvement au démasquage = phorie. L'œil revient vers le nez (temporo-nasal) : sous le cache, il était parti vers l'extérieur. C'est une exophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "On masque l'OD : l'OG non masqué fait un mouvement naso-temporal pour prendre la fixation. Conclusion ?",
    choix: ["Ésophorie OG", "Ésotropie OG", "Exotropie OG", "Exophorie OG"],
    bonne: 1,
    explication: "L'œil NON masqué bouge : il ne fixait pas, la déviation est manifeste (tropie). Il part vers la tempe pour fixer : il était dévié vers le nez. C'est une ésotropie de l'OG."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Quelle phorie horizontale est considérée comme « physiologique » en vision de près ?",
    choix: ["Une légère ésophorie", "Une légère exophorie (environ 3 Δ)", "Une orthophorie stricte", "Une exophorie de 15 Δ"],
    bonne: 1,
    explication: "Les moyennes statistiques donnent une phorie de loin proche de 0 (légère exo) et une légère exophorie de près, autour de 3 Δ."
  },

  // ---------- Maddox ----------
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Un cylindre de Maddox est placé devant l'OD avec ses cylindres HORIZONTAUX. Le sujet voit :",
    choix: ["Une barre horizontale, pour mesurer la phorie verticale", "Une barre verticale, pour mesurer la phorie horizontale", "Un point lumineux rouge", "Deux points lumineux"],
    bonne: 1,
    explication: "La barre vue est perpendiculaire aux cylindres. Cylindres horizontaux → barre verticale → on mesure le décalage horizontal, donc la phorie horizontale."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Maddox sur l'OD (barre verticale). Le sujet voit la barre rouge à GAUCHE du point lumineux. Conclusion ?",
    choix: ["Ésophorie", "Exophorie", "Orthophorie", "Hyperphorie droite"],
    bonne: 1,
    explication: "L'image de l'OD est vue à gauche, du côté opposé à l'OD : diplopie croisée, qui correspond à une exophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "En VP à 40 cm, la barre de Maddox est vue à 2 cm du point lumineux. Valeur de la phorie ?",
    choix: ["0,8 Δ", "2 Δ", "5 Δ", "8 Δ"],
    bonne: 2,
    explication: "Une dioptrie prismatique = 1 cm de déviation à 1 m. P = 2 cm ÷ 0,40 m = 5 Δ."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Pour réaligner la barre de Maddox chez un sujet exophore, on place un prisme :",
    choix: ["Base interne (nasale)", "Base externe (temporale)", "Base supérieure", "Base inférieure"],
    bonne: 0,
    explication: "Exophorie → prisme base interne ; ésophorie → base externe. Le prisme dévie l'image vers son sommet, dans le sens de la déviation de l'œil."
  },
  {
    epreuve: "U5", theme: "Masquage et phories",
    question: "Selon le critère de Sheard, la réserve fusionnelle compensatrice doit être au moins :",
    choix: ["Égale à la phorie", "Le double de la phorie", "Le triple de la phorie", "La moitié de la phorie"],
    bonne: 1,
    explication: "Sheard : réserve compensatrice ≥ 2 × phorie. Pour une exophorie, la réserve compensatrice est la réserve convergente (base externe)."
  },

  // ---------- Anisométropie, aniséiconie, effets prismatiques ----------
  {
    epreuve: "U5", theme: "Anisométropie",
    question: "OD −1,00 et OG −5,00, verres à 15 mm de l'œil. Estimation de l'aniséiconie en lunettes ?",
    choix: ["Environ 1,5 %", "Environ 4 %", "Environ 6 %", "Environ 15 %"],
    bonne: 2,
    explication: "Aniséiconie ≈ d × différence de puissance = 0,015 × 4 = 0,06, soit environ 6 %. Au-delà de quelques %, la fusion peut devenir difficile."
  },
  {
    epreuve: "U5", theme: "Anisométropie",
    question: "Pour une anisométropie de PUISSANCE (réfractive), quel équipement réduit le plus l'aniséiconie ?",
    choix: ["Des lunettes à 15 mm", "Des lentilles de contact", "Des lunettes à 25 mm", "Aucun équipement"],
    bonne: 1,
    explication: "Anisométropie de puissance : les lentilles, placées près du plan principal de l'œil, limitent la différence de grandissement. Pour une anisométropie AXIALE, la loi de Knapp favorise les lunettes placées au foyer objet de l'œil."
  },
  {
    epreuve: "U5", theme: "Anisométropie",
    question: "OD −1,00 et OG −5,00 (sphériques). Le sujet regarde 1 cm au-dessus des centres optiques. Effet prismatique vertical différentiel ?",
    choix: ["1 Δ", "4 Δ", "5 Δ", "6 Δ"],
    bonne: 1,
    explication: "Prentice : OD 1 × 1 = 1 Δ, OG 1 × 5 = 5 Δ, les deux bases supérieures (verres divergents). Différentiel = 5 − 1 = 4 Δ : c'est ce qui peut faire voir double en regard vers le haut."
  },
  {
    epreuve: "U5", theme: "Anisométropie",
    question: "Pourquoi un anisométrope équipé en lentilles ne voit-il plus double quand il regarde vers le haut ?",
    choix: ["Les lentilles corrigent la phorie", "La lentille suit l'œil : la ligne de regard reste centrée, pas d'effet prismatique différentiel", "Les lentilles augmentent les réserves fusionnelles", "Les lentilles suppriment l'anisométropie"],
    bonne: 1,
    explication: "En lunettes, regarder hors du centre optique crée un prisme différent sur chaque œil. La lentille bouge avec l'œil : le regard passe toujours par son centre."
  },
  {
    epreuve: "U5", theme: "Anisométropie",
    question: "Un enfant anisométrope non corrigé développe une amblyopie fonctionnelle de l'œil le plus amétrope. Pourquoi ?",
    choix: ["Une lésion de la rétine", "L'image floue de cet œil pendant la période sensible du développement visuel", "Un glaucome congénital", "Une cataracte"],
    bonne: 1,
    explication: "Le cerveau privilégie l'image nette de l'autre œil. Sans correction pendant la période sensible (avant 7-8 ans environ), l'œil flou ne développe pas une acuité normale, sans lésion organique."
  },

  // ---------- Examen préliminaire ----------
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Compensation portée OD −1,00 (−0,50) ; autoréfractomètre OD −1,50 (−0,50). Sphère résiduelle attendue (en sphères équivalentes) ?",
    choix: ["+0,50", "−0,50", "−0,25", "0,00"],
    bonne: 1,
    explication: "ES portée = −1,00 + (−0,25) = −1,25. ES autoréfracto = −1,50 + (−0,25) = −1,75. Résiduel = −1,75 − (−1,25) = −0,50."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Avec sa correction, un sujet lit 14/10. Avec +1,50 ajouté, il tombe à 2,5/10. Conclusion ?",
    choix: ["Hypermétropie latente non corrigée", "Pas de sphère positive résiduelle notable : pas de sous-correction en positif", "Surcorrection en positif", "Astigmatisme non corrigé"],
    bonne: 1,
    explication: "Si le sujet était sous-corrigé en positif, le +1,50 le gênerait peu. Une forte chute d'acuité montre qu'il n'y a pas d'hypermétropie résiduelle importante."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Au cadran de Parent (sujet myopisé), la ligne 3h-9h est la plus nette. Axe du cylindre négatif compensateur ?",
    choix: ["30°", "90°", "180°", "120°"],
    bonne: 1,
    explication: "Règle des 30 : plus petit chiffre de la ligne la plus nette × 30. 3 × 30 = 90°."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Pourquoi myopise-t-on le sujet avant le cadran de Parent ?",
    choix: ["Pour mesurer l'acuité", "Pour placer les deux focales devant la rétine et empêcher l'accommodation", "Pour mesurer la phorie", "Pour tester la vision des couleurs"],
    bonne: 1,
    explication: "Avec les deux focales en avant de la rétine, la ligne la plus nette correspond à la focale la plus proche de la rétine, et le sujet ne peut pas fausser le test en accommodant."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Un myope de −3,00 non compensé lit à 25 cm. Quelle accommodation met-il en jeu ?",
    choix: ["0 D", "1 D", "3 D", "7 D"],
    bonne: 1,
    explication: "Accommodation requise = 1/d + R = 4 + (−3) = 1 D. Son punctum remotum est à 33 cm : il accommode peu pour lire à 25 cm."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire",
    question: "Un hypermétrope de +0,50 non compensé lit à 40 cm. Quelle accommodation met-il en jeu ?",
    choix: ["2,00 D", "2,50 D", "3,00 D", "0,50 D"],
    bonne: 2,
    explication: "1/0,40 = 2,50 D pour la distance, plus 0,50 D pour compenser son hypermétropie : 3,00 D."
  },

  // ---------- Réfraction ----------
  {
    epreuve: "U5", theme: "Réfraction",
    question: "Quelle est la formule sphéro-cylindrique d'un cylindre croisé (CCR) ±0,25 dont l'axe du cylindre négatif est à 90° ?",
    choix: ["+0,25 (−0,50) 90°", "−0,25 (+0,25) 90°", "0,00 (−0,25) 90°", "+0,50 (−0,25) 90°"],
    bonne: 0,
    explication: "Le CCR ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre : sphère +0,25, cylindre −0,50."
  },
  {
    epreuve: "U5", theme: "Réfraction",
    question: "Lors de la vérification de la puissance du cylindre, on ajoute −0,50 de cylindre. Comment ajuster la sphère ?",
    choix: ["Ajouter −0,25", "Ajouter +0,25", "Ajouter +0,50", "Ne rien changer"],
    bonne: 1,
    explication: "On garde l'équivalent sphérique constant : −0,50 de cylindre fait −0,25 d'ES, qu'on compense par +0,25 de sphère."
  },
  {
    epreuve: "U5", theme: "Réfraction",
    question: "Au duochrome (rouge-vert), le patient voit plus net sur le rouge. Que faites-vous ?",
    choix: ["Ajouter −0,25 D", "Ajouter +0,25 D", "Tourner l'axe du cylindre", "Rien, l'équilibre est bon"],
    bonne: 0,
    explication: "Moyen mnémotechnique « RAM » : Rouge → Ajouter du Moins."
  },
  {
    epreuve: "U5", theme: "Réfraction",
    question: "Les acuités des deux yeux sont très différentes (14/10 et 8/10). Quel test choisir pour l'équilibre bioculaire ?",
    choix: ["Lignes de lettres dissociées", "Duochrome dissocié (rouge-vert polarisé)", "Cadran de Parent", "Test de Worth"],
    bonne: 1,
    explication: "Comparer la netteté de lettres suppose des acuités proches. Le duochrome compare le rouge et le vert pour chaque œil, et reste utilisable quand les acuités diffèrent."
  },
  {
    epreuve: "U5", theme: "Réfraction",
    question: "Pourquoi utilise-t-on le brouillage en réfraction subjective ?",
    choix: ["Pour relâcher l'accommodation", "Pour mesurer l'astigmatisme", "Pour tester la vision des couleurs", "Pour stimuler la convergence"],
    bonne: 0,
    explication: "En ajoutant du positif, l'image devient floue : le patient n'a plus intérêt à accommoder. Indispensable pour ne pas sous-corriger un hypermétrope."
  },

  // ---------- Lentilles de contact ----------
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Un rayon de courbure cornéen de 7,50 mm correspond à une puissance kératométrique de :",
    choix: ["40 D", "42 D", "45 D", "47,50 D"],
    bonne: 2,
    explication: "K ≈ 337,5 / r (mm) = 337,5 / 7,5 = 45 D. À connaître sans calculatrice."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Kératométrie : 7,90 mm à 0° et 7,70 mm à 90°. Astigmatisme cornéen ?",
    choix: ["1,00 D direct", "1,00 D inverse", "0,50 D direct", "2,00 D inverse"],
    bonne: 0,
    explication: "Écart de 0,20 mm, et 0,05 mm ≈ 0,25 D, donc environ 1,00 D. Le méridien vertical (90°) est le plus cambré : astigmatisme direct (conforme à la règle)."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Un œil a 1,00 D d'astigmatisme cornéen direct mais aucun astigmatisme total. Son astigmatisme interne est :",
    choix: ["Nul", "1,00 D direct", "1,00 D inverse", "2,00 D direct"],
    bonne: 2,
    explication: "Astigmatisme total = cornéen + interne. Pour que le total soit nul, l'interne compense exactement le cornéen : 1,00 D inverse."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Quelle valeur minimale de Dk/e est retenue pour un port journalier sans œdème cornéen (critère de Holden et Mertz) ?",
    choix: ["Environ 12", "Environ 24", "Environ 87", "Environ 150"],
    bonne: 1,
    explication: "Holden et Mertz : 24 pour le port journalier, 87 pour le port prolongé (nuit comprise)."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Citez les 3 couches du film lacrymal, de l'air vers la cornée.",
    choix: ["Lipidique, aqueuse, mucinique", "Aqueuse, lipidique, mucinique", "Mucinique, aqueuse, lipidique", "Lipidique, mucinique, aqueuse"],
    bonne: 0,
    explication: "Lipidique en surface (limite l'évaporation), aqueuse au milieu, mucinique au contact de la cornée (mouillabilité). Le BUT évalue surtout la stabilité du film, liée à la couche lipidique."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "Un Break-Up Time (BUT) est considéré comme normal à partir d'environ :",
    choix: ["3 secondes", "5 secondes", "10 secondes", "30 secondes"],
    bonne: 2,
    explication: "Un BUT d'au moins 10 secondes est considéré comme normal. En dessous, le port de lentilles demande des précautions."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "À la fluorescéine, une LRPG montre beaucoup de fluo en périphérie, très peu au centre, et bouge trop. L'adaptation est :",
    choix: ["Serrée", "Alignée", "Plate", "Parfaite"],
    bonne: 2,
    explication: "Appui central (peu de fluo au centre) + forte mobilité = lentille plate. On resserre en diminuant le rayon de la face postérieure (Ro)."
  },
  {
    epreuve: "U5", theme: "Lentilles",
    question: "On resserre une LRPG en diminuant son Ro de 0,10 mm. Le ménisque de larmes devient :",
    choix: ["Plus positif d'environ +0,50 D", "Plus négatif d'environ −0,50 D", "Inchangé", "Plus positif d'environ +1,00 D"],
    bonne: 0,
    explication: "Une lentille plus cambrée crée un ménisque de larmes plus convergent : environ +0,25 D par 0,05 mm, soit +0,50 D. Il faut compenser avec −0,50 D sur la puissance de la lentille."
  },

  // ---------- Pathologie ----------
  {
    epreuve: "U5", theme: "Pathologie",
    question: "La mesure de la pression intraoculaire (PIO) sert principalement au dépistage :",
    choix: ["De la cataracte", "Du glaucome", "De la DMLA", "Du kératocône"],
    bonne: 1,
    explication: "Une PIO élevée est le principal facteur de risque du glaucome. Elle ne dépiste pas la cataracte."
  },
  {
    epreuve: "U5", theme: "Pathologie",
    question: "Quelle est la plage habituelle d'une pression intraoculaire normale ?",
    choix: ["2 à 8 mmHg", "10 à 21 mmHg", "25 à 35 mmHg", "40 à 50 mmHg"],
    bonne: 1,
    explication: "On considère une PIO normale entre environ 10 et 21 mmHg. Une valeur normale n'exclut pas un glaucome : d'autres examens complètent (champ visuel, fond d'œil)."
  },
  {
    epreuve: "U5", theme: "Pathologie",
    question: "Un patient de 70 ans devient plus myope et peut de nouveau lire sans lunettes. Cela évoque :",
    choix: ["Un glaucome", "Une cataracte nucléaire (myopie d'indice)", "Une DMLA", "Un décollement de rétine"],
    bonne: 1,
    explication: "La cataracte nucléaire augmente l'indice du cristallin : l'œil devient plus myope. Autres signes : baisse progressive d'acuité, éblouissement, couleurs ternes."
  }
];
