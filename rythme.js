// =====================================================================
// Rythme : objectif du jour, série de jours, compte à rebours des écrits
// ---------------------------------------------------------------------
// Chargé après essentiel.js sur l'accueil, le profil et le QCM. Rien n'est envoyé en ligne :
// - localStorage « objectif » : 5, 10 ou 20 questions par jour, choisi par l'élève (cet appareil) ;
// - localStorage « jours » : { "AAAA-MM-JJ": { n, ok, j } } écrit par noterReponse (essentiel.js) :
//   n = réponses données ce jour-là sur cet appareil, ok = objectif atteint ce jour-là,
//   j = réponses justes (depuis le 2026-11-14 ; avant, recalculé depuis « progression ») ;
// - localStorage « rappel » : heure du rappel quotidien mis dans l'agenda (fichier .ics fait sur l'appareil) ;
// - localStorage « invitation-compte », « decouverte », « invitation-jour », « accueil » : la proposition de compte,
//   les outils déjà présentés, la seule invitation du jour, l'écran de première ouverture passé (voir plus bas).
// Les jours se lisent aussi dans « progression-t » (heure de la dernière réponse à chaque question,
// synchronisée avec le compte) : un jour fait sur un autre appareil compte aussi.
// Un jour compte dans la série quand l'objectif est atteint. Un jour manqué par semaine
// (du lundi au dimanche) est pardonné tout seul. Jamais de reproche : une série tombée repart.
// =====================================================================

const OBJECTIFS = [5, 10, 20];
const TAILLE_CINQ_MINUTES = 5;               // une question prend environ une minute
// Les matières proposées avant une séance (nom court des boutons). « Aléatoire » = toutes matières, sans code.
// Adresses : qcm.html#seance/U42 (séance du jour en OGP), #premiers-pas/U42, #cinq-minutes/U42 ; sans code : le mélange.
const MATIERES_SEANCE = [["U41", "Maths"], ["U42", "OGP"], ["U43", "ETSO"], ["U5", "Vision"], ["U3", "Éco"]];
function matiereSeance(code) { return MATIERES_SEANCE.some(m => m[0] === code) ? code : null; }
function nomMatiereSeance(code) { const m = MATIERES_SEANCE.find(x => x[0] === code); return m ? m[1] : ""; }

// Début des écrits du BTS, par session. 2027 : Bulletin officiel n° 38 du 8 octobre 2026
// (épreuves communes à tous les BTS à partir du mardi 11 mai 2027). Les dates propres au BTS OL
// (U3, U42, U43, U5) sont publiées plus tard par le SIEC. Une session absente d'ici est estimée
// à la mi-mai et annoncée comme une estimation.
const ECRITS_BTS = { 2027: "2027-05-11" };
const DUREE_ECRITS = 30;                     // jours après le début : « période des écrits »

function lireObjectif() {
  try { const n = Number(localStorage.getItem("objectif")); return OBJECTIFS.includes(n) ? n : 0; } catch (e) { return 0; }
}
function choisirObjectif(n) {
  try { localStorage.setItem("objectif", String(n)); } catch (e) {}
}

// Dates du calendrier de l'appareil (midi : pas de surprise au changement d'heure)
function rythmeMidi(decalage) {
  const d = new Date();
  d.setHours(12, 0, 0, 0);
  d.setDate(d.getDate() + (decalage || 0));
  return d;
}
function rythmeCle(d) {
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
}
function rythmeLundi(d) {
  const l = new Date(d);
  l.setDate(l.getDate() - (l.getDay() + 6) % 7);
  return l;
}

// Réponses de chaque jour : le plus grand des deux comptes (mémo de cet appareil, progression-t).
// justes : réponses justes ce jour-là (mémo « j », ou à défaut les questions dont la dernière réponse,
// donnée ce jour-là, est juste). Elles ne changent rien à la série : elles disent le résultat à côté.
function reponsesParJour() {
  const compte = {}, justesT = {};
  const t = typeof lireTempsReponses === "function" ? lireTempsReponses() : {};
  const p = typeof lireProgression === "function" ? lireProgression() : {};
  for (const [id, ms] of Object.entries(t)) {
    const n = Number(ms);
    if (!n) continue;
    const k = rythmeCle(new Date(n));
    compte[k] = (compte[k] || 0) + 1;
    if (p[id] === 1) justesT[k] = (justesT[k] || 0) + 1;
  }
  let memo = {};
  try { memo = JSON.parse(localStorage.getItem("jours") || "{}") || {}; } catch (e) {}
  const jours = {};
  for (const k of new Set([...Object.keys(compte), ...Object.keys(memo)])) {
    const m = memo[k] || {};
    const n = Math.max(compte[k] || 0, Number(m.n) || 0);
    const justes = Math.min(n, Math.max(justesT[k] || 0, m.j === undefined ? 0 : Number(m.j) || 0));
    jours[k] = { n, ok: !!m.ok, justes };
  }
  return jours;
}

// Série de jours : remonte depuis aujourd'hui. Aujourd'hui pas encore validé ne casse rien.
// Renvoie { serie, aujourdhui: { n, justes, faux, objectif, atteint }, semaine: [{ k, nom, etat }], repart }
function calculerRythme() {
  const objectif = lireObjectif() || OBJECTIFS[1];
  const jours = reponsesParJour();
  const valide = k => { const e = jours[k]; return !!e && (e.ok || e.n >= objectif); };
  const auj = rythmeCle(rythmeMidi(0));
  const plusAncien = Object.keys(jours).sort()[0] || auj;

  const chaine = new Map();                   // jour -> "ok" ou "pause"
  const pausesPrises = new Set();             // semaines (clé du lundi) où la pause a servi
  if (valide(auj)) chaine.set(auj, "ok");
  for (let i = 1; i <= 800; i++) {
    const d = rythmeMidi(-i), k = rythmeCle(d);
    if (k < plusAncien) break;
    if (valide(k)) { chaine.set(k, "ok"); continue; }
    const semaine = rythmeCle(rythmeLundi(d));
    if (pausesPrises.has(semaine)) break;
    pausesPrises.add(semaine);
    chaine.set(k, "pause");
  }
  // Une pause ne commence pas une série : on retire celles qui sont avant le premier jour fait
  const ordre = [...chaine.keys()];
  for (let i = ordre.length - 1; i >= 0 && chaine.get(ordre[i]) === "pause"; i--) chaine.delete(ordre[i]);
  const serie = [...chaine.values()].filter(e => e === "ok").length;

  // La semaine en cours, du lundi au dimanche
  const NOMS = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];
  const lundi = rythmeLundi(rythmeMidi(0));
  const semaine = NOMS.map((nom, i) => {
    const d = new Date(lundi);
    d.setDate(d.getDate() + i);
    const k = rythmeCle(d);
    const etat = k > auj ? "futur" : chaine.get(k) || (valide(k) ? "ok" : k === auj ? "aujourdhui" : "vide");
    return { k, nom, numero: d.getDate(), etat, estAujourdhui: k === auj, dansSerie: chaine.has(k) };
  });
  const cleLundi = rythmeCle(lundi);

  const n = jours[auj] ? jours[auj].n : 0, justes = jours[auj] ? jours[auj].justes : 0;
  return {
    serie,
    aujourdhui: { n, justes, faux: Math.max(0, n - justes), aRevoir: aRevoirDuJour(), objectif, atteint: valide(auj) },
    semaine,
    pauseHier: chaine.get(rythmeCle(rythmeMidi(-1))) === "pause",
    serieAvantLundi: [...chaine.keys()].some(k => k < cleLundi),
    repart: serie === 0 && Object.keys(jours).some(k => k < auj && valide(k))
  };
}

// Compte à rebours : à partir de l'année indiquée dans le profil.
// null si l'élève est déjà opticien, ou entre la fin des écrits et la rentrée.
function calculerExamen() {
  const annee = (typeof lireProfil === "function" ? lireProfil().annee : "") || "";
  if (annee.startsWith("Déjà opticien")) return null;
  const auj = rythmeMidi(0);
  const anneeScolaire = auj.getMonth() >= 8 ? auj.getFullYear() + 1 : auj.getFullYear();   // de septembre à août
  const session = anneeScolaire + (annee.startsWith("1re") ? 1 : 0);
  const officielle = ECRITS_BTS[session] || null;
  const debut = new Date((officielle || session + "-05-11") + "T12:00:00");
  const jours = Math.round((debut - auj) / 864e5);
  if (jours < -DUREE_ECRITS) return null;
  if (jours <= 0) return { etat: "pendant", session };

  // Rythme : les questions des épreuves écrites (pas les maths, en CCF) pas encore réussies,
  // réparties sur les jours qui restent, en gardant un jour de pause par semaine.
  const ecrites = (typeof EPREUVES === "undefined" ? [] : EPREUVES).filter(e => !/CCF/.test(e.detail || "")).map(e => e.code);
  const prog = typeof lireProgression === "function" ? lireProgression() : {};
  const qs = (typeof QUESTIONS === "undefined" ? [] : QUESTIONS).filter(q => !q.entrainement && ecrites.includes(q.epreuve));
  const reste = qs.filter(q => prog[idQuestion(q)] !== 1).length;
  const joursDeTravail = Math.max(1, jours - Math.floor(jours / 7));
  return {
    etat: "avant", session, debut, officielle: !!officielle, jours, reste,
    rythme: reste ? Math.ceil(reste / joursDeTravail) : 0,
    anneeIndiquee: !!annee
  };
}

function phraseExamen(ex) {
  if (!ex) return null;
  if (ex.etat === "pendant") return { fort: "", texte: "C'est la période des écrits. Bon courage pour tes épreuves." };
  let fort, texte;
  if (ex.officielle) {
    fort = "J−" + ex.jours;
    texte = " avant les écrits du BTS, à partir du " +
      ex.debut.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long", year: "numeric" }) + ".";
  } else {
    const mois = Math.max(1, Math.round(ex.jours / 30.4));
    fort = "Écrits vers la mi-mai " + ex.session;
    texte = ", dans " + (mois > 2 ? "environ " + mois + " mois" : ex.jours + " jours") + " (date à confirmer).";
  }
  texte += ex.reste === 0
    ? " Tu as réussi toutes les questions des écrits\u00a0: continue avec celles à revoir."
    : " Il te reste " + ex.reste + (ex.reste > 1 ? " questions" : " question") + " à réussir\u00a0: " + ex.rythme +
      (ex.rythme > 1 ? " par jour suffisent" : " par jour suffit") + ", avec un jour de pause par semaine.";
  return { fort, texte };
}

// Phrase de la série, sans reproche
function phraseSerie(r) {
  if (r.serie > 0) return (r.serie > 1 ? r.serie + " jours de suite" : "Premier jour de ta série") + (r.pauseHier ? " (hier\u00a0: jour de pause)" : "");
  if (r.repart) return "On repart\u00a0? Ta série reprend dès que l'objectif du jour est atteint.";
  return "Ta série commence le jour où tu atteins ton objectif.";
}

