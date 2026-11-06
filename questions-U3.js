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
    epreuve: "U3", theme: "Prix et marges", session: "2019",
    question: "Une monture est achetée 60 € HT et vendue 180 € TTC (TVA 20 %). Quel est le taux de marque ?",
    choix: ["60 %", "66,7 %", "50 %", "150 %"],
    bonne: 0,
    explication: "On travaille en HT. PV HT = 180 / 1,2 = 150 €. Marge brute = 150 − 60 = 90 €. Taux de marque = marge / PV HT = 90 / 150 = 60 %. (66,7 % = 120/180 : on a oublié de retirer la TVA ; 150 % = le taux de marge.)",
    indice: "Les taux se calculent toujours HT. Commence par enlever la TVA du prix de vente, puis divise la marge par le bon prix.",
    schema: "img/schemas/U3/prix-monture-60-180.svg",
    schemaTexte: "Barre du prix de 180 € TTC découpée en achat 60 €, marge 90 € et TVA 30 € : taux de marque 90/150 = 60 %, taux de marge 90/60 = 150 %, coefficient TTC 3."
  },
  {
    epreuve: "U3", theme: "Prix et marges", session: "complément",
    question: "Même monture : achat 60 € HT, vente 150 € HT. Quel est le taux de MARGE ?",
    choix: ["60 %", "40 %", "150 %", "250 %"],
    bonne: 2,
    explication: "Taux de marge = marge / coût d'achat HT = 90 / 60 = 150 %. Piège classique : le taux de MARQUE divise par le prix de vente (90/150 = 60 %), le taux de MARGE divise par le coût d'achat.",
    indice: "Taux de MARGE ou taux de MARQUE ? L'un divise la marge par le coût d'achat, l'autre par le prix de vente. Lequel est demandé ici ?"
  },
  {
    epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un opticien applique un coefficient multiplicateur TTC de 3 sur un verre acheté 40 € HT. Prix de vente TTC et taux de marque ?",
    choix: ["120 € TTC, taux de marque 60 %", "120 € TTC, taux de marque 66,7 %", "100 € TTC, taux de marque 60 %", "144 € TTC, taux de marque 72 %"],
    bonne: 0,
    explication: "Coefficient TTC = PV TTC / achat HT, donc PV TTC = 40 × 3 = 120 €. PV HT = 120 / 1,2 = 100 €. Marge = 100 − 40 = 60 €. Taux de marque = 60 / 100 = 60 %.",
    indice: "Le coefficient TTC transforme un achat HT en prix TTC. Trouve le prix TTC, repasse en HT, puis calcule la marge."
  },
  {
    epreuve: "U3", theme: "Prix et marges", session: "2017",
    question: "Un magasin vise un taux de marque de 60 %. Quel coefficient multiplicateur TTC doit-il appliquer sur ses achats HT ?",
    choix: ["1,6", "2,5", "3", "3,6"],
    bonne: 2,
    explication: "Coefficient HT = 1 / (1 − taux de marque) = 1 / 0,4 = 2,5. Coefficient TTC = 2,5 × 1,2 = 3. Vérification : achat 100 € → PV HT 250 €, marge 150 €, 150/250 = 60 %.",
    indice: "Prends un achat facile, par exemple 100 € HT : quel PV HT donne 60 % de marque ? Puis ajoute la TVA."
  },
  {
    epreuve: "U3", theme: "Prix et marges", session: "2023",
    question: "Un client paie un équipement 240 € TTC. Quel est le montant de TVA collectée par le magasin (TVA 20 %) ?",
    choix: ["48 €", "40 €", "20 €", "200 €"],
    bonne: 1,
    explication: "Le prix TTC contient déjà la TVA. HT = 240 / 1,2 = 200 €, donc TVA = 240 − 200 = 40 € (soit 1/6 du TTC). Le piège : 240 × 20 % = 48 €, ce qui revient à appliquer la TVA deux fois.",
    indice: "Le prix TTC contient déjà la TVA. Retrouve d'abord le prix HT, la TVA est la différence."
  },

  // ---------- Marché et zone de chalandise (4 années sur 5) ----------
  {
    epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Zone de chalandise : 12 000 habitants, 70 % de porteurs de lunettes, panier moyen 360 € TTC, renouvellement tous les 3 ans. Quel est le marché potentiel annuel ?",
    choix: ["3 024 000 € TTC", "1 008 000 € TTC", "336 000 € TTC", "2 520 000 € TTC"],
    bonne: 1,
    explication: "Porteurs = 12 000 × 0,70 = 8 400. Dépense sur 3 ans = 8 400 × 360 = 3 024 000 €. Chaque client ne renouvelle que tous les 3 ans, donc par an : 3 024 000 / 3 = 1 008 000 € TTC.",
    indice: "Nombre de porteurs × panier moyen donne la dépense d'un cycle complet. N'oublie pas que ce cycle dure 3 ans."
  },
  {
    epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Marché potentiel : 1 000 000 € TTC. Indice de disparité de la consommation (IDC) : 90. Évasion commerciale : 10 %. Quel est le marché net de l'évasion commerciale ?",
    choix: ["800 000 €", "900 000 €", "810 000 €", "990 000 €"],
    bonne: 2,
    explication: "IDC 90 = les habitants dépensent 10 % de moins que la moyenne nationale : 1 000 000 × 0,90 = 900 000 €. L'évasion = 10 % de ces dépenses partent ailleurs (internet, grande ville) : 900 000 × 0,90 = 810 000 €. On multiplie, on ne soustrait pas 20 % d'un coup.",
    indice: "Chaque correction s'applique au résultat de la précédente : on enchaîne des multiplications, on n'additionne pas les pourcentages.",
    schema: "img/schemas/U3/marche-idc-evasion.svg",
    schemaTexte: "Entonnoir du marché : 1 000 000 € de marché potentiel, multiplié par 0,90 pour l'IDC (900 000 €), puis par 0,90 pour l'évasion commerciale : 810 000 €."
  },
  {
    epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Le marché d'une zone, net de l'évasion commerciale, est de 480 000 € TTC. Le magasin espère en capter 25 %. Quel chiffre d'affaires HT peut-il prévoir ?",
    choix: ["120 000 €", "100 000 €", "96 000 €", "144 000 €"],
    bonne: 1,
    explication: "Part de marché : 480 000 × 0,25 = 120 000 € TTC. Le chiffre d'affaires d'une entreprise se donne HT : 120 000 / 1,2 = 100 000 € HT.",
    indice: "Deux étapes : la part de marché, puis la conversion. Le marché est donné TTC, le chiffre d'affaires d'une entreprise se donne HT."
  },
  {
    epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024",
    question: "Une opticienne prépare un service d'optique à domicile. Lequel de ces éléments est une MENACE ?",
    choix: ["La population de la zone vieillit", "Elle est diplômée et très connue dans le village", "Un concurrent proche propose déjà ce service", "Son magasin a un stock trop important"],
    bonne: 2,
    explication: "Opportunités et menaces viennent de l'EXTÉRIEUR (marché, concurrence, lois). Le concurrent est une menace, le vieillissement une opportunité. Les deux autres sont INTERNES : la notoriété est une force, le stock trop lourd une faiblesse.",
    indice: "Opportunités et menaces viennent de l'extérieur du magasin, forces et faiblesses de l'intérieur. Cherche ce qui est extérieur ET défavorable."
  },

  // ---------- Mercatique et communication (4 années sur 5) ----------
  {
    epreuve: "U3", theme: "Mercatique et communication", session: "2018",
    question: "Laquelle de ces actions est une communication HORS MÉDIA ?",
    choix: ["Une annonce dans la presse régionale", "Un spot de 30 secondes sur une radio locale", "Une affiche 4 × 3 sur le rond-point (affichage)", "Un courrier personnalisé aux clients"],
    bonne: 3,
    explication: "Les 6 grands médias : presse, radio, télévision, affichage, cinéma, internet. Le hors média regroupe le reste : publipostage, PLV en magasin, événement, salon, parrainage, carte de fidélité… En optique, le publipostage au moment du renouvellement est un grand classique.",
    indice: "Liste les 6 grands médias (presse, radio, télévision, affichage, cinéma, internet). Tout le reste est hors média."
  },
  {
    epreuve: "U3", theme: "Mercatique et communication", session: "2019",
    question: "Quelles sont les 4 variables du plan de marchéage (mix marketing, les « 4P ») ?",
    choix: ["Produit, prix, distribution, communication", "Produit, personnel, prix, promotion", "Prix, clientèle, concurrence, communication", "Produit, prix, publicité, profit"],
    bonne: 0,
    explication: "Product, Price, Place, Promotion = produit, prix, distribution (le lieu de vente), communication. Elles doivent être cohérentes entre elles : un magasin haut de gamme a des montures de créateurs, des prix élevés, un emplacement soigné et une communication sélective.",
    indice: "Le plan de marchéage porte sur l'offre du magasin, pas sur les clients ni sur les résultats. En anglais, les 4 mots commencent par P."
  },
  {
    epreuve: "U3", theme: "Mercatique et communication", session: "2023",
    question: "Quelle caractéristique est propre au commerce associé (coopérative d'opticiens) ?",
    choix: ["Le franchiseur transmet un savoir-faire contre une redevance", "Chaque opticien adhérent est associé de la coopérative et vote aux décisions", "Tous les magasins appartiennent à la même société", "Le magasin n'a aucun lien avec un réseau"],
    bonne: 1,
    explication: "En coopérative, les opticiens restent propriétaires de leur magasin et sont associés de la structure commune (achats groupés, enseigne, services) : en principe 1 personne = 1 voix. La redevance contre un savoir-faire, c'est la franchise. Tous les magasins à la même société, c'est le commerce intégré (succursales). Sans réseau, c'est l'indépendant isolé.",
    indice: "Dans une coopérative, qui est propriétaire de la structure commune ? Pense au mot « associé »."
  },
  {
    epreuve: "U3", theme: "Mercatique et communication", session: "2024",
    question: "Un opticien indépendant veut rejoindre une franchise. Que doit lui remettre le franchiseur au moins 20 jours avant la signature du contrat ?",
    choix: ["Un document d'information précontractuelle", "Le bilan des 10 dernières années de tous les franchisés", "Un contrat de travail signé par le franchiseur", "Une attestation de dépôt de la marque à l'INPI"],
    bonne: 0,
    explication: "La loi Doubin (article L330-3 du Code de commerce) impose un DIP au moins 20 jours avant : présentation du réseau, état du marché, comptes du franchiseur, durée, conditions de renouvellement… Le franchisé reste un commerçant indépendant, propriétaire de son fonds.",
    indice: "La loi Doubin protège le futur franchisé : avant de signer, il doit pouvoir étudier le réseau dans lequel il s'engage."
  },

  // ---------- Seuil de rentabilité (3 années sur 5) ----------
  {
    epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    question: "Chiffre d'affaires HT : 300 000 €. Charges variables : 120 000 €. Charges fixes : 135 000 €. Quel est le seuil de rentabilité ?",
    choix: ["255 000 €", "225 000 €", "180 000 €", "337 500 €"],
    bonne: 1,
    explication: "Marge sur coût variable = 300 000 − 120 000 = 180 000 €, soit un taux de 180 000 / 300 000 = 60 %. Seuil de rentabilité = charges fixes / taux de MCV = 135 000 / 0,60 = 225 000 €. C'est le CA à partir duquel le magasin ne perd plus d'argent.",
    indice: "Calcule d'abord la marge sur coût variable et son taux. Le seuil de rentabilité, c'est les charges fixes divisées par ce taux.",
    schema: "img/schemas/U3/seuil-rentabilite-300k.svg",
    schemaTexte: "Graphique : droite du chiffre d'affaires et droite des coûts totaux (135 000 € de charges fixes plus 40 % du CA). Elles se croisent à 225 000 €, le seuil de rentabilité. On peut faire glisser les charges fixes."
  },
  {
    epreuve: "U3", theme: "Seuil de rentabilité", session: "2019",
    question: "Même magasin : SR = 225 000 €, CA annuel = 300 000 €, activité régulière toute l'année. À quelle date le point mort est-il atteint ?",
    choix: ["Fin août", "Fin septembre", "Fin octobre", "Fin juin"],
    bonne: 1,
    explication: "Point mort = SR / CA × 12 mois = 225 000 / 300 000 × 12 = 0,75 × 12 = 9 mois, donc fin septembre. Si le magasin ferme un mois (par exemple en août), on compte sur les jours ou les mois réellement travaillés.",
    indice: "Le point mort est le moment de l'année où le CA atteint le SR. Quelle fraction du CA annuel représente le SR ?",
    schema: "img/schemas/U3/seuil-rentabilite-300k.svg",
    schemaTexte: "Graphique du seuil de rentabilité : le SR de 225 000 € représente les trois quarts du CA annuel de 300 000 €, soit 9 mois d'activité régulière."
  },
  {
    epreuve: "U3", theme: "Seuil de rentabilité", session: "2018",
    question: "Une ligne de montures se vend 125 € HT pièce, pour un coût variable de 50 € par monture. Ses charges fixes sont de 18 000 € par an. Combien faut-il en vendre PAR MOIS pour atteindre le seuil de rentabilité ?",
    choix: ["12 montures", "20 montures", "144 montures", "240 montures"],
    bonne: 1,
    explication: "Marge sur coût variable par monture = 125 − 50 = 75 €. SR en volume = 18 000 / 75 = 240 montures par an, soit 240 / 12 = 20 montures par mois. (240 est la bonne réponse… mais par an.)",
    indice: "Combien chaque monture vendue rapporte-t-elle pour couvrir les charges fixes ? Attention à l'unité de temps demandée."
  },
  {
    epreuve: "U3", theme: "Seuil de rentabilité", session: "2023",
    question: "Un nouveau rayon prévoit 40 000 € HT de CA, un taux de marge sur coût variable de 50 % et 24 000 € de charges fixes. Que conclure ?",
    choix: ["Le SR ne se calcule pas car le résultat est négatif", "SR = 48 000 € : il manque 8 000 € de CA pour ne plus perdre d'argent", "SR = 12 000 € : le rayon est très rentable", "SR = 20 000 € : le rayon est rentable"],
    bonne: 1,
    explication: "MCV = 40 000 × 0,5 = 20 000 €, moins 24 000 € de charges fixes : perte de 4 000 €. Le SR se calcule quand même : 24 000 / 0,5 = 48 000 €. Il est AU-DESSUS du CA prévu, il manque 8 000 € de ventes. Pour conclure, on propose des solutions : baisser les charges fixes, augmenter les ventes ou le taux de marge.",
    indice: "Calcule le résultat (MCV − charges fixes), puis le SR avec la formule habituelle. La formule marche même quand on perd de l'argent."
  },

  // ---------- Analyse financière (tombé chaque année sous une forme) ----------
  {
    epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Bilan fonctionnel : ressources stables 180 000 €, emplois stables 150 000 €, stocks 40 000 €, créances clients 5 000 €, dettes fournisseurs, fiscales et sociales 25 000 €. FRNG et BFR ?",
    choix: ["FRNG 30 000 € ; BFR 20 000 €", "FRNG 30 000 € ; BFR 70 000 €", "FRNG −30 000 € ; BFR 20 000 €", "FRNG 20 000 € ; BFR 30 000 €"],
    bonne: 0,
    explication: "FRNG = ressources stables − emplois stables = 180 000 − 150 000 = 30 000 €. BFR = (stocks + créances) − dettes d'exploitation = 45 000 − 25 000 = 20 000 €. Le FRNG est le « coussin » de ressources durables ; le BFR, l'argent bloqué par le cycle stock → vente → encaissement.",
    indice: "Le FRNG se lit en haut du bilan (ressources et emplois stables), le BFR au milieu : ce que l'exploitation bloque moins ce qu'elle finance."
  },
  {
    epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Avec un FRNG de 30 000 € et un BFR de 20 000 €, que vaut la trésorerie nette et que signifie-t-elle ?",
    choix: ["−10 000 € : le magasin vit à découvert", "50 000 € : le magasin a trop de stock", "10 000 € : le FRNG finance tout le BFR, il reste de la trésorerie", "10 000 € : le magasin doit emprunter à court terme"],
    bonne: 2,
    explication: "TN = FRNG − BFR = 30 000 − 20 000 = 10 000 €. On le vérifie aussi par le bas du bilan : trésorerie active (banque, caisse) − trésorerie passive (découverts). TN positive = équilibre financier. Si le FRNG était plus petit que le BFR, la TN serait négative : le magasin financerait son exploitation par le découvert.",
    indice: "Le FRNG finance d'abord le BFR. Ce qui reste, positif ou négatif, c'est la trésorerie."
  },
  {
    epreuve: "U3", theme: "Analyse financière", session: "2017",
    question: "Dettes fournisseurs : 24 000 € TTC. Achats de l'année : 146 000 € TTC. Quel est le délai moyen de crédit fournisseurs (année de 365 jours) ?",
    choix: ["60 jours", "6 jours", "36 jours", "90 jours"],
    bonne: 0,
    explication: "Délai fournisseurs = dettes fournisseurs / achats TTC × 365 = 24 000 / 146 000 × 365 = 60 jours. Même logique pour les clients (créances / CA TTC × 365). En optique, le délai clients est court (paiement au comptant, tiers payant), ce qui aide la trésorerie.",
    indice: "Délai = dette / flux annuel × nombre de jours. Garde tout en TTC et utilise l'année de 365 jours demandée."
  },
  {
    epreuve: "U3", theme: "Analyse financière", session: "2017",
    question: "Ventes de marchandises : 400 000 € HT. Achats : 150 000 €. Stock initial : 50 000 €. Stock final : 40 000 €. Quelle est la marge commerciale ?",
    choix: ["250 000 €", "260 000 €", "240 000 €", "210 000 €"],
    bonne: 2,
    explication: "Coût d'achat des marchandises vendues = achats + stock initial − stock final = 150 000 + 50 000 − 40 000 = 160 000 €. Marge commerciale = 400 000 − 160 000 = 240 000 €. Le stock a baissé de 10 000 € : on a vendu des montures achetées l'année d'avant, ce qui réduit la marge par rapport au simple « ventes − achats ».",
    indice: "Ce qu'on a vendu ne sort pas seulement des achats de l'année : ajoute le stock du début, retire celui de la fin."
  },
  {
    epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Le magasin embauche un opticien. Quel est le PREMIER solde intermédiaire de gestion touché par son salaire ?",
    choix: ["La marge commerciale", "La valeur ajoutée (VA)", "L'excédent brut d'exploitation (EBE)", "Le résultat courant avant impôts (RCAI)"],
    bonne: 2,
    explication: "Ordre des SIG : marge commerciale → valeur ajoutée (− charges externes) → EBE (− impôts et taxes − charges de personnel) → résultat d'exploitation → RCAI → résultat net. Le salaire et les cotisations patronales sont des charges de personnel : ils baissent l'EBE, puis tous les soldes qui suivent.",
    indice: "Récite l'ordre des SIG et ce que l'on retire à chaque étape. Où apparaissent les charges de personnel ?",
    schema: "img/schemas/U3/cascade-sig.svg",
    schemaTexte: "Cascade des SIG : marge commerciale, valeur ajoutée, EBE, résultat d'exploitation, RCAI, résultat net. Les charges de personnel sont retirées au niveau de l'EBE, mis en évidence."
  },
  {
    epreuve: "U3", theme: "Analyse financière", session: "2024",
    question: "Dettes financières : 60 000 €. Capitaux propres : 120 000 €. Que dire du ratio d'endettement ?",
    choix: ["0,5 : le magasin peut encore emprunter", "2 : le magasin est trop endetté", "0,5 : le magasin ne peut plus emprunter", "50 % : la banque refusera tout prêt"],
    bonne: 0,
    explication: "Ratio d'endettement = dettes financières / capitaux propres = 60 000 / 120 000 = 0,5. Repère : au-dessous de 1, les dettes bancaires restent inférieures à ce qu'ont apporté les propriétaires, la banque peut encore prêter. La banque regarde aussi la CAF (capacité de remboursement).",
    indice: "Ratio d'endettement = dettes financières / capitaux propres. Compare le résultat au repère de 1."
  },
  {
    epreuve: "U3", theme: "Investissement et financement", session: "2023",
    question: "Une meuleuse automatique est achetée et mise en service le 1er avril, pour 15 000 € HT, amortie en linéaire sur 5 ans. Quelle est la dotation de la 1re année (exercice du 1er janvier au 31 décembre) ?",
    choix: ["3 000 €", "2 250 €", "750 €", "2 500 €"],
    bonne: 1,
    explication: "Annuité pleine = 15 000 / 5 = 3 000 € par an. La 1re année, on ne compte que d'avril à décembre, soit 9 mois (prorata temporis) : 3 000 × 9/12 = 2 250 €. Valeur nette comptable fin d'année 1 = 15 000 − 2 250 = 12 750 €. La dernière année recevra les 750 € restants.",
    indice: "Amortissement linéaire : annuité = valeur / durée. La première année, compte seulement les mois depuis la mise en service."
  },
  {
    epreuve: "U3", theme: "Investissement et financement", session: "2023",
    question: "Pourquoi les dotations aux amortissements n'apparaissent-elles pas dans le budget de trésorerie ?",
    choix: ["Parce qu'elles ne sont payées que l'année suivante", "Parce qu'elles sont réglées directement par la banque", "Parce qu'elles ne sont pas déductibles du bénéfice", "Parce que c'est une charge calculée, sans sortie d'argent"],
    bonne: 3,
    explication: "L'argent est sorti une seule fois, le jour de l'achat (c'est ce décaissement qui figure dans le budget). La dotation étale ensuite ce coût sur la durée d'utilisation. Elle baisse le résultat, donc l'impôt (effet fiscal), sans toucher à la trésorerie.",
    indice: "Demande-toi quand l'argent sort vraiment de la banque : le jour de l'achat, ou chaque année de la dotation ?"
  },
  {
    epreuve: "U3", theme: "Investissement et financement", session: "2024",
    question: "Emprunt de 20 000 € sur 5 ans à 5 %, remboursé par annuités constantes de 4 619,50 €. Que contient la 1re annuité ?",
    choix: ["1 000 € d'intérêts et 3 619,50 € de capital remboursé", "4 000 € de capital et 619,50 € d'intérêts", "4 619,50 € d'intérêts", "923,90 € d'intérêts et 3 695,60 € de capital remboursé"],
    bonne: 0,
    explication: "Intérêts de l'année = capital restant dû × taux = 20 000 × 5 % = 1 000 €. Amortissement (capital remboursé) = annuité − intérêts = 4 619,50 − 1 000 = 3 619,50 €. Il reste 16 380,50 € à rembourser, donc les intérêts de l'année 2 seront plus faibles. Seuls les intérêts sont une charge (financière).",
    indice: "Les intérêts d'une année se calculent sur le capital restant dû. Le capital remboursé, c'est ce qui reste de l'annuité."
  },
  {
    epreuve: "U3", theme: "Investissement et financement", session: "2024",
    question: "Le magasin finance son véhicule de tournée par crédit-bail plutôt que par emprunt. Quel est l'effet sur les comptes ?",
    choix: ["Le véhicule est inscrit à l'actif et amorti", "Les loyers sont des charges externes, ce qui baisse la valeur ajoutée", "Les loyers sont des charges financières, ce qui baisse seulement le RCAI", "Il n'y a aucun effet sur le compte de résultat"],
    bonne: 1,
    explication: "En crédit-bail, l'entreprise loue le bien avec une option d'achat à la fin. Il n'est pas à son actif (pas d'amortissement, pas de dette bancaire au bilan) et les loyers vont en charges externes, donc baissent la VA. Avantages : pas de grosse sortie d'argent, pas d'endettement affiché. Inconvénient : coût total en général plus élevé qu'un emprunt.",
    indice: "En crédit-bail, le magasin loue le véhicule : il n'en est pas propriétaire. Dans quel type de charges range-t-on un loyer ?"
  },

  // ---------- Droit du travail ----------
  {
    epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "Un opticien veut embaucher un monteur pour un poste permanent en atelier. Il hésite à proposer d'abord un CDD « pour voir ». Est-ce possible ?",
    choix: ["Oui, le CDD est libre dès que le salarié l'accepte et le signe", "Oui, à condition de ne pas dépasser 3 ans au total", "Non, pas pour un emploi durable et permanent", "Non, le CDD est interdit dans tout le commerce de détail"],
    bonne: 2,
    explication: "Le CDI est le contrat normal (article L1242-1 du Code du travail pour l'interdiction). Le CDD n'est permis que pour des cas précis : remplacer un salarié absent, accroissement temporaire d'activité, emploi saisonnier… Pour tester le salarié, le bon outil est la période d'essai du CDI.",
    indice: "Le CDD n'est autorisé que pour des motifs précis et temporaires. Un poste permanent en fait-il partie ? Quel outil sert à tester un salarié ?"
  },
  {
    epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "En CDI, quelle est la durée maximale de la période d'essai d'un EMPLOYÉ fixée par le Code du travail (hors renouvellement) ?",
    choix: ["1 mois", "2 mois", "3 mois", "4 mois"],
    bonne: 1,
    explication: "Code du travail (L1221-19) : 2 mois pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres. Un seul renouvellement possible si un accord de branche étendu le prévoit et s'il est écrit dans le contrat. Intérêt pour les deux : l'employeur juge les compétences, le salarié juge le poste, et chacun peut rompre simplement.",
    indice: "Le Code du travail fixe trois durées selon la catégorie : ouvriers et employés, agents de maîtrise et techniciens, cadres."
  },
  {
    epreuve: "U3", theme: "Droit du travail", session: "2017",
    question: "Pour être valable, que doit OBLIGATOIREMENT prévoir une clause de non-concurrence dans le contrat d'un opticien salarié ?",
    choix: ["Une durée d'au moins 3 ans", "L'accord de l'inspection du travail", "Une contrepartie financière versée au salarié", "Une interdiction valable dans toute la France"],
    bonne: 2,
    explication: "Selon la jurisprudence (Cour de cassation, 2002), 4 conditions cumulatives : être indispensable à la protection des intérêts légitimes de l'entreprise, être limitée dans le temps ET dans l'espace, tenir compte des spécificités de l'emploi, et prévoir une contrepartie financière. Un rayon de 30 km pendant 1 an est raisonnable ; toute la France ne l'est pas.",
    indice: "Une clause de non-concurrence prive le salarié d'une partie de sa liberté de travailler. Que doit-il recevoir en échange ?"
  },
  {
    epreuve: "U3", theme: "Droit du travail", session: "2024",
    question: "La clause de non-concurrence d'un contrat ne prévoit aucune contrepartie financière. Quelle conséquence ?",
    choix: ["Tout le contrat de travail devient nul", "La clause est nulle, le contrat reste valable", "La clause reste valable, mais l'employeur paie une amende", "Le salarié doit rembourser une partie de ses salaires"],
    bonne: 1,
    explication: "Seule la clause tombe. Le contrat de travail continue normalement. Après son départ, le salarié est libre de travailler chez un concurrent ou de s'installer à côté. S'il a respecté une clause nulle, il peut demander des dommages-intérêts, à condition de prouver un préjudice (Cour de cassation, 2016). D'où l'intérêt de bien la rédiger dès le départ.",
    indice: "Une clause mal rédigée n'entraîne pas forcément tout le contrat avec elle. Qu'est-ce qui tombe exactement ?"
  },
  {
    epreuve: "U3", theme: "Droit du travail", session: "2017",
    question: "Salaire brut : 2 000 €. Cotisations salariales : 22 % du brut. Cotisations patronales : 45 % du brut. Salaire net et coût pour l'employeur ?",
    choix: ["Net 1 560 € ; coût 2 900 €", "Net 1 100 € ; coût 2 000 €", "Net 1 560 € ; coût 2 440 €", "Net 1 640 € ; coût 2 900 €"],
    bonne: 0,
    explication: "Net = brut − cotisations salariales = 2 000 × (1 − 0,22) = 1 560 €. Coût employeur = brut + cotisations patronales = 2 000 × 1,45 = 2 900 € (taux donnés par l'énoncé ; dans la réalité, près du SMIC, les réductions de cotisations patronales baissent nettement ce coût). Le salarié touche donc environ la moitié de ce que le poste coûte au magasin : à prendre en compte dans le seuil de rentabilité d'un projet d'embauche.",
    indice: "Les cotisations salariales sont retirées du brut, les cotisations patronales s'ajoutent au brut. Deux calculs séparés."
  },
  {
    epreuve: "U3", theme: "Droit du travail", session: "2023",
    question: "Une opticienne rachète un fonds de commerce où travaille déjà un salarié. Que devient son contrat ?",
    choix: ["Il s'arrête automatiquement à la vente", "Le vendeur doit le licencier avant la vente", "Il continue automatiquement avec le nouvel employeur", "Le repreneur peut choisir de le garder ou non"],
    bonne: 2,
    explication: "Article L1224-1 du Code du travail : en cas de vente, fusion, succession…, tous les contrats de travail en cours continuent avec le nouvel employeur, aux mêmes conditions (ancienneté, salaire). Le repreneur ne peut pas exiger un licenciement préalable.",
    indice: "Pense à l'article L1224-1 du Code du travail : que deviennent les contrats quand l'employeur change ?"
  },

  // ---------- Droit des entreprises ----------
  {
    epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Une opticienne crée seule sa société et la dirige. Quel est son statut social selon la forme choisie ?",
    choix: ["Gérante d'EURL : assimilée salariée ; présidente de SASU : indépendante", "Gérante d'EURL : indépendante ; présidente de SASU : assimilée salariée", "Salariée dans les deux cas", "Indépendante dans les deux cas"],
    bonne: 1,
    explication: "Gérant associé unique d'EURL = travailleur non salarié (protection sociale des indépendants, gérée par l'Urssaf et l'Assurance maladie, cotisations plus faibles, protection moindre). Président de SASU = assimilé salarié (régime général, meilleure protection, cotisations plus élevées, mais pas d'assurance chômage). Autres différences : EURL imposée à l'IR par défaut, SASU à l'IS par défaut.",
    indice: "Le gérant d'EURL et le président de SAS n'ont pas le même régime de protection sociale. Lequel relève du régime général ?"
  },
  {
    epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Lequel de ces éléments NE fait PAS partie du fonds de commerce d'un magasin d'optique ?",
    choix: ["La clientèle", "Le droit au bail", "L'enseigne et le nom commercial", "Les murs du magasin"],
    bonne: 3,
    explication: "Le fonds de commerce regroupe des biens MEUBLES : incorporels (clientèle, achalandage, nom commercial, enseigne, droit au bail) et corporels (agencement, matériel, stock). Les murs sont un bien immobilier, vendu à part. La clientèle est l'élément essentiel : sans elle, pas de fonds.",
    indice: "Le fonds de commerce ne contient que des biens meubles. Cherche l'élément qui est un bien immobilier."
  },
  {
    epreuve: "U3", theme: "Droit des entreprises", session: "2023",
    question: "Bail commercial « classique » d'un magasin d'optique : quelle affirmation est juste ?",
    choix: ["Il dure 1 an et se renouvelle automatiquement chaque année", "9 ans minimum ; congé et révision du loyer possibles tous les 3 ans", "Le propriétaire peut augmenter le loyer librement chaque mois", "Le locataire ne peut jamais partir avant la fin des 9 ans"],
    bonne: 1,
    explication: "C'est le bail « 3-6-9 » : au moins 9 ans, le locataire peut donner congé à la fin de chaque période de 3 ans (6 mois avant), et le loyer peut être révisé tous les 3 ans. Il existe aussi un bail dérogatoire de 3 ans maximum, pour tester une activité.",
    indice: "Pense au surnom du bail commercial : « 3-6-9 ». Que se passe-t-il à chaque échéance de 3 ans ?",
    schema: "img/schemas/U3/bail-3-6-9.svg",
    schemaTexte: "Frise du bail commercial sur 9 ans : à 3 et 6 ans, congé possible pour le locataire et révision du loyer, avec un préavis de 6 mois ; à 9 ans, fin du bail ou renouvellement."
  },
  {
    epreuve: "U3", theme: "Droit des entreprises", session: "2018",
    question: "Un magasin change d'enseigne. Comment protéger efficacement le nouveau nom ?",
    choix: ["En le déposant comme marque à l'INPI, protection de 10 ans renouvelable", "Il est protégé dans toute la France dès qu'il est sur la vitrine", "En l'inscrivant au registre du commerce : protection de 5 ans", "En le déposant à la mairie"],
    bonne: 0,
    explication: "Avant le dépôt, on vérifie que le nom n'est pas déjà pris (recherche d'antériorité). Puis dépôt de marque à l'INPI, dans les classes de produits et services voulues. La protection dure 10 ans et se renouvelle sans limite. Intérêt : empêcher un concurrent d'utiliser le nom et valoriser le fonds.",
    indice: "Afficher un nom sur la vitrine ne donne pas de droit exclusif partout. Quelle démarche officielle le donne, et pour combien de temps ?"
  },

  // ---------- Réglementation de l'opticien ----------
  {
    epreuve: "U3", theme: "Réglementation de l'opticien", session: "2019",
    question: "Avant de réaliser une réfraction pour adapter une ordonnance, que doit dire l'opticien au client ?",
    choix: ["Que l'examen est remboursé par la Sécurité sociale", "Que la réfraction pratiquée n'est pas un acte médical", "Qu'il doit revenir dans 3 mois", "Qu'il n'a pas le droit de vendre de lentilles"],
    bonne: 1,
    explication: "Le Code de la santé publique (décret du 12 octobre 2016 relatif à la délivrance des verres correcteurs et à l'exercice de la profession d'opticien-lunetier) oblige l'opticien à informer la personne que la réfraction qu'il pratique n'est pas un acte médical : elle ne remplace pas une consultation chez l'ophtalmologiste.",
    indice: "Le décret de 2016 encadre la réfraction faite par l'opticien. Qu'est-ce qui la distingue d'une consultation chez l'ophtalmologiste ?"
  },
  {
    epreuve: "U3", theme: "Réglementation de l'opticien", session: "2019",
    question: "Un client de 30 ans revient avec une ordonnance de lunettes datée d'il y a 4 ans, sans opposition du médecin. L'opticien peut-il renouveler en adaptant la correction ?",
    choix: ["Non, une ordonnance de lunettes n'est valable qu'un an", "Non, au-delà de 3 ans c'est impossible à tout âge", "Oui, entre 16 et 42 ans elle reste valable 5 ans", "Oui, une ordonnance n'a aucune limite de temps"],
    bonne: 2,
    explication: "Durées pour le renouvellement avec adaptation par l'opticien : 5 ans de 16 à 42 ans, 3 ans au-delà de 42 ans, sauf si le médecin s'y est opposé sur l'ordonnance. À 30 ans, une ordonnance de 4 ans est encore valable.",
    indice: "La durée pendant laquelle l'opticien peut adapter une ordonnance dépend de l'âge du client. Dans quelle tranche se trouve un client de 30 ans ?"
  },
  {
    epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément",
    question: "Depuis la réforme « 100 % Santé », que doit faire l'opticien pour tout équipement de lunettes ?",
    choix: ["Ne vendre que des équipements de classe A, sans reste à charge", "Proposer au moins une offre de classe A dans un devis normalisé", "Facturer les verres au prix fixé par la complémentaire santé", "Refuser les clients qui n'ont pas de complémentaire santé"],
    bonne: 1,
    explication: "Depuis 2020, l'opticien doit présenter une offre « 100 % Santé » (classe A : prix plafonnés, remboursée intégralement avec un contrat responsable) dans un devis normalisé, à côté des offres à tarifs libres (classe B). Le client reste libre de choisir. La réforme fait suite aux plafonds de remboursement des contrats responsables (2015).",
    indice: "Le client garde le choix, mais l'opticien a une obligation de proposer. Pense au panier de classe A et au devis."
  }

);
