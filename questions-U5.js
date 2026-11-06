// ==============================================================
//  QUESTIONS · Analyse de la vision (U5)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U5" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : calculatrice interdite à l'examen → chiffres qui tombent juste.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Normes vérifiées sur les propositions de corrigé 2020, 2022, 2023, 2024
//  et sur la « Synthèse 2024 » de la commission (éduscol STI).
// ==============================================================

QUESTIONS.push(

  // ---------- Test de Worth (tombé 4 années sur 4) ----------
  {
    epreuve: "U5", theme: "Worth", session: "2024",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 2 symboles rouges. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie", "Vision binoculaire normale"],
    bonne: 0,
    explication: "Seul l'œil au filtre rouge (OD) perçoit : il voit son marqueur monoculaire rouge et l'élément fusionnel blanc, qui lui paraît rouge. Les marqueurs verts de l'OG manquent : pas de vision simultanée (1er degré), donc pas de fusion (2e degré). L'OG est neutralisé."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2023",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 3 symboles verts. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie croisée", "Dominance de l'OD"],
    bonne: 1,
    explication: "Seul l'œil au filtre vert (OG) perçoit : ses 2 marqueurs verts plus l'élément fusionnel blanc, vu vert (le filtre ne laisse passer que sa couleur). L'OD est neutralisé. Piège classique : l'élément fusionnel prend toujours la couleur du filtre de l'œil qui voit."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2023",
    question: "Au test de Worth, le sujet voit 5 symboles. Que met-on en évidence ?",
    choix: ["Une neutralisation", "Une diplopie : vision simultanée présente, mais pas de fusion", "Une vision binoculaire normale", "Une amblyopie"],
    bonne: 1,
    explication: "Les marqueurs des deux yeux sont vus : le 1er degré (vision simultanée) est présent. L'élément fusionnel est vu double : le 2e degré (fusion) manque. Le sens de la diplopie (homonyme ou croisée) indique ensuite la phorie associée."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2022",
    question: "Filtre rouge sur l'OD. Le sujet voit 4 symboles, l'élément fusionnel lui paraît rosé. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Diplopie homonyme", "Vision binoculaire avec dominance de l'OD", "Vision binoculaire avec dominance de l'OG"],
    bonne: 2,
    explication: "4 symboles = vision simultanée et fusion. L'élément fusionnel prend la couleur de l'œil dominant : rosé = l'œil au filtre rouge, l'OD."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2020",
    question: "Filtre rouge sur l'OD. Le sujet voit 5 symboles, les rouges à DROITE des verts. Type de diplopie et phorie associée ?",
    choix: ["Diplopie croisée, exophorie associée", "Diplopie homonyme, ésophorie associée", "Diplopie croisée, ésophorie associée", "Diplopie homonyme, exophorie associée"],
    bonne: 1,
    explication: "L'image de l'OD (rouge) est du côté de l'OD (à droite) : diplopie homonyme. Loi de Desmarres : homonyme = éso, croisée = exo. C'est donc une ésophorie associée."
  },

  // ---------- Masquage (cover test) ----------
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Au masquage unilatéral, aucun mouvement au masquage. Au DÉMASQUAGE, l'œil fait un mouvement temporo-nasal. Conclusion ?",
    choix: ["Exophorie", "Ésophorie", "Exotropie", "Ésotropie"],
    bonne: 0,
    explication: "Aucun mouvement au masquage = pas de tropie. Mouvement au démasquage = phorie dissociée (supérieure à 3 Δ, sinon on ne la voit pas). L'œil revient vers le nez (temporo-nasal) : sous le cache, il était parti vers l'extérieur. C'est une exophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Au démasquage de l'OD, l'œil fait un mouvement de bas en haut pour reprendre la fixation. Aucun mouvement au masquage. Conclusion ?",
    choix: ["Hyperphorie D/G (= hypophorie G/D)", "Hypophorie D/G (= hyperphorie G/D)", "Hypertropie D/G (= hypotropie G/D)", "Hypotropie D/G (= hypertropie G/D)"],
    bonne: 1,
    explication: "Aucun mouvement au masquage = pas de tropie. Au démasquage, l'œil remonte : derrière le cache, il était en bas. L'OD est plus bas que l'OG : hypophorie D/G, qu'on écrit le plus souvent hyperphorie G/D (on nomme l'œil le plus haut). Le cover test s'interprète dans les deux plans, et la norme verticale est l'orthophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2020",
    question: "On masque l'OD : l'OG non masqué fait un mouvement naso-temporal pour prendre la fixation. Conclusion ?",
    choix: ["Ésophorie OG", "Ésotropie OG", "Exotropie OG", "Exophorie OG"],
    bonne: 1,
    explication: "Au masquage, si l'œil NON masqué bouge, il ne fixait pas : la déviation est manifeste (tropie). Il part vers la tempe pour fixer : il était dévié vers le nez. C'est une ésotropie (strabisme convergent) de l'OG."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Normes de phorie dissociée horizontale (méthode de von Graefe) : quelle est la valeur attendue en vision de près, à 40 cm ?",
    choix: ["Orthophorie à 1 Δ d'exophorie", "Exophorie de 4 à 6 Δ", "Ésophorie de 4 à 6 Δ", "Exophorie de 15 Δ"],
    bonne: 1,
    explication: "Normes du BTS : en VL, orthophorie à 1 Δ d'exophorie ; en VP (40 cm), exophorie de 4 à 6 Δ ; dans le plan vertical, orthophorie. Le passage VL → VP donne donc une prise d'exophorie de 4 à 6 Δ (jeu phorique)."
  },

  // ---------- Maddox ----------
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Un cylindre de Maddox est placé devant l'OD avec ses stries HORIZONTALES. Le sujet voit :",
    choix: ["Une barre horizontale, pour mesurer la phorie verticale", "Une barre verticale, pour mesurer la phorie horizontale", "Un point lumineux rouge", "Deux points lumineux"],
    bonne: 1,
    explication: "La barre vue est perpendiculaire aux stries. Stries horizontales → barre verticale → on mesure le décalage horizontal, donc la phorie horizontale. La dissociation est totale et sensorielle (les deux yeux ne voient pas la même image)."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Maddox sur l'OD (barre verticale). Le sujet voit la barre rouge à GAUCHE du point lumineux. Conclusion ?",
    choix: ["Ésophorie", "Exophorie", "Orthophorie", "Hyperphorie droite"],
    bonne: 1,
    explication: "L'image de l'OD est vue à gauche, du côté opposé à l'OD : diplopie croisée. En position passive, les lignes de regard se croisent en arrière du point de fixation : c'est une exophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Test placé à 50 cm : la barre de Maddox est vue décalée de 3 cm par rapport au point lumineux. Valeur de la phorie ?",
    choix: ["1,5 Δ", "3 Δ", "6 Δ", "15 Δ"],
    bonne: 2,
    explication: "1 Δ = 1 cm de déviation à 1 m. P (Δ) = décalage (cm) ÷ distance (m) = 3 ÷ 0,50 = 6 Δ."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Pour réaligner la barre de Maddox chez un sujet exophore, le prisme de réalignement est placé :",
    choix: ["Base interne (nasale)", "Base externe (temporale)", "Base supérieure", "Base inférieure"],
    bonne: 0,
    explication: "Exophorie → prisme base interne ; ésophorie → base externe. Le prisme dévie la lumière vers sa base : son sommet est orienté du côté où l'œil est parti, il ramène l'image dans la direction de la ligne de regard passive."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2022",
    question: "Selon le critère de Sheard, la vision est plutôt confortable si la réserve opposée à la phorie est au moins :",
    choix: ["Égale à la phorie", "Le double de la phorie", "Le triple de la phorie", "La moitié de la phorie"],
    bonne: 1,
    explication: "Sheard : réserve opposée à la phorie ≥ 2 × phorie. Pour une exophorie, c'est la réserve en convergence (prismes base externe) ; pour une ésophorie, la réserve en divergence (base interne). On prend le point de flou, ou le point de bris s'il n'y a pas de flou."
  },

  // ---------- Anisométropie, aniséiconie, effets prismatiques ----------
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Anisométropie de puissance : OD −0,50 et OG −5,50 (sphériques), verres à 14 mm de l'œil. Estimation de l'aniséiconie en lunettes ?",
    choix: ["Environ 1,4 %", "Environ 5 %", "Environ 7 %", "Environ 14 %"],
    bonne: 2,
    explication: "Anisométropie de puissance : les deux yeux ont la même longueur, l'aniséiconie axile est nulle. Aniséiconie induite ≈ distance verre-œil (cm) × différence des verres = 1,4 × 5 = 7 %, en faveur de l'OD (le moins myope voit plus gros). Repères : moins de 3 % = pas de gêne ; 3 à 10 % = gêne possible de la fusion ; plus de 10 % = fusion le plus souvent impossible."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Pour une anisométropie de PUISSANCE (réfractive), quel équipement réduit le plus l'aniséiconie ?",
    choix: ["Des lunettes à 15 mm", "Des lentilles de contact", "Des lunettes à 25 mm", "Aucun équipement"],
    bonne: 1,
    explication: "L'aniséiconie induite dépend de la distance compensation-œil. En lentilles, cette distance passe d'environ 15 mm à moins de 2 mm : l'aniséiconie devient beaucoup plus faible. (Pour une anisométropie AXIALE, la loi de Knapp favorise au contraire les lunettes placées au foyer objet de l'œil.)"
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "OD +1,00 et OG +4,00 (sphériques). En lecture, le regard passe 1 cm sous les centres optiques. Effet prismatique vertical différentiel ?",
    choix: ["1 Δ", "3 Δ", "4 Δ", "5 Δ"],
    bonne: 1,
    explication: "Prentice : P = d (cm) × |D|. OD : 1 × 1 = 1 Δ ; OG : 1 × 4 = 4 Δ. Verres convergents, regard sous le centre optique : base en haut pour les deux. Différentiel = 4 − 1 = 3 Δ base en haut sur l'OG. Les réserves fusionnelles verticales sont faibles (bris vers 3 Δ) : risque de vision double."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Pourquoi un anisométrope équipé en lentilles ne voit-il plus double quand il regarde vers le haut ?",
    choix: ["Les lentilles corrigent la phorie", "La lentille suit l'œil : la ligne de regard reste centrée, pas d'effet prismatique différentiel", "Les lentilles augmentent les réserves fusionnelles", "Les lentilles suppriment l'anisométropie"],
    bonne: 1,
    explication: "En lunettes, regarder hors du centre optique crée un prisme différent sur chaque œil, donc une phorie induite. La lentille suit le globe dans ses mouvements et reste centrée sur la cornée : pas d'effet prismatique, donc pas de phorie induite."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2023",
    question: "Un enfant anisométrope non corrigé développe une amblyopie fonctionnelle de l'œil le plus amétrope. Pourquoi ?",
    choix: ["Une lésion de la rétine", "L'image floue de cet œil pendant la période de maturation visuelle", "Un glaucome congénital", "Une cataracte"],
    bonne: 1,
    explication: "Amblyopie fonctionnelle = baisse d'acuité liée à la non-utilisation d'un œil pendant la période de maturation visuelle, sans lésion organique. Le cerveau privilégie l'image nette de l'autre œil. Si chaque œil est utilisé à son tour (un pour le loin, l'autre pour le près), l'amblyopie peut ne pas apparaître."
  },

  // ---------- Examen préliminaire ----------
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Compensation portée OD −2,00 (−1,00) ; autoréfractomètre OD −3,00 (−0,50). Réfraction complémentaire attendue (en sphères équivalentes), si l'autoréfractomètre était exact ?",
    choix: ["+0,75", "−0,75", "−0,50", "−1,00"],
    bonne: 1,
    explication: "SE = S + C/2. Portée : −2,00 + (−0,50) = −2,50. Autoréfractomètre : −3,00 + (−0,25) = −3,25. RC = −3,25 − (−2,50) = −0,75. Attention : à l'autoréfractomètre, le sujet accommode souvent (accommodation instrumentale) et la myopie est surestimée. On vérifie avec les acuités."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2020 et 2024",
    question: "Avec sa compensation, un sujet lit 10/10. On ajoute +2,00 : son acuité tombe à 2/10. Sphère résiduelle estimée (test du verre convexe) ?",
    choix: ["+0,75", "−0,75", "+1,25", "0,00"],
    bonne: 0,
    explication: "Règle de Swaine (valable pour une acuité ≤ 5/10) : brouillage ≈ 1 ÷ (4 × AV) = 1 ÷ (4 × 0,2) = 1,25 D. Sphère résiduelle = verre ajouté − brouillage = +2,00 − 1,25 = +0,75 D. Il reste donc une hypermétropie résiduelle : le sujet est sous-corrigé en positif."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Au cadran de Parent (sujet légèrement myopisé), la ligne 3h-9h est vue la plus noire. Axe du cylindre négatif compensateur ?",
    choix: ["30°", "90°", "180°", "120°"],
    bonne: 1,
    explication: "Sujet myopisé : la ligne la plus noire correspond à la focale arrière, la plus proche de la rétine. Elle est horizontale (0°-180°). L'axe du cylindre négatif est perpendiculaire à la direction vue la plus noire : 90°. À l'examen, le « calcul » avec les chiffres du cadran (×30) n'est pas accepté comme justification."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Pourquoi myopise-t-on légèrement le sujet avant le cadran de Parent ?",
    choix: ["Pour mesurer l'acuité", "Pour placer les deux focales en avant de la rétine et empêcher l'accommodation de fausser le test", "Pour mesurer la phorie", "Pour tester la vision des couleurs"],
    bonne: 1,
    explication: "Avec une défocalisation en avant de la rétine, la ligne la plus noire correspond toujours à la focale arrière, et accommoder ne ferait qu'aggraver le flou : le sujet n'a pas intérêt à accommoder."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    question: "Un myope de −2,00 non compensé lit à 25 cm. Quelle accommodation met-il en jeu ?",
    choix: ["0 D", "2 D", "4 D", "6 D"],
    bonne: 1,
    explication: "Acc = R − 1/HT = −2,00 − 1/(−0,25) = −2 + 4 = 2 D. Son punctum remotum est à 50 cm : il n'a que 2 D à fournir pour lire à 25 cm."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    question: "Un hypermétrope de +1,50 non compensé lit à 50 cm. Quelle accommodation met-il en jeu ?",
    choix: ["2,00 D", "0,50 D", "3,50 D", "1,50 D"],
    bonne: 2,
    explication: "Acc = R − 1/HT = +1,50 − 1/(−0,50) = 1,50 + 2,00 = 3,50 D : 2 D pour la distance, plus 1,50 D pour compenser son hypermétropie."
  },

  // ---------- Réfraction ----------
  {
    epreuve: "U5", theme: "Réfraction", session: "2023",
    question: "Quelle est la formule sphéro-cylindrique d'un cylindre croisé (CCR) ±0,25 dont l'axe du cylindre négatif est à 90° ?",
    choix: ["+0,25 (−0,50) 90°", "−0,25 (+0,25) 90°", "0,00 (−0,25) 90°", "+0,50 (−0,25) 90°"],
    bonne: 0,
    explication: "Le CCR (cylindre croisé par retournement) ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre : sphère +0,25, cylindre −0,50, à l'axe du cylindre négatif."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2020",
    question: "Lors de la vérification de la puissance du cylindre, on ajoute −0,50 de cylindre. Comment ajuster la sphère ?",
    choix: ["Ajouter −0,25", "Ajouter +0,25", "Ajouter +0,50", "Ne rien changer"],
    bonne: 1,
    explication: "On garde la sphère équivalente constante pour maintenir le cercle de moindre diffusion sur la rétine (acc = 0) : −0,50 de cylindre fait −0,25 de SE, qu'on compense par +0,25 de sphère."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "complément",
    question: "Au test rouge-vert, le sujet voit plus net sur le rouge. Que faites-vous ?",
    choix: ["Ajouter −0,25 D", "Ajouter +0,25 D", "Tourner l'axe du cylindre", "Rien, l'équilibre est bon"],
    bonne: 0,
    explication: "Rouge plus net : l'image est en avant de la rétine (trop de positif). Moyen mnémotechnique « RAM » : Rouge → Ajouter du Moins."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2024",
    question: "Client anisométrope, vision binoculaire fragile. Pour l'équilibre bioculaire, quel test préférer ?",
    choix: ["Lignes de lettres dissociées par prisme", "Test rouge-vert polarisé", "Cadran de Parent", "Test de Worth"],
    bonne: 1,
    explication: "Avec les lignes dissociées par prisme, la dissociation est totale : risque de neutralisation d'un œil, et l'anisométrope compare des images de tailles différentes. Avec le rouge-vert polarisé, la dissociation est partielle (favorise la vision binoculaire) et chaque œil juge sa propre mise au point, sans comparer les deux yeux."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2022",
    question: "Pourquoi utilise-t-on le brouillage en réfraction subjective ?",
    choix: ["Pour relâcher l'accommodation", "Pour mesurer l'astigmatisme", "Pour tester la vision des couleurs", "Pour stimuler la convergence"],
    bonne: 0,
    explication: "En ajoutant du positif, l'image passe en avant de la rétine : accommoder ne ferait qu'augmenter le flou, le sujet relâche son accommodation. Indispensable pour ne pas sous-corriger un hypermétrope ni surcorriger un myope."
  },

  // ---------- Lentilles de contact ----------
  {
    epreuve: "U5", theme: "Lentilles", session: "complément",
    question: "Un rayon de courbure cornéen de 7,50 mm correspond à une puissance lue au kératomètre de :",
    choix: ["40 D", "42 D", "45 D", "47,50 D"],
    bonne: 2,
    explication: "Avec l'indice d'étalonnage des kératomètres (1,3375) : K ≈ 337,5 / r (mm) = 337,5 / 7,5 = 45 D. À connaître sans calculatrice."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020 et 2023",
    question: "Kératométrie : 7,75 mm à 0° et 7,65 mm à 90°. Astigmatisme cornéen (face avant) ?",
    choix: ["0,60 D direct", "0,60 D inverse", "1,00 D direct", "0,25 D inverse"],
    bonne: 0,
    explication: "Toricité = 7,75 − 7,65 = 0,10 mm, soit environ 0,60 D (indice réel de la cornée ; un kératomètre affiche plutôt 0,50 D). Le méridien vertical (90°) a le plus petit rayon, il est le plus cambré : astigmatisme direct, compensé par plan (−0,60) 0°."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2023",
    question: "Un œil a 1,00 D d'astigmatisme cornéen direct mais aucun astigmatisme total. Son astigmatisme interne est :",
    choix: ["Nul", "1,00 D direct", "1,00 D inverse", "2,00 D direct"],
    bonne: 2,
    explication: "Astigmatisme total = cornéen (+) interne. Pour un total nul, l'interne compense exactement le cornéen : 1,00 D inverse (compensé par plan (−1,00) 90°). C'est la situation physiologique : cornée directe, interne inverse."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2023",
    question: "Selon Harvitt et Bonanno, quelle transmissibilité minimale (Dk/e, en 10⁻⁹ unités Fatt) faut-il pour un port nocturne sans hypoxie ?",
    choix: ["24", "35", "87", "125"],
    bonne: 3,
    explication: "Critère de Harvitt et Bonanno (1999), retenu au BTS : 35 pour le port journalier, 125 pour le port prolongé (nocturne). Les fortes valeurs de Dk/e correspondent aux silicone-hydrogels."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "Citez les 3 couches du film lacrymal, de l'air vers la cornée.",
    choix: ["Lipidique, aqueuse, mucinique", "Aqueuse, lipidique, mucinique", "Mucinique, aqueuse, lipidique", "Lipidique, mucinique, aqueuse"],
    bonne: 0,
    explication: "Lipidique en surface (limite l'évaporation), aqueuse au milieu, mucinique au contact de la cornée (mouillabilité). La stabilité du film, évaluée par le BUT, dépend surtout de la couche lipidique."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2024",
    question: "Quelle est la norme du Break-Up Time (BUT) ?",
    choix: ["3 à 5 secondes", "5 à 8 secondes", "10 à 20 secondes", "30 à 60 secondes"],
    bonne: 2,
    explication: "Le BUT évalue la qualité des larmes ; la norme est de 10 à 20 s. En dessous de 10 s, c'est une contre-indication aux lentilles souples hydrogel. La quantité de larmes s'évalue avec la hauteur de la rivière lacrymale (norme 0,2 à 0,4 mm)."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "À la fluorescéine, une LRPG montre beaucoup de fluo en périphérie, très peu au centre, et bouge trop. L'adaptation est :",
    choix: ["Serrée", "Alignée", "Plate", "Parfaite"],
    bonne: 2,
    explication: "Appui central (peu de fluo au centre) + forte mobilité = adaptation plate. On resserre en diminuant le rayon de la face arrière (ro)."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "On resserre une LRPG en diminuant son ro de 0,10 mm. Le ménisque de larmes devient :",
    choix: ["Plus convergent d'environ +0,50 D", "Plus divergent d'environ −0,50 D", "Inchangé", "Plus convergent d'environ +1,00 D"],
    bonne: 0,
    explication: "Une modification de 10/100 de mm du ro change la vergence du ménisque de larmes d'environ 0,50 D. Lentille plus cambrée = ménisque plus convexe (+0,50 D). On commande donc une lentille plus divergente de 0,50 D."
  },

  // ---------- Pathologie ----------
  {
    epreuve: "U5", theme: "Pathologie", session: "2024",
    question: "La mesure de la pression intraoculaire (PIO) sert principalement au dépistage :",
    choix: ["De la cataracte", "Du glaucome", "De la DMLA", "Du kératocône"],
    bonne: 1,
    explication: "Une PIO élevée est le principal facteur de risque du glaucome. La cataracte se dépiste à la lampe à fente (biomicroscope) par l'ophtalmologiste."
  },
  {
    epreuve: "U5", theme: "Pathologie", session: "2023",
    question: "Quelle est la valeur moyenne d'une PIO normale, et à partir de quand est-elle jugée trop forte ?",
    choix: ["Environ 8 mmHg, trop forte au-delà de 12", "Environ 16 mmHg, trop forte au-delà de 21", "Environ 25 mmHg, trop forte au-delà de 35", "Environ 40 mmHg, trop forte au-delà de 50"],
    bonne: 1,
    explication: "PIO moyenne d'environ 16 mmHg ; au-delà de 21 mmHg (pour une cornée d'épaisseur normale), elle est jugée trop forte. Une PIO normale n'exclut pas un glaucome : champ visuel et fond d'œil complètent. Des antécédents familiaux de glaucome à angle ouvert justifient la mesure."
  },
  {
    epreuve: "U5", theme: "Pathologie", session: "complément",
    question: "Un patient de 70 ans devient plus myope et peut de nouveau lire sans lunettes. Cela évoque :",
    choix: ["Un glaucome", "Une cataracte nucléaire (myopie d'indice)", "Une DMLA", "Un décollement de rétine"],
    bonne: 1,
    explication: "La cataracte (opacification du cristallin) nucléaire augmente l'indice du cristallin : l'œil devient plus myope. Autres symptômes : baisse d'acuité, sensation de brouillard, photophobie (éblouissement), diplopie monoculaire, couleurs altérées."
  }
);
