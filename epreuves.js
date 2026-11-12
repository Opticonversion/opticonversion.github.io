// ==============================================================
//  LISTE DES ÉPREUVES du BTS OL (ne pas toucher sauf pour en ajouter).
//  Les questions sont dans un fichier par épreuve : questions-U5.js, etc.
// ==============================================================

// page: "echauffement" : la page de l'épreuve dans le QCM met d'abord en avant l'Atelier, les cas et les
// Spécificités ; le QCM vient ensuite, comme échauffement.
const EPREUVES = [
  { code: "U41", nom: "Mathématiques", detail: "E4 · CCF" },
  { code: "U42", nom: "Optique géométrique et physique", court: "OGP", detail: "E4 · écrit 2 h · coef 3", page: "echauffement" },
  { code: "U43", nom: "Étude technique des systèmes optiques", court: "ETSO", detail: "E4 · écrit 2 h · coef 3", page: "echauffement" },
  { code: "U5",  nom: "Analyse de la vision", detail: "E5 · écrit 3 h · coef 6" },
  { code: "U3",  nom: "Économie et gestion de l'entreprise", detail: "E3 · écrit 3 h · coef 5", page: "echauffement" }
];

// Chaque fichier questions-XX.js ajoute ses questions dans cette liste.
const QUESTIONS = [];

// Chaque fichier definitions-XX.js ajoute ses définitions dans cette liste
// (page definitions.html). sessions : années où elle est tombée ; [] = probable.
const DEFINITIONS = [];

// Chaque fichier specificites-XX.js ajoute ici la fiche « Spécificités » de son épreuve
// (affichée en haut de l'épreuve dans le QCM). Format : notes/coordination/etape1-formats.md.
const SPECIFICITES = [];

// Mini-cas pratiques : déclarés dans le fichier de questions de l'épreuve (CAS.push),
// leurs questions portent cas: "CAS-U5-01" et etape: 1, 2, 3…
const CAS = [];

// Niveaux de l'Atelier des tracés : chaque fichier traces-XX.js (chargé par traces.html)
// ajoute ses niveaux ici. Format : notes/coordination/etape2-formats.md.
const TRACES = [];
