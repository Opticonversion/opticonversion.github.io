// =====================================================================
//  QUESTIONS D'ENTRAÎNEMENT · U3 (Économie et gestion de l'entreprise)
//  Les mêmes notions que questions-U3.js, avec d'autres chiffres, pour les
//  élèves qui veulent s'entraîner plus. Elles ne comptent pas dans l'Essentiel.
//  Même format qu'une question normale, avec en plus  entrainement: true.
//  Format complet : notes/coordination/format-entrainement.md
// =====================================================================
QUESTIONS.push(

  // ---------- Prix et marges ----------
  {
    id: "U3-066", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2019", entrainement: true,
    question: "Un verre est acheté 50 € HT et vendu 180 € TTC (TVA 20 %). Quel est le taux de marque ?",
    choix: ["66,7 %", "72,2 %", "200 %", "55,6 %"],
    bonne: 0,
    explication: "On travaille en HT.\nPV HT = [[180|1,2]] = 150 €\nMarge brute = 150 − 50 = 100 €\nTaux de marque = [[100|150]] = 66,7 %\nErreurs classiques : 72,2 % = [[180 − 50|180]] (marge calculée avec le TTC), 200 % = [[100|50]] (taux de marge), 55,6 % = [[100|180]] (marge divisée par le prix TTC).",
    indice: "Le taux de marque se calcule sur le prix de vente HT. Commence par retirer la TVA du prix affiché."
  },
  {
    id: "U3-067", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une paire de lunettes solaires est achetée 80 € HT et vendue 140 € HT. Calcule le taux de MARGE.",
    reponse: { valeur: 75, unite: "%", decimales: 0, tolerance: 1, signe: false },
    explication: "Marge brute = 140 − 80 = 60 €\nTaux de marge = [[marge|coût d'achat HT]] = [[60|80]] = 75 %\nLe taux de marque, lui, serait [[60|140]] = 42,9 % : ce n'est pas le même calcul.",
    indice: "Le taux de marge divise la marge par le coût d'achat HT, pas par le prix de vente."
  },
  {
    id: "U3-068", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2023", entrainement: true,
    question: "Un opticien applique un coefficient multiplicateur TTC de 3,3 sur un verre acheté 60 € HT. Quels sont le prix de vente TTC et le taux de marque ?",
    choix: ["198 € TTC, taux de marque 63,6 %", "198 € TTC, taux de marque 69,7 %", "165 € TTC, taux de marque 63,6 %", "198 € TTC, taux de marque 175 %"],
    bonne: 0,
    explication: "PV TTC = 60 × 3,3 = 198 €\nPV HT = [[198|1,2]] = 165 €\nMarge = 165 − 60 = 105 €\nTaux de marque = [[105|165]] = 63,6 %\nErreurs : 69,7 % = [[198 − 60|198]] (marge mélangeant TTC et HT), 165 € est le prix HT, et 175 % = [[105|60]] est le taux de marge.",
    indice: "Le coefficient TTC donne le prix TTC. Repasse en HT avant de calculer la marge et le taux."
  },
  {
    id: "U3-069", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "2017", entrainement: true,
    type: "calcul",
    question: "Un magasin vise un taux de marque de 50 %. Quel coefficient multiplicateur TTC doit-il appliquer à ses achats HT ?",
    reponse: { valeur: 2.4, unite: "", decimales: 1, tolerance: 0.05, signe: false },
    explication: "Coefficient HT = [[1|1 − taux de marque]] = [[1|0,5]] = 2\nCoefficient TTC = 2 × 1,2 = 2,4\nVérification : achat 100 € HT, prix HT 200 €, marge 100 €, taux de marque [[100|200]] = 50 %, prix TTC 240 €.",
    indice: "Trouve d'abord le coefficient qui donne le bon taux de marque en HT, puis ajoute la TVA."
  },
  {
    id: "U3-070", difficulte: "facile", epreuve: "U3", theme: "Prix et marges", session: "2023", entrainement: true,
    type: "calcul",
    question: "Un client paie une paire de lunettes 360 € TTC. Quel est le montant de TVA collectée (TVA 20 %) ?",
    reponse: { valeur: 60, unite: "€", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Le prix TTC contient déjà la TVA.\nPrix HT = [[360|1,2]] = 300 €\nTVA = 360 − 300 = 60 € (soit [[1|6]] du TTC).\nCalculer 360 × 20 % = 72 € serait une erreur : on appliquerait le taux à un prix qui contient déjà la taxe.",
    indice: "Retrouve d'abord le prix HT en divisant le TTC par 1,2. La TVA est la différence."
  },
  {
    id: "U3-071", difficulte: "difficile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    question: "Un opticien veut vendre une monture 250 € HT avec un taux de marque de 60 %. Quel est son prix d'achat HT maximum ?",
    choix: ["156,25 €", "100 €", "150 €", "208,33 €"],
    bonne: 1,
    explication: "Taux de marque 60 % : la marge vaut 60 % du prix de vente HT.\nMarge = 250 × 0,60 = 150 €\nCoût d'achat = 250 − 150 = 100 €\nErreurs : 150 € est la marge, pas le coût ; 156,25 € = [[250|1,6]] correspondrait à un taux de MARGE de 60 % ; 208,33 € = [[250|1,2]] retire une TVA qui n'a rien à faire ici.",
    indice: "La marge vaut 60 % du prix de vente HT. Le coût d'achat est ce qui reste."
  },

  // ---------- Marché et zone de chalandise ----------
  {
    id: "U3-072", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024", entrainement: true,
    type: "calcul",
    question: "Zone de chalandise : 20 000 habitants, 60 % de porteurs de lunettes, panier moyen 450 € TTC, renouvellement tous les 3 ans. Calcule le marché potentiel annuel.",
    reponse: { valeur: 1800000, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    explication: "Porteurs = 20 000 × 0,60 = 12 000\nDépense sur 3 ans = 12 000 × 450 = 5 400 000 €\nPar an : [[5 400 000|3]] = 1 800 000 € TTC.",
    indice: "Nombre de porteurs × panier moyen donne la dépense d'un cycle complet. Ramène-la à une seule année."
  },
  {
    id: "U3-073", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024", entrainement: true,
    type: "calcul",
    question: "Marché potentiel : 600 000 € TTC. Indice de disparité de la consommation (IDC) : 85. Évasion commerciale : 15 %. Calcule le marché net de l'évasion commerciale.",
    reponse: { valeur: 433500, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    explication: "IDC 85 : 600 000 × 0,85 = 510 000 €. Évasion de 15 % : 510 000 × (1 − 0,15) = 510 000 × 0,85 = 433 500 € TTC. On enchaîne les multiplications ; retirer 30 % d'un coup (420 000 €) est faux.",
    indice: "Applique l'IDC, puis l'évasion sur le résultat obtenu. Chaque correction est une multiplication."
  },
  {
    id: "U3-074", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2024", entrainement: true,
    question: "Le marché d'une zone, net de l'évasion commerciale, est de 360 000 € TTC. Le magasin espère en capter 30 %. Quel chiffre d'affaires HT peut-il prévoir ?",
    choix: ["90 000 €", "108 000 €", "129 600 €", "75 000 €"],
    bonne: 0,
    explication: "Part de marché : 360 000 × 0,30 = 108 000 € TTC\nUn chiffre d'affaires se donne HT : [[108 000|1,2]] = 90 000 € HT\nErreurs : 108 000 € est resté en TTC, 129 600 € multiplie par 1,2 au lieu de diviser, 75 000 € divise deux fois par 1,2.",
    indice: "Calcule la part de marché, puis passe du TTC au HT dans le bon sens."
  },
  {
    id: "U3-075", difficulte: "facile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "2023", entrainement: true,
    question: "Un opticien veut développer un rayon basse vision. Lequel de ces éléments est une OPPORTUNITÉ ?",
    choix: ["Une enseigne nationale vient d'ouvrir à 500 m du magasin", "Le local actuel est trop petit pour installer un rayon", "Une résidence pour personnes âgées ouvre à côté du magasin", "Le gérant n'a pas de formation en basse vision"],
    bonne: 2,
    explication: "Une opportunité vient de l'extérieur et favorise le projet : ici, une clientèle plus âgée qui s'installe près du magasin. L'enseigne nationale est une menace (extérieure et défavorable). Le local trop petit et le manque de formation sont des faiblesses : ils sont internes au magasin.",
    indice: "Opportunités et menaces viennent de l'extérieur du magasin. Cherche ce qui est extérieur ET favorable."
  },

  // ---------- Seuil de rentabilité ----------
  {
    id: "U3-076", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019", entrainement: true,
    type: "calcul",
    question: "Chiffre d'affaires HT : 600 000 €. Charges variables : 270 000 €. Charges fixes : 220 000 €. Calcule le seuil de rentabilité.",
    reponse: { valeur: 400000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    explication: "Marge sur coût variable = 600 000 − 270 000 = 330 000 €\nTaux de MCV = [[330 000|600 000]] = 0,55, soit 55 %\nSeuil de rentabilité = [[charges fixes|taux de MCV]] = [[220 000|0,55]] = 400 000 € HT.",
    indice: "Calcule la marge sur coût variable et son taux, puis divise les charges fixes par ce taux."
  },
  {
    id: "U3-077", difficulte: "facile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2019", entrainement: true,
    type: "calcul",
    question: "SR = 180 000 €, CA annuel = 240 000 €, le magasin est ouvert 312 jours par an. Au bout de combien de jours d'ouverture le point mort est-il atteint ?",
    reponse: { valeur: 234, unite: "jours", decimales: 0, tolerance: 1, signe: false },
    explication: "Point mort = [[SR|CA]] × jours d'ouverture = [[180 000|240 000]] × 312 = 0,75 × 312 = 234 jours\nLe magasin ne gagne de l'argent qu'après ces 234 jours : il en reste 78.",
    indice: "Quelle fraction du CA annuel représente le seuil ? Applique-la au nombre de jours d'ouverture."
  },
  {
    id: "U3-078", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "2018", entrainement: true,
    question: "Une ligne de montures se vend 90 € HT pièce, pour un coût variable de 36 € par monture. Ses charges fixes sont de 19 440 € par an. Combien faut-il en vendre PAR MOIS pour atteindre le seuil de rentabilité ?",
    choix: ["18 montures", "30 montures", "216 montures", "360 montures"],
    bonne: 1,
    explication: "Marge sur coût variable par monture = 90 − 36 = 54 €\nSR en volume = [[19 440|54]] = 360 montures par an\nPar mois : [[360|12]] = 30 montures\nErreurs : 360 est le seuil annuel, 216 = [[19 440|90]] oublie le coût variable, 18 = [[216|12]].",
    indice: "Combien chaque monture vendue rapporte-t-elle, une fois son coût variable payé ? Attention à l'unité de temps demandée."
  },
  {
    id: "U3-079", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "2023", entrainement: true,
    question: "Un nouveau rayon prévoit 50 000 € HT de CA, un taux de marge sur coût variable de 40 % et 24 000 € de charges fixes. Que conclure ?",
    choix: ["SR = 60 000 € : il manque 10 000 € de CA pour ne plus perdre d'argent", "Le SR ne se calcule pas car le résultat est négatif", "SR = 9 600 € : le rayon est très rentable", "SR = 20 000 € : le rayon est rentable"],
    bonne: 0,
    explication: "MCV = 50 000 × 0,40 = 20 000 €\nRésultat = 20 000 − 24 000 = −4 000 € : une perte.\nSR = [[24 000|0,40]] = 60 000 €\nIl est au-dessus du CA prévu : il manque 10 000 € de ventes.\n9 600 € = 24 000 × 0,40 multiplie au lieu de diviser ; 20 000 € est la MCV, pas le seuil.",
    indice: "La formule du seuil marche même quand le rayon perd de l'argent. Compare ensuite le résultat au CA prévu."
  },

  // ---------- Analyse financière ----------
  {
    id: "U3-080", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024", entrainement: true,
    type: "calcul",
    question: "Ressources stables : 320 000 €. Emplois stables : 275 000 €. Calcule le fonds de roulement net global (FRNG).",
    reponse: { valeur: 45000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "FRNG = ressources stables − emplois stables = 320 000 − 275 000 = 45 000 €. Positif : les ressources durables financent tous les investissements et il reste un coussin pour l'exploitation.",
    indice: "Le FRNG se lit en haut du bilan fonctionnel : ressources stables moins emplois stables."
  },
  {
    id: "U3-081", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024", entrainement: true,
    type: "calcul",
    question: "Stocks : 62 000 €. Créances clients : 9 000 €. Dettes fournisseurs : 28 000 €. Dettes fiscales et sociales : 17 000 €. Calcule le besoin en fonds de roulement (BFR).",
    reponse: { valeur: 26000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "BFR = (stocks + créances clients) − (dettes fournisseurs + dettes fiscales et sociales) = 71 000 − 45 000 = 26 000 €. C'est l'argent immobilisé par le cycle d'exploitation.",
    indice: "Actif circulant d'exploitation moins dettes d'exploitation. Les deux types de dettes comptent."
  },
  {
    id: "U3-082", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2024", entrainement: true,
    question: "Un magasin a un FRNG de 18 000 € et un BFR de 30 000 €. Que vaut sa trésorerie nette et que signifie-t-elle ?",
    choix: ["−12 000 € : le magasin finance une partie de son exploitation par du découvert", "+12 000 € : le magasin a de la trésorerie disponible", "48 000 € : le magasin est très solide", "−12 000 € : très bonne situation, le BFR est élevé"],
    bonne: 0,
    explication: "TN = FRNG − BFR = 18 000 − 30 000 = −12 000 €. Les ressources durables ne suffisent pas à financer le cycle d'exploitation : le manque est couvert par des concours bancaires (découvert), qui coûtent des agios. Pour corriger : renforcer les ressources stables ou réduire le BFR (stock, délais clients).",
    indice: "La trésorerie nette est l'écart entre le FRNG et le BFR, avec son signe. Que signifie un résultat négatif ?"
  },
  {
    id: "U3-083", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "2017", entrainement: true,
    type: "calcul",
    question: "Ventes de marchandises : 500 000 € HT. Achats : 210 000 €. Stock initial : 45 000 €. Stock final : 60 000 €. Calcule la marge commerciale.",
    reponse: { valeur: 305000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Coût d'achat des marchandises vendues = achats + stock initial − stock final = 210 000 + 45 000 − 60 000 = 195 000 €. Marge commerciale = 500 000 − 195 000 = 305 000 €. Le stock a augmenté de 15 000 € : ces marchandises ne sont pas encore vendues, elles ne comptent pas comme charge de l'année.",
    indice: "Corrige les achats par la variation de stock avant de les retirer des ventes."
  },
  {
    id: "U3-084", difficulte: "facile", epreuve: "U3", theme: "Analyse financière", session: "2024", entrainement: true,
    question: "Dettes financières : 84 000 €. Capitaux propres : 70 000 €. Que dire du ratio d'endettement ?",
    choix: ["1,2 : les banques ont prêté plus que les propriétaires n'ont apporté, un nouvel emprunt sera difficile", "0,83 : le magasin peut encore emprunter facilement", "1,2 : le ratio est bon car supérieur à 1", "1,2 % : l'endettement est négligeable"],
    bonne: 0,
    explication: "Ratio d'endettement = [[dettes financières|capitaux propres]] = [[84 000|70 000]] = 1,2\nAu-dessus de 1, les dettes bancaires dépassent les capitaux propres : le magasin est déjà très endetté et la banque hésitera à prêter davantage. 0,83 = [[70 000|84 000]] est le calcul à l'envers. Le ratio n'est pas un pourcentage.",
    indice: "Calcule dettes financières sur capitaux propres, puis compare le résultat au repère de 1."
  },

  // ---------- Investissement et financement ----------
  {
    id: "U3-085", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "2023", entrainement: true,
    type: "calcul",
    question: "Un autoréfractomètre est acheté et mis en service le 1er juillet pour 24 000 € HT, amorti en linéaire sur 8 ans. Calcule la dotation de la 1re année (exercice civil).",
    reponse: { valeur: 1500, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Annuité pleine = [[24 000|8]] = 3 000 €\nDe juillet à décembre : 6 mois, soit 3 000 × [[6|12]] = 1 500 €\nLes années suivantes : 3 000 €, et la dernière année recevra les 1 500 € restants.",
    indice: "Annuité pleine = [[valeur|durée]]. La 1re année, ne compte que les mois depuis la mise en service."
  },
  {
    id: "U3-086", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "2024", entrainement: true,
    type: "calcul",
    question: "Emprunt de 50 000 € sur 5 ans à 6 %, remboursé par annuités constantes de 11 869,82 €. Calcule les intérêts de la 2e année.",
    reponse: { valeur: 2467.81, unite: "€", decimales: 2, tolerance: 0.02, signe: false },
    explication: "Année 1 : intérêts = 50 000 × 6 % = 3 000 € ; capital remboursé = 11 869,82 − 3 000 = 8 869,82 € ; capital restant dû = 50 000 − 8 869,82 = 41 130,18 €. Année 2 : intérêts = 41 130,18 × 6 % = 2 467,81 €.",
    indice: "Les intérêts se calculent sur le capital restant dû. Commence par ce qui reste dû après la 1re annuité."
  },
  {
    id: "U3-087", difficulte: "facile", epreuve: "U3", theme: "Investissement et financement", session: "2024", entrainement: true,
    question: "Quel est un avantage du crédit-bail pour financer un véhicule de tournée ?",
    choix: ["Pas de grosse sortie d'argent à l'achat et pas de dette bancaire au bilan", "Le véhicule appartient au magasin dès la signature et peut être amorti", "Le coût total est toujours inférieur à celui d'un emprunt", "Les loyers n'ont aucune incidence sur le résultat"],
    bonne: 0,
    explication: "En crédit-bail, le magasin loue le véhicule avec une option d'achat : pas de grosse dépense initiale et pas d'emprunt au bilan. Mais le bien n'est pas à l'actif (pas d'amortissement), le coût total est en général supérieur à celui d'un emprunt, et les loyers sont des charges externes qui baissent la valeur ajoutée.",
    indice: "Pense à ce que le magasin paie le jour de la signature, et à ce qui apparaît ou non au bilan."
  },

  // ---------- Droit du travail ----------
  {
    id: "U3-088", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2017", entrainement: true,
    type: "calcul",
    question: "Salaire brut mensuel : 1 900 €. Cotisations salariales : 21 % du brut. Calcule le salaire net.",
    reponse: { valeur: 1501, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Net = brut − cotisations salariales = 1 900 × (1 − 0,21) = 1 900 × 0,79 = 1 501 €. Les cotisations patronales ne changent pas le net : elles s'ajoutent au brut pour donner le coût employeur.",
    indice: "Le net s'obtient en retirant du brut les cotisations salariales, et seulement elles."
  },
  {
    id: "U3-089", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2024", entrainement: true,
    question: "Un opticien embauche un technicien en CDI. Quelle est la durée maximale légale de sa période d'essai, hors renouvellement ?",
    choix: ["1 mois", "2 mois", "3 mois", "4 mois"],
    bonne: 2,
    explication: "Code du travail (L1221-19) : 2 mois pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres. Un seul renouvellement est possible, à condition qu'un accord de branche étendu le prévoie et que le contrat l'écrive. Une durée plus courte peut être fixée par la convention collective ou le contrat.",
    indice: "La durée maximale dépend de la catégorie du salarié : employé, technicien ou agent de maîtrise, cadre."
  },
  {
    id: "U3-090", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "2024", entrainement: true,
    question: "Un magasin veut remplacer une opticienne en congé maternité pendant 4 mois. Peut-il recruter en CDD ?",
    choix: ["Oui, le remplacement d'un salarié absent est un motif légal de CDD", "Non, un CDD n'est jamais possible dans le commerce", "Oui, mais seulement pour 1 mois", "Non, il faut obligatoirement un CDI"],
    bonne: 0,
    explication: "Le CDD est interdit pour pourvoir durablement un emploi lié à l'activité normale du magasin, mais il est permis dans des cas précis : remplacement d'un salarié absent, accroissement temporaire d'activité, emploi saisonnier. Un congé maternité est une absence temporaire : le CDD de remplacement est légal pour toute la durée de l'absence.",
    indice: "Le CDD n'est possible que pour des motifs précis et temporaires. Remplacer une personne absente en fait-il partie ?"
  },

  // ---------- Lot 2 d'entraînement : en plus (U3-091 à U3-115) ----------
  {
    id: "U3-091", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une monture est achetée 72 € HT. L'opticien veut un taux de marque de 40 %. Quel prix de vente TTC affiche-t-il (TVA 20 %) ?",
    reponse: { valeur: 144, unite: "€ TTC", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Le taux de marque porte sur le prix de vente HT : marge = 40 % du PV HT, donc l'achat en représente 60 %.\nPV HT = [[72|0,6]] = 120 €\nPV TTC = 120 × 1,2 = 144 €\nErreur fréquente : 72 × 1,4 = 100,80 €, qui applique 40 % à l'achat (c'est un taux de marge).",
    indice: "Si la marge vaut 40 % du prix de vente HT, l'achat en vaut 60 %. Divise l'achat par 0,6, puis ajoute la TVA."
  },
  {
    id: "U3-092", difficulte: "difficile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    question: "Un opticien applique un coefficient multiplicateur de 2,5 sur son coût d'achat HT pour obtenir son prix de vente HT. Quels sont ses taux de marge et de marque ?",
    choix: ["Taux de marge 150 %, taux de marque 60 %", "Taux de marge 60 %, taux de marque 150 %", "Taux de marge 150 %, taux de marque 40 %", "Taux de marge 250 %, taux de marque 60 %"],
    bonne: 0,
    explication: "Prenons un achat de 100 € HT : PV HT = 250 €, marge = 150 €.\nTaux de marge = [[150|100]] = 150 %\nTaux de marque = [[150|250]] = 60 %\nLe taux de marque est toujours inférieur à 100 %, pas le taux de marge. 40 % est la part de l'achat dans le prix ([[100|250]]), et 250 % est le coefficient pris pour un taux.",
    indice: "Pose un achat de 100 € : calcule le prix de vente, puis la marge, puis divise une fois par l'achat et une fois par la vente."
  },
  {
    id: "U3-093", difficulte: "difficile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    question: "Une monture affichée 240 € TTC, achetée 80 € HT, est soldée avec 25 % de remise. Quel est le taux de marque après remise (TVA 20 %) ?",
    choix: ["46,7 %", "55,6 %", "53,3 %", "87,5 %"],
    bonne: 0,
    explication: "Prix remisé TTC = 240 × 0,75 = 180 €\nPV HT = [[180|1,2]] = 150 €\nMarge = 150 − 80 = 70 €\nTaux de marque = [[70|150]] = 46,7 % (contre 60 % avant remise : 200 € HT, marge 120 €)\nErreurs : 55,6 % = [[180 − 80|180]] (TTC mélangé au HT), 53,3 % = [[80|150]] (part de l'achat), 87,5 % = [[70|80]] (taux de marge).",
    indice: "Applique d'abord la remise, repasse en HT, puis calcule la marge. Le taux de marque se divise par le prix de vente HT."
  },
  {
    id: "U3-094", difficulte: "difficile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin réalise 40 000 € HT de CA en montures (taux de marque 65 %) et 60 000 € HT en verres (taux de marque 75 %). Quel est son taux de marque global ?",
    reponse: { valeur: 71, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "On additionne les marges, on ne fait pas la moyenne des taux. Marge montures = 40 000 × 0,65 = 26 000 €. Marge verres = 60 000 × 0,75 = 45 000 €. Marge totale = 71 000 € pour 100 000 € de CA : taux de marque global = 71 %. La moyenne simple (70 %) oublie que les verres pèsent plus lourd dans le CA.",
    indice: "Calcule la marge de chaque famille en euros, additionne, puis divise par le CA total."
  },
  {
    id: "U3-095", difficulte: "moyen", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un fournisseur propose des verres à 200 € HT le catalogue, avec 15 % de remise, puis 2 % d'escompte pour règlement comptant (calculé sur le prix remisé). Quel est le coût d'achat net HT (au centime près) ?",
    reponse: { valeur: 166.6, unite: "€ HT", decimales: 2, tolerance: 0.02, signe: false },
    explication: "Remise : 200 × 0,85 = 170 €. Escompte sur le prix remisé : 170 × 0,98 = 166,60 €. Ne pas additionner les deux taux (17 % donnerait 166 €) : l'escompte s'applique après la remise. C'est ce coût d'achat net qui sert de base au calcul de la marge.",
    indice: "Enchaîne les deux réductions l'une après l'autre : × 0,85 puis × 0,98."
  },
  {
    id: "U3-096", difficulte: "difficile", epreuve: "U3", theme: "Prix et marges", session: "complément", entrainement: true,
    question: "Un fournisseur augmente le prix d'un verre de 70 € à 84 € HT. L'opticien veut conserver un taux de marque de 60 %. Quel nouveau prix de vente TTC doit-il afficher (TVA 20 %) ?",
    choix: ["252 €", "210 €", "201,60 €", "134,40 €"],
    bonne: 0,
    explication: "L'achat représente 40 % du prix de vente HT.\nPV HT = [[84|0,4]] = 210 €\nPV TTC = 210 × 1,2 = 252 €\nErreurs : 210 € oublie la TVA, 201,60 € = 84 × 2,4 (coefficient d'un taux de marque de 50 %), 134,40 € = 84 × 1,6 (applique 60 % comme un taux de marge).",
    indice: "Taux de marque 60 % : l'achat vaut 40 % du prix de vente HT. Ensuite, ajoute la TVA."
  },

  // ---------- Marché et zone de chalandise ----------
  {
    id: "U3-097", difficulte: "facile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", entrainement: true,
    type: "calcul",
    question: "Le marché local de l'optique représente 3 000 000 € TTC par an. Le magasin réalise 450 000 € TTC de CA. Quelle est sa part de marché ?",
    reponse: { valeur: 15, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Part de marché = [[CA du magasin|CA du marché]] = [[450 000|3 000 000]] = 0,15, soit 15 %\nLes deux montants sont dans la même unité (ici TTC).",
    indice: "Divise le CA du magasin par le marché total, les deux en TTC."
  },
  {
    id: "U3-098", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", entrainement: true,
    question: "Une ville de 60 000 habitants compte 24 magasins d'optique. La moyenne du département est de 3 magasins pour 10 000 habitants. Quel commentaire est le plus juste ?",
    choix: ["4 magasins pour 10 000 habitants : plus dense que la moyenne, marché plus concurrentiel", "Un magasin pour 2 500 habitants : zone moins concurrentielle que la moyenne", "2,5 magasins pour 10 000 habitants : zone un peu moins dense que la moyenne", "La densité ne peut pas se comparer à une moyenne départementale"],
    bonne: 0,
    explication: "Densité = [[24|60 000]] × 10 000 = 4 magasins pour 10 000 habitants, contre 3 en moyenne : la zone est plus dense, donc plus concurrentielle.\nPiège de la 2e réponse : [[60 000|24]] = 2 500 habitants par magasin, ce qui correspond bien à 4 magasins pour 10 000, donc à plus de concurrence, pas à moins.",
    indice: "Ramène le nombre de magasins à 10 000 habitants avant de comparer avec la référence."
  },
  {
    id: "U3-099", difficulte: "difficile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", entrainement: true,
    type: "calcul",
    question: "Le CA d'un magasin progresse de 10 % sur un an, alors que le marché local progresse de 6 %. De combien augmente sa part de marché, en pourcentage de sa part initiale (arrondi à 0,1 %) ?",
    reponse: { valeur: 3.8, unite: "%", decimales: 1, tolerance: 0.05, signe: false },
    explication: "Part de marché = [[CA magasin|CA marché]]\n[[nouvelle part|ancienne part]] = [[1,10|1,06]] = 1,0377, soit une hausse relative de 3,8 %.\nLe magasin gagne des parts de marché, mais l'écart n'est pas 10 − 6 = 4 points. Exemple : 10 % de part de marché passerait à 10,38 %.",
    indice: "Le CA est multiplié par 1,10 et le marché par 1,06. Divise l'un par l'autre."
  },
  {
    id: "U3-100", difficulte: "moyen", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", entrainement: true,
    question: "Dans un diagnostic SWOT d'un magasin d'optique, lequel de ces éléments est une FAIBLESSE ?",
    choix: ["Le magasin est dans une rue secondaire, sans passage piéton", "Une enseigne discount ouvre à 800 m", "La population de la zone vieillit", "L'équipe compte un opticien spécialisé en basse vision"],
    bonne: 0,
    explication: "Forces et faiblesses sont internes au magasin (son emplacement, son équipe, ses moyens). Menaces et opportunités viennent de l'environnement. L'emplacement peu visible est une faiblesse interne. Le discount voisin est une menace, le vieillissement de la population une opportunité (besoins de correction en hausse), l'opticien spécialisé une force.",
    indice: "Demande-toi si l'élément dépend du magasin (interne) ou de son environnement (externe), puis s'il est favorable ou non."
  },
  {
    id: "U3-101", difficulte: "facile", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", entrainement: true,
    question: "Un opticien fait remplir un questionnaire à 200 passants sur leurs habitudes d'achat de lunettes. De quel type d'étude s'agit-il ?",
    choix: ["Étude quantitative, avec des données primaires", "Étude qualitative, avec des données secondaires", "Étude documentaire, avec des données primaires", "Étude qualitative, avec des données primaires"],
    bonne: 0,
    explication: "Un questionnaire fermé passé à un grand échantillon donne des résultats chiffrés : c'est une étude quantitative. Les données sont collectées par l'opticien lui-même pour son besoin : ce sont des données primaires. Les données secondaires existent déjà (INSEE, études de branche) ; l'étude qualitative passe par des entretiens ou des groupes de discussion avec peu de personnes.",
    indice: "Beaucoup de personnes interrogées, des réponses chiffrées, collectées par toi-même."
  },

  // ---------- Mercatique et communication ----------
  {
    id: "U3-102", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    question: "Dans la matrice du BCG, comment appelle-t-on une activité à forte part de marché dans un marché à faible croissance, qui rapporte plus de trésorerie qu'elle n'en consomme ?",
    choix: ["Une vache à lait", "Une vedette", "Un dilemme", "Un poids mort"],
    bonne: 0,
    explication: "La matrice du BCG croise la croissance du marché et la part de marché relative. Forte part et faible croissance : vache à lait, qui finance les autres activités. Forte part et forte croissance : vedette. Faible part et forte croissance : dilemme (point d'interrogation). Faible part et faible croissance : poids mort.",
    indice: "Un marché qui ne grandit plus, où tu es déjà bien placé : l'activité produit de la trésorerie sans demander d'investissement."
  },
  {
    id: "U3-103", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    question: "Une opticienne lance une gamme exclusive de montures de créateur à un prix élevé, pour une clientèle ciblée, en prévoyant de baisser les prix plus tard. Quelle stratégie de prix applique-t-elle ?",
    choix: ["L'écrémage", "La pénétration", "L'alignement sur la concurrence", "Le prix d'appel"],
    bonne: 0,
    explication: "L'écrémage fixe un prix élevé au lancement pour toucher d'abord les clients prêts à payer plus, avec une marge forte, puis ouvre le marché en baissant le prix. La pénétration fait l'inverse : prix bas pour gagner vite des parts de marché. L'alignement copie les prix des concurrents ; le prix d'appel est un produit très bon marché mis en avant pour attirer.",
    indice: "Prix haut au départ, public restreint : on prend la crème du marché avant les autres."
  },
  {
    id: "U3-104", difficulte: "facile", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    type: "calcul",
    question: "Sur un mois, un compteur à l'entrée a enregistré 840 visiteurs. Le magasin a réalisé 252 ventes. Quel est son taux de transformation ?",
    reponse: { valeur: 30, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Taux de transformation = [[ventes|visiteurs]] = [[252|840]] = 0,30, soit 30 %\nIl mesure la capacité du magasin à convertir une visite en achat, indépendamment du trafic.",
    indice: "Ventes divisées par visiteurs."
  },
  {
    id: "U3-105", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin envoie 2 500 courriers de rappel à 0,80 € l'unité. 100 clients reviennent grâce à cette campagne. Combien coûte, en moyenne, chaque client revenu ?",
    reponse: { valeur: 20, unite: "€", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Coût de la campagne = 2 500 × 0,80 = 2 000 €\nCoût par client revenu = [[2 000|100]] = 20 €\nLe taux de réponse est de [[100|2 500]] = 4 %.\nCe coût se compare à la marge dégagée par un client qui revient : si elle est supérieure à 20 €, l'action est rentable.",
    indice: "Calcule d'abord le coût total de l'envoi, puis divise par le nombre de clients revenus."
  },
  {
    id: "U3-106", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    question: "En merchandising, que désigne une « zone froide » du magasin ?",
    choix: ["Une zone peu fréquentée spontanément par les clients, qu'il faut animer", "La vitrine exposée à la lumière du soleil", "La zone proche de la caisse, très fréquentée", "Le rayon des produits réfrigérés ou fragiles"],
    bonne: 0,
    explication: "Une zone chaude est une zone où la circulation des clients est naturellement forte (entrée, caisse, allées principales). Une zone froide est peu visitée spontanément : fond du magasin, angles. Pour la rendre efficace, on y place un produit d'appel, une promotion ou une animation (par exemple l'espace de mesure).",
    indice: "Chaud et froid décrivent la fréquentation, pas la température."
  },
  {
    id: "U3-107", difficulte: "moyen", epreuve: "U3", theme: "Mercatique et communication", session: "complément", entrainement: true,
    question: "Un magasin envoie à ses clients, deux ans après leur achat, un rappel pour un contrôle de vue offert. Quel est l'objectif principal de cette action ?",
    choix: ["Fidéliser la clientèle et préparer le renouvellement de l'équipement", "Conquérir des clients qui ne sont jamais venus", "Lancer un nouveau produit sur le marché", "Faire baisser les prix pratiqués"],
    bonne: 0,
    explication: "Le message s'adresse aux clients déjà dans le fichier du magasin : c'est du marketing relationnel qui entretient le lien et prépare le prochain achat. Conquérir de nouveaux clients coûte en général plus cher que fidéliser ceux qu'on a. Attention : utiliser le fichier clients suppose de respecter le RGPD (information et possibilité de refuser).",
    indice: "Le message ne touche que les personnes déjà clientes."
  },

  // ---------- Seuil de rentabilité ----------
  {
    id: "U3-108", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin réalise 500 000 € HT de CA avec un seuil de rentabilité de 350 000 €. Quel est son indice de sécurité ?",
    reponse: { valeur: 30, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Marge de sécurité = CA − seuil de rentabilité = 500 000 − 350 000 = 150 000 €\nIndice de sécurité = [[marge de sécurité|CA]] = [[150 000|500 000]] = 30 %\nLe CA peut baisser de 30 % avant que le magasin ne perde de l'argent.",
    indice: "Marge de sécurité = CA − SR ; on la rapporte au CA."
  },
  {
    id: "U3-109", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin a un CA de 400 000 € HT, des charges variables de 160 000 € et des charges fixes de 180 000 €. Si son CA augmente de 10 % (charges fixes inchangées), de combien augmente son résultat, en pourcentage ?",
    reponse: { valeur: 40, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Marge sur coût variable = 400 000 − 160 000 = 240 000 €\nRésultat = 240 000 − 180 000 = 60 000 €\nAvec +10 % de CA, les charges variables suivent : MCV = 264 000 €, résultat = 264 000 − 180 000 = 84 000 €\nHausse du résultat = [[84 000 − 60 000|60 000]] = [[24 000|60 000]] = 40 %\nC'est l'effet de levier : les charges fixes ne bougent pas, donc chaque euro de MCV supplémentaire va au résultat. Le levier est ici de [[240 000|60 000]] = 4.",
    indice: "Recalcule le résultat avec 10 % de CA en plus, en gardant les charges fixes."
  },
  {
    id: "U3-110", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    type: "calcul",
    question: "Une ligne de montures se vend 150 € HT pièce, pour un coût variable de 60 € par monture. Ses charges fixes sont de 45 000 € par an. Combien de montures faut-il vendre pour atteindre le seuil de rentabilité ?",
    reponse: { valeur: 500, unite: "montures", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Marge sur coût variable unitaire = 150 − 60 = 90 €\nSeuil en quantités = [[charges fixes|MCV unitaire]] = [[45 000|90]] = 500 montures\nEn euros : 500 × 150 = 75 000 € de CA.",
    indice: "Chaque monture vendue couvre une part des charges fixes égale à son prix moins son coût variable."
  },
  {
    id: "U3-111", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin a 72 000 € de charges fixes et un taux de marge sur coût variable de 45 %. Quel CA HT doit-il réaliser pour dégager un résultat de 18 000 € ?",
    reponse: { valeur: 200000, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    explication: "La marge sur coût variable doit couvrir les charges fixes et le résultat voulu : 72 000 + 18 000 = 90 000 €\nCA = [[90 000|0,45]] = 200 000 € HT\nLe seuil de rentabilité seul serait [[72 000|0,45]] = 160 000 € : le résultat visé demande 40 000 € de CA en plus.",
    indice: "Remplace les charges fixes par charges fixes + résultat souhaité dans la formule du seuil."
  },
  {
    id: "U3-112", difficulte: "moyen", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    question: "Une vendeuse reçoit 1 600 € de salaire fixe par mois et une prime de 3 % du CA HT qu'elle réalise. Comment classer ce coût pour calculer le seuil de rentabilité ?",
    choix: ["Le salaire fixe en charges fixes, la prime en charges variables", "Tout en charges fixes, car c'est un salaire", "Tout en charges variables, car il dépend de son activité", "On ne le classe pas : il est exclu du seuil"],
    bonne: 0,
    explication: "On sépare les charges selon leur comportement. Le fixe de 1 600 € est dû quel que soit le CA : charge fixe. La prime de 3 % varie avec le CA : charge variable, qui réduit le taux de marge sur coût variable de 3 points. Les charges mixtes (fixe + variable) se décomposent toujours en deux parties.",
    indice: "Une charge mixte se coupe en deux : la partie qui bouge avec l'activité et celle qui ne bouge pas."
  },
  {
    id: "U3-113", difficulte: "difficile", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", entrainement: true,
    question: "Un magasin vend de plus en plus de solaires (taux de marge sur coût variable 30 %) et moins de verres progressifs (taux de 55 %). Ses charges fixes ne changent pas. Quel est l'effet sur son seuil de rentabilité ?",
    choix: ["Il augmente, car le taux de marge sur coût variable moyen baisse", "Il diminue, car le CA augmente", "Il ne change pas, car les charges fixes sont les mêmes", "Il diminue, car les solaires sont plus faciles à vendre"],
    bonne: 0,
    explication: "Seuil = [[charges fixes|taux de marge sur coût variable]]\nSi le mix de ventes se déplace vers des produits à faible taux (30 % au lieu de 55 %), le taux moyen du magasin baisse, donc le dénominateur diminue et le seuil augmente. Il faut alors plus de CA pour couvrir les mêmes charges fixes. Un seuil dépend donc du mix des ventes, pas seulement des charges fixes.",
    indice: "Le seuil est une division : que devient le résultat si le diviseur baisse ?"
  },

  // ---------- Réglementation de l'opticien ----------
  {
    id: "U3-114", difficulte: "moyen", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", entrainement: true,
    question: "Les ordonnances et les fiches clients d'un magasin contiennent des informations de santé. Quelle est la conséquence pour l'opticien ?",
    choix: ["Ce sont des données sensibles : il doit informer le client, ne collecter que le nécessaire et les protéger", "Aucune, car seuls les médecins sont soumis à ces règles", "Il peut les transmettre librement à ses fournisseurs publicitaires", "Il doit les détruire à la fin de chaque vente"],
    bonne: 0,
    explication: "Le RGPD s'applique à tout professionnel qui garde des données personnelles. Celles qui touchent à la santé (ordonnance, correction) sont des données sensibles : on informe le client de l'usage, on limite la collecte, on sécurise l'accès et on limite la durée de conservation. On ne les utilise pas pour autre chose sans accord. Il n'est pas obligatoire de les détruire à la vente, puisqu'elles servent au suivi et au renouvellement.",
    indice: "Une ordonnance révèle l'état de santé d'une personne : le RGPD la classe parmi les données les plus protégées."
  },
  {
    id: "U3-115", difficulte: "facile", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", entrainement: true,
    question: "Dans un contrat de complémentaire santé « responsable », quel est le plafond de remboursement de la monture d'un équipement hors 100 % Santé (classe B) ?",
    choix: ["100 €", "50 €", "150 €", "200 €"],
    bonne: 0,
    explication: "Pour qu'un contrat soit « responsable » (et garde ses avantages fiscaux), la prise en charge de la monture d'un équipement de classe B est plafonnée à 100 € par la complémentaire. Les verres ont des plafonds propres, fixés selon leur correction. Pour les équipements de classe A (100 % Santé), le reste à charge est nul.",
    indice: "Un chiffre rond, qui concerne seulement la monture et seulement la classe B."
  },

  // ---------- Analyse financière ----------
  {
    id: "U3-116", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin dégage un résultat net de 28 000 €. Ses dotations aux amortissements sont de 12 000 € (aucune cession d'actif cette année). Quelle est sa capacité d'autofinancement (CAF) ?",
    reponse: { valeur: 40000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "La CAF mesure les ressources que l'activité a dégagées et qui peuvent financer l'entreprise. Les dotations aux amortissements sont une charge qui ne sort pas d'argent : on les rajoute au résultat. CAF = 28 000 + 12 000 = 40 000 €.",
    indice: "Une charge « calculée » comme l'amortissement n'est pas décaissée : elle se rajoute au résultat."
  },
  {
    id: "U3-117", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    type: "calcul",
    question: "À la clôture, les créances clients d'un magasin (mutuelles et tiers payant compris) s'élèvent à 36 000 € TTC. Ses ventes de l'année sont de 432 000 € TTC. Quel est le délai moyen de crédit clients, en jours (année de 360 jours) ?",
    reponse: { valeur: 30, unite: "jours", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Délai de crédit clients = [[créances clients TTC|ventes TTC]] × 360 = [[36 000|432 000]] × 360 = 30 jours\nComme les créances sont TTC, les ventes doivent l'être aussi. Un délai long pèse sur le BFR : les mutuelles paient après le client.",
    indice: "Créances et ventes dans la même unité (TTC), puis × 360."
  },
  {
    id: "U3-118", difficulte: "difficile", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    question: "Un magasin a un FRNG de 15 000 € et un BFR de −10 000 €. Quel commentaire est le plus juste ?",
    choix: ["Trésorerie nette de 25 000 € : les dettes d'exploitation financent plus que les stocks et créances", "Trésorerie nette de 5 000 € : situation fragile", "Trésorerie nette de −25 000 € : le magasin est en difficulté", "Un BFR négatif est impossible dans une entreprise"],
    bonne: 0,
    explication: "Trésorerie nette = FRNG − BFR = 15 000 − (−10 000) = 25 000 €. Un BFR négatif signifie que les dettes d'exploitation (fournisseurs, dettes fiscales et sociales) dépassent les stocks et créances : le cycle d'exploitation dégage de la trésorerie. C'est possible, par exemple si les clients paient comptant et les fournisseurs à 60 jours. À surveiller : cette trésorerie dépend du crédit des fournisseurs.",
    indice: "Soustraire un nombre négatif, c'est additionner. Le BFR négatif veut dire que l'exploitation apporte de l'argent."
  },
  {
    id: "U3-119", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin a une marge commerciale de 250 000 €, des autres achats et charges externes de 90 000 €, des impôts et taxes de 10 000 € et des charges de personnel de 120 000 €. Quel est son excédent brut d'exploitation (EBE) ?",
    reponse: { valeur: 30000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Valeur ajoutée = marge commerciale − autres achats et charges externes = 250 000 − 90 000 = 160 000 €. EBE = valeur ajoutée − impôts et taxes − charges de personnel = 160 000 − 10 000 − 120 000 = 30 000 €. L'EBE mesure ce que l'exploitation dégage avant amortissements, frais financiers et impôt sur les bénéfices.",
    indice: "Passe par la valeur ajoutée, puis retire impôts, taxes et personnel."
  },
  {
    id: "U3-120", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un magasin a un résultat net de 24 000 € et des capitaux propres de 160 000 €. Quelle est sa rentabilité financière ?",
    reponse: { valeur: 15, unite: "%", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Rentabilité financière = [[résultat net|capitaux propres]] = [[24 000|160 000]] = 15 %\nElle mesure ce que rapporte l'argent mis par les associés. On la compare à ce que donnerait un placement sans risque : si elle est plus faible, le risque pris par le propriétaire n'est pas payé.",
    indice: "Résultat net divisé par les capitaux propres, pas par le CA."
  },
  {
    id: "U3-121", difficulte: "moyen", epreuve: "U3", theme: "Analyse financière", session: "complément", entrainement: true,
    question: "Un magasin a une trésorerie nette négative parce que son BFR est trop élevé. Quelle mesure améliore directement son BFR ?",
    choix: ["Réduire les stocks de montures qui tournent peu", "Accorder plus de temps de paiement aux clients", "Payer les fournisseurs à la commande", "Augmenter les stocks de sécurité"],
    bonne: 0,
    explication: "BFR = stocks + créances clients − dettes d'exploitation. Baisser les stocks dormants ou relancer les paiements en retard le diminue. À l'inverse, allonger le crédit aux clients, payer plus tôt les fournisseurs ou stocker davantage augmentent le BFR et aggravent la trésorerie.",
    indice: "Le BFR monte avec les stocks et les créances, et baisse avec les dettes d'exploitation."
  },

  // ---------- Investissement et financement ----------
  {
    id: "U3-122", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un matériel d'atelier acheté 30 000 € HT le 1er janvier N est amorti en linéaire sur 5 ans. Quelle est sa valeur nette comptable au 31 décembre N+2 ?",
    reponse: { valeur: 12000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Annuité = [[30 000|5]] = 6 000 €\nAu 31 décembre N+2, trois années ont été amorties : 3 × 6 000 = 18 000 €\nVNC = 30 000 − 18 000 = 12 000 €\nLa VNC est la valeur du bien qui reste à amortir.",
    indice: "Compte les années entières amorties : N, N+1 et N+2."
  },
  {
    id: "U3-123", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    type: "calcul",
    question: "Le matériel précédent (valeur nette comptable 12 000 €) est revendu 9 000 €. Quel est le résultat de cession ? Donne-le avec son signe (moins-value négative).",
    reponse: { valeur: -3000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Résultat de cession = prix de cession − valeur nette comptable = 9 000 − 12 000 = −3 000 €. C'est une moins-value : le bien est vendu moins cher que sa valeur comptable. Si le prix avait été supérieur à 12 000 €, on aurait une plus-value.",
    indice: "Compare le prix de vente à la valeur nette comptable, pas au prix d'achat."
  },
  {
    id: "U3-124", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un investissement de 45 000 € rapporte des flux nets de trésorerie de 15 000 € la 1re année, 18 000 € la 2e et 20 000 € la 3e. Quel est son délai de récupération, en années (réparti régulièrement dans l'année) ?",
    reponse: { valeur: 2.6, unite: "ans", decimales: 1, tolerance: 0.05, signe: false },
    explication: "Cumul des flux : 15 000 après 1 an, 33 000 après 2 ans, 53 000 après 3 ans. L'investissement (45 000 €) est récupéré pendant la 3e année.\nIl manque 45 000 − 33 000 = 12 000 € au début de cette année, où l'on gagne 20 000 € :\n[[12 000|20 000]] = 0,6 an\nDélai = 2 + 0,6 = 2,6 ans.",
    indice: "Cumule les flux année par année jusqu'à dépasser 45 000 €, puis prends une fraction de la dernière année."
  },
  {
    id: "U3-125", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un opticien prépare un plan de financement. Emplois : matériel 30 000 €, BFR de démarrage 6 000 €, dépôt de garantie 4 000 €. Ressources : apport personnel 12 000 €, subvention 3 000 €, emprunt à définir. Quel emprunt faut-il ?",
    reponse: { valeur: 25000, unite: "€", decimales: 0, tolerance: 1, signe: false },
    explication: "Emplois = 30 000 + 6 000 + 4 000 = 40 000 €. Ressources déjà acquises = 12 000 + 3 000 = 15 000 €. Emprunt = 40 000 − 15 000 = 25 000 €. Un plan de financement doit être équilibré : total des emplois = total des ressources.",
    indice: "Le plan est équilibré quand emplois et ressources sont égaux. L'emprunt comble l'écart."
  },
  {
    id: "U3-126", difficulte: "difficile", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    type: "calcul",
    question: "Budget de trésorerie d'un mois : solde initial 8 000 € ; encaissements 60 000 € TTC ; décaissements : achats 24 000 € TTC, salaires 18 000 €, loyer 4 000 €, TVA à reverser 5 000 €, remboursement d'emprunt 2 500 €. Quel est le solde de fin de mois ?",
    reponse: { valeur: 14500, unite: "€", decimales: 0, tolerance: 1, signe: true },
    explication: "Décaissements = 24 000 + 18 000 + 4 000 + 5 000 + 2 500 = 53 500 €. Solde final = 8 000 + 60 000 − 53 500 = 14 500 €. Dans un budget de trésorerie, tout est en TTC (la TVA reversée à l'État est un décaissement) et seuls les flux d'argent comptent : pas d'amortissements, mais bien le remboursement du capital.",
    indice: "Solde initial + encaissements − tous les décaissements, TVA reversée comprise."
  },
  {
    id: "U3-127", difficulte: "moyen", epreuve: "U3", theme: "Investissement et financement", session: "complément", entrainement: true,
    question: "Un magasin achète un appareil 24 000 € HT (TVA 20 %). Quel traitement est correct ?",
    choix: ["Amortissement calculé sur 24 000 € HT ; la TVA de 4 800 € est récupérable", "Amortissement calculé sur 28 800 € TTC ; la TVA n'est pas récupérable", "Amortissement sur 24 000 € HT ; la TVA est une charge du magasin", "Pas d'amortissement : l'appareil est une charge de l'année"],
    bonne: 0,
    explication: "Pour une entreprise assujettie, la TVA sur un investissement est déductible : elle se récupère sur la TVA collectée. La valeur à amortir est donc le prix HT (24 000 €). En trésorerie, le magasin paie quand même 28 800 € TTC à l'achat et récupère les 4 800 € de TVA ensuite : c'est une avance de TVA à financer.",
    indice: "Une entreprise ne supporte pas la TVA : elle la collecte et la déduit."
  },

  // ---------- Droit du travail ----------
  {
    id: "U3-128", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un salarié à 35 h payé 12 € brut de l'heure travaille 41 h une semaine (aucun accord d'entreprise, majoration légale). Quel montant brut reçoit-il pour ses 6 heures supplémentaires ?",
    reponse: { valeur: 90, unite: "€", decimales: 0, tolerance: 0.5, signe: false },
    explication: "Les heures supplémentaires sont celles au-delà de 35 h : ici 6 h. À défaut d'accord, la majoration légale est de 25 % pour les 8 premières heures (de la 36e à la 43e) : 12 × 1,25 = 15 € l'heure. 6 × 15 = 90 € brut. Au-delà de la 43e heure, la majoration est de 50 %.",
    indice: "Chaque heure supplémentaire est payée 12 € majorés de 25 %."
  },
  {
    id: "U3-129", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un CDD d'accroissement d'activité dure 6 mois, avec un salaire brut de 2 000 € par mois. Il n'est pas suivi d'un CDI. Quelle indemnité de fin de contrat (10 %) l'employeur doit-il verser ?",
    reponse: { valeur: 1200, unite: "€ brut", decimales: 0, tolerance: 1, signe: false },
    explication: "L'indemnité de fin de contrat (dite « de précarité ») est de 10 % de la rémunération brute totale versée pendant le CDD : 6 × 2 000 = 12 000 €, donc 1 200 €. Elle n'est pas due dans certains cas, par exemple si le salarié refuse un CDI équivalent ou si le CDD est un contrat saisonnier ou étudiant d'été.",
    indice: "10 % de tout le brut versé pendant le contrat, pas d'un seul mois."
  },
  {
    id: "U3-130", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    question: "Après la signature d'une rupture conventionnelle d'un CDI, de quel délai chacune des parties dispose-t-elle pour se rétracter ?",
    choix: ["15 jours calendaires", "7 jours ouvrés", "14 jours calendaires", "30 jours"],
    bonne: 0,
    explication: "Chacune des parties peut se rétracter dans les 15 jours calendaires qui suivent la signature (jours de week-end inclus), par lettre. Ensuite, la demande d'homologation est adressée à l'administration, qui a 15 jours ouvrables pour répondre. Le contrat ne prend fin qu'après homologation.",
    indice: "Une quinzaine de jours, comptés tous les jours, week-ends compris."
  },
  {
    id: "U3-131", difficulte: "facile", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    type: "calcul",
    question: "Un salarié acquiert 2,5 jours ouvrables de congés payés par mois de travail effectif. Combien en a-t-il acquis après 8 mois de travail ?",
    reponse: { valeur: 20, unite: "jours ouvrables", decimales: 0, tolerance: 0.5, signe: false },
    explication: "8 × 2,5 = 20 jours ouvrables. Sur une année complète, cela fait 12 × 2,5 = 30 jours ouvrables, soit 5 semaines. Les jours ouvrables sont tous les jours de la semaine sauf le dimanche et les jours fériés chômés : 30 jours ouvrables = 5 semaines de congés.",
    indice: "Multiplie le nombre de mois par 2,5."
  },
  {
    id: "U3-132", difficulte: "moyen", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    question: "Dans quel ordre se déroule un licenciement pour motif personnel d'un salarié en CDI ?",
    choix: ["Convocation à un entretien préalable, entretien, puis lettre de licenciement motivée", "Lettre de licenciement, puis entretien préalable", "Entretien oral suivi d'un simple SMS d'information", "Avertissement oral, puis rupture immédiate sans lettre"],
    bonne: 0,
    explication: "L'employeur convoque d'abord le salarié à un entretien préalable (lettre remise en main propre contre décharge ou recommandée), le reçoit, puis notifie le licenciement par une lettre recommandée qui énonce les motifs, au moins 2 jours ouvrables après l'entretien. Une rupture sans cette procédure peut être jugée irrégulière.",
    indice: "Le salarié doit pouvoir s'expliquer avant que la décision ne soit prise."
  },
  {
    id: "U3-133", difficulte: "difficile", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    question: "Un CDD d'accroissement temporaire d'activité de 6 mois s'achève sur le poste de vendeur. Hors cas particuliers, quel délai l'employeur doit-il en principe respecter avant de conclure un nouveau CDD sur ce même poste ?",
    choix: ["2 mois (le tiers de la durée du premier contrat)", "6 mois (la durée du premier contrat)", "15 jours", "Aucun, il peut enchaîner immédiatement"],
    bonne: 0,
    explication: "Entre deux CDD successifs sur le même poste, la loi impose un délai de carence : le tiers de la durée du contrat précédent (renouvellement compris) quand il dure 14 jours ou plus, la moitié s'il dure moins de 14 jours.\nIci [[6|3]] = 2 mois.\nCela évite de remplacer un CDI par une suite de CDD. Il existe des exceptions, par exemple le remplacement d'un salarié absent.",
    indice: "La règle est une fraction de la durée du premier contrat."
  },
  {
    id: "U3-134", difficulte: "difficile", epreuve: "U3", theme: "Droit du travail", session: "complément", entrainement: true,
    question: "Un salarié termine sa journée à 21 h 30 après une nocturne. Selon la règle légale de base, à quelle heure peut-il reprendre le lendemain au plus tôt ?",
    choix: ["8 h 30", "7 h 30", "9 h 30", "6 h 30"],
    bonne: 0,
    explication: "Le repos quotidien légal est de 11 heures consécutives minimum entre deux journées de travail. 21 h 30 + 11 h = 8 h 30 le lendemain. Des dérogations existent par accord collectif ou dans certains secteurs, mais la règle de base reste 11 h. Les autres réponses correspondent à 10 h, 12 h et 9 h de repos.",
    indice: "Ajoute la durée légale du repos quotidien à l'heure de fin de service."
  },

  // ---------- Droit des entreprises ----------
  {
    id: "U3-135", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément", entrainement: true,
    question: "Depuis 2022, un entrepreneur individuel (non société) a un patrimoine professionnel séparé de son patrimoine personnel. Quelle est la conséquence en principe ?",
    choix: ["Les créanciers professionnels ne peuvent saisir que le patrimoine professionnel", "Tous ses biens répondent des dettes de l'entreprise", "Sa résidence principale est saisissable à tout moment par ses fournisseurs", "Il n'a plus aucune dette personnelle"],
    bonne: 0,
    explication: "Depuis la loi de 2022, le patrimoine professionnel (biens utiles à l'activité) et le patrimoine personnel sont séparés automatiquement : les créanciers professionnels sont limités au premier. Il existe des exceptions : fraude, faute grave de gestion, garantie personnelle donnée au banquier, ou certaines dettes fiscales ou sociales. Auparavant, sauf choix de l'EIRL ou déclaration d'insaisissabilité, seule la résidence principale était protégée de plein droit.",
    indice: "Séparer deux patrimoines, c'est limiter la poursuite des créanciers à l'un d'eux."
  },
  {
    id: "U3-136", difficulte: "moyen", epreuve: "U3", theme: "Droit des entreprises", session: "complément", entrainement: true,
    question: "Dans une SARL, quelle affirmation est juste ?",
    choix: ["Les associés répondent des dettes à hauteur de leurs apports ; le capital est fixé librement par les statuts", "Les associés répondent indéfiniment de toutes les dettes de la société", "Le capital minimum légal est de 37 000 €", "Une SARL doit compter au moins 7 associés"],
    bonne: 0,
    explication: "Dans une SARL, la responsabilité des associés est limitée à leurs apports, sauf faute de gestion du gérant ou garantie personnelle accordée à la banque. Il n'y a pas de capital minimum légal (1 € suffit). La SARL peut avoir un seul associé (EURL) et au plus 100. Les 37 000 € sont le capital minimum d'une société anonyme ; une SA compte au moins 2 actionnaires (7 si elle est cotée en bourse).",
    indice: "La lettre L de SARL signifie « à responsabilité limitée »."
  },
  {
    id: "U3-137", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément", entrainement: true,
    question: "Le propriétaire des murs refuse de renouveler le bail commercial d'un opticien sans motif grave. Quel droit l'opticien peut-il faire valoir ?",
    choix: ["Une indemnité d'éviction", "Un remboursement de tous les loyers payés", "Le rachat obligatoire des murs par le propriétaire", "Aucun : le bailleur est libre de ne pas renouveler"],
    bonne: 0,
    explication: "Le locataire d'un bail commercial a droit au renouvellement. Si le bailleur refuse sans motif grave et légitime, il doit verser une indemnité d'éviction qui compense la perte du fonds (elle comprend notamment la valeur marchande du fonds, plus les frais de déménagement et de réinstallation). C'est ce droit qui protège la clientèle attachée à l'emplacement.",
    indice: "Le bailleur peut refuser, mais pas sans compenser la perte pour le commerçant."
  },
  {
    id: "U3-138", difficulte: "difficile", epreuve: "U3", theme: "Droit des entreprises", session: "complément", entrainement: true,
    question: "Un opticien vend son fonds de commerce. Après la publication de la vente dans un journal d'annonces légales et au BODACC, qui dispose d'un délai de 10 jours pour faire opposition au paiement du prix ?",
    choix: ["Les créanciers du vendeur", "Les clients du magasin", "Le propriétaire des murs", "Les salariés du magasin"],
    bonne: 0,
    explication: "La vente d'un fonds de commerce doit être publiée. Dans les 10 jours qui suivent la publication au BODACC, les créanciers du vendeur peuvent faire opposition entre les mains de l'acquéreur, pour être payés sur le prix avant que le vendeur ne reçoive son argent. L'acquéreur garde donc le prix pendant ce délai. Cela protège ceux à qui le vendeur doit de l'argent.",
    indice: "Celui qui peut perdre de l'argent quand le vendeur encaisse et part."
  },

  // ---------- Réglementation de l'opticien ----------
  {
    id: "U3-139", difficulte: "moyen", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", entrainement: true,
    question: "Un client revient 14 mois après l'achat de lunettes neuves : la monture s'est déformée anormalement, sans choc. Quelle garantie peut-il invoquer ?",
    choix: ["La garantie légale de conformité, qui couvre 2 ans pour un bien neuf", "Aucune : la garantie légale ne dure que 6 mois", "Aucune : seule la garantie commerciale du fabricant existe", "La garantie légale, mais seulement 1 an"],
    bonne: 0,
    explication: "Le vendeur répond d'un défaut de conformité pendant 2 ans à compter de la délivrance d'un bien neuf, et pendant les 24 premiers mois le défaut est présumé exister dès la vente. Le client peut demander la réparation ou le remplacement sans frais, puis une réduction du prix ou le remboursement. Cette garantie légale s'applique même si le magasin n'offre aucune garantie commerciale.",
    indice: "Le délai de la garantie légale d'un bien neuf est de plusieurs années, pas de quelques mois."
  },
  {
    id: "U3-140", difficulte: "moyen", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", entrainement: true,
    question: "Un client regrette le lendemain l'achat de lunettes qu'il a commandées dans votre magasin. A-t-il un droit légal de rétractation ?",
    choix: ["Non, il n'y a pas de délai légal de rétractation pour un achat en magasin", "Oui, 14 jours comme pour tout achat", "Oui, 7 jours pour des lunettes de vue", "Oui, 48 heures pour un produit de santé"],
    bonne: 0,
    explication: "Le délai de rétractation de 14 jours concerne la vente à distance (internet, téléphone) et le démarchage hors établissement. Un achat réalisé en magasin n'en a pas : le client ne peut annuler que si le magasin l'a prévu (reprise commerciale) ou s'il y a un défaut. En outre, des verres correcteurs faits sur mesure sont exclus du droit de rétractation même à distance.",
    indice: "Le droit de rétractation protège celui qui achète sans voir le produit ni le vendeur."
  }

);