// Questions ratées aujourd'hui (chacune une fois, même refaite) : elles reviennent demain dans « À revoir ».
// Lu dans « revisions » (essentiel.js) : une erreur y écrit { n: 0, t: heure } ; l'entraînement n'y va pas.
function aRevoirDuJour() {
  if (typeof lireRevisions !== "function") return 0;
  const auj = rythmeCle(rythmeMidi(0));
  return Object.values(lireRevisions()).filter(e => e && e.n === 0 && e.t && rythmeCle(new Date(e.t)) === auj).length;
}
// Le résultat du jour, à côté de l'effort : « 10 questions faites, 6 justes · 4 à revoir »
function phraseResultatJour(a) {
  return a.n + (a.n > 1 ? " questions faites, " : " question faite, ") + a.justes + (a.justes > 1 ? " justes" : " juste") +
    (a.aRevoir ? " · " + a.aRevoir + " à revoir" : "");
}
// Le jour est-il surtout fait d'erreurs ? (moins de la moitié de justes) : pas de ton de victoire
function journeeDifficile(a) { return a.n > 0 && a.justes * 2 < a.n; }

// Les questions ratées aujourd'hui et pas encore réussies depuis (dernière réponse du jour fausse).
// Elles reviennent demain dans « À revoir » ; qcm.html#erreurs-du-jour permet de les refaire tout de suite.
// idsRatesDuJour : leurs identifiants (sans avoir besoin de la liste des questions, pour l'accueil et le profil).
function idsRatesDuJour() {
  const t = lireTempsReponses(), p = lireProgression(), auj = rythmeCle(rythmeMidi(0));
  return Object.keys(t).filter(id => { const ms = Number(t[id]); return ms && p[id] === 0 && rythmeCle(new Date(ms)) === auj; });
}
function questionsRateesDuJour() {
  if (typeof QUESTIONS === "undefined") return [];
  const ids = new Set(idsRatesDuJour());
  return QUESTIONS.filter(q => ids.has(idQuestion(q)));
}

// Pour le bilan d'une série du QCM : où en est l'objectif du jour (null si aucun objectif choisi).
// La série reste fondée sur l'effort ; le nombre de justes est toujours écrit à côté.
function etatObjectifDuJour() {
  if (!lireObjectif()) return null;
  const r = calculerRythme(), a = r.aujourdhui;
  if (a.atteint) return { atteint: true, faux: a.faux, texte: "Objectif du jour atteint\u00a0: " + phraseResultatJour(a) + (r.serie > 1 ? ". " + r.serie + " jours de suite" : "") };
  return { atteint: false, faux: a.faux, texte: "Objectif du jour\u00a0: " + a.n + " / " + a.objectif + (a.n ? " (" + a.justes + (a.justes > 1 ? " justes)" : " juste)") : "") };
}

// Les séances courtes du QCM : les questions à revoir d'abord, puis des questions jamais faites des
// notions les plus rentables (ordre de l'Essentiel, les plus faciles d'abord), puis les ratées.
// Ni entraînement, ni cas. « 5 minutes » = 5 questions ; « séance du jour » = ce qui manque pour l'objectif.
// matiere (facultatif, "U42"…) : la séance ne prend que des questions de cette matière, dans le même ordre.
const RANG_DIFFICULTE = { facile: 0, moyen: 1, difficile: 2 };
function rangDifficulte(q) { return q.difficulte in RANG_DIFFICULTE ? RANG_DIFFICULTE[q.difficulte] : 1; }
function melangerListe(liste) {
  const c = liste.slice();
  for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
  return c;
}
function questionsSeance(taille, matiere) {
  if (typeof QUESTIONS === "undefined") return [];
  const prog = lireProgression();
  const choisies = [], deja = new Set();
  const prendre = liste => {
    for (const q of liste) {
      if (choisies.length >= taille) return;
      const id = idQuestion(q);
      if (!deja.has(id)) { deja.add(id); choisies.push(q); }
    }
  };
  const parDifficulte = liste => melangerListe(liste).sort((a, b) => rangDifficulte(a) - rangDifficulte(b));
  const deLaMatiere = q => !matiere || q.epreuve === matiere;
  const base = QUESTIONS.filter(q => !q.entrainement && !q.cas && deLaMatiere(q));
  prendre(melangerListe(questionsARevoir().filter(deLaMatiere)));
  const jamais = base.filter(q => prog[idQuestion(q)] === undefined);
  // « Mon plan » (pas de matière choisie) : les thèmes de la semaine, celui du jour d'abord (voir planDeLaSemaine).
  // Loin des écrits, les questions jamais faites d'abord ; près des écrits, les ratées d'abord.
  if (!matiere && planVisible()) {
    const plan = planDeLaSemaine();
    if (plan && plan.themes.length) {
      // Le thème du jour prend au plus 60 % de la séance, puis les deux autres, puis encore le thème du jour s'il en faut
      const faiblesDabord = plan.phase === "faibles" || plan.phase === "fin";
      const ordre = themesDansLOrdreDuJour(plan);
      const duTheme = t => {
        const qs = base.filter(q => q.epreuve === t.e && q.theme === t.t);
        const neuves = parDifficulte(qs.filter(q => prog[idQuestion(q)] === undefined));
        const ratees = melangerListe(qs.filter(q => prog[idQuestion(q)] === 0));
        return faiblesDabord ? ratees.concat(neuves) : neuves.concat(ratees);
      };
      const part = Math.max(choisies.length + 1, choisies.length + Math.ceil(taille * 0.6));
      prendre(duTheme(ordre[0]).slice(0, Math.max(0, Math.min(taille, part) - choisies.length)));
      ordre.slice(1).concat(ordre[0]).forEach(t => prendre(duTheme(t)));
    }
  }
  if (typeof ESSENTIEL !== "undefined") ESSENTIEL.forEach(n => prendre(parDifficulte(jamais.filter(q => q.epreuve === n.epreuve && q.theme === n.theme))));
  prendre(parDifficulte(jamais));
  prendre(melangerListe(base.filter(q => prog[idQuestion(q)] === 0)));
  prendre(melangerListe(base));
  return choisies;
}
function questionsCinqMinutes(matiere) { return questionsSeance(TAILLE_CINQ_MINUTES, matiere); }

// La séance du jour : ce qui manque pour atteindre l'objectif (0 s'il est atteint : on propose alors 5 minutes de plus)
function tailleSeanceDuJour() {
  const a = calculerRythme().aujourdhui;
  return a.atteint ? 0 : Math.max(1, a.objectif - a.n);
}
function questionsSeanceDuJour(matiere) {
  return questionsSeance(tailleSeanceDuJour() || TAILLE_CINQ_MINUTES, matiere);
}
// « Passer pour aujourd'hui » : localStorage « seance-passee » = "AAAA-MM-JJ" (le jour passé ; sans effet dès le lendemain).
// Rien d'autre ne change : le jour compte comme un jour sans révision (un par semaine est pardonné).
function seancePassee() {
  try { return localStorage.getItem("seance-passee") === rythmeCle(rythmeMidi(0)); } catch (e) { return false; }
}
function passerSeance(oui) {
  try { if (oui) localStorage.setItem("seance-passee", rythmeCle(rythmeMidi(0))); else localStorage.removeItem("seance-passee"); } catch (e) {}
}

// Ce qu'il y a dans une séance, pour l'annoncer
function compositionSeance(liste) {
  const prog = lireProgression(), dues = questionsARevoir();
  const aRevoir = liste.filter(q => dues.includes(q)).length;
  const nouvelles = liste.filter(q => !dues.includes(q) && prog[idQuestion(q)] === undefined);
  const ratees = liste.filter(q => !dues.includes(q) && prog[idQuestion(q)] === 0).length;
  return { aRevoir, nouvelles: nouvelles.length, ratees, autres: liste.length - aRevoir - nouvelles.length - ratees, themes: [...new Set(nouvelles.map(q => q.theme))] };
}
// « 2 à revoir aujourd'hui, 3 jamais faites »
function phraseComposition(c) {
  const parts = [];
  if (c.aRevoir) parts.push(c.aRevoir + " à revoir aujourd'hui");
  if (c.nouvelles) parts.push(c.nouvelles + (c.nouvelles > 1 ? " jamais faites" : " jamais faite"));
  if (c.ratees) parts.push(c.ratees + " à retravailler");
  if (c.autres) parts.push(c.autres + (c.autres > 1 ? " déjà réussies" : " déjà réussie"));
  return parts.join(", ");
}
// Les cinq questions de la première ouverture : faciles (champ difficulte), à choix (pas de calcul à taper),
// d'abord une notion de l'Essentiel par épreuve (l'élève voit tout le BTS), puis les notions suivantes.
// matiere (facultatif) : cinq questions faciles de cette matière seulement, une par notion de l'Essentiel d'abord.
function questionsPremiersPas(matiere) {
  if (typeof QUESTIONS === "undefined" || typeof ESSENTIEL === "undefined") return [];
  const prog = lireProgression();
  const faciles = QUESTIONS.filter(q => (!matiere || q.epreuve === matiere) && !q.entrainement && !q.cas && !q.type && q.difficulte === "facile" && prog[idQuestion(q)] === undefined);
  const choisies = [], epreuves = new Set(), notions = new Set();
  const prendre = n => {
    const q = melangerListe(faciles.filter(x => x.epreuve === n.epreuve && x.theme === n.theme))[0];
    if (!q) return;
    choisies.push(q);
    epreuves.add(n.epreuve);
    notions.add(n.epreuve + "/" + n.theme);
  };
  ESSENTIEL.forEach(n => { if (choisies.length < TAILLE_CINQ_MINUTES && !epreuves.has(n.epreuve)) prendre(n); });
  ESSENTIEL.forEach(n => { if (choisies.length < TAILLE_CINQ_MINUTES && !notions.has(n.epreuve + "/" + n.theme)) prendre(n); });
  if (matiere) {
    // Pas assez de notions essentielles dans la matière : d'autres questions faciles, puis la séance ordinaire de la matière
    const completer = liste => liste.forEach(q => { if (choisies.length < TAILLE_CINQ_MINUTES && !choisies.includes(q)) choisies.push(q); });
    completer(melangerListe(faciles));
    completer(questionsCinqMinutes(matiere));
    return choisies;
  }
  return choisies.length ? choisies : questionsCinqMinutes();
}

