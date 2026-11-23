// Sujets blancs d'Économie-gestion (U3).
// Un sujet = une entreprise, des documents, 4 dossiers notés sur 20.
// Format : notes/coordination/sujet-blanc.md. Chargé plus tard par qcm.html, après questions-U3.js.
// Les questions d'un sujet ne sortent nulle part ailleurs (ni thèmes, ni Essentiel, ni examen blanc).
// Entreprise, énoncés et chiffres écrits par Opticonversion.

SUJETS.push({
  id: "SUJET-U3-01",
  epreuve: "U3",
  titre: "Optique des Tilleuls : un espace enfants et un opticien de plus",
  contexte: "Claire Vasseur, opticienne diplômée, dirige depuis 2016 l'EURL Optique des Tilleuls à Villeneuve-les-Prés, une ville de 18 000 habitants. Pour 2027, elle veut créer un espace réservé aux lunettes d'enfants et embaucher un second opticien pour ouvrir tous les samedis, toute la journée. Vous l'aidez à préparer ce projet.",
  annexe: {
    titre: "Fiche de l'entreprise",
    colonnes: ["", "Optique des Tilleuls"],
    lignes: [
      ["Forme juridique", "EURL au capital de 20 000 €. Claire Vasseur est l'associée unique et la gérante."],
      ["Personnel", "Une opticienne salariée à temps plein."],
      ["Chiffre d'affaires 2026", "395 000 € HT (prévision)"],
      ["Ouverture", "Du mardi au vendredi, et le samedi matin."],
      ["Projet 2027", "Espace enfants : 40 000 € HT d'aménagement, mis en service le 1er avril 2027. Embauche d'un opticien en même temps."]
    ]
  },
  parties: [
    { lettre: "A", titre: "Le marché des lunettes d'enfants", points: 4,
      contexte: "Claire a réuni des données sur les enfants de sa zone de chalandise.",
      annexe: {
        titre: "Données de la zone de chalandise",
        colonnes: ["", "Valeur"],
        lignes: [
          ["Enfants de moins de 16 ans dans la zone", "3 600"],
          ["Part des enfants qui portent des lunettes", "25 %"],
          ["Dépense moyenne pour un équipement d'enfant", "180 € TTC"],
          ["Renouvellement de l'équipement", "tous les 18 mois en moyenne"],
          ["Évasion commerciale (centre commercial à 15 min, internet)", "30 %"],
          ["Part du marché restant visée par Claire", "35 %"]
        ]
      }
    },
    { lettre: "B", titre: "Prix et rentabilité", points: 6,
      contexte: "TVA à 20 % sur les lunettes. Les prévisions 2027 portent sur tout le magasin, espace enfants et nouvel opticien compris.",
      annexe: {
        titre: "Prix d'un équipement d'enfant et prévisions 2027",
        colonnes: ["", "Montant"],
        lignes: [
          ["Coût d'achat d'un équipement moyen (monture et deux verres)", "60 € HT"],
          ["Prix de vente de cet équipement", "180 € TTC"],
          ["Chiffre d'affaires 2027 prévu", "440 000 € HT"],
          ["Charges variables 2027 (achats de marchandises consommés)", "176 000 €"],
          ["Charges fixes 2027 (loyer, salaires, amortissements, intérêts…)", "220 000 €"]
        ]
      }
    },
    { lettre: "C", titre: "Financer l'aménagement", points: 5,
      contexte: "L'aménagement coûte 40 000 € HT. Il sera amorti en linéaire sur 8 ans à partir de sa mise en service, le 1er avril 2027. La banque propose un prêt.",
      annexe: {
        titre: "Bilan fonctionnel prévu au 31 décembre 2026 et offre de prêt",
        colonnes: ["", "Montant"],
        lignes: [
          ["Emplois stables", "140 000 €"],
          ["Ressources stables", "185 000 € (dont capitaux propres 125 000 € et dettes financières 60 000 €)"],
          ["Stocks", "70 000 €"],
          ["Créances clients (tiers payant des mutuelles)", "18 000 €"],
          ["Dettes fournisseurs, fiscales et sociales", "52 000 €"],
          ["Trésorerie active / passive", "9 000 € / 0 €"],
          ["Offre de prêt", "40 000 € sur 5 ans, taux de 4 % par an, remboursé par annuités constantes"]
        ]
      }
    },
    { lettre: "D", titre: "Recruter un opticien", points: 5,
      contexte: "Claire a préparé un projet de contrat pour le nouvel opticien. Les taux de cotisations sont simplifiés.",
      annexe: {
        titre: "Extrait du projet de contrat",
        colonnes: ["", "Ce que prévoit Claire"],
        lignes: [
          ["Poste", "Opticien diplômé du BTS OL, temps plein, du mardi au samedi. Classé technicien (agent de maîtrise)."],
          ["Contrat", "CDD de 12 mois « pour voir si l'espace enfants marche »."],
          ["Période d'essai", "4 mois"],
          ["Salaire", "2 300 € brut par mois. Cotisations salariales : 22 % du brut. Cotisations patronales : 40 % du brut."],
          ["Non-concurrence", "Après son départ, interdiction de travailler dans un magasin d'optique à moins de 10 km, pendant 1 an. Aucune somme versée en échange."]
        ]
      }
    }
  ]
});

