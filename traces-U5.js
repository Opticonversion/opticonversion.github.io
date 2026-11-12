// ==============================================================
//  ATELIER DES TRACÉS · Analyse de la vision (U5)
//  Format : notes/coordination/etape2-formats.md (partie a).
//  Le moteur calcule toutes les réponses (œil réduit, relation de
//  conjugaison) : ici, seulement les montages et les consignes.
//  Longueurs en mm, lumière de gauche à droite, œil (H) en x = 0.
//  Schéma hors échelle : vue « de loin » (verre, remotum, punctum)
//  et vue « œil grossi » (image sur la rétine).
//  id U5-1, U5-2… jamais réutilisés (les étoiles y sont rangées).
//  Pas de constante ici ; s'il en faut une, la préfixer VUE_U5_ (noms partagés
//  entre les fichiers traces-*).
// ==============================================================

TRACES.push(

  // ---------- 1. Remotum d'un myope ----------
  {
    id: "U5-1", epreuve: "U5", chapitre: "L'œil et sa compensation",
    titre: "Le remotum d'un myope",
    regle: "Le remotum R est le point vu net quand l'œil n'accommode pas. HR = 1/R : pour un myope (R < 0), il est réel, devant l'œil.",
    consigne: "Place le remotum de cet œil myope de −2,00 δ, puis calcule HR.",
    theme: "Examen préliminaire",
    systeme: {
      elements: [
        { type: "oeil", nom: "Œil", x: 0, ametropie: -2 }
      ]
    },
    etapes: [
      { action: "placer", quoi: "remotum", tolerance: 0.5, texte: "Fais glisser R là où l'œil voit net sans accommoder." },
      { action: "calcul", grandeur: "remotum", unite: "cm", decimales: 0, texte: "Calcule HR (mesure algébrique depuis l'œil)." }
    ],
    conclusion: "Au-delà de R, tout est flou : le myope voit net de près sans effort, mais pas de loin."
  },

  // ---------- 2. Remotum et proximum d'un hypermétrope ----------
  {
    id: "U5-2", epreuve: "U5", chapitre: "L'œil et sa compensation",
    titre: "Remotum et proximum d'un hypermétrope",
    regle: "Pour un hypermétrope (R > 0), le remotum est virtuel, derrière l'œil. Avec l'amplitude d'accommodation : Amax = R − 1/HP.",
    consigne: "Œil hypermétrope de +1,00 δ avec 5 δ d'amplitude : place R puis le proximum P, puis calcule HP.",
    theme: "Examen préliminaire",
    systeme: {
      elements: [
        { type: "oeil", nom: "Œil", x: 0, ametropie: 1, amplitude: 5 }
      ]
    },
    etapes: [
      { action: "placer", quoi: "remotum", tolerance: 0.5, texte: "Où se trouve le remotum de cet œil ? (Il peut être derrière l'œil.)" },
      { action: "placer", quoi: "punctum", tolerance: 0.5, texte: "Place le proximum, le point le plus proche vu net en accommodant au maximum." },
      { action: "calcul", grandeur: "punctum", unite: "cm", decimales: 1, texte: "Calcule HP (mesure algébrique depuis l'œil)." }
    ],
    conclusion: "Son parcours de vision nette va de l'infini jusqu'à P : il voit net de loin, mais en accommodant déjà, ce qui fatigue."
  },

  // ---------- 3. Image rétinienne d'un myope, sans verre ----------
  {
    id: "U5-3", epreuve: "U5", chapitre: "L'œil et sa compensation",
    titre: "L'image d'un objet lointain chez un myope",
    regle: "Œil au repos : l'image d'un objet à l'infini se forme au foyer image de l'œil. Chez le myope, trop convergent, ce foyer est en avant de la rétine.",
    consigne: "Objet à l'infini, œil myope de −2,50 δ qui n'accommode pas : place l'image formée par l'œil.",
    theme: "Examen préliminaire",
    systeme: {
      objet: { infini: true, angle: 2 },
      elements: [
        { type: "oeil", nom: "Œil", x: 0, ametropie: -2.5 }
      ]
    },
    etapes: [
      { action: "placer", quoi: "image-retine", tolerance: 0.8, texte: "Fais glisser l'image : sur la rétine, devant ou derrière ?" }
    ],
    conclusion: "L'image est en avant de la rétine : sur la rétine, on n'a qu'une tache floue. C'est la vision floue de loin du myope."
  },

  // ---------- 4. Le même œil compensé par un verre ----------
  {
    id: "U5-4", epreuve: "U5", chapitre: "L'œil et sa compensation",
    titre: "Le même myope avec son verre",
    regle: "Un verre compense l'œil quand son foyer image est confondu avec le remotum : l'image intermédiaire se forme sur R, et l'œil la ramène sur la rétine sans accommoder.",
    consigne: "Même œil (−2,50 δ), avec un verre de −2,50 δ à 12 mm : place l'image donnée par le verre, puis l'image finale.",
    theme: "Réfraction",
    systeme: {
      objet: { infini: true, angle: 2 },
      elements: [
        { type: "lentille", nom: "Verre", x: -12, P: -2.5 },
        { type: "oeil", nom: "Œil", x: 0, ametropie: -2.5 }
      ]
    },
    etapes: [
      { action: "placer", quoi: "image", apres: "Verre", tolerance: 0.8, texte: "Où le verre forme-t-il l'image de l'objet lointain ?" },
      { action: "placer", quoi: "image-retine", tolerance: 0.8, texte: "Place maintenant l'image finale formée par l'œil." }
    ],
    conclusion: "L'image intermédiaire tombe presque sur le remotum : l'image finale est (pratiquement) sur la rétine. Pour un verre faible, la distance verre-œil change très peu le résultat ; pour un fort verre, il faudrait en tenir compte."
  }
);