// ---------------- Ce que dit le compagnon : le travail fait, sans « Bravo ! » ----------------
// Dernier jour de révision avant aujourd'hui, et l'effort des 7 derniers jours (aujourd'hui compris).
// « Rattrapée » = une question ratée, réussie le jour où elle revenait dans « À revoir » (revisions.t).
function bilanRecent() {
  const jours = reponsesParJour();
  const auj = rythmeCle(rythmeMidi(0)), debut7 = rythmeCle(rythmeMidi(-6));
  const avant = Object.keys(jours).filter(k => k < auj && jours[k].n > 0).sort();
  const dernier = avant.length ? avant[avant.length - 1] : null;
  const jours7 = Object.keys(jours).filter(k => k >= debut7 && k <= auj && jours[k].n > 0);
  const depuis = rythmeMidi(-6);
  depuis.setHours(0, 0, 0, 0);
  const revisions = typeof lireRevisions === "function" ? lireRevisions() : {};
  let rattrapees = 0;
  (typeof QUESTIONS === "undefined" ? [] : QUESTIONS).forEach(q => {
    const e = revisions[idQuestion(q)];
    if (e && Number(e.t) >= depuis.getTime() && (e.j === "" || e.n >= 1)) rattrapees++;
  });
  return {
    dernier, nDernier: dernier ? jours[dernier].n : 0,
    total7: jours7.reduce((s, k) => s + jours[k].n, 0), joursActifs7: jours7.length, rattrapees
  };
}

// Une ou deux phrases et la pose du compagnon (null : rien à dire, la carte n'affiche pas de message)
function messageCompagnon(r) {
  const b = bilanRecent(), phrases = [];
  if (b.dernier) {
    const d = new Date(b.dernier + "T12:00:00");
    const ecart = Math.round((rythmeMidi(0) - d) / 864e5);
    const quand = ecart === 1 ? "Hier"
      : ecart < 7 ? "Dernière séance " + d.toLocaleDateString("fr-FR", { weekday: "long" })
      : "Dernière séance le " + d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
    phrases.push(quand + "\u00a0: " + b.nDernier + (b.nDernier > 1 ? " questions." : " question."));
  }
  if (b.rattrapees > 0) {
    phrases.push("En 7 jours, tu as rattrapé " + b.rattrapees + (b.rattrapees > 1 ? " questions que tu avais ratées." : " question que tu avais ratée."));
  } else if (b.joursActifs7 >= 2) {
    phrases.push("En 7 jours\u00a0: " + b.total7 + " questions sur " + b.joursActifs7 + " jours de révision.");
  }
  if (!phrases.length) return null;
  // Objectif atteint : il est content (pensif si la plupart des réponses du jour sont fausses) ; des questions attendent et rien n'est fait : il réfléchit ; sinon il accueille.
  // Jamais de pose « choqué » ici : le compagnon ne boude pas et ne fait pas de reproche.
  const pose = r.aujourdhui.atteint && !journeeDifficile(r.aujourdhui) ? "bouche-ouverte"
    : r.aujourdhui.atteint ? "pensif"
    : r.aujourdhui.n === 0 && typeof nombreARevoir === "function" && nombreARevoir() > 0 ? "pensif"
    : "clin-doeil";
  return { pose, phrases };
}

// ---------------- Rappel dans l'agenda : un fichier .ics fabriqué sur l'appareil ----------------
// Aucun serveur, rien n'est envoyé : l'agenda de l'élève garde le rappel, et il le supprime quand il veut.
// localStorage « rappel » = "18:00" : seulement pour préremplir l'heure et ne plus le proposer sur l'accueil.
const ADRESSE_CINQ_MINUTES = "https://opticonversion.fr/qcm.html#cinq-minutes";

function lireRappel() {
  try { const h = localStorage.getItem("rappel") || ""; return /^\d{2}:\d{2}$/.test(h) ? h : ""; } catch (e) { return ""; }
}
function heureLisible(h) {                   // "18:00" -> "18 h", "18:30" -> "18 h 30"
  const [hh, mm] = h.split(":");
  return Number(hh) + " h" + (mm === "00" ? "" : " " + mm);
}

