// ==============================================================
//  SPÉCIFICITÉS · Étude technique des systèmes optiques (U43)
//  Textes rédigés par Opticonversion à partir de l'analyse des sujets 2017-2024.
//  Les id des listes à cocher et des pièges ne changent jamais et ne sont jamais réutilisés.
// ==============================================================

SPECIFICITES.push({
  epreuve: "U43",
  resume: "Écrit 2 h · coef 3 · calculatrice autorisée · surtout des tracés sur un document-réponse A3, autour d'un seul instrument",
  blocs: [
    {
      type: "texte",
      titre: "Ce qui rend l'épreuve différente",
      points: [
        "Un seul instrument par sujet, avec un dossier technique : plan, nomenclature, schéma de fonctionnement.",
        "Instruments déjà tombés : lunette, microscope, frontofocomètre, appareil photo, télescope, skiascope.",
        "Deux matières en une : l'optique (images, champs, œil de l'utilisateur) et la mécanique (liaisons, réglages).",
        "La plupart des points se gagnent en traçant sur le document-réponse, à l'échelle. Peu de rédaction.",
        "4 ou 5 parties indépendantes : si tu bloques sur une partie, passe à la suivante.",
        "Ce n'est pas une épreuve sur le montage ou le centrage des verres, malgré son nom."
      ]
    },
    {
      type: "etapes",
      titre: "La méthode en 5 étapes",
      etapes: [
        { titre: "Lire le dossier", texte: "Repère l'instrument, ses pièces optiques et ses pièces mobiles. Note les échelles axiale et transversale de chaque figure : elles sont souvent différentes." },
        { titre: "Écrire la chaîne des conjugués", texte: "Objet → image par chaque élément → œil. Écris toutes les positions particulières : sur un foyer, à l'infini, sur le remotum.", theme: "Chaîne des conjugués", frequence: "8/8" },
        { titre: "Tracer", texte: "Deux rayons particuliers par élément, fléchés, dans les couleurs demandées. Cote les distances en vraie grandeur.", theme: "Chaîne des conjugués", frequence: "8/8" },
        { titre: "Étudier les champs", texte: "Ramène tous les diaphragmes dans l'espace d'étude, trouve la pupille, puis la lucarne, puis les champs. Reporte-les en vue de gauche.", theme: "Étude des champs", frequence: "8/8" },
        { titre: "Répondre à la mécanique", texte: "Pour chaque réglage : la pièce sur laquelle on agit, le mouvement utile de l'élément optique, le nom de la liaison, ses mouvements et leur axe.", theme: "Liaisons mécaniques", frequence: "8/8" }
      ]
    },
    {
      type: "cocher",
      titre: "Avant de rendre la copie",
      id: "U43-copie",
      items: [
        { id: "U43-copie-1", texte: "Chaque chaîne des conjugués est complète, avec les positions particulières." },
        { id: "U43-copie-2", texte: "Tous les rayons sont fléchés, dans le sens de la lumière." },
        { id: "U43-copie-3", texte: "Les couleurs demandées par l'énoncé sont respectées." },
        { id: "U43-copie-4", texte: "Les cotes sont converties en vraie grandeur (échelle axiale ou transversale)." },
        { id: "U43-copie-5", texte: "Chaque mouvement est donné avec son axe (X, Y ou Z)." },
        { id: "U43-copie-6", texte: "Chaque liaison est nommée, avec ses mouvements possibles." },
        { id: "U43-copie-7", texte: "Les champs sont reportés et coloriés en vue de gauche." },
        { id: "U43-copie-8", texte: "Les résultats chiffrés ont une unité (mm, δ, tours)." }
      ]
    },
    {
      type: "formules",
      titre: "Mémo : liaisons et calculs",
      lignes: [
        { nom: "Liaison pivot", formule: "1 rotation, 0 translation (1 ddl)", exemple: "Molette qui tourne sur place", rappelee: false },
        { nom: "Liaison glissière", formule: "0 rotation, 1 translation (1 ddl)", exemple: "Porte-mire guidé par une rainure", rappelee: false },
        { nom: "Liaison pivot glissant", formule: "1 rotation + 1 translation indépendantes, même axe (2 ddl)", exemple: "Tube qu'on tourne et qu'on coulisse à la main", rappelee: false },
        { nom: "Liaison hélicoïdale", formule: "1 rotation + 1 translation liées par un filetage (1 ddl)", exemple: "Bague d'oculaire vissée : un tour = un pas", rappelee: false },
        { nom: "Nombre de tours", formule: "N = course ÷ pas", exemple: "5 mm avec un pas de 0,5 mm : 10 tours", rappelee: false },
        { nom: "Vergence", formule: "D = 1/f' (f' en m)", exemple: "f' = 125 mm : D = +8 δ", rappelee: false },
        { nom: "Réfraction axiale", formule: "R = 1/HR (HR en m, avec son signe)", exemple: "HR = −125 mm : R = −8 δ (myope)", rappelee: false },
        { nom: "Réglage d'un oculaire (Newton)", formule: "x · x' = −f'²", exemple: "f' = 25 mm, x' = −250 mm : x = +2,5 mm", rappelee: false },
        { nom: "Grossissement d'une lunette afocale", formule: "G = f'objectif / f'oculaire", exemple: "600 / 20 = 30", rappelee: true },
        { nom: "Règle de Prentice", formule: "P (Δ) = décentrement (cm) × D (δ)", exemple: "0,5 cm × 4 δ = 2 Δ", rappelee: true }
      ]
    },
    {
      type: "pieges",
      titre: "Les pièges qui coûtent des points",
      items: [
        { id: "U43-piege-1", titre: "Chaîne sans positions particulières", faux: "Écrire seulement A → A₁ → A'.", juste: "Préciser à chaque image où elle se trouve : « A₁ = F'obj = Foc », « A' à l'infini », « A' sur R ».", theme: "Chaîne des conjugués", questions: ["U43-001", "U43-002"] },
        { id: "U43-piege-2", titre: "Confondre pupille et lucarne", faux: "La pupille est le plus petit diaphragme.", juste: "La pupille est vue sous le plus petit angle depuis le centre du plan des champs ; la lucarne, depuis le centre de la pupille.", theme: "Étude des champs", questions: ["U43-016", "U43-048"] },
        { id: "U43-piege-3", titre: "Chercher la pupille trop tôt", faux: "Comparer des diaphragmes situés dans des espaces différents.", juste: "Conjuguer d'abord tous les diaphragmes dans l'espace d'étude, puis comparer les angles.", theme: "Étude des champs", questions: ["U43-016"] },
        { id: "U43-piege-4", titre: "Pivot glissant ou hélicoïdale ?", faux: "Le tube avance en tournant : pivot glissant.", juste: "Si on ne peut pas avancer sans tourner (filetage), c'est une hélicoïdale. Pivot glissant : les deux mouvements sont indépendants.", theme: "Liaisons mécaniques", questions: ["U43-024", "U43-025"] },
        { id: "U43-piege-5", titre: "Molette ou mouvement utile ?", faux: "Le mouvement utile est la rotation de la molette.", juste: "Le mouvement utile est celui de l'élément optique : en général une translation suivant l'axe optique.", theme: "Liaisons mécaniques", questions: ["U43-026", "U43-050"] },
        { id: "U43-piege-6", titre: "Oublier l'échelle", faux: "Calculer avec la longueur mesurée sur le dessin.", juste: "Diviser par l'échelle de la figure (axiale ou transversale) avant tout calcul.", theme: "Vergences et focales", questions: ["U43-007"] },
        { id: "U43-piege-7", titre: "Se tromper de signe pour le remotum", faux: "HR = 125 mm, donc R = +8 δ.", juste: "Un remotum devant l'œil donne HR < 0, donc R < 0 : l'œil est myope.", theme: "Œil et instrument", questions: ["U43-010", "U43-011"] },
        { id: "U43-piege-8", titre: "Croire que l'œil rattrape tout", faux: "Le myope accommode pour voir l'image à l'infini ; régler l'oculaire compense l'astigmatisme.", juste: "L'accommodation ne permet de voir que plus près que le remotum, et l'oculaire ne compense que la partie sphérique de l'amétropie.", theme: "Œil et instrument", questions: ["U43-013", "U43-035"] }
      ]
    },
    {
      type: "texte",
      titre: "À relire la veille : le réglage pour un amétrope",
      points: [
        "Sans accommoder, un œil ne voit net que son remotum. L'image finale de l'instrument doit donc se former sur le remotum de l'utilisateur.",
        "Emmétrope : remotum à l'infini, faisceau sortant parallèle. Myope : remotum devant l'œil, faisceau sortant divergent. Hypermétrope : remotum derrière l'œil, faisceau sortant convergent.",
        "On règle l'oculaire, pas l'œil. Dans la plupart des énoncés, l'œil est placé au foyer image de l'oculaire.",
        "L'accommodation rapproche le point vu net, jamais au-delà du remotum. L'hypermétrope accommode déjà pour voir l'infini."
      ]
    },
    {
      type: "etapes",
      titre: "À relire la veille : régler l'oculaire en 4 étapes",
      etapes: [
        { titre: "Trouver le remotum", texte: "HR = [[1|R]], en mètres et avec son signe. Un myope donne HR négatif (devant l'œil), un hypermétrope HR positif (derrière)." },
        { titre: "Poser x'", texte: "L'œil est au foyer image de l'oculaire : x' = F'A' = HR, converti en mm.", theme: "Œil et instrument" },
        { titre: "Calculer x avec Newton", texte: "x = [[−f'²|x']], avec f' et x' dans la même unité.", theme: "Œil et instrument" },
        { titre: "Lire le sens", texte: "x positif (myope) : on rapproche l'oculaire de l'objectif. x négatif (hypermétrope) : on l'éloigne. Le réglage emmétrope est la référence, x = 0." }
      ]
    },
    {
      type: "formules",
      titre: "À relire la veille : formules du réglage",
      lignes: [
        { nom: "Remotum", formule: "HR = [[1|R]]", exemple: "R = −4 δ : HR = −0,25 m = −250 mm", rappelee: false },
        { nom: "Réglage de l'oculaire", formule: "x · x' = −f'²", exemple: "f' = 25 mm, x' = −250 mm : x = [[−625|−250]] = +2,5 mm (on rapproche)", rappelee: false },
        { nom: "Accommodation pour une image à d devant l'œil", formule: "A = [[1|d]] + R", exemple: "R = −4 δ, d = 0,20 m : A = 5 − 4 = 1 δ", rappelee: false }
      ]
    },
    {
      type: "pieges",
      titre: "À relire la veille : pièges du réglage",
      items: [
        { id: "U43-piege-9", titre: "Le sens du déplacement", faux: "Pour un amétrope, on éloigne toujours l'oculaire.", juste: "Myope : on rapproche l'oculaire de l'objectif (x = FA > 0). Hypermétrope : on l'éloigne (x = FA < 0).", theme: "Œil et instrument", questions: ["U43-014", "U43-015"] },
        { id: "U43-piege-10", titre: "Le signe de x'", faux: "Le remotum d'un myope est à 250 mm, donc x' = +250 mm.", juste: "Le remotum du myope est devant l'œil : x' = F'A' est négatif.", theme: "Œil et instrument", questions: ["U43-010", "U43-015"] },
        { id: "U43-piege-11", titre: "Un seul réglage pour tous", faux: "Un instrument réglé pour un emmétrope convient à un myope sans lunettes.", juste: "Sans lunettes, chaque utilisateur doit régler l'oculaire pour son remotum. Avec ses lunettes, on garde le réglage emmétrope.", theme: "Œil et instrument", questions: ["U43-004", "U43-013"] }
      ]
    },
    {
      type: "frequences",
      titre: "Ce qui tombe le plus (sujets 2017 à 2024)",
      lignes: [
        { sujet: "Chaîne des conjugués et positions particulières", frequence: "8/8", theme: "Chaîne des conjugués" },
        { sujet: "Construction des images et des faisceaux", frequence: "8/8", theme: "Chaîne des conjugués" },
        { sujet: "Étude des champs (pupille, pleine lumière, champ total)", frequence: "8/8", theme: "Étude des champs" },
        { sujet: "Liaison : nom, mouvements, axe", frequence: "8/8", theme: "Liaisons mécaniques" },
        { sujet: "Mouvement utile de la mise au point", frequence: "7/8", theme: "Liaisons mécaniques" },
        { sujet: "Œil amétrope avec l'instrument (remotum, réglage)", frequence: "6/8", theme: "Œil et instrument" },
        { sujet: "Mécanisme de réglage (vis-écrou, pignon-crémaillère)", frequence: "5/8", theme: "Mécanismes de réglage" },
        { sujet: "Vergence ou focale à partir d'une cote", frequence: "4/8", theme: "Vergences et focales" },
        { sujet: "Œil astigmate et tache de diffusion", frequence: "3/8", theme: "Œil astigmate" },
        { sujet: "Aberrations (chromatique, sphéricité)", frequence: "3/8", theme: "Aberrations" },
        { sujet: "Accessoire ajouté (Barlow, multiplicateur, macro)", frequence: "3/8", theme: "Grossissement et photo" },
        { sujet: "Grossissement", frequence: "2/8", theme: "Grossissement et photo" },
        { sujet: "Frontofocomètre, Prentice", frequence: "1/8", theme: "Frontofocomètre" },
        { sujet: "Skiascopie", frequence: "1/8", theme: "Skiascopie" }
      ]
    }
  ]
});
