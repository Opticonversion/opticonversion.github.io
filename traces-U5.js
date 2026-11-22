// ==============================================================
//  ATELIER · Analyse de la vision (U5) : LES SCHÉMAS DE L'EXAMEN
//  À l'écrit d'U5, pas de tracé exact : un schéma à main levée,
//  légendé, coté, avec une conclusion rédigée. Chaque niveau a un
//  champ « schema » (pas de systeme) ; optique.js (Optique.schema)
//  calcule toutes les réponses, traces.js dessine et fait jouer.
//  Format : notes/coordination/etape2-formats.md (niveaux « schéma »).
//  Attentes du correcteur : notes/coordination/schemas-U5-attendus.md
//  id U5-5, U5-6… jamais réutilisés (les étoiles y sont rangées).
//  Pas de constante ici ; s'il en faut une, la préfixer VUE_U5_.
// ==============================================================

TRACES.push(

  // ==================================================================
  //  LES SCHÉMAS DE L'EXAMEN : niveaux « schema » (pas de systeme).
  //  L'élève pose, légende et cote le schéma attendu sur la copie ;
  //  optique.js (coupleOculaire) calcule la nature, la valeur, la base.
  //  Attentes du correcteur : notes/coordination/schemas-U5-attendus.md
  // ==================================================================

  // ---------- 5. Couple oculaire en vue de dessus : phorie au Maddox ----------
  {
    id: "U5-5", epreuve: "U5", chapitre: "Le couple oculaire",
    titre: "Une phorie au cylindre de Maddox",
    consigne: "Test à 40 cm, cylindre de Maddox devant l'OG, l'OD fixe le point lumineux. Le sujet voit la raie rouge 1,2 cm à droite du point.",
    theme: "Masquage et phories",
    schema: {
      type: "couple-oculaire", distance: 40, fixateur: "OD",
      dissociateur: { nom: "Cylindre de Maddox", court: "Maddox", oeil: "OG" },
      perception: { oeil: "OG", cote: "droite", ecart: 1.2, image: "raie rouge", repere: "point lumineux" }
    },
    etapes: [
      { action: "legender", texte: "Légende le schéma comme sur ta copie : touche une étiquette, puis l'endroit où elle va." },
      { action: "regard", texte: "Le Maddox dissocie : l'OG n'est plus tenu par la fusion. Fais pivoter sa ligne de regard en position passive." },
      { action: "pointer", quoi: "image-devie", texte: "Le rayon issu de T entre dans l'OG par Q'g. Touche le fond de l'œil là où se forme T'g." },
      { action: "pointer", quoi: "exteriorisation", texte: "Sur l'œil cyclope, l'OD fixe : T''d est droit devant. Touche le côté où le sujet extériorise T''g." },
      { action: "calcul", grandeur: "phorie", decimales: 1, texte: "Écart entre les deux extériorisations : 1,2 cm à 40 cm. Calcule la phorie en dioptries prismatiques." },
      { action: "conclure", texte: "Choisis la conclusion que tu rédigerais sous ton schéma." }
    ],
    copie: [
      "« Vue de dessus » et la distance du test (VP, 40 cm) écrites",
      "Chaque œil avec sa cornée, son centre de rotation Q' et sa fovéa f'",
      "Le dissociateur dessiné et nommé, devant le bon œil",
      "LRD et LRG nommées, rayons issus de T fléchés",
      "Le même œil fixateur sur le couple et sur l'œil cyclope",
      "Les extériorisations seulement sur l'œil cyclope, avec l'écart en cm",
      "Une conclusion rédigée : nature, valeur en Δ, base du prisme"
    ]
  },

  // Niveaux retirés le 2026-11-13 (tracés exacts de l'œil, remplacés par les schémas de l'examen) :
  // U5-1, U5-2, U5-3, U5-4. Leurs ids ne servent plus jamais (le vérificateur le contrôle).

  // ---------- 6. Couple oculaire en VL : filtre rouge, ésophorie ----------
  {
    id: "U5-6", epreuve: "U5", chapitre: "Le couple oculaire",
    titre: "Un filtre rouge en vision de loin",
    consigne: "Test à 5 m, filtre rouge devant l'OD, l'OG fixe la lumière blanche. Le sujet voit la lumière rouge 5 cm à droite de la blanche.",
    theme: "Masquage et phories",
    schema: {
      type: "couple-oculaire", distance: 500, fixateur: "OG",
      dissociateur: { nom: "Filtre rouge", court: "Filtre rouge", oeil: "OD" },
      perception: { oeil: "OD", cote: "droite", ecart: 5, image: "lumière rouge", repere: "lumière blanche" }
    },
    etapes: [
      { action: "legender" },
      { action: "regard", texte: "Le filtre rouge dissocie : l'OD part en position passive. Fais pivoter sa ligne de regard." },
      { action: "pointer", quoi: "image-devie", texte: "Le rayon issu de T entre dans l'OD par Q'd. Touche le fond de l'œil là où se forme T'd." },
      { action: "pointer", quoi: "exteriorisation", texte: "Sur l'œil cyclope, l'OG fixe : T''g est droit devant. Touche le côté où le sujet extériorise T''d." },
      { action: "calcul", grandeur: "phorie", decimales: 1, texte: "Écart entre les deux extériorisations : 5 cm à 5 m. Calcule la phorie en Δ." },
      { action: "conclure" }
    ],
    copie: [
      "« Vue de dessus » et « VL 5 m » écrits",
      "Le filtre rouge dessiné devant l'OD et nommé",
      "OG fixateur, sur le couple ET sur l'œil cyclope",
      "LRD qui croise LRG devant T (ésophorie)",
      "Extériorisations sur l'œil cyclope seulement, écart de 5 cm noté",
      "Conclusion rédigée : ésophorie, valeur, prisme base externe"
    ]
  },

  // ==================================================================
  //  PLUS LOIN AVEC LE COUPLE OCULAIRE (22 nov. 2026) : Worth, prisme
  //  dissociateur, convergence, prismes devant les deux yeux, brouillage.
  //  Contenu : notes/coordination/atelier-couple-oculaire.md
  // ==================================================================

  // ---------- 12. Le Worth vu de dessus ----------
  {
    id: "U5-12", epreuve: "U5", chapitre: "Plus loin avec le couple oculaire",
    titre: "Le Worth vu de dessus",
    consigne: "Lanterne de Worth à 33 cm : filtre rouge devant l'OD, filtre vert devant l'OG. L'OD fixe. Le sujet voit 5 symboles, les rouges à gauche des verts.",
    theme: "Worth",
    schema: {
      type: "couple-oculaire", distance: 33, fixateur: "OD",
      dissociateur: { nom: "Filtre vert (lanterne de Worth)", court: "Filtre vert", oeil: "OG" },
      filtres: { OD: "rouge", OG: "vert" },
      perception: { oeil: "OG", cote: "droite", image: "symboles verts", repere: "symboles rouges" }
    },
    etapes: [
      { action: "legender", texte: "Légende le schéma : touche une étiquette, puis l'endroit où elle va. Chaque filtre va devant son œil." },
      { action: "regard", texte: "Les filtres dissocient : l'OG, derrière le filtre vert, part en position passive. Fais pivoter sa ligne de regard." },
      { action: "pointer", quoi: "image-devie", texte: "Le rayon issu de T entre dans l'OG par Q'g. Touche le fond de l'œil là où se forme T'g." },
      { action: "pointer", quoi: "exteriorisation", texte: "Sur l'œil cyclope, l'OD fixe : T''d est droit devant. Touche le côté où le sujet extériorise T''g." },
      { action: "conclure", texte: "Le Worth ne mesure pas l'écart. Choisis la conclusion que tu rédigerais sous ton schéma." }
    ],
    copie: [
      "« Vue de dessus » et « VP 33 cm » écrits",
      "Filtre rouge devant l'OD, filtre vert devant l'OG",
      "L'œil fixateur nommé, le même sur le couple et sur l'œil cyclope",
      "LRD et LRG qui se croisent derrière T",
      "Les extériorisations seulement sur l'œil cyclope",
      "Une conclusion rédigée : 5 symboles, diplopie croisée, exophorie"
    ]
  },

  // ---------- 13. Le décalage avec un prisme dissociateur ----------
  {
    id: "U5-13", epreuve: "U5", chapitre: "Plus loin avec le couple oculaire",
    titre: "Le décalage dû à un prisme",
    consigne: "Test de lignes à 40 cm. Prisme de 4 Δ base externe devant l'OD, l'OG fixe. Le sujet ne fusionne pas : il voit le test en double.",
    theme: "Masquage et phories",
    schema: { type: "prisme-dissociateur", distance: 40, prisme: 4, base: "externe", oeil: "OD" },
    etapes: [
      { action: "legender", texte: "Légende le schéma : le prisme devant le bon œil, sa base, puis l'œil fixateur." },
      { action: "pointer", quoi: "deviation", texte: "Le rayon issu de T traverse le prisme. Après le prisme, part-il vers le nez ou vers la tempe de l'OD ?" },
      { action: "pointer", quoi: "exteriorisation", texte: "Sur l'œil cyclope, l'OG fixe : T''g est droit devant. De quel côté le sujet voit-il le test de l'OD ?" },
      { action: "calcul", grandeur: "decalage", decimales: 1, texte: "Calcule le décalage entre les deux lignes vues, en cm (test à 40 cm)." },
      { action: "conclure" }
    ],
    copie: [
      "« Vue de dessus » et la distance du test (VP, 40 cm) écrites",
      "Le prisme dessiné devant l'OD, avec sa base et sa valeur",
      "L'œil fixateur nommé",
      "Le rayon dévié vers la base, T' à côté de la fovéa",
      "Les extériorisations seulement sur l'œil cyclope, décalage coté en cm",
      "Une conclusion rédigée : côté du décalage, valeur, calcul"
    ]
  },

  // ---------- 14. La convergence requise en lecture ----------
  {
    id: "U5-14", epreuve: "U5", chapitre: "Plus loin avec le couple oculaire",
    titre: "La convergence en lecture",
    consigne: "Lecture à 40 cm, écart pupillaire de 64 mm. Sujet emmétrope sans verre : les deux yeux fixent T, sur la médiane.",
    theme: "Examen préliminaire",
    schema: { type: "convergence", distance: 40, ecart: 64 },
    etapes: [
      { action: "legender", texte: "Légende le schéma : le titre, les centres de rotation, puis les deux cotes." },
      { action: "pointer", quoi: "rotation", texte: "Les yeux regardent encore droit devant. Pour fixer T, de quel côté tourne l'OD ?" },
      { action: "calcul", grandeur: "convergence", decimales: 0, texte: "Calcule la convergence requise du couple, en Δ." },
      { action: "conclure" }
    ],
    copie: [
      "« Vue de dessus » et « VP 40 cm » écrits",
      "Q'g et Q'd, l'écart pupillaire coté",
      "La distance de T à la ligne des centres cotée",
      "LRG et LRD fléchées vers T, l'angle de chaque œil noté",
      "Le calcul de la convergence en Δ",
      "Une conclusion rédigée : total, part de chaque œil, sens"
    ]
  },

  // ---------- 15. Des prismes base interne devant les deux yeux ----------
  {
    id: "U5-15", epreuve: "U5", chapitre: "Plus loin avec le couple oculaire",
    titre: "Des prismes devant les deux yeux",
    consigne: "Test à 5 m. Prisme de 3 Δ base interne devant chaque œil. Le sujet, orthophorique, garde la vision simple.",
    theme: "Masquage et phories",
    schema: { type: "prismes-couple", distance: 500, prisme: 3, base: "interne" },
    etapes: [
      { action: "legender", texte: "Légende le schéma : le titre, puis la base de chaque prisme." },
      { action: "pointer", quoi: "deviation", texte: "Après le prisme de l'OD, le rayon issu de T part-il vers le nez ou vers la tempe ?" },
      { action: "pointer", quoi: "rotation", texte: "Pour ramener T' sur la fovéa, de quel côté tourne l'OD ?" },
      { action: "calcul", grandeur: "prisme-total", decimales: 0, texte: "Quel prisme total, en Δ, le couple doit-il compenser ?" },
      { action: "conclure" }
    ],
    copie: [
      "« Vue de dessus » et « VL 5 m » écrits",
      "Chaque prisme dessiné devant son œil, avec sa base et sa valeur",
      "Les rayons fléchés, déviés vers la base",
      "Les lignes de regard après rotation, vers le sommet",
      "Le prisme total calculé",
      "Une conclusion rédigée : divergence demandée, réserve sollicitée"
    ]
  },

  // ---------- 16. Le brouillage de +1,00 vu de dessus ----------
  {
    id: "U5-16", epreuve: "U5", chapitre: "Plus loin avec le couple oculaire",
    titre: "Le brouillage vu de dessus",
    consigne: "Équilibre bioculaire de loin : sujet emmétrope, un verre de +1,00 δ devant chaque œil. Il n'accommode pas. Objet éloigné T∞.",
    theme: "Réfraction",
    schema: { type: "brouillage", verre: 1 },
    etapes: [
      { action: "legender", texte: "Légende le schéma : le titre, le verre de chaque œil, l'état accommodatif." },
      { action: "pointer", quoi: "image", texte: "Sur l'OD, où se forme l'image T'd de l'objet éloigné ?" },
      { action: "calcul", grandeur: "defocalisation", decimales: 2, texte: "De combien de dioptries l'image est-elle défocalisée ?" },
      { action: "calcul", grandeur: "remotum", decimales: 0, texte: "L'œil brouillé voit net en R. Calcule HR en cm, avec son signe." },
      { action: "conclure" }
    ],
    copie: [
      "« Vue de dessus » et « VL » écrits",
      "Le verre de chaque œil noté avec sa vergence",
      "T' marqué en avant de la rétine, sur chaque œil",
      "La défocalisation cotée en dioptries",
      "L'état accommodatif noté : Acc = 0",
      "Une conclusion rédigée : pourquoi accommoder empirerait le flou"
    ]
  },

  // ---------- 7. L'œil réduit hypermétrope ----------
  {
    id: "U5-7", epreuve: "U5", chapitre: "L'œil amétrope",
    titre: "L'œil réduit d'un hypermétrope",
    consigne: "Œil hypermétrope de +2,00 δ, sans verre, qui n'accommode pas. Il regarde un objet éloigné T.",
    theme: "Examen préliminaire",
    schema: { type: "oeil-reduit", ametropie: 2 },
    etapes: [
      { action: "legender", texte: "Légende l'œil réduit : touche une étiquette, puis l'endroit où elle va." },
      { action: "pointer", quoi: "image", texte: "Où se forme l'image T' de l'objet éloigné ?" },
      { action: "pointer", quoi: "remotum", texte: "Où se trouve le remotum R de cet œil ?" },
      { action: "calcul", grandeur: "remotum", unite: "cm", decimales: 0, texte: "Calcule HR, en cm, avec son signe." },
      { action: "conclure" }
    ],
    copie: [
      "Les plans principaux H H' et la rétine [R'], sur un axe en trait mixte",
      "L'objet T∞ (avec « // ») et ses rayons fléchés",
      "L'état accommodatif écrit : Acc = 0",
      "T' placé derrière la rétine, l'écart coté en dioptries",
      "Le remotum virtuel, derrière l'œil, et HR avec son signe",
      "Une conclusion rédigée"
    ]
  },

  // ---------- 8. Parcours d'accommodation d'un myope ----------
  {
    id: "U5-8", epreuve: "U5", chapitre: "L'œil amétrope",
    titre: "Le parcours d'accommodation d'un myope",
    consigne: "Œil myope de −1,50 δ, sans verre, amplitude d'accommodation 3,00 δ.",
    theme: "Examen préliminaire",
    schema: { type: "parcours", ametropie: -1.5, amplitude: 3 },
    etapes: [
      { action: "calcul", grandeur: "remotum", unite: "cm", decimales: 1, texte: "Calcule HR en cm (R = −1,50 δ)." },
      { action: "calcul", grandeur: "punctum", unite: "cm", decimales: 1, texte: "Calcule HP en cm (proximité de P : R − A)." },
      { action: "pointer", quoi: "parcours", texte: "Quelle partie de l'axe hachures-tu ?" },
      { action: "legender", texte: "Légende et cote le parcours comme sur ta copie." },
      { action: "conclure" }
    ],
    copie: [
      "R et P placés sur l'axe, dans le bon ordre",
      "Les cotes en unité métrique (cm), avec leur signe",
      "L'origine des cotes précisée (H)",
      "Le parcours hachuré ou coloré, et nommé",
      "Les verres portés, ou « œil nu »",
      "Une conclusion rédigée : où l'œil voit net, où il voit flou"
    ]
  },

  // ---------- 9. Image rétinienne : lunettes ou lentilles ----------
  {
    id: "U5-9", epreuve: "U5", chapitre: "L'image rétinienne",
    titre: "Lunettes ou lentilles : la taille de l'image",
    consigne: "Myope compensé par un verre de −5,00 δ porté à LH = 1,4 cm, ou par une lentille de contact. Objet éloigné B∞.",
    theme: "Lentilles",
    schema: { type: "image-retinienne", verre: -5, LH: 1.4 },
    etapes: [
      { action: "pointer", quoi: "intermediaire", texte: "En lunettes, où se forme l'image intermédiaire Ai Bi donnée par le verre ?" },
      { action: "legender", texte: "Légende le schéma comparatif : le rayon or est en lunettes, le bleu en lentilles." },
      { action: "calcul", grandeur: "ecart-taille", decimales: 0, texte: "Estime l'écart de taille des images rétiniennes : LH (cm) × |DL|, en %." },
      { action: "conclure" }
    ],
    copie: [
      "L'objet, le verre et sa puissance, les plans principaux H H'",
      "L'image intermédiaire Ai Bi à sa place (au foyer image du verre)",
      "Les deux cas sur un même schéma, en deux couleurs",
      "Les angles et les images rétiniennes comparés : y' lunettes < y' lentilles",
      "Une conclusion rédigée, avec l'ordre de grandeur"
    ]
  },

  // ---------- 10. Aniséiconie ----------
  {
    id: "U5-10", epreuve: "U5", chapitre: "L'image rétinienne",
    titre: "L'aniséiconie d'un anisométrope",
    consigne: "Anisométropie de puissance : OD −2,00 δ, OG −5,00 δ, en lunettes à LH = 1,4 cm. Objet éloigné.",
    theme: "Anisométropie",
    schema: { type: "aniseiconie", OD: -2, OG: -5, LH: 1.4 },
    etapes: [
      { action: "legender", texte: "Légende le schéma comparatif : l'OD en or, l'OG en violet." },
      { action: "pointer", quoi: "plus-grande", texte: "Quel œil a la plus grande image rétinienne ?" },
      { action: "calcul", grandeur: "aniseiconie", decimales: 1, texte: "Estime l'aniséiconie induite : LH (cm) × |DLd − DLg|, en %." },
      { action: "conclure" }
    ],
    copie: [
      "OD et OG sur un même schéma, en deux couleurs",
      "Les deux verres et leur puissance",
      "Les plans principaux de chaque œil comme origine",
      "Les images intermédiaires et les images rétiniennes y'd, y'g",
      "Conclusion rédigée : valeur en %, en faveur de quel œil, gêne possible"
    ]
  },

  // ---------- 11. Prisme vertical en lecture ----------
  {
    id: "U5-11", epreuve: "U5", chapitre: "Le prisme vertical",
    titre: "Lire sous le centre optique",
    consigne: "En lecture, le regard passe 8 mm sous le centre optique des verres. Méridien vertical : OD +1,00 δ, OG +3,50 δ.",
    theme: "Anisométropie",
    schema: { type: "prisme-vertical", OD: 1, OG: 3.5, c: 0.8, regard: "bas" },
    etapes: [
      { action: "pointer", quoi: "deviation", texte: "OD vue de profil : après le verre, où part le rayon issu de B ?" },
      { action: "legender", texte: "Légende les deux vues comme sur ta copie." },
      { action: "calcul", grandeur: "prisme-od", decimales: 1, texte: "Formule de Prentice : effet prismatique de l'OD, en Δ (c en cm)." },
      { action: "calcul", grandeur: "prisme-og", decimales: 1, texte: "Effet prismatique de l'OG, en Δ." },
      { action: "calcul", grandeur: "difference-prismatique", decimales: 1, texte: "Les deux bases sont du même côté. Quel effet vertical subit le couple ?" },
      { action: "pointer", quoi: "rotation", texte: "Quel œil doit tourner le plus pour regarder B ?" },
      { action: "conclure" }
    ],
    copie: [
      "Deux vues de profil séparées, OD et OG, jamais superposées",
      "Le verre, son centre optique et le point de passage du regard",
      "Le rayon issu du point objet, fléché, dévié vers la base",
      "Les angles de rotation w'd et w'g notés et comparés",
      "Prentice : effet = c (cm) × D, pour chaque œil, puis la différence",
      "Un commentaire rédigé sur la gêne binoculaire"
    ]
  }
);
