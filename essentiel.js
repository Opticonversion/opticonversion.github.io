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

// Questions « d'entraînement » (entrainement: true, fichiers entrainement-<épreuve>.js chargés par qcm.html seulement) :
// les mêmes notions avec d'autres chiffres, pour s'entraîner plus. Elles ne comptent NI dans l'Essentiel, NI dans
// « Tous les QCM », NI dans la révision espacée : seulement dans leur propre compteur, sur la page de l'épreuve.
const questionsDeBase = () => (typeof QUESTIONS === "undefined" ? [] : QUESTIONS.filter(q => !q.entrainement));

// ---------------- La progression de l'élève ----------------
// Elle est gardée dans le navigateur de l'élève. S'il se connecte (compte.js),
// elle est aussi sauvegardée en ligne pour la retrouver sur ses autres appareils.
// Pour chaque question : 1 = bien répondu la dernière fois, 0 = raté.
// Repère d'une question : son identifiant stable (champ id, ex. « U5-012 ») s'il existe.
// Avec un id, on peut corriger l'énoncé sans faire perdre la progression aux élèves.
// Sans id, on garde l'ancien repère (épreuve + énoncé).
function ancienIdQuestion(q) { return q.epreuve + "|" + q.question; }
function idQuestion(q) { return q.id || ancienIdQuestion(q); }

// Range sous l'identifiant stable ce qui avait été noté sous l'ancien repère.
// prog = { repère: 1|0 }, temps = { repère: horodatage }, revs = { repère: {n, j, t} }.
// En cas de doublon, on garde le plus récent. Renvoie true si quelque chose a changé.
function migrerAnciennesCles(prog, temps, revs) {
  if (typeof QUESTIONS === "undefined") return false;
  let change = false;
  for (const q of QUESTIONS) {
    if (!q.id) continue;
    const a = ancienIdQuestion(q), n = q.id;
    if (prog && a in prog) {
      if (!(n in prog) || (temps[a] || 0) > (temps[n] || 0)) {
        prog[n] = prog[a];
        if (temps[a]) temps[n] = temps[a];
      }
      delete prog[a];
      change = true;
    }
    if (temps && a in temps) { delete temps[a]; change = true; }
    if (revs && a in revs) {
      const va = revs[a], vn = revs[n];
      if (!vn || ((va && va.t) || 0) > (vn.t || 0)) revs[n] = va;
      delete revs[a];
      change = true;
    }
  }
  return change;
}

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
// Heure de la dernière réponse à chaque question : sert à garder la plus récente
// quand deux appareils ont répondu à la même question.
function lireTempsReponses() {
  try { return JSON.parse(localStorage.getItem("progression-t") || "{}"); } catch (e) { return {}; }
}
function noterReponse(q, juste) {
  const id = idQuestion(q), maintenant = Date.now();
  const p = lireProgression(), t = lireTempsReponses();
  p[id] = juste ? 1 : 0;
  t[id] = maintenant;
  try {
    localStorage.setItem("progression", JSON.stringify(p));
    localStorage.setItem("progression-t", JSON.stringify(t));
  } catch (e) {}
  marquerEnAttente("progression-t", id, maintenant);
  marquerEnAttente("progression", id, juste ? 1 : 0);
  compterJour();
  return planifierRevision(q, juste);
}

// Nombre de réponses données chaque jour, sur cet appareil seulement (localStorage « jours »,
// 70 jours au plus) : sert à la série de jours (rythme.js). progression-t ne suffit pas : il ne garde
// que la dernière réponse à chaque question, et refaire aujourd'hui une question d'hier l'enlèverait
// du compte d'hier. ok = l'objectif du jour (localStorage « objectif ») a été atteint ce jour-là.
function compterJour() {
  try {
    const jours = JSON.parse(localStorage.getItem("jours") || "{}") || {};
    const k = jourLocal(), objectif = Number(localStorage.getItem("objectif")) || 0;
    const e = jours[k] || { n: 0 };
    e.n = (Number(e.n) || 0) + 1;
    if (objectif && e.n >= objectif) e.ok = true;
    jours[k] = e;
    const garde = {};
    Object.keys(jours).sort().slice(-70).forEach(j => { garde[j] = jours[j]; });
    localStorage.setItem("jours", JSON.stringify(garde));
  } catch (e) {}
}