// Un événement chaque jour à l'heure choisie (heure de l'appareil), avec une alerte à l'heure pile
function texteRappelIcs(heure, maintenant) {
  const [hh, mm] = heure.split(":").map(Number);
  const debut = new Date(maintenant);
  debut.setHours(hh, mm, 0, 0);
  if (debut <= maintenant) debut.setDate(debut.getDate() + 1);    // la prochaine fois que cette heure arrive
  const fin = new Date(debut.getTime() + 10 * 60000);
  const deux = n => String(n).padStart(2, "0");
  const local = x => "" + x.getFullYear() + deux(x.getMonth() + 1) + deux(x.getDate()) + "T" + deux(x.getHours()) + deux(x.getMinutes()) + "00";
  const utc = x => "" + x.getUTCFullYear() + deux(x.getUTCMonth() + 1) + deux(x.getUTCDate()) + "T" + deux(x.getUTCHours()) + deux(x.getUTCMinutes()) + deux(x.getUTCSeconds()) + "Z";
  const texte = s => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");
  const titre = "Révision BTS OL\u00a0: 5 minutes";
  const lignes = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Opticonversion//Rappel de revision//FR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    "UID:rappel-" + maintenant.getTime().toString(36) + "-" + Math.random().toString(36).slice(2, 10) + "@opticonversion.fr",
    "DTSTAMP:" + utc(maintenant),
    "DTSTART:" + local(debut),
    "DTEND:" + local(fin),
    "RRULE:FREQ=DAILY",
    "SUMMARY:" + texte(titre),
    "DESCRIPTION:" + texte("5 questions sur Opticonversion, celles à revoir d'abord\u00a0: " + ADRESSE_CINQ_MINUTES),
    "URL:" + ADRESSE_CINQ_MINUTES,
    "BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + texte(titre), "TRIGGER:PT0S", "END:VALARM",
    "END:VEVENT", "END:VCALENDAR"
  ];
  return lignes.map(plierLigneIcs).join("\r\n") + "\r\n";
}
// Une ligne d'un fichier .ics fait au plus 75 octets : au-delà, elle continue sur la suivante après une espace
function plierLigneIcs(ligne) {
  const octets = c => (typeof TextEncoder !== "undefined" ? new TextEncoder().encode(c).length : unescape(encodeURIComponent(c)).length);
  let resultat = "", courant = "", taille = 0;
  for (const c of ligne) {
    const t = octets(c);
    if (taille + t > 75) { resultat += courant + "\r\n "; courant = ""; taille = 1; }
    courant += c;
    taille += t;
  }
  return resultat + courant;
}
function telechargerRappel(heure) {
  const blob = new Blob([texteRappelIcs(heure, new Date())], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "rappel-revision-opticonversion.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 60000);
  try { localStorage.setItem("rappel", heure); } catch (e) {}
}

// Le bloc du profil : choisir l'heure, puis télécharger le rappel
function afficherRappel(el) {
  if (!el) return;
  const deja = lireRappel();
  el.innerHTML =
    '<h3 class="rappel-titre">Un rappel chaque jour</h3>' +
    "<p class=\"aide\">Ton agenda te prévient chaque jour à l'heure choisie, avec le lien vers 5 minutes de révision. " +
    "Le fichier est fabriqué sur ton appareil\u00a0: rien n'est envoyé, et tu supprimes le rappel quand tu veux dans ton agenda.</p>" +
    '<div class="rappel-ligne">' +
      '<label for="rappel-heure">Heure du rappel<input type="time" id="rappel-heure" step="300"></label>' +
      '<button type="button" class="bouton secondaire" id="rappel-bouton"><span class="ico i-calendrier" aria-hidden="true"></span>Ajouter à mon agenda</button>' +
    "</div>" +
    '<p class="aide rappel-etat" id="rappel-etat" role="status"></p>';
  const champ = el.querySelector("#rappel-heure"), etat = el.querySelector("#rappel-etat");
  champ.value = deja || "18:00";
  if (deja) etat.textContent = "Tu as déjà créé un rappel à " + heureLisible(deja) + ". Pour changer d'heure, crée-en un nouveau, puis supprime l'ancien dans ton agenda.";
  el.querySelector("#rappel-bouton").addEventListener("click", () => {
    const h = (champ.value || "").slice(0, 5);          // certains navigateurs ajoutent les secondes
    if (!/^\d{2}:\d{2}$/.test(h)) { etat.textContent = "Choisis d'abord une heure."; champ.focus(); return; }
    telechargerRappel(h);
    etat.textContent = "Fichier créé\u00a0: ouvre-le pour ajouter le rappel de " + heureLisible(h) + " à ton agenda.";
  });
}

// ---------------- Invitation à créer un compte (jamais obligatoire) ----------------
// L'élève essaie d'abord librement : rien avant sa première série terminée (bilan du QCM) ou avant
// un deuxième jour de révision. Ensuite, une proposition aux moments où il aurait quelque chose à
// perdre : « premiere » (premier contact), « serie3 » (3 jours de suite), « objectif » (objectif du
// jour atteint), « appli » (site ouvert depuis l'appli installée). Chaque moment au plus une fois,
// au plus une proposition par jour, jamais pendant une question (accueil et bilan seulement), plus
// rien une fois connecté (localStorage « compte-uid », écrit par compte.js) ni après 3 « Plus tard ».
// localStorage « invitation-compte » = { serieFinie, vus: { moment: "AAAA-MM-JJ" }, dernier, plusTard }
const CLE_INVITATION = "invitation-compte";
const PLUS_TARD_MAX = 3;

function lireInvitation() {
  try { return JSON.parse(localStorage.getItem(CLE_INVITATION) || "{}") || {}; } catch (e) { return {}; }
}
function ecrireInvitation(etat) {
  try { localStorage.setItem(CLE_INVITATION, JSON.stringify(etat)); } catch (e) {}
}
function noterSerieFinie() {                 // appelé au bilan de chaque série du QCM
  const etat = lireInvitation();
  if (!etat.serieFinie) { etat.serieFinie = true; ecrireInvitation(etat); }
}
function compteConnecte() {
  try { return !!localStorage.getItem("compte-uid"); } catch (e) { return false; }
}
function appliInstallee() {
  return (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;
}

// Le moment à saisir maintenant (null : rien à proposer). lieu : "accueil" ou "bilan"
function invitationDuMoment(lieu) {
  if (compteConnecte() || !invitationLibre("compte")) return null;
  const etat = lireInvitation(), vus = etat.vus || {};
  if ((etat.plusTard || 0) >= PLUS_TARD_MAX) return null;
  const auj = rythmeCle(rythmeMidi(0));
  if (etat.dernier === auj) return null;
  const jours = reponsesParJour();
  const jourAvant = Object.keys(jours).some(k => k < auj && jours[k].n > 0);
  if (!etat.serieFinie && !jourAvant && lieu !== "bilan") return null;
  const r = calculerRythme();
  const moments = [
    ["serie3", r.serie >= 3],
    ["objectif", lireObjectif() > 0 && r.aujourdhui.atteint],
    ["appli", appliInstallee()],
    ["premiere", !Object.keys(vus).length]
  ];
  const trouve = moments.find(([nom, vrai]) => vrai && !vus[nom]);
  return trouve ? { moment: trouve[0], serie: r.serie } : null;
}

// Le bloc de la proposition. avecCompagnon : sur l'accueil, le compagnon la dit (comme le récap) ;
// au bilan, le compagnon est déjà au-dessus. apresPlusTard : ce que la page fait une fois le bloc retiré.
function creerInvitationCompte(inv, avecCompagnon, apresPlusTard) {
  const creer = (balise, classe, texte) => {
    const n = document.createElement(balise);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  };
  const bloc = creer("div", avecCompagnon ? "jour-mot invitation-compte" : "invitation-compte invitation-bilan");
  bloc.id = "invitation-compte";
  bloc.setAttribute("role", "region");
  bloc.setAttribute("aria-label", "Créer ton compte");
  if (avecCompagnon) {
    const img = creer("img", "jour-compagnon");
    img.alt = "";
    img.width = 52;
    img.height = 52;
    const difficile = inv.moment === "objectif" && journeeDifficile(calculerRythme().aujourdhui);
    montrerCompagnon(img, (inv.moment === "serie3" || inv.moment === "objectif") && !difficile ? "bouche-ouverte" : "clin-doeil");
    bloc.appendChild(img);
  }
  const corps = creer("div", "invitation-texte");
  const message = creer("p", "jour-message");
  // L'objectif atteint et la série sont déjà écrits juste à côté (carte, médailles du bilan) : pas de redite
  if (inv.moment === "appli") message.appendChild(creer("span", "invitation-fait", "L'appli est installée."));
  message.appendChild(creer("span", "invitation-raison", "Garde ta série " + (inv.moment === "serie3" ? "de " + inv.serie + " jours" : "de jours") +
    " et ta progression, même si tu changes de téléphone."));
  const detail = creer("p", "invitation-detail");
  detail.append("Un compte gratuit, avec Google ou ton ", creer("span", "insecable", "e-mail"), ". Tu peux le supprimer en un clic.");
  const actions = creer("div", "invitation-actions");
  const creerCompte = creer("a", "bouton secondaire", "Créer mon compte");
  creerCompte.href = "compte.html#creer-compte";
  const plusTard = creer("button", "bouton-discret", "Plus tard");
  plusTard.type = "button";
  plusTard.addEventListener("click", () => {
    const etat = lireInvitation();
    etat.plusTard = (etat.plusTard || 0) + 1;
    ecrireInvitation(etat);
    bloc.remove();
    if (apresPlusTard) apresPlusTard();
  });
  actions.append(creerCompte, plusTard);
  corps.append(message, detail, actions);
  bloc.appendChild(corps);

  // Montrée = ce moment est passé, et c'est la proposition du jour
  const etat = lireInvitation(), auj = rythmeCle(rythmeMidi(0));
  etat.vus = etat.vus || {};
  etat.vus[inv.moment] = auj;
  if (!etat.vus.premiere) etat.vus.premiere = auj;   // le premier contact est fait, quel que soit le moment
  etat.dernier = auj;
  ecrireInvitation(etat);
  reserverInvitation("compte");
  return bloc;
}

// ---------------- Une seule invitation par jour ----------------
// Proposition de compte, découverte d'un outil, lien vers le rappel, bandeau « installer l'appli » (appli.js) :
// au plus une par jour, et aucune le premier jour de révision (l'élève découvre sa séance, rien d'autre).
// localStorage « invitation-jour » = { jour: "AAAA-MM-JJ", type } : la place du jour, déjà prise ou non.
function premierJourDeRevision() {
  const jours = reponsesParJour();
  const actifs = Object.keys(jours).filter(k => jours[k].n > 0).sort();
  return !actifs.length || actifs[0] >= rythmeCle(rythmeMidi(0));
}
function invitationLibre(type) {
  if (premierJourDeRevision()) return false;
  try {
    const e = JSON.parse(localStorage.getItem("invitation-jour") || "{}") || {};
    return e.jour !== rythmeCle(rythmeMidi(0)) || e.type === type;
  } catch (e) { return true; }
}
function reserverInvitation(type) {
  try { localStorage.setItem("invitation-jour", JSON.stringify({ jour: rythmeCle(rythmeMidi(0)), type })); } catch (e) {}
}

// ---------------- Les outils se présentent un par un ----------------
// Une petite carte du compagnon, dans l'ordre, chacune un seul jour (elle reste ce jour-là jusqu'à ce qu'on la
// ferme ou qu'on l'ouvre), puis plus jamais. localStorage « decouverte » = { vus: { id: "AAAA-MM-JJ" }, fermes: { id: true } }
// Le rythme voulu par David : 3e jour de révision, l'Atelier des tracés ; 4e jour, les définitions ; ensuite la séance
// de QCM comme d'habitude (les calculateurs passent une fois, plus tard). « jour » = le combientième jour où l'élève
// révise (les jours sans réponse ne comptent pas), aujourd'hui compris. Ce jour-là, l'outil passe avant la proposition
// de compte (afficherCarteJour).
const DECOUVERTES = [
  { id: "atelier", quand: s => s.jour >= 3, titre: "L'Atelier des tracés", lien: "traces.html", bouton: "Ouvrir l'Atelier",
    invite: "Aujourd'hui, essaie l'Atelier des tracés", dessin: true,
    texte: "Tu construis l'image d'une lentille rayon par rayon, comme sur ta copie, et chaque tracé est vérifié." },
  { id: "definitions", quand: s => s.jour >= 4, titre: "Les définitions à réciter", lien: "definitions.html", bouton: "Réciter",
    invite: "Aujourd'hui, essaie les définitions à réciter", icone: "i-cartes",
    texte: "Celles des sujets officiels, en cartes à retourner. Les définitions à savoir par cœur viennent en premier." },
  { id: "calculs", quand: s => s.joursActifs >= 6, titre: "Les calculateurs", lien: "calculateurs.html", bouton: "Ouvrir les calculs",
    invite: "Aujourd'hui, essaie les calculateurs", icone: "i-calcul",
    texte: "Transposition, verre-œil, Prentice : le calcul est détaillé, pour vérifier le tien." }
];
function lireDecouverte() {
  try { const e = JSON.parse(localStorage.getItem("decouverte") || "{}") || {}; e.vus = e.vus || {}; e.fermes = e.fermes || {}; return e; }
  catch (e) { return { vus: {}, fermes: {} }; }
}
function fermerDecouverte(id) {
  const e = lireDecouverte();
  e.fermes[id] = true;
  try { localStorage.setItem("decouverte", JSON.stringify(e)); } catch (err) {}
}
// L'outil à présenter aujourd'hui (null : aucun)
function decouverteDuJour() {
  const e = lireDecouverte(), auj = rythmeCle(rythmeMidi(0));
  const enCours = DECOUVERTES.find(d => e.vus[d.id] === auj && !e.fermes[d.id]);
  if (enCours) return enCours;
  if (!invitationLibre("decouverte")) return null;
  const jours = reponsesParJour(), objectif = lireObjectif() || OBJECTIFS[1];
  const actifs = Object.keys(jours).filter(k => jours[k].n > 0);
  const s = {
    jour: actifs.filter(k => k < auj).length + 1,      // 3 = troisième jour de révision, déjà commencé ou non
    joursActifs: actifs.length,
    joursValides: Object.keys(jours).filter(k => jours[k].ok || jours[k].n >= objectif).length
  };
  const d = DECOUVERTES.find(x => !e.vus[x.id]);       // dans l'ordre : la suivante seulement
  if (!d || !d.quand(s)) return null;
  e.vus[d.id] = auj;
  try { localStorage.setItem("decouverte", JSON.stringify(e)); } catch (err) {}
  reserverInvitation("decouverte");
  return d;
}
// La carte du compagnon qui présente l'outil, fermable
function creerDecouverte(d, apresFermeture) {
  const creer = (balise, classe, texte) => {
    const n = document.createElement(balise);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  };
  const bloc = creer("div", "jour-mot decouverte");
  bloc.id = "decouverte";
  bloc.setAttribute("role", "region");
  bloc.setAttribute("aria-label", "À découvrir : " + d.titre);
  const img = creer("img", "jour-compagnon");
  img.alt = "";
  img.width = 52;
  img.height = 52;
  montrerCompagnon(img, "clin-doeil");
  const corps = creer("div", "invitation-texte");
  const message = creer("p", "jour-message");
  message.append(creer("span", "invitation-raison", d.titre), creer("span", "", d.texte));
  const actions = creer("div", "invitation-actions");
  const lien = creer("a", "bouton secondaire", d.bouton);
  lien.href = d.lien;
  lien.addEventListener("click", () => fermerDecouverte(d.id));
  actions.appendChild(lien);
  corps.append(message, actions);
  const fermer = creer("button", "decouverte-fermer");
  fermer.type = "button";
  fermer.setAttribute("aria-label", "Fermer");
  fermer.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
  fermer.addEventListener("click", () => {
    fermerDecouverte(d.id);
    bloc.remove();
    if (apresFermeture) apresFermeture();
  });
  bloc.append(img, corps, fermer);
  return bloc;
}

// La grande carte de l'outil du jour, en tête de l'écran de la séance du jour : titre, dessin ou icône, bouton or.
// L'Atelier a son petit tracé : l'objet AB, la lentille, les trois rayons qui forment l'image A'B'.
const DESSIN_TRACE = '<svg class="outil-jour-dessin" viewBox="0 0 280 96" aria-hidden="true">' +
  '<path class="axe" d="M8 48H272"/><path class="repere" d="M95 44v8M185 44v8"/>' +
  '<path class="verre" d="M140 8Q153 48 140 88Q127 48 140 8Z"/>' +
  '<path class="rayon" d="M50 22H140L230 74M50 22L230 74M50 22L140 74H230"/>' +
  '<path class="fleche" d="M50 48V22M46 28L50 22L54 28M230 48V74M226 68L230 74L234 68"/>' +
  '<text x="42" y="18">B</text><text x="236" y="86">B\u2032</text><text x="91" y="64">F</text><text x="189" y="42">F\u2032</text></svg>';
function creerOutilDuJour(d, apresFermeture) {
  const creer = (balise, classe, texte) => {
    const n = document.createElement(balise);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  };
  const bloc = creer("div", "outil-jour");
  bloc.setAttribute("role", "region");
  bloc.setAttribute("aria-label", "À découvrir : " + d.titre);
  if (d.dessin) bloc.insertAdjacentHTML("beforeend", DESSIN_TRACE);
  else if (d.icone) { const ico = creer("span", "ico outil-jour-ico " + d.icone); ico.setAttribute("aria-hidden", "true"); bloc.appendChild(ico); }
  // d.fermer (facultatif) : ce que fait la croix à la place de « outil déjà présenté » (ex. l'examen blanc du plan)
  const marquer = () => (d.fermer ? d.fermer() : fermerDecouverte(d.id));
  const lien = creer("a", "bouton bouton-grand", d.bouton);
  lien.href = d.lien;
  if (!d.fermer) lien.addEventListener("click", marquer);
  const fermer = creer("button", "decouverte-fermer");
  fermer.type = "button";
  fermer.setAttribute("aria-label", "Fermer");
  fermer.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 6.5l11 11M17.5 6.5l-11 11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>';
  fermer.addEventListener("click", () => {
    marquer();
    bloc.remove();
    if (apresFermeture) apresFermeture();
  });
  bloc.append(creer("h2", "outil-jour-titre", d.invite), creer("p", "", d.texte), lien, fermer);
  return bloc;
}

// ---------------- Les jours suivants : l'écran de la séance du jour (index.html) ----------------
// À partir du deuxième jour de révision, tant que la séance du jour n'est ni faite ni passée, l'accueil ne montre que
// cela (html[data-accueil="jour"], posé dans le <head> avant l'affichage, confirmé ou corrigé ici) : combien de
// questions (le dernier choix reste coché), sur quelle matière, « Commencer ma séance ». « Passer pour aujourd'hui »
// rend l'accueil habituel. Le menu reste : l'élève peut toujours aller ailleurs.
// Le jour où un outil se présente (Atelier au 3e jour, définitions au 4e), sa grande carte est en tête d'écran et
// porte le bouton or ; les jours où c'est le tour du compte, sa proposition est sous les boutons, discrète.
function ecranDuJourVoulu() {
  if (document.documentElement.dataset.accueil === "premier" || typeof QUESTIONS === "undefined") return false;
  if (bilanQuestions(QUESTIONS).faites === 0 || premierJourDeRevision()) return false;
  return !calculerRythme().aujourdhui.atteint && !seancePassee();
}
function preparerEcranDuJour(el) {
  const html = document.documentElement;
  if (!el || !ecranDuJourVoulu()) {
    if (html.dataset.accueil === "jour") delete html.dataset.accueil;
    return false;
  }
  html.dataset.accueil = "jour";
  const r = calculerRythme(), a = r.aujourdhui, form = el.querySelector("form");
  // Le titre, et dessous : la dernière séance, ce qui est déjà fait aujourd'hui, la série
  const pseudo = lireProfil().pseudo;
  el.querySelector("h1").textContent = pseudo ? "On continue, " + pseudo + "\u00a0?" : "On continue\u00a0?";
  const mot = messageCompagnon(r), serie = phraseSerie(r), phrases = [];
  if (mot) phrases.push(mot.phrases[0]);
  if (a.n > 0) phrases.push("Déjà " + a.n + (a.n > 1 ? " questions" : " question") + " aujourd'hui.");
  phrases.push(/[.?!]$/.test(serie) ? serie : serie + ".");
  el.querySelector(".sous-titre").textContent = phrases.join(" ");
  montrerCompagnon(el.querySelector(".tete-compagnon"), mot ? mot.pose : "clin-doeil");
  // Les deux choix : le dernier nombre choisi reste coché, « Aléatoire » au départ
  const objectif = lireObjectif() || OBJECTIFS[1];
  form.querySelectorAll('input[name="objectif"]').forEach(i => { i.checked = Number(i.value) === objectif; });
  const lancer = form.querySelector('button[type="submit"]');
  lancer.textContent = a.n > 0 ? "Reprendre ma séance" : "Commencer ma séance";
  form.addEventListener("submit", e => {
    e.preventDefault();
    const o = form.querySelector('input[name="objectif"]:checked');
    choisirObjectif(o ? Number(o.value) : objectif);
    const m = form.querySelector('input[name="matiere"]:checked'), matiere = m ? matiereSeance(m.value) : null;
    location.href = "qcm.html#seance" + (matiere ? "/" + matiere : "");
  });
  el.querySelector("#ecran-jour-passer").addEventListener("click", () => {
    passerSeance(true);
    delete html.dataset.accueil;
    afficherCarteJour(document.getElementById("jour"));
    window.dispatchEvent(new Event("resize"));        // le banc d'optique était caché : il se recalcule
    window.scrollTo(0, 0);
    const titre = document.querySelector(".hero h1");
    if (titre) { titre.tabIndex = -1; titre.focus({ preventScroll: true }); }
  });
  // La proposition du jour : un outil (grande carte, en tête) ou, sinon, le compte (sous les boutons)
  const zoneOutil = el.querySelector("#ecran-jour-outil"), zoneCompte = el.querySelector("#ecran-jour-compte");
  // Le plan de la semaine, juste au-dessus des choix ; près des écrits, l'examen blanc du jour passe avant tout outil
  const zonePlan = el.querySelector("#ecran-jour-plan"), blocPlan = creerLignePlan();
  if (zonePlan && blocPlan) { zonePlan.appendChild(blocPlan); zonePlan.hidden = false; }
  const exam = examenBlancDuJour();
  const dec = exam ? null : decouverteDuJour();
  if (exam) {
    lancer.classList.add("secondaire");
    zoneOutil.hidden = false;
    zoneOutil.appendChild(creerOutilDuJour(carteExamenBlanc(exam), () => {
      zoneOutil.hidden = true;
      lancer.classList.remove("secondaire");
      lancer.focus({ preventScroll: true });
    }));
  } else if (dec) {
    lancer.classList.add("secondaire");               // ce jour-là, le bouton or est celui de l'outil
    zoneOutil.hidden = false;
    zoneOutil.appendChild(creerOutilDuJour(dec, () => {
      zoneOutil.hidden = true;
      lancer.classList.remove("secondaire");
      lancer.focus({ preventScroll: true });
    }));
  } else {
    const inv = invitationDuMoment("accueil");
    if (inv) {
      zoneCompte.hidden = false;
      zoneCompte.appendChild(creerInvitationCompte(inv, true, () => { zoneCompte.hidden = true; }));
    }
  }
  return true;
}

// ---------------- Affichage : carte de l'accueil et bloc du profil ----------------
// options.profil : le choix de l'objectif est toujours visible (pastilles), avec les explications
function afficherCarteJour(el, options) {
  if (!el) return;
  options = options || {};
  const objectif = lireObjectif();
  el.hidden = false;
  el.innerHTML = "";
  const creer = (balise, classe, texte) => {
    const n = document.createElement(balise);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  };

  // Le choix de l'objectif : à la première visite sur l'accueil, et toujours dans le profil
  const choix = () => {
    const groupe = creer("div", "objectif-choix");
    groupe.setAttribute("role", "radiogroup");
    groupe.setAttribute("aria-label", "Objectif du jour");
    OBJECTIFS.forEach(n => {
      const b = creer("button", "", String(n));
      b.type = "button";
      b.setAttribute("aria-label", n + " questions par jour");
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(n === objectif));
      b.addEventListener("click", () => {
        choisirObjectif(n);
        afficherCarteJour(el, options);
        // Le focus reste sur le choix (profil) ou passe au titre de la carte (accueil)
        const cible = el.querySelector('.objectif-choix [aria-checked="true"]') || el.querySelector(".jour-titre");
        if (cible) {
          if (!cible.matches("button")) cible.tabIndex = -1;
          cible.focus({ preventScroll: true });
        }
      });
      groupe.appendChild(b);
    });
    // Flèches du clavier dans le groupe, comme des boutons radio
    groupe.addEventListener("keydown", e => {
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
      const bs = [...groupe.querySelectorAll("button")];
      const i = bs.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      bs[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : bs.length - 1)) % bs.length].click();
    });
    return groupe;
  };

  if (!objectif && !options.profil) {
    el.classList.add("jour-premiere");
    el.append(
      creer("h2", "jour-titre", "Ton objectif du jour"),
      creer("p", "jour-aide", "Combien de questions par jour\u00a0? Compte environ une minute par question. Tu pourras changer dans ton profil."),
      choix()
    );
    return;
  }
  el.classList.remove("jour-premiere");

  if (options.profil) {
    el.append(
      creer("p", "aide", "Ton objectif du jour, gardé sur cet appareil. Chaque jour où tu l'atteins compte dans ta série ; un jour sans révision par semaine ne la casse pas."),
      choix()
    );
    if (!objectif) return;
  }

  const r = calculerRythme(), a = r.aujourdhui;

  // Accueil : le compagnon dit ce qui a été fait (dernière séance, effort des 7 derniers jours) ;
  // le jour d'un moment clé, il propose de créer un compte, ou il présente un outil (une seule invitation par jour)
  let inv = null, dec = null;
  if (!options.profil) {
    const ligneRecap = () => {
      const mot = messageCompagnon(r);
      if (!mot) return null;
      const ligneMot = creer("div", "jour-mot");
      const img = creer("img", "jour-compagnon");
      img.alt = "";
      img.width = 52;
      img.height = 52;
      montrerCompagnon(img, mot.pose);            // essentiel.js : DioSL, ou le personnage choisi dans le profil
      const p = creer("p", "jour-message");
      mot.phrases.forEach(t => p.appendChild(creer("span", "", t)));
      ligneMot.append(img, p);
      return ligneMot;
    };
    // Une fois la carte fermée (« Plus tard », croix), le récap reprend sa place et le focus va au titre
    const apresFermeture = () => {
      const recap = ligneRecap();
      if (recap) el.prepend(recap);
      const titre = el.querySelector(".jour-titre");
      if (titre) { titre.tabIndex = -1; titre.focus({ preventScroll: true }); }
    };
    // L'outil du jour (Atelier au 3e jour, définitions au 4e) passe avant la proposition de compte
    dec = decouverteDuJour();
    if (!dec) inv = invitationDuMoment("accueil");
    const enTete = inv ? creerInvitationCompte(inv, true, apresFermeture) : dec ? creerDecouverte(dec, apresFermeture) : ligneRecap();
    if (enTete) el.appendChild(enTete);
  }

  // L'anneau : les questions du jour sur l'objectif
  const ligne = creer("div", "jour-ligne");
  const boite = creer("div", "jour-anneau-boite");
  const svgNS = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("viewBox", "0 0 64 64");
  svg.setAttribute("class", "jour-anneau");
  svg.setAttribute("aria-hidden", "true");
  const rayon = 27, tour = 2 * Math.PI * rayon;
  ["jour-piste", "jour-plein"].forEach(c => {
    const cercle = document.createElementNS(svgNS, "circle");
    cercle.setAttribute("cx", "32"); cercle.setAttribute("cy", "32"); cercle.setAttribute("r", String(rayon));
    cercle.setAttribute("class", c);
    svg.appendChild(cercle);
  });
  const plein = svg.querySelector(".jour-plein");
  plein.style.strokeDasharray = tour.toFixed(2);
  plein.style.strokeDashoffset = tour.toFixed(2);
  boite.appendChild(svg);
  const nombre = creer("span", "jour-nombre");
  nombre.setAttribute("aria-hidden", "true");
  if (a.atteint) {
    nombre.classList.add("atteint");
    nombre.appendChild(creer("span", "ico i-valide"));
  } else {
    const chiffres = creer("span");
    chiffres.append(creer("b", "", String(a.n)), creer("small", "", "/" + a.objectif));
    nombre.appendChild(chiffres);
  }
  boite.appendChild(nombre);

  const texte = creer("div", "jour-texte");
  const passee = !a.atteint && seancePassee();       // « Passer pour aujourd'hui » a été choisi
  const titre = creer(options.profil ? "h3" : "h2", "jour-titre", a.atteint ? "Séance du jour faite" : passee ? "Séance du jour passée" : "Ta séance du jour");
  const resume = creer("span", "visuellement-cache", " (" + a.n + (a.n > 1 ? " questions faites" : " question faite") + " aujourd'hui sur " + a.objectif + ")");
  titre.appendChild(resume);
  // Objectif atteint : l'effort compte pour la série, et le résultat est écrit à côté (justes, à revoir)
  const detail = creer("p", "jour-detail", a.atteint ? "Objectif atteint\u00a0: " + phraseResultatJour(a) + "."
    : passee ? (a.n > 0 ? "Séance arrêtée à " + a.n + (a.n > 1 ? " questions" : " question") + " sur " + a.objectif + "." : "Pas de séance aujourd'hui.") + " Un jour manqué par semaine ne casse pas ta série."
    : a.n > 0 ? "Encore " + (a.objectif - a.n) + (a.objectif - a.n > 1 ? " questions" : " question") + " pour ton objectif. Pour l'instant\u00a0: " +
      a.justes + (a.justes > 1 ? " justes" : " juste") + " sur " + a.n + "."
    : "");                                   // séance pas commencée : le nombre de questions se choisit juste en dessous
  // Des réponses fausses aujourd'hui : un lien pour les refaire tout de suite (elles reviennent aussi demain)
  if (a.faux && idsRatesDuJour().length) {
    detail.append(" ");
    const lien = creer("a", "jour-erreurs", "Revoir mes erreurs");
    lien.href = "qcm.html#erreurs-du-jour";
    detail.appendChild(lien);
  }
  texte.append(titre, ...(detail.textContent ? [detail] : []), creer("p", "jour-serie", phraseSerie(r)));

  // La semaine, du lundi au dimanche, en petit banc d'optique : chaque jour est une lentille sur l'axe optique
  // (trait mixte). Objectif atteint : la lentille s'éclaire. Le rayon traverse les jours de la série en cours,
  // pause comprise, et s'arrête là où elle s'arrête ; il entre par la gauche si la série a commencé avant lundi.
  const ETATS = { ok: "objectif atteint", pause: "jour de pause", vide: "pas de révision", aujourdhui: "aujourd'hui, en cours", futur: "à venir" };
  const LENTILLE = '<svg class="lentille" viewBox="0 0 12 24" aria-hidden="true">' +
    '<path class="lentille-verre" d="M6 1.2Q11.4 12 6 22.8Q0.6 12 6 1.2Z"/><path class="lentille-reflet" d="M4.5 6.8Q3.6 12 4.5 17.2"/></svg>';
  const semaine = creer("ol", "semaine");
  semaine.setAttribute("aria-label", "Cette semaine");
  r.semaine.forEach((j, i) => {
    const li = creer("li", j.etat + (j.estAujourdhui ? " est-aujourdhui" : ""));
    li.style.setProperty("--i", i);
    li.title = j.nom.charAt(0).toUpperCase() + j.nom.slice(1) + " " + j.numero + "\u00a0: " + ETATS[j.etat];
    li.insertAdjacentHTML("beforeend", LENTILLE);
    const lettre = creer("span", "semaine-lettre", j.nom.charAt(0).toUpperCase());
    lettre.setAttribute("aria-hidden", "true");
    li.append(lettre, creer("span", "visuellement-cache", j.nom + " " + j.numero + "\u00a0: " + ETATS[j.etat]));
    semaine.appendChild(li);
  });
  const dansSerie = r.semaine.map((j, i) => (j.dansSerie ? i : -1)).filter(i => i >= 0);
  if (dansSerie.length && (dansSerie.length > 1 || r.serieAvantLundi)) {
    semaine.classList.add("avec-rayon");
    semaine.style.setProperty("--debut", r.serieAvantLundi ? -0.5 : dansSerie[0]);
    semaine.style.setProperty("--fin", dansSerie[dansSerie.length - 1]);
  }
  texte.appendChild(semaine);

  // L'action du jour. Objectif atteint : 5 minutes de plus si l'élève en veut encore. Sinon, chaque jour, les mêmes
  // questions qu'à la première visite : combien de questions (5, 10 ou 20 : c'est l'objectif, le dernier choix reste coché),
  // sur quelle matière (ses questions seulement) ou « Aléatoire » (le mélange : à revoir, puis l'Essentiel), puis « Commencer ».
  // « Passer pour aujourd'hui » replie le tout jusqu'au lendemain ; l'élève peut revenir dessus.
  ligne.append(boite, texte);
  const rafraichir = cible => {
    afficherCarteJour(el, options);
    const n = el.querySelector(cible) || el.querySelector(".jour-titre");
    if (n) { if (!n.matches("a, button")) n.tabIndex = -1; n.focus({ preventScroll: true }); }
  };
  const discret = (texte, action) => {
    const b = creer("button", "bouton-discret jour-passer", texte);
    b.type = "button";
    b.addEventListener("click", action);
    return b;
  };
  let suite = null;
  if (a.atteint) {
    const action = creer("a", "bouton secondaire jour-action");
    action.href = "qcm.html#cinq-minutes";
    const ico = creer("span", "ico i-chrono");
    ico.setAttribute("aria-hidden", "true");
    action.append(ico, "5 minutes de plus");
    ligne.appendChild(action);
  } else if (passee) {
    suite = discret("Faire ma séance quand même", () => {
      passerSeance(false);
      // Sur l'accueil, la séance du jour a son écran plein (preparerEcranDuJour) : on y retourne
      if (!options.profil && document.getElementById("ecran-jour") && ecranDuJourVoulu()) location.reload();
      else rafraichir(".jour-matiere");
    });
  } else {
    suite = creer("div", "jour-matieres");
    // Combien de questions : le profil a déjà ce choix juste au-dessus
    if (!options.profil) suite.append(creer("p", "jour-matieres-titre", "Combien de questions aujourd'hui\u00a0?"), choix());
    // Sur quelle matière : la matière cochée est gardée sur la carte (data-matiere) tant que la page reste ouverte
    const question = creer("p", "jour-matieres-titre", "Sur quelle matière\u00a0?");
    question.id = options.profil ? "jour-matieres-titre-profil" : "jour-matieres-titre";
    const choixMatiere = creer("div", "jour-matieres-choix");
    choixMatiere.setAttribute("role", "radiogroup");
    choixMatiere.setAttribute("aria-labelledby", question.id);
    const action = creer("a", (options.profil ? "bouton secondaire" : "bouton") + " jour-action", a.n > 0 ? "Reprendre ma séance" : "Commencer ma séance");
    const majMatiere = () => {
      const code = matiereSeance(el.dataset.matiere);
      choixMatiere.querySelectorAll("button").forEach(b => b.setAttribute("aria-checked", String((b.dataset.epreuve || null) === code)));
      action.href = "qcm.html#seance" + (code ? "/" + code : "");
    };
    // Sans matière : « Mon plan » (les thèmes de la semaine) dès le 2e jour de révision ; le premier jour, « Aléatoire »
    const sansMatiere = planVisible() ? "Mon plan" : "Aléatoire";
    MATIERES_SEANCE.concat([[null, sansMatiere]]).forEach(([code, nom]) => {
      const b = creer("button", "jour-matiere" + (code ? "" : " jour-aleatoire"), nom);
      b.type = "button";
      b.setAttribute("role", "radio");
      if (code) b.dataset.epreuve = code;             // la couleur de la matière (style.css)
      b.addEventListener("click", () => { el.dataset.matiere = code || ""; majMatiere(); });
      choixMatiere.appendChild(b);
    });
    // Flèches du clavier dans le groupe, comme des boutons radio
    choixMatiere.addEventListener("keydown", e => {
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return;
      const bs = [...choixMatiere.querySelectorAll("button")];
      const i = bs.indexOf(document.activeElement);
      if (i < 0) return;
      e.preventDefault();
      const b = bs[(i + (e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 : bs.length - 1)) % bs.length];
      b.click();
      b.focus({ preventScroll: true });
    });
    majMatiere();
    const actions = creer("div", "jour-actions");
    actions.append(action, discret("Passer pour aujourd'hui", () => { passerSeance(true); rafraichir(".jour-passer"); }));
    suite.append(question, choixMatiere, actions);
  }
  el.appendChild(ligne);
  // Le plan de la semaine (dès le 2e jour de révision), avant les choix de la séance
  const blocPlan = creerLignePlan(options.profil);
  if (blocPlan) el.appendChild(blocPlan);
  if (suite) el.appendChild(suite);

  if (options.profil) el.appendChild(creer("p", "jour-legende", "Lentille éclairée\u00a0: objectif atteint. En pointillé\u00a0: jour de pause, pris tout seul une fois par semaine. Le rayon traverse les jours de ta série."));

  // Compte à rebours et rythme conseillé
  const ex = calculerExamen(), phrase = phraseExamen(ex);
  if (phrase) {
    const p = creer("p", "jour-examen");
    if (phrase.fort) p.appendChild(creer("b", "", phrase.fort));
    p.append(phrase.texte);
    el.appendChild(p);
    if (options.profil && ex && ex.etat === "avant" && !ex.anneeIndiquee) {
      el.appendChild(creer("p", "jour-legende", "En 1re année\u00a0? Indique-le dans «\u00a0Où tu en es\u00a0»\u00a0: le compte à rebours visera la bonne session."));
    }
  }

  // Objectif atteint et pas encore de rappel : une ligne qui mène au rappel du profil
  if (!options.profil && a.atteint && !lireRappel() && !inv && !dec && invitationLibre("rappel")) {
    const p = creer("p", "jour-legende jour-rappel");
    const lien = creer("a", "", "Mettre un rappel chaque jour dans ton agenda");
    lien.href = "compte.html#rappel";
    p.appendChild(lien);
    el.appendChild(p);
    reserverInvitation("rappel");
  }

  // L'anneau se remplit (la transition est coupée si l'élève a désactivé les animations)
  const part = a.atteint ? 1 : Math.min(1, a.n / a.objectif);
  requestAnimationFrame(() => requestAnimationFrame(() => { plein.style.strokeDashoffset = (tour * (1 - part)).toFixed(2); }));
}

