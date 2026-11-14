SPECIFICITES.push({
  epreuve: "U3",
  resume: "Écrit 3 h · coef 5 · calculatrice autorisée · un magasin, 3 ou 4 dossiers, 5 points de forme",
  blocs: [

    {
      type: "texte", titre: "Le jour J",
      points: [
        "Écrit de 3 h, coefficient 5 (ou contrôle en cours de formation de même niveau).",
        "Calculatrice autorisée (mode examen, ou modèle « collège » sans mémoire).",
        "Un seul magasin d'optique du début à la fin, avec un projet : embauche, investissement, nouvelle activité, rachat.",
        "3 ou 4 dossiers indépendants, notés sur 100, dont 5 points de forme : présentation et orthographe comptent.",
        "La règle de chaque question : calculer → commenter → conseiller. Un chiffre sans commentaire ne rapporte que la moitié des points.",
        "Les annexes sont tes preuves : cite-les (« d'après l'annexe 4… »).",
        "Les dossiers sont indépendants : commence par celui que tu maîtrises, et garde environ 1 h pour le dossier chiffré, le plus lourd (30 à 40 points)."
      ]
    },

    {
      type: "frequences", titre: "Ce qui tombe (5 sujets étudiés : 2017, 2018, 2019, 2023, 2024)",
      lignes: [
        { sujet: "Marché, zone de chalandise, opportunités et menaces", frequence: "4/5", theme: "Marché et zone de chalandise" },
        { sujet: "Communication et forme de commerce (franchise, coopérative)", frequence: "4/5", theme: "Mercatique et communication" },
        { sujet: "Marge, taux de marque, coefficient multiplicateur", frequence: "4/5", theme: "Prix et marges" },
        { sujet: "Bilan fonctionnel : FRNG, BFR, trésorerie nette", frequence: "3/5", theme: "Analyse financière" },
        { sujet: "Seuil de rentabilité et point mort", frequence: "3/5", theme: "Seuil de rentabilité" },
        { sujet: "Contrat de travail, clause de non-concurrence, salaire", frequence: "3/5", theme: "Droit du travail" },
        { sujet: "Amortissement, emprunt, crédit-bail, autofinancement", frequence: "3/5", theme: "Investissement et financement" },
        { sujet: "Forme juridique, statut du dirigeant, fonds de commerce", frequence: "2/5", theme: "Droit des entreprises" },
        { sujet: "Remboursements, réfraction et renouvellement par l'opticien", frequence: "2/5", theme: "Réglementation de l'opticien" }
      ]
    },

    {
      type: "pieges", titre: "Les 12 pièges",
      items: [
        { id: "P-U3-01", titre: "Taux de marque ou taux de marge ?", faux: "Taux de marque = marge / coût d'achat.", juste: "Taux de MARQUE = marge / prix de vente HT. Taux de MARGE = marge / coût d'achat HT. Même marge de 90 € : 60 % de marque, 150 % de marge.", theme: "Prix et marges", questions: ["U3-001", "U3-002"] },
        { id: "P-U3-02", titre: "HT et TTC mélangés", faux: "TVA d'un équipement à 240 € TTC = 240 × 20 % = 48 €.", juste: "Le TTC contient déjà la TVA : HT = 240 / 1,2 = 200 €, TVA = 40 €. Marges, taux et chiffre d'affaires se calculent HT.", theme: "Prix et marges", questions: ["U3-005", "U3-008"] },
        { id: "P-U3-03", titre: "Deux baisses de 10 % ≠ une baisse de 20 %", faux: "IDC 90 et 10 % d'évasion : on retire 20 % du marché.", juste: "On multiplie l'une après l'autre : × 0,90 puis × 0,90, soit × 0,81.", theme: "Marché et zone de chalandise", questions: ["U3-007"] },
        { id: "P-U3-04", titre: "Le SR quand on perd de l'argent", faux: "Le résultat est négatif, donc on ne peut pas calculer le seuil de rentabilité.", juste: "La formule marche toujours : SR = charges fixes / taux de MCV. Il est alors plus grand que le CA, et l'écart dit combien de ventes il manque.", theme: "Seuil de rentabilité", questions: ["U3-017"] },
        { id: "P-U3-05", titre: "Les dotations dans la trésorerie", faux: "Chaque année, la dotation aux amortissements est un décaissement.", juste: "La dotation est une charge calculée, sans sortie d'argent. Seul le paiement du bien, le jour de l'achat, est un décaissement.", theme: "Investissement et financement", questions: ["U3-025"] },
        { id: "P-U3-06", titre: "L'annuité d'emprunt en charges", faux: "Toute l'annuité de l'emprunt est une charge.", juste: "Seuls les intérêts sont une charge (financière). Le remboursement du capital n'en est pas une.", theme: "Investissement et financement", questions: ["U3-026"] },
        { id: "P-U3-07", titre: "Le crédit-bail au bilan", faux: "En crédit-bail, le bien est à l'actif et on l'amortit.", juste: "Le bien est loué : il n'est pas à l'actif, et les loyers sont des charges externes qui baissent la valeur ajoutée.", theme: "Investissement et financement", questions: ["U3-027"] },
        { id: "P-U3-08", titre: "Où pèse une embauche ?", faux: "Le salaire d'un nouvel opticien baisse la valeur ajoutée.", juste: "Les charges de personnel se retirent au niveau de l'EBE, puis se répercutent sur tous les soldes suivants.", theme: "Analyse financière", questions: ["U3-022"] },
        { id: "P-U3-09", titre: "Le CDD « pour tester »", faux: "Pour un poste permanent, on commence par un CDD pour voir.", juste: "Un CDD ne peut pas pourvoir un emploi durable. Pour tester quelqu'un, on utilise la période d'essai du CDI.", theme: "Droit du travail", questions: ["U3-028", "U3-029"] },
        { id: "P-U3-10", titre: "La clause de non-concurrence gratuite", faux: "Une clause limitée à 1 an et 30 km est forcément valable.", juste: "Il faut aussi une contrepartie financière. Sans elle, la clause est nulle, mais le contrat de travail reste valable.", theme: "Droit du travail", questions: ["U3-030", "U3-031"] },
        { id: "P-U3-11", titre: "Racheter un magasin « sans le personnel »", faux: "Le repreneur choisit les salariés qu'il garde.", juste: "Les contrats en cours passent automatiquement au nouvel employeur, aux mêmes conditions (article L1224-1 du Code du travail).", theme: "Droit du travail", questions: ["U3-033"] },
        { id: "P-U3-12", titre: "Le chiffre sans commentaire", faux: "« FRNG = 25 000 €. » Point final.", juste: "Toujours comparer (à l'année d'avant, à la profession, à 1, au BFR…), dire si c'est bon ou mauvais, puis conseiller.", theme: "Analyse financière", questions: ["U3-046", "U3-047", "U3-048"] }
      ]
    },

    {
      type: "formules", titre: "Les formules à poser",
      lignes: [
        { nom: "Prix HT", formule: "PV HT = PV TTC / 1,2 (TVA 20 % sur l'optique)", exemple: "Monture à 180 € TTC → 150 € HT", rappelee: false },
        { nom: "Taux de marque", formule: "marge brute / PV HT × 100", exemple: "Achat 60 € HT, vente 150 € HT : 90 / 150 = 60 %", rappelee: false },
        { nom: "Taux de marge", formule: "marge brute / coût d'achat HT × 100", exemple: "90 / 60 = 150 %", rappelee: false },
        { nom: "Coefficient multiplicateur TTC", formule: "PV TTC / coût d'achat HT", exemple: "180 / 60 = 3", rappelee: false },
        { nom: "Marché potentiel annuel", formule: "habitants × % de porteurs × panier moyen / durée de renouvellement", exemple: "12 000 × 0,70 × 360 € / 3 ans = 1 008 000 € TTC", rappelee: false },
        { nom: "Marché net de l'évasion", formule: "marché × IDC / 100 × (1 − taux d'évasion)", exemple: "1 000 000 × 0,90 × 0,90 = 810 000 €", rappelee: false },
        { nom: "Seuil de rentabilité", formule: "charges fixes / taux de marge sur coût variable", exemple: "135 000 / 0,60 = 225 000 € HT", rappelee: false },
        { nom: "Point mort", formule: "SR / CA × 12 mois (ou × jours d'ouverture)", exemple: "225 000 / 300 000 × 12 = 9 mois → fin septembre", rappelee: false },
        { nom: "FRNG", formule: "ressources stables − emplois stables", exemple: "180 000 − 150 000 = 30 000 €", rappelee: false },
        { nom: "BFR", formule: "stocks + créances clients − dettes fournisseurs, fiscales et sociales", exemple: "40 000 + 5 000 − 25 000 = 20 000 €", rappelee: false },
        { nom: "Trésorerie nette", formule: "FRNG − BFR (= trésorerie active − trésorerie passive)", exemple: "30 000 − 20 000 = 10 000 €", rappelee: false },
        { nom: "Marge commerciale", formule: "ventes − (achats + stock initial − stock final)", exemple: "400 000 − (150 000 + 50 000 − 40 000) = 240 000 €", rappelee: false },
        { nom: "Délai fournisseurs", formule: "dettes fournisseurs TTC / achats TTC × 365", exemple: "24 000 / 146 000 × 365 = 60 jours", rappelee: false },
        { nom: "Dotation linéaire", formule: "valeur HT / durée × mois d'utilisation / 12", exemple: "15 000 / 5 × 9 / 12 = 2 250 € la 1re année", rappelee: false },
        { nom: "Annuité constante", formule: "capital × taux / (1 − (1 + taux)^−durée)", exemple: "20 000 × 0,05 / (1 − 1,05^−5) ≈ 4 619,50 €", rappelee: true },
        { nom: "Intérêts d'une année", formule: "capital restant dû × taux", exemple: "20 000 × 5 % = 1 000 € la 1re année", rappelee: false },
        { nom: "Ratio d'endettement", formule: "dettes financières / capitaux propres", exemple: "60 000 / 120 000 = 0,5 : peut encore emprunter", rappelee: true },
        { nom: "Capacité d'autofinancement", formule: "résultat net + dotations − reprises", exemple: "30 000 + 12 000 − 2 000 = 40 000 €", rappelee: false },
        { nom: "Salaire net et coût employeur", formule: "net = brut × (1 − taux salarial) ; coût = brut × (1 + taux patronal)", exemple: "2 000 € brut : 1 560 € net, 2 900 € de coût", rappelee: false }
      ]
    },

    {
      type: "formules", titre: "À relire la veille : formules et repères de gestion",
      lignes: [
        { nom: "HT, TVA, TTC", formule: "PV HT = [[PV TTC|1,2]] (TVA à 20 %)  ;  TVA = TTC − HT", exemple: "240 € TTC → 200 € HT → 40 € de TVA (jamais 20 % de 240). Taux, marges et seuil se calculent en HT.", rappelee: false },
        { nom: "Taux de marque", formule: "[[marge brute|PV HT]] × 100", exemple: "[[90|150]] = 60 %. Repère : toujours inférieur à 100 %.", rappelee: false },
        { nom: "Taux de marge", formule: "[[marge brute|coût d'achat HT]] × 100", exemple: "[[90|60]] = 150 %. Peut dépasser 100 %.", rappelee: false },
        { nom: "Coefficient multiplicateur", formule: "TTC : [[PV TTC|achat HT]]  ;  HT : [[1|1 − taux de marque]]", exemple: "[[180|60]] = 3 en TTC ; [[1|0,4]] = 2,5 en HT pour 60 % de marque.", rappelee: false },
        { nom: "Seuil de rentabilité", formule: "[[charges fixes|taux de marge sur coût variable]]", exemple: "[[135 000|0,60]] = 225 000 € HT. Au-dessus du seuil, le magasin gagne de l'argent.", rappelee: false },
        { nom: "Point mort et indice de sécurité", formule: "[[SR|CA]] × 12 mois  ;  [[CA − SR|CA]]", exemple: "[[225 000|300 000]] × 12 = 9 mois (fin septembre) ; [[75 000|300 000]] = 25 % : le CA peut baisser de 25 % avant la perte.", rappelee: false },
        { nom: "FRNG, BFR, trésorerie nette", formule: "FRNG = ressources stables − emplois stables  ;  trésorerie = FRNG − BFR", exemple: "30 000 − 20 000 = 10 000 €. Repère : trésorerie négative = découvert, il faut agir sur le BFR (stocks, délais) ou sur les ressources stables.", rappelee: false },
        { nom: "Ratio d'endettement", formule: "[[dettes financières|capitaux propres]]", exemple: "[[60 000|120 000]] = 0,5. Repère : sous 1, le magasin peut encore emprunter ; au-dessus, la banque hésite.", rappelee: false },
        { nom: "CAF", formule: "résultat net + dotations aux amortissements − reprises", exemple: "28 000 + 12 000 = 40 000 €. Repère : la CAF doit couvrir le remboursement des emprunts.", rappelee: false },
        { nom: "Part de marché et transformation", formule: "[[CA du magasin|CA du marché]]  ;  [[ventes|visiteurs]]", exemple: "[[450 000|3 000 000]] = 15 % ; [[252|840]] = 30 %.", rappelee: false },
        { nom: "Salaire net et coût employeur", formule: "net = brut × (1 − taux salarial)  ;  coût = brut × (1 + taux patronal)", exemple: "2 000 € brut, 22 % et 45 % : 1 560 € net, 2 900 € de coût pour le magasin.", rappelee: false }
      ]
    },

    {
      type: "texte", titre: "À relire la veille : phrases-types pour commenter",
      points: [
        "Toujours quatre temps : le chiffre, la comparaison, ce que ça signifie, le conseil.",
        "Marque : « Le taux de marque est de … %, au-dessus (ou en dessous) de … l'an dernier. Sur 100 € de vente HT, il reste … € pour payer les charges. Je conseille de … »",
        "Seuil : « Le seuil de rentabilité est de … € HT, soit … % du CA. Le point mort tombe fin … et la marge de sécurité est de … €, soit … % du CA : le CA peut baisser de … % avant que le magasin passe en perte. »",
        "FRNG, BFR : « Le FRNG est de … € : les ressources stables financent les emplois stables et laissent … € pour l'exploitation. Le BFR est de … € : les stocks et créances dépassent les dettes d'exploitation. »",
        "Trésorerie : « La trésorerie nette est de … − … = … € : positive, le magasin paie ses factures sans découvert ; négative, il dépend d'un découvert, donc je conseille de réduire … ou de négocier … »",
        "Endettement : « Le ratio d'endettement est de …, inférieur (ou supérieur) à 1 : les dettes bancaires sont inférieures (ou supérieures) aux capitaux propres. Le magasin peut (ou ne peut pas) emprunter davantage, si sa CAF couvre les remboursements. »",
        "Investissement : « Le projet coûte … € ; l'annuité de … € représente … % de la CAF. Je conseille un emprunt sur … ans, qui préserve la trésorerie, plutôt qu'un paiement comptant. »",
        "Embauche : « Le poste coûte … € par an. Avec un taux de marge sur coût variable de … %, il faut … € de CA en plus pour le payer, soit … € par mois. »",
        "Droit : « Selon … (la règle), … Dans le cas présent, … (les faits de l'annexe). Donc … (la conclusion). Je conseille au gérant de … »",
        "Points et pourcentages : un écart entre deux taux se dit en points (62 % → 58 % : 4 points). La variation relative se dit en pourcentage (+ 20 % de ventes)."
      ]
    },

    {
      type: "etapes", titre: "La méthode juridique en 3 étapes",
      etapes: [
        { titre: "La règle", texte: "Cite la règle de droit : article du Code du travail ou du Code de commerce, ou jurisprudence. Ex. : une clause de non-concurrence exige une contrepartie financière.", theme: "Droit du travail" },
        { titre: "L'application au cas", texte: "Confronte la règle aux faits de l'annexe. Ex. : le projet de contrat (annexe 8) ne prévoit aucune indemnité.", theme: "Droit du travail" },
        { titre: "La conclusion", texte: "Réponds nettement, puis conseille. Ex. : la clause est nulle ; il faut ajouter une contrepartie financière pour qu'elle protège vraiment le magasin.", theme: "Droit du travail" }
      ]
    },

    {
      type: "cocher", titre: "Avant de rendre la copie", id: "U3-copie",
      items: [
        { id: "U3-copie-1", texte: "J'ai précisé HT ou TTC pour chaque montant." },
        { id: "U3-copie-2", texte: "J'ai posé la formule avant chaque calcul." },
        { id: "U3-copie-3", texte: "Chaque chiffre a son commentaire : bon ou mauvais, comparé à quoi." },
        { id: "U3-copie-4", texte: "J'ai cité les annexes que j'ai utilisées." },
        { id: "U3-copie-5", texte: "Chaque dossier se termine par un conseil clair au magasin." },
        { id: "U3-copie-6", texte: "En droit : règle, application au cas, conclusion." },
        { id: "U3-copie-7", texte: "J'ai répondu à toutes les questions, même partiellement." },
        { id: "U3-copie-8", texte: "J'ai relu l'orthographe et gardé la numérotation du sujet." }
      ]
    }

  ]
});
