// ==============================================================
//  QUESTIONS · Économie et gestion de l'entreprise (U3)
//  Ce fichier ne contient QUE les questions de cette épreuve.
//
//  Chaque question est un bloc { ... } avec :
//    epreuve     : "U3" (toujours le même dans ce fichier)
//    theme       : le thème dans l'épreuve (sert au filtre)
//    session     : l'année où ce type de question est tombé, ex. "2024",
//                  ou "complément" si ce n'est pas tombé tel quel
//    question    : l'énoncé
//    choix       : 4 réponses proposées
//    bonne       : le NUMÉRO de la bonne réponse (0 = la 1re, 1 = la 2e…)
//    explication : ce qui s'affiche après la réponse
//
//  Règles : en U3 la calculatrice est AUTORISÉE à l'examen, mais on garde
//  des chiffres ronds pour que le QCM se fasse de tête.
//  Énoncés et chiffres à nous : ne jamais recopier un sujet ou un corrigé.
//  Analyse des sujets : notes/analyse-U3.md
// ==============================================================

QUESTIONS.push(

  // ---------- Prix et marges (tombé 4 années sur 5) ----------
  {
    id: "U3-001", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2019",
    question: "Une monture est achetée 60 € HT et vendue 180 € TTC (TVA 20 %). Quel est le taux de marque ?",
    choix: ["60 %", "66,7 %", "50 %", "150 %"],
    bonne: 0,
    erreurs: { 1: "ht-ttc", 3: "marque-marge" },
    explication: "On travaille en HT.\nPV HT = [[180|1,2]] = 150 €\nMarge brute = 150 − 60 = 90 €\nTaux de marque = [[marge|PV HT]] = [[90|150]] = 0,60, soit 60 %.\nLes autres réponses : 66,7 % = [[120|180]] (TVA oubliée), 150 % = le taux de marge.",
    indice: "Les taux se calculent toujours HT. Commence par enlever la TVA du prix de vente, puis divise la marge par le bon prix.",
    schema: "img/schemas/U3/prix-monture-60-180.svg",
    schemaTexte: "Barre du prix de 180 € TTC découpée en achat 60 €, marge 90 € et TVA 30 € : taux de marque 90/150 = 60 %, taux de marge 90/60 = 150 %, coefficient TTC 3."
  },
  {
    id: "U3-002", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "complément",
    question: "Même monture : achat 60 € HT, vente 150 € HT. Quel est le taux de MARGE ?",
    choix: ["60 %", "40 %", "150 %", "250 %"],
    bonne: 2,
    erreurs: { 0: "marque-marge" },
    explication: "Taux de marge = [[marge|coût d'achat HT]] = [[90|60]] = 1,50, soit 150 %.\nPiège classique : le taux de MARQUE divise par le prix de vente, [[90|150]] = 60 %. Le taux de MARGE divise par le coût d'achat.",
    indice: "Taux de MARGE ou taux de MARQUE ? L'un divise la marge par le coût d'achat, l'autre par le prix de vente. Lequel est demandé ici ?"
  },
  {
    id: "U3-003", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un opticien applique un coefficient multiplicateur TTC de 3 sur un verre acheté 40 € HT. Prix de vente TTC et taux de marque ?",
    choix: ["120 € TTC, taux de marque 60 %", "120 € TTC, taux de marque 66,7 %", "100 € TTC, taux de marque 60 %", "144 € TTC, taux de marque 72 %"],
    bonne: 0,
    erreurs: { 1: "ht-ttc" },
    explication: "Coefficient TTC = [[PV TTC|achat HT]], donc PV TTC = 40 × 3 = 120 €\nPV HT = [[120|1,2]] = 100 €\nMarge = 100 − 40 = 60 €\nTaux de marque = [[60|100]] = 60 %.",
    indice: "Le coefficient TTC transforme un achat HT en prix TTC. Trouve le prix TTC, repasse en HT, puis calcule la marge."
  },
  {
    id: "U3-004", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2017",
    question: "Un magasin vise un taux de marque de 60 %. Quel coefficient multiplicateur TTC doit-il appliquer sur ses achats HT ?",
    choix: ["1,6", "2,5", "3", "3,6"],
    bonne: 2,
    erreurs: { 0: "marque-marge", 1: "ht-ttc" },
    explication: "Coefficient HT = [[1|1 − taux de marque]] = [[1|1 − 0,6]] = [[1|0,4]] = 2,5\nCoefficient TTC = 2,5 × 1,2 = 3\nVérification : achat 100 €, PV HT 250 €, marge 150 €, taux de marque [[150|250]] = 60 %.",
    indice: "Prends un achat facile, par exemple 100 € HT : quel PV HT donne 60 % de marque ? Puis ajoute la TVA."
  },
  {
    id: "U3-005", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un client paie un équipement 240 € TTC. Quel est le montant de TVA collectée par le magasin (TVA 20 %) ?",
    choix: ["48 €", "40 €", "20 €", "200 €"],
    bonne: 1,
    erreurs: { 0: "ht-ttc" },
    explication: "Le prix TTC contient déjà la TVA.\nPrix HT = [[240|1,2]] = 200 €\nTVA = 240 − 200 = 40 € (soit [[1|6]] du TTC).\nLe piège : 240 × 20 % = 48 € revient à appliquer la TVA deux fois.",
    indice: "Le prix TTC contient déjà la TVA. Retrouve d'abord le prix HT, la TVA est la différence."
  },

  // ---------- Marché et zone de chalandise (4 années sur 5) ----------
  {
    id: "U3-006", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Zone de chalandise : 12 000 habitants, 70 % de porteurs de lunettes, panier moyen 360 € TTC, renouvellement tous les 3 ans. Quel est le marché potentiel annuel ?",
    choix: ["3 024 000 € TTC", "1 008 000 € TTC", "336 000 € TTC", "2 520 000 € TTC"],
    bonne: 1,
    explication: "Porteurs = 12 000 × 0,70 = 8 400\nDépense sur 3 ans = 8 400 × 360 = 3 024 000 €\nChaque client ne renouvelle que tous les 3 ans, donc par an :\n[[3 024 000|3]] = 1 008 000 € TTC.",
    indice: "Nombre de porteurs × panier moyen donne la dépense d'un cycle complet. N'oublie pas que ce cycle dure 3 ans."
  },
  {
    id: "U3-007", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Marché potentiel : 1 000 000 € TTC. Indice de disparité de la consommation (IDC) : 90. Évasion commerciale : 10 %. Quel est le marché net de l'évasion commerciale ?",
    choix: ["800 000 €", "900 000 €", "810 000 €", "990 000 €"],
    bonne: 2,
    explication: "IDC 90 = les habitants dépensent 10 % de moins que la moyenne nationale : 1 000 000 × 0,90 = 900 000 €. L'évasion = 10 % de ces dépenses partent ailleurs (internet, grande ville) : 900 000 × 0,90 = 810 000 €. On multiplie, on ne soustrait pas 20 % d'un coup.",
    indice: "Chaque correction s'applique au résultat de la précédente : on enchaîne des multiplications, on n'additionne pas les pourcentages.",
    schema: "img/schemas/U3/marche-idc-evasion.svg",
    schemaTexte: "Entonnoir du marché : 1 000 000 € de marché potentiel, multiplié par 0,90 pour l'IDC (900 000 €), puis par 0,90 pour l'évasion commerciale : 810 000 €."
  },
  {
    id: "U3-008", difficulte: "facile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Le marché d'une zone, net de l'évasion commerciale, est de 480 000 € TTC. Le magasin espère en capter 25 %. Quel chiffre d'affaires HT peut-il prévoir ?",
    choix: ["120 000 €", "100 000 €", "96 000 €", "144 000 €"],
    bonne: 1,
    erreurs: { 0: "ht-ttc", 3: "ht-ttc" },
    explication: "Part de marché : 480 000 × 0,25 = 120 000 € TTC\nLe chiffre d'affaires d'une entreprise se donne HT :\n[[120 000|1,2]] = 100 000 € HT.",
    indice: "Deux étapes : la part de marché, puis la conversion. Le marché est donné TTC, le chiffre d'affaires d'une entreprise se donne HT."
  },
  {
    id: "U3-009", difficulte: "facile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Une opticienne prépare un service d'optique à domicile. Lequel de ces éléments est une MENACE ?",
    choix: ["La population de la zone vieillit", "Elle est diplômée et très connue dans le village", "Un concurrent proche propose déjà ce service", "Son magasin a un stock trop important"],
    bonne: 2,
    explication: "Opportunités et menaces viennent de l'EXTÉRIEUR (marché, concurrence, lois). Le concurrent est une menace, le vieillissement une opportunité. Les deux autres sont INTERNES : la notoriété est une force, le stock trop lourd une faiblesse.",
    indice: "Opportunités et menaces viennent de l'extérieur du magasin, forces et faiblesses de l'intérieur. Cherche ce qui est extérieur ET défavorable."
  },

  // ---------- Mercatique et communication (4 années sur 5) ----------
  {
    id: "U3-010", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "2018",
    question: "Laquelle de ces actions est une communication HORS MÉDIA ?",
    choix: ["Une annonce dans la presse régionale", "Un spot de 30 secondes sur une radio locale", "Une affiche 4 × 3 sur le rond-point (affichage)", "Un courrier personnalisé aux clients"],
    bonne: 3,
    explication: "Les 6 grands médias : presse, radio, télévision, affichage, cinéma, internet. Le hors média regroupe le reste : publipostage, PLV en magasin, événement, salon, parrainage, carte de fidélité… En optique, le publipostage au moment du renouvellement est un grand classique.",
    indice: "Liste les 6 grands médias (presse, radio, télévision, affichage, cinéma, internet). Tout le reste est hors média."
  },
  {
    id: "U3-011", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "2019",
    question: "Quelles sont les 4 variables du plan de marchéage (mix marketing, les « 4P ») ?",
    choix: ["Produit, prix, distribution, communication", "Produit, personnel, prix, promotion", "Prix, clientèle, concurrence, communication", "Produit, prix, publicité, profit"],
    bonne: 0,
    explication: "Product, Price, Place, Promotion = produit, prix, distribution (le lieu de vente), communication. Elles doivent être cohérentes entre elles : un magasin haut de gamme a des montures de créateurs, des prix élevés, un emplacement soigné et une communication sélective.",
    indice: "Le plan de marchéage porte sur l'offre du magasin, pas sur les clients ni sur les résultats. En anglais, les 4 mots commencent par P."
  },
  {
    id: "U3-012", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "2023",
    question: "Quelle caractéristique est propre au commerce associé (coopérative d'opticiens) ?",
    choix: ["Le franchiseur transmet un savoir-faire contre une redevance", "Chaque opticien adhérent est associé de la coopérative et vote aux décisions", "Tous les magasins appartiennent à la même société", "Le magasin n'a aucun lien avec un réseau"],
    bonne: 1,
    explication: "En coopérative, les opticiens restent propriétaires de leur magasin et sont associés de la structure commune (achats groupés, enseigne, services) : en principe 1 personne = 1 voix. La redevance contre un savoir-faire, c'est la franchise. Tous les magasins à la même société, c'est le commerce intégré (succursales). Sans réseau, c'est l'indépendant isolé.",
    indice: "Dans une coopérative, qui est propriétaire de la structure commune ? Pense au mot « associé »."
  },
  {
    id: "U3-013", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "2024",
    question: "Un opticien indépendant veut rejoindre une franchise. Que doit lui remettre le franchiseur au moins 20 jours avant la signature du contrat ?",
    choix: ["Un document d'information précontractuelle", "Le bilan des 10 dernières années de tous les franchisés", "Un contrat de travail signé par le franchiseur", "Une attestation de dépôt de la marque à l'INPI"],
    bonne: 0,
    explication: "La loi Doubin (article L330-3 du Code de commerce) impose un DIP au moins 20 jours avant : présentation du réseau, état du marché, comptes du franchiseur, durée, conditions de renouvellement… Le franchisé reste un commerçant indépendant, propriétaire de son fonds.",
    indice: "La loi Doubin protège le futur franchisé : avant de signer, il doit pouvoir étudier le réseau dans lequel il s'engage."
  },

  // ---------- Seuil de rentabilité (3 années sur 5) ----------
  {
    id: "U3-014", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    question: "Chiffre d'affaires HT : 300 000 €. Charges variables : 120 000 €. Charges fixes : 135 000 €. Quel est le seuil de rentabilité ?",
    choix: ["255 000 €", "225 000 €", "180 000 €", "337 500 €"],
    bonne: 1,
    explication: "Marge sur coût variable = 300 000 − 120 000 = 180 000 €\nTaux de MCV = [[180 000|300 000]] = 0,60, soit 60 %\nSeuil de rentabilité = [[charges fixes|taux de MCV]] = [[135 000|0,60]] = 225 000 €\nC'est le CA à partir duquel le magasin ne perd plus d'argent.",
    indice: "Calcule d'abord la marge sur coût variable et son taux. Le seuil de rentabilité, c'est les charges fixes divisées par ce taux.",
    schema: "img/schemas/U3/seuil-rentabilite-300k.svg",
    schemaTexte: "Graphique : droite du chiffre d'affaires et droite des coûts totaux (135 000 € de charges fixes plus 40 % du CA). Elles se croisent à 225 000 €, le seuil de rentabilité. On peut faire glisser les charges fixes."
  },
  {
    id: "U3-015", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    question: "Même magasin : SR = 225 000 €, CA annuel = 300 000 €, activité régulière toute l'année. À quelle date le point mort est-il atteint ?",
    choix: ["Fin août", "Fin septembre", "Fin octobre", "Fin juin"],
    bonne: 1,
    explication: "Point mort = [[SR|CA]] × 12 mois = [[225 000|300 000]] × 12 = 0,75 × 12 = 9 mois\nSoit fin septembre.\nSi le magasin ferme un mois (par exemple en août), on compte sur les jours ou les mois réellement travaillés.",
    indice: "Le point mort est le moment de l'année où le CA atteint le SR. Quelle fraction du CA annuel représente le SR ?",
    schema: "img/schemas/U3/seuil-rentabilite-300k.svg",
    schemaTexte: "Graphique du seuil de rentabilité : le SR de 225 000 € représente les trois quarts du CA annuel de 300 000 €, soit 9 mois d'activité régulière."
  },
  {
    id: "U3-016", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2018",
    question: "Une ligne de montures se vend 125 € HT pièce, pour un coût variable de 50 € par monture. Ses charges fixes sont de 18 000 € par an. Combien faut-il en vendre PAR MOIS pour atteindre le seuil de rentabilité ?",
    choix: ["12 montures", "20 montures", "144 montures", "240 montures"],
    bonne: 1,
    erreurs: { 3: "mois" },
    explication: "Marge sur coût variable par monture = 125 − 50 = 75 €\nSR en volume = [[18 000|75]] = 240 montures par an\nPar mois : [[240|12]] = 20 montures.\nLe chiffre 240 est le seuil annuel : attention à l'unité de temps demandée.",
    indice: "Combien chaque monture vendue rapporte-t-elle pour couvrir les charges fixes ? Attention à l'unité de temps demandée."
  },
  {
    id: "U3-017", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2023",
    question: "Un nouveau rayon prévoit 40 000 € HT de CA, un taux de marge sur coût variable de 50 % et 24 000 € de charges fixes. Que conclure ?",
    choix: ["Le SR ne se calcule pas car le résultat est négatif", "SR = 48 000 € : il manque 8 000 € de CA pour ne plus perdre d'argent", "SR = 12 000 € : le rayon est très rentable", "SR = 20 000 € : le rayon est rentable"],
    bonne: 1,
    explication: "MCV = 40 000 × 0,5 = 20 000 €\nRésultat = 20 000 − 24 000 = −4 000 € : une perte.\nSR = [[24 000|0,5]] = 48 000 €\nIl est AU-DESSUS du CA prévu : il manque 8 000 € de ventes.\nPour conclure, on propose des solutions : baisser les charges fixes, augmenter les ventes ou le taux de marge.",
    indice: "Calcule le résultat (MCV − charges fixes), puis le SR avec la formule habituelle. La formule marche même quand on perd de l'argent."
  },

  // ---------- Analyse financière (tombé chaque année sous une forme) ----------
  {
    id: "U3-018", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Bilan fonctionnel : ressources stables 180 000 €, emplois stables 150 000 €, stocks 40 000 €, créances clients 5 000 €, dettes fournisseurs, fiscales et sociales 25 000 €. FRNG et BFR ?",
    choix: ["FRNG 30 000 € ; BFR 20 000 €", "FRNG 30 000 € ; BFR 70 000 €", "FRNG −30 000 € ; BFR 20 000 €", "FRNG 20 000 € ; BFR 30 000 €"],
    bonne: 0,
    explication: "FRNG = ressources stables − emplois stables = 180 000 − 150 000 = 30 000 €. BFR = (stocks + créances) − dettes d'exploitation = 45 000 − 25 000 = 20 000 €. Le FRNG est le « coussin » de ressources durables ; le BFR, l'argent bloqué par le cycle stock → vente → encaissement.",
    indice: "Le FRNG se lit en haut du bilan (ressources et emplois stables), le BFR au milieu : ce que l'exploitation bloque moins ce qu'elle finance."
  },
  {
    id: "U3-019", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Avec un FRNG de 30 000 € et un BFR de 20 000 €, que vaut la trésorerie nette et que signifie-t-elle ?",
    choix: ["−10 000 € : le magasin vit à découvert", "50 000 € : le magasin a trop de stock", "10 000 € : le FRNG finance tout le BFR, il reste de la trésorerie", "10 000 € : le magasin doit emprunter à court terme"],
    bonne: 2,
    explication: "TN = FRNG − BFR = 30 000 − 20 000 = 10 000 €. On le vérifie aussi par le bas du bilan : trésorerie active (banque, caisse) − trésorerie passive (découverts). TN positive = équilibre financier. Si le FRNG était plus petit que le BFR, la TN serait négative : le magasin financerait son exploitation par le découvert.",
    indice: "Le FRNG finance d'abord le BFR. Ce qui reste, positif ou négatif, c'est la trésorerie."
  },
  {
    id: "U3-020", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2017",
    question: "Dettes fournisseurs : 24 000 € TTC. Achats de l'année : 146 000 € TTC. Quel est le délai moyen de crédit fournisseurs (année de 365 jours) ?",
    choix: ["60 jours", "6 jours", "36 jours", "90 jours"],
    bonne: 0,
    explication: "Délai fournisseurs = [[dettes fournisseurs|achats TTC]] × 365 = [[24 000|146 000]] × 365 = 60 jours\nMême logique pour les clients : [[créances|CA TTC]] × 365.\nEn optique, le délai clients est court (paiement au comptant, tiers payant), ce qui aide la trésorerie.",
    indice: "Délai = [[dette|flux annuel]] × nombre de jours. Garde tout en TTC et utilise l'année de 365 jours demandée."
  },
  {
    id: "U3-021", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2017",
    question: "Ventes de marchandises : 400 000 € HT. Achats : 150 000 €. Stock initial : 50 000 €. Stock final : 40 000 €. Quelle est la marge commerciale ?",
    choix: ["250 000 €", "260 000 €", "240 000 €", "210 000 €"],
    bonne: 2,
    explication: "Coût d'achat des marchandises vendues = achats + stock initial − stock final = 150 000 + 50 000 − 40 000 = 160 000 €. Marge commerciale = 400 000 − 160 000 = 240 000 €. Le stock a baissé de 10 000 € : on a vendu des montures achetées l'année d'avant, ce qui réduit la marge par rapport au simple « ventes − achats ».",
    indice: "Ce qu'on a vendu ne sort pas seulement des achats de l'année : ajoute le stock du début, retire celui de la fin."
  },
  {
    id: "U3-022", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Le magasin embauche un opticien. Quel est le PREMIER solde intermédiaire de gestion touché par son salaire ?",
    choix: ["La marge commerciale", "La valeur ajoutée (VA)", "L'excédent brut d'exploitation (EBE)", "Le résultat courant avant impôts (RCAI)"],
    bonne: 2,
    explication: "Ordre des SIG : marge commerciale → valeur ajoutée (− charges externes) → EBE (− impôts et taxes − charges de personnel) → résultat d'exploitation → RCAI → résultat net. Le salaire et les cotisations patronales sont des charges de personnel : ils baissent l'EBE, puis tous les soldes qui suivent.",
    indice: "Récite l'ordre des SIG et ce que l'on retire à chaque étape. Où apparaissent les charges de personnel ?",
    schema: "img/schemas/U3/cascade-sig.svg",
    schemaTexte: "Cascade des SIG : marge commerciale, valeur ajoutée, EBE, résultat d'exploitation, RCAI, résultat net. Les charges de personnel sont retirées au niveau de l'EBE, mis en évidence."
  },
  {
    id: "U3-023", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Dettes financières : 60 000 €. Capitaux propres : 120 000 €. Que dire du ratio d'endettement ?",
    choix: ["0,5 : le magasin peut encore emprunter", "2 : le magasin est trop endetté", "0,5 : le magasin ne peut plus emprunter", "50 % : la banque refusera tout prêt"],
    bonne: 0,
    explication: "Ratio d'endettement = [[dettes financières|capitaux propres]] = [[60 000|120 000]] = 0,5\nRepère : au-dessous de 1, les dettes bancaires restent inférieures à ce qu'ont apporté les propriétaires, la banque peut encore prêter. La banque regarde aussi la CAF (capacité de remboursement).",
    indice: "Ratio d'endettement = dettes financières sur capitaux propres. Compare le résultat au repère de 1."
  },
  {
    id: "U3-024", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2023",
    question: "Une meuleuse automatique est achetée et mise en service le 1er avril, pour 15 000 € HT, amortie en linéaire sur 5 ans. Quelle est la dotation de la 1re année (exercice du 1er janvier au 31 décembre) ?",
    choix: ["3 000 €", "2 250 €", "750 €", "2 500 €"],
    bonne: 1,
    explication: "Annuité pleine = [[15 000|5]] = 3 000 € par an\nLa 1re année, on ne compte que d'avril à décembre, soit 9 mois (prorata temporis) :\n3 000 × [[9|12]] = 2 250 €\nValeur nette comptable fin d'année 1 = 15 000 − 2 250 = 12 750 €\nLa dernière année recevra les 750 € restants.",
    indice: "Amortissement linéaire : annuité = [[valeur|durée]]. La première année, compte seulement les mois depuis la mise en service."
  },
  {
    id: "U3-025", difficulte: "facile", epreuve: "U3", theme: "Investissement et financement", session: "2023",
    question: "Pourquoi les dotations aux amortissements n'apparaissent-elles pas dans le budget de trésorerie ?",
    choix: ["Parce qu'elles ne sont payées que l'année suivante", "Parce qu'elles sont réglées directement par la banque", "Parce qu'elles ne sont pas déductibles du bénéfice", "Parce que c'est une charge calculée, sans sortie d'argent"],
    bonne: 3,
    explication: "L'argent est sorti une seule fois, le jour de l'achat (c'est ce décaissement qui figure dans le budget). La dotation étale ensuite ce coût sur la durée d'utilisation. Elle baisse le résultat, donc l'impôt (effet fiscal), sans toucher à la trésorerie.",
    indice: "Demande-toi quand l'argent sort vraiment de la banque : le jour de l'achat, ou chaque année de la dotation ?"
  },
  {
    id: "U3-026", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2024",
    question: "Emprunt de 20 000 € sur 5 ans à 5 %, remboursé par annuités constantes de 4 619,50 €. Que contient la 1re annuité ?",
    choix: ["1 000 € d'intérêts et 3 619,50 € de capital remboursé", "4 000 € de capital et 619,50 € d'intérêts", "4 619,50 € d'intérêts", "923,90 € d'intérêts et 3 695,60 € de capital remboursé"],
    bonne: 0,
    explication: "Intérêts de l'année = capital restant dû × taux = 20 000 × 5 % = 1 000 €. Amortissement (capital remboursé) = annuité − intérêts = 4 619,50 − 1 000 = 3 619,50 €. Il reste 16 380,50 € à rembourser, donc les intérêts de l'année 2 seront plus faibles. Seuls les intérêts sont une charge (financière).",
    indice: "Les intérêts d'une année se calculent sur le capital restant dû. Le capital remboursé, c'est ce qui reste de l'annuité."
  },
  {
    id: "U3-027", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2024",
    question: "Le magasin finance son véhicule de tournée par crédit-bail plutôt que par emprunt. Quel est l'effet sur les comptes ?",
    choix: ["Le véhicule est inscrit à l'actif et amorti", "Les loyers sont des charges externes, ce qui baisse la valeur ajoutée", "Les loyers sont des charges financières, ce qui baisse seulement le RCAI", "Il n'y a aucun effet sur le compte de résultat"],
    bonne: 1,
    explication: "En crédit-bail, l'entreprise loue le bien avec une option d'achat à la fin. Il n'est pas à son actif (pas d'amortissement, pas de dette bancaire au bilan) et les loyers vont en charges externes, donc baissent la VA. Avantages : pas de grosse sortie d'argent, pas d'endettement affiché. Inconvénient : coût total en général plus élevé qu'un emprunt.",
    indice: "En crédit-bail, le magasin loue le véhicule : il n'en est pas propriétaire. Dans quel type de charges range-t-on un loyer ?"
  },

  // ---------- Droit du travail ----------
  {
    id: "U3-028", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "Un opticien veut embaucher un monteur pour un poste permanent en atelier. Il hésite à proposer d'abord un CDD « pour voir ». Est-ce possible ?",
    choix: ["Oui, le CDD est libre dès que le salarié l'accepte et le signe", "Oui, à condition de ne pas dépasser 3 ans au total", "Non, pas pour un emploi durable et permanent", "Non, le CDD est interdit dans tout le commerce de détail"],
    bonne: 2,
    explication: "Le CDI est le contrat normal (article L1242-1 du Code du travail pour l'interdiction). Le CDD n'est permis que pour des cas précis : remplacer un salarié absent, accroissement temporaire d'activité, emploi saisonnier… Pour tester le salarié, le bon outil est la période d'essai du CDI.",
    indice: "Le CDD n'est autorisé que pour des motifs précis et temporaires. Un poste permanent en fait-il partie ? Quel outil sert à tester un salarié ?"
  },
  {
    id: "U3-029", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "En CDI, quelle est la durée maximale de la période d'essai d'un EMPLOYÉ fixée par le Code du travail (hors renouvellement) ?",
    choix: ["1 mois", "2 mois", "3 mois", "4 mois"],
    bonne: 1,
    explication: "Code du travail (L1221-19) : 2 mois pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres. Un seul renouvellement est possible, renouvellement compris 4, 6 ou 8 mois au plus, et seulement si un accord de branche étendu le prévoit, si le contrat l'écrit et si le salarié l'accepte par écrit. Intérêt pour les deux : l'employeur juge les compétences, le salarié juge le poste, et chacun peut rompre simplement.",
    indice: "Le Code du travail fixe trois durées selon la catégorie : ouvriers et employés, agents de maîtrise et techniciens, cadres."
  },
  {
    id: "U3-030", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "2017",
    question: "Pour être valable, que doit OBLIGATOIREMENT prévoir une clause de non-concurrence dans le contrat d'un opticien salarié ?",
    choix: ["Une durée d'au moins 3 ans", "L'accord de l'inspection du travail", "Une contrepartie financière versée au salarié", "Une interdiction valable dans toute la France"],
    bonne: 2,
    explication: "Selon la jurisprudence (Cour de cassation, 2002), 4 conditions cumulatives : être indispensable à la protection des intérêts légitimes de l'entreprise, être limitée dans le temps ET dans l'espace, tenir compte des spécificités de l'emploi, et prévoir une contrepartie financière. Un rayon de 30 km pendant 1 an est raisonnable ; toute la France ne l'est pas.",
    indice: "Une clause de non-concurrence prive le salarié d'une partie de sa liberté de travailler. Que doit-il recevoir en échange ?"
  },
  {
    id: "U3-031", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "La clause de non-concurrence d'un contrat ne prévoit aucune contrepartie financière. Quelle conséquence ?",
    choix: ["Tout le contrat de travail devient nul", "La clause est nulle, le contrat reste valable", "La clause reste valable, mais l'employeur paie une amende", "Le salarié doit rembourser une partie de ses salaires"],
    bonne: 1,
    explication: "Seule la clause tombe. Le contrat de travail continue normalement. Après son départ, le salarié est libre de travailler chez un concurrent ou de s'installer à côté. S'il a respecté une clause nulle, il peut demander des dommages-intérêts, à condition de prouver un préjudice (Cour de cassation, 2016). D'où l'intérêt de bien la rédiger dès le départ.",
    indice: "Une clause mal rédigée n'entraîne pas forcément tout le contrat avec elle. Qu'est-ce qui tombe exactement ?"
  },
  {
    id: "U3-032", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "2017",
    question: "Salaire brut : 2 000 €. Cotisations salariales : 22 % du brut. Cotisations patronales : 45 % du brut. Salaire net et coût pour l'employeur ?",
    choix: ["Net 1 560 € ; coût 2 900 €", "Net 1 100 € ; coût 2 000 €", "Net 1 560 € ; coût 2 440 €", "Net 1 640 € ; coût 2 900 €"],
    bonne: 0,
    explication: "Net = brut − cotisations salariales = 2 000 × (1 − 0,22) = 1 560 €. Coût employeur = brut + cotisations patronales = 2 000 × 1,45 = 2 900 € (taux donnés par l'énoncé ; dans la réalité, près du SMIC, les réductions de cotisations patronales baissent nettement ce coût). Le salarié touche donc environ la moitié de ce que le poste coûte au magasin : à prendre en compte dans le seuil de rentabilité d'un projet d'embauche.",
    indice: "Les cotisations salariales sont retirées du brut, les cotisations patronales s'ajoutent au brut. Deux calculs séparés."
  },
  {
    id: "U3-033", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "2023",
    question: "Une opticienne rachète un fonds de commerce où travaille déjà un salarié. Que devient son contrat ?",
    choix: ["Il s'arrête automatiquement à la vente", "Le vendeur doit le licencier avant la vente", "Il continue automatiquement avec le nouvel employeur", "Le repreneur peut choisir de le garder ou non"],
    bonne: 2,
    explication: "Article L1224-1 du Code du travail : en cas de vente, fusion, succession…, tous les contrats de travail en cours continuent avec le nouvel employeur, aux mêmes conditions (ancienneté, salaire). Le repreneur ne peut pas exiger un licenciement préalable.",
    indice: "Pense à l'article L1224-1 du Code du travail : que deviennent les contrats quand l'employeur change ?"
  },

  // ---------- Droit des entreprises ----------
  {
    id: "U3-034", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Une opticienne crée seule sa société et la dirige. Quel est son statut social selon la forme choisie ?",
    choix: ["Gérante d'EURL : assimilée salariée ; présidente de SASU : indépendante", "Gérante d'EURL : indépendante ; présidente de SASU : assimilée salariée", "Salariée dans les deux cas", "Indépendante dans les deux cas"],
    bonne: 1,
    explication: "Gérant associé unique d'EURL = travailleur non salarié (protection sociale des indépendants, gérée par l'Urssaf et l'Assurance maladie, cotisations plus faibles, protection moindre). Président de SASU = assimilé salarié (régime général, meilleure protection, cotisations plus élevées, mais pas d'assurance chômage). Autres différences : EURL imposée à l'IR par défaut, SASU à l'IS par défaut.",
    indice: "Le gérant d'EURL et le président de SAS n'ont pas le même régime de protection sociale. Lequel relève du régime général ?"
  },
  {
    id: "U3-035", difficulte: "facile", epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Lequel de ces éléments NE fait PAS partie du fonds de commerce d'un magasin d'optique ?",
    choix: ["La clientèle", "Le droit au bail", "L'enseigne et le nom commercial", "Les murs du magasin"],
    bonne: 3,
    explication: "Le fonds de commerce regroupe des biens MEUBLES : incorporels (clientèle, achalandage, nom commercial, enseigne, droit au bail) et corporels (agencement, matériel, stock). Les murs sont un bien immobilier, vendu à part. La clientèle est l'élément essentiel : sans elle, pas de fonds.",
    indice: "Le fonds de commerce ne contient que des biens meubles. Cherche l'élément qui est un bien immobilier."
  },
  {
    id: "U3-036", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Bail commercial « classique » d'un magasin d'optique : quelle affirmation est juste ?",
    choix: ["Il dure 1 an et se renouvelle automatiquement chaque année", "9 ans minimum ; congé et révision du loyer possibles tous les 3 ans", "Le propriétaire peut augmenter le loyer librement chaque mois", "Le locataire ne peut jamais partir avant la fin des 9 ans"],
    bonne: 1,
    explication: "C'est le bail « 3-6-9 » : au moins 9 ans, le locataire peut donner congé à la fin de chaque période de 3 ans (6 mois avant), et le loyer peut être révisé tous les 3 ans. Il existe aussi un bail dérogatoire de 3 ans maximum, pour tester une activité.",
    indice: "Pense au surnom du bail commercial : « 3-6-9 ». Que se passe-t-il à chaque échéance de 3 ans ?",
    schema: "img/schemas/U3/bail-3-6-9.svg",
    schemaTexte: "Frise du bail commercial sur 9 ans : à 3 et 6 ans, congé possible pour le locataire et révision du loyer, avec un préavis de 6 mois ; à 9 ans, fin du bail ou renouvellement."
  },
  {
    id: "U3-037", difficulte: "facile", epreuve: "U3", theme: "Droit des entreprises", session: "2018",
    question: "Un magasin change d'enseigne. Comment protéger efficacement le nouveau nom ?",
    choix: ["En le déposant comme marque à l'INPI, protection de 10 ans renouvelable", "Il est protégé dans toute la France dès qu'il est sur la vitrine", "En l'inscrivant au registre du commerce : protection de 5 ans", "En le déposant à la mairie"],
    bonne: 0,
    explication: "Avant le dépôt, on vérifie que le nom n'est pas déjà pris (recherche d'antériorité). Puis dépôt de marque à l'INPI, dans les classes de produits et services voulues. La protection dure 10 ans et se renouvelle sans limite. Intérêt : empêcher un concurrent d'utiliser le nom et valoriser le fonds.",
    indice: "Afficher un nom sur la vitrine ne donne pas de droit exclusif partout. Quelle démarche officielle le donne, et pour combien de temps ?"
  },

  // ---------- Réglementation de l'opticien ----------
  {
    id: "U3-038", difficulte: "moyen", epreuve: "U3", theme: "Réglementation de l'opticien", session: "2019",
    question: "Avant de réaliser une réfraction pour adapter une ordonnance, que doit dire l'opticien au client ?",
    choix: ["Que l'examen est remboursé par la Sécurité sociale", "Que la réfraction pratiquée n'est pas un acte médical", "Qu'il doit revenir dans 3 mois", "Qu'il n'a pas le droit de vendre de lentilles"],
    bonne: 1,
    explication: "L'article L4362-10 du Code de la santé publique oblige l'opticien à informer la personne que la réfraction qu'il pratique n'est pas un acte médical : elle ne remplace pas une consultation chez l'ophtalmologiste.",
    indice: "Le décret de 2016 encadre la réfraction faite par l'opticien. Qu'est-ce qui la distingue d'une consultation chez l'ophtalmologiste ?"
  },
  {
    id: "U3-039", difficulte: "difficile", epreuve: "U3", theme: "Réglementation de l'opticien", session: "2019",
    question: "Un client de 30 ans revient avec une ordonnance de lunettes datée d'il y a 4 ans, sans opposition du médecin. L'opticien peut-il renouveler en adaptant la correction ?",
    choix: ["Non, une ordonnance de lunettes n'est valable qu'un an", "Non, au-delà de 3 ans c'est impossible à tout âge", "Oui, entre 16 et 42 ans elle reste valable 5 ans", "Oui, une ordonnance n'a aucune limite de temps"],
    bonne: 2,
    explication: "Durées pour le renouvellement avec adaptation par l'opticien : 5 ans de 16 à 42 ans, 3 ans au-delà de 42 ans, sauf si le médecin s'y est opposé sur l'ordonnance. À 30 ans, une ordonnance de 4 ans est encore valable. (Une ordonnance d'orthoptiste ne vaut que 2 ans.)",
    indice: "La durée pendant laquelle l'opticien peut adapter une ordonnance dépend de l'âge du client. Dans quelle tranche se trouve un client de 30 ans ?"
  },
  {
    id: "U3-040", difficulte: "moyen", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément",
    question: "Depuis la réforme « 100 % Santé », que doit faire l'opticien pour tout équipement de lunettes ?",
    choix: ["Ne vendre que des équipements de classe A, sans reste à charge", "Proposer au moins une offre de classe A dans un devis normalisé", "Facturer les verres au prix fixé par la complémentaire santé", "Refuser les clients qui n'ont pas de complémentaire santé"],
    bonne: 1,
    explication: "Depuis 2020, l'opticien doit présenter une offre « 100 % Santé » (classe A : prix plafonnés, remboursée intégralement avec un contrat responsable) dans un devis normalisé, à côté des offres à tarifs libres (classe B). Le client reste libre de choisir. La réforme fait suite aux plafonds de remboursement des contrats responsables (2015).",
    indice: "Le client garde le choix, mais l'opticien a une obligation de proposer. Pense au panier de classe A et au devis."
  }

);

