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
    explication: "Code du travail (L1221-19) : 2 mois pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres. Un seul renouvellement possible si un accord de branche étendu le prévoit et s'il est écrit dans le contrat. Intérêt pour les deux : l'employeur juge les compétences, le salarié juge le poste, et chacun peut rompre simplement.",
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
    explication: "Le Code de la santé publique (décret du 12 octobre 2016 relatif à la délivrance des verres correcteurs et à l'exercice de la profession d'opticien-lunetier) oblige l'opticien à informer la personne que la réfraction qu'il pratique n'est pas un acte médical : elle ne remplace pas une consultation chez l'ophtalmologiste.",
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
    explication: "Porteurs = 15 000 × 0,65 = 9 750\nDépense d'un cycle = 9 750 × 330 = 3 217 500 €\nPar an : [[3 217 500|3]] = 1 072 500 € TTC.",
    indice: "Nombre de porteurs × panier moyen, puis ramène à une seule année avec le rythme de renouvellement."
  },
  {
    id: "U3-053", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    type: "calcul",
    question: "Marché potentiel : 800 000 € TTC. IDC : 95. Évasion commerciale : 12 %. Le magasin vise 20 % du marché restant. Calcule son chiffre d'affaires prévisionnel HT (arrondi à l'euro).",
    reponse: { valeur: 111467, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    explication: "800 000 × 0,95 = 760 000 €\n760 000 × (1 − 0,12) = 668 800 € (marché net de l'évasion)\n668 800 × 0,20 = 133 760 € TTC\nEn HT : [[133 760|1,2]] = 111 466,67 €, soit 111 467 € HT.\nOn enchaîne les multiplications, et on finit par passer en HT.",
    indice: "Quatre étapes dans l'ordre : IDC, évasion, part de marché, puis retire la TVA."
  },
  {
    id: "U3-054", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    type: "calcul",
    question: "CA : 420 000 € HT. Charges variables : 147 000 €. Charges fixes : 189 000 €. Calcule le seuil de rentabilité (arrondi à l'euro).",
    reponse: { valeur: 290769, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    explication: "MCV = 420 000 − 147 000 = 273 000 €\nTaux de MCV = [[273 000|420 000]] = 0,65, soit 65 %\nSR = [[189 000|0,65]] = 290 769,23 €, soit 290 769 € HT.",
    indice: "Calcule le taux de marge sur coût variable, puis divise les charges fixes par ce taux."
  },
  {
    id: "U3-055", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    type: "calcul",
    question: "SR = 270 000 €, CA annuel = 405 000 €, activité régulière sur une année de 360 jours. Au bout de combien de jours le point mort est-il atteint ?",
    reponse: { valeur: 240, unite: "jours", decimales: 0, tolerance: 1, signe: false },
    explication: "Point mort = [[SR|CA]] × 360 = [[270 000|405 000]] × 360 = [[2|3]] × 360 = 240 jours\nSoit 8 mois : fin août.",
    indice: "Quelle fraction du CA annuel représente le SR ? Applique-la au nombre de jours de l'année."
  },
  {
    id: "U3-056", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024",
    type: "calcul",
    question: "Ressources stables 210 000 €, emplois stables 172 000 €, stocks 58 000 €, créances clients 6 000 €, dettes fournisseurs, fiscales et sociales 31 000 €. Calcule la trésorerie nette.",
    reponse: { valeur: 5000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "FRNG = 210 000 − 172 000 = 38 000 €. BFR = 58 000 + 6 000 − 31 000 = 33 000 €. TN = FRNG − BFR = 38 000 − 33 000 = +5 000 € : positive, mais faible.",
    indice: "Calcule d'abord le FRNG, puis le BFR. La trésorerie nette est l'écart entre les deux, avec son signe."
  },
  {
    id: "U3-057", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2023",
    type: "calcul",
    question: "Un frontofocomètre est acheté et mis en service le 1er octobre pour 18 000 € HT, amorti en linéaire sur 6 ans. Calcule la dotation de la 1re année (exercice civil).",
    reponse: { valeur: 750, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Annuité pleine = [[18 000|6]] = 3 000 €\nD'octobre à décembre : 3 mois, soit 3 000 × [[3|12]] = 750 €\nLes années suivantes : 3 000 €, et la dernière reçoit les 2 250 € restants.",
    indice: "Annuité pleine = [[valeur|durée]]. La 1re année, ne compte que les mois depuis la mise en service."
  },
  {
    id: "U3-058", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "2024",
    type: "calcul",
    question: "Emprunt de 24 000 € sur 4 ans à 4 %, annuités constantes de 6 611,76 €. Calcule les intérêts de la 2e année.",
    reponse: { valeur: 733.93, unite: "€", decimales: 2, tolerance: 0.02, signe: false },
    explication: "Année 1 : intérêts = 24 000 × 4 % = 960 € ; capital remboursé = 6 611,76 − 960 = 5 651,76 € ; reste dû = 24 000 − 5 651,76 = 18 348,24 €. Année 2 : intérêts = 18 348,24 × 4 % = 733,93 €.",
    indice: "Les intérêts se calculent sur le capital restant dû. Commence par trouver ce qui reste dû après la 1re annuité."
  },
  {
    id: "U3-059", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2017",
    type: "calcul",
    question: "Salaire brut mensuel : 2 200 €. Cotisations salariales : 23 % du brut. Cotisations patronales : 42 % du brut. Calcule le coût mensuel pour l'employeur.",
    reponse: { valeur: 3124, unite: "€", decimales: 0, tolerance: 1, signe: false },
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
    explication: "Marge sur coût variable = 480 000 − 192 000 = 288 000 €\nTaux de MCV = [[288 000|480 000]] = 0,60, soit 60 %\nSeuil de rentabilité = [[charges fixes|taux de MCV]] = [[216 000|0,60]] = 360 000 € HT",
    indice: "Calcule d'abord le taux de marge sur coût variable, puis divise les charges fixes par ce taux."
  },
  {
    id: "U3-153", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-03", etape: 5, type: "calcul",
    question: "En supposant une activité régulière, au bout de combien de mois le point mort est-il atteint ?",
    reponse: { valeur: 9, unite: "mois", decimales: 0, tolerance: 0.5, signe: false },
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
    explication: "Valeur ajoutée = marge commerciale − autres achats et charges externes = 346 000 − 96 000 = 250 000 €\nEBE = valeur ajoutée − impôts et taxes − charges de personnel\n= 250 000 − 9 000 − 168 000 = 73 000 €\nL'EBE mesure ce que l'exploitation dégage avant amortissements, frais financiers et impôt.",
    indice: "Passe par la valeur ajoutée, puis retire impôts, taxes et personnel."
  },
  {
    id: "U3-161", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 5, type: "calcul",
    question: "Calcule le résultat net de l'exercice.",
    reponse: { valeur: 35000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Résultat d'exploitation = EBE − dotations = 73 000 − 24 000 = 49 000 €\nRésultat courant avant impôts = 49 000 − 6 000 = 43 000 €\nRésultat net = 43 000 − 8 000 = 35 000 €",
    indice: "Retire de l'EBE les dotations, puis les intérêts, puis l'impôt."
  },
  {
    id: "U3-162", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 6, type: "calcul",
    question: "Calcule la capacité d'autofinancement (CAF).",
    reponse: { valeur: 59000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "CAF = résultat net + dotations aux amortissements = 35 000 + 24 000 = 59 000 €\nLes dotations sont une charge qui ne sort pas d'argent : on les rajoute au résultat.",
    indice: "Une charge calculée comme l'amortissement n'est pas décaissée."
  },
  {
    id: "U3-163", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément",
    cas: "CAS-U3-04", etape: 7, type: "calcul",
    annexe: { titre: "Annexe 2 : situation financière", colonnes: ["", "Montant (€)"], lignes: [["Dettes financières", "150 000"], ["Capitaux propres", "180 000"], ["Annuité d'emprunt actuelle", "18 000"]] },
    question: "Calcule la capacité de remboursement : dettes financières divisées par CAF, en années (arrondi à 0,1).",
    reponse: { valeur: 2.5, unite: "ans", decimales: 1, tolerance: 0.05, signe: false },
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
    explication: "Annuité = [[220 000 × 0,04|1 − 1,04^−10]] = [[8 800|1 − 0,675564]] = [[8 800|0,324436]] = 27 124 €\nChaque année, Mme Roche paiera 27 124 €, intérêts et capital compris.",
    indice: "Utilise la formule avec une calculatrice : attention aux parenthèses et à l'exposant −10."
  },
  {
    id: "U3-170", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-05", etape: 4, type: "calcul",
    question: "Calcule les intérêts de la 1re année de cet emprunt.",
    reponse: { valeur: 8800, unite: "€", decimales: 0, tolerance: 1, signe: false },
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
    explication: "Porteurs = 18 000 × 0,66 = 11 880\nDépense d'un cycle de 2 ans = 11 880 × 340 = 4 039 200 €\nPar an : [[4 039 200|2]] = 2 019 600 € TTC",
    indice: "Porteurs × panier moyen, puis ramène à une année avec le rythme de renouvellement."
  },
  {
    id: "U3-177", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément",
    cas: "CAS-U3-06", etape: 2, type: "calcul",
    question: "Calcule le marché net, après l'IDC et l'évasion commerciale (à l'euro près).",
    reponse: { valeur: 1672229, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
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
    explication: "Coût de la campagne = 3 000 × 0,70 = 2 100 €\nCoût par client = [[2 100|105]] = 20 €\nCe coût se compare à la marge que laisse un client qui revient : si elle dépasse 20 €, l'action est rentable.",
    indice: "Coût total de l'envoi divisé par le nombre de clients touchés."
  },
  {
    id: "U3-183", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément",
    cas: "CAS-U3-06", etape: 8, type: "calcul",
    annexe: { titre: "Annexe 2 : prévisions du point de vente", colonnes: ["", "Valeur"], lignes: [["CA prévisionnel HT (étape 3)", "167 223 €"], ["Taux de marge sur coût variable", "55 %"], ["Charges fixes annuelles", "66 000 €"]] },
    question: "Calcule le seuil de rentabilité du point de vente, à l'euro près.",
    reponse: { valeur: 120000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
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
    explication: "Décaissements de mars = 26 000 + 20 000 + 4 000 + 6 500 + 2 000 + 43 200 = 101 700 €\nSolde final = 25 500 + 66 000 − 101 700 = −10 200 €\nLe signe compte : un solde négatif est un découvert.",
    indice: "N'oublie pas l'équipement TTC de l'étape 1 dans les décaissements de mars. Donne le résultat avec son signe."
  },
  {
    id: "U3-190", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément",
    cas: "CAS-U3-07", etape: 5, type: "calcul",
    question: "Calcule la dotation aux amortissements de l'exercice, sachant que l'équipement est amorti en linéaire sur 6 ans à partir de sa mise en service le 1er mars (exercice clos le 31 décembre).",
    reponse: { valeur: 5000, unite: "€", decimales: 0, tolerance: 1, signe: false },
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