// Au chargement : on passe les anciennes données (repérées par l'énoncé) sous les identifiants stables,
// dans ce navigateur et dans ce qui attend d'être envoyé en ligne.
(function () {
  try {
    const p = lireProgression(), t = lireTempsReponses();
    const r = JSON.parse(localStorage.getItem("revisions") || "{}");
    if (migrerAnciennesCles(p, t, r)) {
      localStorage.setItem("progression", JSON.stringify(p));
      localStorage.setItem("progression-t", JSON.stringify(t));
      localStorage.setItem("revisions", JSON.stringify(r));
    }
    const at = JSON.parse(localStorage.getItem("attente") || "{}");
    const ap = at.progression || {}, att = at["progression-t"] || {}, ar = at.revisions || {};
    if (migrerAnciennesCles(ap, att, ar)) {
      at.progression = ap; at["progression-t"] = att; at.revisions = ar;
      localStorage.setItem("attente", JSON.stringify(at));
    }
  } catch (e) {}
})();

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
  if (q.entrainement) return null;          // une question d'entraînement ne revient pas dans « À revoir »
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
// Révisions des questions qui existent encore (une question supprimée ou réécrite sans id
// ne doit plus compter). Sans la liste des questions, on compte tout.
function revisionsValides() {
  const r = lireRevisions();
  if (typeof QUESTIONS === "undefined" || !QUESTIONS.length) return Object.values(r);
  return QUESTIONS.map(q => r[idQuestion(q)]).filter(Boolean);
}
// Nombre de questions à revoir aujourd'hui
function nombreARevoir() {
  const aujourdhui = jourLocal();
  return revisionsValides().filter(e => e && e.j && e.j <= aujourdhui).length;
}
// Prochaine date de révision après aujourd'hui, et combien de questions ce jour-là
function prochaineRevision() {
  const aujourdhui = jourLocal();
  const dates = revisionsValides().map(e => e && e.j).filter(j => j && j > aujourdhui).sort();
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
  const qs = questionsDeBase().filter(q => q.epreuve === epreuve && q.theme === theme);
  const reussies = qs.filter(q => p[idQuestion(q)] === 1).length;
  const tentees = qs.filter(q => idQuestion(q) in p).length;
  return {
    total: qs.length,
    reussies,
    tentees,
    maitrisee: qs.length > 0 && reussies / qs.length >= 0.8
  };
}

// ---------------- Barres de progression ----------------
// Pour une liste de questions : combien ont déjà été faites, et combien réussies (dernière tentative).
function bilanQuestions(qs) {
  const p = lireProgression();
  let faites = 0, reussies = 0;
  qs.forEach(q => {
    const v = p[idQuestion(q)];
    if (v !== undefined) { faites++; if (v === 1) reussies++; }
  });
  return { total: qs.length, faites, reussies };
}
const questionsEssentielles = () => questionsDeBase().filter(q => estEssentiel(q.epreuve, q.theme));

// Les trois grandes mesures : l'essentiel et tous les QCM (questions FAITES),
// et le niveau de maîtrise (questions RÉUSSIES à la dernière tentative, sur tout le site).
function bilansGeneraux() {
  const essentiel = bilanQuestions(questionsEssentielles());
  const qcm = bilanQuestions(questionsDeBase());
  // Pour la maîtrise, la barre ne montre que les réussies : « faites » = « réussies »
  const maitrise = { total: qcm.total, faites: qcm.reussies, reussies: qcm.reussies };
  return { essentiel, qcm, maitrise };
}

