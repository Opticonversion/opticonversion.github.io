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
    explication: "Taux de marge = [[marge|coût d'achat HT]] = [[90|60]] = 1,50, soit 150 %.\nPiège classique : le taux de MARQUE divise par le prix de vente, [[90|150]] = 60 %. Le taux de MARGE divise par le coût d'achat.",
    indice: "Taux de MARGE ou taux de MARQUE ? L'un divise la marge par le coût d'achat, l'autre par le prix de vente. Lequel est demandé ici ?"
  },
  {
    id: "U3-003", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un opticien applique un coefficient multiplicateur TTC de 3 sur un verre acheté 40 € HT. Prix de vente TTC et taux de marque ?",
    choix: ["120 € TTC, taux de marque 60 %", "120 € TTC, taux de marque 66,7 %", "100 € TTC, taux de marque 60 %", "144 € TTC, taux de marque 72 %"],
    bonne: 0,
    explication: "Coefficient TTC = [[PV TTC|achat HT]], donc PV TTC = 40 × 3 = 120 €\nPV HT = [[120|1,2]] = 100 €\nMarge = 100 − 40 = 60 €\nTaux de marque = [[60|100]] = 60 %.",
    indice: "Le coefficient TTC transforme un achat HT en prix TTC. Trouve le prix TTC, repasse en HT, puis calcule la marge."
  },
  {
    id: "U3-004", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2017",
    question: "Un magasin vise un taux de marque de 60 %. Quel coefficient multiplicateur TTC doit-il appliquer sur ses achats HT ?",
    choix: ["1,6", "2,5", "3", "3,6"],
    bonne: 2,
    explication: "Coefficient HT = [[1|1 − taux de marque]] = [[1|1 − 0,6]] = [[1|0,4]] = 2,5\nCoefficient TTC = 2,5 × 1,2 = 3\nVérification : achat 100 €, PV HT 250 €, marge 150 €, taux de marque [[150|250]] = 60 %.",
    indice: "Prends un achat facile, par exemple 100 € HT : quel PV HT donne 60 % de marque ? Puis ajoute la TVA."
  },
  {
    id: "U3-005", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un client paie un équipement 240 € TTC. Quel est le montant de TVA collectée par le magasin (TVA 20 %) ?",
    choix: ["48 €", "40 €", "20 €", "200 €"],
    bonne: 1,
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
    explication: "Durées pour le renouvellement avec adaptation par l'opticien : 5 ans de 16 à 42 ans, 3 ans au-delà de 42 ans, sauf si le médecin s'y est opposé sur l'ordonnance. À 30 ans, une ordonnance de 4 ans est encore valable.",
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
    explication: "PV HT = [[168|1,2]] = 140 €\nMarge brute = 140 − 48 = 92 €\nTaux de marque = [[92|140]] × 100 = 65,7 %\nOn divise par le prix de vente HT, jamais par le TTC ni par le coût d'achat.",
    indice: "Retire d'abord la TVA du prix de vente. Le taux de marque se calcule sur le prix de vente HT."
  },
  {
    id: "U3-051", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "2023",
    type: "calcul",
    question: "Un verre est acheté 35 € HT et vendu 126 € TTC. Calcule le coefficient multiplicateur TTC.",
    reponse: { valeur: 3.6, unite: "", decimales: 1, signe: false },
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
  }

);