// ---------------- Première ouverture : « Cinq questions pour commencer » (index.html) ----------------
// Montrée quand l'élève n'a encore répondu à rien : html[data-accueil="premier"], posé dans le <head> de l'accueil
// avant l'affichage (rien ne change sans JavaScript). Le personnage (voir preparerChoixPersonnage), la matière des
// questions (ou « Aléatoire » : une par matière), deux réglages facultatifs (année, objectif), puis UNE action :
// 5 questions faciles (qcm.html#premiers-pas, ou #premiers-pas/U42 pour une matière).
// « Passer : je connais déjà le site » : localStorage « accueil » = "passe".
// Le personnage : proposé ici, le premier jour, et plus jamais ensuite (David, 13 nov. 2026) ; il reste modifiable dans
// le profil. Sept ronds sur une ligne, DioSL coché au départ. Un toucher l'enregistre dans le profil (comme la page du
// profil) : il remplace DioSL partout, dès la première question. La liste est celle de compte.js (window.AVATARS), un
// module chargé après ce fichier : les ronds sont donc posés quand la page a fini de charger.
function preparerChoixPersonnage(zone, apresChoix) {
  const persos = window.AVATARS || [];
  if (!zone || !persos.length || typeof window.cheminAvatar !== "function") return;
  const rangee = zone.querySelector(".perso-rangee"), nom = zone.querySelector("#premiers-perso-nom");
  const actuel = (typeof compagnon === "function" && compagnon()) || persos[0].id;
  rangee.innerHTML = "";
  persos.forEach(a => {
    const etiquette = document.createElement("label"), bouton = document.createElement("input");
    bouton.type = "radio";
    bouton.name = "personnage";
    bouton.value = a.id;
    bouton.checked = a.id === actuel;
    const rond = document.createElement("span"), img = document.createElement("img"), texte = document.createElement("span");
    rond.className = "rond";
    img.src = window.cheminAvatar(a.id);
    img.alt = "";
    img.width = 56;
    img.height = 56;
    rond.appendChild(img);
    texte.className = "visuellement-cache";
    texte.textContent = a.nom;
    etiquette.append(bouton, rond, texte);
    bouton.addEventListener("change", () => {
      enregistrerProfil(Object.assign(lireProfil(), { avatar: a.id }));
      nom.textContent = a.nom;
      window.dispatchEvent(new Event("progression-modifiee"));      // l'icône du profil suit le choix (compte.js)
      if (apresChoix) apresChoix();
    });
    if (bouton.checked) nom.textContent = a.nom;
    rangee.appendChild(etiquette);
  });
  zone.hidden = false;
}
function preparerPremiersPas(el) {
  if (!el) return;
  const form = el.querySelector("form");
  // Le personnage : la tête du haut de l'écran change avec le choix
  const poserPersonnages = () => preparerChoixPersonnage(el.querySelector("#premiers-perso"),
    () => montrerCompagnon(el.querySelector(".tete-compagnon"), "clin-doeil"));
  if (window.AVATARS) poserPersonnages();
  else document.addEventListener("DOMContentLoaded", poserPersonnages, { once: true });
  // Un élève qui revient sans avoir encore répondu retrouve ses réglages
  const annee = lireProfil().annee || "";
  form.querySelectorAll('input[name="annee"]').forEach(i => { i.checked = i.value === annee; });
  const objectif = lireObjectif() || OBJECTIFS[1];
  form.querySelectorAll('input[name="objectif"]').forEach(i => { i.checked = Number(i.value) === objectif; });
  form.addEventListener("submit", e => {
    e.preventDefault();
    const a = form.querySelector('input[name="annee"]:checked');
    if (a) enregistrerProfil(Object.assign(lireProfil(), { annee: a.value }));
    const o = form.querySelector('input[name="objectif"]:checked');
    choisirObjectif(o ? Number(o.value) : OBJECTIFS[1]);
    const m = form.querySelector('input[name="matiere"]:checked'), matiere = m ? matiereSeance(m.value) : null;
    location.href = "qcm.html#premiers-pas" + (matiere ? "/" + matiere : "");
  });
  el.querySelector("#premiers-passer").addEventListener("click", () => {
    try { localStorage.setItem("accueil", "passe"); } catch (e) {}
    delete document.documentElement.dataset.accueil;
    window.dispatchEvent(new Event("resize"));        // le banc d'optique était caché : il se recalcule
    window.scrollTo(0, 0);
    const titre = document.querySelector(".hero h1");
    if (titre) { titre.tabIndex = -1; titre.focus({ preventScroll: true }); }
  });
}

