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
    explication: "Seul l'œil au filtre rouge (OD) perçoit : il voit son marqueur monoculaire rouge et l'élément fusionnel blanc, qui lui paraît rouge. Les marqueurs verts de l'OG manquent : pas de vision simultanée (1er degré), donc pas de fusion (2e degré). L'OG est neutralisé.",
    indice: "Commence par te demander quel filtre est devant chaque œil, et quels symboles chacun peut voir à travers le sien. Quel œil manque à l'appel ?",
    schema: "img/schemas/U5/worth-neutralisation-og.svg",
    schemaTexte: "Test de Worth : l'œil au filtre rouge voit le losange et le rond en rouge, l'œil au filtre vert voit les deux croix et le rond en vert. Le sujet ne voit que les 2 symboles rouges."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2023",
    question: "Test de Worth, filtre rouge sur l'OD, filtre vert sur l'OG. Le sujet ne voit que 3 symboles verts. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Neutralisation de l'OD", "Diplopie croisée", "Dominance de l'OD"],
    bonne: 1,
    explication: "Seul l'œil au filtre vert (OG) perçoit : ses 2 marqueurs verts plus l'élément fusionnel blanc, vu vert (le filtre ne laisse passer que sa couleur). L'OD est neutralisé. Piège classique : l'élément fusionnel prend toujours la couleur du filtre de l'œil qui voit.",
    indice: "L'élément fusionnel blanc prend la couleur du filtre de l'œil qui le voit. Si tout est vert, quel œil voit, et lequel ne transmet rien ?"
  },
  {
    epreuve: "U5", theme: "Worth", session: "2023",
    question: "Au test de Worth, le sujet voit 5 symboles. Que met-on en évidence ?",
    choix: ["Une neutralisation", "Une diplopie : vision simultanée présente, mais pas de fusion", "Une vision binoculaire normale", "Une amblyopie"],
    bonne: 1,
    explication: "Les marqueurs des deux yeux sont vus : le 1er degré (vision simultanée) est présent. L'élément fusionnel est vu double : le 2e degré (fusion) manque. Le sens de la diplopie (homonyme ou croisée) indique ensuite la phorie associée.",
    indice: "Compte les symboles de chaque œil : 2 pour l'un, 3 pour l'autre. Si les deux yeux voient mais que l'élément commun apparaît deux fois, quel degré manque ?"
  },
  {
    epreuve: "U5", theme: "Worth", session: "2022",
    question: "Filtre rouge sur l'OD. Le sujet voit 4 symboles, l'élément fusionnel lui paraît rosé. Conclusion ?",
    choix: ["Neutralisation de l'OG", "Diplopie homonyme", "Vision binoculaire avec dominance de l'OD", "Vision binoculaire avec dominance de l'OG"],
    bonne: 2,
    explication: "4 symboles = vision simultanée et fusion. L'élément fusionnel prend la couleur de l'œil dominant : rosé = l'œil au filtre rouge, l'OD.",
    indice: "4 symboles : les deux yeux travaillent ensemble. La couleur prise par l'élément fusionnel indique quel œil l'emporte."
  },
  {
    epreuve: "U5", theme: "Worth", session: "2020",
    question: "Filtre rouge sur l'OD. Le sujet voit 5 symboles, les rouges à DROITE des verts. Type de diplopie et phorie associée ?",
    choix: ["Diplopie croisée, exophorie associée", "Diplopie homonyme, ésophorie associée", "Diplopie croisée, ésophorie associée", "Diplopie homonyme, exophorie associée"],
    bonne: 1,
    explication: "L'image de l'OD (rouge) est du côté de l'OD (à droite) : diplopie homonyme. Loi de Desmarres : homonyme = éso, croisée = exo. C'est donc une ésophorie associée.",
    indice: "Regarde de quel côté se trouve l'image de l'OD (rouge) par rapport à l'OD. Puis applique la loi de Desmarres pour passer de la diplopie à la phorie.",
    schema: "img/schemas/U5/worth-diplopie-homonyme.svg",
    schemaTexte: "Perception du sujet : les symboles rouges de l'OD sont à droite des verts de l'OG, diplopie homonyme. Vue de dessus : les lignes de regard passives se croisent en avant du test, ésophorie."
  },

  // ---------- Masquage (cover test) ----------
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Au masquage unilatéral, aucun mouvement au masquage. Au DÉMASQUAGE, l'œil fait un mouvement temporo-nasal. Conclusion ?",
    choix: ["Exophorie", "Ésophorie", "Exotropie", "Ésotropie"],
    bonne: 0,
    explication: "Aucun mouvement au masquage = pas de tropie. Mouvement au démasquage = phorie dissociée (supérieure à 3 Δ, sinon on ne la voit pas). L'œil revient vers le nez (temporo-nasal) : sous le cache, il était parti vers l'extérieur. C'est une exophorie.",
    indice: "Mouvement au masquage ou au démasquage : l'un signe une tropie, l'autre une phorie. Ensuite, si l'œil revient vers le nez, où était-il sous le cache ?",
    schema: "img/schemas/U5/cover-test-exophorie.svg",
    schemaTexte: "Sujet vu de face, OD à gauche de l'image. On masque l'OD : l'OG ne bouge pas. Sous le cache, l'OD part vers la tempe. Au démasquage, il revient vers le nez : exophorie."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Au démasquage de l'OD, l'œil fait un mouvement de bas en haut pour reprendre la fixation. Aucun mouvement au masquage. Conclusion ?",
    choix: ["Hyperphorie D/G (= hypophorie G/D)", "Hypophorie D/G (= hyperphorie G/D)", "Hypertropie D/G (= hypotropie G/D)", "Hypotropie D/G (= hypertropie G/D)"],
    bonne: 1,
    explication: "Aucun mouvement au masquage = pas de tropie. Au démasquage, l'œil remonte : derrière le cache, il était en bas. L'OD est plus bas que l'OG : hypophorie D/G, qu'on écrit le plus souvent hyperphorie G/D (on nomme l'œil le plus haut). Le cover test s'interprète dans les deux plans, et la norme verticale est l'orthophorie.",
    indice: "Si l'OD remonte pour reprendre la fixation, où était-il derrière le cache ? Par convention, on nomme le plus souvent l'œil le plus haut."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2020",
    question: "On masque l'OD : l'OG non masqué fait un mouvement naso-temporal pour prendre la fixation. Conclusion ?",
    choix: ["Ésophorie OG", "Ésotropie OG", "Exotropie OG", "Exophorie OG"],
    bonne: 1,
    explication: "Au masquage, si l'œil NON masqué bouge, il ne fixait pas : la déviation est manifeste (tropie). Il part vers la tempe pour fixer : il était dévié vers le nez. C'est une ésotropie (strabisme convergent) de l'OG.",
    indice: "Ici c'est l'œil NON masqué qui bouge. Pourquoi bougerait-il s'il fixait déjà le test ? Et s'il part vers la tempe, de quel côté était-il dévié ?"
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "complément",
    question: "Exophorie de l'OD. On démasque l'OD : quel schéma (sujet vu de face) montre le bon mouvement ?",
    choix: ["Flèche sous l'OD, vers le nez (temporo-nasal)", "Flèche sous l'OD, vers la tempe (naso-temporal)", "Flèche sous l'OG, vers le nez", "Flèche verticale à côté de l'OD, vers le haut"],
    choixSchemas: ["img/schemas/U5/cover-choix-juste.svg", "img/schemas/U5/cover-choix-faux-sens.svg", "img/schemas/U5/cover-choix-faux-og.svg", "img/schemas/U5/cover-choix-faux-vertical.svg"],
    bonne: 0,
    explication: "En exophorie, l'œil masqué part vers la tempe en position passive. Au démasquage, c'est lui (l'OD) qui reprend la fixation : il revient vers le nez, mouvement temporo-nasal. Sujet vu de face, son OD est à gauche de l'image et son nez au centre : la flèche va donc vers la droite de l'image. Les pièges : inverser le sens (ce serait une ésophorie), faire bouger l'OG (il fixe déjà, il ne bouge pas), ou tracer un mouvement vertical (ce serait une phorie verticale).",
    indice: "Sujet vu de face : son OD est à gauche de l'image, et sa tempe droite aussi. Demande-toi où part l'œil sous le cache en exophorie, puis quel œil bouge au démasquage."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Normes de phorie dissociée horizontale (méthode de von Graefe) : quelle est la valeur attendue en vision de près, à 40 cm ?",
    choix: ["Orthophorie à 1 Δ d'exophorie", "Exophorie de 4 à 6 Δ", "Ésophorie de 4 à 6 Δ", "Exophorie de 15 Δ"],
    bonne: 1,
    explication: "Normes du BTS : en VL, orthophorie à 1 Δ d'exophorie ; en VP (40 cm), exophorie de 4 à 6 Δ ; dans le plan vertical, orthophorie. Le passage VL → VP donne donc une prise d'exophorie de 4 à 6 Δ (jeu phorique).",
    indice: "Les normes viennent de la méthode de von Graefe. En VP, l'accommodation entraîne moins de convergence que ce que demande le test : dans quel sens penche la phorie ?"
  },

  // ---------- Maddox ----------
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Un cylindre de Maddox est placé devant l'OD avec ses stries HORIZONTALES. Le sujet voit :",
    choix: ["Une barre horizontale, pour mesurer la phorie verticale", "Une barre verticale, pour mesurer la phorie horizontale", "Un point lumineux rouge", "Deux points lumineux"],
    bonne: 1,
    explication: "La barre vue est perpendiculaire aux stries. Stries horizontales → barre verticale → on mesure le décalage horizontal, donc la phorie horizontale. La dissociation est totale et sensorielle (les deux yeux ne voient pas la même image).",
    indice: "La barre vue à travers un Maddox est perpendiculaire à ses stries. Et une barre sert à repérer un décalage perpendiculaire à elle-même."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Maddox sur l'OD (barre verticale). Le sujet voit la barre rouge à GAUCHE du point lumineux. Conclusion ?",
    choix: ["Ésophorie", "Exophorie", "Orthophorie", "Hyperphorie droite"],
    bonne: 1,
    explication: "L'image de l'OD est vue à gauche, du côté opposé à l'OD : diplopie croisée. En position passive, les lignes de regard se croisent en arrière du point de fixation : c'est une exophorie.",
    indice: "L'image de l'OD est-elle du côté de l'OD ou du côté opposé ? Diplopie homonyme ou croisée, puis loi de Desmarres."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Test placé à 50 cm : la barre de Maddox est vue décalée de 3 cm par rapport au point lumineux. Valeur de la phorie ?",
    choix: ["1,5 Δ", "3 Δ", "6 Δ", "15 Δ"],
    bonne: 2,
    explication: "1 Δ = 1 cm de déviation à 1 m. P (Δ) = décalage (cm) ÷ distance (m) = 3 ÷ 0,50 = 6 Δ.",
    indice: "1 Δ dévie de 1 cm à 1 m. Ramène le décalage à ce qu'il serait à 1 m : la distance se met en mètres."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2024",
    question: "Pour réaligner la barre de Maddox chez un sujet exophore, le prisme de réalignement est placé :",
    choix: ["Base interne (nasale)", "Base externe (temporale)", "Base supérieure", "Base inférieure"],
    bonne: 0,
    explication: "Exophorie → prisme base interne ; ésophorie → base externe. Le prisme dévie la lumière vers sa base : son sommet est orienté du côté où l'œil est parti, il ramène l'image dans la direction de la ligne de regard passive.",
    indice: "Un prisme dévie la lumière vers sa base, donc l'image vers son sommet. Oriente le sommet du côté où l'œil part en position passive."
  },
  {
    epreuve: "U5", theme: "Masquage et phories", session: "2022",
    question: "Selon le critère de Sheard, la vision est plutôt confortable si la réserve opposée à la phorie est au moins :",
    choix: ["Égale à la phorie", "Le double de la phorie", "Le triple de la phorie", "La moitié de la phorie"],
    bonne: 1,
    explication: "Sheard : réserve opposée à la phorie ≥ 2 × phorie. Pour une exophorie, c'est la réserve en convergence (prismes base externe) ; pour une ésophorie, la réserve en divergence (base interne). On prend le point de flou, ou le point de bris s'il n'y a pas de flou.",
    indice: "Sheard regarde la réserve opposée à la phorie : pour être confortable, elle doit offrir une vraie marge. Combien de fois la phorie ?"
  },

  // ---------- Anisométropie, aniséiconie, effets prismatiques ----------
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Anisométropie de puissance : OD −0,50 et OG −5,50 (sphériques), verres à 14 mm de l'œil. Estimation de l'aniséiconie en lunettes ?",
    choix: ["Environ 1,4 %", "Environ 5 %", "Environ 7 %", "Environ 14 %"],
    bonne: 2,
    explication: "Anisométropie de puissance : les deux yeux ont la même longueur, l'aniséiconie axile est nulle. Aniséiconie induite ≈ distance verre-œil (cm) × différence des verres = 1,4 × 5 = 7 %, en faveur de l'OD (le moins myope voit plus gros). Repères : moins de 3 % = pas de gêne ; 3 à 10 % = gêne possible de la fusion ; plus de 10 % = fusion le plus souvent impossible.",
    indice: "Aniséiconie induite ≈ distance verre-œil en cm × différence de puissance des verres. Convertis bien 14 mm en cm.",
    schema: "img/schemas/U5/aniseiconie-7-pourcent.svg",
    schemaTexte: "Images rétiniennes : celle de l'OD est plus grande que celle de l'OG. Calcul 1,4 × 5 = 7 %, placé sur une jauge : moins de 3 % pas de gêne, 3 à 10 % gêne possible, plus de 10 % fusion difficile."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Pour une anisométropie de PUISSANCE, quel équipement réduit le plus l'aniséiconie ?",
    choix: ["Des lunettes à 15 mm", "Des lentilles de contact", "Des lunettes à 25 mm", "Aucun équipement"],
    bonne: 1,
    explication: "L'aniséiconie induite dépend de la distance compensation-œil. En lentilles, cette distance passe d'environ 15 mm à moins de 2 mm : l'aniséiconie devient beaucoup plus faible. (Pour une anisométropie AXILE, la loi de Knapp favorise au contraire les lunettes placées au foyer objet de l'œil.)",
    indice: "L'aniséiconie induite dépend de la distance entre la compensation et l'œil. Quel équipement rend cette distance la plus petite ?"
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "complément",
    question: "Anisométropie purement AXILE : OD −1,00 et OG −6,00 (sphériques), verres à 15 mm de l'œil. Aniséiconie totale en lunettes ?",
    choix: ["Environ 1 %", "Environ 7,5 %", "Environ 8,5 %", "Environ 16 %"],
    bonne: 0,
    explication: "Anisométropie axile : les deux aniséiconies s'opposent. Axile ≈ 1,7 % par dioptrie de différence = 5 × 1,7 = 8,5 % en faveur de l'OG (le plus long, le plus myope). Induite par les lunettes ≈ LH (cm) × différence des verres = 1,5 × 5 = 7,5 % en faveur de l'OD (le moins myope). Totale ≈ 8,5 − 7,5 = 1 % (raccourci : environ 0,2 % par dioptrie avec LH = 15 mm). En lunettes, l'aniséiconie est donc presque compensée ; en lentilles, l'induite disparaît et il resterait 8,5 %.",
    indice: "Deux effets s'opposent : l'œil le plus long fait une image plus grande, et les lunettes en font une plus petite. Estime les deux, puis compare-les."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "OD +1,00 et OG +4,00 (sphériques). En lecture, le regard passe 1 cm sous les centres optiques. Effet prismatique vertical différentiel ?",
    choix: ["1 Δ", "3 Δ", "4 Δ", "5 Δ"],
    bonne: 1,
    explication: "Prentice : P = d (cm) × |D|. OD : 1 × 1 = 1 Δ ; OG : 1 × 4 = 4 Δ. Verres convergents, regard sous le centre optique : base supérieure pour les deux. Différentiel = 4 − 1 = 3 Δ base supérieure sur l'OG. Les réserves fusionnelles verticales sont faibles (bris vers 3 Δ) : risque de vision double.",
    indice: "Prentice : P (Δ) = d (cm) × |D|, pour chaque œil. Les deux verres sont de même signe : ce que ressent le couple, c'est l'écart entre les deux.",
    schema: "img/schemas/U5/prentice-od1-og4.svg",
    schemaTexte: "Lunettes vues de face, OD à gauche. Point de regard 1 cm sous chaque centre optique : 1 Δ base supérieure sur l'OD, 4 Δ base supérieure sur l'OG, différentiel 3 Δ."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "complément",
    question: "Verre +4,00 vu de côté. Le regard passe 1 cm sous le centre optique. Quel schéma de l'effet prismatique est juste ?",
    choix: ["1 cm sous le centre, 4 Δ base supérieure", "1 cm sous le centre, 4 Δ base inférieure", "1 cm sous le centre, 40 Δ base supérieure", "1 cm au-dessus du centre, 4 Δ base inférieure"],
    choixSchemas: ["img/schemas/U5/prisme-choix-juste.svg", "img/schemas/U5/prisme-choix-faux-base.svg", "img/schemas/U5/prisme-choix-faux-mm.svg", "img/schemas/U5/prisme-choix-faux-dessus.svg"],
    bonne: 0,
    explication: "Prentice : P = d (cm) × |D| = 1 × 4 = 4 Δ. Un verre convergent se comporte comme deux prismes accolés par leur base au centre optique : sous le centre, la base est vers le haut (base supérieure). Les pièges : la base inférieure (c'est le cas d'un verre divergent), 40 Δ (décentrement compté en mm au lieu de cm), ou placer le point de regard au-dessus du centre.",
    indice: "Un verre convergent se représente par deux prismes accolés par leur base, au centre optique. Et dans Prentice, d s'exprime en centimètres."
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2024",
    question: "Pourquoi un anisométrope équipé en lentilles ne voit-il plus double quand il regarde vers le haut ?",
    choix: ["Les lentilles compensent la phorie", "La lentille suit l'œil : la ligne de regard reste centrée, pas d'effet prismatique différentiel", "Les lentilles augmentent les réserves fusionnelles", "Les lentilles suppriment l'anisométropie"],
    bonne: 1,
    explication: "En lunettes, regarder hors du centre optique crée un prisme différent sur chaque œil, donc une phorie induite. La lentille suit le globe dans ses mouvements et reste centrée sur la cornée : pas d'effet prismatique, donc pas de phorie induite.",
    indice: "En lunettes, l'effet prismatique vient de l'écart entre la ligne de regard et le centre optique. Que devient cet écart si la compensation bouge avec l'œil ?"
  },
  {
    epreuve: "U5", theme: "Anisométropie", session: "2023",
    question: "Un enfant anisométrope non compensé développe une amblyopie fonctionnelle de l'œil le plus amétrope. Pourquoi ?",
    choix: ["Une lésion de la rétine", "L'image floue de cet œil pendant la période de maturation visuelle", "Un glaucome congénital", "Une cataracte"],
    bonne: 1,
    explication: "Amblyopie fonctionnelle = baisse d'acuité liée à la non-utilisation d'un œil pendant la période de maturation visuelle, sans lésion organique. Le cerveau privilégie l'image nette de l'autre œil. Si chaque œil est utilisé à son tour (un pour le loin, l'autre pour le près), l'amblyopie peut ne pas apparaître.",
    indice: "Fonctionnelle veut dire sans lésion. Pense à ce que le cerveau reçoit de chaque œil pendant l'enfance, quand le système visuel se construit."
  },

  // ---------- Examen préliminaire ----------
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Compensation portée OD −2,00 (−1,00) 180° ; autoréfractomètre OD −3,00 (−0,50) 180°. Réfraction complémentaire attendue (en équivalents sphériques), si l'autoréfractomètre était exact ?",
    choix: ["+0,75", "−0,75", "−0,50", "−1,00"],
    bonne: 1,
    explication: "Équivalent sphérique = S + C/2. Portée : −2,00 + (−0,50) = −2,50. Autoréfractomètre : −3,00 + (−0,25) = −3,25. RC = −3,25 − (−2,50) = −0,75. Attention : à l'autoréfractomètre, le sujet accommode souvent (accommodation instrumentale) et la myopie est surestimée. On vérifie avec les acuités.",
    indice: "Équivalent sphérique = S + C/2, pour la portée et pour l'autoréfractomètre. La réfraction complémentaire, c'est ce qu'il faut ajouter à la portée."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2020 et 2024",
    question: "Avec sa compensation, un sujet lit 10/10. On ajoute +2,00 : son acuité tombe à 2/10. Sphère résiduelle estimée (essai de verre convexe) ?",
    choix: ["+0,75", "−0,75", "+1,25", "0,00"],
    bonne: 0,
    explication: "Règle de Swaine (valable pour une acuité ≤ 5/10) : brouillage ≈ 1 ÷ (4 × AV) = 1 ÷ (4 × 0,2) = 1,25 δ. Sphère résiduelle = verre ajouté − brouillage = +2,00 − 1,25 = +0,75 δ. Il reste donc une hypermétropie résiduelle : le sujet est sous-compensé en positif.",
    indice: "Règle de Swaine : brouillage ≈ 1 ÷ (4 × AV). Le verre ajouté produit ce brouillage avec la sphère résiduelle : fais la différence, attention au signe."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Au cadran de Parent (sujet légèrement myopisé), la ligne 3h-9h est vue la plus noire. Axe du cylindre négatif compensateur ?",
    choix: ["30°", "90°", "180°", "120°"],
    bonne: 1,
    explication: "Sujet myopisé : la ligne la plus noire correspond à la focale arrière, la plus proche de la rétine. Elle est horizontale (0°-180°). L'axe du cylindre négatif est perpendiculaire à la direction vue la plus noire : 90°. À l'examen, le « calcul » avec les chiffres du cadran (×30) n'est pas accepté comme justification.",
    indice: "Sujet myopisé : la ligne la plus noire correspond à la focale arrière. L'axe du cylindre négatif est perpendiculaire à cette ligne.",
    schema: "img/schemas/U5/cadran-parent-3-9.svg",
    schemaTexte: "Cadran de Parent : la ligne 3h-9h, horizontale, est la plus noire. C'est la focale arrière ; l'axe du cylindre négatif est perpendiculaire, à 90°."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2024",
    question: "Pourquoi myopise-t-on légèrement le sujet avant le cadran de Parent ?",
    choix: ["Pour mesurer l'acuité", "Pour placer les deux focales en avant de la rétine et empêcher l'accommodation de fausser le test", "Pour mesurer la phorie", "Pour tester la vision des couleurs"],
    bonne: 1,
    explication: "Avec une défocalisation en avant de la rétine, la ligne la plus noire correspond toujours à la focale arrière, et accommoder ne ferait qu'aggraver le flou : le sujet n'a pas intérêt à accommoder.",
    indice: "Si les deux focales sont en avant de la rétine, que se passerait-il si le sujet accommodait : plus net ou plus flou ?"
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    question: "Un myope de −2,00 non compensé lit à 25 cm. Quelle accommodation met-il en jeu ?",
    choix: ["0 δ", "2 δ", "4 δ", "6 δ"],
    bonne: 1,
    explication: "Acc = R − 1/HT = −2,00 − 1/(−0,25) = −2 + 4 = 2 δ. Son remotum est à 50 cm : il n'a que 2 δ à fournir pour lire à 25 cm.",
    indice: "Acc = R − 1/HT, avec HT négatif et en mètres. Le remotum d'un myope de −2,00 est déjà à 50 cm : il part avec de l'avance.",
    schema: "img/schemas/U5/accommodation-myope-2.svg",
    schemaTexte: "Axe des proximités 1/HT : le remotum R est à −2 δ (50 cm), le texte T à −4 δ (25 cm). L'écart entre R et T vaut l'accommodation, 2 δ. Le texte est déplaçable."
  },
  {
    epreuve: "U5", theme: "Examen préliminaire", session: "2023",
    question: "Un hypermétrope de +1,50 non compensé lit à 50 cm. Quelle accommodation met-il en jeu ?",
    choix: ["2,00 δ", "0,50 δ", "3,50 δ", "1,50 δ"],
    bonne: 2,
    explication: "Acc = R − 1/HT = +1,50 − 1/(−0,50) = 1,50 + 2,00 = 3,50 δ : 2 δ pour la distance, plus 1,50 δ pour compenser son hypermétropie.",
    indice: "Même formule : Acc = R − 1/HT, avec HT = −0,50 m. L'hypermétrope doit d'abord compenser son amétropie, puis la distance."
  },

  // ---------- Réfraction ----------
  {
    epreuve: "U5", theme: "Réfraction", session: "2023",
    question: "Quelle est la formule sphéro-cylindrique d'un cylindre croisé (CCR) ±0,25 dont l'axe du cylindre négatif est à 90° ?",
    choix: ["+0,25 (−0,50) 90°", "−0,25 (+0,25) 90°", "0,00 (−0,25) 90°", "+0,50 (−0,25) 90°"],
    bonne: 0,
    explication: "Le CCR (cylindre croisé par retournement) ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre : sphère +0,25, cylindre −0,50, à l'axe du cylindre négatif.",
    indice: "Un CCR ±0,25 a +0,25 sur un méridien et −0,25 sur l'autre. En cylindre négatif, la sphère est la plus grande des deux valeurs, le cylindre l'écart entre elles.",
    schema: "img/schemas/U5/ccr-0-25-axe-90.svg",
    schemaTexte: "Cylindre croisé vu de face : points rouges (axe du cylindre négatif) à 90°, points blancs (axe du cylindre positif) à 0°, manche à 45°. Formule +0,25 (−0,50) 90°."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2020",
    question: "Lors de la vérification de la puissance du cylindre, on ajoute −0,50 de cylindre. Comment ajuster la sphère ?",
    choix: ["Ajouter −0,25", "Ajouter +0,25", "Ajouter +0,50", "Ne rien changer"],
    bonne: 1,
    explication: "On garde l'équivalent sphérique constant pour maintenir le cercle de moindre diffusion sur la rétine (acc = 0) : −0,50 de cylindre fait −0,25 d'équivalent sphérique, qu'on compense par +0,25 de sphère.",
    indice: "Le but est de garder le cercle de moindre diffusion sur la rétine : l'équivalent sphérique S + C/2 ne doit pas bouger."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "complément",
    question: "Au test rouge-vert, le sujet voit plus net sur le rouge. Que faites-vous ?",
    choix: ["Ajouter −0,25 δ", "Ajouter +0,25 δ", "Tourner l'axe du cylindre", "Rien, l'équilibre est bon"],
    bonne: 0,
    explication: "Rouge plus net : l'image est en avant de la rétine (trop de positif). Moyen mnémotechnique « RAM » : Rouge → Ajouter du Moins.",
    indice: "Le vert est plus réfracté que le rouge : son foyer est en avant. Si le rouge est plus net, de quel côté de la rétine sont les foyers ?",
    schema: "img/schemas/U5/rouge-vert-ram.svg",
    schemaTexte: "Profil de l'œil : à l'équilibre, la rétine est entre le foyer vert (devant) et le foyer rouge (derrière). Rouge plus net : les deux foyers sont en avant de la rétine, il faut ajouter du négatif."
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2024",
    question: "Client anisométrope, vision binoculaire fragile. Pour l'équilibre bioculaire, quel test préférer ?",
    choix: ["Lignes de lettres dissociées par prisme", "Test rouge-vert polarisé", "Cadran de Parent", "Test de Worth"],
    bonne: 1,
    explication: "Avec les lignes dissociées par prisme, la dissociation est totale : risque de neutralisation d'un œil, et l'anisométrope compare des images de tailles différentes. Avec le rouge-vert polarisé, la dissociation est partielle (favorise la vision binoculaire) et chaque œil juge sa propre mise au point, sans comparer les deux yeux.",
    indice: "Compare les deux dissociations : totale (le sujet voit double) ou partielle ? Et quel test oblige à comparer des images de tailles différentes ?"
  },
  {
    epreuve: "U5", theme: "Réfraction", session: "2022",
    question: "Pourquoi utilise-t-on le brouillage en réfraction subjective ?",
    choix: ["Pour relâcher l'accommodation", "Pour mesurer l'astigmatisme", "Pour tester la vision des couleurs", "Pour stimuler la convergence"],
    bonne: 0,
    explication: "En ajoutant du positif, l'image passe en avant de la rétine : accommoder ne ferait qu'augmenter le flou, le sujet relâche son accommodation. Indispensable pour ne pas sous-compenser un hypermétrope ni surcompenser un myope.",
    indice: "Le brouillage ajoute du positif : l'image passe devant la rétine. Que gagnerait le sujet à accommoder dans ce cas ?"
  },

  // ---------- Lentilles de contact ----------
  {
    epreuve: "U5", theme: "Lentilles", session: "complément",
    question: "Un rayon de courbure cornéen de 7,50 mm correspond à une puissance lue au kératomètre de :",
    choix: ["40 δ", "42 δ", "45 δ", "47,50 δ"],
    bonne: 2,
    explication: "Avec l'indice d'étalonnage des kératomètres (1,3375) : K ≈ 337,5 / r (mm) = 337,5 / 7,5 = 45 δ. À connaître sans calculatrice.",
    indice: "Utilise K (δ) ≈ 337,5 / r, avec r en mm (indice d'étalonnage 1,3375). Pose la division : elle tombe juste."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020 et 2023",
    question: "Kératométrie : 7,75 mm à 0° et 7,65 mm à 90°. Astigmatisme cornéen (face avant) ?",
    choix: ["0,60 δ direct", "0,60 δ inverse", "1,00 δ direct", "0,25 δ inverse"],
    bonne: 0,
    explication: "Toricité = 7,75 − 7,65 = 0,10 mm, soit environ 0,60 δ (indice réel de la cornée ; un kératomètre affiche plutôt 0,50 δ). Le méridien vertical (90°) a le plus petit rayon, il est le plus cambré : astigmatisme direct, compensé par plan (−0,60) 0°.",
    indice: "Retiens : 0,10 mm d'écart de rayon ≈ 0,60 δ. Pour la nature, repère le méridien le plus cambré (le plus petit rayon) : vertical ou horizontal ?"
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2023",
    question: "Un œil a 1,00 δ d'astigmatisme cornéen direct mais aucun astigmatisme total. Son astigmatisme interne est :",
    choix: ["Nul", "1,00 δ direct", "1,00 δ inverse", "2,00 δ direct"],
    bonne: 2,
    explication: "Astigmatisme total = cornéen (+) interne. Pour un total nul, l'interne compense exactement le cornéen : 1,00 δ inverse (compensé par plan (−1,00) 90°). C'est la situation physiologique : cornée directe, interne inverse.",
    indice: "Astigmatisme total = cornéen (+) interne. Si le total est nul, l'interne doit annuler le cornéen : même valeur, et quelle nature ?"
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2023",
    question: "Selon Harvitt et Bonanno, quelle transmissibilité minimale (Dk/e, en 10⁻⁹ unités Fatt) faut-il pour un port nocturne sans hypoxie ?",
    choix: ["24", "35", "87", "125"],
    bonne: 3,
    explication: "Critère de Harvitt et Bonanno (1999), retenu au BTS : 35 pour le port journalier, 125 pour le port prolongé (nocturne). Les fortes valeurs de Dk/e correspondent aux silicone-hydrogels.",
    indice: "Le BTS retient Harvitt et Bonanno : une valeur pour le port journalier, une autre bien plus haute pour le port de nuit, paupières fermées."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "Citez les 3 couches du film lacrymal, de l'air vers la cornée.",
    choix: ["Lipidique, aqueuse, mucinique", "Aqueuse, lipidique, mucinique", "Mucinique, aqueuse, lipidique", "Lipidique, mucinique, aqueuse"],
    bonne: 0,
    explication: "Lipidique en surface (limite l'évaporation), aqueuse au milieu, mucinique au contact de la cornée (mouillabilité). La stabilité du film, évaluée par le BUT, dépend surtout de la couche lipidique.",
    indice: "Pense au rôle de chaque couche : une freine l'évaporation (donc côté air), une autre aide les larmes à mouiller la cornée (donc au contact)."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2024",
    question: "Quelle est la norme du Break-Up Time (BUT) ?",
    choix: ["3 à 5 secondes", "5 à 8 secondes", "10 à 20 secondes", "30 à 60 secondes"],
    bonne: 2,
    explication: "Le BUT évalue la qualité des larmes ; la norme est de 10 à 20 s. En dessous de 10 s, c'est une contre-indication aux lentilles souples hydrogel. La quantité de larmes s'évalue avec la hauteur de la rivière lacrymale (norme 0,2 à 0,4 mm).",
    indice: "Le BUT mesure le temps avant la première rupture du film lacrymal après un clignement. Sous la norme, on hésite à poser des lentilles souples."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "À la fluorescéine, une LRPG montre beaucoup de fluorescéine en périphérie, très peu au centre, et bouge trop. L'adaptation est :",
    choix: ["Serrée", "Alignée", "Plate", "Parfaite"],
    bonne: 2,
    explication: "Appui central (peu de fluorescéine au centre) + forte mobilité = adaptation plate. On resserre en diminuant le rayon de la face arrière (ro).",
    indice: "La fluorescéine s'accumule là où la lentille est décollée de la cornée. Peu au centre = appui au centre : compare le rayon de la lentille à celui de la cornée.",
    schema: "img/schemas/U5/fluo-lrpg-plate.svg",
    schemaTexte: "Trois images de fluorescéine sous lentille rigide : alignée (film régulier), plate (centre sombre, périphérie verte, appui central) et serrée (réservoir vert au centre). Profil sous chaque image."
  },
  {
    epreuve: "U5", theme: "Lentilles", session: "2020",
    question: "On resserre une LRPG en diminuant son ro de 0,10 mm. Le ménisque de larmes devient :",
    choix: ["Plus convergent d'environ +0,50 δ", "Plus divergent d'environ −0,50 δ", "Inchangé", "Plus convergent d'environ +1,00 δ"],
    bonne: 0,
    explication: "Une modification de 10/100 de mm du ro change la vergence du ménisque de larmes d'environ 0,50 δ. Lentille plus cambrée = ménisque plus convexe (+0,50 δ). On commande donc une lentille plus divergente de 0,50 δ.",
    indice: "Retiens : 0,10 mm de ro ≈ 0,50 δ de ménisque de larmes. Une lentille plus cambrée laisse un ménisque plus bombé à l'avant : convergent ou divergent ?"
  },

  // ---------- Pathologie ----------
  {
    epreuve: "U5", theme: "Pathologie", session: "2024",
    question: "La mesure de la pression intraoculaire (PIO) sert principalement au dépistage :",
    choix: ["De la cataracte", "Du glaucome", "De la DMLA", "Du kératocône"],
    bonne: 1,
    explication: "Une PIO élevée est le principal facteur de risque du glaucome. La cataracte se dépiste à la lampe à fente (biomicroscope) par l'ophtalmologiste.",
    indice: "La PIO est le principal facteur de risque d'une maladie du nerf optique. La cataracte, elle, se voit à la lampe à fente."
  },
  {
    epreuve: "U5", theme: "Pathologie", session: "2023",
    question: "Quelle est la valeur moyenne d'une PIO normale, et à partir de quand est-elle jugée trop forte ?",
    choix: ["Environ 8 mmHg, trop forte au-delà de 12", "Environ 16 mmHg, trop forte au-delà de 21", "Environ 25 mmHg, trop forte au-delà de 35", "Environ 40 mmHg, trop forte au-delà de 50"],
    bonne: 1,
    explication: "PIO moyenne d'environ 16 mmHg ; au-delà de 21 mmHg (pour une cornée d'épaisseur normale), elle est jugée trop forte. Une PIO normale n'exclut pas un glaucome : champ visuel et fond d'œil complètent. Des antécédents familiaux de glaucome à angle ouvert justifient la mesure.",
    indice: "Retiens deux repères : la moyenne de la population et le seuil d'alerte, qui n'est que quelques mmHg au-dessus. Méfie-toi des valeurs extrêmes."
  },
  {
    epreuve: "U5", theme: "Pathologie", session: "complément",
    question: "Un sujet de 70 ans devient plus myope et peut de nouveau lire sans lunettes. Cela évoque :",
    choix: ["Un glaucome", "Une cataracte nucléaire (myopie d'indice)", "Une DMLA", "Un décollement de rétine"],
    bonne: 1,
    explication: "La cataracte (opacification du cristallin) nucléaire augmente l'indice du cristallin : l'œil devient plus myope. Autres symptômes : baisse d'acuité, sensation de brouillard, photophobie (éblouissement), diplopie monoculaire, couleurs altérées.",
    indice: "Si le noyau du cristallin devient plus dense, sa puissance augmente. Un œil plus puissant devient plus… ? Et le presbyte retrouve sa vision de près."
  }
);
