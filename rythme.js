// =====================================================================
// Rythme : objectif du jour, série de jours, compte à rebours des écrits
// ---------------------------------------------------------------------
// Chargé après essentiel.js sur l'accueil, le profil et le QCM. Rien n'est envoyé en ligne :
// - localStorage « objectif » : 5, 10 ou 20 questions par jour, choisi par l'élève (cet appareil) ;
// - localStorage « jours » : { "AAAA-MM-JJ": { n, ok } } écrit par noterReponse (essentiel.js) :
//   n = réponses données ce jour-là sur cet appareil, ok = objectif atteint ce jour-là ;
// - localStorage « rappel » : heure du rappel quotidien mis dans l'agenda (fichier .ics fait sur l'appareil).
// Les jours se lisent aussi dans « progression-t » (heure de la dernière réponse à chaque question,
// synchronisée avec le compte) : un jour fait sur un autre appareil compte aussi.
// Un jour compte dans la série quand l'objectif est atteint. Un jour manqué par semaine
// (du lundi au dimanche) est pardonné tout seul. Jamais de reproche : une série tombée repart.
// =====================================================================

const OBJECTIFS = [5, 10, 20];
const TAILLE_CINQ_MINUTES = 5;               // une question prend environ une minute

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

// Réponses de chaque jour : le plus grand des deux comptes (mémo de cet appareil, progression-t)
function reponsesParJour() {
  const compte = {};
  const t = typeof lireTempsReponses === "function" ? lireTempsReponses() : {};
  for (const ms of Object.values(t)) {
    const n = Number(ms);
    if (!n) continue;
    const k = rythmeCle(new Date(n));
    compte[k] = (compte[k] || 0) + 1;
  }
  let memo = {};
  try { memo = JSON.parse(localStorage.getItem("jours") || "{}") || {}; } catch (e) {}
  const jours = {};
  for (const k of new Set([...Object.keys(compte), ...Object.keys(memo)])) {
    const m = memo[k] || {};
    jours[k] = { n: Math.max(compte[k] || 0, Number(m.n) || 0), ok: !!m.ok };
  }
  return jours;
}