// =====================================================================
// Plan de révision : les thèmes de la semaine (validé par David le 13 nov. 2026)
// ---------------------------------------------------------------------
// Chaque lundi, 3 thèmes sont choisis, puis gardés toute la semaine (localStorage « plan », cet appareil) ;
// un thème maîtrisé en cours de semaine (80 % réussies, etatNotion) laisse sa place au suivant.
// Choix d'un thème = sa place au BTS × le besoin de l'élève :
//   - place au BTS : (tombe / sur) × coef de l'Essentiel ; un thème hors Essentiel vaut 0,3 × coef de l'épreuve ;
//   - besoin : la part de questions jamais faites (« neuf ») et la faiblesse (« faible » : 1 − taux de réussite,
//     plus les questions à revoir aujourd'hui, plus les erreurs du dernier examen blanc de moins de 45 jours),
//     dosés selon le temps qui reste avant les écrits (PHASES_PLAN) ; un thème maîtrisé ne garde que 15 % de son besoin.
// Au plus 2 thèmes par épreuve (1 seul loin des écrits ou pour un élève qui a fait moins de 30 questions : il voit
// tout le BTS). La séance « Mon plan » (questionsSeance sans matière) : à revoir, puis le thème du jour, puis les autres.
// Examen blanc proposé en grande carte sur l'écran du jour, à un rythme qui augmente quand les écrits approchent.
// Le plan apparaît à partir du 2e jour de révision (le premier jour, l'élève découvre le site).
// =====================================================================
const PLAN_THEMES = 3;
const PLAN_POIDS_HORS_ESSENTIEL = 0.3;
const PLAN_COEF = { U41: 2, U42: 3, U43: 3, U5: 6, U3: 5 };
// neuf / faible : dosage du besoin ; examen : un examen blanc tous les N jours (0 : pas proposé) ; parEpreuve : thèmes au plus
const PHASES_PLAN = {
  decouverte: { neuf: 1,    faible: 0.8, examen: 0,  parEpreuve: 1,
    texte: "Les écrits sont encore loin : le plan te fait d'abord voir tout le programme, en commençant par ce qui tombe le plus." },
  melange:    { neuf: 0.7,  faible: 1,   examen: 14, parEpreuve: 2,
    texte: "Moins de 3 mois avant les écrits : des thèmes nouveaux et tes points faibles, et un examen blanc toutes les deux semaines." },
  faibles:    { neuf: 0.25, faible: 1,   examen: 7,  parEpreuve: 2,
    texte: "Moins de 6 semaines avant les écrits : tes points faibles d'abord, et un examen blanc chaque semaine." },
  fin:        { neuf: 0,    faible: 1,   examen: 3,  parEpreuve: 2,
    texte: "Dernière ligne droite : plus de thème nouveau, tes points faibles et un examen blanc tous les 3 jours." },
  libre:      { neuf: 0.5,  faible: 1,   examen: 0,  parEpreuve: 2,
    texte: "Tes points faibles d'abord, puis ce qui tombe le plus au BTS." }
};
// Mêmes chiffres que FORMATS_EXAMEN.blanc (examen.js, chargé par qcm.html seulement) : pour l'annonce sur l'accueil
const PLAN_EXAMEN_SECOURS = { U42: [20, 40], U43: [20, 40], U5: [25, 50], U3: [25, 50] };
const NOMS_COURTS_PLAN = { U41: "Maths", U42: "OGP", U43: "ETSO", U5: "Vision", U3: "Éco" };
const deNomPlan = n => (/^[AEIOUÉ]/.test(n) ? "d'" : "de ") + n;      // « de Vision », « d'Éco », « d'OGP »

