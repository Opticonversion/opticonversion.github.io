// ==============================================================
//  L'ESSENTIEL DU BTS OL · les notions les plus rentables
//
//  Pour chaque thème de QCM :
//    frequence : nombre de sessions où il est tombé / sessions analysées
//                (voir les analyses dans notes/analyse-XX.md)
//    coef      : coefficient de l'épreuve au BTS
//  Priorité = (tombé ÷ analysées) × coef. Plus c'est haut, plus ça rapporte.
//  On garde les notions dont la priorité est d'au moins 2.
//
//  Pour ajouter ou corriger une notion : modifie la liste ci-dessous.
//  Le "theme" doit être écrit EXACTEMENT comme dans le fichier de questions.
// ==============================================================

const ESSENTIEL_SOURCE = [
  // Analyse de la vision (coef 6, sujets 2017-2024)
  { epreuve: "U5",  theme: "Worth",                         tombe: 4, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Anisométropie",                 tombe: 4, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Lentilles",                     tombe: 4, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Réfraction",                    tombe: 4, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Examen préliminaire",           tombe: 3, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Masquage et phories",           tombe: 3, sur: 4, coef: 6 },
  { epreuve: "U5",  theme: "Pathologie",                    tombe: 3, sur: 4, coef: 6 },

  // Économie et gestion (coef 5, sujets 2017-2024)
  { epreuve: "U3",  theme: "Marché et zone de chalandise",  tombe: 4, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Mercatique et communication",   tombe: 4, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Prix et marges",                tombe: 4, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Analyse financière",            tombe: 3, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Seuil de rentabilité",          tombe: 3, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Droit du travail",              tombe: 2, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Investissement et financement", tombe: 2, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Droit des entreprises",         tombe: 2, sur: 5, coef: 5 },
  { epreuve: "U3",  theme: "Réglementation de l'opticien",  tombe: 2, sur: 5, coef: 5 },

  // Optique géométrique et physique (coef 3, sujets 2018-2026)
  { epreuve: "U42", theme: "Conjugaison",                   tombe: 7, sur: 7, coef: 3 },
  { epreuve: "U42", theme: "Champs et diaphragmes",         tombe: 7, sur: 7, coef: 3 },
  { epreuve: "U42", theme: "Ouverture et résolution",       tombe: 6, sur: 7, coef: 3 },
  { epreuve: "U42", theme: "Doublets et achromatisme",      tombe: 6, sur: 7, coef: 3 },
  { epreuve: "U42", theme: "Lunettes afocales",             tombe: 5, sur: 7, coef: 3 },
  { epreuve: "U42", theme: "Transmission et antireflet",    tombe: 5, sur: 7, coef: 3 },

  // Étude technique des systèmes optiques (coef 3, sujets 2017-2024)
  { epreuve: "U43", theme: "Chaîne des conjugués",          tombe: 8, sur: 8, coef: 3 },
  { epreuve: "U43", theme: "Étude des champs",              tombe: 8, sur: 8, coef: 3 },
  { epreuve: "U43", theme: "Liaisons mécaniques",           tombe: 8, sur: 8, coef: 3 },
  { epreuve: "U43", theme: "Œil et instrument",             tombe: 6, sur: 8, coef: 3 },

  // Mathématiques (coef 2, sujets 2016-2023)
  { epreuve: "U41", theme: "Statistique",                   tombe: 5, sur: 5, coef: 2 },
  { epreuve: "U41", theme: "Fonctions",                     tombe: 5, sur: 5, coef: 2 }
];

// Calcul de la priorité et classement, de la plus rentable à la moins rentable
const ESSENTIEL = ESSENTIEL_SOURCE
  .map(n => ({ ...n, priorite: Math.round((n.tombe / n.sur) * n.coef * 100) / 100 }))
  .sort((a, b) => b.priorite - a.priorite || b.tombe / b.sur - a.tombe / a.sur);

const estEssentiel = (epreuve, theme) => ESSENTIEL.some(n => n.epreuve === epreuve && n.theme === theme);

// ---------------- La progression de l'élève ----------------
// Elle est gardée uniquement dans le navigateur de l'élève (pas de compte, rien n'est envoyé).
// Pour chaque question : 1 = bien répondu la dernière fois, 0 = raté.
function idQuestion(q) { return q.epreuve + "|" + q.question; }

function lireProgression() {
  try { return JSON.parse(localStorage.getItem("progression") || "{}"); } catch (e) { return {}; }
}
function noterReponse(q, juste) {
  const p = lireProgression();
  p[idQuestion(q)] = juste ? 1 : 0;
  try { localStorage.setItem("progression", JSON.stringify(p)); } catch (e) {}
}

// Une notion est « maîtrisée » quand au moins 80 % de ses questions
// ont été réussies à la dernière tentative.
function etatNotion(epreuve, theme) {
  const p = lireProgression();
  const qs = QUESTIONS.filter(q => q.epreuve === epreuve && q.theme === theme);
  const reussies = qs.filter(q => p[idQuestion(q)] === 1).length;
  const tentees = qs.filter(q => idQuestion(q) in p).length;
  return {
    total: qs.length,
    reussies,
    tentees,
    maitrisee: qs.length > 0 && reussies / qs.length >= 0.8
  };
}
