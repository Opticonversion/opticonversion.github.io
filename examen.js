// ---------------- Examen blanc chronométré (qcm.html#U5/examen) ----------------
// Chargé par qcm.html AVANT son script principal : les fonctions de qcm.html (creerContexte, creerSchema,
// creerDifficulte, enregistrerRecord, palierDe, lancerConfettis…) et d'essentiel.js (corrigerCalcul,
// messageCalcul, noterReponse…) ne sont appelées qu'au moment de l'examen, quand tout est chargé.
//
// Déroulé : aucune correction avant la fin, retour possible sur chaque question, minuteur visible.
// À zéro, la copie est rendue toute seule. Fermer la page garde l'examen (localStorage « examen-en-cours ») :
// il reprend avec le temps qui restait.
// Fin : note sur 20 (QCM 1 point, calcul à taper 2 points, rien de retiré pour une erreur), bilan par thème,
// correction de chaque question. Les réponses données comptent dans la progression normale (noterReponse).
// Meilleure note : records["U5/examen"] en pourcentage (synchronisé avec le compte comme les autres records).
// Dernière copie corrigée : localStorage « examen-dernier » (ce navigateur seulement).
//
// Pour ajouter un autre format (ex. un examen complet plus long) : une entrée de plus dans FORMATS_EXAMEN,
// puis Examen.ouvrir(code, "complet"). Le reste (tirage, minuteur, bilan) ne change pas.
const FORMATS_EXAMEN = {
  blanc: {
    nom: "Examen blanc",
    // questions = total, cas pratique compris ; calculs = calculs à taper hors cas pratique ; cas = nombre de cas entiers
    U41: { questions: 15, minutes: 30, calculs: 3, cas: 1 },
    U42: { questions: 20, minutes: 40, calculs: 4, cas: 1 },
    U43: { questions: 20, minutes: 40, calculs: 0, cas: 1 },
    U5:  { questions: 25, minutes: 50, calculs: 5, cas: 1 },
    U3:  { questions: 25, minutes: 50, calculs: 5, cas: 1 }
  }
};

// Place de chaque thème dans les sujets. Par défaut, lue dans les fréquences des Spécificités
// (« 8/8 », « 3/5 »…). Ici, seulement les épreuves dont les Spécificités n'ont pas de fréquences.
// Tout le sujet d'Analyse de la vision suit le même déroulé : examen, réfraction, binoculaire, lentilles.
const POIDS_EXAMEN = {
  U5: { "Examen préliminaire": 1, "Masquage et phories": 1, "Réfraction": 0.8, "Lentilles": 0.8, "Anisométropie": 0.7, "Worth": 0.5, "Pathologie": 0.3 }
};
const POIDS_THEME_RARE = 0.2;   // un thème absent des fréquences : il sort de temps en temps