function lirePlanStocke() {
  try { return JSON.parse(localStorage.getItem("plan") || "null"); } catch (e) { return null; }
}
function ecrirePlan(plan) {
  try { localStorage.setItem("plan", JSON.stringify(plan)); } catch (e) {}
}
function joursEntre(a, b) { return Math.round((b - a) / 864e5); }

// La période : selon les jours avant les écrits (calculerExamen) ; « libre » si l'élève est déjà opticien ou pendant les écrits
function phasePlan(ex) {
  if (ex === undefined) ex = calculerExamen();
  if (!ex || ex.etat !== "avant") return "libre";
  return ex.jours > 90 ? "decouverte" : ex.jours > 42 ? "melange" : ex.jours > 14 ? "faibles" : "fin";
}

// Les erreurs du dernier examen blanc (moins de 45 jours), par thème : questions de la copie encore ratées aujourd'hui
function erreursExamenRecentes(prog) {
  let copies = {};
  try { copies = JSON.parse(localStorage.getItem("examen-dernier") || "{}") || {}; } catch (e) {}
  const erreurs = {}, limite = Date.now() - 45 * 864e5;
  Object.values(copies).forEach(c => {
    if (!c || !Array.isArray(c.ids) || !(Number(c.date) >= limite)) return;
    c.ids.forEach(id => {
      if (prog[id] !== 0) return;
      const q = QUESTIONS.find(x => x.id === id);
      if (q) erreurs[q.epreuve + "/" + q.theme] = (erreurs[q.epreuve + "/" + q.theme] || 0) + 1;
    });
  });
  return erreurs;
}

// Un bilan par thème (questions hors entraînement, cas compris, comme etatNotion)
function statsThemesPlan() {
  const prog = lireProgression(), dues = new Set(questionsARevoir().map(idQuestion));
  const erreurs = erreursExamenRecentes(prog), themes = new Map();
  QUESTIONS.forEach(q => {
    if (q.entrainement) return;
    const k = q.epreuve + "/" + q.theme;
    let s = themes.get(k);
    if (!s) {
      const ess = ESSENTIEL.find(n => n.epreuve === q.epreuve && n.theme === q.theme);
      s = { k, e: q.epreuve, t: q.theme, total: 0, tentees: 0, reussies: 0, aRevoir: 0, erreursExamen: erreurs[k] || 0, ess,
        rang: ess ? ESSENTIEL.indexOf(ess) : 999,
        poids: ess ? ess.tombe / ess.sur * ess.coef : (PLAN_COEF[q.epreuve] || 1) * PLAN_POIDS_HORS_ESSENTIEL };
      themes.set(k, s);
    }
    const id = idQuestion(q);
    s.total++;
    if (id in prog) { s.tentees++; if (prog[id] === 1) s.reussies++; }
    if (dues.has(id)) s.aRevoir++;
  });
  themes.forEach(s => { s.maitrise = s.total > 0 && s.reussies / s.total >= 0.8; });
  return [...themes.values()];
}

function scoreThemePlan(s, phase) {
  const p = PHASES_PLAN[phase];
  const neuf = s.total ? 1 - s.tentees / s.total : 0;
  const faible = s.tentees ? Math.min(1.5, (1 - s.reussies / s.tentees) + 0.15 * Math.min(3, s.aRevoir) + 0.2 * Math.min(3, s.erreursExamen)) : 0;
  return s.poids * (p.neuf * neuf + p.faible * faible) * (s.maitrise ? 0.15 : 1);
}