QUESTIONS.push(

  // ---------- Dossier A : le marché des lunettes d'enfants (4 points) ----------
  {
    id: "U3-326", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "A", etape: 1,
    question: "Qu'appelle-t-on la zone de chalandise du magasin ?",
    choix: [
      "Le quartier où le loyer commercial est le moins cher de la ville",
      "La zone d'où viennent la plupart des clients du magasin",
      "L'ensemble des magasins d'optique situés dans la même rue",
      "La surface de vente où sont exposées les montures du magasin"
    ],
    bonne: 1,
    explication: "La zone de chalandise est la zone géographique d'où vient l'essentiel de la clientèle d'un point de vente. On la découpe souvent en zone primaire (proche, la plus grande part des clients), secondaire et tertiaire. C'est sur sa population qu'on calcule le marché potentiel."
  },
  {
    id: "U3-327", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "A", etape: 2,
    type: "calcul",
    question: "Calculez le marché potentiel annuel des lunettes d'enfants dans la zone.",
    reponse: { valeur: 108000, unite: "€ TTC", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 162000, type: "notion", message: "C'est la dépense d'un renouvellement complet. Il a lieu tous les 18 mois : divise par 1,5 pour avoir une année." },
      { valeur: 243000, type: "notion", message: "Tu as multiplié par 1,5. Un renouvellement tous les 18 mois veut dire moins d'achats par an : on divise par 1,5." },
      { valeur: 432000, type: "notion", message: "Tu as compté tous les enfants. Seuls ceux qui portent des lunettes (25 %) achètent un équipement." }
    ],
    explication: "Enfants porteurs = 3 600 × 0,25 = 900\nDépense d'un renouvellement = 900 × 180 = 162 000 €\nPar an : [[162 000|1,5]] = 108 000 € TTC (18 mois = 1,5 an).",
    indice: "Nombre d'enfants porteurs × dépense moyenne, puis ramène à une année avec le rythme de renouvellement (18 mois = 1,5 an).",
    surLaCopie: "Porteurs : 3 600 × 0,25 = 900 ; dépense d'un cycle : 900 × 180 = 162 000 €.\nMarché potentiel annuel : 162 000 / 1,5 = 108 000 € TTC."
  },
  {
    id: "U3-328", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "A", etape: 3,
    question: "Que représentent les 30 % d'évasion commerciale ?",
    choix: [
      "La part des achats des habitants faite hors de la zone",
      "La part des clients qui ne reviennent pas après un achat",
      "La part des enfants de la zone qui n'ont pas besoin de verres",
      "La baisse du chiffre d'affaires due aux remises accordées"
    ],
    bonne: 0,
    explication: "L'évasion commerciale est la part des dépenses des habitants de la zone qui part ailleurs : ici vers le centre commercial voisin et internet. Ces 30 % ne sont pas accessibles à Claire : il ne reste que 70 % du marché potentiel à se partager entre les magasins de la zone."
  },
  {
    id: "U3-329", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "A", etape: 4,
    type: "calcul",
    question: "Calculez le chiffre d'affaires annuel HT que Claire peut espérer de son espace enfants.",
    reponse: { valeur: 22050, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 26460, type: "ht-ttc", message: "C'est le chiffre d'affaires TTC. Le marché est exprimé TTC : divise par 1,2 pour obtenir le HT." },
      { valeur: 31500, type: "notion", message: "Tu as oublié l'évasion. 30 % des achats partent hors de la zone : il ne reste que 70 % du marché." },
      { valeur: 9450, type: "notion", message: "Tu as gardé les 30 % d'évasion. L'évasion est la part perdue : il reste 70 % du marché." },
      { valeur: 21168, type: "ht-ttc", message: "Tu as retiré 20 % du TTC. Pour passer au HT, on divise par 1,2." }
    ],
    explication: "Marché restant après évasion : 108 000 × (1 − 0,30) = 75 600 € TTC\nPart visée : 75 600 × 0,35 = 26 460 € TTC\nEn HT : [[26 460|1,2]] = 22 050 € HT.",
    indice: "Retire l'évasion, prends la part de marché visée, puis passe en HT en divisant par 1,2.",
    surLaCopie: "Marché restant : 108 000 × 0,70 = 75 600 € TTC ; part visée : 75 600 × 0,35 = 26 460 € TTC.\nCA prévisionnel de l'espace enfants : 26 460 / 1,2 = 22 050 € HT."
  },
  {
    id: "U3-330", epreuve: "U3", theme: "Marché et zone de chalandise", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "A", etape: 5,
    question: "Parmi ces éléments, lequel est une menace pour le projet de Claire ?",
    choix: [
      "La myopie des enfants progresse et le dépistage scolaire se développe",
      "Un orthoptiste vient de s'installer dans la rue, juste à côté du magasin",
      "Les équipements du 100 % Santé rassurent les parents sur le prix",
      "Une grande enseigne du centre commercial ouvre un rayon enfants"
    ],
    bonne: 3,
    explication: "Une menace vient de l'environnement et peut freiner le projet : un concurrent qui renforce son offre sur la même clientèle en est une. Les trois autres sont des opportunités : plus d'enfants à équiper, un prescripteur tout proche, des parents moins inquiets du reste à charge.",
    surLaCopie: "L'ouverture d'un rayon enfants par une grande enseigne voisine est une menace : elle vise la même clientèle et augmente l'évasion.\nClaire devra se distinguer par le conseil et le service."
  },
  {
    id: "U3-331", epreuve: "U3", theme: "Mercatique et communication", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "A", etape: 6,
    question: "Dans l'achat de lunettes pour un enfant, quel rôle joue l'ophtalmologiste ou l'orthoptiste ?",
    choix: [
      "Il est l'acheteur, car c'est lui qui règle le reste à charge",
      "Il est l'utilisateur, car il porte l'équipement pendant l'examen",
      "Il est le prescripteur, car il oriente le choix de la famille",
      "Il est le payeur, car il rembourse l'équipement aux parents"
    ],
    bonne: 2,
    explication: "Dans un achat de lunettes d'enfant, les rôles sont partagés : l'enfant est l'utilisateur, les parents sont les acheteurs et les payeurs (avec la Sécurité sociale et la mutuelle), le professionnel de santé est le prescripteur : il rédige l'ordonnance et ses conseils pèsent sur le choix. Claire doit s'adresser à tous."
  },
  {
    id: "U3-332", epreuve: "U3", theme: "Mercatique et communication", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "A", etape: 7,
    question: "Quelle action de communication convient le mieux pour lancer l'espace enfants ?",
    choix: [
      "Un spot de publicité diffusé sur une chaîne de télévision nationale",
      "Des affiches de grand format dans le métro de la métropole voisine",
      "Un envoi de prospectus à tous les foyers de la région entière",
      "Une page locale sur les réseaux et une visite aux prescripteurs"
    ],
    bonne: 3,
    explication: "La cible est locale (familles de la zone de chalandise) et le budget d'un indépendant est limité. Il faut des actions ciblées et peu coûteuses : réseaux sociaux locaux, fiche du magasin sur internet, rencontre des ophtalmologistes et orthoptistes du secteur. Les trois autres touchent surtout des gens qui ne viendront jamais au magasin.",
    surLaCopie: "La cible est locale et le budget limité : je conseille une page sur les réseaux sociaux visant les familles de la zone.\nEt une visite aux ophtalmologistes et orthoptistes du secteur, qui orientent les parents."
  },
  {
    id: "U3-333", epreuve: "U3", theme: "Mercatique et communication", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "A", etape: 8,
    question: "Claire organise un samedi « porte ouverte enfants » avec des ateliers. De quel type de communication s'agit-il ?",
    choix: [
      "D'une communication hors-média, par un événement au magasin",
      "D'une communication média, comme une annonce dans la presse",
      "D'une communication institutionnelle, sur l'image de l'enseigne",
      "D'une communication de crise, après une plainte de client"
    ],
    bonne: 0,
    explication: "La communication média passe par les grands médias (presse, radio, télévision, affichage, cinéma, internet). Un événement au magasin, la PLV, les prospectus ou un salon sont du hors-média. La porte ouverte vise à faire connaître l'espace et à faire venir les familles : c'est une communication commerciale."
  },

  // ---------- Dossier B : prix et rentabilité (6 points) ----------
  {
    id: "U3-334", epreuve: "U3", theme: "Prix et marges", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "B", etape: 1,
    type: "calcul",
    question: "Calculez le prix de vente HT de l'équipement moyen d'enfant.",
    reponse: { valeur: 150, unite: "€ HT", decimales: 2, signe: false },
    erreurs: [
      { valeur: 144, type: "ht-ttc", message: "Tu as retiré 20 % du TTC. La TVA se calcule sur le HT : on divise le TTC par 1,2." },
      { valeur: 216, type: "ht-ttc", message: "Tu as ajouté la TVA. Le prix de 180 € est déjà TTC : on divise par 1,2." }
    ],
    explication: "PV HT = [[PV TTC|1,2]] = [[180|1,2]] = 150 € HT.",
    indice: "Le prix affiché est TTC, avec une TVA de 20 % : divise par 1,2."
  },
  {
    id: "U3-335", epreuve: "U3", theme: "Prix et marges", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "B", etape: 2,
    type: "calcul",
    question: "Calculez la marge brute unitaire de cet équipement.",
    reponse: { valeur: 90, unite: "€", decimales: 2, signe: false },
    erreurs: [
      { valeur: 120, type: "ht-ttc", message: "Tu as pris le prix TTC. La marge se calcule toujours HT : 150 − 60 = 90 €." }
    ],
    explication: "Marge brute = PV HT − coût d'achat HT = 150 − 60 = 90 €.\nLa TVA n'appartient pas au magasin : elle est reversée à l'État, on ne la compte pas dans la marge.",
    indice: "Prix de vente HT moins coût d'achat HT."
  },
  {
    id: "U3-336", epreuve: "U3", theme: "Prix et marges", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 3,
    type: "calcul",
    question: "Calculez le taux de marque de cet équipement.",
    reponse: { valeur: 60, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 150, type: "marque-marge" },
      { valeur: 66.7, type: "ht-ttc", message: "Tu as calculé avec le prix TTC. Le taux de marque se calcule HT : 90 / 150 × 100 = 60 %." },
      { valeur: 50, type: "ht-ttc", message: "Tu as divisé la marge HT par le prix TTC. On divise par le prix de vente HT : 90 / 150." }
    ],
    explication: "Taux de marque = [[marge brute|PV HT]] × 100 = [[90|150]] × 100 = 60 %.\nOn divise par le prix de vente HT, jamais par le coût d'achat (ce serait le taux de marge) ni par le TTC.",
    indice: "Le taux de marque se calcule sur le prix de vente HT."
  },
  {
    id: "U3-337", epreuve: "U3", theme: "Prix et marges", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 4,
    question: "Un représentant dit à Claire que cet équipement lui laisse « un taux de marge de 150 % ». Qu'en pensez-vous ?",
    choix: [
      "C'est faux : une marge ne peut jamais dépasser 100 % du prix de vente",
      "C'est juste : 90 € de marge rapportés au coût d'achat de 60 € font 150 %",
      "C'est faux : le taux de marge est égal au taux de marque, soit 60 %",
      "C'est juste : 150 € de prix HT rapportés au prix TTC font bien 150 %"
    ],
    bonne: 1,
    explication: "Taux de marge = [[marge|coût d'achat HT]] × 100 = [[90|60]] × 100 = 150 %. Il peut dépasser 100 %, car on divise par le coût d'achat. Le taux de marque (60 %) divise la même marge par le prix de vente HT : il reste toujours sous 100 %. Toujours dire lequel des deux on donne.",
    surLaCopie: "Taux de marge = 90 / 60 × 100 = 150 % : l'annonce est juste.\nIl ne faut pas le confondre avec le taux de marque, calculé sur le prix de vente HT : 60 %."
  },
  {
    id: "U3-338", epreuve: "U3", theme: "Prix et marges", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 5,
    type: "calcul",
    question: "Calculez le coefficient multiplicateur TTC de cet équipement.",
    reponse: { valeur: 3, unite: "", decimales: 2, signe: false },
    erreurs: [
      { valeur: 2.5, type: "ht-ttc", message: "C'est le coefficient HT (150 / 60). Le coefficient TTC part du coût d'achat HT pour arriver au prix TTC : 180 / 60." }
    ],
    explication: "Coefficient TTC = [[PV TTC|coût d'achat HT]] = [[180|60]] = 3.\nEn optique, c'est le coefficient le plus utilisé : on multiplie l'achat HT par 3 pour obtenir le prix affiché.",
    indice: "Prix de vente TTC divisé par le coût d'achat HT."
  },
  {
    id: "U3-339", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 6,
    question: "Pour l'équipement d'un enfant, que doit faire Claire avant la vente ?",
    choix: [
      "Rien de particulier : le 100 % Santé ne concerne que les adultes",
      "Remettre un devis avec au moins un équipement 100 % Santé",
      "Vendre seulement des équipements 100 % Santé aux mineurs",
      "Faire signer aux parents une renonciation au tiers payant"
    ],
    bonne: 1,
    explication: "Depuis 2020, l'opticien doit remettre un devis normalisé qui présente au moins un équipement de classe A (100 % Santé), sans reste à charge avec un contrat responsable, pour les enfants comme pour les adultes. La famille reste libre de choisir un équipement de classe B, à prix libre."
  },
  {
    id: "U3-340", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "B", etape: 7,
    question: "Le salaire du nouvel opticien est-il une charge fixe ou une charge variable ?",
    choix: [
      "Une charge variable, car il augmente quand le magasin vend plus",
      "Une charge fixe, car il est dû quel que soit le chiffre d'affaires",
      "Une charge variable, car il change si l'opticien fait des heures",
      "Ni l'une ni l'autre, car un salaire n'est pas une charge du magasin"
    ],
    bonne: 1,
    explication: "Une charge fixe ne dépend pas du volume des ventes, à capacité de production donnée : salaires, loyer, assurances, amortissements, intérêts. Une charge variable suit les ventes : ici, le coût d'achat des marchandises vendues. C'est ce classement qui permet de calculer le seuil de rentabilité."
  },
  {
    id: "U3-341", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 8,
    type: "pose",
    question: "Calculez le seuil de rentabilité 2027 du magasin, étape par étape.",
    etapes: [
      {
        consigne: "Marge sur coût variable 2027 (en €)",
        reponse: { valeur: 264000, unite: "€", decimales: 0, tolerance: 1, signe: false },
        aide: "Chiffre d'affaires HT moins charges variables.",
        ligne: "MCV = 440 000 − 176 000 = 264 000 €",
        erreurs: [{ valeur: 44000, type: "notion", message: "C'est le résultat (MCV − charges fixes). La MCV retire seulement les charges variables du CA : 440 000 − 176 000." }]
      },
      {
        consigne: "Taux de marge sur coût variable (en %)",
        reponse: { valeur: 60, unite: "%", decimales: 1, tolerance: 0.1, signe: false },
        aide: "MCV divisée par le chiffre d'affaires HT.",
        ligne: "Taux de MCV = [[264 000|440 000]] × 100 = 60 %",
        erreurs: [{ valeur: 40, type: "notion", message: "C'est le taux de charges variables (176 000 / 440 000). Le taux de MCV vaut 264 000 / 440 000 = 60 %." }]
      },
      {
        consigne: "Seuil de rentabilité (en € HT, arrondi à l'euro)",
        reponse: { valeur: 366667, unite: "€ HT", decimales: 0, tolerance: 1, signe: false },
        aide: "Charges fixes divisées par le taux de MCV.",
        ligne: "SR = [[220 000|0,60]] = 366 667 € HT",
        erreurs: [{ valeur: 550000, type: "notion", message: "Tu as divisé par le taux de charges variables (40 %). Le seuil se calcule avec le taux de MCV : 220 000 / 0,60." }]
      }
    ],
    explication: "MCV = 440 000 − 176 000 = 264 000 €.\nTaux de MCV = 264 000 / 440 000 = 60 %.\nSR = charges fixes / taux de MCV = 220 000 / 0,60 = 366 666,67 €, soit 366 667 € HT.\nÀ ce chiffre d'affaires, la MCV couvre juste les charges fixes : résultat nul."
  },
  {
    id: "U3-342", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "B", etape: 9,
    type: "calcul",
    question: "Calculez le point mort, en mois, en supposant les ventes réparties de façon régulière sur l'année.",
    reponse: { valeur: 10, unite: "mois", decimales: 1, tolerance: 0.1, signe: false },
    erreurs: [
      { valeur: 2, type: "notion", message: "C'est le nombre de mois de bénéfice après le point mort. Le point mort est le moment où le seuil est atteint : SR / CA × 12." },
      { valeur: 300, type: "mois", message: "Tu as compté en jours (année de 360 jours). La question demande des mois : SR / CA × 12." }
    ],
    explication: "Point mort = [[SR|CA]] × 12 = [[366 667|440 000]] × 12 = 10,0 mois.\nLe seuil est atteint à la fin du mois d'octobre 2027. Les deux derniers mois de l'année font le bénéfice.",
    indice: "Seuil de rentabilité divisé par le chiffre d'affaires, multiplié par 12 mois.",
    surLaCopie: "Point mort = 366 667 / 440 000 × 12 = 10 mois.\nLe seuil de rentabilité serait atteint fin octobre 2027."
  },
  {
    id: "U3-343", epreuve: "U3", theme: "Seuil de rentabilité", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U3-01", partie: "B", etape: 10,
    question: "Que pouvez-vous conclure sur la rentabilité du projet en 2027 ?",
    choix: [
      "Le magasin est en perte, car le seuil n'est atteint qu'en octobre",
      "Le résultat est nul, car le CA prévu est égal au seuil de rentabilité",
      "Le projet est rentable : le CA peut baisser d'environ 17 % sans perte",
      "Le projet est rentable : le bénéfice prévu atteint 220 000 €"
    ],
    bonne: 2,
    explication: "Le CA prévu (440 000 €) dépasse le seuil (366 667 €) : le magasin fait un bénéfice de 264 000 − 220 000 = 44 000 €. Marge de sécurité = 440 000 − 366 667 = 73 333 €, soit un indice de sécurité de 73 333 / 440 000 = 16,7 % : les ventes peuvent baisser d'environ 17 % avant la perte. C'est correct mais pas large : la réussite de l'espace enfants compte.",
    surLaCopie: "Le CA prévu dépasse le seuil : bénéfice prévu de 44 000 €, marge de sécurité de 73 333 €.\nLes ventes peuvent baisser de 16,7 % avant la perte : le projet est rentable, avec une marge de manœuvre limitée."
  },

  // ---------- Dossier C : financer l'aménagement (5 points) ----------
  {
    id: "U3-344", epreuve: "U3", theme: "Analyse financière", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "C", etape: 1,
    type: "calcul",
    question: "Calculez le fonds de roulement net global (FRNG) au 31 décembre 2026.",
    reponse: { valeur: 45000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: -45000, type: "signe", message: "On part des ressources stables et on retire les emplois stables : 185 000 − 140 000 = +45 000 €." },
      { valeur: -15000, type: "notion", message: "Tu n'as pris que les capitaux propres. Les ressources stables comprennent aussi les dettes financières : 185 000 − 140 000." }
    ],
    explication: "FRNG = ressources stables − emplois stables = 185 000 − 140 000 = 45 000 €.\nLes ressources durables financent toutes les immobilisations, et il reste 45 000 € pour financer le cycle d'exploitation.",
    indice: "Ressources stables moins emplois stables."
  },
  {
    id: "U3-345", epreuve: "U3", theme: "Analyse financière", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "C", etape: 2,
    type: "calcul",
    question: "Calculez le besoin en fonds de roulement (BFR) au 31 décembre 2026.",
    reponse: { valeur: 36000, unite: "€", decimales: 0, tolerance: 1, signe: true },
    erreurs: [
      { valeur: 45000, type: "notion", message: "Tu as compté la trésorerie active. Le BFR ne garde que les stocks et les créances, moins les dettes d'exploitation : 70 000 + 18 000 − 52 000." },
      { valeur: 88000, type: "notion", message: "Tu as oublié les dettes d'exploitation. Elles financent une partie des stocks et des créances : on les retire." }
    ],
    explication: "BFR = (stocks + créances) − dettes d'exploitation = (70 000 + 18 000) − 52 000 = 36 000 €.\nC'est l'argent immobilisé par l'activité : montures en stock et remboursements des mutuelles en attente.",
    indice: "Stocks plus créances clients, moins dettes fournisseurs, fiscales et sociales. La trésorerie n'entre pas dans le BFR."
  },
  {
    id: "U3-346", epreuve: "U3", theme: "Analyse financière", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "C", etape: 3,
    question: "La trésorerie nette vaut 45 000 − 36 000 = 9 000 €. Que pouvez-vous en conclure ?",
    choix: [
      "Le magasin est en danger : sa trésorerie est inférieure à son BFR",
      "Le FRNG finance tout le BFR, et il reste 9 000 € de trésorerie",
      "Le magasin doit emprunter 9 000 € pour couvrir son découvert",
      "Le BFR finance le FRNG, ce qui laisse 9 000 € de bénéfice"
    ],
    bonne: 1,
    explication: "Trésorerie nette = FRNG − BFR = 9 000 €, et on retrouve bien trésorerie active − trésorerie passive = 9 000 − 0. Elle est positive : les ressources stables couvrent les immobilisations et tout le besoin d'exploitation. L'équilibre financier est respecté, mais la trésorerie est faible pour payer 40 000 € d'aménagement.",
    surLaCopie: "TN = FRNG − BFR = 45 000 − 36 000 = 9 000 € : le FRNG finance tout le BFR, l'équilibre financier est respecté.\nMais 9 000 € ne suffisent pas pour payer l'aménagement de 40 000 €."
  },
  {
    id: "U3-347", epreuve: "U3", theme: "Investissement et financement", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U3-01", partie: "C", etape: 4,
    question: "Si Claire payait l'aménagement de 40 000 € sur sa trésorerie, sans emprunter, que deviendrait sa situation (toutes choses égales par ailleurs) ?",
    choix: [
      "Rien ne changerait, car un aménagement n'entre pas dans le bilan",
      "Le BFR augmenterait de 40 000 € et la trésorerie resterait à 9 000 €",
      "Le FRNG tomberait à 5 000 € et la trésorerie à −31 000 €",
      "Le FRNG monterait à 85 000 € grâce à la nouvelle immobilisation"
    ],
    bonne: 2,
    explication: "L'aménagement est une immobilisation : les emplois stables passent à 180 000 €. Sans nouvelle ressource stable, FRNG = 185 000 − 180 000 = 5 000 €. Le BFR ne change pas (36 000 €), donc TN = 5 000 − 36 000 = −31 000 € : un découvert. Règle : un investissement durable se finance par une ressource durable (emprunt, apport)."
  },
  {
    id: "U3-348", epreuve: "U3", theme: "Investissement et financement", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "C", etape: 5,
    question: "Le ratio d'endettement (dettes financières / capitaux propres) vaut 0,48. Après l'emprunt de 40 000 €, il passerait à 0,80. Que conclure ?",
    choix: [
      "L'emprunt est impossible : un ratio supérieur à 0,50 est interdit",
      "L'emprunt est raisonnable : les dettes restent sous les fonds propres",
      "L'emprunt est inutile : le magasin a déjà assez de trésorerie",
      "L'emprunt est risqué : le ratio a presque doublé et dépasse la limite de 0,60"
    ],
    bonne: 1,
    explication: "Après l'emprunt : (60 000 + 40 000) / 125 000 = 0,80. Le ratio reste sous 1 : les dettes financières restent inférieures aux capitaux propres, la banque considère en général que l'entreprise peut encore emprunter. Il n'existe pas de plafond légal à 0,50 ou 0,60."
  },
  {
    id: "U3-349", epreuve: "U3", theme: "Investissement et financement", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "C", etape: 6,
    type: "calcul",
    question: "Calculez l'annuité constante du prêt (au centime près).",
    reponse: { valeur: 8985.08, unite: "€", decimales: 2, tolerance: 0.05, signe: false },
    erreurs: [
      { valeur: 9600, type: "notion", message: "C'est la première annuité d'un prêt à amortissement constant (8 000 + 1 600). Ici les annuités sont constantes : a = C × i / (1 − (1 + i)^−n)." },
      { valeur: 8000, type: "notion", message: "Tu as seulement divisé le capital par 5. L'annuité comprend aussi les intérêts : a = C × i / (1 − (1 + i)^−n)." }
    ],
    explication: "a = C × [[i|1 − (1 + i)^−n]] = 40 000 × [[0,04|1 − 1,04^−5]]\n1,04^−5 = 0,8219271, donc 1 − 0,8219271 = 0,1780729\na = [[1 600|0,1780729]] = 8 985,08 €.\nGarde la valeur de la calculatrice sans arrondir en cours de calcul.\nClaire remboursera 8 985,08 € chaque année pendant 5 ans.",
    indice: "Formule de l'annuité constante : a = C × i / (1 − (1 + i)^−n), avec C = 40 000, i = 0,04, n = 5."
  },
  {
    id: "U3-350", epreuve: "U3", theme: "Investissement et financement", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U3-01", partie: "C", etape: 7,
    type: "pose",
    question: "Complétez la première ligne du tableau d'amortissement du prêt (annuité : 8 985,08 €), étape par étape.",
    etapes: [
      {
        consigne: "Intérêts de la première année (en €)",
        reponse: { valeur: 1600, unite: "€", decimales: 2, tolerance: 0.05, signe: false },
        aide: "Capital restant dû en début d'année × taux d'intérêt.",
        ligne: "Intérêts = 40 000 × 0,04 = 1 600,00 €"
      },
      {
        consigne: "Amortissement du capital la première année (en €)",
        reponse: { valeur: 7385.08, unite: "€", decimales: 2, tolerance: 0.05, signe: false },
        aide: "L'annuité paie d'abord les intérêts ; le reste rembourse le capital.",
        ligne: "Amortissement = 8 985,08 − 1 600,00 = 7 385,08 €",
        erreurs: [{ valeur: 8000, type: "notion", message: "8 000 €, c'est 40 000 / 5 : ce serait un prêt à amortissement constant. Ici l'annuité est constante : amortissement = annuité − intérêts." }]
      },
      {
        consigne: "Capital restant dû à la fin de la première année (en €)",
        reponse: { valeur: 32614.92, unite: "€", decimales: 2, tolerance: 0.05, signe: false },
        aide: "On retire du capital emprunté seulement la part remboursée, pas toute l'annuité.",
        ligne: "Capital restant dû = 40 000 − 7 385,08 = 32 614,92 €",
        erreurs: [{ valeur: 31014.92, type: "notion", message: "Tu as retiré toute l'annuité. Les intérêts ne remboursent pas le capital : on retire seulement l'amortissement, 7 385,08 €." }]
      }
    ],
    explication: "Intérêts = 40 000 × 4 % = 1 600 €.\nAmortissement = 8 985,08 − 1 600 = 7 385,08 €.\nCapital restant dû = 40 000 − 7 385,08 = 32 614,92 €.\nSeuls les intérêts sont une charge (financière) au compte de résultat. Le remboursement du capital n'en est pas une."
  },
  {
    id: "U3-351", epreuve: "U3", theme: "Investissement et financement", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "C", etape: 8,
    type: "calcul",
    question: "Calculez la dotation aux amortissements de l'aménagement pour l'année 2027.",
    reponse: { valeur: 3750, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 5000, type: "notion", message: "C'est l'annuité d'une année complète. L'aménagement sert à partir du 1er avril : 9 mois en 2027, donc 5 000 × 9 / 12." },
      { valeur: 1250, type: "mois", message: "Tu as compté 3 mois. Du 1er avril au 31 décembre, il y a 9 mois d'utilisation : 5 000 × 9 / 12." },
      { valeur: 8000, type: "notion", message: "Tu as amorti sur 5 ans, la durée du prêt. L'aménagement s'amortit sur sa durée d'utilisation : 8 ans." },
      { valeur: 6000, type: "notion", message: "Tu as amorti sur 5 ans, la durée du prêt. L'aménagement s'amortit sur sa durée d'utilisation : 8 ans." }
    ],
    explication: "Annuité pleine = [[40 000|8]] = 5 000 €.\nMise en service le 1er avril 2027 : 9 mois en 2027.\nDotation 2027 = 5 000 × [[9|12]] = 3 750 €.\nLa dotation baisse le résultat (et l'impôt) sans faire sortir d'argent.",
    indice: "Base / durée donne l'annuité d'une année entière ; la première année, on la prend au prorata des mois d'utilisation."
  },

  // ---------- Dossier D : recruter un opticien (5 points) ----------
  {
    id: "U3-352", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 1,
    question: "Claire peut-elle embaucher l'opticien en CDD de 12 mois « pour voir si l'espace enfants marche » ?",
    choix: [
      "Oui, car un employeur choisit librement entre CDD et CDI",
      "Oui, car un CDD est toujours permis pendant les 2 premières années",
      "Non, car un CDD ne peut jamais durer plus de 6 mois, renouvellement compris",
      "Non, car le besoin est permanent : ouvrir tous les samedis"
    ],
    bonne: 3,
    explication: "Le CDI est la forme normale du contrat de travail. Un CDD ne peut pas servir à pourvoir durablement un emploi lié à l'activité normale et permanente de l'entreprise : il faut un motif précis (remplacement, accroissement temporaire d'activité…). Tester le salarié se fait avec la période d'essai. Un CDD irrégulier peut être requalifié en CDI par le juge.",
    surLaCopie: "Le poste répond à un besoin permanent (ouvrir tous les samedis) : un CDD est interdit, il pourrait être requalifié en CDI.\nJe conseille un CDI avec une période d'essai pour tester le salarié."
  },
  {
    id: "U3-353", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 2,
    question: "En CDI, la période d'essai de 4 mois prévue pour cet opticien classé technicien est-elle possible ?",
    choix: [
      "Oui, la période d'essai est libre si le salarié signe le contrat",
      "Non, pour un technicien elle ne peut pas dépasser 3 mois au départ",
      "Oui, 4 mois est la durée prévue pour tous les salariés en CDI",
      "Non, une période d'essai est interdite pour un salarié diplômé"
    ],
    bonne: 1,
    explication: "Le Code du travail fixe la durée maximale de la période d'essai d'un CDI : 2 mois pour les ouvriers et employés, 3 mois pour les agents de maîtrise et techniciens, 4 mois pour les cadres. Elle peut être renouvelée une fois si un accord de branche étendu le prévoit et si le contrat le dit. Pour cet opticien, Claire doit prévoir 3 mois au plus."
  },
  {
    id: "U3-354", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "facile",
    sujet: "SUJET-U3-01", partie: "D", etape: 3,
    type: "calcul",
    question: "Calculez le salaire net mensuel de l'opticien (avant impôt sur le revenu).",
    reponse: { valeur: 1794, unite: "€", decimales: 0, tolerance: 1, signe: false },
    erreurs: [
      { valeur: 3220, type: "brut-net", message: "C'est le coût pour l'employeur. Le salaire net est le brut moins les cotisations salariales : 2 300 × 0,78." },
      { valeur: 1380, type: "brut-net", message: "Tu as retiré les cotisations patronales. Elles sont payées en plus par l'employeur : le net retire seulement les cotisations salariales (22 %)." },
      { valeur: 506, type: "brut-net", message: "C'est le montant des cotisations salariales. Le net est ce qui reste au salarié : 2 300 − 506 = 1 794 €." }
    ],
    explication: "Cotisations salariales = 2 300 × 0,22 = 506 €.\nSalaire net = 2 300 − 506 = 1 794 €, soit 2 300 × 0,78.",
    indice: "Retire du brut les cotisations salariales seulement (22 %)."
  },
  {
    id: "U3-355", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 4,
    type: "pose",
    question: "Calculez le coût annuel de cet opticien pour l'employeur (12 mois de salaire), étape par étape.",
    etapes: [
      {
        consigne: "Cotisations patronales mensuelles (en €)",
        reponse: { valeur: 920, unite: "€", decimales: 0, tolerance: 1, signe: false },
        aide: "40 % du salaire brut.",
        ligne: "Cotisations patronales = 2 300 × 0,40 = 920 €",
        erreurs: [{ valeur: 506, type: "brut-net", message: "Ce sont les cotisations salariales (22 %). L'employeur paie ses cotisations patronales : 40 % du brut." }]
      },
      {
        consigne: "Coût mensuel pour l'employeur (en €)",
        reponse: { valeur: 3220, unite: "€", decimales: 0, tolerance: 1, signe: false },
        aide: "Salaire brut plus cotisations patronales.",
        ligne: "Coût mensuel = 2 300 + 920 = 3 220 €",
        erreurs: [{ valeur: 3726, type: "brut-net", message: "Tu as ajouté aussi les cotisations salariales. Elles sont prises sur le brut : elles ne coûtent rien de plus à l'employeur." }]
      },
      {
        consigne: "Coût annuel pour l'employeur (en €)",
        reponse: { valeur: 38640, unite: "€", decimales: 0, tolerance: 1, signe: false },
        aide: "Coût mensuel × 12.",
        ligne: "Coût annuel = 3 220 × 12 = 38 640 €",
        erreurs: [{ valeur: 27600, type: "brut-net", message: "C'est le salaire brut annuel. L'employeur paie en plus ses cotisations patronales : 3 220 × 12." }]
      }
    ],
    explication: "Cotisations patronales = 2 300 × 40 % = 920 € par mois.\nCoût mensuel = 2 300 + 920 = 3 220 €, soit 2 300 × 1,40.\nCoût annuel = 3 220 × 12 = 38 640 €.\nEn 2027 (embauche au 1er avril), il pèse 3 220 × 9 = 28 980 € dans les charges fixes."
  },
  {
    id: "U3-356", epreuve: "U3", theme: "Analyse financière", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 5,
    question: "Dans les soldes intermédiaires de gestion, quel solde l'embauche fait-elle baisser en premier ?",
    choix: [
      "La marge commerciale, car le salaire s'ajoute au coût des montures",
      "La valeur ajoutée, car le salaire est une consommation externe",
      "L'excédent brut d'exploitation, car c'est une charge de personnel",
      "Le résultat financier, car le salaire est payé par virement bancaire"
    ],
    bonne: 2,
    explication: "EBE = valeur ajoutée − impôts et taxes − charges de personnel (+ subventions d'exploitation). Salaires et cotisations patronales sont des charges de personnel : ils ne changent ni la marge commerciale ni la valeur ajoutée, ils font baisser l'EBE, puis les soldes suivants."
  },
  {
    id: "U3-357", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 6,
    question: "Quelle condition manque à la clause de non-concurrence prévue par Claire ?",
    choix: [
      "Une limite dans l'espace, car 10 km ne suffisent pas à la préciser",
      "Une limite dans le temps, car un an ne suffit pas à la préciser",
      "Une contrepartie financière versée au salarié après son départ",
      "Une signature de l'inspection du travail en bas du contrat"
    ],
    bonne: 2,
    explication: "Pour être valable, une clause de non-concurrence doit remplir quatre conditions cumulatives : être indispensable à la protection des intérêts légitimes de l'entreprise, être limitée dans le temps et dans l'espace, tenir compte des spécificités de l'emploi, et prévoir une contrepartie financière. Ici, 1 an et 10 km sont des limites précises, mais aucune somme n'est prévue.",
    surLaCopie: "La clause est limitée dans le temps (1 an) et dans l'espace (10 km), mais ne prévoit aucune contrepartie financière.\nOr les conditions de validité sont cumulatives : il faut ajouter une indemnité versée après le départ."
  },
  {
    id: "U3-358", epreuve: "U3", theme: "Droit du travail", session: "complément", difficulte: "difficile",
    sujet: "SUJET-U3-01", partie: "D", etape: 7,
    question: "Si le contrat est signé avec cette clause telle quelle, quelle en est la conséquence ?",
    choix: [
      "Tout le contrat de travail est nul, et l'opticien doit partir",
      "La clause est valable, car le salarié l'a signée en connaissance",
      "La clause est réduite d'office à 6 mois et à 5 km par la loi",
      "La clause est nulle, mais le contrat de travail reste valable"
    ],
    bonne: 3,
    explication: "Sans contrepartie financière, la clause est nulle : Claire ne pourra pas l'imposer, et l'opticien pourra travailler chez un concurrent après son départ. Le reste du contrat de travail reste valable. Le salarié qui l'aurait respectée pourrait demander des dommages et intérêts s'il prouve un préjudice."
  },
  {
    id: "U3-359", epreuve: "U3", theme: "Réglementation de l'opticien", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 8,
    question: "Une mère présente l'ordonnance de son fils de 12 ans, valable, et demande au nouvel opticien de l'adapter après un examen de vue. Est-ce possible ?",
    choix: [
      "Oui, l'opticien peut adapter toute ordonnance en cours de validité",
      "Oui, si l'ophtalmologiste n'a pas écrit d'opposition sur l'ordonnance",
      "Non, l'opticien ne peut adapter que pour les 16 ans et plus",
      "Non, seul le gérant du magasin a le droit d'adapter une ordonnance"
    ],
    bonne: 2,
    explication: "L'opticien diplômé peut adapter la correction d'une ordonnance en cours de validité, sauf opposition du médecin, mais seulement pour les personnes de 16 ans et plus. Pour un enfant de 12 ans, il délivre l'équipement prescrit ; si la vue semble avoir changé, la famille doit revoir l'ophtalmologiste. Un point à expliquer aux parents dans l'espace enfants."
  },
  {
    id: "U3-360", epreuve: "U3", theme: "Droit des entreprises", session: "complément", difficulte: "moyen",
    sujet: "SUJET-U3-01", partie: "D", etape: 9,
    question: "Claire est l'associée unique et la gérante de l'EURL. Quel est son statut social ?",
    choix: [
      "Travailleuse non salariée, affiliée au régime des indépendants",
      "Salariée de l'EURL, affiliée au régime général comme ses employés",
      "Assimilée salariée, comme la présidente d'une SASU",
      "Conjointe collaboratrice, sans protection sociale propre"
    ],
    bonne: 0,
    explication: "Le gérant associé unique d'une EURL (personne physique) est travailleur non salarié (TNS) : il cotise à la sécurité sociale des indépendants, en général pour moins cher qu'un salarié, mais avec une protection plus faible. Le président d'une SASU est, lui, assimilé salarié. Dans une EURL, la responsabilité de Claire est limitée à ses apports."
  }

);
