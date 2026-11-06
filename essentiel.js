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
// Elle est gardée dans le navigateur de l'élève. S'il se connecte (compte.js),
// elle est aussi sauvegardée en ligne pour la retrouver sur ses autres appareils.
// Pour chaque question : 1 = bien répondu la dernière fois, 0 = raté.
function idQuestion(q) { return q.epreuve + "|" + q.question; }

// Note un changement pas encore envoyé en ligne, puis prévient compte.js
function marquerEnAttente(type, cle, valeur) {
  try {
    const attente = JSON.parse(localStorage.getItem("attente") || "{}");
    attente[type] = attente[type] || {};
    attente[type][cle] = valeur;
    localStorage.setItem("attente", JSON.stringify(attente));
  } catch (e) {}
  window.dispatchEvent(new Event("progression-modifiee"));
}

function lireProgression() {
  try { return JSON.parse(localStorage.getItem("progression") || "{}"); } catch (e) { return {}; }
}
function noterReponse(q, juste) {
  const p = lireProgression();
  p[idQuestion(q)] = juste ? 1 : 0;
  try { localStorage.setItem("progression", JSON.stringify(p)); } catch (e) {}
  marquerEnAttente("progression", idQuestion(q), juste ? 1 : 0);
  return planifierRevision(q, juste);
}

// ---------------- Révision espacée ----------------
// Une question ratée revient le lendemain. Réussie le jour où elle revient, elle revient
// de plus en plus tard : 1, 3, 7, 14 puis 30 jours. Réussie à 30 jours : elle est acquise.
// Ratée à n'importe quel moment : elle repart à 1 jour.
// Stockage : localStorage « revisions » = { id: { n: étape, j: "AAAA-MM-JJ" ou "" si acquise, t: horodatage } }
const INTERVALLES = [1, 3, 7, 14, 30];

function jourLocal(decalage) {
  const d = new Date();
  d.setDate(d.getDate() + (decalage || 0));
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function lireRevisions() {
  try { return JSON.parse(localStorage.getItem("revisions") || "{}"); } catch (e) { return {}; }
}
function ecrireRevision(id, entree) {
  const r = lireRevisions();
  r[id] = entree;
  try { localStorage.setItem("revisions", JSON.stringify(r)); } catch (e) {}
  marquerEnAttente("revisions", id, entree);
}

// Renvoie ce qui se passe pour cette question : { jours: n } (prochain retour), { acquise: true }, ou null.
function planifierRevision(q, juste) {
  const id = idQuestion(q);
  const r = lireRevisions()[id];
  const aujourdhui = jourLocal();
  if (!juste) {
    ecrireRevision(id, { n: 0, j: jourLocal(INTERVALLES[0]), t: Date.now() });
    return { jours: INTERVALLES[0] };
  }
  if (!r || !r.j) return null;              // jamais ratée, ou déjà acquise
  if (r.j > aujourdhui) return null;        // pas encore le jour : on ne compte pas
  const etape = r.n + 1;
  if (etape >= INTERVALLES.length) {
    ecrireRevision(id, { n: etape, j: "", t: Date.now() });
    return { acquise: true };
  }
  ecrireRevision(id, { n: etape, j: jourLocal(INTERVALLES[etape]), t: Date.now() });
  return { jours: INTERVALLES[etape] };
}

// Les questions à revoir aujourd'hui (retard compris), toutes épreuves confondues
function questionsARevoir() {
  const r = lireRevisions(), aujourdhui = jourLocal();
  return QUESTIONS.filter(q => { const e = r[idQuestion(q)]; return e && e.j && e.j <= aujourdhui; });
}
// Nombre de questions à revoir aujourd'hui (sans avoir besoin de la liste des questions)
function nombreARevoir() {
  const aujourdhui = jourLocal();
  return Object.values(lireRevisions()).filter(e => e && e.j && e.j <= aujourdhui).length;
}
// Prochaine date de révision après aujourd'hui, et combien de questions ce jour-là
function prochaineRevision() {
  const aujourdhui = jourLocal();
  const dates = Object.values(lireRevisions()).map(e => e && e.j).filter(j => j && j > aujourdhui).sort();
  if (!dates.length) return null;
  return { j: dates[0], nombre: dates.filter(d => d === dates[0]).length };
}

// Profil de l'élève (pseudo, année, avatar) : visible par lui seul
function lireProfil() {
  try { return JSON.parse(localStorage.getItem("profil") || "{}"); } catch (e) { return {}; }
}
function enregistrerProfil(p) {
  try { localStorage.setItem("profil", JSON.stringify(p)); } catch (e) {}
  for (const [cle, val] of Object.entries(p)) marquerEnAttente("profil", cle, val);
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
