// ==============================================================
//  SPÉCIFICITÉS · Analyse de la vision (U5)
//  Format commun : notes/coordination/etape1-formats.md
//  Textes à nous, vérifiés sur les sujets et corrigés 2017 à 2024 et sur
//  les synthèses 2018 et 2024 de la commission. Jamais recopiés.
//  Les id des cases à cocher et des pièges ne sont jamais réutilisés.
// ==============================================================

SPECIFICITES.push({
  epreuve: "U5",
  resume: "Écrit 3 h · coef 6 · un seul client du début à la fin · calculatrice interdite sauf exception (autorisée en 2023)",
  blocs: [

    {
      type: "texte",
      titre: "Ce qui rend l'épreuve à part",
      points: [
        "C'est la plus grosse note du BTS avec l'E6 : coefficient 6.",
        "Un seul client fictif est suivi du début à la fin, comme un vrai examen de vue en magasin.",
        "On note surtout le raisonnement : beaucoup de « justifier » et de schémas à chaque session.",
        "Un schéma seul ne suffit jamais : il doit être légendé et suivi d'une phrase de conclusion.",
        "Les réponses sont souvent limitées à 2 à 5 lignes : va droit au but."
      ]
    },

    {
      type: "texte",
      titre: "Calculatrice",
      points: [
        "Interdite en 2017, 2019, 2020, 2021, 2022 et 2024 ; autorisée (type collège) en 2023 seulement.",
        "Lis la consigne en première page de ton sujet.",
        "Les chiffres sont choisis pour tomber juste : entraîne-toi de tête (1/0,25 = 4 ; 1/0,40 = 2,5 ; 337,5/7,5 = 45)."
      ]
    },

    {
      type: "etapes",
      titre: "Le déroulé d'un sujet",
      etapes: [
        { titre: "Histoire de cas", texte: "Repère la plainte, l'âge, le métier, les antécédents. Tire une hypothèse (amétropie, anisométropie, problème binoculaire).", theme: "Anisométropie" },
        { titre: "Examen préliminaire", texte: "Acuités, essai du verre convexe et règle de Swaine, cadran de Parent, ticket d'autoréfractomètre, accommodation.", theme: "Examen préliminaire" },
        { titre: "Réfraction", texte: "Cylindre croisé, équilibre bioculaire puis binoculaire, essai en lunettes.", theme: "Réfraction" },
        { titre: "Vision binoculaire", texte: "Worth, masquage, phories et normes, prisme de réalignement, réserves, stéréoscopie.", theme: "Masquage et phories" },
        { titre: "Lentilles", texte: "Kératométrie, tests lacrymaux, matériau et Dk/e, paramètres de commande, fluorescéine.", theme: "Lentilles" },
        { titre: "Synthèse", texte: "Relie ta solution à la plainte de départ. Oriente vers l'ophtalmologiste si un signe évoque une pathologie.", theme: "Pathologie" }
      ]
    },

    {
      type: "normes",
      titre: "Les normes à réciter",
      lignes: [
        { nom: "Phorie horizontale de loin", valeur: "Orthophorie à 1 Δ d'exophorie", remarque: "Méthode de von Graefe" },
        { nom: "Phorie horizontale de près (40 cm)", valeur: "4 à 6 Δ d'exophorie" },
        { nom: "Jeu phorique (loin → près)", valeur: "Prise d'exophorie de 4 à 6 Δ" },
        { nom: "Phorie verticale", valeur: "Orthophorie, de loin comme de près" },
        { nom: "Aucun mouvement au masquage / démasquage", valeur: "Pas de tropie / phorie ≤ 3 Δ" },
        { nom: "Réserves fusionnelles verticales", valeur: "Bris à 3 Δ, en supraduction comme en infraduction" },
        { nom: "Critère de Sheard", valeur: "Réserve opposée à la phorie ≥ 2 × la phorie" },
        { nom: "Punctum proximum de convergence (PPC)", valeur: "Bris à 8 cm au plus, recouvrement à moins de 6 cm du bris", remarque: "Sujet non presbyte" },
        { nom: "Acuité stéréoscopique", valeur: "Environ 20\", normale jusqu'à 60\"" },
        { nom: "Aniséiconie", valeur: "< 3 % pas de gêne · 3 à 10 % gêne possible · > 10 % fusion souvent impossible" },
        { nom: "Astigmatisme physiologique", valeur: "Cornée directe 0,50 à 0,75 δ, interne inverse, total nul", remarque: "Sujet jeune" },
        { nom: "Toricité cornéenne", valeur: "0,10 mm ≈ 0,60 δ", remarque: "Environ 0,50 δ lu au kératomètre" },
        { nom: "Ménisque de larmes (lentille rigide)", valeur: "0,10 mm de ro ≈ 0,50 δ" },
        { nom: "Break-Up Time (BUT)", valeur: "10 à 20 s", remarque: "Moins de 10 s : contre-indication aux lentilles souples hydrogel" },
        { nom: "Rivière lacrymale", valeur: "0,2 à 0,4 mm" },
        { nom: "Dk/e (Harvitt et Bonanno)", valeur: "35 en port journalier · 125 en port nocturne" },
        { nom: "Pression intraoculaire", valeur: "Moyenne 16 mmHg, trop forte au-delà de 21 mmHg" }
      ]
    },

    {
      type: "pieges",
      titre: "Les 10 pièges classiques",
      items: [
        { id: "P-U5-01", titre: "Masquage ou démasquage ?", faux: "Un mouvement au démasquage signe une tropie.", juste: "Au masquage, l'œil NON masqué qui bouge signe une tropie. Au démasquage, l'œil qui revient signe une phorie.", theme: "Masquage et phories", questions: ["U5-006", "U5-008"] },
        { id: "P-U5-02", titre: "Le sens du mouvement", faux: "L'œil revient vers le nez au démasquage : c'est une ésophorie.", juste: "S'il revient vers le nez, il était parti vers la tempe sous le cache : c'est une exophorie.", theme: "Masquage et phories", questions: ["U5-006", "U5-009"] },
        { id: "P-U5-03", titre: "Homonyme ou croisée ?", faux: "Diplopie croisée = ésophorie.", juste: "Homonyme (l'image de l'OD est du côté de l'OD) = éso ; croisée = exo. C'est la loi de Desmarres.", theme: "Worth", questions: ["U5-005", "U5-012"] },
        { id: "P-U5-04", titre: "OD et OG sur un schéma vu de face", faux: "On dessine l'OD à droite de l'image.", juste: "Sujet vu de face : son OD est à gauche de l'image (et sa tempe droite aussi).", theme: "Masquage et phories", questions: ["U5-009"] },
        { id: "P-U5-05", titre: "Cadran de Parent", faux: "Ligne 3h-9h la plus noire : 3 × 30 = 90°.", juste: "Sujet myopisé : la ligne la plus noire est la focale arrière ; l'axe du cylindre négatif lui est perpendiculaire. Le « × 30 » n'est pas accepté comme justification.", theme: "Examen préliminaire", questions: ["U5-025"] },
        { id: "P-U5-06", titre: "Le signe de R et de HT", faux: "Lire à 25 cm demande toujours 4 δ d'accommodation.", juste: "Acc = R − 1/HT, avec HT négatif. Un myope (R < 0) accommode moins, un hypermétrope (R > 0) davantage.", theme: "Examen préliminaire", questions: ["U5-027", "U5-028"] },
        { id: "P-U5-07", titre: "Prentice et les unités", faux: "Décentrement de 10 mm sur un verre de 4 δ : 40 Δ.", juste: "Le décentrement se met en cm : 1 × 4 = 4 Δ.", theme: "Anisométropie", questions: ["U5-019", "U5-020"] },
        { id: "P-U5-08", titre: "La base du prisme", faux: "Verre convergent, regard sous le centre optique : base inférieure.", juste: "Verre convergent : la base est tournée vers le centre optique (ici base supérieure). Verre divergent : vers le bord.", theme: "Anisométropie", questions: ["U5-020"] },
        { id: "P-U5-09", titre: "Croire l'autoréfractomètre", faux: "L'autoréfractomètre donne la compensation parfaite.", juste: "Le sujet accommode souvent devant l'appareil : la myopie est surestimée. On confronte toujours aux acuités (règle de Swaine).", theme: "Examen préliminaire", questions: ["U5-023"] },
        { id: "P-U5-10", titre: "Axile ou de puissance ?", faux: "Les lentilles réduisent toujours l'aniséiconie.", juste: "Anisométropie de puissance : les lentilles la réduisent. Axile : les lunettes la compensent presque (loi de Knapp). Lis bien ce que dit le sujet.", theme: "Anisométropie", questions: ["U5-017", "U5-018"] }
      ]
    },

    {
      type: "texte",
      titre: "À relire la veille : les signes qui demandent d'orienter",
      points: [
        "Baisse brutale de la vue d'un œil, ou voile sombre qui avance dans le champ : urgence, le jour même.",
        "Éclairs lumineux et nombreux corps flottants apparus récemment : risque de décollement de rétine, urgence.",
        "Œil rouge et très douloureux, halos autour des lumières, nausées : risque de glaucome aigu, urgence.",
        "Œil rouge, douloureux et gêné par la lumière chez un porteur de lentilles : retirer la lentille et consulter vite.",
        "Lignes droites vues déformées, tache au centre de la vision : atteinte de la macula, à orienter.",
        "Double vision nouvelle, paupière qui tombe, pupilles inégales apparues récemment : urgence, le jour même (ophtalmologiste ou urgences).",
        "Pression intraoculaire relevée au-dessus de la norme (au-delà de 21 mmHg) : à orienter, même sans symptôme.",
        "Enfant : acuité très différente entre les deux yeux malgré la correction, ou œil qui dévie : à orienter sans attendre."
      ]
    },

    {
      type: "texte",
      titre: "À relire la veille : ce que l'opticien fait et ne fait pas",
      points: [
        "Il fait : interroger le client, mesurer (acuité, réfraction, kératométrie), lire un compte rendu, repérer ce qui sort de la norme, expliquer, orienter.",
        "Il fait : adapter l'équipement dans le cadre de la loi et noter sa recommandation.",
        "Il ne fait pas : de diagnostic. Il décrit ce qu'il a mesuré, il ne dit pas « vous avez un glaucome ».",
        "Il ne fait pas : de traitement, ni de gouttes, ni de dilatation de la pupille.",
        "Une bonne acuité ne rassure pas : un glaucome ou une atteinte de la rétine peuvent exister avec 10/10."
      ]
    },

    {
      type: "etapes",
      titre: "À relire la veille : la conduite à tenir en 4 temps",
      etapes: [
        { titre: "Repérer", texte: "Un signe qui sort de l'histoire de cas ou de la norme : baisse de vue, douleur, pression forte, déformation des lignes.", theme: "Pathologie" },
        { titre: "Décider l'urgence", texte: "Brutal, douloureux ou récent : le jour même. Lent, ancien et sans douleur : un rendez-vous rapide." },
        { titre: "Dire sans diagnostiquer", texte: "J'indique la valeur ou le signe constaté, je dis qu'il sort de la norme, je ne donne pas le nom de la maladie." },
        { titre: "Orienter et noter", texte: "Ophtalmologiste ; orthoptiste pour un trouble binoculaire ancien (phorie mal compensée). Une diplopie récente va à l'ophtalmologiste. J'écris ma recommandation sur la fiche du client." }
      ]
    },

    {
      type: "pieges",
      titre: "À relire la veille : les erreurs de rédaction",
      items: [
        { id: "P-U5-11", titre: "Diagnostic ou orientation ?", faux: "Je lui annonce qu'il a un glaucome.", juste: "Je décris la valeur relevée, je dis qu'elle sort de la norme et je l'oriente : le diagnostic revient à l'ophtalmologiste.", theme: "Pathologie", questions: ["U5-152"] },
        { id: "P-U5-12", titre: "Attendre ou orienter ?", faux: "Éclairs, corps flottants et voile sombre : je refais les lunettes et je revois dans un mois.", juste: "Signes brutaux : urgence, j'adresse le jour même, sans équiper.", theme: "Pathologie" },
        { id: "P-U5-13", titre: "Une bonne acuité rassure-t-elle ?", faux: "Il lit 10/10 : l'œil est sain.", juste: "L'acuité centrale peut rester bonne dans un glaucome ou une rétinopathie : on surveille selon l'âge et les antécédents.", theme: "Pathologie" },
        { id: "P-U5-14", titre: "Lentilles et œil rouge", faux: "Je rince la lentille et je la remets.", juste: "Œil rouge, douleur, gêne à la lumière : je retire la lentille, je ne la remets pas, je consulte vite.", theme: "Lentilles" }
      ]
    },

    {
      type: "cocher",
      titre: "À relire la veille : ma réponse de conduite à tenir",
      id: "veille-U5",
      items: [
        { id: "v01", texte: "Je cite le signe ou la valeur qui m'alerte." },
        { id: "v02", texte: "Je dis si c'est urgent ou non, et pourquoi." },
        { id: "v03", texte: "Je n'écris pas le nom de la maladie comme un diagnostic." },
        { id: "v04", texte: "J'indique à qui j'oriente : ophtalmologiste ou orthoptiste." },
        { id: "v05", texte: "Je précise que je n'équipe pas avant l'avis, si le signe est brutal." }
      ]
    },

    {
      type: "cocher",
      titre: "Le jour J",
      id: "jourj-U5",
      items: [
        { id: "c01", texte: "Je relis l'histoire de cas et je souligne la plainte principale." },
        { id: "c02", texte: "J'écris la formule avant les chiffres, avec les unités (m, cm, δ, Δ)." },
        { id: "c03", texte: "Je vérifie le signe de R et de HT avant de calculer." },
        { id: "c04", texte: "À chaque mesure, je cite la norme puis je conclus « dans » ou « hors norme »." },
        { id: "c05", texte: "Mes schémas sont légendés : verres portés, accommodation, OD et OG au bon endroit." },
        { id: "c06", texte: "Chaque schéma est suivi d'une phrase de conclusion." },
        { id: "c07", texte: "Je respecte le nombre de lignes demandé." },
        { id: "c08", texte: "Un signe évoque une pathologie (PIO, baisse d'acuité inexpliquée…) : je propose d'orienter vers l'ophtalmologiste." },
        { id: "c09", texte: "À la fin, je relie ma solution à la plainte de départ." }
      ]
    }
  ]
});
