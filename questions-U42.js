// ==============================================================
//  QUESTIONS · Optique géométrique et physique (U42)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U42" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//    indice, schema, schemaTexte… : facultatifs (voir .claude/guide-schemas-indices.md)
//    type: "calcul" + reponse : question où l'élève tape la valeur (pas de choix ni de bonne)
//    cas, etape, contexte : seulement pour les questions du mini-sujet
//                  (déclaré par CAS.push tout en bas du fichier)
//
//  Règles : calculatrice AUTORISÉE à l'U42 (mode examen ou type collège),
//  mais on garde des chiffres simples pour calculer vite.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Analyse des sujets : notes/analyse-U42.md
// ==============================================================

QUESTIONS.push(

  // ---------- Conjugaison (tombé 8 années sur 8) ----------
  {
    id: "U42-001", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Une lentille mince convergente a une distance focale image f' = 50 mm. Un objet réel est placé à 75 mm devant elle (OA = −75 mm). Où se trouve l'image ?",
    choix: ["OA' = +150 mm (image réelle)", "OA' = +37,5 mm", "OA' = −150 mm (image virtuelle)", "OA' = +30 mm"],
    bonne: 0,
    explication: "Relation de Descartes :\n[[1|OA']] − [[1|OA]] = [[1|f']]\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|50]] + [[1|−75]]\n[[1|OA']] = [[3|150]] − [[2|150]] = [[1|150]]\nSoit OA' = +150 mm. Positif = après la lentille = image réelle.",
    indice: "Un objet réel placé avant la lentille a un OA négatif. Utilise la relation de conjugaison de Descartes, en gardant bien les signes.",
    schema: "img/schemas/U42/conjugaison-f50-objet75.svg",
    schemaTexte: "Tracé des trois rayons utiles : l'objet AB à 75 mm devant la lentille donne une image A'B' réelle, renversée et deux fois plus grande, à 150 mm derrière."
  },
  {
    id: "U42-002", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Lentille mince convergente, objet réel AB placé avant le foyer objet F. Quel tracé de l'image est juste ?",
    choix: ["Tracé juste : rayon parallèle par F', rayon par O non dévié", "Le rayon passant par O est dévié", "Le rayon parallèle ressort comme avec une lentille divergente", "Les rayons sont justes mais l'image est placée au foyer F'"],
    choixSchemas: ["img/schemas/U42/trace-juste.svg", "img/schemas/U42/trace-faux-centre-devie.svg", "img/schemas/U42/trace-faux-divergent.svg", "img/schemas/U42/trace-faux-image-au-foyer.svg"],
    bonne: 0,
    explication: "Deux règles suffisent : un rayon parallèle à l'axe ressort en passant par le foyer image F', et un rayon qui passe par le centre optique O n'est pas dévié. L'image B' est là où ces rayons se croisent, ici après F', réelle et renversée. Les pièges : dévier le rayon qui passe par O, faire diverger le rayon parallèle (c'est le comportement d'une lentille divergente), ou poser l'image sur F' alors que les rayons ne s'y croisent pas.",
    indice: "Pour une lentille convergente, deux rayons particuliers suffisent : celui qui arrive parallèle à l'axe, et celui qui passe par le centre optique. Que devient chacun d'eux ?"
  },
  {
    id: "U42-003", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Lentille mince divergente (f' < 0), objet réel AB placé avant la lentille. Quel tracé de l'image est juste ?",
    choix: ["Le rayon parallèle converge vers F, comme avec une lentille convergente", "Les rayons sont justes mais l'image est placée réelle et renversée derrière la lentille", "Tracé juste : le rayon parallèle ressort en semblant venir de F', le rayon par O n'est pas dévié", "Le rayon passant par O est dévié"],
    choixSchemas: ["img/schemas/U42/trace-div-faux-converge.svg", "img/schemas/U42/trace-div-faux-image-reelle.svg", "img/schemas/U42/trace-div-juste.svg", "img/schemas/U42/trace-div-faux-centre-devie.svg"],
    bonne: 2,
    explication: "Pour une lentille divergente, le foyer image F' est AVANT la lentille. Un rayon parallèle à l'axe ressort en s'écartant, comme s'il venait de F' : on prolonge ce rayon en pointillés vers l'arrière. Le rayon qui passe par O n'est pas dévié. L'image est au croisement du prolongement et de ce rayon : virtuelle, droite, plus petite que l'objet, entre F' et la lentille. Les pièges : faire converger le rayon vers F, placer l'image derrière la lentille, ou dévier le rayon qui passe par O.",
    indice: "Pour une divergente, le foyer image F' est du côté de l'objet. Le rayon parallèle ressort en s'écartant de l'axe : d'où semble-t-il venir ? Et le rayon qui passe par O ?"
  },
  {
    id: "U42-004", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2025",
    question: "Un objectif assimilé à une lentille mince de f' = 20 mm donne d'un objet placé à OA = −25 mm une image à OA' = +100 mm. Quel est le grandissement transversal gy ?",
    choix: ["−0,25", "−4", "−5", "+4"],
    bonne: 1,
    explication: "gy = OA'/OA = 100 / (−25) = −4. L'image est 4 fois plus grande et renversée (signe −). C'est le calcul de l'objectif d'un microscope ou d'une télé-loupe.",
    indice: "Le grandissement transversal compare la position de l'image à celle de l'objet, par rapport au centre O. Garde bien les signes : son signe dit si l'image est droite ou renversée."
  },
  {
    id: "U42-005", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2022",
    question: "Objectif photo de f' = 50 mm. L'objet est à 2,5 m avant le foyer objet : FA = −2 500 mm. Où se forme l'image par rapport au foyer image F' (formule de Newton) ?",
    choix: ["F'A' = +2,5 mm", "F'A' = −1,0 mm", "F'A' = +1,0 mm", "F'A' = +50 mm"],
    bonne: 2,
    explication: "Newton : FA × F'A' = −f'². Donc F'A' = −2 500 / (−2 500) = +1,0 mm. L'image est 1 mm après F' : il faut éloigner un peu le capteur du foyer pour faire la mise au point sur un objet proche.",
    indice: "La formule de Newton mesure les distances à partir des foyers : FA côté objet, F'A' côté image. Elle fait intervenir le carré de la focale, avec un signe moins."
  },
  {
    id: "U42-006", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2024",
    question: "Un observateur emmétrope qui n'accommode pas regarde dans un instrument (objectif + oculaire). Où doit se trouver l'image intermédiaire donnée par l'objectif ?",
    choix: ["Au centre optique de l'oculaire", "À 25 cm de l'œil", "Au foyer image de l'objectif, toujours", "Dans le plan focal objet de l'oculaire"],
    bonne: 3,
    explication: "Emmétrope sans accommoder = il voit net à l'infini. L'image finale doit donc être à l'infini, et pour cela l'objet de l'oculaire (l'image intermédiaire) doit être dans son plan focal objet Foc. Cette phrase revient dans presque tous les sujets.",
    indice: "Un emmétrope qui n'accommode pas voit net à l'infini. Où doit être un objet pour que l'oculaire en donne une image à l'infini ?"
  },
  {
    id: "U42-007", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "2018",
    question: "On veut tailler une lentille mince équiconvexe (deux faces de même rayon R) d'indice n = 1,5 et de distance focale f' = 100 mm. Quelle valeur de R ?",
    choix: ["100 mm", "150 mm", "200 mm", "50 mm"],
    bonne: 0,
    explication: "1/f' = (n − 1) × (1/R₁ − 1/R₂) avec R₁ = +R et R₂ = −R, donc 1/f' = (n − 1) × 2/R. D'où R = 2 × (n − 1) × f' = 2 × 0,5 × 100 = 100 mm.",
    indice: "Utilise la formule des opticiens 1/f' = (n − 1)(1/R₁ − 1/R₂). Pour une lentille équiconvexe, attention au signe de R₂ : la deuxième face est bombée dans l'autre sens."
  },
  {
    id: "U42-043", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2021 et 2024",
    question: "Consigne du sujet : « Montrer que l'image se forme à 60 mm après la lentille. » Lentille mince convergente de f' = +20 mm, objet réel placé à 30 mm devant elle. Quelle démarche est juste ?",
    choix: [
      "OA = +30 mm. Descartes : 1/OA' = 1/OA − 1/f' = 1/30 − 1/20 = −1/60. Donc l'image est à 60 mm de la lentille.",
      "D'après la relation de conjugaison de Descartes, on trouve directement OA' = +60 mm.",
      "Objet réel : OA = −30 mm. Descartes : 1/OA' = 1/f' + 1/OA = 1/20 − 1/30 = 1/60. Donc OA' = +60 mm : l'image est réelle, 60 mm après la lentille.",
      "Objet réel : OA = −30 mm. Descartes : 1/OA' − 1/OA = 1/f', donc 1/OA' = 1/20 − 1/30."
    ],
    bonne: 2,
    surLaCopie: "Objet réel : OA = −30 mm. Descartes : [[1|OA']] = [[1|f']] + [[1|OA]] = [[1|20]] − [[1|30]] = [[1|60]]\nDonc OA' = +60 mm : l'image est réelle, 60 mm après la lentille, comme demandé.",
    explication: "Dans un « Montrer que », la valeur est donnée : ce sont la méthode et la rédaction qui rapportent les points. Trois temps : la donnée avec son signe (objet réel, OA = −30 mm), la relation appliquée avec les chiffres (1/OA' = 1/20 − 1/30 = 1/60), la conclusion (OA' = +60 mm, image réelle). La copie qui part de OA = +30 mm trouve −1/60 puis écrit « 60 mm » : elle arrange le résultat, et le correcteur le voit. Citer Descartes sans calcul ne démontre rien. S'arrêter avant le résultat ne répond pas à la consigne.",
    indice: "Une démarche complète tient en trois temps : la donnée avec son signe, la relation appliquée avec les chiffres, puis une phrase de conclusion."
  },
  {
    id: "U42-044", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Copie d'un élève : « Lentille divergente de distance focale 40 mm, objet réel à 40 mm devant elle, donc OA = −40 mm. Descartes : 1/OA' = 1/40 − 1/40 = 0. L'image est à l'infini. » Où est l'erreur ?",
    choix: [
      "OA devrait être positif, puisque l'objet est réel",
      "Il n'y a pas d'erreur : un objet placé à la distance focale donne une image à l'infini",
      "La relation de Descartes ne s'applique pas à une lentille divergente",
      "Pour une divergente, f' = −40 mm : 1/OA' = −1/40 − 1/40, donc OA' = −20 mm"
    ],
    bonne: 3,
    explication: "Une lentille divergente a une distance focale image négative : f' = −40 mm. Alors 1/OA' = 1/f' + 1/OA = −1/40 − 1/40 = −1/20, donc OA' = −20 mm. L'image est virtuelle, droite et deux fois plus petite, entre l'objet et la lentille. L'objet n'est pas au foyer objet : pour une divergente, F est de l'autre côté, après la lentille. Avec une lentille divergente, un objet réel donne toujours une image virtuelle.",
    indice: "Relis la copie signe par signe. Quel est le signe de la distance focale image d'une lentille divergente ?"
  },
  {
    id: "U42-054", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2021 et 2024",
    type: "calcul",
    question: "Lentille mince convergente de f' = +40 mm. Un objet réel est placé à 60 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: 120, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 24, type: "signe", message: "Tu as pris OA = +60 mm. Un objet réel est avant la lentille : OA = −60 mm." }
    ],
    surLaCopie: "Objet réel : OA = −60 mm, f' = +40 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]] = [[1|40]] − [[1|60]] = [[1|120]]\nDonc OA' = +120 mm : l'image est réelle, 120 mm après la lentille.",
    explication: "Objet réel : OA = −60 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = [[1|40]] − [[1|60]]\n[[1|OA']] = [[3|120]] − [[2|120]] = [[1|120]]\nDonc OA' = +120 mm : l'image est réelle, 120 mm après la lentille.",
    indice: "Un objet réel placé devant la lentille a un OA négatif. Utilise la relation de conjugaison de Descartes, sans perdre les signes."
  },
  {
    id: "U42-055", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2024 et 2025",
    type: "calcul",
    question: "Un objectif donne d'un objet placé à OA = −36 mm une image à OA' = +180 mm. Calcule le grandissement transversal, avec son signe.",
    reponse: { valeur: -5, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: -0.2, type: "notion", message: "Tu as calculé OA / OA'. Le grandissement est OA' / OA : la position de l'image sur celle de l'objet." },
      { valeur: 5, type: "signe", message: "Tu as oublié le signe. L'image est renversée (OA' et OA de signes contraires) : γ est négatif." }
    ],
    surLaCopie: "γ = [[OA'|OA]] = [[180|−36]] = −5\nL'image est renversée (γ < 0) et 5 fois plus grande que l'objet.",
    explication: "γ = [[OA'|OA]]\nγ = [[180|−36]] = −5\nL'image est 5 fois plus grande que l'objet, et renversée : c'est ce que dit le signe moins.",
    indice: "Le grandissement transversal est le rapport de la position de l'image à celle de l'objet, mesurées depuis le centre O. Garde les signes."
  },
  {
    id: "U42-056", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Lentille mince divergente de f' = −50 mm. Un objet réel est placé à 200 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: -40, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 66.7, type: "signe", message: "Tu as pris f' = +50 mm. La lentille est divergente : f' = −50 mm." },
      { valeur: -66.7, type: "signe", message: "Tu as pris OA = +200 mm. Un objet réel est avant la lentille : OA = −200 mm." }
    ],
    explication: "OA = −200 mm et f' = −50 mm.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]]\n[[1|OA']] = −[[1|50]] − [[1|200]]\n[[1|OA']] = −[[4|200]] − [[1|200]] = −[[5|200]]\nDonc OA' = −[[200|5]] = −40 mm : l'image est virtuelle, du côté de l'objet, droite et 5 fois plus petite.\nγ = [[OA'|OA]] = [[−40|−200]] = +0,2",
    indice: "Deux signes à ne pas oublier : celui de OA (objet réel) et celui de f' (lentille divergente)."
  },

  // Chaîne des images (systèmes à plusieurs éléments)
  {
    id: "U42-144", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2025",
    question: "Microscope réglé pour un œil emmétrope qui n'accommode pas. Quelle chaîne des images est juste ?",
    choix: [
      "A = Fob → A₁ à l'infini → A' = F'oc",
      "A, un peu plus loin que Fob → A₁ = F'oc → A' à l'infini",
      "A, un peu plus loin que Fob → A₁ = Foc → A' à l'infini → A'' = F'œil",
      "A, entre Fob et l'objectif → A₁ = Foc → A' à l'infini → A'' = F'œil"
    ],
    bonne: 2,
    explication: "On part de la fin. Emmétrope sans accommoder : A' à l'infini, donc A₁ au foyer objet de l'oculaire, A₁ = Foc. L'œil en donne l'image A'' = F'œil, sur la rétine.\nL'objectif doit donner une image A₁ réelle et agrandie : l'objet est un peu plus loin que Fob.\nEntre Fob et l'objectif, l'image serait virtuelle ; en Fob, elle partirait à l'infini.",
    indice: "Pars de la fin : où doit être A' pour un emmétrope qui n'accommode pas ? Et donc A₁ ?",
    erreurs: {
      1: { type: "notion", message: "Pour que l'image finale parte à l'infini, A₁ doit être au foyer objet de l'oculaire (Foc), pas à son foyer image." },
      3: { type: "notion", message: "Entre Fob et l'objectif, l'image donnée par l'objectif est virtuelle. Le microscope a besoin d'une image A₁ réelle et agrandie." }
    }
  },
  {
    id: "U42-145", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "L₁ (f'₁ = +20 mm), puis L₂ (f'₂ = +30 mm) placée 100 mm après L₁. Un objet réel est à 30 mm devant L₁. Calcule O₂A', la position de l'image finale par rapport à L₂, avec son signe.",
    reponse: { valeur: 120, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 17.1, type: "signe", message: "Tu as pris O₂A₁ = +40 mm. A₁ est 40 mm avant L₂ : c'est un objet réel, O₂A₁ = −40 mm." }
    ],
    explication: "L₁ : [[1|O₁A₁]] = [[1|20]] + [[1|−30]] = [[3|60]] − [[2|60]] = [[1|60]], donc O₁A₁ = +60 mm.\nL₂ est à 100 mm de L₁ : O₂A₁ = 60 − 100 = −40 mm. A₁ est avant L₂ : objet réel, plus loin que F₂.\nL₂ : [[1|O₂A']] = [[1|30]] + [[1|−40]] = [[4|120]] − [[3|120]] = [[1|120]]\nDonc O₂A' = +120 mm : image réelle, 120 mm après L₂.\nChaîne : A → A₁ (objet réel pour L₂) → A'.",
    indice: "Trouve A₁ avec L₁, puis compte sa position depuis L₂, dans le sens de la lumière."
  },
  {
    id: "U42-146", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "L₁ (f'₁ = +20 mm), puis L₂ (f'₂ = +30 mm) placée 100 mm après L₁. Un objet réel est à 30 mm devant L₁. L₁ en donne une image à O₁A₁ = +60 mm, et L₂ une image finale à O₂A' = +120 mm. Calcule le grandissement total γ, avec son signe.",
    reponse: { valeur: 6, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: -5, type: "notion", message: "Tu as additionné les grandissements. Ils se multiplient : γ = (−2) × (−3) = +6." },
      { valeur: -6, type: "signe", message: "Chaque lentille renverse l'image : deux grandissements négatifs, leur produit est positif." }
    ],
    explication: "γ₁ = [[O₁A₁|O₁A]] = [[60|−30]] = −2\nPour L₂, l'objet est en O₂A₁ = 60 − 100 = −40 mm.\nγ₂ = [[O₂A'|O₂A₁]] = [[120|−40]] = −3\nγ = γ₁ × γ₂ = (−2) × (−3) = +6\nL'image finale est droite et 6 fois plus grande : chaque lentille la renverse une fois.",
    indice: "Calcule γ₁, puis γ₂ avec la position de A₁ comptée depuis L₂, puis multiplie."
  },
  {
    id: "U42-147", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "pose",
    question: "Un viseur : objectif L₁ (f'₁ = +40 mm), puis oculaire L₂ (f'₂ = +25 mm) placé 145 mm après L₁. Il est réglé pour un œil emmétrope qui n'accommode pas. Où est l'objet visé ? Remonte la chaîne des images, étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image intermédiaire par rapport à l'oculaire, O₂A₁ (en mm)",
        reponse: { valeur: -25, unite: "mm", decimales: 0, signe: true },
        aide: "Emmétrope sans accommoder : A' est à l'infini, donc A₁ est au foyer objet de l'oculaire, avant lui.",
        ligne: "A' à l'infini, donc A₁ = F₂\nO₂A₁ = −f'₂ = −25 mm",
        erreurs: [{ valeur: 25, type: "signe", message: "Le foyer objet F₂ est avant l'oculaire : O₂A₁ est négatif, O₂A₁ = −f'₂ = −25 mm." }]
      },
      {
        consigne: "Position de l'image intermédiaire par rapport à l'objectif, O₁A₁ (en mm)",
        reponse: { valeur: 120, unite: "mm", decimales: 0, signe: true },
        aide: "A₁ est 25 mm avant L₂, et L₂ est 145 mm après L₁.",
        ligne: "O₁A₁ = O₁O₂ + O₂A₁ = 145 − 25 = +120 mm",
        erreurs: [{ valeur: 170, type: "signe", message: "A₁ est avant L₂ : O₁A₁ = 145 − 25 = 120 mm, pas 145 + 25." }]
      },
      {
        consigne: "Position de l'objet par rapport à l'objectif, O₁A (en mm)",
        reponse: { valeur: -60, unite: "mm", decimales: 0, signe: true },
        aide: "Descartes, retournée : [[1|O₁A]] = [[1|O₁A₁]] − [[1|f'₁]].",
        ligne: "[[1|O₁A]] = [[1|120]] − [[1|40]] = [[1|120]] − [[3|120]] = [[−2|120]]\nDonc O₁A = −60 mm",
        erreurs: [{ valeur: 30, type: "notion", message: "Tu as ajouté les deux termes. De 1/OA' − 1/OA = 1/f', on tire 1/OA = 1/OA' − 1/f' = 1/120 − 1/40." }]
      },
      {
        consigne: "Grandissement de l'objectif γ₁",
        reponse: { valeur: -2, unite: "", decimales: 0, signe: true },
        aide: "γ₁ = [[O₁A₁|O₁A]], avec les signes.",
        ligne: "γ₁ = [[120|−60]] = −2"
      }
    ],
    explication: "Chaîne : A (60 mm devant L₁) → A₁ = F₂ (120 mm après L₁) → A' à l'infini → A'' = F'œil. L'objectif donne une image intermédiaire renversée, deux fois plus grande."
  },
  {
    id: "U42-148", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une source ponctuelle S est placée au foyer objet d'une lentille convergente L₁. Une lentille convergente L₂ est placée plus loin, sur le même axe. Où se forme l'image finale S'' ?",
    choix: ["À l'infini", "Au foyer objet de L₂", "Au foyer image de L₂", "Entre L₁ et L₂"],
    bonne: 2,
    explication: "S = F₁ : L₁ en donne une image S' à l'infini (faisceau parallèle).\nPour L₂, l'objet S' est à l'infini : son image S'' est au foyer image de L₂.\nChaîne : S = F₁ → S' à l'infini → S'' = F'₂. C'est vrai quelle que soit la distance entre les deux lentilles.",
    indice: "Écris la chaîne : que donne L₁ d'un point placé à son foyer objet ? Que fait L₂ d'un objet à l'infini ?",
    erreurs: {
      0: { type: "notion", message: "S' est à l'infini, mais L₂ le reprend : un objet à l'infini donne son image au foyer image de L₂." }
    }
  },
  {
    id: "U42-149", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Un objectif seul formerait une image réelle A₁. On place entre l'objectif et A₁ une lame de verre à faces parallèles, d'épaisseur 6 mm et d'indice 1,5. Où se forme maintenant l'image ?",
    choix: ["2 mm plus près de l'objectif", "2 mm plus loin de l'objectif", "4 mm plus loin de l'objectif", "Au même endroit : une lame n'a pas de vergence"],
    bonne: 1,
    explication: "La lame est un élément de plus dans la chaîne : A → A₁ (objectif seul) → A₂ (après la lame).\nElle n'a pas de vergence, mais elle décale l'image dans le sens de la lumière de e × (1 − [[1|n]]).\nDécalage = 6 × (1 − [[1|1,5]]) = 6 × [[1|3]] = 2 mm.\nL'image se forme 2 mm plus loin de l'objectif.",
    indice: "Une lame à faces parallèles décale l'image de e × (1 − 1/n). Dans quel sens, pour un faisceau qui converge ?",
    erreurs: {
      0: { type: "notion", message: "La lame décale l'image dans le sens de la lumière, donc en l'éloignant de l'objectif." },
      3: { type: "notion", message: "Une lame n'a pas de vergence, mais elle décale l'image de e × (1 − 1/n), dans le sens de la lumière." },
      2: { type: "notion", message: "Tu as calculé e ÷ n = 4 mm. Le décalage vaut e × (1 − 1/n) = 6 × (1 − 2/3) = 2 mm." }
    }
  },
  {
    id: "U42-150", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un objet AB de 5 mm est placé 30 mm devant L₁ (f'₁ = +20 mm). L₂ (f'₂ = +40 mm) est placée 80 mm après L₁. Calcule la taille de l'image finale A'B', en mm, avec son signe.",
    reponse: { valeur: -20, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: -10, type: "notion", message: "−10 mm est la taille de A₁B₁, l'image intermédiaire. Il reste à passer par L₂ (γ₂ = +2) : A'B' = (−4) × 5 = −20 mm." },
      { valeur: 20, type: "signe", message: "L'image finale est renversée (γ = −4) : A'B' est négatif." }
    ],
    explication: "L₁ : [[1|O₁A₁]] = [[1|20]] + [[1|−30]] = [[3|60]] − [[2|60]] = [[1|60]], O₁A₁ = +60 mm, γ₁ = [[60|−30]] = −2.\nO₂A₁ = 60 − 80 = −20 mm : objet réel, entre F₂ et L₂.\nL₂ : [[1|O₂A']] = [[1|40]] + [[1|−20]] = [[1|40]] − [[2|40]] = [[−1|40]], O₂A' = −40 mm, γ₂ = [[−40|−20]] = +2.\nγ = (−2) × 2 = −4, donc A'B' = −4 × 5 = −20 mm.\nL'image finale est virtuelle, renversée, 4 fois plus grande.",
    indice: "Calcule γ₁ puis γ₂, multiplie-les, puis multiplie par la taille de l'objet."
  },
  {
    id: "U42-151", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Dans un microscope, l'objectif donne une image intermédiaire réelle avec γ₁ = −10. L'oculaire, utilisé comme une loupe, en donne une image virtuelle avec γ₂ = +6. L'image finale est :",
    choix: ["Virtuelle, droite, 60 fois plus grande", "Réelle, renversée, 60 fois plus grande", "Virtuelle, renversée, 16 fois plus grande", "Virtuelle, renversée, 60 fois plus grande"],
    bonne: 3,
    explication: "γ = γ₁ × γ₂ = (−10) × 6 = −60.\nγ = −60 : l'image est renversée et 60 fois plus grande.\nElle est virtuelle, car c'est l'image virtuelle donnée par l'oculaire.\nUne image peut être virtuelle et renversée : le renversement vient de l'objectif.",
    indice: "Multiplie les grandissements. Le sens de l'image se lit sur le signe de γ.",
    erreurs: {
      0: { type: "signe", message: "Une image virtuelle peut être renversée. Le sens vient du signe de γ = (−10) × 6 = −60 : l'image est renversée." },
      2: { type: "notion", message: "Les grandissements se multiplient, ils ne s'ajoutent pas : 10 × 6 = 60." }
    }
  },
  {
    id: "U42-152", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une lunette de Kepler est réglée afocale (F'ob = Foc). On vise maintenant un objet assez proche. Pour qu'un œil emmétrope le voie net sans accommoder, que faut-il faire ?",
    choix: ["Rapprocher l'oculaire de l'objectif", "Éloigner l'oculaire de l'objectif", "Rien : une lunette afocale donne toujours une image à l'infini", "Accommoder, aucun réglage ne suffit"],
    bonne: 1,
    explication: "Objet proche : son image A₁ par l'objectif ne se forme plus en F'ob mais un peu plus loin, après F'ob.\nPour que l'image finale reparte à l'infini, il faut A₁ = Foc : on déplace l'oculaire pour amener son foyer objet sur A₁, donc on l'éloigne de l'objectif.\nChaîne : A proche → A₁ après F'ob → réglage A₁ = Foc → A' à l'infini.",
    indice: "Plus l'objet se rapproche d'une lentille convergente, plus son image s'en éloigne.",
    erreurs: {
      0: { type: "notion", message: "Un objet qui se rapproche donne une image A₁ qui s'éloigne de l'objectif. L'oculaire doit suivre A₁, donc s'éloigner." },
      2: { type: "notion", message: "Une lunette afocale est réglée pour un objet à l'infini. Pour un objet proche, A₁ n'est plus en F'ob : il faut la régler à nouveau." }
    }
  },
  {
    id: "U42-153", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "2026",
    type: "calcul",
    question: "L'objet est à l'infini. L₁ (f'₁ = +80 mm) en donne une image A₁. L₂ est placée 50 mm après L₁. Calcule O₂A₁, la position de A₁ par rapport à L₂, avec son signe.",
    reponse: { valeur: 30, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 130, type: "notion", message: "Tu as ajouté les distances. A₁ est à 80 mm de L₁ et L₂ à 50 mm : O₂A₁ = 80 − 50 = +30 mm." },
      { valeur: -30, type: "signe", message: "A₁ est après L₂ (80 mm après L₁, L₂ à 50 mm) : O₂A₁ est positif, +30 mm." }
    ],
    explication: "Objet à l'infini : A₁ = F'₁, donc O₁A₁ = +80 mm.\nO₂A₁ = O₂O₁ + O₁A₁ = −50 + 80 = +30 mm.\nPositif : A₁ est 30 mm après L₂. Pour L₂, c'est un objet virtuel (la lumière converge vers A₁ mais rencontre L₂ avant).\nChaîne : A à l'infini → A₁ = F'₁, qui sert d'objet virtuel à L₂.",
    indice: "Un objet à l'infini donne son image au foyer image. Mesure ensuite depuis L₂, dans le sens de la lumière."
  },

  {
    id: "U42-154", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Dans une chaîne de deux lentilles, un rayon sorti de L₁ arrive sur L₂ incliné, sans passer par aucun foyer. Comment tracer sa suite après L₂ (convergente) ?",
    choix: ["Il ressort en passant par le foyer image F'₂", "Il ressort par le point où le rayon qui lui est parallèle, passant par O₂, coupe le plan focal image de L₂", "Il continue tout droit", "Il ressort parallèle à l'axe"],
    bonne: 1,
    explication: "Des rayons parallèles entre eux convergent en un même point du plan focal image : un foyer image secondaire.\nOn trace le rayon parallèle au rayon donné qui passe par O₂ (il n'est pas dévié). Il coupe le plan focal image en ce foyer secondaire, et le rayon donné ressort en passant par ce point.\nF'₂ ne vaut que pour un rayon parallèle à l'axe.",
    indice: "Des rayons parallèles entre eux convergent tous au même point du plan focal image. Lequel d'entre eux est facile à tracer ?",
    erreurs: { 0: { type: "notion", message: "Seuls les rayons parallèles à l'axe ressortent par F'₂. Un rayon incliné ressort par un foyer secondaire du plan focal image." } }
  },
  {
    id: "U42-155", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "L₁ est divergente : elle donne d'un objet réel une image A₁B₁ virtuelle, entre l'objet et L₁. L₂ est placée après L₁. Pour L₂, A₁B₁ est :",
    choix: ["Un objet réel : la lumière semble venir de A₁B₁, qui est avant L₂", "Un objet virtuel, puisque A₁B₁ est une image virtuelle", "Inutilisable : seule une image réelle peut servir d'objet", "Un objet à l'infini"],
    bonne: 0,
    explication: "Après L₁, les rayons s'écartent comme s'ils venaient de A₁B₁. Ils arrivent sur L₂ en venant de ce point, situé avant L₂ : c'est un objet réel pour L₂.\nRéel ou virtuel se décide pour chaque lentille, selon la place de l'objet par rapport à elle. Une image virtuelle pour L₁ peut très bien être un objet réel pour L₂.",
    indice: "Regarde où se trouve A₁B₁ par rapport à L₂, et dans quel sens arrive la lumière.",
    erreurs: { 1: { type: "notion", message: "La nature de A₁ pour L₂ dépend de sa place par rapport à L₂. A₁B₁ est avant L₂ : c'est un objet réel pour elle." } }
  },
  {
    id: "U42-156", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "B est dans le plan focal objet de L₁ : les rayons issus de B sortent de L₁ parallèles entre eux, inclinés. Où L₂ (convergente) forme-t-elle B₂ ?",
    choix: ["Sur l'axe, au foyer image F'₂", "Dans le plan focal objet de L₂", "À l'infini", "Dans le plan focal image de L₂, sur le rayon qui passe par O₂ sans être dévié"],
    bonne: 3,
    explication: "Pour L₂, B₁ est à l'infini dans une direction inclinée. Ces rayons convergent dans le plan focal image de L₂, au point où le coupe celui d'entre eux qui passe par O₂.\nChaîne : B dans le plan focal objet de L₁ → B₁ à l'infini → B₂ dans le plan focal image de L₂.\nSur l'axe en F'₂, ce ne serait vrai que pour un faisceau parallèle à l'axe.",
    indice: "Un faisceau parallèle incliné converge dans le plan focal image, mais pas forcément sur l'axe. Quel rayon du faisceau est facile à suivre ?",
    erreurs: { 0: { type: "notion", message: "Le faisceau est incliné : il converge dans le plan focal image, mais hors de l'axe, sur le rayon qui passe par O₂." } }
  },

  // ---------- Loupe et microscope ----------
  {
    id: "U42-008", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2018",
    question: "Une loupe a une distance focale f' = 50 mm. Quel est son grossissement commercial Gc ?",
    choix: ["Gc = 2", "Gc = 5", "Gc = 12,5", "Gc = 20"],
    bonne: 1,
    explication: "Gc = P / 4, avec P la puissance (ici la vergence) en dioptries. P = 1 / 0,050 m = 20 δ, donc Gc = 20 / 4 = 5. Le 4 vient de la distance de référence 25 cm (1 / 0,25 = 4).",
    indice: "Commence par la puissance en dioptries (la focale doit être en mètres), puis rappelle-toi que le grossissement commercial se rapporte à une distance de 25 cm."
  },
  {
    id: "U42-009", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un fabricant annonce un oculaire « 8× » (grossissement commercial Gc = 8). Quelle est sa distance focale ?",
    choix: ["50 mm", "12,5 mm", "31,25 mm", "32 mm"],
    bonne: 2,
    explication: "Gc = P / 4 → P = 4 × 8 = 32 δ. f' = 1 / 32 = 0,03125 m = 31,25 mm. Piège : 32 est la puissance en dioptries, pas la focale.",
    indice: "Fais le chemin à l'envers : grossissement commercial → puissance en dioptries → focale. Attention à ne pas confondre une puissance (en δ) et une focale (en mm)."
  },
  {
    id: "U42-010", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2025",
    question: "Un microscope a un objectif de grandissement gy = −40 et un oculaire de grossissement commercial 10×. Quel est le grossissement commercial du microscope ?",
    choix: ["−4", "4 000", "50", "400"],
    bonne: 3,
    explication: "Gc microscope = |gy objectif| × Gc oculaire = 40 × 10 = 400. L'objectif agrandit l'objet en une image intermédiaire, l'oculaire joue le rôle de loupe sur cette image.",
    indice: "Dans un microscope, l'objectif agrandit d'abord l'objet, puis l'oculaire sert de loupe sur cette image. Les deux effets se multiplient (on prend le grandissement en valeur absolue)."
  },
  {
    id: "U42-057", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "2018 et 2025",
    type: "calcul",
    question: "Une loupe a une distance focale f' = 40 mm. Calcule son grossissement commercial.",
    reponse: { valeur: 6.25, unite: "", decimales: 2, signe: false },
    explication: "P = [[1|f']] = [[1|0,040]] = 25 δ\nGc = [[P|4]] = [[25|4]] = 6,25\nLe 4 vient de la distance de référence de 25 cm : [[1|0,25]] = 4.",
    indice: "Passe d'abord par la puissance en dioptries, avec la focale en mètres. Le grossissement commercial se rapporte à une distance de 25 cm."
  },

  // ---------- Lunettes afocales ----------
  {
    id: "U42-011", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Une lunette de Kepler a un objectif de f'ob = 120 mm et un oculaire de f'oc = 20 mm. Quel est son grossissement (en valeur absolue) ?",
    choix: ["6", "100", "140", "2,4"],
    bonne: 0,
    explication: "Pour une lunette afocale : G = f'ob / f'oc = 120 / 20 = 6. Avec Kepler (deux lentilles convergentes), l'image est renversée : G = −6, d'où le redresseur (prismes) sur les modèles terrestres.",
    indice: "Pour une lunette afocale, le grossissement ne dépend que des deux focales. Laquelle doit être grande pour bien grossir ?"
  },
  {
    id: "U42-012", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Même lunette de Kepler afocale (f'ob = 120 mm, f'oc = 20 mm). Quelle est la distance entre l'objectif et l'oculaire ?",
    choix: ["120 mm", "140 mm", "2 400 mm", "100 mm"],
    bonne: 1,
    explication: "Afocale = le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. La longueur vaut donc f'ob + f'oc = 120 + 20 = 140 mm.",
    indice: "Une lunette afocale transforme un faisceau parallèle en faisceau parallèle. Quel foyer de l'objectif doit alors coïncider avec quel foyer de l'oculaire ?",
    schema: "img/schemas/U42/kepler-afocale-120-20.svg",
    schemaTexte: "Lunette de Kepler : les rayons parallèles convergent au foyer image de l'objectif, confondu avec le foyer objet de l'oculaire, puis ressortent parallèles. Distance entre les lentilles : 120 + 20 mm."
  },
  {
    id: "U42-013", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2018",
    question: "Lunette de Galilée afocale : objectif convergent f'₁ = 90 mm, oculaire divergent f'₂ = −30 mm. Quelle distance entre les deux lentilles ?",
    choix: ["120 mm", "30 mm", "60 mm", "90 mm"],
    bonne: 2,
    explication: "Comme pour Kepler, F'₁ = F₂, donc O₁O₂ = f'₁ + f'₂ = 90 + (−30) = 60 mm. La Galilée est plus courte. G = −f'₁/f'₂ = 3, positif : l'image est droite, pas besoin de redresseur.",
    indice: "Comme pour Kepler, le foyer image de l'objectif est confondu avec le foyer objet de l'oculaire. Mais ici l'oculaire est divergent : garde le signe de sa focale.",
    schema: "img/schemas/U42/galilee-afocale-90-30.svg",
    schemaTexte: "Lunette de Galilée : les rayons parallèles visent le foyer F'₁, confondu avec le foyer objet F₂ de l'oculaire divergent, et ressortent parallèles. L'oculaire est à 90 − 30 = 60 mm de l'objectif."
  },
  {
    id: "U42-014", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023",
    question: "Un client malvoyant a une acuité de loin de 1,5/10. On lui propose une lunette de grossissement 6×. Quelle acuité peut-il espérer avec la lunette ?",
    choix: ["10/10", "1,5/10", "6/10", "9/10"],
    bonne: 3,
    explication: "En aide visuelle, on estime : AV avec l'instrument = AV du client × G = 1,5/10 × 6 = 9/10. Il faut ensuite comparer à l'acuité demandée par la tâche (lire un panneau, un prix…).",
    indice: "En basse vision, l'aide visuelle multiplie l'acuité du client par son grossissement. Calcule, puis vérifie que le résultat reste réaliste."
  },
  {
    id: "U42-015", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "2026",
    question: "Dans une lunette terrestre, un véhicule redresseur (lentille mince f'V = 25 mm) donne une image de même taille et renversée (gy = −1). De combien allonge-t-il la lunette ?",
    choix: ["100 mm", "25 mm", "50 mm", "75 mm"],
    bonne: 0,
    explication: "gy = −1 : l'objet est à 2f' avant la lentille (−50 mm) et l'image à 2f' après (+50 mm). L'image intermédiaire est donc déplacée de 50 + 50 = 100 mm, soit 4 × f'V.",
    indice: "Avec un grandissement de −1, l'objet et l'image sont à la même distance de la lentille, de part et d'autre. Laquelle ? Pense au cas « 2f' »."
  },
  {
    id: "U42-058", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "2023 et 2026",
    type: "calcul",
    question: "Lunette de Kepler afocale : objectif de f'ob = 200 mm, oculaire de f'oc = 25 mm. Calcule son grossissement, avec son signe.",
    reponse: { valeur: -8, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: -0.125, type: "notion", message: "Tu as divisé la focale de l'oculaire par celle de l'objectif. C'est l'inverse : focale de l'objectif sur focale de l'oculaire." },
      { valeur: 8, type: "signe", message: "Une lunette de Kepler renverse l'image : G = −f'ob / f'oc est négatif." }
    ],
    explication: "G = −[[f'ob|f'oc]] = −[[200|25]] = −8\nLe signe moins indique une image renversée : c'est le cas de toute lunette de Kepler sans redresseur.",
    indice: "Pour une lunette afocale, le grossissement est le rapport des deux focales. Demande-toi si l'image d'une lunette de Kepler est droite ou renversée."
  },

  // ---------- Doublets et achromatisme ----------
  {
    id: "U42-016", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2025",
    question: "Un oculaire est formé de deux lentilles minces convergentes de f'₁ = f'₂ = 40 mm, séparées de e = 30 mm. Quelle est sa distance focale image ?",
    choix: ["20 mm", "32 mm", "40 mm", "80 mm"],
    bonne: 1,
    explication: "Formule du doublet : f' = f'₁ × f'₂ / (f'₁ + f'₂ − e) = 40 × 40 / (40 + 40 − 30) = 1 600 / 50 = 32 mm. (Ou en vergences : V = V₁ + V₂ − e·V₁·V₂.)",
    indice: "Formule du doublet (Gullstrand) : f' = f'₁·f'₂ / (f'₁ + f'₂ − e). Remplace avec les valeurs en mm, sans te tromper dans le dénominateur.",
    schema: "img/schemas/U42/doublet-40-40-e30.svg",
    schemaTexte: "Un rayon parallèle traverse L₁, se dirige vers F'₁, puis L₂ le fait couper l'axe en F', 8 mm après L₂. En prolongeant les rayons, on trouve le plan principal H', et f' = H'F' = 32 mm."
  },
  {
    id: "U42-017", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un doublet a pour symbole (3 ; 2 ; 1) avec a = 10 mm. Quelle est sa distance focale image ?",
    choix: ["60 mm", "7,5 mm", "15 mm", "20 mm"],
    bonne: 2,
    explication: "Symbole (m ; n ; p) : f'₁ = m·a = 30 mm, e = n·a = 20 mm, f'₂ = p·a = 10 mm. f' = 30 × 10 / (30 + 10 − 20) = 300 / 20 = 15 mm.",
    indice: "Le symbole (m ; n ; p) donne, dans l'ordre, f'₁, l'écart e et f'₂ en multiples de a. Calcule les trois longueurs, puis applique la formule du doublet."
  },
  {
    id: "U42-018", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2026",
    question: "Un téléobjectif associe une lentille convergente puis une divergente. Quel est son principal intérêt par rapport à une lentille unique de même focale ?",
    choix: ["Il supprime la diffraction", "Il redresse l'image", "Il donne une image plus lumineuse", "Il est plus court : la distance 1re lentille → foyer image est inférieure à la focale"],
    bonne: 3,
    explication: "Le plan principal image est rejeté en avant de la première lentille. On obtient une grande focale f' dans un tube nettement plus court que f' : c'est tout l'intérêt du téléobjectif, il est moins encombrant.",
    indice: "Compare la longueur du tube (de la première lentille au capteur) à la focale de l'objectif. Qu'est-ce que le photographe y gagne ?"
  },
  {
    id: "U42-019", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "On veut un doublet achromatique accolé de vergence V = +2 δ, avec un verre de nombre d'Abbe ν₁ = 60 et un verre ν₂ = 30. Quelles vergences V₁ et V₂ ?",
    choix: ["V₁ = +4 δ ; V₂ = −2 δ", "V₁ = −2 δ ; V₂ = +4 δ", "V₁ = +3 δ ; V₂ = −1 δ", "V₁ = +1 δ ; V₂ = +1 δ"],
    bonne: 0,
    explication: "Deux conditions : V₁ + V₂ = 2 et V₁/ν₁ + V₂/ν₂ = 0 (achromatisme). V₁/60 = −V₂/30 → V₁ = −2·V₂. Donc −2V₂ + V₂ = 2 → V₂ = −2 δ et V₁ = +4 δ. La lentille convergente est dans le verre le moins dispersif (ν le plus grand).",
    indice: "Deux équations : les vergences s'additionnent (lentilles accolées), et la somme V/ν doit être nulle pour supprimer le chromatisme. Résous ce petit système."
  },
  {
    id: "U42-020", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "2019",
    question: "Un verre a les indices nd = 1,500, nF = 1,505 et nC = 1,497. Quel est son nombre d'Abbe ?",
    choix: ["0,008", "62,5", "100", "187,5"],
    bonne: 1,
    explication: "ν = (nd − 1) / (nF − nC) = 0,500 / 0,008 = 62,5. Plus ν est grand, moins le verre disperse les couleurs. Un verre « ED » (Extra low Dispersion) a un ν très élevé (souvent > 80).",
    indice: "Le nombre d'Abbe compare l'écart à l'air (nd − 1) à l'écart entre le bleu et le rouge (nF − nC). Un grand nombre veut dire peu de dispersion."
  },
  {
    id: "U42-059", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "2025 et 2026",
    type: "calcul",
    question: "Doublet de deux lentilles minces : f'₁ = 60 mm, f'₂ = 30 mm, séparées de e = 40 mm. Calcule sa distance focale image f'.",
    reponse: { valeur: 36, unite: "mm", decimales: 0, signe: true },
    surLaCopie: "Gullstrand : f' = [[f'₁ × f'₂|f'₁ + f'₂ − e]] = [[60 × 30|60 + 30 − 40]] = [[1 800|50]] = 36 mm\nLe doublet est convergent, de distance focale image 36 mm.",
    explication: "Formule de Gullstrand : f' = [[f'₁ × f'₂|f'₁ + f'₂ − e]]\nf' = [[60 × 30|60 + 30 − 40]] = [[1 800|50]] = 36 mm\nLe doublet a une distance focale image de 36 mm.",
    indice: "Formule du doublet (Gullstrand) : le produit des deux focales, divisé par leur somme diminuée de l'écart e."
  },

  // ---------- Champs et diaphragmes (tombé 8 années sur 8) ----------
  {
    id: "U42-021", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022",
    question: "Qu'appelle-t-on la pupille d'entrée d'un système optique ?",
    choix: ["La pupille de l'œil de l'observateur", "La première lentille du système", "L'image du diaphragme d'ouverture par la partie du système placée avant lui", "L'image du diaphragme de champ par tout le système"],
    bonne: 2,
    explication: "La pupille d'entrée est l'image du diaphragme d'ouverture « vue depuis l'objet », à travers les lentilles qui le précèdent. La pupille de sortie est son image par les lentilles qui le suivent.",
    indice: "Il y a deux diaphragmes importants : celui d'ouverture (la lumière) et celui de champ (l'étendue). La pupille d'entrée, c'est l'un des deux « vu depuis l'objet »."
  },
  {
    id: "U42-022", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Dans l'espace d'étude : pupille de rayon 6 mm en x = 0, diaphragme de champ de rayon 4 mm en x = 20 mm, plan des champs en x = 40 mm. Rayon du champ de pleine lumière ?",
    choix: ["4 mm", "8 mm", "14 mm", "2 mm"],
    bonne: 3,
    explication: "Pleine lumière : droite passant par les bords DU MÊME CÔTÉ de la pupille (0 ; 6) et du diaphragme (20 ; 4). Pente = (4 − 6)/20 = −0,1. En x = 40 : r = 6 − 0,1 × 40 = 2 mm. (Champ moyen, par le centre de la pupille : 8 mm ; champ total, bords opposés : 14 mm.)",
    indice: "Pour la pleine lumière, trace la droite qui passe par les bords DU MÊME CÔTÉ de la pupille et du diaphragme de champ, puis prolonge-la jusqu'au plan des champs.",
    schema: "img/schemas/U42/champs-pleine-lumiere-6-4.svg",
    schemaTexte: "Trois droites partent de la pupille et passent par le bord du diaphragme : bords du même côté (pleine lumière, 2 mm), centre de la pupille (champ moyen, 8 mm), bords opposés (champ total, 14 mm)."
  },
  {
    id: "U42-023", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2024",
    question: "Un fabricant place un diaphragme dans le plan de l'image intermédiaire (plan des champs), avec un diamètre égal (ou très légèrement inférieur) au champ de pleine lumière. À quoi sert-il ?",
    choix: ["À supprimer le champ de contour : bord du champ net, éclairement uniforme", "À réduire la diffraction", "À redresser l'image", "À augmenter la luminosité"],
    bonne: 0,
    explication: "Le champ de contour est la zone du bord où l'éclairement baisse progressivement (vignettage). Un diaphragme dans le plan des champs le coupe net : on ne voit que la zone de pleine lumière, avec un bord franc.",
    indice: "Au bord du champ, l'éclairement baisse peu à peu : c'est le champ de contour. Un diaphragme placé net dans le plan de l'image agit sur ce bord."
  },
  {
    id: "U42-024", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2026",
    question: "Un capteur photo mesure 18 × 24 mm. Le rayon du champ de pleine lumière image est 14 mm. Le capteur est-il éclairé uniformément ?",
    choix: ["Oui, car 14 mm > 12 mm (demi-largeur)", "Non, la demi-diagonale (15 mm) dépasse 14 mm : coins assombris", "Non, il faudrait 24 mm", "Oui, car 14 mm > 9 mm (demi-hauteur)"],
    bonne: 1,
    explication: "Il faut comparer la DEMI-DIAGONALE : √(18² + 24²) = √900 = 30 mm, la moitié = 15 mm. Comme 15 > 14 mm, les coins sortent du champ de pleine lumière : vignettage.",
    indice: "Un rectangle n'est entièrement dans un cercle que si ses quatre coins y sont. Quelle est la distance entre le centre du capteur et un coin ?",
    schema: "img/schemas/U42/capteur-18x24-cercle14.svg",
    schemaTexte: "Capteur rectangulaire 18 × 24 mm centré dans un cercle de rayon 14 mm : la demi-diagonale mesure 15 mm, les quatre coins dépassent du cercle et sont assombris."
  },
  {
    id: "U42-025", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2023",
    question: "Une lunette a un objectif de f'ob = 60 mm. Dans son plan focal, le champ de pleine lumière a un rayon de 3 mm. Quelle largeur de champ voit-on sur un bateau à 50 m ?",
    choix: ["1,25 m", "2,5 m", "5 m", "10 m"],
    bonne: 2,
    explication: "Demi-champ angulaire : tan ω = 3 / 60 = 0,05. À 50 m, demi-largeur = 50 × 0,05 = 2,5 m, donc largeur totale 2 × 2,5 = 5 m. Piège : ne pas oublier de doubler.",
    indice: "Le rayon dans le plan focal et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 50 m, et n'oublie pas de doubler."
  },
  {
    id: "U42-045", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022 et 2023",
    question: "Consigne du sujet : « Montrer que le rayon du champ de pleine lumière vaut 3 mm. » Pupille de rayon 9 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 40 mm, plan des champs en x = 60 mm. Quelle démarche est juste ?",
    choix: [
      "Droite par les bords du même côté, (0 ; 9) et (40 ; 5) : pente = (5 − 9)/40 = −0,1. En x = 60 : 9 − 0,1 × 60 = 3 mm. Le rayon du champ de pleine lumière vaut bien 3 mm.",
      "Droite par le centre de la pupille (0 ; 0) et le bord du diaphragme (40 ; 5) : pente = 5/40 = 0,125. En x = 60 : 0,125 × 60 = 7,5 mm. Le rayon du champ vaut 7,5 mm.",
      "Sur le schéma, le rayon tracé arrive à 3 mm de l'axe dans le plan des champs. Le rayon du champ de pleine lumière vaut donc bien 3 mm.",
      "Droite par les bords du même côté, (0 ; 9) et (40 ; 5) : pente = (5 − 9)/40 = −0,1. L'équation de la droite est y = 9 − 0,1 x."
    ],
    bonne: 0,
    surLaCopie: "Plan des champs (x = 60) au-delà du diaphragme (x = 40) : bords du même côté, (0 ; 9) et (40 ; 5). Pente = [[5 − 9|40]] = −0,1\nEn x = 60 : r = 9 − 0,1 × 60 = 3 mm\nLe champ de pleine lumière a bien un rayon de 3 mm.",
    explication: "Dans un « Montrer que », la valeur est donnée : les points sont pour la méthode, le calcul et la conclusion. Ici le plan des champs (x = 60) est au-delà du diaphragme (x = 40) : la droite de pleine lumière passe par les bords du même côté. Pente −0,1, donc en x = 60 : 9 − 6 = 3 mm. La droite par le centre de la pupille donne le champ moyen (7,5 mm). Lire la valeur sur le schéma ne démontre rien. S'arrêter à l'équation de la droite ne répond pas à la consigne.",
    indice: "Trois temps : quelle droite (et pourquoi celle-là), le calcul jusqu'au plan des champs, puis la phrase qui répond à la consigne."
  },
  {
    id: "U42-046", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2025",
    question: "Copie d'un élève : « Pupille de rayon 2 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 100 mm, plan des champs en x = 80 mm. Pleine lumière : bords du même côté, (0 ; 2) et (100 ; 5). En x = 80 : 2 + 0,03 × 80 = 4,4 mm. » Où est l'erreur ?",
    choix: [
      "Il fallait passer par le centre de la pupille : on trouve 4 mm",
      "Le plan des champs est entre la pupille et le diaphragme : il fallait les bords opposés, on trouve 3,6 mm",
      "Le calcul est faux : 2 + 0,03 × 80 = 4,8 mm",
      "Il n'y a pas d'erreur : la pleine lumière, c'est toujours les bords du même côté"
    ],
    bonne: 1,
    surLaCopie: "Plan des champs entre la pupille et le diaphragme : bords opposés, (0 ; −2) et (100 ; 5). Pente = [[7|100]] = 0,07\nEn x = 80 : r = −2 + 0,07 × 80 = 3,6 mm\nLe champ de pleine lumière a un rayon de 3,6 mm (4,4 mm est le champ total).",
    explication: "Ici le plan des champs (x = 80) est ENTRE la pupille (x = 0) et le diaphragme de champ (x = 100). Les rayons se croisent dans ce plan avant d'atteindre le diaphragme : celui qui limite la pleine lumière joint les bords opposés, (0 ; −2) et (100 ; 5). Pente = 7/100 = 0,07, donc en x = 80 : −2 + 0,07 × 80 = 3,6 mm. Les 4,4 mm de la copie sont la limite du champ total. Méthode sûre : trace les deux droites qui s'appuient sur les bords ; celle qui donne le plus petit champ limite la pleine lumière. La règle « bords du même côté » vaut quand le plan des champs est en dehors de l'intervalle pupille-diaphragme, le cas le plus fréquent.",
    indice: "Regarde où se trouve le plan des champs par rapport à la pupille et au diaphragme de champ. Les rayons se croisent-ils avant d'atteindre le diaphragme ?",
    schema: "img/schemas/U42/champs-plan-entre-pupille-diaphragme.svg",
    schemaTexte: "Pupille de rayon 2 mm, diaphragme de champ de rayon 5 mm, plan des champs placé entre les deux. Le faisceau converge en B puis s'ouvre jusqu'au diaphragme : la droite par les bords opposés donne 3,6 mm (pleine lumière), celle par les bords du même côté 4,4 mm (champ total)."
  },
  {
    id: "U42-047", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2022 et 2026",
    question: "Un capteur mesure 6 × 8 mm. Le champ de pleine lumière image a un rayon de 5,5 mm. Consigne du sujet : « Le capteur est-il éclairé uniformément ? Justifier. » Quelle réponse est complète et juste ?",
    choix: [
      "Diagonale du capteur : √(6² + 8²) = 10 mm. Elle est plus grande que le rayon du champ (5,5 mm) : les coins sont assombris, le capteur n'est pas éclairé uniformément.",
      "Oui : le capteur est entièrement dans le champ de pleine lumière, il est donc éclairé uniformément.",
      "Demi-diagonale du capteur : √(3² + 4²) = 5 mm. Elle est plus petite que le rayon du champ (5,5 mm) : même les coins sont en pleine lumière, le capteur est éclairé uniformément.",
      "La demi-diagonale du capteur vaut √(3² + 4²) = 5 mm et le rayon du champ de pleine lumière vaut 5,5 mm."
    ],
    bonne: 2,
    surLaCopie: "Demi-diagonale du capteur : √(3² + 4²) = 5 mm. Rayon du champ de pleine lumière : 5,5 mm.\n5 mm < 5,5 mm : même les coins sont en pleine lumière, le capteur est éclairé uniformément.",
    explication: "On compare ce qui est comparable : la distance du centre à un coin (la demi-diagonale) et le RAYON du champ. √(3² + 4²) = 5 mm, plus petit que 5,5 mm : même les coins reçoivent toute la lumière. Comparer la diagonale entière (10 mm) au rayon est faux : il faudrait la comparer au diamètre (11 mm). Répondre « oui » sans chiffre ne justifie rien. Donner les deux chiffres sans conclure ne répond pas à la question.",
    indice: "Quel point du capteur est le plus éloigné du centre ? Compare cette distance au rayon du champ, sans oublier la phrase de conclusion."
  },
  {
    id: "U42-060", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2023 et 2024",
    type: "calcul",
    question: "Dans l'espace d'étude : pupille de rayon 10 mm en x = 0, diaphragme de champ de rayon 6 mm en x = 40 mm, plan des champs en x = 60 mm. Calcule le rayon du champ de pleine lumière.",
    reponse: { valeur: 4, unite: "mm", decimales: 0, signe: false },
    surLaCopie: "Plan des champs au-delà du diaphragme : bords du même côté, (0 ; 10) et (40 ; 6). Pente = [[6 − 10|40]] = −0,1\nEn x = 60 : r = 10 − 0,1 × 60 = 4 mm\nLe champ de pleine lumière a un rayon de 4 mm.",
    explication: "Le plan des champs (x = 60) est au-delà du diaphragme (x = 40) : on prend la droite par les bords du même côté, (0 ; 10) et (40 ; 6).\nPente = [[6 − 10|40]] = −0,1\nEn x = 60 : 10 − 0,1 × 60 = 4 mm.\nPour comparer : champ moyen 9 mm, champ total 14 mm.",
    indice: "Écris l'équation de la droite appuyée sur les deux bords du même côté, puis prolonge-la jusqu'au plan des champs."
  },
  {
    id: "U42-061", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018 et 2023",
    type: "calcul",
    question: "Une lunette a un objectif de f'ob = 100 mm. Dans son plan focal image, le champ de pleine lumière a un rayon de 4 mm. Calcule la largeur du champ de pleine lumière sur un objet situé à 30 m.",
    reponse: { valeur: 2.4, unite: "m", decimales: 1, signe: false },
    erreurs: [
      { valeur: 1.2, type: "notion", message: "C'est la demi-largeur du champ. La focale et le rayon donnent un demi-angle : double pour avoir la largeur." }
    ],
    surLaCopie: "tan ω = [[4|100]] = 0,04. À 30 m, la demi-largeur vaut 30 × 0,04 = 1,2 m.\nLa largeur du champ de pleine lumière est 2 × 1,2 = 2,4 m.",
    explication: "tan ω = [[4|100]] = 0,04\nÀ 30 m : demi-largeur = 30 × 0,04 = 1,2 m\nLargeur = 2 × 1,2 = 2,4 m. Piège : ne pas oublier de doubler.",
    indice: "Le rayon du champ et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 30 m. On demande une largeur, pas une demi-largeur."
  },

  // ---------- Ouverture et résolution ----------
  {
    id: "U42-026", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un téléobjectif de focale 400 mm est ouvert à f/8 (nombre d'ouverture N = 8). Quel est le diamètre de sa pupille d'entrée ?",
    choix: ["3 200 mm", "8 mm", "25 mm", "50 mm"],
    bonne: 3,
    explication: "N = f' / D_PE → D_PE = 400 / 8 = 50 mm. Rappel : plus N est petit, plus la pupille est grande, plus il entre de lumière.",
    indice: "Le nombre d'ouverture est le rapport de la focale au diamètre de la pupille d'entrée. Isole le diamètre."
  },
  {
    id: "U42-027", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Un objectif a une pupille d'entrée de 10 mm. Limite de résolution angulaire due à la diffraction pour λ = 500 nm ?",
    choix: ["6,1 × 10⁻⁵ rad", "1,2 × 10⁻⁴ rad", "6,1 × 10⁻² rad", "5,0 × 10⁻⁵ rad"],
    bonne: 0,
    explication: "α = 1,22 × λ / D = 1,22 × 500 × 10⁻⁹ / 10 × 10⁻³ = 1,22 × 5 × 10⁻⁵ = 6,1 × 10⁻⁵ rad. Piège : mettre λ et D dans la même unité (mètres).",
    indice: "Utilise α = 1,22 λ / D, avec λ et D dans la même unité (mètres). Le résultat est en radians."
  },
  {
    id: "U42-028", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Une bijoutière utilise une loupe de puissance P = 12,5 δ. La limite de résolution angulaire de son œil est 3 × 10⁻⁴ rad. Quel est le plus petit détail qu'elle peut distinguer sur l'objet ?",
    choix: ["2,4 µm", "24 µm", "240 µm", "2,4 mm"],
    bonne: 1,
    explication: "Puissance P = α' / y (angle de l'image en rad par taille de l'objet en m). Donc y = ε / P = 3 × 10⁻⁴ / 12,5 = 2,4 × 10⁻⁵ m = 24 µm.",
    indice: "La puissance relie l'angle sous lequel on voit l'image à la taille de l'objet : P = α' / y. L'œil sépare au mieux un angle de 3 × 10⁻⁴ rad."
  },
  {
    id: "U42-029", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2026",
    question: "Un appareil photo a des pixels de 5 µm et un objectif de focale 250 mm. Quelle est la limite de résolution angulaire due au capteur ?",
    choix: ["2 × 10⁻² rad", "1,25 × 10⁻³ rad", "2 × 10⁻⁵ rad", "5 × 10⁻⁶ rad"],
    bonne: 2,
    explication: "Au BTS, on admet que la limite due au capteur correspond à la taille d'un pixel vue depuis l'objectif : α = a' / f' = 5 × 10⁻⁶ / 0,250 = 2 × 10⁻⁵ rad. Si la diffraction donne une limite plus petite (ex. 1 × 10⁻⁵ rad), c'est le capteur qui limite : c'est toujours la plus grande des deux limites qui l'emporte.",
    indice: "Le capteur ne sépare pas deux points dont les images tombent sur le même pixel. Quel angle représente la taille d'un pixel vue depuis l'objectif ? Mets tout en mètres."
  },
  {
    id: "U42-030", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "2024",
    question: "Avec un instrument, le plus petit détail séparable vaut 8 µm à cause de la diffraction et 12 µm à cause de l'œil. Peut-on séparer deux traits distants de 10 µm ?",
    choix: ["Non, c'est la diffraction qui limite à 8 µm", "Oui, car 10 µm > 8 µm", "Oui, en moyenne la limite est 10 µm", "Non, c'est l'œil qui limite à 12 µm"],
    bonne: 3,
    explication: "La limite de l'ensemble est la PLUS GRANDE des deux : ici l'œil (12 µm). 10 µm < 12 µm, donc les deux traits ne sont pas séparés.",
    indice: "Quand deux causes limitent la résolution, c'est la plus sévère qui commande. Compare ensuite l'écart entre les traits à cette limite."
  },
  {
    id: "U42-062", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "2018 et 2024",
    type: "calcul",
    question: "Un objectif a une pupille d'entrée de diamètre 20 mm. Pour λ = 550 nm, la diffraction limite sa résolution à α = 1,22 λ / D. Calcule le plus petit détail qu'il sépare sur un objet situé à 50 m.",
    reponse: { valeur: 1.7, unite: "mm", decimales: 1, tolerance: 0.06, signe: false },
    erreurs: [
      { valeur: 1.4, type: "notion", message: "Il manque le facteur 1,22 de la formule. α = 1,22 λ / D." },
      { valeur: 0.0017, type: "unite", message: "Tu as laissé le résultat en mètres : 1,7 × 10⁻³ m = 1,7 mm. Convertis en millimètres (× 1 000)." }
    ],
    surLaCopie: "α = [[1,22 × λ|D]] = [[1,22 × 550 × 10⁻⁹|0,020]] ≈ 3,36 × 10⁻⁵ rad\nÀ 50 m : détail = α × 50 ≈ 1,7 mm.",
    explication: "Tout en mètres : α = [[1,22 × λ|D]]\nα = [[1,22 × 550 × 10⁻⁹|0,020]] ≈ 3,36 × 10⁻⁵ rad\nÀ 50 m : détail = α × 50 ≈ 1,68 × 10⁻³ m, soit environ 1,7 mm.\nPiège : les nanomètres et les millimètres doivent être convertis en mètres avant de diviser.",
    indice: "Calcule d'abord l'angle limite en radians, avec λ et D en mètres. Un angle petit multiplié par une distance donne une longueur."
  },

  // ---------- Transmission et antireflet ----------
  {
    id: "U42-031", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Quel pourcentage de lumière est réfléchi par un dioptre air / verre d'indice 1,5 en incidence normale ?",
    choix: ["4 %", "8 %", "20 %", "1,5 %"],
    bonne: 0,
    explication: "R = ((n − 1)/(n + 1))² = (0,5 / 2,5)² = 0,2² = 0,04, soit 4 %. Le dioptre transmet donc T = 1 − R = 96 %.",
    indice: "En incidence normale, R = ((n − 1)/(n + 1))². Calcule le rapport avant de l'élever au carré."
  },
  {
    id: "U42-032", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Un viseur compte 4 lentilles non traitées dans l'air (T = 0,96 par dioptre). Quelle est sa transmission totale ?",
    choix: ["80 %", "72 %", "68 %", "96 %"],
    bonne: 1,
    explication: "4 lentilles = 8 dioptres. T totale = 0,96⁸ ≈ 0,72, soit 72 %. Piège : ce n'est pas 1 − 8 × 0,04 = 68 %, on multiplie les transmissions.",
    indice: "Compte d'abord les dioptres (combien par lentille ?). Les transmissions successives se multiplient, elles ne se soustraient pas."
  },
  {
    id: "U42-033", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2024",
    question: "Quel est le principe d'un traitement antireflet monocouche ?",
    choix: ["Augmenter l'indice du verre", "Absorber la lumière réfléchie", "Faire interférer de façon destructive les deux ondes réfléchies (sur la couche et sur le verre)", "Polariser la lumière réfléchie"],
    bonne: 2,
    explication: "Les ondes réfléchies sur la face avant de la couche et sur le verre doivent être en opposition de phase (différence de marche λ/2) et de même intensité. Elles s'annulent : la lumière n'est plus réfléchie, elle est transmise.",
    indice: "Un antireflet est une couche très mince. Deux reflets se forment : un sur la couche, un sur le verre. Que peuvent faire deux ondes qui se superposent ?"
  },
  {
    id: "U42-034", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Pour un verre d'indice 1,69, quel est l'indice théorique idéal de la couche antireflet ?",
    choix: ["1,50", "1,69", "0,845", "1,30"],
    bonne: 3,
    explication: "Pour que les deux réflexions aient la même intensité : n_ar = √n_verre = √1,69 = 1,30.",
    indice: "Pour que les deux reflets s'annulent, ils doivent avoir la même intensité. L'indice de la couche est alors « entre » celui de l'air et celui du verre, au sens d'une racine."
  },
  {
    id: "U42-035", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023",
    question: "Une couche antireflet d'indice 1,30 est optimisée pour λ = 520 nm. Quelle est son épaisseur minimale ?",
    choix: ["100 nm", "130 nm", "200 nm", "400 nm"],
    bonne: 0,
    explication: "Aller-retour dans la couche = 2·n·e = λ/2, donc e = λ / (4·n_ar) = 520 / (4 × 1,30) = 520 / 5,2 = 100 nm. Utiliser l'indice de la COUCHE, pas celui du verre.",
    indice: "La lumière fait un aller-retour dans la couche. Ce trajet, multiplié par l'indice de la couche, doit valoir une demi-longueur d'onde.",
    schema: "img/schemas/U42/antireflet-couche-130-520nm.svg",
    schemaTexte: "Un rayon se réfléchit une fois sur la couche et une fois sur le verre. Les deux reflets sont décalés d'une demi-longueur d'onde : ils s'annulent. Épaisseur e = 520 / (4 × 1,30) = 100 nm."
  },
  {
    id: "U42-063", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "2023 et 2024",
    type: "calcul",
    question: "Un instrument compte 5 lentilles non traitées dans l'air (T = 0,96 par face). Calcule sa transmission totale, en pourcentage.",
    reponse: { valeur: 66, unite: "%", decimales: 0, signe: false },
    erreurs: [
      { valeur: 60, type: "notion", message: "Tu as retiré 4 % par face. Les transmissions se multiplient : T totale = 0,96 puissance le nombre de faces." },
      { valeur: 82, type: "notion", message: "Tu as compté 5 faces. Chaque lentille a deux faces : la lumière en traverse 10." },
      { valeur: 80, type: "notion", message: "Tu as retiré 4 % pour 5 faces. Chaque lentille a deux faces, et les transmissions se multiplient : 0,96 puissance 10." }
    ],
    surLaCopie: "5 lentilles, donc 10 faces : T = 0,96¹⁰ ≈ 0,665\nLa transmission totale est d'environ 66 %.",
    explication: "5 lentilles = 10 faces. T totale = 0,96¹⁰ ≈ 0,665, soit environ 66 %. Piège : ce n'est pas 1 − 10 × 0,04 = 60 %, car les transmissions se multiplient.",
    indice: "Compte les faces traversées (combien par lentille ?). Les transmissions successives se multiplient, elles ne se soustraient pas."
  },

  // ---------- Interférences et réseaux ----------
  {
    id: "U42-036", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "2025",
    question: "Un film de savon d'indice 1,33 est éclairé en réflexion sous incidence nulle (δ = 2ne + λ/2). Épaisseur minimale pour renforcer au maximum λ = 532 nm ?",
    choix: ["50 nm", "100 nm", "200 nm", "400 nm"],
    bonne: 1,
    explication: "Maximum si δ = kλ : 2ne + λ/2 = λ (k = 1) → 2ne = λ/2 → e = λ / (4n) = 532 / 5,32 = 100 nm. C'est ce qui donne les couleurs irisées des bulles de savon ou des taches d'huile.",
    indice: "Un maximum en réflexion demande δ = kλ. Prends le plus petit k possible, puis isole l'épaisseur e."
  },
  {
    id: "U42-037", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Un réseau a 500 traits par mm. Éclairé en incidence normale, à quel angle voit-on la lumière de 600 nm dans l'ordre 1 ?",
    choix: ["0,3°", "8,6°", "17,5°", "36,9°"],
    bonne: 2,
    explication: "Pas a = 1/500 mm = 2 µm. Formule des réseaux : a × sin i' = k × λ → sin i' = 0,6 / 2 = 0,3 → i' ≈ 17,5°. (36,9° serait l'ordre 2.)",
    indice: "Calcule d'abord le pas a (en µm) à partir du nombre de traits par mm, puis utilise a × sin i' = k × λ avec k = 1.",
    schema: "img/schemas/U42/reseau-500-traits-600nm.svg",
    schemaTexte: "Le faisceau traverse le réseau : l'ordre 0 continue tout droit, les ordres ±1 partent à 17,5° de part et d'autre, les ordres ±2 à 36,9°."
  },
  {
    id: "U42-038", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "2026",
    question: "Réseau de pas a = 2 µm, lumière blanche de 400 à 800 nm, incidence normale. Quel est l'ordre le plus élevé où le spectre est encore complet ?",
    choix: ["4", "5", "1", "2"],
    bonne: 3,
    explication: "Il faut sin i' = kλ/a ≤ 1 pour TOUTES les couleurs, donc pour le rouge : k ≤ a / λ rouge = 2 / 0,8 = 2,5. L'ordre complet le plus élevé est k = 2.",
    indice: "Un spectre d'ordre k est complet si TOUTES ses couleurs existent, donc si sin i' ≤ 1 même pour la plus grande longueur d'onde."
  },

  // ---------- Polarisation ----------
  {
    id: "U42-039", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "2019",
    question: "Lumière naturelle à travers deux polariseurs parfaits dont les directions font 60°. Quelle fraction de la lumière sort ?",
    choix: ["12,5 %", "6,25 %", "50 %", "25 %"],
    bonne: 0,
    explication: "Le 1er polariseur laisse passer la moitié de la lumière naturelle : 50 %. Puis loi de Malus : × cos²60° = × 0,25. Total = 0,5 × 0,25 = 0,125, soit 12,5 %.",
    indice: "Deux étapes : que fait le premier polariseur à une lumière naturelle, non polarisée ? Ensuite, applique la loi de Malus au second polariseur.",
    schema: "img/schemas/U42/malus-deux-polariseurs-60.svg",
    schemaTexte: "La lumière naturelle traverse un premier polariseur vertical, qui en laisse passer la moitié, puis un second polariseur tourné de 60°, qui en garde cos² 60°, soit un quart."
  },
  {
    id: "U42-040", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "2022",
    question: "Pour quel angle d'incidence la lumière réfléchie par la surface d'un lac (n = 1,33) est-elle totalement polarisée (angle de Brewster) ?",
    choix: ["48,8°", "53,1°", "60°", "36,9°"],
    bonne: 1,
    explication: "tan iB = n = 1,33 → iB ≈ 53,1°. À cet angle, rayons réfléchi et réfracté sont perpendiculaires (i + r = 90°). Des lunettes polarisantes bien orientées éteignent alors le reflet de l'eau. (48,8° est l'angle limite de réflexion totale, un autre phénomène ; 36,9° est l'angle de réfraction.)",
    indice: "À l'incidence de Brewster, le rayon réfléchi et le rayon réfracté sont perpendiculaires. Une relation trigonométrique simple relie alors cet angle à l'indice de l'eau.",
    schema: "img/schemas/U42/brewster-lac-133.svg",
    schemaTexte: "Rayon arrivant sur l'eau sous 53,1° de la normale : le rayon réfléchi et le rayon réfracté, à 36,9°, forment un angle droit. Le reflet est totalement polarisé."
  },

  // ---------- Photométrie ----------
  {
    id: "U42-041", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "2024",
    question: "Une lampe de travail donne 8 000 lx à 30 cm (incidence normale). Quel éclairement donne-t-elle à 60 cm ?",
    choix: ["16 000 lx", "1 000 lx", "2 000 lx", "4 000 lx"],
    bonne: 2,
    explication: "Loi de Bouguer : E = I / d². I = 8 000 × 0,3² = 720 cd. À 0,6 m : E = 720 / 0,36 = 2 000 lx. Distance × 2 → éclairement ÷ 4.",
    indice: "Loi de Bouguer : l'éclairement varie comme 1/d². Que devient-il quand la distance double ?"
  },
  {
    id: "U42-042", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "2022",
    question: "On ajoute un filtre gris neutre qui transmet 25 % de la lumière. Sans filtre, le temps de pose était 1/500 s. Quel temps de pose garde la même exposition ?",
    choix: ["1/2 000 s", "1/500 s", "1/250 s", "1/125 s"],
    bonne: 3,
    explication: "Exposition = E × t constante. Avec le filtre, E₂ = 0,25 × E₁, donc t₂ = t₁ / 0,25 = 4 × t₁ = 4/500 = 1/125 s. Le temps de pose augmente.",
    indice: "Pour garder la même exposition, le produit éclairement × temps de pose doit rester constant. Si le filtre retire de la lumière, le temps doit compenser."
  },

  // ---------- Mini-sujet : jumelles de théâtre (6 étapes, déclaré par CAS.push en bas du fichier) ----------
  {
    id: "U42-048", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "2023 et 2026",
    cas: "CAS-U42-01", etape: 1,
    question: "La scène, à 24 m, est considérée comme à l'infini. Quelle chaîne des images est juste ?",
    choix: [
      "AB à l'infini → A₁B₁ en F'₁, confondu avec F₂ → A'B' à l'infini",
      "AB à l'infini → A₁B₁ en F'₁, confondu avec F'₂ → A'B' à l'infini",
      "AB à l'infini → A₁B₁ à l'infini → A'B' en F'₂",
      "AB en F₁ → A₁B₁ à l'infini → A'B' en F'₂"
    ],
    bonne: 0,
    explication: "L'objet est à l'infini : son image par l'objectif se forme dans le plan focal image, en F'₁. La cliente est emmétrope et n'accommode pas : l'image finale doit être à l'infini. Pour cela, A₁B₁ doit se trouver au foyer OBJET de l'oculaire, F₂. Donc F'₁ = F₂ : les jumelles sont afocales, et la distance entre les lentilles vaut f'₁ + f'₂ = 120 − 40 = 80 mm, comme sur la notice. Piège : pour une lentille divergente, F₂ est après la lentille et F'₂ avant.",
    indice: "Deux questions à te poser : où se forme l'image d'un objet à l'infini ? Et où doit se trouver un objet pour que l'oculaire renvoie son image à l'infini ?"
  },
  {
    id: "U42-049", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2018",
    cas: "CAS-U42-01", etape: 2,
    question: "Quel est le grossissement de ces jumelles ? Est-il conforme à la notice, et l'image est-elle à l'endroit ?",
    choix: [
      "G = −3 : conforme à la notice, mais image renversée",
      "G = +3 : conforme à la notice, image droite",
      "G ≈ 2 : non conforme à la notice",
      "G = +1/3 : la scène paraît 3 fois plus petite"
    ],
    bonne: 1,
    explication: "Pour une lunette afocale : G = −f'₁ / f'₂ = −120 / (−40) = +3. C'est bien le « 3× » de la notice. Le signe + veut dire que l'image est droite : pas besoin de prismes pour la redresser, c'est pour cela que des jumelles de théâtre sont si courtes. Avec deux lentilles convergentes (lunette de Kepler), G serait négatif et l'image renversée. Le « 2 » vient de la formule de la loupe (Gc = P/4), qui ne s'applique pas à une lunette.",
    indice: "Pour une lunette afocale, le grossissement est le rapport des deux focales, avec un signe moins devant. Garde le signe de f'₂ : l'oculaire est divergent."
  },
  {
    id: "U42-050", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018",
    cas: "CAS-U42-01", etape: 3,
    contexte: "La monture de l'objectif (rayon 20 mm) est le diaphragme d'ouverture. La monture de l'oculaire (rayon 10 mm), 80 mm plus loin, est le diaphragme de champ. Le plan des champs est celui de l'image intermédiaire A₁B₁, à 120 mm de l'objectif.",
    question: "Quel est le rayon du champ de pleine lumière dans le plan de l'image intermédiaire ?",
    choix: ["10 mm", "15 mm", "5 mm", "25 mm"],
    bonne: 2,
    explication: "Le plan des champs (x = 120) est au-delà du diaphragme de champ (x = 80) : la droite de pleine lumière passe par les bords du même côté, (0 ; 20) et (80 ; 10). Pente = (10 − 20)/80 = −0,125. En x = 120 : 20 − 0,125 × 120 = 5 mm. Par le centre de l'objectif, on trouve le champ moyen (15 mm) ; par les bords opposés, le champ total (25 mm). 10 mm est seulement le rayon de l'oculaire.",
    indice: "Place l'objectif en x = 0, l'oculaire en x = 80 et le plan des champs en x = 120. Quelle droite, appuyée sur deux bords, limite la pleine lumière ?",
    schema: "img/schemas/U42/cas-jumelles-champ.svg",
    schemaTexte: "Objectif de rayon 20 mm, oculaire de rayon 10 mm placé 80 mm plus loin, plan de l'image intermédiaire à 120 mm. Trois droites passent par le bord de l'oculaire : bords du même côté (5 mm, pleine lumière), centre de l'objectif (15 mm, champ moyen), bords opposés (25 mm, champ total)."
  },
  {
    id: "U42-051", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "2018 et 2023",
    cas: "CAS-U42-01", etape: 4,
    contexte: "Résultat à garder pour la suite : dans le plan de l'image intermédiaire, le champ de pleine lumière a un rayon de 5 mm.",
    question: "Depuis sa place, à 24 m, quelle largeur de scène la cliente voit-elle en pleine lumière ?",
    choix: ["1 m", "6 m", "8 m", "2 m"],
    bonne: 3,
    explication: "Le rayon du champ dans le plan focal de l'objectif donne l'angle : tan ω = 5 / 120 ≈ 0,042, soit ω ≈ 2,4°. À 24 m : demi-largeur = 24 × 5 / 120 = 1 m, donc largeur = 2 × 1 = 2 m. Elle voit un chanteur en entier, mais pas toute la scène d'un seul regard. Pièges : oublier de doubler (1 m), diviser par la focale de l'oculaire (6 m), ou partir du rayon de l'objectif au lieu du rayon du champ (8 m).",
    indice: "Le rayon du champ et la focale de l'objectif donnent la tangente du demi-champ. Reporte cet angle à 24 m, et pense que la largeur vaut deux fois la demi-largeur."
  },
  {
    id: "U42-052", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "2018",
    cas: "CAS-U42-01", etape: 5,
    contexte: "Résultat à garder : à 24 m, le champ de pleine lumière couvre 2 m de large. L'œil de la cliente sépare deux points vus sous un angle d'au moins 3 × 10⁻⁴ rad. La diffraction par l'objectif donne une limite de 1,7 × 10⁻⁵ rad.",
    question: "Avec les jumelles, quel est le plus petit détail qu'elle peut distinguer sur la scène, à 24 m ?",
    choix: ["7,2 mm", "2,4 mm", "0,4 mm", "21,6 mm"],
    bonne: 1,
    explication: "Les jumelles grossissent 3 fois : ramenée dans l'espace objet, la limite de l'œil vaut 3 × 10⁻⁴ / 3 = 1 × 10⁻⁴ rad. Elle est plus grande que la limite de diffraction (1,7 × 10⁻⁵ rad) : c'est donc l'œil qui limite. À 24 m : 24 × 1 × 10⁻⁴ = 2,4 × 10⁻³ m, soit 2,4 mm. Sans jumelles, elle ne séparerait que 24 × 3 × 10⁻⁴ m, soit 7,2 mm. 0,4 mm est la limite de diffraction seule ; 21,6 mm vient d'une multiplication par 3 au lieu d'une division.",
    indice: "Ramène d'abord la limite de l'œil dans l'espace objet en la divisant par le grossissement. Compare-la à la limite de diffraction : laquelle commande ?"
  },
  {
    id: "U42-053", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "2019 et 2023",
    cas: "CAS-U42-01", etape: 6,
    contexte: "Résultats à garder : avec les jumelles, elle sépare des détails de 2,4 mm à 24 m (7,2 mm à l'œil nu). Elle veut lire les expressions des chanteurs, donc distinguer des détails de 5 mm. La scène mesure 12 m de large.",
    question: "Quelle conclusion donner à la cliente ?",
    choix: [
      "Le grossissement vaut 3, le champ de pleine lumière 2 m et le plus petit détail séparé 2,4 mm.",
      "Ces jumelles conviennent à ce qu'elle veut faire.",
      "Elles ne conviennent pas : le champ de 2 m est plus petit que la scène de 12 m, elle ne verra donc pas les chanteurs.",
      "Elles conviennent : elle sépare des détails de 2,4 mm, donc ceux de 5 mm (impossible à l'œil nu : 7,2 mm), et voit un chanteur en entier dans un champ de 2 m. Elle ne verra pas toute la scène d'un seul regard."
    ],
    bonne: 3,
    surLaCopie: "Elle sépare des détails de 2,4 mm : ceux de 5 mm sont visibles (7,2 mm à l'œil nu).\nLe champ de 2 m montre un chanteur en entier, mais pas les 12 m de scène à la fois.\nLes jumelles conviennent, à condition de les déplacer sur la scène.",
    explication: "Une conclusion complète fait trois choses : elle répond à la question du client, elle s'appuie sur les chiffres trouvés et elle signale la limite de l'appareil. Ici : détails de 2,4 mm séparés, donc ceux de 5 mm aussi, alors qu'à l'œil nu elle s'arrête à 7,2 mm ; champ de 2 m, donc un chanteur en entier, mais pas les 12 m de scène à la fois. Écrire seulement « elles conviennent » ne rapporte pas les points. Aligner les chiffres sans conclure non plus. Et un petit champ n'empêche pas de voir les chanteurs : il oblige seulement à déplacer les jumelles.",
    indice: "Une bonne conclusion répond à la question du client, s'appuie sur les chiffres trouvés et signale la limite de l'appareil."
  }
,

  // ---------- Calculs posés étape par étape ----------
  {
    id: "U42-139", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément", type: "pose",
    question: "Un objectif assimilé à une lentille mince convergente a une distance focale image f' = +25 mm. Un objet réel est placé 40 mm devant elle. Trouve la position de l'image et le grandissement, étape par étape.",
    etapes: [
      { consigne: "Vergence de la lentille V", reponse: { valeur: 40, unite: "δ", decimales: 0, signe: true },
        aide: "V = [[1|f']] avec f' en mètres : 25 mm = 0,025 m.", ligne: "V = [[1|f']] = [[1|0,025]] = +40 δ" },
      { consigne: "Vergence de l'objet [[1|OA]]", reponse: { valeur: -25, unite: "δ", decimales: 0, signe: true },
        aide: "L'objet est réel, avant la lentille : OA est négatif. OA = −40 mm = −0,040 m.", ligne: "[[1|OA]] = [[1|−0,040]] = −25 δ", erreurs: [{ valeur: 25, type: "signe", message: "L'objet est réel, avant la lentille : OA est négatif, donc [[1|OA]] est négatif." }] },
      { consigne: "Vergence de l'image [[1|OA']]", reponse: { valeur: 15, unite: "δ", decimales: 0, signe: true },
        aide: "Relation de conjugaison : [[1|OA']] = [[1|OA]] + V.", ligne: "[[1|OA']] = [[1|OA]] + V = −25 + 40 = +15 δ" },
      { consigne: "Position de l'image OA'", reponse: { valeur: 66.7, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "OA' = [[1|15]] en mètres, puis convertis en millimètres.", ligne: "OA' = [[1|15]] = +0,0667 m = +66,7 mm", erreurs: [{ valeur: 0.0667, type: "unite", message: "Tu as laissé OA' en mètres : 0,0667 m = 66,7 mm. Convertis en millimètres (× 1 000)." }] },
      { consigne: "Grandissement γ", reponse: { valeur: -1.67, unite: "", decimales: 2, signe: true, tolerance: 0.02 },
        aide: "γ = [[OA'|OA]], avec les signes. OA' et OA se prennent dans la même unité.", ligne: "γ = [[OA'|OA]] = [[+66,7|−40]] = −1,67", erreurs: [{ valeur: 1.67, type: "signe", message: "L'image est renversée (OA' et OA de signes contraires) : γ est négatif." }] }
    ],
    surLaCopie: "Objet réel : OA = −40 mm, f' = +25 mm.\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|25]] − [[1|40]] = [[3|200]], donc OA' = +66,7 mm\nγ = [[OA'|OA]] = [[66,7|−40]] = −1,67 : image réelle, renversée, 1,67 fois plus grande.",
    explication: "L'image est réelle (OA' > 0), renversée (γ < 0) et 1,67 fois plus grande que l'objet. Contrôle avec les vergences : γ = [[−25|+15]] = −1,67."
  },
  {
    id: "U42-140", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", type: "pose",
    question: "Un doublet est formé de deux lentilles minces convergentes : f'₁ = +80 mm et f'₂ = +40 mm, séparées de e = 40 mm. Calcule sa distance focale image, étape par étape, avec V = V₁ + V₂ − e × V₁ × V₂.",
    etapes: [
      { consigne: "Vergence V₁ de la 1re lentille", reponse: { valeur: 12.5, unite: "δ", decimales: 1, signe: true },
        aide: "V₁ = [[1|f'₁]] avec f'₁ en mètres : 80 mm = 0,080 m.", ligne: "V₁ = [[1|0,080]] = +12,5 δ" },
      { consigne: "Vergence V₂ de la 2e lentille", reponse: { valeur: 25, unite: "δ", decimales: 0, signe: true },
        aide: "V₂ = [[1|f'₂]] avec f'₂ en mètres : 40 mm = 0,040 m.", ligne: "V₂ = [[1|0,040]] = +25 δ" },
      { consigne: "Le terme e × V₁ × V₂", reponse: { valeur: 12.5, unite: "δ", decimales: 1, signe: false },
        aide: "Mets l'écart e en mètres : 40 mm = 0,040 m. Multiplie ensuite 0,040 par 12,5 et par 25.", ligne: "e × V₁ × V₂ = 0,040 × 12,5 × 25 = 12,5 δ" },
      { consigne: "Vergence V du doublet", reponse: { valeur: 25, unite: "δ", decimales: 0, signe: true },
        aide: "V = V₁ + V₂ − e × V₁ × V₂ : additionne les deux vergences, puis retire le terme précédent.", ligne: "V = 12,5 + 25 − 12,5 = +25 δ" },
      { consigne: "Distance focale image f' du doublet", reponse: { valeur: 40, unite: "mm", decimales: 0, signe: true, tolerance: 0.5 },
        aide: "f' = [[1|V]] en mètres, puis convertis en millimètres.", ligne: "f' = [[1|V]] = [[1|25]] = 0,040 m = 40 mm", erreurs: [{ valeur: 0.04, type: "unite", message: "Tu as laissé f' en mètres : 0,04 m = 40 mm. Convertis en millimètres (× 1 000)." }] }
    ],
    surLaCopie: "V₁ = [[1|0,080]] = 12,5 δ et V₂ = [[1|0,040]] = 25 δ\nV = V₁ + V₂ − e × V₁ × V₂ = 12,5 + 25 − 0,040 × 12,5 × 25 = 25 δ\nf' = [[1|V]] = [[1|25]] = 0,040 m : le doublet a une distance focale image de 40 mm.",
    explication: "La même formule écrite avec les focales donne le même résultat : f' = [[f'₁ × f'₂|f'₁ + f'₂ − e]] = [[80 × 40|80 + 40 − 40]] = [[3 200|80]] = 40 mm."
  },
  {
    id: "U42-141", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément", type: "pose",
    question: "Lunette de Kepler afocale : objectif de f'ob = 240 mm et de diamètre 48 mm, oculaire de f'oc = 30 mm. L'œil de l'observateur a une pupille de 4 mm. Étudie la lunette étape par étape.",
    etapes: [
      { consigne: "Grossissement G", reponse: { valeur: -8, unite: "", decimales: 0, signe: true },
        aide: "G = −[[f'ob|f'oc]]. Le signe moins : une lunette de Kepler renverse l'image.", ligne: "G = −[[f'ob|f'oc]] = −[[240|30]] = −8", erreurs: [{ valeur: 8, type: "signe", message: "Une lunette de Kepler renverse l'image : G = −[[f'ob|f'oc]] est négatif." }] },
      { consigne: "Longueur de la lunette", reponse: { valeur: 270, unite: "mm", decimales: 0, signe: false },
        aide: "Une lunette afocale a ses foyers confondus : longueur = f'ob + f'oc.", ligne: "L = f'ob + f'oc = 240 + 30 = 270 mm" },
      { consigne: "Diamètre du cercle oculaire D'", reponse: { valeur: 6, unite: "mm", decimales: 0, signe: false },
        aide: "D' = [[D|∣G∣]], avec le diamètre D de l'objectif et la valeur absolue du grossissement.", ligne: "D' = [[D|∣G∣]] = [[48|8]] = 6 mm" },
      { consigne: "Part de la lumière qui entre dans l'œil", reponse: { valeur: 44, unite: "%", decimales: 0, signe: false, tolerance: 1 },
        aide: "Le cercle oculaire (6 mm) est plus grand que la pupille (4 mm). Compare les surfaces : [[4²|6²]].", ligne: "[[4²|6²]] = [[16|36]] = 0,44, soit 44 %" }
    ],
    surLaCopie: "G = −[[f'ob|f'oc]] = −[[240|30]] = −8 ; longueur = 240 + 30 = 270 mm\nCercle oculaire : D' = [[D|∣G∣]] = [[48|8]] = 6 mm, plus grand que la pupille de 4 mm.\nPart de la lumière reçue : [[4²|6²]] = 0,44, soit environ 44 %.",
    explication: "Le cercle oculaire dépasse la pupille de l'œil : environ 44 % de la lumière captée entre dans l'œil. Pour tout utiliser, il faudrait un cercle oculaire de 4 mm au plus, donc un grossissement d'au moins [[48|4]] = 12 (en valeur absolue)."
  },
  {
    id: "U42-142", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément", type: "pose",
    question: "Un microscope a un objectif de focale f'ob = 10 mm, un intervalle optique Δ = 160 mm et un oculaire de focale f'oc = 25 mm. L'œil sépare deux points vus sous 3 × 10⁻⁴ rad. Étudie le microscope étape par étape.",
    etapes: [
      { consigne: "Grandissement de l'objectif γob", reponse: { valeur: -16, unite: "", decimales: 0, signe: true },
        aide: "γob = −[[Δ|f'ob]] : l'objectif d'un microscope donne une image intermédiaire renversée.", ligne: "γob = −[[Δ|f'ob]] = −[[160|10]] = −16", erreurs: [{ valeur: 16, type: "signe", message: "L'objectif d'un microscope donne une image intermédiaire renversée : γob est négatif." }] },
      { consigne: "Grossissement commercial de l'oculaire Gc", reponse: { valeur: 10, unite: "", decimales: 0, signe: false },
        aide: "Gc oculaire = [[250|f'oc]], avec f'oc en millimètres.", ligne: "Gc = [[250|f'oc]] = [[250|25]] = 10" },
      { consigne: "Grossissement commercial du microscope", reponse: { valeur: 160, unite: "", decimales: 0, signe: false },
        aide: "Les deux effets se multiplient. Prends le grandissement de l'objectif en valeur absolue.", ligne: "Gc = ∣γob∣ × Gc oculaire = 16 × 10 = 160" },
      { consigne: "Plus petit détail visible à travers le microscope", reponse: { valeur: 0.47, unite: "µm", decimales: 2, signe: false, tolerance: 0.01 },
        aide: "À l'œil nu à 25 cm : 3 × 10⁻⁴ × 250 mm = 0,075 mm = 75 µm. Divise ensuite par le grossissement.", ligne: "d = [[75|160]] = 0,47 µm", erreurs: [{ valeur: 470, type: "unite", message: "Tu as donné des nanomètres : 470 nm = 0,47 µm. Convertis en micromètres (÷ 1 000)." }] }
    ],
    surLaCopie: "γob = −[[Δ|f'ob]] = −[[160|10]] = −16 ; Gc de l'oculaire = [[250|25]] = 10\nGc du microscope = ∣γob∣ × Gc oculaire = 16 × 10 = 160\nPlus petit détail vu : [[75 µm|160]] ≈ 0,47 µm (75 µm à l'œil nu, à 25 cm).",
    explication: "À l'œil nu, le plus petit détail séparé à 25 cm vaut 75 µm. Le microscope divise cette taille par son grossissement : [[75|160]] ≈ 0,47 µm. Il faut aussi vérifier la limite due à la diffraction de l'objectif : la plus grande des deux limites l'emporte."
  },
  {
    id: "U42-143", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément", type: "pose",
    question: "Dans l'espace d'étude : pupille de rayon 8 mm en x = 0, diaphragme de champ de rayon 5 mm en x = 20 mm, plan des champs en x = 40 mm. Calcule les trois rayons de champ, étape par étape.",
    etapes: [
      { consigne: "Pente de la droite de pleine lumière (bords du même côté)", reponse: { valeur: -0.15, unite: "", decimales: 2, signe: true },
        aide: "La droite passe par (0 ; 8) et (20 ; 5) : pente = [[y₂ − y₁|x₂ − x₁]].", ligne: "pente = [[5 − 8|20 − 0]] = −0,15", erreurs: [{ valeur: 0.15, type: "signe", message: "La droite descend de (0 ; 8) à (20 ; 5) : sa pente est négative." }] },
      { consigne: "Rayon du champ de pleine lumière", reponse: { valeur: 2, unite: "mm", decimales: 0, signe: false },
        aide: "En x = 40 : rayon = 8 + pente × 40.", ligne: "r = 8 − 0,15 × 40 = 2 mm" },
      { consigne: "Rayon du champ moyen (droite par le centre de la pupille)", reponse: { valeur: 10, unite: "mm", decimales: 0, signe: false },
        aide: "La droite passe par (0 ; 0) et (20 ; 5) : pente = [[5|20]]. Prolonge-la jusqu'à x = 40.", ligne: "r = [[5|20]] × 40 = 10 mm" },
      { consigne: "Rayon du champ total (bords opposés)", reponse: { valeur: 18, unite: "mm", decimales: 0, signe: false },
        aide: "La droite passe par (0 ; −8) et (20 ; 5) : pente = [[5 − (−8)|20]]. Prolonge-la jusqu'à x = 40.", ligne: "r = −8 + [[13|20]] × 40 = −8 + 26 = 18 mm" }
    ],
    surLaCopie: "Plan des champs au-delà du diaphragme. Pleine lumière : pente [[5 − 8|20]] = −0,15, r = 8 − 0,15 × 40 = 2 mm\nChamp moyen : [[5|20]] × 40 = 10 mm\nChamp total : −8 + [[13|20]] × 40 = 18 mm.",
    explication: "Comme toujours, le champ de pleine lumière (2 mm) est plus petit que le champ moyen (10 mm), lui-même plus petit que le champ total (18 mm). Entre 2 et 18 mm, l'image s'assombrit peu à peu : c'est le vignettage."
  },

  // ---------- Mini-sujet : lunettes de pêche (5 étapes, déclaré par CAS.push en bas du fichier) ----------
  {
    id: "U42-157", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    cas: "CAS-U42-02", etape: 1,
    question: "Le soleil est bas : son reflet arrive dans l'œil du client après avoir rebondi sur l'étang sous une incidence de 53° (tan 53,1° = 1,33). Pourquoi des verres polarisants atténuent-ils bien ce reflet ?",
    choix: [
      "Le reflet est polarisé verticalement : un filtre horizontal l'éteint",
      "Un reflet n'est jamais polarisé : le filtre fait seulement l'effet d'un verre teinté",
      "Près de l'incidence de Brewster, le reflet est presque totalement polarisé horizontalement : un filtre vertical l'éteint presque",
      "À 53° c'est l'angle limite : il n'y a plus de rayon réfracté, donc plus de reflet à éteindre"
    ],
    bonne: 2,
    explication: "À l'incidence de Brewster, tan iB = n = 1,33, donc iB = 53,1° : la lumière réfléchie par l'eau est totalement polarisée, parallèlement à la surface (donc horizontale). Un filtre dont la direction de transmission est verticale l'arrête. L'angle limite de l'eau (48,8°) est un autre phénomène et il concerne la lumière qui sort de l'eau.",
    indice: "Quel angle d'incidence donne une lumière réfléchie totalement polarisée ? Dans quelle direction ?"
  },
  {
    id: "U42-158", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    cas: "CAS-U42-02", etape: 2,
    type: "calcul",
    contexte: "Le reflet est totalement polarisé horizontalement. Le filtre est parfait, et sa direction de transmission est verticale quand le client tient la tête droite. Il penche la tête de 40° : la direction du filtre fait alors 40° avec la verticale.",
    question: "Quel pourcentage du reflet traverse encore le filtre ? Arrondis à l'unité.",
    reponse: { valeur: 41, unite: "%", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 59, type: "notion", message: "Tu as pris 40° comme angle avec le reflet. Le reflet est horizontal et le filtre est à 40° de la verticale : l'angle entre eux est 50°." }
    ],
    explication: "Le reflet est horizontal, le filtre à 40° de la verticale : l'angle θ entre la polarisation et la direction du filtre est 90° − 40° = 50°.\nLoi de Malus : I = I₀ × cos² θ = I₀ × cos² 50° = I₀ × 0,413\nIl passe environ 41 % du reflet. Tête droite (θ = 90°), il n'en passerait presque plus.",
    indice: "Quel angle y a-t-il entre la direction du reflet et la direction du filtre ? Loi de Malus : I = I₀ × cos² θ."
  },
  {
    id: "U42-159", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    cas: "CAS-U42-02", etape: 3,
    type: "calcul",
    contexte: "Les verres sont minéraux, d'indice n = 1,6, dans l'air, non traités. On néglige l'absorption. Chaque face réfléchit R = ([[n − 1|n + 1]])².",
    question: "Quel pourcentage de la lumière traverse un verre non traité (ses deux faces) ? Arrondis à l'unité.",
    reponse: { valeur: 90, unite: "%", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 95, type: "notion", message: "Tu n'as compté qu'une face. Un verre a deux faces : la transmission se multiplie pour chacune." }
    ],
    explication: "R = ([[1,6 − 1|1,6 + 1]])² = ([[0,6|2,6]])² = 0,053, soit 5,3 % par face\nTransmission d'une face : 1 − 0,053 = 0,947\nDeux faces : T = 0,947² = 0,896, soit environ 90 %.",
    indice: "Calcule R pour une face, puis la transmission 1 − R. Combien de faces la lumière traverse-t-elle ?"
  },
  {
    id: "U42-160", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    cas: "CAS-U42-02", etape: 4,
    type: "calcul",
    contexte: "L'indice idéal d'une couche antireflet est √n du verre = √1,6 ≈ 1,26. Le fabricant utilise une couche d'indice 1,25, optimisée pour le vert, λ = 550 nm.",
    question: "Quelle est l'épaisseur minimale de la couche ?",
    reponse: { valeur: 110, unite: "nm", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 86, type: "notion", message: "Tu as pris l'indice du verre. L'épaisseur dépend de l'indice de la couche : e = λ / (4 n de la couche)." },
      { valeur: 0.11, type: "unite", message: "Tu as donné des micromètres : 0,11 µm = 110 nm. Garde l'unité de λ, ici le nanomètre." }
    ],
    explication: "e = [[λ|4 × n]] avec n = indice de la couche\ne = [[550|4 × 1,25]] = [[550|5]] = 110 nm\nL'épaisseur est d'un quart de longueur d'onde dans la couche.",
    indice: "Épaisseur d'un quart de longueur d'onde dans la couche : utilise l'indice de la couche, pas celui du verre."
  },
  {
    id: "U42-161", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    cas: "CAS-U42-02", etape: 5,
    contexte: "Résultats : tête droite le filtre éteint presque tout le reflet ; tête penchée de 40°, 41 % du reflet passe. Le verre non traité transmet 90 % de la lumière ; le traitement antireflet réduit les reflets sur ses faces.",
    question: "Quelle conclusion donnes-tu au client ?",
    choix: [
      "Elles ne lui conviennent pas : un verre non traité perd déjà 10 % de la lumière, et le filtre ne sert qu'à moitié",
      "Elles lui conviennent sans condition : le filtre éteint le reflet quelle que soit l'orientation de sa tête, et le verre transmet 90 %",
      "Elles lui conviennent s'il garde la tête droite : le filtre éteint alors presque tout le reflet (penchée de 40°, 41 % passe encore) et l'antireflet limite la perte de 10 %",
      "Le filtre polarisant est inutile pour la pêche : seul le traitement antireflet compte, car le reflet de l'eau n'est pas polarisé"
    ],
    bonne: 2,
    surLaCopie: "Tête droite, le filtre éteint presque tout le reflet ; penchée de 40°, 41 % passe encore.\nLe verre nu transmet 90 % de la lumière, l'antireflet limite cette perte.\nLes lunettes conviennent si le client garde la tête droite.",
    explication: "Une bonne conclusion répond à la question du client et s'appuie sur les chiffres trouvés. Elle dit sous quelle condition les lunettes conviennent (tête droite ; penchée de 40°, 41 % du reflet passe encore) et ce que le traitement apporte (le verre nu perd environ 10 % de la lumière).",
    indice: "Une bonne conclusion répond à la question du client, donne la condition qui compte, et s'appuie sur tes résultats."
  },

  // ---------- Calculs posés : optique physique et doublet achromatique ----------
  {
    id: "U42-162", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément", type: "pose",
    question: "Un réseau porte 800 traits par millimètre. Il est éclairé en incidence normale par une lumière de longueur d'onde 600 nm. Étudie la lumière diffractée, étape par étape.",
    etapes: [
      { consigne: "Pas du réseau a (en µm)", reponse: { valeur: 1.25, unite: "µm", decimales: 2, signe: false },
        aide: "Le pas est la distance entre deux traits : 1 mm = 1 000 µm, partagé en 800 traits.", ligne: "a = [[1 000 µm|800]] = 1,25 µm", erreurs: [{ valeur: 0.00125, type: "unite", message: "Tu as donné des millimètres : 0,00125 mm = 1,25 µm. Convertis en micromètres (× 1 000)." }] },
      { consigne: "sin i' à l'ordre 1", reponse: { valeur: 0.48, unite: "", decimales: 2, signe: false },
        aide: "Formule des réseaux en incidence normale : a × sin i' = k × λ. Garde λ et a dans la même unité (600 nm = 0,6 µm).", ligne: "sin i' = [[k × λ|a]] = [[1 × 0,6|1,25]] = 0,48" },
      { consigne: "Angle i' de l'ordre 1 (en degrés)", reponse: { valeur: 28.7, unite: "°", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "i' est l'angle dont le sinus vaut 0,48 : utilise la touche arcsin (sin⁻¹) de ta calculatrice en mode degrés.", ligne: "i' = arcsin(0,48) = 28,7°" },
      { consigne: "Ordre le plus élevé qui existe", reponse: { valeur: 2, unite: "", decimales: 0, signe: false },
        aide: "Il faut sin i' ≤ 1, donc k ≤ [[a|λ]]. Garde la partie entière.", ligne: "k ≤ [[a|λ]] = [[1,25|0,6]] = 2,08, donc k = 2" }
    ],
    surLaCopie: "a = [[1 000 µm|800]] = 1,25 µm ; sin i' = [[k × λ|a]] = [[0,6|1,25]] = 0,48, donc i' = 28,7° à l'ordre 1\nOrdre maximal : k ≤ [[a|λ]] = [[1,25|0,6]] = 2,08, donc k = 2.\nIl sort 5 faisceaux, les ordres −2 à +2.",
    explication: "Pas a = 1,25 µm. À l'ordre 1, sin i' = 0,48 et i' ≈ 28,7°. L'ordre 2 existe (sin i' = 0,96, soit 73,7°), l'ordre 3 n'existe pas (sin i' dépasserait 1). Il sort donc 5 faisceaux : les ordres −2 à +2."
  },
  {
    id: "U42-163", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément", type: "pose",
    question: "Un verre d'indice 1,96 est utilisé dans l'air. On veut le traiter antireflet pour le vert, λ = 560 nm. Étudie le verre nu puis le traitement, étape par étape.",
    etapes: [
      { consigne: "Réflexion R d'une face nue (en %)", reponse: { valeur: 10.5, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "R = ([[n − 1|n + 1]])² pour un dioptre air et verre. Multiplie ensuite par 100 pour avoir des pourcentages.", ligne: "R = ([[1,96 − 1|1,96 + 1]])² = ([[0,96|2,96]])² = 0,105, soit 10,5 %" },
      { consigne: "Transmission T des deux faces nues (en %)", reponse: { valeur: 80, unite: "%", decimales: 0, signe: false, tolerance: 1 },
        aide: "Une face laisse passer 1 − R. Le verre a deux faces : les transmissions se multiplient.", ligne: "T = (1 − 0,105)² = 0,895² = 0,80, soit 80 %" },
      { consigne: "Indice idéal de la couche antireflet", reponse: { valeur: 1.4, unite: "", decimales: 1, signe: false },
        aide: "L'indice idéal de la couche est la racine carrée de l'indice du verre.", ligne: "n = √1,96 = 1,4" },
      { consigne: "Épaisseur minimale de la couche (en nm)", reponse: { valeur: 100, unite: "nm", decimales: 0, signe: false, tolerance: 1 },
        aide: "Un quart de longueur d'onde dans la couche : utilise l'indice de la couche, pas celui du verre.", ligne: "e = [[λ|4n]] = [[560|4 × 1,4]] = [[560|5,6]] = 100 nm", erreurs: [{ valeur: 0.1, type: "unite", message: "Tu as donné des micromètres : 0,1 µm = 100 nm. Garde l'unité de λ, ici le nanomètre." }] }
    ],
    surLaCopie: "R = ([[1,96 − 1|1,96 + 1]])² = 0,105 ; T = (1 − 0,105)² = 0,80, soit 80 % pour le verre nu\nIndice idéal de la couche : √1,96 = 1,4\nÉpaisseur : e = [[λ|4n]] = [[560|4 × 1,4]] = 100 nm.",
    explication: "Le verre nu perd 20 % de la lumière sur ses deux faces. Une couche d'indice 1,4 et de 100 nm d'épaisseur supprime presque tous les reflets pour 560 nm, car les deux ondes réfléchies sont alors en opposition."
  },
  {
    id: "U42-164", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément", type: "pose",
    question: "Une lampe ponctuelle de 300 cd est suspendue à 1,5 m au-dessus d'une table. Un point de la table est à 2 m de la verticale de la lampe. Calcule son éclairement, avec E = [[I × cos θ|d²]] (θ : angle entre la normale à la table et la direction de la lampe), étape par étape.",
    etapes: [
      { consigne: "Distance d de la lampe au point (en m)", reponse: { valeur: 2.5, unite: "m", decimales: 1, signe: false },
        aide: "Le point, la verticale de la lampe et la lampe forment un triangle rectangle : théorème de Pythagore.", ligne: "d = √(1,5² + 2²) = √6,25 = 2,5 m" },
      { consigne: "cos θ", reponse: { valeur: 0.6, unite: "", decimales: 1, signe: false },
        aide: "La normale à la table est verticale : cos θ = [[hauteur|d]].", ligne: "cos θ = [[1,5|2,5]] = 0,6" },
      { consigne: "Éclairement E au point (en lx)", reponse: { valeur: 28.8, unite: "lx", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "E = [[I × cos θ|d²]], avec d en mètres.", ligne: "E = [[300 × 0,6|2,5²]] = [[180|6,25]] = 28,8 lx" },
      { consigne: "Éclairement sous la lampe, à la verticale (en lx)", reponse: { valeur: 133.3, unite: "lx", decimales: 1, signe: false, tolerance: 0.1 },
        aide: "À la verticale, d = 1,5 m et θ = 0°, donc cos θ = 1.", ligne: "E₀ = [[300|1,5²]] = [[300|2,25]] = 133,3 lx" }
    ],
    surLaCopie: "d = √(1,5² + 2²) = 2,5 m ; cos θ = [[1,5|2,5]] = 0,6\nE = [[I × cos θ|d²]] = [[300 × 0,6|2,5²]] = 28,8 lx\nSous la lampe : E₀ = [[300|1,5²]] = 133,3 lx ; le point décalé en reçoit 22 %.",
    explication: "Le point décalé reçoit 28,8 lx, soit [[28,8|133,3]] = 22 % de l'éclairement sous la lampe : il est plus loin (d plus grand) et la lumière y arrive de biais (cos θ plus petit)."
  },
  {
    id: "U42-165", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément", type: "pose",
    question: "On veut un doublet achromatique accolé de vergence totale V = +3 δ avec deux verres de nombres d'Abbe ν₁ = 60 et ν₂ = 40. Trouve les deux lentilles, étape par étape. Condition d'achromatisme : [[V₁|ν₁]] + [[V₂|ν₂]] = 0.",
    etapes: [
      { consigne: "Rapport [[∣V₁∣|∣V₂∣]]", reponse: { valeur: 1.5, unite: "", decimales: 1, signe: false },
        aide: "De [[V₁|ν₁]] = −[[V₂|ν₂]], on tire V₁ = −[[ν₁|ν₂]] × V₂.", ligne: "∣V₁∣ = [[ν₁|ν₂]] × ∣V₂∣ = [[60|40]] × ∣V₂∣, donc V₁ = −1,5 × V₂" },
      { consigne: "Vergence V₂ de la lentille divergente (en δ)", reponse: { valeur: -6, unite: "δ", decimales: 0, signe: true },
        aide: "V₁ + V₂ = 3 avec V₁ = −1,5 × V₂ : remplace et isole V₂.", ligne: "−1,5 V₂ + V₂ = 3, soit −0,5 V₂ = 3, donc V₂ = −6 δ",
        erreurs: [{ valeur: 6, type: "signe", message: "La lentille la plus dispersive est divergente : sa vergence est négative, V₂ = −6 δ." }] },
      { consigne: "Vergence V₁ de la lentille convergente (en δ)", reponse: { valeur: 9, unite: "δ", decimales: 0, signe: true },
        aide: "V₁ = V − V₂ : attention au signe de V₂.", ligne: "V₁ = 3 − (−6) = +9 δ" },
      { consigne: "Distance focale f'₁ de la lentille convergente (en mm)", reponse: { valeur: 111, unite: "mm", decimales: 0, signe: true, tolerance: 1 },
        aide: "f'₁ = [[1|V₁]] en mètres, puis convertis en millimètres.", ligne: "f'₁ = [[1|9]] = 0,111 m = 111 mm" },
      { consigne: "Distance focale f'₂ de la lentille divergente (en mm)", reponse: { valeur: -166.7, unite: "mm", decimales: 1, signe: true, tolerance: 0.2 },
        aide: "f'₂ = [[1|V₂]] en mètres, puis convertis en millimètres. Garde le signe.", ligne: "f'₂ = [[1|−6]] = −0,1667 m = −166,7 mm" }
    ],
    surLaCopie: "[[V₁|60]] + [[V₂|40]] = 0 donne V₁ = −1,5 × V₂ ; avec V₁ + V₂ = 3 : V₂ = −6 δ et V₁ = +9 δ\nf'₁ = [[1|9]] = 111 mm (convergente) et f'₂ = [[1|−6]] = −166,7 mm (divergente).\nContrôle : [[9|60]] + [[−6|40]] = 0,15 − 0,15 = 0, le doublet est achromatique.",
    explication: "Vérification : [[9|60]] + [[−6|40]] = 0,15 − 0,15 = 0, donc le doublet est achromatique, et V = 9 − 6 = +3 δ. La lentille convergente est en verre peu dispersif (ν = 60) et plus forte que la divergente, en verre très dispersif (ν = 40)."
  },

  // ---------- Questions de base en plus : Interférences et réseaux, Polarisation, Photométrie ----------
  {
    id: "U42-181", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Dans une expérience de fentes d'Young, on rapproche les deux fentes l'une de l'autre, sans rien changer d'autre. Que devient l'interfrange ?",
    choix: ["Il augmente", "Il diminue", "Il reste le même", "Il s'annule"],
    bonne: 0,
    explication: "L'interfrange vaut i = [[λ × D|a]] : il est inversement proportionnel à la distance a entre les fentes. Si a diminue, i augmente. Les franges s'écartent.",
    indice: "Écris la formule de l'interfrange et regarde où se trouve a : au numérateur ou au dénominateur ?"
  },
  {
    id: "U42-182", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Fentes d'Young distantes de a = 0,5 mm, écran à D = 1,5 m. On mesure un interfrange de 1,8 mm. Calcule la longueur d'onde de la lumière, en nanomètres.",
    reponse: { valeur: 600, unite: "nm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.6, type: "unite", message: "Tu as donné des micromètres : 0,6 µm = 600 nm. Convertis en nanomètres (× 1 000)." }
    ],
    explication: "i = [[λ × D|a]], donc λ = [[i × a|D]]\nλ = [[1,8 × 10⁻³ × 0,5 × 10⁻³|1,5]] = 6 × 10⁻⁷ m = 600 nm",
    indice: "Isole λ dans la formule de l'interfrange. Convertis tout en mètres avant de calculer."
  },
  {
    id: "U42-183", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Un réseau est éclairé en incidence normale par de la lumière blanche. Que voit-on dans la direction de l'ordre 0 ?",
    choix: [
      "De la lumière blanche : toutes les couleurs y sont, non déviées",
      "Seulement du violet, la couleur la moins déviée",
      "Seulement du rouge, la couleur la plus déviée",
      "Rien : l'ordre 0 est toujours éteint"
    ],
    bonne: 0,
    explication: "À l'ordre 0, k = 0 : a × sin i' = 0, donc i' = 0 pour toutes les longueurs d'onde. Toutes les couleurs partent dans la direction du faisceau incident et se superposent : on voit de la lumière blanche. Les spectres colorés apparaissent aux ordres 1, 2…, de part et d'autre.",
    indice: "Dans la formule du réseau, que vaut sin i' quand k = 0 ? Dépend-il de la longueur d'onde ?"
  },
  {
    id: "U42-184", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Un réseau de 500 traits par millimètre est éclairé par une lumière de 500 nm sous une incidence i = 30°. Formule : a × (sin i' − sin i) = k × λ. Calcule l'angle i' de l'ordre 1, en degrés, à 0,1° près.",
    reponse: { valeur: 48.6, unite: "°", decimales: 1, signe: false, tolerance: 0.1 },
    erreurs: [
      { valeur: 14.5, type: "notion", message: "Tu as oublié sin i. En incidence oblique, a × (sin i' − sin i) = k × λ : on ajoute sin i = 0,5 au terme k × λ / a." }
    ],
    explication: "Pas a = [[1|500]] mm = 2 µm.\nsin i' = sin i + [[k × λ|a]] = 0,5 + [[0,5|2]] = 0,75\ni' = arcsin(0,75) = 48,6°",
    indice: "Isole sin i' : il vaut sin i + kλ/a. Utilise ta calculatrice en degrés pour l'arcsinus."
  },
  {
    id: "U42-185", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "Quel phénomène prouve que la lumière est une onde transversale ?",
    choix: ["La polarisation", "La réfraction", "La réflexion", "La dispersion"],
    bonne: 0,
    explication: "Seule une onde transversale (qui vibre perpendiculairement à sa direction de propagation) peut être polarisée : une direction de vibration peut être privilégiée. La réfraction, la réflexion et la dispersion existent aussi pour des ondes longitudinales comme le son.",
    indice: "Quel phénomène suppose qu'on puisse choisir la direction dans laquelle la lumière vibre ?"
  },
  {
    id: "U42-186", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "Une lumière polarisée rectilignement traverse un analyseur parfait. On mesure que 36 % de l'intensité ressort. Quel angle fait la direction de l'analyseur avec la polarisation de la lumière ? Donne-le en degrés, à 0,1° près.",
    reponse: { valeur: 53.1, unite: "°", decimales: 1, signe: false, tolerance: 0.1 },
    explication: "Loi de Malus : [[I|I₀]] = cos² θ = 0,36\ncos θ = √0,36 = 0,6\nθ = arccos(0,6) = 53,1°",
    indice: "Résous cos² θ = 0,36 : prends la racine carrée, puis l'arccosinus."
  },
  {
    id: "U42-187", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "À l'incidence de Brewster, quel angle font entre eux le rayon réfléchi et le rayon réfracté ?",
    choix: ["90°", "180°", "45°", "L'angle limite de réflexion totale"],
    bonne: 0,
    explication: "À l'incidence de Brewster, i + r = 90° : les rayons réfléchi et réfracté sont perpendiculaires. C'est ce qui donne la relation tan iB = n. Le rayon réfléchi est alors totalement polarisé.",
    indice: "Pense à la relation entre l'angle d'incidence et l'angle de réfraction à Brewster."
  },
  {
    id: "U42-188", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "Un faisceau, dans l'eau (n₁ = 1,33), arrive sur une plaque de verre (n₂ = 1,5). Pour quel angle d'incidence le reflet sur le verre est-il totalement polarisé ? Formule : tan iB = [[n₂|n₁]]. Donne l'angle en degrés, à 0,1° près.",
    reponse: { valeur: 48.4, unite: "°", decimales: 1, signe: false, tolerance: 0.1 },
    erreurs: [
      { valeur: 56.3, type: "notion", message: "Tu as pris l'angle de Brewster air et verre, tan iB = 1,5. Ici la lumière vient de l'eau : tan iB = n₂ / n₁ = 1,5 / 1,33." }
    ],
    explication: "tan iB = [[n₂|n₁]] = [[1,5|1,33]] = 1,128\niB = arctan(1,128) = 48,4°",
    indice: "L'indice du milieu d'où vient la lumière n'est plus 1. Utilise le rapport des deux indices."
  },
  {
    id: "U42-189", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Quelle est l'unité de l'éclairement ?",
    choix: ["Le lux (lm/m²)", "La candela", "Le lumen", "La candela par mètre carré"],
    bonne: 0,
    explication: "L'éclairement est un flux reçu par unité de surface : le lux, c'est un lumen par mètre carré. La candela mesure une intensité (flux par angle solide), le lumen un flux, la candela par mètre carré une luminance.",
    indice: "L'éclairement se mesure sur une surface : quelle unité est un flux par mètre carré ?"
  },
  {
    id: "U42-190", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Une lampe ponctuelle de 120 cd éclaire un plan en incidence normale. On mesure 30 lx. À quelle distance de la lampe se trouve le plan ?",
    reponse: { valeur: 2, unite: "m", decimales: 0, signe: false },
    explication: "E = [[I|d²]], donc d² = [[I|E]] = [[120|30]] = 4\nd = √4 = 2 m",
    indice: "Isole d² dans la loi de Bouguer, puis prends la racine carrée."
  },
  {
    id: "U42-191", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Une lampe ponctuelle donne 90 lx sur un plan à 2 m, en incidence normale. Quel éclairement donne-t-elle à 3 m ?",
    choix: ["40 lx", "60 lx", "135 lx", "27 lx"],
    bonne: 0,
    explication: "E est inversement proportionnel au carré de la distance : E₂ = E₁ × ([[2|3]])² = 90 × [[4|9]] = 40 lx. 60 lx suppose que E varie comme 1/d. 135 lx suppose que E augmente avec la distance (90 × 3/2). 27 lx suppose que E varie comme 1/d³ (environ 26,7 lx).",
    indice: "Loi de Bouguer : E est proportionnel à 1/d². Quel est le rapport des carrés des distances ?"
  },
  {
    id: "U42-192", difficulte: "difficile", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Un spot envoie un flux de 600 lm, réparti uniformément dans un cône d'angle solide 0,5 sr. Quel éclairement donne-t-il à 2 m, en incidence normale ?",
    reponse: { valeur: 300, unite: "lx", decimales: 0, signe: false },
    explication: "Intensité : I = [[Φ|Ω]] = [[600|0,5]] = 1 200 cd\nÉclairement : E = [[I|d²]] = [[1 200|2²]] = 300 lx",
    indice: "Calcule d'abord l'intensité (flux par angle solide), puis applique la loi de Bouguer."
  },

  // ---------- Lot du 22 nov. : loupe, ouverture, doublets, antireflet, afocales ----------
  {
    id: "U42-193", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    question: "Une loupe de lecture a une puissance P = +10 δ. Quel est son grossissement commercial Gc ?",
    choix: ["Gc = 2,5", "Gc = 10", "Gc = 4", "Gc = 25"],
    bonne: 0,
    explication: "Le grossissement commercial se calcule avec la distance conventionnelle de 250 mm (0,25 m) : Gc = 0,25 × P.\nGc = 0,25 × 10 = 2,5.\nGc = 10 serait la puissance elle-même. Gc = 4 vient de 1 / 0,25 : la distance de 0,25 m se multiplie à P, elle ne la divise pas. Gc = 25 vient d'une mauvaise conversion de 250 mm.",
    indice: "Gc = 250 mm divisé par f' (en mm), ou 0,25 × P avec P en dioptries."
  },
  {
    id: "U42-194", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Un microscope a un objectif de grandissement γob = −20 et un oculaire de focale f'oc = 25 mm. Calcule le grossissement commercial du microscope.",
    reponse: { valeur: 200, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 30, type: "notion", message: "Tu as additionné. Les deux étages se multiplient : Gc = |γob| × Gc oculaire." },
      { valeur: 20, type: "notion", message: "Tu as oublié l'oculaire. Gc = |γob| × Gc oculaire, avec Gc oculaire = 250 / f'oc." }
    ],
    surLaCopie: "Oculaire : Gc,oc = [[250|f'oc]] = [[250|25]] = 10\nMicroscope : Gc = |γob| × Gc,oc = 20 × 10 = 200",
    explication: "Gc de l'oculaire : [[250|f'oc]] = [[250|25]] = 10.\nGc du microscope = |γob| × Gc,oc = 20 × 10 = 200.\nLes grossissements des deux étages se multiplient.",
    indice: "Calcule d'abord le grossissement commercial de l'oculaire, comme celui d'une loupe, puis multiplie par celui de l'objectif."
  },
  {
    id: "U42-195", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Un microscope a un objectif de focale f'ob = 5 mm, un oculaire de focale f'oc = 25 mm et un intervalle optique Δ = 175 mm. Calcule son grossissement commercial.",
    reponse: { valeur: 350, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 35, type: "notion", message: "Tu as calculé |γob| = Δ / f'ob = 35 et tu t'es arrêté là. Il faut multiplier par le grossissement de l'oculaire (250 / f'oc = 10)." },
      { valeur: 7, type: "notion", message: "Tu as divisé Δ par f'oc. Le grandissement de l'objectif est Δ / f'ob." }
    ],
    surLaCopie: "|γob| = [[Δ|f'ob]] = [[175|5]] = 35\nGc,oc = [[250|f'oc]] = [[250|25]] = 10\nGc = 35 × 10 = 350",
    explication: "L'intervalle optique Δ sépare le foyer image de l'objectif du foyer objet de l'oculaire.\nGrandissement de l'objectif : |γob| = [[Δ|f'ob]] = [[175|5]] = 35.\nOculaire : Gc,oc = [[250|25]] = 10.\nGc = 35 × 10 = 350.",
    indice: "Le grandissement de l'objectif vaut Δ / f'ob en valeur absolue. Multiplie-le par le grossissement de l'oculaire."
  },
  {
    id: "U42-196", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    question: "Une opticienne observe à la loupe, avec un œil emmétrope qui n'accommode pas. Où doit être placé l'objet ?",
    choix: ["Entre le foyer objet et la loupe", "Au foyer image de la loupe", "Au foyer objet de la loupe", "À 250 mm de la loupe"],
    bonne: 2,
    explication: "L'œil emmétrope au repos voit net à l'infini. L'image donnée par la loupe doit donc partir à l'infini : l'objet est au foyer objet de la loupe. C'est la position qui fatigue le moins.\nEntre le foyer et la loupe, l'image est virtuelle et à distance finie : l'œil doit accommoder.\nLe foyer image est de l'autre côté de la loupe : un objet réel ne peut pas y être.",
    indice: "Quelle position de l'image faut-il pour qu'un œil emmétrope n'accommode pas ?",
    erreurs: {
      0: { type: "notion", message: "Dans cette position l'image est virtuelle, à distance finie : l'œil doit accommoder. Pour une image à l'infini, l'objet est exactement au foyer objet." },
      1: { type: "notion", message: "Le foyer image F' est après la loupe, du côté de l'œil. L'objet réel est avant la loupe : il est au foyer objet F." }
    }
  },
  {
    id: "U42-197", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Un client veut une loupe de lecture de grossissement commercial 5×. Calcule la puissance de cette loupe, en dioptries.",
    reponse: { valeur: 20, unite: "δ", decimales: 0, signe: false },
    erreurs: [
      { valeur: 5, type: "notion", message: "Tu as pris la puissance égale au grossissement. Gc = P / 4 : il faut multiplier Gc par 4." },
      { valeur: 50, type: "unite", message: "50 est la distance focale en mm. La puissance est P = 1 / f' avec f' en mètres : 1 / 0,05 = 20 δ." }
    ],
    surLaCopie: "Gc = [[250|f']] avec f' en mm, donc f' = [[250|5]] = 50 mm = 0,05 m\nP = [[1|f']] = [[1|0,05]] = 20 δ",
    explication: "Gc = [[250|f']], donc f' = [[250|5]] = 50 mm = 0,05 m.\nP = [[1|f']] = [[1|0,05]] = 20 δ.\nRaccourci : Gc = P / 4, donc P = 4 × Gc = 20 δ.",
    indice: "Trouve d'abord la distance focale avec Gc = 250 / f' (f' en mm), puis la puissance."
  },
  {
    id: "U42-198", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "pose",
    question: "Un microscope a un objectif de focale f'ob = 4 mm, un oculaire de focale f'oc = 25 mm et un intervalle optique Δ = 160 mm. Calcule son grossissement commercial, étape par étape.",
    etapes: [
      {
        consigne: "Grandissement de l'objectif γob",
        reponse: { valeur: -40, unite: "", decimales: 0, signe: true },
        aide: "γob = −Δ / f'ob : l'image intermédiaire est renversée.",
        ligne: "γob = −[[Δ|f'ob]] = −[[160|4]] = −40",
        erreurs: [{ valeur: 40, type: "signe", message: "L'objectif donne une image intermédiaire renversée : γob est négatif." }]
      },
      {
        consigne: "Grossissement commercial de l'oculaire",
        reponse: { valeur: 10, unite: "", decimales: 0, signe: false },
        aide: "Gc,oc = 250 / f'oc, avec f'oc en mm.",
        ligne: "Gc,oc = [[250|f'oc]] = [[250|25]] = 10"
      },
      {
        consigne: "Grossissement commercial du microscope",
        reponse: { valeur: 400, unite: "", decimales: 0, signe: false },
        aide: "On multiplie la valeur absolue de γob par Gc,oc.",
        ligne: "Gc = |γob| × Gc,oc = 40 × 10 = 400"
      }
    ],
    explication: "Objectif : γob = −[[Δ|f'ob]] = −[[160|4]] = −40.\nOculaire : Gc,oc = [[250|25]] = 10.\nMicroscope : Gc = 40 × 10 = 400."
  },
  {
    id: "U42-199", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un objectif de focale f' = 50 mm est ouvert à f/2 (N = 2). Calcule le diamètre de sa pupille d'entrée.",
    reponse: { valeur: 25, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 100, type: "notion", message: "Tu as multiplié f' par N. Le nombre d'ouverture est N = f' / D, donc D = f' / N." }
    ],
    surLaCopie: "N = [[f'|D]] donc D = [[f'|N]] = [[50|2]] = 25 mm",
    explication: "N = [[f'|D]], donc D = [[f'|N]] = [[50|2]] = 25 mm.\nPlus N est petit, plus l'objectif est ouvert.",
    indice: "Le nombre d'ouverture est le rapport de la focale au diamètre de la pupille d'entrée."
  },
  {
    id: "U42-200", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    question: "On ferme le diaphragme d'un objectif de f/2 à f/8. Que devient la limite de résolution due à la diffraction ?",
    choix: ["Elle s'améliore : l'angle α diminue", "Elle se dégrade : l'angle α augmente, car D diminue", "Elle ne change pas, seul l'éclairement change", "Elle se dégrade parce que la focale augmente"],
    bonne: 1,
    explication: "α = 1,22 λ / D. En fermant le diaphragme, la pupille d'entrée D diminue (D = f' / N) : α augmente, donc les petits détails se mélangent.\nLa focale ne change pas quand on ferme le diaphragme.\nFermer sert à gagner de la profondeur de champ et à réduire les aberrations, au prix de la diffraction.",
    indice: "Écris α = 1,22 λ / D et regarde ce que devient D quand N grandit.",
    erreurs: {
      0: { type: "notion", message: "α est inversement proportionnel à D. Si D diminue, α augmente." },
      2: { type: "notion", message: "L'éclairement baisse bien, mais la limite de résolution change aussi : α dépend de D." }
    }
  },
  {
    id: "U42-201", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un instrument a une pupille d'entrée de diamètre 5 mm. Pour λ = 600 nm, la diffraction limite sa résolution à α = 1,22 λ / D. Calcule le plus petit détail qu'il sépare sur un objet situé à 10 m.",
    reponse: { valeur: 1.5, unite: "mm", decimales: 1, tolerance: 0.06, signe: false },
    erreurs: [
      { valeur: 1.2, type: "notion", message: "Il manque le facteur 1,22 de la formule. α = 1,22 λ / D." },
      { valeur: 0.0015, type: "unite", message: "Tu as laissé le résultat en mètres : 1,5 × 10⁻³ m = 1,5 mm. Convertis en millimètres (× 1 000)." }
    ],
    surLaCopie: "α = [[1,22 × λ|D]] = [[1,22 × 600 × 10⁻⁹|5 × 10⁻³]] ≈ 1,46 × 10⁻⁴ rad\nDétail = α × distance = 1,46 × 10⁻⁴ × 10 ≈ 1,5 × 10⁻³ m = 1,5 mm",
    explication: "α = [[1,22 × λ|D]] = [[1,22 × 600 × 10⁻⁹|5 × 10⁻³]] ≈ 1,46 × 10⁻⁴ rad.\nÀ 10 m, le plus petit détail séparé vaut α × 10 ≈ 1,46 × 10⁻³ m, soit environ 1,5 mm.",
    indice: "Calcule l'angle α en radians, puis multiplie par la distance en mètres."
  },
  {
    id: "U42-202", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    question: "Un instrument a une pupille d'entrée de 100 mm. L'œil seul a une pupille de 4 mm. De quel facteur la limite de résolution due à la diffraction est-elle réduite, à longueur d'onde égale ?",
    choix: ["Divisée par 5", "Divisée par 100", "Divisée par 0,04", "Divisée par 25"],
    bonne: 3,
    explication: "α = 1,22 λ / D : α est inversement proportionnel à D.\nLe rapport des diamètres vaut 100 / 4 = 25 : la limite de diffraction est 25 fois plus petite.\nDiviser par 5 vient d'une racine carrée : D intervient seul, pas son carré.",
    indice: "α varie en 1 / D. Fais le rapport des deux diamètres."
  },
  {
    id: "U42-203", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Une lunette a un objectif de diamètre D = 50 mm. Pour λ = 500 nm, la diffraction limite sa résolution à α = 1,22 λ / D. L'œil a une limite de résolution de 3 × 10⁻⁴ rad. Calcule le grossissement utile, rapport de la limite de l'œil à celle de la lunette (arrondi à l'unité).",
    reponse: { valeur: 25, unite: "", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 0.04, type: "notion", message: "Tu as fait le rapport à l'envers. Le grossissement utile est α de l'œil divisé par α de la lunette." }
    ],
    surLaCopie: "α = [[1,22 × 500 × 10⁻⁹|50 × 10⁻³]] ≈ 1,22 × 10⁻⁵ rad\nG utile = [[3 × 10⁻⁴|1,22 × 10⁻⁵]] ≈ 25",
    explication: "Limite de la lunette : α = [[1,22 × 500 × 10⁻⁹|50 × 10⁻³]] ≈ 1,22 × 10⁻⁵ rad.\nGrossissement utile : [[3 × 10⁻⁴|1,22 × 10⁻⁵]] ≈ 25.\nAu-delà, l'image est plus grande mais ne montre aucun détail de plus.",
    indice: "Il faut grossir assez pour que le plus petit détail de la lunette atteigne la limite de l'œil."
  },
  {
    id: "U42-204", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Un doublet est formé de deux lentilles minces de vergences V₁ = +10 δ et V₂ = +10 δ, séparées de e = 20 mm dans l'air. Calcule sa vergence, avec V = V₁ + V₂ − e V₁ V₂.",
    reponse: { valeur: 18, unite: "δ", decimales: 0, signe: true },
    erreurs: [
      { valeur: 20, type: "notion", message: "Tu as oublié le terme de séparation. V = V₁ + V₂ − e V₁ V₂, avec e en mètres." },
      { valeur: -1980, type: "unite", message: "Tu as mis e = 20 au lieu de 0,02 m. Dans la formule, e est en mètres." }
    ],
    surLaCopie: "V = V₁ + V₂ − e V₁ V₂ = 10 + 10 − 0,02 × 10 × 10 = 20 − 2 = +18 δ",
    explication: "e = 20 mm = 0,02 m.\nV = 10 + 10 − 0,02 × 10 × 10 = 20 − 2 = +18 δ.\nLa distance focale image vaut alors 1 / 18 ≈ 55,6 mm.",
    indice: "Convertis e en mètres avant de remplacer dans la formule."
  },
  {
    id: "U42-205", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    question: "Un verre crown a un nombre d'Abbe ν = 60, un verre flint ν = 30. Lequel disperse le plus la lumière ?",
    choix: ["Le crown, car son ν est le plus grand", "Les deux dispersent autant", "Le flint, car son ν est le plus petit", "On ne peut pas savoir sans l'indice"],
    bonne: 2,
    explication: "Le nombre d'Abbe mesure l'inverse de la dispersion : ν petit, dispersion forte.\nLe flint (ν = 30) disperse donc plus que le crown (ν = 60). C'est pour cela qu'on associe les deux dans un doublet achromatique.",
    indice: "ν = (nd − 1) / (nF − nC) : la dispersion est au dénominateur.",
    erreurs: {
      0: { type: "notion", message: "ν est au dénominateur de la dispersion : un ν grand veut dire une dispersion faible." }
    }
  },
  {
    id: "U42-206", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Doublet achromatique accolé : la première lentille a V₁ = +4 δ et ν₁ = 60, la seconde a ν₂ = 30. La condition d'achromatisme est V₁ / ν₁ + V₂ / ν₂ = 0. Calcule V₂.",
    reponse: { valeur: -2, unite: "δ", decimales: 0, signe: true },
    erreurs: [
      { valeur: 2, type: "signe", message: "Les deux termes doivent s'annuler : V₂ est de signe contraire à V₁. La seconde lentille est divergente." },
      { valeur: -8, type: "notion", message: "Tu as inversé le rapport. V₂ = −V₁ × ν₂ / ν₁ = −4 × 30 / 60." }
    ],
    surLaCopie: "V₂ = −V₁ × [[ν₂|ν₁]] = −4 × [[30|60]] = −2 δ\nVergence du doublet : V = 4 − 2 = +2 δ",
    explication: "[[V₁|ν₁]] + [[V₂|ν₂]] = 0, donc V₂ = −V₁ × [[ν₂|ν₁]] = −4 × [[30|60]] = −2 δ.\nLe doublet reste convergent : V = 4 − 2 = +2 δ. Le verre le plus dispersif (flint) porte la lentille divergente.",
    indice: "Isole V₂ dans la condition d'achromatisme : les deux termes sont opposés."
  },
  {
    id: "U42-207", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    question: "Pourquoi un oculaire est-il souvent un doublet de deux lentilles plutôt qu'une lentille unique ?",
    choix: ["Pour doubler le grossissement de l'objectif", "Pour réduire les aberrations, dont les aberrations chromatiques, et élargir le champ", "Pour supprimer la diffraction", "Pour que l'image soit toujours réelle"],
    bonne: 1,
    explication: "Une lentille simple donne des images colorées et déformées sur les bords. Un doublet bien choisi (séparation adaptée, verres différents) réduit les aberrations et élargit le champ.\nIl ne supprime pas la diffraction, qui dépend du diamètre de la pupille. Le grossissement de l'objectif ne change pas.",
    indice: "Pense à ce que gagne un système à plusieurs lentilles par rapport à une lentille simple."
  },
  {
    id: "U42-208", difficulte: "facile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Un verre d'indice n = 1,7 est dans l'air. Calcule le pourcentage de lumière réfléchi par une face, en incidence normale : R = ((n − 1) / (n + 1))².",
    reponse: { valeur: 6.7, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 93.3, type: "notion", message: "Tu as calculé la transmission T = 1 − R. La question demande la lumière réfléchie." },
      { valeur: 0.067, type: "unite", message: "0,067 est la proportion. En pourcentage, multiplie par 100 : 6,7 %." }
    ],
    surLaCopie: "R = ([[n − 1|n + 1]])² = ([[0,7|2,7]])² ≈ 0,067, soit 6,7 %",
    explication: "R = ([[n − 1|n + 1]])² = ([[1,7 − 1|1,7 + 1]])² = ([[0,7|2,7]])² ≈ 0,067.\nUne face d'un verre d'indice 1,7 réfléchit donc environ 6,7 % de la lumière.",
    indice: "Remplace n par 1,7 dans la formule, puis passe en pourcentage."
  },
  {
    id: "U42-209", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    question: "Un verre à traitement antireflet monocouche présente un léger reflet coloré. Quelle en est la cause ?",
    choix: ["La couche absorbe certaines couleurs", "Le verre est teinté dans la masse", "L'indice de la couche est égal à celui du verre", "La couche est calculée pour une longueur d'onde : les autres sont un peu moins bien annulées"],
    bonne: 3,
    explication: "L'épaisseur λ / (4n) est choisie pour une seule longueur d'onde, en général vers 550 nm (vert-jaune). Les extrémités du spectre, violet et rouge, sont un peu moins bien éteintes : le reflet résiduel est coloré.\nLa couche ne sert pas à absorber : elle fait interférer destructivement les deux reflets.",
    indice: "L'annulation des reflets par interférences dépend de la longueur d'onde."
  },
  {
    id: "U42-210", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Une couche antireflet de fluorure de magnésium (indice 1,38) est optimisée pour λ = 550 nm. Calcule son épaisseur minimale, en nanomètres.",
    reponse: { valeur: 100, unite: "nm", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 199, type: "notion", message: "Tu as pris une demi-onde (λ / 2n). L'épaisseur minimale d'une couche antireflet est un quart d'onde : e = λ / 4n." },
      { valeur: 138, type: "notion", message: "Tu as divisé λ par 4 sans tenir compte de l'indice. Dans la couche, la longueur d'onde est λ / n : e = λ / 4n." }
    ],
    surLaCopie: "e = [[λ|4n]] = [[550|4 × 1,38]] ≈ 99,6 nm, soit environ 100 nm",
    explication: "Dans la couche, la longueur d'onde vaut λ / n. Un quart d'onde donne e = [[λ|4n]] = [[550|4 × 1,38]] ≈ 99,6 nm, soit environ 100 nm.\nL'aller-retour dans la couche ajoute alors une demi-longueur d'onde : les deux reflets s'annulent.",
    indice: "L'épaisseur minimale est le quart de la longueur d'onde dans la couche."
  },
  {
    id: "U42-211", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    question: "Un instrument compte 6 surfaces air-verre traitées antireflet, chacune transmettant 99 % de la lumière. Quelle est la transmission totale ?",
    choix: ["99 %", "94 %", "96 %", "60 %"],
    bonne: 1,
    explication: "Les transmissions se multiplient : T = 0,99⁶ ≈ 0,941, soit environ 94 %.\nOn ne reste pas à 99 % : chaque surface retire 1 % de ce qui arrive. Pour comparer, six surfaces non traitées (96 % chacune) laisseraient passer 0,96⁶ ≈ 78 %.",
    indice: "Multiplie la transmission de chaque surface par elle-même, autant de fois qu'il y a de surfaces."
  },
  {
    id: "U42-212", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Galilée a un objectif f'ob = +150 mm et un oculaire f'oc = −30 mm. Calcule son grossissement G = −f'ob / f'oc, avec son signe.",
    reponse: { valeur: 5, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: -5, type: "signe", message: "L'oculaire est divergent : f'oc est négatif, donc −f'ob / f'oc est positif. L'image est droite." }
    ],
    surLaCopie: "G = −[[f'ob|f'oc]] = −[[150|−30]] = +5\nG positif : l'image est droite.",
    explication: "G = −[[f'ob|f'oc]] = −[[150|−30]] = +5.\nG positif : l'image est droite. C'est le cas de la lunette de Galilée, avec son oculaire divergent. Une lunette de Kepler (oculaire convergent) a un G négatif : l'image est renversée.",
    indice: "f'oc est négatif pour un oculaire divergent. Garde le signe dans la formule."
  },
  {
    id: "U42-213", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Galilée a un objectif f'ob = +150 mm et un oculaire f'oc = −30 mm. Calcule la distance entre l'objectif et l'oculaire pour qu'elle soit afocale.",
    reponse: { valeur: 120, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 180, type: "signe", message: "Tu as ajouté les valeurs absolues. L'oculaire est divergent : f'oc = −30 mm, donc e = 150 + (−30) = 120 mm." }
    ],
    surLaCopie: "Afocal : le foyer image de l'objectif est le foyer objet de l'oculaire.\ne = f'ob + f'oc = 150 + (−30) = 120 mm",
    explication: "Une lunette est afocale quand le foyer image de l'objectif coïncide avec le foyer objet de l'oculaire : e = f'ob + f'oc.\ne = 150 + (−30) = 120 mm.\nLa lunette de Galilée est plus courte que celle de Kepler de même grossissement.",
    indice: "Pour un système afocal, e = f'ob + f'oc, avec f'oc négatif ici."
  },
  {
    id: "U42-214", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Kepler (oculaire convergent) de grossissement G = 5 a un objectif de diamètre 50 mm. Calcule le diamètre du cercle oculaire, image de l'objectif donnée par l'oculaire (valeur : D / G).",
    reponse: { valeur: 10, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 250, type: "notion", message: "Tu as multiplié D par G. Le cercle oculaire est plus petit que l'objectif : D / G." }
    ],
    surLaCopie: "Cercle oculaire : D' = [[D|G]] = [[50|5]] = 10 mm",
    explication: "Le cercle oculaire est l'image de l'objectif par l'oculaire : D' = [[D|G]] = [[50|5]] = 10 mm.\nIl est plus grand que la pupille de l'œil (3 à 7 mm) : une partie de la lumière captée par l'objectif ne rentre pas dans l'œil.",
    indice: "L'objectif est le plus grand : divise son diamètre par le grossissement."
  },

  // ---------- Lot 2 du 22 nov. : photométrie, interférences, polarisation, champs ----------
  {
    id: "U42-215", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Une lampe ponctuelle de 100 cd éclaire un plan en incidence normale, à 2 m. Quel éclairement donne-t-elle ?",
    choix: ["50 lx", "200 lx", "25 lx", "12,5 lx"],
    bonne: 2,
    explication: "Loi de Bouguer en incidence normale : E = [[I|d²]] = [[100|2²]] = 25 lx.\n50 lx vient de I / d sans le carré. 200 lx vient de I × d. 12,5 lx vient d'une division par d³.",
    indice: "En incidence normale, l'éclairement vaut l'intensité divisée par le carré de la distance."
  },
  {
    id: "U42-216", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Un projecteur a une intensité de 150 cd, uniforme dans un cône d'angle solide 0,4 sr. Calcule le flux lumineux qu'il émet dans ce cône.",
    reponse: { valeur: 60, unite: "lm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 375, type: "notion", message: "Tu as divisé l'intensité par l'angle solide. C'est l'inverse : Φ = I × Ω." }
    ],
    surLaCopie: "Φ = I × Ω = 150 × 0,4 = 60 lm",
    explication: "L'intensité est un flux par angle solide : I = [[Φ|Ω]].\nDonc Φ = I × Ω = 150 × 0,4 = 60 lm.",
    indice: "Le flux lumineux est le produit de l'intensité par l'angle solide."
  },
  {
    id: "U42-217", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Une source de 400 cd éclaire un plan situé à 2 m. Les rayons arrivent avec un angle de 60° par rapport à la normale au plan. Calcule l'éclairement, avec E = I cos θ / d².",
    reponse: { valeur: 50, unite: "lx", decimales: 0, signe: false },
    erreurs: [
      { valeur: 100, type: "notion", message: "Tu as oublié cos θ. En incidence oblique, E = I cos θ / d², avec θ mesuré depuis la normale." }
    ],
    surLaCopie: "E = [[I × cos θ|d²]] = [[400 × cos 60°|2²]] = [[400 × 0,5|4]] = 50 lx",
    explication: "E = [[I × cos θ|d²]] = [[400 × 0,5|4]] = 50 lx.\nPlus l'incidence est oblique, plus la lumière s'étale sur le plan : l'éclairement baisse.",
    indice: "cos 60° = 0,5. Ne pas oublier de mettre la distance au carré."
  },
  {
    id: "U42-218", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "On éloigne une lampe ponctuelle : la distance au plan éclairé double. Que devient l'éclairement ?",
    choix: ["Il est divisé par 2", "Il est divisé par 4", "Il ne change pas", "Il est divisé par 8"],
    bonne: 1,
    explication: "E = I cos θ / d² : l'éclairement varie comme l'inverse du carré de la distance.\nDistance × 2, donc E divisé par 2² = 4.",
    indice: "Dans la loi de Bouguer, la distance est au carré.",
    erreurs: {
      0: { type: "notion", message: "Tu as oublié le carré : E varie en 1 / d², pas en 1 / d." }
    }
  },
  {
    id: "U42-219", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Un photographe règle f/4 avec un temps de pose de 1/250 s. Il ferme le diaphragme à f/8. Quel temps de pose garde la même exposition ?",
    choix: ["1/1000 s", "1/125 s", "1/30 s", "1/60 s"],
    bonne: 3,
    explication: "Le diamètre de la pupille est divisé par 2 : sa surface est divisée par 4, donc 4 fois moins de lumière arrive sur le capteur.\nIl faut compenser en posant 4 fois plus longtemps : 4 × 1/250 = 1/62,5, soit environ 1/60 s.\n1/125 s ne compenserait que le doublement.",
    indice: "La lumière reçue est proportionnelle à la surface de la pupille. Que devient-elle quand le diamètre est divisé par 2 ?",
    erreurs: {
      1: { type: "notion", message: "Le flux dépend de la surface de la pupille, donc du carré du diamètre : diviser le diamètre par 2 divise le flux par 4, pas par 2." }
    }
  },
  {
    id: "U42-220", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Une ampoule émet un flux de 800 lm, de façon uniforme dans toutes les directions (angle solide 4π sr). Calcule son intensité.",
    reponse: { valeur: 63.7, unite: "cd", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 200, type: "notion", message: "Tu as divisé par 4. L'angle solide de l'espace entier est 4π sr, soit environ 12,57 sr." }
    ],
    surLaCopie: "I = [[Φ|Ω]] = [[800|4π]] ≈ [[800|12,57]] ≈ 63,7 cd",
    explication: "L'espace entier correspond à un angle solide de 4π ≈ 12,57 sr.\nI = [[Φ|Ω]] = [[800|12,57]] ≈ 63,7 cd.",
    indice: "L'intensité est le flux divisé par l'angle solide. Quel est l'angle solide de tout l'espace ?"
  },
  {
    id: "U42-221", difficulte: "difficile", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "pose",
    question: "Une lampe de 300 cd est suspendue à 1,2 m au-dessus d'un plan de travail. Un point du plan est à 1,6 m de la verticale de la lampe. Calcule l'éclairement en ce point, étape par étape.",
    etapes: [
      {
        consigne: "Distance d entre la lampe et le point (en m)",
        reponse: { valeur: 2, unite: "m", decimales: 1, signe: false, tolerance: 0.01 },
        aide: "Le triangle est rectangle : d² = 1,2² + 1,6².",
        ligne: "d² = 1,2² + 1,6² = 1,44 + 2,56 = 4, donc d = 2 m"
      },
      {
        consigne: "Cosinus de l'angle d'incidence θ",
        reponse: { valeur: 0.6, unite: "", decimales: 1, signe: false, tolerance: 0.01 },
        aide: "θ est l'angle entre le rayon et la verticale. cos θ = hauteur / d.",
        ligne: "cos θ = [[1,2|2]] = 0,6"
      },
      {
        consigne: "Éclairement E (en lx)",
        reponse: { valeur: 45, unite: "lx", decimales: 0, signe: false, tolerance: 0.5 },
        aide: "E = I cos θ / d².",
        ligne: "E = [[300 × 0,6|2²]] = [[180|4]] = 45 lx"
      }
    ],
    explication: "d = √(1,2² + 1,6²) = 2 m. cos θ = 1,2 / 2 = 0,6.\nE = [[300 × 0,6|2²]] = 45 lx."
  },
  {
    id: "U42-222", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Dans une expérience de fentes d'Young, on éloigne l'écran : la distance D double, le reste ne change pas. Que devient l'interfrange i = λD / a ?",
    choix: ["Il est divisé par 2", "Il ne change pas", "Il est multiplié par 4", "Il est multiplié par 2"],
    bonne: 3,
    explication: "i = [[λ × D|a]] est proportionnel à D. D double, donc i double.\nLes franges s'écartent quand l'écran s'éloigne.",
    indice: "Regarde où se trouve D dans la formule de l'interfrange."
  },
  {
    id: "U42-223", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Fentes d'Young distantes de a = 1 mm, écran à D = 2 m, lumière de longueur d'onde 500 nm. Calcule l'interfrange.",
    reponse: { valeur: 1, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.001, type: "unite", message: "Tu as laissé le résultat en mètres : 1 × 10⁻³ m = 1 mm. Convertis en millimètres (× 1 000)." },
      { valeur: 0.25, type: "notion", message: "Tu as oublié de multiplier par D (ou tu l'as mis au dénominateur). L'interfrange est i = λ D / a." }
    ],
    surLaCopie: "i = [[λ × D|a]] = [[500 × 10⁻⁹ × 2|1 × 10⁻³]] = 1 × 10⁻³ m = 1 mm",
    explication: "i = [[λ × D|a]] = [[500 × 10⁻⁹ × 2|1 × 10⁻³]] = 1 × 10⁻³ m = 1 mm.",
    indice: "Convertis tout en mètres avant de calculer, puis exprime le résultat en millimètres."
  },
  {
    id: "U42-224", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Un réseau a 600 traits par millimètre. Il est éclairé en incidence normale par une lumière de 500 nm. Calcule l'angle de déviation de l'ordre 1, en degrés (sin θ = λ / a).",
    reponse: { valeur: 17.5, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 0.3, type: "notion", message: "0,3 est sin θ. La question demande l'angle : θ = arcsin(0,3)." }
    ],
    surLaCopie: "a = [[1|600]] mm ≈ 1,667 µm\nsin θ = [[λ|a]] = [[0,5|1,667]] = 0,3, donc θ ≈ 17,5°",
    explication: "Le pas du réseau vaut a = [[1|600]] mm ≈ 1,667 µm.\nsin θ = [[λ|a]] = [[0,5|1,667]] = 0,30, donc θ = arcsin(0,30) ≈ 17,5°.",
    indice: "Calcule d'abord le pas du réseau en µm, puis sin θ, puis l'angle avec la fonction arcsin."
  },
  {
    id: "U42-225", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Un réseau est éclairé en lumière blanche, en incidence normale. Dans l'ordre 1, quelle couleur est la plus déviée ?",
    choix: ["Le violet", "Le vert", "Aucune, toutes sont déviées pareil", "Le rouge"],
    bonne: 3,
    explication: "sin θ = λ / a : l'angle croît avec la longueur d'onde. Le rouge (environ 700 nm) est plus dévié que le violet (environ 400 nm).\nC'est l'inverse d'un prisme, qui dévie le plus le violet.",
    indice: "Dans la formule du réseau, θ augmente avec la longueur d'onde.",
    erreurs: {
      0: { type: "notion", message: "C'est le cas d'un prisme. Pour un réseau, sin θ = λ / a : la plus grande longueur d'onde (le rouge) est la plus déviée." }
    }
  },
  {
    id: "U42-226", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Deux ondes de même longueur d'onde λ se superposent. Quelle différence de marche donne des interférences constructives ?",
    choix: ["δ = (k + ½) λ", "δ = k λ, avec k entier", "δ = λ / 4 seulement", "δ = 0 seulement"],
    bonne: 1,
    explication: "Les ondes sont en phase quand elles ont un décalage d'un nombre entier de longueurs d'onde : δ = k λ.\nδ = (k + ½) λ donne des interférences destructives.",
    indice: "Constructives : les ondes sont en phase. Quel décalage les laisse en phase ?",
    erreurs: {
      0: { type: "notion", message: "(k + ½) λ est la condition destructive : les ondes sont alors en opposition de phase." },
      3: { type: "notion", message: "δ = 0 est un cas particulier (k = 0). Tous les multiples entiers de λ conviennent." }
    }
  },
  {
    id: "U42-227", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "pose",
    question: "Fentes d'Young distantes de a = 0,4 mm, écran à D = 1,6 m, lumière de longueur d'onde 600 nm. Étudie les franges étape par étape.",
    etapes: [
      {
        consigne: "Interfrange i (en mm)",
        reponse: { valeur: 2.4, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
        aide: "i = λ D / a, tout en mètres, puis convertis en mm.",
        ligne: "i = [[600 × 10⁻⁹ × 1,6|0,4 × 10⁻³]] = 2,4 × 10⁻³ m = 2,4 mm",
        erreurs: [{ valeur: 0.0024, type: "unite", message: "Tu as laissé le résultat en mètres : 2,4 × 10⁻³ m = 2,4 mm." }]
      },
      {
        consigne: "Position de la frange brillante d'ordre 3 (la frange centrale est l'ordre 0), comptée depuis la frange centrale (en mm)",
        reponse: { valeur: 7.2, unite: "mm", decimales: 1, signe: false, tolerance: 0.05 },
        aide: "La frange d'ordre k est à k × i de la frange centrale.",
        ligne: "x₃ = 3 × i = 3 × 2,4 = 7,2 mm"
      },
      {
        consigne: "Distance entre la frange d'ordre +3 et celle d'ordre −2 (en mm)",
        reponse: { valeur: 12, unite: "mm", decimales: 0, signe: false, tolerance: 0.1 },
        aide: "Elles sont de part et d'autre de la frange centrale : on additionne 3 et 2 interfranges.",
        ligne: "(3 + 2) × i = 5 × 2,4 = 12 mm"
      }
    ],
    explication: "i = [[λ × D|a]] = 2,4 mm.\nLa frange d'ordre 3 est à 3 × 2,4 = 7,2 mm du centre.\nDe part et d'autre du centre, +3 et −2 sont séparées de 5 interfranges : 12 mm."
  },
  {
    id: "U42-228", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "Une lumière polarisée rectilignement traverse un analyseur parfait dont l'axe fait 30° avec la direction de polarisation. Quel pourcentage de l'intensité ressort ? (loi de Malus : I = I₀ cos² θ)",
    reponse: { valeur: 75, unite: "%", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 87, type: "notion", message: "Tu as pris cos 30° sans le carré. La loi de Malus est I = I₀ cos² θ." }
    ],
    surLaCopie: "I = I₀ cos² θ = I₀ × (cos 30°)² = I₀ × 0,75, soit 75 %",
    explication: "cos 30° ≈ 0,866, donc cos² 30° = 0,75.\nI = 0,75 I₀ : 75 % de l'intensité ressort.",
    indice: "Pense bien au carré du cosinus."
  },
  {
    id: "U42-229", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "De la lumière naturelle (non polarisée) traverse un seul polariseur parfait. Quelle fraction de l'intensité ressort ?",
    choix: ["100 %", "25 %", "0 %", "50 %"],
    bonne: 3,
    explication: "La lumière naturelle contient toutes les directions de polarisation à parts égales. Un polariseur parfait en garde la moitié : I = I₀ / 2.\nLa lumière qui sort est polarisée rectilignement.",
    indice: "Pas besoin de cosinus : la lumière naturelle est symétrique, toutes les directions sont équivalentes."
  },
  {
    id: "U42-230", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "La lumière se réfléchit sur une vitre d'indice 1,5, dans l'air. Calcule l'angle d'incidence de Brewster, mesuré depuis la normale (tan iB = n).",
    reponse: { valeur: 56.3, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 33.7, type: "notion", message: "33,7° est l'angle avec la surface de la vitre. L'angle d'incidence se mesure depuis la normale." }
    ],
    surLaCopie: "tan iB = n = 1,5, donc iB = arctan(1,5) ≈ 56,3°",
    explication: "tan iB = n = 1,5, donc iB = arctan(1,5) ≈ 56,3°.\nÀ cet angle, la lumière réfléchie est entièrement polarisée perpendiculairement au plan d'incidence.",
    indice: "Utilise la fonction arctan de la calculatrice, en degrés."
  },
  {
    id: "U42-231", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "Un conducteur est ébloui par le reflet du soleil sur une route mouillée (surface horizontale). Dans quelle direction doit être l'axe d'un verre polarisant pour atténuer ce reflet ?",
    choix: ["Horizontale", "Oblique à 45°", "Verticale", "Peu importe : un polariseur atténue toujours tout le reflet"],
    bonne: 2,
    explication: "La lumière réfléchie sur une surface horizontale est surtout polarisée horizontalement, c'est-à-dire parallèlement à la surface.\nUn verre dont l'axe est vertical arrête cette composante et laisse passer le reste de la lumière.\nUn axe horizontal laisserait passer le reflet.",
    indice: "La lumière réfléchie est polarisée parallèlement à la surface réfléchissante.",
    erreurs: {
      0: { type: "notion", message: "L'axe horizontal laisserait justement passer le reflet, qui est polarisé horizontalement. Il faut l'axe perpendiculaire." }
    }
  },
  {
    id: "U42-232", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "De la lumière naturelle traverse trois polariseurs parfaits : le 1er et le 3e sont croisés (à 90°), le 2e est placé entre eux à 45° du 1er. Quel pourcentage de l'intensité initiale ressort ?",
    reponse: { valeur: 12.5, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
    erreurs: [
      { valeur: 0, type: "notion", message: "Croisés seuls, ils éteignent. Mais le 2e polariseur oriente la lumière à 45° : le 3e en laisse alors passer une partie." },
      { valeur: 25, type: "notion", message: "Tu as oublié un cos². Entre le 2e et le 3e polariseur aussi, il y a un angle de 45° et donc un facteur cos² 45° = 0,5." }
    ],
    surLaCopie: "Après le 1er : I₁ = [[I₀|2]]\nAprès le 2e : I₂ = I₁ × cos² 45° = [[I₀|4]]\nAprès le 3e : I₃ = I₂ × cos² 45° = [[I₀|8]], soit 12,5 %",
    explication: "Après le 1er polariseur : I₁ = I₀ / 2.\nAprès le 2e (45°) : I₂ = I₁ cos² 45° = I₀ / 4.\nAprès le 3e (encore 45°) : I₃ = I₂ cos² 45° = I₀ / 8 = 12,5 %.\nSans le polariseur du milieu, il ne sortirait rien.",
    indice: "Applique la loi de Malus à chaque polariseur, un par un."
  },
  {
    id: "U42-233", difficulte: "facile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    question: "Quel diaphragme limite la quantité de lumière qui arrive d'un point de l'objet situé sur l'axe ?",
    choix: ["Le diaphragme de champ", "Le diaphragme d'ouverture", "Le plan des champs", "Le capteur"],
    bonne: 1,
    explication: "Le diaphragme d'ouverture limite le faisceau issu d'un point de l'axe. Son image dans l'espace objet est la pupille d'entrée.\nLe diaphragme de champ limite plutôt la taille de la zone de l'objet qu'on voit.",
    indice: "Un diaphragme règle la lumière reçue, l'autre la taille de ce qu'on voit."
  },
  {
    id: "U42-234", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    question: "Qu'appelle-t-on le vignettage ?",
    choix: ["Une déformation des lignes droites en bord de champ", "Un assombrissement progressif vers le bord du champ, car une partie du faisceau est coupée", "Une coloration des bords de l'image", "La diffraction par le diaphragme"],
    bonne: 1,
    explication: "Vers le bord du champ, des diaphragmes ou des montures coupent une partie du faisceau : l'éclairement baisse progressivement. C'est le vignettage.\nLa déformation est la distorsion, la coloration vient du chromatisme.",
    indice: "Pense à ce qui se passe dans la zone entre le champ de pleine lumière et le champ de contour."
  },
  {
    id: "U42-235", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    type: "calcul",
    question: "Une lunette a un objectif de focale f'ob = 200 mm. Un diaphragme de champ de diamètre 10 mm est placé dans le plan focal image de l'objectif. Calcule le champ angulaire total, en degrés (tan θ = rayon / f'ob).",
    reponse: { valeur: 2.9, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 1.4, type: "notion", message: "Tu as calculé le demi-champ. Le champ total est le double : 2 θ." }
    ],
    surLaCopie: "tan θ = [[5|200]] = 0,025, donc θ ≈ 1,43°\nChamp total = 2 θ ≈ 2,9°",
    explication: "Le rayon du diaphragme est 5 mm : tan θ = [[5|200]] = 0,025, donc θ ≈ 1,43°.\nLe champ angulaire total est 2 θ ≈ 2,9°.",
    indice: "Le diaphragme a un diamètre de 10 mm : quel est son rayon ? Attention au demi-champ."
  },
  {
    id: "U42-236", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    type: "calcul",
    question: "Un appareil photo de focale 50 mm a un capteur de 24 × 36 mm, dont la diagonale mesure 43,3 mm. Calcule le champ angulaire dans la diagonale, en degrés (le plan du capteur est le plan focal image).",
    reponse: { valeur: 47, unite: "°", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 23, type: "notion", message: "Tu as calculé le demi-champ. Le champ total est 2 × arctan(demi-diagonale / f')." }
    ],
    surLaCopie: "Demi-diagonale = 21,65 mm\ntan θ = [[21,65|50]] = 0,433, donc θ ≈ 23,4°\nChamp = 2 θ ≈ 47°",
    explication: "La demi-diagonale vaut 21,65 mm : tan θ = [[21,65|50]] = 0,433, donc θ ≈ 23,4°.\nChamp dans la diagonale : 2 θ ≈ 47°.",
    indice: "Divise la diagonale par 2 avant de passer à l'arctan."
  },
  {
    id: "U42-237", difficulte: "facile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    question: "Que dit-on de l'éclairement de l'image dans le champ de pleine lumière ?",
    choix: ["Il diminue vers les bords, sans jamais s'annuler", "Il est nul au centre et maximal sur les bords", "Il est uniforme : le faisceau de chaque point n'est pas coupé", "Il est la moitié de celui du centre"],
    bonne: 2,
    explication: "Dans le champ de pleine lumière, tout le faisceau de chaque point passe : l'éclairement est uniforme.\nEntre le champ de pleine lumière et le champ de contour, il décroît : c'est le vignettage. Au-delà, il est nul.",
    indice: "Pleine lumière veut dire que rien n'est coupé."
  },

  // ---------- Lot 3 du 22 nov. : conjugaison (lentilles minces, objets virtuels, chaînes) ----------
  {
    id: "U42-238", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Quelle est la relation de conjugaison de Newton pour une lentille mince, avec les origines aux foyers F et F' ?",
    choix: ["FA × F'A' = +f'²", "FA + F'A' = f'", "FA × F'A' = −f'²", "[[1|FA]] − [[1|F'A']] = [[1|f']]"],
    bonne: 2,
    explication: "Avec les origines aux foyers, la relation de Newton s'écrit FA × F'A' = −f'² (c'est le produit f × f', avec f = −f').\nLe produit est négatif : FA et F'A' sont de signes contraires.\nLa dernière formule est un mélange : celle de Descartes utilise OA et OA' (origine en O), pas FA et F'A'.",
    indice: "Les origines sont aux foyers : FA part de F, F'A' part de F'. Le produit vaut f × f'.",
    erreurs: {
      0: { type: "signe", message: "Le produit FA × F'A' est négatif : f × f' = −f'² puisque f = −f'." }
    }
  },
  {
    id: "U42-239", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Lentille mince convergente de f' = +50 mm. Un objet réel est à 100 mm avant le foyer objet : FA = −100 mm. Calcule F'A' avec la relation de Newton, avec son signe.",
    reponse: { valeur: 25, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: -25, type: "signe", message: "Tu as oublié le signe moins de la relation : FA × F'A' = −f'². Ici FA est négatif, donc F'A' est positif." }
    ],
    surLaCopie: "FA × F'A' = −f'² donc F'A' = [[−f'²|FA]] = [[−2 500|−100]] = +25 mm\nL'image est à 25 mm après le foyer image.",
    explication: "F'A' = [[−f'²|FA]] = [[−50²|−100]] = +25 mm.\nL'image est 25 mm après F'. Vérification avec Descartes : OA = −150 mm, OA' = 75 mm = f' + F'A'.",
    indice: "Isole F'A' : FA × F'A' = −f'². Garde le signe de FA."
  },
  {
    id: "U42-240", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "La Lune est vue sous un angle de 0,5°. L'objectif d'un appareil photo, de focale f' = 500 mm, en forme l'image dans son plan focal image. Calcule la taille de cette image (A'B' = f' × tan α).",
    reponse: { valeur: 4.4, unite: "mm", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 0.0044, type: "unite", message: "Tu as laissé le résultat en mètres : 4,4 × 10⁻³ m = 4,4 mm." }
    ],
    surLaCopie: "Objet à l'infini : l'image est dans le plan focal image.\nA'B' = f' × tan α = 500 × tan 0,5° ≈ 4,4 mm",
    explication: "Un objet à l'infini donne une image dans le plan focal image. A'B' = f' × tan α = 500 × 0,00873 ≈ 4,4 mm.\nPlus la focale est grande, plus l'image de la Lune est grande sur le capteur.",
    indice: "Un objet à l'infini est vu sous un angle α : l'image est dans le plan focal image, à f' de la lentille."
  },
  {
    id: "U42-241", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un faisceau convergent arrive sur une lentille mince convergente de f' = +20 mm et convergerait, sans elle, en un point situé 10 mm derrière la lentille (objet virtuel : OA = +10 mm). Calcule OA', avec son signe.",
    reponse: { valeur: 6.7, unite: "mm", decimales: 1, tolerance: 0.1, signe: true },
    erreurs: [
      { valeur: -20, type: "signe", message: "Tu as pris OA = −10 mm, comme pour un objet réel. Ici l'objet est virtuel, après la lentille : OA = +10 mm." }
    ],
    surLaCopie: "Objet virtuel : OA = +10 mm.\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|20]] + [[1|10]] = [[3|20]]\nOA' ≈ +6,7 mm : image réelle, après la lentille.",
    explication: "Objet virtuel : OA = +10 mm.\n[[1|OA']] = [[1|20]] + [[1|10]] = [[3|20]], donc OA' = [[20|3]] ≈ +6,7 mm.\nLa lentille convergente rapproche encore le point de convergence : l'image est réelle, plus près que l'objet virtuel.",
    indice: "Un objet virtuel est après la lentille : OA est positif. Garde les signes dans Descartes."
  },
  {
    id: "U42-242", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Qu'est-ce qu'un objet virtuel pour une lentille ?",
    choix: ["Un objet très petit", "Un point vers lequel convergent les rayons qui arrivent sur la lentille, situé après elle", "Un objet placé au foyer objet", "L'image donnée par la lentille elle-même"],
    bonne: 1,
    explication: "Un objet est virtuel quand les rayons incidents convergent vers un point situé après la lentille, sans y arriver : OA est positif.\nCela arrive dans une chaîne de lentilles, quand l'image d'une première lentille se forme après la seconde.",
    indice: "Réel : les rayons divergent à partir du point. Virtuel : ils convergent vers lui."
  },
  {
    id: "U42-243", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "pose",
    question: "On veut projeter, avec une lentille convergente de f' = +60 mm, l'image réelle d'un objet sur un écran, 3 fois plus grande que lui et renversée (γ = −3). Trouve le montage, étape par étape.",
    etapes: [
      {
        consigne: "Position de l'objet, OA (en mm)",
        reponse: { valeur: -80, unite: "mm", decimales: 0, signe: true },
        aide: "γ = OA' / OA = −3, donc OA' = −3 OA. Reporte dans Descartes : [[1|OA']] − [[1|OA]] = [[1|f']].",
        ligne: "[[1|−3 OA]] − [[1|OA]] = [[−4|3 OA]] = [[1|60]]\nDonc OA = −80 mm",
        erreurs: [{ valeur: 80, type: "signe", message: "L'objet est réel, avant la lentille : OA est négatif." }]
      },
      {
        consigne: "Position de l'écran, OA' (en mm)",
        reponse: { valeur: 240, unite: "mm", decimales: 0, signe: true },
        aide: "OA' = γ × OA.",
        ligne: "OA' = −3 × (−80) = +240 mm"
      },
      {
        consigne: "Distance entre l'objet et l'écran (en mm)",
        reponse: { valeur: 320, unite: "mm", decimales: 0, signe: false },
        aide: "L'objet est 80 mm avant la lentille, l'écran 240 mm après.",
        ligne: "80 + 240 = 320 mm"
      }
    ],
    explication: "γ = −3 donne OA' = −3 OA. Descartes : [[1|−3 OA]] − [[1|OA]] = [[−4|3 OA]] = [[1|60]], donc OA = −80 mm.\nOA' = +240 mm. Objet et écran sont à 320 mm l'un de l'autre."
  },
  {
    id: "U42-244", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Un objet réel est placé entre le foyer objet et une lentille convergente. Quelle est l'image ?",
    choix: ["Réelle, renversée et plus petite", "Réelle, renversée et plus grande", "Virtuelle, droite et plus petite", "Virtuelle, droite et plus grande"],
    bonne: 3,
    explication: "Entre F et O, un objet donne une image virtuelle (du même côté que l'objet), droite et agrandie : c'est le principe de la loupe.\nUne image réelle n'existe que si l'objet est au-delà du foyer objet.",
    indice: "Pense à la loupe : on place l'objet très près de la lentille."
  },
  {
    id: "U42-245", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Avec une lentille convergente de f' = 100 mm, on forme sur un écran une image réelle de même taille que l'objet (γ = −1). Calcule la distance entre l'objet et l'écran.",
    reponse: { valeur: 400, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 200, type: "notion", message: "Tu as compté l'objet à 2f' de la lentille, mais pas l'écran. L'objet et l'écran sont chacun à 2f' de la lentille : 2f' + 2f' = 4f'." }
    ],
    surLaCopie: "γ = −1 donc OA' = −OA. Descartes : [[2|OA']] = [[1|f']], donc OA' = 2 f' = 200 mm et OA = −200 mm.\nDistance objet-écran = 200 + 200 = 400 mm = 4 f'.",
    explication: "γ = −1 donne OA' = −OA. Descartes : [[1|OA']] + [[1|OA']] = [[1|f']], donc OA' = 2 f' = 200 mm et OA = −200 mm.\nL'objet et l'écran sont à 400 mm = 4 f' l'un de l'autre. C'est la plus petite distance pour obtenir une image réelle.",
    indice: "Une image de même taille, renversée, est à 2f' de la lentille. L'objet aussi."
  },
  {
    id: "U42-246", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Deux lentilles minces accolées ont pour vergences +6 δ et −2,5 δ. Calcule la distance focale image du système, en millimètres.",
    reponse: { valeur: 286, unite: "mm", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 0.286, type: "unite", message: "Tu as laissé f' en mètres : 0,286 m = 286 mm." },
      { valeur: 3.5, type: "notion", message: "3,5 δ est la vergence du système. Il faut en déduire la distance focale : f' = 1 / V." }
    ],
    surLaCopie: "Lentilles accolées : V = V₁ + V₂ = 6 + (−2,5) = +3,5 δ\nf' = [[1|V]] = [[1|3,5]] ≈ 0,286 m, soit 286 mm",
    explication: "Pour des lentilles minces accolées, les vergences s'ajoutent : V = 6 − 2,5 = +3,5 δ.\nf' = [[1|3,5]] ≈ 0,286 m = 286 mm.",
    indice: "Additionne d'abord les vergences, puis passe à la distance focale."
  },
  {
    id: "U42-247", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Quelle est la distance focale image d'un verre de lunettes de vergence −2,00 δ ?",
    choix: ["+500 mm", "−200 mm", "−50 mm", "−500 mm"],
    bonne: 3,
    explication: "f' = [[1|V]] = [[1|−2]] = −0,5 m = −500 mm.\nLe signe moins indique une lentille divergente : son foyer image est virtuel, avant le verre.\n+500 mm aurait un verre convergent de +2 δ.",
    indice: "f' = 1 / V, avec V en dioptries pour obtenir f' en mètres."
  },
  {
    id: "U42-248", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un ménisque d'indice n = 1,5 a une première face de rayon R₁ = +100 mm et une seconde face de rayon R₂ = +200 mm. Calcule sa vergence avec V = (n − 1) × ([[1|R₁]] − [[1|R₂]]), les rayons étant en mètres.",
    reponse: { valeur: 2.5, unite: "δ", decimales: 1, tolerance: 0.05, signe: true },
    erreurs: [
      { valeur: 7.5, type: "signe", message: "Tu as additionné les deux courbures. La formule est 1/R₁ − 1/R₂ : ici les deux centres sont du même côté, les courbures se retranchent." }
    ],
    surLaCopie: "V = (n − 1)([[1|R₁]] − [[1|R₂]]) = 0,5 × ([[1|0,1]] − [[1|0,2]]) = 0,5 × (10 − 5) = +2,5 δ",
    explication: "V = (n − 1)([[1|R₁]] − [[1|R₂]]) = 0,5 × (10 − 5) = +2,5 δ.\nLe ménisque est convergent : sa première face, plus courbée, l'emporte sur la seconde.",
    indice: "Convertis les rayons en mètres, puis calcule 1/R₁ et 1/R₂."
  },
  {
    id: "U42-249", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une lentille convergente en verre, utilisée dans l'air, est plongée dans l'eau. Que devient sa vergence ?",
    choix: ["Elle augmente", "Elle diminue : l'eau a un indice plus proche de celui du verre", "Elle ne change pas", "Elle change de signe"],
    bonne: 1,
    explication: "La vergence dépend de l'écart d'indice entre le verre et le milieu : V = (n_verre / n_milieu − 1) × (…). Dans l'eau (n ≈ 1,33), cet écart est plus faible que dans l'air : la lentille est moins convergente.\nElle ne change de signe que si le milieu a un indice supérieur à celui du verre.",
    indice: "Ce qui compte, c'est le rapport des indices entre le verre et le milieu qui l'entoure."
  },
  {
    id: "U42-250", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "pose",
    question: "Un téléobjectif : L₁ (f'₁ = +100 mm), puis L₂ (f'₂ = −50 mm) placée 60 mm après L₁. L'objet est à l'infini. Où se forme l'image finale ? Étudie la chaîne étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image intermédiaire A₁ par rapport à L₂, O₂A₁ (en mm)",
        reponse: { valeur: 40, unite: "mm", decimales: 0, signe: true },
        aide: "Objet à l'infini : A₁ est au foyer image de L₁, à 100 mm après L₁. L₂ est à 60 mm de L₁.",
        ligne: "O₁A₁ = +100 mm\nO₂A₁ = 100 − 60 = +40 mm (objet virtuel pour L₂)",
        erreurs: [{ valeur: -40, type: "signe", message: "A₁ est après L₂ : c'est un objet virtuel, O₂A₁ = +40 mm." }]
      },
      {
        consigne: "Position de l'image finale par rapport à L₂, O₂A' (en mm)",
        reponse: { valeur: 200, unite: "mm", decimales: 0, signe: true },
        aide: "Descartes pour L₂ : [[1|O₂A']] = [[1|f'₂]] + [[1|O₂A₁]].",
        ligne: "[[1|O₂A']] = [[1|−50]] + [[1|40]] = [[−4|200]] + [[5|200]] = [[1|200]]\nO₂A' = +200 mm"
      },
      {
        consigne: "Position de l'image finale par rapport à L₁, O₁A' (en mm)",
        reponse: { valeur: 260, unite: "mm", decimales: 0, signe: true },
        aide: "L₂ est à 60 mm de L₁.",
        ligne: "O₁A' = 60 + 200 = +260 mm"
      }
    ],
    explication: "A₁ est au foyer image de L₁ : O₁A₁ = +100 mm, donc O₂A₁ = +40 mm (objet virtuel pour L₂).\nDescartes pour L₂ : [[1|O₂A']] = [[1|−50]] + [[1|40]] = [[1|200]], donc O₂A' = +200 mm.\nL'image est à 260 mm de L₁, alors que la focale équivalente est de 500 mm : c'est l'intérêt du téléobjectif, un appareil plus court que sa focale."
  },
  {
    id: "U42-251", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "L'objectif d'un appareil photo a une focale de 50 mm. Réglé sur l'infini, il forme l'image dans le plan du capteur. On vise un objet à 1 m (OA = −1 000 mm). De combien faut-il éloigner l'objectif du capteur pour que l'image soit nette ?",
    reponse: { valeur: 2.6, unite: "mm", decimales: 1, tolerance: 0.05, signe: false },
    erreurs: [
      { valeur: 52.6, type: "notion", message: "52,6 mm est la position OA' de l'image. Il faut en retrancher la position de l'image à l'infini (50 mm) pour avoir le déplacement." }
    ],
    surLaCopie: "[[1|OA']] = [[1|50]] + [[1|−1 000]] = [[19|1 000]], donc OA' ≈ 52,6 mm\nÀ l'infini, OA' = 50 mm : déplacement = 52,6 − 50 = 2,6 mm.",
    explication: "[[1|OA']] = [[1|50]] − [[1|1 000]] = [[19|1 000]], donc OA' ≈ 52,6 mm.\nÀ l'infini, l'image était à 50 mm. Il faut donc reculer l'objectif de 2,6 mm.",
    indice: "Calcule OA' pour l'objet à 1 m, puis compare avec la position de l'image à l'infini."
  },
  {
    id: "U42-252", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une lentille convergente forme sur un écran l'image nette d'un objet. On en cache la moitié inférieure avec un carton. Que voit-on sur l'écran ?",
    choix: ["La moitié supérieure de l'image seulement", "L'image entière, mais moins lumineuse", "L'image entière, aussi lumineuse", "Plus d'image du tout"],
    bonne: 1,
    explication: "Chaque point de l'objet envoie des rayons sur toute la surface de la lentille. Il suffit d'une partie de la lentille pour reformer chaque point de l'image : l'image est entière.\nLa lumière reçue est réduite de moitié : l'image est moins lumineuse. C'est le même principe qu'un diaphragme qu'on ferme.",
    indice: "Combien de rayons faut-il pour reformer un point de l'image ?"
  },
  {
    id: "U42-253", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un objet de 4 mm est placé à 60 mm devant une lentille mince. Son image sur un écran est renversée et mesure 12 mm. Calcule la distance focale image de la lentille.",
    reponse: { valeur: 45, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: -90, type: "signe", message: "Tu as pris OA = +60 mm avec une image réelle (OA' = +180). L'objet est réel, avant la lentille : OA = −60 mm." }
    ],
    surLaCopie: "γ = [[A'B'|AB]] = [[−12|4]] = −3, donc OA' = γ × OA = −3 × (−60) = +180 mm\n[[1|f']] = [[1|OA']] − [[1|OA]] = [[1|180]] + [[1|60]] = [[4|180]]\nf' = 45 mm",
    explication: "Image renversée : γ = [[−12|4]] = −3. OA = −60 mm, donc OA' = γ × OA = +180 mm.\n[[1|f']] = [[1|OA']] − [[1|OA]] = [[1|180]] + [[1|60]] = [[4|180]], donc f' = 45 mm. La lentille est convergente.",
    indice: "Déduis OA' du grandissement, puis applique Descartes pour trouver f'."
  },
  {
    id: "U42-254", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Un objet réel est placé à 2f' avant une lentille convergente. Où est l'image, et comment est-elle ?",
    choix: ["À 2f' après la lentille, réelle, renversée, de même taille", "À 2f' avant la lentille, virtuelle, droite, de même taille", "Au foyer image, réelle et plus petite", "À l'infini"],
    bonne: 0,
    explication: "Descartes avec OA = −2f' : [[1|OA']] = [[1|f']] − [[1|2f']] = [[1|2f']], donc OA' = +2f'.\nγ = OA' / OA = −1 : image de même taille, renversée. L'image est réelle (après la lentille).",
    indice: "Applique Descartes avec OA = −2f'."
  },
  {
    id: "U42-255", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Une lentille mince donne d'un objet réel situé à 20 cm devant elle une image virtuelle située à 1 m devant elle. Calcule sa vergence, avec son signe.",
    reponse: { valeur: 4, unite: "δ", decimales: 0, signe: true },
    erreurs: [
      { valeur: -6, type: "signe", message: "Tu as additionné 1/OA' et 1/OA. La relation est V = 1/OA' − 1/OA, avec OA = −0,2 m et OA' = −1 m." }
    ],
    surLaCopie: "OA = −0,2 m ; OA' = −1 m (image virtuelle, avant la lentille)\nV = [[1|OA']] − [[1|OA]] = −1 + 5 = +4 δ",
    explication: "OA = −0,2 m et OA' = −1 m (image virtuelle, du même côté que l'objet).\nV = [[1|OA']] − [[1|OA]] = [[1|−1]] − [[1|−0,2]] = −1 + 5 = +4 δ.\nLa lentille est convergente : c'est une loupe, car l'objet est entre le foyer (25 cm) et la lentille.",
    indice: "Les distances sont en mètres et négatives toutes les deux. Garde les signes dans Descartes."
  },
  {
    id: "U42-256", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Un rayon issu du foyer objet d'une lentille convergente traverse la lentille. Comment ressort-il ?",
    choix: ["Il passe par le foyer image", "Parallèle à l'axe optique", "Sans être dévié", "Il revient sur lui-même"],
    bonne: 1,
    explication: "Le foyer objet F est le point dont les rayons ressortent parallèles à l'axe. C'est l'inverse de la règle du rayon parallèle, qui ressort par F'.\nUn rayon qui passe par le centre O n'est pas dévié.",
    indice: "Pense à l'inverse du chemin d'un rayon parallèle à l'axe : la lumière suit le même chemin dans les deux sens."
  },
  {
    id: "U42-257", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Dans une chaîne de deux lentilles L₁ puis L₂, l'image A₁ donnée par L₁ se forme 20 mm après L₂. Pour L₂, que représente A₁ ?",
    choix: ["Un objet réel, avec O₂A₁ = −20 mm", "Une image virtuelle", "Un objet virtuel, avec O₂A₁ = +20 mm", "Un objet à l'infini"],
    bonne: 2,
    explication: "Pour L₂, A₁ est l'objet. Il se trouve après L₂ : les rayons qui arrivent sur L₂ convergent vers lui sans l'atteindre. C'est un objet virtuel, O₂A₁ = +20 mm.\nUn objet réel serait avant L₂.",
    indice: "Compte la position de A₁ depuis L₂, dans le sens de la lumière."
  },
  {
    id: "U42-258", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un objet de 3 mm traverse deux lentilles : la première donne un grandissement γ₁ = −2, la seconde γ₂ = −3. Calcule la taille algébrique de l'image finale A'B'.",
    reponse: { valeur: 18, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: -15, type: "notion", message: "Tu as additionné les grandissements. Dans une chaîne, ils se multiplient : γ = γ₁ × γ₂ = +6." }
    ],
    surLaCopie: "γ = γ₁ × γ₂ = (−2) × (−3) = +6\nA'B' = γ × AB = 6 × 3 = +18 mm (image droite)",
    explication: "Les grandissements se multiplient : γ = (−2) × (−3) = +6.\nA'B' = 6 × 3 = +18 mm. Le signe positif indique une image droite : deux renversements se compensent.",
    indice: "Multiplie les grandissements, puis applique-les à la taille de l'objet."
  },
  {
    id: "U42-259", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Dans quelles conditions (conditions de Gauss) la lentille mince donne-t-elle une image nette d'un point ?",
    choix: ["Pour des rayons inclinés de plus de 45° sur l'axe", "Pour toutes les couleurs à la fois", "Pour des rayons proches de l'axe et peu inclinés sur lui", "Seulement pour un objet à l'infini"],
    bonne: 2,
    explication: "Les formules de conjugaison supposent des rayons peu inclinés et proches de l'axe : ce sont les conditions de Gauss.\nHors de ces conditions, les aberrations apparaissent. Pour les couleurs, il y a en plus le chromatisme, qui ne dépend pas des conditions de Gauss.",
    indice: "Les formules de Descartes sont des approximations valables près de l'axe."
  },
  {
    id: "U42-260", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Une lentille mince divergente a une distance focale image f' = −25 mm. Un objet est à l'infini. Où se forme l'image ? Donne OA', avec son signe.",
    reponse: { valeur: -25, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 25, type: "signe", message: "L'image est au foyer image F', qui est avant la lentille pour une lentille divergente : OA' = f' = −25 mm." }
    ],
    surLaCopie: "Objet à l'infini : [[1|OA]] = 0, donc [[1|OA']] = [[1|f']]\nOA' = f' = −25 mm : image virtuelle, 25 mm avant la lentille.",
    explication: "Pour un objet à l'infini, [[1|OA]] = 0, donc OA' = f' = −25 mm.\nL'image est au foyer image, qui est virtuel pour une lentille divergente : les rayons semblent venir d'un point situé 25 mm avant la lentille.",
    indice: "Un objet à l'infini donne une image au foyer image. Quel est son signe pour une divergente ?"
  },
  {
    id: "U42-261", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une lentille donne d'un objet une image de grandissement γ = −0,5. Que peut-on dire de cette image ?",
    choix: ["Droite et deux fois plus grande", "Droite et deux fois plus petite", "Renversée et deux fois plus grande", "Renversée et deux fois plus petite"],
    bonne: 3,
    explication: "Le signe de γ donne le sens : négatif, l'image est renversée. La valeur absolue donne la taille : 0,5, l'image est deux fois plus petite que l'objet.",
    indice: "Le signe donne le sens de l'image, la valeur absolue sa taille."
  },
  {
    id: "U42-262", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "pose",
    question: "Un projecteur de diapositives a un objectif de f' = +100 mm. L'écran est à 4 m de l'objectif (OA' = +4 000 mm). La diapositive mesure 24 mm de haut. Étudie le montage étape par étape.",
    etapes: [
      {
        consigne: "Position de la diapositive, OA (en mm)",
        reponse: { valeur: -102.6, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
        aide: "Retourne Descartes : [[1|OA]] = [[1|OA']] − [[1|f']].",
        ligne: "[[1|OA]] = [[1|4 000]] − [[1|100]] = [[−39|4 000]]\nOA ≈ −102,6 mm",
        erreurs: [{ valeur: 97.6, type: "notion", message: "Tu as ajouté les termes. De [[1|OA']] − [[1|OA]] = [[1|f']] on tire [[1|OA]] = [[1|OA']] − [[1|f']]." }]
      },
      {
        consigne: "Grandissement γ",
        reponse: { valeur: -39, unite: "", decimales: 0, signe: true, tolerance: 0.1 },
        aide: "γ = OA' / OA.",
        ligne: "γ = [[4 000|−102,6]] ≈ −39"
      },
      {
        consigne: "Hauteur de l'image sur l'écran (en mm)",
        reponse: { valeur: 936, unite: "mm", decimales: 0, signe: false, tolerance: 2 },
        aide: "Taille de l'image = |γ| × taille de l'objet.",
        ligne: "39 × 24 = 936 mm, soit environ 0,94 m"
      }
    ],
    explication: "[[1|OA]] = [[1|4 000]] − [[1|100]] = [[−39|4 000]], donc OA ≈ −102,6 mm : la diapositive est un peu avant le foyer objet.\nγ ≈ −39. L'image mesure 39 × 24 = 936 mm de haut, et elle est renversée : on place la diapositive à l'envers."
  },

  // ---------- Lot 4 du 22 nov. : loupe et microscope, afocales, doublets, ouverture, antireflet ----------
  {
    id: "U42-263", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    question: "Que compare le grossissement commercial Gc d'un instrument ?",
    choix: ["La taille de l'image à la taille de l'objet", "La focale de l'instrument à la distance de 250 mm", "L'angle sous lequel on voit l'image dans l'instrument à l'angle sous lequel on voit l'objet, à l'œil nu, placé à 250 mm", "Le diamètre de l'objectif à celui de l'oculaire"],
    bonne: 2,
    explication: "Le grossissement commercial est un rapport d'angles : Gc = α' / α, où α' est l'angle sous lequel on voit l'image dans l'instrument et α celui sous lequel on verrait l'objet à l'œil nu, à la distance conventionnelle de 250 mm.\nLe rapport des tailles est le grandissement, pas le grossissement.",
    indice: "Un grossissement compare des angles, pas des longueurs."
  },
  {
    id: "U42-264", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Un objet de 0,5 mm est vu à l'œil nu à 250 mm. On l'observe maintenant avec une loupe de grossissement commercial Gc = 8. Calcule l'angle sous lequel on voit l'image, en milliradians.",
    reponse: { valeur: 16, unite: "mrad", decimales: 0, signe: false },
    erreurs: [
      { valeur: 2, type: "notion", message: "2 mrad est l'angle à l'œil nu. L'image dans la loupe est vue sous un angle Gc fois plus grand." }
    ],
    surLaCopie: "À l'œil nu : α = [[0,5|250]] = 2 × 10⁻³ rad = 2 mrad\nAvec la loupe : α' = Gc × α = 8 × 2 = 16 mrad",
    explication: "À l'œil nu : α = [[0,5|250]] = 2 × 10⁻³ rad = 2 mrad.\nAvec la loupe : α' = Gc × α = 8 × 2 = 16 mrad.",
    indice: "Calcule d'abord l'angle à l'œil nu (petit angle : taille divisée par distance), puis multiplie par Gc."
  },
  {
    id: "U42-265", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "L'objectif d'un microscope a un grandissement γob = −40 pour un intervalle optique Δ = 160 mm. Calcule sa distance focale image.",
    reponse: { valeur: 4, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 6400, type: "notion", message: "Tu as multiplié Δ par γob. Le grandissement est γob = −Δ / f'ob : f'ob = Δ / |γob|." }
    ],
    surLaCopie: "γob = −[[Δ|f'ob]] donc f'ob = [[Δ|40]] = [[160|40]] = 4 mm",
    explication: "γob = −[[Δ|f'ob]], donc f'ob = [[Δ|40]] = [[160|40]] = 4 mm.\nUn objectif à fort grandissement a une focale très courte.",
    indice: "Le grandissement de l'objectif vaut Δ / f'ob en valeur absolue."
  },
  {
    id: "U42-266", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    question: "Un microscope est équipé d'un objectif ×10 et d'un oculaire ×10. On passe à l'objectif ×40, en gardant le même oculaire. Quel est le nouveau grossissement commercial ?",
    choix: ["50", "400", "4 000", "40"],
    bonne: 1,
    explication: "Gc = |γob| × Gc,oc. Avec l'objectif ×40 et l'oculaire ×10 : Gc = 40 × 10 = 400 (avant : 10 × 10 = 100).\n50 vient d'une addition, 4 000 d'une multiplication de trop.",
    indice: "Les grossissements des deux étages se multiplient."
  },
  {
    id: "U42-267", difficulte: "difficile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Une loupe a une focale f' = +40 mm. Un observateur accommode et regarde l'image à 250 mm devant la loupe (OA' = −250 mm). Où doit être l'objet ? Calcule OA, avec son signe.",
    reponse: { valeur: -34.5, unite: "mm", decimales: 1, tolerance: 0.1, signe: true },
    erreurs: [
      { valeur: -40, type: "notion", message: "OA = −40 mm (objet au foyer) donne une image à l'infini, pour un œil au repos. Ici l'image est à 250 mm : l'objet est un peu plus près de la loupe." }
    ],
    surLaCopie: "[[1|OA]] = [[1|OA']] − [[1|f']] = [[1|−250]] − [[1|40]] = [[−29|1 000]]\nOA ≈ −34,5 mm",
    explication: "[[1|OA]] = [[1|OA']] − [[1|f']] = [[−1|250]] − [[1|40]] = −0,004 − 0,025 = −0,029 mm⁻¹.\nOA ≈ −34,5 mm : l'objet est un peu plus près de la loupe que son foyer objet (−40 mm).",
    indice: "Retourne Descartes pour isoler 1/OA, avec OA' négatif (image virtuelle)."
  },
  {
    id: "U42-268", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    question: "Pourquoi ajoute-t-on souvent un prisme redresseur à une lunette de Kepler pour l'usage terrestre ?",
    choix: ["Pour augmenter son grossissement", "Pour que l'image ne soit plus renversée", "Pour supprimer les couleurs parasites", "Pour la rendre afocale"],
    bonne: 1,
    explication: "La lunette de Kepler (objectif et oculaire convergents) donne une image renversée, gênante pour observer un paysage. Un prisme redresseur la remet à l'endroit.\nLa lunette est déjà afocale. Le prisme ne change ni le grossissement ni les couleurs.",
    indice: "Le grossissement d'une lunette de Kepler est négatif. Qu'est-ce que ça signifie pour l'image ?"
  },
  {
    id: "U42-269", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Kepler a un objectif f'ob = +400 mm et un oculaire f'oc = +20 mm. Calcule son grossissement G = −f'ob / f'oc, avec son signe.",
    reponse: { valeur: -20, unite: "", decimales: 0, signe: true },
    erreurs: [
      { valeur: 20, type: "signe", message: "Tu as oublié le signe moins. Les deux lentilles sont convergentes : l'image est renversée, G est négatif." }
    ],
    surLaCopie: "G = −[[f'ob|f'oc]] = −[[400|20]] = −20\nG négatif : l'image est renversée.",
    explication: "G = −[[f'ob|f'oc]] = −[[400|20]] = −20.\nLe signe moins indique une image renversée, comme toujours avec une lunette de Kepler.",
    indice: "Applique la formule avec les signes : f'ob et f'oc sont positifs."
  },
  {
    id: "U42-270", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Kepler a un objectif f'ob = +400 mm et un oculaire f'oc = +20 mm. Calcule la distance entre les deux lentilles pour qu'elle soit afocale.",
    reponse: { valeur: 420, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 380, type: "signe", message: "Tu as soustrait. Pour un oculaire convergent, f'oc est positif : e = f'ob + f'oc = 400 + 20." }
    ],
    surLaCopie: "Afocal : F'ob = Foc, donc e = f'ob + f'oc = 400 + 20 = 420 mm",
    explication: "Une lunette afocale a le foyer image de l'objectif confondu avec le foyer objet de l'oculaire : e = f'ob + f'oc = 400 + 20 = 420 mm.",
    indice: "Le foyer image de l'objectif et le foyer objet de l'oculaire coïncident."
  },
  {
    id: "U42-271", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette a un objectif de diamètre 60 mm. Son cercle oculaire (image de l'objectif par l'oculaire) mesure 4 mm. Calcule la valeur absolue de son grossissement.",
    reponse: { valeur: 15, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.067, type: "notion", message: "Tu as fait le rapport à l'envers. |G| = diamètre de l'objectif / diamètre du cercle oculaire." }
    ],
    surLaCopie: "|G| = [[D objectif|D cercle oculaire]] = [[60|4]] = 15",
    explication: "|G| = [[D objectif|D cercle oculaire]] = [[60|4]] = 15.\nCe rapport est aussi celui des focales : f'ob / f'oc.",
    indice: "Le rapport des diamètres est le même que le rapport des focales."
  },
  {
    id: "U42-272", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Kepler a un grossissement G = −16 et un oculaire de focale f'oc = +25 mm. Calcule la focale de son objectif.",
    reponse: { valeur: 400, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 1.56, type: "notion", message: "Tu as divisé f'oc par G. De G = −f'ob / f'oc, on tire f'ob = −G × f'oc = 16 × 25." }
    ],
    surLaCopie: "G = −[[f'ob|f'oc]] donc f'ob = −G × f'oc = 16 × 25 = 400 mm",
    explication: "G = −[[f'ob|f'oc]], donc f'ob = −G × f'oc = 16 × 25 = 400 mm.",
    indice: "Isole f'ob dans la formule du grossissement."
  },
  {
    id: "U42-273", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "pose",
    question: "Une lunette de Galilée a un objectif f'ob = +120 mm et un grossissement G = +4. Compare-la à une lunette de Kepler de même objectif et de même grossissement en valeur absolue, étape par étape.",
    etapes: [
      {
        consigne: "Focale de l'oculaire de la lunette de Galilée, f'oc (en mm)",
        reponse: { valeur: -30, unite: "mm", decimales: 0, signe: true },
        aide: "G = −f'ob / f'oc, donc f'oc = −f'ob / G.",
        ligne: "f'oc = −[[120|4]] = −30 mm",
        erreurs: [{ valeur: 30, type: "signe", message: "G est positif (image droite) : l'oculaire est divergent, donc f'oc est négatif." }]
      },
      {
        consigne: "Longueur de la lunette de Galilée, e = f'ob + f'oc (en mm)",
        reponse: { valeur: 90, unite: "mm", decimales: 0, signe: false },
        aide: "f'oc est négatif.",
        ligne: "e = 120 + (−30) = 90 mm"
      },
      {
        consigne: "Longueur de la lunette de Kepler de même |G| (en mm)",
        reponse: { valeur: 150, unite: "mm", decimales: 0, signe: false },
        aide: "Kepler : f'oc = +30 mm (G = −4).",
        ligne: "e = 120 + 30 = 150 mm"
      }
    ],
    explication: "Galilée : f'oc = −[[120|4]] = −30 mm, longueur 120 − 30 = 90 mm, image droite.\nKepler : f'oc = +30 mm, longueur 150 mm, image renversée.\nLa lunette de Galilée est plus courte de 60 mm."
  },
  {
    id: "U42-274", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    question: "Un oculaire est formé de deux lentilles convergentes, de même verre, séparées de e = (f'₁ + f'₂) / 2. Que peut-on dire de ses aberrations chromatiques ?",
    choix: ["Elles sont doublées", "Elles sont réduites, car la séparation compense la dispersion du verre", "Elles sont supprimées pour toutes les longueurs d'onde", "Elles ne dépendent pas de la séparation"],
    bonne: 1,
    explication: "Avec cette séparation, la vergence du doublet varie très peu avec la longueur d'onde : le doublet est achromatique au premier ordre, même avec un seul verre. C'est le principe des oculaires de type Huygens.\nIl n'est pas parfait pour toutes les longueurs d'onde : on parle de réduction, pas de suppression.",
    indice: "Pense aux oculaires de microscope, faits d'un seul type de verre."
  },
  {
    id: "U42-275", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Un doublet est formé de deux lentilles minces de vergences V₁ = +5 δ et V₂ = +8 δ, séparées de e = 40 mm dans l'air. Calcule sa vergence, avec V = V₁ + V₂ − e V₁ V₂.",
    reponse: { valeur: 11.4, unite: "δ", decimales: 1, tolerance: 0.05, signe: true },
    erreurs: [
      { valeur: 13, type: "notion", message: "Tu as oublié le terme de séparation. V = V₁ + V₂ − e V₁ V₂, avec e en mètres." },
      { valeur: -1587, type: "unite", message: "Tu as mis e = 40 au lieu de 0,04 m. Dans la formule, e est en mètres." }
    ],
    surLaCopie: "V = V₁ + V₂ − e V₁ V₂ = 5 + 8 − 0,04 × 5 × 8 = 13 − 1,6 = +11,4 δ",
    explication: "e = 40 mm = 0,04 m.\nV = 5 + 8 − 0,04 × 5 × 8 = 13 − 1,6 = +11,4 δ.",
    indice: "Convertis e en mètres avant de remplacer dans la formule."
  },
  {
    id: "U42-276", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Un téléobjectif est formé de L₁ (f'₁ = +80 mm) et L₂ (f'₂ = −40 mm), séparées de e = 50 mm. Calcule sa distance focale image, avec f' = f'₁ f'₂ / (f'₁ + f'₂ − e).",
    reponse: { valeur: 320, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: -320, type: "signe", message: "Le dénominateur vaut 80 − 40 − 50 = −10, négatif, et le numérateur 80 × (−40) est négatif aussi : le quotient est positif." }
    ],
    surLaCopie: "f' = [[f'₁ × f'₂|f'₁ + f'₂ − e]] = [[80 × (−40)|80 − 40 − 50]] = [[−3 200|−10]] = +320 mm",
    explication: "Numérateur : 80 × (−40) = −3 200. Dénominateur : 80 + (−40) − 50 = −10.\nf' = [[−3 200|−10]] = +320 mm.\nLe doublet est plus court que sa focale : le but d'un téléobjectif.",
    indice: "Garde les signes de f'₂ et du dénominateur."
  },
  {
    id: "U42-277", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    question: "Dans un doublet achromatique accolé, on associe une lentille convergente à une lentille divergente. De quel verre est faite la lentille convergente, la plus forte en vergence ?",
    choix: ["Du verre le plus dispersif (flint)", "Du verre le moins dispersif (crown)", "Peu importe", "Du verre d'indice le plus faible"],
    bonne: 1,
    explication: "La condition V₁ / ν₁ + V₂ / ν₂ = 0 impose que la lentille de plus forte vergence soit celle de plus grand ν : le verre le moins dispersif, le crown. La lentille divergente, plus faible, est en flint.\nAinsi le doublet reste convergent tout en compensant la dispersion.",
    indice: "Pour que le doublet reste convergent, la plus forte vergence est portée par le verre qui disperse le moins."
  },
  {
    id: "U42-278", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Un verre a les indices nd = 1,517, nF = 1,523 et nC = 1,514. Calcule son nombre d'Abbe ν = (nd − 1) / (nF − nC), arrondi à l'unité.",
    reponse: { valeur: 57, unite: "", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 0.0174, type: "notion", message: "Tu as fait le rapport à l'envers. ν = (nd − 1) / (nF − nC)." }
    ],
    surLaCopie: "ν = [[nd − 1|nF − nC]] = [[0,517|0,009]] ≈ 57",
    explication: "nd − 1 = 0,517 et nF − nC = 1,523 − 1,514 = 0,009.\nν = [[0,517|0,009]] ≈ 57,4. C'est un verre peu dispersif, de type crown.",
    indice: "Calcule la différence nF − nC, puis divise nd − 1 par elle."
  },
  {
    id: "U42-279", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un objectif de focale f' = 200 mm a une pupille d'entrée de diamètre 25 mm. Calcule son nombre d'ouverture N (écrit f/N).",
    reponse: { valeur: 8, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.125, type: "notion", message: "Tu as fait le rapport à l'envers. N = f' / D." }
    ],
    surLaCopie: "N = [[f'|D]] = [[200|25]] = 8 : l'objectif est ouvert à f/8.",
    explication: "N = [[f'|D]] = [[200|25]] = 8. L'objectif est ouvert à f/8.",
    indice: "N est le rapport de la focale au diamètre de la pupille d'entrée."
  },
  {
    id: "U42-280", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    question: "Les pixels d'un capteur sont plus petits que la tache de diffraction de l'objectif. Que se passe-t-il si on réduit encore la taille des pixels ?",
    choix: ["La résolution de l'image augmente toujours", "La résolution ne progresse plus : elle est limitée par la diffraction de l'objectif", "L'image devient plus lumineuse", "La diffraction disparaît"],
    bonne: 1,
    explication: "La résolution de l'ensemble est limitée par le plus grand des deux : la taille des pixels ou la tache de diffraction. Quand les pixels sont déjà plus petits que cette tache, les rendre plus petits ne montre pas de détails de plus.\nIls captent même moins de lumière chacun.",
    indice: "La résolution globale est limitée par le facteur le moins bon."
  },
  {
    id: "U42-281", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "L'œil sépare deux points si l'angle qui les sépare est au moins 3 × 10⁻⁴ rad. Calcule le plus petit détail qu'il distingue à 250 mm, en micromètres.",
    reponse: { valeur: 75, unite: "µm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.075, type: "unite", message: "Tu as laissé le résultat en millimètres : 0,075 mm = 75 µm. Convertis en micromètres (× 1 000)." }
    ],
    surLaCopie: "Détail = α × distance = 3 × 10⁻⁴ × 250 = 0,075 mm = 75 µm",
    explication: "Détail = α × distance = 3 × 10⁻⁴ × 250 mm = 0,075 mm = 75 µm.",
    indice: "Un petit angle en radians multiplié par la distance donne la taille du détail."
  },
  {
    id: "U42-282", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "L'œil seul distingue des détails de 75 µm à 250 mm. On regarde avec une loupe de grossissement commercial 5. Quel plus petit détail distingue-t-on ?",
    reponse: { valeur: 15, unite: "µm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 375, type: "notion", message: "Tu as multiplié par Gc. La loupe agrandit l'angle : le plus petit détail est divisé par Gc." }
    ],
    surLaCopie: "Avec l'instrument, l'angle est multiplié par Gc : détail = [[75|5]] = 15 µm",
    explication: "La loupe multiplie les angles par Gc = 5 : le plus petit détail distingué est divisé par 5. 75 / 5 = 15 µm.\nCela vaut tant que la diffraction de la loupe ne limite pas encore la résolution.",
    indice: "Un instrument qui grossit permet de voir des détails plus petits : divise."
  },
  {
    id: "U42-283", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un objectif de microscope a une ouverture numérique ON = 1,25. Pour λ = 500 nm, calcule la plus petite distance séparable ε = 0,61 λ / ON (objectif à immersion, d'où ON > 1), en micromètres.",
    reponse: { valeur: 0.24, unite: "µm", decimales: 2, tolerance: 0.01, signe: false },
    erreurs: [
      { valeur: 0.49, type: "notion", message: "Tu as pris 1,22 au lieu de 0,61. Dans ε = 0,61 λ / ON, le facteur est 0,61." }
    ],
    surLaCopie: "ε = [[0,61 × λ|ON]] = [[0,61 × 500|1,25]] = 244 nm ≈ 0,24 µm",
    explication: "ε = [[0,61 × λ|ON]] = [[0,61 × 500|1,25]] = 244 nm ≈ 0,24 µm.\nPlus l'ouverture numérique est grande, plus on sépare des détails fins.",
    indice: "Garde λ en nanomètres, puis convertis en micromètres à la fin."
  },
  {
    id: "U42-284", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Un instrument compte 4 lentilles minces, toutes traitées antireflet : chaque surface air-verre transmet 98 % de la lumière. Calcule la transmission totale, en pourcentage.",
    reponse: { valeur: 85, unite: "%", decimales: 0, signe: false, tolerance: 1 },
    erreurs: [
      { valeur: 92, type: "notion", message: "Tu as compté 4 surfaces. Chaque lentille a 2 surfaces air-verre : 8 surfaces au total, soit 0,98⁸." }
    ],
    surLaCopie: "4 lentilles : 8 surfaces. T = 0,98⁸ ≈ 0,85, soit 85 %",
    explication: "Une lentille a deux surfaces air-verre : 4 lentilles font 8 surfaces.\nT = 0,98⁸ ≈ 0,851, soit environ 85 %.",
    indice: "Compte les surfaces, pas les lentilles."
  },
  {
    id: "U42-285", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    question: "Pourquoi utilise-t-on souvent des traitements antireflet à plusieurs couches plutôt qu'à une seule ?",
    choix: ["Pour que le verre soit plus épais", "Pour absorber plus de lumière", "Pour réduire les reflets sur un large domaine de longueurs d'onde", "Pour augmenter l'indice du verre"],
    bonne: 2,
    explication: "Une couche unique n'est optimale que pour une longueur d'onde. Avec plusieurs couches d'indices et d'épaisseurs différents, on annule les reflets sur presque tout le spectre visible : le reflet résiduel est faible et peu coloré.\nLe traitement ne doit pas absorber la lumière.",
    indice: "Une seule couche n'est optimale que pour une longueur d'onde."
  },
  {
    id: "U42-286", difficulte: "difficile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Un verre a un indice de 1,5. Calcule l'indice idéal d'une couche antireflet monocouche, avec n couche = √n verre (arrondi au centième).",
    reponse: { valeur: 1.22, unite: "", decimales: 2, tolerance: 0.01, signe: false },
    erreurs: [
      { valeur: 0.75, type: "notion", message: "Tu as divisé l'indice par 2. L'indice idéal de la couche est la racine carrée de l'indice du verre." }
    ],
    surLaCopie: "n couche = √n verre = √1,5 ≈ 1,22",
    explication: "n couche = √1,5 ≈ 1,225.\nLe fluorure de magnésium (n = 1,38) est un compromis courant : son indice est un peu plus élevé que l'idéal, mais le matériau est solide.",
    indice: "Pour annuler les reflets, les deux reflets doivent avoir la même intensité : l'indice de la couche est la racine de celui du verre."
  },
  {
    id: "U42-287", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    question: "Pourquoi un traitement antireflet est-il particulièrement utile sur un verre de haut indice ?",
    choix: ["Parce qu'un indice élevé fait réfléchir plus de lumière à chaque surface", "Parce que le verre est plus fragile", "Parce que le verre absorbe plus de lumière", "Parce que son indice diminue avec l'épaisseur"],
    bonne: 0,
    explication: "La réflexion R = ((n − 1) / (n + 1))² augmente avec l'indice : environ 4 % par face pour n = 1,5, plus de 6 % pour n = 1,7. Les reflets gênent donc plus, et le traitement antireflet apporte plus.",
    indice: "Compare R pour n = 1,5 et pour n = 1,7."
  },
  {
    id: "U42-288", difficulte: "difficile", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Une couche antireflet d'indice 1,38 a une épaisseur de 100 nm. Calcule la différence de marche entre les deux rayons réfléchis, avec δ = 2 n e (sans compter les déphasages à la réflexion).",
    reponse: { valeur: 276, unite: "nm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 138, type: "notion", message: "Tu as oublié l'aller-retour dans la couche : la différence de marche est δ = 2 n e, pas n e." }
    ],
    surLaCopie: "δ = 2 n e = 2 × 1,38 × 100 = 276 nm, soit environ λ / 2 pour λ ≈ 552 nm",
    explication: "δ = 2 n e = 2 × 1,38 × 100 = 276 nm.\nC'est environ une demi-longueur d'onde pour λ ≈ 552 nm : les deux rayons réfléchis sont en opposition de phase et s'annulent. Les deux réflexions subissent le même déphasage (n couche < n verre), il n'intervient donc pas.",
    indice: "Le rayon traverse la couche deux fois : aller et retour."
  },

  // ---------- Lot 5 du 22 nov. : photométrie, interférences, polarisation, champs ----------
  {
    id: "U42-289", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Quelle est l'unité de l'intensité lumineuse d'une source ?",
    choix: ["Le lumen (lm)", "Le lux (lx)", "La candela (cd)", "Le watt (W)"],
    bonne: 2,
    explication: "L'intensité lumineuse se mesure en candelas (cd) : c'est le flux émis par unité d'angle solide, 1 cd = 1 lm / sr.\nLe lumen mesure le flux, le lux l'éclairement (lm / m²), le watt une puissance énergétique.",
    indice: "Intensité : flux par angle solide. Pense à l'unité de base du système photométrique."
  },
  {
    id: "U42-290", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Une lampe à LED consomme 10 W et émet un flux de 1 000 lm. Calcule son efficacité lumineuse, en lumens par watt.",
    reponse: { valeur: 100, unite: "lm/W", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.01, type: "notion", message: "Tu as divisé la puissance par le flux. L'efficacité lumineuse est le flux par watt : Φ / P." }
    ],
    surLaCopie: "Efficacité = [[Φ|P]] = [[1 000|10]] = 100 lm/W",
    explication: "Efficacité = [[Φ|P]] = [[1 000|10]] = 100 lm/W.\nUne lampe à incandescence fait environ 10 lm/W : la LED donne dix fois plus de lumière pour la même puissance.",
    indice: "L'efficacité lumineuse est le flux obtenu pour chaque watt consommé."
  },
  {
    id: "U42-291", difficulte: "facile", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Un flux de 600 lm éclaire uniformément une surface de 3 m². Calcule l'éclairement moyen.",
    reponse: { valeur: 200, unite: "lx", decimales: 0, signe: false },
    erreurs: [
      { valeur: 1800, type: "notion", message: "Tu as multiplié le flux par la surface. L'éclairement est le flux reçu par unité de surface : E = Φ / S." }
    ],
    surLaCopie: "E = [[Φ|S]] = [[600|3]] = 200 lx",
    explication: "E = [[Φ|S]] = [[600|3]] = 200 lx. Un lux est un lumen par mètre carré.",
    indice: "L'éclairement est un flux reçu par unité de surface."
  },
  {
    id: "U42-292", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "calcul",
    question: "Une source de 200 cd éclaire un plan en incidence normale. On veut un éclairement de 50 lx. À quelle distance faut-il placer le plan ?",
    reponse: { valeur: 2, unite: "m", decimales: 0, signe: false },
    erreurs: [
      { valeur: 4, type: "notion", message: "Tu as oublié la racine carrée. De E = I / d², on tire d = √(I / E) = √4." }
    ],
    surLaCopie: "E = [[I|d²]] donc d² = [[I|E]] = [[200|50]] = 4, d = 2 m",
    explication: "E = [[I|d²]], donc d² = [[I|E]] = [[200|50]] = 4. Donc d = √4 = 2 m.",
    indice: "Isole d² dans la loi de Bouguer, puis prends la racine."
  },
  {
    id: "U42-293", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    type: "pose",
    question: "Deux lampes éclairent le même point en incidence normale : A (100 cd) à 1 m et B (200 cd) à 2 m. Calcule l'éclairement total en ce point, étape par étape.",
    etapes: [
      {
        consigne: "Éclairement dû à la lampe A (en lx)",
        reponse: { valeur: 100, unite: "lx", decimales: 0, signe: false },
        aide: "E = I / d².",
        ligne: "E_A = [[100|1²]] = 100 lx"
      },
      {
        consigne: "Éclairement dû à la lampe B (en lx)",
        reponse: { valeur: 50, unite: "lx", decimales: 0, signe: false },
        aide: "E = I / d², avec d = 2 m.",
        ligne: "E_B = [[200|2²]] = [[200|4]] = 50 lx"
      },
      {
        consigne: "Éclairement total (en lx)",
        reponse: { valeur: 150, unite: "lx", decimales: 0, signe: false },
        aide: "Les éclairements de sources indépendantes s'additionnent.",
        ligne: "E = 100 + 50 = 150 lx"
      }
    ],
    explication: "E_A = [[100|1²]] = 100 lx. E_B = [[200|2²]] = 50 lx.\nLes éclairements s'additionnent : 100 + 50 = 150 lx."
  },
  {
    id: "U42-294", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "On passe d'une ouverture f/5,6 à f/4. Que devient la quantité de lumière reçue par le capteur ?",
    choix: ["Elle est multipliée par 1,4", "Elle est à peu près doublée", "Elle est multipliée par 4", "Elle ne change pas"],
    bonne: 1,
    explication: "Le diamètre de la pupille est multiplié par 5,6 / 4 = 1,4, soit √2. Sa surface, donc la lumière reçue, est multipliée par 1,4² = 2.\nLa série des ouvertures (f/2,8 ; 4 ; 5,6 ; 8 ; 11…) est faite de pas de √2 : chaque cran double ou divise par deux la lumière.",
    indice: "La lumière est proportionnelle à la surface de la pupille, donc au carré du diamètre.",
    erreurs: {
      0: { type: "notion", message: "1,4 est le rapport des diamètres. La lumière dépend de la surface, donc du carré : 1,4² = 2." }
    }
  },
  {
    id: "U42-295", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Dans l'expérience des fentes d'Young, la frange centrale est équidistante des deux fentes. Quelle est la différence de marche en ce point et comment apparaît-il ?",
    choix: ["δ = λ / 2, il est sombre", "δ = λ, il est sombre", "δ = λ / 2, il est brillant", "δ = 0, il est brillant"],
    bonne: 3,
    explication: "Au milieu, les deux trajets ont la même longueur : δ = 0. Les ondes arrivent en phase : interférence constructive, frange brillante (ordre 0).\nδ = λ / 2 donnerait une frange sombre.",
    indice: "Les deux trajets sont de même longueur. Que vaut leur différence ?"
  },
  {
    id: "U42-296", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Fentes d'Young distantes de a = 0,3 mm, écran à D = 2,4 m. On mesure un interfrange de 4 mm. Calcule la longueur d'onde de la lumière, en nanomètres.",
    reponse: { valeur: 500, unite: "nm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.0000005, type: "unite", message: "Tu as laissé le résultat en mètres : 5 × 10⁻⁷ m = 500 nm. Convertis en nanomètres (× 10⁹)." }
    ],
    surLaCopie: "i = [[λ × D|a]] donc λ = [[i × a|D]] = [[4 × 10⁻³ × 0,3 × 10⁻³|2,4]] = 5 × 10⁻⁷ m = 500 nm",
    explication: "i = [[λ × D|a]], donc λ = [[i × a|D]].\nλ = [[4 × 10⁻³ × 0,3 × 10⁻³|2,4]] = 5 × 10⁻⁷ m = 500 nm.",
    indice: "Isole λ dans la formule de l'interfrange et convertis tout en mètres."
  },
  {
    id: "U42-297", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Un réseau a 300 traits par millimètre. Il est éclairé en incidence normale par une lumière de 600 nm. Calcule l'angle de déviation de l'ordre 2, en degrés (sin θ = p λ / a).",
    reponse: { valeur: 21.1, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 10.4, type: "notion", message: "Tu as calculé l'ordre 1. Pour l'ordre 2, il faut p = 2 : sin θ = 2 λ / a." }
    ],
    surLaCopie: "a = [[1|300]] mm ≈ 3,33 µm\nsin θ = [[2 × λ|a]] = [[2 × 0,6|3,33]] = 0,36, donc θ ≈ 21,1°",
    explication: "Le pas vaut a = [[1|300]] mm ≈ 3,33 µm.\nsin θ = [[2 × 0,6|3,33]] = 0,36, donc θ = arcsin(0,36) ≈ 21,1°.",
    indice: "Pour l'ordre 2, le numérateur est 2 λ."
  },
  {
    id: "U42-298", difficulte: "facile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "calcul",
    question: "Un réseau porte 400 traits par millimètre. Calcule son pas a, en micromètres.",
    reponse: { valeur: 2.5, unite: "µm", decimales: 1, signe: false },
    erreurs: [
      { valeur: 0.0025, type: "unite", message: "Tu as laissé le résultat en millimètres : 0,0025 mm = 2,5 µm. Convertis en micromètres (× 1 000)." }
    ],
    surLaCopie: "a = [[1|400]] mm = 0,0025 mm = 2,5 µm",
    explication: "Le pas est l'inverse du nombre de traits par unité de longueur : a = [[1|400]] mm = 0,0025 mm = 2,5 µm.",
    indice: "Le pas est la distance entre deux traits : l'inverse du nombre de traits par millimètre."
  },
  {
    id: "U42-299", difficulte: "moyen", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    question: "Pourquoi deux lampes ordinaires placées côte à côte ne produisent-elles pas de franges d'interférence ?",
    choix: ["Leur lumière est trop faible", "Leur lumière n'est pas de la lumière", "Leurs ondes ne sont pas cohérentes : leurs phases varient de façon indépendante", "Les franges existent, mais l'œil ne les voit pas"],
    bonne: 2,
    explication: "Pour obtenir des franges stables, il faut deux ondes cohérentes, de phase relative constante. Deux sources indépendantes ont des phases qui changent au hasard, très vite : les figures d'interférence se brouillent.\nDans l'expérience d'Young, les deux fentes sont éclairées par la même source : les deux ondes sont cohérentes.",
    indice: "Pourquoi, dans l'expérience d'Young, éclaire-t-on les deux fentes avec la même source ?"
  },
  {
    id: "U42-300", difficulte: "difficile", epreuve: "U42", theme: "Interférences et réseaux", session: "complément",
    type: "pose",
    question: "Un réseau a 400 traits par millimètre. Il est éclairé en incidence normale par une lumière de 600 nm. Étudie-le étape par étape.",
    etapes: [
      {
        consigne: "Pas du réseau a (en µm)",
        reponse: { valeur: 2.5, unite: "µm", decimales: 1, signe: false },
        aide: "Le pas est l'inverse du nombre de traits par millimètre.",
        ligne: "a = [[1|400]] mm = 2,5 µm"
      },
      {
        consigne: "Angle de l'ordre 1, θ₁ (en degrés)",
        reponse: { valeur: 13.9, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
        aide: "sin θ₁ = λ / a, avec λ et a dans la même unité.",
        ligne: "sin θ₁ = [[0,6|2,5]] = 0,24, donc θ₁ ≈ 13,9°"
      },
      {
        consigne: "Ordre le plus élevé observable",
        reponse: { valeur: 4, unite: "", decimales: 0, signe: false },
        aide: "sin θ ne peut pas dépasser 1 : p λ / a ≤ 1.",
        ligne: "p ≤ [[a|λ]] = [[2,5|0,6]] ≈ 4,17, donc p = 4"
      }
    ],
    explication: "a = [[1|400]] mm = 2,5 µm. sin θ₁ = [[0,6|2,5]] = 0,24, donc θ₁ ≈ 13,9°.\nOrdre maximal : p ≤ [[a|λ]] ≈ 4,17, donc l'ordre 4 est le plus élevé (de chaque côté de l'ordre 0)."
  },
  {
    id: "U42-301", difficulte: "facile", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "Peut-on polariser une onde sonore dans l'air ?",
    choix: ["Oui, avec un filtre adapté", "Oui, mais seulement en incidence de Brewster", "Oui, comme la lumière", "Non, car c'est une onde longitudinale : elle n'a pas de direction de vibration transversale"],
    bonne: 3,
    explication: "La polarisation n'existe que pour les ondes transversales, où la vibration est perpendiculaire à la direction de propagation. Une onde sonore est longitudinale : la vibration est dans la direction de propagation.\nLe fait que la lumière se polarise prouve qu'elle est transversale.",
    indice: "La polarisation décrit la direction de vibration, perpendiculaire à la propagation."
  },
  {
    id: "U42-302", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "Une lumière polarisée rectilignement traverse un analyseur parfait, et la moitié de l'intensité ressort. Quel angle fait l'axe de l'analyseur avec la direction de polarisation ? (I = I₀ cos² θ)",
    reponse: { valeur: 45, unite: "°", decimales: 0, signe: false },
    erreurs: [
      { valeur: 60, type: "notion", message: "Tu as résolu cos θ = 0,5. La loi de Malus donne cos² θ = 0,5, donc cos θ ≈ 0,707 et θ = 45°." }
    ],
    surLaCopie: "cos² θ = [[I|I₀]] = 0,5 donc cos θ = √0,5 ≈ 0,707, θ = 45°",
    explication: "cos² θ = [[I|I₀]] = 0,5, donc cos θ = √0,5 ≈ 0,707 et θ = 45°.",
    indice: "Pense à prendre la racine carrée avant d'utiliser arccos."
  },
  {
    id: "U42-303", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    question: "La lumière d'un écran LCD est polarisée rectilignement. Un client le regarde avec des lunettes polarisantes et les fait tourner lentement de 90° autour de l'axe de son regard. Que voit-il ?",
    choix: ["L'écran reste identique", "L'écran passe de lumineux à presque noir", "L'écran change de couleur seulement", "L'écran devient flou"],
    bonne: 1,
    explication: "Quand l'axe du verre est parallèle à la polarisation de l'écran, la lumière passe. Après 90°, il est perpendiculaire et la lumière est arrêtée (loi de Malus : cos² 90° = 0) : l'écran paraît presque noir.\nC'est un défaut connu des lunettes polarisantes avec certains écrans : à tester en magasin.",
    indice: "Pense à la loi de Malus avec un angle de 90°."
  },
  {
    id: "U42-304", difficulte: "moyen", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "La lumière se réfléchit sur une surface de verre d'indice 1,6, dans l'air. Calcule l'angle d'incidence de Brewster, mesuré depuis la normale (tan iB = n).",
    reponse: { valeur: 58, unite: "°", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 32, type: "notion", message: "32° est l'angle avec la surface. L'angle d'incidence se mesure depuis la normale." }
    ],
    surLaCopie: "tan iB = n = 1,6, donc iB = arctan(1,6) ≈ 58,0°",
    explication: "tan iB = n = 1,6, donc iB = arctan(1,6) ≈ 58,0°.",
    indice: "Utilise arctan, en degrés."
  },
  {
    id: "U42-305", difficulte: "difficile", epreuve: "U42", theme: "Polarisation", session: "complément",
    type: "calcul",
    question: "De la lumière naturelle traverse un polariseur parfait, puis un analyseur parfait dont l'axe fait 30° avec celui du polariseur. Quel pourcentage de l'intensité initiale ressort ?",
    reponse: { valeur: 37.5, unite: "%", decimales: 1, signe: false, tolerance: 0.1 },
    erreurs: [
      { valeur: 75, type: "notion", message: "Tu as oublié que le premier polariseur arrête déjà la moitié de la lumière naturelle : I₁ = I₀ / 2." }
    ],
    surLaCopie: "Après le polariseur : I₁ = [[I₀|2]]\nAprès l'analyseur : I₂ = I₁ cos² 30° = [[I₀|2]] × 0,75 = 0,375 I₀, soit 37,5 %",
    explication: "Après le polariseur : I₁ = I₀ / 2.\nAprès l'analyseur : I₂ = I₁ cos² 30° = 0,5 × 0,75 I₀ = 0,375 I₀, soit 37,5 %.",
    indice: "Lumière naturelle : la moitié passe au premier polariseur, puis Malus pour le second."
  },
  {
    id: "U42-306", difficulte: "facile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    question: "Qu'appelle-t-on la pupille de sortie d'un instrument ?",
    choix: ["Le diaphragme de champ", "L'image du diaphragme d'ouverture donnée par la partie du système située après lui", "L'ouverture de l'œil", "L'image de l'objet"],
    bonne: 1,
    explication: "La pupille de sortie est l'image du diaphragme d'ouverture à travers la partie du système qui le suit. C'est aussi par là que sort tout le faisceau lumineux utile.\nLa pupille d'entrée, elle, est l'image du même diaphragme à travers la partie qui le précède.",
    indice: "Pense à ce que devient le diaphragme d'ouverture vu depuis l'espace image."
  },
  {
    id: "U42-307", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    question: "Où doit-on placer la pupille de l'œil derrière l'oculaire d'une lunette ?",
    choix: ["Contre l'oculaire, pour être le plus près possible", "Au foyer image de l'oculaire", "Au cercle oculaire, image de l'objectif par l'oculaire", "Le plus loin possible"],
    bonne: 2,
    explication: "Le cercle oculaire est l'image de l'objectif (le diaphragme d'ouverture) donnée par l'oculaire : tous les faisceaux y passent. En y plaçant la pupille de l'œil, on reçoit toute la lumière et tout le champ.\nPlus près ou plus loin, on perd de la lumière ou du champ.",
    indice: "Tous les faisceaux issus de l'objectif passent par un même cercle derrière l'oculaire."
  },
  {
    id: "U42-308", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    type: "calcul",
    question: "Dans un microscope, un diaphragme de champ de diamètre 20 mm est placé dans le plan de l'image intermédiaire. L'objectif a un grandissement γob = −40. Calcule le diamètre du champ observé sur l'objet.",
    reponse: { valeur: 0.5, unite: "mm", decimales: 1, signe: false },
    erreurs: [
      { valeur: 800, type: "notion", message: "Tu as multiplié par γob. Le diaphragme est dans le plan de l'image : le champ sur l'objet est plus petit, divisé par |γob|." }
    ],
    surLaCopie: "Champ sur l'objet = [[20|40]] = 0,5 mm",
    explication: "Le diaphragme est dans le plan de l'image intermédiaire, 40 fois plus grande que l'objet. Le champ sur l'objet est donc 40 fois plus petit : [[20|40]] = 0,5 mm.",
    indice: "L'image est agrandie 40 fois : que vaut la taille correspondante sur l'objet ?"
  },
  {
    id: "U42-309", difficulte: "moyen", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    type: "calcul",
    question: "Dans une lunette, un diaphragme de champ de rayon 6 mm est placé au foyer objet d'un oculaire de focale f'oc = 25 mm. Calcule le champ apparent total, c'est-à-dire l'angle sous lequel on voit les bords du diaphragme (tan θ' = rayon / f'oc).",
    reponse: { valeur: 27, unite: "°", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 13.5, type: "notion", message: "Tu as calculé le demi-champ. Le champ total est 2 θ'." }
    ],
    surLaCopie: "tan θ' = [[6|25]] = 0,24, donc θ' ≈ 13,5°\nChamp apparent total = 2 θ' ≈ 27°",
    explication: "tan θ' = [[6|25]] = 0,24, donc θ' = arctan(0,24) ≈ 13,5°.\nLe champ apparent total vaut 2 θ' ≈ 27°.",
    indice: "Le rayon du diaphragme donne un demi-champ. Pense à doubler."
  },
  {
    id: "U42-310", difficulte: "difficile", epreuve: "U42", theme: "Champs et diaphragmes", session: "complément",
    type: "pose",
    question: "Une lunette de Kepler a un objectif f'ob = 300 mm et un oculaire f'oc = 30 mm. Un diaphragme de champ de rayon 6 mm est placé dans le plan focal commun. Étudie les champs étape par étape.",
    etapes: [
      {
        consigne: "Demi-champ dans l'espace objet, θ (en degrés)",
        reponse: { valeur: 1.15, unite: "°", decimales: 2, tolerance: 0.01, signe: false },
        aide: "tan θ = rayon / f'ob.",
        ligne: "tan θ = [[6|300]] = 0,02, donc θ ≈ 1,15°"
      },
      {
        consigne: "Champ total dans l'espace objet, 2θ (en degrés)",
        reponse: { valeur: 2.29, unite: "°", decimales: 2, tolerance: 0.02, signe: false },
        aide: "Le champ total est le double du demi-champ.",
        ligne: "2 θ ≈ 2,29°"
      },
      {
        consigne: "Champ apparent total dans l'espace image, 2θ' (en degrés)",
        reponse: { valeur: 22.6, unite: "°", decimales: 1, tolerance: 0.2, signe: false },
        aide: "tan θ' = rayon / f'oc.",
        ligne: "tan θ' = [[6|30]] = 0,2, donc θ' ≈ 11,3° et 2 θ' ≈ 22,6°"
      }
    ],
    explication: "Côté objet : tan θ = [[6|300]] = 0,02, θ ≈ 1,15°, champ 2,29°.\nCôté image : tan θ' = [[6|30]] = 0,2, θ' ≈ 11,3°, champ apparent 22,6°.\nLe rapport des tangentes est le grossissement : 0,2 / 0,02 = 10."
  },
  {
    id: "U42-311", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Le cercle oculaire d'une lunette mesure 5 mm. La pupille de l'œil de l'observateur mesure 4 mm et est placée au cercle oculaire. Quel pourcentage de la lumière sortant de la lunette entre dans l'œil ?",
    reponse: { valeur: 64, unite: "%", decimales: 0, signe: false },
    erreurs: [
      { valeur: 80, type: "notion", message: "Tu as fait le rapport des diamètres. La lumière dépend de la surface : il faut le carré, (4/5)² = 0,64." }
    ],
    surLaCopie: "Rapport des surfaces = ([[4|5]])² = 0,64, soit 64 %",
    explication: "La lumière qui entre dans l'œil est proportionnelle à la surface de sa pupille : ([[4|5]])² = 0,64, soit 64 %.\nL'œil ne reçoit donc que 64 % de ce que la lunette peut donner.",
    indice: "Compare des surfaces, donc des carrés de diamètres."
  },
  {
    id: "U42-312", difficulte: "moyen", epreuve: "U42", theme: "Photométrie", session: "complément",
    question: "Un filtre gris ne laisse passer que 12,5 % de la lumière. Sans filtre, le temps de pose est 1/1000 s. Quel temps de pose garde la même exposition ?",
    choix: ["1/500 s", "1/250 s", "1/60 s", "1/125 s"],
    bonne: 3,
    explication: "12,5 % = 1/8 de la lumière : il faut poser 8 fois plus longtemps. 8 × 1/1000 = 1/125 s.\n1/500 s compenserait un filtre à 50 %, 1/250 s un filtre à 25 %.",
    indice: "Quelle fraction de la lumière passe ? Compense en multipliant le temps par l'inverse."
  },
  {
    id: "U42-313", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un appareil photo de focale 300 mm a des pixels de 6 µm. Calcule la taille, sur un objet situé à 100 m, que couvre un pixel du capteur (c'est la limite de résolution due au capteur).",
    reponse: { valeur: 2, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.002, type: "unite", message: "Tu as laissé le résultat en mètres : 2 × 10⁻³ m = 2 mm." }
    ],
    surLaCopie: "α = [[pixel|f']] = [[6 × 10⁻⁶|0,3]] = 2 × 10⁻⁵ rad\nDétail = α × distance = 2 × 10⁻⁵ × 100 = 2 × 10⁻³ m = 2 mm",
    explication: "α = [[6 × 10⁻⁶|0,3]] = 2 × 10⁻⁵ rad.\nDétail = 2 × 10⁻⁵ × 100 = 2 × 10⁻³ m = 2 mm.",
    indice: "Calcule l'angle correspondant à un pixel, puis multiplie par la distance."
  },
  {
    id: "U42-314", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "On veut un doublet achromatique accolé de vergence totale +5 δ, avec un verre de ν₁ = 60 et un verre de ν₂ = 30. Calcule la vergence V₁ de la première lentille (V₁ / ν₁ + V₂ / ν₂ = 0 et V₁ + V₂ = 5).",
    reponse: { valeur: 10, unite: "δ", decimales: 0, signe: true },
    erreurs: [
      { valeur: 5, type: "notion", message: "Tu as pris V₁ égale à la vergence totale. La seconde lentille a aussi une vergence : V₁ + V₂ = 5 avec V₂ ≠ 0." }
    ],
    surLaCopie: "V₂ = −V₁ × [[ν₂|ν₁]] = −[[V₁|2]]\nV₁ + V₂ = [[V₁|2]] = 5 donc V₁ = +10 δ (et V₂ = −5 δ)",
    explication: "L'achromatisme donne V₂ = −V₁ × [[ν₂|ν₁]] = −[[V₁|2]].\nV₁ + V₂ = [[V₁|2]] = 5, donc V₁ = +10 δ et V₂ = −5 δ.",
    indice: "Exprime V₂ en fonction de V₁ avec la condition d'achromatisme, puis reporte dans la somme."
  },

  // ---------- Lot 6 du 22 nov. : loupe, afocales, doublets, résolution, antireflet, conjugaison ----------
  {
    id: "U42-315", difficulte: "facile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Une loupe a une puissance P = +16 δ. Calcule son grossissement commercial.",
    reponse: { valeur: 4, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 16, type: "notion", message: "Tu as pris Gc égal à la puissance. Gc = 0,25 × P (distance conventionnelle 0,25 m)." }
    ],
    surLaCopie: "Gc = 0,25 × P = 0,25 × 16 = 4",
    explication: "Gc = [[250 mm|f']] = 0,25 × P (avec P en dioptries).\nGc = 0,25 × 16 = 4. Une loupe de 16 δ a une focale de 62,5 mm.",
    indice: "Gc = 0,25 × P, avec P en dioptries."
  },
  {
    id: "U42-316", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    question: "Un microscope donne d'un objet une image finale. Comment est-elle par rapport à l'objet ?",
    choix: ["Droite et virtuelle", "Droite et réelle", "Renversée et réelle", "Renversée et virtuelle"],
    bonne: 3,
    explication: "L'objectif forme une image intermédiaire réelle et renversée. L'oculaire, utilisé comme une loupe, en donne une image virtuelle, qui garde ce sens : l'image finale est renversée et virtuelle.\nElle est virtuelle : l'œil la regarde comme s'il était devant un objet réel, mais on ne peut pas la recueillir sur un écran.",
    indice: "L'objectif renverse l'image, l'oculaire fonctionne comme une loupe."
  },
  {
    id: "U42-317", difficulte: "moyen", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "calcul",
    question: "Un microscope a un objectif de focale f'ob = 6 mm, un intervalle optique Δ = 180 mm et un oculaire ×12,5. Calcule son grossissement commercial.",
    reponse: { valeur: 375, unite: "", decimales: 0, signe: false },
    erreurs: [
      { valeur: 30, type: "notion", message: "30 est |γob| = Δ / f'ob. Il faut le multiplier par le grossissement de l'oculaire (12,5)." }
    ],
    surLaCopie: "|γob| = [[Δ|f'ob]] = [[180|6]] = 30\nGc = |γob| × Gc,oc = 30 × 12,5 = 375",
    explication: "|γob| = [[180|6]] = 30. Gc = 30 × 12,5 = 375.",
    indice: "Calcule le grandissement de l'objectif, puis multiplie par le grossissement de l'oculaire."
  },
  {
    id: "U42-318", difficulte: "difficile", epreuve: "U42", theme: "Loupe et microscope", session: "complément",
    type: "pose",
    question: "On observe un objet de 2 mm avec une loupe de f' = +40 mm, placé à 30 mm devant elle (OA = −30 mm). Étudie l'image étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image, OA' (en mm)",
        reponse: { valeur: -120, unite: "mm", decimales: 0, signe: true },
        aide: "Descartes : [[1|OA']] = [[1|f']] + [[1|OA]].",
        ligne: "[[1|OA']] = [[1|40]] − [[1|30]] = [[3|120]] − [[4|120]] = [[−1|120]]\nOA' = −120 mm (image virtuelle)",
        erreurs: [{ valeur: 17.14, type: "signe", message: "Tu as pris OA = +30 mm. L'objet est réel, avant la loupe : OA = −30 mm." }]
      },
      {
        consigne: "Grandissement γ",
        reponse: { valeur: 4, unite: "", decimales: 0, signe: true },
        aide: "γ = OA' / OA.",
        ligne: "γ = [[−120|−30]] = +4 (image droite)"
      },
      {
        consigne: "Taille de l'image A'B' (en mm)",
        reponse: { valeur: 8, unite: "mm", decimales: 0, signe: true },
        aide: "A'B' = γ × AB.",
        ligne: "A'B' = 4 × 2 = +8 mm"
      }
    ],
    explication: "[[1|OA']] = [[1|40]] − [[1|30]] = [[−1|120]], donc OA' = −120 mm : image virtuelle, du même côté que l'objet.\nγ = [[−120|−30]] = +4 : droite et 4 fois plus grande. A'B' = 4 × 2 = 8 mm."
  },
  {
    id: "U42-319", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    question: "Quel est un inconvénient de la lunette de Galilée par rapport à celle de Kepler ?",
    choix: ["Son image est renversée", "Elle est plus longue", "Elle n'a pas d'image intermédiaire réelle : on ne peut pas y placer de réticule, et son champ est limité", "Elle ne peut pas être afocale"],
    bonne: 2,
    explication: "La lunette de Galilée a un oculaire divergent : il n'y a pas d'image intermédiaire réelle. On ne peut pas y placer de réticule ni de diaphragme de champ, et son champ est limité.\nSes atouts sont d'être courte et de donner une image droite.",
    indice: "Une image intermédiaire réelle permet de placer un réticule : la lunette de Galilée n'en a pas."
  },
  {
    id: "U42-320", difficulte: "moyen", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Kepler a un grossissement G = −10 et un oculaire f'oc = +30 mm. Calcule sa longueur (distance entre l'objectif et l'oculaire).",
    reponse: { valeur: 330, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 270, type: "signe", message: "Tu as soustrait. Pour une lunette de Kepler, les deux focales sont positives : e = f'ob + f'oc." }
    ],
    surLaCopie: "f'ob = −G × f'oc = 10 × 30 = 300 mm\ne = f'ob + f'oc = 300 + 30 = 330 mm",
    explication: "f'ob = −G × f'oc = 10 × 30 = 300 mm.\nLongueur : e = f'ob + f'oc = 300 + 30 = 330 mm.",
    indice: "Trouve d'abord la focale de l'objectif avec le grossissement."
  },
  {
    id: "U42-321", difficulte: "difficile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Une lunette de Galilée a un grossissement G = +3 et une longueur de 100 mm. Calcule la focale de son objectif.",
    reponse: { valeur: 150, unite: "mm", decimales: 0, signe: false },
    erreurs: [
      { valeur: 50, type: "notion", message: "50 mm est la valeur absolue de f'oc. L'objectif est 3 fois plus long : f'ob = 3 × 50." }
    ],
    surLaCopie: "G = −[[f'ob|f'oc]] = +3 donc f'oc = −[[f'ob|3]]\ne = f'ob + f'oc = f'ob − [[f'ob|3]] = [[2 f'ob|3]] = 100 donc f'ob = 150 mm (et f'oc = −50 mm)",
    explication: "G = +3 donne f'oc = −[[f'ob|3]].\nLongueur : e = f'ob + f'oc = [[2 f'ob|3]] = 100 mm, donc f'ob = 150 mm. L'oculaire est f'oc = −50 mm.",
    indice: "Exprime f'oc en fonction de f'ob avec G, puis écris la longueur de la lunette."
  },
  {
    id: "U42-322", difficulte: "facile", epreuve: "U42", theme: "Lunettes afocales", session: "complément",
    type: "calcul",
    question: "Un objet est vu à l'œil nu sous un angle de 0,5°. On l'observe avec une lunette de grossissement G = −8. Sous quel angle voit-on l'image, en valeur absolue ?",
    reponse: { valeur: 4, unite: "°", decimales: 0, signe: false },
    erreurs: [
      { valeur: 0.0625, type: "notion", message: "Tu as divisé par G. Un grossissement multiplie l'angle : α' = |G| × α." }
    ],
    surLaCopie: "|α'| = |G| × α = 8 × 0,5° = 4°",
    explication: "Le grossissement est le rapport des angles : |α'| = |G| × α = 8 × 0,5° = 4°. Le signe moins de G indique que l'image est renversée.",
    indice: "Le grossissement est un rapport d'angles."
  },
  {
    id: "U42-323", difficulte: "moyen", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Deux lentilles minces accolées ont pour focales f'₁ = +100 mm et f'₂ = +50 mm. Calcule la distance focale image du système, en millimètres.",
    reponse: { valeur: 33.3, unite: "mm", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 150, type: "notion", message: "Tu as additionné les focales. Ce sont les vergences qui s'ajoutent : V = [[1|f'₁]] + [[1|f'₂]]." }
    ],
    surLaCopie: "V = [[1|0,1]] + [[1|0,05]] = 10 + 20 = 30 δ\nf' = [[1|30]] ≈ 0,0333 m = 33,3 mm",
    explication: "Vergences : [[1|0,1]] = 10 δ et [[1|0,05]] = 20 δ. V = 30 δ.\nf' = [[1|30]] ≈ 0,0333 m = 33,3 mm.",
    indice: "Pour des lentilles accolées, ce sont les vergences qui s'ajoutent."
  },
  {
    id: "U42-324", difficulte: "difficile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    type: "calcul",
    question: "Un doublet est formé d'une lentille convergente de V₁ = +10 δ et d'une divergente de V₂ = −10 δ, séparées de e = 50 mm. Calcule sa vergence avec V = V₁ + V₂ − e V₁ V₂.",
    reponse: { valeur: 5, unite: "δ", decimales: 0, signe: true },
    erreurs: [
      { valeur: 0, type: "notion", message: "Tu as retenu V₁ + V₂ et oublié le terme de séparation. Ici −e V₁ V₂ = −0,05 × 10 × (−10) = +5 δ." }
    ],
    surLaCopie: "V = V₁ + V₂ − e V₁ V₂ = 10 − 10 − 0,05 × 10 × (−10) = 0 + 5 = +5 δ",
    explication: "e = 50 mm = 0,05 m.\nV = 10 − 10 − 0,05 × 10 × (−10) = 0 + 5 = +5 δ.\nAccolées, ces deux lentilles s'annuleraient ; séparées, le doublet reste convergent.",
    indice: "Attention au signe de V₂ dans le produit V₁ V₂."
  },
  {
    id: "U42-325", difficulte: "facile", epreuve: "U42", theme: "Doublets et achromatisme", session: "complément",
    question: "Une lentille convergente en verre éclairée en lumière blanche. Pour quelle couleur le foyer image est-il le plus proche de la lentille ?",
    choix: ["Le rouge", "Le vert", "Toutes les couleurs ont le même foyer", "Le bleu-violet"],
    bonne: 3,
    explication: "L'indice du verre est plus grand pour les courtes longueurs d'onde : le bleu-violet est plus dévié que le rouge, son foyer est plus proche de la lentille. C'est l'aberration chromatique.\nUn doublet achromatique la compense.",
    indice: "L'indice du verre dépend de la longueur d'onde. Où est-il le plus grand ?"
  },
  {
    id: "U42-326", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "La pupille de l'œil a un diamètre de 2 mm en pleine lumière. Pour λ = 550 nm, calcule la limite de résolution due à la diffraction, α = 1,22 λ / D, en milliradians.",
    reponse: { valeur: 0.34, unite: "mrad", decimales: 2, tolerance: 0.01, signe: false },
    erreurs: [
      { valeur: 0.275, type: "notion", message: "Il manque le facteur 1,22 de la formule. α = 1,22 λ / D." }
    ],
    surLaCopie: "α = [[1,22 × λ|D]] = [[1,22 × 550 × 10⁻⁹|2 × 10⁻³]] ≈ 3,4 × 10⁻⁴ rad ≈ 0,34 mrad",
    explication: "α = [[1,22 × 550 × 10⁻⁹|2 × 10⁻³]] ≈ 3,36 × 10⁻⁴ rad ≈ 0,34 mrad.\nC'est l'ordre de grandeur de la résolution de l'œil.",
    indice: "Convertis λ et D en mètres, puis exprime le résultat en milliradians (× 1 000)."
  },
  {
    id: "U42-327", difficulte: "facile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    question: "Pour séparer deux étoiles très proches, quel instrument faut-il choisir, à longueur d'onde égale ?",
    choix: ["Un télescope de petit diamètre", "Un télescope de grand diamètre", "Un instrument de grande focale seulement", "Peu importe son diamètre"],
    bonne: 1,
    explication: "La limite de diffraction α = 1,22 λ / D diminue quand le diamètre D augmente. Pour séparer des étoiles proches, il faut un instrument de grande pupille d'entrée.\nLa focale agrandit l'image, mais ne change pas la limite de résolution due à la diffraction.",
    indice: "α = 1,22 λ / D : regarde ce qui diminue α."
  },
  {
    id: "U42-328", difficulte: "difficile", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un objectif de diamètre D = 80 mm est utilisé à λ = 550 nm. L'œil a une limite de résolution de 3 × 10⁻⁴ rad. Calcule le grossissement utile (rapport entre la limite de l'œil et celle de la diffraction), arrondi à l'unité.",
    reponse: { valeur: 36, unite: "", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 0.028, type: "notion", message: "Tu as fait le rapport à l'envers. Le grossissement utile est α de l'œil divisé par α de diffraction." }
    ],
    surLaCopie: "α = [[1,22 × 550 × 10⁻⁹|0,08]] ≈ 8,4 × 10⁻⁶ rad\nG utile = [[3 × 10⁻⁴|8,4 × 10⁻⁶]] ≈ 36",
    explication: "Diffraction : α = [[1,22 × 550 × 10⁻⁹|0,08]] ≈ 8,4 × 10⁻⁶ rad.\nG utile = [[3 × 10⁻⁴|8,4 × 10⁻⁶]] ≈ 36.",
    indice: "Calcule d'abord la limite due à la diffraction, puis le rapport avec celle de l'œil."
  },
  {
    id: "U42-329", difficulte: "moyen", epreuve: "U42", theme: "Ouverture et résolution", session: "complément",
    type: "calcul",
    question: "Un objectif de 135 mm de focale est ouvert à f/2,8. Calcule le diamètre de sa pupille d'entrée, en millimètres (arrondi à l'unité).",
    reponse: { valeur: 48, unite: "mm", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 378, type: "notion", message: "Tu as multiplié f' par N. D = f' / N." }
    ],
    surLaCopie: "D = [[f'|N]] = [[135|2,8]] ≈ 48 mm",
    explication: "D = [[f'|N]] = [[135|2,8]] ≈ 48,2 mm.",
    indice: "Le nombre d'ouverture est le rapport focale sur diamètre."
  },
  {
    id: "U42-330", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Un instrument compte 3 lentilles minces non traitées. Chaque surface air-verre transmet 96 % de la lumière. Calcule la transmission totale, en pourcentage (arrondie au dixième).",
    reponse: { valeur: 78.3, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 88.5, type: "notion", message: "Tu as compté 3 surfaces. Chaque lentille a 2 surfaces : 6 surfaces au total, soit 0,96⁶." }
    ],
    surLaCopie: "3 lentilles : 6 surfaces. T = 0,96⁶ ≈ 0,783, soit 78,3 %",
    explication: "3 lentilles font 6 surfaces air-verre. T = 0,96⁶ ≈ 0,783, soit 78,3 %.",
    indice: "Compte les surfaces, pas les lentilles."
  },
  {
    id: "U42-331", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Une couche antireflet d'indice 1,38 est optimisée pour le bleu, λ = 480 nm. Calcule son épaisseur minimale, en nanomètres.",
    reponse: { valeur: 87, unite: "nm", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 174, type: "notion", message: "Tu as pris une demi-onde (λ / 2n). L'épaisseur minimale est un quart d'onde : λ / 4n." }
    ],
    surLaCopie: "e = [[λ|4n]] = [[480|4 × 1,38]] ≈ 87 nm",
    explication: "e = [[λ|4n]] = [[480|4 × 1,38]] ≈ 87 nm.",
    indice: "L'épaisseur est le quart de la longueur d'onde dans la couche."
  },
  {
    id: "U42-332", difficulte: "moyen", epreuve: "U42", theme: "Transmission et antireflet", session: "complément",
    type: "calcul",
    question: "Un verre a un indice n = 1,9. Calcule le pourcentage de lumière réfléchi par une face, en incidence normale : R = ((n − 1) / (n + 1))².",
    reponse: { valeur: 9.6, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 90.4, type: "notion", message: "Tu as calculé la transmission T = 1 − R. La question demande la lumière réfléchie." }
    ],
    surLaCopie: "R = ([[n − 1|n + 1]])² = ([[0,9|2,9]])² ≈ 0,096, soit 9,6 %",
    explication: "R = ([[0,9|2,9]])² ≈ 0,096, soit environ 9,6 % par face.\nUn verre d'indice 1,9 réfléchit plus du double d'un verre d'indice 1,5 (4 %) : l'antireflet y est très utile.",
    indice: "Remplace n par 1,9, puis passe en pourcentage."
  },
  {
    id: "U42-333", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Lentille mince convergente de f' = +30 mm. Un objet réel est à 90 mm devant elle. Calcule OA', avec son signe.",
    reponse: { valeur: 45, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 22.5, type: "signe", message: "Tu as pris OA = +90 mm. L'objet est réel, avant la lentille : OA = −90 mm." }
    ],
    surLaCopie: "OA = −90 mm\n[[1|OA']] = [[1|30]] + [[1|−90]] = [[3|90]] − [[1|90]] = [[2|90]]\nOA' = +45 mm",
    explication: "OA = −90 mm. [[1|OA']] = [[1|30]] − [[1|90]] = [[2|90]], donc OA' = +45 mm : image réelle.",
    indice: "Un objet réel est avant la lentille : OA est négatif."
  },
  {
    id: "U42-334", difficulte: "moyen", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Lentille mince divergente de f' = −30 mm. Un objet réel est à 60 mm devant elle. Calcule le grandissement γ (arrondi au centième).",
    reponse: { valeur: 0.33, unite: "", decimales: 2, tolerance: 0.01, signe: true },
    erreurs: [
      { valeur: 3, type: "notion", message: "Tu as calculé OA / OA'. Le grandissement est OA' / OA." }
    ],
    surLaCopie: "[[1|OA']] = [[1|−30]] + [[1|−60]] = [[−3|60]], donc OA' = −20 mm\nγ = [[OA'|OA]] = [[−20|−60]] ≈ +0,33 (image droite, trois fois plus petite)",
    explication: "[[1|OA']] = [[1|−30]] + [[1|−60]] = [[−3|60]], donc OA' = −20 mm.\nγ = [[−20|−60]] ≈ +0,33 : l'image est droite, virtuelle et trois fois plus petite.",
    indice: "Trouve OA' d'abord, puis γ = OA' / OA."
  },
  {
    id: "U42-335", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Où se trouve l'image d'un objet placé au foyer objet d'une lentille convergente ?",
    choix: ["Au foyer image", "À l'infini", "Au centre optique", "À 2f' après la lentille"],
    bonne: 1,
    explication: "Les rayons issus du foyer objet ressortent parallèles entre eux : l'image est à l'infini.\nDescartes : [[1|OA']] = [[1|f']] + [[1|OA]] avec OA = −f' donne [[1|OA']] = 0.",
    indice: "Que deviennent les rayons issus du foyer objet après la lentille ?"
  },
  {
    id: "U42-336", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "On veut former sur un écran, placé à 100 mm d'une lentille de f' = +25 mm, l'image nette d'un objet. Où placer l'objet ? Calcule OA, avec son signe.",
    reponse: { valeur: -33.3, unite: "mm", decimales: 1, tolerance: 0.1, signe: true },
    erreurs: [
      { valeur: 20, type: "notion", message: "Tu as ajouté 1/f' et 1/OA'. On retourne Descartes : [[1|OA]] = [[1|OA']] − [[1|f']]." }
    ],
    surLaCopie: "OA' = +100 mm\n[[1|OA]] = [[1|OA']] − [[1|f']] = [[1|100]] − [[1|25]] = [[−3|100]]\nOA ≈ −33,3 mm",
    explication: "L'écran reçoit une image réelle : OA' = +100 mm.\n[[1|OA]] = [[1|100]] − [[1|25]] = [[−3|100]], donc OA ≈ −33,3 mm.\nL'objet est 33,3 mm avant la lentille.",
    indice: "Retourne Descartes pour isoler 1/OA."
  },
  {
    id: "U42-337", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "pose",
    question: "L₁ (f'₁ = +50 mm), puis L₂ (f'₂ = +30 mm) placée 120 mm après L₁. Un objet réel est à 75 mm devant L₁. Étudie la chaîne étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image intermédiaire A₁ par rapport à L₁, O₁A₁ (en mm)",
        reponse: { valeur: 150, unite: "mm", decimales: 0, signe: true },
        aide: "Descartes pour L₁ : [[1|O₁A₁]] = [[1|f'₁]] + [[1|O₁A]].",
        ligne: "[[1|O₁A₁]] = [[1|50]] − [[1|75]] = [[1|150]]\nO₁A₁ = +150 mm"
      },
      {
        consigne: "Position de A₁ par rapport à L₂, O₂A₁ (en mm)",
        reponse: { valeur: 30, unite: "mm", decimales: 0, signe: true },
        aide: "A₁ est à 150 mm de L₁, et L₂ est à 120 mm de L₁.",
        ligne: "O₂A₁ = 150 − 120 = +30 mm (objet virtuel pour L₂)",
        erreurs: [{ valeur: -30, type: "signe", message: "A₁ est après L₂ : objet virtuel, O₂A₁ = +30 mm." }]
      },
      {
        consigne: "Position de l'image finale par rapport à L₂, O₂A' (en mm)",
        reponse: { valeur: 15, unite: "mm", decimales: 0, signe: true },
        aide: "Descartes pour L₂ : [[1|O₂A']] = [[1|f'₂]] + [[1|O₂A₁]].",
        ligne: "[[1|O₂A']] = [[1|30]] + [[1|30]] = [[2|30]]\nO₂A' = +15 mm"
      }
    ],
    explication: "L₁ : [[1|O₁A₁]] = [[1|50]] − [[1|75]] = [[1|150]], O₁A₁ = +150 mm.\nA₁ est 30 mm après L₂ : objet virtuel, O₂A₁ = +30 mm.\nL₂ : [[1|O₂A']] = [[1|30]] + [[1|30]] = [[2|30]], O₂A' = +15 mm."
  },
  {
    id: "U42-338", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Quel type de lentille mince a un foyer image virtuel, situé avant la lentille ?",
    choix: ["Une lentille convergente", "Une lentille divergente", "Aucune lentille", "Toute lentille épaisse"],
    bonne: 1,
    explication: "Une lentille divergente a une distance focale image négative : son foyer image F' est avant la lentille, et il est virtuel (les rayons n'y passent pas, ils semblent en venir).\nLe foyer image d'une lentille convergente est réel, après la lentille.",
    indice: "Regarde le signe de f' : un foyer image avant la lentille correspond à un f' négatif."
  },
  {
    id: "U42-339", difficulte: "difficile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    type: "calcul",
    question: "Un objet de 4 mm traverse deux lentilles. Le grandissement de la première vaut γ₁ = −3, celui de la seconde γ₂ = +0,5. Calcule la taille algébrique de l'image finale.",
    reponse: { valeur: -6, unite: "mm", decimales: 0, signe: true },
    erreurs: [
      { valeur: 6, type: "signe", message: "Tu as oublié le signe. γ = γ₁ × γ₂ = −1,5 est négatif : l'image est renversée." }
    ],
    surLaCopie: "γ = γ₁ × γ₂ = (−3) × 0,5 = −1,5\nA'B' = γ × AB = −1,5 × 4 = −6 mm (image renversée)",
    explication: "γ = (−3) × 0,5 = −1,5. A'B' = −1,5 × 4 = −6 mm : l'image est renversée et de 6 mm.",
    indice: "Multiplie les grandissements, puis applique-les à la taille de l'objet, en gardant le signe."
  },
  {
    id: "U42-340", difficulte: "facile", epreuve: "U42", theme: "Conjugaison", session: "complément",
    question: "Une lentille convergente forme sur un écran l'image d'un objet réel. Comment est cette image par rapport à l'objet ?",
    choix: ["Réelle, renversée", "Virtuelle, renversée", "Réelle, droite", "Virtuelle, droite"],
    bonne: 0,
    explication: "Une image qui se forme sur un écran est réelle. Pour une lentille convergente, une image réelle d'un objet réel est toujours renversée.\nUne image droite d'un objet réel, avec une convergente, est virtuelle (loupe) : on ne peut pas la recueillir sur un écran.",
    indice: "Seule une image réelle peut se former sur un écran."
  }
);

