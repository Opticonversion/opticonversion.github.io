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
    id: "U5-001", epreuve: "U5", theme: "Worth", session: "2024",
    difficulte: "facile",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 2 symboles rouges. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie", "Vision binoculaire normale"],
    bonne: 0,
    explication: "Seul l'œil au filtre rouge (OD) perçoit : il voit son marqueur monoculaire rouge et l'élément fusionnel blanc, qui lui paraît rouge. Les marqueurs verts de l'OG manquent : pas de vision simultanée (1er degré), donc pas de fusion (2e degré). L'OG est neutralisé.",
    surLaCopie: "Le sujet ne voit que les 2 symboles rouges : seul l'œil droit, au filtre rouge, transmet une image. L'œil gauche est neutralisé. Il y a neutralisation de l'OG, donc pas de vision simultanée.",
    indice: "Commence par te demander quel filtre est devant chaque œil, et quels symboles chacun peut voir à travers le sien. Quel œil manque à l'appel ?",
    schema: "img/schemas/U5/worth-neutralisation-og.svg",
    schemaTexte: "Test de Worth : l'œil au filtre rouge voit le losange et le rond en rouge, l'œil au filtre vert voit les deux croix et le rond en vert. Le sujet ne voit que les 2 symboles rouges."
  },
  {
    id: "U5-002", epreuve: "U5", theme: "Worth", session: "2023",
    difficulte: "facile",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 3 symboles verts. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie croisée", "Dominance de l'OD"],
    bonne: 1,
    explication: "Seul l'œil au filtre vert (OG) perçoit : ses 2 marqueurs verts plus l'élément fusionnel blanc, vu vert (le filtre ne laisse passer que sa couleur). L'OD est neutralisé. Piège classique : l'élément fusionnel prend toujours la couleur du filtre de l'œil qui voit.",
    surLaCopie: "Le sujet ne voit que les 3 symboles verts : seul l'œil gauche, au filtre vert, transmet une image. L'œil droit est neutralisé. Il y a neutralisation de l'OD, donc pas de vision simultanée (1er degré absent).",
    indice: "L'élément fusionnel blanc prend la couleur du filtre de l'œil qui le voit. Si tout est vert, quel œil voit, et lequel ne transmet rien ?"
  },
  {
    id: "U5-003", epreuve: "U5", theme: "Worth", session: "2023",
    difficulte: "facile",
    question: "Au test de Worth, le sujet voit 5 symboles. Que met-on en évidence ?",
    choix: ["Une neutralisation d'un œil : un seul filtre est perçu", "Une diplopie : vision simultanée présente, sans fusion des images", "Une vision binoculaire normale, avec fusion des deux images", "Une amblyopie profonde de l'un des deux yeux du sujet"],
    bonne: 1,
    explication: "Les marqueurs des deux yeux sont vus : le 1er degré (vision simultanée) est présent. L'élément fusionnel est vu double : le 2e degré (fusion) manque. Le sens de la diplopie (homonyme ou croisée) indique ensuite la phorie associée.",
    surLaCopie: "Je compte 5 symboles : les deux yeux voient leurs symboles (vision simultanée, 1er degré) mais l'élément fusionnel est vu double. La fusion (2e degré) manque : le sujet a une diplopie. Je précise ensuite le sens de la diplopie pour trouver la phorie.",
    indice: "Compte les symboles de chaque œil : 2 pour l'un, 3 pour l'autre. Si les deux yeux voient mais que l'élément commun apparaît deux fois, quel degré manque ?"
  },
  {
    id: "U5-004", epreuve: "U5", theme: "Worth", session: "2022",
    difficulte: "moyen",
    question: "Filtre rouge sur l'OD. Le sujet voit 4 symboles, l'élément fusionnel lui paraît rosé. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Diplopie homonyme", "Vision binoculaire avec dominance de l'OD", "Vision binoculaire avec dominance de l'OG"],
    bonne: 2,
    explication: "4 symboles = vision simultanée et fusion. L'élément fusionnel prend la couleur de l'œil dominant : rosé = l'œil au filtre rouge, l'OD.",
    surLaCopie: "Je compte 4 symboles : vision simultanée et fusion. L'élément fusionnel est rosé, couleur du filtre rouge : l'œil droit domine. La vision est binoculaire avec dominance de l'OD.",
    indice: "4 symboles : les deux yeux travaillent ensemble. La couleur prise par l'élément fusionnel indique quel œil l'emporte."
  },
  {
    id: "U5-005", epreuve: "U5", theme: "Worth", session: "2020",
    difficulte: "moyen",
    question: "Filtre rouge sur l'OD. Le sujet voit 5 symboles, les rouges à DROITE des verts. Type de diplopie et phorie associée ?",
    choix: ["Diplopie croisée, exophorie associée", "Diplopie homonyme, ésophorie associée", "Diplopie croisée, ésophorie associée", "Diplopie homonyme, exophorie associée"],
    bonne: 1,
    explication: "L'image de l'OD (rouge) est du côté de l'OD (à droite) : diplopie homonyme. Loi de Desmarres : homonyme = éso, croisée = exo. C'est donc une ésophorie associée.",
    surLaCopie: "5 symboles : vision simultanée sans fusion, diplopie. Les rouges, vus par l'OD, sont du côté de l'OD (à droite) : la diplopie est homonyme. D'après la loi de Desmarres, une diplopie homonyme traduit une ésophorie.",
    indice: "Regarde de quel côté se trouve l'image de l'OD (rouge) par rapport à l'OD. Puis applique la loi de Desmarres pour passer de la diplopie à la phorie.",
    schema: "img/schemas/U5/worth-diplopie-homonyme.svg",
    schemaTexte: "Perception du sujet : les symboles rouges de l'OD sont à droite des verts de l'OG, diplopie homonyme. Vue de dessus : les lignes de regard passives se croisent en avant du test, ésophorie."
  },

  // ---------- Masquage (cover test) ----------
  {
    id: "U5-006", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "moyen",
    question: "Au masquage unilatéral, aucun mouvement au masquage. Au DÉMASQUAGE, l'œil fait un mouvement temporo-nasal. Conclusion ?",
    choix: ["Exophorie", "Ésophorie", "Exotropie", "Ésotropie"],
    bonne: 0,
    explication: "Aucun mouvement au masquage = pas de tropie. Mouvement au démasquage = phorie dissociée (supérieure à 3 Δ, sinon on ne la voit pas). L'œil revient vers le nez (temporo-nasal) : sous le cache, il était parti vers l'extérieur. C'est une exophorie.",
    surLaCopie: "Aucun mouvement au masquage : pas de tropie. Un mouvement au seul démasquage signe une phorie. L'œil revient vers le nez, donc sous le cache il était parti vers la tempe. Je conclus à une exophorie.",
    indice: "Mouvement au masquage ou au démasquage : l'un signe une tropie, l'autre une phorie. Ensuite, si l'œil revient vers le nez, où était-il sous le cache ?",
    schema: "img/schemas/U5/cover-test-exophorie.svg",
    schemaTexte: "Sujet vu de face, OD à gauche de l'image. On masque l'OD : l'OG ne bouge pas. Sous le cache, l'OD part vers la tempe. Au démasquage, il revient vers le nez : exophorie."
  },
  {
    id: "U5-007", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "difficile",
    question: "Au démasquage de l'OD, l'œil fait un mouvement de bas en haut pour reprendre la fixation. Aucun mouvement au masquage. Conclusion ?",
    choix: ["Hyperphorie D/G (= hypophorie G/D)", "Hypophorie D/G (= hyperphorie G/D)", "Hypertropie D/G (= hypotropie G/D)", "Hypotropie D/G (= hypertropie G/D)"],
    bonne: 1,
    explication: "Aucun mouvement au masquage = pas de tropie. Au démasquage, l'œil remonte : derrière le cache, il était en bas. L'OD est plus bas que l'OG : hypophorie D/G, qu'on écrit le plus souvent hyperphorie G/D (on nomme l'œil le plus haut). Le cover test s'interprète dans les deux plans, et la norme verticale est l'orthophorie.",
    indice: "Si l'OD remonte pour reprendre la fixation, où était-il derrière le cache ? Par convention, on nomme le plus souvent l'œil le plus haut."
  },
  {
    id: "U5-008", epreuve: "U5", theme: "Masquage et phories", session: "2020",
    difficulte: "difficile",
    question: "On masque l'OD : l'OG non masqué fait un mouvement naso-temporal pour prendre la fixation. Conclusion ?",
    choix: ["Ésophorie OG", "Ésotropie OG", "Exotropie OG", "Exophorie OG"],
    bonne: 1,
    explication: "Au masquage, si l'œil NON masqué bouge, il ne fixait pas : la déviation est manifeste (tropie). Il part vers la tempe pour fixer : il était dévié vers le nez. C'est une ésotropie (strabisme convergent) de l'OG.",
    surLaCopie: "Au masquage de l'OD, l'OG non masqué bouge pour fixer : il ne fixait pas, c'est une tropie. Il va vers la tempe : il était dévié vers le nez. Je conclus à une ésotropie de l'OG.",
    indice: "Ici c'est l'œil NON masqué qui bouge. Pourquoi bougerait-il s'il fixait déjà le test ? Et s'il part vers la tempe, de quel côté était-il dévié ?"
  },
  {
    id: "U5-009", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    question: "Exophorie de l'OD. On démasque l'OD : quel schéma (sujet vu de face) montre le bon mouvement ?",
    choix: ["Flèche sous l'OD, vers le nez (temporo-nasal)", "Flèche sous l'OD, vers la tempe (naso-temporal)", "Flèche sous l'OG, vers le nez", "Flèche verticale à côté de l'OD, vers le haut"],
    choixSchemas: ["img/schemas/U5/cover-choix-juste.svg", "img/schemas/U5/cover-choix-faux-sens.svg", "img/schemas/U5/cover-choix-faux-og.svg", "img/schemas/U5/cover-choix-faux-vertical.svg"],
    bonne: 0,
    explication: "En exophorie, l'œil masqué part vers la tempe en position passive. Au démasquage, c'est lui (l'OD) qui reprend la fixation : il revient vers le nez, mouvement temporo-nasal. Sujet vu de face, son OD est à gauche de l'image et son nez au centre : la flèche va donc vers la droite de l'image. Les pièges : inverser le sens (ce serait une ésophorie), faire bouger l'OG (il fixe déjà, il ne bouge pas), ou tracer un mouvement vertical (ce serait une phorie verticale).",
    indice: "Sujet vu de face : son OD est à gauche de l'image, et sa tempe droite aussi. Demande-toi où part l'œil sous le cache en exophorie, puis quel œil bouge au démasquage."
  },
  {
    id: "U5-010", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "facile",
    question: "Normes de phorie dissociée horizontale (méthode de von Graefe) : quelle est la valeur attendue en vision de près, à 40 cm ?",
    choix: ["Orthophorie à 1 Δ d'exophorie", "Exophorie de 4 à 6 Δ", "Ésophorie de 4 à 6 Δ", "Exophorie de 15 Δ"],
    bonne: 1,
    explication: "Normes du BTS : en VL, orthophorie à 1 Δ d'exophorie ; en VP (40 cm), exophorie de 4 à 6 Δ ; dans le plan vertical, orthophorie. Le passage VL → VP donne donc une prise d'exophorie de 4 à 6 Δ (jeu phorique).",
    indice: "Les normes viennent de la méthode de von Graefe. En VP, l'accommodation entraîne moins de convergence que ce que demande le test : dans quel sens penche la phorie ?"
  },

  // ---------- Maddox ----------
  {
    id: "U5-011", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "moyen",
    question: "Un cylindre de Maddox est placé devant l'OD avec ses stries HORIZONTALES. Le sujet voit :",
    choix: ["Une barre horizontale, pour mesurer la phorie verticale", "Une barre verticale, pour mesurer la phorie horizontale", "Un point lumineux rouge", "Deux points lumineux"],
    bonne: 1,
    explication: "La barre vue est perpendiculaire aux stries. Stries horizontales → barre verticale → on mesure le décalage horizontal, donc la phorie horizontale. La dissociation est totale et sensorielle (les deux yeux ne voient pas la même image).",
    indice: "La barre vue à travers un Maddox est perpendiculaire à ses stries. Et une barre sert à repérer un décalage perpendiculaire à elle-même."
  },
  {
    id: "U5-012", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "moyen",
    question: "Maddox sur l'OD (barre verticale). Le sujet voit la barre rouge à GAUCHE du point lumineux. Conclusion ?",
    choix: ["Ésophorie", "Exophorie", "Orthophorie", "Hyperphorie droite"],
    bonne: 1,
    explication: "L'image de l'OD est vue à gauche, du côté opposé à l'OD : diplopie croisée. Sans fusion, les deux lignes de regard se croiseraient derrière le point visé : c'est une exophorie.",
    surLaCopie: "La barre de l'OD est vue à gauche, du côté opposé à l'OD : la diplopie est croisée. D'après la loi de Desmarres, c'est une exophorie.",
    indice: "L'image de l'OD est-elle du côté de l'OD ou du côté opposé ? Diplopie homonyme ou croisée, puis loi de Desmarres."
  },
  {
    id: "U5-013", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "facile",
    question: "Test placé à 50 cm : la barre de Maddox est vue décalée de 3 cm par rapport au point lumineux. Valeur de la phorie ?",
    choix: ["1,5 Δ", "3 Δ", "6 Δ", "15 Δ"],
    bonne: 2,
    explication: "1 Δ = 1 cm de déviation à 1 m.\nP (Δ) = [[décalage (cm)|distance (m)]] = [[3|0,50]] = 6 Δ.",
    indice: "1 Δ dévie de 1 cm à 1 m. Ramène le décalage à ce qu'il serait à 1 m : la distance se met en mètres."
  },
  {
    id: "U5-014", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "moyen",
    question: "Pour réaligner la barre de Maddox chez un sujet exophore, le prisme de réalignement est placé :",
    choix: ["Base interne (nasale)", "Base externe (temporale)", "Base supérieure", "Base inférieure"],
    bonne: 0,
    explication: "Exophorie → prisme base interne ; ésophorie → base externe. Le prisme dévie la lumière vers sa base : son sommet est orienté du côté où l'œil est parti, il ramène l'image dans la direction de la ligne de regard passive.",
    indice: "Un prisme dévie la lumière vers sa base, donc l'image vers son sommet. Oriente le sommet du côté où l'œil part en position passive."
  },
  {
    id: "U5-015", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "facile",
    question: "Selon le critère de Sheard, la vision est plutôt confortable si la réserve opposée à la phorie est au moins :",
    choix: ["Égale à la phorie", "Le double de la phorie", "Le triple de la phorie", "La moitié de la phorie"],
    bonne: 1,
    explication: "Sheard : réserve opposée à la phorie ≥ 2 × phorie. Pour une exophorie, c'est la réserve en convergence (prismes base externe) ; pour une ésophorie, la réserve en divergence (base interne). On prend le point de flou, ou le point de bris s'il n'y a pas de flou.",
    indice: "Sheard regarde la réserve opposée à la phorie : pour être confortable, elle doit offrir une vraie marge. Combien de fois la phorie ?"
  },

  // ---------- Anisométropie, aniséiconie, effets prismatiques ----------
  {
    id: "U5-016", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "moyen",
    question: "Anisométropie de puissance : OD −0,50 et OG −5,50 (sphériques), verres à 14 mm de l'œil. Estimation de l'aniséiconie en lunettes ?",
    choix: ["Environ 1,4 %", "Environ 5 %", "Environ 7 %", "Environ 14 %"],
    bonne: 2,
    explication: "Anisométropie de puissance : les deux yeux ont la même longueur, l'aniséiconie axile est nulle. Aniséiconie induite ≈ distance verre-œil (en cm) × différence des verres = 1,4 × 5 ≈ 7 %, en faveur de l'OD (le moins myope voit plus gros). Repères : moins de 3 % = pas de gêne ; 3 à 10 % = gêne possible de la fusion ; plus de 10 % = fusion le plus souvent impossible.",
    surLaCopie: "L'anisométropie est de puissance, donc l'aniséiconie axile est nulle. Aniséiconie induite ≈ distance verre-œil (en cm) × différence des verres = 1,4 × 5 ≈ 7 %, en faveur de l'OD. Elle est entre 3 et 10 % : la fusion peut être gênée.",
    indice: "Aniséiconie induite ≈ distance verre-œil en cm × différence de puissance des verres. Convertis bien 14 mm en cm.",
    schema: "img/schemas/U5/aniseiconie-7-pourcent.svg",
    schemaTexte: "Images rétiniennes : celle de l'OD est plus grande que celle de l'OG. Calcul 1,4 × 5 = 7 %, placé sur une jauge : moins de 3 % pas de gêne, 3 à 10 % gêne possible, plus de 10 % fusion difficile."
  },
  {
    id: "U5-017", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "facile",
    question: "Pour une anisométropie de PUISSANCE, quel équipement réduit le plus l'aniséiconie ?",
    choix: ["Des lunettes à 15 mm", "Des lentilles de contact", "Des lunettes à 25 mm", "Aucun équipement"],
    bonne: 1,
    explication: "L'aniséiconie induite dépend de la distance compensation-œil. En lentilles, cette distance passe d'environ 1,5 cm à quelques dixièmes de millimètre : l'aniséiconie devient beaucoup plus faible. Les lentilles sont donc l'équipement à conseiller. (Pour une anisométropie AXILE, la loi de Knapp favorise au contraire les lunettes placées au foyer objet de l'œil.)",
    surLaCopie: "Les lentilles de contact sont placées presque contre la cornée : la distance compensation-œil passe d'environ 1,5 cm à quelques dixièmes de millimètre. L'aniséiconie induite, proportionnelle à cette distance, devient beaucoup plus faible. Les lentilles sont donc l'équipement à conseiller.",
    indice: "L'aniséiconie induite dépend de la distance entre la compensation et l'œil. Quel équipement rend cette distance la plus petite ?"
  },
  {
    id: "U5-018", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "difficile",
    question: "Anisométropie purement AXILE : OD −1,00 et OG −6,00 (sphériques), verres à 15 mm de l'œil. Aniséiconie totale en lunettes ?",
    choix: ["Environ 1 %", "Environ 7,5 %", "Environ 8,5 %", "Environ 16 %"],
    bonne: 0,
    explication: "Anisométropie axile : les deux aniséiconies s'opposent. Axile ≈ 1,7 % par dioptrie de différence = 5 × 1,7 = 8,5 % en faveur de l'OG (le plus long, le plus myope). Induite par les lunettes ≈ LH (cm) × différence des verres = 1,5 × 5 = 7,5 % en faveur de l'OD (le moins myope). Totale ≈ 8,5 − 7,5 = 1 % (raccourci : environ 0,2 % par dioptrie avec LH = 15 mm). En lunettes, l'aniséiconie est donc presque compensée ; en lentilles, l'induite disparaît et il resterait 8,5 %.",
    surLaCopie: "Les aniséiconies axile et induite s'opposent. Axile : environ 1,7 % par dioptrie, soit 8,5 % en faveur de l'OG. Induite : distance verre-œil 1,5 cm × 5 ≈ 7,5 % en faveur de l'OD. Totale : environ 1 %, les lunettes compensent presque tout.",
    indice: "Deux effets s'opposent : l'œil le plus long fait une image plus grande, et les lunettes en font une plus petite. Estime les deux, puis compare-les."
  },
  {
    id: "U5-019", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "moyen",
    question: "OD +1,00 et OG +4,00 (sphériques). En lecture, le regard passe 1 cm sous les centres optiques. Effet prismatique vertical différentiel ?",
    choix: ["1 Δ", "3 Δ", "4 Δ", "5 Δ"],
    bonne: 1,
    explication: "Prentice : P = d (cm) × |D|. OD : 1 × 1 = 1 Δ ; OG : 1 × 4 = 4 Δ. Verres convergents, regard sous le centre optique : base supérieure pour les deux. Différentiel = 4 − 1 = 3 Δ base supérieure sur l'OG. Les réserves fusionnelles verticales sont faibles (bris vers 3 Δ) : risque de vision double.",
    indice: "Prentice : P (Δ) = d (cm) × |D|, pour chaque œil. Les deux verres sont de même signe : ce que ressent le couple, c'est l'écart entre les deux.",
    schema: "img/schemas/U5/prentice-od1-og4.svg",
    schemaTexte: "Lunettes vues de face, OD à gauche. Point de regard 1 cm sous chaque centre optique : 1 Δ base supérieure sur l'OD, 4 Δ base supérieure sur l'OG, différentiel 3 Δ."
  },
  {
    id: "U5-020", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Verre +4,00 vu de côté. Le regard passe 1 cm sous le centre optique. Quel schéma de l'effet prismatique est juste ?",
    choix: ["1 cm sous le centre, 4 Δ base supérieure", "1 cm sous le centre, 4 Δ base inférieure", "1 cm sous le centre, 40 Δ base supérieure", "1 cm au-dessus du centre, 4 Δ base inférieure"],
    choixSchemas: ["img/schemas/U5/prisme-choix-juste.svg", "img/schemas/U5/prisme-choix-faux-base.svg", "img/schemas/U5/prisme-choix-faux-mm.svg", "img/schemas/U5/prisme-choix-faux-dessus.svg"],
    bonne: 0,
    explication: "Prentice : P = d (cm) × |D| = 1 × 4 = 4 Δ. Un verre convergent se comporte comme deux prismes accolés par leur base au centre optique : sous le centre, la base est vers le haut (base supérieure). Les pièges : la base inférieure (c'est le cas d'un verre divergent), 40 Δ (décentrement compté en mm au lieu de cm), ou placer le point de regard au-dessus du centre.",
    indice: "Un verre convergent se représente par deux prismes accolés par leur base, au centre optique. Et dans Prentice, d s'exprime en centimètres."
  },
  {
    id: "U5-021", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "moyen",
    question: "Pourquoi un anisométrope équipé en lentilles ne voit-il plus double quand il regarde vers le haut ?",
    choix: ["Les lentilles de contact compensent la phorie verticale du sujet", "La lentille suit l'œil : le regard reste centré, aucun prisme différentiel", "Les lentilles de contact augmentent les réserves fusionnelles du sujet", "Les lentilles de contact suppriment définitivement l'anisométropie"],
    bonne: 1,
    explication: "Vers le haut, les verres de puissances différentes créent un prisme vertical différent sur chaque œil (règle de Prentice), d'où une hyperphorie qui peut donner une diplopie. La lentille accompagne l'œil : le regard passe toujours par son centre, aucun prisme ne s'ajoute et le sujet ne voit plus double.",
    surLaCopie: "Vers le haut, les verres de puissances différentes créent un prisme vertical différent sur chaque œil (règle de Prentice), d'où une hyperphorie qui peut donner une diplopie. La lentille accompagne l'œil : le regard passe toujours par son centre, aucun prisme ne s'ajoute et le sujet ne voit plus double.",
    indice: "En lunettes, l'effet prismatique vient de l'écart entre la ligne de regard et le centre optique. Que devient cet écart si la compensation bouge avec l'œil ?"
  },
  {
    id: "U5-022", epreuve: "U5", theme: "Anisométropie", session: "2023",
    difficulte: "facile",
    question: "Un enfant anisométrope non compensé développe une amblyopie fonctionnelle de l'œil le plus amétrope. Pourquoi ?",
    choix: ["Une lésion organique de la rétine de cet œil, présente dès la naissance", "L'image floue de cet œil pendant la maturation visuelle de l'enfant", "Un glaucome congénital non dépisté, qui détruit le nerf optique", "Une cataracte congénitale qui opacifie le cristallin de cet œil"],
    bonne: 1,
    explication: "Amblyopie fonctionnelle = baisse d'acuité liée à la non-utilisation d'un œil pendant la période de maturation visuelle, sans lésion organique. Le cerveau privilégie l'image nette de l'autre œil. Si chaque œil est utilisé à son tour (un pour le loin, l'autre pour le près), l'amblyopie peut ne pas apparaître.",
    surLaCopie: "L'œil le plus amétrope donne une image floue pendant la période de maturation visuelle. Le cerveau privilégie l'image nette de l'autre œil et n'utilise plus le premier. Sans lésion organique, l'acuité de cet œil reste basse : c'est une amblyopie fonctionnelle.",
    indice: "Fonctionnelle veut dire sans lésion. Pense à ce que le cerveau reçoit de chaque œil pendant l'enfance, quand le système visuel se construit."
  },

  // ---------- Examen préliminaire ----------
  {
    id: "U5-023", epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    difficulte: "moyen",
    question: "Compensation portée OD −2,00 (−1,00) 180° ; autoréfractomètre OD −3,00 (−0,50) 180°. Réfraction complémentaire attendue (en équivalents sphériques), si l'autoréfractomètre était exact ?",
    choix: ["+0,75", "−0,75", "−0,50", "−1,00"],
    bonne: 1,
    explication: "Équivalent sphérique = S + [[C|2]].\nPortée : −2,00 + [[−1,00|2]] = −2,50.\nAutoréfractomètre : −3,00 + [[−0,50|2]] = −3,25.\nRC = −3,25 − (−2,50) = −0,75.\nAttention : à l'autoréfractomètre, le sujet accommode souvent (accommodation instrumentale) et la myopie est surestimée. On vérifie avec les acuités.",
    indice: "Équivalent sphérique = S + C/2, pour la portée et pour l'autoréfractomètre. La réfraction complémentaire, c'est ce qu'il faut ajouter à la portée."
  },
  {
    id: "U5-024", epreuve: "U5", theme: "Examen préliminaire", session: "2020 et 2024",
    difficulte: "difficile",
    question: "Avec sa compensation, un sujet lit 10/10. On ajoute +2,00 : son acuité tombe à 2/10. Sphère résiduelle estimée (essai de verre convexe) ?",
    choix: ["+0,75", "−0,75", "+1,25", "0,00"],
    bonne: 0,
    explication: "Règle de Swaine (valable pour une acuité ≤ 5/10) :\nbrouillage ≈ [[1|4 × AV]] = [[1|4 × 0,2]] = [[1|0,8]] = 1,25 δ.\nSphère résiduelle = verre ajouté − brouillage = +2,00 − 1,25 = +0,75 δ.\nIl reste donc une hypermétropie résiduelle : le sujet est sous-compensé en positif.",
    indice: "Règle de Swaine : brouillage ≈ [[1|4 × AV]]. Le verre ajouté produit ce brouillage avec la sphère résiduelle : fais la différence, attention au signe."
  },
  {
    id: "U5-025", epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    difficulte: "moyen",
    question: "Au cadran de Parent (sujet légèrement myopisé), la ligne 3h-9h est vue la plus noire. Axe du cylindre négatif compensateur ?",
    choix: ["30°", "90°", "180°", "120°"],
    bonne: 1,
    explication: "Sujet myopisé : les deux focales sont en avant de la rétine, et la ligne vue la plus noire est parallèle à la focale arrière, la plus proche de la rétine. Elle est horizontale (0°-180°). L'axe du cylindre négatif est perpendiculaire à la direction vue la plus noire : 90°. À l'examen, le calcul avec les heures du cadran (× 30) ne justifie rien : il faut raisonner sur les focales.",
    surLaCopie: "Le sujet est légèrement myopisé : les deux focales sont en avant de la rétine. La ligne vue la plus noire est parallèle à la focale arrière, la plus proche de la rétine. Elle est horizontale. L'axe du cylindre négatif est perpendiculaire : 90°.",
    indice: "Sujet myopisé : la ligne la plus noire correspond à la focale arrière. L'axe du cylindre négatif est perpendiculaire à cette ligne.",
    schema: "img/schemas/U5/cadran-parent-3-9.svg",
    schemaTexte: "Cadran de Parent : la ligne 3h-9h, horizontale, est la plus noire. C'est la focale arrière ; l'axe du cylindre négatif est perpendiculaire, à 90°."
  },
  {
    id: "U5-026", epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    difficulte: "moyen",
    question: "Pourquoi myopise-t-on légèrement le sujet avant le cadran de Parent ?",
    choix: ["Pour mesurer l'acuité visuelle de chaque œil avant de commencer le test", "Pour placer les focales avant la rétine : l'accommodation ne fausse plus le test", "Pour mesurer la phorie du sujet avant de passer au cadran de lignes", "Pour tester la vision des couleurs avant l'examen du cylindre"],
    bonne: 1,
    explication: "Avec une défocalisation en avant de la rétine, la ligne la plus noire correspond toujours à la focale arrière, et accommoder ne ferait qu'aggraver le flou : le sujet n'a pas intérêt à accommoder.",
    surLaCopie: "On myopise légèrement pour placer les deux focales en avant de la rétine. L'accommodation ne ferait alors qu'augmenter le flou : le sujet n'a pas intérêt à accommoder, et la ligne la plus noire est bien la focale arrière.",
    indice: "Si les deux focales sont en avant de la rétine, que se passerait-il si le sujet accommodait : plus net ou plus flou ?"
  },
  {
    id: "U5-027", epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    difficulte: "moyen",
    question: "Un myope de −2,00 non compensé lit à 25 cm. Quelle accommodation met-il en jeu ?",
    choix: ["0 δ", "2 δ", "4 δ", "6 δ"],
    bonne: 1,
    explication: "Acc = R − [[1|HT]] = −2,00 − [[1|−0,25]] = −2,00 + 4,00 = 2 δ.\nSon remotum est à 50 cm : il n'a que 2 δ à fournir pour lire à 25 cm.",
    indice: "Acc = R − [[1|HT]], avec HT négatif et en mètres. Le remotum d'un myope de −2,00 est déjà à 50 cm : il part avec de l'avance.",
    schema: "img/schemas/U5/accommodation-myope-2.svg",
    schemaTexte: "Axe des proximités 1/HT : le remotum R est à −2 δ (50 cm), le texte T à −4 δ (25 cm). L'écart entre R et T vaut l'accommodation, 2 δ. Le texte est déplaçable."
  },
  {
    id: "U5-028", epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    difficulte: "moyen",
    question: "Un hypermétrope de +1,50 non compensé lit à 50 cm. Quelle accommodation met-il en jeu ?",
    choix: ["2,00 δ", "0,50 δ", "3,50 δ", "1,50 δ"],
    bonne: 2,
    explication: "Acc = R − [[1|HT]] = +1,50 − [[1|−0,50]] = 1,50 + 2,00 = 3,50 δ.\nC'est 2 δ pour la distance, plus 1,50 δ pour compenser son hypermétropie.",
    indice: "Même formule : Acc = R − [[1|HT]], avec HT = −0,50 m. L'hypermétrope doit d'abord compenser son amétropie, puis la distance."
  },

  // ---------- Réfraction ----------
  {
    id: "U5-029", epreuve: "U5", theme: "Réfraction", session: "2023",
    difficulte: "facile",
    question: "Quelle est la formule sphéro-cylindrique d'un cylindre croisé (CCR) ±0,25 dont l'axe du cylindre négatif est à 90° ?",
    choix: ["+0,25 (−0,50) 90°", "−0,25 (+0,25) 90°", "0,00 (−0,25) 90°", "+0,50 (−0,25) 90°"],
    bonne: 0,
    explication: "Le CCR (cylindre croisé par retournement) ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre : sphère +0,25, cylindre −0,50, à l'axe du cylindre négatif.",
    indice: "Un CCR ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre. En cylindre négatif, la sphère est la plus grande des deux valeurs, le cylindre l'écart entre elles.",
    schema: "img/schemas/U5/ccr-0-25-axe-90.svg",
    schemaTexte: "Cylindre croisé vu de face : points rouges (axe du cylindre négatif) à 90°, points blancs (axe du cylindre positif) à 0°, manche à 45°. Formule +0,25 (−0,50) 90°."
  },
  {
    id: "U5-030", epreuve: "U5", theme: "Réfraction", session: "2020",
    difficulte: "moyen",
    question: "Lors de la vérification de la puissance du cylindre, on ajoute −0,50 de cylindre. Comment ajuster la sphère ?",
    choix: ["Ajouter −0,25", "Ajouter +0,25", "Ajouter +0,50", "Ne rien changer"],
    bonne: 1,
    explication: "On garde l'équivalent sphérique constant pour maintenir le cercle de moindre diffusion sur la rétine (acc = 0) : −0,50 de cylindre fait −0,25 d'équivalent sphérique, qu'on compense par +0,25 de sphère.",
    indice: "Le but est de garder le cercle de moindre diffusion sur la rétine : l'équivalent sphérique S + C/2 ne doit pas bouger."
  },
  {
    id: "U5-031", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "facile",
    question: "Au test rouge-vert, le sujet voit plus net sur le rouge. Que faites-vous ?",
    choix: ["Ajouter −0,25 δ", "Ajouter +0,25 δ", "Tourner l'axe du cylindre", "Rien, l'équilibre est bon"],
    bonne: 0,
    explication: "Rouge plus net : l'image est en avant de la rétine (trop de positif). Moyen mnémotechnique « RAM » : Rouge → Ajouter du Moins.",
    indice: "Le vert est plus réfracté que le rouge : son foyer est en avant. Si le rouge est plus net, de quel côté de la rétine sont les foyers ?",
    schema: "img/schemas/U5/rouge-vert-ram.svg",
    schemaTexte: "Profil de l'œil : à l'équilibre, la rétine est entre le foyer vert (devant) et le foyer rouge (derrière). Rouge plus net : les deux foyers sont en avant de la rétine, il faut ajouter du négatif."
  },
  {
    id: "U5-032", epreuve: "U5", theme: "Réfraction", session: "2024",
    difficulte: "difficile",
    question: "Client anisométrope, vision binoculaire fragile. Pour l'équilibre bioculaire, quel test préférer ?",
    choix: ["Lignes de lettres dissociées par prisme", "Test rouge-vert polarisé", "Cadran de Parent", "Test de Worth"],
    bonne: 1,
    explication: "Avec les lignes dissociées par prisme, la dissociation est totale : risque de neutralisation d'un œil, et l'anisométrope compare des images de tailles différentes. Avec le rouge-vert polarisé, la dissociation est partielle (favorise la vision binoculaire) et chaque œil juge sa propre mise au point, sans comparer les deux yeux.",
    indice: "Compare les deux dissociations : totale (le sujet voit double) ou partielle ? Et quel test oblige à comparer des images de tailles différentes ?"
  },
  {
    id: "U5-033", epreuve: "U5", theme: "Réfraction", session: "2022",
    difficulte: "facile",
    question: "Pourquoi utilise-t-on le brouillage en réfraction subjective ?",
    choix: ["Pour relâcher l'accommodation", "Pour mesurer l'astigmatisme", "Pour tester la vision des couleurs", "Pour stimuler la convergence"],
    bonne: 0,
    explication: "En ajoutant du positif, l'image passe en avant de la rétine : accommoder ne ferait qu'augmenter le flou, le sujet relâche son accommodation. Indispensable pour ne pas sous-compenser un hypermétrope ni surcompenser un myope.",
    surLaCopie: "Le brouillage place l'image en avant de la rétine. Accommoder aggraverait le flou : le sujet relâche son accommodation. Cela évite de sous-compenser un hypermétrope ou de surcompenser un myope.",
    indice: "Le brouillage ajoute du positif : l'image passe devant la rétine. Que gagnerait le sujet à accommoder dans ce cas ?"
  },

  // ---------- Lentilles de contact ----------
  {
    id: "U5-034", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Un rayon de courbure cornéen de 7,50 mm correspond à une puissance lue au kératomètre de :",
    choix: ["40 δ", "42 δ", "45 δ", "47,50 δ"],
    bonne: 2,
    explication: "Avec l'indice d'étalonnage des kératomètres (1,3375) :\nK ≈ [[337,5|r (mm)]] = [[337,5|7,5]] = 45 δ.\nÀ connaître sans calculatrice.",
    indice: "Utilise K (δ) ≈ 337,5 / r, avec r en mm (indice d'étalonnage 1,3375). Pose la division : elle tombe juste."
  },
  {
    id: "U5-035", epreuve: "U5", theme: "Lentilles", session: "2020 et 2023",
    difficulte: "moyen",
    question: "Kératométrie : 7,75 mm à 0° et 7,65 mm à 90°. Astigmatisme cornéen (face avant) ?",
    choix: ["0,60 δ direct", "0,60 δ inverse", "1,00 δ direct", "0,25 δ inverse"],
    bonne: 0,
    explication: "Toricité = 7,75 − 7,65 = 0,10 mm, soit environ 0,60 δ (indice réel de la cornée ; un kératomètre affiche plutôt 0,50 δ). Le méridien vertical (90°) a le plus petit rayon, il est le plus cambré : astigmatisme direct, compensé par plan (−0,60) 0°.",
    indice: "Retiens : 0,10 mm d'écart de rayon ≈ 0,60 δ. Pour la nature, repère le méridien le plus cambré (le plus petit rayon) : vertical ou horizontal ?"
  },
  {
    id: "U5-036", epreuve: "U5", theme: "Lentilles", session: "2023",
    difficulte: "moyen",
    question: "Un œil a 1,00 δ d'astigmatisme cornéen direct mais aucun astigmatisme total. Son astigmatisme interne est :",
    choix: ["Nul", "1,00 δ direct", "1,00 δ inverse", "2,00 δ direct"],
    bonne: 2,
    explication: "Astigmatisme total = cornéen (+) interne. Pour un total nul, l'interne compense exactement le cornéen : 1,00 δ inverse (compensé par plan (−1,00) 90°). Le sens est habituel (cornée directe, interne inverse), mais 1,00 δ d'interne dépasse la valeur courante, d'environ 0,50 δ.",
    surLaCopie: "L'astigmatisme total est la somme du cornéen et de l'interne. Le total est nul : l'interne compense exactement le cornéen, il vaut donc 1,00 δ inverse. Le sens est habituel (cornée directe, interne inverse), mais 1,00 δ dépasse la valeur courante, d'environ 0,50 δ.",
    indice: "Astigmatisme total = cornéen (+) interne. Si le total est nul, l'interne doit annuler le cornéen : même valeur, et quelle nature ?"
  },
  {
    id: "U5-037", epreuve: "U5", theme: "Lentilles", session: "2023",
    difficulte: "facile",
    question: "Selon Harvitt et Bonanno, quelle transmissibilité minimale (Dk/e, en 10⁻⁹ unités Fatt) faut-il pour un port nocturne sans hypoxie ?",
    choix: ["24", "35", "87", "125"],
    bonne: 3,
    explication: "Critère de Harvitt et Bonanno (1999), retenu au BTS : 35 pour le port journalier, 125 pour le port prolongé (nocturne). Les fortes valeurs de Dk/e correspondent aux silicone-hydrogels.",
    indice: "Le BTS retient Harvitt et Bonanno : une valeur pour le port journalier, une autre bien plus haute pour le port de nuit, paupières fermées."
  },
  {
    id: "U5-038", epreuve: "U5", theme: "Lentilles", session: "2020",
    difficulte: "facile",
    question: "Citez les 3 couches du film lacrymal, de l'air vers la cornée.",
    choix: ["Lipidique, aqueuse, mucinique", "Aqueuse, lipidique, mucinique", "Mucinique, aqueuse, lipidique", "Lipidique, mucinique, aqueuse"],
    bonne: 0,
    explication: "Lipidique en surface (limite l'évaporation), aqueuse au milieu, mucinique au contact de la cornée (mouillabilité). La stabilité du film, évaluée par le BUT, dépend surtout de la couche lipidique.",
    indice: "Pense au rôle de chaque couche : une freine l'évaporation (donc côté air), une autre aide les larmes à mouiller la cornée (donc au contact)."
  },
  {
    id: "U5-039", epreuve: "U5", theme: "Lentilles", session: "2024",
    difficulte: "facile",
    question: "Quelle est la norme du Break-Up Time (BUT) ?",
    choix: ["3 à 5 secondes", "5 à 8 secondes", "10 à 20 secondes", "30 à 60 secondes"],
    bonne: 2,
    explication: "Le BUT évalue la qualité des larmes ; la norme est de 10 à 20 s. En dessous de 10 s, c'est une contre-indication aux lentilles souples hydrogel. La quantité de larmes s'évalue avec la hauteur de la rivière lacrymale (norme 0,2 à 0,4 mm).",
    indice: "Le BUT mesure le temps avant la première rupture du film lacrymal après un clignement. Sous la norme, on hésite à poser des lentilles souples."
  },
  {
    id: "U5-040", epreuve: "U5", theme: "Lentilles", session: "2020",
    difficulte: "moyen",
    question: "Au contrôle à la fluorescéine, une LRPG laisse passer beaucoup de colorant sur le bord et presque pas au milieu, et elle se déplace trop à chaque clignement. L'adaptation est :",
    choix: ["Serrée", "Alignée", "Plate", "Parfaite"],
    bonne: 2,
    explication: "Appui central (peu de fluorescéine au centre) + forte mobilité = adaptation plate. On resserre en diminuant le rayon de la face arrière (ro).",
    surLaCopie: "Peu de fluorescéine au centre signe un appui central, et la lentille bouge trop : l'adaptation est plate. Pour la resserrer, on diminue le rayon de la face arrière (ro).",
    indice: "La fluorescéine s'accumule là où la lentille est décollée de la cornée. Peu au centre = appui au centre : compare le rayon de la lentille à celui de la cornée.",
    schema: "img/schemas/U5/fluo-lrpg-plate.svg",
    schemaTexte: "Trois images de fluorescéine sous lentille rigide : alignée (film régulier), plate (centre sombre, périphérie verte, appui central) et serrée (réservoir vert au centre). Profil sous chaque image."
  },
  {
    id: "U5-041", epreuve: "U5", theme: "Lentilles", session: "2020",
    difficulte: "moyen",
    question: "On resserre une LRPG en diminuant son ro de 0,10 mm. Le ménisque de larmes devient :",
    choix: ["Plus convergent d'environ +0,50 δ", "Plus divergent d'environ −0,50 δ", "Inchangé", "Plus convergent d'environ +1,00 δ"],
    bonne: 0,
    explication: "Une modification de 10/100 de mm du ro change la vergence du ménisque de larmes d'environ 0,50 δ. Lentille plus cambrée = ménisque plus convexe (+0,50 δ). On commande donc une lentille plus divergente de 0,50 δ.",
    indice: "Retiens : 0,10 mm de ro ≈ 0,50 δ de ménisque de larmes. Une lentille plus cambrée laisse un ménisque plus bombé à l'avant : convergent ou divergent ?"
  },

  // ---------- Pathologie ----------
  {
    id: "U5-042", epreuve: "U5", theme: "Pathologie", session: "2024",
    difficulte: "facile",
    question: "La mesure de la pression intraoculaire (PIO) sert principalement au dépistage :",
    choix: ["De la cataracte", "Du glaucome", "De la DMLA", "Du kératocône"],
    bonne: 1,
    explication: "Une PIO élevée est le principal facteur de risque du glaucome. La cataracte se dépiste à la lampe à fente (biomicroscope) par l'ophtalmologiste.",
    indice: "La PIO est le principal facteur de risque d'une maladie du nerf optique. La cataracte, elle, se voit à la lampe à fente."
  },
  {
    id: "U5-043", epreuve: "U5", theme: "Pathologie", session: "2023",
    difficulte: "facile",
    question: "Quelle est la valeur moyenne d'une PIO normale, et à partir de quand est-elle jugée trop forte ?",
    choix: ["Environ 8 mmHg, trop forte au-delà de 12", "Environ 16 mmHg, trop forte au-delà de 21", "Environ 25 mmHg, trop forte au-delà de 35", "Environ 40 mmHg, trop forte au-delà de 50"],
    bonne: 1,
    explication: "PIO moyenne d'environ 16 mmHg ; au-delà de 21 mmHg (pour une cornée d'épaisseur normale), elle est jugée trop forte. Une PIO normale n'exclut pas un glaucome : champ visuel et fond d'œil complètent. Des antécédents familiaux de glaucome à angle ouvert justifient la mesure.",
    indice: "Retiens deux repères : la moyenne de la population et le seuil d'alerte, qui n'est que quelques mmHg au-dessus. Méfie-toi des valeurs extrêmes."
  },
  {
    id: "U5-044", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "facile",
    question: "Un sujet de 70 ans devient plus myope et peut de nouveau lire sans lunettes. Cela évoque :",
    choix: ["Un glaucome chronique à angle ouvert, avec une PIO élevée", "Une cataracte nucléaire : le cristallin plus dense rend l'œil plus myope", "Une DMLA, avec une atteinte de la vision centrale et des lignes déformées", "Un décollement de rétine, avec des éclairs et un voile dans le champ"],
    bonne: 1,
    explication: "La cataracte (opacification du cristallin) nucléaire augmente l'indice du cristallin : l'œil devient plus myope. Autres symptômes : baisse d'acuité, sensation de brouillard, photophobie (éblouissement), diplopie monoculaire, couleurs altérées.",
    indice: "Si le noyau du cristallin devient plus dense, sa puissance augmente. Un œil plus puissant devient plus… ? Et le presbyte retrouve sa vision de près."
  },

  // ---------- Mini-cas 1 : anisométropie de puissance (CAS-U5-01) ----------
  {
    id: "U5-045",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 1,
    question: "D'après l'histoire de cas seulement, quelle hypothèse faire sur ses deux yeux ?",
    choix: ["Les deux yeux sont myopes, l'OG davantage", "Les deux yeux sont hypermétropes, l'OG davantage", "Seul l'OD est myope", "Les deux yeux ont la même amétropie"],
    bonne: 0,
    explication: "Sans lunettes, il voit flou de loin : les deux yeux sont myopes. L'OG voit encore moins bien de loin : il est plus myope. Avec ses lunettes, l'OG voit plus petit : c'est l'effet rapetissant d'un verre divergent plus fort. On suspecte donc une anisométropie.",
    indice: "Deux indices : qui voit flou de loin sans lunettes, et quel verre fait voir les objets plus petits ?"
  },
  {
    id: "U5-046",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Worth",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 2,
    contexte: "Sans lunettes, test de Worth à 40 cm, filtre rouge sur l'OD : il ne voit que 2 symboles rouges.",
    question: "Conclusion, et pourquoi cet œil-là ?",
    choix: ["Neutralisation de l'OG, dont l'image est la plus floue à 40 cm", "Neutralisation de l'OD, l'œil le moins myope des deux yeux du sujet", "Diplopie : vision simultanée sans fusion, avec cinq symboles perçus", "Vision binoculaire normale avec dominance de l'OD, quatre symboles perçus"],
    bonne: 0,
    explication: "Seul l'œil au filtre rouge (OD) voit : l'OG est neutralisé. Sans lunettes, l'OG très myope a son remotum plus près que 40 cm : son image est floue, et le cerveau supprime l'image la plus floue. Avec la compensation, les images s'équilibrent et la vision simultanée peut revenir.",
    indice: "Quel filtre est devant chaque œil ? Puis demande-toi lequel des deux yeux voit le plus flou à 40 cm sans lunettes."
  },
  {
    id: "U5-047",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 3,
    contexte: "Avec ses lunettes (OD −1,00 ; OG −4,00), cylindre de Maddox sur l'OD, test à 40 cm : la barre est vue à 3,2 cm à GAUCHE du point lumineux.",
    question: "Nature et valeur de la phorie de près ?",
    choix: ["Exophorie de 8 Δ", "Ésophorie de 8 Δ", "Exophorie de 1,28 Δ", "Ésophorie de 12,8 Δ"],
    bonne: 0,
    explication: "L'image de l'OD est vue du côté opposé à l'OD : diplopie croisée, donc exophorie.\nValeur : P = [[3,2 cm|0,40 m]] = 8 Δ.",
    indice: "Côté de la barre par rapport à l'œil qui porte le Maddox : homonyme ou croisée ? Puis 1 Δ = 1 cm à 1 m, distance en mètres."
  },
  {
    id: "U5-048",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 4,
    question: "Ces 8 Δ d'exophorie de près sont-ils dans la norme ?",
    choix: ["Hors norme : de près, on attend 4 à 6 Δ d'exophorie", "Dans la norme : de près, on attend 4 à 6 Δ d'exophorie, et 8 Δ s'en approche", "Dans la norme : toute exophorie de près est normale", "Hors norme : de près, on attend une orthophorie"],
    bonne: 0,
    explication: "Norme de von Graefe à 40 cm : 4 à 6 Δ d'exophorie. 8 Δ dépasse : l'exophorie est trop forte, hors norme. Le couple devra fournir plus d'effort de convergence pour voir simple, ce qui peut expliquer la fatigue en fin de journée.",
    indice: "Récite d'abord la norme de près, puis compare. « Proche » ne veut pas dire « dans la norme »."
  },
  {
    id: "U5-049",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 5,
    contexte: "Les verres sont à 15 mm de l'œil. L'anisométropie est de puissance (les deux yeux ont la même longueur).",
    question: "Aniséiconie estimée en lunettes, et conclusion ?",
    choix: ["4,5 % : la fusion peut être gênée", "4,5 % : aucune gêne à prévoir", "0,45 % : aucune gêne à prévoir", "45 % : la fusion est impossible"],
    bonne: 0,
    explication: "Anisométropie de puissance : l'aniséiconie axile est nulle, il ne reste que l'induite ≈ 1,5 cm × |−1,00 − (−4,00)| = 1,5 × 3 = 4,5 %, en faveur de l'OD. Entre 3 et 10 %, la fusion peut être gênée.",
    indice: "Aniséiconie induite ≈ distance verre-œil en cm × différence des verres. Puis compare aux repères de 3 % et 10 %."
  },
  {
    id: "U5-050",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "2024",
    cas: "CAS-U5-01",
    etape: 6,
    question: "Pourquoi lui proposer des lentilles de contact ?",
    choix: ["La lentille, posée sur l'œil, réduit l'aniséiconie et suit le regard : plus de prisme différentiel", "Les lentilles changent la longueur de l'œil et suppriment ainsi l'anisométropie du sujet", "Les lentilles compensent l'exophorie de près du sujet, par un effet prismatique propre", "Les lentilles augmentent les réserves fusionnelles du sujet, ce qui supprime la diplopie"],
    bonne: 0,
    explication: "L'aniséiconie induite dépend de la distance compensation-œil : de 15 mm en lunettes, elle passe à moins de 2 mm en lentilles et devient très faible. La lentille suit l'œil, donc le regard reste centré : plus de prisme différentiel. La fusion est facilitée, ce qui répond à la plainte.",
    indice: "De quoi dépend l'aniséiconie induite ? Et que devient le décentrement quand la compensation bouge avec l'œil ?"
  },

  // ---------- Mini-cas 2 : hypermétropie latente et ésophorie (CAS-U5-02) ----------
  {
    id: "U5-051",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2020 et 2024",
    cas: "CAS-U5-02",
    etape: 1,
    contexte: "Avec sa compensation (+0,50 aux deux yeux), elle lit 10/10. On ajoute +1,50 : son acuité tombe à 5/10.",
    question: "Sphère résiduelle estimée ?",
    choix: ["+1,00", "+0,50", "−1,00", "0,00"],
    bonne: 0,
    explication: "Acuité ≤ 5/10 : la règle de Swaine s'applique.\nBrouillage ≈ [[1|4 × 0,5]] = [[1|2]] = 0,50 δ.\nSphère résiduelle = +1,50 − 0,50 = +1,00 δ : elle est sous-compensée de +1,00, une hypermétropie latente.",
    indice: "Règle de Swaine : brouillage ≈ [[1|4 × AV]]. Le verre ajouté se partage entre ce brouillage et la sphère résiduelle."
  },
  {
    id: "U5-052",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2023",
    cas: "CAS-U5-02",
    etape: 2,
    question: "Avec sa compensation actuelle (sous-compensée de +1,00), quelle accommodation pour lire à 40 cm ?",
    choix: ["3,50 δ", "2,50 δ", "1,50 δ", "4,50 δ"],
    bonne: 0,
    explication: "La sphère résiduelle (+1,00) se comporte comme une hypermétropie non compensée :\nAcc ≈ R − [[1|HT]] = +1,00 − [[1|−0,40]] = 1,00 + 2,50 = 3,50 δ.\nC'est 1,00 δ de plus que les 2,50 δ qu'il fournirait s'il était bien compensé.",
    indice: "Traite la sphère résiduelle comme une petite hypermétropie : Acc = R − [[1|HT]], avec HT = −0,40 m."
  },
  {
    id: "U5-053",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "2024",
    cas: "CAS-U5-02",
    etape: 3,
    contexte: "Test du masquage de près : aucun mouvement au masquage. Au démasquage de l'OD, mouvement naso-temporal.",
    question: "Conclusion ?",
    choix: ["Ésophorie", "Exophorie", "Ésotropie", "Exotropie"],
    bonne: 0,
    explication: "Aucun mouvement au masquage : pas de tropie. Mouvement au démasquage : phorie. L'œil revient vers la tempe, il était donc parti vers le nez sous le cache : ésophorie.",
    indice: "Masquage ou démasquage : lequel signe une phorie ? Puis, si l'œil revient vers la tempe, où était-il sous le cache ?"
  },
  {
    id: "U5-054",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "2024",
    cas: "CAS-U5-02",
    etape: 4,
    contexte: "Au prisme, vous mesurez 4 Δ d'ésophorie de près.",
    question: "Par rapport à la norme ?",
    choix: ["Hors norme : de près, on attend 4 à 6 Δ d'exophorie", "Dans la norme : 4 à 6 Δ, c'est la valeur attendue", "Dans la norme : de près, l'orthophorie est attendue", "Hors norme : l'exophorie est trop forte"],
    bonne: 0,
    explication: "De près, la norme est une exophorie de 4 à 6 Δ. Ici c'est une ésophorie : on est du mauvais côté, hors norme. Le chiffre 4 ne suffit pas, il faut regarder le sens.",
    indice: "Une norme a une valeur ET un sens (éso ou exo). Vérifie les deux."
  },
  {
    id: "U5-055",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    cas: "CAS-U5-02",
    etape: 5,
    question: "Quel lien entre ces résultats et ses maux de tête en lecture ?",
    choix: ["Sous-compensée, elle accommode trop et converge trop : compenser la sphère devrait réduire l'ésophorie", "Elle est exophore : il lui faut des prismes base externe pour soulager sa convergence en lecture", "L'ésophorie vient d'une myopie non compensée : il faut ajouter du négatif aux deux yeux", "Les maux de tête viennent d'une tropie intermittente : il faut l'orienter en orthoptie pour une rééducation"],
    bonne: 0,
    explication: "L'hypermétropie latente oblige à accommoder davantage (3,50 δ au lieu de 2,50 δ). L'accommodation entraîne de la convergence (convergence accommodative) : les yeux convergent trop, d'où l'ésophorie de près et la fatigue. Compenser les +1,00 manquants diminue l'accommodation, donc l'ésophorie.",
    indice: "Accommodation et convergence sont liées. Si elle accommode trop, que font ses yeux en convergence ?"
  },

  // ---------- Quelle justification est juste ? ----------
  {
    id: "U5-056",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    question: "Au démasquage de l'OG, mouvement temporo-nasal ; rien au masquage. Quelle rédaction est juste et complète ?",
    choix: ["C'est une exophorie, puisque l'OG est dévié vers la tempe.", "Mouvement temporo-nasal au démasquage : c'est une ésophorie, puisque l'œil va vers le nez, au démasquage comme au masquage.", "Au démasquage, l'OG revient vers le nez, ce qui montre qu'il était dévié vers la tempe sous le cache, sans autre conclusion.", "Rien au masquage : pas de tropie. L'OG revient vers le nez au démasquage : dévié vers la tempe, c'est une exophorie."],
    bonne: 3,
    explication: "Une bonne rédaction donne l'argument ET la conclusion. « C'est une exophorie » seul n'a pas d'argument ; la phrase qui explique le mouvement sans conclure est incomplète ; celle qui conclut à une ésophorie se trompe de sens (l'œil revient vers le nez, il était parti vers la tempe).",
    surLaCopie: "Rien au masquage : il n'y a pas de tropie. Au démasquage l'OG revient vers le nez, il était donc parti vers la tempe sous le cache. Je conclus à une exophorie de l'OG.",
    indice: "Cherche la phrase qui a les deux : l'observation interprétée (où était l'œil sous le cache) et le mot de conclusion."
  },
  {
    id: "U5-057",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    question: "BUT mesuré : 7 s. Quelle rédaction est juste et complète ?",
    choix: ["La norme du BUT est de 10 à 20 s et le sujet est à 7 s, ce qui est donc un résultat à noter", "BUT de 7 s, sous la norme de 10 à 20 s : film instable, souple hydrogel déconseillée", "Le BUT est trop court, ce qui est un résultat à signaler dans le dossier de la cliente", "BUT de 7 s : il est normal, car supérieur à 5 s, donc aucune précaution pour la lentille"],
    bonne: 1,
    explication: "La rédaction attendue : valeur du sujet, norme, comparaison, conséquence. La phrase qui compare sans conclure est incomplète, « le BUT est trop court » conclut sans norme, et celle qui juge 7 s normal utilise une mauvaise norme (5 s concerne le film pré-lentille, pas le BUT).",
    surLaCopie: "Le BUT mesuré est de 7 s. La norme est de 10 à 20 s. Il est sous la norme : le film lacrymal est instable, ce qui contre-indique les lentilles souples hydrogel classiques (certains silicone-hydrogel restent possibles).",
    indice: "Une bonne réponse « dans / hors norme » suit toujours 3 temps : la valeur, la norme, la conclusion."
  },
  {
    id: "U5-058",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "complément",
    question: "OD −1,00, OG −6,00, anisométropie de puissance. Pourquoi conseiller des lentilles ? Quelle rédaction est juste et complète ?",
    choix: ["Les lentilles corrigent l'anisométropie, car elles modifient la longueur de l'œil.", "L'aniséiconie induite dépend de la distance entre la compensation et l'œil, et la lentille est posée sur la cornée.", "L'aniséiconie induite dépend de la distance compensation-œil : la lentille posée sur la cornée la réduit. Je conseille donc des lentilles.", "Les lentilles sont la meilleure solution pour un anisométrope, quelle que soit la cause de l'anisométropie."],
    bonne: 2,
    explication: "La bonne rédaction relie la cause (distance compensation-œil) à l'effet (aniséiconie réduite) et conclut. La phrase qui explique sans conclure est incomplète, celle qui conclut sans argument n'est pas vraie pour une anisométropie axile, et celle qui parle de longueur de l'œil est fausse : une lentille ne change pas la longueur de l'œil.",
    surLaCopie: "L'aniséiconie induite par les lunettes dépend de la distance compensation-œil. En lentilles, cette distance est presque nulle : l'aniséiconie est beaucoup plus faible. Je conseille donc les lentilles, pour une anisométropie de puissance.",
    indice: "Cherche l'argument (de quoi dépend l'aniséiconie induite) suivi d'une conclusion claire."
  },
  {
    id: "U5-059",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Sujet légèrement myopisé : au cadran de Parent, la ligne 12h-6h est la plus noire. Quelle justification de l'axe du cylindre négatif est juste ?",
    choix: ["Sur la ligne 12h-6h, on prend le plus petit chiffre, 6 × 30 = 180°, ce qui donne l'axe cherché.", "La ligne la plus noire correspond à la focale arrière, qui est ici verticale, mais sans conclure sur l'axe.", "Sujet myopisé : la ligne la plus noire est la focale arrière, verticale. L'axe du cylindre négatif lui est perpendiculaire : 180°.", "L'axe du cylindre négatif est à 180°, sans justification de la ligne observée au cadran de Parent."],
    bonne: 2,
    explication: "La justification attendue s'appuie sur la focale arrière, puis conclut sur l'axe. Le calcul « × 30 » tombe sur le bon chiffre mais ne justifie rien, car il ne parle pas des focales ; la phrase qui s'arrête à la focale arrière n'a pas de conclusion ; celle qui donne seulement 180° n'a pas d'argument.",
    surLaCopie: "Le sujet est myopisé : les deux focales sont en avant de la rétine et la ligne vue la plus noire est parallèle à la focale arrière. Elle est verticale. L'axe du cylindre négatif est perpendiculaire à cette ligne : horizontal, soit 180°.",
    indice: "Le correcteur veut la focale arrière dans le raisonnement, pas un calcul avec les chiffres du cadran. Et une conclusion chiffrée."
  },

  // ---------- Calculs à taper (étape 2) ----------
  {
    id: "U5-060",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "2020 et 2024",
    type: "calcul",
    question: "OD −2,00 et OG −5,00 (sphériques). En lecture, le regard passe 8 mm sous les centres optiques. Calcule l'effet prismatique vertical différentiel.",
    reponse: {"valeur": 2.4, "unite": "Δ", "decimales": 1, "signe": false},
    erreurs: [
      { valeur: 5.6, type: "notion", message: "Tu as additionné les deux effets. Les deux verres sont divergents et le regard passe sous les deux centres : bases du même côté, on soustrait." }
    ],
    explication: "Prentice, d en cm : OD 0,8 × 2 = 1,6 Δ ; OG 0,8 × 5 = 4,0 Δ. Verres divergents, regard sous le centre : base inférieure pour les deux. Différentiel = 4,0 − 1,6 = 2,4 Δ, base inférieure sur l'OG.",
    indice: "Prentice : P = d (cm) × |D|, pour chaque œil. Attention : 8 mm = 0,8 cm. Puis fais la différence."
  },
  {
    id: "U5-061",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "2024",
    type: "calcul",
    question: "Anisométropie de puissance : OD +0,50, OG +4,50, verres à 12 mm de l'œil. Calcule l'aniséiconie induite par les lunettes.",
    reponse: {"valeur": 4.8, "unite": "%", "decimales": 1, "signe": false},
    explication: "Aniséiconie induite ≈ LH (cm) × différence des verres = 1,2 × |0,50 − 4,50| = 1,2 × 4 = 4,8 %. Entre 3 et 10 % : la fusion peut être gênée.",
    indice: "Aniséiconie induite ≈ distance verre-œil en cm × différence de puissance des verres. 12 mm = ? cm."
  },
  {
    id: "U5-062",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2023",
    type: "calcul",
    question: "Un myope de −1,50 non compensé lit à 40 cm. Calcule l'accommodation qu'il met en jeu.",
    reponse: {"valeur": 1, "unite": "δ", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 2.5, type: "notion", message: "2,50 δ, c'est ce que fournit un emmétrope. Le myope non compensé accommode moins : Acc = R − 1/HT, avec R = −1,50." },
      { valeur: 4, type: "signe", message: "Tu as ajouté la myopie. Pour un myope, R est négatif : non compensé, il accommode moins qu'un emmétrope, pas plus." }
    ],
    explication: "Acc = R − [[1|HT]] = −1,50 − [[1|−0,40]] = −1,50 + 2,50 = +1,00 δ.\nSon remotum est à 67 cm : il n'a qu'un peu d'accommodation à fournir.",
    indice: "Acc = R − [[1|HT]], avec HT négatif et en mètres. [[1|0,40]] se calcule de tête."
  },
  {
    id: "U5-063",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2023",
    type: "calcul",
    question: "Un hypermétrope de +2,50 n'accommode pas. Calcule la position de son remotum HR (mesure algébrique depuis l'œil).",
    reponse: {"valeur": 40, "unite": "cm", "decimales": 0, "signe": true},
    explication: "HR = [[1|R]] = [[1|+2,50]] = +0,40 m = +40 cm.\nLe signe + indique un remotum virtuel, 40 cm DERRIÈRE l'œil : l'hypermétrope ne voit net aucun objet réel sans accommoder.",
    indice: "HR = [[1|R]], en mètres, puis convertis en cm. Le signe dit si le remotum est devant ou derrière l'œil."
  },
  {
    id: "U5-064",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2023",
    type: "calcul",
    question: "Un myope de −2,00 a une amplitude d'accommodation de 6 δ. Calcule la position de son proximum HP (mesure algébrique depuis l'œil).",
    reponse: {"valeur": -12.5, "unite": "cm", "decimales": 1, "signe": true},
    erreurs: [
      { valeur: -16.7, type: "notion", message: "C'est le proximum d'un emmétrope qui aurait 6 δ d'amplitude. La myopie compte : 1/HP = R − Amax." },
      { valeur: -25, type: "signe", message: "Tu as pris R = +2,00. Un myope a un R négatif : refais 1/HP = R − Amax avec R = −2,00." }
    ],
    explication: "Amax = R − [[1|HP]], donc [[1|HP]] = R − Amax = −2 − 6 = −8 δ.\nHP = [[1|−8]] m = −0,125 m = −12,5 cm : le proximum est 12,5 cm devant l'œil.",
    indice: "Amax = R − [[1|HP]]. Isole [[1|HP]], puis inverse. Le signe − veut dire « devant l'œil »."
  },
  {
    id: "U5-065",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "2020 et 2024",
    type: "calcul",
    question: "Un œil sphérique non compensé lit 1/10 de loin. Estime sa défocalisation (en valeur absolue) avec la règle de Swaine.",
    reponse: {"valeur": 2.5, "unite": "δ", "decimales": 2, "signe": false},
    explication: "Règle de Swaine (acuité ≤ 5/10) :\ndéfocalisation ≈ [[1|4 × AV]] = [[1|4 × 0,1]] = [[1|0,4]] = 2,50 δ.",
    indice: "Swaine : défocalisation ≈ [[1|4 × AV]], avec l'acuité écrite en décimal (1/10 = 0,1)."
  },
  {
    id: "U5-066",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Réfraction",
    session: "2020 et 2024",
    type: "calcul",
    question: "Un fort myope a son remotum à 62,5 mm devant la cornée. Le verre de lunettes est à 12,5 mm de la cornée. Calcule la puissance du verre compensateur.",
    reponse: {"valeur": -20, "unite": "δ", "decimales": 2, "signe": true},
    explication: "Le foyer image du verre doit être sur le remotum.\nDistance verre → remotum : 62,5 − 12,5 = 50 mm devant le verre, soit f' = −0,050 m.\nD = [[1|f']] = [[1|−0,050]] = −20,00 δ.\nEn lentille (à la cornée), il faudrait [[1|−0,0625]] = −16,00 δ : plus l'équipement est près de l'œil, plus un verre divergent peut être faible.",
    indice: "Le foyer image du verre doit tomber sur le remotum. Mesure la distance depuis le VERRE, pas depuis la cornée."
  },
  {
    id: "U5-067",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "2020 et 2024",
    type: "calcul",
    question: "Un sujet aphaque porte un verre de +16,00 à 12,5 mm de la cornée. Calcule la puissance de la lentille de contact équivalente.",
    reponse: {"valeur": 20, "unite": "δ", "decimales": 2, "signe": true},
    explication: "Le foyer image du verre est à [[1|16]] m = 62,5 mm derrière le verre, donc à 62,5 − 12,5 = 50 mm derrière la cornée.\nLa lentille doit avoir ce foyer : D = [[1|0,050]] = +20,00 δ.\nUn verre convergent doit être plus fort en lentille qu'en lunettes.",
    indice: "Trouve où tombe le foyer image du verre, puis mesure cette distance depuis la cornée : c'est la focale de la lentille."
  },
  {
    id: "U5-068",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Réfraction",
    session: "2020",
    type: "calcul",
    question: "Vérification de la puissance du cylindre : compensation +1,00 (−0,75) 180°. Le sujet préfère −0,50 de cylindre en plus. Quelle sphère écrire pour garder le même équivalent sphérique ?",
    reponse: {"valeur": 1.25, "unite": "δ", "decimales": 2, "signe": true},
    explication: "Ajouter −0,50 de cylindre baisse l'équivalent sphérique de 0,25. On compense par +0,25 de sphère : +1,00 + 0,25 = +1,25, soit +1,25 (−1,25) 180°. Le cercle de moindre diffusion reste sur la rétine.",
    indice: "Équivalent sphérique = S + C/2. Combien le cylindre ajouté fait-il bouger l'équivalent sphérique ?"
  },
  {
    id: "U5-069",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "2024",
    type: "calcul",
    question: "Test à 40 cm : avec un cylindre de Maddox, la barre est vue décalée de 2,2 cm par rapport au point lumineux. Calcule la valeur de la phorie.",
    reponse: {"valeur": 5.5, "unite": "Δ", "decimales": 1, "signe": false},
    explication: "1 Δ = 1 cm de déviation à 1 m.\nP = [[2,2 cm|0,40 m]] = 5,5 Δ.\nLe sens (éso ou exo) se lit au côté de la barre, pas au calcul.",
    indice: "Ramène le décalage à ce qu'il serait à 1 m : [[décalage (cm)|distance (m)]]."
  },
  {
    id: "U5-145",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    question: "Au masquage de l'OD ou de l'OG, aucun mouvement. Au démasquage de l'OG, l'œil descend pour reprendre la fixation. Quelle rédaction est juste et complète ?",
    choix: ["Pas de mouvement au masquage : pas de tropie. L'OG redescend au démasquage : il était remonté, hyperphorie de l'OG.", "Pas de mouvement au masquage, mais l'OG bouge au démasquage : hypertropie de l'OG, manifeste même sans cache.", "L'œil descend au démasquage, donc il était trop bas sous le cache : hypophorie de l'OG, qui reste latente.", "Pas de tropie. L'OG descend au démasquage : c'est une hyperphorie de l'OD, qui se révèle sous le cache."],
    bonne: 0,
    explication: "Pas de mouvement au masquage : pas de tropie. Le mouvement n'apparaît qu'au démasquage : c'est une phorie. L'œil revient en bas pour fixer, donc sous le cache il s'était dirigé vers le haut : hyperphorie de l'OG. La proposition qui conclut à une hyperphorie de l'OD désigne le mauvais œil ; celle qui parle d'hypertropie confond tropie et phorie ; celle qui parle d'hypophorie inverse le raisonnement.",
    indice: "Une bonne rédaction donne : le résultat du masquage, celui du démasquage, la conclusion, avec le bon sens."
  },
  {
    id: "U5-146",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Worth",
    session: "complément",
    question: "Filtre rouge sur l'OD. Le sujet voit 5 symboles, les rouges à GAUCHE des verts. Quelle rédaction est juste et complète ?",
    choix: ["Les 5 symboles montrent une vision simultanée sans fusion. L'image de l'OD est à gauche, du côté de l'OD : diplopie homonyme, donc ésophorie.", "Les 5 symboles montrent une vision simultanée sans fusion. L'image de l'OD est du côté opposé à l'OD : diplopie croisée, donc exophorie.", "Il voit 5 symboles : la fusion est normale, puisque les deux yeux voient.", "L'OG est neutralisé car les symboles verts sont à droite : exophorie."],
    bonne: 1,
    explication: "Cinq symboles : chaque œil voit ses symboles, il n'y a pas de fusion. Le rouge est celui de l'OD. Vu depuis le sujet, l'OD est à droite ; ses symboles apparaissent à gauche, du côté opposé : diplopie croisée, donc exophorie. La réponse qui parle de diplopie homonyme place l'image de l'OD du mauvais côté ; celle qui conclut à une fusion normale confond vision double et fusion ; celle qui évoque une neutralisation de l'OG décrit un cas qui n'existe pas ici.",
    indice: "Cite le nombre de symboles et ce qu'il prouve, puis le côté de l'image de l'œil au filtre rouge, puis le type de diplopie, puis la phorie."
  },
  {
    id: "U5-147",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "complément",
    question: "Un anisométrope (OD −1,00, OG −5,00) porte des lunettes et voit double en lisant, pas de loin. Quelle justification est juste et complète ?",
    choix: ["En lecture, le regard descend sous les centres optiques ; les verres ayant des puissances différentes, les prismes verticaux diffèrent : diplopie verticale", "En lecture, les prismes sont égaux et de sens opposés, donc ils s'annulent ; la diplopie est alors horizontale et présente de loin aussi", "En lecture, la distance verre-œil change et l'aniséiconie augmente, ce qui suffit à expliquer la diplopie qui n'existe pas de loin", "En lecture, les deux yeux accommodent de façon différente, ce qui crée une diplopie verticale seulement de près"],
    bonne: 0,
    explication: "Prentice : l'effet prismatique d'un verre vaut décentrement × puissance. En lecture le regard descend et traverse chaque verre loin de son centre optique, mais les deux verres n'ont pas la même puissance : les effets verticaux sont inégaux. La différence oblige les yeux à se désaligner verticalement : diplopie verticale, présente seulement en regard bas.",
    indice: "Le signe est « seulement en lecture ». Qu'est-ce qui change quand le regard descend, et pourquoi aux deux yeux de façon différente ?"
  },
  {
    id: "U5-148",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Un enfant de 9 ans a −2,50 à l'autoréfractomètre, mais ses acuités sont meilleures qu'attendu. Quelle justification est juste et complète pour ne pas commander −2,50 ?",
    choix: ["L'enfant a de la myopie nocturne : il faut ajouter +0,50 sans autre mesure, et commander la valeur ainsi obtenue.", "L'appareil sous-estime la myopie : on commande donc une valeur de compensation plus forte que celle du ticket.", "L'enfant accommode devant l'appareil : myopie surestimée. Contrôle subjectif avec brouillage, puis confrontation aux acuités.", "L'appareil est toujours exact chez l'enfant, mais la monture doit être ajustée avant de commander les verres."],
    bonne: 2,
    explication: "Devant l'autoréfractomètre, le sujet accommode souvent (accommodation instrumentale), surtout un enfant : la myopie est surestimée. La valeur sert de point de départ, jamais de compensation finale. On la vérifie en subjectif, avec brouillage, et on confronte aux acuités.",
    indice: "Que fait l'œil d'un enfant quand il regarde dans l'appareil ?"
  },
  {
    id: "U5-149",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    question: "En réfraction subjective, plusieurs sphères donnent la même meilleure acuité. Laquelle retient-on, et pourquoi ?",
    choix: ["La plus négative, pour qu'il voie le plus net possible de loin.", "La plus positive, car elle donne toujours une acuité de 10/10 au sujet.", "La plus positive (ou la moins négative), pour ne pas faire accommoder.", "La plus négative, car elle relâche l'accommodation du sujet."],
    bonne: 2,
    explication: "On retient la sphère la plus convexe (ou la moins concave) qui donne la meilleure acuité. Une sphère plus négative ferait accommoder inutilement, d'où fatigue : surcorrection du myope, sous-correction de l'hypermétrope.",
    indice: "Une sphère trop négative oblige-t-elle l'œil à accommoder ?"
  },
  {
    id: "U5-150",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    question: "Un client a un astigmatisme purement cornéen de 2 δ. Pourquoi une lentille rigide perméable au gaz le corrige-t-elle bien ? Quelle justification est juste et complète ?",
    choix: ["La lentille rigide corrige aussi l'astigmatisme interne, qui disparaît avec le film de larmes sous la lentille.", "La lentille rigide épouse la cornée et en reproduit l'astigmatisme, qui est ensuite compensé par le verre de lunettes.", "Le film de larmes a un indice très différent de celui de la cornée et annule l'astigmatisme par réfraction à sa surface.", "Le film de larmes, d'indice proche de la cornée, comble l'espace : la face avant sphérique remplace la cornée astigmate."],
    bonne: 3,
    explication: "Sous une lentille rigide, le ménisque de larmes a presque le même indice que la cornée : la surface astigmate de la cornée n'intervient presque plus, et la face avant sphérique de la lentille la remplace. Un astigmatisme purement cornéen est donc à peu près supprimé. Un astigmatisme interne, lui, reste.",
    indice: "Quel liquide comble l'espace entre lentille rigide et cornée ? Quel est son indice ?"
  },
  {
    id: "U5-151",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Une cliente de 62 ans, hypermétrope, arrive avec un œil rouge, une douleur intense, des halos colorés autour des lumières, des nausées et une baisse de vue depuis 2 heures. Quelle conduite est juste et complète ?",
    choix: ["Je refais la réfraction pour changer ses verres et je la revois dans une semaine pour contrôler.", "Urgence : je l'adresse tout de suite à un ophtalmologiste ou aux urgences, sans lunettes ni diagnostic annoncé.", "Je lui annonce un glaucome aigu, je lui propose des gouttes et un rendez-vous dans le mois suivant.", "Je lui conseille du repos et des larmes artificielles avant de décider de la suite à donner."],
    bonne: 1,
    explication: "Douleur intense, œil rouge, halos, nausées et baisse de vue brutale chez un hypermétrope évoquent une crise de fermeture de l'angle (glaucome aigu). C'est une urgence : le nerf optique peut être atteint en quelques heures. L'opticien n'a ni à faire un diagnostic ni à proposer un traitement : il oriente tout de suite.",
    indice: "Signes brutaux et intenses : l'opticien a-t-il le temps d'équiper ? Peut-il prescrire un traitement ?"
  },
  {
    id: "U5-152",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Un client de 55 ans, sans symptôme, présente un ancien compte rendu : pression intraoculaire de 26 mmHg aux deux yeux, jamais revue depuis. Quelle conduite est juste et complète ?",
    choix: ["Je lui annonce un glaucome et je lui déconseille les lentilles de contact, par prudence.", "Je ne lui dis rien, car seul l'ophtalmologiste peut parler de pression intraoculaire à un client.", "L'absence de symptôme suffit à ne pas s'inquiéter : je renouvelle la mesure dans un an environ.", "Je lui dis que la valeur dépasse la norme, sans parler de glaucome, et je l'oriente vers l'ophtalmologiste pour un bilan."],
    bonne: 3,
    explication: "La norme est autour de 16 mmHg, avec un seuil à 21 mmHg. Une valeur de 26 mmHg est trop forte, mais seuls l'atteinte du nerf optique et celle du champ visuel font le glaucome : c'est à l'ophtalmologiste de les chercher. L'opticien relève la valeur, dit qu'elle sort de la norme et oriente, sans poser de diagnostic ni attendre.",
    indice: "Une valeur hors norme prouve-t-elle un glaucome ? Que doit faire l'opticien de ce qu'il lit dans le dossier ?"
  },
  {
    id: "U5-153",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 1,
    question: "D'après l'histoire de cas seulement, quelle hypothèse faire ?",
    choix: ["Une myopie importante", "Un astigmatisme fort", "Une presbytie débutante", "Un glaucome"],
    bonne: 2,
    explication: "À 52 ans, éloigner le texte pour lire et se fatiguer en vision de près alors que la vision de loin est bonne, c'est le tableau d'une presbytie : l'amplitude d'accommodation ne suffit plus pour la distance de lecture.",
    indice: "Quel âge, quelle plainte, et de loin tout va bien : que perd-on avec l'âge ?"
  },
  {
    id: "U5-154",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 2,
    type: "calcul",
    question: "Calcule l'équivalent sphérique de l'OG.",
    reponse: {"valeur": 0.75, "unite": "δ", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 0.5, type: "notion", message: "Tu as ajouté tout le cylindre (ou pris l'OD). Pour l'OG, l'équivalent sphérique est S + C/2 : la moitié du cylindre seulement." },
      { valeur: 1.25, type: "signe", message: "Tu as retiré un cylindre négatif. Dans S + C/2, le cylindre (−0,50) garde son signe." }
    ],
    explication: "Équivalent sphérique = sphère + cylindre divisé par 2 = +1,00 + (−0,50 / 2) = +0,75 δ.",
    indice: "Équivalent sphérique = S + C/2, avec les signes."
  },
  {
    id: "U5-155",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 3,
    question: "Pourquoi voit-il 10/10 de loin sans lunettes malgré cette hypermétropie ?",
    choix: ["Il accommode de loin et masque son hypermétropie", "L'amplitude d'accommodation est nulle", "Son hypermétropie est trop faible pour exister", "Ses yeux sont emmétropes, l'appareil s'est trompé"],
    bonne: 0,
    explication: "À 52 ans il a encore de l'accommodation : de loin, il en utilise un peu pour compenser les +0,50 à +0,75 qu'il a (équivalents sphériques). L'hypermétropie reste cachée tant que l'amplitude est suffisante. Avec l'âge, elle devient visible et gêne aussi de loin.",
    indice: "Un œil hypermétrope jeune ou encore souple peut voir net de loin. Avec quoi ?"
  },
  {
    id: "U5-156",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 4,
    contexte: "On prend l'équivalent sphérique de l'OG comme son amétropie. Il lit à 40 cm, sans correction.",
    type: "calcul",
    question: "Calcule l'accommodation que fournit son OG pour lire à 40 cm.",
    reponse: {"valeur": 3.25, "unite": "δ", "decimales": 2, "signe": true},
    erreurs: [
      { valeur: 2.5, type: "notion", message: "2,50 δ, c'est ce que fournit un emmétrope. Son OG est hypermétrope de +0,75 : il doit accommoder en plus." },
      { valeur: 1.75, type: "signe", message: "Tu as retiré l'hypermétropie. R est positif : non corrigé, l'hypermétrope accommode plus qu'un emmétrope, pas moins." }
    ],
    explication: "Acc = R − 1/x, avec x = −0,40 m (position du texte) : +0,75 − 1/(−0,40) = +0,75 + 2,50 = +3,25 δ : 2,50 δ pour la distance, plus 0,75 δ pour compenser l'hypermétropie. C'est plus que l'amplitude de 2,00 δ mesurée : la lecture est impossible sans correction.",
    indice: "Acc = R − 1/x, avec x la position du texte (négative, en mètres). Le signe de R compte."
  },
  {
    id: "U5-157",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 5,
    contexte: "On corrige sa vision de loin avec l'équivalent sphérique de chaque œil. Il lit à 40 cm et garde la moitié de son amplitude (2,00 δ) en réserve.",
    type: "calcul",
    question: "Calcule l'addition à prescrire.",
    reponse: {"valeur": 1.5, "unite": "δ", "decimales": 2, "signe": false},
    explication: "À 40 cm il faut 1/0,40 = 2,50 δ. Il n'utilise que la moitié de son amplitude, soit 1,00 δ. L'addition apporte le reste : 2,50 − 1,00 = +1,50 δ.",
    indice: "Besoin à la distance de lecture, moins ce qu'il fournit sans fatigue."
  },
  {
    id: "U5-158",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 6,
    contexte: "Il est corrigé de loin et porte l'addition de +1,50.",
    type: "calcul",
    question: "Calcule la distance maximale à laquelle il voit net sans accommoder (en cm).",
    reponse: {"valeur": 67, "unite": "cm", "decimales": 0, "signe": false, "tolerance": 1},
    erreurs: [
      { valeur: 44, type: "notion", message: "Tu as ajouté l'hypermétropie. Il est déjà corrigé de loin : sans accommoder, seule l'addition de +1,50 compte." },
      { valeur: 29, type: "notion", message: "29 cm, c'est le point le plus proche, en accommodant au maximum. Sans accommoder, seule l'addition joue." }
    ],
    explication: "Sans accommoder, l'addition seule ramène au net un objet dont la vergence est de −1,50 δ, soit à 1/1,50 = 0,667 m, environ 67 cm. Au-delà, par exemple un écran à 80 cm, il devra accommoder un peu.",
    indice: "Sans accommodation, le foyer est sur la rétine si la vergence de l'objet vaut l'opposé de l'addition."
  },
  {
    id: "U5-159",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 7,
    contexte: "Test de Maddox à 40 cm, cylindre sur l'OD : la barre est vue à GAUCHE du point lumineux, à 2,0 cm.",
    question: "Quelle est la nature et la valeur de la phorie de près ?",
    choix: ["Ésophorie de 5 Δ", "Ésophorie de 0,8 Δ", "Exophorie de 5 Δ", "Exophorie de 0,8 Δ"],
    bonne: 2,
    explication: "L'image de l'OD est vue à gauche, du côté opposé à l'OD : diplopie croisée, donc exophorie. Valeur : 2,0 cm divisé par 0,40 m = 5 Δ. 0,8 Δ vient d'un produit au lieu d'un quotient.",
    indice: "Côté de l'image pour la nature ; déviation (cm) divisée par distance (m) pour la valeur."
  },
  {
    id: "U5-160",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 8,
    question: "Cette exophorie de près est-elle dans la norme, et faut-il un prisme ?",
    choix: ["Dans la norme, mais seulement si on la mesure en vision de loin, pas de près", "Dans la norme de près (4 à 6 Δ en exophorie) : aucun prisme", "Hors norme de près : il faut un prisme base interne pour soulager la convergence", "Hors norme de près : il faut un prisme base externe pour compenser la phorie"],
    bonne: 1,
    explication: "La norme de la phorie dissociée de près est de 4 à 6 Δ d'exophorie : 5 Δ y est. Aucun prisme n'est nécessaire, il suffit de compenser la presbytie.",
    indice: "Compare au repère de la vision de près, pas à celui de loin."
  },
  {
    id: "U5-161",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    cas: "CAS-U5-03",
    etape: 9,
    contexte: "Sa dernière visite chez l'ophtalmologiste date de six ans.",
    question: "Que lui conseillez-vous en plus de ses lunettes ?",
    choix: ["Un bilan chez l'ophtalmologiste (pression, fond d'œil), la dernière visite étant ancienne", "Un arrêt de la lecture sur écran, qui explique sa fatigue visuelle en fin de journée", "Des larmes artificielles chaque jour, parce que l'œil se fatigue en lecture prolongée", "Rien de plus : avec 10/10, ses yeux sont forcément en bonne santé"],
    bonne: 0,
    explication: "Une bonne acuité ne dépiste ni un glaucome ni une atteinte de la rétine. Après six ans sans examen, l'opticien conseille un bilan complet chez l'ophtalmologiste, sans parler d'une maladie.",
    indice: "L'acuité centrale reste bonne dans les maladies silencieuses."
  },
  {
    id: "U5-162",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 1,
    question: "D'après l'histoire de cas et les acuités, quelle hypothèse faire ?",
    choix: ["Une cataracte des deux yeux, qui expliquerait la baisse d'acuité et l'éblouissement", "Une myopie identique aux deux yeux, qui expliquerait la tête penchée de l'enfant", "Une simple fatigue d'enfant sans conséquence, qui passera avec l'âge et la croissance", "Une baisse d'acuité de l'OG évoquant une amblyopie, liée à une différence de réfraction ou une déviation"],
    bonne: 3,
    explication: "Une acuité de 3/10 à un seul œil, avec un œil droit à 10/10, une tête penchée et un enfant qui ne se plaint pas, évoquent une amblyopie fonctionnelle de l'œil gauche, souvent liée à une anisométropie ou à un strabisme.",
    indice: "Un seul œil est très en dessous, l'autre est parfait, et l'enfant ne se plaint de rien."
  },
  {
    id: "U5-163",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 2,
    question: "Pourquoi Léa ne se plaint-elle de rien ?",
    choix: ["Les enfants ne sont jamais gênés par leur vue, même quand elle baisse d'un œil", "Son œil droit voit bien et masque la baisse de l'œil gauche", "L'acuité de 3/10 est normale à son âge et ne gêne donc pas les activités", "Son œil gauche ne voit plus du tout et elle s'est adaptée"],
    bonne: 1,
    explication: "Avec les deux yeux ouverts, l'œil droit, à 10/10, assure la vision : l'enfant ne perçoit pas la baisse de l'œil gauche. C'est pourquoi une amblyopie est découverte tard si on ne teste pas chaque œil.",
    indice: "Que se passe-t-il quand les deux yeux regardent ensemble et qu'un seul voit bien ?"
  },
  {
    id: "U5-164",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 3,
    contexte: "L'ophtalmologiste prescrit, après cycloplégie : OD +1,00 ; OG +4,00.",
    type: "calcul",
    question: "Calcule l'anisométropie de Léa (valeur absolue).",
    reponse: {"valeur": 3, "unite": "δ", "decimales": 2, "signe": false},
    explication: "Anisométropie = différence des deux amétropies : |+4,00 − (+1,00)| = 3,00 δ. Léa est hypermétrope aux deux yeux, surtout à gauche.",
    indice: "Soustrais les deux sphères."
  },
  {
    id: "U5-165",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 4,
    contexte: "Les verres seront à 12 mm de l'œil. On estime l'aniséiconie induite par les lunettes avec : distance verre-œil en cm × différence de puissance.",
    type: "calcul",
    question: "Calcule l'aniséiconie induite.",
    reponse: {"valeur": 3.6, "unite": "%", "decimales": 1, "signe": false, "tolerance": 0.1},
    explication: "1,2 cm × 3,00 δ = 3,6 %. Elle est un peu plus grande à gauche, l'œil le plus hypermétrope voyant plus grand avec un verre convexe.",
    indice: "Aniséiconie en % ≈ distance verre-œil (cm) × différence de puissance (δ). 12 mm = 1,2 cm."
  },
  {
    id: "U5-166",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Anisométropie",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 5,
    question: "Que conclure de cette aniséiconie, et quel équipement garder en première intention ?",
    choix: ["3,6 % : fusion impossible puisque l'aniséiconie dépasse 3 %, il faut des lentilles tout de suite", "3,6 % : gêne possible ; je garde les lunettes prescrites, les lentilles restant l'alternative si la fusion est mal tolérée", "Moins de 3 % : aucune gêne possible, donc aucun contrôle ni suivi particulier à prévoir", "L'aniséiconie ne concerne que les myopes : on ne peut rien conclure pour une hypermétrope"],
    bonne: 1,
    explication: "Entre 3 et 10 %, la fusion peut être gênée. Chez une enfant, on privilégie d'abord la correction complète en lunettes prescrite par l'ophtalmologiste. Si la tolérance est mauvaise, les lentilles peuvent réduire l'aniséiconie.",
    indice: "Compare 3,6 % aux trois zones : moins de 3, entre 3 et 10, plus de 10."
  },
  {
    id: "U5-167",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 6,
    contexte: "Les parents demandent une lentille pour l'œil gauche. Les lunettes seraient à 12 mm de l'œil.",
    type: "calcul",
    question: "Calcule la puissance de la lentille de contact équivalente à +4,00 en lunettes.",
    reponse: {"valeur": 4.2, "unite": "δ", "decimales": 2, "signe": true, "tolerance": 0.1},
    explication: "P(lentille) = P / (1 − d·P) avec d = 0,012 m : 4,00 / (1 − 0,012 × 4,00) = 4,00 / 0,952 ≈ +4,20 δ. Un verre convexe est plus fort en lentille.",
    indice: "P(lentille) = P / (1 − d·P), d en mètres."
  },
  {
    id: "U5-168",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Masquage et phories",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 7,
    contexte: "Cover test à 5 m, sans correction : on masque l'OD, l'OG fait un mouvement naso-temporal pour prendre la fixation.",
    question: "Quelle est votre conclusion, et quel lien avec l'hypermétropie ?",
    choix: ["Ésophorie de l'OD : il faut démasquer pour la voir, car elle reste latente", "Orthophorie : l'œil bouge toujours au masquage chez un sujet sans défaut", "Ésotropie de l'OG : l'hypermétropie non corrigée fait accommoder et converger", "Exotropie de l'OG : l'hypermétropie fait diverger l'œil quand il accommode"],
    bonne: 2,
    explication: "Un mouvement de l'œil non masqué lors du masquage de l'autre œil signe une tropie. L'OG se déplace de dedans en dehors pour fixer : il était dévié vers le nez, c'est une ésotropie. Chez l'hypermétrope, l'accommodation fait converger : une hypermétropie forte non corrigée peut provoquer un strabisme convergent.",
    indice: "Masquage et mouvement : tropie. Le sens du mouvement donne l'inverse du sens de la déviation."
  },
  {
    id: "U5-169",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    cas: "CAS-U5-04",
    etape: 8,
    question: "Quelle conduite à tenir de l'opticien est juste et complète ?",
    choix: ["Remplacer la prescription par une correction mesurée à l'autoréfractomètre, plus précise chez l'enfant", "Équiper avec la correction prescrite, insister sur le port constant ; l'occlusion et le suivi relèvent de l'ophtalmologiste", "Attendre qu'elle soit plus grande pour équiper, l'amblyopie se réglant avec l'âge", "Équiper avec une correction plus faible pour qu'elle s'habitue progressivement à ses lunettes"],
    bonne: 1,
    explication: "L'amblyopie se traite d'autant mieux qu'elle est prise tôt : on équipe sans attendre, avec la correction prescrite. L'occlusion et le suivi sont du ressort de l'ophtalmologiste et de l'orthoptiste. L'opticien veille à la qualité du centrage et à la tenue de la monture.",
    indice: "Qui prescrit le traitement de l'amblyopie ? Que doit faire l'opticien de l'ordonnance ?"
  },
  {
    id: "U5-170",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 1,
    question: "Quelle conduite est juste et complète ?",
    choix: ["Retirer la lentille sans la remettre, orienter vite vers un ophtalmologiste, sans annoncer de diagnostic", "Rincer la lentille à la solution et la remettre avec un collyre en vente libre pour soulager", "Annoncer une infection de cornée à la cliente et lui conseiller des gouttes antibiotiques", "Garder la lentille pour protéger l'œil et revenir dans une semaine si cela persiste"],
    bonne: 0,
    explication: "Œil rouge, douleur, photophobie et larmoiement chez une porteuse de lentilles peuvent annoncer une kératite infectieuse, qui menace la cornée. On retire la lentille, on ne la remet pas et on oriente vite. L'opticien ne pose pas le diagnostic et ne conseille pas de traitement.",
    indice: "Quatre signes ensemble chez une porteuse : que fait-on de la lentille et qui décide du traitement ?"
  },
  {
    id: "U5-171",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 2,
    question: "Quel comportement a le plus favorisé ce risque ?",
    choix: ["Dormir avec ses lentilles", "Les porter moins de dix heures", "Utiliser des lunettes certains jours", "Changer de solution d'entretien"],
    bonne: 0,
    explication: "Le port nocturne diminue encore l'apport d'oxygène à la cornée et favorise l'hypoxie et les infections. C'est le principal facteur de risque chez les porteurs de lentilles souples.",
    indice: "Qu'arrive-t-il à l'oxygène qui arrive à la cornée quand l'œil est fermé et couvert ?"
  },
  {
    id: "U5-172",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 3,
    contexte: "Son matériau a un Dk de 30 (en 10⁻¹¹), et sa lentille 0,10 mm d'épaisseur centrale. Seuils retenus : 35 en port de jour, 125 en port de nuit.",
    question: "Quelle est sa transmissibilité Dk/e, et que conclure ?",
    choix: ["Dk/e = 300 × 10⁻⁹ : suffisant même la nuit", "Dk/e = 3 × 10⁻⁹ : très insuffisant", "Dk/e = 30 × 10⁻⁹ : suffisant en journée, insuffisant la nuit", "Dk/e = 30 × 10⁻⁹ : sous 35, insuffisant même en port journalier"],
    bonne: 3,
    explication: "Il faut passer l'épaisseur en cm : 0,10 mm = 0,01 cm. Dk/e = 30 × 10⁻¹¹ / 0,01 = 30 × 10⁻⁹. C'est sous 35, le minimum du port journalier : ce matériau est insuffisant, et le port nocturne exigerait 125.",
    indice: "Épaisseur en cm, puis division. Compare à 35 et à 125."
  },
  {
    id: "U5-173",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 4,
    contexte: "Ses lentilles sont de −4,25. En attendant, elle portera des lunettes à 12 mm de l'œil. Pour passer de la lentille au verre : P(lunettes) = P(lentille) / (1 + d·P(lentille)).",
    type: "calcul",
    question: "Calcule la puissance du verre de lunettes équivalent.",
    reponse: {"valeur": -4.48, "unite": "δ", "decimales": 2, "signe": true, "tolerance": 0.1},
    explication: "d = 0,012 m : −4,25 / (1 + 0,012 × (−4,25)) = −4,25 / 0,949 ≈ −4,48 δ. Un verre divergent doit être plus fort en lunettes qu'en lentille.",
    indice: "Applique la formule donnée. 1 + 0,012 × (−4,25) vaut un peu moins que 1."
  },
  {
    id: "U5-174",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 5,
    contexte: "Plus tard, le BUT de l'œil gauche est de 6 s.",
    question: "Que conclure ?",
    choix: ["Film trop instable (norme : 10 à 20 s) : contre-indication aux souples hydrogel", "Dans la norme du BUT : aucune précaution particulière n'est à prendre pour l'adaptation", "Film trop stable : sécheresse inverse, qui contre-indique les lentilles rigides", "Le BUT ne dit rien sur le choix du matériau, qui ne dépend que de la kératométrie"],
    bonne: 0,
    explication: "Le BUT normal est de 10 à 20 s. Moins de 10 s signe un film instable : les lentilles souples hydrogel sont contre-indiquées (certaines silicone-hydrogel restent possibles), car elles se dessèchent vite et gênent la cornée.",
    indice: "Compare 6 s à la norme du BUT."
  },
  {
    id: "U5-175",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 6,
    question: "Quand pourra-t-elle remettre ses lentilles, et comment ?",
    choix: ["Jamais : après une telle atteinte, plus aucune lentille n'est possible, quel que soit le matériau", "Dans trois jours, avec les mêmes lentilles, accompagnées d'un collyre prescrit par l'opticien", "Après guérison confirmée par l'ophtalmologiste, avec une paire neuve et un étui neuf, jamais la nuit", "Dès que la rougeur a disparu, avec les mêmes lentilles bien rincées à la solution d'entretien"],
    bonne: 2,
    explication: "On ne reprend les lentilles qu'après guérison, confirmée par l'ophtalmologiste. On repart avec une paire neuve et un étui neuf, et le port nocturne est abandonné. La conclusion « jamais » est trop forte : le médecin décidera.",
    indice: "Qui décide de la reprise ? Faut-il réutiliser la paire qui a pu être contaminée ?"
  },
  {
    id: "U5-176",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 7,
    question: "Quel conseil d'hygiène donnez-vous à la reprise ?",
    choix: ["Rincer les lentilles à l'eau du robinet avant le port, pour retirer les dépôts", "Se laver les mains et ne jamais rincer lentilles ou étui à l'eau du robinet", "Conserver les lentilles dans la salle de bain ouverte, à l'abri de la poussière", "Compléter la solution de l'étui sans la renouveler, pour économiser du produit"],
    bonne: 1,
    explication: "L'eau du robinet peut contenir des micro-organismes dangereux pour la cornée. Il faut se laver les mains, vider et renouveler la solution à chaque fois, et renouveler l'étui régulièrement.",
    indice: "Quel liquide ne doit jamais toucher les lentilles ?"
  },
  {
    id: "U5-177",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-05",
    etape: 8,
    contexte: "Pour la future adaptation, on mesure un rayon cornéen de 7,80 mm au kératomètre. On prend l'indice conventionnel 1,3375.",
    type: "calcul",
    question: "Calcule la puissance lue au kératomètre.",
    reponse: {"valeur": 43.27, "unite": "δ", "decimales": 2, "signe": false, "tolerance": 0.05},
    explication: "K ≈ 337,5 / r (mm) = 337,5 / 7,80 ≈ 43,27 δ.",
    indice: "K = 337,5 divisé par le rayon en mm."
  },
  {
    id: "U5-178",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 1,
    type: "calcul",
    question: "Calcule l'équivalent sphérique de l'OD.",
    reponse: {"valeur": -2.5, "unite": "δ", "decimales": 2, "signe": true},
    explication: "Équivalent sphérique = sphère + cylindre divisé par 2 = −1,50 + (−2,00 / 2) = −2,50 δ.",
    indice: "Équivalent sphérique = S + C/2."
  },
  {
    id: "U5-179",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 2,
    question: "Avec une acuité de 1/10, la règle de Swaine donne une défocalisation de 2,50 δ. Que conclure ?",
    choix: ["C'est incohérent : l'autoréfractomètre a surestimé la myopie, à cause de l'accommodation", "C'est incohérent : l'autoréfractomètre a sous-estimé la myopie du sujet", "La règle de Swaine ne s'applique jamais avec un astigmatisme, on ne peut donc rien conclure", "C'est cohérent avec l'équivalent sphérique de −2,50 : la mesure de l'autoréfractomètre est plausible"],
    bonne: 3,
    explication: "Swaine : 1/(4 × AV) = 1/(4 × 0,1) = 2,50 δ. C'est la valeur de l'équivalent sphérique : l'acuité confirme la mesure. Un écart important aurait fait suspecter une accommodation instrumentale.",
    indice: "Calcule 1/(4 × 0,1) puis compare à l'équivalent sphérique."
  },
  {
    id: "U5-180",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 3,
    question: "Transpose −1,50 (−2,00) 180° en cylindre positif.",
    choix: ["−1,50 (+2,00) 90°", "−3,50 (+2,00) 180°", "−3,50 (+2,00) 90°", "+0,50 (+2,00) 90°"],
    bonne: 2,
    explication: "Nouvelle sphère = −1,50 + (−2,00) = −3,50 ; cylindre de signe opposé = +2,00 ; axe tourné de 90° : 180° − 90° = 90° (un axe reste entre 0° et 180°).",
    indice: "Sphère + cylindre, cylindre de signe opposé, axe ± 90°."
  },
  {
    id: "U5-181",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 4,
    contexte: "Sujet légèrement myopisé : au cadran de Parent, la ligne 12h-6h est vue la plus noire.",
    question: "Quel est l'axe du cylindre négatif compensateur ?",
    choix: ["180°", "90°", "135°", "45°"],
    bonne: 0,
    explication: "La ligne la plus noire, 12h-6h, est verticale. L'axe du cylindre négatif lui est perpendiculaire : horizontal, soit 180°. Cela correspond à l'autoréfractomètre.",
    indice: "Axe du cylindre négatif perpendiculaire à la ligne la plus noire."
  },
  {
    id: "U5-182",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 5,
    contexte: "Kératométrie de l'OD : 7,90 mm à 180° et 7,50 mm à 90°. Indice conventionnel 1,3375.",
    type: "calcul",
    question: "Calcule l'astigmatisme cornéen de l'OD.",
    reponse: {"valeur": 2.28, "unite": "δ", "decimales": 2, "signe": false, "tolerance": 0.05},
    explication: "K à 180° : 337,5 / 7,90 ≈ 42,72 δ. K à 90° : 337,5 / 7,50 = 45,00 δ. Astigmatisme cornéen = 45,00 − 42,72 ≈ 2,28 δ. Le méridien vertical est le plus cambré : il est direct.",
    indice: "Passe chaque rayon en dioptries avec 337,5 / r, puis fais la différence."
  },
  {
    id: "U5-183",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 6,
    question: "Quel astigmatisme interne en déduit-on, sachant que le cylindre total est de 2,00 (direct) ?",
    choix: ["Environ 2,28 δ direct, de même nature que l'astigmatisme cornéen", "Aucun astigmatisme interne : tout l'astigmatisme total vient de la cornée", "Environ 4,30 δ direct, qui s'ajoute à l'astigmatisme cornéen", "Environ 0,30 δ inverse, quasi négligeable"],
    bonne: 3,
    explication: "Astigmatisme total = cornéen + interne, donc interne = 2,00 − 2,28 ≈ −0,28 δ : un petit astigmatisme inverse. C'est physiologique. L'astigmatisme de M. K. est donc presque entièrement cornéen.",
    indice: "Interne = total − cornéen. Le signe donne le sens : positif direct, négatif inverse."
  },
  {
    id: "U5-184",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 7,
    question: "Quelle lentille est la plus adaptée à un astigmatisme presque entièrement cornéen de 2,28 δ ?",
    choix: ["Aucune lentille n'est possible pour un astigmate de plus de 2 δ, quel que soit le type", "Une lentille rigide perméable au gaz sphérique : le ménisque de larmes compense l'astigmatisme cornéen", "Une lentille souple sphérique : elle épouse la cornée et annule son astigmatisme", "Une lentille souple sphérique : elle supprime surtout l'astigmatisme interne"],
    bonne: 1,
    explication: "Sous une lentille rigide, le ménisque de larmes a presque l'indice de la cornée et efface son astigmatisme : la lentille convient à un astigmatisme surtout cornéen. Une lentille souple sphérique épouse la cornée et en garde l'astigmatisme ; il faudrait une souple torique, qui est aussi une option pour le sport si la rigide bouge trop.",
    indice: "Quelle lentille garde sa forme sphérique sur une cornée astigmate ?"
  },
  {
    id: "U5-185",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    cas: "CAS-U5-06",
    etape: 8,
    contexte: "Test lacrymal de M. K. : BUT de 12 s.",
    question: "Que conclure pour le choix d'une lentille ?",
    choix: ["Trop court : contre-indication aux lentilles souples hydrogel, à cause de la sécheresse", "Le BUT ne concerne que la vision de loin et n'aide pas au choix de la lentille", "Dans la norme (10 à 20 s) : pas de contre-indication aux lentilles souples ou rigides sur ce critère", "Trop long : film lacrymal anormal, donc lentilles contre-indiquées"],
    bonne: 2,
    explication: "Le BUT est dans la norme de 10 à 20 s. Il n'y a pas de contre-indication aux lentilles sur ce test. Le choix se fera sur l'astigmatisme et sur la tolérance, notamment pour le sport.",
    indice: "Compare 12 s à la norme du BUT."
  },
  {
    id: "U5-186",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Dans une DMLA avancée, quelle partie de la vision est atteinte ?",
    choix: ["Toute la vision, de façon uniforme, comme dans une cataracte", "Seulement la vision des couleurs, sans atteinte de l'acuité ni du champ", "La vision périphérique, la vision centrale restant bonne comme dans le glaucome", "La vision centrale (lecture, visages), la périphérique étant conservée"],
    bonne: 3,
    explication: "La DMLA atteint la macula, zone de la vision centrale : la lecture et la reconnaissance des visages deviennent difficiles. La vision périphérique reste conservée : le patient garde son autonomie pour se déplacer. C'est l'inverse du glaucome, qui atteint d'abord le champ visuel en dehors du centre, la vision centrale étant touchée en dernier.",
    indice: "La macula est le centre de la rétine. Que perd-on quand elle est atteinte ?"
  },
  {
    id: "U5-187",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Parmi ces clients, lequel est le plus exposé à un décollement de rétine ?",
    choix: ["Un hypermétrope de +1,00", "Un emmétrope de 20 ans", "Un myope fort de −9,00", "Un presbyte de 45 ans sans antécédent"],
    bonne: 2,
    explication: "Un œil très myope est long et sa rétine est étirée et fragilisée en périphérie : le risque de déchirure puis de décollement est plus élevé. Un traumatisme ou une chirurgie de la cataracte augmentent aussi le risque.",
    indice: "Pense à la longueur de l'œil et à la rétine qui s'étire."
  },
  {
    id: "U5-188",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Un client a l'œil rouge, des sécrétions collantes au réveil, une vue normale et peu de douleur. Quelle conduite est juste ?",
    choix: ["Je lui annonce un glaucome aigu et je l'envoie aux urgences ophtalmologiques", "Je lui conseille de continuer ses lentilles pour protéger l'œil de la poussière et du vent", "Signes de conjonctivite : avis médical ou pharmacien, mains lavées souvent, lentilles arrêtées", "Je l'adresse aux urgences, car je pense à un décollement de rétine en cours d'évolution"],
    bonne: 2,
    explication: "Œil rouge avec sécrétions, sans douleur forte ni baisse de vue, évoque une conjonctivite. L'opticien ne pose pas de diagnostic : il conseille un avis médical ou du pharmacien, des mains lavées souvent, et l'arrêt des lentilles tant que l'œil est rouge. L'absence de douleur vive et de baisse de vue rend une urgence peu probable ; s'il apparaît une douleur ou une baisse de vue, il consulte sans attendre.",
    indice: "Quels signes manquent par rapport à une urgence : douleur, baisse de vue, halos ?"
  },
  {
    id: "U5-189",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Un dépistage indique une PIO de 24 mmHg ; le client précise que sa cornée est épaisse (620 µm). Que peut-on en dire ?",
    choix: ["L'épaisseur de la cornée n'a aucun effet sur la mesure de la pression", "La pression est normale car la cornée est épaisse : la mesure est faussée à la baisse", "Une cornée épaisse peut faire surestimer la pression ; l'ophtalmologiste interprète, on oriente quand même", "Une cornée épaisse fait sous-estimer la pression : elle est donc plus élevée encore"],
    bonne: 2,
    explication: "Les tonomètres sont étalonnés pour une cornée moyenne. Une cornée plus épaisse que la moyenne donne une pression apparente trop élevée. L'interprétation revient à l'ophtalmologiste, qui tient compte de l'épaisseur. Une valeur de 24 mmHg reste à orienter.",
    indice: "Une cornée épaisse résiste davantage à l'aplanation : la valeur lue est-elle trop forte ou trop faible ?"
  },
  {
    id: "U5-190",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Un client voit double. La vision double persiste quand il ferme un œil. Quelle origine est la plus probable ?",
    choix: ["Une paralysie d'un muscle oculomoteur, qui dévie l'œil atteint", "Une phorie décompensée, qui se révèle quand la fusion est rompue", "Un strabisme paralytique récent, avec une déviation variable selon le regard", "Une cause oculaire : cristallin, cornée ou astigmatisme irrégulier"],
    bonne: 3,
    explication: "Une diplopie qui persiste avec un seul œil ouvert est monoculaire : elle vient de l'œil lui-même (cataracte, kératocône, astigmatisme irrégulier). Une diplopie binoculaire, qui disparaît en fermant un œil, vient d'un défaut d'alignement : paralysie, phorie décompensée, strabisme.",
    indice: "Ferme un œil : la diplopie reste. L'origine est-elle dans l'alignement des deux yeux ?"
  },
  {
    id: "U5-191",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Les parents disent que l'œil d'un enfant de 6 ans dévie parfois. « Il grandira. » Que conseillez-vous ?",
    choix: ["Un bilan rapide chez l'ophtalmologiste ou l'orthoptiste : risque d'amblyopie", "Attendre ses dix ans, puisqu'il rattrapera tout seul en grandissant", "Des lunettes teintées pour reposer l'œil dévié pendant la lecture", "Rien du tout : un strabisme intermittent est sans conséquence sur la vision"],
    bonne: 0,
    explication: "Un strabisme, même intermittent, peut conduire à une amblyopie de l'œil dévié, d'autant plus difficile à traiter que l'enfant est grand. On oriente sans attendre vers l'ophtalmologiste ou l'orthoptiste.",
    indice: "Que risque l'œil qui dévie s'il n'est pas utilisé ?"
  },
  {
    id: "U5-192",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    question: "Pourquoi détermine-t-on la compensation de loin avant l'addition de près ?",
    choix: ["On ne mesure jamais la vision de loin chez un presbyte, seulement celle de près", "L'addition se calcule à partir de la compensation de loin, qui doit être exacte d'abord", "L'addition est la même pour tous les presbytes d'un même âge, quelle que soit leur réfraction", "La vision de près ne dépend pas de la vision de loin, donc l'ordre n'a pas d'importance"],
    bonne: 1,
    explication: "La compensation de près est la compensation de loin plus l'addition. Une erreur de loin se reporte donc sur la vision de près. On règle d'abord la vision de loin, puis on cherche l'addition selon l'amplitude et la distance de lecture.",
    indice: "La puissance de près est la somme de deux termes."
  },
  {
    id: "U5-193",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    question: "Quel est le but de l'équilibre bioculaire en fin de réfraction subjective ?",
    choix: ["Mesurer l'acuité de chaque œil séparément", "Rendre l'œil gauche plus fort que l'œil droit", "Déterminer l'axe du cylindre", "Égaliser l'état accommodatif des deux yeux"],
    bonne: 3,
    explication: "L'équilibre bioculaire dissocie les deux yeux (par prismes ou filtres polarisés) et vérifie qu'ils sont brouillés de la même façon : les deux yeux travaillent avec la même accommodation. Il se fait après la détermination monoculaire de chaque œil. L'équilibre binoculaire, lui, vient ensuite, sans dissociation : on cherche la compensation la plus convergente qui donne la meilleure acuité à deux yeux.",
    indice: "Les deux yeux regardent ensemble : que doit-on égaliser avant de conclure ?"
  },
  {
    id: "U5-194",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    type: "calcul",
    question: "Calcule l'équivalent sphérique de −2,00 (−1,50) 90°.",
    reponse: {"valeur": -2.75, "unite": "δ", "decimales": 2, "signe": true},
    explication: "Équivalent sphérique = S + [[C|2]]\n= −2,00 + [[−1,50|2]]\n= −2,00 − 0,75\n= −2,75 δ.",
    indice: "Équivalent sphérique = S + [[C|2]]. L'axe ne compte pas."
  },
  {
    id: "U5-195",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Réfraction",
    session: "complément",
    question: "Transpose +2,00 (−1,00) 90° en cylindre positif.",
    choix: ["+1,00 (+1,00) 90°", "+3,00 (+1,00) 180°", "+1,00 (+1,00) 180°", "+2,00 (+1,00) 180°"],
    bonne: 2,
    explication: "Nouvelle sphère = +2,00 + (−1,00) = +1,00. Le cylindre change de signe : +1,00. L'axe tourne de 90° : 90° + 90° = 180°. Vérification : méridiens +2,00 et +1,00 dans les deux écritures.",
    indice: "Sphère + cylindre, cylindre de signe opposé, axe ± 90°."
  },
  {
    id: "U5-196",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    type: "calcul",
    question: "Un myope porte −6,50 en lunettes, verres à 12 mm de la cornée. Calcule la puissance de la lentille de contact équivalente.",
    reponse: {"valeur": -6.03, "unite": "δ", "decimales": 2, "signe": true, "tolerance": 0.1},
    explication: "P(lentille) = [[P|1 − d·P]]\n= [[−6,50|1 − 0,012 × (−6,50)]]\n= [[−6,50|1,078]]\n≈ −6,03 δ.\nUn verre divergent devient plus faible en lentille.",
    indice: "P(lentille) = [[P|1 − d·P]], avec d = 0,012 m."
  },
  {
    id: "U5-197",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    question: "Quel est l'avantage principal d'une lentille journalière jetable ?",
    choix: ["Pas d'entretien : on la jette le soir, d'où un moindre risque infectieux", "Elle se porte trente jours de suite sans interruption ni entretien particulier", "Elle se porte la nuit sans risque pour la cornée, même en continu", "Elle corrige l'astigmatisme sans cylindre, grâce à un matériau plus rigide"],
    bonne: 0,
    explication: "La lentille journalière est portée une journée puis jetée : pas de produit d'entretien, pas de dépôts accumulés, et moins de risques infectieux. Elle ne se porte jamais la nuit.",
    indice: "Qu'est-ce qui disparaît quand on jette la lentille chaque soir ?"
  },
  {
    id: "U5-198",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    question: "On propose la monovision à un presbyte emmétrope. En quoi consiste-t-elle ?",
    choix: ["Les deux yeux portent la même addition de près, quelle que soit la distance", "Un œil est occlus en permanence pour supprimer toute gêne à la lecture", "Un œil (le dominant) corrigé de loin, l'autre de près", "Les deux yeux sont corrigés pour la vision de loin seulement, la lecture se faisant sans aide"],
    bonne: 2,
    explication: "Dans la monovision, l'œil dominant est corrigé pour la vision de loin, l'autre est corrigé pour la vision de près, ce qui le brouille un peu de loin. Cela se teste avant de commander : certains porteurs perdent un peu de vision binoculaire et de relief.",
    indice: "Chaque œil a un rôle différent."
  },
  {
    id: "U5-199",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Lentilles",
    session: "complément",
    question: "Quel est l'ordre logique d'une première adaptation en lentilles ?",
    choix: ["Essai direct, puis kératométrie, puis examen préliminaire, puis commande des lentilles", "Examen préliminaire et kératométrie, paramètres, essai, contrôle de l'adaptation, puis de la vision", "Choix de la lentille, commande, puis seulement la kératométrie pour contrôle", "Contrôle de la vision, puis choix de la couleur de la lentille, puis commande"],
    bonne: 1,
    explication: "On commence par l'examen préliminaire et la kératométrie, qui donnent les paramètres de départ. On choisit une lentille d'essai, on contrôle l'adaptation (centrage, mouvement, fluorescéine pour une rigide), puis la vision et le confort, avant la commande finale.",
    indice: "On mesure avant de choisir, et on essaie avant de commander."
  },
  {
    id: "U5-200",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Worth",
    session: "complément",
    question: "Que mesure l'acuité stéréoscopique ?",
    choix: ["L'écart entre les deux pupilles, mesuré en millimètres au pupillomètre", "La phorie de près, mesurée à 40 cm avec une barre de prismes", "La plus petite lettre lue avec un seul œil, à 5 mètres", "La plus petite disparité entre les deux yeux donnant encore une sensation de relief"],
    bonne: 3,
    explication: "Le relief vient de la petite différence entre les images des deux yeux, la disparité. L'acuité stéréoscopique est la plus petite disparité perçue en relief, exprimée en secondes d'arc. Elle est d'environ 20 secondes, et normale jusqu'à 60.",
    indice: "Le relief nécessite deux yeux : qu'est-ce qui diffère entre leurs deux images ?"
  },
  {
    id: "U5-201",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Worth",
    session: "complément",
    question: "Un test de relief donne une acuité stéréoscopique de 200 secondes d'arc. Que conclure ?",
    choix: ["Elle est excellente, car la valeur est élevée en secondes d'arc", "Elle est diminuée : la valeur normale va jusqu'à 60 secondes d'arc", "Elle est normale, car la norme va jusqu'à 400 secondes d'arc", "Elle prouve un strabisme convergent, qu'il faut orienter vers l'ophtalmologiste"],
    bonne: 1,
    explication: "Plus la valeur en secondes d'arc est petite, meilleure est l'acuité stéréoscopique. La norme va jusqu'à 60 secondes chez un sujet jeune : 200 secondes est une acuité diminuée. Elle peut venir d'une neutralisation partielle, d'une amblyopie ou d'une anisométropie. La valeur ne désigne pas à elle seule le type de déviation.",
    indice: "Une petite valeur de disparité détectée = une bonne vision du relief."
  },
  {
    id: "U5-202",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Worth",
    session: "complément",
    question: "Au Worth, un sujet ne voit que 3 symboles verts : un œil est neutralisé. Quelle conséquence a-t-on sur le relief ?",
    choix: ["Relief absent ou très diminué : le relief fin demande la fusion des deux yeux", "Le relief est meilleur, car un seul œil travaille et le cerveau est moins sollicité", "Le relief est inchangé, car il vient surtout de l'accommodation de l'œil restant", "Le relief ne dépend que de la taille de la pupille de chaque œil"],
    bonne: 0,
    explication: "La stéréoscopie exige que les deux yeux envoient des images fusionnables. Si un œil est neutralisé, il n'y a pas de fusion centrale, donc pas de relief fin. Le sujet juge les distances avec des indices monoculaires (taille, ombres, perspective).",
    indice: "Le relief vient-il d'un œil ou de la comparaison entre les deux ?"
  },
  {
    id: "U5-203",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Quelle est la partie du champ visuel monoculaire la plus étendue ?",
    choix: ["Le bas, environ 90°", "Le côté nasal, environ 90°", "Le haut, environ 90°", "Le côté temporal, environ 90°"],
    bonne: 3,
    explication: "Le nez limite le côté nasal (environ 60°) et l'arcade sourcilière le haut (environ 50 à 60°). Du côté temporal, rien ne gêne : le champ monoculaire y atteint environ 90°. Le bas atteint environ 70°. Les côtés temporaux des deux yeux donnent au champ des deux yeux sa largeur totale, environ 180°.",
    indice: "Quel côté est libre de toute gêne anatomique ?"
  },
  {
    id: "U5-204",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "À quoi sert le test de confrontation ?",
    choix: ["À dépister grossièrement un déficit du champ, en comparant le sien à celui de l'examinateur", "À mesurer l'acuité en vision de près avec un texte de petite taille, à 40 cm", "À mesurer la pression oculaire avec un instrument posé sur la cornée du sujet", "À contrôler l'axe d'un cylindre avec un cadran de lignes noires, comme le cadran de Parent"],
    bonne: 0,
    explication: "L'examinateur, face au sujet, compare ce que celui-ci perçoit à la périphérie avec son propre champ. C'est un dépistage rapide et approximatif : un déficit repéré doit être confirmé par un champ visuel (périmétrie) chez l'ophtalmologiste.",
    indice: "On compare deux champs de vision : lesquels ?"
  },
  {
    id: "U5-205",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Un client dit qu'il voit « comme dans un tunnel », avec un centre net et une périphérie qui disparaît. Que faites-vous ?",
    choix: ["Je refais ses lunettes avec une addition plus forte pour mieux voir de près", "Je lui conseille un verre teinté pour atténuer l'éblouissement de la périphérie", "Je note un rétrécissement du champ, sans diagnostic, et je l'oriente vers l'ophtalmologiste", "Je ne fais rien : il se plaint du centre, qui est net, donc la vue est correcte"],
    bonne: 2,
    explication: "Un champ rétréci de la périphérie vers le centre, la vision centrale restant bonne longtemps, peut évoquer un glaucome avancé ou une atteinte de la rétine périphérique. L'opticien décrit ce qu'il constate et oriente, sans diagnostic. Les lunettes ne le corrigent pas.",
    indice: "Que perd-on quand le champ se rétrécit : le centre ou la périphérie ?"
  },
  {
    id: "U5-206",
    difficulte: "difficile",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Un porteur de verres de +10,00 δ se plaint d'un anneau où il ne voit plus rien, en périphérie de son champ, avec ses lunettes. Quelle en est la cause ?",
    choix: ["Un glaucome à angle fermé, dont la crise est douloureuse et soudaine", "Une cataracte débutante qui opacifie le cristallin sur le bord", "Une distance pupillaire mal mesurée lors de la prise de mesures", "L'effet prismatique du bord d'un verre très convergent (scotome annulaire)"],
    bonne: 3,
    explication: "Un verre convergent fort a un bord épais : il dévie les rayons vers l'axe optique, et une zone annulaire du champ n'est plus vue par l'œil. Le porteur peut voir apparaître et disparaître des objets en périphérie. Un verre asphérique ou lenticulaire réduit ce défaut ; une lentille de contact le supprime.",
    indice: "Un verre convexe fort agit comme un prisme sur son bord."
  },
  {
    id: "U5-207",
    difficulte: "facile",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Qui est le plus souvent atteint par le daltonisme congénital rouge-vert ?",
    choix: ["Tous les sujets à partir de 60 ans", "Seulement les enfants de moins de 5 ans", "Les garçons et les hommes", "Les filles et les femmes"],
    bonne: 2,
    explication: "La dyschromatopsie rouge-vert congénitale est transmise par le chromosome X de façon récessive : elle touche beaucoup plus souvent les garçons que les filles. Elle est présente dès la naissance, stable et touche les deux yeux de la même façon.",
    indice: "Transmission liée au chromosome X : qui a un seul X ?"
  },
  {
    id: "U5-208",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Pathologie",
    session: "complément",
    question: "Un adulte dit que les couleurs sont devenues ternes d'un seul œil depuis quelques semaines. Quelle conduite est juste ?",
    choix: ["Je lui conseille d'attendre un an avant de consulter, si cela ne passe pas", "Je lui explique que c'est du daltonisme, sans conséquence, puisque cela touche un seul œil", "Je l'oriente vers l'ophtalmologiste : dyschromatopsie acquise, atteinte possible du nerf optique ou de la macula", "Je lui propose des verres teintés pour raviver les couleurs de l'œil atteint"],
    bonne: 2,
    explication: "Une perte récente de la vision des couleurs, sur un œil, n'est pas un daltonisme congénital, qui est présent depuis toujours et touche les deux yeux. Elle peut annoncer une atteinte du nerf optique ou de la macula : on oriente sans attendre, sans diagnostic.",
    indice: "Récent et un seul œil : est-ce plutôt congénital ou acquis ?"
  },
  {
    id: "U5-209",
    difficulte: "moyen",
    epreuve: "U5",
    theme: "Examen préliminaire",
    session: "complément",
    question: "Pourquoi la vision des couleurs est-elle moins bonne en périphérie du champ ?",
    choix: ["Parce que les bâtonnets sont concentrés dans la fovéa", "Parce que les cônes sont rares en périphérie de la rétine", "Parce que la pupille est trop petite", "Parce que le cristallin est plus épais en périphérie"],
    bonne: 1,
    explication: "Les cônes, responsables de la vision des couleurs et de la précision, sont concentrés dans la fovéa. Les bâtonnets, sensibles à la lumière faible, dominent en périphérie : on y distingue mal les couleurs.",
    indice: "Quelles cellules voient les couleurs, et où sont-elles ?"
  },

  // ---------- Lentilles : Javal, larmes, fluorescéine ; Anisométropie : Knapp (ajout du 22 nov.) ----------
  {
    id: "U5-210", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    question: "Avec l'ophtalmomètre de Javal, les mires sont affrontées dans le méridien le plus horizontal. On tourne l'appareil de 90° et les mires se CHEVAUCHENT. Que conclure ?",
    choix: ["Le rayon vertical est plus petit que l'horizontal : astigmatisme cornéen direct", "Le rayon vertical est plus grand que l'horizontal : astigmatisme cornéen inverse", "La cornée n'est pas astigmate", "L'astigmatisme est interne et non cornéen"],
    bonne: 0,
    explication: "Mires affrontées en horizontal, puis rotation de 90° : si elles se chevauchent, le rayon du méridien vertical est plus petit que celui de l'horizontal. Le méridien vertical est le plus cambré : astigmatisme cornéen direct. Si elles s'écartaient, le rayon vertical serait plus grand : astigmatisme inverse. Si elles restaient affrontées, la cornée ne serait pas astigmate.",
    indice: "Chevauchement = rayon plus petit dans le méridien observé, donc méridien plus cambré. Lequel est le plus cambré ici, le vertical ou l'horizontal ?"
  },
  {
    id: "U5-211", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    question: "Kératométrie : rayon de 7,70 mm à 0° et de 7,90 mm à 90°. Astigmatisme cornéen et compensateur en S (règle : 0,05 mm de toricité ≈ 0,30 δ) ?",
    choix: ["Inverse de 1,20 δ, compensé par plan (−1,20) à 90°", "Direct de 1,20 δ, compensé par plan (−1,20) à 0°", "Inverse de 1,20 δ, compensé par plan (−1,20) à 0°", "Inverse de 0,60 δ, compensé par plan (−0,60) à 90°"],
    bonne: 0,
    explication: "Toricité : 7,90 − 7,70 = 0,20 mm, soit 4 × 0,05 mm, donc 4 × 0,30 = 1,20 δ. Le méridien horizontal (7,70 mm) a le plus petit rayon, il est le plus cambré : astigmatisme inverse. Le cylindre négatif compensateur a son axe le long du méridien le plus plat, ici le vertical : plan (−1,20) à 90°.",
    surLaCopie: "Toricité 7,90 − 7,70 = 0,20 mm, soit 4 × 0,30 = 1,20 δ. Le méridien horizontal est le plus cambré : astigmatisme inverse. Compensateur : plan (−1,20) à 90°.",
    indice: "Compte combien de fois 0,05 mm tient dans l'écart des rayons. Puis repère le méridien le plus cambré (le plus petit rayon) : l'axe du cylindre négatif est à l'opposé."
  },
  {
    id: "U5-212", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "facile",
    question: "Quel examen non invasif évalue la QUANTITÉ de larmes avant une adaptation en lentilles ?",
    choix: ["La mesure de la hauteur de la rivière lacrymale", "Le Break-Up Time (BUT)", "L'observation du spéculaire sur le film lacrymal", "La fluoroscopie d'une lentille rigide"],
    bonne: 0,
    explication: "La rivière lacrymale est le bord de larmes qui longe la paupière inférieure : sa hauteur donne la quantité de larmes (norme de 0,2 à 0,4 mm ; au-dessous de 0,2 mm, c'est insuffisant pour une lentille souple hydrophile). Le BUT et le spéculaire jugent la QUALITÉ du film. La fluoroscopie contrôle l'adaptation d'une lentille rigide.",
    indice: "Quantité ou qualité ? Un seul de ces examens mesure une hauteur de larmes."
  },
  {
    id: "U5-213", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    question: "Une cliente veut des lentilles. Rivière lacrymale : 0,15 mm. BUT : 12 s. Quelle conclusion est juste et complète ?",
    choix: ["Quantité de larmes insuffisante (rivière sous 0,2 mm), qualité correcte (BUT normal) : souple hydrophile déconseillée, silicone-hydrogel ou rigide proposés", "La qualité des larmes est insuffisante à cause du BUT : je déconseille toutes les lentilles de contact à cette cliente", "Les deux mesures sont dans la norme : la lentille souple hydrophile convient, sans précaution particulière à prendre", "La rivière est trop haute, ce qui gêne le port : je conseille de la réduire avant d'adapter une lentille"],
    bonne: 0,
    explication: "La rivière de 0,15 mm est sous 0,2 mm : la quantité de larmes est insuffisante pour une lentille souple hydrophile, qui a besoin de l'eau des larmes. Le BUT de 12 s est dans la norme (10 à 20 s) : la qualité est correcte. On se tourne vers un silicone-hydrogel ou une lentille rigide perméable aux gaz, mieux adaptés quand le film est fragile.",
    surLaCopie: "Rivière lacrymale de 0,15 mm : quantité de larmes insuffisante pour une lentille souple hydrophile. BUT de 12 s : qualité correcte. Je propose un silicone-hydrogel ou une lentille rigide perméable aux gaz.",
    indice: "Une valeur mesure la quantité, l'autre la qualité. Compare chacune à sa norme, puis conclus sur le type de lentille."
  },
  {
    id: "U5-214", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "facile",
    question: "Au contrôle à la fluorescéine, une lentille rigide montre un réservoir de colorant au centre, un appui en périphérie, et elle bouge très peu. L'adaptation est :",
    choix: ["Serrée", "Plate", "Alignée", "Impossible à juger sans kératométrie"],
    bonne: 0,
    explication: "Réservoir de fluorescéine au centre (la lentille est décollée de la cornée à cet endroit), appui en périphérie et faible mobilité : adaptation serrée. La lentille est plus cambrée que la cornée. Pour la desserrer, on augmente le rayon de la face arrière (ro).",
    indice: "Là où la fluorescéine s'accumule, la lentille est décollée de la cornée. Au centre ou en périphérie ?"
  },
  {
    id: "U5-215", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "difficile",
    question: "Une LRPG sphérique de ro = 7,80 mm et de vergence −3,00 δ compense parfaitement l'œil, mais l'adaptation est trop serrée. On augmente ro de 0,10 mm. Quels nouveaux paramètres ?",
    choix: ["ro = 7,90 mm et −2,50 δ", "ro = 7,90 mm et −3,50 δ", "ro = 7,70 mm et −2,50 δ", "ro = 7,90 mm et −3,00 δ"],
    bonne: 0,
    explication: "Un ro plus grand donne une lentille plus plate : le ménisque de larmes devient plus divergent d'environ 0,50 δ (0,10 mm ≈ 0,50 δ). Pour que la compensation totale reste la même, la lentille doit être plus convergente de 0,50 δ : −3,00 + 0,50 = −2,50 δ. Le diamètre ne change pas. C'est l'inverse du cas d'une adaptation trop plate.",
    surLaCopie: "Adaptation serrée : j'augmente ro de 0,10 mm, soit 7,90 mm. Le ménisque de larmes devient plus divergent de 0,50 δ, donc j'ajoute +0,50 δ à la lentille : −2,50 δ.",
    indice: "Compensation totale = vergence de la lentille + vergence du ménisque de larmes. Si le ménisque perd 0,50 δ, que doit faire la lentille pour que le total ne bouge pas ?"
  },
  {
    id: "U5-216", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Que dit la loi de Knapp pour une anisométropie purement AXILE ?",
    choix: ["Même taille d'images si le verre est au foyer objet de l'œil, environ 15 mm devant la cornée", "Les images rétiniennes ont la même taille si le verre est posé directement sur la cornée", "Les images rétiniennes sont toujours de tailles différentes, quel que soit l'équipement choisi", "Les images rétiniennes ont la même taille si le verre est placé le plus loin possible de l'œil"],
    bonne: 0,
    explication: "Loi de Knapp : dans une anisométropie axile, la compensation placée au foyer objet de l'œil, soit environ 15 mm devant la cornée, donne des images rétiniennes de même taille. C'est la position d'une lunette ordinaire : les lunettes conviennent. En lentilles, l'aniséiconie axile reste entière (environ 1,7 % par dioptrie).",
    indice: "Pense à la position d'un verre de lunettes ordinaire, et à ce que devient l'aniséiconie axile d'un œil trop long quand on rapproche la compensation de la cornée."
  },
  {
    id: "U5-217", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "difficile",
    question: "Un sujet a une anisométropie purement axile : OD −1,00 et OG −5,00. Quelle rédaction est juste et complète pour choisir entre lunettes et lentilles ?",
    choix: ["Les lunettes, près du foyer objet de l'œil, donnent des images presque égales (Knapp) : je les garde ; les lentilles laisseraient environ 7 %", "Les lentilles sont toujours préférables, puisqu'elles réduisent toute aniséiconie quelle que soit la cause de l'anisométropie", "Les lunettes aggravent l'aniséiconie, donc les lentilles sont indispensables dans une anisométropie purement axile", "Les deux équipements donnent exactement le même résultat, à la distance verre-œil près, que l'anisométropie soit axile ou non"],
    bonne: 0,
    explication: "Anisométropie axile : l'œil le plus long forme une image plus grande. Le verre de lunettes, à 15 mm, la rapetisse presque exactement de ce qu'il faut (loi de Knapp) : l'aniséiconie totale reste faible. En lentilles, la compensation est contre la cornée : il resterait toute l'aniséiconie axile, soit environ 1,7 % × 4 ≈ 7 %. Pour l'anisométropie de puissance, c'est l'inverse : les lentilles sont à conseiller.",
    surLaCopie: "Anisométropie axile : la loi de Knapp donne des images égales avec un verre placé près du foyer objet de l'œil. Les lunettes conviennent. Les lentilles laisseraient environ 7 % d'aniséiconie axile, au-dessus de la limite de 3 %.",
    indice: "Axile ou de puissance ? Dans l'axile, l'œil long agrandit l'image, et c'est le verre éloigné de la cornée qui compense."
  },
  {
    id: "U5-218", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    question: "Une lentille rigide appuie sur le centre de la cornée et se déplace beaucoup à chaque clignement. Quelle image de fluorescéine observez-vous ?",
    choix: ["L'image 1", "L'image 2", "L'image 3", "Aucune : la fluorescéine ne renseigne pas sur l'adaptation"],
    bonne: 2,
    explication: "Appui central : peu de fluorescéine au centre (zone sombre), colorant abondant en périphérie, lentille mobile : adaptation PLATE, image 3. L'image 1 (réservoir vert au centre, bord sombre) est une adaptation serrée. L'image 2 (film régulier) est une adaptation alignée. Pour resserrer une lentille plate, on diminue ro.",
    indice: "Un appui central chasse la fluorescéine du centre. Cherche l'image où le centre est sombre et le bord brillant.",
    schema: "img/schemas/U5/fluo-lrpg-trois-images.svg",
    schemaTexte: "Trois images de fluorescéine sous une lentille rigide. Image 1 : réservoir vert au centre, bord sombre. Image 2 : film vert régulier partout. Image 3 : centre sombre, anneau vert épais en périphérie."
  },
  // ---------- Lot du 22 nov. : réfraction, Worth, pathologie, phories ----------
  {
    id: "U5-219", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "facile",
    question: "Dans une réfraction subjective monoculaire, quel est l'ordre habituel des étapes ?",
    choix: ["Sphère au brouillard, axe du cylindre, puissance du cylindre, puis sphère", "Puissance du cylindre, sphère au brouillard, axe du cylindre, puis équilibre bioculaire", "Axe du cylindre, puis addition de près, puis sphère au brouillard", "Équilibre bioculaire, puis sphère au brouillard, puis axe du cylindre"],
    bonne: 0,
    explication: "On part d'une sphère brouillée, on débrouille jusqu'à la meilleure acuité, puis on affine le cylindre aux CCR : l'axe d'abord, la puissance ensuite. On reprend alors la sphère. L'équilibre bioculaire vient après la détermination de chaque œil.",
    indice: "Le cylindre se règle avec le cylindre croisé : l'axe doit être juste avant de chercher la puissance."
  },
  {
    id: "U5-220", epreuve: "U5", theme: "Réfraction", session: "2018",
    difficulte: "moyen",
    question: "Pendant le débrouillage de la méthode du brouillard, quel indice évoque un relâchement de l'accommodation ?",
    choix: ["L'acuité remonte plus vite que la règle de Swaine ne le prévoit", "L'acuité n'évolue plus malgré les verres ajoutés au fil du débrouillage", "Le sujet dit voir double dès le premier verre ajouté en brouillage", "Le sujet préfère la lettre noire sur fond rouge au test rouge-vert"],
    bonne: 0,
    explication: "Quand le sujet relâche son accommodation, l'image recule vers la rétine d'un seul coup : l'acuité progresse plus vite que la progression attendue par la règle de Swaine. Un palier, où l'acuité ne progresse plus malgré le verre ajouté, indique en revanche la sphère de meilleure acuité atteinte.",
    indice: "Relâcher l'accommodation, c'est gagner du net sans verre en plus : l'acuité fait un saut."
  },
  {
    id: "U5-221", epreuve: "U5", theme: "Réfraction", session: "2018",
    difficulte: "moyen",
    question: "Vérification de l'axe : le compensateur a son axe à 20° et le manche du CCR est posé sur 20°. L'axe du cylindre négatif du CCR est à 65° dans une position, à 155° dans l'autre. Le sujet préfère la position à 65°. Que faire ?",
    choix: ["Tourner l'axe du compensateur vers 65°, par petits pas, puis recommencer", "Tourner l'axe du compensateur vers 155°, par petits pas, puis recommencer", "Ne rien changer : l'axe du compensateur est déjà correct et définitif", "Ajouter −0,25 de cylindre sans modifier l'axe du compensateur"],
    bonne: 0,
    explication: "Le sujet voit mieux quand l'axe du cylindre négatif du CCR est plus proche de l'axe exact. On tourne donc l'axe du compensateur vers l'axe du cylindre négatif du CCR dans la position préférée. On recommence jusqu'à ce que les deux positions donnent la même impression.",
    indice: "La position préférée est celle où le cylindre négatif du CCR est du côté de l'axe exact. Va dans cette direction."
  },
  {
    id: "U5-222", epreuve: "U5", theme: "Réfraction", session: "2018",
    difficulte: "moyen",
    question: "Quel est le but de l'équilibre binoculaire, qui suit l'équilibre bioculaire ?",
    choix: ["Chercher, sans dissociation, la sphère la plus convergente qui donne la meilleure acuité à deux yeux", "Dissocier les deux yeux par prismes ou filtres pour égaliser leur état accommodatif avant la comparaison", "Mesurer la phorie de loin en dissociant les deux yeux par un prisme vertical devant chaque œil", "Déterminer l'addition de près"],
    bonne: 0,
    explication: "L'équilibre binoculaire se fait les deux yeux ouverts, sans dissociation : on essaie des sphères par pas de 0,25 δ et on garde la plus convergente qui donne la meilleure acuité binoculaire. C'est l'équilibre bioculaire qui dissocie les yeux (prismes ou filtres polarisés) pour égaliser leur accommodation.",
    indice: "Bioculaire = dissociation. Binoculaire = les deux yeux ensemble, sans rien pour les séparer."
  },
  {
    id: "U5-223", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "facile",
    question: "Le cylindre négatif compensateur d'un œil est à 80°. De quel astigmatisme s'agit-il ?",
    choix: ["Inverse", "Direct", "Oblique à 45°", "Mixte"],
    bonne: 0,
    explication: "Direct : cylindre négatif d'axe 0° ± 30°. Inverse : cylindre négatif d'axe proche de 90°. Un axe à 80° est proche de 90° : astigmatisme inverse. Un axe à 30° ou 150° pourrait se dire direct ou oblique.",
    indice: "Compare l'axe à 0° et à 90°. Dans lequel des deux intervalles tombe 80° ?"
  },
  {
    id: "U5-224", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    type: "pose",
    question: "Un myope porte −6,00 en lunettes, à 12 mm de la cornée. Calcule la lentille de contact équivalente, à la main, étape par étape.",
    etapes: [
      {
        consigne: "Dénominateur 1 − d·P (d en mètres, P en dioptries)",
        reponse: { valeur: 1.072, unite: "", decimales: 3, signe: false },
        aide: "d = 0,012 m et P = −6,00 δ. Le produit d·P est négatif, donc 1 − d·P est plus grand que 1.",
        ligne: "d·P = 0,012 × (−6,00) = −0,072\n1 − d·P = 1 + 0,072 = 1,072",
        erreurs: [{ valeur: 0.928, type: "signe", message: "Pour un verre divergent, d·P est négatif : 1 − d·P = 1 + 0,072 = 1,072, pas 0,928." }]
      },
      {
        consigne: "Puissance de la lentille de contact (en δ)",
        reponse: { valeur: -5.6, unite: "δ", decimales: 2, signe: true },
        aide: "P' = P divisé par 1 − d·P. Un verre divergent est moins fort en lentille.",
        ligne: "P' = [[−6,00|1,072]] ≈ −5,60 δ",
        erreurs: [{ valeur: -6.47, type: "signe", message: "Tu as divisé par 0,928. Pour un myope, le dénominateur est 1,072 : la lentille est un peu moins forte, −5,60 δ." }]
      }
    ],
    explication: "Formule de conversion : P' = [[P|1 − d·P]]. Pour un myope, le dénominateur dépasse 1 : la lentille est moins divergente que le verre, −5,60 δ. À l'inverse, un hypermétrope a besoin d'une lentille plus convergente que son verre."
  },
  {
    id: "U5-225", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "facile",
    type: "calcul",
    question: "Un myope sans astigmatisme a son remotum à 40 cm devant l'œil. Quelle compensation, placée au niveau de l'œil, le rend emmétrope ?",
    reponse: {"valeur": -2.5, "unite": "δ", "decimales": 2, "signe": true},
    erreurs: [{ valeur: 2.5, type: "signe", message: "Le remotum est réel, devant l'œil : le myope a besoin d'un verre divergent, donc une valeur négative." }],
    explication: "Il faut que le verre donne, d'un objet à l'infini, une image au remotum, à 40 cm devant l'œil : sa vergence vaut −[[1|0,40]] = −2,50 δ.",
    indice: "Le verre doit renvoyer l'infini au remotum. Convertis 40 cm en mètres et mets le signe du verre divergent."
  },
  {
    id: "U5-226", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Un œil a une acuité de 4/10. Quel est son angle minimal de résolution ?",
    choix: ["2,5 minutes d'arc", "4 minutes d'arc", "0,4 minute d'arc", "25 minutes d'arc"],
    bonne: 0,
    explication: "L'acuité décimale est l'inverse de l'angle minimal de résolution en minutes d'arc : 10/10 correspond à 1'. Donc 4/10 = 0,4 correspond à 1 / 0,4 = 2,5'.",
    indice: "Acuité décimale = 1 divisé par l'angle en minutes d'arc. Renverse la relation."
  },
  {
    id: "U5-227", epreuve: "U5", theme: "Worth", session: "2024",
    difficulte: "facile",
    question: "Quels degrés de la vision binoculaire le test de Worth permet-il d'évaluer ?",
    choix: ["La vision simultanée et la fusion", "La fusion et la vision stéréoscopique", "Seulement la vision stéréoscopique", "Seulement l'acuité de chaque œil"],
    bonne: 0,
    explication: "Au Worth, chaque œil voit des symboles de couleur différente : on teste si les deux images sont perçues en même temps (1er degré, vision simultanée) et si elles fusionnent (2e degré, fusion). La perception du relief, 3e degré, se teste avec un test de stéréoscopie.",
    indice: "Pense aux trois degrés dans l'ordre : simultanée, fusion, stéréoscopie. Le Worth s'arrête avant le relief."
  },
  {
    id: "U5-228", epreuve: "U5", theme: "Worth", session: "2023",
    difficulte: "facile",
    question: "Quelle est la composition de la lanterne de Worth, et combien de symboles voit un sujet qui fusionne ?",
    choix: ["1 rouge, 2 verts, 1 blanc : 4 symboles", "2 rouges, 3 verts : 5 symboles", "1 rouge, 1 vert, 2 blancs : 4 symboles", "2 rouges, 2 verts : 4 symboles"],
    bonne: 0,
    explication: "La lanterne a 4 lumières : un rouge, deux verts et un blanc. Le sujet porte un filtre rouge sur un œil et vert sur l'autre. S'il fusionne, il voit 4 symboles, la lumière blanche prenant une teinte liée à l'œil dominant. À 5 symboles, il y a diplopie : 2 rouges et 3 verts.",
    indice: "Le blanc est vu par les deux yeux et le sujet qui fusionne le voit une seule fois."
  },
  {
    id: "U5-229", epreuve: "U5", theme: "Worth", session: "2024",
    difficulte: "moyen",
    question: "Pourquoi réalise-t-on le test de Worth de loin ET de près ?",
    choix: ["La phorie et la fusion peuvent changer avec la distance : le résultat peut différer", "Parce que les filtres rouge et vert changent de couleur avec la distance de la lanterne", "Parce que la vision simultanée n'existe que de près, jamais de loin", "Parce qu'un seul résultat suffit toujours pour toutes les distances de vision"],
    bonne: 0,
    explication: "La convergence demandée et l'accommodation dépendent de la distance : une exophorie de près est normale, et un sujet peut fusionner de loin et neutraliser de près, ou l'inverse. On fait donc le test aux deux distances, avec la compensation portée.",
    indice: "Pense à la prise d'exophorie de loin vers près : ce qui change avec la distance change aussi le résultat."
  },
  {
    id: "U5-230", epreuve: "U5", theme: "Worth", session: "complément",
    difficulte: "moyen",
    question: "Quel test de relief utilise des lunettes à filtres rouge et vert (anaglyphes) ?",
    choix: ["Le TNO", "Le Titmus", "Le Lang", "Le Mallett"],
    bonne: 0,
    explication: "Le TNO présente des images composées de points rouges et verts, vues avec des lunettes rouge-vert : sans fusion, il n'y a pas de relief. Le Titmus utilise des lunettes polarisées. Le Lang se lit sans lunettes. Le Mallett n'est pas un test de relief : il met en évidence la disparité de fixation.",
    indice: "Un seul de ces tests porte le sigle d'un institut néerlandais : il sépare les yeux par des couleurs."
  },
  {
    id: "U5-231", epreuve: "U5", theme: "Masquage et phories", session: "2021",
    difficulte: "moyen",
    question: "Que met en évidence le test de Mallett ?",
    choix: ["La disparité de fixation : léger décalage de fixation, vision restant simple", "La stéréoacuité du sujet, mesurée en secondes d'arc, sur un fond de points aléatoires", "La diplopie croisée d'un sujet qui présente une exophorie importante", "La neutralisation totale d'un œil dont l'image est supprimée par le cerveau"],
    bonne: 0,
    explication: "Au test de Mallett, la vision binoculaire est conservée : deux lignes verticales sont vues chacune par un œil, avec un élément fusionnel. Si elles paraissent décalées, c'est une disparité de fixation : l'image tombe un peu à côté de la fovéa, mais dans l'aire de Panum. Le prisme qui les aligne est la phorie associée.",
    indice: "Le test garde un élément fusionnel : la vision reste simple. Que décèle-t-il quand même ?"
  },
  {
    id: "U5-232", epreuve: "U5", theme: "Pathologie", session: "2018",
    difficulte: "moyen",
    question: "Quelle définition du glaucome est juste et complète ?",
    choix: ["Atteinte progressive du nerf optique, souvent avec PIO élevée, qui détruit le champ visuel périphérique", "Simple augmentation de la pression de l'œil, sans atteinte du nerf optique ni du champ visuel du sujet", "Opacification progressive du cristallin, avec baisse d'acuité et éblouissement en lumière vive", "Atteinte de la macula avec perte rapide de la vision centrale et déformation des lignes droites"],
    bonne: 0,
    explication: "Le glaucome est une atteinte du nerf optique (dégénérescence des axones des cellules ganglionnaires), fréquemment associée à une PIO élevée. Il détruit le champ visuel, d'abord en périphérie ; la vision centrale n'est touchée que tard. Décrire le glaucome seulement par la hausse de la PIO est incomplet : un glaucome peut exister avec une PIO normale.",
    surLaCopie: "Le glaucome est une atteinte du nerf optique, souvent associée à une PIO élevée. Elle détruit peu à peu le champ visuel, en commençant par la périphérie.",
    indice: "Le glaucome est d'abord une maladie du nerf optique, la pression n'est qu'un facteur. Et le champ visuel part par les bords."
  },
  {
    id: "U5-233", epreuve: "U5", theme: "Pathologie", session: "2018",
    difficulte: "moyen",
    question: "Un client de 60 ans, sans aucune douleur, perd peu à peu son champ visuel périphérique. Sa PIO est élevée. Quel type de glaucome est le plus probable ?",
    choix: ["Le glaucome chronique à angle ouvert (GCAO)", "Le glaucome aigu par fermeture de l'angle (GAFA)", "Un glaucome néovasculaire", "Une cataracte"],
    bonne: 0,
    explication: "Le glaucome chronique à angle ouvert évolue sans douleur : le client ne remarque rien pendant des années. Le glaucome aigu par fermeture de l'angle est une urgence douloureuse : œil rouge, halos, nausées. L'absence de douleur et le caractère progressif orientent vers l'angle ouvert.",
    surLaCopie: "L'absence de douleur et la perte progressive du champ périphérique orientent vers un glaucome chronique à angle ouvert. Le glaucome aigu par fermeture de l'angle est douloureux.",
    indice: "Une maladie qui ne fait pas mal et dure des années : chronique ou aigu ?"
  },
  {
    id: "U5-234", epreuve: "U5", theme: "Pathologie", session: "2018",
    difficulte: "moyen",
    question: "Quel signe observé en biomicroscopie évoque une hypoxie cornéenne chez un porteur de lentilles ?",
    choix: ["Un œdème de la cornée ou des néovaisseaux", "Une cornée aplatie de 0,10 mm sur le méridien le plus plat", "Un BUT de 15 s mesuré après instillation de fluorescéine", "Une rivière lacrymale de 0,3 mm de hauteur au bord de la paupière"],
    bonne: 0,
    explication: "L'hypoxie est un apport insuffisant d'oxygène à la cornée. Elle se voit en biomicroscopie par un œdème (plis, stries), une rougeur limbique ou, si elle dure, des néovaisseaux. Les trois autres propositions sont des valeurs normales ou une mesure sans lien avec l'oxygène.",
    indice: "Une cornée privée d'oxygène gonfle, et finit par appeler de nouveaux vaisseaux."
  },
  {
    id: "U5-235", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un jeune de 20 ans voit de plus en plus flou, avec un astigmatisme irrégulier qui augmente et une myopie qui progresse. Quelle maladie faut-il évoquer ?",
    choix: ["Un kératocône : cornée amincie qui bombe en cône", "Une cataracte nucléaire : cristallin qui s'opacifie et devient plus myopisant", "Une DMLA : atteinte de la macula après 60 ans avec déformation des lignes", "Un glaucome à angle ouvert : nerf optique atteint sans douleur ni baisse d'acuité précoce"],
    bonne: 0,
    explication: "Le kératocône est un amincissement progressif de la cornée, qui prend la forme d'un cône. Il apparaît souvent à l'adolescence ou chez le jeune adulte et donne un astigmatisme irrégulier, une myopie croissante et une baisse d'acuité mal corrigée par les lunettes. Les lentilles rigides compensent souvent mieux. L'opticien oriente vers l'ophtalmologiste pour un bilan et une topographie.",
    indice: "Pense à la cornée : une cornée qui se déforme chez le jeune, et que les lunettes corrigent mal."
  },
  {
    id: "U5-236", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "moyen",
    question: "Un sujet a une exophorie de près de 6 Δ. Sa réserve en convergence (prismes base externe) donne un flou à 10 Δ. Le critère de Sheard est-il respecté ?",
    choix: ["Non : la réserve opposée devrait valoir au moins 12 Δ", "Oui : 10 Δ dépasse 6 Δ, donc la réserve est suffisante pour cette exophorie", "Oui : une réserve de 10 Δ suffit toujours quelle que soit la phorie", "Non : il faudrait au moins 18 Δ, soit trois fois la phorie"],
    bonne: 0,
    explication: "Sheard : la réserve opposée à la phorie doit valoir au moins deux fois la phorie. L'exophorie est compensée par la convergence, donc la réserve opposée est la réserve en convergence (base externe). 2 × 6 = 12 Δ. Avec 10 Δ, le critère n'est pas respecté : risque d'inconfort en vision de près.",
    erreurs: { 1: "notion" },
    indice: "Sheard demande deux fois la phorie. Quelle réserve est opposée à une exophorie : en convergence ou en divergence ?"
  },
  {
    id: "U5-237", epreuve: "U5", theme: "Masquage et phories", session: "2019",
    difficulte: "moyen",
    question: "Chez un sujet non presbyte, le bris du punctum proximum de convergence se fait à 12 cm du canthus externe. Que conclure ?",
    choix: ["La convergence est insuffisante : la norme est un bris à 8 cm au plus", "La convergence est normale : un bris à 12 cm reste dans la norme du non-presbyte", "La convergence est excessive : le bris aurait dû se faire plus loin", "On ne peut rien conclure sans avoir d'abord mesuré la phorie de loin"],
    bonne: 0,
    explication: "Chez un sujet non presbyte, le bris du PPC doit se faire à 8 cm au plus du canthus externe (5 cm de la racine du nez). Un bris à 12 cm est trop loin : insuffisance de convergence, qui peut gêner la lecture. Le recouvrement doit aussi revenir à 6 cm au plus du bris.",
    indice: "Un bon PPC converge de très près. Compare 12 cm à la limite de 8 cm."
  },
  {
    id: "U5-238", epreuve: "U5", theme: "Masquage et phories", session: "2021",
    difficulte: "facile",
    type: "calcul",
    question: "Un sujet a 1 Δ d'exophorie de loin et 7 Δ d'exophorie de près. Calcule la variation de sa phorie, c'est-à-dire son jeu phorique, en Δ.",
    reponse: {"valeur": 6, "unite": "Δ", "decimales": 0, "signe": false},
    erreurs: [{ valeur: 8, type: "notion", message: "Tu as additionné les deux phories. Le jeu phorique est la variation entre loin et près : on soustrait." }],
    explication: "Jeu phorique = phorie de près − phorie de loin = 7 − 1 = 6 Δ d'exophorie en plus. C'est dans la norme, prise d'exophorie de 4 à 6 Δ.",
    indice: "Le jeu phorique mesure ce que la phorie change de loin à près."
  },
  {
    id: "U5-239", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "moyen",
    question: "On augmente peu à peu un prisme base externe devant les deux yeux. Dans quel ordre le sujet décrit-il ce qu'il voit, puis que se passe-t-il en diminuant le prisme ?",
    choix: ["Vision nette, flou, bris (vision double) ; en diminuant : recouvrement (vision simple)", "Vision nette, bris, flou ; en diminuant : disparition de la vision double, puis retour du flou", "Flou, vision nette, bris ; en diminuant : retour du flou puis du bris avant la vision nette", "Vision nette, recouvrement, bris ; en diminuant : flou puis retour de la vision nette"],
    bonne: 0,
    explication: "En augmentant le prisme base externe, le sujet converge d'abord sans changer son accommodation. Quand cette réserve est épuisée, il converge en accommodant : c'est le flou, la vision reste simple. Au-delà, la fusion casse : c'est le bris, il voit double. En diminuant le prisme, la vision redevient simple : c'est le recouvrement. Le flou sert au critère de Sheard ; s'il n'y a pas de flou, on prend le bris.",
    indice: "Le flou précède le bris. Et le recouvrement est le retour à la vision simple en diminuant."
  },
  {
    id: "U5-240", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    type: "calcul",
    question: "Un emmétrope non presbyte voit net jusqu'à 12,5 cm devant l'œil. Calcule son amplitude d'accommodation.",
    reponse: {"valeur": 8, "unite": "δ", "decimales": 2, "signe": false},
    erreurs: [{ valeur: 12.5, type: "notion", message: "12,5 est la distance en centimètres. L'amplitude est la proximité du proximum : 1 divisé par 0,125 m." }],
    explication: "Pour un emmétrope, le remotum est à l'infini. L'amplitude vaut la proximité du proximum : [[1|0,125 m]] = 8,00 δ.",
    indice: "Amplitude = proximité du proximum moins proximité du remotum. Le remotum d'un emmétrope est à l'infini."
  },
  // ---------- Lot 2 du 22 nov. : lentilles, examen préliminaire, anisométropie, rédactions ----------
  {
    id: "U5-241", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    question: "Pourquoi une lentille rigide perméable aux gaz limite-t-elle le risque d'hypoxie ?",
    choix: ["Elle est petite, mobile, les larmes circulent derrière elle et son Dk/e est élevé", "Elle est hydrophile : l'eau qu'elle contient apporte l'oxygène à la cornée", "Elle couvre toute la cornée et la protège de l'air ambiant, riche en poussières", "Elle est collée à la cornée sans larmes dessous, ce qui limite les échanges"],
    bonne: 0,
    explication: "Une LRPG a un petit diamètre : une partie de la cornée reste exposée à l'air. Elle bouge à chaque clignement, ce qui renouvelle les larmes sous la lentille, et son matériau a un Dk/e élevé. Une lentille souple hydrophile, elle, dépend de l'eau qu'elle contient pour laisser passer l'oxygène.",
    indice: "Pense à la taille de la lentille, à ce qui se passe à chaque clignement, et au matériau."
  },
  {
    id: "U5-242", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "facile",
    question: "Quelle conséquence visuelle peut avoir une hypoxie cornéenne prolongée ?",
    choix: ["Une vision floue avec des halos autour des lumières", "Une diplopie verticale", "Un rétrécissement du champ visuel périphérique", "Une meilleure vision de près"],
    bonne: 0,
    explication: "Une cornée privée d'oxygène gonfle (œdème) et perd de sa transparence : la vision devient floue, avec des halos autour des lumières et un éblouissement. Le champ visuel périphérique et la diplopie ne dépendent pas de l'oxygénation de la cornée.",
    indice: "Une cornée qui gonfle n'est plus parfaitement transparente. Qu'est-ce que cela fait à l'image ?"
  },
  {
    id: "U5-243", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "facile",
    question: "Sur la fiche de commande d'une lentille rigide, que désignent ro et ΦT ?",
    choix: ["ro : rayon de la zone optique postérieure ; ΦT : diamètre total", "ro : rayon de la face antérieure de la lentille ; ΦT : épaisseur centrale", "ro : diamètre de la zone optique de la lentille ; ΦT : rayon total", "ro : puissance de la lentille en dioptries ; ΦT : transmissibilité à l'oxygène"],
    bonne: 0,
    explication: "ro est le rayon de courbure de la face postérieure, celle qui regarde la cornée : il fixe la cambrure de la lentille. ΦT est le diamètre total. La vergence de la lentille se note D'f, la transmissibilité Dk/e.",
    indice: "ro : le rayon de la zone optique de la face arrière, celle qui touche les larmes et la cornée."
  },
  {
    id: "U5-244", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Pour une première lentille rigide, quel ro d'essai choisit-on en général ?",
    choix: ["Un ro proche du rayon cornéen le plus plat, relevé à la kératométrie", "Un ro égal au rayon cornéen le plus cambré diminué de 1 mm", "Un ro choisi sans kératométrie, au hasard, puis corrigé à la fluorescéine", "Un ro égal au diamètre total de la lentille divisé par deux"],
    bonne: 0,
    explication: "On cherche une adaptation alignée : la face postérieure de la lentille épouse la cornée. On part donc d'un ro voisin du rayon du méridien le plus plat de la kératométrie, puis on ajuste après la fluorescéine : plat, on diminue ro ; serré, on l'augmente.",
    indice: "La kératométrie donne les rayons cornéens. Lequel des deux sert de point de départ ?"
  },
  {
    id: "U5-245", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "moyen",
    type: "calcul",
    question: "Compensation de l'œil en S : −5,00 sphérique. Le ménisque de larmes sous la lentille rigide a une vergence de +0,50 δ. Quelle est la puissance D'f de la LRPG ?",
    reponse: {"valeur": -5.5, "unite": "δ", "decimales": 2, "signe": true},
    erreurs: [{ valeur: -4.5, type: "notion", message: "La compensation totale est la somme de la lentille et du ménisque de larmes. Il faut donc retrancher le ménisque : −5,00 − 0,50." }],
    explication: "Compensation totale en S = D'f (lentille) + vergence du ménisque. Donc D'f = −5,00 − 0,50 = −5,50 δ. Le ménisque convergent ajoute de la puissance : la lentille doit être plus divergente.",
    indice: "Le ménisque de larmes fait partie de la compensation. Ce qu'il apporte, la lentille n'a plus à le fournir."
  },
  {
    id: "U5-246", epreuve: "U5", theme: "Lentilles", session: "2017",
    difficulte: "moyen",
    question: "Quel mode de compensation de la presbytie en lentilles se fait surtout en lentille rigide ?",
    choix: ["La vision alternée", "La monovision", "La vision simultanée", "L'orthokératologie"],
    bonne: 0,
    explication: "En vision alternée, le regard passe d'une zone de la lentille à l'autre (loin, près) : la lentille doit glisser, ce qui est possible avec une rigide. En vision simultanée, plusieurs zones de puissance sont devant la pupille et le cerveau choisit l'image nette. En monovision, un œil est pour le loin, l'autre pour le près.",
    indice: "Le mot « alternée » dit que le regard change de zone. Quelle lentille peut bouger sur l'œil pour cela ?"
  },
  {
    id: "U5-247", epreuve: "U5", theme: "Lentilles", session: "2023",
    difficulte: "moyen",
    question: "Quel est le principe de l'orthokératologie ?",
    choix: ["Lentille rigide de géométrie inversée, portée la nuit, qui aplatit le centre de la cornée", "Lentille souple portée la journée qui masque la myopie sans modifier la cornée", "Opération au laser qui modifie définitivement la courbure de la cornée", "Verre progressif porté seulement le soir pour reposer l'accommodation"],
    bonne: 0,
    explication: "La lentille d'orthokératologie est rigide et de géométrie inversée. Portée la nuit, elle aplatit temporairement le centre de la cornée. Le jour, la myopie est réduite ou annulée sans équipement. L'effet est réversible : il faut continuer à porter les lentilles.",
    indice: "Le mot clé est « nocturne » : l'équipement agit pendant le sommeil, pas pendant la journée."
  },
  {
    id: "U5-248", epreuve: "U5", theme: "Lentilles", session: "2021",
    difficulte: "moyen",
    question: "Quel est un inconvénient du silicone-hydrogel par rapport à un hydrogel classique ?",
    choix: ["Sa mouillabilité est plus faible et les dépôts lipidiques plus fréquents", "Il laisse nettement moins passer l'oxygène qu'un hydrogel classique", "Il est toujours contre-indiqué en port journalier chez les jeunes porteurs", "Il ne peut en aucun cas se porter la nuit, même en port prolongé"],
    bonne: 0,
    explication: "Le silicone donne au matériau une très grande transmissibilité à l'oxygène, mais il est moins mouillable et attire plus les dépôts lipidiques. C'est pourquoi on soigne l'entretien et la mouillabilité de surface. L'avantage est le Dk/e élevé, qui permet aussi le port prolongé.",
    indice: "L'avantage du silicone est l'oxygène. Son défaut vient de sa surface, plus grasse qu'une surface d'hydrogel."
  },
  {
    id: "U5-249", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Comment observe-t-on la fluorescéine sous une lentille rigide ?",
    choix: ["Lumière bleue (filtre cobalt) et filtre jaune devant l'observateur", "Lumière rouge seule, sans filtre devant l'observateur", "Lumière blanche seule, sans filtre ni colorant autre que le vert", "Lumière polarisée verticale, avec un analyseur horizontal devant l'observateur"],
    bonne: 0,
    explication: "La fluorescéine devient fluorescente sous une lumière bleue : on éclaire au biomicroscope avec un filtre cobalt. Un filtre jaune, placé devant l'observateur, augmente le contraste de l'image verte. On regarde ensuite la répartition du colorant sous la lentille.",
    indice: "La fluorescéine « s'allume » sous une couleur froide. Et un filtre jaune améliore le contraste."
  },
  {
    id: "U5-250", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "difficile",
    question: "Un client a un astigmatisme total de 1,75 δ, d'origine presque entièrement cornéenne, et veut des lentilles souples. Quelle rédaction est juste et complète ?",
    choix: ["Une souple suit la cornée, les larmes ne corrigent rien : reste 1,75 δ, au-delà de 0,75 δ. Souple torique", "Une souple sphérique épouse la cornée, annule son astigmatisme et suffit donc : je la choisis pour ce client", "L'astigmatisme de 1,75 δ ne se compense pas en lentilles : je refuse toute adaptation dans ce cas", "Je choisis une souple torique dans tous les cas, c'est toujours le meilleur choix possible pour un astigmate"],
    bonne: 0,
    explication: "Une lentille souple épouse la cornée et en garde la forme : le film de larmes ne compense rien. L'astigmatisme résiduel reste égal à l'astigmatisme total, 1,75 δ, au-delà de la limite d'environ 0,75 δ. Il faut une souple torique. Sous une rigide sphérique, le ménisque de larmes aurait compensé presque tout.",
    surLaCopie: "Une souple suit la cornée : les larmes ne compensent rien. Il reste 1,75 δ d'astigmatisme, supérieur à 0,75 δ. Je choisis une souple torique.",
    indice: "Une souple épouse la cornée. Que reste-t-il de l'astigmatisme sous une souple sphérique, et de quelle limite faut-il le comparer ?"
  },
  {
    id: "U5-251", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "facile",
    question: "Quels éléments de l'histoire de cas font suspecter une forte myopie ?",
    choix: ["Ne lit pas les panneaux, téléphone à 15 cm, lunettes depuis l'école primaire, frère très myope", "Bonne vue de loin mais fatigue en lecture en fin de journée, maux de tête devant l'écran", "Vue qui baisse de loin et de près, avec halos et nausées, œil rouge et douloureux", "Vue de près qui s'améliore avec l'âge, sans lunettes, avec une bonne vue de loin"],
    bonne: 0,
    explication: "Le myope fort voit flou de loin, mieux de près (son remotum est proche), se rapproche des objets, a souvent porté ses lunettes tôt, et un parent très myope augmente le risque. La deuxième réponse évoque plutôt une hypermétropie ou un défaut de convergence, la troisième une urgence de type glaucome aigu.",
    indice: "Le myope voit mieux de près : son remotum est devant l'œil."
  },
  {
    id: "U5-252", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "moyen",
    question: "Pourquoi un suivi régulier chez l'ophtalmologiste est-il recommandé pour un fort myope ? Quelle rédaction est juste et complète ?",
    choix: ["Œil plus long : rétine étirée et amincie, donc plus de décollements et de glaucome ; un suivi les repère tôt", "Parce que les verres d'un fort myope s'usent plus vite et doivent être contrôlés chaque année", "Parce qu'un fort myope finit forcément par devenir aveugle, quel que soit son suivi médical", "Parce que l'opticien n'a pas le droit de contrôler la vue d'un fort myope ni de lui vendre de verres"],
    bonne: 0,
    explication: "Un œil très myope est plus long que la normale. Sa rétine, étirée, s'amincit : déchirure et décollement, atteinte de la macula et glaucome sont plus fréquents. Un fond d'œil régulier les repère tôt. L'opticien conseille ce suivi sans poser de diagnostic.",
    surLaCopie: "L'œil très myope est plus long : sa rétine étirée s'amincit. Les décollements de rétine et le glaucome sont plus fréquents, d'où un suivi régulier.",
    indice: "Cherche la cause (la forme de l'œil), la conséquence (quelles structures) et l'utilité du suivi."
  },
  {
    id: "U5-253", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "facile",
    question: "Que mesure le test de Parinaud ?",
    choix: ["L'acuité visuelle de près", "La phorie de près", "Le champ visuel", "La vision des couleurs"],
    bonne: 0,
    explication: "Le test de Parinaud est une échelle de textes de tailles croissantes, lue à 40 cm, qui mesure l'acuité de près. Parinaud 2 correspond au petit texte lu normalement par un œil sans presbytie à 40 cm. Il sert à régler l'addition.",
    indice: "On le lit à 40 cm, avec des textes de plus en plus petits."
  },
  {
    id: "U5-254", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "difficile",
    type: "pose",
    question: "Un presbyte lit à 33 cm (3,00 δ). Avec sa compensation de loin, il ne lit pas le texte de référence ; il le lit dès qu'on ajoute +2,00 aux deux yeux. On garde la moitié de son amplitude en réserve. Calcule l'addition à essayer, étape par étape.",
    etapes: [
      {
        consigne: "Amplitude maximale apparente (en δ)",
        reponse: { valeur: 1, unite: "δ", decimales: 2, signe: false },
        aide: "L'accommodation requise à 33 cm est de 3,00 δ. Le sujet n'en fournit que ce qui reste quand on retire le verre positif qui l'aidait.",
        ligne: "Amplitude = requise − verre ajouté = 3,00 − 2,00 = 1,00 δ",
        erreurs: [{ valeur: 5, type: "signe", message: "Tu as additionné les deux. Le verre positif aide le sujet : il fournit une partie de l'accommodation requise, on la retire." }]
      },
      {
        consigne: "Accommodation de confort (en δ)",
        reponse: { valeur: 0.5, unite: "δ", decimales: 2, signe: false },
        aide: "Le sujet garde la moitié de son amplitude en réserve : il n'utilise que l'autre moitié.",
        ligne: "Confort = 1,00 ÷ 2 = 0,50 δ"
      },
      {
        consigne: "Addition à essayer (en δ)",
        reponse: { valeur: 2.5, unite: "δ", decimales: 2, signe: true },
        aide: "L'addition apporte ce que l'accommodation de confort ne fournit pas.",
        ligne: "Addition = 3,00 − 0,50 = +2,50 δ",
        erreurs: [{ valeur: 3.5, type: "signe", message: "L'accommodation de confort se retire de l'accommodation requise : 3,00 − 0,50, pas 3,00 + 0,50." }]
      }
    ],
    explication: "Amplitude apparente 1,00 δ, confort 0,50 δ, addition 3,00 − 0,50 = +2,50 δ. On l'essaie à la distance de travail, puis on contrôle que la lecture est confortable."
  },
  {
    id: "U5-255", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "À quoi sert la grille d'Amsler ?",
    choix: ["À repérer des déformations ou des trous dans la vision centrale, notamment dans la DMLA", "À mesurer la pression intraoculaire sans contact, par un jet d'air sur la cornée du sujet", "À dépister une cataracte avant qu'elle ne gêne la vision de loin, en lumière faible", "À mesurer la phorie verticale du sujet en vision de près, à 40 cm"],
    bonne: 0,
    explication: "Le client regarde, un œil après l'autre, une grille de lignes droites avec un point au centre. Si des lignes paraissent ondulées, cassées ou si une zone disparaît, la macula est peut-être atteinte : on oriente vers l'ophtalmologiste, sans poser de diagnostic.",
    indice: "Une grille de lignes droites : que révèle-t-elle quand les lignes paraissent tordues ?"
  },
  {
    id: "U5-256", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Quel test dépiste une anomalie de la vision des couleurs ?",
    choix: ["Les planches d'Ishihara", "La grille d'Amsler", "Le cadran de Parent", "Le test de Mallett"],
    bonne: 0,
    explication: "Les planches d'Ishihara cachent un chiffre dans un fond de points colorés : il est lu normalement par un sujet à vision des couleurs normale, et mal lu en cas de dyschromatopsie rouge-vert. Amsler explore la macula, Parent l'astigmatisme, Mallett la disparité de fixation.",
    indice: "Un seul de ces tests est fait de points de couleur."
  },
  {
    id: "U5-257", epreuve: "U5", theme: "Anisométropie", session: "2017",
    difficulte: "facile",
    question: "À partir de quelle différence de réfraction entre les deux yeux parle-t-on d'anisométropie ?",
    choix: ["Environ 1 δ", "Environ 0,12 δ", "Environ 5 δ", "Dès qu'il y a une différence d'acuité"],
    bonne: 0,
    explication: "Une différence de réfraction de l'ordre de 1 δ entre les deux yeux est considérée comme notable : c'est l'anisométropie. Elle est axile si la longueur des yeux diffère, de puissance (ou de vergence) si ce sont les vergences. Une différence d'acuité n'est pas une définition de l'anisométropie.",
    indice: "Retiens une valeur d'une dioptrie, pas un détail de quelques centièmes."
  },
  {
    id: "U5-258", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "facile",
    type: "calcul",
    question: "Le regard passe à 4 mm du centre optique d'un verre de +3,00. Calcule l'effet prismatique en Δ.",
    reponse: {"valeur": 1.2, "unite": "Δ", "decimales": 1, "signe": false},
    erreurs: [{ valeur: 12, type: "unite", message: "Prentice demande le décentrement en centimètres : 4 mm = 0,4 cm. P = 0,4 × 3,00 = 1,2 Δ." }],
    explication: "Prentice : P (Δ) = décentrement (cm) × |D| = 0,4 × 3,00 = 1,2 Δ.",
    indice: "Convertis les millimètres en centimètres avant de multiplier par la puissance."
  },
  {
    id: "U5-259", epreuve: "U5", theme: "Anisométropie", session: "2024",
    difficulte: "difficile",
    question: "Verre de −4,00 dont le centre optique est décalé de 5 mm vers le nez par rapport à la pupille. Quel effet prismatique le sujet subit-il ?",
    choix: ["2 Δ, base temporale", "2 Δ, base nasale", "20 Δ, base temporale", "0,2 Δ, base temporale"],
    bonne: 0,
    explication: "La pupille est à 5 mm du centre optique, du côté temporal. Prentice : P = 0,5 × 4,00 = 2 Δ. Un verre divergent se comporte comme deux prismes accolés par leur sommet au centre optique : leur base est tournée vers l'extérieur, donc ici vers la tempe : base temporale.",
    indice: "Un verre divergent a des bases vers l'extérieur. Où passe le regard par rapport au centre optique ?"
  },
  {
    id: "U5-260", epreuve: "U5", theme: "Anisométropie", session: "2018",
    difficulte: "moyen",
    question: "Un anisométrope porte des verres progressifs et subit en lecture un prisme vertical différentiel gênant. Quelle solution est adaptée ?",
    choix: ["Lunettes de près dédiées, prisme vertical compensateur ou progressif court", "Des verres teintés pour réduire l'éblouissement en lecture prolongée", "Des verres à indice plus élevé, sans autre changement de montage ni de centrage", "Un traitement anti-reflets plus performant sur les deux verres"],
    bonne: 0,
    explication: "En lecture le regard descend et traverse chaque verre loin de son centre optique : la différence de puissance crée un prisme vertical différentiel. On peut la réduire par une paire de lunettes pour la vision de près centrée sur le regard, un prisme vertical compensateur sur un verre, ou un progressif court, dont la zone de près est plus haute. Le reste n'agit pas sur l'effet prismatique.",
    indice: "Le défaut vient d'un décentrement entre le regard et le centre optique : il faut le réduire ou le compenser."
  },
  {
    id: "U5-261", epreuve: "U5", theme: "Anisométropie", session: "2018",
    difficulte: "moyen",
    contexte: "Il porte les mêmes verres depuis 6 ans ; les gênes sont apparues il y a 2 mois.",
    question: "Un client présente une aniséiconie de 1,8 %. Pourquoi ne peut-elle pas expliquer ses gênes ? Quelle rédaction est juste et complète ?",
    choix: ["1,8 % reste sous le seuil de 3 % ; une gêne due aux verres serait apparue dès leur premier port", "Parce que 1,8 % est supérieur à 3 %, seuil au-delà duquel la fusion devient impossible", "Parce qu'une aniséiconie ne gêne jamais la vision binoculaire, quelle que soit sa valeur", "Parce que 1,8 % est une valeur trop précise pour être vraie en pratique"],
    bonne: 0,
    explication: "Sous environ 3 %, l'aniséiconie ne gêne pas la fusion. Surtout, des verres portés depuis six ans sans souci ne peuvent pas être la cause d'une gêne qui date de deux mois : elle aurait été sentie dès le premier port. À partir de 3 %, la fusion peut être gênée.",
    surLaCopie: "1,8 % est inférieur à 3 % : l'aniséiconie ne gêne pas la fusion. Les mêmes verres sont bien portés depuis six ans : elle n'explique pas la gêne récente.",
    indice: "Compare 2,25 % à la limite de gêne, puis demande-toi quand la gêne aurait dû apparaître."
  },
  {
    id: "U5-262", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Dans une anisométropie axile, sans aucune compensation, quel œil forme l'image rétinienne la plus grande ?",
    choix: ["L'œil le plus long, donc le plus myope", "L'œil le plus court, donc le plus hypermétrope", "Les deux ont la même taille", "L'œil dominant, quelle que soit sa longueur"],
    bonne: 0,
    explication: "Plus l'œil est long, plus la rétine est loin du cristallin : l'image rétinienne est plus grande. L'œil axile le plus long, le plus myope, voit plus gros sans compensation. Les lunettes placées au foyer objet de l'œil ramènent les deux images à la même taille (loi de Knapp).",
    indice: "Une rétine plus éloignée du cristallin reçoit une image agrandie."
  },
  {
    id: "U5-263", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Quels sont les ordres de grandeur des diamètres totaux d'une lentille souple et d'une lentille rigide ?",
    choix: ["Souple : environ 14 mm ; rigide : environ 9 à 10 mm", "Souple : environ 9 mm ; rigide : environ 14 mm", "Souple : environ 20 mm ; rigide : environ 12 mm", "Souple et rigide : environ 5 mm"],
    bonne: 0,
    explication: "Une lentille souple fait environ 14 mm de diamètre : elle recouvre la cornée et déborde un peu sur la sclère. Une lentille rigide est plus petite, 9 à 10 mm : elle repose sur la cornée seule et bouge à chaque clignement.",
    indice: "La souple recouvre toute la cornée. Laquelle est donc la plus grande ?"
  },
  // ---------- Lot 3 du 22 nov. : presbytie, réfraction, vision binoculaire, pathologie ----------
  {
    id: "U5-264", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "difficile",
    type: "pose",
    question: "Un presbyte emmétrope a 1,50 δ d'amplitude d'accommodation. En vision de près, on lui met une addition de +1,50. Calcule, étape par étape, entre quelles distances il voit net avec ses verres de près.",
    etapes: [
      {
        consigne: "Distance du remotum avec l'addition (en cm)",
        reponse: { valeur: 66.7, unite: "cm", decimales: 1, signe: false, tolerance: 0.5 },
        aide: "Sans accommoder, l'œil voit net l'objet dont le verre de près donne une image à l'infini : sa proximité vaut l'addition.",
        ligne: "Proximité du remotum = +1,50 δ\nDistance = [[1|1,50]] ≈ 0,667 m = 66,7 cm"
      },
      {
        consigne: "Distance du proximum avec l'addition (en cm)",
        reponse: { valeur: 33.3, unite: "cm", decimales: 1, signe: false, tolerance: 0.5 },
        aide: "À l'accommodation maximale, la proximité du proximum vaut l'addition plus l'amplitude.",
        ligne: "Proximité du proximum = 1,50 + 1,50 = 3,00 δ\nDistance = [[1|3,00]] ≈ 0,333 m = 33,3 cm",
        erreurs: [{ valeur: 66.7, type: "notion", message: "Tu as redonné la distance du remotum. Le proximum met en jeu l'accommodation maximale : addition plus amplitude, soit 3,00 δ." }]
      }
    ],
    explication: "Avec l'addition, la zone de vision nette va de 66,7 cm (sans accommoder) à 33,3 cm (accommodation maximale). Elle est étroite : le presbyte doit ensuite changer de distance de lecture pour voir net plus près ou plus loin."
  },
  {
    id: "U5-265", epreuve: "U5", theme: "Examen préliminaire", session: "2018",
    difficulte: "moyen",
    question: "Avec des verres à double foyer, quelle distance de vision reste mal servie chez un presbyte avancé ?",
    choix: ["La distance intermédiaire, entre zone de loin et zone de près, vue floue ou sans confort", "La vision de près, car les verres à double foyer n'ont pas de zone de près du tout", "La vision de loin, car l'addition d'un double foyer est toujours trop forte pour cette distance", "La vision au-delà de 1 m, car la zone de loin d'un double foyer est trop petite pour cela"],
    bonne: 0,
    explication: "Un double foyer a deux puissances seulement. La zone de loin donne la vision nette jusqu'à une certaine distance, la zone de près commence plus près : entre les deux, par exemple à l'écran d'ordinateur ou au tableau de bord d'une voiture, la vue est floue ou inconfortable. Un progressif ou un trifocal comble ce trou.",
    indice: "Dessine les deux parcours d'accommodation : que se passe-t-il entre la fin de l'un et le début de l'autre ?"
  },
  {
    id: "U5-266", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Quelle addition moyenne attend-on vers 50 ans pour un presbyte ?",
    choix: ["Environ +1,50", "Environ +0,25", "Environ +3,50", "Environ +5,00"],
    bonne: 0,
    explication: "L'addition augmente avec l'âge, à mesure que l'amplitude diminue : environ +1,00 vers 45 ans, +1,50 vers 50 ans, +2,00 vers 55 ans et +2,50 vers 60 ans. Ce sont des ordres de grandeur : on détermine l'addition réelle par l'examen, selon la distance de travail.",
    indice: "Une addition de +1,00 à 45 ans, qui augmente d'environ 0,50 tous les cinq ans."
  },
  {
    id: "U5-267", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "moyen",
    question: "Un myope presbyte de −2,00, non compensé, lit sans difficulté à 50 cm. Pourquoi ?",
    choix: ["Son remotum est à 50 cm : il voit net sans accommoder à cette distance", "Il accommode de 2,00 δ de plus que les autres personnes de son âge", "La presbytie guérit la myopie à partir d'un certain âge", "Son proximum est situé à l'infini à cause de la presbytie"],
    bonne: 0,
    explication: "Un myope de −2,00 a son remotum à 50 cm devant l'œil. À cette distance, il voit net sans accommoder du tout : la presbytie ne le gêne pas. Pour lire plus près, il lui faudrait accommoder, ce que la presbytie limite. C'est pourquoi un myope presbyte retire souvent ses lunettes pour lire.",
    indice: "Un myope de −2,00 voit net à l'inverse de 2 dioptries, sans effort d'accommodation."
  },
  {
    id: "U5-268", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    type: "calcul",
    question: "Un presbyte emmétrope, dont l'amplitude d'accommodation est nulle, porte une addition de +2,50. À quelle distance voit-il net ? Réponds en cm.",
    reponse: {"valeur": 40, "unite": "cm", "decimales": 0, "signe": false},
    erreurs: [{ valeur: 2.5, type: "unite", message: "2,5 est la proximité en dioptries. La distance en mètres est 1 divisé par 2,5 ; en centimètres, multiplie par 100." }],
    explication: "Sans accommoder, il voit net l'objet dont le verre donne une image à l'infini, donc à la distance égale à l'inverse de l'addition : [[1|2,50]] = 0,40 m = 40 cm.",
    indice: "Distance = 1 divisé par la proximité. Pense à convertir en centimètres à la fin."
  },
  {
    id: "U5-269", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "moyen",
    question: "Où se situe la tache aveugle dans le champ visuel monoculaire ?",
    choix: ["À environ 15° côté temporal du point de fixation, un peu sous l'horizontale", "Au centre du champ visuel, exactement sur le point de fixation", "À environ 15° côté nasal du point de fixation, un peu au-dessus de l'horizontale", "À environ 90° côté temporal du point de fixation, sur l'horizontale"],
    bonne: 0,
    explication: "La tache aveugle correspond à la papille, où le nerf optique quitte l'œil et où il n'y a pas de photorécepteurs. La papille est du côté nasal de la rétine, donc la tache aveugle est vue du côté temporal du champ, à environ 15° du point de fixation. Elle passe inaperçue : l'autre œil et le cerveau la comblent.",
    indice: "La papille est du côté du nez sur la rétine. Le champ visuel est inversé par rapport à la rétine."
  },
  {
    id: "U5-270", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    question: "Pour vérifier la puissance du cylindre aux CCR, comment place-t-on les axes du CCR ?",
    choix: ["Ses axes (points rouges et blancs) sur les axes du cylindre compensateur", "Son manche sur l'axe du cylindre compensateur, ses axes à 45° de celui-ci", "Ses axes à 45° de ceux du cylindre compensateur, sans aucun autre repère", "Sans repère : n'importe quelle orientation du CCR convient pour ce contrôle"],
    bonne: 0,
    explication: "Pour la puissance, les points rouges du CCR (axe du cylindre négatif) sont placés sur l'axe du cylindre du compensateur : chaque face du CCR ajoute ou retire 0,50 de cylindre (±0,25 dans chaque méridien), sans changer l'équivalent sphérique ; on modifie ensuite le cylindre par pas de 0,25 selon la face préférée. Pour vérifier l'axe, c'est le manche du CCR qui est placé sur l'axe du compensateur, ses axes à 45°.",
    indice: "Axe : manche sur l'axe. Puissance : ce sont les points rouges et blancs qui viennent sur les axes."
  },
  {
    id: "U5-271", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    question: "Transpose +1,00 (+2,00) 45° en cylindre négatif.",
    choix: ["+3,00 (−2,00) 135°", "+3,00 (−2,00) 45°", "−1,00 (−2,00) 135°", "+3,00 (+2,00) 135°"],
    bonne: 0,
    explication: "Pour transposer : on additionne la sphère et le cylindre (1,00 + 2,00 = 3,00), on change le signe du cylindre (−2,00) et on tourne l'axe de 90° (45° + 90° = 135°). Le résultat est +3,00 (−2,00) 135°.",
    erreurs: { 1: "notion" },
    indice: "Trois gestes : sphère plus cylindre, signe du cylindre inversé, axe tourné de 90°."
  },
  {
    id: "U5-272", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    question: "Quel type d'astigmatisme correspond à la compensation −1,00 (+2,00) 90° ?",
    choix: ["Mixte : un méridien myope, l'autre hypermétrope", "Myopique composé : les deux méridiens sont myopes, à des degrés différents", "Hypermétropique simple : un méridien emmétrope, l'autre hypermétrope", "Myopique simple : un méridien emmétrope, l'autre myope"],
    bonne: 0,
    explication: "Cylindre positif à 90° : le méridien porté par l'axe garde la sphère, −1,00, et le méridien perpendiculaire a −1,00 + 2,00 = +1,00. Les deux puissances sont de signes opposés : l'astigmatisme est mixte, un méridien myope et l'autre hypermétrope.",
    indice: "Calcule la puissance de chaque méridien principal : sont-elles de même signe ?"
  },
  {
    id: "U5-273", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    question: "À quoi sert un collyre cycloplégique avant une réfraction chez un jeune enfant ?",
    choix: ["Paralyser l'accommodation pour mesurer l'amétropie totale, sur prescription médicale", "Dilater la pupille pour mieux voir le fond d'œil, sans aucun effet sur l'accommodation de l'enfant", "Diminuer la pression intraoculaire de l'enfant avant l'examen de son nerf optique et de son champ visuel", "Soulager les yeux fatigués d'un enfant après une longue séance de lecture ou de travail sur écran"],
    bonne: 0,
    explication: "Un enfant accommode beaucoup et sans s'en rendre compte : l'hypermétropie est cachée, la myopie surestimée. Le cycloplégique paralyse l'accommodation un temps, ce qui permet de mesurer l'amétropie totale. C'est un médicament : l'opticien ne l'utilise pas, il oriente vers l'ophtalmologiste.",
    indice: "Le préfixe cyclo- renvoie au muscle ciliaire, qui commande l'accommodation."
  },
  {
    id: "U5-274", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "facile",
    type: "calcul",
    question: "Un prisme de 4 Δ dévie un rayon lumineux. De combien (en cm) l'image d'un point est-elle déplacée sur un mur situé à 2,5 m ?",
    reponse: {"valeur": 10, "unite": "cm", "decimales": 0, "signe": false},
    erreurs: [{ valeur: 1.6, type: "notion", message: "1 Δ dévie de 1 cm à 1 m. À 2,5 m, la déviation est multipliée par 2,5, pas divisée : 4 × 2,5." }],
    explication: "1 Δ dévie de 1 cm à 1 m. À 2,5 m, 4 Δ dévient de 4 × 2,5 = 10 cm.",
    indice: "1 Δ vaut 1 cm à 1 m. Quand la distance augmente, la déviation augmente."
  },
  {
    id: "U5-275", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "facile",
    question: "Quel prisme mesure la réserve fusionnelle en divergence ?",
    choix: ["Un prisme base interne", "Un prisme base externe", "Un prisme base supérieure", "Un prisme base inférieure"],
    bonne: 0,
    explication: "Un prisme base interne oblige les yeux à diverger pour garder la vision simple : on mesure ainsi la réserve en divergence. Un prisme base externe sollicite la convergence : réserve en convergence. Les prismes verticaux mesurent les réserves verticales.",
    indice: "Pour diverger, les yeux doivent s'écarter : le prisme doit pousser l'image vers le nez ou vers la tempe ?"
  },
  {
    id: "U5-276", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    type: "calcul",
    question: "L'écart pupillaire d'un sujet est de 62 mm et il fixe un objet placé à 50 cm. Calcule la convergence requise, en Δ.",
    reponse: {"valeur": 12.4, "unite": "Δ", "decimales": 1, "signe": false},
    erreurs: [{ valeur: 124, type: "unite", message: "L'écart doit être en centimètres : 62 mm = 6,2 cm. Puis divise par la distance en mètres." }],
    explication: "Convergence totale (Δ) = écart pupillaire (cm) ÷ distance (m) = 6,2 ÷ 0,50 = 12,4 Δ. Chaque œil en fournit la moitié, 6,2 Δ.",
    indice: "Écart pupillaire en cm, distance en m, puis le quotient."
  },
  {
    id: "U5-277", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "facile",
    question: "Quelle convergence, en mètres-angles, un sujet doit-il fournir pour fixer un objet à 40 cm ?",
    choix: ["2,5 mètres-angles", "0,4 mètre-angle", "4 mètres-angles", "25 mètres-angles"],
    bonne: 0,
    explication: "Le mètre-angle est l'unité de convergence : c'est la proximité de l'objet, l'inverse de sa distance en mètres. À 40 cm, [[1|0,40]] = 2,5 mètres-angles. À cette distance, l'accommodation nécessaire vaut aussi 2,5 δ : le même nombre, ce qui montre le lien entre accommodation et convergence.",
    indice: "Même calcul que la proximité d'un objet : 1 divisé par la distance en mètres."
  },
  {
    id: "U5-278", epreuve: "U5", theme: "Masquage et phories", session: "2024",
    difficulte: "moyen",
    question: "Un cylindre de Maddox est placé avec ses stries VERTICALES. Que voit le sujet, et que mesure-t-on ?",
    choix: ["Une barre horizontale : on mesure la phorie verticale", "Une barre verticale : on mesure la phorie horizontale", "Un point sans barre : on mesure l'acuité", "Deux barres croisées : on mesure l'aniséiconie"],
    bonne: 0,
    explication: "La barre vue est perpendiculaire aux stries. Des stries verticales donnent une barre horizontale, dont le décalage haut-bas mesure la phorie verticale. Avec des stries horizontales, la barre est verticale et on mesure la phorie horizontale.",
    indice: "La barre est perpendiculaire aux stries. Une barre horizontale se décale en hauteur."
  },
  {
    id: "U5-279", epreuve: "U5", theme: "Masquage et phories", session: "2020",
    difficulte: "moyen",
    question: "Pourquoi fait-on le masquage unilatéral avant le masquage alterné ?",
    choix: ["Il distingue tropie et phorie ; l'alterné révèle la déviation totale", "Il mesure en Δ la valeur de la phorie, ce que l'alterné ne sait pas faire", "Il évalue l'acuité de chaque œil avant de rompre la fusion", "Il teste la vision des couleurs de chaque œil séparément"],
    bonne: 0,
    explication: "Au masquage unilatéral, on voit si l'œil découvert bouge pour prendre la fixation : mouvement au masquage, tropie ; mouvement au démasquage seulement, phorie. Le masquage alterné rompt la fusion en permanence et montre la déviation totale (phorie et tropie ensemble) : il ne dit pas ce qui est latent et ce qui est manifeste.",
    indice: "Un test qui ne rompt la fusion qu'un œil à la fois sépare le manifeste du latent."
  },
  {
    id: "U5-280", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    question: "Que recherche-t-on avec le test de Hirschberg ?",
    choix: ["Une déviation manifeste, d'après la position du reflet lumineux sur chaque cornée", "Une phorie, mesurée en Δ avec une barre de prismes placée devant un œil du sujet", "La vision stéréoscopique, avec des images dissociées par polarisation des deux yeux", "La disparité de fixation, avec des lignes verticales vues avec des lunettes polarisées"],
    bonne: 0,
    explication: "On éclaire les deux yeux avec une petite source lumineuse : chez un sujet qui fixe, les reflets cornéens sont symétriques. Si l'un des reflets est décalé, l'œil ne fixe pas la source : strabisme. Plus le décalage est grand, plus la déviation est importante. C'est un test rapide, utile chez l'enfant.",
    indice: "Pas de prisme ni de cache : on regarde où tombe le reflet d'une lampe sur chaque cornée."
  },
  {
    id: "U5-281", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un client se plaint d'être ébloui en lumière vive et lit moins bien en plein soleil que dans la pénombre. Quelle atteinte peut-on évoquer ?",
    choix: ["Une cataracte sous-capsulaire postérieure", "Un glaucome aigu par fermeture de l'angle", "Un kératocône débutant chez un adulte jeune", "Une rétinopathie diabétique non proliférante"],
    bonne: 0,
    explication: "Dans la cataracte sous-capsulaire postérieure, l'opacité se forme à l'arrière du cristallin, juste sous la capsule postérieure, au centre de l'axe. En lumière vive, la pupille se ferme et le client voit à travers l'opacité : il est ébloui. Dans la pénombre, la pupille s'ouvre et il voit mieux. L'opticien oriente vers l'ophtalmologiste.",
    indice: "Quand la lumière augmente, la pupille se ferme. Que traverse alors le regard ?"
  },
  {
    id: "U5-282", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un client de 70 ans voit soudain des lignes droites déformées et une tache au centre de son champ visuel, en quelques jours. Que faire ?",
    choix: ["L'orienter sans attendre vers un ophtalmologiste : une DMLA humide s'aggrave vite", "Lui refaire des lunettes avec une addition plus forte pour la lecture", "Lui conseiller d'attendre trois mois avant de reconsulter si cela persiste", "Lui conseiller des larmes artificielles pour soulager ses yeux secs"],
    bonne: 0,
    explication: "Des lignes déformées et une tache centrale qui apparaissent en quelques jours évoquent une DMLA exsudative (humide), due à des néovaisseaux sous la macula. Elle s'aggrave vite et se traite d'autant mieux qu'elle est prise tôt : l'opticien oriente sans attendre, sans poser de diagnostic. Des lunettes n'y changent rien.",
    indice: "Des lignes qui se tordent au centre et un début rapide : le délai compte."
  },
  {
    id: "U5-283", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "facile",
    question: "Un client diabétique n'a pas vu d'ophtalmologiste depuis trois ans. Que lui conseillez-vous en plus de ses lunettes ?",
    choix: ["Un fond d'œil au moins une fois par an, pour dépister une rétinopathie diabétique", "Rien : le diabète ne touche jamais les yeux tant qu'il est équilibré", "Un contrôle de la vue tous les dix ans, comme pour tout le monde", "Des lentilles de contact, qui voient mieux que des lunettes chez le diabétique"],
    bonne: 0,
    explication: "Le diabète abîme les petits vaisseaux de la rétine : la rétinopathie diabétique est longtemps sans symptôme. Un fond d'œil au moins annuel permet de la dépister à temps. L'opticien le rappelle et oriente : une bonne acuité aux lunettes ne suffit pas à l'écarter.",
    indice: "Une maladie longtemps silencieuse se dépiste par un examen régulier, pas par les symptômes."
  },
  {
    id: "U5-284", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Quels signes évoquent un décollement de rétine et imposent une consultation en urgence ?",
    choix: ["Éclairs lumineux, corps flottants nombreux d'apparition brutale, voile dans le champ", "Rougeur de l'œil avec sécrétions collantes au réveil et gêne modérée, sans baisse de vue", "Fatigue visuelle en fin de journée, surtout après un travail prolongé sur écran, sans douleur", "Gêne en lumière vive avec baisse progressive de la vue sur plusieurs mois, sans éclair"],
    bonne: 0,
    explication: "Quand la rétine se décolle, le client voit des éclairs (photopsies), de nombreux points ou fils noirs (myodésopsies) et un voile ou un rideau qui progresse dans le champ visuel. C'est une urgence : plus la prise en charge est rapide, meilleure est la récupération. Les autres propositions évoquent une conjonctivite, une asthénopie et une cataracte.",
    indice: "Un décollement s'annonce par des phénomènes lumineux et un voile qui avance."
  },
  {
    id: "U5-285", epreuve: "U5", theme: "Pathologie", session: "2022",
    difficulte: "moyen",
    question: "Quelle différence fait-on entre un orgelet et un chalazion ?",
    choix: ["Orgelet : infection douloureuse d'un bord de paupière ; chalazion : boule indolore, glande de Meibomius bouchée", "Orgelet : boule indolore sous la paupière ; chalazion : infection douloureuse de la racine d'un cil", "Les deux sont des atteintes de la cornée dues au port de lentilles et traitées par antibiotique en collyre", "Il n'y a aucune différence entre les deux : ce sont deux noms d'une même maladie de la paupière"],
    bonne: 0,
    explication: "L'orgelet est une infection, rouge, chaude et douloureuse, à la racine d'un cil ou d'une glande du bord de la paupière. Le chalazion est une petite boule indolore à l'intérieur de la paupière, due à l'obstruction d'une glande de Meibomius. Dans les deux cas, l'opticien conseille un avis médical et ne pose pas de diagnostic.",
    indice: "Douleur ou pas de douleur : un des deux est une infection récente."
  },
  // ---------- Lot 4 du 22 nov. : contactologie, binoculaire, acuité et couleurs, ergonomie, pathologie ----------
  {
    id: "U5-286", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Une porteuse de lentilles souples a un œil très rouge, une douleur vive et une gêne à la lumière depuis ce matin. Que lui dites-vous ?",
    choix: ["Enlever ses lentilles, ne pas les remettre, consulter un ophtalmologiste sans attendre", "Continuer à porter ses lentilles en y ajoutant des larmes artificielles plusieurs fois par jour", "Attendre deux jours que la rougeur passe avant de décider quoi que ce soit de plus", "Changer de solution d'entretien puis remettre ses lentilles dès ce soir, après un rinçage"],
    bonne: 0,
    explication: "Œil rouge, douleur vive et photophobie chez un porteur de lentilles : il faut penser à une kératite infectieuse, qui peut menacer la cornée en quelques heures. On enlève les lentilles, on ne les remet pas, et on consulte rapidement un ophtalmologiste. L'opticien ne pose pas de diagnostic.",
    indice: "Une douleur vive sous une lentille n'est pas banale : que fait-on de la lentille, et à quelle vitesse consulte-t-on ?"
  },
  {
    id: "U5-287", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Dans laquelle de ces situations reporte-t-on le port des lentilles ?",
    choix: ["Une conjonctivite en cours avec œil rouge et sécrétions", "Une fatigue visuelle en fin de journée devant un écran", "Une légère myopie stable depuis plusieurs années", "Un astigmatisme de 0,50 δ découvert à l'examen de vue"],
    bonne: 0,
    explication: "Un œil rouge avec sécrétions est une contre-indication temporaire : la lentille retiendrait les germes contre la cornée et aggraverait l'infection. On attend la guérison et l'avis médical avant de reprendre les lentilles. Les trois autres situations n'empêchent pas le port.",
    indice: "Quelle situation peut s'aggraver si une lentille reste contre un œil infecté ?"
  },
  {
    id: "U5-288", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Comment mesure-t-on le Break-Up Time (BUT) ?",
    choix: ["Fluorescéine, lumière bleue : on chronomètre le temps entre un clignement et la première zone sombre", "On mesure à la règle, sous lumière blanche, la hauteur de larmes au bord de la paupière inférieure", "On pose un papier buvard gradué sous la paupière inférieure et on lit la longueur mouillée après cinq minutes", "On compte le nombre de clignements par minute avec un chronomètre, pendant la lecture d'un texte"],
    bonne: 0,
    explication: "Après instillation de fluorescéine, le film lacrymal est vert sous lumière bleue. Le sujet cligne puis garde l'œil ouvert : on chronomètre le temps avant la première zone sombre (rupture du film). La norme est de 10 à 20 s. La hauteur de la rivière lacrymale mesure la quantité de larmes, pas la stabilité.",
    indice: "Le BUT mesure la stabilité du film : il faut un colorant, une lumière adaptée et un chronomètre."
  },
  {
    id: "U5-289", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "difficile",
    question: "Un myope de −6,00 passe de ses lunettes à des lentilles de contact. Que devient son accommodation pour une même distance de lecture ?",
    choix: ["Elle augmente : la lentille, posée sur l'œil, en demande plus que le verre de lunettes", "Elle diminue, car la lentille posée sur la cornée rapproche l'image de la rétine", "Elle ne change pas, la compensation étant exactement la même dans les deux cas", "Elle disparaît, car la lentille de contact compense aussi la presbytie du myope"],
    bonne: 0,
    explication: "Un verre divergent de lunettes, éloigné de l'œil, forme de l'objet proche une image un peu plus éloignée que ne le ferait une lentille posée sur la cornée : le myope en lunettes accommode un peu moins. En lentilles, son accommodation se rapproche de celle d'un emmétrope. L'effet croît avec la myopie. L'hypermétrope, lui, accommode moins en lentilles qu'en lunettes.",
    indice: "Le verre de lunettes est loin de l'œil : il aide un peu le myope à lire. Que perd-il en passant aux lentilles ?"
  },
  {
    id: "U5-290", epreuve: "U5", theme: "Masquage et phories", session: "2021",
    difficulte: "moyen",
    question: "Un étudiant a une forte exophorie de près, un punctum proximum de convergence éloigné, et se plaint de fatigue et de vision double en lecture. Quelle dysfonction évoquer ?",
    choix: ["Une insuffisance de convergence", "Un excès de convergence", "Un glaucome chronique à angle ouvert", "Une amblyopie fonctionnelle de l'œil droit"],
    bonne: 0,
    explication: "L'exophorie de près forte demande un effort de convergence : si la réserve est insuffisante et le PPC éloigné, la lecture devient fatigante, avec flou et diplopie en fin de journée. C'est une insuffisance de convergence. L'excès de convergence est l'inverse : ésophorie de près et PPC très proche.",
    indice: "Quel effort doit fournir l'étudiant pour lire de près avec une exophorie ?"
  },
  {
    id: "U5-291", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    question: "Qu'est-ce qu'un prisme de Fresnel et à quoi sert-il ?",
    choix: ["Une membrane souple collée sur le verre, à effet prismatique temporaire ; vision un peu dégradée", "Un prisme massif et très épais, collé à demeure dans la monture, pour les forts prismes", "Un verre teinté contre l'éblouissement, surtout utilisé en vision de loin et en extérieur", "Une lentille de contact multifocale pour presbytes, en vision simultanée, avec zones concentriques"],
    bonne: 0,
    explication: "Le prisme de Fresnel est une fine membrane de petits prismes juxtaposés, collée à l'arrière du verre. Il est léger, peu coûteux et facile à modifier : on l'utilise pour un essai de prisme ou une diplopie récente. Il dégrade un peu le contraste et l'acuité, donc il convient surtout à un usage temporaire.",
    indice: "Le mot clé est « membrane » : léger, ajustable, mais pas parfaitement transparent."
  },
  {
    id: "U5-292", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Quel critère définit une amblyopie fonctionnelle ?",
    choix: ["Acuité inférieure d'au moins deux lignes à celle de l'autre œil, après meilleure compensation, sans lésion", "Toute acuité inférieure à 10/10 d'un œil, même bien compensé, quelle que soit la cause de la baisse", "Une baisse d'acuité due à un glaucome ou à une autre atteinte organique de la rétine ou du nerf optique", "Une vision double qui persiste même après correction complète de l'amétropie des deux yeux"],
    bonne: 0,
    explication: "L'amblyopie est une baisse d'acuité d'un œil, d'au moins deux lignes par rapport à l'autre, qui persiste avec la meilleure compensation et sans lésion organique. Elle vient d'une mauvaise utilisation de l'œil pendant l'enfance (anisométropie, strabisme). C'est le critère de l'amblyopie d'un seul œil ; une amblyopie peut aussi toucher les deux yeux, par exemple après une forte amétropie non compensée dans l'enfance. Une acuité de 9/10 n'est pas une amblyopie, et la diplopie n'en est pas un signe.",
    indice: "Elle compare un œil à l'autre, avec la meilleure compensation, et sans lésion."
  },
  {
    id: "U5-293", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "facile",
    question: "Comment appelle-t-on un strabisme où l'œil dévié est tourné vers le nez ?",
    choix: ["Une ésotropie, ou strabisme convergent", "Une exotropie, ou strabisme divergent", "Une hypertropie", "Une exophorie"],
    bonne: 0,
    explication: "Strabisme convergent ou ésotropie : l'œil dévié part vers le nez. Strabisme divergent ou exotropie : il part vers la tempe. L'hypertropie est une déviation verticale. Le suffixe -tropie désigne une déviation manifeste, le suffixe -phorie une déviation latente.",
    indice: "Éso se dit de ce qui va vers l'intérieur. Et -tropie ou -phorie : manifeste ou latent ?"
  },
  {
    id: "U5-294", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "difficile",
    type: "calcul",
    question: "Un sujet a une exophorie de 8 Δ ; sa réserve opposée (prisme base temporale) donne un flou à 6 Δ. Avec la formule P = (2 × phorie − réserve opposée) ÷ 3, calcule le prisme minimal qui satisferait le critère de Sheard, en Δ.",
    reponse: {"valeur": 3.3, "unite": "Δ", "decimales": 1, "signe": false, "tolerance": 0.1},
    erreurs: [{ valeur: 10, type: "notion", message: "Tu as oublié de diviser par 3 : (2 × 8 − 6) ÷ 3." }],
    explication: "P = (2 × 8 − 6) ÷ 3 = 10 ÷ 3 ≈ 3,3 Δ. Avec ce prisme base nasale, la réserve passe à environ 9,3 Δ et la phorie descend à environ 4,7 Δ : 9,3 est bien le double de 4,7, le critère de Sheard est respecté. Le prisme reste une solution de dernier recours, après l'entraînement visuel, et relève de la prescription.",
    indice: "Numérateur : deux fois la phorie moins la réserve. Puis divise par trois."
  },
  {
    id: "U5-295", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "moyen",
    question: "Qu'est-ce que l'anneau de Landolt ?",
    choix: ["Un optotype en forme de C dont on repère l'orientation de l'ouverture", "Un test de vision des couleurs", "Un instrument qui mesure le rayon de courbure de la cornée", "Un test de relief"],
    bonne: 0,
    explication: "L'anneau de Landolt est un optotype : un anneau ouvert comme un C. Le sujet indique de quel côté est l'ouverture (haut, bas, gauche, droite). Pour 10/10, l'ouverture sous-tend 1 minute d'arc et l'anneau entier 5 minutes. C'est l'optotype de référence pour comparer les acuités.",
    indice: "Un anneau avec une ouverture : le sujet doit dire de quel côté elle se trouve."
  },
  {
    id: "U5-296", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "difficile",
    type: "calcul",
    question: "Pour 10/10 à 5 m, l'ouverture d'un anneau de Landolt sous-tend 1 minute d'arc (environ 0,000291 rad). Quelle est la largeur de cette ouverture, en mm ?",
    reponse: {"valeur": 1.45, "unite": "mm", "decimales": 2, "signe": false, "tolerance": 0.05},
    erreurs: [{ valeur: 1.45e-3, type: "unite", message: "La distance est de 5 m, soit 5000 mm : le résultat est en millimètres, 0,000291 × 5000." }],
    explication: "Pour un petit angle, largeur = angle (rad) × distance = 0,000291 × 5000 mm ≈ 1,45 mm. À 5 m, un optotype 10/10 a donc une ouverture d'environ 1,5 mm et un diamètre de 7,3 mm.",
    indice: "Petit angle : taille = angle en radians × distance. Mets la distance en millimètres."
  },
  {
    id: "U5-297", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "moyen",
    question: "Que signifie une deutéranopie ?",
    choix: ["Absence de cônes du vert : confusion du rouge et du vert", "Absence de cônes sensibles au rouge uniquement, sans confusion avec le vert", "Absence de cônes sensibles au bleu : confusion du bleu et du jaune", "Absence de bâtonnets : mauvaise vision de nuit sans trouble des couleurs"],
    bonne: 0,
    explication: "Il existe trois types de cônes, sensibles au rouge, au vert et au bleu. La protanopie est l'absence de cônes du rouge, la deutéranopie celle des cônes du vert, la tritanopie celle des cônes du bleu. Les deux premières donnent la confusion rouge-vert, la plus fréquente, surtout chez l'homme.",
    indice: "Les préfixes proto-, deutéro-, trito- numérotent les cônes dans l'ordre : rouge, vert, bleu."
  },
  {
    id: "U5-298", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Que fait le sujet au test de Farnsworth D15 ?",
    choix: ["Il classe 15 pastilles colorées dans l'ordre de leurs teintes", "Il lit un chiffre caché dans un fond de points colorés", "Il désigne l'orientation de l'ouverture d'un anneau de plus en plus petit", "Il suit une cible lumineuse du regard sur un fond coloré"],
    bonne: 0,
    explication: "Le Farnsworth D15 est un test de classement : le sujet range 15 pastilles colorées pour faire une progression continue de teintes. Les erreurs dessinent un schéma qui oriente vers un type de dyschromatopsie. La lecture d'un chiffre dans des points de couleur est le principe des planches d'Ishihara.",
    indice: "D15 : quinze pastilles à mettre en ordre."
  },
  {
    id: "U5-299", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un client ne voit plus, avec les deux yeux, toute la moitié droite de son champ visuel. De quoi s'agit-il probablement et que faire ?",
    choix: ["Hémianopsie latérale homonyme : atteinte des voies visuelles, avis médical urgent", "Cataracte : on propose des verres teintés pour réduire l'éblouissement dans la moitié du champ perdue", "Glaucome aigu : on conseille des gouttes à instiller sans avis médical, dès que possible", "Presbytie : on augmente l'addition pour mieux voir la moitié manquante du champ visuel"],
    bonne: 0,
    explication: "Perdre la même moitié du champ aux deux yeux est une hémianopsie latérale homonyme. Elle évoque une lésion des voies visuelles, au-delà du chiasma, par exemple un accident vasculaire cérébral. C'est une urgence médicale : l'opticien oriente sans attendre et ne pose pas de diagnostic.",
    indice: "Même moitié aux deux yeux : le problème ne vient pas d'un seul œil."
  },
  {
    id: "U5-300", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Pour mesurer l'acuité d'un enfant de 3 ans qui ne sait pas encore lire, quel type d'optotype choisit-on ?",
    choix: ["Des images ou des symboles simples, comme les planches de Pigassou", "Des lettres de l'alphabet de petite taille, lues à 5 mètres", "Un test de Parinaud, lu à 40 centimètres avec un texte suivi", "Un anneau de Landolt seul, sans jeu ni explication, à 5 mètres"],
    bonne: 0,
    explication: "Un jeune enfant reconnaît des dessins avant de connaître les lettres : on utilise des images (planches de Pigassou) ou des symboles simples. Le Parinaud est un texte de près, qui suppose la lecture, et l'anneau de Landolt, abstrait, convient mal à un enfant de cet âge.",
    indice: "Un enfant de 3 ans ne lit pas : quels optotypes reconnaît-il déjà ?"
  },
  {
    id: "U5-301", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "facile",
    question: "Que préconise la règle du « 20-20-20 » pour limiter la fatigue visuelle devant un écran ?",
    choix: ["Toutes les 20 minutes, regarder 20 secondes quelque chose à environ 6 m", "Regarder son écran 20 minutes, puis fermer les yeux 20 minutes d'affilée", "Cligner des yeux 20 fois par minute pendant tout le travail sur écran", "Placer l'écran à 20 cm des yeux pour mieux fixer l'image"],
    bonne: 0,
    explication: "Toutes les 20 minutes, on regarde pendant 20 secondes un objet à environ 20 pieds, soit 6 m. Cela relâche l'accommodation et la convergence et permet de cligner normalement. Un écran trop proche (20 cm) fatigue davantage.",
    indice: "Trois fois le chiffre 20 : un intervalle, une durée et une distance en pieds."
  },
  {
    id: "U5-302", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Quels conseils d'installation donne-t-on à un utilisateur d'écran qui se plaint de fatigue visuelle ?",
    choix: ["Écran à 50-70 cm, haut au niveau des yeux ou un peu en dessous, éclairage sans reflets", "Écran à 20 cm des yeux, dans une pièce sombre pour mieux voir les contrastes", "Écran placé au-dessus du niveau des yeux, pour regarder légèrement vers le haut", "Écran face à une fenêtre ensoleillée, pour profiter d'un éclairage naturel"],
    bonne: 0,
    explication: "L'écran se place à une distance de bras (50 à 70 cm), avec le haut au niveau des yeux ou un peu en dessous : le regard est légèrement abaissé, ce qui expose moins la surface de l'œil. On évite les reflets : la fenêtre se place sur le côté (écran perpendiculaire à la fenêtre), ni devant ni dans le dos, et on évite le contraste trop fort avec une pièce sombre.",
    indice: "Pas trop près, regard un peu vers le bas, aucun reflet gênant."
  },
  {
    id: "U5-303", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Quelle différence y a-t-il entre une pinguécula et un ptérygion ?",
    choix: ["Pinguécula : plaque jaunâtre de la conjonctive ; ptérygion : membrane pouvant gagner la cornée", "Pinguécula : lésion de la cornée ; ptérygion : lésion de la paupière due aux rayons UV", "Les deux sont des infections bactériennes de la conjonctive, toujours traitées par collyre antibiotique", "La pinguécula touche la rétine, le ptérygion le nerf optique, tous deux sans douleur"],
    bonne: 0,
    explication: "Les deux sont liés aux rayons UV, au vent et à la poussière. La pinguécula reste sur la conjonctive, à côté de la cornée, sous forme d'une petite plaque jaunâtre. Le ptérygion est un repli de conjonctive vascularisé qui peut avancer sur la cornée et gêner la vue ; il peut nécessiter une chirurgie. Un verre solaire protège.",
    indice: "Un seul des deux envahit la cornée et peut gêner la vue."
  },
  {
    id: "U5-304", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un jeune homme voit très mal à la tombée de la nuit et son champ visuel se rétrécit peu à peu en tunnel. Quelle maladie faut-il évoquer ?",
    choix: ["Une rétinopathie pigmentaire", "Une cataracte sous-capsulaire", "Une presbytie", "Un chalazion"],
    bonne: 0,
    explication: "La rétinopathie pigmentaire est une maladie héréditaire des bâtonnets : elle donne d'abord une mauvaise vision nocturne (héméralopie), puis un rétrécissement progressif du champ visuel en tunnel. L'opticien oriente vers l'ophtalmologiste, sans poser de diagnostic ni promettre qu'une compensation y changera quelque chose.",
    indice: "Les bâtonnets servent à la vision de nuit et en périphérie : que se passe-t-il quand ils disparaissent ?"
  },
  {
    id: "U5-305", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "difficile",
    question: "Un client a une PIO de 25 mmHg aux deux yeux, un nerf optique et un champ visuel normaux à l'examen de l'ophtalmologiste. Quel terme est exact ?",
    choix: ["Hypertonie oculaire : pression élevée sans atteinte du nerf optique, donc pas un glaucome", "Un glaucome aigu par fermeture de l'angle, nécessitant une prise en charge urgente aux urgences", "Une cataracte débutante qui élève la pression à l'intérieur de l'œil, avec opacification du cristallin", "Un glaucome à pression normale, avec atteinte du nerf optique malgré une PIO dans la norme"],
    bonne: 0,
    explication: "Une PIO supérieure à la norme (environ 21 mmHg) sans atteinte du nerf optique ni du champ visuel est une hypertonie oculaire : un facteur de risque de glaucome, mais pas un glaucome. Une surveillance régulière est nécessaire. Le glaucome à pression normale est l'inverse : atteinte du nerf avec une PIO normale.",
    indice: "Un glaucome est une atteinte du nerf optique. Ici, le nerf est intact."
  },
  {
    id: "U5-306", epreuve: "U5", theme: "Worth", session: "complément",
    difficulte: "facile",
    question: "Comment recherche-t-on l'œil dominant ?",
    choix: ["Il vise un objet lointain à travers un petit trou, les deux yeux ouverts, puis ferme un œil : l'œil dominant garde l'objet", "Avec un cylindre de Maddox placé devant un œil, en mesurant précisément le décalage de la barre rouge par rapport au point", "Avec le cadran de Parent, en cherchant l'œil qui voit la ligne la plus noire sur le cadran avec la meilleure compensation", "Avec un kératomètre, en comparant le rayon de courbure de chaque cornée dans les deux méridiens principaux"],
    bonne: 0,
    explication: "On demande au sujet de viser une cible lointaine à travers un petit trou (ou en alignant son doigt) avec les deux yeux ouverts. En fermant alternativement chaque œil, l'œil dominant est celui avec lequel la cible reste alignée. L'œil dominant n'est pas forcément l'œil le plus fort.",
    indice: "Un petit trou et une cible : fermer un œil fait perdre l'alignement ou le garde."
  },
  // ---------- Lot 5 du 22 nov. : compléments sur tout le programme ----------
  {
    id: "U5-307", epreuve: "U5", theme: "Réfraction", session: "2018",
    difficulte: "moyen",
    question: "Avant l'équilibre bioculaire, on ajoute +0,50 aux deux yeux, puis on vérifie que l'acuité a baissé. Pourquoi ?",
    choix: ["Brouiller les deux yeux pour que l'accommodation ne fausse pas la comparaison", "Augmenter l'acuité des deux yeux, pour pouvoir ensuite comparer leur netteté", "Mesurer la phorie de loin en dissociant les deux yeux avec un prisme vertical", "Tester la vision des couleurs de chaque œil avant de les dissocier par prismes"],
    bonne: 0,
    explication: "Le +0,50 place les images en avant de la rétine : accommoder ne ferait qu'ajouter du flou, donc le sujet relâche son accommodation. La chute d'acuité vérifie que le brouillage joue bien son rôle. On compare ensuite le flou des deux yeux, dissociés, pour égaliser leur état accommodatif.",
    indice: "Plus de positif : l'image recule ou avance ? Et pourquoi vérifier que l'acuité chute ?"
  },
  {
    id: "U5-308", epreuve: "U5", theme: "Réfraction", session: "complément",
    difficulte: "moyen",
    type: "pose",
    question: "Un œil est compensé par −2,50 (+1,50) 30°. Transpose-le en cylindre négatif, puis calcule son équivalent sphérique, étape par étape.",
    etapes: [
      {
        consigne: "Sphère après transposition en cylindre négatif (en δ)",
        reponse: { valeur: -1, unite: "δ", decimales: 2, signe: true },
        aide: "On additionne la sphère et le cylindre : −2,50 + 1,50. Le cylindre devient −1,50 et l'axe tourne de 90° (120°).",
        ligne: "Sphère = −2,50 + 1,50 = −1,00 δ\nFormule : −1,00 (−1,50) 120°",
        erreurs: [{ valeur: -4, type: "signe", message: "Tu as soustrait. On additionne la sphère et le cylindre en gardant leurs signes : −2,50 + 1,50." }]
      },
      {
        consigne: "Équivalent sphérique (en δ)",
        reponse: { valeur: -1.75, unite: "δ", decimales: 2, signe: true },
        aide: "Équivalent sphérique = sphère + la moitié du cylindre, avec la formule transposée.",
        ligne: "ES = −1,00 + [[−1,50|2]] = −1,75 δ",
        erreurs: [{ valeur: -2.5, type: "notion", message: "Tu as repris la sphère de départ. L'équivalent sphérique vaut la sphère plus la moitié du cylindre." }]
      }
    ],
    explication: "Transposition : −1,00 (−1,50) 120°. Équivalent sphérique : −1,00 + (−1,50 ÷ 2) = −1,75 δ. On trouve le même résultat avec la formule de départ : −2,50 + 1,50 ÷ 2 = −1,75 δ."
  },
  {
    id: "U5-309", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Comment une lentille souple torique reste-t-elle orientée sur l'œil ?",
    choix: ["Stabilisation : bas plus épais (prisme-ballast) ou bords tronqués, en appui sur les paupières", "Collage léger de la lentille à la cornée par un gel adhésif de quelques gouttes, avant la pose", "Rotation libre : l'orientation de la lentille torique n'a aucune importance pour la correction", "Aimantation d'une pièce de la lentille, attirée par les paupières à chaque clignement"],
    bonne: 0,
    explication: "Une lentille torique doit garder l'axe de son cylindre aligné avec celui de l'œil. On la stabilise avec une forme asymétrique : prisme-ballast (bas plus épais, qui tombe sous l'effet de la pesanteur), double troncature ou zones amincies qui s'appuient sur les paupières. On contrôle sur l'œil que le repère ne tourne pas trop.",
    indice: "Pesanteur et paupières : une forme asymétrique évite que la lentille tourne."
  },
  {
    id: "U5-310", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Pourquoi les lentilles rigides en PMMA ont-elles été abandonnées au profit des lentilles perméables aux gaz ?",
    choix: ["Le PMMA ne laisse pas passer l'oxygène : la cornée ne respire que par les larmes", "Le PMMA est trop mou pour garder la forme de la cornée", "Le PMMA est trop transparent, ce qui éblouit le porteur en lumière vive", "Le PMMA est toxique pour les larmes et provoque des allergies fréquentes"],
    bonne: 0,
    explication: "Le PMMA (polyméthacrylate de méthyle) est un matériau rigide, mais imperméable à l'oxygène : l'oxygène n'arrivait à la cornée que par le renouvellement des larmes sous la lentille. Les matériaux perméables aux gaz laissent passer l'oxygène à travers la lentille, ce qui réduit fortement l'hypoxie.",
    indice: "Le « perméable aux gaz » du sigle LRPG dit ce que le PMMA ne fait pas."
  },
  {
    id: "U5-311", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Une porteuse de lentilles souples se plaint d'yeux secs en fin de journée. Quelle conduite est adaptée ?",
    choix: ["Contrôler les larmes (BUT, rivière), proposer des larmes artificielles compatibles, envisager une journalière", "Lui conseiller de dormir avec ses lentilles pour les maintenir humides toute la nuit, ce qui calme la sécheresse", "Lui conseiller de ne jamais cligner pour ne pas perdre les larmes déposées sur l'œil pendant la journée", "Lui conseiller n'importe quel collyre du commerce, à n'importe quelle fréquence, lentilles en place"],
    bonne: 0,
    explication: "La sécheresse oculaire se gère d'abord en évaluant la quantité et la qualité des larmes. On propose des larmes artificielles compatibles avec les lentilles et sans conservateur, on réduit la durée de port et on envisage une lentille mieux adaptée : journalière, matériau mouillable. Dormir avec ses lentilles aggrave l'hypoxie et les risques d'infection.",
    indice: "Mesurer d'abord, lubrifier ensuite avec un produit compatible, adapter la lentille si besoin."
  },
  {
    id: "U5-312", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "difficile",
    type: "pose",
    question: "Anisométropie purement axile : OD −2,00 et OG −5,00 (sphériques), verres à 15 mm de l'œil. Calcule l'aniséiconie totale en lunettes, étape par étape. On compte 1,7 % par dioptrie d'écart pour l'aniséiconie axile.",
    etapes: [
      {
        consigne: "Aniséiconie axile (en %)",
        reponse: { valeur: 5.1, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "Écart de 3 dioptries, à 1,7 % par dioptrie.",
        ligne: "3 × 1,7 = 5,1 %, en faveur de l'OG (le plus long)"
      },
      {
        consigne: "Aniséiconie induite par les lunettes (en %)",
        reponse: { valeur: 4.5, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "Distance verre-œil en cm × différence des verres : 1,5 cm × 3 δ.",
        ligne: "1,5 × 3 = 4,5 %, en faveur de l'OD (le moins myope)"
      },
      {
        consigne: "Aniséiconie totale (en %)",
        reponse: { valeur: 0.6, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "Les deux effets sont de sens contraires : fais la différence.",
        ligne: "5,1 − 4,5 = 0,6 %",
        erreurs: [{ valeur: 9.6, type: "notion", message: "Les deux aniséiconies s'opposent : l'axile favorise l'OG, l'induite l'OD. On les soustrait." }]
      }
    ],
    explication: "Aniséiconie axile 5,1 %, induite 4,5 % en sens contraire : totale 0,6 %, très inférieure à 3 %. Les lunettes compensent presque l'aniséiconie d'une anisométropie axile, ce que dit la loi de Knapp."
  },
  {
    id: "U5-313", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    question: "Un sujet a une hyperphorie de l'OD (son OD est plus haut en position passive). Où place-t-on le prisme qui réaligne ses yeux ?",
    choix: ["Base inférieure devant l'OD", "Base supérieure devant l'OD", "Base interne devant l'OD", "Base externe devant l'OG"],
    bonne: 0,
    explication: "En position passive, l'OD regarde plus haut que l'objet. Un prisme déplace l'image de l'objet vers son sommet : sommet en haut, donc base en bas devant l'OD, et l'objet apparaît là où l'œil regarde. On peut aussi placer un prisme base supérieure devant l'OG.",
    indice: "Le sommet du prisme est du côté où l'œil est parti, comme pour une exophorie (base interne)."
  },
  {
    id: "U5-314", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un client perd d'un seul coup la vue d'un œil, sans douleur. Que faites-vous ?",
    choix: ["Je l'envoie immédiatement aux urgences ophtalmologiques, sans refaire de lunettes", "Je lui propose de refaire une réfraction dès demain matin pour vérifier sa vue avec précision", "Je lui conseille de se reposer et de revenir me voir dans une semaine si cela ne passe pas", "Je lui propose d'essayer une lentille de contact pour récupérer la vue de l'œil concerné"],
    bonne: 0,
    explication: "Une perte de vision brutale d'un œil, même indolore, est une urgence : elle peut venir d'une occlusion d'un vaisseau de la rétine, d'un décollement de rétine ou d'une atteinte du nerf optique. Le délai de prise en charge compte. L'opticien n'a pas à poser de diagnostic : il oriente sans attendre.",
    indice: "Brutal et sans douleur ne veut pas dire sans gravité."
  },
  {
    id: "U5-315", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "moyen",
    question: "Un client de 60 ans voit depuis longtemps quelques points noirs mobiles, toujours les mêmes, sans éclair lumineux ni voile. Quelle conduite est juste ?",
    choix: ["Anciens et stables, ces corps flottants sont souvent bénins ; je conseille de consulter si leur nombre augmente brutalement ou si des éclairs apparaissent", "Je pose le diagnostic de décollement de rétine et j'adresse la personne en urgence aux urgences ophtalmologiques de l'hôpital le plus proche", "Je lui annonce que ce n'est jamais grave, quelle que soit l'évolution des corps flottants dans les semaines suivantes, même avec des éclairs", "Je lui conseille un collyre du commerce sans avis médical, à instiller plusieurs fois par jour jusqu'à la disparition des points noirs"],
    bonne: 0,
    explication: "Des corps flottants (myodésopsies) anciens, stables et sans signe associé sont fréquents et le plus souvent bénins. En revanche, une augmentation brutale, des éclairs lumineux ou un voile dans le champ évoquent un décollement de rétine : urgence. L'opticien rassure sans minimiser et donne la consigne de consulter.",
    indice: "Ancien et stable, ou brutal et accompagné d'éclairs ? La conduite dépend de ce critère."
  },
  {
    id: "U5-316", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "facile",
    question: "Quel appareil cartographie l'ensemble de la surface de la cornée, du centre à la périphérie ?",
    choix: ["Le topographe cornéen", "L'ophtalmomètre de Javal", "Le lensomètre", "L'autoréfractomètre"],
    bonne: 0,
    explication: "Le topographe cornéen analyse un grand nombre de points de la cornée et en donne une carte. L'ophtalmomètre de Javal ne mesure que deux rayons dans les méridiens principaux, sur une petite zone centrale. La topographie est indispensable pour un kératocône ou une orthokératologie.",
    indice: "Une carte de toute la cornée n'est pas faite d'une seule mesure en deux méridiens."
  },
  {
    id: "U5-317", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Quel test de quantité des larmes utilise une bandelette graduée laissée cinq minutes sous la paupière inférieure ?",
    choix: ["Le test de Schirmer", "Le BUT", "La mesure de la rivière lacrymale", "Le test à la fluorescéine"],
    bonne: 0,
    explication: "Le test de Schirmer place une bandelette de papier buvard sous la paupière inférieure et mesure la longueur humidifiée en cinq minutes : c'est un test quantitatif, invasif puisqu'il touche l'œil. La mesure de la hauteur de la rivière lacrymale est le test quantitatif non invasif. Le BUT et la fluorescéine jugent la qualité du film.",
    indice: "Une bandelette, un temps, une longueur mouillée : quel test connais-tu qui fonctionne ainsi ?"
  },
  {
    id: "U5-318", epreuve: "U5", theme: "Pathologie", session: "complément",
    difficulte: "facile",
    question: "Comment fonctionne un tonomètre à air, utilisé en dépistage ?",
    choix: ["Il envoie un jet d'air sur la cornée, sans contact, et en déduit la PIO", "Il mesure la pression avec une lentille posée directement sur la cornée anesthésiée", "Il mesure la pression en comprimant doucement la paupière contre le globe", "Il photographie le fond d'œil et en déduit la pression par la taille de la papille"],
    bonne: 0,
    explication: "Le tonomètre à air envoie une bouffée d'air sur la cornée et mesure la force nécessaire pour aplanir la cornée : c'est une mesure sans contact de la PIO, pratique en dépistage. Elle est faite par l'ophtalmologiste ou l'orthoptiste, pas par l'opticien. Elle reste approximative : une valeur élevée se confirme chez l'ophtalmologiste, avec la tonométrie à aplanation.",
    indice: "Le mot « air » dit ce qui touche la cornée : pas d'instrument en contact."
  },
  {
    id: "U5-319", epreuve: "U5", theme: "Worth", session: "complément",
    difficulte: "moyen",
    question: "Qu'est-ce qui permet au cerveau de percevoir le relief en vision binoculaire ?",
    choix: ["Les petites différences horizontales entre les images des deux yeux, si la fusion est possible", "Une accommodation plus forte de l'œil dominant que de l'œil non dominant, quelle que soit la distance", "Un œil qui voit les objets un peu plus gros que l'autre, ce qui crée une impression de profondeur", "Les différences de couleur entre les images de chaque œil, interprétées par le cortex visuel"],
    bonne: 0,
    explication: "Chaque œil voit la scène sous un angle légèrement différent : les images rétiniennes présentent une disparité horizontale. Le cerveau, après fusion, l'interprète en profondeur : c'est la vision stéréoscopique, 3e degré de la vision binoculaire. Sans fusion, ou avec un œil neutralisé, le relief fin disparaît.",
    indice: "Deux yeux écartés voient la scène sous deux angles légèrement différents."
  },
  {
    id: "U5-320", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "moyen",
    question: "Après une compensation optimale, un client n'atteint que 4/10 à un œil, alors que l'autre voit 10/10. Quelle conduite est adaptée ?",
    choix: ["Chercher une cause (amblyopie, atteinte organique) et l'orienter vers l'ophtalmologiste", "Augmenter la sphère de plusieurs dioptries jusqu'à obtenir 10/10 à cet œil, quitte à surcompenser", "Conclure qu'il a un astigmatisme et prescrire un cylindre au hasard sur cet œil", "Ne rien dire : l'autre œil compense, donc la vision binoculaire est normale malgré tout"],
    bonne: 0,
    explication: "Quand l'acuité plafonne bien en dessous de la normale malgré la meilleure compensation, ce n'est pas un problème d'optique : on pense à une amblyopie fonctionnelle (écart de plusieurs lignes entre les yeux) ou à une atteinte organique. L'opticien note la valeur et oriente vers l'ophtalmologiste pour le bilan.",
    indice: "Si la compensation est la meilleure possible, la cause du flou n'est plus optique."
  },
  {
    id: "U5-321", epreuve: "U5", theme: "Examen préliminaire", session: "complément",
    difficulte: "facile",
    question: "Quel est le réflexe pupillaire normal quand on éclaire un œil ?",
    choix: ["La pupille se contracte (myosis) : réflexe photomoteur", "La pupille se dilate (mydriase) pour laisser entrer plus de lumière", "La pupille ne bouge pas tant que l'éclairage reste inférieur à 1000 lux", "La pupille change de couleur sous l'effet de la lumière vive"],
    bonne: 0,
    explication: "À la lumière, la pupille se ferme (myosis) : c'est le réflexe photomoteur, direct pour l'œil éclairé et consensuel pour l'autre œil. Dans la pénombre, elle se dilate (mydriase). Une anomalie, par exemple une pupille qui ne réagit pas ou des pupilles de tailles différentes, appelle un avis médical.",
    indice: "Pense à l'éblouissement : la pupille protège la rétine en se fermant."
  },
  {
    id: "U5-322", epreuve: "U5", theme: "Lentilles", session: "2018",
    difficulte: "difficile",
    question: "Pourquoi l'acuité d'un fort myope augmente-t-elle souvent quand il passe des lunettes aux lentilles ? Quelle rédaction est juste et complète ?",
    choix: ["Le verre divergent rapetisse l'image rétinienne, la lentille beaucoup moins : l'image plus grande révèle des détails plus fins", "Les lentilles corrigent plus fort que les lunettes, d'où une acuité meilleure à même sphère théorique prescrite", "Les lentilles agrandissent la cornée, ce qui fait voir les objets plus gros que derrière un verre de lunettes", "Les lentilles réduisent la longueur de l'œil, et donc la myopie, tant qu'elles sont portées sur la cornée"],
    bonne: 0,
    explication: "Un verre divergent éloigné de l'œil rapetisse l'image rétinienne : à même objet, l'image est plus petite en lunettes qu'en lentilles. Comme l'acuité dépend de la taille de l'image sur la rétine, le myope en lentilles distingue des détails plus fins. La puissance de compensation est la même : c'est la taille de l'image qui change.",
    surLaCopie: "Le verre divergent rapetisse l'image rétinienne ; la lentille, posée sur l'œil, beaucoup moins. L'image plus grande permet de séparer des détails plus fins : l'acuité augmente.",
    indice: "La compensation est la même. Qu'est-ce qui change entre les lunettes et les lentilles ?"
  },
  {
    id: "U5-323", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Comment un verre convergent et un verre divergent modifient-ils la taille de l'image rétinienne, par rapport à la même compensation en lentille de contact ?",
    choix: ["Le verre convergent l'agrandit, le verre divergent la rapetisse", "Le verre convergent la rapetisse, le verre divergent l'agrandit", "Les deux l'agrandissent", "Aucun ne la modifie"],
    bonne: 0,
    explication: "Un verre convergent éloigné de l'œil donne un effet de loupe : l'image rétinienne est agrandie, ce qui explique l'effet de grossissement des yeux de l'hypermétrope derrière ses lunettes. Un verre divergent la rapetisse : les yeux du myope paraissent plus petits. Avec une lentille de contact, ces effets sont beaucoup plus faibles.",
    indice: "Les yeux d'un hypermétrope paraissent grossis derrière leurs lunettes : le verre convergent fait loupe."
  },
  {
    id: "U5-324", epreuve: "U5", theme: "Lentilles", session: "complément",
    difficulte: "moyen",
    question: "Pourquoi une lentille rigide perméable aux gaz donne-t-elle souvent une meilleure acuité qu'une lentille souple sur une cornée irrégulière ?",
    choix: ["Sa face avant reste régulière et le ménisque de larmes comble les irrégularités", "Elle est plus fine que la souple, donc elle gêne moins la lumière", "Elle est plus colorée, ce qui augmente le contraste de l'image", "Elle est plus molle que la souple, et épouse chaque irrégularité de la cornée"],
    bonne: 0,
    explication: "Une lentille rigide garde sa forme : sa face avant régulière remplace la surface de la cornée, et le film de larmes, qui a presque l'indice de la cornée, comble les irrégularités. Une souple épouse la cornée et en reproduit les défauts. C'est pourquoi on choisit souvent une lentille rigide pour un kératocône ou un astigmatisme irrégulier.",
    indice: "Une souple épouse la cornée, défauts compris. Que fait une rigide de sa forme ?"
  },
  {
    id: "U5-325", epreuve: "U5", theme: "Worth", session: "complément",
    difficulte: "moyen",
    question: "Qu'est-ce que l'aire de Panum ?",
    choix: ["Petite zone de rétine dont les points fusionnent avec un point de l'autre œil malgré une légère disparité", "Zone de la macula où la vision est la plus fine et où se forment les images de fixation de chaque œil", "Test de vision des couleurs fondé sur le classement de pastilles de teintes voisines, comme le Farnsworth", "Zone du champ visuel masquée par la tache aveugle d'un œil, vue du côté temporal du champ"],
    bonne: 0,
    explication: "À un point de la rétine d'un œil correspond, sur l'autre rétine, une petite zone, l'aire de Panum : si l'image de l'autre œil y tombe, les deux images fusionnent malgré leur légère disparité et la vision est simple. Au-delà de cette aire, c'est la diplopie. La disparité de fixation reste dans l'aire de Panum.",
    indice: "La fusion tolère un petit décalage entre les deux images : où se trouve ce domaine de tolérance ?"
  },

  // ---------- Lot du 28 nov. : critère de Sheard (réserve opposée, point de flou) et Prentice (verre torique, verres de signes opposés) ----------
  {
    id: "U5-366", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "moyen",
    contexte: "De près, Lucas a 5 Δ d'ésophorie. Ses réserves fusionnelles de près ont été mesurées au von Graefe.",
    annexe: { titre: "Réserves fusionnelles de près", colonnes: ["", "Flou", "Bris", "Recouvrement"], lignes: [["Convergence (base externe)", "14 Δ", "20 Δ", "15 Δ"], ["Divergence (base interne)", "8 Δ", "13 Δ", "9 Δ"]] },
    question: "Pour Lucas, le critère de Sheard est-il respecté ?",
    choix: ["Oui : la convergence au flou, 14 Δ, dépasse 2 × 5 = 10 Δ", "Oui : la divergence au bris, 13 Δ, dépasse 2 × 5 = 10 Δ", "Non : la divergence au flou, 8 Δ, reste sous 2 × 5 = 10 Δ", "Non : la divergence au flou, 8 Δ, reste sous 3 × 5 = 15 Δ"],
    bonne: 2,
    erreurs: {
      0: { type: "notion", message: "Une ésophorie se compense en divergeant : la réserve opposée est la divergence (base interne), pas la convergence." },
      1: { type: "notion", message: "Sheard se lit au point de flou, pas au bris. En divergence, le flou est à 8 Δ : sous les 10 Δ demandés." }
    },
    explication: "Une ésophorie se compense en divergeant : la réserve opposée est la divergence (prismes base interne). On la lit au point de flou : 8 Δ. Sheard demande au moins 2 × 5 = 10 Δ. 8 < 10 : critère non respecté, la vision de près risque d'être inconfortable. Les pièges : prendre la convergence, lire le bris, ou tripler la phorie.",
    surLaCopie: "Ésophorie de 5 Δ : la réserve opposée est la divergence, 8 Δ au point de flou.\nSheard demande au moins 2 × 5 = 10 Δ : critère non respecté, inconfort probable de près.",
    indice: "Une ésophorie se compense dans quel sens ? Puis lis la réserve au premier signe, le flou."
  },
  {
    id: "U5-367", epreuve: "U5", theme: "Masquage et phories", session: "2022",
    difficulte: "difficile",
    contexte: "De près, Jade a 9 Δ d'exophorie. Ses réserves fusionnelles de près ont été mesurées au von Graefe.",
    annexe: { titre: "Réserves fusionnelles de près", colonnes: ["", "Flou", "Bris", "Recouvrement"], lignes: [["Convergence (base externe)", "15 Δ", "22 Δ", "14 Δ"], ["Divergence (base interne)", "18 Δ", "24 Δ", "19 Δ"]] },
    question: "Pour Jade, le critère de Sheard est-il respecté ?",
    choix: ["Oui : la divergence au flou vaut 18 Δ, soit exactement 2 × 9 Δ", "Non : la convergence au flou, 15 Δ, reste sous 2 × 9 = 18 Δ", "Oui : la convergence au bris, 22 Δ, dépasse 2 × 9 = 18 Δ", "Non : il faudrait au moins 27 Δ, soit trois fois la phorie"],
    bonne: 1,
    erreurs: {
      0: { type: "notion", message: "Une exophorie se compense en convergeant : la réserve opposée est la convergence (base externe), pas la divergence." },
      2: { type: "notion", message: "Sheard se lit au point de flou, pas au bris : en convergence, 15 Δ, sous les 18 Δ demandés." }
    },
    explication: "Une exophorie se compense en convergeant : la réserve opposée est la convergence (prismes base externe), lue au point de flou : 15 Δ. Sheard demande au moins 2 × 9 = 18 Δ. 15 < 18 : critère non respecté. La divergence, qui vaut 18 Δ, ne sert à rien ici : elle va dans le même sens que la phorie.",
    surLaCopie: "Exophorie de 9 Δ : la réserve opposée est la convergence, 15 Δ au point de flou.\nSheard demande au moins 2 × 9 = 18 Δ : critère non respecté.",
    indice: "Quelle réserve aide une exophorie ? Lis-la au flou, puis compare au double de la phorie."
  },
  {
    id: "U5-368", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "difficile",
    type: "calcul",
    question: "De près, un sujet a 6 Δ d'ésophorie ; sa réserve en divergence (base interne) donne un flou à 9 Δ. Avec P = (2 × phorie − réserve opposée) ÷ 3, calcule le prisme qui respecterait le critère de Sheard, en Δ.",
    reponse: {"valeur": 1, "unite": "Δ", "decimales": 1, "signe": false, "tolerance": 0.05},
    erreurs: [
      { valeur: 3, type: "notion", message: "Tu as oublié de diviser par 3 : (2 × 6 − 9) ÷ 3 = 1 Δ." }
    ],
    explication: "P = (2 × 6 − 9) ÷ 3 = 3 ÷ 3 = 1 Δ, au total sur les deux verres. Ésophorie : le prisme se place base externe. Contrôle : la phorie descend à 5 Δ et la réserve en divergence monte à 10 Δ, le double de 5. Le prisme reste un dernier recours.",
    indice: "Deux fois la phorie, moins la réserve opposée, le tout divisé par trois."
  },
  {
    id: "U5-369", epreuve: "U5", theme: "Masquage et phories", session: "complément",
    difficulte: "moyen",
    question: "Pour le critère de Sheard, pourquoi lit-on la réserve au point de flou plutôt qu'au point de bris ?",
    choix: ["Le bris ne se mesure qu'en vision de loin, jamais en vision de près", "Le flou et le bris donnent toujours la même valeur, c'est une habitude", "Le bris donne la phorie du sujet, et le flou donne sa réserve", "Au flou, la vergence fusionnelle est épuisée : l'accommodation intervient"],
    bonne: 3,
    erreurs: { 2: "notion" },
    explication: "Quand on ajoute des prismes, le sujet compense d'abord par sa vergence fusionnelle seule. Au point de flou, cette réserve est épuisée : il commence à faire varier son accommodation pour converger ou diverger, d'où le flou. Au-delà, jusqu'au bris, l'effort n'est plus confortable. S'il n'y a pas de flou, on prend le bris.",
    indice: "Que se passe-t-il quand la vergence fusionnelle ne suffit plus et que l'accommodation vient l'aider ?"
  },
  {
    id: "U5-370", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "difficile",
    type: "calcul",
    question: "OD +3,00 (−2,00) 180° et OG +3,00. En lecture, le regard passe 8 mm sous les centres optiques. Calcule l'effet prismatique vertical différentiel.",
    reponse: {"valeur": 1.6, "unite": "Δ", "decimales": 1, "signe": false, "tolerance": 0.05},
    erreurs: [
      { valeur: 0, type: "notion", message: "Les sphères sont égales, mais le cylindre de l'OD agit dans le méridien vertical : à 90°, l'OD ne vaut que +1,00." },
      { valeur: 0.8, type: "notion", message: "Tu as pris l'équivalent sphérique (+2,00). Le regard descend : on prend la puissance dans le méridien vertical, +1,00 à l'OD." },
      { valeur: 16, type: "unite", message: "Prentice demande le décentrement en centimètres : 8 mm = 0,8 cm." }
    ],
    explication: "Le regard se déplace verticalement : on prend la puissance dans le méridien vertical (90°). Le cylindre d'axe 180° agit entièrement à 90° : OD +3,00 − 2,00 = +1,00 ; OG +3,00. Prentice, d = 0,8 cm : OD 0,8 × 1,00 = 0,8 Δ ; OG 0,8 × 3,00 = 2,4 Δ, bases supérieures des deux côtés. Différentiel : 2,4 − 0,8 = 1,6 Δ base supérieure sur l'OG.",
    indice: "Quel méridien compte quand le regard descend ? Un cylindre agit à 90° de son axe."
  },
  {
    id: "U5-371", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    question: "Pour l'effet prismatique vertical d'un verre −0,50 (−1,25) 180°, quelle puissance mets-tu dans la formule de Prentice ?",
    choix: ["−1,75 δ, la puissance dans le méridien vertical", "−0,50 δ, la sphère du verre prise seule", "−1,12 δ, l'équivalent sphérique du verre", "−1,25 δ, le cylindre du verre pris seul"],
    bonne: 0,
    erreurs: {
      1: { type: "notion", message: "La sphère seule oublie le cylindre, qui agit entièrement à 90° de son axe : dans le méridien vertical, −0,50 − 1,25 = −1,75 δ." },
      2: { type: "notion", message: "L'équivalent sphérique est une moyenne. Pour un effet vertical, on prend la puissance dans le méridien vertical : −1,75 δ." }
    },
    explication: "Un déplacement vertical du regard fait travailler le méridien vertical (90°). Un cylindre n'a pas de puissance dans son axe et toute sa puissance à 90° de son axe : axe 180°, il agit entièrement à 90°. Puissance à 90° : −0,50 + (−1,25) = −1,75 δ. Si l'axe était à 90°, le méridien vertical vaudrait −0,50 δ.",
    indice: "Un cylindre agit à 90° de son axe. Quel méridien travaille quand le regard monte ou descend ?"
  },
  {
    id: "U5-372", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "moyen",
    type: "calcul",
    question: "OD −2,50 et OG +1,00 (sphériques). En lecture, le regard passe 6 mm sous les centres optiques. Calcule l'effet prismatique vertical différentiel.",
    reponse: {"valeur": 2.1, "unite": "Δ", "decimales": 1, "signe": false, "tolerance": 0.05},
    erreurs: [
      { valeur: 0.9, type: "notion", message: "Tu as soustrait. Un verre − et un verre + : les bases sont opposées (inférieure à l'OD, supérieure à l'OG), on additionne." },
      { valeur: 21, type: "unite", message: "Prentice demande le décentrement en centimètres : 6 mm = 0,6 cm." }
    ],
    explication: "Prentice, d = 0,6 cm. OD : 0,6 × 2,50 = 1,5 Δ ; verre divergent, regard sous le centre : base inférieure. OG : 0,6 × 1,00 = 0,6 Δ ; verre convergent : base supérieure. Bases opposées, les effets s'ajoutent : 1,5 + 0,6 = 2,1 Δ (base inférieure sur l'OD). Un effet vertical différentiel de cette taille gêne la fusion : on cherche à le réduire.",
    indice: "Trouve la base de chaque prisme. Bases opposées : on additionne ; même sens : on soustrait."
  },
  {
    id: "U5-373", epreuve: "U5", theme: "Anisométropie", session: "complément",
    difficulte: "difficile",
    question: "OD +3,00 et OG −1,00 (sphériques). Le sujet regarde 1 cm au-dessus des centres optiques. Effet prismatique vertical différentiel ?",
    choix: ["2 Δ, base inférieure sur l'OD", "3 Δ : seul le verre convergent dévie la lumière", "4 Δ, base inférieure sur l'OD", "4 Δ, base supérieure sur l'OD"],
    bonne: 2,
    erreurs: {
      0: { type: "notion", message: "Tu as soustrait. Verre + et verre − : les bases sont opposées, on additionne : 3 + 1 = 4 Δ." }
    },
    explication: "Au-dessus des centres optiques. OD, verre convergent : base vers le centre optique, donc vers le bas : 3 Δ base inférieure. OG, verre divergent : base vers le bord, donc vers le haut : 1 Δ base supérieure. Bases opposées : 3 + 1 = 4 Δ, soit 4 Δ base inférieure sur l'OD (ou base supérieure sur l'OG).",
    indice: "Au-dessus du centre, où est la base d'un verre + ? D'un verre − ? Puis additionne ou soustrais."
  }
);

// ---------- Mini-cas (format : notes/coordination/etape1-formats.md) ----------
CAS.push(
  {"id": "CAS-U5-01", "epreuve": "U5", "titre": "M. R., 29 ans, graphiste : fatigue en fin de journée", "contexte": "Il se plaint d'une fatigue visuelle en fin de journée devant l'écran et dit que les lignes « bougent » en lecture. Sans lunettes, il voit flou de loin, encore plus de l'OG. Avec ses lunettes, il trouve que l'OG voit les objets plus petits."},
  {"id": "CAS-U5-02", "epreuve": "U5", "titre": "Mme V., 23 ans, étudiante : maux de tête en lecture", "contexte": "Elle a mal à la tête après une heure de lecture et voit parfois le texte se dédoubler en fin de journée. Elle porte +0,50 aux deux yeux depuis trois ans et voit bien de loin.", "annexe": {"titre": "Compensation portée", "colonnes": ["", "OD", "OG"], "lignes": [["Sphère", "+0,50", "+0,50"], ["Acuité de loin", "10/10", "10/10"]]}},
  {"id": "CAS-U5-03", "epreuve": "U5", "titre": "M. T., 52 ans, enseignant : la lecture devient pénible", "contexte": "Il éloigne ses copies pour les lire et ferme les yeux après quinze heures de cours. De loin, il voit bien. Il n'a jamais porté de lunettes.", "annexe": {"titre": "Mesures", "colonnes": ["", "OD", "OG"], "lignes": [["Autoréfractomètre", "+0,75 (−0,50) 180°", "+1,00 (−0,50) 180°"], ["Acuité de loin", "10/10", "10/10"], ["Amplitude (binoculaire)", "2,00 δ", "2,00 δ"]]}},
  {"id": "CAS-U5-04", "epreuve": "U5", "titre": "Léa, 8 ans : l'institutrice s'inquiète", "contexte": "Léa penche la tête et se frotte l'œil gauche en lisant. Elle ne se plaint de rien et n'a jamais porté de lunettes.", "annexe": {"titre": "Acuité sans correction", "colonnes": ["", "OD", "OG"], "lignes": [["Acuité de loin", "10/10", "3/10"]]}},
  {"id": "CAS-U5-05", "epreuve": "U5", "titre": "Mme D., 31 ans : l'œil rouge d'une porteuse de lentilles", "contexte": "Mme D. est myope. Elle porte des lentilles souples mensuelles toute la journée, et parfois la nuit. Elle arrive avec l'œil droit rouge depuis deux jours, gêné par la lumière, qui larmoie et lui fait mal."},
  {"id": "CAS-U5-06", "epreuve": "U5", "titre": "M. K., 26 ans : myope astigmate, il veut des lentilles pour le sport", "contexte": "M. K. voit flou de loin et plisse les yeux. Il n'a jamais porté de lunettes et souhaite des lentilles pour le sport.", "annexe": {"titre": "Mesures de l'œil droit", "colonnes": ["", "OD"], "lignes": [["Autoréfractomètre", "−1,50 (−2,00) 180°"], ["Acuité sans correction", "1/10"]]}}
);