const Examen = (() => {
  const CLE_EN_COURS = "examen-en-cours", CLE_DERNIER = "examen-dernier";
  const SEUIL_FORT = 0.75, SEUIL_FAIBLE = 0.5;
  const ANNONCES = [[600, "Il reste 10 minutes."], [300, "Il reste 5 minutes."], [60, "Il reste 1 minute."]];

  let etat = null;          // l'examen en cours (sauvegardé à chaque changement)
  let questions = [];       // ses questions (objets de QUESTIONS), dans l'ordre de l'examen
  let minuteur = null, finPrevue = 0;
  let vuesCachees = false;  // les boutons « QCM / Shorts » cachés pendant l'examen

  // ---------- Petits outils ----------
  const lire = cle => { try { return JSON.parse(localStorage.getItem(cle) || "{}") || {}; } catch (e) { return {}; } };
  const ecrire = (cle, val) => { try { localStorage.setItem(cle, JSON.stringify(val)); } catch (e) {} };
  const points = q => (q.type === "calcul" ? 2 : 1);
  const parId = id => QUESTIONS.find(q => q.id === id);
  const formatDe = (code, nomFormat) => { const f = FORMATS_EXAMEN[nomFormat || "blanc"]; return f && f[code] ? f[code] : null; };
  const noteDe = pourcent => ecrireNombre(pourcent / 5, Number.isInteger(pourcent / 5) ? 0 : 1);
  const minutesTexte = s => { const m = Math.ceil(s / 60); return m + (m > 1 ? " minutes" : " minute"); };
  const el = (balise, classe, texte) => {
    const x = document.createElement(balise);
    if (classe) x.className = classe;
    if (texte !== undefined) x.textContent = texte;
    return x;
  };
  function tirer(liste, n) {
    const copie = liste.slice();
    for (let i = copie.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [copie[i], copie[j]] = [copie[j], copie[i]]; }
    return copie.slice(0, n);
  }
  function meilleureNote(code) {
    const r = lire("records")[code + "/examen"];
    return typeof r === "number" ? r : null;
  }

  // ---------- Poids des thèmes (place dans les sujets) ----------
  function poidsThemes(code) {
    const poids = Object.assign({}, POIDS_EXAMEN[code] || {});
    const fiche = (typeof SPECIFICITES !== "undefined" ? SPECIFICITES : []).find(s => s && s.epreuve === code);
    (fiche && fiche.blocs || []).forEach(b => {
      const lignes = b.type === "frequences" ? b.lignes : b.type === "etapes" ? b.etapes : null;
      (lignes || []).forEach(l => {
        const m = l && l.theme && String(l.frequence || "").match(/(\d+)\s*\/\s*(\d+)/);
        if (m && +m[2] > 0 && !(POIDS_EXAMEN[code] && l.theme in POIDS_EXAMEN[code])) poids[l.theme] = Math.max(poids[l.theme] || 0, +m[1] / +m[2]);
      });
    });
    return poids;
  }

  // ---------- Tirage des questions ----------
  // 1. un cas pratique entier (tiré au hasard) ; 2. les places restantes réparties entre les thèmes
  // selon leur place dans les sujets (méthode des plus forts quotients, un peu de hasard pour varier) ;
  // 3. dans ces places, le nombre de calculs à taper demandé, puis des QCM. Jamais de question d'entraînement.
  function composer(code, format) {
    const cas = tirer(casDe(code), format.cas || 0);
    const qCas = cas.flatMap(c => questionsDuCas(c.id));
    const reste = Math.max(0, format.questions - qCas.length);
    const pool = ordinairesDe(code).filter(q => q.type !== "pose");   // le calcul posé (étape par étape) reste hors examen
    const poids = poidsThemes(code);
    const themes = [...new Set(pool.map(q => q.theme))].map(t => ({
      t, w: (poids[t] || POIDS_THEME_RARE) * (0.85 + Math.random() * 0.3),
      qs: pool.filter(q => q.theme === t), n: 0, c: 0
    }));
    let places = Math.min(reste, pool.length);
    // Les thèmes présents à au moins un sujet sur deux ont au moins une question
    themes.filter(x => (poids[x.t] || 0) >= 0.5).sort((a, b) => b.w - a.w).forEach(x => { if (places > 0) { x.n = 1; places--; } });
    while (places > 0) {
      const libres = themes.filter(x => x.n < x.qs.length);
      if (!libres.length) break;
      libres.sort((a, b) => b.w / (b.n + 1) - a.w / (a.n + 1));
      libres[0].n++;
      places--;
    }
    // Les calculs à taper, dans les thèmes qui en ont, au prorata des places
    for (let k = 0; k < (format.calculs || 0); k++) {
      const possibles = themes.filter(x => x.n > x.c && x.qs.filter(q => q.type === "calcul").length > x.c);
      if (!possibles.length) break;
      let tirage = Math.random() * possibles.reduce((s, x) => s + (x.n - x.c), 0);
      const choisi = possibles.find(x => (tirage -= x.n - x.c) < 0) || possibles[possibles.length - 1];
      choisi.c++;
    }
    const ordinaires = themes.flatMap(x => {
      const calculs = tirer(x.qs.filter(q => q.type === "calcul"), x.c);
      const qcm = tirer(x.qs.filter(q => q.type !== "calcul"), x.n - calculs.length);
      const manque = x.n - calculs.length - qcm.length;   // pas assez de QCM : d'autres calculs du thème
      const autres = manque > 0 ? tirer(x.qs.filter(q => q.type === "calcul" && !calculs.includes(q)), manque) : [];
      return [...calculs, ...qcm, ...autres];
    });
    // Les questions mélangées, puis le cas pratique en dernière partie, étapes dans l'ordre
    return [...tirer(ordinaires, ordinaires.length), ...qCas];
  }

  function nouvelEtat(code, nomFormat) {
    const format = formatDe(code, nomFormat);
    const qs = composer(code, format);
    window.compter?.("examen-commence-" + code, "Examen blanc commencé (" + code + ")");     // statistiques anonymes (compter.js)
    const ordres = {};
    qs.forEach(q => { if (Array.isArray(q.choix)) ordres[q.id] = tirer(q.choix.map((_, i) => i), q.choix.length); });
    return { v: 1, epreuve: code, format: nomFormat || "blanc", ids: qs.map(q => q.id), ordres, reponses: {}, marques: {},
      duree: format.minutes * 60, restant: format.minutes * 60, numero: 0, debut: Date.now() };
  }

  function sauver() {
    if (!etat) return;
    const tous = lire(CLE_EN_COURS);
    tous[etat.epreuve] = etat;
    ecrire(CLE_EN_COURS, tous);
  }
  function enCours(code) {
    const e = lire(CLE_EN_COURS)[code];
    if (!e || !Array.isArray(e.ids) || !e.ids.length || !e.ids.every(id => parId(id))) return null;   // une question retirée du site : on ne reprend pas
    return e;
  }
  function oublierEnCours(code) {
    const tous = lire(CLE_EN_COURS);
    delete tous[code];
    ecrire(CLE_EN_COURS, tous);
  }
  const repondue = id => {
    const r = etat.reponses[id];
    return !!r && (r.i !== undefined || (typeof r.texte === "string" && r.texte.trim() !== ""));
  };

  // ---------- La page autour de l'examen ----------
  // Pendant l'examen (et sur son écran d'accueil) : seulement l'examen. Ni thèmes, ni Shorts, ni Spécificités.
  function preparerPage(code) {
    ["themes", "mise-en-avant", "specificites", "titre-echauffement", "progression-epreuve", "lien-entrainement", "lien-atelier"].forEach(id => {
      const x = document.getElementById(id);
      if (x) x.hidden = true;
    });
    const dispo = document.getElementById("disposition");
    dispo.classList.remove("vue-qcm", "vue-deux", "vue-shorts");
    dispo.classList.add("vue-qcm");
    document.querySelector(".vues").hidden = true;
    vuesCachees = true;
    const f = FORMATS_EXAMEN.blanc;
    document.getElementById("sous-titre").textContent = code + " · " + f.nom;
  }

  // Quitter l'examen (autre page du QCM) : le minuteur s'arrête, l'examen reste gardé
  function fermer() {
    arreterMinuteur();
    if (etat) sauver();
    etat = null;
    document.body.classList.remove("en-examen");
    const themes = document.getElementById("themes");
    if (themes) themes.hidden = false;
    if (vuesCachees) {
      vuesCachees = false;
      document.querySelector(".vues").hidden = false;
      let v = "deux";
      try { v = localStorage.getItem("vue") || "deux"; } catch (e) {}
      const dispo = document.getElementById("disposition");
      dispo.classList.remove("vue-qcm", "vue-deux", "vue-shorts");
      dispo.classList.add("vue-" + (["qcm", "deux", "shorts"].includes(v) ? v : "deux"));
    }
  }

  // ---------- Écran 1 : présentation ----------
  function ouvrir(code, nomFormat) {
    const format = formatDe(code, nomFormat);
    if (!format) return false;
    fermer();
    preparerPage(code);
    const zone = document.getElementById("zone");
    const garde = enCours(code);
    const meilleure = meilleureNote(code);
    const dernier = lire(CLE_DERNIER)[code];
    const nbCas = format.cas || 0;
    zone.innerHTML = "";
    const bloc = el("div", "examen-accueil");
    const h = el("h2", "titre-cas", FORMATS_EXAMEN[nomFormat || "blanc"].nom);
    const morceaux = [];
    if (nbCas) morceaux.push(nbCas > 1 ? nbCas + " cas pratiques" : "un cas pratique");
    if (format.calculs) morceaux.push(format.calculs + " calculs à taper");
    bloc.append(h, el("p", "examen-intro",
      format.questions + " questions en " + format.minutes + " minutes" + (morceaux.length ? ", dont " + morceaux.join(" et ") : "") +
      ". Les thèmes qui tombent le plus souvent au BTS ont le plus de questions. Chaque examen est tiré au hasard."));
    const regles = el("ul", "examen-regles");
    [
      "Aucune correction avant la fin, comme le jour de l'examen. Tu peux revenir sur chaque question et changer ta réponse.",
      "Un QCM vaut 1 point, un calcul à taper 2 points. Une erreur ne retire rien : réponds à tout.",
      "À la fin du temps, ta copie est rendue toute seule.",
      "Si tu fermes la page, l'examen t'attend avec le temps qui restait."
    ].forEach(t => regles.appendChild(el("li", "", t)));
    bloc.appendChild(regles);
    if (format.calculs || questionsDe(code).some(q => q.type === "calcul")) bloc.appendChild(el("p", "examen-calculatrice", "Sors ta calculatrice et une feuille de brouillon."));
    if (meilleure !== null) bloc.appendChild(el("p", "examen-meilleure", "Ta meilleure note : " + noteDe(meilleure) + " / 20"));
    const actions = el("div", "bilan-actions examen-actions");
    if (garde) {
      const nbRep = garde.ids.filter(id => { const r = garde.reponses[id]; return r && (r.i !== undefined || (r.texte || "").trim()); }).length;
      const reprendre = el("button", "bouton", "Reprendre l'examen");
      reprendre.onclick = () => demarrer(garde);
      const nouveau = el("button", "bouton secondaire", "Recommencer un nouvel examen");
      nouveau.onclick = () => { oublierEnCours(code); demarrer(nouvelEtat(code, nomFormat)); };
      actions.append(reprendre, nouveau);
      bloc.insertBefore(el("p", "examen-garde", "Ton examen est en cours : " + nbRep + " réponse" + (nbRep > 1 ? "s" : "") + " sur " + garde.ids.length + ", il reste " + minutesTexte(garde.restant) + "."), regles);
    } else {
      const go = el("button", "bouton", "Commencer l'examen");
      go.onclick = () => demarrer(nouvelEtat(code, nomFormat));
      actions.appendChild(go);
    }
    if (dernier && Array.isArray(dernier.ids) && dernier.ids.every(id => parId(id))) {
      const revoir = el("button", "bouton secondaire", "Revoir ma dernière copie");
      revoir.onclick = () => afficherResultat(dernier, false);
      actions.appendChild(revoir);
    }
    bloc.appendChild(actions);
    const retour = el("a", "examen-retour", "Retour aux questions de l'épreuve");
    retour.href = "#" + code;
    bloc.appendChild(retour);
    zone.appendChild(bloc);
    rejouerAnimation(zone);
    return true;
  }

  // ---------- Écran 2 : l'examen ----------
  function demarrer(e) {
    etat = e;
    questions = etat.ids.map(parId);
    if (questions.some(q => !q)) { oublierEnCours(etat.epreuve); ouvrir(etat.epreuve); return; }
    etat.numero = Math.min(Math.max(0, etat.numero || 0), questions.length - 1);
    sauver();
    document.body.classList.add("en-examen");
    const zone = document.getElementById("zone");
    zone.innerHTML =
      '<div class="examen-barre">' +
        '<p class="examen-temps"><span class="ico i-chrono" aria-hidden="true"></span><span class="visuellement-cache">Temps restant : </span><span class="examen-minuteur"></span></p>' +
        '<p class="examen-compte"></p>' +
        '<button class="bouton examen-rendre" type="button">Rendre ma copie</button>' +
      "</div>" +
      '<p class="visuellement-cache" role="status" id="examen-annonce"></p>' +
      '<div class="examen-question"></div>' +
      '<div class="examen-nav">' +
        '<button class="bouton secondaire examen-prec" type="button"><span class="ico i-gauche" aria-hidden="true"></span> Précédente</button>' +
        '<button class="bouton examen-suiv" type="button">Suivante <span class="ico i-droite" aria-hidden="true"></span></button>' +
      "</div>" +
      '<nav class="examen-grille" aria-label="Aller à une question"><p class="examen-grille-titre">Toutes les questions</p><ol></ol>' +
        '<p class="examen-legende"><span class="l-faite"></span> répondue <span class="l-vide"></span> sans réponse <span class="l-marque ico i-drapeau" aria-hidden="true"></span> à revoir</p></nav>' +
      '<div class="examen-confirmer" hidden></div>';
    zone.querySelector(".examen-rendre").onclick = demanderRendre;
    zone.querySelector(".examen-prec").onclick = () => aller(etat.numero - 1);
    zone.querySelector(".examen-suiv").onclick = () => {
      if (etat.numero < questions.length - 1) aller(etat.numero + 1); else demanderRendre();
    };
    const ol = zone.querySelector(".examen-grille ol");
    questions.forEach((q, i) => {
      const li = el("li");
      const b = el("button", "examen-case", String(i + 1));
      b.type = "button";
      b.onclick = () => aller(i);
      li.appendChild(b);
      ol.appendChild(li);
    });
    lancerMinuteur();
    afficher(true);        // le bouton cliqué a disparu : le focus va au titre de la question
  }

  function aller(i) {
    if (i < 0 || i >= questions.length) return;
    etat.numero = i;
    sauver();
    afficher(true);
  }

  function afficher(focaliser) {
    const zone = document.getElementById("zone");
    const q = questions[etat.numero];
    const boite = zone.querySelector(".examen-question");
    boite.innerHTML = "";
    zone.querySelector(".examen-confirmer").hidden = true;
    const tete = el("div", "examen-tete");
    const titre = el("h2", "examen-numero", "Question " + (etat.numero + 1) + " / " + questions.length);
    titre.tabIndex = -1;
    const pts = el("span", "examen-points", points(q) > 1 ? "2 points" : "1 point");
    const marque = el("button", "examen-marquer");
    marque.type = "button";
    marque.innerHTML = '<span class="ico i-drapeau" aria-hidden="true"></span> <span>À revoir</span>';
    marque.setAttribute("aria-pressed", etat.marques[q.id] ? "true" : "false");
    marque.onclick = () => {
      if (etat.marques[q.id]) delete etat.marques[q.id]; else etat.marques[q.id] = 1;
      marque.setAttribute("aria-pressed", etat.marques[q.id] ? "true" : "false");
      sauver();
      majGrille();
    };
    tete.append(titre, pts, marque);
    boite.appendChild(tete);

    const contexte = creerContexte(q);       // cas pratique : tout son contexte jusqu'à cette étape (qcm.html)
    if (contexte) boite.appendChild(contexte);
    const niveau = creerDifficulte(q);
    if (niveau) boite.appendChild(niveau);
    const enonce = el("p", "enonce");
    ecrireTexteMath(enonce, q.question);
    boite.appendChild(enonce);
    if (q.schemaQuestion) boite.appendChild(creerSchema(q.schemaQuestion, q.schemaTexte));

    if (q.type === "calcul") boite.appendChild(creerSaisieExamen(q));
    else boite.appendChild(creerChoixExamen(q));

    zone.querySelector(".examen-prec").disabled = etat.numero === 0;
    zone.querySelector(".examen-suiv").innerHTML = etat.numero < questions.length - 1
      ? 'Suivante <span class="ico i-droite" aria-hidden="true"></span>' : "Rendre ma copie";
    majGrille();
    rejouerAnimation(boite);
    if (focaliser) {
      titre.focus({ preventScroll: true });
      const haut = zone.getBoundingClientRect().top;
      if (haut < 0 || haut > innerHeight * 0.5) zone.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    }
  }

  // Les quatre propositions : un clic choisit (et on peut changer d'avis). Touches A à D comme dans le QCM.
  function creerChoixExamen(q) {
    const bloc = el("div", "choix examen-choix" + (q.choixSchemas ? " choix-images" : ""));
    bloc.setAttribute("role", "group");
    bloc.setAttribute("aria-label", "Propositions");
    const ordre = etat.ordres[q.id] || q.choix.map((_, i) => i);
    ordre.forEach((i, rang) => {
      const b = el("button");
      b.type = "button";
      b.dataset.lettre = "ABCD"[rang];
      if (q.choixSchemas) {
        const img = el("img");
        img.src = q.choixSchemas[i];
        img.alt = "Proposition " + "ABCD"[rang];
        img.loading = "lazy";
        b.appendChild(img);
      } else ecrireTexteMath(b, q.choix[i]);
      const choisie = () => etat.reponses[q.id] && etat.reponses[q.id].i === i;
      b.setAttribute("aria-pressed", choisie() ? "true" : "false");
      b.onclick = () => {
        if (choisie()) delete etat.reponses[q.id];     // un second clic retire la réponse
        else etat.reponses[q.id] = { i };
        bloc.querySelectorAll("button").forEach(x => x.setAttribute("aria-pressed", "false"));
        if (choisie()) b.setAttribute("aria-pressed", "true");
        sauver();
        majGrille();
      };
      bloc.appendChild(b);
    });
    const tout = document.createDocumentFragment();
    tout.append(bloc, el("p", "examen-aide-choix", "Touche une proposition pour la choisir ; un second appui efface ta réponse."));
    return tout;
  }

  // Calcul à taper : la valeur est gardée à chaque frappe, corrigée seulement à la fin
  function creerSaisieExamen(q) {
    const r = q.reponse;
    const form = el("form", "saisie-calcul saisie-qcm");
    form.innerHTML = '<label class="saisie-ligne"><span class="visuellement-cache"></span><input type="text" autocomplete="off" spellcheck="false" enterkeyhint="next" aria-describedby="examen-saisie-aide"><span class="saisie-unite"></span></label><p class="saisie-aide" id="examen-saisie-aide"></p>';
    form.querySelector(".visuellement-cache").textContent = "Ta réponse" + (r.unite ? " en " + r.unite : "");
    form.querySelector(".saisie-unite").textContent = r.unite || "";
    const dec = r.decimales === undefined ? 2 : r.decimales;
    form.querySelector(".saisie-aide").textContent = "Arrondi " + (dec === 0 ? "à l'unité" : "à " + ecrireNombre(10 ** -dec, dec) + " près") + (r.signe !== false ? " · avec son signe" : "") + ". Entrée : question suivante.";
    const champ = form.querySelector("input");
    // Le clavier « décimal » de l'iPhone n'a pas de signe moins : clavier normal si la réponse a un signe
    champ.inputMode = r.signe === false ? "decimal" : "text";
    champ.value = (etat.reponses[q.id] && etat.reponses[q.id].texte) || "";
    champ.oninput = () => {
      if (champ.value.trim()) etat.reponses[q.id] = { texte: champ.value.slice(0, 40) };
      else delete etat.reponses[q.id];
      sauver();
      majGrille();
    };
    form.onsubmit = e => {
      e.preventDefault();
      if (etat.numero < questions.length - 1) aller(etat.numero + 1); else demanderRendre();
    };
    return form;
  }

  function majGrille() {
    const zone = document.getElementById("zone");
    const cases = zone.querySelectorAll(".examen-case");
    let faites = 0;
    questions.forEach((q, i) => {
      const b = cases[i];
      if (!b) return;
      const fait = repondue(q.id), marque = !!etat.marques[q.id];
      if (fait) faites++;
      b.classList.toggle("faite", fait);
      b.classList.toggle("marquee", marque);
      if (i === etat.numero) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
      b.setAttribute("aria-label", "Question " + (i + 1) + (fait ? ", répondue" : ", sans réponse") + (marque ? ", à revoir" : ""));
    });
    const compte = zone.querySelector(".examen-compte");
    if (compte) {
      compte.textContent = faites + " / " + questions.length;
      compte.appendChild(el("span", "examen-compte-mot", " répondues"));   // caché sur les petits téléphones
    }
  }

  // ---------- Le minuteur ----------
  function lancerMinuteur() {
    arreterMinuteur();
    finPrevue = Date.now() + etat.restant * 1000;
    tic();
    minuteur = setInterval(tic, 1000);
  }
  function arreterMinuteur() {
    if (minuteur) clearInterval(minuteur);
    minuteur = null;
  }
  function tic() {
    if (!etat) return;
    const avant = etat.restant;
    etat.restant = Math.max(0, Math.ceil((finPrevue - Date.now()) / 1000));
    const affiche = document.querySelector("#zone .examen-minuteur");
    if (!affiche) { arreterMinuteur(); return; }
    const m = Math.floor(etat.restant / 60), s = etat.restant % 60;
    affiche.textContent = m + ":" + String(s).padStart(2, "0");
    const temps = affiche.closest(".examen-temps");
    temps.classList.toggle("bientot", etat.restant <= 300 && etat.restant > 60);
    temps.classList.toggle("urgent", etat.restant <= 60);
    // Lecteurs d'écran : seulement à 10, 5 et 1 minute de la fin
    const annonce = ANNONCES.find(([seuil]) => avant > seuil && etat.restant <= seuil);
    if (annonce) document.getElementById("examen-annonce").textContent = annonce[1];
    sauver();
    if (etat.restant <= 0) rendre(true);
  }

  // ---------- Rendre la copie ----------
  function demanderRendre() {
    const zone = document.getElementById("zone");
    const boite = zone.querySelector(".examen-confirmer");
    const vides = questions.filter(q => !repondue(q.id)).length;
    const marquees = questions.filter(q => etat.marques[q.id]).length;
    boite.innerHTML = "";
    const p = el("p", "", vides
      ? "Il reste " + vides + (vides > 1 ? " questions sans réponse." : " question sans réponse.") + " Une réponse au hasard ne coûte rien."
      : "Tu as répondu à tout." + (marquees ? " " + marquees + (marquees > 1 ? " questions sont marquées" : " question est marquée") + " à revoir." : ""));
    p.tabIndex = -1;
    const p2 = el("p", "doux", "Une fois rendue, ta copie est corrigée et tu ne peux plus la modifier.");
    const actions = el("div", "bilan-actions");
    const oui = el("button", "bouton", "Rendre ma copie");
    oui.type = "button";
    oui.onclick = () => rendre(false);
    const non = el("button", "bouton secondaire", "Continuer l'examen");
    non.type = "button";
    non.onclick = () => { boite.hidden = true; zone.querySelector(".examen-rendre").focus(); };
    actions.append(oui, non);
    boite.append(p, p2, actions);
    boite.hidden = false;
    boite.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
    p.focus({ preventScroll: true });
  }

  function corriger(e) {
    return e.ids.map(id => {
      const q = parId(id), r = e.reponses[id];
      let juste = false, calcul = null;
      if (q.type === "calcul") {
        if (r && typeof r.texte === "string" && r.texte.trim()) { calcul = corrigerCalcul(q.reponse, r.texte); juste = calcul.etat === "juste"; }
      } else juste = !!r && r.i === q.bonne;
      const vide = !r || (q.type === "calcul" ? !calcul || calcul.etat === "vide" : r.i === undefined);
      return { q, r, juste, vide, calcul, pts: juste ? points(q) : 0, max: points(q) };
    });
  }

  function rendre(auto) {
    if (!etat) return;
    arreterMinuteur();
    const e = etat;
    etat = null;
    document.body.classList.remove("en-examen");
    const lignes = corriger(e);
    // Les réponses données comptent dans la progression (Essentiel, « À revoir ») ; les questions laissées vides, non
    lignes.forEach(l => { if (!l.vide) noterReponse(l.q, l.juste, l.calcul ? { calcul: l.calcul } : { choix: l.r && l.r.i }); });
    const total = lignes.reduce((s, l) => s + l.max, 0), obtenus = lignes.reduce((s, l) => s + l.pts, 0);
    const pourcent = total ? Math.round(obtenus / total * 100) : 0;
    const record = enregistrerRecord(e.epreuve + "/examen", pourcent);    // qcm.html : garde le meilleur, synchronisé
    const copie = { v: 1, epreuve: e.epreuve, format: e.format, ids: e.ids, ordres: e.ordres, reponses: e.reponses,
      pourcent, duree: e.duree, utilise: e.duree - Math.max(0, e.restant), date: Date.now(), auto: !!auto };
    const derniers = lire(CLE_DERNIER);
    derniers[e.epreuve] = copie;
    ecrire(CLE_DERNIER, derniers);
    oublierEnCours(e.epreuve);
    if (window.Sons) Sons.fin(pourcent);
    // Statistiques anonymes (compter.js) : la note seulement en 3 tranches larges, jamais la note exacte
    const note = pourcent / 5, tranche = note < 8 ? ["moins-de-8", "moins de 8"] : note <= 12 ? ["8-a-12", "de 8 à 12"] : ["plus-de-12", "plus de 12"];
    window.compter?.("examen-rendu-" + e.epreuve + "-" + tranche[0], "Examen blanc rendu (" + e.epreuve + ", note " + tranche[1] + ")");
    afficherResultat(copie, true, record);
  }

  // ---------- Écran 3 : la note, le bilan par thème, la correction ----------
  function titreNote(note) {
    if (note >= 16) return "Très bonne copie";
    if (note >= 12) return "Bonne copie";
    if (note >= 10) return "La moyenne est là";
    if (note >= 8) return "Presque la moyenne";
    return "Encore du travail";
  }

  function afficherResultat(copie, fraiche, record) {
    const code = copie.epreuve;
    fermer();
    preparerPage(code);
    const zone = document.getElementById("zone");
    const lignes = corriger(copie);
    const total = lignes.reduce((s, l) => s + l.max, 0), obtenus = lignes.reduce((s, l) => s + l.pts, 0);
    const pourcent = copie.pourcent;
    const note = pourcent / 5;
    const palier = palierDe(pourcent);
    zone.innerHTML =
      '<div class="bilan examen-bilan palier-' + palier.nom + '">' +
        '<div class="bilan-tete">' +
          '<div class="anneau"><div class="anneau-int"><p class="score"><span class="examen-note">0</span><small>sur 20</small></p></div></div>' +
          '<img class="bilan-nounours" alt="" width="96" height="106">' +
        "</div>" +
        '<h2 class="bilan-titre"></h2><p class="bilan-sous"></p><div class="bilan-stats"></div><div class="bilan-actions"></div>' +
      "</div>";
    montrerCompagnon(zone.querySelector(".bilan-nounours"), palier.nounours);
    const titre = zone.querySelector(".bilan-titre");
    titre.textContent = titreNote(note);
    titre.tabIndex = -1;
    const vides = lignes.filter(l => l.vide).length;
    zone.querySelector(".bilan-sous").textContent =
      (copie.auto ? "Temps écoulé : ta copie a été rendue. " : "") +
      ecrireNombre(obtenus, 0) + (obtenus > 1 ? " points sur " : " point sur ") + total + ", soit " + noteDe(pourcent) + " / 20." +
      (vides ? " " + vides + (vides > 1 ? " questions laissées sans réponse." : " question laissée sans réponse.") : "");
    const stats = zone.querySelector(".bilan-stats");
    const medaille = (t, c) => stats.appendChild(el("span", "medaille " + (c || ""), t));
    if (copie.utilise) medaille("Temps utilisé : " + minutesTexte(copie.utilise) + " sur " + minutesTexte(copie.duree));
    if (fraiche && record && record.nouveau) medaille("Nouvelle meilleure note (avant : " + noteDe(record.ancien) + " / 20)", "or");
    else {
      const m = meilleureNote(code);
      if (m !== null && m > pourcent) medaille("Ta meilleure note : " + noteDe(m) + " / 20");
    }
    if (!fraiche) medaille("Copie du " + new Date(copie.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long" }));
    if (!stats.children.length) stats.remove();

    const actions = zone.querySelector(".bilan-actions");
    const bouton = (texte, classe, action) => { const b = el("button", "bouton " + (classe || ""), texte); b.type = "button"; b.onclick = action; actions.appendChild(b); };
    bouton("Faire un nouvel examen", "", () => { oublierEnCours(code); demarrer(nouvelEtat(code, copie.format)); });
    bouton("Retour à l'épreuve", "secondaire", () => { location.hash = code; });

    // Bilan par thème : à retravailler d'abord, puis en bonne voie, puis les points forts
    const parTheme = {};
    lignes.forEach(l => {
      const t = parTheme[l.q.theme] = parTheme[l.q.theme] || { theme: l.q.theme, pts: 0, max: 0 };
      t.pts += l.pts; t.max += l.max;
    });
    const groupes = [
      ["À retravailler", t => t.pts / t.max < SEUIL_FAIBLE, "faible"],
      ["En bonne voie", t => t.pts / t.max >= SEUIL_FAIBLE && t.pts / t.max < SEUIL_FORT, "moyen"],
      ["Tes points forts", t => t.pts / t.max >= SEUIL_FORT, "fort"]
    ];
    const bilan = el("div", "examen-themes");
    bilan.setAttribute("aria-labelledby", "examen-themes-titre");
    const hb = el("h3", "", "Bilan par thème");
    hb.id = "examen-themes-titre";
    bilan.appendChild(hb);
    groupes.forEach(([nom, test, classe]) => {
      const liste = Object.values(parTheme).filter(test).sort((a, b) => a.pts / a.max - b.pts / b.max);
      if (!liste.length) return;
      bilan.appendChild(el("h4", "examen-groupe " + classe, nom));
      const ul = el("ul", "examen-liste-themes");
      liste.forEach(t => {
        const li = el("li", "examen-theme " + classe);
        const haut = el("p", "examen-theme-haut");
        haut.append(el("b", "", t.theme), el("span", "", ecrireNombre(t.pts, 0) + " / " + t.max + (t.max > 1 ? " points" : " point")));
        const barre = el("span", "examen-theme-barre");
        barre.setAttribute("aria-hidden", "true");
        barre.appendChild(el("span")).style.width = Math.round(t.pts / t.max * 100) + "%";
        li.append(haut, barre);
        if (classe !== "fort") {
          const liens = el("p", "examen-theme-liens");
          if (ordinairesDe(code).some(q => q.theme === t.theme)) {
            const a = el("a", "", "Refaire le QCM");
            a.setAttribute("aria-label", "Refaire le QCM : " + t.theme);
            a.href = "#" + code + "/" + encodeURIComponent(t.theme);
            liens.appendChild(a);
          }
          {
            // Les définitions ne sont pas chargées sur qcm.html : la page Définitions ouvre le thème,
            // ou toute l'épreuve si le thème n'a pas de définition à lui
            const a = el("a", "", "Les définitions");
            a.setAttribute("aria-label", "Les définitions : " + t.theme);
            a.href = "definitions.html#" + code + "/" + encodeURIComponent(t.theme);
            liens.appendChild(a);
          }
          if (liens.childElementCount) li.appendChild(liens);
        }
        ul.appendChild(li);
      });
      bilan.appendChild(ul);
    });
    zone.appendChild(bilan);

    // La correction : les questions ratées ou vides d'abord, ouvertes ; les réussies dans un bloc à déplier
    const correction = el("div", "examen-correction");
    correction.setAttribute("aria-labelledby", "examen-correction-titre");
    const hc = el("h3", "", "Correction");
    hc.id = "examen-correction-titre";
    correction.appendChild(hc);
    const numeros = new Map(lignes.map((l, i) => [l.q.id, i + 1]));
    const ratees = lignes.filter(l => !l.juste), reussies = lignes.filter(l => l.juste);
    if (ratees.length) {
      const ol = el("ul", "erreurs examen-copie");
      ratees.forEach(l => ol.appendChild(ligneCorrection(l, numeros.get(l.q.id), copie)));
      correction.appendChild(ol);
    } else correction.appendChild(el("p", "doux", "Aucune erreur : toutes les questions sont justes."));
    if (reussies.length) {
      const det = el("details", "examen-reussies");
      det.appendChild(el("summary", "", (reussies.length > 1 ? "Les " + reussies.length + " questions réussies" : "La question réussie")));
      const ul = el("ul", "erreurs examen-copie");
      reussies.forEach(l => ul.appendChild(ligneCorrection(l, numeros.get(l.q.id), copie)));
      det.appendChild(ul);
      correction.appendChild(det);
    }
    zone.appendChild(correction);

    rejouerAnimation(zone);
    if (fraiche) lancerConfettis(zone.querySelector(".bilan"), palier.confettis);
    zone.scrollIntoView({ behavior: "auto", block: "start" });
    titre.focus({ preventScroll: true });

    // L'anneau se remplit et la note monte petit à petit (directement si les animations sont coupées)
    const anneau = zone.querySelector(".anneau"), texte = zone.querySelector(".examen-note");
    const fin = () => { anneau.style.setProperty("--p", pourcent); texte.textContent = noteDe(pourcent); };
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { fin(); return; }
    const debut = performance.now();
    (function etape(t) {
      const avance = Math.min(1, (t - debut) / 900), f = 1 - Math.pow(1 - avance, 3);
      anneau.style.setProperty("--p", Math.round(pourcent * f));
      texte.textContent = ecrireNombre(note * f, 1);
      if (avance < 1) requestAnimationFrame(etape); else fin();
    })(debut);
  }

  function ligneCorrection(l, numero, copie) {
    const q = l.q;
    const li = el("li", l.juste ? "juste" : l.vide ? "vide" : "faux");
    const tete = el("p", "examen-copie-tete");
    const cas = q.cas && casParId(q.cas);
    tete.textContent = "Question " + numero + " · " + q.theme + (cas ? " · cas « " + cas.titre + " », étape " + q.etape : "") + " · " +
      (l.juste ? l.max + (l.max > 1 ? " points" : " point") : "0 / " + l.max);
    const enonce = el("strong");
    ecrireTexteMath(enonce, q.question);
    li.append(tete, enonce);
    const ta = el("span", "examen-ta-reponse");
    if (l.vide) ta.textContent = "Pas de réponse";
    else if (q.type === "calcul") ta.textContent = "Ta réponse : " + l.r.texte.trim() + (q.reponse.unite ? " " + q.reponse.unite : "");
    else { ta.append("Ta réponse : "); const s = el("span"); ecrireTexteMath(s, q.choix[l.r.i]); ta.appendChild(s); }
    if (!l.juste) li.appendChild(ta);
    const bonne = el("span", "erreur-reponse");
    if (q.type === "calcul") bonne.textContent = l.calcul ? messageCalcul(q.reponse, l.calcul) : "La bonne valeur est " + ecrireNombre(q.reponse.valeur, q.reponse.decimales === undefined ? 2 : q.reponse.decimales, q.reponse.signe !== false) + (q.reponse.unite ? " " + q.reponse.unite : "") + ".";
    else ecrireTexteMath(bonne, "Bonne réponse : " + q.choix[q.bonne]);
    li.appendChild(bonne);
    const expl = el("span", "doux");
    ecrireTexteMath(expl, q.explication);
    li.appendChild(expl);
    if (q.schema) li.appendChild(creerSchema(q.schema, q.schemaTexte, l.juste || l.vide || q.type === "calcul" ? null : l.r.i));
    return li;
  }

  // Ce que la carte de la page de l'épreuve affiche : « 25 questions · 50 min · meilleure note 13,5 / 20 »
  function resume(code) {
    const f = formatDe(code);
    if (!f) return null;
    const garde = enCours(code), m = meilleureNote(code);
    return f.questions + " questions · " + f.minutes + " min" +
      (garde ? " · en cours, il reste " + minutesTexte(garde.restant) : m !== null ? " · meilleure note " + noteDe(m) + " / 20" : "");
  }

  return { ouvrir, fermer, resume, existe: code => !!formatDe(code),
    // Pour les tests (navigateur) : composer un examen sans l'afficher, finir l'examen en cours
    __composer: code => composer(code, formatDe(code)), __etat: () => etat, __rendre: () => rendre(false), __poids: poidsThemes };
})();