// ==============================================================
//  MINI-CAS : un magasin, une annexe, calculer → commenter → conseiller
// ==============================================================

CAS.push({
  id: "CAS-U3-01",
  epreuve: "U3",
  titre: "Optique du Belvédère : embaucher ou pas ?",
  contexte: "Optique du Belvédère est un magasin indépendant (EURL) d'une petite ville. La gérante voudrait embaucher un opticien à temps plein pour ouvrir le samedi après-midi et développer les lentilles. Elle te confie son compte de résultat de l'an dernier, présenté en charges fixes et variables.",
  annexe: {
    titre: "Compte de résultat différentiel de l'an dernier",
    colonnes: ["", "Montant (€ HT)"],
    lignes: [
      ["Chiffre d'affaires", "360 000"],
      ["Charges variables (achats de marchandises vendues)", "144 000"],
      ["Charges fixes (loyer, salaires actuels, amortissements…)", "180 000"],
      ["Résultat", "36 000"]
    ]
  }
});

QUESTIONS.push(

  {
    id: "U3-041", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    cas: "CAS-U3-01", etape: 1,
    question: "Quel est le taux de marge sur coût variable du magasin ?",
    choix: ["60 %", "40 %", "150 %", "10 %"],
    bonne: 0,
    explication: "Marge sur coût variable = CA − charges variables = 360 000 − 144 000 = 216 000 €\nTaux de MCV = [[216 000|360 000]] = 0,60, soit 60 %\n(40 % est le poids des charges variables ; 10 % = [[résultat|CA]].)",
    indice: "Commence par la marge sur coût variable (CA moins charges variables), puis rapporte-la au chiffre d'affaires."
  },
  {
    id: "U3-042", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    cas: "CAS-U3-01", etape: 2,
    question: "Quel est le seuil de rentabilité du magasin ?",
    choix: ["324 000 €", "216 000 €", "300 000 €", "450 000 €"],
    bonne: 2,
    explication: "SR = [[charges fixes|taux de MCV]] = [[180 000|0,60]] = 300 000 € HT\nVérification : à 300 000 € de CA, la MCV vaut 180 000 € et couvre tout juste les charges fixes.\n(450 000 € = [[180 000|0,40]] : on a divisé par le taux de charges variables.)",
    indice: "Seuil de rentabilité = charges fixes divisées par le taux de marge sur coût variable trouvé juste avant."
  },
  {
    id: "U3-043", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-01", etape: 3,
    contexte: "Le seuil de rentabilité est de 300 000 € pour un chiffre d'affaires de 360 000 €.",
    question: "Commente ce seuil de rentabilité : quel commentaire est le plus juste ?",
    choix: [
      "Le magasin est rentable.",
      "Le magasin perd de l'argent, car son seuil de rentabilité est inférieur à son chiffre d'affaires.",
      "Le seuil est atteint fin octobre : le magasin est rentable, avec une marge de sécurité de 60 000 €, soit 1/6 de son CA ; une baisse des ventes de plus de 17 % le ferait passer en perte.",
      "Le magasin devrait passer en SASU pour mieux protéger la gérante."
    ],
    bonne: 2,
    explication: "Point mort = [[300 000|360 000]] × 12 = 10 mois, donc fin octobre.\nMarge de sécurité = 360 000 − 300 000 = 60 000 €, soit [[60 000|360 000]] = 16,7 % du CA.\nUn bon commentaire chiffre la situation, la compare (au CA) et dit ce qu'elle signifie. « Le magasin est rentable » est vrai mais sans argument ; le 2e commentaire inverse le sens du seuil ; le 4e est hors sujet.",
    indice: "Un bon commentaire compare le seuil au CA (marge de sécurité, date du point mort) et en tire une conclusion chiffrée."
  },
  {
    id: "U3-044", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-01", etape: 4,
    contexte: "Le nouvel opticien coûterait 36 000 € par an (salaire brut et cotisations patronales). C'est une charge fixe de plus.",
    question: "Sans vente supplémentaire, quel serait le nouveau seuil de rentabilité ?",
    choix: ["336 000 €", "360 000 €", "396 000 €", "324 000 €"],
    bonne: 1,
    explication: "Nouvelles charges fixes = 180 000 + 36 000 = 216 000 €\nNouveau SR = [[216 000|0,60]] = 360 000 €\nC'est exactement le CA actuel : sans ventes en plus, le résultat tomberait à 0.\nPiège : ajouter 36 000 € directement au SR (336 000 €). Chaque euro de charge fixe demande [[1|0,60]] ≈ 1,67 € de CA.",
    indice: "Ajoute le coût du poste aux charges fixes, puis refais le calcul du seuil avec le même taux de MCV."
  },
  {
    id: "U3-045", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-01", etape: 5,
    contexte: "La gérante pense que le samedi après-midi et les lentilles apporteraient 45 000 € de CA HT en plus par an, au même taux de marge sur coût variable.",
    question: "Que conseilles-tu à la gérante ?",
    choix: [
      "Embaucher : 45 000 € de chiffre d'affaires en plus couvrent largement les 36 000 € que coûte le poste.",
      "Ne pas embaucher tout de suite, c'est trop risqué.",
      "Passer en SASU avant d'embaucher, pour que la gérante soit assimilée salariée.",
      "Pas d'embauche à temps plein pour l'instant : 45 000 € de CA n'apportent que 27 000 € de marge, le résultat baisserait de 9 000 €. Il faudrait 60 000 € de CA en plus ; commencer par un temps partiel et suivre les ventes du samedi."
    ],
    bonne: 3,
    explication: "Marge apportée = 45 000 × 0,60 = 27 000 €, pour un coût de 36 000 €\nRésultat = 36 000 + 27 000 − 36 000 = 27 000 €, soit 9 000 € de moins qu'aujourd'hui.\nCA nécessaire pour payer le poste = [[36 000|0,60]] = 60 000 €\nPiège classique : comparer un chiffre d'affaires à un coût, alors qu'il faut comparer la MARGE au coût. Le 2e choix est prudent mais sans argument, le 3e hors sujet.",
    indice: "Ce n'est pas le chiffre d'affaires supplémentaire qui paie le salaire, c'est la marge qu'il apporte. Calcule-la et compare-la au coût du poste."
  },

  // ---------- « Commente ce chiffre » ----------
  {
    id: "U3-046", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2019",
    contexte: "Bilan fonctionnel d'un magasin d'optique au 31 décembre.",
    annexe: {
      titre: "Indicateurs du bilan fonctionnel",
      colonnes: ["", "Montant (€)"],
      lignes: [["FRNG", "25 000"], ["BFR", "40 000"], ["Trésorerie nette", "−15 000"]]
    },
    question: "Commente le FRNG et le BFR de ce magasin : quel commentaire est le plus juste ?",
    choix: [
      "Le FRNG est positif, donc la trésorerie du magasin est forcément positive.",
      "Le FRNG ne couvre pas le BFR : il manque 15 000 €, financés par du découvert. Il faut renforcer les ressources stables (apport, emprunt à long terme) ou réduire le BFR (stock, délais clients).",
      "La situation de trésorerie est tendue.",
      "Le magasin devrait baisser son taux de marque pour attirer des clients."
    ],
    bonne: 1,
    explication: "TN = FRNG − BFR = 25 000 − 40 000 = −15 000 € : les ressources durables ne suffisent pas à financer le cycle d'exploitation, le magasin vit sur des concours bancaires, qui coûtent des agios. Le bon commentaire explique la cause, chiffre le manque et propose deux pistes. « Tendue » est vrai mais sans argument ; le 1er confond FRNG positif et trésorerie positive ; le 4e est hors sujet.",
    indice: "Compare le FRNG au BFR : qui finance l'autre ? Ensuite, propose une solution qui agit sur l'un ou sur l'autre."
  },
  {
    id: "U3-047", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    contexte: "Le magasin réalise 300 000 € de chiffre d'affaires HT et envisage d'acheter une meuleuse à 30 000 €.",
    annexe: {
      titre: "Indicateurs du bilan fonctionnel",
      colonnes: ["", "Montant (€)"],
      lignes: [["FRNG", "90 000"], ["BFR", "30 000"], ["Trésorerie nette", "60 000"]]
    },
    question: "Commente la trésorerie de ce magasin : quel commentaire est le plus juste ?",
    choix: [
      "La trésorerie est positive.",
      "Le bail commercial peut être révisé tous les 3 ans.",
      "Le FRNG couvre largement le BFR : l'équilibre est assuré et 60 000 € sont disponibles. Une partie de cet argent dort : le magasin peut autofinancer la meuleuse sans emprunter, en gardant une réserve.",
      "La trésorerie est positive, donc le magasin est forcément rentable."
    ],
    bonne: 2,
    explication: "TN = 90 000 − 30 000 = 60 000 € : équilibre financier solide. Mais trop de trésorerie qui dort, c'est de l'argent qui ne rapporte rien : ici, elle peut financer les 30 000 € de la meuleuse en gardant 30 000 € de réserve. Le 4e choix confond trésorerie (de l'argent disponible) et rentabilité (un bénéfice) ; le 1er est vrai sans argument ; le 2e hors sujet.",
    indice: "Une trésorerie positive dit que l'équilibre est assuré. Demande-toi aussi à quoi pourrait servir l'argent disponible."
  },
  {
    id: "U3-048", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    contexte: "Le magasin veut emprunter 40 000 € pour refaire sa vitrine.",
    annexe: {
      titre: "Extrait du bilan",
      colonnes: ["", "Montant (€)"],
      lignes: [["Dettes financières", "150 000"], ["Capitaux propres", "100 000"]]
    },
    question: "Commente le ratio d'endettement : quel commentaire est le plus juste ?",
    choix: [
      "Le magasin est très endetté.",
      "Le ratio vaut 1,5 % : la banque prêtera sans difficulté.",
      "Le magasin devrait proposer un service d'optique à domicile.",
      "Le ratio vaut 1,5 : les dettes bancaires dépassent de moitié les capitaux propres. Un nouvel emprunt sera difficile ; mieux vaut d'abord renforcer les capitaux propres (mise en réserve, apport) ou financer autrement (autofinancement, crédit-bail)."
    ],
    bonne: 3,
    explication: "Ratio d'endettement = [[dettes financières|capitaux propres]] = [[150 000|100 000]] = 1,5\nAu-dessus de 1, les banques prêtent plus que les propriétaires n'ont apporté : elles hésiteront à prêter encore. Le bon commentaire donne le chiffre, le compare au repère de 1 et propose une solution. « Très endetté » est vrai sans argument ; 1,5 n'est pas un pourcentage ; le 3e choix est hors sujet.",
    indice: "Calcule dettes financières sur capitaux propres et compare au repère de 1. Puis dis ce que ça change pour le projet d'emprunt."
  },
  {
    id: "U3-049", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2023",
    contexte: "Le magasin compare ses résultats à ceux de la profession.",
    annexe: {
      titre: "Taux de marque",
      colonnes: ["", "Taux"],
      lignes: [["Magasin", "52 %"], ["Moyenne de la profession", "60 %"]]
    },
    question: "Commente le taux de marque du magasin : quel commentaire est le plus juste ?",
    choix: [
      "Le taux de marque est 8 points sous la moyenne : le magasin garde moins de marge par vente que ses concurrents. Il doit revoir ses prix d'achat (centrale, fournisseurs) ou son coefficient, sans casser son positionnement.",
      "Avec 52 % de taux de marque, le magasin vend à perte 48 % de ses équipements.",
      "La TVA sur les lunettes est de 20 %.",
      "Le taux de marque est un peu faible."
    ],
    bonne: 0,
    explication: "52 % contre 60 % : sur un équipement à 300 € HT, le magasin garde 156 € de marge au lieu de 180 €. Le bon commentaire chiffre l'écart, l'explique et propose des leviers (acheter moins cher, ajuster les prix). 48 % est la part du coût d'achat dans le prix HT, pas une vente à perte ; « un peu faible » est vrai sans argument ; la TVA est hors sujet.",
    indice: "Compare au chiffre de la profession, dis ce que l'écart signifie pour chaque vente, puis propose un levier."
  }

);