// n thèmes de plus, en dehors de ceux déjà pris (cles) et de ceux maîtrisés cette semaine (exclus)
function choisirThemesPlan(n, phase, stats, cles, exclus) {
  const total = stats.reduce((x, s) => x + s.tentees, 0);
  const parEpreuve = total < 30 ? 1 : PHASES_PLAN[phase].parEpreuve;
  const compte = {};
  stats.filter(s => cles.includes(s.k)).forEach(s => { compte[s.e] = (compte[s.e] || 0) + 1; });
  const libres = stats.filter(s => !cles.includes(s.k) && !exclus.includes(s.k));
  const ordre = (a, b) => b.score - a.score || a.rang - b.rang || b.poids - a.poids;
  let candidats = libres.map(s => Object.assign({ score: scoreThemePlan(s, phase) }, s)).filter(s => s.score > 0).sort(ordre);
  // Rien ne ressort (tout est maîtrisé, ou dernière ligne droite pour un élève qui n'a rien fait) : ce qui tombe le plus
  if (!candidats.length) candidats = libres.filter(s => !s.maitrise).map(s => Object.assign({ score: s.poids }, s)).sort(ordre);
  const pris = [];
  for (const s of candidats) {
    if (pris.length >= n) break;
    if ((compte[s.e] || 0) >= parEpreuve) continue;
    compte[s.e] = (compte[s.e] || 0) + 1;
    pris.push({ e: s.e, t: s.t });
  }
  return pris;
}

// Le plan de la semaine : { semaine (lundi), phase, themes: [{ e, t }], faits: ["U5/Worth"], examenFerme }
// null sans questions chargées. Écrit dans localStorage « plan » quand il change.
function planDeLaSemaine() {
  if (typeof QUESTIONS === "undefined" || typeof ESSENTIEL === "undefined" || !QUESTIONS.length) return null;
  const lundi = rythmeCle(rythmeLundi(rythmeMidi(0)));
  const phase = phasePlan();
  let plan = lirePlanStocke();
  const avant = JSON.stringify(plan);
  if (!plan || plan.semaine !== lundi || !Array.isArray(plan.themes)) plan = { semaine: lundi, themes: [], faits: [] };
  plan.phase = phase;
  plan.faits = Array.isArray(plan.faits) ? plan.faits : [];
  const stats = statsThemesPlan(), parCle = new Map(stats.map(s => [s.k, s]));
  // Un thème qui n'existe plus disparaît ; un thème maîtrisé cette semaine laisse sa place
  plan.themes = plan.themes.filter(t => {
    const s = t && parCle.get(t.e + "/" + t.t);
    if (s && s.maitrise && stats.some(x => !x.maitrise && !plan.themes.some(y => y.e === x.e && y.t === x.t))) {
      if (!plan.faits.includes(s.k)) plan.faits.push(s.k);
      return false;
    }
    return !!s;
  });
  if (plan.themes.length < PLAN_THEMES) {
    const cles = plan.themes.map(t => t.e + "/" + t.t);
    plan.themes = plan.themes.concat(choisirThemesPlan(PLAN_THEMES - plan.themes.length, phase, stats, cles, plan.faits));
  }
  if (JSON.stringify(plan) !== avant) ecrirePlan(plan);
  return plan;
}

// Le thème du jour en premier : un thème différent chaque jour, à tour de rôle
function themesDansLOrdreDuJour(plan) {
  const n = plan.themes.length;
  if (!n) return [];
  const i = rythmeMidi(0).getDay() % n;
  return plan.themes.slice(i).concat(plan.themes.slice(0, i));
}

// Le plan se montre à partir du 2e jour de révision
function planVisible() {
  return typeof QUESTIONS !== "undefined" && !premierJourDeRevision();
}

// Pourquoi ce thème : la raison principale, puis sa place dans les sujets
function raisonThemePlan(s) {
  const parts = [];
  if (!s.tentees) parts.push("jamais travaillé");
  else {
    if (s.erreursExamen) parts.push(s.erreursExamen + (s.erreursExamen > 1 ? " erreurs" : " erreur") + " au dernier examen blanc");
    parts.push(Math.round(s.reussies / s.tentees * 100) + " % de réussite");
    if (s.aRevoir) parts.push(s.aRevoir + (s.aRevoir > 1 ? " questions à revoir" : " question à revoir"));
    const neuves = s.total - s.tentees;
    if (neuves > 0) parts.push(neuves + (neuves > 1 ? " questions jamais faites" : " question jamais faite"));
  }
  if (s.ess) parts.push("tombé dans " + s.ess.tombe + " sujets sur " + s.ess.sur);
  else parts.push("tombe moins souvent");
  const t = parts.join(", ");
  return t.charAt(0).toUpperCase() + t.slice(1) + ".";
}

// ---------------- L'examen blanc du plan ----------------
function derniereCopieExamen() {
  let copies = {};
  try { copies = JSON.parse(localStorage.getItem("examen-dernier") || "{}") || {}; } catch (e) {}
  return Object.values(copies).filter(c => c && Number(c.date)).sort((a, b) => b.date - a.date)[0] || null;
}
// L'épreuve de l'examen : un examen commencé d'abord ; sinon les épreuves écrites jamais passées en examen blanc
// (la plus forte au coef d'abord), puis la plus faible note ; pas deux fois de suite la même.
function epreuveExamenPlan() {
  try {
    const enCours = JSON.parse(localStorage.getItem("examen-en-cours") || "{}") || {};
    const code = Object.keys(enCours).find(c => PLAN_EXAMEN_SECOURS[c]);
    if (code) return { code, enCours: true };
  } catch (e) {}
  let records = {};
  try { records = JSON.parse(localStorage.getItem("records") || "{}") || {}; } catch (e) {}
  const derniere = derniereCopieExamen();
  let codes = Object.keys(PLAN_EXAMEN_SECOURS);
  if (derniere && codes.length > 1) codes = codes.filter(c => c !== derniere.epreuve);
  const note = c => (typeof records[c + "/examen"] === "number" ? records[c + "/examen"] : -1);
  codes.sort((a, b) => note(a) - note(b) || (PLAN_COEF[b] || 0) - (PLAN_COEF[a] || 0));
  return { code: codes[0], enCours: false };
}
// { code, nom, questions, minutes, enCours, dansJours } : dansJours = 0 si c'est aujourd'hui. null : pas d'examen dans le plan.
function prochainExamenPlan(phase) {
  const intervalle = PHASES_PLAN[phase || phasePlan()].examen;
  if (!intervalle) return null;
  const choix = epreuveExamenPlan(), derniere = derniereCopieExamen();
  const format = typeof FORMATS_EXAMEN !== "undefined" && FORMATS_EXAMEN.blanc[choix.code];
  const [questions, minutes] = format ? [format.questions, format.minutes] : PLAN_EXAMEN_SECOURS[choix.code];
  const depuis = derniere ? joursEntre(new Date(derniere.date), new Date()) : Infinity;
  return { code: choix.code, nom: NOMS_COURTS_PLAN[choix.code], questions, minutes, enCours: choix.enCours,
    dansJours: choix.enCours ? 0 : Math.max(0, intervalle - depuis) };
}
// L'examen blanc à proposer aujourd'hui sur l'écran du jour (null : rien, ou fermé aujourd'hui)
function examenBlancDuJour() {
  if (!planVisible()) return null;
  const ex = prochainExamenPlan();
  if (!ex || ex.dansJours > 0) return null;
  const plan = lirePlanStocke();
  if (plan && plan.examenFerme === rythmeCle(rythmeMidi(0))) return null;
  return ex;
}
// La grande carte (creerOutilDuJour) : la croix la range jusqu'à demain
function carteExamenBlanc(ex) {
  reserverInvitation("examen");                          // la seule proposition du jour
  return {
    id: "examen-plan", titre: "examen blanc " + deNomPlan(ex.nom), icone: "i-chrono", lien: "qcm.html#" + ex.code + "/examen",
    invite: ex.enCours ? "Termine ton examen blanc " + deNomPlan(ex.nom) : "Aujourd'hui : examen blanc " + deNomPlan(ex.nom),
    texte: ex.enCours ? "Il t'attend avec le temps qui restait. Ta note sur 20 et tes points faibles à la fin."
      : ex.questions + " questions en " + ex.minutes + " minutes, sans correction avant la fin, comme le jour de l'examen. Tes erreurs passent dans ton plan.",
    bouton: ex.enCours ? "Reprendre l'examen" : "Commencer l'examen blanc",
    fermer: () => {
      const plan = lirePlanStocke() || {};
      plan.examenFerme = rythmeCle(rythmeMidi(0));
      ecrirePlan(plan);
    }
  };
}

// ---------------- Affichage : la ligne du plan, et « Pourquoi ces thèmes ? » ----------------
// Une ligne « Cette semaine : … Aujourd'hui : … », et un détail replié : la raison de chaque thème, la période, l'examen blanc.
function creerLignePlan(profil) {
  if (!planVisible()) return null;
  const plan = planDeLaSemaine();
  if (!plan || !plan.themes.length) return null;
  const creer = (balise, classe, texte) => {
    const n = document.createElement(balise);
    if (classe) n.className = classe;
    if (texte !== undefined) n.textContent = texte;
    return n;
  };
  const stats = new Map(statsThemesPlan().map(s => [s.k, s]));
  const nomTheme = t => t.t + " (" + NOMS_COURTS_PLAN[t.e] + ")";
  const bloc = creer("div", "plan-semaine");
  const ligne = creer("p", "plan-ligne");
  ligne.append(creer("b", "", "Cette semaine : "), plan.themes.map(nomTheme).join(", ") + ".");
  if (plan.themes.length > 1) ligne.append(" ", creer("span", "plan-jour", "Aujourd'hui : " + themesDansLOrdreDuJour(plan)[0].t + "."));
  const details = creer("details", "plan-pourquoi");
  const resume = creer("summary", "", "Pourquoi ces thèmes ?");
  const liste = creer("ul", "plan-raisons");
  plan.themes.forEach(t => {
    const s = stats.get(t.e + "/" + t.t);
    const li = creer("li");
    li.dataset.epreuve = t.e;
    li.append(creer("b", "", nomTheme(t)), " ", s ? raisonThemePlan(s) : "");
    liste.appendChild(li);
  });
  details.append(resume, liste, creer("p", "plan-regle", PHASES_PLAN[plan.phase].texte + " Le plan change chaque lundi, et un thème maîtrisé laisse sa place au suivant."));
  const ex = prochainExamenPlan(plan.phase);
  if (ex) details.appendChild(creer("p", "plan-regle", ex.enCours ? "Ton examen blanc " + deNomPlan(ex.nom) + " t'attend."
    : "Prochain examen blanc : " + ex.nom + ", " + (ex.dansJours === 0 ? "aujourd'hui." : ex.dansJours === 1 ? "demain." : "dans " + ex.dansJours + " jours.")));
  let compte = false;
  details.addEventListener("toggle", () => {
    if (details.open && !compte) { compte = true; window.compter?.("plan-pourquoi", "Plan de révision : « Pourquoi ces thèmes ? » ouvert"); }
  });
  bloc.append(ligne, details);
  if (profil) bloc.classList.add("plan-profil");
  return bloc;
}

// Pour le sous-titre de la séance « Mon plan » (qcm.html) : « Ton plan de la semaine : Worth, Conjugaison, Prix et marges. »
function phrasePlanSeance() {
  if (!planVisible()) return "";
  const plan = planDeLaSemaine();
  return plan && plan.themes.length ? " Ton plan de la semaine : " + themesDansLOrdreDuJour(plan).map(t => t.t).join(", ") + "." : "";
}
