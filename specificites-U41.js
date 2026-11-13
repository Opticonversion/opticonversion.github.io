SPECIFICITES.push({
  epreuve: "U41",
  resume: "CCF pour les scolaires (2 situations de 55 min) · écrit 2 h sinon · coef 2 · calculatrice autorisée",
  blocs: [
    {
      type: "texte",
      titre: "Comment se passe l'épreuve",
      points: [
        "Scolaires : CCF en 2 situations de 55 minutes maximum, chacune notée sur 10. La 1re a lieu avant la fin de la 1re année.",
        "Situation 1 : suites, fonctions, probabilités 1, statistique. Situation 2 : intégrales, équations différentielles, probabilités 2, estimation et tests.",
        "Dans chaque situation, au moins une question se fait sur ordinateur ou calculatrice (tableur, GeoGebra, algorithme), devant le professeur.",
        "Autres candidats : écrit de 2 h, avec 2 exercices de 10 points sur des parties différentes du programme.",
        "La calculatrice est autorisée, ainsi que le formulaire officiel. On te demande des arrondis précis (à 0,01 ou 0,001) : respecte celui de la consigne.",
        "Le contexte (montures, verres, lentilles, clients du magasin) n'est qu'un décor : aucune connaissance d'optique n'est nécessaire, mais il faut conclure avec les unités du contexte."
      ]
    },
    {
      type: "etapes",
      titre: "Le squelette d'un sujet écrit (5 sujets étudiés)",
      etapes: [
        { titre: "Exercice 1 · Nuage de points", texte: "Expliquer pourquoi un ajustement affine ne convient pas, changement de variable z = ln(y − k), droite de régression à la calculatrice, retour à y.", theme: "Statistique", frequence: "5/5" },
        { titre: "Exercice 1 · Équation différentielle", texte: "a y' + b y = c : solutions sans second membre, solution constante, condition initiale.", theme: "Équations différentielles", frequence: "4/5" },
        { titre: "Exercice 1 · Étude de la fonction", texte: "f(t) = k + C e^(−at) : dérivée, sens de variation, limite et asymptote, tangente en 0, interprétation.", theme: "Fonctions", frequence: "5/5" },
        { titre: "Exercice 1 · Suite et algorithme", texte: "u(n+1) = a u(n) + b, suite auxiliaire v(n) = u(n) − ℓ, algorithme « Tant que » à faire tourner.", theme: "Suites", frequence: "4/5" },
        { titre: "Exercice 2 · Arbre pondéré", texte: "Construire l'arbre, probabilité d'une intersection, probabilités totales, « sachant que ».", theme: "Probabilités", frequence: "4/5" },
        { titre: "Exercice 2 · Loi binomiale puis normale", texte: "Justifier la loi binomiale, calculer une probabilité, approcher par une loi normale (np, √(np(1 − p))).", theme: "Lois de probabilité", frequence: "4/5" },
        { titre: "Exercice 2 · Loi exponentielle", texte: "Temps d'attente ou durée de fonctionnement : P(T ≤ t), espérance et son interprétation.", theme: "Lois de probabilité", frequence: "3/5" },
        { titre: "Exercice 2 · Intervalle de confiance ou test", texte: "Estimation ponctuelle, intervalle de confiance et sa signification, ou règle de décision d'un test.", theme: "Estimation et tests", frequence: "3/5" }
      ]
    },
    {
      type: "cocher",
      titre: "Réflexes calculatrice à maîtriser",
      id: "U41-calculatrice",
      items: [
        { id: "regression", texte: "Je sais saisir deux listes et obtenir r et la droite de régression (a et b)." },
        { id: "ln-liste", texte: "Je sais créer une liste z = ln(y − k) à partir de la liste des y." },
        { id: "binomiale", texte: "Je sais calculer P(X = k) et P(X ≤ k) pour une loi binomiale." },
        { id: "normale", texte: "Je sais calculer P(a ≤ X ≤ b) pour une loi normale." },
        { id: "poisson-expo", texte: "Je sais calculer une probabilité de Poisson, et 1 − e^(−λt) pour une loi exponentielle." },
        { id: "suite", texte: "Je sais afficher les termes d'une suite (mode suite ou tableau) pour trouver un seuil." },
        { id: "algorithme", texte: "Je sais faire tourner un algorithme « Tant que » à la main dans un tableau." },
        { id: "arrondis", texte: "Je recopie le résultat avec l'arrondi demandé, pas avec tous les chiffres de l'écran." }
      ]
    },
    {
      type: "pieges",
      titre: "Les 8 pièges classiques",
      items: [
        { id: "signe-exposant", titre: "Inverser a et b dans l'exponentielle", faux: "4y' + 2y = 0 donne y = k e^(−2t).", juste: "L'exposant est −b/a = −2/4 : y = k e^(−0,5t).", theme: "Équations différentielles", questions: ["U41-017"] },
        { id: "solution-constante", titre: "Oublier de diviser pour la solution constante", faux: "2y' + 0,5y = 15 a pour solution constante 15.", juste: "y' = 0, donc 0,5c = 15 et c = 30.", theme: "Équations différentielles", questions: ["U41-018", "U41-019"] },
        { id: "tangente", titre: "Garder le terme en t² dans la tangente", faux: "La tangente en 0 est y = 80 − 10t + t².", juste: "La tangente est une droite : y = 80 − 10t. Le terme en t² sert seulement à savoir si la courbe est au-dessus ou en dessous.", theme: "Fonctions", questions: ["U41-011", "U41-012"] },
        { id: "rang-depart", titre: "Se tromper de rang au départ", faux: "2028 a le rang 9 quand 2020 a le rang 0.", juste: "Rang = année − année de départ : 2028 − 2020 = 8. Même vigilance pour le n de départ d'un algorithme.", theme: "Suites", questions: ["U41-006", "U41-024"] },
        { id: "au-moins-un", titre: "Calculer « au moins un » directement", faux: "P(X ≥ 1) = P(X = 1).", juste: "On passe par le contraire : P(X ≥ 1) = 1 − P(X = 0).", theme: "Lois de probabilité", questions: ["U41-030"] },
        { id: "variance", titre: "Donner la variance au lieu de l'écart type", faux: "X suit B(400 ; 0,1) : écart type = 36.", juste: "36 est la variance np(1 − p) ; l'écart type est √36 = 6.", theme: "Lois de probabilité", questions: ["U41-031"] },
        { id: "signe-r", titre: "Juger l'ajustement sur le signe de r", faux: "r ≈ −0,998 est négatif, donc l'ajustement affine n'est pas pertinent.", juste: "On regarde |r| : 0,998 est très proche de 1, l'ajustement est pertinent. Le signe dit seulement que la série descend.", theme: "Statistique", questions: ["U41-022"] },
        { id: "intervalle-certain", titre: "Croire que p est sûrement dans l'intervalle", faux: "p est forcément dans [0,722 ; 0,878].", juste: "On n'en est jamais certain : la méthode réussit pour environ 95 % des échantillons.", theme: "Estimation et tests", questions: ["U41-038"] }
      ]
    },
    {
      type: "formules",
      titre: "Mini-formulaire",
      lignes: [
        { nom: "Solutions de a y' + b y = 0", formule: "y = k e^(−(b/a)t)", exemple: "4y' + 2y = 0 → y = k e^(−0,5t)", rappelee: true },
        { nom: "Solution constante de a y' + b y = c", formule: "y = c / b", exemple: "y' + 0,1y = 2 → y = 20", rappelee: false },
        { nom: "Dérivée de C e^(kt)", formule: "C k e^(kt)", exemple: "(50 e^(−0,2t))' = −10 e^(−0,2t)", rappelee: false },
        { nom: "Tangente en a", formule: "y = f(a) + f'(a)(x − a)", rappelee: false },
        { nom: "Primitive de e^(kx)", formule: "(1/k) e^(kx)", exemple: "e^(−0,5x) → −2 e^(−0,5x)", rappelee: false },
        { nom: "Valeur moyenne sur [a ; b]", formule: "(1/(b − a)) × intégrale de a à b de f", rappelee: true },
        { nom: "Suite u(n+1) = a u(n) + b", formule: "ℓ = b / (1 − a), puis v(n) = u(n) − ℓ est géométrique de raison a", exemple: "0,8u + 60 → ℓ = 300", rappelee: false },
        { nom: "Probabilité conditionnelle", formule: "P_A(B) = P(A ∩ B) / P(A)", rappelee: false },
        { nom: "Loi binomiale B(n ; p)", formule: "E = np ; écart type = √(np(1 − p))", exemple: "B(400 ; 0,1) → 40 et 6", rappelee: false },
        { nom: "Loi normale", formule: "μ ± σ : 0,68 ; μ ± 2σ : 0,95 ; μ ± 3σ : 0,997", rappelee: false },
        { nom: "Loi exponentielle", formule: "P(T ≤ t) = 1 − e^(−λt) ; E(T) = 1/λ", exemple: "λ = 0,25 → durée moyenne 4", rappelee: true },
        { nom: "Intervalle de confiance à 95 %", formule: "f ± 1,96 √(f(1 − f)/n)", exemple: "f = 0,8, n = 100 → [0,722 ; 0,878]", rappelee: false }
      ]
    },
    {
      type: "calculatrice",
      titre: "Ta calculatrice le jour J",
      taches: [
        {
          id: "mode-examen",
          titre: "Activer le mode examen",
          quand: "En arrivant dans la salle, quand le surveillant le demande. Entraîne-toi avant : les données et programmes sont effacés ou bloqués.",
          modeles: {
            "ti83-premium-ce": { etapes: ["Éteins la calculatrice.", "Maintiens enfoncées en même temps [annul], [entrer] et [on], puis relâche.", "L'écran RESET OPTIONS s'affiche : valide OK.", "Appuie sur une touche pour passer en mode examen."], remarque: "Le voyant clignote et une barre bleue indique le mode examen." },
            "casio-graph90": { etapes: ["Éteins la calculatrice.", "Appuie en même temps sur [COS], [7] et [AC/ON].", "Appuie sur [F1] (Oui), puis sur [F2] (Continuer ?).", "Termine avec [EXIT]."], remarque: "Le voyant en haut de la calculatrice clignote toutes les 2 secondes." },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Appuie sur [home] et ouvre l'application Paramètres.", "Place la sélection sur Mode examen et appuie sur [ok].", "Sur Activer le mode examen, appuie sur [ok].", "Choisis Valider et appuie sur [ok]."], remarque: "Le voyant sur la tranche clignote en rouge." }
          }
        },
        {
          id: "regression",
          titre: "Droite de régression et coefficient r",
          quand: "Exercice 1, partie A : le sujet donne le tableau (x ; z) après le changement de variable z = ln(y − k).",
          modeles: {
            "ti83-premium-ce": { etapes: ["Pour afficher r : [2nde] [catalog], choisis CorrelAff, puis [entrer] deux fois.", "Appuie sur [stats], choisis 1:Modifier.", "Tape les x dans L1 et les z dans L2.", "Appuie sur [stats], va dans CALC, choisis 4:RégLin(ax+b).", "Valide avec [entrer] : a, b et r s'affichent."], remarque: "Sans CorrelAff, r n'apparaît pas." },
            "casio-graph90": { etapes: ["Appuie sur [MENU] et ouvre Statistics (Statistiques).", "Tape les x dans List 1 et les z dans List 2.", "Appuie sur [F2] (CALC) puis [F6] (SET) et vérifie que les listes sont List 1 et List 2.", "Appuie sur [F2] (CALC), [F3] (REG), [F1] (X), puis [F1] (ax+b).", "Lis a, b et r."] },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Ouvre l'application Régressions.", "Tape les x dans la colonne X1 et les z dans la colonne Y1.", "Va dans l'onglet Graphique et appuie sur [ok] : le nuage s'affiche avec r.", "Choisis le modèle Linéaire et valide avec [ok].", "Ouvre le menu Régression sous les onglets pour lire l'équation."] }
          },
          questions: ["U41-022", "U41-042", "U41-056"]
        },
        {
          id: "binomiale",
          titre: "Loi binomiale : P(X = k) et P(X ≤ k)",
          quand: "Exercice 2 : nombre de verres ou de lentilles défectueux dans un échantillon.",
          modeles: {
            "ti83-premium-ce": { etapes: ["Appuie sur [2nde] [var] pour ouvrir le menu DISTR.", "Pour P(X = k), choisis A:binomFdp( et tape n, p, k.", "Pour P(X ≤ k), choisis B:binomFRép( et tape n, p, k.", "Valide avec [entrer]."], remarque: "« Au moins 1 » : calcule 1 − P(X = 0)." },
            "casio-graph90": { etapes: ["Appuie sur [MENU] et ouvre Statistics (Statistiques).", "Appuie sur [F5] (DIST), puis [F5] (BINOMIAL).", "Pour P(X = k), choisis [F1] (Bpd) ; pour une plage, choisis [F2] (Bcd).", "Remplis les paramètres affichés (valeurs, nombre d'essais, p), puis lance le calcul."] },
            "casio-graph35": { etapes: ["Appuie sur [MENU] et ouvre le menu des statistiques.", "Appuie sur [F5] (DIST), puis [F5] (BINM).", "Pour P(X = k), choisis [F1] (Bpd) ; pour une plage, choisis [F2] (Bcd).", "Remplis les paramètres affichés (valeurs, nombre d'essais, p), puis lance le calcul."] },
            "numworks": { etapes: ["Ouvre l'application Probabilités.", "Choisis Loi binomiale et appuie sur [ok].", "Tape n et p, puis valide.", "Choisis le type de borne « X = a » ou « X ≤ a », tape a et appuie sur [ok]."] }
          },
          questions: ["U41-029", "U41-030", "U41-051"]
        },
        {
          id: "normale",
          titre: "Loi normale : P(a ≤ X ≤ b) et valeur inverse",
          quand: "Approximation d'une loi binomiale, diamètres de lentilles, test d'hypothèse.",
          modeles: {
            "ti83-premium-ce": { etapes: ["Appuie sur [2nde] [var] pour ouvrir le menu DISTR.", "Pour P(a ≤ X ≤ b), choisis 2:normalFRép( et tape a, b, μ, σ.", "Pour trouver t tel que P(X ≤ t) = p, choisis 3:FracNormale( et tape p, μ, σ.", "Valide avec [entrer]."], remarque: "Tape bien l'écart type σ, pas la variance." },
            "casio-graph90": { etapes: ["Dans Statistics (Statistiques), appuie sur [F5] (DIST), puis [F1] (NORM).", "Pour P(a ≤ X ≤ b), choisis [F2] (Ncd) et remplis Lower = a, Upper = b, σ et μ.", "Pour la valeur inverse, choisis [F3] (InvN) et remplis Area = p, σ et μ.", "Lance le calcul."] },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Ouvre l'application Probabilités et choisis Loi normale.", "Tape μ et σ, puis valide.", "Choisis le type de borne « a ≤ X ≤ b » et tape les bornes.", "Pour la valeur inverse, tape la probabilité dans son champ : la borne s'affiche."] }
          },
          questions: ["U41-035", "U41-052", "U41-053"]
        },
        {
          id: "exponentielle",
          titre: "Loi exponentielle",
          quand: "Temps d'attente ou durée de fonctionnement d'une machine.",
          modeles: {
            "ti83-premium-ce": { etapes: ["La TI n'a pas de loi exponentielle dans DISTR : on tape la formule P(T ≤ t) = 1 − e^(−λt).", "Tape 1 [−], puis [2nde] [ln] : e^( s'affiche.", "Tape [(−)] λ [×] t, ferme la parenthèse [)] et valide avec [entrer].", "Pour P(T > t), tape seulement e^(−λt) ; pour P(a ≤ T ≤ b), tape e^(−λa) − e^(−λb)."], remarque: "La touche [(−)] (signe moins) n'est pas la touche [−] (soustraction)." },
            "casio-graph90": { etapes: ["La Casio n'a pas de loi exponentielle dans DIST : on tape la formule P(T ≤ t) = 1 − e^(−λt) dans le menu de calcul (Run-Matrix, ou Exécuter-Matrice en français).", "Tape 1 [−], puis [SHIFT] [ln] : e^ s'affiche.", "Ouvre une parenthèse [(], tape [(−)] λ [×] t, ferme [)] et appuie sur [EXE].", "Pour P(T > t), tape seulement e^(−λt) ; pour P(a ≤ T ≤ b), tape e^(−λa) − e^(−λb)."], remarque: "Mets bien l'exposant entre parenthèses, sinon seul le premier nombre passe en exposant." },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Ouvre l'application Probabilités et choisis Loi exponentielle.", "Tape λ, puis valide.", "Choisis le type de borne voulu, tape la ou les valeurs et appuie sur [ok]."] }
          },
          questions: ["U41-033", "U41-054"]
        },
        {
          id: "suite-tableau",
          titre: "Tableau de valeurs d'une suite et seuil",
          quand: "Exercice 1, suites : trouver le premier rang n tel que u(n) dépasse une valeur.",
          modeles: {
            "ti83-premium-ce": { etapes: ["Si tu as la formule explicite de u(n) : appuie sur [2nde] [stats] (menu LISTE).", "Va dans OP et choisis 5:suite(.", "Tape la formule, la variable, le premier et le dernier rang, puis [entrer].", "Lis la liste des termes et repère le premier qui dépasse le seuil."] },
            "casio-graph90": { etapes: ["Appuie sur [MENU] et ouvre Recursion.", "Appuie sur [F3] (TYPE), puis [F2] (an+1).", "Tape la formule de récurrence.", "Appuie sur [F5] (SET) : règle la plage de n et le premier terme.", "Appuie sur [F6] (TABLE) et repère le premier terme qui dépasse le seuil."] },
            "casio-graph35": { etapes: ["Appuie sur [MENU] et ouvre RECUR.", "Appuie sur [F3] (TYPE), puis [F2] (an+1).", "Tape la formule de récurrence.", "Appuie sur [F5] (SET) : règle la plage de n et le premier terme.", "Appuie sur [F6] (TABL) et repère le premier terme qui dépasse le seuil."] },
            "numworks": { etapes: ["Ouvre l'application Suites et choisis Ajouter une suite.", "Choisis « suite récurrente d'ordre 1 ».", "Tape la formule (raccourcis dans [boîte à outils]) et le premier terme.", "Va dans l'onglet Tableau et repère le premier terme qui dépasse le seuil."] }
          },
          questions: ["U41-006", "U41-055"]
        },
        {
          id: "algorithme",
          titre: "Boucle « Tant que »",
          quand: "Pour contrôler un algorithme du sujet. Le jour J, fais-le d'abord tourner à la main dans un tableau.",
          modeles: {
            "ti83-premium-ce": { etapes: ["Appuie sur [prgm], va avec les flèches dans l'onglet NOUV (NEW selon la langue) et choisis 1, tape un nom, puis [entrer].", "Dans l'éditeur, appuie sur [prgm] : le menu CTL s'ouvre. Choisis 5:While (« Tant que » selon la langue) et écris la condition.", "Écris les instructions de la boucle, une par ligne ; pour donner une valeur, utilise [sto→] (exemple : U+5→U).", "Ferme la boucle avec [prgm], menu CTL, 7:End (« Fin »).", "Pour le lancer : [2nde] [mode] (quitter), [prgm], onglet EXEC, choisis le programme et appuie deux fois sur [entrer]."], remarque: "Les noms des menus et des instructions changent selon la langue réglée (While ou Tant que, End ou Fin) : ce sont les mêmes numéros. Les signes < et > sont dans [2nde] [math] (TEST)." },
            "casio-graph90": { etapes: ["Dans l'éditeur de programme, appuie sur [SHIFT] [VARS] (PRGM).", "Ouvre COMMAND et choisis While, puis écris la condition.", "Écris les instructions de la boucle.", "Ferme la boucle avec WEnd (WhileEnd), dans le même menu COMMAND."] },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Ouvre l'application Python et crée un script.", "Appuie sur [boîte à outils] et ouvre « Boucles et tests ».", "Choisis le bloc while et complète la condition et les instructions."] }
          },
          questions: ["U41-006"]
        },
        {
          id: "integrale",
          titre: "Intégrale (valeur moyenne)",
          quand: "Valeur moyenne d'une fonction sur [a ; b] : intégrale divisée par (b − a).",
          modeles: {
            "ti83-premium-ce": { etapes: ["Appuie sur [math] et choisis 9:intégrFonct(.", "Tape l'expression, la variable X, puis les bornes a et b.", "Valide avec [entrer], puis divise par (b − a) pour la valeur moyenne."] },
            "casio-graph90": { etapes: ["Ouvre Run-Matrix.", "Appuie sur [OPTN], puis [F4] (CALC) et [F4] (∫dx).", "Tape f(x), puis les bornes a et b, et appuie sur [EXE].", "Divise par (b − a) pour la valeur moyenne."] },
            "casio-graph35": { memeQue: "casio-graph90" },
            "numworks": { etapes: ["Dans l'application Grapheur, trace la fonction.", "Place le curseur sur la courbe et appuie sur [ok].", "Choisis Rechercher, puis Intégrale.", "Choisis la première borne puis la seconde avec [ok] : la valeur s'affiche en bas."] }
          },
          questions: ["U41-015", "U41-057"]
        }
      ]
    }
  ]
});