// ==============================================================
//  CALCULS À TAPER (étape 2) : l'élève écrit le résultat
// ==============================================================

QUESTIONS.push(

  {
    id: "U3-050", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2019",
    type: "calcul",
    question: "Une monture est achetée 48 € HT et vendue 168 € TTC (TVA 20 %). Calcule le taux de marque.",
    reponse: { valeur: 65.7, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [ { valeur: 71.4, type: "ht-ttc" }, { valeur: 54.8, type: "ht-ttc" }, { valeur: 191.7, type: "marque-marge" } ],
    explication: "PV HT = [[168|1,2]] = 140 €\nMarge brute = 140 − 48 = 92 €\nTaux de marque = [[92|140]] × 100 = 65,7 %\nOn divise par le prix de vente HT, jamais par le TTC ni par le coût d'achat.",
    indice: "Retire d'abord la TVA du prix de vente. Le taux de marque se calcule sur le prix de vente HT."
  },
  {
    id: "U3-051", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "2023",
    type: "calcul",
    question: "Un verre est acheté 35 € HT et vendu 126 € TTC. Calcule le coefficient multiplicateur TTC.",
    reponse: { valeur: 3.6, unite: "", decimales: 1, signe: false },
    erreurs: [ { valeur: 3, type: "ht-ttc" } ],
    explication: "Coefficient TTC = [[PV TTC|coût d'achat HT]] = [[126|35]] = 3,6\nC'est le coefficient le plus utilisé en optique : il passe directement de l'achat HT au prix affiché TTC.",
    indice: "Coefficient TTC = prix de vente TTC divisé par le coût d'achat HT. Pas de conversion à faire ici."
  },
  {
    id: "U3-052", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    type: "calcul",
    question: "Zone de chalandise : 15 000 habitants, 65 % de porteurs de lunettes, panier moyen 330 € TTC, renouvellement tous les 3 ans. Calcule le marché potentiel annuel.",
    reponse: { valeur: 1072500, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 3217500, type: "notion", message: "C'est la dépense d'un cycle complet. Un porteur ne renouvelle ses lunettes que tous les 3 ans : divise par 3 pour avoir le marché d'une année." },
      { valeur: 1650000, type: "notion", message: "Tu as compté tous les habitants. Seuls les porteurs de lunettes (65 %) achètent un équipement." }
    ],
    explication: "Porteurs = 15 000 × 0,65 = 9 750\nDépense d'un cycle = 9 750 × 330 = 3 217 500 €\nPar an : [[3 217 500|3]] = 1 072 500 € TTC.",
    indice: "Nombre de porteurs × panier moyen, puis ramène à une seule année avec le rythme de renouvellement."
  },
  {
    id: "U3-053", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    type: "calcul",
    question: "Marché potentiel : 800 000 € TTC. IDC : 95. Évasion commerciale : 12 %. Le magasin vise 20 % du marché restant. Calcule son chiffre d'affaires prévisionnel HT (arrondi à l'euro).",
    reponse: { valeur: 111467, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 133760, type: "ht-ttc", message: "C'est le CA TTC. Le marché potentiel est exprimé TTC : il reste à retirer la TVA pour obtenir le CA HT." },
      { valeur: 107008, type: "ht-ttc", message: "Tu as retiré 20 % du TTC. Pour passer en HT, on divise par 1,2 : la TVA se calcule sur le HT, pas sur le TTC." },
      { valeur: 15200, type: "notion", message: "Tu as gardé les 12 % d'évasion. L'évasion est la part des achats faite ailleurs : il reste 88 % du marché." }
    ],
    explication: "800 000 × 0,95 = 760 000 €\n760 000 × (1 − 0,12) = 668 800 € (marché net de l'évasion)\n668 800 × 0,20 = 133 760 € TTC\nEn HT : [[133 760|1,2]] = 111 466,67 €, soit 111 467 € HT.\nOn enchaîne les multiplications, et on finit par passer en HT.",
    indice: "Quatre étapes dans l'ordre : IDC, évasion, part de marché, puis retire la TVA."
  },
  {
    id: "U3-054", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    type: "calcul",
    question: "CA : 420 000 € HT. Charges variables : 147 000 €. Charges fixes : 189 000 €. Calcule le seuil de rentabilité (arrondi à l'euro).",
    reponse: { valeur: 290769, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 540000, type: "notion", message: "Tu as divisé par le taux de charges variables (35 %). Le seuil se calcule avec le taux de marge sur coût variable : MCV / CA." },
      { valeur: 336000, type: "notion", message: "C'est le total des charges. Le seuil est le CA qui couvre les charges fixes : charges fixes divisées par le taux de MCV." }
    ],
    explication: "MCV = 420 000 − 147 000 = 273 000 €\nTaux de MCV = [[273 000|420 000]] = 0,65, soit 65 %\nSR = [[189 000|0,65]] = 290 769,23 €, soit 290 769 € HT.",
    indice: "Calcule le taux de marge sur coût variable, puis divise les charges fixes par ce taux."
  },
  {
    id: "U3-055", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    type: "calcul",
    question: "SR = 270 000 €, CA annuel = 405 000 €, activité régulière sur une année de 360 jours. Au bout de combien de jours le point mort est-il atteint ?",
    reponse: { valeur: 240, unite: "jours", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 540, type: "notion", message: "Tu as divisé le CA par le seuil. C'est SR / CA qui donne la fraction de l'année : elle est plus petite que 1." }
    ],
    explication: "Point mort = [[SR|CA]] × 360 = [[270 000|405 000]] × 360 = [[2|3]] × 360 = 240 jours\nSoit 8 mois : fin août.",
    indice: "Quelle fraction du CA annuel représente le SR ? Applique-la au nombre de jours de l'année."
  },
  {
    id: "U3-056", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    type: "calcul",
    question: "Ressources stables 210 000 €, emplois stables 172 000 €, stocks 58 000 €, créances clients 6 000 €, dettes fournisseurs, fiscales et sociales 31 000 €. Calcule la trésorerie nette.",
    reponse: { valeur: 5000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: 71000, type: "notion", message: "Tu as ajouté FRNG et BFR. La trésorerie nette est ce qui reste du FRNG une fois le BFR financé : FRNG − BFR." },
      { valeur: -57000, type: "notion", message: "Tu as ajouté les dettes fournisseurs, fiscales et sociales au BFR. Ce sont des ressources : elles se retranchent des stocks et des créances." }
    ],
    explication: "FRNG = 210 000 − 172 000 = 38 000 €. BFR = 58 000 + 6 000 − 31 000 = 33 000 €. TN = FRNG − BFR = 38 000 − 33 000 = +5 000 € : positive, mais faible.",
    indice: "Calcule d'abord le FRNG, puis le BFR. La trésorerie nette est l'écart entre les deux, avec son signe."
  },
  {
    id: "U3-057", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2023",
    type: "calcul",
    question: "Un frontofocomètre est acheté et mis en service le 1er octobre pour 18 000 € HT, amorti en linéaire sur 6 ans. Calcule la dotation de la 1re année (exercice civil).",
    reponse: { valeur: 750, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 3000, type: "notion", message: "C'est l'annuité d'une année pleine. Le frontofocomètre n'a servi que d'octobre à décembre : prorata de 3 mois sur 12." },
      { valeur: 2250, type: "notion", message: "Tu as compté les 9 mois avant la mise en service. On amortit à partir du 1er octobre : d'octobre à décembre, 3 mois." }
    ],
    explication: "Annuité pleine = [[18 000|6]] = 3 000 €\nD'octobre à décembre : 3 mois, soit 3 000 × [[3|12]] = 750 €\nLes années suivantes : 3 000 €, et la dernière reçoit les 2 250 € restants.",
    indice: "Annuité pleine = [[valeur|durée]]. La 1re année, ne compte que les mois depuis la mise en service."
  },
  {
    id: "U3-058", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "2024",
    type: "calcul",
    question: "Emprunt de 24 000 € sur 4 ans à 4 %, annuités constantes de 6 611,76 €. Calcule les intérêts de la 2e année.",
    reponse: { valeur: 733.93, unite: "€", decimales: 2, tolerance: 0.02, signe: false },
    erreurs: [ { valeur: 960, type: "notion", message: "Tu as calculé les intérêts sur le capital de départ. Ils se calculent sur le capital restant dû après la 1re annuité." } ],
    explication: "Année 1 : intérêts = 24 000 × 4 % = 960 € ; capital remboursé = 6 611,76 − 960 = 5 651,76 € ; reste dû = 24 000 − 5 651,76 = 18 348,24 €. Année 2 : intérêts = 18 348,24 × 4 % = 733,93 €.",
    indice: "Les intérêts se calculent sur le capital restant dû. Commence par trouver ce qui reste dû après la 1re annuité."
  },
  {
    id: "U3-059", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2017",
    type: "calcul",
    question: "Salaire brut mensuel : 2 200 €. Cotisations salariales : 23 % du brut. Cotisations patronales : 42 % du brut. Calcule le coût mensuel pour l'employeur.",
    reponse: { valeur: 3124, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 1694, type: "brut-net", message: "C'est le salaire net : ce que reçoit le salarié (brut − cotisations salariales). L'employeur, lui, paie le brut plus ses propres cotisations." },
      { valeur: 3630, type: "brut-net", message: "Tu as ajouté les deux cotisations. Les cotisations salariales sont prises sur le brut : elles ne coûtent rien de plus à l'employeur." },
      { valeur: 2200, type: "brut-net", message: "C'est le salaire brut seul. L'employeur paie en plus ses cotisations patronales (42 % du brut)." }
    ],
    explication: "Coût employeur = brut + cotisations patronales = 2 200 × 1,42 = 3 124 €. (Le salaire net, lui, vaut 2 200 × 0,77 = 1 694 €.) Les cotisations salariales ne changent pas le coût pour l'employeur : elles sont prises sur le brut.",
    indice: "Le coût pour l'employeur part du brut et y ajoute ses propres cotisations. Les cotisations salariales n'entrent pas dans ce calcul."
  }

);

// ==============================================================
//  CAS « CALCULS POSÉS » : une annexe, des calculs à taper, puis commenter et conseiller
// ==============================================================

CAS.push({
  id: "CAS-U3-02",
  epreuve: "U3",
  titre: "Optique des Remparts : le bilan avant d'investir",
  contexte: "Optique des Remparts, magasin indépendant (SARL), envisage d'acheter un nouvel équipement de mesure. Avant d'aller voir sa banque, le gérant te demande d'analyser son bilan fonctionnel de fin d'année.",
  annexe: {
    titre: "Bilan fonctionnel au 31 décembre (en €)",
    colonnes: ["", "Montant (€)"],
    lignes: [
      ["Emplois stables (immobilisations brutes)", "240 000"],
      ["Ressources stables", "265 000"],
      ["… dont capitaux propres", "165 000"],
      ["… dont emprunts bancaires", "100 000"],
      ["Stocks", "72 000"],
      ["Créances clients", "8 000"],
      ["Dettes fournisseurs", "38 000"],
      ["Dettes fiscales et sociales", "22 000"],
      ["Trésorerie active (banque, caisse)", "9 000"],
      ["Concours bancaires courants", "4 000"]
    ]
  }
});

