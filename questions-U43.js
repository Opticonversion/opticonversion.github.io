// ==============================================================
//  QUESTIONS · Étude technique des systèmes optiques (U43)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U43" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : à l'U43, la calculatrice est AUTORISÉE, mais on garde des chiffres simples.
//  L'épreuve porte sur un instrument d'optique (tracés, champs, mécanique) :
//  voir notes/analyse-U43.md.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
// ==============================================================

QUESTIONS.push(

  // ---------- Chaîne des conjugués (8/8) ----------
  {
    id: "U43-001", epreuve: "U43", theme: "Chaîne des conjugués", session: "2022", difficulte: "facile",
    question: "Dans une chaîne des conjugués, un point objet placé au foyer objet F d'une lentille mince a pour image :",
    choix: ["Le foyer image F'", "Un point à l'infini", "Un point sur la lentille", "Un point symétrique de F par rapport à la lentille"],
    bonne: 1,
    explication: "Par définition, les rayons issus du foyer objet ressortent parallèles : l'image est rejetée à l'infini. Dans la chaîne, on note « A = F → A' à l'infini ».",
    indice: "Rappelle-toi la définition du foyer objet : que deviennent, après la lentille, les rayons qui en sont issus ?"
  },
  {
    id: "U43-002", epreuve: "U43", theme: "Chaîne des conjugués", session: "2017", difficulte: "moyen",
    question: "Une lunette est réglée pour un œil emmétrope qui n'accommode pas. Où se trouve l'image intermédiaire d'une étoile donnée par l'objectif ?",
    choix: ["Au foyer objet de l'objectif", "Au foyer image de l'objectif, confondu avec le foyer objet de l'oculaire", "Au foyer image de l'oculaire", "Sur la rétine"],
    bonne: 1,
    explication: "Objet à l'infini → image au foyer image F'obj. Pour que l'image finale soit à l'infini (emmétrope désaccommodé), cette image doit être au foyer objet de l'oculaire : F'obj = Foc. C'est un système afocal.",
    indice: "Une étoile est à l'infini : où l'objectif en forme-t-il l'image ? Et où doit se trouver l'objet de l'oculaire pour que l'image finale reparte à l'infini ?"
  },
  {
    id: "U43-003", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "difficile",
    question: "Lunette réglée pour un œil emmétrope qui n'accommode pas. On vise une étoile B située hors de l'axe (faisceau incident incliné). Quel tracé est juste ?",
    choix: ["Tracé juste : image B₁ dans le plan F'obj = Foc, faisceau émergent parallèle et incliné", "Les rayons convergent sur l'axe, au foyer image de l'objectif", "Le faisceau émergent ressort parallèle à l'axe", "Le faisceau émergent converge : F'obj et Foc ne sont pas confondus"],
    choixSchemas: ["img/schemas/U43/lunette-trace-juste.svg", "img/schemas/U43/lunette-trace-faux-image-sur-axe.svg", "img/schemas/U43/lunette-trace-faux-parallele-axe.svg", "img/schemas/U43/lunette-trace-faux-foyers-separes.svg"],
    bonne: 0,
    explication: "Un faisceau parallèle incliné converge dans le plan focal image de l'objectif, mais hors de l'axe : c'est l'image B₁. Lunette afocale : ce plan est aussi le plan focal objet de l'oculaire, donc le faisceau ressort parallèle, incliné dans la direction qui va de B₁ au centre de l'oculaire. Les pièges : faire converger un faisceau incliné sur l'axe (c'est seulement le cas d'un faisceau parallèle à l'axe), faire ressortir les rayons parallèles à l'axe, ou séparer F'obj et Foc (le faisceau converge alors au lieu d'être parallèle).",
    indice: "Un faisceau parallèle incliné converge dans le plan focal image, mais pas forcément sur l'axe. Et un point du plan focal objet de l'oculaire donne un faisceau émergent… ?"
  },
  {
    id: "U43-004", epreuve: "U43", theme: "Chaîne des conjugués", session: "2021", difficulte: "moyen",
    question: "Un utilisateur amétrope, sans lunettes et sans accommoder, voit net à travers un instrument. Où est l'image finale donnée par l'instrument ?",
    choix: ["À l'infini", "Sur le remotum de l'utilisateur", "Sur son proximum", "Au foyer objet de son œil"],
    bonne: 1,
    explication: "Un œil qui n'accommode pas voit net uniquement les objets placés sur son remotum. L'instrument doit donc conjuguer l'image finale avec le remotum. À l'infini, ce n'est vrai que pour l'emmétrope.",
    indice: "Sans accommoder, un œil ne voit net qu'un seul point de l'espace. Lequel ?"
  },
  {
    id: "U43-005", epreuve: "U43", theme: "Chaîne des conjugués", session: "2023", difficulte: "facile",
    question: "Un miroir plan (miroir d'un reflex, miroir de renvoi d'un télescope) donne d'un objet réel une image :",
    choix: ["Réelle, renversée, de même taille", "Virtuelle, symétrique par rapport au miroir, de même taille", "Virtuelle, agrandie", "Réelle, à l'infini"],
    bonne: 1,
    explication: "Le miroir plan a une vergence nulle : l'image est symétrique de l'objet par rapport au miroir et de même taille. Il ne fait que renvoyer la lumière dans une autre direction.",
    indice: "Pense à ton reflet dans une glace : où semble-t-il se trouver, et a-t-il changé de taille ?"
  },
  {
    id: "U43-006", epreuve: "U43", theme: "Chaîne des conjugués", session: "2018", difficulte: "moyen",
    question: "Microscope réglé pour un emmétrope qui n'accommode pas. Où est placée la préparation par rapport à l'objectif ?",
    choix: ["Exactement au foyer objet de l'objectif", "Un peu au-delà du foyer objet (plus loin de l'objectif que F)", "Entre le foyer objet et l'objectif", "À l'infini, très loin de l'objectif"],
    bonne: 1,
    explication: "L'objectif doit donner une image réelle et agrandie, située au foyer objet de l'oculaire. Pour une image réelle agrandie, l'objet est placé un peu plus loin que le foyer objet (entre F et 2F). Au foyer même, l'image partirait à l'infini ; entre F et l'objectif, l'image serait virtuelle.",
    indice: "L'objectif doit donner une image réelle et agrandie. Où placer l'objet par rapport à F pour obtenir ça avec une lentille convergente ?",
    schema: "img/schemas/U43/microscope-chaine-emmetrope.svg",
    schemaTexte: "Tracé à l'échelle : la préparation AB, placée à 24 mm de l'objectif (f' = 20 mm), donne une image A₁B₁ réelle, renversée, 5 fois plus grande, à 120 mm, dans le plan focal objet de l'oculaire ; les rayons ressortent parallèles."
  },
  {
    id: "U43-131", epreuve: "U43", theme: "Chaîne des conjugués", session: "2019", difficulte: "moyen",
    question: "Frontofocomètre : la mire T donne par le collimateur une image Tc, le verre mesuré en donne T', puis l'objectif de la lunette de visée en donne T''. La lunette est réglée sur l'infini (réticule au foyer image de son objectif). La mire est nette sur le réticule. Quelle chaîne est juste ?",
    choix: ["Tc = F'v (foyer image du verre) → T' à l'infini → T'' = F'obj, sur le réticule", "Tc à l'infini → T' = F'v → T'' = F'obj, sur le réticule", "Tc = Fv (foyer objet du verre) → T' à l'infini → T'' = F'obj, sur le réticule", "Tc = Fv → T' = F'v → T'' sur le réticule"],
    bonne: 2,
    explication: "On part de la fin. La lunette est réglée sur l'infini : pour que T'' soit sur le réticule (F'obj), T' doit être à l'infini. Pour que le verre donne une image à l'infini, son objet Tc doit être à son foyer objet Fv.\nChaîne : T → Tc = Fv → T' à l'infini → T'' = F'obj (réticule).\nC'est le déplacement de la mire qui amène Tc en Fv : sa lecture donne la vergence du verre.",
    indice: "Pars de la fin : où doit être T' pour que la lunette réglée sur l'infini en donne une image sur son réticule ?",
    erreurs: { 0: { type: "notion", message: "Un objet au foyer image ne donne pas d'image à l'infini. C'est l'objet placé au foyer objet Fv qui donne une image à l'infini." } }
  },
  {
    id: "U43-133", epreuve: "U43", theme: "Chaîne des conjugués", session: "2023", difficulte: "facile",
    cas: "CAS-U43-02", etape: 1,
    type: "calcul",
    question: "L'objectif donne d'un paysage lointain une image nette sur le dépoli, après renvoi par le miroir. À quelle distance du miroir faut-il placer le dépoli, mesurée le long du trajet de la lumière ? (en mm)",
    reponse: { valeur: 20, unite: "mm", decimales: 0, signe: false },
    explication: "Objet à l'infini : l'image se forme au foyer image de l'objectif, 50 mm après lui, en comptant tout le trajet de la lumière.\nLe miroir est à 30 mm de l'objectif. Il renvoie la lumière sans changer la longueur du trajet : il reste 50 − 30 = 20 mm après le miroir.\nLe dépoli est donc à 20 mm du miroir, sur le trajet renvoyé vers le haut.",
    indice: "Un objet à l'infini donne son image au foyer image. Le miroir plan plie le trajet sans le raccourcir.",
    erreurs: [
      { valeur: 50, type: "notion", message: "Tu as donné la distance totale depuis l'objectif. Le miroir est déjà à 30 mm : il reste 20 mm après lui." },
      { valeur: 80, type: "notion", message: "Tu as ajouté les deux distances. L'image se forme 50 mm après l'objectif en tout, miroir compris : 50 − 30 = 20 mm." }
    ]
  },
  {
    id: "U43-132", epreuve: "U43", theme: "Chaîne des conjugués", session: "2023", difficulte: "moyen",
    cas: "CAS-U43-02", etape: 2,
    contexte: "Le photographe est emmétrope et n'accommode pas. Il regarde le dépoli à travers la loupe.",
    question: "On note A₁ l'image du paysage par l'objectif, A₂ son image par le miroir, A' son image par la loupe. Quelle chaîne est juste ?",
    choix: ["A₁ = F'obj → A₂ = A₁ (le miroir ne déplace pas l'image) → A' à l'infini", "A₁ = F'obj → A₂ sur le dépoli = F'lou → A' à l'infini", "A₁ = Fobj → A₂ sur le dépoli = Flou → A' sur le remotum", "A₁ = F'obj → A₂ symétrique de A₁ par le miroir, sur le dépoli = Flou → A' à l'infini"],
    bonne: 3,
    explication: "Objet à l'infini : l'objectif vise A₁ = F'obj. Le miroir coupe la lumière avant ce point : A₁ est un objet virtuel pour le miroir, qui en donne A₂, symétrique de A₁ par rapport à lui. A₂ est réel, sur le dépoli.\nEmmétrope sans accommoder : A' doit être à l'infini, donc A₂ au foyer objet de la loupe.\nChaîne : A∞ → A₁ = F'obj → A₂ sur le dépoli = Flou → A' à l'infini.",
    indice: "Pour que la loupe donne une image à l'infini, où doit se trouver son objet ?",
    erreurs: {
      1: { type: "notion", message: "Pour que l'image finale parte à l'infini, l'objet de la loupe doit être à son foyer objet Flou, pas à son foyer image." },
      0: { type: "notion", message: "Le miroir plan déplace l'image : A₂ est le symétrique de A₁ par rapport au miroir. Il ne change ni sa taille ni la longueur du trajet." }
    }
  },
  {
    id: "U43-134", epreuve: "U43", theme: "Œil et instrument", session: "2023", difficulte: "difficile",
    cas: "CAS-U43-02", etape: 3,
    type: "calcul",
    contexte: "Un autre photographe est myope de −5,00 δ. Il ôte ses lunettes et n'accommode pas. Son œil est au foyer image de la loupe.",
    question: "Le dépoli ne bouge pas. De combien de millimètres faut-il rapprocher la loupe du dépoli, par rapport au réglage pour un emmétrope ?",
    reponse: { valeur: 8, unite: "mm", decimales: 0, signe: false },
    explication: "Remotum : HR = [[1|R]] = [[1|−5]] = −0,20 m = −200 mm.\nL'œil est en F'lou : l'image A' doit être sur le remotum, donc x' = F'lou A' = −200 mm.\nNewton : x = [[−f'²|x']] = [[−1 600|−200]] = +8 mm\nA₂ (le dépoli) doit être 8 mm après Flou : à 32 mm de la loupe au lieu de 40. On rapproche la loupe de 8 mm.",
    indice: "Place A' sur le remotum, puis utilise Newton : x·x' = −f'², avec f' = 40 mm et x' = F'lou A'.",
    erreurs: [
      { valeur: 32, type: "notion", message: "32 mm est la nouvelle distance entre le dépoli et la loupe. On demande le déplacement : 40 − 32 = 8 mm." }
    ]
  },
  {
    id: "U43-135", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    type: "calcul",
    question: "Un emmétrope tient une loupe de focale 50 mm à 20 mm devant son œil. L'objet est à 40 mm devant la loupe. Quelle accommodation lui faut-il pour voir l'image nette ? (en δ, arrondie au dixième)",
    reponse: { valeur: 4.5, unite: "δ", decimales: 1, signe: true, tolerance: 0.05 },
    explication: "Image par la loupe : [[1|OA']] = [[1|50]] + [[1|−40]] = [[4|200]] − [[5|200]] = [[−1|200]]\nOA' = −200 mm : image virtuelle, 200 mm devant la loupe.\nPar rapport à l'œil : 200 + 20 = 220 mm devant lui.\nAccommodation de l'emmétrope : A = [[1|0,220]] ≈ 4,5 δ\nChaîne : A → A' (virtuelle, 220 mm devant l'œil) → A'' sur la rétine.",
    indice: "Trouve d'abord l'image par la loupe, puis sa distance à l'œil (pas à la loupe).",
    erreurs: [
      { valeur: 5, type: "notion", message: "Tu as pris la distance de l'image à la loupe. L'accommodation se calcule depuis l'œil : 200 + 20 = 220 mm, soit 4,5 δ." }
    ]
  },
  {
    id: "U43-136", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "difficile",
    type: "calcul",
    question: "Un téléobjectif : lentille L₁ (f'₁ = +50 mm), puis lentille L₂ (f'₂ = −25 mm) placée 40 mm après L₁. L'objet est à l'infini. Calcule O₂A', la position de l'image finale par rapport à L₂ (en mm, au dixième, avec son signe).",
    reponse: { valeur: 16.7, unite: "mm", decimales: 1, signe: true, tolerance: 0.1 },
    explication: "L₁ : objet à l'infini, donc A₁ = F'₁, 50 mm après L₁.\nL₂ est à 40 mm : A₁ est 10 mm après L₂. Pour L₂, c'est un objet virtuel : O₂A₁ = +10 mm.\nL₂ : [[1|O₂A']] = [[1|−25]] + [[1|10]] = [[−2|50]] + [[5|50]] = [[3|50]]\nO₂A' ≈ +16,7 mm : image réelle, après L₂.\nChaîne : A∞ → A₁ = F'₁ (objet virtuel pour L₂) → A' à 16,7 mm après L₂.",
    indice: "A₁ se forme-t-il avant ou après L₂ ? Le signe de O₂A₁ en dépend.",
    erreurs: [
      { valeur: -7.1, type: "signe", message: "Tu as pris A₁ comme un objet réel. A₁ se forme 10 mm après L₂ : pour L₂, O₂A₁ = +10 mm." }
    ]
  },
  {
    id: "U43-137", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    type: "calcul",
    question: "Un viseur a un objectif L₁ et une lentille de redressement L₂. L₁ donne de l'objet une image A₁B₁ avec γ₁ = −3. Pour L₂, A₁B₁ est à O₂A₁ = −60 mm, et L₂ en donne une image A₂B₂ à O₂A₂ = +90 mm. Calcule le grandissement total γ, avec son signe.",
    reponse: { valeur: 4.5, unite: "", decimales: 1, signe: true, tolerance: 0.05 },
    explication: "γ₂ = [[O₂A₂|O₂A₁]] = [[90|−60]] = −1,5\nγ = γ₁ × γ₂ = (−3) × (−1,5) = +4,5\nL'image finale est droite et 4,5 fois plus grande. Deux renversements de suite redonnent une image droite : c'est le rôle de L₂.",
    indice: "Calcule γ₂ avec ses signes, puis multiplie les deux grandissements.",
    erreurs: [
      { valeur: -4.5, type: "signe", message: "Tu as pris O₂A₁ = +60 mm. A₁B₁ est avant L₂ : O₂A₁ = −60 mm, donc γ₂ = −1,5 et γ = +4,5." }
    ]
  },
  {
    id: "U43-138", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "facile",
    question: "Un emmétrope qui n'accommode pas regarde dans une lunette afocale. La chaîne se termine ainsi : … → A' à l'infini → (œil) → A''. Où se trouve A'' ?",
    choix: ["Au foyer objet de l'œil", "Au foyer image de l'œil F'œil, sur la rétine", "Sur la rétine, en avant du foyer image de l'œil", "Au remotum de l'œil"],
    bonne: 1,
    explication: "Un objet à l'infini donne son image au foyer image. Pour un œil emmétrope qui n'accommode pas, ce foyer image est sur la rétine : A'' = F'œil.\nFin de chaîne : A' à l'infini → A'' = F'œil (rétine).",
    indice: "Pour l'œil, A' est un objet à l'infini. Où se forme l'image d'un objet à l'infini ?"
  },
  {
    id: "U43-139", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "difficile",
    question: "Un myope de −2,50 δ (remotum à 400 mm devant l'œil), sans lunettes et sans accommoder, utilise une loupe de focale 50 mm. Son œil est au foyer image de la loupe. Où placer l'objet ?",
    choix: ["À 56,25 mm devant la loupe", "À 43,75 mm devant la loupe (6,25 mm après le foyer objet)", "Au foyer objet, à 50 mm devant la loupe", "À 6,25 mm devant la loupe"],
    bonne: 1,
    explication: "L'image A' doit être sur le remotum. L'œil est en F' : x' = F'A' = −400 mm.\nNewton : x = [[−f'²|x']] = [[−2 500|−400]] = +6,25 mm\nL'objet est 6,25 mm après F, donc entre F et la loupe : à 50 − 6,25 = 43,75 mm devant elle.\nChaîne : A → A' = R (400 mm devant l'œil) → A'' sur la rétine.",
    indice: "Place A' sur le remotum et utilise Newton : x·x' = −f'², avec x' = F'A'.",
    erreurs: {
      0: { type: "signe", message: "Tu as trouvé FA = −6,25 mm. Avec x' = F'A' = −400 mm, Newton donne x = +6,25 mm : l'objet est entre F et la loupe." },
      2: { type: "notion", message: "Au foyer objet, l'image part à l'infini (réglage d'un emmétrope). Ce myope voit net sans accommoder seulement sur son remotum." }
    }
  },
  {
    id: "U43-140", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "difficile",
    type: "pose",
    question: "Un microscope a un objectif de focale 10 mm et un oculaire de focale 20 mm. La préparation est à 11 mm devant l'objectif. Un myope de −10 δ l'utilise sans lunettes et sans accommoder, l'œil au foyer image de l'oculaire. Trouve la distance entre l'objectif et l'oculaire, étape par étape.",
    etapes: [
      {
        consigne: "Position de l'image intermédiaire O₁A₁ (en mm)",
        reponse: { valeur: 110, unite: "mm", decimales: 0, signe: true },
        aide: "Relation de conjugaison avec l'objectif : [[1|O₁A₁]] = [[1|f'obj]] + [[1|O₁A]], avec O₁A = −11 mm.",
        ligne: "[[1|O₁A₁]] = [[1|10]] + [[1|−11]] = [[11|110]] − [[10|110]] = [[1|110]]\nDonc O₁A₁ = +110 mm",
        erreurs: [{ valeur: 5.24, type: "signe", message: "Tu as pris O₁A = +11 mm. La préparation est un objet réel, avant l'objectif : O₁A = −11 mm." }]
      },
      {
        consigne: "Position du remotum par rapport à l'œil, HR (en mm)",
        reponse: { valeur: -100, unite: "mm", decimales: 0, signe: true },
        aide: "HR = [[1|R]], en mètres puis en mm. Le remotum d'un myope est devant l'œil.",
        ligne: "HR = [[1|−10]] = −0,10 m = −100 mm\nL'œil est en F'oc, donc x' = F'oc A' = −100 mm."
      },
      {
        consigne: "Position de A₁ par rapport au foyer objet de l'oculaire, Foc A₁ (en mm)",
        reponse: { valeur: 4, unite: "mm", decimales: 0, signe: true },
        aide: "Newton avec l'oculaire : x·x' = −f'oc², avec x' = −100 mm et f'oc = 20 mm.",
        ligne: "x = [[−f'oc²|x']] = [[−400|−100]] = +4 mm\nA₁ est 4 mm après Foc, donc à 20 − 4 = 16 mm avant l'oculaire.",
        erreurs: [{ valeur: -4, type: "signe", message: "Le remotum du myope est devant l'œil : x' = −100 mm. Avec x' = +100 mm, on trouverait x = −4 mm, ce qui est faux." }]
      },
      {
        consigne: "Distance entre l'objectif et l'oculaire O₁O₂ (en mm)",
        reponse: { valeur: 126, unite: "mm", decimales: 0, signe: false },
        aide: "A₁ est à 110 mm après l'objectif et à 16 mm avant l'oculaire.",
        ligne: "O₁O₂ = 110 + 16 = 126 mm",
        erreurs: [{ valeur: 130, type: "notion", message: "130 mm correspond au réglage d'un emmétrope (A₁ en Foc). Ici A₁ est 4 mm après Foc, à 16 mm de l'oculaire : 110 + 16 = 126 mm." }]
      }
    ],
    explication: "Chaîne : A → A₁ (110 mm après l'objectif, 4 mm après Foc) → A' sur le remotum, 100 mm devant l'œil → A'' sur la rétine. L'oculaire est 4 mm plus près de l'objectif que pour un emmétrope."
  },
  {
    id: "U43-141", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "Lunette de Galilée réglée pour un emmétrope qui n'accommode pas : objectif convergent, oculaire divergent. L'objectif vise l'image A₁ d'une étoile en F'obj. Pour l'oculaire, A₁ est :",
    choix: ["Un objet réel, placé à son foyer objet Foc", "Un objet virtuel, placé à son foyer image F'oc", "Un objet virtuel, placé à son foyer objet Foc", "L'image finale, vue directement par l'œil"],
    bonne: 2,
    explication: "L'oculaire est placé avant F'obj : la lumière le traverse avant de converger en A₁. A₁ est donc après l'oculaire : c'est un objet virtuel pour lui.\nLunette afocale : l'image finale est à l'infini, donc A₁ = Foc. Pour une lentille divergente, le foyer objet Foc est après la lentille, ce qui est cohérent.\nChaîne : A∞ → A₁ = F'obj = Foc (objet virtuel) → A' à l'infini.",
    indice: "La lumière rencontre-t-elle l'oculaire avant ou après le point où elle converge ?",
    erreurs: {
      0: { type: "notion", message: "La lumière traverse l'oculaire avant de converger en A₁ : A₁ est après l'oculaire, c'est un objet virtuel." },
      1: { type: "notion", message: "Pour que l'image finale parte à l'infini, l'objet doit être au foyer objet. Pour une divergente, Foc est après la lentille." }
    }
  },
  {
    id: "U43-142", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "Un projecteur de diapositives : lampe, condenseur, diapositive, objectif, écran. Pour que l'écran soit éclairé de façon régulière, où le condenseur doit-il former l'image du filament de la lampe ?",
    choix: ["Dans le plan de l'objectif (sur sa pupille)", "Sur la diapositive", "Sur l'écran", "À l'infini"],
    bonne: 0,
    explication: "Il y a deux chaînes à écrire. Celle de l'objet : diapositive → (objectif) → image nette sur l'écran. Celle de la source : filament → (condenseur) → image dans l'objectif.\nAinsi toute la lumière passe dans l'objectif, et le filament n'est net ni sur la diapositive ni sur l'écran : l'éclairage est régulier.\nSi l'image du filament tombait sur la diapositive, on verrait le filament sur l'écran.",
    indice: "Le filament ne doit pas se voir sur l'écran. Et toute la lumière doit entrer dans l'objectif."
  },
  {
    id: "U43-143", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "L₁ (f'₁ = +40 mm), puis L₂ (f'₂ = +30 mm) placée 150 mm après L₁. Un objet réel est à 60 mm devant L₁. Où se forme l'image finale ?",
    choix: ["À 60 mm après L₂", "À l'infini : A₁ est au foyer objet de L₂", "Au foyer image de L₂, 30 mm après elle", "À 15 mm après L₂"],
    bonne: 1,
    explication: "L₁ : [[1|O₁A₁]] = [[1|40]] + [[1|−60]] = [[3|120]] − [[2|120]] = [[1|120]], donc O₁A₁ = +120 mm.\nO₂A₁ = 120 − 150 = −30 mm : A₁ est 30 mm avant L₂, exactement à son foyer objet F₂.\nL'image finale est à l'infini. Chaîne : A → A₁ = F₂ → A' à l'infini.\nIci, A₁ tombe sur F₂ : on conclut sans calculer O₂A'.",
    indice: "Calcule O₁A₁, puis compare la position de A₁ à celle du foyer objet de L₂.",
    erreurs: {
      3: { type: "signe", message: "Tu as pris O₂A₁ = +30 mm. A₁ est 30 mm avant L₂ : c'est un objet réel, O₂A₁ = −30 mm, au foyer objet." },
      2: { type: "notion", message: "Le foyer image reçoit l'image d'un objet à l'infini. Ici c'est l'inverse : l'objet A₁ est au foyer objet, l'image part à l'infini." }
    }
  },

  {
    id: "U43-144", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "Deux lentilles convergentes L₁ puis L₂. Un rayon issu de B passe par le foyer objet F₁ de L₁. Après L₂, ce rayon passe par :",
    choix: ["Le foyer image F'₂ de L₂", "Le foyer objet F₂ de L₂", "Le centre O₂, sans être dévié", "Nulle part : il reste parallèle à l'axe"],
    bonne: 0,
    explication: "Un rayon qui passe par F₁ ressort de L₁ parallèle à l'axe. Pour L₂, c'est un rayon parallèle à l'axe : il ressort en passant par F'₂.\nCe rayon sert à passer de L₁ à L₂ sans calcul.",
    indice: "Que devient, après L₁, un rayon qui passe par F₁ ? Et que fait L₂ d'un rayon de ce genre ?",
    erreurs: { 3: { type: "notion", message: "Il ressort de L₁ parallèle à l'axe, mais L₂ le dévie : un rayon parallèle à l'axe ressort par le foyer image F'₂." } }
  },
  {
    id: "U43-145", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "L₁ forme l'image B₁ après L₂ : pour L₂, B₁ est un objet virtuel. Quel rayon permet de construire facilement l'image B₂ ?",
    choix: ["Un rayon qui part de B₁ et revient vers L₂", "Le rayon qui vise B₁ en passant par le centre O₂ : il traverse L₂ sans être dévié", "Aucun : on ne construit pas l'image d'un objet virtuel", "Le rayon qui part de B₁ parallèlement à l'axe"],
    bonne: 1,
    explication: "Avec un objet virtuel, les rayons arrivent sur L₂ en visant B₁. Le rayon qui vise B₁ en passant par O₂ n'est pas dévié : B₂ est sur ce rayon.\nDeuxième rayon utile : celui qui passe par F₂ en visant B₁, il ressort parallèle à l'axe. B₂ est au croisement des deux.",
    indice: "Les rayons ne partent pas de B₁ : ils arrivent sur L₂ en le visant. Lequel de ces rayons n'est pas dévié ?",
    erreurs: { 2: { type: "notion", message: "Un objet virtuel se construit comme un objet réel, avec les rayons qui le visent. Celui qui vise B₁ par O₂ n'est pas dévié." } }
  },
  {
    id: "U43-146", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    question: "Lunette afocale : B₁ est dans le plan focal commun F'ob = Foc. Que donne le rayon qui part de B₁ et passe par le centre de l'oculaire ?",
    choix: ["La position de l'image finale B₂", "Le foyer image de l'oculaire", "La direction de tous les rayons qui sortent de l'oculaire", "Le bord du champ de pleine lumière"],
    bonne: 2,
    explication: "B₁ est dans le plan focal objet de l'oculaire : tous les rayons issus de B₁ ressortent parallèles entre eux. Le rayon qui passe par le centre n'est pas dévié, il donne donc leur direction commune.\nL'image finale B₂ est à l'infini, dans cette direction.",
    indice: "Un point du plan focal objet donne des rayons émergents parallèles entre eux. Lequel est le plus simple à tracer ?",
    erreurs: { 0: { type: "notion", message: "B₁ est au foyer objet de l'oculaire : l'image finale est à l'infini. Le rayon par le centre donne la direction de cette image à l'infini." } }
  },

  // ---------- Vergences et focales ----------
  {
    id: "U43-007", epreuve: "U43", theme: "Vergences et focales", session: "2021", difficulte: "facile",
    question: "Sur le tracé, on cote la distance focale image d'un collimateur : f' = 125 mm. Quelle est sa vergence ?",
    choix: ["+0,125 δ", "+1,25 δ", "+8,00 δ", "+12,50 δ"],
    bonne: 2,
    explication: "D = [[1|f']] avec f' en mètres.\nD = [[1|0,125]] = +8,00 δ\nAttention à l'échelle du dessin : on convertit la cote en vraie grandeur avant de calculer.",
    indice: "D = [[1|f']], mais avec f' en mètres. Convertis d'abord les millimètres."
  },
  {
    id: "U43-008", epreuve: "U43", theme: "Vergences et focales", session: "2024", difficulte: "moyen",
    question: "Un condenseur plan-convexe a un indice n = 1,5 et un rayon de courbure de 50 mm (l'autre face est plane). Sa vergence vaut environ :",
    choix: ["+5 δ", "+10 δ", "+20 δ", "+30 δ"],
    bonne: 1,
    explication: "La face plane a une vergence nulle. Il reste celle du dioptre sphérique :\nD = [[n − 1|r]] = [[0,5|0,050]] = +10 δ",
    indice: "Une face plane n'a aucune vergence. Pour le dioptre sphérique, utilise D = [[n − 1|r]], avec r en mètres."
  },
  {
    id: "U43-009", epreuve: "U43", theme: "Vergences et focales", session: "2023", difficulte: "moyen",
    question: "On clipse une lentille macro de +5 δ sur un objectif photo réglé sur l'infini. Quel objet sera net sur la pellicule ?",
    choix: ["Un objet à 5 cm", "Un objet à 20 cm", "Un objet à 50 cm", "Un objet à l'infini"],
    bonne: 1,
    explication: "L'objectif réglé sur l'infini a besoin de rayons parallèles. La lentille macro les fournit si l'objet est à son foyer objet :\nd = [[1|D]] = [[1|5]] = 0,20 m\nSoit 20 cm devant elle.",
    indice: "L'objectif réglé sur l'infini attend des rayons parallèles. Où placer l'objet pour que la lentille macro les rende parallèles ?"
  },

  // ---------- Œil et instrument (6/8) ----------
  {
    id: "U43-010", epreuve: "U43", theme: "Œil et instrument", session: "2024", difficulte: "facile",
    question: "Sur le tracé, on cote le remotum de l'œil : HR = −125 mm (R devant l'œil). Réfraction axiale et amétropie ?",
    choix: ["R = +8,00 δ, hypermétrope", "R = −8,00 δ, myope", "R = −0,125 δ, myope", "R = −12,50 δ, myope"],
    bonne: 1,
    explication: "R = [[1|HR]] = [[1|−0,125]] = −8,00 δ\nRemotum réel devant l'œil, donc R négatif : l'œil est myope.",
    indice: "R = [[1|HR]], avec HR en mètres et son signe. Un remotum devant l'œil donne quel signe ?"
  },
  {
    id: "U43-011", epreuve: "U43", theme: "Œil et instrument", session: "2018", difficulte: "facile",
    question: "Le remotum est derrière l'œil : HR = +250 mm. Réfraction axiale et amétropie ?",
    choix: ["R = −4,00 δ, myope", "R = +4,00 δ, hypermétrope", "R = +2,50 δ, hypermétrope", "R = 0, emmétrope"],
    bonne: 1,
    explication: "R = [[1|HR]] = [[1|+0,25]] = +4,00 δ\nRemotum virtuel derrière l'œil, donc R positif : l'œil est hypermétrope.",
    indice: "R = [[1|HR]], avec HR en mètres. Un remotum virtuel derrière l'œil, c'est quelle amétropie ?"
  },
  {
    id: "U43-012", epreuve: "U43", theme: "Œil et instrument", session: "2023", difficulte: "difficile",
    question: "Un myope de −4,00 δ, sans lunettes, regarde dans un viseur dont l'image finale se trouve à 20 cm devant son œil. Quelle accommodation lui faut-il ?",
    choix: ["0 δ", "+1,00 δ", "+4,00 δ", "+5,00 δ"],
    bonne: 1,
    explication: "Proximité de l'image : [[1|−0,20]] = −5 δ\nAccommodation = R − proximité = −4 − (−5) = +1,00 δ\nSon remotum est à 25 cm : l'image à 20 cm est un peu plus près, il accommode un peu.",
    indice: "Calcule d'abord la proximité de l'image ([[1|distance]] en m, négative devant l'œil). L'accommodation est l'écart entre R et cette proximité."
  },
  {
    id: "U43-013", epreuve: "U43", theme: "Œil et instrument", session: "2023", difficulte: "moyen",
    question: "Le même myope (−4,00 δ), sans lunettes, regarde dans un instrument réglé pour un emmétrope (image finale à l'infini). Que se passe-t-il ?",
    choix: ["Il voit net en accommodant de 4 δ", "Il voit net sans accommoder", "Il ne peut pas voir net : l'image est au-delà de son remotum", "Il voit net en accommodant de 0,25 δ"],
    bonne: 2,
    explication: "L'accommodation sert uniquement à voir plus près que le remotum. Une image à l'infini est plus loin que son remotum (25 cm) : flou impossible à rattraper. Il faut régler l'oculaire ou garder ses lunettes.",
    indice: "Où est le remotum d'un myope de −4 δ ? L'accommodation permet-elle de voir plus loin que lui, ou seulement plus près ?"
  },
  {
    id: "U43-014", epreuve: "U43", theme: "Œil et instrument", session: "2021", difficulte: "moyen",
    question: "Par rapport au réglage pour un emmétrope, comment faut-il déplacer l'oculaire pour un utilisateur myope ?",
    choix: ["L'éloigner de l'image intermédiaire", "Le rapprocher de l'image intermédiaire (vers l'objectif)", "Le tourner de 90°", "Ne pas le bouger"],
    bonne: 1,
    explication: "Le myope doit recevoir une image virtuelle à distance finie (sur son remotum). Pour cela, l'image intermédiaire doit se trouver entre le foyer objet et l'oculaire, donc on rapproche l'oculaire de cette image.",
    indice: "Le myope a besoin d'une image virtuelle à distance finie, pas à l'infini. Où doit alors se trouver l'image intermédiaire par rapport au foyer objet de l'oculaire ?"
  },
  {
    id: "U43-015", epreuve: "U43", theme: "Œil et instrument", session: "2018", difficulte: "difficile",
    question: "Oculaire de focale 25 mm, œil placé à son foyer image. On le règle pour un myope de −4,00 δ (remotum à 250 mm), l'œil restant au foyer image de l'oculaire. De combien déplacer l'oculaire depuis le réglage emmétrope ?",
    choix: ["0,25 mm", "2,5 mm", "4 mm", "25 mm"],
    bonne: 1,
    explication: "Relation de Newton : x·x' = −f'²\nImage sur le remotum : x' = F'A' = −250 mm.\nx = [[−f'²|x']] = [[−625|−250]] = +2,5 mm\nL'image intermédiaire doit être 2,5 mm après le foyer objet : on rapproche l'oculaire de 2,5 mm.",
    indice: "Utilise la relation de Newton x·x' = −f'², avec x' = F'A' compté depuis l'œil (en F'). Attention au signe de x'.",
    schema: "img/schemas/U43/oculaire-reglage-myope-2-5-mm.svg",
    schemaTexte: "Oculaire de 25 mm réglé pour un myope de −4 δ : l'image intermédiaire A₁ est 2,5 mm après le foyer objet F, et l'image finale B' se forme sur le remotum, 250 mm devant l'œil placé en F'."
  },

  // ---------- Étude des champs (8/8) ----------
  {
    id: "U43-016", epreuve: "U43", theme: "Étude des champs", session: "2022", difficulte: "moyen",
    question: "Dans l'espace d'étude, comment identifie-t-on la pupille ?",
    choix: ["Le plus grand des diaphragmes, une fois conjugués dans l'espace d'étude", "Celui (ou son conjugué) vu sous le plus petit angle depuis le centre du plan des champs", "Toujours la monture de l'objectif, quel que soit l'instrument", "Le diaphragme le plus proche de l'œil de l'observateur"],
    bonne: 1,
    explication: "On conjugue d'abord tous les diaphragmes dans l'espace d'étude. Depuis le point axial du plan des champs, celui qu'on voit sous le plus petit angle limite l'ouverture : c'est la pupille. Les autres jouent le rôle de lucarnes.",
    indice: "Place-toi au centre du plan des champs et regarde chaque diaphragme : lequel limite le plus l'ouverture du faisceau ?",
    schema: "img/schemas/U43/champs-pupille-plus-petit-angle.svg",
    schemaTexte: "Depuis le centre A du plan des champs, le diaphragme D₁ (rayon 35 mm à 120 mm) est vu sous un angle plus grand que D₂ (rayon 50 mm à 300 mm) : D₂ est la pupille, D₁ la lucarne."
  },
  {
    id: "U43-017", epreuve: "U43", theme: "Étude des champs", session: "2019", difficulte: "facile",
    question: "Qu'est-ce que le champ de pleine lumière ?",
    choix: ["La zone où l'image est la plus nette, au centre du champ", "La zone où chaque faisceau remplit toute la pupille, sans être coupé", "La zone où l'éclairement vaut la moitié du maximum", "Tout ce que l'on voit dans l'instrument, même faiblement"],
    bonne: 1,
    explication: "Dans le champ de pleine lumière, la lucarne ne coupe aucun faisceau : chaque point utilise toute la pupille. L'éclairement y est maximal et uniforme.",
    indice: "Pense au faisceau issu d'un point du champ : dans cette zone, est-il coupé par la lucarne ou passe-t-il en entier ?",
    schema: "img/schemas/U43/champs-pleine-lumiere-interactif.svg",
    schemaTexte: "Schéma interactif : on fait varier le rayon de la lucarne D₁ et on voit le faisceau de pleine ouverture, les bords du champ de pleine lumière, du champ moyen et du champ total, et la vue de gauche."
  },
  {
    id: "U43-018", epreuve: "U43", theme: "Étude des champs", session: "2023", difficulte: "facile",
    question: "La zone comprise entre le bord du champ de pleine lumière et le bord du champ total s'appelle :",
    choix: ["Le champ moyen", "Le champ de contour", "La pupille de sortie", "Le cercle oculaire"],
    bonne: 1,
    explication: "Dans le champ de contour, le faisceau est en partie coupé par une lucarne : l'éclairement décroît du bord de la pleine lumière jusqu'à zéro au bord du champ total. Sur une photo, c'est le vignettage (bords assombris).",
    indice: "Dans cette zone, l'éclairement baisse peu à peu jusqu'à zéro. Comment appelle-t-on ce bord dégradé ?",
    schema: "img/schemas/U43/champs-vue-de-gauche-contour.svg",
    schemaTexte: "Vue de gauche : au centre, le champ de pleine lumière éclairé uniformément ; autour, le champ de contour où l'éclairement baisse jusqu'à zéro au bord du champ total ; le cercle du champ moyen est au milieu."
  },
  {
    id: "U43-019", epreuve: "U43", theme: "Étude des champs", session: "2021", difficulte: "moyen",
    question: "Comment supprimer le champ de contour d'un instrument ?",
    choix: ["En fermant davantage la pupille de l'instrument", "En plaçant un diaphragme dans le plan d'une image réelle", "En prenant un oculaire de plus grand diamètre", "En éloignant l'œil du cercle oculaire"],
    bonne: 1,
    explication: "Un diaphragme placé dans un plan où se forme une image réelle coupe le champ net, sans dégradé : champ total = champ de pleine lumière. C'est le diaphragme de champ des oculaires.",
    indice: "Le contour vient d'une lucarne qui coupe les faisceaux progressivement. Où placer un diaphragme pour couper le champ net, sans dégradé ?"
  },
  {
    id: "U43-020", epreuve: "U43", theme: "Étude des champs", session: "2018", difficulte: "facile",
    question: "Au bord du champ moyen, l'éclairement de l'image vaut environ :",
    choix: ["100 % de l'éclairement maximal", "50 % de l'éclairement maximal", "0 %", "25 %"],
    bonne: 1,
    explication: "Le bord du champ moyen est le point dont le rayon passant par le centre de la pupille rase le bord de la lucarne : la moitié du faisceau passe environ. On est au milieu du champ de contour (valeur approchée retenue au BTS).",
    indice: "Au bord du champ moyen, le rayon qui passe par le centre de la pupille rase la lucarne. Quelle part du faisceau passe alors ?"
  },
  {
    id: "U43-021", epreuve: "U43", theme: "Étude des champs", session: "2020", difficulte: "facile",
    question: "Pour qu'une photo soit éclairée en entier et de façon uniforme, le cercle du champ de pleine lumière image doit avoir un diamètre au moins égal à :",
    choix: ["La hauteur du capteur", "La largeur du capteur", "La diagonale du capteur", "La focale de l'objectif"],
    bonne: 2,
    explication: "Le capteur est un rectangle inscrit dans le cercle de pleine lumière. Ses coins sont les points les plus éloignés du centre, il faut donc que le diamètre du cercle atteigne la diagonale.",
    indice: "Le capteur est un rectangle placé dans un cercle. Quels points du rectangle sont les plus loin du centre ?"
  },

  // ---------- Liaisons mécaniques (8/8) ----------
  {
    id: "U43-022", epreuve: "U43", theme: "Liaisons mécaniques", session: "2024", difficulte: "facile",
    question: "Une molette ne peut que tourner autour de son axe X par rapport au boîtier. Quelle est la liaison ?",
    choix: ["Glissière d'axe X", "Pivot d'axe X", "Pivot glissant d'axe X", "Encastrement"],
    bonne: 1,
    explication: "Une seule rotation, aucune translation : liaison pivot. On donne toujours l'axe : « pivot d'axe X ».",
    indice: "Compte les mouvements possibles : combien de rotations, combien de translations ?"
  },
  {
    id: "U43-023", epreuve: "U43", theme: "Liaisons mécaniques", session: "2019", difficulte: "facile",
    question: "Un porte-mire ne peut que coulisser suivant l'axe optique Z, sans tourner. Quelle est la liaison ?",
    choix: ["Pivot d'axe Z", "Glissière d'axe Z", "Hélicoïdale d'axe Z", "Rotule"],
    bonne: 1,
    explication: "Une seule translation, aucune rotation : liaison glissière. Une rainure ou un méplat empêche la rotation.",
    indice: "Une seule translation, aucune rotation : quelle liaison autorise exactement ce mouvement ?"
  },
  {
    id: "U43-024", epreuve: "U43", theme: "Liaisons mécaniques", session: "2017", difficulte: "facile",
    question: "Un tube peut, à la main, à la fois tourner sur lui-même et coulisser suivant son axe, ces deux mouvements étant indépendants. Quelle est la liaison ?",
    choix: ["Pivot", "Glissière", "Pivot glissant", "Hélicoïdale"],
    bonne: 2,
    explication: "Une rotation et une translation de même axe, indépendantes : pivot glissant (2 degrés de liberté). Si elles étaient liées (on avance en tournant), ce serait une hélicoïdale.",
    indice: "Deux mouvements de même axe : sont-ils liés (on avance en tournant) ou indépendants ? C'est ce qui départage deux liaisons.",
    schema: "img/schemas/U43/liaisons-mouvements-axe-x.svg",
    schemaTexte: "Tableau des mouvements suivant l'axe X : pivot (1 rotation), glissière (1 translation), pivot glissant (rotation et translation indépendantes, 2 ddl), hélicoïdale (rotation et translation liées, 1 ddl)."
  },
  {
    id: "U43-025", epreuve: "U43", theme: "Liaisons mécaniques", session: "2023", difficulte: "moyen",
    question: "Pour faire la mise au point, on tourne la bague de l'objectif : le bloc optique avance en tournant sur lui-même. Quelle est la liaison entre le bloc optique et la monture ?",
    choix: ["Pivot glissant", "Hélicoïdale", "Glissière", "Pivot"],
    bonne: 1,
    explication: "Le filetage lie les deux mouvements : chaque tour fait avancer d'un pas. Un seul degré de liberté : liaison hélicoïdale.",
    indice: "Ici, impossible de tourner sans avancer. Les deux mouvements sont-ils indépendants ou liés ? Combien de degrés de liberté reste-t-il ?"
  },
  {
    id: "U43-026", epreuve: "U43", theme: "Liaisons mécaniques", session: "2022", difficulte: "moyen",
    question: "Lors d'une mise au point, on tourne une molette. Quel est le « mouvement utile » demandé pour l'élément optique ?",
    choix: ["La rotation de la molette", "La translation de l'élément optique suivant l'axe optique", "Une rotation de la lentille sur elle-même", "Aucun mouvement"],
    bonne: 1,
    explication: "Ce qui change la mise au point, c'est la position de la lentille sur l'axe optique : une translation. La rotation de la molette n'est que le moyen de la produire.",
    indice: "Ne confonds pas ce que fait ta main et ce que fait la lentille. Qu'est-ce qui change la mise au point ?"
  },

  // ---------- Mécanismes de réglage ----------
  {
    id: "U43-027", epreuve: "U43", theme: "Mécanismes de réglage", session: "2021", difficulte: "facile",
    question: "Mise au point d'un microscope : on tourne un bouton et le tube monte grâce à une roue dentée qui engrène sur une barre dentée. Mécanisme ?",
    choix: ["Vis-écrou", "Pignon-crémaillère", "Came", "Courroie"],
    bonne: 1,
    explication: "Le pignon (roue dentée) tourne, la crémaillère (barre dentée) se déplace : rotation → translation. C'est le réglage rapide (macrométrique) classique des microscopes.",
    indice: "Roue dentée = pignon, barre dentée = … ? Rotation d'un côté, translation de l'autre."
  },
  {
    id: "U43-028", epreuve: "U43", theme: "Mécanismes de réglage", session: "2021", difficulte: "facile",
    question: "Une bague de mise au point (système vis-écrou) est filetée au pas de 0,6 mm. Combien de tours faut-il pour déplacer l'oculaire de 2,4 mm ?",
    choix: ["2 tours", "3 tours", "4 tours", "1,44 tour"],
    bonne: 2,
    explication: "Un système vis-écrou transforme une rotation en translation : un tour fait avancer d'un pas.\nNombre de tours = [[course|pas]] = [[2,4|0,6]] = 4 tours",
    indice: "Un tour de vis fait avancer d'un pas. Combien de pas faut-il pour parcourir la course demandée ?"
  },

  // ---------- Grossissement et photo ----------
  {
    id: "U43-029", epreuve: "U43", theme: "Grossissement et photo", session: "2017", difficulte: "facile",
    question: "Lunette afocale : objectif de focale 600 mm, oculaire de focale 20 mm. Grossissement ?",
    choix: ["×12", "×30", "×580", "×0,033"],
    bonne: 1,
    explication: "G = [[f'obj|f'oc]] = [[600|20]] = 30",
    indice: "Pour une lunette afocale, G = [[f'objectif|f'oculaire]]."
  },
  {
    id: "U43-030", epreuve: "U43", theme: "Grossissement et photo", session: "2017", difficulte: "moyen",
    question: "On ajoute à cette lunette une lentille de Barlow qui double la focale de l'objectif. Que deviennent le grossissement et le champ observable ?",
    choix: ["G ×2, champ plus grand", "G ×2, champ plus petit", "G inchangé, champ plus petit", "G ÷2, champ plus grand"],
    bonne: 1,
    explication: "La focale de l'objectif passe à 1 200 mm :\nG = [[1 200|20]] = 60\nOn voit plus gros, mais une portion du ciel plus petite.",
    indice: "Que devient f'objectif, donc G ? Et si on voit plus gros, voit-on une plus grande ou une plus petite partie du ciel ?"
  },
  {
    id: "U43-031", epreuve: "U43", theme: "Grossissement et photo", session: "2018", difficulte: "facile",
    question: "Microscope : objectif ×40, oculaire ×10. Grossissement commercial ?",
    choix: ["×50", "×400", "×4", "×30"],
    bonne: 1,
    explication: "Le grossissement d'un microscope est le produit : grandissement de l'objectif × grossissement de l'oculaire = 40 × 10 = 400.",
    indice: "Le grossissement commercial d'un microscope combine celui de l'objectif et celui de l'oculaire : addition ou multiplication ?"
  },
  {
    id: "U43-032", epreuve: "U43", theme: "Grossissement et photo", session: "2020", difficulte: "facile",
    question: "Objectif photo de focale 100 mm dont la pupille d'entrée mesure 25 mm. Nombre d'ouverture ?",
    choix: ["f/2,5", "f/4", "f/25", "f/0,25"],
    bonne: 1,
    explication: "N = [[focale|diamètre de la pupille d'entrée]] = [[100|25]] = 4\nOn écrit f/4.",
    indice: "N = focale ÷ diamètre de la pupille d'entrée, les deux dans la même unité."
  },
  {
    id: "U43-033", epreuve: "U43", theme: "Grossissement et photo", session: "2020", difficulte: "moyen",
    question: "On monte un multiplicateur ×2 sur cet objectif (100 mm, f/4). Résultat ?",
    choix: ["200 mm, f/4, même luminosité", "200 mm, f/8, luminosité divisée par 4", "50 mm, f/2, luminosité ×4", "200 mm, f/8, luminosité divisée par 2"],
    bonne: 1,
    explication: "La focale double (200 mm) mais la pupille d'entrée ne change pas :\nN = [[200|25]] = 8\nL'éclairement varie comme [[1|N²]] : ([[8|4]])² = 4, donc 4 fois moins de lumière.",
    indice: "La focale change, mais la pupille d'entrée de l'objectif, elle, reste la même. Et l'éclairement varie comme [[1|N²]]."
  },

  // ---------- Œil astigmate (3/8) ----------
  {
    id: "U43-034", epreuve: "U43", theme: "Œil astigmate", session: "2021", difficulte: "difficile",
    question: "Un astigmate regarde un point dans un instrument. La tache de diffusion sur sa rétine est un petit segment horizontal. Cela signifie que :",
    choix: ["Le méridien horizontal est net sur la rétine", "Le méridien vertical est mis au point sur la rétine, le méridien horizontal ne l'est pas", "Aucun méridien n'est mis au point", "L'œil n'est pas astigmate"],
    bonne: 1,
    explication: "Les rayons du méridien vertical convergent en un point dans ce plan, mais ceux du méridien horizontal restent étalés : on obtient une focale horizontale. Une focale horizontale sur la rétine signifie que c'est le méridien vertical qui est net.",
    indice: "Les rayons d'un méridien qui convergent sur la rétine donnent une focale perpendiculaire à ce méridien. Une focale horizontale vient donc de quel méridien ?"
  },
  {
    id: "U43-035", epreuve: "U43", theme: "Œil astigmate", session: "2022", difficulte: "moyen",
    question: "Un client astigmate veut utiliser un télescope sans ses lunettes. Que lui conseiller ?",
    choix: ["Régler l'oculaire : cela compense toute l'amétropie", "Garder ses lunettes ou ses lentilles pendant l'observation", "Fermer l'œil le plus astigmate pendant l'observation", "Prendre un objectif de plus grande focale"],
    bonne: 1,
    explication: "Le réglage de l'oculaire déplace l'image, comme une sphère : il ne compense que la partie sphérique de l'amétropie. Pour l'astigmatisme, il faut garder sa compensation.",
    indice: "Régler l'oculaire déplace l'image comme le ferait un verre sphérique. Peut-il compenser un cylindre ?"
  },

  // ---------- Skiascopie (2024) ----------
  {
    id: "U43-036", epreuve: "U43", theme: "Skiascopie", session: "2024", difficulte: "moyen",
    question: "Skiascopie à 50 cm : le point neutre est obtenu avec un verre de +3,00 δ. Réfraction de l'œil ?",
    choix: ["+3,00 δ", "+1,00 δ", "+5,00 δ", "−1,00 δ"],
    bonne: 1,
    explication: "On retire la vergence liée à la distance de travail :\nR = verre de point neutre − [[1|d]] = +3 − [[1|0,5]] = +3 − 2 = +1,00 δ\nL'œil est hypermétrope d'une dioptrie.",
    indice: "Au point neutre, le remotum est sur ton skiascope. Retire la vergence liée à la distance de travail : [[1|d]], avec d en mètres."
  },
  {
    id: "U43-037", epreuve: "U43", theme: "Skiascopie", session: "2024", difficulte: "difficile",
    question: "Skiascopie à 50 cm, faisceau divergent, sans verre : le reflet bouge en sens inverse du skiascope. Conclusion ?",
    choix: ["Hypermétropie", "Emmétropie", "Myopie de plus de 2 δ", "Myopie de moins de 2 δ"],
    bonne: 2,
    explication: "Le mouvement est inverse quand le remotum se trouve entre le sujet et l'examinateur, donc à moins de 50 cm : myopie de plus de [[1|0,5]] = 2 δ.\nPour une myopie de 2 δ exactement, on aurait le point neutre.",
    indice: "Le sens du reflet dépend de la position du remotum par rapport au skiascope. Où est le remotum quand le mouvement est inverse ?",
    schema: "img/schemas/U43/skiascopie-sens-du-reflet-50cm.svg",
    schemaTexte: "Skiascopie à 50 cm : un remotum entre le patient et le skiascope (myope de −4 δ) donne un mouvement inverse ; à 50 cm (−2 δ), c'est le point neutre ; au-delà (−1 δ) ou derrière l'œil, le mouvement est direct."
  },

  // ---------- Frontofocomètre (2019) ----------
  {
    id: "U43-038", epreuve: "U43", theme: "Frontofocomètre", session: "2019", difficulte: "facile",
    question: "Au frontofocomètre, la puissance frontale image d'un verre se mesure en lumière verte (raie e du mercure). Pourquoi impose-t-on une couleur précise ?",
    choix: ["Pour ne pas éblouir l'opticien pendant la mesure", "C'est la longueur d'onde de référence (raie e, 546 nm) pour mesurer les puissances", "Pour contrôler l'efficacité des traitements antireflet", "Pour bien voir la mire à travers les verres teintés"],
    bonne: 1,
    explication: "La vergence d'un verre change un peu avec la couleur de la lumière (dispersion). En mesurant à la longueur d'onde de référence (raie e, 546,07 nm), on évite les écarts dus au chromatisme et on mesure la valeur exacte annoncée par le fabricant.",
    indice: "La vergence d'un verre change-t-elle avec la couleur de la lumière ? Pense à la dispersion."
  },
  {
    id: "U43-039", epreuve: "U43", theme: "Frontofocomètre", session: "2019", difficulte: "moyen",
    question: "Au frontofocomètre, un verre de +4,00 δ montre un effet prismatique de 2 Δ. De combien est-il décentré ?",
    choix: ["2 mm", "5 mm", "8 mm", "0,5 mm"],
    bonne: 1,
    explication: "Règle de Prentice : P = c (cm) × D\nc = [[P|D]] = [[2|4]] = 0,5 cm = 5 mm",
    indice: "Règle de Prentice : P (Δ) = c (cm) × D. Isole c, puis convertis les centimètres en millimètres."
  },

  // ---------- Aberrations ----------
  {
    id: "U43-040", epreuve: "U43", theme: "Aberrations", session: "2020", difficulte: "facile",
    question: "Un doublet achromatique associe :",
    choix: ["Deux lentilles convergentes taillées dans le même verre", "Une convergente en crown et une divergente en flint", "Deux lentilles divergentes en flint, collées", "Une lentille convergente et un miroir concave"],
    bonne: 1,
    explication: "Le crown est peu dispersif (constringence, ou nombre d'Abbe, élevée), le flint très dispersif (constringence faible) : leurs dispersions se compensent alors que la vergence totale reste convergente. On corrige ainsi l'aberration chromatique (les franges colorées).",
    indice: "Pour annuler les couleurs, il faut deux verres de dispersions très différentes, et un ensemble qui reste convergent."
  },
  {
    id: "U43-041", epreuve: "U43", theme: "Aberrations", session: "2022", difficulte: "moyen",
    question: "Hors des conditions de Gauss, quelle aberration présente un miroir sphérique ?",
    choix: ["L'aberration chromatique", "L'aberration de sphéricité", "Aucune aberration", "La dispersion"],
    bonne: 1,
    explication: "Un miroir réfléchit toutes les couleurs de la même façon : pas de chromatisme. Mais les rayons du bord ne convergent pas au même point que ceux du centre : aberration de sphéricité. La lame de Schmidt la corrige.",
    indice: "Un miroir ne traverse pas de verre : peut-il disperser les couleurs ? Et que font les rayons du bord d'une surface sphérique ?"
  },
  // ---------- Lecture de schéma ----------
  {
    id: "U43-048", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    question: "Les trois diaphragmes du schéma sont déjà ramenés dans l'espace d'étude. Lequel est la pupille ?",
    choix: ["[D₁], le plus petit", "[D₂]", "[D₃], le plus grand", "On ne peut pas savoir sans connaître le champ"],
    bonne: 1,
    explication: "Depuis A, centre du plan des champs, on compare les angles : tan = [[rayon|distance]].\n[D₁] : [[6|40]] = 0,15\n[D₃] : [[20|100]] = 0,20\n[D₂] : [[15|150]] = 0,10\n[D₂] est vu sous le plus petit angle : c'est la pupille, même s'il n'est pas le plus petit.",
    indice: "Ne regarde pas seulement la taille : compare l'angle sous lequel on voit chaque diaphragme depuis A (rayon ÷ distance).",
    schemaQuestion: "img/schemas/U43/champs-trois-diaphragmes.svg",
    schemaTexte: "Depuis le point A du plan des champs : [D₁] de rayon 6 mm à 40 mm, [D₃] de rayon 20 mm à 100 mm, [D₂] de rayon 15 mm à 150 mm."
  },
  {
    id: "U43-049", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "difficile",
    question: "Le point Y du plan des champs envoie vers la pupille le faisceau dessiné : une partie est arrêtée par la lucarne. À quelle zone du champ appartient Y ?",
    choix: ["Au champ de pleine lumière", "Au champ de contour", "Hors du champ total", "Exactement au bord du champ total"],
    bonne: 1,
    explication: "Une partie du faisceau passe (zone en or) et une partie est arrêtée par la lucarne : l'image de Y est moins éclairée que le centre, mais pas noire. C'est le champ de contour. En pleine lumière, tout le faisceau atteindrait la pupille ; hors du champ total, rien ne passerait.",
    indice: "Le faisceau issu de Y remplit-il toute la pupille, une partie seulement, ou rien du tout ?",
    schemaQuestion: "img/schemas/U43/champs-point-y-faisceau.svg",
    schemaTexte: "Un point Y du plan des champs, une lucarne et une pupille : le cône de lumière issu de Y vers la pupille est en partie arrêté par le bord de la lucarne ; seule la partie basse atteint la pupille."
  },
  {
    id: "U43-050", epreuve: "U43", theme: "Mécanismes de réglage", session: "complément", difficulte: "moyen",
    question: "Sur le dessin, on tourne la molette autour de l'axe Z. Quel est le mouvement du tube ?",
    choix: ["Une rotation autour de Z", "Une translation suivant X", "Une translation suivant Y", "Une translation suivant Z"],
    bonne: 2,
    explication: "La molette porte un pignon (roue dentée) qui engrène sur une crémaillère (barre dentée) fixée au tube. La rotation du pignon autour de Z fait glisser la crémaillère le long de ses dents, ici verticalement : le tube translate suivant Y. C'est le système pignon-crémaillère.",
    indice: "Repère la direction dans laquelle s'alignent les dents fixées au tube : c'est la seule direction où il peut glisser.",
    schemaQuestion: "img/schemas/U43/mecanisme-molette-tube.svg",
    schemaTexte: "Vue de face : une roue dentée (molette, axe Z sortant de l'écran) engrène sur une barre dentée verticale fixée au tube ; axes X vers la droite et Y vers le haut."
  },

  // ---------- Mini-sujet : microscope d'atelier ----------
  {
    id: "U43-042", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 1,
    question: "Où se forme l'image intermédiaire A₁B₁ de la charnière, donnée par l'objectif ?",
    choix: ["À 120 mm après l'objectif, réelle et renversée", "À 60 mm après l'objectif, réelle et renversée", "À 120 mm avant l'objectif, virtuelle et droite", "Au foyer image de l'objectif, à 20 mm"],
    bonne: 0,
    explication: "Relation de conjugaison :\n[[1|OA₁]] = [[1|f']] + [[1|OA]] = [[1|20]] + [[1|−24]]\n[[1|OA₁]] = [[6|120]] − [[5|120]] = [[1|120]]\nDonc OA₁ = +120 mm. Positive : image réelle, après l'objectif.\nGrandissement : γ = [[OA₁|OA]] = [[120|−24]] = −5\nL'image est renversée et 5 fois plus grande.",
    indice: "La charnière est un objet réel avant l'objectif : OA = −24 mm. Utilise la relation de conjugaison avec f' = 20 mm.",
    schema: "img/schemas/U43/microscope-chaine-emmetrope.svg",
    schemaTexte: "Tracé à l'échelle : l'objet AB à 24 mm de l'objectif (f' = 20 mm) donne une image A₁B₁ réelle, renversée, 5 fois plus grande, à 120 mm, dans le plan focal objet de l'oculaire."
  },
  {
    id: "U43-043", epreuve: "U43", theme: "Chaîne des conjugués", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 2,
    question: "Le microscope est réglé pour un œil emmétrope qui n'accommode pas. Quelle distance sépare l'objectif de l'oculaire ?",
    choix: ["120 mm", "145 mm", "95 mm", "170 mm"],
    bonne: 1,
    explication: "L'image finale doit être à l'infini : A₁B₁ doit donc se trouver au foyer objet de l'oculaire, 25 mm avant lui. Distance objectif-oculaire = 120 + 25 = 145 mm. Dans la chaîne, on note « A₁ = Foc ».",
    indice: "Pour un emmétrope qui n'accommode pas, où doit se trouver A₁B₁ par rapport à l'oculaire ?"
  },
  {
    id: "U43-044", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 3,
    contexte: "On étudie les champs dans l'espace entre l'objectif et l'oculaire. Le plan des champs est le plan de A₁B₁. Seules les montures des deux lentilles limitent la lumière.",
    question: "D'après le schéma, quel diaphragme est la pupille ?",
    choix: ["La monture de l'objectif", "La monture de l'oculaire", "Aucune : il faut d'abord un diaphragme de champ", "Les deux montures jouent ce rôle à égalité"],
    bonne: 0,
    explication: "Depuis A₁, on compare les angles : tan = [[rayon|distance]].\nMonture de l'objectif : [[4|120]] ≈ 0,03\nMonture de l'oculaire : [[10|25]] = 0,40\nLa monture de l'objectif est vue sous le plus petit angle : c'est la pupille. La monture de l'oculaire est la lucarne.",
    indice: "Les deux montures sont déjà dans l'espace d'étude. Compare rayon ÷ distance à A₁ pour chacune.",
    schemaQuestion: "img/schemas/U43/cas-microscope-diaphragmes.svg",
    schema: "img/schemas/U43/cas-microscope-diaphragmes-correction.svg",
    schemaTexte: "Plan des champs en A₁ ; monture de l'objectif de rayon 4 mm, 120 mm avant ; monture de l'oculaire de rayon 10 mm, 25 mm après."
  },
  {
    id: "U43-045", epreuve: "U43", theme: "Étude des champs", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 4,
    question: "Avec la monture de l'oculaire comme lucarne, le bord de l'image est dégradé. Où placer un diaphragme pour obtenir un bord net ?",
    choix: ["Dans le plan de A₁B₁, au foyer objet de l'oculaire", "Contre l'objectif", "Contre l'oculaire", "Au foyer image de l'oculaire"],
    bonne: 0,
    explication: "Un diaphragme placé dans le plan d'une image réelle (ici A₁B₁, plan des champs) coupe le champ net : il supprime le champ de contour. C'est le diaphragme de champ des oculaires. Contre l'objectif, il réduirait la lumière (c'est la pupille) sans rendre le bord net.",
    indice: "Le champ de contour disparaît quand le diaphragme est dans un plan où se forme une image réelle. Lequel, ici ?"
  },
  {
    id: "U43-046", epreuve: "U43", theme: "Œil et instrument", session: "complément", difficulte: "difficile",
    cas: "CAS-U43-01", etape: 5,
    contexte: "Un collègue myope de −8,00 δ veut utiliser le microscope sans ses lunettes. Son œil reste au foyer image de l'oculaire.",
    question: "De combien, et dans quel sens, faut-il déplacer l'oculaire par rapport au réglage emmétrope ?",
    choix: ["5 mm, en le rapprochant de l'objectif", "5 mm, en l'éloignant de l'objectif", "8 mm, en le rapprochant de l'objectif", "0,2 mm, en le rapprochant de l'objectif"],
    bonne: 0,
    explication: "Remotum à [[1|8]] m = 0,125 m devant l'œil, donc x' = F'A' = −125 mm.\nNewton : x = [[−f'²|x']] = [[−625|−125]] = +5 mm\nA₁ doit être 5 mm après le foyer objet de l'oculaire, c'est-à-dire entre Foc et l'oculaire : on rapproche l'oculaire de l'objectif de 5 mm.",
    indice: "Place l'image finale sur le remotum du myope, puis utilise x·x' = −f'² avec f' = 25 mm. Attention au signe de x'."
  },
  {
    id: "U43-047", epreuve: "U43", theme: "Liaisons mécaniques", session: "complément", difficulte: "moyen",
    cas: "CAS-U43-01", etape: 6,
    contexte: "L'oculaire est monté dans une bague filetée au pas de 0,5 mm : en la tournant, l'oculaire avance en tournant.",
    question: "Quelle est la liaison entre la bague et le tube, et combien de tours faut-il pour le réglage de l'étape précédente ?",
    choix: ["Hélicoïdale, 10 tours", "Pivot glissant, 10 tours", "Hélicoïdale, 2,5 tours", "Glissière, 5 tours"],
    bonne: 0,
    explication: "Rotation et translation liées par un filetage : liaison hélicoïdale (1 degré de liberté). Chaque tour fait avancer d'un pas : N = course ÷ pas = 5 ÷ 0,5 = 10 tours.",
    indice: "Les deux mouvements sont-ils liés ou indépendants ? Pour le nombre de tours, divise la course par le pas."
  },
{
  "id": "U43-126",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Deux lentilles minces : L₁ (f'₁ = 60 mm), puis L₂ (f'₂ = 40 mm) placée 100 mm après L₁. Un objet réel AB est à 90 mm devant L₁. Trouve la position de l'image finale et le grandissement total, étape par étape.",
  "etapes": [
    {
      "consigne": "Position de l'image intermédiaire O₁A₁ (en mm)",
      "reponse": {
        "valeur": 180,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "Relation de conjugaison avec L₁ : [[1|O₁A₁]] = [[1|f'₁]] + [[1|O₁A]], avec O₁A = −90 mm (objet réel, avant la lentille).",
      "ligne": "[[1|O₁A₁]] = [[1|60]] + [[1|−90]] = [[3|180]] − [[2|180]] = [[1|180]]\nDonc O₁A₁ = +180 mm"
    },
    {
      "consigne": "Position de A₁ par rapport à L₂, O₂A₁ (en mm)",
      "reponse": {
        "valeur": 80,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "L₂ est à 100 mm de L₁ et A₁ à 180 mm de L₁. Compte la distance de L₂ à A₁ dans le sens de la lumière.",
      "ligne": "O₂A₁ = O₁A₁ − O₁O₂ = 180 − 100 = +80 mm\nPositif : A₁ est après L₂, c'est un objet virtuel pour L₂."
    },
    {
      "consigne": "Position de l'image finale O₂A' (en mm, au dixième)",
      "reponse": {
        "valeur": 26.7,
        "unite": "mm",
        "decimales": 1,
        "signe": true,
        "tolerance": 0.1
      },
      "aide": "Relation de conjugaison avec L₂ : [[1|O₂A']] = [[1|f'₂]] + [[1|O₂A₁]], avec O₂A₁ positif.",
      "ligne": "[[1|O₂A']] = [[1|40]] + [[1|80]] = [[2|80]] + [[1|80]] = [[3|80]]\nDonc O₂A' = +26,7 mm"
    },
    {
      "consigne": "Grandissement total γ (au centième)",
      "reponse": {
        "valeur": -0.67,
        "unite": "",
        "decimales": 2,
        "signe": true,
        "tolerance": 0.015
      },
      "aide": "γ = γ₁ × γ₂, avec γ₁ = [[O₁A₁|O₁A]] et γ₂ = [[O₂A'|O₂A₁]].",
      "ligne": "γ₁ = [[180|−90]] = −2      γ₂ = [[26,7|80]] ≈ +0,33\nγ = γ₁ × γ₂ ≈ −0,67"
    }
  ],
  "explication": "L'image finale est réelle, à 26,7 mm après L₂. Le grandissement total vaut −0,67 : elle est renversée et réduite."
},
{
  "id": "U43-127",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Une lunette a un oculaire de focale 30 mm. Un myope de −5 δ, sans lunettes, l'utilise sans accommoder, l'œil au foyer image de l'oculaire. La bague de réglage a un pas de 0,75 mm. Trouve le réglage depuis la position emmétrope, étape par étape.",
  "etapes": [
    {
      "consigne": "Position du remotum HR (en mm)",
      "reponse": {
        "valeur": -200,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "HR = [[1|R]], en mètres et avec son signe : le remotum d'un myope est devant l'œil.",
      "ligne": "HR = [[1|R]] = [[1|−5]] = −0,20 m = −200 mm"
    },
    {
      "consigne": "Déplacement x de l'image intermédiaire par rapport au foyer objet (en mm)",
      "reponse": {
        "valeur": 4.5,
        "unite": "mm",
        "decimales": 1,
        "signe": true
      },
      "aide": "L'œil est au foyer image de l'oculaire : x' = F'A' = HR. Relation de Newton : x · x' = −f'², avec f' = 30 mm.",
      "ligne": "x' = HR = −200 mm\nx = [[−f'²|x']] = [[−900|−200]] = +4,5 mm\nPositif : on rapproche l'oculaire de l'objectif de 4,5 mm."
    },
    {
      "consigne": "Nombre de tours de bague",
      "reponse": {
        "valeur": 6,
        "unite": "tours",
        "decimales": 0,
        "signe": false
      },
      "aide": "Un tour fait avancer d'un pas : nombre de tours = [[course|pas]], les deux dans la même unité.",
      "ligne": "N = [[course|pas]] = [[4,5|0,75]] = 6 tours"
    }
  ],
  "explication": "Pour ce myope, on rapproche l'oculaire de l'objectif de 4,5 mm, soit 6 tours de bague."
},
{
  "id": "U43-128",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "Au frontofocomètre, un verre porte la correction +4,00 (−2,00) à 180°. Il est décentré de 5 mm horizontalement et de 3 mm verticalement. Trouve l'effet prismatique résultant, étape par étape.",
  "etapes": [
    {
      "consigne": "Puissance du méridien horizontal D_H (en δ, au centième)",
      "reponse": {
        "valeur": 4,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Un cylindre n'a aucun effet le long de son axe. L'axe 180° est horizontal.",
      "ligne": "Méridien horizontal = méridien de l'axe : D_H = +4,00 δ"
    },
    {
      "consigne": "Puissance du méridien vertical D_V (en δ, au centième)",
      "reponse": {
        "valeur": 2,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Dans le méridien perpendiculaire à l'axe, la puissance est la sphère plus le cylindre.",
      "ligne": "D_V = +4,00 + (−2,00) = +2,00 δ"
    },
    {
      "consigne": "Prisme horizontal P_H (en Δ, au dixième)",
      "reponse": {
        "valeur": 2,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Règle de Prentice : P = décentrement (cm) × puissance. Convertis 5 mm en cm.",
      "ligne": "P_H = 0,5 × 4,00 = 2,0 Δ"
    },
    {
      "consigne": "Prisme vertical P_V (en Δ, au dixième)",
      "reponse": {
        "valeur": 0.6,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Même règle avec le décentrement vertical et la puissance verticale.",
      "ligne": "P_V = 0,3 × 2,00 = 0,6 Δ"
    },
    {
      "consigne": "Prisme résultant P (en Δ, au dixième)",
      "reponse": {
        "valeur": 2.1,
        "unite": "Δ",
        "decimales": 1,
        "signe": false
      },
      "aide": "Les deux prismes sont perpendiculaires : combine-les comme les côtés d'un triangle rectangle.",
      "ligne": "P = √(P_H² + P_V²) = √(2,0² + 0,6²) = √4,36 ≈ 2,1 Δ"
    }
  ],
  "explication": "Chaque méridien a sa propre puissance, donc son propre prisme. Le prisme résultant est de 2,1 Δ."
},
{
  "id": "U43-129",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "moyen",
  "type": "pose",
  "question": "Une lunette afocale a un objectif de focale 900 mm et de diamètre 90 mm, avec un oculaire de focale 18 mm. On ajoute une lentille de Barlow ×2 qui double la focale de l'objectif. Étudie l'effet, étape par étape.",
  "etapes": [
    {
      "consigne": "Grossissement sans Barlow G₀",
      "reponse": {
        "valeur": 50,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G = [[f'obj|f'oc]], les deux focales dans la même unité.",
      "ligne": "G₀ = [[900|18]] = 50"
    },
    {
      "consigne": "Focale de l'objectif avec la Barlow (en mm)",
      "reponse": {
        "valeur": 1800,
        "unite": "mm",
        "decimales": 0,
        "signe": false
      },
      "aide": "La Barlow ×2 double la focale : on multiplie.",
      "ligne": "f'obj = 2 × 900 = 1 800 mm"
    },
    {
      "consigne": "Grossissement avec la Barlow G",
      "reponse": {
        "valeur": 100,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "Même formule, avec la nouvelle focale.",
      "ligne": "G = [[1 800|18]] = 100"
    },
    {
      "consigne": "Diamètre du cercle oculaire avec la Barlow (en mm, au centième)",
      "reponse": {
        "valeur": 0.9,
        "unite": "mm",
        "decimales": 2,
        "signe": false
      },
      "aide": "Diamètre du cercle oculaire = [[diamètre de l'objectif|G]].",
      "ligne": "d = [[90|100]] = 0,90 mm"
    }
  ],
  "explication": "La Barlow double le grossissement (de 50 à 100) et divise par deux le cercle oculaire (de 1,8 à 0,9 mm) : l'image est plus grosse et moins lumineuse."
},
{
  "id": "U43-130",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "type": "pose",
  "question": "Un microscope a un objectif de focale 10 mm et un oculaire de focale 25 mm. La préparation est à 12 mm devant l'objectif. Il est réglé pour un œil emmétrope qui n'accommode pas. Étudie-le étape par étape.",
  "etapes": [
    {
      "consigne": "Position de l'image intermédiaire O₁A₁ (en mm)",
      "reponse": {
        "valeur": 60,
        "unite": "mm",
        "decimales": 0,
        "signe": true
      },
      "aide": "Relation de conjugaison : [[1|O₁A₁]] = [[1|f'obj]] + [[1|O₁A]], avec O₁A = −12 mm.",
      "ligne": "[[1|O₁A₁]] = [[1|10]] + [[1|−12]] = [[6|60]] − [[5|60]] = [[1|60]]\nDonc O₁A₁ = +60 mm"
    },
    {
      "consigne": "Grandissement de l'objectif γ",
      "reponse": {
        "valeur": -5,
        "unite": "",
        "decimales": 0,
        "signe": true
      },
      "aide": "γ = [[O₁A₁|O₁A]], avec les signes.",
      "ligne": "γ = [[O₁A₁|O₁A]] = [[60|−12]] = −5"
    },
    {
      "consigne": "Distance entre l'objectif et l'oculaire (en mm)",
      "reponse": {
        "valeur": 85,
        "unite": "mm",
        "decimales": 0,
        "signe": false
      },
      "aide": "Pour un emmétrope sans accommodation, l'image finale est à l'infini : A₁ doit être au foyer objet de l'oculaire, 25 mm avant lui.",
      "ligne": "A₁ est à 60 mm après l'objectif et à 25 mm avant l'oculaire :\nO₁O₂ = 60 + 25 = 85 mm"
    },
    {
      "consigne": "Grossissement de l'oculaire G_oc",
      "reponse": {
        "valeur": 10,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G_oc = [[250|f'oc]], avec f'oc en mm.",
      "ligne": "G_oc = [[250|25]] = 10"
    },
    {
      "consigne": "Grossissement commercial G",
      "reponse": {
        "valeur": 50,
        "unite": "",
        "decimales": 0,
        "signe": false
      },
      "aide": "G = ∣γ objectif∣ × G_oc.",
      "ligne": "G = ∣−5∣ × 10 = 50"
    }
  ],
  "explication": "L'image intermédiaire est à 60 mm après l'objectif, agrandie 5 fois. Les lentilles sont à 85 mm l'une de l'autre et le grossissement commercial vaut 50."
}
);

// ---------- Mini-sujet (cas) ----------
CAS.push({
  id: "CAS-U43-01",
  epreuve: "U43",
  titre: "Le microscope d'atelier",
  contexte: "Ton magasin achète un petit microscope pour contrôler l'usure des charnières de montures. L'objectif est une lentille mince de focale 20 mm, l'oculaire une lentille mince de focale 25 mm. La charnière observée est placée à 24 mm devant l'objectif.",
  annexe: { titre: "Données", colonnes: ["Élément", "Valeur"], lignes: [["Focale de l'objectif", "f'obj = 20 mm"], ["Focale de l'oculaire", "f'oc = 25 mm"], ["Position de la charnière", "OA = −24 mm"]] }
});
CAS.push({
  id: "CAS-U43-02",
  epreuve: "U43",
  titre: "Le viseur de l'appareil reflex",
  contexte: "Un client te montre son appareil reflex. L'objectif, assimilé à une lentille mince de focale 50 mm, est réglé sur l'infini. Un miroir plan incliné à 45°, placé 30 mm après l'objectif, renvoie la lumière vers le haut sur un verre dépoli. On regarde le dépoli à travers une loupe de focale 40 mm.",
  annexe: { titre: "Données", colonnes: ["Élément", "Valeur"], lignes: [["Focale de l'objectif", "f'obj = 50 mm"], ["Distance objectif-miroir", "30 mm"], ["Focale de la loupe", "f'lou = 40 mm"], ["Mise au point de l'objectif", "sur l'infini"]] }
});

// ---------- Cas pratiques : lunette de terrain et télescope ----------
CAS.push({
  "id": "CAS-U43-03",
  "epreuve": "U43",
  "titre": "La lunette de terrain",
  "contexte": "Un client veut une lunette de terrain pour observer les oiseaux. L'objectif est une lentille mince de focale 600 mm et de diamètre 60 mm. L'oculaire est une lentille mince de focale 20 mm.",
  "annexe": {
    "titre": "Données",
    "colonnes": [
      "Élément",
      "Valeur"
    ],
    "lignes": [
      [
        "Focale de l'objectif",
        "f'obj = 600 mm"
      ],
      [
        "Diamètre de l'objectif",
        "60 mm"
      ],
      [
        "Focale de l'oculaire",
        "f'oc = 20 mm"
      ]
    ]
  }
});
CAS.push({
  "id": "CAS-U43-04",
  "epreuve": "U43",
  "titre": "Le télescope de Newton",
  "contexte": "Un client te montre son télescope de Newton. Le miroir principal est concave, de focale 800 mm. Un petit miroir plan à 45° renvoie la lumière sur le côté, vers un oculaire de focale 25 mm.",
  "annexe": {
    "titre": "Données",
    "colonnes": [
      "Élément",
      "Valeur"
    ],
    "lignes": [
      [
        "Focale du miroir principal",
        "f = 800 mm"
      ],
      [
        "Focale de l'oculaire",
        "f'oc = 25 mm"
      ],
      [
        "Diaphragme de champ",
        "diamètre 24 mm"
      ]
    ]
  }
});
QUESTIONS.push(
{
  "id": "U43-147",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "facile",
  "cas": "CAS-U43-03",
  "etape": 1,
  "type": "calcul",
  "question": "Pour un œil emmétrope qui n'accommode pas, quel est le grossissement de la lunette, en valeur absolue ?",
  "reponse": {
    "valeur": 30,
    "unite": "",
    "decimales": 0,
    "signe": false
  },
  "explication": "Lunette afocale : G = [[f'obj|f'oc]] = [[600|20]] = 30\nL'image est 30 fois plus grande que l'objet vu à l'œil nu, sous un angle 30 fois plus grand.",
  "indice": "Pour une lunette afocale, G est le rapport de la focale de l'objectif à celle de l'oculaire.",
  "erreurs": [
    {
      "valeur": 0.03,
      "type": "notion",
      "message": "Tu as inversé le rapport. G = f'obj / f'oc : la grande focale, celle de l'objectif, est au numérateur."
    }
  ]
},
{
  "id": "U43-148",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-03",
  "etape": 2,
  "contexte": "Le client est emmétrope. Il n'accommode pas.",
  "question": "Pour un œil emmétrope qui n'accommode pas, où se forme l'image intermédiaire A₁ d'un oiseau très éloigné, et quelle distance sépare les deux lentilles ?",
  "choix": [
    "A₁ = F'obj = Foc, distance 580 mm",
    "A₁ = F'obj, distance 600 mm (l'oculaire est collé au foyer)",
    "A₁ = F'obj = Foc, distance 620 mm",
    "A₁ sur l'oculaire, distance 600 mm"
  ],
  "bonne": 2,
  "explication": "Objet à l'infini : l'objectif forme A₁ = F'obj. L'image finale doit être à l'infini, donc A₁ au foyer objet de l'oculaire : F'obj = Foc.\nDistance entre les lentilles : 600 + 20 = 620 mm. Avec 600 − 20 = 580 mm, on décrirait une lunette de Galilée.",
  "indice": "Pour que l'oculaire donne une image à l'infini, où doit être son objet ? Additionne alors les deux focales.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Les deux foyers sont confondus, mais un oculaire convergent se place après l'image, pas avant. 580 mm vaut pour un oculaire divergent."
    },
    "3": {
      "type": "notion",
      "message": "L'image intermédiaire n'est pas sur l'oculaire : elle est au foyer objet de l'oculaire, 20 mm avant lui."
    }
  }
},
{
  "id": "U43-149",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-03",
  "etape": 3,
  "type": "calcul",
  "question": "Quel est le diamètre du cercle oculaire (pupille de sortie), en mm ?",
  "reponse": {
    "valeur": 2,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Cercle oculaire : d = [[D|G]] = [[60|30]] = 2 mm\nC'est le diamètre du faisceau qui sort de l'oculaire, plus petit que la pupille de l'œil le jour : tout passe.",
  "indice": "Le diamètre du cercle oculaire est le diamètre de l'objectif divisé par le grossissement."
},
{
  "id": "U43-150",
  "epreuve": "U43",
  "theme": "Œil et instrument",
  "session": "complément",
  "difficulte": "difficile",
  "cas": "CAS-U43-03",
  "etape": 4,
  "contexte": "Le client suivant est myope de −4 δ et enlève ses lunettes.",
  "type": "calcul",
  "question": "Le client suivant est myope de −4 δ et enlève ses lunettes. Il règle la lunette sans accommoder, l'œil au foyer image de l'oculaire. Calcule x = Foc A₁ (en mm, avec son signe), la position de l'image intermédiaire par rapport au foyer objet de l'oculaire.",
  "reponse": {
    "valeur": 1.6,
    "unite": "mm",
    "decimales": 1,
    "signe": true
  },
  "explication": "Remotum : HR = [[1|R]] = [[1|−4]] = −0,25 m = −250 mm, donc x' = F'oc A' = −250 mm\nNewton : x = [[−f'oc²|x']] = [[−400|−250]] = +1,6 mm\nPositif : A₁ est 1,6 mm après Foc. On rapproche l'oculaire de l'objectif de 1,6 mm.",
  "indice": "L'œil est au foyer image de l'oculaire : x' = HR, négatif pour un myope. Puis Newton : x · x' = −f'².",
  "erreurs": [
    {
      "valeur": -1.6,
      "type": "signe",
      "message": "Tu as pris x' = +250 mm. Le remotum d'un myope est devant l'œil : x' = −250 mm, donc x = +1,6 mm."
    }
  ]
},
{
  "id": "U43-151",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-03",
  "etape": 5,
  "question": "Le réglage se fait avec une bague filetée de pas 0,8 mm. Quelle est la liaison entre la bague et l'oculaire, et combien de tours pour le déplacement de l'étape précédente ?",
  "choix": [
    "Hélicoïdale, 2 tours",
    "Hélicoïdale, 0,5 tour",
    "Pivot glissant, 2 tours",
    "Glissière, 2 tours"
  ],
  "bonne": 0,
  "explication": "La bague tourne et l'oculaire avance en même temps, les deux mouvements sont liés par le filetage : liaison hélicoïdale.\nNombre de tours = [[course|pas]] = [[1,6|0,8]] = 2 tours. Le rapport inversé, [[0,8|1,6]] = 0,5 tour, est une erreur de division.",
  "indice": "Les mouvements sont-ils indépendants ou liés ? Un tour fait avancer d'un pas.",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Tu as divisé le pas par la course. Le nombre de tours est la course divisée par le pas."
    }
  }
},
{
  "id": "U43-152",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-04",
  "etape": 1,
  "question": "Sans tenir compte du miroir plan, où le miroir principal forme-t-il l'image A₁ d'une étoile ?",
  "choix": [
    "À 1 600 mm devant le miroir, au centre de courbure",
    "Au foyer, à 800 mm devant le miroir",
    "À 800 mm derrière le miroir",
    "À l'infini"
  ],
  "bonne": 1,
  "explication": "Un miroir concave de focale 800 mm renvoie la lumière vers l'avant : une étoile, à l'infini, donne son image au foyer, 800 mm devant le miroir. Le centre de courbure est à 1 600 mm, il ne sert pas ici.",
  "indice": "Un faisceau parallèle converge au foyer, pas au centre de courbure.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Le centre de courbure est à 1 600 mm, mais l'image d'un objet à l'infini se forme au foyer, à mi-chemin (f = R/2)."
    }
  }
},
{
  "id": "U43-153",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-04",
  "etape": 2,
  "question": "Que change le miroir plan de renvoi ?",
  "choix": [
    "Il replie le trajet : l'image est symétrique, de même taille, à la même distance parcourue",
    "Il double la focale du télescope",
    "Il agrandit l'image, car il est incliné à 45°",
    "Il déplace le foyer 800 mm plus loin"
  ],
  "bonne": 0,
  "explication": "Un miroir plan donne d'un objet une image symétrique, de même taille (γ = +1). Il plie le faisceau pour sortir l'oculaire sur le côté, mais ne change ni la focale, ni la distance parcourue par la lumière.",
  "indice": "Que vaut le grandissement d'un miroir plan ?",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Un miroir plan a un grandissement de +1 : il ne peut pas changer la focale du télescope."
    }
  }
},
{
  "id": "U43-154",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-04",
  "etape": 3,
  "type": "calcul",
  "question": "Quel est le grossissement du télescope, en valeur absolue ?",
  "reponse": {
    "valeur": 32,
    "unite": "",
    "decimales": 0,
    "signe": false
  },
  "explication": "Comme pour une lunette afocale : G = [[f'miroir|f'oc]] = [[800|25]] = 32\nLe miroir plan ne change rien au calcul.",
  "indice": "Même formule qu'une lunette : focale de l'objectif (ici le miroir) sur focale de l'oculaire."
},
{
  "id": "U43-155",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "difficulte": "difficile",
  "cas": "CAS-U43-04",
  "etape": 4,
  "type": "calcul",
  "question": "Un diaphragme de champ de 24 mm de diamètre est placé dans le plan de l'image A₁. Quel est le champ réel total de l'instrument, en degrés ?",
  "reponse": {
    "valeur": 1.7,
    "unite": "°",
    "decimales": 1,
    "signe": false
  },
  "explication": "Le diaphragme de champ est la lucarne : son rayon (12 mm) est vu depuis le miroir sous un demi-angle tel que\ntan α = [[12|800]] = 0,015, soit α = 0,86°\nChamp réel total : 2α ≈ 1,7°.",
  "indice": "Demi-champ : tan α = rayon de la lucarne sur focale du miroir. Pense à doubler, et à prendre le rayon, pas le diamètre.",
  "erreurs": [
    {
      "valeur": 3.4,
      "type": "notion",
      "message": "Tu as pris le diamètre de 24 mm au lieu du rayon de 12 mm. Le demi-champ se calcule avec le rayon."
    }
  ]
},
{
  "id": "U43-156",
  "epreuve": "U43",
  "theme": "Mécanismes de réglage",
  "session": "complément",
  "difficulte": "moyen",
  "cas": "CAS-U43-04",
  "etape": 5,
  "question": "La mise au point se fait par une molette dont le pignon a 16 dents, sur une crémaillère dont les dents sont espacées de 1,5 mm. De combien le tube de l'oculaire avance-t-il pour un tour, et quel est le mouvement utile ?",
  "choix": [
    "1,5 mm, translation du tube suivant son axe",
    "24 mm, rotation de la molette",
    "16 mm, translation du tube suivant son axe",
    "24 mm, translation du tube suivant son axe"
  ],
  "bonne": 3,
  "explication": "Un tour de molette fait défiler les 16 dents : 16 × 1,5 = 24 mm. Le mouvement utile est celui de l'élément optique, ici la translation du tube suivant son axe, pas la rotation de la molette.",
  "indice": "Un tour de pignon = toutes ses dents devant la crémaillère. Quel est le mouvement qui sert à régler l'optique ?",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Le mouvement utile est celui de l'élément optique (le tube qui coulisse), pas celui de la molette qu'on tourne."
    },
    "0": {
      "type": "notion",
      "message": "1,5 mm est l'espacement de deux dents. Pour un tour complet, il faut compter toutes les dents du pignon."
    }
  }
}
);

// ---------- Questions à lire sur un schéma (schémas : notes/schemas-U43/generer-lot3.py) ----------
QUESTIONS.push(
{
  "id": "U43-157",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "question": "Une lentille mince convergente de focale 40 mm donne de l'objet AB, placé à 60 mm devant elle, l'image dessinée (graduations tous les 20 mm à partir de O). Où se trouve l'image A'B', et de quelle nature est-elle ?",
  "choix": [
    "OA' = +60 mm, image réelle et renversée",
    "OA' = −120 mm, image virtuelle et droite",
    "OA' = +120 mm, image réelle et renversée",
    "OA' = +40 mm, image réelle et renversée"
  ],
  "bonne": 2,
  "explication": "Lecture : les deux rayons se croisent en B', dont le pied A' est en face de la graduation 120. Donc OA' = +120 mm : après la lentille, les rayons se croisent vraiment, l'image est réelle et renversée.\nVérification par le calcul :\n[[1|OA']] = [[1|f']] + [[1|OA]] = [[1|40]] + [[1|−60]] = [[3|120]] − [[2|120]] = [[1|120]]\nGrandissement : γ = [[OA'|OA]] = [[120|−60]] = −2, donc renversée et deux fois plus grande.",
  "indice": "L'image est à l'endroit où les rayons issus de B se recoupent. Lis la graduation en face du pied de cette image.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Tu as lu la position de l'objet. L'image est là où les deux rayons se recoupent, en face d'une autre graduation."
    },
    "1": {
      "type": "notion",
      "message": "Les rayons se croisent vraiment après la lentille : l'image est réelle, donc OA' est positif."
    }
  },
  "schemaQuestion": "img/schemas/U43/lentille-image-lue-120mm.svg",
  "schema": "img/schemas/U43/lentille-image-lue-120mm-correction.svg",
  "schemaTexte": "Lentille convergente de focale 40 mm, objet AB à 60 mm avant la lentille. Deux rayons issus de B se croisent en B', sous l'axe, après la lentille. Graduations tous les 20 mm à partir de O."
},
{
  "id": "U43-158",
  "epreuve": "U43",
  "theme": "Étude des champs",
  "session": "complément",
  "difficulte": "difficile",
  "question": "Les trois diaphragmes du schéma sont déjà ramenés dans l'espace d'étude (rayon, et distance au plan des champs dont A est le centre). Quelle est la lucarne ?",
  "choix": [
    "[D₁]",
    "[D₃], le plus grand",
    "[D₂]",
    "Il n'y a pas de lucarne ici"
  ],
  "bonne": 0,
  "explication": "Étape 1, la pupille : on compare les angles depuis A, centre du plan des champs.\n[D₁] : [[10|40]] = 0,25      [D₂] : [[15|90]] = 0,17      [D₃] : [[30|150]] = 0,20\n[D₂] est vu sous le plus petit angle : c'est la pupille.\nÉtape 2, la lucarne : on compare les angles depuis le centre de la pupille, à 90 mm de A.\n[D₁] est à 50 mm : [[10|50]] = 0,20      [D₃] est à 60 mm : [[30|60]] = 0,50\n[D₁] est vu sous le plus petit angle : c'est la lucarne.",
  "indice": "Trouve d'abord la pupille depuis A. Cherche ensuite la lucarne parmi les deux autres, mais depuis le centre de la pupille.",
  "erreurs": {
    "2": {
      "type": "notion",
      "message": "[D₂] est vu sous le plus petit angle depuis A : c'est un autre rôle. La lucarne se cherche ensuite parmi les autres, depuis le centre de la pupille."
    },
    "1": {
      "type": "notion",
      "message": "Compare les angles, pas les tailles : un diaphragme plus grand mais plus éloigné peut être vu sous un angle plus petit."
    }
  },
  "schemaQuestion": "img/schemas/U43/champs-lucarne-trois-diaphragmes.svg",
  "schemaTexte": "Depuis le point A du plan des champs : [D₁] de rayon 10 mm à 40 mm, [D₂] de rayon 15 mm à 90 mm, [D₃] de rayon 30 mm à 150 mm."
},
{
  "id": "U43-159",
  "epreuve": "U43",
  "theme": "Liaisons mécaniques",
  "session": "complément",
  "difficulte": "moyen",
  "question": "D'après le schéma, quelle est la liaison entre le tube et le support ?",
  "choix": [
    "Pivot glissant d'axe Z",
    "Pivot d'axe Z",
    "Hélicoïdale d'axe Z",
    "Glissière d'axe Z"
  ],
  "bonne": 3,
  "explication": "La clavette, fixée au support, est engagée dans la rainure du tube : elle interdit la rotation. Il ne reste que la translation suivant Z : liaison glissière d'axe Z, 1 degré de liberté.\nSans la clavette, le tube pourrait aussi tourner : ce serait un pivot glissant (2 degrés de liberté).",
  "indice": "Que fait une clavette dans une rainure ? Compte ensuite les mouvements qui restent.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Une clavette dans une rainure empêche le tube de tourner : il ne reste qu'un seul mouvement."
    },
    "2": {
      "type": "notion",
      "message": "Il n'y a pas de filetage ici, et la rotation est bloquée par la clavette."
    }
  },
  "schemaQuestion": "img/schemas/U43/liaison-tube-clavette.svg",
  "schemaTexte": "Un tube guidé dans un support : une clavette fixée au support est engagée dans une rainure creusée le long du tube, d'axe Z. Coupe transversale et coupe longitudinale."
},
{
  "id": "U43-160",
  "epreuve": "U43",
  "theme": "Chaîne des conjugués",
  "session": "complément",
  "difficulte": "moyen",
  "question": "Un objet AB est placé au centre de courbure C d'un miroir concave. D'après le tracé, quelle est son image ?",
  "choix": [
    "Réelle, renversée, plus petite, entre F et C",
    "Réelle, renversée, de même taille, en C",
    "Virtuelle, droite, derrière le miroir",
    "Réelle, droite, de même taille, en C"
  ],
  "bonne": 1,
  "explication": "Les deux rayons réfléchis se recoupent en B', sous l'axe, à la verticale de C et à la même distance de l'axe que B : l'image est en C, de même taille que l'objet, renversée (γ = −1).\nVérification, avec les distances comptées positivement devant le miroir, SA = SC = R :\n[[1|SA']] + [[1|SA]] = [[2|R]], donc [[1|SA']] = [[2|R]] − [[1|R]] = [[1|R]]\nDonc SA' = R : A' est en C.",
  "indice": "Regarde où les deux rayons réfléchis se recoupent, puis compare la hauteur de B' à celle de B.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Mesure la hauteur de B' sur le schéma et compare-la à celle de B."
    },
    "2": {
      "type": "notion",
      "message": "Les rayons réfléchis se croisent vraiment, devant le miroir : l'image est réelle."
    }
  },
  "schemaQuestion": "img/schemas/U43/miroir-concave-objet-en-c.svg",
  "schema": "img/schemas/U43/miroir-concave-objet-en-c-correction.svg",
  "schemaTexte": "Miroir concave de sommet S, de foyer F et de centre de courbure C. L'objet AB est en C. Un rayon parallèle à l'axe repart vers F, un rayon visant S repart symétrique par rapport à l'axe ; ils se recoupent en B', sous l'axe."
},
{
  "id": "U43-161",
  "epreuve": "U43",
  "theme": "Grossissement et photo",
  "session": "complément",
  "difficulte": "difficile",
  "question": "Un faisceau parallèle de 80 mm de large entre dans l'instrument dessiné et en ressort avec 20 mm de large. De quel instrument s'agit-il, et quel est son grossissement en valeur absolue ?",
  "choix": [
    "Lunette de Galilée (oculaire divergent), ∣G∣ = 4",
    "Lunette astronomique (oculaire convergent), ∣G∣ = 4",
    "Lunette de Galilée (oculaire divergent), ∣G∣ = 0,25",
    "Télescope à miroir, ∣G∣ = 4"
  ],
  "bonne": 0,
  "explication": "L'oculaire est divergent et les rayons venus de l'objectif ne se croisent pas avant lui : ils visent le foyer F'obj, situé derrière l'oculaire. C'est une lunette de Galilée, qui donne une image droite.\nGrossissement : ∣G∣ = [[largeur entrante|largeur sortante]] = [[80|20]] = 4\nUne lunette astronomique aurait un oculaire convergent, après le point de croisement.",
  "indice": "Où vont les rayons après l'objectif : se croisent-ils avant l'oculaire ? Compare ensuite la largeur du faisceau avant et après l'instrument.",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Dans une lunette astronomique, les rayons se croisent avant l'oculaire, qui est convergent. Ici l'oculaire est divergent."
    },
    "2": {
      "type": "notion",
      "message": "Tu as pris le rapport inversé. Le faisceau est resserré, l'instrument grossit : ∣G∣ = largeur entrante ÷ largeur sortante."
    }
  },
  "schemaQuestion": "img/schemas/U43/lunette-galilee-faisceau.svg",
  "schemaTexte": "Un faisceau parallèle de 80 mm de large traverse un objectif convergent puis un oculaire divergent, et ressort parallèle avec 20 mm de large. Les rayons de l'objectif visent un point situé derrière l'oculaire."
}
);

