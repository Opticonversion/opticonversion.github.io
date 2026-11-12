// ==============================================================
//  SPÉCIFICITÉS · Optique géométrique et physique (U42)
//  Textes rédigés par Opticonversion à partir de l'analyse des 8 sujets
//  2018, 2019 et 2021 à 2026 (voir notes/analyse-U42.md).
//  Les id des listes à cocher et des pièges ne changent jamais et ne sont jamais réutilisés.
//  Fréquences : nombre de sujets où ça tombe / 8 sujets lus.
//  rappelee : true = formule rappelée dans les sujets ; false = à savoir par cœur.
// ==============================================================

SPECIFICITES.push({
  epreuve: "U42",
  resume: "Écrit 2 h · coef 3 · calculatrice autorisée · un seul appareil, un tracé à rendre",
  blocs: [
    {
      type: "texte",
      titre: "L'épreuve en 30 secondes",
      points: [
        "Écrit de 2 h, coefficient 3. Calculatrice autorisée (mode examen ou type collège).",
        "Un seul appareil réel du début à la fin, avec sa notice : loupe, lunette, microscope, objectif photo, projecteur de tests…",
        "3 à 5 parties indépendantes : si tu bloques, passe à la suivante.",
        "Au moins un tracé à l'échelle, sur un document réponse à rendre avec la copie.",
        "11 à 15 points sur 20 pour l'optique géométrique (images, grossissement, champs). Le reste : une partie d'optique physique qui change chaque année.",
        "Beaucoup de « Montrer que… » : le résultat est donné, c'est ta démarche qui est notée, et tu peux continuer même après une question ratée.",
        "On attend une conclusion pour le client : la notice dit-elle vrai, l'appareil lui convient-il ?"
      ]
    },
    {
      type: "etapes",
      titre: "Le sujet type, dans l'ordre",
      etapes: [
        { titre: "La notice de l'appareil", texte: "Repère ses chiffres (focales, grossissement, champ) : tu devras y comparer tes résultats.", frequence: "8/8" },
        { titre: "Les images", texte: "Chaîne des images, position de chaque image, grandissement. Garde les signes.", theme: "Conjugaison", frequence: "8/8" },
        { titre: "Le doublet", texte: "Symbole (m ; n ; p), focale de l'ensemble, parfois doublet achromatique.", theme: "Doublets et achromatisme", frequence: "6/8" },
        { titre: "Le grossissement", texte: "Loupe, microscope ou lunette : tu le calcules, puis tu le compares à la notice.", frequence: "5/8" },
        { titre: "Les champs", texte: "Tu traces le champ de pleine lumière sur le document réponse, puis tu le calcules. Souvent suivi de : l'écran ou le capteur est-il éclairé partout ?", theme: "Champs et diaphragmes", frequence: "8/8" },
        { titre: "La résolution", texte: "Diffraction, œil ou capteur : lequel limite ? Le client distingue-t-il le détail voulu ?", theme: "Ouverture et résolution", frequence: "6/8" },
        { titre: "La partie d'optique physique", texte: "Elle change chaque année : antireflet et transmission, polarisation, lame mince, réseau ou photométrie.", frequence: "8/8" },
        { titre: "La conclusion pour le client", texte: "Une phrase qui compare ton résultat à la notice ou au besoin du client.", frequence: "8/8" }
      ]
    },
    {
      type: "frequences",
      titre: "Ce qui tombe, thème par thème (8 sujets)",
      lignes: [
        { sujet: "Images, chaîne des images, grandissement", frequence: "8/8", theme: "Conjugaison" },
        { sujet: "Champ de pleine lumière, pupilles, capteur éclairé partout", frequence: "8/8", theme: "Champs et diaphragmes" },
        { sujet: "Limite de résolution, nombre d'ouverture", frequence: "6/8", theme: "Ouverture et résolution" },
        { sujet: "Doublet (symbole, focale), doublet achromatique, verre ED", frequence: "6/8", theme: "Doublets et achromatisme" },
        { sujet: "Transmission d'un appareil, antireflet", frequence: "5/8", theme: "Transmission et antireflet" },
        { sujet: "Grossissement d'une loupe ou d'un microscope, puissance", frequence: "4/8", theme: "Loupe et microscope" },
        { sujet: "Lunette afocale (Kepler, Galilée, terrestre)", frequence: "3/8", theme: "Lunettes afocales" },
        { sujet: "Polarisation (Malus, Brewster)", frequence: "3/8", theme: "Polarisation" },
        { sujet: "Lame mince, réseau", frequence: "2/8", theme: "Interférences et réseaux" },
        { sujet: "Éclairement, flux, temps de pose", frequence: "2/8", theme: "Photométrie" }
      ]
    },
    {
      type: "cocher",
      titre: "Les réflexes du jour J",
      id: "U42-reflexes",
      items: [
        { id: "U42-reflexes-1", texte: "Lire la notice de l'appareil et noter ses chiffres : tu y compareras tes résultats." },
        { id: "U42-reflexes-2", texte: "Écrire la chaîne des images avant de calculer, avec les positions particulières (foyer, infini)." },
        { id: "U42-reflexes-3", texte: "« Emmétrope qui n'accommode pas » : placer l'image finale à l'infini." },
        { id: "U42-reflexes-4", texte: "Garder les signes : objet réel, OA négatif ; lentille divergente, f' négative." },
        { id: "U42-reflexes-5", texte: "« Montrer que… » : rédiger la méthode, le calcul et la conclusion. Garder la valeur donnée pour la suite, même si tu ne l'as pas trouvée." },
        { id: "U42-reflexes-6", texte: "Tracé : regarder les deux échelles (souvent différentes), tracer à la règle, puis vérifier par le calcul." },
        { id: "U42-reflexes-7", texte: "Unités : tout en mètres (nm, µm, mm) et les angles en radians avant de calculer." },
        { id: "U42-reflexes-8", texte: "Finir chaque partie par une phrase de conclusion pour le client." }
      ]
    },
    {
      type: "pieges",
      titre: "Les pièges qui coûtent des points",
      items: [
        { id: "U42-piege-1", titre: "Champ de pleine lumière : quelle droite ?", faux: "Passer par le centre de la pupille, ou prendre « les bords du même côté » sans regarder où est le plan des champs.", juste: "Bords du même côté si le plan des champs est en dehors de l'intervalle pupille-diaphragme (7 sujets sur 8). S'il est entre les deux (2025), bords opposés. Dans le doute, trace les deux droites : le plus petit champ est la pleine lumière.", theme: "Champs et diaphragmes", questions: ["U42-022", "U42-045", "U42-046"] },
        { id: "U42-piege-2", titre: "Écran ou capteur éclairé partout ?", faux: "Comparer la largeur du capteur, ou sa diagonale entière, au rayon du champ.", juste: "Ce sont les coins qui sortent en premier : compare la demi-diagonale au rayon du champ de pleine lumière, puis conclus.", theme: "Champs et diaphragmes", questions: ["U42-024", "U42-047"] },
        { id: "U42-piege-3", titre: "Qui limite la résolution ?", faux: "Garder la plus petite des limites, ou faire la moyenne.", juste: "C'est la plus grande limite qui commande : diffraction, œil ou capteur. Mets d'abord tout dans la même unité (nm, µm et mm en mètres).", theme: "Ouverture et résolution", questions: ["U42-030"] },
        { id: "U42-piege-4", titre: "« Emmétrope qui n'accommode pas »", faux: "Placer l'image finale à 25 cm de l'œil, ou l'image intermédiaire au foyer image de l'oculaire.", juste: "L'image finale est à l'infini : l'image intermédiaire doit être dans le plan focal objet de l'oculaire.", theme: "Conjugaison", questions: ["U42-006"] },
        { id: "U42-piege-5", titre: "Les signes", faux: "Écrire OA = +30 mm pour un objet réel, ou f' = +40 mm pour une lentille divergente.", juste: "Objet réel : OA négatif. Lentille divergente : f' négative. Un signe oublié, et toute la suite est fausse.", theme: "Conjugaison", questions: ["U42-043", "U42-044"] },
        { id: "U42-piege-6", titre: "Transmission d'un appareil", faux: "Retirer 4 % par face : 1 − N × R.", juste: "Les transmissions se multiplient : T totale = T d'une face à la puissance N. Compte 2 faces par lentille.", theme: "Transmission et antireflet", questions: ["U42-032"] },
        { id: "U42-piege-7", titre: "Épaisseur d'un antireflet", faux: "Calculer l'épaisseur avec l'indice du verre.", juste: "e = λ / (4 × n), avec l'indice de la COUCHE. L'indice idéal de la couche est la racine de celui du verre.", theme: "Transmission et antireflet", questions: ["U42-034", "U42-035"] }
      ]
    },
    {
      type: "formules",
      titre: "Le formulaire",
      lignes: [
        { nom: "Relation de conjugaison (Descartes)", formule: "1/OA' − 1/OA = 1/f'", exemple: "f' = 50 mm et OA = −75 mm : OA' = +150 mm", rappelee: false },
        { nom: "Grandissement transversal", formule: "γ = A'B' / AB = OA' / OA", exemple: "OA' = +150 mm et OA = −75 mm : γ = −2 (image renversée, 2 fois plus grande)", rappelee: false },
        { nom: "Relation de Newton", formule: "FA × F'A' = −f'²", exemple: "f' = 50 mm et FA = −2 500 mm : F'A' = +1 mm", rappelee: false },
        { nom: "Vergence (f' en mètres, V en dioptries)", formule: "V = 1 / f'", exemple: "f' = 50 mm : V = 20 δ", rappelee: false },
        { nom: "Lentille mince (formule des opticiens)", formule: "1/f' = (n − 1) × (1/R1 − 1/R2)", exemple: "équiconvexe, n = 1,5 et R = 100 mm : f' = 100 mm", rappelee: false },
        { nom: "Doublet (formule de Gullstrand)", formule: "f' = f'1 × f'2 / (f'1 + f'2 − e)", exemple: "40 mm, 40 mm et e = 30 mm : f' = 32 mm", rappelee: false },
        { nom: "Symbole (m ; n ; p) d'un doublet", formule: "f'1 = m × a ; e = n × a ; f'2 = p × a", exemple: "(3 ; 2 ; 1) avec a = 10 mm : 30 mm, 20 mm, 10 mm", rappelee: false },
        { nom: "Grossissement commercial (P en dioptries)", formule: "Gc = P / 4", exemple: "loupe de f' = 50 mm : P = 20 δ, Gc = 5", rappelee: false },
        { nom: "Puissance d'un instrument (α' en radians, AB en mètres)", formule: "P = α' / AB", exemple: "P = 12,5 δ et œil à 3 × 10⁻⁴ rad : détail de 24 µm", rappelee: false },
        { nom: "Lunette afocale", formule: "G = −f'ob / f'oc ; longueur = f'ob + f'oc", exemple: "120 mm et 20 mm : G = −6 (image renversée), longueur 140 mm", rappelee: false },
        { nom: "Nombre d'ouverture (D : diamètre de la pupille d'entrée)", formule: "N = f' / D", exemple: "f' = 400 mm à f/8 : D = 50 mm", rappelee: false },
        { nom: "Limite due au capteur", formule: "α = taille d'un pixel / f'", exemple: "pixel de 5 µm et f' = 250 mm : 2 × 10⁻⁵ rad", rappelee: false },
        { nom: "Transmission de N faces (2 faces par lentille)", formule: "T totale = (T d'une face) puissance N", exemple: "4 lentilles, donc 8 faces à 0,96 : 0,96⁸ ≈ 0,72", rappelee: false },
        { nom: "Épaisseur d'un antireflet (n : indice de la couche)", formule: "e = λ / (4 × n)", exemple: "n = 1,30 et λ = 520 nm : e = 100 nm", rappelee: false },
        { nom: "Lame mince dans l'air, en réflexion", formule: "δ = 2 × n × e + λ/2", exemple: "lumière renforcée si δ = k × λ ; n = 1,33 et λ = 532 nm : e minimale = 100 nm", rappelee: false },
        { nom: "Loi de Malus (lumière déjà polarisée)", formule: "I = I0 × cos² θ", exemple: "lumière naturelle : la moitié passe le 1er polariseur ; puis à 60° : 50 % × 0,25 = 12,5 %", rappelee: false },
        { nom: "Grossissement : angle avec l'appareil / angle à l'œil nu", formule: "G = α' / α", rappelee: true },
        { nom: "Microscope", formule: "Gc = |γ objectif| × Gc oculaire", exemple: "γ = −40 et oculaire 10× : Gc = 400", rappelee: true },
        { nom: "Diffraction (λ et D en mètres, α en radians)", formule: "α = 1,22 × λ / D", exemple: "D = 10 mm et λ = 500 nm : 6,1 × 10⁻⁵ rad", rappelee: true },
        { nom: "Réflexion sur une face", formule: "R = ((n − n') / (n + n'))² ; T = 1 − R", exemple: "air et verre d'indice 1,5 : R = 4 %, T = 96 %", rappelee: true },
        { nom: "Indice idéal d'un antireflet", formule: "n de la couche = √(n du verre)", exemple: "verre d'indice 1,69 : couche d'indice 1,30", rappelee: true },
        { nom: "Nombre d'Abbe", formule: "ν = (nd − 1) / (nF − nC)", exemple: "0,500 / 0,008 = 62,5", rappelee: true },
        { nom: "Doublet achromatique accolé", formule: "V = V1 + V2 et V1/ν1 + V2/ν2 = 0", exemple: "V = +2 δ, ν = 60 et 30 : V1 = +4 δ, V2 = −2 δ", rappelee: true },
        { nom: "Réseau (a : pas du réseau)", formule: "a × (sin i' − sin i) = k × λ", exemple: "500 traits par mm, 600 nm, ordre 1 : i' ≈ 17,5°", rappelee: true },
        { nom: "Loi de Bouguer (E en lux, d en mètres)", formule: "E = I / d²", exemple: "8 000 lx à 30 cm : 2 000 lx à 60 cm", rappelee: true }
      ]
    }
  ]
});