QUESTIONS.push(

  {
    id: "U3-060", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    cas: "CAS-U3-02", etape: 1, type: "calcul",
    question: "Calcule le fonds de roulement net global (FRNG).",
    reponse: { valeur: 25000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "FRNG = ressources stables − emplois stables = 265 000 − 240 000 = 25 000 €.",
    indice: "Le FRNG se lit en haut du bilan fonctionnel : ressources stables moins emplois stables."
  },
  {
    id: "U3-061", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    cas: "CAS-U3-02", etape: 2, type: "calcul",
    question: "Calcule le besoin en fonds de roulement (BFR).",
    reponse: { valeur: 20000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "BFR = (stocks + créances clients) − (dettes fournisseurs + dettes fiscales et sociales) = 80 000 − 60 000 = 20 000 €. La trésorerie (active et passive) n'entre pas dans le BFR.",
    indice: "Actif circulant d'exploitation moins dettes d'exploitation. Laisse de côté la banque et les concours bancaires."
  },
  {
    id: "U3-062", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    cas: "CAS-U3-02", etape: 3, type: "calcul",
    question: "Calcule la trésorerie nette, puis vérifie-la avec le bas du bilan.",
    reponse: { valeur: 5000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "TN = FRNG − BFR = 25 000 − 20 000 = 5 000 €. Vérification : trésorerie active − concours bancaires = 9 000 − 4 000 = 5 000 €. Les deux calculs doivent toujours tomber sur le même chiffre.",
    indice: "Deux chemins possibles : FRNG − BFR, ou trésorerie active − trésorerie passive. Ils doivent donner le même résultat."
  },
  {
    id: "U3-063", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024",
    cas: "CAS-U3-02", etape: 4, type: "calcul",
    question: "Calcule le ratio d'endettement (emprunts bancaires / capitaux propres), arrondi à 0,01.",
    reponse: { valeur: 0.61, unite: "", decimales: 2, tolerance: 0.01, signe: false },
    explication: "Ratio = [[100 000|165 000]] = 0,61\nIl est sous 1 : les banques ont prêté moins que ce qu'ont apporté les associés, le magasin peut encore emprunter.",
    indice: "Divise les emprunts bancaires par les capitaux propres. Ce n'est pas un pourcentage, compare-le à 1."
  },
  {
    id: "U3-064", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-02", etape: 5,
    question: "Commente la situation financière du magasin : quel commentaire est le plus juste ?",
    choix: [
      "La situation financière est correcte.",
      "Équilibre assuré mais serré : le FRNG (25 000 €) couvre le BFR (20 000 €) et laisse 5 000 € de trésorerie. Le stock (72 000 €) pèse lourd dans le BFR. L'endettement (0,61) reste sous 1 : le magasin peut encore emprunter.",
      "La trésorerie est négative, car les concours bancaires sont de 4 000 €.",
      "Le magasin devrait déposer sa marque à l'INPI."
    ],
    bonne: 1,
    explication: "Un bon commentaire reprend les chiffres, les compare (FRNG au BFR, ratio à 1), repère ce qui pèse (le stock) et en tire une conclusion utile pour le projet. « Correcte » est vrai sans argument ; la trésorerie nette est positive malgré le découvert, car la banque contient 9 000 € ; l'INPI est hors sujet.",
    indice: "Reprends tes 4 résultats : qui couvre quoi, ce qui reste, ce qui pèse le plus, et ce que dit le ratio pour un futur emprunt."
  },
  {
    id: "U3-065", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-02", etape: 6,
    contexte: "L'équipement coûte 30 000 € HT. Le gérant hésite entre le payer comptant ou emprunter sur 5 ans.",
    question: "Que conseilles-tu au gérant ?",
    choix: [
      "Le payer comptant, puisque la trésorerie est positive.",
      "Emprunter.",
      "L'emprunter sur 5 ans : un bien durable se finance par une ressource durable. Payé comptant, il ferait tomber la trésorerie à −25 000 €. Avec l'emprunt, le ratio d'endettement passe à 0,79, toujours sous 1. En parallèle, alléger le stock pour réduire le BFR.",
      "Changer d'enseigne pour attirer de nouveaux clients."
    ],
    bonne: 2,
    explication: "Comptant : l'immobilisation augmente de 30 000 € sans ressource stable, le FRNG tombe à −5 000 € et la trésorerie à −5 000 − 20 000 = −25 000 €.\nAvec un emprunt de 30 000 €, FRNG et trésorerie ne bougent pas, et le ratio devient [[130 000|165 000]] = 0,79.\nLe 1er choix oublie que 5 000 € ne paient pas 30 000 € ; « Emprunter » est juste mais sans argument ; le 4e est hors sujet.",
    indice: "Un investissement durable devrait être financé par une ressource durable. Calcule ce que deviendrait la trésorerie si on payait comptant, puis le ratio avec l'emprunt."
  },

  // ---------- « Choisis la bonne justification » ----------
  {
    id: "U3-141", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    question: "Un magasin réalise 300 000 € HT de CA avec un seuil de rentabilité de 225 000 € HT. Quel commentaire est le mieux rédigé ?",
    choix: ["Le seuil de rentabilité est de 225 000 €, donc le magasin est rentable.", "Le seuil est inférieur au CA de 75 000 € : le magasin dégage donc 75 000 € de bénéfice.", "Le seuil représente 75 % du CA : le magasin est rentable avec une marge de sécurité de 75 000 €, soit 25 % du CA. Une baisse du CA de plus de 25 % le ferait passer en perte.", "Le magasin perd de l'argent tant qu'il n'a pas atteint un CA de 300 000 €."],
    bonne: 2,
    explication: "Un bon commentaire compare le seuil au CA, chiffre la marge de sécurité et conclut.\nMarge de sécurité = 300 000 − 225 000 = 75 000 €\nIndice de sécurité = [[75 000|300 000]] = 25 %\nLe 1er choix est vrai mais sans argument ni chiffre. Le 2e confond marge de sécurité et bénéfice : le bénéfice vaut la marge de sécurité × le taux de marge sur coût variable, pas 75 000 €. Le 4e prend le CA actuel pour le seuil.",
    indice: "Un commentaire complet contient un chiffre, une comparaison et une conclusion."
  },
  {
    id: "U3-142", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    question: "Un poste d'opticien supplémentaire coûte 30 000 € par an à l'employeur. Le taux de marge sur coût variable du magasin est de 60 %. Quel conseil est le mieux justifié ?",
    choix: ["Embaucher seulement si le magasin peut réaliser au moins 50 000 € de CA en plus : à 60 %, ce CA apporte 30 000 € de marge, qui couvrent le coût du poste.", "Embaucher : 30 000 € est un petit coût au regard du CA du magasin.", "Embaucher si le magasin peut réaliser 30 000 € de CA en plus, qui paieront le salaire.", "Embaucher si le magasin peut réaliser 18 000 € de CA en plus, soit 30 000 × 0,60."],
    bonne: 0,
    explication: "Ce n'est pas le CA qui paie un salaire, c'est la marge qu'il apporte.\nCA nécessaire = [[coût du poste|taux de MCV]] = [[30 000|0,60]] = 50 000 €\nVérification : 50 000 × 0,60 = 30 000 €. Le 2e choix ne chiffre rien. Le 3e compare un CA à un coût. Le 4e multiplie au lieu de diviser.",
    indice: "Combien de CA faut-il pour que la marge égale 30 000 € ?"
  },
  {
    id: "U3-143", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    question: "Un magasin a un FRNG de 40 000 € et un BFR de 55 000 €. Quel commentaire est le mieux rédigé ?",
    choix: ["Le FRNG est positif, donc la situation financière est saine.", "La trésorerie nette est de 95 000 € : le magasin a une large réserve.", "La trésorerie nette est de 15 000 € : elle est positive, il n'y a aucun souci.", "La trésorerie nette est de 40 000 − 55 000 = −15 000 € : le FRNG ne couvre pas le BFR, le magasin dépend d'un découvert. Il peut réduire ses stocks ou négocier des délais de paiement avec ses fournisseurs."],
    bonne: 3,
    explication: "Trésorerie nette = FRNG − BFR = 40 000 − 55 000 = −15 000 €\nUn FRNG positif ne suffit pas : il faut qu'il couvre le BFR. Le 2e choix additionne au lieu de soustraire, le 3e oublie le signe. Le bon commentaire donne le calcul, dit ce que le résultat signifie et propose une action.",
    indice: "Soustrais le BFR du FRNG, et regarde le signe."
  },
  {
    id: "U3-144", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    question: "Un magasin a 96 000 € de dettes financières et 120 000 € de capitaux propres. Quel commentaire est le mieux justifié ?",
    choix: ["Le ratio d'endettement est de 80 % : c'est trop élevé, la banque refusera tout prêt.", "Le ratio d'endettement est de 0,8, inférieur à 1 : les dettes bancaires restent inférieures aux capitaux propres, le magasin peut encore emprunter, sous réserve que sa CAF couvre les remboursements.", "Le ratio d'endettement est de 1,25 : le magasin est très endetté.", "Le ratio d'endettement est de 0,8, inférieur à 1 : le magasin est sans dette."],
    bonne: 1,
    explication: "Ratio d'endettement = [[dettes financières|capitaux propres]] = [[96 000|120 000]] = 0,8\nSous 1, les dettes bancaires sont inférieures aux capitaux propres. Le 1er choix donne le bon chiffre (0,8 = 80 %) mais en tire une conclusion fausse : sous 1, l'emprunt reste possible. Le 3e inverse la division ([[120 000|96 000]] = 1,25). Le 4e confond « inférieur à 1 » et « pas de dette ».",
    indice: "Divise les dettes par les capitaux propres, compare à 1, puis pense à la capacité de rembourser."
  },
  {
    id: "U3-145", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément",
    question: "Le taux de marque d'un magasin passe de 62 % à 58 % en un an. Quel commentaire est le mieux rédigé ?",
    choix: ["Le taux de marque baisse de 4 %, ce qui est négligeable : aucune action n'est nécessaire.", "Le magasin vend moins cher, il attirera donc plus de clients : c'est forcément bon pour le résultat.", "Le taux de marque baisse de 4 points : sur 100 € de vente HT, il reste 58 € au lieu de 62 € pour payer les charges. À CA égal, le résultat diminue : il faut revoir les prix ou négocier les achats.", "Le taux de marque est passé de 62 % à 58 %, donc le taux de marge a augmenté."],
    bonne: 2,
    explication: "Un écart entre deux taux se dit en points : 62 − 58 = 4 points. Ici, 4 points de taux de marque, c'est 4 € de moins par tranche de 100 € de ventes HT. Le 1er choix parle de 4 % et minimise sans chiffrer. Le 2e est un pari sans calcul. Le 4e est faux : taux de marque et taux de marge baissent ou montent ensemble.",
    indice: "Un écart entre deux pourcentages se compte en points. Dis ce que ça change par 100 € de vente."
  },
  {
    id: "U3-146", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    question: "Un magasin finance un équipement de 30 000 € par un emprunt de 5 ans à 5 % (annuité constante de 6 929 €). Sa CAF est de 14 000 € par an. Quel conseil est le mieux justifié ?",
    choix: ["Je conseille l'emprunt : l'annuité de 6 929 € représente environ la moitié de la CAF, le magasin peut la rembourser, et il garde sa trésorerie pour son exploitation.", "Je conseille de payer comptant : un emprunt coûte toujours plus cher.", "Je déconseille l'emprunt : l'annuité de 6 929 € dépasse la CAF.", "Je conseille l'emprunt : l'annuité est une charge de 6 929 € qui améliore le résultat."],
    bonne: 0,
    explication: "Part de la CAF consacrée au remboursement = [[annuité|CAF]] = [[6 929|14 000]] ≈ 49,5 %\nLa CAF couvre l'annuité avec de la marge. Le 2e choix est un principe sans calcul : payer comptant viderait la trésorerie. Le 3e est faux (6 929 est inférieur à 14 000). Le 4e est absurde : une charge diminue le résultat, et seuls les intérêts sont des charges, pas le capital remboursé.",
    indice: "Compare l'annuité à la CAF, puis pense à la trésorerie."
  },
  {
    id: "U3-147", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    question: "Une opticienne a signé un bail commercial de 9 ans. Après 4 ans, elle veut quitter le local. Quelle réponse est la mieux justifiée ?",
    choix: ["Elle peut partir à tout moment, il suffit de prévenir le propriétaire.", "Elle peut partir tout de suite, car un bail commercial dure 4 ans au maximum.", "Elle ne peut jamais partir avant la fin des 9 ans.", "Elle ne peut pas partir à 4 ans : le locataire peut donner congé à la fin de chaque période de 3 ans, donc à 6 ans, avec un préavis de 6 mois. Avant, elle reste tenue de payer le loyer, sauf accord du propriétaire ou cession du bail."],
    bonne: 3,
    explication: "Le bail commercial de 9 ans est dit « 3-6-9 » : le locataire peut donner congé à la fin de la 3e et de la 6e année (et à la fin de la 9e), en prévenant 6 mois avant. À 4 ans, la prochaine échéance est à 6 ans. Le 3e choix oublie la faculté triennale, le 1er l'étend à tout moment.",
    indice: "Les échéances du bail commercial tombent tous les 3 ans."
  },
  {
    id: "U3-148", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Avec 800 visiteurs par mois, un magasin passe d'un taux de transformation de 25 % à 30 % après une formation de l'équipe. Quel commentaire est le mieux justifié ?",
    choix: ["Le taux a augmenté de 5 %, donc les ventes ont augmenté de 5 %.", "Le taux de transformation passe de 25 % à 30 % : avec 800 visiteurs, cela fait 240 ventes au lieu de 200, soit 40 de plus par mois. La formation est efficace : je conseille de la prolonger et de suivre aussi le panier moyen.", "Le taux a augmenté, donc il y a plus de visiteurs.", "Un taux de transformation de 30 % signifie que 30 clients ont acheté."],
    bonne: 1,
    explication: "Ventes avant = 800 × 0,25 = 200\nVentes après = 800 × 0,30 = 240\nHausse = [[240 − 200|200]] = 20 % de ventes en plus, pour une hausse de 5 points du taux. Le 1er choix confond points et pourcentage. Le 3e déduit le trafic du taux, alors que le taux est un rapport ventes sur visiteurs. Le 4e oublie que le taux se rapporte aux 800 visiteurs.",
    indice: "Applique chaque taux aux 800 visiteurs, puis compare les ventes."
  }

);

// ==============================================================
//  DOSSIERS LONGS « FAÇON SUJET » : CAS-U3-03 à CAS-U3-07
// ==============================================================

CAS.push({
  id: "CAS-U3-03",
  epreuve: "U3",
  titre: "Optique du Marché : prix, marges et seuil",
  contexte: "Optique du Marché est une SARL de centre-ville dirigée par Mme Vidal. Elle réalise 480 000 € HT de chiffre d'affaires par an. La gérante prépare son budget de l'an prochain : elle veut vérifier ses marges, mesurer son seuil de rentabilité et savoir si elle peut embaucher un opticien de plus.",
  annexe: { titre: "Annexe 1 : une monture et une paire de verres progressifs (TVA 20 %)", colonnes: ["", "Achat HT (€)", "Vente TTC (€)"], lignes: [["Monture (moyenne)", "55", "198"], ["Paire de verres progressifs", "110", "420"]] }
});
QUESTIONS.push(
  {
    id: "U3-149", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "complément",
    cas: "CAS-U3-03", etape: 1, type: "calcul",
    question: "Calcule le prix de vente HT d'une monture (annexe 1).",
    reponse: { valeur: 165, unite: "€ HT", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [ { valeur: 237.6, type: "ht-ttc" } ],
    explication: "PV HT = [[198|1,2]] = 165 € HT\nLe prix affiché est TTC : on retire la TVA avant tout calcul de marge.",
    indice: "Le prix affiché contient la TVA de 20 %. Divise par 1,2."
  },
  {
    id: "U3-150", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément",
    cas: "CAS-U3-03", etape: 2, type: "calcul",
    question: "Calcule le taux de marque de la monture, arrondi à 0,1 %.",
    reponse: { valeur: 66.7, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [ { valeur: 72.2, type: "ht-ttc" }, { valeur: 200, type: "marque-marge" } ],
    explication: "Marge brute = 165 − 55 = 110 €\nTaux de marque = [[110|165]] × 100 = 66,7 %\nSur 100 € de vente HT, il reste 66,70 € pour payer les charges et dégager le résultat.",
    indice: "Le taux de marque se calcule sur le prix de vente HT, pas sur le TTC ni sur l'achat."
  },
  {
    id: "U3-151", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément",
    cas: "CAS-U3-03", etape: 3, type: "calcul",
    question: "Calcule le taux de marge des verres progressifs, arrondi à 0,1 %.",
    reponse: { valeur: 218.2, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [ { valeur: 68.6, type: "marque-marge" }, { valeur: 281.8, type: "ht-ttc" } ],
    explication: "PV HT = [[420|1,2]] = 350 €\nMarge brute = 350 − 110 = 240 €\nTaux de marge = [[240|110]] × 100 = 218,2 %\nLe taux de marge se calcule sur le coût d'achat et peut dépasser 100 %.",
    indice: "Retire la TVA du prix, calcule la marge, puis divise par le coût d'achat HT."
  },
  {
    id: "U3-152", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 4, type: "calcul",
    annexe: { titre: "Annexe 2 : les charges de l'année (€ HT)", colonnes: ["", "Montant (€)"], lignes: [["Chiffre d'affaires HT", "480 000"], ["Charges variables (achats, commissions)", "192 000"], ["Charges fixes (loyer, salaires, assurances)", "216 000"]] },
    question: "Calcule le seuil de rentabilité du magasin (annexe 2), à l'euro près.",
    reponse: { valeur: 360000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 540000, type: "notion", message: "Tu as divisé par le taux de charges variables (40 %). Le seuil se calcule avec le taux de marge sur coût variable : MCV / CA." },
      { valeur: 408000, type: "notion", message: "C'est le total des charges. Le seuil est le CA qui couvre les charges fixes : charges fixes divisées par le taux de MCV." }
    ],
    explication: "Marge sur coût variable = 480 000 − 192 000 = 288 000 €\nTaux de MCV = [[288 000|480 000]] = 0,60, soit 60 %\nSeuil de rentabilité = [[charges fixes|taux de MCV]] = [[216 000|0,60]] = 360 000 € HT",
    indice: "Calcule d'abord le taux de marge sur coût variable, puis divise les charges fixes par ce taux."
  },
  {
    id: "U3-153", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 5, type: "calcul",
    question: "En supposant une activité régulière, au bout de combien de mois le point mort est-il atteint ?",
    reponse: { valeur: 9, unite: "mois", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 16, type: "notion", message: "Tu as divisé le CA par le seuil. C'est SR / CA qui donne la fraction de l'année : elle est plus petite que 1." },
      { valeur: 0.75, type: "mois", message: "0,75, c'est la fraction de l'année. Pour avoir un nombre de mois, multiplie-la par 12." }
    ],
    explication: "Point mort = [[SR|CA]] × 12 mois = [[360 000|480 000]] × 12 = 0,75 × 12 = 9 mois\nSoit fin septembre.",
    indice: "Quelle fraction du CA annuel représente le seuil ? Applique-la aux 12 mois."
  },
  {
    id: "U3-154", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 6,
    question: "Commente le seuil de rentabilité du magasin : quel commentaire est le mieux rédigé ?",
    choix: ["Le seuil de rentabilité est de 360 000 €, donc le magasin est rentable.", "Le seuil de 360 000 € représente 75 % du CA : le point mort tombe fin septembre. La marge de sécurité est de 120 000 €, soit 25 % du CA : le magasin est rentable et peut supporter une baisse de CA de 25 % avant de perdre de l'argent.", "Le seuil est inférieur au CA de 120 000 € : le magasin dégage donc 120 000 € de bénéfice.", "Le seuil représente 75 % du CA, ce qui est très élevé : le magasin est en danger."],
    bonne: 1,
    explication: "Marge de sécurité = 480 000 − 360 000 = 120 000 €\nIndice de sécurité = [[120 000|480 000]] = 25 %\nLe 1er choix est vrai mais sans chiffre ni comparaison. Le 3e confond marge de sécurité et bénéfice : le résultat actuel est de 288 000 − 216 000 = 72 000 €. Le 4e interprète à tort : 75 % laisse 25 % de marge de sécurité.",
    indice: "Un bon commentaire compare le seuil au CA, chiffre la marge de sécurité et conclut."
  },
  {
    id: "U3-155", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 7, type: "calcul",
    contexte: "La gérante envisage d'embaucher un opticien : le poste coûterait 33 000 € par an (salaire et cotisations).",
    question: "Calcule le nouveau seuil de rentabilité si ce coût s'ajoute aux charges fixes.",
    reponse: { valeur: 415000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 393000, type: "notion", message: "Tu as ajouté 33 000 € au seuil. Le coût s'ajoute aux charges fixes, et chaque euro de charge fixe demande plus d'un euro de CA." },
      { valeur: 622500, type: "notion", message: "Tu as divisé par le taux de charges variables (40 %). Garde le taux de marge sur coût variable de l'étape 4 : 60 %." }
    ],
    explication: "Nouvelles charges fixes = 216 000 + 33 000 = 249 000 €\nNouveau SR = [[249 000|0,60]] = 415 000 € HT\nChaque euro de charge fixe en plus demande [[1|0,60]] ≈ 1,67 € de CA en plus.",
    indice: "Ajoute le coût du poste aux charges fixes, puis refais le calcul avec le même taux de MCV."
  },
  {
    id: "U3-156", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 8,
    contexte: "Selon la gérante, l'embauche ferait gagner 40 000 € de CA par an.",
    question: "Que conseilles-tu à Mme Vidal au sujet de l'embauche ?",
    choix: ["Embaucher : le CA augmentera et le magasin sera plus rentable.", "Embaucher : le nouveau seuil de 415 000 € reste inférieur au CA de 520 000 €, donc la situation s'améliore.", "Ne pas embaucher : un salarié coûte toujours plus qu'il ne rapporte.", "Ne pas embaucher dans ces conditions : les 40 000 € de CA en plus apportent 24 000 € de marge, pour un coût de 33 000 €, donc le résultat baisse de 9 000 € (de 72 000 € à 63 000 €). Il faudrait 55 000 € de CA en plus pour couvrir le poste."],
    bonne: 3,
    explication: "Marge apportée = 40 000 × 0,60 = 24 000 €, pour un coût de 33 000 €\nRésultat actuel = 480 000 × 0,60 − 216 000 = 72 000 €\nRésultat avec l'embauche = 520 000 × 0,60 − 249 000 = 63 000 €\nCA nécessaire pour couvrir le poste = [[33 000|0,60]] = 55 000 €\nLe 2e choix compare le seuil au CA sans regarder le résultat, qui baisse tout de même. Le 1er ne chiffre rien et le 3e est une règle générale fausse.",
    indice: "Compare la marge que rapporte le CA en plus au coût du poste."
  }
);
CAS.push({
  id: "CAS-U3-04",
  epreuve: "U3",
  titre: "Optique Lumière : lire le compte de résultat avant d'emprunter",
  contexte: "Optique Lumière est une SARL indépendante dirigée par M. Garnier. Le gérant veut ouvrir un deuxième point de vente et va voir sa banque. Tu analyses son compte de résultat, puis sa capacité à emprunter.",
  annexe: { titre: "Annexe 1 : compte de résultat de l'exercice (en €)", colonnes: ["", "Montant (€)"], lignes: [["Ventes de marchandises", "520 000"], ["Achats de marchandises", "182 000"], ["Stock initial de marchandises", "48 000"], ["Stock final de marchandises", "56 000"], ["Autres achats et charges externes", "96 000"], ["Impôts et taxes", "9 000"], ["Charges de personnel", "168 000"], ["Dotations aux amortissements", "24 000"], ["Charges financières (intérêts d'emprunt)", "6 000"], ["Impôt sur les bénéfices", "8 000"]] }
});
QUESTIONS.push(
  {
    id: "U3-157", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 1, type: "calcul",
    question: "Calcule le coût d'achat des marchandises vendues (achats + stock initial − stock final).",
    reponse: { valeur: 174000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Coût d'achat des marchandises vendues = achats + stock initial − stock final\n= 182 000 + 48 000 − 56 000 = 174 000 €\nLe stock a augmenté de 8 000 € : une partie des achats n'a pas été vendue.",
    indice: "Les achats ne sont pas tous vendus : ajoute le stock du début et retire celui de la fin."
  },
  {
    id: "U3-158", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 2, type: "calcul",
    question: "Calcule la marge commerciale.",
    reponse: { valeur: 346000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 338000, type: "notion", message: "Tu as retiré les achats de l'année. La marge commerciale se calcule avec le coût d'achat des marchandises VENDUES (étape 1)." },
      { valeur: 330000, type: "notion", message: "La variation de stock est prise à l'envers. Coût d'achat des marchandises vendues = achats + stock initial − stock final." }
    ],
    explication: "Marge commerciale = ventes − coût d'achat des marchandises vendues = 520 000 − 174 000 = 346 000 €",
    indice: "Ventes moins coût d'achat des marchandises vendues."
  },
  {
    id: "U3-159", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément",
    cas: "CAS-U3-04", etape: 3, type: "calcul",
    question: "Calcule le taux de marque commercial du magasin, arrondi à 0,1 %.",
    reponse: { valeur: 66.5, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [ { valeur: 198.9, type: "marque-marge" } ],
    explication: "Taux de marque = [[marge commerciale|ventes HT]] × 100 = [[346 000|520 000]] × 100 = 66,5 %\nSur 100 € de ventes HT, il reste 66,50 € pour payer les charges.",
    indice: "Divise la marge par les ventes HT, pas par le coût d'achat."
  },
  {
    id: "U3-160", difficulte: "difficile", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 4, type: "calcul",
    question: "Calcule l'excédent brut d'exploitation (EBE).",
    reponse: { valeur: 73000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: 49000, type: "notion", message: "C'est le résultat d'exploitation : tu as aussi retiré les dotations. L'EBE se calcule avant les amortissements." },
      { valeur: 82000, type: "notion", message: "Il manque les impôts et taxes (9 000 €). L'EBE retire de la valeur ajoutée les impôts et taxes puis les charges de personnel." }
    ],
    explication: "Valeur ajoutée = marge commerciale − autres achats et charges externes = 346 000 − 96 000 = 250 000 €\nEBE = valeur ajoutée − impôts et taxes − charges de personnel\n= 250 000 − 9 000 − 168 000 = 73 000 €\nL'EBE mesure ce que l'exploitation dégage avant amortissements, frais financiers et impôt.",
    indice: "Passe par la valeur ajoutée, puis retire impôts, taxes et personnel."
  },
  {
    id: "U3-161", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 5, type: "calcul",
    question: "Calcule le résultat net de l'exercice.",
    reponse: { valeur: 35000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: 43000, type: "notion", message: "C'est le résultat avant impôt. Le résultat net retire encore l'impôt sur les bénéfices." },
      { valeur: 41000, type: "notion", message: "Il manque les charges financières. Les intérêts d'emprunt (6 000 €) se retirent avant l'impôt." }
    ],
    explication: "Résultat d'exploitation = EBE − dotations = 73 000 − 24 000 = 49 000 €\nRésultat courant avant impôts = 49 000 − 6 000 = 43 000 €\nRésultat net = 43 000 − 8 000 = 35 000 €",
    indice: "Retire de l'EBE les dotations, puis les intérêts, puis l'impôt."
  },
  {
    id: "U3-162", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 6, type: "calcul",
    question: "Calcule la capacité d'autofinancement (CAF).",
    reponse: { valeur: 59000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 11000, type: "notion", message: "Tu as retiré les dotations. Elles ne font sortir aucun argent : on les rajoute au résultat net." },
      { valeur: 35000, type: "notion", message: "C'est le résultat net seul. La CAF y rajoute les dotations aux amortissements, une charge qui ne sort pas d'argent." }
    ],
    explication: "CAF = résultat net + dotations aux amortissements = 35 000 + 24 000 = 59 000 €\nLes dotations sont une charge qui ne sort pas d'argent : on les rajoute au résultat.",
    indice: "Une charge calculée comme l'amortissement n'est pas décaissée."
  },
  {
    id: "U3-163", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 7, type: "calcul",
    annexe: { titre: "Annexe 2 : situation financière", colonnes: ["", "Montant (€)"], lignes: [["Dettes financières", "150 000"], ["Capitaux propres", "180 000"], ["Annuité d'emprunt actuelle", "18 000"]] },
    question: "Calcule la capacité de remboursement : dettes financières divisées par CAF, en années (arrondi à 0,1).",
    reponse: { valeur: 2.5, unite: "ans", decimales: 1, tolerance: 0.05, signe: false },
    erreurs: [
      { valeur: 0.4, type: "notion", message: "Tu as divisé la CAF par les dettes. C'est l'inverse : dettes financières / CAF donne un nombre d'années." },
      { valeur: 8.3, type: "notion", message: "Tu as divisé par l'annuité d'emprunt. Le ratio se calcule avec la CAF de l'étape précédente." },
      { valeur: 4.3, type: "notion", message: "Tu as divisé par le résultat net. Le ratio se calcule avec la CAF, qui rajoute les dotations au résultat." }
    ],
    explication: "Capacité de remboursement = [[dettes financières|CAF]] = [[150 000|59 000]] = 2,5 ans\nAvec la CAF actuelle, le magasin rembourserait toutes ses dettes en 2,5 ans.",
    indice: "Dettes financières divisées par la CAF annuelle."
  },
  {
    id: "U3-164", difficulte: "difficile", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 8,
    question: "Commente la situation actuelle du magasin : quel commentaire est le mieux rédigé ?",
    choix: ["La CAF est égale au résultat net, soit 35 000 €, donc elle ne couvre pas les annuités.", "L'EBE est de 73 000 €, donc le magasin est rentable.", "L'EBE de 73 000 € représente environ 14 % du CA. La CAF de 59 000 € couvre plus de 3 fois l'annuité actuelle (18 000 €) et les dettes se rembourseraient en 2,5 ans de CAF : le magasin est sain et peut envisager un nouvel emprunt.", "Le résultat net de 35 000 € est faible comparé aux ventes : le magasin ne peut pas emprunter."],
    bonne: 2,
    explication: "EBE sur CA = [[73 000|520 000]] ≈ 14 %\nCAF sur annuité = [[59 000|18 000]] ≈ 3,3\nLa CAF s'obtient en ajoutant les dotations au résultat net : 35 000 + 24 000. Le 2e choix ne chiffre presque rien et le 4e conclut sans regarder la CAF. Le bon commentaire donne les chiffres, les compare et conclut.",
    indice: "Compare la CAF à l'annuité, puis regarde en combien d'années les dettes se rembourseraient."
  },
  {
    id: "U3-165", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-04", etape: 9, type: "calcul",
    contexte: "Le projet coûte 120 000 €, financés à 100 % par un emprunt de 7 ans à 5 % (annuité constante de 20 738 €).",
    question: "Calcule le ratio d'endettement après le projet (arrondi à 0,01).",
    reponse: { valeur: 1.5, unite: "", decimales: 2, tolerance: 0.01, signe: false },
    explication: "Dettes financières après le projet = 150 000 + 120 000 = 270 000 €\nRatio d'endettement = [[dettes financières|capitaux propres]] = [[270 000|180 000]] = 1,5\nAvant le projet : [[150 000|180 000]] = 0,83.",
    indice: "Ajoute le nouvel emprunt aux dettes, puis divise par les capitaux propres."
  },
  {
    id: "U3-166", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-04", etape: 10,
    question: "Que conseilles-tu à M. Garnier pour son projet d'emprunt ?",
    choix: ["Emprunter les 120 000 € : la CAF de 59 000 € est supérieure à chaque annuité.", "La CAF permet de rembourser : les deux annuités (18 000 + 20 738 = 38 738 €) représentent environ 66 % de la CAF. Mais le ratio d'endettement passerait de 0,83 à 1,5, au-dessus de 1 : la banque hésitera. Je conseille de réduire l'emprunt en apportant des fonds propres ou en négociant un autofinancement partiel.", "Ne pas ouvrir le deuxième point de vente : un emprunt supplémentaire est toujours risqué.", "Emprunter, mais sur 3 ans pour rembourser vite."],
    bonne: 1,
    explication: "Annuités cumulées = 18 000 + 20 738 = 38 738 €\nPart de la CAF = [[38 738|59 000]] ≈ 66 %\nRatio d'endettement = 1,5 : au-dessus de 1, la banque trouvera le magasin très endetté.\nLe 1er choix ignore le ratio et compare la CAF à chaque annuité séparément : il faut les additionner. Le 3e refuse sans calcul. Le 4e augmenterait fortement les annuités.",
    indice: "Regarde à la fois la capacité de remboursement (CAF) et le niveau d'endettement (ratio)."
  }
);
CAS.push({
  id: "CAS-U3-05",
  epreuve: "U3",
  titre: "Optique du Port : racheter le fonds d'un confrère",
  contexte: "Mme Roche, opticienne salariée depuis 8 ans, veut racheter le magasin « Optique du Port », exploité par M. Lemaire qui part à la retraite. Elle te demande de préparer l'opération : prix, financement, contrat du salarié en place et bail.",
  annexe: { titre: "Annexe 1 : le magasin à reprendre", colonnes: ["", "Information"], lignes: [["CA annuel HT", "410 000 €"], ["Valeur du fonds (usage de la profession)", "70 % du CA annuel HT"], ["Frais d'acte et honoraires", "9 000 €"], ["Besoin en fonds de roulement de démarrage", "14 000 €"], ["Apport personnel de Mme Roche", "90 000 €"], ["Salarié en place", "1 opticien en CDI, 4 ans d'ancienneté"], ["Bail commercial", "signé en 2022 pour 9 ans, loyer de 24 000 € par an"], ["Clause de l'acte de vente", "M. Lemaire s'interdit d'ouvrir un magasin d'optique à moins de 5 km pendant 5 ans"]] }
});
QUESTIONS.push(
  {
    id: "U3-167", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-05", etape: 1, type: "calcul",
    question: "Calcule la valeur du fonds de commerce (annexe 1).",
    reponse: { valeur: 287000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Valeur du fonds = 410 000 × 70 % = 410 000 × 0,70 = 287 000 €\nLe fonds de commerce comprend la clientèle, l'enseigne, le droit au bail, le matériel et le stock commercial.",
    indice: "70 % du CA annuel HT."
  },
  {
    id: "U3-168", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-05", etape: 2, type: "calcul",
    question: "Quel emprunt faut-il pour équilibrer le plan de financement ? Emplois : fonds, frais d'acte, BFR de démarrage. Ressources : apport personnel et emprunt.",
    reponse: { valeur: 220000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Emplois = 287 000 + 9 000 + 14 000 = 310 000 €\nRessources connues = apport de 90 000 €\nEmprunt = 310 000 − 90 000 = 220 000 €\nUn plan de financement est équilibré quand emplois et ressources sont égaux.",
    indice: "Additionne les emplois, retire l'apport : le reste est à emprunter."
  },
  {
    id: "U3-169", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-05", etape: 3, type: "calcul",
    question: "Calcule l'annuité constante d'un emprunt de 220 000 € sur 10 ans à 4 %, à l'euro près. Formule : capital × taux / (1 − (1 + taux)^−n).",
    reponse: { valeur: 27124, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: -18324, type: "notion", message: "Tu as calculé 1,04 puissance 10. L'exposant est −10 : 1,04^−10 ≈ 0,676, donc le dénominateur vaut environ 0,324." },
      { valeur: 18324, type: "notion", message: "Tu as calculé 1,04 puissance 10. L'exposant est −10 : 1,04^−10 ≈ 0,676, donc le dénominateur vaut environ 0,324." },
      { valeur: 8799, type: "notion", message: "Il manque des parenthèses : tu as divisé par 1 seulement. Mets tout le dénominateur entre parenthèses : (1 − 1,04^−10)." },
      { valeur: 880000, type: "notion", message: "Tu as pris 4 au lieu de 0,04 pour le taux. Dans la formule, 4 % s'écrit 0,04." }
    ],
    explication: "Annuité = [[220 000 × 0,04|1 − 1,04^−10]] = [[8 800|1 − 0,675564]] = [[8 800|0,324436]] = 27 124 €\nChaque année, Mme Roche paiera 27 124 €, intérêts et capital compris.",
    indice: "Utilise la formule avec une calculatrice : attention aux parenthèses et à l'exposant −10."
  },
  {
    id: "U3-170", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-05", etape: 4, type: "calcul",
    question: "Calcule les intérêts de la 1re année de cet emprunt.",
    reponse: { valeur: 8800, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 27124, type: "notion", message: "Tu as donné l'annuité entière. Elle contient aussi du capital remboursé : les intérêts, c'est 4 % du capital restant dû." } ],
    explication: "Intérêts de l'année 1 = capital restant dû × taux = 220 000 × 4 % = 8 800 €\nCapital remboursé la 1re année = 27 124 − 8 800 = 18 324 €. Seuls les intérêts sont une charge ; le capital remboursé ne l'est pas.",
    indice: "Les intérêts se calculent sur le capital restant dû, ici le capital entier."
  },
  {
    id: "U3-171", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-05", etape: 5, type: "calcul",
    contexte: "La CAF prévisionnelle du magasin repris est de 48 000 € par an.",
    question: "Quelle part de la CAF prévisionnelle l'annuité représente-t-elle ? (arrondi à 0,1 %)",
    reponse: { valeur: 56.5, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    explication: "Part de la CAF = [[annuité|CAF]] × 100 = [[27 124|48 000]] × 100 = 56,5 %\nLe magasin pourra rembourser, mais il restera 43,5 % de la CAF pour investir et faire face aux imprévus.",
    indice: "Divise l'annuité par la CAF prévisionnelle."
  },
  {
    id: "U3-172", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-05", etape: 6,
    question: "Quelle est la conséquence de la vente du magasin pour le salarié en place ?",
    choix: ["Son contrat prend fin à la vente : il doit être réembauché s'il le souhaite.", "M. Lemaire doit le licencier avant la vente, avec une indemnité.", "Son contrat continue automatiquement avec Mme Roche, aux mêmes conditions et avec ses 4 ans d'ancienneté : elle ne peut pas le refuser ni le modifier sans l'accord du salarié.", "Mme Roche peut choisir de le garder ou non, sans conséquence."],
    bonne: 2,
    explication: "Quand l'entreprise change d'employeur (vente, fusion), les contrats de travail en cours passent de plein droit au nouvel employeur (Code du travail, article L1224-1). Le salarié garde son ancienneté et ses conditions. Les trois autres choix imaginent une rupture ou un choix de l'acheteur, que la loi ne prévoit pas.",
    indice: "Le contrat suit l'entreprise, pas son ancien propriétaire."
  },
  {
    id: "U3-173", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-05", etape: 7,
    question: "M. Lemaire ouvre un magasin d'optique à 2 km, 6 mois après la vente. Que peut faire Mme Roche ?",
    choix: ["La clause est valable tant qu'elle reste limitée et proportionnée (ici 5 ans et 5 km, que le juge apprécie) : la contrepartie est le prix du fonds. Mme Roche peut agir en justice pour faire cesser la concurrence et obtenir des dommages et intérêts.", "Rien : une clause de non-concurrence est nulle sans contrepartie financière versée à M. Lemaire.", "Rien : un vendeur garde toujours le droit de se réinstaller.", "Elle peut seulement baisser ses prix pour résister."],
    bonne: 0,
    explication: "Dans une vente de fonds de commerce, le vendeur s'engage à ne pas détourner la clientèle vendue. Cette clause est valable si sa durée, son périmètre et son activité sont limités et proportionnés ; la contrepartie est le prix payé. Il ne faut pas confondre avec la clause de non-concurrence d'un salarié, qui exige une contrepartie financière propre.",
    indice: "Pense à ce que Mme Roche a payé : la clientèle."
  },
  {
    id: "U3-174", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-05", etape: 8,
    question: "Que devient le bail commercial signé en 2022 par M. Lemaire ?",
    choix: ["Le bail s'arrête à la vente : Mme Roche doit négocier un nouveau bail de 9 ans.", "Le bail est cédé avec le fonds : Mme Roche le reprend aux conditions actuelles, pour la durée restant à courir (jusqu'en 2031). Le bailleur ne peut pas interdire la cession à l'acquéreur du fonds.", "Le propriétaire peut refuser librement et imposer un nouveau loyer.", "Le bail devient un bail précaire de 3 ans."],
    bonne: 1,
    explication: "Le droit au bail fait partie du fonds de commerce : il est cédé avec lui. Un bail de 9 ans signé en 2022 court jusqu'en 2031. Le bailleur doit être informé et peut vérifier la cession, mais ne peut pas la refuser pour imposer de nouvelles conditions.",
    indice: "Le droit au bail est un des éléments du fonds de commerce."
  },
  {
    id: "U3-175", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-05", etape: 9,
    question: "Que conseilles-tu à Mme Roche ?",
    choix: ["Acheter en soignant le financement : l'annuité de 27 124 € représente environ 56,5 % de la CAF prévisionnelle, possible mais serrée. Je conseille d'allonger l'emprunt à 12 ans ou d'augmenter l'apport pour garder de la marge, et de vérifier le CA du magasin sur 3 ans.", "Acheter sans condition : l'annuité de 27 124 € est inférieure à la CAF de 48 000 €.", "Acheter : le fonds vaut 287 000 €, moins que son CA annuel de 410 000 €.", "Ne pas acheter : un emprunt de 220 000 € est trop élevé pour une opticienne salariée."],
    bonne: 0,
    explication: "Annuité sur CAF = [[27 124|48 000]] = 56,5 %\nLe projet est possible mais serré : une baisse de CA suffirait à fragiliser le remboursement.\nLe 2e choix ne regarde que la CAF sans marge de sécurité. Le 3e compare à tort un prix de vente et un CA. Le 4e refuse sans argument chiffré.",
    indice: "Compare l'annuité à la CAF, puis cherche comment garder de la marge."
  }
);
CAS.push({
  id: "CAS-U3-06",
  epreuve: "U3",
  titre: "Optique Horizon : ouvrir un second point de vente",
  contexte: "Optique Horizon est une SARL indépendante, dirigée par M. Perrin. Il envisage d'ouvrir un second point de vente dans une commune voisine. Tu étudies le marché de la commune, une action de lancement, puis la rentabilité du projet.",
  annexe: { titre: "Annexe 1 : la zone de chalandise de la commune", colonnes: ["", "Donnée"], lignes: [["Habitants", "18 000"], ["Porteurs de correction", "66 %"], ["Panier moyen par équipement", "340 € TTC"], ["Renouvellement", "tous les 2 ans"], ["IDC (indice de disparité de la consommation)", "92"], ["Évasion commerciale", "10 %"], ["Magasins d'optique déjà installés", "5"], ["Référence du département", "3 magasins pour 10 000 habitants"]] }
});
QUESTIONS.push(
  {
    id: "U3-176", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 1, type: "calcul",
    question: "Calcule le marché potentiel annuel de la commune.",
    reponse: { valeur: 2019600, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 4039200, type: "notion", message: "C'est la dépense d'un cycle de 2 ans. Un porteur ne renouvelle ses lunettes que tous les 2 ans : divise par 2 pour avoir une année." },
      { valeur: 3060000, type: "notion", message: "Tu as compté tous les habitants. Seuls les porteurs de correction (66 %) achètent un équipement." }
    ],
    explication: "Porteurs = 18 000 × 0,66 = 11 880\nDépense d'un cycle de 2 ans = 11 880 × 340 = 4 039 200 €\nPar an : [[4 039 200|2]] = 2 019 600 € TTC",
    indice: "Porteurs × panier moyen, puis ramène à une année avec le rythme de renouvellement."
  },
  {
    id: "U3-177", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 2, type: "calcul",
    question: "Calcule le marché net, après l'IDC et l'évasion commerciale (à l'euro près).",
    reponse: { valeur: 1672229, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 1858032, type: "notion", message: "Tu t'es arrêté à l'IDC. Il reste à retirer les 10 % d'évasion commerciale." },
      { valeur: 1817640, type: "notion", message: "Tu as oublié l'IDC. Le marché se corrige d'abord par l'IDC (92/100), puis par l'évasion." },
      { valeur: 185803, type: "notion", message: "Tu as gardé les 10 % d'évasion. L'évasion est la part des achats faite ailleurs : il reste 90 % du marché." }
    ],
    explication: "Marché ajusté par l'IDC = 2 019 600 × [[92|100]] = 1 858 032 €\nMarché net de l'évasion = 1 858 032 × (1 − 0,10) = 1 672 228,80 €, soit 1 672 229 € TTC\nOn multiplie les deux ajustements l'un après l'autre.",
    indice: "Applique l'IDC (92/100), puis retire 10 % d'évasion sur le résultat."
  },
  {
    id: "U3-178", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 3, type: "calcul",
    question: "Le magasin vise 12 % du marché net. Calcule son CA prévisionnel HT (à l'euro près).",
    reponse: { valeur: 167223, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 200667, type: "ht-ttc" }, { valeur: 240801, type: "ht-ttc" } ],
    explication: "Part de marché = 1 672 229 × 0,12 = 200 667 € TTC\nEn HT : [[200 667|1,2]] = 167 223 € HT\nOn finit toujours par passer du TTC au HT : un CA d'entreprise se donne HT.",
    indice: "Applique 12 % au marché net, puis retire la TVA."
  },
  {
    id: "U3-179", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 4, type: "calcul",
    question: "Combien de magasins d'optique y a-t-il pour 10 000 habitants dans la commune ? (arrondi à 0,1)",
    reponse: { valeur: 2.8, unite: "magasins", decimales: 1, tolerance: 0.05, signe: false },
    explication: "Densité = [[5|18 000]] × 10 000 = 2,8 magasins pour 10 000 habitants\nOn ramène toujours à 10 000 habitants pour comparer avec une référence.",
    indice: "Magasins divisés par habitants, multipliés par 10 000."
  },
  {
    id: "U3-180", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 5,
    question: "Commente la concurrence dans la commune : quel commentaire est le mieux rédigé ?",
    choix: ["La commune compte 2,8 magasins pour 10 000 habitants, un peu moins que les 3 du département : la zone est un peu moins dense que la moyenne, donc la concurrence reste modérée. Avec l'ouverture du 6e magasin, la densité passerait à 3,3, au-dessus de la référence : il faudra se différencier.", "Il y a 5 magasins : la concurrence est trop forte, il ne faut pas ouvrir.", "2,8 est inférieur à 3 : la zone est plus concurrentielle que la moyenne.", "La densité est de 2,8 % : le marché est presque vide."],
    bonne: 0,
    explication: "Une densité se compare à une référence : 2,8 contre 3, soit un peu moins dense que la moyenne. Le 2e choix compte les magasins sans les rapporter à la population. Le 3e inverse le sens de la comparaison (moins de magasins, donc moins de concurrence). Le 4e prend la densité pour un pourcentage.",
    indice: "Compare 2,8 à la référence de 3, puis dis ce que cela signifie pour un nouvel entrant."
  },
  {
    id: "U3-181", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    cas: "CAS-U3-06", etape: 6, type: "calcul",
    contexte: "Pour le lancement, le magasin envoie 3 000 courriers à 0,70 € l'unité. Il espère un taux de réponse de 3,5 %.",
    question: "Combien de clients le magasin espère-t-il toucher grâce à ce courrier ?",
    reponse: { valeur: 105, unite: "clients", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Clients attendus = 3 000 × 3,5 % = 3 000 × 0,035 = 105 clients",
    indice: "Courriers envoyés multipliés par le taux de réponse."
  },
  {
    id: "U3-182", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    cas: "CAS-U3-06", etape: 7, type: "calcul",
    question: "Quel est le coût moyen de l'action par client touché ?",
    reponse: { valeur: 20, unite: "€", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 0.7, type: "notion", message: "0,70 €, c'est le coût d'un courrier. On demande le coût par client touché : coût total de l'envoi divisé par les 105 clients." }
    ],
    explication: "Coût de la campagne = 3 000 × 0,70 = 2 100 €\nCoût par client = [[2 100|105]] = 20 €\nCe coût se compare à la marge que laisse un client qui revient : si elle dépasse 20 €, l'action est rentable.",
    indice: "Coût total de l'envoi divisé par le nombre de clients touchés."
  },
  {
    id: "U3-183", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-06", etape: 8, type: "calcul",
    annexe: { titre: "Annexe 2 : prévisions du point de vente", colonnes: ["", "Valeur"], lignes: [["CA prévisionnel HT (étape 3)", "167 223 €"], ["Taux de marge sur coût variable", "55 %"], ["Charges fixes annuelles", "66 000 €"]] },
    question: "Calcule le seuil de rentabilité du point de vente, à l'euro près.",
    reponse: { valeur: 120000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 146667, type: "notion", message: "Tu as divisé par 45 %, le taux de charges variables. Le seuil se calcule avec le taux de marge sur coût variable : 55 %." },
      { valeur: 36300, type: "notion", message: "Tu as multiplié les charges fixes par le taux de MCV. Le seuil s'obtient en divisant : charges fixes / taux de MCV." }
    ],
    explication: "Seuil de rentabilité = [[charges fixes|taux de MCV]] = [[66 000|0,55]] = 120 000 € HT",
    indice: "Charges fixes divisées par le taux de marge sur coût variable."
  },
  {
    id: "U3-184", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-06", etape: 9,
    question: "Commente la rentabilité prévue du point de vente : quel commentaire est le mieux rédigé ?",
    choix: ["Le seuil de rentabilité est de 120 000 €, donc le projet est rentable.", "Le seuil est inférieur au CA de 47 223 € : le projet dégage donc 47 223 € de bénéfice.", "Le seuil de 120 000 € HT représente 72 % du CA prévu (167 223 €) : le point mort est atteint au bout d'environ 8,6 mois d'activité (septembre si le magasin ouvre le 1er janvier). La marge de sécurité est de 47 223 €, soit 28 % du CA : le projet est rentable si le CA prévu est atteint.", "Le seuil représente 72 % du CA : le projet est trop risqué pour être lancé."],
    bonne: 2,
    explication: "Point mort = [[120 000|167 223]] × 12 ≈ 8,6 mois\nMarge de sécurité = 167 223 − 120 000 = 47 223 €, soit [[47 223|167 223]] = 28 %\nLe 1er choix ne chiffre rien. Le 2e confond marge de sécurité et bénéfice. Le 4e conclut sans comparer à un repère.",
    indice: "Compare le seuil au CA prévu : marge de sécurité, date du point mort, conclusion."
  },
  {
    id: "U3-185", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-06", etape: 10,
    question: "Que conseilles-tu à M. Perrin ?",
    choix: ["Ouvrir : le CA prévu de 167 223 € dépasse le seuil de 120 000 €.", "Ouvrir seulement si le magasin peut atteindre plus de 8,6 % de part de marché : à 8 %, le CA serait de 111 482 € HT, en dessous du seuil de 120 000 €, donc en perte. Je conseille de préparer un plan de communication pour viser les 12 % prévus, et de suivre la part de marché chaque trimestre.", "Ne pas ouvrir : il y a déjà 5 magasins dans la commune.", "Ouvrir, car 12 % de part de marché est un objectif facile à atteindre."],
    bonne: 1,
    explication: "Part de marché minimale = [[120 000 × 1,2|1 672 229]] = [[144 000|1 672 229]] ≈ 8,6 %\nÀ 8 % : 1 672 229 × 0,08 = 133 778 € TTC, soit [[133 778|1,2]] = 111 482 € HT, en dessous du seuil.\nLe 1er choix ne regarde que l'hypothèse la plus favorable. Le 3e refuse sans comparer avec la densité de la zone. Le 4e promet sans argument.",
    indice: "À quelle part de marché le CA égale-t-il le seuil de 120 000 € ?"
  }
);
CAS.push({
  id: "CAS-U3-07",
  epreuve: "U3",
  titre: "Optique des Quais : la trésorerie du trimestre",
  contexte: "Optique des Quais est une SARL dirigée par Mme Fabre. En mars, elle achète un nouvel équipement de mesure : 36 000 € HT (TVA 20 %), payé comptant. La trésorerie au 1er janvier est de 15 000 €. La gérante te demande de suivre sa trésorerie sur le trimestre.",
  annexe: { titre: "Annexe 1 : budget de trésorerie du trimestre (€)", colonnes: ["", "Janvier", "Février", "Mars"], lignes: [["Encaissements (ventes TTC)", "62 000", "58 000", "66 000"], ["Achats de marchandises TTC", "24 000", "22 000", "26 000"], ["Salaires et cotisations", "20 000", "20 000", "20 000"], ["Loyer", "4 000", "4 000", "4 000"], ["TVA à reverser", "6 000", "5 500", "6 500"], ["Remboursement d'emprunt", "2 000", "2 000", "2 000"], ["Équipement payé (TTC)", "0", "0", "à calculer (étape 1)"]] }
});
QUESTIONS.push(
  {
    id: "U3-186", difficulte: "facile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 1, type: "calcul",
    question: "Calcule le prix TTC de l'équipement.",
    reponse: { valeur: 43200, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 30000, type: "ht-ttc" } ],
    explication: "Prix TTC = 36 000 × 1,2 = 43 200 €\nLa TVA de 7 200 € est payée au fournisseur, puis récupérée sur la TVA collectée.",
    indice: "Ajoute la TVA de 20 % au prix HT."
  },
  {
    id: "U3-187", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 2, type: "calcul",
    question: "Calcule la trésorerie à la fin de janvier (annexe 1).",
    reponse: { valeur: 21000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: 27000, type: "notion", message: "Il manque la TVA à reverser. C'est un décaissement du mois comme les autres." },
      { valeur: 6000, type: "notion", message: "C'est le solde du mois seul. La trésorerie de fin de mois part de la trésorerie au 1er janvier (15 000 €)." }
    ],
    explication: "Décaissements de janvier = 24 000 + 20 000 + 4 000 + 6 000 + 2 000 = 56 000 €\nSolde final = 15 000 + 62 000 − 56 000 = 21 000 €",
    indice: "Solde initial + encaissements − tous les décaissements, TVA reversée comprise."
  },
  {
    id: "U3-188", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 3, type: "calcul",
    question: "Calcule la trésorerie à la fin de février.",
    reponse: { valeur: 25500, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Décaissements de février = 22 000 + 20 000 + 4 000 + 5 500 + 2 000 = 53 500 €\nSolde final = 21 000 + 58 000 − 53 500 = 25 500 €",
    indice: "Le solde de fin janvier est le solde de début de février."
  },
  {
    id: "U3-189", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 4, type: "calcul",
    question: "Calcule la trésorerie à la fin de mars, après l'achat de l'équipement.",
    reponse: { valeur: -10200, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: -3000, type: "ht-ttc", message: "Tu as pris l'équipement hors taxe. Le magasin paie le prix TTC : c'est lui qui sort de la trésorerie." },
      { valeur: 33000, type: "notion", message: "Il manque l'équipement acheté en mars. Ajoute son prix TTC aux décaissements du mois." },
      { valeur: -20700, type: "notion", message: "Tu es reparti de la trésorerie au 1er janvier (15 000 €). Mars commence avec la trésorerie de fin février (étape 3)." },
      { valeur: -14700, type: "notion", message: "Tu es reparti de la trésorerie de fin janvier. Mars commence avec celle de fin février (étape 3)." }
    ],
    explication: "Décaissements de mars = 26 000 + 20 000 + 4 000 + 6 500 + 2 000 + 43 200 = 101 700 €\nSolde final = 25 500 + 66 000 − 101 700 = −10 200 €\nLe signe compte : un solde négatif est un découvert.",
    indice: "N'oublie pas l'équipement TTC de l'étape 1 dans les décaissements de mars. Donne le résultat avec son signe."
  },
  {
    id: "U3-190", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 5, type: "calcul",
    question: "Calcule la dotation aux amortissements de l'exercice, sachant que l'équipement est amorti en linéaire sur 6 ans à partir de sa mise en service le 1er mars (exercice clos le 31 décembre).",
    reponse: { valeur: 5000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 6000, type: "notion", message: "C'est une année pleine sur le HT, ou 10 mois sur le TTC. On amortit le prix HT, au prorata des 10 mois depuis le 1er mars." },
      { valeur: 4500, type: "notion", message: "Tu as compté 9 mois. De mars à décembre inclus, l'équipement sert 10 mois." },
      { valeur: 7200, type: "ht-ttc", message: "Tu as amorti le prix TTC sur une année pleine. On amortit le prix HT (36 000 €), au prorata des 10 mois depuis mars." }
    ],
    explication: "Annuité pleine = [[36 000|6]] = 6 000 € (sur le prix HT)\nDe mars à décembre : 10 mois, soit 6 000 × [[10|12]] = 5 000 €\nLa dotation est une charge calculée : elle n'apparaît pas dans le budget de trésorerie.",
    indice: "Amortis le prix HT, au prorata des mois depuis la mise en service."
  },
  {
    id: "U3-191", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 6,
    question: "Commente l'évolution de la trésorerie : quel commentaire est le mieux rédigé ?",
    choix: ["La trésorerie est négative en mars.", "Le solde passe de +25 500 € fin février à −10 200 € fin mars : l'équipement est payé d'un seul coup (43 200 € TTC) alors que ses effets sur le CA seront étalés. Le magasin sera à découvert en mars alors que son exploitation dégage de la trésorerie chaque mois ; la TVA de 7 200 € payée sur l'équipement sera récupérée ensuite.", "Le magasin est en difficulté : son exploitation perd de l'argent chaque mois.", "Le solde de −10 200 € vient des amortissements de l'équipement."],
    bonne: 1,
    explication: "Janvier : +6 000 €. Février : +4 500 €. L'exploitation dégage donc de la trésorerie chaque mois ; le trou de mars vient de l'achat de 43 200 € TTC. Le 1er choix est vrai sans aucun argument. Le 3e est faux. Le 4e aussi : l'amortissement est une charge calculée, sans sortie d'argent.",
    indice: "Regarde les soldes mois par mois : d'où vient la chute de mars ?"
  },
  {
    id: "U3-192", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 7, type: "calcul",
    question: "Calcule la trésorerie à la fin de mars si le magasin finance l'équipement par un emprunt de 36 000 € versé en mars (avant toute mensualité).",
    reponse: { valeur: 25800, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Solde de mars sans emprunt = −10 200 €\nSolde avec l'emprunt = −10 200 + 36 000 = 25 800 €\nL'emprunt est un encaissement : il compense l'achat de l'équipement.",
    indice: "L'emprunt versé est un encaissement de plus en mars."
  },
  {
    id: "U3-193", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 8,
    question: "Comment la gérante devrait-elle financer l'équipement ?",
    choix: ["Comptant, puisque l'exploitation dégage de la trésorerie chaque mois.", "Par un découvert bancaire, car l'équipement ne servira que quelques mois.", "Par un emprunt sur 5 ans : un bien durable se finance par une ressource durable. Avec 36 000 € empruntés en mars, le solde de mars serait de +25 800 € avant la 1re mensualité. La TVA de 7 200 € payée sur l'équipement sera récupérée ensuite.", "En reportant l'achat d'un an sans étudier d'autre solution."],
    bonne: 2,
    explication: "Un équipement dure plusieurs années : le financer par un découvert (ressource de court terme) est risqué, et le payer comptant provoque un découvert de 10 200 € en mars. L'emprunt à 5 ans adapte la ressource à la durée du bien et garde la trésorerie. Reporter sans étudier n'est pas un conseil argumenté.",
    indice: "Un bien qui dure plusieurs années se finance par une ressource qui dure aussi."
  }
);