// Crée une barre : partie pleine = réussies, partie claire = faites mais ratées, vide = à découvrir.
// options : { titre, petite, detail (texte qui remplace le détail automatique), extra (texte ajouté), aria (texte lu par les lecteurs d'écran) }
function creerBarreProgression(bilan, options) {
  options = options || {};
  const largeur = n => (bilan.total ? Math.min(100, (n / bilan.total) * 100) : 0);
  const pFaites = Math.round(largeur(bilan.faites));
  const bloc = document.createElement("div");
  bloc.className = "progression-bloc" + (options.petite ? " petite" : "") + (bilan.total && bilan.faites >= bilan.total ? " fini" : "");
  bloc.innerHTML =
    (options.titre ? '<div class="progression-tete"><span class="progression-titre"></span><span class="progression-pct"></span></div>' : "") +
    '<div class="progression-barre" role="progressbar" aria-valuemin="0" aria-valuemax="100"><span class="part-reussies"></span><span class="part-ratees"></span></div>' +
    '<small class="progression-detail"></small>';
  if (options.titre) {
    bloc.querySelector(".progression-titre").textContent = options.titre;
    bloc.querySelector(".progression-pct").textContent = pFaites + " %";
  }
  let detail = options.detail;
  if (!detail) {
    if (bilan.faites === 0) detail = options.petite ? "Pas encore commencé" : bilan.total + " questions · pas encore commencé";
    else if (bilan.faites >= bilan.total) detail = "✓ Tout fait · " + bilan.reussies + " réussies sur " + bilan.total;
    else detail = bilan.faites + " / " + bilan.total + " faites · " + bilan.reussies + " réussies · " + (bilan.total - bilan.faites) + " à découvrir";
  }
  bloc.querySelector(".progression-detail").textContent = detail + (options.extra ? " · " + options.extra : "");
  const barre = bloc.querySelector(".progression-barre");
  barre.setAttribute("aria-valuenow", pFaites);
  barre.setAttribute("aria-label", options.aria ||
    (options.titre || "Progression") + " : " + pFaites + " % fait, " + bilan.reussies + " questions réussies sur " + bilan.total);
  // Les barres partent de zéro puis se remplissent (l'animation est coupée si l'élève l'a désactivée)
  const r = bloc.querySelector(".part-reussies"), m = bloc.querySelector(".part-ratees");
  const remplir = () => {
    r.style.width = largeur(bilan.reussies) + "%";
    m.style.width = Math.max(0, largeur(bilan.faites) - largeur(bilan.reussies)) + "%";
  };
  requestAnimationFrame(() => requestAnimationFrame(remplir));
  return bloc;
}

// Ordre d'une série : d'abord les questions jamais faites, puis les ratées, puis les réussies
// (chaque groupe mélangé). Ainsi l'élève ne retombe pas sans cesse sur les mêmes questions.
function ordonnerParProgression(qs, melanger) {
  const p = lireProgression();
  const groupe = v => (v === undefined ? 0 : v === 0 ? 1 : 2);
  const groupes = [[], [], []];
  qs.forEach(q => groupes[groupe(p[idQuestion(q)])].push(q));
  return groupes.flatMap(g => melanger(g));
}

// ---------------- Le compagnon de révision ----------------
// DioSL par défaut. Si l'élève choisit un autre personnage dans son profil, c'est lui qui
// l'accompagne partout (accueil, corrections, écran de score), avec ses propres expressions :
// clin-doeil, bouche-ouverte (ravi), pensif, choque, bouche-fermee (sérieux).
// Dessins : img/nounours-<pose>.svg pour DioSL, img/avatar-<animal>-<pose>.svg pour les autres
// (fabriqués par .claude/scripts/generer-poses-avatars.py ; « bouche-fermee » = img/avatar-<animal>.svg).
const POSES_DIOSL_IDS = ["clin-doeil", "choque", "pensif", "bouche-ouverte", "bouche-fermee"];
const PERSONNAGES_RETIRES = ["renard"];       // un élève qui l'avait choisi retrouve DioSL
function compagnon() {                       // null = DioSL
  const id = lireProfil().avatar;
  return id && !POSES_DIOSL_IDS.includes(id) && !PERSONNAGES_RETIRES.includes(id) ? id : null;
}
function imageCompagnon(pose) {
  const animal = compagnon();
  if (!animal) return "img/nounours-" + pose + ".svg";
  return pose === "bouche-fermee" ? "img/avatar-" + animal + ".svg" : "img/avatar-" + animal + "-" + pose + ".svg";
}
function nomCompagnon() {
  const animal = compagnon();
  if (!animal) return "DioSL";
  const perso = (window.AVATARS || []).find(a => a.id === animal);
  return perso ? perso.nom : "ton compagnon";
}
// Affiche le compagnon dans une image ; si une expression n'existe pas encore, on garde son dessin de base
function montrerCompagnon(img, pose) {
  img.onerror = () => {
    img.onerror = null;
    const animal = compagnon();
    img.src = animal ? "img/avatar-" + animal + ".svg" : "img/nounours-clin-doeil.svg";
  };
  img.src = imageCompagnon(pose);
}
// Le compagnon en haut d'une page : <img data-pose="pensif"> montre DioSL par défaut,
// et le personnage choisi par l'élève s'il en a pris un autre dans son profil.
document.querySelectorAll("img[data-pose]").forEach(img => {
  if (img.getAttribute("src") !== imageCompagnon(img.dataset.pose)) montrerCompagnon(img, img.dataset.pose);
});