// ---------- Mini-sujet (cas pratique) : ses questions portent cas: "CAS-U42-01" et etape: 1, 2, 3… ----------
CAS.push({
  id: "CAS-U42-01",
  epreuve: "U42",
  titre: "Des jumelles de théâtre pour une abonnée de l'opéra",
  contexte: "Une cliente abonnée à l'opéra veut mieux voir les chanteurs depuis sa place au balcon, à 24 m de la scène. Tu lui proposes des jumelles de théâtre : une lunette de Galilée, faite d'un objectif convergent et d'un oculaire divergent, sans prisme. Elle est emmétrope et regarde sans accommoder.",
  annexe: { titre: "Notice des jumelles", colonnes: ["Caractéristique", "Valeur"], lignes: [["Grossissement", "3×"], ["Objectif (convergent)", "f'₁ = +120 mm, diamètre 40 mm"], ["Oculaire (divergent)", "f'₂ = −40 mm, diamètre 20 mm"], ["Distance entre les lentilles", "80 mm"]] }
});


// ---------- Mini-sujet (cas pratique) : ses questions portent cas: "CAS-U42-02" et etape: 1 à 5 ----------
CAS.push({
  id: "CAS-U42-02",
  epreuve: "U42",
  titre: "Des lunettes de pêche pour un client",
  contexte: "Un client passe ses week-ends à pêcher sur un étang. Le reflet du soleil sur l'eau (indice 1,33) le gêne. Tu lui proposes des lunettes solaires polarisantes, avec des verres minéraux d'indice 1,6 traités antireflet.",
  annexe: { titre: "Notice des lunettes", colonnes: ["Caractéristique", "Valeur"], lignes: [["Verres", "minéraux, indice 1,6"], ["Filtre polarisant", "parfait, direction verticale (tête droite)"], ["Traitement", "antireflet monocouche, optimisé à 550 nm"]] }
});