// ==============================================================
//  DOSSIERS LONGS (suite) : droit et tableau de bord, CAS-U3-08 à CAS-U3-12
// ==============================================================

CAS.push({
  id: "CAS-U3-08",
  epreuve: "U3",
  titre: "Optique Delmas : rompre un CDI d'un commun accord",
  contexte: "Optique Delmas est une SARL dirigée par Mme Delmas. M. Bastien, opticien salarié en CDI, veut quitter le magasin pour monter son propre projet. Mme Delmas et lui envisagent une rupture conventionnelle. Tu prépares le dossier.",
  annexe: { titre: "Annexe 1 : le salarié et le calendrier", colonnes: ["", "Information"], lignes: [["Ancienneté à la date de rupture prévue", "6 ans et 3 mois"], ["Salaire brut mensuel (stable depuis 12 mois)", "2 400 €"], ["Primes", "aucune"], ["Indemnité proposée par la gérante", "3 000 €"], ["Signature de la convention", "le 2 mars"]] }
});
QUESTIONS.push(
  {
    id: "U3-194", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 1,
    question: "Pourquoi M. Bastien préfère-t-il une rupture conventionnelle à une démission ?",
    choix: ["Elle permet à la gérante de l'imposer sans son accord.", "Elle supprime toute formalité et tout délai.", "Elle lui ouvre en principe droit à l'allocation chômage et à une indemnité de rupture, alors qu'une démission n'ouvre en général aucun de ces droits.", "Elle lui garantit de garder son salaire pendant le chômage."],
    bonne: 2,
    explication: "La rupture conventionnelle est un accord entre les deux parties : personne ne peut l'imposer. Elle suit une procédure (entretien, convention, délai de rétractation, homologation) et ouvre, sous conditions, droit à l'allocation chômage et à une indemnité d'au moins le montant de l'indemnité légale de licenciement. La démission ne les ouvre en général pas.",
    indice: "Une rupture d'un commun accord et une démission n'ont pas les mêmes conséquences sur les droits du salarié."
  },
  {
    id: "U3-195", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 2, type: "calcul",
    question: "Exprime l'ancienneté de M. Bastien en années (6 ans et 3 mois).",
    reponse: { valeur: 6.25, unite: "ans", decimales: 2, tolerance: 0.01, signe: false },
    explication: "Ancienneté = 6 + [[3|12]] = 6 + 0,25 = 6,25 ans\nLes mois comptent proportionnellement dans le calcul de l'indemnité.",
    indice: "3 mois, c'est 3/12 d'année."
  },
  {
    id: "U3-196", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 3, type: "calcul",
    question: "Calcule l'indemnité légale de licenciement de M. Bastien, sachant qu'elle vaut un quart de mois de salaire par année d'ancienneté (jusqu'à 10 ans).",
    reponse: { valeur: 3750, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 5000, type: "notion", message: "Tu as pris un tiers de mois par année. Jusqu'à 10 ans d'ancienneté, c'est un quart de mois." }, { valeur: 3600, type: "notion", message: "Tu as compté seulement les années entières. Les 3 mois comptent au prorata (6,25 ans)." } ],
    explication: "Indemnité = ancienneté × [[1|4]] × salaire mensuel\n= 6,25 × [[1|4]] × 2 400 = 1,5625 × 2 400 = 3 750 €\nC'est le plancher de l'indemnité de rupture conventionnelle.",
    indice: "Ancienneté en années, multipliée par un quart, multipliée par le salaire mensuel."
  },
  {
    id: "U3-197", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 4,
    question: "La gérante propose 3 000 € d'indemnité de rupture. Que lui répondre ?",
    choix: ["Impossible : l'indemnité ne peut pas être inférieure à l'indemnité légale de licenciement, ici 3 750 €.", "Possible : le montant est libre entre les deux parties.", "Possible : l'indemnité est toujours de 1 mois de salaire, soit 2 400 €.", "Impossible : l'indemnité est toujours de 6 mois de salaire."],
    bonne: 0,
    explication: "L'indemnité spécifique de rupture conventionnelle ne peut pas être inférieure à l'indemnité légale de licenciement. Ici, 3 000 € est inférieur à 3 750 € : l'administration refuserait l'homologation. Les parties peuvent négocier un montant supérieur, jamais inférieur.",
    indice: "Compare 3 000 € au plancher calculé à l'étape précédente."
  },
  {
    id: "U3-198", difficulte: "difficile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 5, type: "calcul",
    question: "Calcule l'indemnité légale si M. Bastien avait 12 ans d'ancienneté : un quart de mois par année jusqu'à 10 ans, puis un tiers de mois par année au-delà. Salaire de 2 400 €.",
    reponse: { valeur: 7600, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 7200, type: "notion", message: "Tu as gardé le quart de mois pour les 12 années. Au-delà de 10 ans, c'est un tiers de mois par année." } ],
    explication: "10 premières années : 10 × [[1|4]] = 2,5 mois\n2 années suivantes : 2 × [[1|3]] = 0,667 mois\nTotal = 3,1667 mois × 2 400 = 7 600 €\nAu-delà de 10 ans, chaque année compte davantage.",
    indice: "Deux tranches : jusqu'à 10 ans au quart, puis au tiers."
  },
  {
    id: "U3-199", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 6,
    question: "La convention est signée le mardi 2 mars. Jusqu'à quelle date chaque partie peut-elle se rétracter ?",
    choix: ["Jusqu'au mercredi 17 mars : 15 jours calendaires, qui commencent le lendemain de la signature.", "Jusqu'au 9 mars : 7 jours.", "Jusqu'au 16 mars : 15 jours, en comptant le jour de la signature.", "Jusqu'au 2 avril : un mois."],
    bonne: 0,
    explication: "Le délai de rétractation est de 15 jours calendaires (week-ends compris). Il commence le lendemain de la signature : du 3 au 17 mars inclus. La rétractation se fait par lettre, remise en main propre contre décharge ou envoyée en recommandé.",
    indice: "Les jours sont calendaires : tous les jours comptent. On commence à compter le lendemain."
  },
  {
    id: "U3-200", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 7,
    question: "Après la fin du délai de rétractation, qui doit valider la convention ?",
    choix: ["Le conseil de prud'hommes, qui dispose de 2 mois.", "L'administration (la DREETS), qui dispose de 15 jours ouvrables ; sans réponse, la convention est réputée homologuée.", "Personne : la convention s'applique dès la fin de la rétractation.", "L'inspection du travail, qui dispose d'un an."],
    bonne: 1,
    explication: "Une des parties envoie la demande d'homologation à l'administration (la DREETS), qui a 15 jours ouvrables pour répondre. Son silence vaut accord. Le contrat ne prend fin qu'après l'homologation : jusque-là, M. Bastien reste salarié.",
    indice: "Le contrat ne prend pas fin tout de suite : une administration doit valider."
  },
  {
    id: "U3-201", difficulte: "difficile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-08", etape: 8,
    question: "Que conseilles-tu à Mme Delmas ?",
    choix: ["Accepter la rupture conventionnelle avec une indemnité d'au moins 3 750 €, tenir un entretien, signer la convention, laisser passer les 15 jours de rétractation, puis demander l'homologation : le contrat ne prendra fin qu'après.", "Maintenir 3 000 € : c'est le montant que le magasin peut payer.", "Faire signer à M. Bastien une démission, plus simple et moins chère.", "Le licencier pour faute grave, pour ne payer aucune indemnité."],
    bonne: 0,
    explication: "Le conseil reprend les chiffres (3 750 € minimum, contre 3 000 € proposés) et la procédure complète : entretien, convention, 15 jours de rétractation, homologation. Les autres choix ne respectent pas le plancher légal ou imposeraient un motif que rien n'établit : un faux licenciement pour faute grave serait contesté et coûterait plus cher.",
    indice: "Il faut le montant minimum et les étapes dans l'ordre."
  }
);
CAS.push({
  id: "CAS-U3-09",
  epreuve: "U3",
  titre: "Optique Garance : licencier un salarié",
  contexte: "Optique Garance est une SARL dirigée par Mme Garance. Un monteur-vendeur en CDI arrive régulièrement en retard : 12 retards en 3 mois, malgré un avertissement écrit reçu il y a 2 mois. La gérante envisage de le licencier. Tu l'aides à qualifier la situation, à respecter la procédure et à chiffrer le coût.",
  annexe: { titre: "Annexe 1 : le salarié et les faits", colonnes: ["", "Information"], lignes: [["Ancienneté à la fin du préavis", "3 ans et 9 mois"], ["Salaire brut mensuel", "2 100 €"], ["Retards constatés par le pointage", "12 en 3 mois"], ["Avertissement écrit", "remis il y a 2 mois"], ["Préavis prévu par une convention plus favorable", "aucun : préavis légal"]] }
});
QUESTIONS.push(
  {
    id: "U3-202", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 1,
    question: "Quelle qualification est la plus prudente pour des retards répétés après un avertissement, sans conséquence grave sur l'activité ?",
    choix: ["Une cause réelle et sérieuse : les retards justifient le licenciement, mais ils ne rendent pas impossible le maintien du salarié pendant le préavis ; préavis et indemnité de licenciement sont dus.", "Une faute grave : pas de préavis et pas d'indemnité de licenciement.", "Une faute lourde : elle suppose seulement un retard de plus de 10 minutes.", "Un motif économique : le salarié est trop souvent absent."],
    bonne: 0,
    explication: "La faute grave rend impossible le maintien du salarié, même pendant le préavis ; elle est appréciée strictement. La faute lourde suppose l'intention de nuire à l'employeur. Des retards répétés, après un avertissement mais sans conséquence grave, sont le plus souvent traités comme une cause réelle et sérieuse. Un motif économique n'a rien à voir avec le comportement d'un salarié.",
    indice: "Se demander si le maintien du salarié pendant le préavis est impossible."
  },
  {
    id: "U3-203", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 2,
    question: "La convocation à l'entretien préalable est remise en main propre le lundi 3 (aucun jour férié). Quel est le premier jour possible pour l'entretien ?",
    choix: ["Le mardi 11.", "Le lundi 10.", "Le jeudi 6.", "Le vendredi 7."],
    bonne: 0,
    explication: "Le jour de la remise et celui de l'entretien ne comptent pas. Du mardi 4 au samedi 8, cela fait 5 jours ouvrables (tous les jours sauf le dimanche et les jours fériés). Un délai qui se termine un samedi est reporté au premier jour ouvrable suivant, donc au lundi 10 : l'entretien peut avoir lieu au plus tôt le mardi 11 (Cour de cassation, 10 juillet 2019).",
    indice: "Compte les jours ouvrables à partir du lendemain, samedi inclus, dimanche exclu."
  },
  {
    id: "U3-204", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 3, type: "calcul",
    question: "Le salarié a plus de 2 ans d'ancienneté : le préavis légal est de 2 mois. S'il en est dispensé, quelle indemnité compensatrice brute faut-il lui verser ?",
    reponse: { valeur: 4200, unite: "€ brut", decimales: 0, tolerance: 1, signe: false },
    explication: "Indemnité compensatrice = 2 mois × 2 100 = 4 200 € brut\nElle remplace le salaire que le salarié aurait perçu s'il avait travaillé pendant le préavis.",
    indice: "Le salaire de 2 mois."
  },
  {
    id: "U3-205", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 4, type: "calcul",
    question: "Calcule l'indemnité légale de licenciement (un quart de mois de salaire par année d'ancienneté), à 0,01 € près.",
    reponse: { valeur: 1968.75, unite: "€", decimales: 2, tolerance: 0.02, signe: false },
    erreurs: [ { valeur: 1575, type: "notion", message: "Tu as compté 3 années entières. Les 9 mois comptent au prorata (3,75 ans)." } ],
    explication: "Ancienneté = 3 + [[9|12]] = 3,75 ans\nIndemnité = 3,75 × [[1|4]] × 2 100 = 0,9375 × 2 100 = 1 968,75 €",
    indice: "Ancienneté en années, multipliée par un quart de mois de salaire."
  },
  {
    id: "U3-206", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 5, type: "calcul",
    question: "Calcule le coût brut total du licenciement si le salarié est dispensé de son préavis (indemnité compensatrice + indemnité de licenciement), hors cotisations et congés payés.",
    reponse: { valeur: 6168.75, unite: "€ brut", decimales: 2, tolerance: 0.02, signe: false },
    explication: "Coût brut = 4 200 + 1 968,75 = 6 168,75 €\nLes cotisations patronales sur l'indemnité compensatrice s'ajoutent à ce chiffre.",
    indice: "Additionne les deux montants des étapes précédentes."
  },
  {
    id: "U3-207", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 6,
    question: "Que doit contenir la lettre de licenciement ?",
    choix: ["Les faits reprochés, précis et datés : le nombre de retards, leurs dates et l'avertissement déjà remis.", "Seulement le mot « faute ».", "Une proposition de rupture conventionnelle.", "L'accord préalable de l'inspection du travail."],
    bonne: 0,
    explication: "La lettre, envoyée en recommandé avec avis de réception, doit énoncer le ou les motifs de façon précise et vérifiable : c'est elle qui fixe les limites du litige. « Faute » seul est trop vague. L'accord de l'inspection du travail ne concerne que certains salariés protégés.",
    indice: "Un juge doit pouvoir vérifier les faits cités."
  },
  {
    id: "U3-208", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 7,
    question: "Combien de temps faut-il attendre au minimum, après l'entretien préalable, avant d'envoyer la lettre de licenciement ?",
    choix: ["Au moins 2 jours ouvrables.", "Aucun délai.", "Au moins 15 jours.", "Au moins 5 jours calendaires."],
    bonne: 0,
    explication: "La lettre ne peut pas être envoyée moins de 2 jours ouvrables après l'entretien. Pour un licenciement disciplinaire, elle doit aussi partir dans le mois qui suit l'entretien. La réflexion est ainsi encadrée dans les deux sens.",
    indice: "Un petit nombre de jours ouvrables, pas des semaines."
  },
  {
    id: "U3-209", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 8,
    question: "Le salarié veut contester son licenciement. De combien de temps dispose-t-il pour saisir le conseil de prud'hommes ?",
    choix: ["12 mois à compter de la notification du licenciement.", "3 mois.", "2 ans.", "5 ans."],
    bonne: 0,
    explication: "Depuis 2017, le salarié dispose de 12 mois à partir de la notification du licenciement pour contester sa rupture devant le conseil de prud'hommes. L'employeur garde donc ses preuves (pointage, avertissement) au moins aussi longtemps.",
    indice: "Une année, à partir de la lettre."
  },
  {
    id: "U3-210", difficulte: "difficile", epreuve: "U3", theme: "Droit du travail", session: "complément",
    cas: "CAS-U3-09", etape: 9,
    question: "Que conseilles-tu à Mme Garance ?",
    choix: ["Respecter la procédure à la lettre (convocation, entretien, lettre motivée avec les dates), garder le pointage et l'avertissement comme preuves, et prévoir environ 6 169 € brut si le préavis n'est pas effectué (4 200 € d'indemnité compensatrice et 1 969 € d'indemnité de licenciement). Une rupture conventionnelle reste possible si le salarié est d'accord.", "Le licencier tout de suite par SMS pour faute grave.", "Ne rien faire : un salarié de plus de 3 ans ne peut jamais être licencié.", "Le licencier sans entretien : la procédure est facultative."],
    bonne: 0,
    explication: "Le bon conseil appuie la décision sur des preuves, chiffre le coût (4 200 + 1 968,75 = 6 168,75 € brut) et propose une alternative. Les autres choix ignorent la procédure ou inventent des règles : un licenciement mal fait peut coûter bien plus cher en prud'hommes.",
    indice: "Procédure, preuves, coût chiffré et alternative."
  }
);
CAS.push({
  id: "CAS-U3-10",
  epreuve: "U3",
  titre: "Optique Sorel : choisir sa société",
  contexte: "Mme Sorel et M. Imbert, deux opticiens, créent un magasin ensemble. Mme Sorel sera associée sans travailler dans le magasin ; M. Imbert en sera le gérant. Ils hésitent entre une SARL et une SAS. Tu les conseilles sur le statut du dirigeant, la responsabilité, les décisions et le coût social.",
  annexe: { titre: "Annexe 1 : le projet de société", colonnes: ["", "Information"], lignes: [["Capital", "30 000 €"], ["Apport de Mme Sorel", "12 000 €"], ["Apport de M. Imbert", "18 000 €"], ["Dirigeant", "M. Imbert"], ["Rémunération nette envisagée du dirigeant", "24 000 € par an"], ["Majorité fixée par les statuts pour les modifier", "3/4 des parts (la loi impose au moins les 2/3)"]] }
});
QUESTIONS.push(
  {
    id: "U3-211", difficulte: "facile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 1, type: "calcul",
    question: "Quel pourcentage du capital M. Imbert détient-il ?",
    reponse: { valeur: 60, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Part de M. Imbert = [[18 000|30 000]] × 100 = 60 %\nMme Sorel détient les 40 % restants : [[12 000|30 000]] = 40 %.",
    indice: "Son apport divisé par le capital total."
  },
  {
    id: "U3-212", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 2,
    question: "M. Imbert est gérant d'une SARL et détient 60 % des parts. Quel est son statut social ?",
    choix: ["Gérant majoritaire (plus de 50 % des parts) : travailleur non salarié, affilié au régime des indépendants.", "Assimilé salarié, affilié au régime général.", "Salarié avec un contrat de travail classique.", "Aucun statut : un gérant n'est pas protégé socialement."],
    bonne: 0,
    explication: "Le gérant de SARL qui détient plus de la moitié des parts (seul ou avec sa famille) est majoritaire : il relève du régime des travailleurs non salariés. Un gérant minoritaire ou égalitaire serait assimilé salarié. Le président de SAS, lui, est toujours assimilé salarié.",
    indice: "Plus de la moitié des parts : gérant majoritaire."
  },
  {
    id: "U3-213", difficulte: "facile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 3,
    question: "Mme Sorel craint de perdre ses biens personnels si le magasin a des dettes. Que lui répondre ?",
    choix: ["Dans une SARL comme dans une SAS, elle ne répond des dettes qu'à hauteur de ses apports, sauf si elle se porte caution personnelle auprès de la banque.", "Elle répond indéfiniment de toutes les dettes de la société.", "Elle répond des dettes à hauteur du double de son apport.", "Elle ne répond jamais de rien, même si elle cautionne un prêt."],
    bonne: 0,
    explication: "Dans une société à responsabilité limitée (SARL, SAS), les associés ne perdent que leurs apports. La limite saute si un associé donne sa caution personnelle à la banque : il s'engage alors sur ses biens pour cette dette.",
    indice: "Le mot « limitée » dans SARL."
  },
  {
    id: "U3-214", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 4, type: "calcul",
    annexe: { titre: "Annexe 2 : cotisations (taux simplifiés, en % de la rémunération nette)", colonnes: ["", "Taux"], lignes: [["Gérant majoritaire de SARL (non salarié)", "45 %"], ["Président de SAS (assimilé salarié)", "80 %"]] },
    question: "Calcule l'écart annuel de cotisations sociales entre un président de SAS (assimilé salarié) et un gérant majoritaire de SARL (travailleur non salarié), pour 24 000 € de rémunération nette.",
    reponse: { valeur: 8400, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Cotisations SARL = 24 000 × 0,45 = 10 800 €\nCotisations SAS = 24 000 × 0,80 = 19 200 €\nÉcart = 19 200 − 10 800 = 8 400 € par an\nCes taux sont simplifiés pour l'exercice.",
    indice: "Calcule les deux montants de cotisations, puis fais la différence."
  },
  {
    id: "U3-215", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 5,
    question: "Commente ce résultat : quel commentaire est le mieux rédigé ?",
    choix: ["Le gérant majoritaire de SARL coûte 8 400 € de cotisations de moins par an que le président de SAS pour la même rémunération. En contrepartie, sa protection sociale est un peu moindre. L'assimilé salarié est proche du régime général, mais sans assurance chômage.", "La SAS coûte moins cher, car le président est assimilé salarié.", "Les deux statuts coûtent exactement la même chose.", "Le gérant de SARL a droit à l'assurance chômage, le président de SAS non."],
    bonne: 0,
    explication: "Écart = 19 200 − 10 800 = 8 400 € en faveur de la SARL. Le bon commentaire donne le chiffre, le sens de l'écart et la contrepartie (protection sociale). Aucun des deux dirigeants n'a droit à l'assurance chômage : ni l'assimilé salarié, ni le non-salarié.",
    indice: "Chiffre, sens de l'écart, contrepartie."
  },
  {
    id: "U3-216", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 6,
    question: "M. Imbert détient 60 % des parts de la SARL. Que peut-il décider seul en assemblée ?",
    choix: ["Les décisions ordinaires (approbation des comptes, par exemple) à la majorité de plus de 50 % des parts, mais pas une modification des statuts, qui demande ici les trois quarts des parts (majorité fixée par les statuts).", "Toutes les décisions, y compris la modification des statuts.", "Aucune décision : l'unanimité est toujours exigée.", "Seulement la nomination des commissaires aux comptes."],
    bonne: 0,
    explication: "En SARL, les décisions ordinaires se prennent à la majorité absolue des parts (plus de 50 %). Les modifications des statuts exigent au moins les deux tiers des parts des associés présents ou représentés (article L223-30 du Code de commerce) ; les statuts peuvent fixer plus : ici, les trois quarts. Avec 60 %, M. Imbert gouverne le quotidien mais ne peut pas modifier seul les statuts ; il lui faut l'accord de Mme Sorel.",
    indice: "Deux niveaux de majorité : décisions ordinaires et modification des statuts."
  },
  {
    id: "U3-217", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 7, type: "calcul",
    question: "M. Imbert voudrait détenir 75 % des parts (la majorité des statuts pour les modifier) en ajoutant un apport (le capital augmente d'autant). Quel apport supplémentaire lui faut-il ?",
    reponse: { valeur: 18000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 4500, type: "notion", message: "Tu as oublié que l'apport augmente aussi le capital total : la part se calcule sur le nouveau capital." } ],
    explication: "Soit x l'apport en plus : [[18 000 + x|30 000 + x]] = 0,75\n18 000 + x = 22 500 + 0,75 x\n0,25 x = 4 500, donc x = [[4 500|0,25]] = 18 000 €\nCe n'est pas 4 500 € : l'apport augmente aussi le capital total.",
    indice: "Pose l'équation : sa part après apport doit valoir 0,75."
  },
  {
    id: "U3-218", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément",
    cas: "CAS-U3-10", etape: 8,
    question: "Que conseilles-tu à Mme Sorel et à M. Imbert ?",
    choix: ["La SARL : cadre légal clair, cotisations du gérant plus faibles (8 400 € de moins par an dans nos hypothèses) et responsabilité limitée aux apports. Il faut prévoir un pacte d'associés, car avec 60 % des parts M. Imbert ne peut pas modifier seul les statuts (75 % nécessaires selon les statuts).", "La SAS, car son président est un salarié comme les autres.", "La SARL, car aucun associé ne répond jamais des dettes.", "Aucune société : l'entreprise individuelle est toujours plus avantageuse."],
    bonne: 0,
    explication: "Le conseil s'appuie sur les chiffres (écart de cotisations, majorités) et ne cache pas les limites. Les autres choix affirment des règles fausses (« salarié comme les autres », « jamais de dettes ») ou écartent l'analyse sans comparaison.",
    indice: "Reprends statut social, coût, responsabilité et majorités."
  }
);
CAS.push({
  id: "CAS-U3-11",
  epreuve: "U3",
  titre: "Optique Lagrange : rejoindre une franchise",
  contexte: "M. Lagrange, opticien indépendant, se voit proposer d'entrer dans le réseau de franchise « Vision Plus ». Il réalise 400 000 € HT de chiffre d'affaires avec un taux de marge sur coût variable de 60 % et 200 000 € de charges fixes. Tu compares sa situation actuelle à celle qu'il aurait dans le réseau.",
  annexe: { titre: "Annexe 1 : magasin actuel et conditions du réseau", colonnes: ["", "Information"], lignes: [["CA actuel", "400 000 € HT"], ["Taux de marge sur coût variable actuel", "60 %"], ["Charges fixes actuelles", "200 000 €"], ["Droit d'entrée du réseau", "20 000 € HT, amorti sur 5 ans"], ["Redevance d'enseigne", "4 % du CA HT"], ["Redevance de publicité", "1 % du CA HT"], ["CA prévu avec l'enseigne", "+ 15 %"], ["Taux de marge sur coût variable avant redevances (achats groupés)", "63 %"], ["Signature du contrat prévue", "le 30 mars"]] }
});
QUESTIONS.push(
  {
    id: "U3-219", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    cas: "CAS-U3-11", etape: 1,
    question: "Le contrat de franchise doit être signé le 30 mars. À quelle date au plus tard M. Lagrange doit-il avoir reçu le document d'information précontractuelle ?",
    choix: ["Le 10 mars, soit 20 jours avant la signature.", "Le 20 mars, soit 10 jours avant.", "Le 28 mars, soit 2 jours avant.", "Le 15 mars, soit 15 jours avant."],
    bonne: 0,
    explication: "La loi Doubin (article L330-3 du Code de commerce) impose de remettre le document d'information précontractuelle au moins 20 jours avant la signature du contrat ou le versement d'une somme. 30 mars − 20 jours = 10 mars. Ce délai laisse le temps d'étudier les comptes du réseau et les conditions de sortie.",
    indice: "20 jours de réflexion avant la signature."
  },
  {
    id: "U3-220", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 2, type: "calcul",
    question: "Calcule le résultat actuel du magasin (avant franchise).",
    reponse: { valeur: 40000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Marge sur coût variable = 400 000 × 0,60 = 240 000 €\nRésultat = 240 000 − 200 000 = 40 000 €",
    indice: "MCV moins charges fixes."
  },
  {
    id: "U3-221", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 3, type: "calcul",
    question: "Calcule le CA prévu avec l'enseigne.",
    reponse: { valeur: 460000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    explication: "CA prévu = 400 000 × 1,15 = 460 000 € HT",
    indice: "Une hausse de 15 % : multiplie par 1,15."
  },
  {
    id: "U3-222", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 4, type: "calcul",
    question: "Calcule le total des redevances annuelles (enseigne et publicité) sur le CA prévu.",
    reponse: { valeur: 23000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Taux total des redevances = 4 % + 1 % = 5 %\nRedevances = 460 000 × 0,05 = 23 000 €\nElles sont proportionnelles au CA : ce sont des charges variables.",
    indice: "Additionne les deux pourcentages, puis applique-les au CA prévu."
  },
  {
    id: "U3-223", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 5, type: "calcul",
    question: "Calcule le taux de marge sur coût variable une fois les redevances payées.",
    reponse: { valeur: 58, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Taux de MCV net = 63 % − 5 % = 58 %\nLes redevances s'ajoutent aux charges variables : elles réduisent le taux de MCV de 5 points.",
    indice: "Les redevances sont variables : retire-les du taux."
  },
  {
    id: "U3-224", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-11", etape: 6, type: "calcul",
    question: "Calcule les charges fixes avec la franchise (charges actuelles + amortissement annuel du droit d'entrée).",
    reponse: { valeur: 204000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 220000, type: "notion", message: "Tu as ajouté tout le droit d'entrée. Il est amorti sur 5 ans : 20 000 divisés par 5 par an." } ],
    explication: "Amortissement du droit d'entrée = [[20 000|5]] = 4 000 € par an\nCharges fixes = 200 000 + 4 000 = 204 000 €",
    indice: "Le droit d'entrée est amorti sur 5 ans."
  },
  {
    id: "U3-225", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 7, type: "calcul",
    question: "Calcule le résultat prévisionnel avec la franchise.",
    reponse: { valeur: 62800, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [ { valeur: 85800, type: "notion", message: "Tu as oublié les redevances (5 % du CA) : utilise le taux de marge sur coût variable net de 58 %." } ],
    explication: "MCV = 460 000 × 0,58 = 266 800 €\nRésultat = 266 800 − 204 000 = 62 800 €\nContre 40 000 € aujourd'hui : + 22 800 €, soit + 57 %.",
    indice: "MCV avec le taux net, moins les nouvelles charges fixes."
  },
  {
    id: "U3-226", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 8, type: "calcul",
    question: "Quel CA minimal faut-il avec la franchise pour retrouver le résultat actuel de 40 000 € ? (à l'euro près)",
    reponse: { valeur: 420690, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 387302, type: "notion", message: "Tu as oublié les redevances (5 % du CA) : utilise le taux de marge sur coût variable net de 58 %." } ],
    explication: "Il faut une MCV de 204 000 + 40 000 = 244 000 €\nCA = [[244 000|0,58]] = 420 689,66 €, soit 420 690 € HT\nC'est + 5,2 % par rapport au CA actuel : [[420 690 − 400 000|400 000]].",
    indice: "Charges fixes plus résultat voulu, divisés par le taux de MCV net."
  },
  {
    id: "U3-227", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 9,
    question: "Commente la comparaison avant et après la franchise : quel commentaire est le mieux rédigé ?",
    choix: ["Avec le réseau, le résultat passerait de 40 000 € à 62 800 € (+ 57 %), grâce à + 15 % de CA, mais cette hausse repose sur une hypothèse. Le taux de marge net baisse à 58 % et les charges fixes montent à 204 000 € : le CA doit dépasser 420 690 € pour faire mieux qu'aujourd'hui.", "La franchise est toujours plus rentable : le taux de marge passe de 60 % à 63 %.", "Le résultat augmente de 22 800 €, donc la franchise est sans risque.", "Les redevances de 5 % sont négligeables : elles ne changent rien au résultat."],
    bonne: 0,
    explication: "Un bon commentaire chiffre l'écart (62 800 − 40 000 = 22 800 €), explique son origine (+ 15 % de CA) et rappelle la condition (CA minimal de 420 690 €). Le 63 % est un taux avant redevances. Une franchise n'est jamais sans risque : elle ajoute des charges fixes et une dépendance au réseau.",
    indice: "Chiffre, origine de l'écart, condition de réussite."
  },
  {
    id: "U3-228", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-11", etape: 10,
    question: "Que conseilles-tu à M. Lagrange ?",
    choix: ["Rejoindre le réseau seulement s'il est sûr de faire au moins 5,2 % de CA en plus (420 690 €) : à CA constant (400 000 €), le résultat tomberait à 28 000 €, soit 12 000 € de moins qu'aujourd'hui. Il doit aussi lire les clauses de sortie (durée, non-concurrence après le contrat) dans le document d'information.", "Rejoindre le réseau : l'enseigne garantit toujours une hausse de CA de 15 %.", "Refuser : un franchisé ne peut jamais gagner plus qu'un indépendant.", "Rejoindre le réseau sans lire les clauses de sortie : elles sont standard."],
    bonne: 0,
    explication: "À 400 000 € : 400 000 × 0,58 = 232 000 €, moins 204 000 € de charges fixes = 28 000 €, soit 12 000 € de moins qu'aujourd'hui. La franchise est rentable seulement au-delà de 420 690 €. Aucun réseau ne garantit un CA, et les clauses de sortie engagent le franchisé après la fin du contrat.",
    indice: "À quel CA la franchise devient-elle intéressante, et que se passe-t-il en dessous ?"
  }
);
CAS.push({
  id: "CAS-U3-12",
  epreuve: "U3",
  titre: "Optique Reflets : le tableau de bord complet",
  contexte: "Optique Reflets est une SARL dirigée par Mme Chauvin. Elle te demande un tableau de bord de son exercice : marges, soldes de gestion, capacité d'autofinancement, bilan fonctionnel et seuil de rentabilité, puis un avis global.",
  annexe: { titre: "Annexe 1 : compte de résultat de l'exercice (en €)", colonnes: ["", "Montant (€)"], lignes: [["Ventes de marchandises", "600 000"], ["Achats de marchandises", "228 000"], ["Stock initial de marchandises", "36 000"], ["Stock final de marchandises", "30 000"], ["Autres achats et charges externes", "110 000"], ["Impôts et taxes", "12 000"], ["Charges de personnel", "190 000"], ["Dotations aux amortissements", "28 000"], ["Charges financières", "7 000"], ["Impôt sur les bénéfices", "5 000"]] }
});
QUESTIONS.push(
  {
    id: "U3-229", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément",
    cas: "CAS-U3-12", etape: 1, type: "calcul",
    question: "Calcule le taux de marque commercial (marge commerciale / ventes HT).",
    reponse: { valeur: 61, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [ { valeur: 156.4, type: "marque-marge" } ],
    explication: "Coût d'achat des marchandises vendues = 228 000 + 36 000 − 30 000 = 234 000 €\nMarge commerciale = 600 000 − 234 000 = 366 000 €\nTaux de marque = [[366 000|600 000]] × 100 = 61 %",
    indice: "Commence par le coût d'achat des marchandises vendues, puis la marge."
  },
  {
    id: "U3-230", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 2, type: "calcul",
    question: "Calcule l'excédent brut d'exploitation (EBE) d'Optique Reflets.",
    reponse: { valeur: 54000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Valeur ajoutée = 366 000 − 110 000 = 256 000 €\nEBE = 256 000 − 12 000 − 190 000 = 54 000 €",
    indice: "Marge commerciale moins charges externes, impôts, taxes et personnel."
  },
  {
    id: "U3-231", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 3, type: "calcul",
    question: "Calcule le résultat net.",
    reponse: { valeur: 14000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Résultat d'exploitation = 54 000 − 28 000 = 26 000 €\nRésultat courant avant impôts = 26 000 − 7 000 = 19 000 €\nRésultat net = 19 000 − 5 000 = 14 000 €",
    indice: "Retire de l'EBE les dotations, les charges financières, puis l'impôt."
  },
  {
    id: "U3-232", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 4, type: "calcul",
    question: "Calcule la capacité d'autofinancement (CAF) d'Optique Reflets.",
    reponse: { valeur: 42000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 14000, type: "notion", message: "C'est le résultat net. La CAF s'obtient en ajoutant les dotations aux amortissements, qui ne sortent pas d'argent." } ],
    explication: "CAF = résultat net + dotations aux amortissements = 14 000 + 28 000 = 42 000 €",
    indice: "Les dotations ne sortent pas d'argent : rajoute-les au résultat net."
  },
  {
    id: "U3-233", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 5, type: "calcul",
    annexe: { titre: "Annexe 2 : bilan fonctionnel (en €)", colonnes: ["", "Montant (€)"], lignes: [["Emplois stables", "260 000"], ["Ressources stables", "290 000"], ["Stocks", "30 000"], ["Créances clients", "12 000"], ["Dettes fournisseurs", "42 000"], ["Dettes fiscales et sociales", "20 000"], ["Trésorerie active", "52 000"], ["Concours bancaires courants", "2 000"]] },
    question: "Calcule le fonds de roulement net global (FRNG) d'Optique Reflets.",
    reponse: { valeur: 30000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "FRNG = ressources stables − emplois stables = 290 000 − 260 000 = 30 000 €",
    indice: "Ressources stables moins emplois stables."
  },
  {
    id: "U3-234", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 6, type: "calcul",
    question: "Calcule le besoin en fonds de roulement (BFR), avec son signe.",
    reponse: { valeur: -20000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "BFR = (stocks + créances clients) − (dettes fournisseurs + dettes fiscales et sociales)\n= (30 000 + 12 000) − (42 000 + 20 000) = 42 000 − 62 000 = −20 000 €\nUn BFR négatif : les dettes d'exploitation financent plus que les stocks et créances.",
    indice: "Actif circulant d'exploitation moins dettes d'exploitation : le résultat peut être négatif."
  },
  {
    id: "U3-235", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 7, type: "calcul",
    question: "Calcule la trésorerie nette, avec son signe.",
    reponse: { valeur: 50000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Trésorerie nette = FRNG − BFR = 30 000 − (−20 000) = 50 000 €\nVérification : trésorerie active − concours bancaires = 52 000 − 2 000 = 50 000 €",
    indice: "Soustraire un nombre négatif revient à ajouter."
  },
  {
    id: "U3-236", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-12", etape: 8, type: "calcul",
    annexe: { titre: "Annexe 3 : répartition des charges (en €)", colonnes: ["", "Montant (€)"], lignes: [["Charges variables : coût d'achat des marchandises vendues", "234 000"], ["Charges variables : frais de paiement et commissions", "18 000"], ["Charges fixes (autres charges externes hors frais de paiement : 92 000 ; impôts et taxes ; personnel ; dotations ; charges financières)", "329 000"]] },
    question: "Calcule le seuil de rentabilité du magasin, à l'euro près.",
    reponse: { valeur: 567241, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [ { valeur: 190820, type: "notion", message: "Tu as multiplié les charges fixes par le taux. Un seuil de rentabilité se calcule en divisant." }, { valeur: 783333, type: "notion", message: "Tu as divisé par le taux de charges variables. Il faut diviser par le taux de marge sur coût variable." } ],
    explication: "Marge sur coût variable = 600 000 − 252 000 = 348 000 €\nTaux de MCV = [[348 000|600 000]] = 0,58, soit 58 %\nSeuil de rentabilité = [[329 000|0,58]] = 567 241 € HT",
    indice: "Taux de MCV d'abord, puis charges fixes divisées par ce taux."
  },
  {
    id: "U3-237", difficulte: "difficile", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-12", etape: 9,
    question: "Donne un avis global sur le magasin : quel commentaire est le mieux rédigé ?",
    choix: ["La trésorerie est confortable (50 000 € avec un BFR de −20 000 €) et la CAF de 42 000 € donne de quoi financer investissements et remboursements. Mais la rentabilité est fragile : le seuil de 567 241 € représente 94,5 % du CA, la marge de sécurité n'est que de 32 759 € (5,5 % du CA) et le résultat net de 14 000 € ne représente que 2,3 % du CA.", "Le magasin est solide : sa trésorerie est de 50 000 €.", "Le magasin est en danger : son BFR est négatif.", "La marge de sécurité est de 14 000 €, soit le résultat net."],
    bonne: 0,
    explication: "Marge de sécurité = 600 000 − 567 241 = 32 759 €, soit [[32 759|600 000]] = 5,5 % du CA\nRésultat net sur CA = [[14 000|600 000]] = 2,3 %\nUn bon avis global distingue la solidité financière (trésorerie) de la rentabilité (seuil). Un BFR négatif n'est pas un danger ; marge de sécurité et résultat net sont deux choses différentes.",
    indice: "Sépare ce qui va bien (trésorerie) de ce qui est fragile (seuil, résultat)."
  },
  {
    id: "U3-238", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-12", etape: 10,
    question: "Que conseilles-tu à Mme Chauvin ?",
    choix: ["Réduire le seuil en agissant sur les charges fixes, surtout le personnel (190 000 €, soit 31,7 % du CA) : 20 000 € de charges en moins ramèneraient le seuil à 532 759 € et la marge de sécurité à 11,2 % du CA. La trésorerie permet de patienter, pas d'investir à l'aveugle.", "Placer les 50 000 € de trésorerie pour augmenter la marge de sécurité.", "Augmenter les prix de 20 % sans tenir compte de la clientèle.", "Ne rien changer : le résultat net est positif."],
    bonne: 0,
    explication: "Charges fixes après économie = 329 000 − 20 000 = 309 000 €\nNouveau seuil = [[309 000|0,58]] = 532 759 €\nMarge de sécurité = 600 000 − 532 759 = 67 241 €, soit 11,2 % du CA.\nPlacer la trésorerie ne change pas le seuil. Une hausse de prix sans analyse peut faire fuir les clients. Rester à 5,5 % de marge de sécurité est risqué.",
    indice: "Quel levier fait baisser le seuil le plus directement ?"
  }
);

QUESTIONS.push(
  {
    id: "U3-239", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément", type: "redaction",
    question: "Une monture est vendue 240 € TTC (TVA 20 %). Son prix d'achat est de 80 € HT.",
    consigne: "En 2 phrases, commentez la marge de l'opticien et dites si vous la jugez suffisante pour une monture de ce type.",
    modele: "Le prix de vente HT est de 200 € pour un achat à 80 €, soit une marge brute de 120 € et un taux de marque de 60 %. Une monture se vend en général avec un coefficient proche de 2,5 à 3 sur le prix d'achat HT : ici le coefficient est de 2,5 en HT (3 si l'on part du prix TTC), la marge est correcte, et on peut garder ce prix sans remise forte.",
    grille: [
      "Le prix de vente HT (200 €) ou la marge brute (120 €) est cité.",
      "Le taux de marque (60 %) ou le taux de marge (150 %) est donné, sans confondre les deux.",
      "Le sens est dit : sur 100 € de vente HT, 60 € restent après l'achat de la monture.",
      "Un conseil est donné : garder le prix, ou limiter la remise."
    ],
    explication: "Prix de vente HT = 240 / 1,2 = 200 €. Marge brute = 200 − 80 = 120 €.\nTaux de marge = 120 / 80 = 150 % (sur le prix d'achat). Taux de marque = 120 / 200 = 60 % (sur le prix de vente HT)."
  },
  {
    id: "U3-240", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", type: "redaction",
    question: "Un magasin a un chiffre d'affaires annuel de 300 000 € HT, des charges variables de 180 000 € et des charges fixes de 96 000 €.",
    consigne: "En 2 phrases, indiquez à partir de quand le magasin devient rentable et ce que cela dit de sa situation.",
    modele: "Le seuil de rentabilité est de 240 000 € de chiffre d'affaires, atteint au bout de 9,6 mois, donc vers mi-septembre. Le magasin dégage 60 000 € de marge de sécurité, soit 20 % du CA : il peut perdre un cinquième de ses ventes sans être déficitaire, mais il doit surveiller ses charges fixes.",
    grille: [
      "Le seuil (240 000 €) est cité.",
      "Il est comparé au CA réel (300 000 €) ou donné en mois (9,6).",
      "Le sens est dit : avant ce seuil le magasin perd de l'argent, après il en gagne ; la marge de sécurité est de 20 %.",
      "Un conseil est donné : baisser les charges fixes, ou augmenter le taux de marge sur coût variable (prix ou achats)."
    ],
    explication: "Marge sur coût variable = 300 000 − 180 000 = 120 000 €, soit 40 % du CA.\nSeuil de rentabilité = 96 000 / 0,40 = 240 000 €.\nPoint mort = 240 000 / 300 000 × 12 = 9,6 mois, soit mi-septembre environ.\nMarge de sécurité = 300 000 − 240 000 = 60 000 €, soit 20 % du CA."
  },
  {
    id: "U3-241", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "complément", type: "redaction",
    question: "Le chiffre d'affaires d'un magasin est passé de 280 000 € en 2025 à 308 000 € en 2026.",
    consigne: "En 2 phrases, commentez l'évolution du chiffre d'affaires.",
    modele: "Le chiffre d'affaires passe de 280 000 € à 308 000 €, soit une hausse de 28 000 € et de 10 %. C'est une bonne progression, mais il faut vérifier que les charges n'ont pas augmenté aussi vite pour que le résultat suive.",
    grille: [
      "Les deux chiffres ou la hausse de 28 000 € sont cités.",
      "Le taux (+10 %) est calculé par rapport à 2025.",
      "Le sens est dit : le magasin vend plus.",
      "Un conseil est donné : contrôler les charges, ou chercher ce qui a fait la hausse."
    ],
    explication: "Variation = (308 000 − 280 000) / 280 000 = 28 000 / 280 000 = +10 %."
  },
  {
    id: "U3-242", difficulte: "difficile", epreuve: "U3", theme: "Mercatique et communication", session: "complément", type: "redaction",
    question: "Voici la fréquentation et le chiffre d'affaires d'un magasin sur deux mois.",
    annexe: { titre: "Fréquentation", colonnes: ["", "Mars", "Avril"], lignes: [["Clients", "400", "340"], ["Chiffre d'affaires HT", "62 000 €", "59 500 €"]] },
    consigne: "En 2 phrases, expliquez ce qui s'est passé entre mars et avril et ce que vous feriez.",
    modele: "Le magasin a perdu 15 % de clients (400 à 340) et son chiffre d'affaires ne baisse que de 4 %, car le panier moyen monte de 155 € à 175 € (+12,9 %) et compense en partie. Les clients présents achètent plus, donc le problème est la fréquentation : je lancerais une action pour faire revenir du monde, par exemple un rappel aux porteurs dont l'équipement a plus de 2 ans.",
    grille: [
      "Un chiffre du tableau est cité (clients, CA ou panier moyen).",
      "Mars et avril sont comparés avec un taux ou un écart.",
      "Le sens est dit : moins de clients, mais un panier plus élevé.",
      "Un conseil précis sur la fréquentation est donné."
    ],
    explication: "Panier moyen : mars 62 000 / 400 = 155 €, avril 59 500 / 340 = 175 €, soit +12,9 %.\nClients : (340 − 400) / 400 = −15 %. Chiffre d'affaires : (59 500 − 62 000) / 62 000 = −4,0 %."
  },
  {
    id: "U3-243", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément", type: "redaction",
    question: "Tableau de trésorerie d'un magasin. Trésorerie au 1er janvier : 6 000 €.",
    annexe: { titre: "Trésorerie (en €)", colonnes: ["", "Janvier", "Février"], lignes: [["Encaissements", "38 000", "36 000"], ["Décaissements", "41 500", "40 000"]] },
    consigne: "En 2 phrases, commentez la trésorerie et dites ce que le gérant doit faire.",
    modele: "La trésorerie passe de 6 000 € à 2 500 € fin janvier, puis à −1 500 € fin février : les décaissements dépassent les encaissements deux mois de suite (−3 500 € puis −4 000 €). Le compte sera à découvert en février, donc le gérant doit négocier un délai avec ses fournisseurs ou une autorisation de découvert avant cette date.",
    grille: [
      "Un solde (2 500 € ou −1 500 €) est cité.",
      "Encaissements et décaissements sont comparés, ou les deux mois.",
      "Le sens est dit : la trésorerie devient négative en février.",
      "Un conseil est donné : délai fournisseur, découvert, ou accélérer les encaissements."
    ],
    explication: "Fin janvier : 6 000 + 38 000 − 41 500 = 2 500 €.\nFin février : 2 500 + 36 000 − 40 000 = −1 500 €."
  }
);

QUESTIONS.push(
  {
    id: "U3-244", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Un opticien répartit sa clientèle en groupes qui ont des attentes semblables (étudiants, actifs, seniors). Comment s'appelle cette démarche ?",
    choix: ["La segmentation", "Le positionnement", "La fidélisation", "Le merchandising"],
    bonne: 0,
    explication: "La segmentation découpe le marché en groupes de clients aux attentes proches. Le positionnement, lui, est la place que le magasin veut occuper dans l'esprit des clients. La fidélisation vise à garder les clients, le merchandising organise la présentation des produits en magasin.",
    indice: "Le mot cherché décrit un découpage de la clientèle en groupes."
  },
  {
    id: "U3-245", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Parmi ces critères de segmentation, lequel est un critère de COMPORTEMENT d'achat ?",
    choix: ["La tranche d'âge du client", "La fréquence de renouvellement de ses lunettes", "Le quartier où il habite", "Son revenu mensuel"],
    bonne: 1,
    erreurs: {
      0: { type: "notion", message: "L'âge est un critère démographique : il décrit la personne, pas la façon dont elle achète." },
      2: { type: "notion", message: "Le lieu d'habitation est un critère géographique. Un critère de comportement décrit ce que le client fait quand il achète." },
      3: { type: "notion", message: "Le revenu est un critère socio-économique. Un critère de comportement décrit les habitudes d'achat." }
    },
    explication: "Les critères de comportement décrivent les habitudes d'achat : fréquence de renouvellement, fidélité à un magasin, recherche de promotions. L'âge est démographique, le quartier géographique, le revenu socio-économique.",
    indice: "Un critère de comportement décrit ce que fait le client, pas qui il est."
  },
  {
    id: "U3-246", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Que désigne le positionnement d'un magasin d'optique ?",
    choix: ["Son emplacement dans la rue commerçante", "Le prix de sa monture la moins chère", "La place qu'il veut occuper dans l'esprit des clients par rapport à ses concurrents", "Le nombre de clients qu'il reçoit chaque jour"],
    bonne: 2,
    explication: "Le positionnement est l'image que le magasin veut donner par rapport à ses concurrents : par exemple prix bas, conseil haut de gamme ou spécialiste de l'enfant. L'emplacement relève de la distribution, pas du positionnement.",
    indice: "Pense à l'image dans la tête du client, pas à un lieu ni à un chiffre."
  },
  {
    id: "U3-247", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Une monture se vend bien depuis deux ans, mais ses ventes n'augmentent plus et la concurrence propose des modèles très proches. Dans quelle phase de son cycle de vie se trouve-t-elle ?",
    choix: ["Le lancement", "La croissance", "Le déclin", "La maturité"],
    bonne: 3,
    erreurs: {
      1: { type: "notion", message: "En croissance, les ventes augmentent encore vite. Ici elles se stabilisent : c'est la maturité." },
      2: { type: "notion", message: "En déclin, les ventes baissent. Ici elles restent élevées mais ne progressent plus." }
    },
    explication: "Les 4 phases sont le lancement, la croissance, la maturité puis le déclin. Quand les ventes se stabilisent à un niveau élevé et que la concurrence s'intensifie, le produit est en maturité.",
    indice: "Les ventes ne montent plus, mais elles ne baissent pas non plus."
  },
  {
    id: "U3-248", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    type: "calcul",
    question: "Un magasin envoie 4 000 courriers à ses clients. 140 d'entre eux viennent en magasin avec le courrier. Calcule le taux de réponse.",
    reponse: { valeur: 3.5, unite: "%", decimales: 1, tolerance: 0.05, signe: false },
    erreurs: [
      { valeur: 28.6, type: "notion", message: "Tu as divisé les courriers par les réponses. Le taux de réponse se calcule avec les réponses au numérateur : 140 sur 4 000." },
      { valeur: 3.6, type: "notion", message: "Tu as divisé par 3 860, les courriers sans réponse. Le taux se calcule sur tous les courriers envoyés : 4 000." }
    ],
    explication: "Taux de réponse = [[140|4 000]] × 100 = 3,5 %.",
    indice: "Réponses reçues divisées par courriers envoyés."
  },
  {
    id: "U3-249", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    type: "calcul",
    question: "Une campagne de 1 800 € touche 600 personnes et amène 45 nouveaux clients. Calcule le coût d'acquisition d'un nouveau client.",
    reponse: { valeur: 40, unite: "€", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 3, type: "notion", message: "C'est le coût par personne touchée (1 800 ÷ 600). Le coût d'acquisition se calcule par nouveau client : divise par 45." },
      { valeur: 0.025, type: "notion", message: "Tu as divisé les clients par le budget. Il faut diviser le budget par le nombre de nouveaux clients." }
    ],
    explication: "Coût d'acquisition = [[1 800|45]] = 40 € par nouveau client. (Le coût par personne touchée serait 1 800 ÷ 600 = 3 €.)",
    indice: "Le budget se partage entre les clients gagnés, pas entre les personnes touchées."
  },
  {
    id: "U3-250", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    type: "calcul",
    question: "Un jour de semaine, 5 000 personnes passent devant le magasin, 400 y entrent et 120 achètent. Calcule le taux de transformation.",
    reponse: { valeur: 30, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 2.4, type: "notion", message: "Tu as divisé les acheteurs par les passants. Le taux de transformation compare les acheteurs aux personnes entrées dans le magasin." },
      { valeur: 8, type: "notion", message: "C'est le taux d'entrée (400 entrées sur 5 000 passants). Le taux de transformation, lui, part des entrées." }
    ],
    explication: "Taux de transformation = [[acheteurs|entrées]] = [[120|400]] = 30 %. Le taux d'entrée, lui, vaut [[400|5 000]] = 8 %.",
    indice: "Combien de visiteurs entrés ressortent avec un achat ?"
  },
  {
    id: "U3-251", difficulte: "difficile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    type: "calcul",
    question: "Une action de communication coûte 1 500 € et génère 4 200 € de marge brute. Calcule sa rentabilité : (gain − coût) ÷ coût, en %.",
    reponse: { valeur: 180, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 280, type: "notion", message: "Tu as divisé la marge par le coût (4 200 ÷ 1 500). Il faut d'abord retirer le coût de la marge pour obtenir le gain réel." },
      { valeur: 2700, type: "notion", message: "2 700 € est le gain en euros (4 200 − 1 500). La question demande un pourcentage : divise-le par le coût." }
    ],
    explication: "Gain moins coût = 4 200 − 1 500 = 2 700 €. Rentabilité = [[2 700|1 500]] × 100 = 180 %. Chaque euro dépensé en a rapporté 1,80 de plus.",
    indice: "Commence par le gain net, puis compare-le à la dépense."
  },
  {
    id: "U3-252", difficulte: "difficile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    type: "calcul",
    question: "Pour une promotion, une monture à 150 € TTC (TVA 20 %) est remise de 20 %. Son prix d'achat est de 50 € HT. Calcule le taux de marque après remise.",
    reponse: { valeur: 50, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    erreurs: [
      { valeur: 100, type: "marque-marge", message: "100 % est le taux de marge (marge ÷ prix d'achat). Le taux de marque se calcule sur le prix de vente HT." },
      { valeur: 58, type: "ht-ttc", message: "Tu as calculé la marge avec le prix TTC (120 − 50). La marge se calcule hors taxes : retire d'abord la TVA du prix remisé." }
    ],
    explication: "Prix remisé TTC = 150 × 0,80 = 120 €. Prix HT = 120 ÷ 1,2 = 100 €. Marge = 100 − 50 = 50 €. Taux de marque = [[50|100]] = 50 %. (Le taux de marge vaudrait 100 %.)",
    indice: "Retire la TVA avant de calculer la marge, puis divise par le prix de vente HT."
  },
  {
    id: "U3-253", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Un opticien veut envoyer par e-mail une offre promotionnelle à des personnes qui ne sont pas encore ses clientes. Que doit-il faire avant ?",
    choix: ["Obtenir leur accord préalable à recevoir ce type de message", "Rien : un e-mail est toujours autorisé", "Demander l'autorisation à la mairie", "Envoyer le message à moins de 100 personnes"],
    bonne: 0,
    explication: "Pour prospecter des particuliers par e-mail, il faut en principe leur consentement préalable, et chaque message doit proposer de se désinscrire facilement. Le fichier clients est protégé par le RGPD.",
    indice: "Le droit protège les particuliers contre la prospection non souhaitée."
  },
  {
    id: "U3-254", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Pourquoi un opticien a-t-il intérêt à fidéliser ses clients ?",
    choix: ["Parce que la fidélisation est obligatoire pour un commerçant", "Parce que garder un client coûte en général moins cher que d'en conquérir un nouveau", "Parce qu'un client fidèle n'a plus besoin de conseil", "Parce que cela permet de ne plus faire de communication"],
    bonne: 1,
    explication: "Un client fidèle revient, recommande le magasin et coûte moins en communication qu'un nouveau client. La fidélisation n'est pas une obligation, et le conseil comme la communication restent nécessaires.",
    indice: "Compare ce que coûte un nouveau client à ce que coûte un client déjà acquis."
  },
  {
    id: "U3-255", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément",
    question: "Un magasin décide de s'adresser en priorité aux porteurs de verres progressifs de plus de 45 ans. Quelle étape de la démarche mercatique est-ce ?",
    choix: ["La segmentation du marché", "Le choix du prix de vente", "Le ciblage : le choix du ou des segments visés", "Le suivi des ventes"],
    bonne: 2,
    erreurs: {
      0: { type: "notion", message: "La segmentation découpe tout le marché en groupes. Ici le magasin choisit un groupe à viser : c'est le ciblage." }
    },
    explication: "On segmente le marché (découpage), puis on cible (choix des segments visés), puis on se positionne (image voulue). Choisir les porteurs de progressifs de plus de 45 ans, c'est cibler.",
    indice: "Le magasin choisit un groupe parmi ceux qu'il a identifiés."
  }
);