// Série de jours : remonte depuis aujourd'hui. Aujourd'hui pas encore validé ne casse rien.
// Renvoie { serie, aujourdhui: { n, objectif, atteint }, semaine: [{ k, nom, etat }], repart }
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
    return { k, nom, numero: d.getDate(), etat, estAujourdhui: k === auj };
  });

  const n = jours[auj] ? jours[auj].n : 0;
  return {
    serie,
    aujourdhui: { n, objectif, atteint: valide(auj) },
    semaine,
    pauseHier: chaine.get(rythmeCle(rythmeMidi(-1))) === "pause",
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

// Pour le bilan d'une série du QCM : où en est l'objectif du jour (null si aucun objectif choisi)
function etatObjectifDuJour() {
  if (!lireObjectif()) return null;
  const r = calculerRythme(), a = r.aujourdhui;
  if (a.atteint) return { atteint: true, texte: "Objectif du jour atteint" + (r.serie > 1 ? " · " + r.serie + " jours de suite" : "") };
  return { atteint: false, texte: "Objectif du jour\u00a0: " + a.n + " / " + a.objectif };
}

// La séance « 5 minutes » : les questions à revoir d'abord, puis des questions jamais faites
// des notions les plus rentables (ordre de l'Essentiel), puis les ratées. Ni entraînement, ni cas.
function questionsCinqMinutes() {
  if (typeof QUESTIONS === "undefined") return [];
  const prog = lireProgression();
  const melange = liste => {
    const c = liste.slice();
    for (let i = c.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [c[i], c[j]] = [c[j], c[i]]; }
    return c;
  };
  const choisies = [], deja = new Set();
  const prendre = liste => {
    for (const q of liste) {
      if (choisies.length >= TAILLE_CINQ_MINUTES) return;
      const id = idQuestion(q);
      if (!deja.has(id)) { deja.add(id); choisies.push(q); }
    }
  };
  const base = QUESTIONS.filter(q => !q.entrainement && !q.cas);
  prendre(melange(questionsARevoir()));
  const jamais = base.filter(q => prog[idQuestion(q)] === undefined);
  if (typeof ESSENTIEL !== "undefined") ESSENTIEL.forEach(n => prendre(melange(jamais.filter(q => q.epreuve === n.epreuve && q.theme === n.theme))));
  prendre(melange(jamais));
  prendre(melange(base.filter(q => prog[idQuestion(q)] === 0)));
  prendre(melange(base));
  return choisies;
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
  // Objectif atteint : il est content ; des questions attendent et rien n'est fait : il réfléchit ; sinon il accueille.
  // Jamais de pose « choqué » ici : le compagnon ne boude pas et ne fait pas de reproche.
  const pose = r.aujourdhui.atteint ? "bouche-ouverte"
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

  // Accueil : le compagnon dit ce qui a été fait (dernière séance, effort des 7 derniers jours)
  if (!options.profil) {
    const mot = messageCompagnon(r);
    if (mot) {
      const ligneMot = creer("div", "jour-mot");
      const img = creer("img", "jour-compagnon");
      img.alt = "";
      img.width = 52;
      img.height = 52;
      montrerCompagnon(img, mot.pose);            // essentiel.js : DioSL, ou le personnage choisi dans le profil
      const p = creer("p", "jour-message");
      mot.phrases.forEach(t => p.appendChild(creer("span", "", t)));
      ligneMot.append(img, p);
      el.appendChild(ligneMot);
    }
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
  const titre = creer(options.profil ? "h3" : "h2", "jour-titre",
    a.atteint ? "Objectif du jour atteint" : a.n === 0 ? "Objectif du jour\u00a0: " + a.objectif + " questions" : "Encore " + (a.objectif - a.n) + (a.objectif - a.n > 1 ? " questions" : " question") + " pour l'objectif du jour");
  const resume = creer("span", "visuellement-cache", " (" + a.n + (a.n > 1 ? " questions faites" : " question faite") + " aujourd'hui sur " + a.objectif + ")");
  titre.appendChild(resume);
  texte.append(titre, creer("p", "jour-serie", phraseSerie(r)));

  // La semaine, du lundi au dimanche
  const ETATS = { ok: "objectif atteint", pause: "jour de pause", vide: "pas de révision", aujourdhui: "aujourd'hui, en cours", futur: "à venir" };
  const semaine = creer("ol", "semaine");
  semaine.setAttribute("aria-label", "Cette semaine");
  r.semaine.forEach(j => {
    const li = creer("li", j.etat + (j.estAujourdhui ? " est-aujourdhui" : ""));
    li.title = j.nom.charAt(0).toUpperCase() + j.nom.slice(1) + " " + j.numero + "\u00a0: " + ETATS[j.etat];
    li.append(creer("span", "", j.nom.charAt(0).toUpperCase()));
    li.firstChild.setAttribute("aria-hidden", "true");
    li.append(creer("span", "visuellement-cache", j.nom + " " + j.numero + "\u00a0: " + ETATS[j.etat]));
    semaine.appendChild(li);
  });
  texte.appendChild(semaine);

  const cinq = creer("a", "bouton secondaire jour-cinq");
  cinq.href = "qcm.html#cinq-minutes";
  const ico = creer("span", "ico i-chrono");
  ico.setAttribute("aria-hidden", "true");
  cinq.append(ico, "5 minutes");
  cinq.setAttribute("aria-label", "5 minutes\u00a0: 5 questions, celles à revoir d'abord");

  ligne.append(boite, texte, cinq);
  el.appendChild(ligne);

  if (options.profil) el.appendChild(creer("p", "jour-legende", "Rond plein\u00a0: objectif atteint. Rond en pointillé\u00a0: jour de pause, pris tout seul une fois par semaine."));

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
  if (!options.profil && a.atteint && !lireRappel()) {
    const p = creer("p", "jour-legende jour-rappel");
    const lien = creer("a", "", "Mettre un rappel chaque jour dans ton agenda");
    lien.href = "compte.html#rappel";
    p.appendChild(lien);
    el.appendChild(p);
  }

  // L'anneau se remplit (la transition est coupée si l'élève a désactivé les animations)
  const part = a.atteint ? 1 : Math.min(1, a.n / a.objectif);
  requestAnimationFrame(() => requestAnimationFrame(() => { plein.style.strokeDashoffset = (tour * (1 - part)).toFixed(2); }));
}