// ---------- Thèmes à renforcer : aberrations, skiascopie, frontofocomètre ----------
QUESTIONS.push(
{
  "id": "U43-162",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "difficulte": "moyen",
  "question": "Des rayons parallèles à l'axe traversent une lentille sphérique : ceux du bord coupent l'axe plus près de la lentille que ceux du centre. Quelle aberration est en cause, et quelle parade simple existe ?",
  "choix": [
    "Aberration chromatique : accoler un crown et un flint",
    "Coma : ne photographier que des objets sur l'axe",
    "Aberration sphérique : diaphragmer pour n'utiliser que le centre de la lentille",
    "Distorsion : placer le diaphragme devant la lentille"
  ],
  "bonne": 2,
  "explication": "Une surface sphérique dévie trop les rayons du bord : ils convergent avant ceux du centre. C'est l'aberration sphérique.\nEn diaphragmant, on ne garde que les rayons proches de l'axe (conditions de Gauss), au prix d'une image moins lumineuse. Le doublet crown-flint, lui, corrige les couleurs.",
  "indice": "Les rayons du bord et ceux du centre ont la même couleur : le défaut vient-il de la couleur ou de la forme de la surface ?",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "L'aberration chromatique sépare les couleurs. Ici tous les rayons ont la même couleur : le défaut vient de la forme sphérique de la surface."
    }
  }
},
{
  "id": "U43-163",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "difficulte": "moyen",
  "question": "Une lentille convergente en verre est éclairée en lumière blanche par un point de l'axe. Où converge le bleu par rapport au rouge ?",
  "choix": [
    "Le rouge converge plus près de la lentille",
    "Le bleu converge plus près de la lentille",
    "Les deux couleurs convergent au même point : seule la netteté change",
    "Le bleu converge plus loin, car il est plus énergétique"
  ],
  "bonne": 1,
  "explication": "L'indice du verre est plus grand pour le bleu que pour le rouge. La vergence V = [[n − 1|R]] augmente avec n : la focale du bleu est donc plus courte, et il converge plus près de la lentille.\nC'est l'aberration chromatique longitudinale.",
  "indice": "Le verre dévie davantage le bleu. Une déviation plus forte donne-t-elle une focale plus courte ou plus longue ?",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "L'indice du verre est plus élevé pour le bleu que pour le rouge. Une vergence plus forte donne une focale plus courte."
    }
  }
},
{
  "id": "U43-164",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Une lentille plan-convexe a une face courbe de rayon 50 mm. Son indice vaut 1,530 pour le bleu et 1,510 pour le rouge. Quelle est la différence de vergence entre le bleu et le rouge (en δ, au centième) ?",
  "reponse": {
    "valeur": 0.4,
    "unite": "δ",
    "decimales": 2,
    "signe": false
  },
  "explication": "V = [[n − 1|R]], avec R = 0,050 m\nV_bleu = [[0,530|0,050]] = 10,6 δ      V_rouge = [[0,510|0,050]] = 10,2 δ\nÉcart : 10,6 − 10,2 = 0,40 δ\nLe bleu est plus convergent que le rouge.",
  "indice": "Calcule la vergence pour chaque couleur avec V = [[n − 1|R]], R en mètres, puis fais la différence.",
  "erreurs": [
    {
      "valeur": 10.6,
      "type": "notion",
      "message": "10,6 δ est la vergence du bleu seul. La question demande l'écart entre le bleu et le rouge."
    }
  ]
},
{
  "id": "U43-165",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "difficulte": "difficile",
  "question": "Pourquoi un télescope utilise-t-il un miroir parabolique plutôt que sphérique pour observer une étoile sur l'axe ?",
  "choix": [
    "La parabole focalise en un seul point tous les rayons parallèles à l'axe : elle n'a pas d'aberration sphérique",
    "Elle supprime aussi la coma pour les étoiles hors de l'axe",
    "Parce qu'un miroir sphérique souffre d'aberration chromatique",
    "Elle donne une image droite, ce que le miroir sphérique ne fait pas"
  ],
  "bonne": 0,
  "explication": "Un miroir sphérique focalise les rayons du bord ailleurs que ceux du centre (aberration sphérique). La parabole renvoie tous les rayons parallèles à l'axe vers un même foyer.\nElle n'est parfaite que sur l'axe : hors axe, la coma subsiste. Aucun miroir n'a d'aberration chromatique.",
  "indice": "Que fait un miroir sphérique des rayons parallèles venus du bord ? Et la parabole est-elle parfaite hors de l'axe ?",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "La parabole est parfaite sur l'axe seulement : hors de l'axe, la coma subsiste."
    },
    "2": {
      "type": "notion",
      "message": "Un miroir réfléchit toutes les couleurs de la même façon : il n'a pas d'aberration chromatique, qu'il soit sphérique ou parabolique."
    }
  }
},
{
  "id": "U43-166",
  "epreuve": "U43",
  "theme": "Aberrations",
  "session": "complément",
  "difficulte": "moyen",
  "question": "Un objectif photographie un mur plat. Le centre est net, les bords sont flous, alors que le capteur est plat. Quelle aberration est en cause ?",
  "choix": [
    "La distorsion : les lignes droites deviennent courbes",
    "L'aberration chromatique : les couleurs ne convergent pas au même point",
    "La coma : l'image d'un point hors de l'axe devient une comète",
    "La courbure de champ : l'image nette d'un plan se forme sur une surface courbe"
  ],
  "bonne": 3,
  "explication": "Avec la courbure de champ, l'image nette d'un objet plat se forme sur une surface courbe. Un capteur plat ne peut en recevoir qu'une partie nette : le centre, ou les bords.\nLa distorsion déforme les lignes sans rendre l'image floue.",
  "indice": "Le défaut dépend de la distance au centre de l'image, et touche la netteté, pas la forme des lignes.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "La distorsion déforme les lignes mais ne rend pas l'image floue. Ici, c'est la netteté qui change entre le centre et le bord."
    }
  }
},
{
  "id": "U43-167",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "difficulte": "moyen",
  "question": "En skiascopie à 1 m avec un faisceau divergent (miroir plan), on examine un myope de −3 δ. Quel est le mouvement du reflet, et quel verre le neutralise ?",
  "choix": [
    "Mouvement inverse, verre de −2,00 δ",
    "Mouvement direct, verre de +4,00 δ",
    "Mouvement direct, verre de −2,00 δ",
    "Mouvement inverse, verre de −4,00 δ"
  ],
  "bonne": 0,
  "explication": "La distance de travail de 1 m vaut [[1|d]] = 1 δ. Le remotum du myope est à [[1|3]] m = 33 cm : plus près que l'examinateur, donc mouvement inverse.\nVerre neutralisant = R + [[1|d]] = −3 + 1 = −2,00 δ\nAvec −3 − 1 = −4 δ, on retrancherait la distance de travail au lieu de l'ajouter.",
  "indice": "Où est le remotum de ce myope par rapport à l'examinateur ? Puis R = verre − [[1|d]], donc verre = R + [[1|d]].",
  "erreurs": {
    "3": {
      "type": "signe",
      "message": "Tu as retranché la distance de travail. R = verre − 1/d, donc le verre vaut R + 1/d."
    },
    "1": {
      "type": "notion",
      "message": "Compare la position du remotum à celle de l'examinateur : ce myope voit net plus près que lui. Et un myope se neutralise avec un verre négatif."
    }
  }
},
{
  "id": "U43-168",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "difficulte": "difficile",
  "type": "pose",
  "question": "En skiascopie à 50 cm, le méridien horizontal d'un œil est neutralisé par −0,50 δ et le méridien vertical par −1,50 δ. Trouve l'ordonnance en cylindre négatif, étape par étape.",
  "etapes": [
    {
      "consigne": "Réfraction du méridien horizontal R_H (en δ, au centième)",
      "reponse": {
        "valeur": -2.5,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "R = verre de point neutre − [[1|d]], avec d = 0,5 m.",
      "ligne": "R_H = −0,50 − [[1|0,5]] = −0,50 − 2,00 = −2,50 δ",
      "erreurs": [
        {
          "valeur": 1.5,
          "type": "signe",
          "message": "Tu as ajouté la distance de travail. Elle se retranche : R = verre − 1/d."
        }
      ]
    },
    {
      "consigne": "Réfraction du méridien vertical R_V (en δ, au centième)",
      "reponse": {
        "valeur": -3.5,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Même formule avec le verre du méridien vertical.",
      "ligne": "R_V = −1,50 − [[1|0,5]] = −1,50 − 2,00 = −3,50 δ",
      "erreurs": [
        {
          "valeur": 0.5,
          "type": "signe",
          "message": "Tu as ajouté la distance de travail. Elle se retranche : R = verre − 1/d."
        }
      ]
    },
    {
      "consigne": "Cylindre C (en δ, au centième)",
      "reponse": {
        "valeur": -1,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "Le cylindre est l'écart entre les deux méridiens : C = R_V − R_H.",
      "ligne": "C = R_V − R_H = −3,50 − (−2,50) = −1,00 δ"
    },
    {
      "consigne": "Sphère S en cylindre négatif (en δ, au centième)",
      "reponse": {
        "valeur": -2.5,
        "unite": "δ",
        "decimales": 2,
        "signe": true
      },
      "aide": "En cylindre négatif, la sphère est la réfraction du méridien le moins myope.",
      "ligne": "S = R_H = −2,50 δ\nOrdonnance : −2,50 (−1,00) à 180°"
    }
  ],
  "explication": "Le méridien vertical est le plus myope : le cylindre agit dans le méridien vertical, son axe est donc horizontal (180°). Ordonnance : −2,50 (−1,00) à 180°."
},
{
  "id": "U43-169",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "difficulte": "moyen",
  "question": "En skiascopie, quand le point neutre est atteint, que voit l'examinateur dans la pupille ?",
  "choix": [
    "Toute la pupille est éclairée d'un coup, sans mouvement apparent du reflet",
    "Le reflet se déplace très vite dans le même sens que le skiascope",
    "Le reflet se déplace très vite en sens inverse du skiascope",
    "La pupille reste noire quelle que soit la position du skiascope"
  ],
  "bonne": 0,
  "explication": "Au point neutre, le remotum de l'œil est exactement sur l'examinateur : la lumière revenant de la rétine éclaire toute la pupille en même temps, et le reflet ne se déplace plus. Plus on s'en approche, plus le reflet est vif et rapide, puis il se fige.",
  "indice": "Au point neutre, le sens du mouvement s'inverse : que voit-on juste au moment du changement de sens ?",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Un mouvement très vif annonce que le point neutre est proche, mais il n'est pas encore atteint : il reste un mouvement. Au point neutre, il n'y en a plus."
    }
  }
},
{
  "id": "U43-170",
  "epreuve": "U43",
  "theme": "Skiascopie",
  "session": "complément",
  "difficulte": "moyen",
  "type": "calcul",
  "question": "En skiascopie à 80 cm, le point neutre est obtenu avec un verre de −1,75 δ. Quelle est la réfraction de l'œil (en δ, au centième) ?",
  "reponse": {
    "valeur": -3,
    "unite": "δ",
    "decimales": 2,
    "signe": true
  },
  "explication": "Distance de travail : [[1|d]] = [[1|0,8]] = 1,25 δ\nR = verre − [[1|d]] = −1,75 − 1,25 = −3,00 δ\nL'œil est myope de 3 dioptries.",
  "indice": "R = verre au point neutre − [[1|d]], avec d en mètres.",
  "erreurs": [
    {
      "valeur": -0.5,
      "type": "signe",
      "message": "Tu as ajouté la distance de travail. Elle se retranche : R = verre − 1/d."
    }
  ]
},
{
  "id": "U43-171",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "difficulte": "difficile",
  "question": "Au frontofocomètre, le centre optique d'un verre de +3,00 δ est à 5 mm du point de mesure, du côté temporal. Quel effet prismatique mesure-t-on au point de mesure ?",
  "choix": [
    "1,5 Δ, base nasale",
    "15 Δ, base temporale",
    "0,6 Δ, base temporale",
    "1,5 Δ, base temporale"
  ],
  "bonne": 3,
  "explication": "Prentice : P = c × D = 0,5 × 3,00 = 1,5 Δ.\nUn verre convergent équivaut à deux prismes base contre base : en un point décalé du centre optique, la base du prisme est tournée vers le centre optique, donc temporale ici.",
  "indice": "Un verre convergent est fait de deux prismes accolés : vers où sont leurs bases ? Pense aussi à convertir les mm en cm.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Pense à un verre convergent comme deux prismes accolés par leur base : vers où la base est-elle tournée ?"
    },
    "2": {
      "type": "notion",
      "message": "Tu as divisé 3 par 5. Il faut multiplier le décentrement en cm par la puissance : 0,5 × 3,00."
    },
    "1": {
      "type": "unite",
      "message": "Tu as oublié de convertir les 5 mm en 0,5 cm avant de multiplier."
    }
  }
},
{
  "id": "U43-172",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "difficulte": "difficile",
  "question": "Au frontofocomètre, le centre optique d'un verre de −4,00 δ est à 3 mm du point de mesure, du côté temporal. Quel effet prismatique mesure-t-on au point de mesure ?",
  "choix": [
    "1,2 Δ, base nasale",
    "1,2 Δ, base temporale",
    "12 Δ, base nasale",
    "0,75 Δ, base nasale"
  ],
  "bonne": 0,
  "explication": "Prentice : P = c × ∣D∣ = 0,3 × 4,00 = 1,2 Δ.\nUn verre divergent équivaut à deux prismes sommet contre sommet : la base du prisme est tournée à l'opposé du centre optique, donc nasale ici. C'est l'inverse d'un verre convergent.",
  "indice": "Un verre divergent est fait de deux prismes accolés par leur sommet : où sont leurs bases par rapport au centre optique ?",
  "erreurs": {
    "1": {
      "type": "notion",
      "message": "Pour un verre divergent, la base du prisme est tournée à l'opposé du centre optique, pas vers lui."
    },
    "3": {
      "type": "notion",
      "message": "Tu as divisé 3 par 4. Il faut multiplier le décentrement en cm par la puissance : 0,3 × 4,00."
    }
  }
},
{
  "id": "U43-173",
  "epreuve": "U43",
  "theme": "Frontofocomètre",
  "session": "complément",
  "difficulte": "moyen",
  "type": "calcul",
  "question": "Un verre de +2,50 δ doit présenter un effet prismatique de 1,0 Δ. De combien faut-il le décentrer (en mm) ?",
  "reponse": {
    "valeur": 4,
    "unite": "mm",
    "decimales": 0,
    "signe": false
  },
  "explication": "Règle de Prentice : P = c × D, donc c = [[P|D]] = [[1,0|2,5]] = 0,4 cm = 4 mm",
  "indice": "c (cm) = [[P|D]]. Pense à convertir le résultat en mm.",
  "erreurs": [
    {
      "valeur": 0.4,
      "type": "unite",
      "message": "0,4 est en centimètres. Convertis en millimètres : 0,4 cm = 4 mm."
    }
  ]
},
{
  "id": "U43-174", "epreuve": "U43", "theme": "Œil astigmate", "session": "complément", "difficulte": "facile",
  "question": "Un œil astigmate regarde un point lumineux sans que l'instrument ne corrige quoi que ce soit. Quelle image ce point donne-t-il ?",
  "choix": [
    "Un seul point image, comme pour un œil sphérique",
    "Deux petites lignes perpendiculaires entre elles, situées à deux distances différentes",
    "Deux points images alignés sur l'axe",
    "Un cercle parfait, quelle que soit la distance"
  ],
  "bonne": 1,
  "explication": "Les deux méridiens principaux d'un œil astigmate n'ont pas la même réfraction. Chacun fait converger les rayons à une distance différente, et chaque focale est une petite ligne perpendiculaire au méridien qui la forme.",
  "indice": "Les deux méridiens ont deux réfractions différentes : combien de distances de convergence cela fait-il ?"
},
{
  "id": "U43-175", "epreuve": "U43", "theme": "Œil astigmate", "session": "complément", "difficulte": "moyen",
  "question": "Un astigmate a pour réfraction −2,00 δ dans le méridien 0° et −4,00 δ dans le méridien 90°. Désaccommodé et sans lunettes, il regarde une image finale située à 50 cm devant son œil. Que voit-il ?",
  "choix": [
    "Le méridien 90° est net, le méridien 0° est flou",
    "Le méridien 0° est net, le méridien 90° est flou",
    "Les deux méridiens sont nets",
    "Aucun méridien n'est net"
  ],
  "bonne": 1,
  "explication": "Le remotum d'un méridien de réfraction R est à [[1|R]] devant l'œil.\nMéridien 0° : [[1|2,00]] = 0,50 m = 50 cm, c'est la position de l'image : il est net.\nMéridien 90° : [[1|4,00]] = 0,25 m = 25 cm : l'image est trop loin pour lui, il est flou.",
  "indice": "Pour chaque méridien, calcule la distance du remotum avec [[1|R]] et compare à 50 cm.",
  "erreurs": {
    "0": {
      "type": "notion",
      "message": "Le remotum du méridien à −4,00 δ est à 25 cm, pas à 50 cm. Calcule [[1|R]] pour chacun des deux méridiens."
    }
  }
},
{
  "id": "U43-176", "epreuve": "U43", "theme": "Œil astigmate", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Un œil astigmate a pour réfractions −1,50 δ (méridien 0°) et −4,00 δ (méridien 90°). À quelle distance devant l'œil se trouve le remotum du méridien 90° (en cm) ?",
  "reponse": { "valeur": 25, "unite": "cm", "decimales": 0, "signe": false },
  "explication": "Remotum = [[1|R]] = [[1|4,00]] = 0,25 m = 25 cm devant l'œil.",
  "indice": "Distance du remotum = [[1|R]] en mètres, puis convertis en cm. Attention au bon méridien.",
  "erreurs": [
    { "valeur": 66.7, "type": "notion", "message": "Tu as calculé le remotum de l'autre méridien (−1,50 δ). Relis lequel on te demande." },
    { "valeur": 0.25, "type": "unite", "message": "0,25 est en mètres. Convertis en centimètres : 0,25 m = 25 cm." }
  ]
},
{
  "id": "U43-177", "epreuve": "U43", "theme": "Œil astigmate", "session": "complément", "difficulte": "difficile",
  "question": "Un astigmate observe sans ses lunettes dans un microscope. Pourquoi ne peut-il pas obtenir une image nette dans les deux méridiens en déplaçant seulement l'oculaire ?",
  "choix": [
    "Déplacer l'oculaire change la vergence de l'image finale de la même quantité dans les deux méridiens, mais l'écart entre les deux remotums reste",
    "Déplacer l'oculaire n'a aucun effet sur la position de l'image finale",
    "L'accommodation de l'astigmate est nulle",
    "Le microscope inverse l'image, ce qui empêche la mise au point"
  ],
  "bonne": 0,
  "explication": "L'œil astigmate a deux remotums différents. Déplacer l'oculaire décale l'image finale d'un seul bloc : on peut rendre un méridien net, mais pas les deux, puisque l'écart entre leurs réfractions ne change pas. Il faut donc garder les lunettes ou les lentilles.",
  "indice": "Un déplacement de l'oculaire agit sur une seule position d'image finale. Les remotums de l'œil sont-ils à la même distance ?"
},
{
  "id": "U43-178", "epreuve": "U43", "theme": "Œil astigmate", "session": "complément", "difficulte": "moyen",
  "type": "pose",
  "question": "Un œil astigmate a pour réfractions −2,50 δ (méridien 0°) et −4,00 δ (méridien 90°). Trouve la position de ses deux remotums, puis l'écart entre eux, étape par étape.",
  "etapes": [
    {
      "consigne": "Position du remotum du méridien 0°, HR (en mm)",
      "reponse": { "valeur": -400, "unite": "mm", "decimales": 0, "signe": true },
      "aide": "HR = [[1|R]] avec R en δ, puis en mm. Le remotum d'un myope est devant l'œil : le signe est négatif.",
      "ligne": "HR = [[1|−2,50]] = −0,40 m = −400 mm"
    },
    {
      "consigne": "Position du remotum du méridien 90°, HR (en mm)",
      "reponse": { "valeur": -250, "unite": "mm", "decimales": 0, "signe": true },
      "aide": "Même calcul avec R = −4,00 δ.",
      "ligne": "HR = [[1|−4,00]] = −0,25 m = −250 mm"
    },
    {
      "consigne": "Écart entre les deux remotums (en mm)",
      "reponse": { "valeur": 150, "unite": "mm", "decimales": 0, "signe": false },
      "aide": "Soustrais les deux positions et garde la valeur positive.",
      "ligne": "400 − 250 = 150 mm"
    }
  ],
  "explication": "Les deux remotums sont à 400 mm et 250 mm devant l'œil, soit 150 mm d'écart : l'image finale ne peut pas être nette dans les deux méridiens à la fois."
},
{
  "id": "U43-179", "epreuve": "U43", "theme": "Vergences et focales", "session": "complément", "difficulte": "facile",
  "type": "calcul",
  "question": "Une lentille mince a une distance focale image f' = 40 mm. Quelle est sa vergence (en δ) ?",
  "reponse": { "valeur": 25, "unite": "δ", "decimales": 0, "signe": true },
  "explication": "D = [[1|f']] avec f' en mètres.\nD = [[1|0,040]] = +25 δ",
  "indice": "Convertis d'abord 40 mm en mètres, puis prends l'inverse.",
  "erreurs": [
    { "valeur": 0.025, "type": "unite", "message": "Tu as pris f' en millimètres. Il faut la convertir en mètres avant de prendre l'inverse." }
  ]
},
{
  "id": "U43-180", "epreuve": "U43", "theme": "Vergences et focales", "session": "complément", "difficulte": "moyen",
  "question": "Deux lentilles minces accolées ont pour vergences +6,00 δ et −2,50 δ. Quelle est la vergence du doublet ?",
  "choix": [
    "+8,50 δ",
    "+3,50 δ",
    "−3,50 δ",
    "+1,40 δ"
  ],
  "bonne": 1,
  "explication": "Pour des lentilles minces accolées, les vergences s'ajoutent algébriquement.\nD = 6,00 + (−2,50) = +3,50 δ",
  "indice": "Les vergences de lentilles accolées s'ajoutent, avec leur signe.",
  "erreurs": {
    "0": { "type": "signe", "message": "Tu as ajouté les deux valeurs sans tenir compte du signe. Une lentille divergente retranche sa vergence." },
    "2": { "type": "signe", "message": "Le doublet est dominé par la lentille convergente, la plus forte des deux. Revois le signe du résultat." }
  }
},
{
  "id": "U43-181", "epreuve": "U43", "theme": "Vergences et focales", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Une lentille mince a une vergence de −8,00 δ. Quelle est sa distance focale image f' (en mm) ?",
  "reponse": { "valeur": -125, "unite": "mm", "decimales": 0, "signe": true },
  "explication": "f' = [[1|D]] = [[1|−8,00]] = −0,125 m = −125 mm\nLa lentille est divergente : la focale image est négative.",
  "indice": "f' = [[1|D]] en mètres, puis convertis en mm. Le signe de D donne celui de f'.",
  "erreurs": [
    { "valeur": 125, "type": "signe", "message": "Une lentille de vergence négative est divergente : sa focale image est négative." }
  ]
},
{
  "id": "U43-182", "epreuve": "U43", "theme": "Vergences et focales", "session": "complément", "difficulte": "facile",
  "question": "On utilise comme loupe une lentille de focale image 100 mm. À quelle distance de la lentille faut-il placer l'objet pour que l'image soit à l'infini ?",
  "choix": [
    "50 mm",
    "100 mm",
    "200 mm",
    "10 mm"
  ],
  "bonne": 1,
  "explication": "Pour avoir une image à l'infini, l'objet doit être au foyer objet de la lentille, à une distance égale à sa focale : 100 mm.",
  "indice": "Un objet au foyer objet a son image à l'infini. À quelle distance est ce foyer ?",
  "erreurs": {
    "0": { "type": "notion", "message": "50 mm place l'objet entre le foyer et la lentille : l'image est virtuelle mais pas à l'infini." }
  }
},
{
  "id": "U43-183", "epreuve": "U43", "theme": "Mécanismes de réglage", "session": "complément", "difficulte": "facile",
  "type": "calcul",
  "question": "Un système vis-écrou a un pas de 0,5 mm. De combien de millimètres l'écrou avance-t-il après 6 tours de vis ?",
  "reponse": { "valeur": 3, "unite": "mm", "decimales": 0, "signe": false },
  "explication": "À chaque tour, l'écrou avance d'un pas : 6 × 0,5 = 3 mm.",
  "indice": "Un tour de vis déplace l'écrou d'une longueur égale au pas.",
  "erreurs": [
    { "valeur": 12, "type": "notion", "message": "Tu as divisé 6 par 0,5. Il faut multiplier le nombre de tours par le pas." }
  ]
},
{
  "id": "U43-184", "epreuve": "U43", "theme": "Mécanismes de réglage", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Une bague de mise au point a un pas de 0,6 mm. Combien de tours faut-il pour déplacer l'oculaire de 2,7 mm (au dixième) ?",
  "reponse": { "valeur": 4.5, "unite": "tours", "decimales": 1, "signe": false },
  "explication": "Nombre de tours = [[déplacement|pas]] = [[2,7|0,6]] = 4,5 tours.",
  "indice": "Nombre de tours = déplacement divisé par le pas.",
  "erreurs": [
    { "valeur": 1.6, "type": "notion", "message": "Tu as multiplié le déplacement par le pas. Il faut diviser le déplacement par le pas." }
  ]
},
{
  "id": "U43-185", "epreuve": "U43", "theme": "Mécanismes de réglage", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Un pignon de 20 dents engrène sur une crémaillère dont les dents sont espacées de 1,5 mm. De combien de millimètres la crémaillère avance-t-elle quand le pignon fait un demi-tour ?",
  "reponse": { "valeur": 15, "unite": "mm", "decimales": 0, "signe": false },
  "explication": "Un tour de pignon fait avancer la crémaillère de 20 × 1,5 = 30 mm.\nUn demi-tour : [[30|2]] = 15 mm.",
  "indice": "Calcule d'abord le déplacement pour un tour complet, puis prends la moitié.",
  "erreurs": [
    { "valeur": 30, "type": "notion", "message": "30 mm correspond à un tour complet. L'énoncé parle d'un demi-tour." }
  ]
},
{
  "id": "U43-186", "epreuve": "U43", "theme": "Mécanismes de réglage", "session": "complément", "difficulte": "facile",
  "question": "Pourquoi utilise-t-on une vis à pas fin pour une mise au point précise ?",
  "choix": [
    "Un tour de vis déplace très peu l'élément, donc le réglage est précis",
    "Un tour de vis déplace beaucoup l'élément, donc le réglage est rapide",
    "Elle supprime tout frottement",
    "Elle fait tourner l'élément optique sur lui-même"
  ],
  "bonne": 0,
  "explication": "Le déplacement par tour est égal au pas. Avec un pas fin, un tour déplace peu l'élément : on règle plus finement, au prix de plus de tours pour une même course.",
  "indice": "Que vaut le déplacement de l'écrou pour un tour de vis, quand le pas est petit ?"
},
{
  "id": "U43-187", "epreuve": "U43", "theme": "Liaisons mécaniques", "session": "complément", "difficulte": "moyen",
  "question": "Une liaison rotule (sphérique) relie deux pièces. Quels mouvements relatifs autorise-t-elle ?",
  "choix": [
    "Trois rotations, aucune translation",
    "Une seule rotation",
    "Une rotation et une translation",
    "Trois translations, aucune rotation"
  ],
  "bonne": 0,
  "explication": "Une rotule laisse les deux pièces tourner l'une par rapport à l'autre autour de trois axes, sans aucun glissement : trois rotations, zéro translation.",
  "indice": "Pense à une sphère dans une cavité : elle tourne dans toutes les directions, mais ne glisse pas."
},
{
  "id": "U43-188", "epreuve": "U43", "theme": "Liaisons mécaniques", "session": "complément", "difficulte": "facile",
  "question": "Deux pièces sont reliées par une liaison encastrement. Combien de mouvements relatifs sont possibles ?",
  "choix": [
    "Aucun",
    "Une rotation",
    "Une translation",
    "Une rotation et une translation"
  ],
  "bonne": 0,
  "explication": "Un encastrement supprime tous les mouvements relatifs : les deux pièces forment un seul bloc.",
  "indice": "Un encastrement fige complètement une pièce par rapport à l'autre."
},
{
  "id": "U43-189", "epreuve": "U43", "theme": "Liaisons mécaniques", "session": "complément", "difficulte": "difficile",
  "question": "Une pièce a une face plane qui repose sur la face plane d'une autre pièce (appui plan). Quels mouvements relatifs sont possibles ?",
  "choix": [
    "Deux translations dans le plan de contact et une rotation autour de la normale à ce plan",
    "Une seule translation perpendiculaire au plan",
    "Trois rotations, aucune translation",
    "Une translation et deux rotations"
  ],
  "bonne": 0,
  "explication": "La pièce peut glisser dans toutes les directions du plan de contact (deux translations) et tourner sur elle-même autour de l'axe perpendiculaire à ce plan (une rotation). Elle ne peut ni décoller ni basculer.",
  "indice": "Pose un livre à plat sur une table : comment peut-il bouger sans quitter la table ni basculer ?"
},
{
  "id": "U43-190", "epreuve": "U43", "theme": "Étude des champs", "session": "complément", "difficulte": "facile",
  "question": "Dans l'espace d'étude, quel diaphragme détermine la taille du champ de l'instrument ?",
  "choix": [
    "La pupille",
    "La lucarne",
    "L'objet",
    "Le diaphragme le plus grand"
  ],
  "bonne": 1,
  "explication": "La pupille limite le faisceau issu d'un point de l'axe, c'est-à-dire la quantité de lumière. La lucarne limite l'étendue de l'objet visible : c'est elle qui fixe le champ.",
  "indice": "Un diaphragme limite la lumière, l'autre limite l'étendue de ce qu'on voit. Lequel est lequel ?",
  "erreurs": {
    "0": { "type": "notion", "message": "La pupille règle la quantité de lumière qui passe, pas l'étendue du champ." }
  }
},
{
  "id": "U43-191", "epreuve": "U43", "theme": "Étude des champs", "session": "complément", "difficulte": "difficile",
  "question": "On agrandit la pupille d'un instrument sans toucher à la lucarne. Que deviennent les champs ?",
  "choix": [
    "Le champ de pleine lumière diminue et le champ total augmente",
    "Les deux champs augmentent",
    "Les deux champs diminuent",
    "Rien ne change"
  ],
  "bonne": 0,
  "explication": "Avec une pupille plus grande, il faut que le faisceau entier passe la lucarne pour que le point soit en pleine lumière : ce champ diminue. À l'inverse, il suffit qu'un seul rayon passe pour qu'un point soit vu : le champ total augmente. Le champ de contour s'élargit donc, puisque le champ total grandit alors que celui de pleine lumière diminue.",
  "indice": "Pour être en pleine lumière, tout le faisceau doit passer. Plus la pupille est grande, plus c'est difficile."
},
{
  "id": "U43-192", "epreuve": "U43", "theme": "Étude des champs", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Dans l'espace d'étude, une lucarne de 24 mm de diamètre est à 80 mm du centre de la pupille. Quel est le demi-champ angulaire (en °, au dixième) ?",
  "reponse": { "valeur": 8.5, "unite": "°", "decimales": 1, "signe": false, "tolerance": 0.1 },
  "explication": "Le demi-champ θ vérifie tan θ = [[12|80]] = 0,15 (rayon de la lucarne sur la distance).\nθ = arctan(0,15) ≈ 8,5°",
  "indice": "Rayon de la lucarne divisé par la distance donne la tangente du demi-champ.",
  "erreurs": [
    { "valeur": 0.15, "type": "notion", "message": "0,15 est la tangente du demi-champ. Il reste à retrouver l'angle avec la touche arctan de la calculatrice." }
  ]
},
{
  "id": "U43-193", "epreuve": "U43", "theme": "Œil et instrument", "session": "complément", "difficulte": "moyen",
  "question": "Un hypermétrope de +3,00 δ, sans lunettes, regarde dans un instrument réglé pour un emmétrope (image finale à l'infini). Que doit-il faire pour voir net ?",
  "choix": [
    "Accommoder de 3,00 δ",
    "Ne pas accommoder du tout",
    "Accommoder de 0,33 δ",
    "Rien : un hypermétrope voit toujours net à l'infini"
  ],
  "bonne": 0,
  "explication": "Son remotum est derrière l'œil : désaccommodé, il ne voit pas net une image à l'infini. Il compense en accommodant de 3,00 δ, s'il en est capable.",
  "indice": "Un hypermétrope doit déjà fournir de la puissance en plus pour voir à l'infini. Combien ?",
  "erreurs": {
    "2": { "type": "unite", "message": "0,33 est une distance en mètres (1 ÷ 3), pas une accommodation en dioptries." }
  }
},
{
  "id": "U43-194", "epreuve": "U43", "theme": "Œil et instrument", "session": "complément", "difficulte": "difficile",
  "type": "calcul",
  "question": "Oculaire de focale 20 mm, l'œil restant à son foyer image. On le règle pour un hypermétrope de +2,00 δ, désaccommodé. De combien déplace-t-on l'oculaire par rapport au réglage emmétrope (en mm, au dixième) ?",
  "reponse": { "valeur": 0.8, "unite": "mm", "decimales": 1, "signe": false },
  "explication": "Déplacement = f'² × R = 0,020² × 2,00 = 0,0008 m = 0,8 mm.\nPour un hypermétrope, on éloigne l'oculaire de l'image intermédiaire (l'inverse du myope).",
  "indice": "Déplacement = f'² × R avec f' en mètres, puis convertis en mm.",
  "erreurs": [
    { "valeur": 800, "type": "unite", "message": "Tu as gardé f' en millimètres : f'² est en mm². Convertis f' en mètres avant de calculer." }
  ]
},
{
  "id": "U43-195", "epreuve": "U43", "theme": "Œil et instrument", "session": "complément", "difficulte": "moyen",
  "type": "calcul",
  "question": "Un emmétrope observe dans un instrument dont l'image finale est à 40 cm devant son œil. Quelle accommodation lui faut-il (en δ, au centième) ?",
  "reponse": { "valeur": 2.5, "unite": "δ", "decimales": 2, "signe": false },
  "explication": "Accommodation = [[1|d]] = [[1|0,40]] = 2,50 δ, avec d en mètres. Un emmétrope désaccommodé voit net à l'infini : tout rapprochement demande de l'accommodation.",
  "indice": "L'accommodation est l'inverse de la distance de l'image, en mètres.",
  "erreurs": [
    { "valeur": 0.4, "type": "notion", "message": "0,4 est la distance en mètres. L'accommodation est son inverse : [[1|d]]." }
  ]
}
);