// ---------------- Valeurs tapées (questions « calcul » et étapes de l'Atelier) ----------------
// Lit un nombre écrit à la française : virgule ou point, − ou -, espaces, 2,5e-3. Sinon null.
function lireNombre(texte) {
  if (typeof texte !== "string") return null;
  const s = texte.trim().replace(/[\s  ]/g, "").replace(/[−–—]/g, "-").replace(",", ".");
  if (!/^[+-]?(\d+\.?\d*|\.\d+)(e[+-]?\d+)?$/i.test(s)) return null;
  const v = parseFloat(s);
  return isFinite(v) ? v : null;
}
// Écrit un nombre à la française : 150 → « +150 » (avec signe si demandé), −0,5…
function ecrireNombre(v, decimales, avecSigne) {
  const d = decimales === undefined ? 2 : decimales;
  let t = (Math.round(Math.abs(v) * 10 ** d) / 10 ** d).toFixed(d).replace(".", ",");
  t = t.replace(/\B(?=(\d{3})+(?!\d))/g, " ").replace(/ (?=\d*,)/g, m => m);
  if (v < 0 && Number(t.replace(",", ".").replace(/ /g, "")) !== 0) return "−" + t;
  return (avecSigne && v > 0 ? "+" : "") + t;
}
// Corrige une valeur tapée. reponse = { valeur, unite, decimales, tolerance | toleranceRelative, signe }.
// Renvoie { etat: "vide" | "juste" | "signe" | "unite" | "faux", arrondi (juste mais pas à l'arrondi demandé), valeur }
function corrigerCalcul(reponse, texte) {
  const v = lireNombre(texte);
  if (v === null) return { etat: "vide" };
  const V = reponse.valeur, avecSigne = reponse.signe !== false;
  const dec = reponse.decimales === undefined ? 2 : reponse.decimales;
  const tol = (reponse.tolerance !== undefined ? reponse.tolerance
    : reponse.toleranceRelative !== undefined ? Math.abs(V) * reponse.toleranceRelative
    : 0.5 * 10 ** -dec) + 1e-9;
  const proche = x => avecSigne ? Math.abs(x - V) <= tol : Math.abs(Math.abs(x) - Math.abs(V)) <= tol;
  if (proche(v)) {
    const partie = String(texte).trim().replace(/[eE].*$/, "").split(/[.,]/)[1] || "";
    const decTapees = partie.replace(/\D/g, "").length;
    return { etat: "juste", valeur: v, arrondi: reponse.decimales !== undefined && decTapees !== reponse.decimales };
  }
  if (avecSigne && Math.abs(-v - V) <= tol && V !== 0) return { etat: "signe", valeur: v };
  for (const k of [1, 2, 3, 6, 9, -1, -2, -3, -6, -9]) {
    if (V !== 0 && proche(v / 10 ** k)) return { etat: "unite", valeur: v };
  }
  return { etat: "faux", valeur: v };
}
// Texte de correction commun (HTML échappé par l'appelant pour les parties libres)
function messageCalcul(reponse, resultat) {
  const unite = reponse.unite ? " " + reponse.unite : "";
  const dec = reponse.decimales === undefined ? 2 : reponse.decimales;
  const attendu = ecrireNombre(reponse.valeur, dec, reponse.signe !== false) + unite;
  const arrondi = dec === 0 ? "à l'unité" : "à " + ecrireNombre(10 ** -dec, dec) + " près";
  if (resultat.etat === "juste") return resultat.arrondi ? "Juste. Pense à arrondir " + arrondi + " comme demandé : " + attendu + "." : "Juste : " + attendu + ".";
  if (resultat.etat === "signe") return "Ta valeur est juste au signe près : attention au sens (mesure algébrique). La réponse est " + attendu + ".";
  if (resultat.etat === "unite") return reponse.unite
    ? "Ta valeur est juste mais pas dans la bonne unité : la réponse est attendue en " + reponse.unite + " : " + attendu + "."
    : "Ta valeur est juste à une puissance de 10 près : vérifie la virgule (ou un pourcentage écrit en décimal). La réponse est " + attendu + ".";
  return "La bonne valeur est " + attendu + ".";
}
