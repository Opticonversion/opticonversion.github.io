// =====================================================================
// DÉFINITIONS (page definitions.html)
// ---------------------------------------------------------------------
// Les définitions viennent des fichiers definitions-XX.js (liste DEFINITIONS,
// déclarée dans epreuves.js). Chaque définition : id, epreuve, theme, terme,
// definition (seulement la phrase à réciter), explication (facultative : le complément pour comprendre, affiché
// plus petit, jamais à réciter), sessions (années où elle est tombée ; [] = probable), et
// indispensable: true pour les définitions « à savoir par cœur » : elles passent
// en tête de liste, en or, ont leur filtre et sont proposées en premier en révision.
// Mode révision : la carte montre le terme, l'élève récite, la retourne et se note.
// Les tiroirs (boîte de Leitner) : une carte « à revoir » va dans le tiroir 1 et revient quelques cartes plus loin
// (RETOUR_CARTE), jusqu'à ce qu'elle soit sue ; une carte sue monte d'un tiroir. Trois tiroirs seulement, pour que ça aille vite :
// à revoir (tout de suite), demain (1 jour de repos), acquis (elle repasse au bout de 3 jours, pour vérifier).
// À la fin d'un tour, un exercice : pour un terme, choisir la bonne définition parmi quatre cartes.
// Mémoire : localStorage « definitions » = { "D-U5-001": { s: 1 (je savais) ou 0 (à revoir), t: horodatage, b: tiroir 1 à 5 } }
// Gardée dans ce navigateur seulement (pas encore synchronisée avec le compte élève).
// Révision en cours : localStorage « definitions-seances » = { "U42": { pile: [ids qui restent], toutes: [ids], sues1, ratees: [ids] } }.
// Une révision quittée (changement de matière, « Arrêter », page fermée) reste en pause : la page de sa matière
// propose de la reprendre là où l'élève s'était arrêté.
// =====================================================================

(function () {
  const $ = id => document.getElementById(id);
  const DEFS = typeof DEFINITIONS !== "undefined" ? DEFINITIONS : [];

  // ---------------- Mémoire de révision ----------------
  const lireMemoire = () => { try { return JSON.parse(localStorage.getItem("definitions") || "{}"); } catch (e) { return {}; } };
  // Les tiroirs : trois seulement, pour qu'une définition soit acquise vite (deux bonnes réponses, sur deux jours).
  // Tiroir 1 : à revoir tout de suite. Tiroir 2 : revient demain. Tiroir 3 : acquis, repasse au bout de 3 jours.
  // Pour changer le rythme, il suffit de changer « jours » (ou d'ajouter un tiroir à la liste).
  const TIROIRS = [null, { nom: "à revoir", jours: 0 }, { nom: "demain", jours: 1 }, { nom: "acquis", jours: 3 }];
  const DERNIER = TIROIRS.length - 1;
  // Le tiroir d'une carte (0 = pas encore vue). Les anciennes notes n'ont pas de tiroir : sue = 2, à revoir = 1.
  const tiroirDe = etat => (!etat ? 0 : etat.b >= 1 ? Math.min(DERNIER, etat.b) : etat.s ? 2 : 1);
  // Une carte est « à voir » si elle est nouvelle, dans le tiroir 1, ou si son repos est fini
  const aVoir = (etat, maintenant) => tiroirDe(etat) <= 1 || maintenant - (etat.t || 0) >= TIROIRS[tiroirDe(etat)].jours * 86400000;
  function noter(id, savait) {
    const m = lireMemoire();
    const b = savait ? Math.min(DERNIER, Math.max(1, tiroirDe(m[id])) + 1) : 1;      // sue : un tiroir de plus ; à revoir : retour au tiroir 1
    m[id] = { s: savait ? 1 : 0, t: Date.now(), b };
    try { localStorage.setItem("definitions", JSON.stringify(m)); } catch (e) {}
  }

  // ---------------- État de l'affichage ----------------
  const epreuvesAvecDefs = EPREUVES.filter(e => DEFS.some(d => d.epreuve === e.code));
  let epreuve = null, theme = "Tous", recherche = "", tombeesSeules = false, parCoeurSeules = false;
  const parCoeur = d => d.indispensable === true;
  const MENTION = "À savoir par cœur";

  // Lecture de l'adresse : definitions.html#U5 ou #U5/Réfraction
  {
    const [code, th] = location.hash.slice(1).split("/");
    if (epreuvesAvecDefs.some(e => e.code === code)) { epreuve = code; if (th) theme = decodeURIComponent(th); }
  }
  if (!epreuve && epreuvesAvecDefs.length) epreuve = epreuvesAvecDefs[0].code;

  // Recherche sans tenir compte des accents ni des majuscules
  const simplifier = t => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const echapper = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Surligne le mot cherché dans un texte (en ignorant les accents)
  const avecMath = t => typeof t === "string" && (t.indexOf("[[") >= 0 || t.indexOf("\n") >= 0);
  function surligner(texte) {
    const q = simplifier(recherche.trim());
    if (q.length < 2) return echapper(texte);
    const simple = simplifier(texte);
    let res = "", i = 0, k;
    while ((k = simple.indexOf(q, i)) !== -1) {
      res += echapper(texte.slice(i, k)) + "<mark>" + echapper(texte.slice(k, k + q.length)) + "</mark>";
      i = k + q.length;
    }
    return res + echapper(texte.slice(i));
  }

  const defsEpreuve = () => DEFS.filter(d => d.epreuve === epreuve);
  function defsAffichees() {
    const q = simplifier(recherche.trim());
    const defs = defsEpreuve().filter(d =>
      (theme === "Tous" || d.theme === theme) &&
      (!tombeesSeules || (Array.isArray(d.sessions) && d.sessions.length > 0)) &&
      (!parCoeurSeules || parCoeur(d)) &&
      (!q || simplifier(d.terme + " " + d.definition + " " + (d.explication || "") + " " + d.theme).includes(q)));
    // Les « à savoir par cœur » d'abord, les autres ensuite (l'ordre du fichier est gardé dans chaque groupe)
    return defs.filter(parCoeur).concat(defs.filter(d => !parCoeur(d)));
  }
  // La mention dorée « À savoir par cœur » (une étoile dessinée, puis le texte)
  function mentionParCoeur() {
    const s = document.createElement("span");
    s.className = "def-coeur";
    s.innerHTML = '<span class="ico i-etoile" aria-hidden="true"></span>';
    s.append(MENTION);
    return s;
  }
  function badge(d) {
    const tombee = Array.isArray(d.sessions) && d.sessions.length > 0;
    const s = document.createElement("span");
    s.className = "def-badge " + (tombee ? "tombee" : "probable");
    s.textContent = tombee ? "★ Tombée en " + d.sessions.slice().sort().join(", ") : "Probable";
    s.title = tombee ? "Déjà demandée à l'écrit du BTS" : "Pas encore demandée, mais au programme";
    return s;
  }

  // « Utilisée dans les sujets 2018, 2021 » : la notion sert dans le sujet sans qu'on demande de la définir.
  // (N'influence ni le badge « Tombée » ni le filtre « déjà tombées », qui ne regardent que sessions.)
  function mentionUtilise(d) {
    if (!Array.isArray(d.utilise) || !d.utilise.length) return null;
    const p = document.createElement("span");
    p.className = "def-utilise";
    p.textContent = "Utilisée dans " + (d.utilise.length > 1 ? "les sujets " : "le sujet ") + d.utilise.slice().sort().join(", ");
    return p;
  }

  // ---------------- Les onglets d'épreuves et de thèmes ----------------
  function afficherEpreuves() {
    const zone = $("def-epreuves");
    zone.innerHTML = "";
    EPREUVES.forEach(e => {
      const n = DEFS.filter(d => d.epreuve === e.code).length;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "def-epreuve" + (e.code === epreuve ? " actif" : "");
      b.dataset.epreuve = e.code;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", e.code === epreuve);
      b.disabled = n === 0;
      b.innerHTML = '<b></b><span></span>';
      b.querySelector("b").textContent = e.court || e.code;
      b.querySelector("span").textContent = n ? n : "bientôt";
      b.title = e.nom;
      // Changer de matière mène toujours à la page de cette matière, même en pleine révision :
      // la révision en cours est déjà gardée (voir garderSeance), l'élève la reprendra en revenant.
      b.onclick = () => {
        epreuve = e.code; theme = "Tous"; majAdresse();
        $("ecran-revision").hidden = true; $("ecran-exercice").hidden = true; $("ecran-fin").hidden = true; $("ecran-liste").hidden = false;
        toutAfficher();
      };
      zone.appendChild(b);
    });
  }
  function afficherThemes() {
    const zone = $("def-themes");
    zone.innerHTML = "";
    const themes = ["Tous", ...new Set(defsEpreuve().map(d => d.theme))];
    if (!themes.includes(theme)) theme = "Tous";
    themes.forEach(t => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "theme" + (t === theme ? " actif" : "");
      const n = t === "Tous" ? defsEpreuve().length : defsEpreuve().filter(d => d.theme === t).length;
      b.textContent = t + " (" + n + ")";
      b.onclick = () => { theme = t; majAdresse(); toutAfficher(); };
      zone.appendChild(b);
    });
  }
  function majAdresse() {
    history.replaceState(null, "", "#" + epreuve + (theme === "Tous" ? "" : "/" + encodeURIComponent(theme)));
  }

  // ---------------- La liste ----------------
  function afficherListe() {
    const liste = $("def-liste"), defs = defsAffichees(), m = lireMemoire();
    const nbCoeur = defs.filter(parCoeur).length;
    liste.innerHTML = "";
    $("def-compte").textContent = defs.length === 0
      ? "Aucune définition ne correspond. Essaie un autre mot, ou enlève un filtre."
      : defs.length + " définition" + (defs.length > 1 ? "s" : "") + (tombeesSeules ? " déjà tombée" + (defs.length > 1 ? "s" : "") : "")
        + (parCoeurSeules ? " à savoir par cœur" : nbCoeur ? ", dont " + nbCoeur + " à savoir par cœur" : "");
    // Deux groupes, chacun avec son titre, dès que la liste mélange les deux
    const deuxGroupes = nbCoeur > 0 && nbCoeur < defs.length;
    const titreGroupe = (nom, nombre) => {
      const li = document.createElement("li");
      li.className = "def-groupe";
      li.innerHTML = '<span class="def-groupe-nom"></span><span class="def-groupe-nb"></span>';
      li.querySelector(".def-groupe-nom").textContent = nom;
      li.querySelector(".def-groupe-nb").textContent = nombre;
      liste.appendChild(li);
    };
    defs.forEach((d, rang) => {
      if (deuxGroupes && rang === 0) titreGroupe(MENTION, nbCoeur);
      if (deuxGroupes && rang === nbCoeur) titreGroupe("Les autres définitions", defs.length - nbCoeur);
      const li = document.createElement("li");
      li.className = "def" + (parCoeur(d) ? " par-coeur" : "");
      li.innerHTML = '<div class="def-haut"><h2 class="def-terme"></h2></div><p class="def-texte"></p><div class="def-bas"><span class="def-theme"></span></div>';
      // L'explication : sous la phrase à réciter, plus petite et plus discrète (elle aide à comprendre, on ne la récite pas)
      if (d.explication) {
        const ex = document.createElement("p");
        ex.className = "def-explication";
        ex.innerHTML = "<b>Pour comprendre :</b> " + (avecMath(d.explication) ? texteMathHTML(d.explication) : surligner(d.explication));
        li.querySelector(".def-bas").before(ex);
      }
      li.querySelector(".def-terme").innerHTML = surligner(d.terme);
      li.querySelector(".def-texte").innerHTML = avecMath(d.definition) ? texteMathHTML(d.definition) : surligner(d.definition);
      li.querySelector(".def-theme").textContent = d.theme;
      if (parCoeur(d)) li.querySelector(".def-bas").prepend(mentionParCoeur());
      li.querySelector(".def-haut").appendChild(badge(d));
      const utilise = mentionUtilise(d);
      if (utilise) li.querySelector(".def-haut").after(utilise);
      const etat = m[d.id];
      if (etat) {
        const e = document.createElement("span");
        e.className = "def-etat " + (etat.s ? "sue" : "arevoir");
        e.textContent = etat.s ? "✓ Sue · tiroir " + tiroirDe(etat) : "↻ À revoir · tiroir 1";
        li.querySelector(".def-bas").appendChild(e);
      }
      liste.appendChild(li);
    });
    // Barre : définitions sues (« je savais ») et marquées à revoir, parmi celles affichées
    const bilan = { total: defs.length, faites: defs.filter(d => m[d.id]).length, reussies: defs.filter(d => m[d.id] && m[d.id].s).length };
    const zone = $("def-progression");
    zone.innerHTML = "";
    const maintenant = Date.now();
    const nouvelles = bilan.total - bilan.faites, dues = defs.filter(d => aVoir(m[d.id], maintenant)).length;
    if (defs.length && typeof creerBarreProgression === "function") {
      zone.appendChild(creerBarreProgression(bilan, {
        titre: "Ta révision",
        detail: bilan.faites === 0 ? "Pas encore révisées : lance le mode révision !"
          : dues + " à voir aujourd'hui" + (nouvelles ? ", dont " + nouvelles + " pas encore vue" + (nouvelles > 1 ? "s" : "") : "") + (defs.length - dues ? " · " + (defs.length - dues) + " au repos dans " + (defs.length - dues > 1 ? "leurs tiroirs" : "son tiroir") : "")
      }));
    }
    // Les tiroirs : combien de cartes dans chacun (parmi celles affichées)
    if (defs.length && bilan.faites) {
      const rangee = document.createElement("div");
      rangee.className = "tiroirs";
      rangee.setAttribute("role", "img");
      const comptes = TIROIRS.slice(1).map((t, i) => defs.filter(d => tiroirDe(m[d.id]) === i + 1).length);
      rangee.setAttribute("aria-label", "Tes tiroirs : " + comptes.map((n, i) => n + " dans le tiroir " + (i + 1) + " (" + TIROIRS[i + 1].nom + ")").join(", "));
      comptes.forEach((n, i) => {
        const t = document.createElement("div");
        t.className = "tiroir" + (n ? "" : " vide") + (i === 0 && n ? " a-revoir" : "");
        t.innerHTML = '<span class="tiroir-poignee"></span><b></b><small></small>';
        t.querySelector("b").textContent = n;
        t.querySelector("small").textContent = TIROIRS[i + 1].nom;
        rangee.appendChild(t);
      });
      zone.appendChild(rangee);
    }
    // Une révision en pause dans cette matière : on propose de la reprendre (c'est alors le bouton doré)
    const pause = seanceEnPause(epreuve);
    $("def-reprise").hidden = !pause;
    if (pause) $("def-reprise-texte").textContent = "Révision en pause : il te reste " + pause.pile.length + (pause.pile.length > 1 ? " cartes" : " carte") + " sur " + pause.toutes.length + ".";
    $("def-reviser").classList.toggle("secondaire", !!pause);
    // Deux boutons quand la liste mélange les deux groupes : les « à savoir par cœur » en premier (bouton doré), puis tout
    const icone = '<span class="ico i-cartes" aria-hidden="true"></span> ';
    // Le bouton doré ne prend que les cartes « à voir » (nouvelles, tiroir 1, ou repos fini) : c'est le principe des
    // tiroirs. « Tout réviser » reprend tout, cartes au repos comprises.
    const choix = paquetPropose(defs, m, maintenant), n = choix.cartes.length;
    $("def-reviser").disabled = defs.length === 0;
    $("def-reviser").innerHTML = icone + "Réviser " + (choix.parCoeur ? (n > 1 ? "les " + n : "la définition") + " à savoir par cœur" : n > 1 ? "ces " + n + " définitions" : "cette définition");
    $("def-reviser-tout").hidden = n === defs.length;
    $("def-reviser-tout").textContent = "Tout réviser (" + defs.length + ")";
    $("def-repos").hidden = !choix.repos;
    $("def-repos").textContent = choix.toutAuRepos ? "Tout est au repos dans les tiroirs : rien à voir aujourd'hui, mais tu peux quand même faire un tour."
      : choix.repos + (choix.repos > 1 ? " cartes sont" : " carte est") + " au repos dans " + (choix.repos > 1 ? "leurs tiroirs" : "son tiroir") + " : " + (choix.repos > 1 ? "elles reviendront" : "elle reviendra") + " le moment venu.";
  }
  // Ce que le bouton doré fait réviser, dans l'ordre : les « à savoir par cœur » à voir aujourd'hui ; sinon toutes
  // les cartes à voir aujourd'hui ; et si tout est au repos, un tour libre (les « à savoir par cœur », ou tout).
  function paquetPropose(defs, m, maintenant) {
    const due = d => aVoir(m[d.id], maintenant);
    const coeur = defs.filter(parCoeur), melange = coeur.length > 0 && coeur.length < defs.length;
    const coeurDues = coeur.filter(due), toutesDues = defs.filter(due);
    if (melange && coeurDues.length) return { cartes: coeurDues, parCoeur: true, repos: coeur.length - coeurDues.length, toutAuRepos: false };
    if (toutesDues.length) return { cartes: toutesDues, parCoeur: false, repos: defs.length - toutesDues.length, toutAuRepos: false };
    return { cartes: melange ? coeur : defs, parCoeur: melange, repos: defs.length, toutAuRepos: true };
  }
  function toutAfficher() { afficherEpreuves(); afficherThemes(); afficherListe(); }

  // ---------------- Le mode révision ----------------
  // pile : les cartes qui restent à voir, dans l'ordre (la première est à l'écran). Une carte « à revoir » y retourne
  // quelques cartes plus loin. toutes : les cartes du tour. sues1 : sues du premier coup. ratees : celles qui ont dû revenir.
  let pile = [], toutes = [], sues1 = 0, ratees = [];
  // Une carte pas sue revient après ce nombre d'autres cartes (à la fin s'il en reste moins) : assez tôt pour que
  // l'élève s'en souvienne encore, assez tard pour qu'il doive la retrouver de mémoire. Pour changer : ce nombre.
  const RETOUR_CARTE = 4;
  const melanger = t => { for (let i = t.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [t[i], t[j]] = [t[j], t[i]]; } return t; };

  // ----- La révision en cours est gardée après chaque carte, une par matière -----
  const lireSeances = () => { try { return JSON.parse(localStorage.getItem("definitions-seances") || "{}") || {}; } catch (e) { return {}; } };
  const ecrireSeances = s => { try { localStorage.setItem("definitions-seances", JSON.stringify(s)); } catch (e) {} };
  function garderSeance() {
    if (!toutes.length) return;
    const s = lireSeances(), ids = t => t.map(d => d.id);
    s[toutes[0].epreuve] = { pile: ids(pile), toutes: ids(toutes), sues1, ratees: ids(ratees) };
    ecrireSeances(s);
  }
  function oublierSeance(code) {
    const s = lireSeances();
    if (s[code] === undefined) return;
    delete s[code];
    ecrireSeances(s);
  }
  // La révision en pause d'une matière, remise en état (ou null). Une définition retirée du site depuis est sautée.
  // Elle n'est proposée que si l'élève avait déjà répondu à une carte au moins.
  function seanceEnPause(code) {
    const g = lireSeances()[code];
    if (!g || !Array.isArray(g.pile) || !Array.isArray(g.toutes)) return null;
    const trouver = id => DEFS.find(d => d.id === id && d.epreuve === code), liste = t => (Array.isArray(t) ? t : []).map(trouver).filter(Boolean);
    const p = liste(g.pile), t = liste(g.toutes), r = liste(g.ratees);
    if (!p.length || (p.length >= t.length && !r.length)) return null;
    return { pile: p, toutes: t, ratees: r, sues1: Math.max(0, Math.min(Number(g.sues1) || 0, t.length)) };
  }

  function lancerRevision(defs, reprise) {
    if (reprise) {
      // On reprend là où l'élève s'était arrêté : même pile, même carte
      pile = reprise.pile; toutes = reprise.toutes; sues1 = reprise.sues1; ratees = reprise.ratees;
    } else {
      // L'ordre des tiroirs : d'abord le tiroir 1 (à revoir), puis les cartes jamais vues, puis les tiroirs suivants ;
      // et dans chacun de ces paquets, les « à savoir par cœur » passent avant les autres.
      const m = lireMemoire(), rang = d => { const b = tiroirDe(m[d.id]); return (b === 1 ? 0 : b === 0 ? 1 : b) * 2 + (parCoeur(d) ? 0 : 1); };
      pile = [...new Set(defs.map(rang))].sort((x, y) => x - y).flatMap(g => melanger(defs.filter(d => rang(d) === g)));
      toutes = pile.slice(); sues1 = 0; ratees = [];
      garderSeance();                    // une nouvelle révision remplace celle qui était en pause dans cette matière
    }
    $("ecran-liste").hidden = true;
    $("ecran-fin").hidden = true;
    $("ecran-exercice").hidden = true;
    $("ecran-revision").hidden = false;
    montrerCarte();
    $("ecran-revision").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function montrerCarte() {
    const d = pile[0], revient = ratees.includes(d);
    $("def-avancement").textContent = "Reste " + pile.length + (pile.length > 1 ? " cartes" : " carte");
    $("def-barre").style.width = Math.round((toutes.length - pile.length) / toutes.length * 100) + "%";
    $("def-carte").classList.remove("retournee");
    $("def-annonce").textContent = "";
    $("def-carte").classList.toggle("par-coeur", parCoeur(d));
    $("def-carte-theme").textContent = $("def-carte-theme-2").textContent = d.theme + (parCoeur(d) ? " · " + MENTION : "");
    $("def-carte-terme").textContent = $("def-carte-terme-2").textContent = d.terme;
    ecrireTexteMath($("def-carte-definition"), d.definition);
    $("def-carte-explication").hidden = !d.explication;
    ecrireTexteMath($("def-carte-explication"), d.explication ? "Pour comprendre : " + d.explication : "");
    $("def-carte-badge").replaceChildren(...[badge(d), mentionUtilise(d)].filter(Boolean));
    $("def-carte-retour").hidden = !revient;          // « Elle revient » : la carte n'était pas sue tout à l'heure
    $("def-actions-recto").hidden = false;
    $("def-actions-verso").hidden = true;
    $("def-retourner").focus({ preventScroll: true });
  }
  function retourner() {
    if ($("ecran-revision").hidden || $("def-carte").classList.contains("retournee")) return;
    $("def-carte").classList.add("retournee");
    $("def-annonce").textContent = pile[0].terme + " : " + texteMathLu(pile[0].definition) + (pile[0].explication ? " Pour comprendre : " + texteMathLu(pile[0].explication) : "");
    $("def-actions-recto").hidden = true;
    $("def-actions-verso").hidden = false;
    $("def-savais").focus({ preventScroll: true });
  }
  function repondre(savait) {
    if (!$("def-carte").classList.contains("retournee")) return;
    const d = pile.shift();
    noter(d.id, savait);
    if (savait) { if (!ratees.includes(d)) sues1++; }
    else {
      // Pas sue : elle retourne dans la pile, quelques cartes plus loin, et reviendra dans ce tour jusqu'à être sue
      if (!ratees.includes(d)) ratees.push(d);
      pile.splice(Math.min(RETOUR_CARTE, pile.length), 0, d);
    }
    if (pile.length) { garderSeance(); if (savait && window.Sons) Sons.juste(); montrerCarte(); }
    else terminer();
  }
  // Boutons de l'écran de fin
  function boutonsFin(liste) {
    const actions = $("def-fin-actions");
    actions.innerHTML = "";
    liste.forEach(([texte, classe, action]) => { const b = document.createElement("button"); b.type = "button"; b.className = "bouton " + classe; b.textContent = texte; b.onclick = action; actions.appendChild(b); });
    $("ecran-fin").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function terminer() {
    oublierSeance(toutes[0].epreuve);      // tour fini : plus rien à reprendre
    window.compter?.("definitions-finies-" + toutes[0].epreuve, "Révision de définitions finie (" + toutes[0].epreuve + ")");     // statistiques anonymes (compter.js)
    $("ecran-revision").hidden = true;
    $("ecran-fin").hidden = false;
    const total = toutes.length, parfait = sues1 === total, n = ratees.length;
    if (window.Sons) Sons.fin(Math.round((sues1 / total) * 100));
    $("def-fin-titre").textContent = parfait ? (total > 1 ? "Toutes sues du premier coup" : "Sue du premier coup") : sues1 + " / " + total + " sues du premier coup";
    $("def-fin-texte").textContent = (parfait
      ? (total > 1 ? "Elles montent d'un tiroir et se reposent : tu les reverras le moment venu." : "Elle monte d'un tiroir et se repose : tu la reverras le moment venu.")
      : (n > 1 ? "Les " + n + " autres sont revenues" : "L'autre est revenue") + " quelques cartes plus loin, jusqu'à ce que tu " + (n > 1 ? "les" : "la") + " saches. Tu " + (n > 1 ? "les" : "la") + " reverras demain.")
      + " Vérifie maintenant avec l'exercice : pour chaque terme, retrouve la bonne définition parmi quatre cartes.";
    if (typeof montrerCompagnon === "function") montrerCompagnon($("def-fin-compagnon"), parfait ? "choque" : sues1 / total >= 0.6 ? "bouche-ouverte" : "pensif");
    const nbQuestions = nbExercice();
    boutonsFin([
      ["Faire l'exercice (" + nbQuestions + (nbQuestions > 1 ? " questions)" : " question)"), "", lancerExercice],
      ["Retour à la liste", "secondaire", retourListe]
    ]);
  }
  function retourListe() {
    $("ecran-revision").hidden = true;
    $("ecran-exercice").hidden = true;
    $("ecran-fin").hidden = true;
    $("ecran-liste").hidden = false;
    afficherListe();
  }

  // ---------------- L'exercice de fin : la bonne définition parmi quatre cartes ----------------
  // Les termes viennent du tour qu'on vient de finir (d'abord ceux qui ont dû revenir). Les trois fausses cartes
  // sont d'autres définitions de la même matière, du même thème quand il y en a assez : elles se ressemblent.
  // Une erreur renvoie la carte au tiroir 1.
  // Nombre de questions selon la matière : 15 pour celles qui ont le plus de définitions à savoir, 10 pour les autres.
  // Jamais plus que le nombre de cartes du tour : un tour de 6 cartes donne 6 questions. Pour changer : ces nombres.
  const NB_EXERCICE = { U3: 15, U5: 15, U43: 15, U42: 10, U41: 10 }, NB_EXERCICE_AUTRE = 10;
  const nbExercice = () => Math.min(NB_EXERCICE[toutes[0].epreuve] || NB_EXERCICE_AUTRE, toutes.length);
  let exo = null;       // { questions: [définitions], rang, justes, ratees: [définitions], repondu }
  function lancerExercice() {
    // S'il y a plus de cartes que de questions : d'abord celles qui ont dû revenir, puis les « à savoir par cœur », puis le reste
    const sues = toutes.filter(d => !ratees.includes(d));
    const autres = melanger(sues.filter(parCoeur)).concat(melanger(sues.filter(d => !parCoeur(d))));
    exo = { questions: melanger(ratees.slice()).concat(autres).slice(0, nbExercice()), rang: 0, justes: 0, ratees: [], repondu: false };
    exo.questions = melanger(exo.questions);
    $("ecran-fin").hidden = true;
    $("ecran-revision").hidden = true;
    $("ecran-exercice").hidden = false;
    montrerQuestion();
    $("ecran-exercice").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function montrerQuestion() {
    const d = exo.questions[exo.rang];
    exo.repondu = false;
    $("exo-avancement").textContent = "Question " + (exo.rang + 1) + " / " + exo.questions.length;
    $("exo-barre").style.width = Math.round(exo.rang / exo.questions.length * 100) + "%";
    $("exo-terme").textContent = d.terme;
    $("exo-retour").textContent = "";
    $("exo-retour").className = "exo-retour";
    $("exo-explication").hidden = true;
    $("exo-suivant").hidden = true;
    // Trois fausses cartes : même thème d'abord, puis le reste de la matière
    const memeMatiere = DEFS.filter(x => x.epreuve === d.epreuve && x.id !== d.id && x.definition !== d.definition);
    const memeTheme = melanger(memeMatiere.filter(x => x.theme === d.theme)), ailleurs = melanger(memeMatiere.filter(x => x.theme !== d.theme));
    const cartes = melanger([d].concat(memeTheme.concat(ailleurs).slice(0, 3)));
    const zone = $("exo-choix");
    zone.innerHTML = "";
    cartes.forEach((c, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "exo-carte";
      b.innerHTML = '<span class="exo-lettre" aria-hidden="true"></span><span class="exo-texte"></span>';
      b.querySelector(".exo-lettre").textContent = "ABCD"[i];
      ecrireTexteMath(b.querySelector(".exo-texte"), c.definition);
      b.dataset.def = c.id;
      b.onclick = e => choisirCarte(c, b, e);
      zone.appendChild(b);
    });
    const premier = zone.querySelector("button");
    if (premier) premier.focus({ preventScroll: true });
  }
  function choisirCarte(c, bouton, evenement) {
    if (!exo || exo.repondu) return;
    exo.repondu = true;
    const d = exo.questions[exo.rang], juste = c.id === d.id;
    [...$("exo-choix").children].forEach(b => {
      b.disabled = true;
      if (b.dataset.def === d.id) b.classList.add("juste");
    });
    if (juste) {
      exo.justes++;
      if (typeof window.etincelles === "function" && evenement && evenement.clientX) window.etincelles(evenement.clientX, evenement.clientY);
    } else {
      bouton.classList.add("faux");
      exo.ratees.push(d);
      noter(d.id, false);              // elle n'était pas vraiment sue : retour au tiroir 1
    }
    if (window.Sons) Sons[juste ? "juste" : "faux"]();
    $("exo-retour").className = "exo-retour " + (juste ? "bien" : "mal");
    $("exo-retour").textContent = juste ? "C'est la bonne définition." : "Ce n'est pas celle-là : la bonne est entourée en vert. Cette carte retourne dans le tiroir 1.";
    $("exo-explication").hidden = !d.explication;
    ecrireTexteMath($("exo-explication"), d.explication ? "Pour comprendre : " + d.explication : "");
    const dernier = exo.rang + 1 >= exo.questions.length;
    $("exo-suivant").textContent = dernier ? "Voir mon résultat" : "Question suivante";
    $("exo-suivant").hidden = false;
    $("exo-suivant").focus({ preventScroll: true });
  }
  function questionSuivante() {
    if (!exo || !exo.repondu) return;
    exo.rang++;
    if (exo.rang < exo.questions.length) montrerQuestion();
    else finirExercice();
  }
  function finirExercice() {
    const total = exo.questions.length, justes = exo.justes, aRevoir = exo.ratees.slice();
    $("ecran-exercice").hidden = true;
    $("ecran-fin").hidden = false;
    if (window.Sons) Sons.fin(Math.round((justes / total) * 100), true);
    $("def-fin-titre").textContent = "Exercice : " + justes + " / " + total;
    $("def-fin-texte").textContent = justes === total
      ? "Tu as retrouvé chaque définition parmi les quatre cartes. Les tiroirs feront revenir ces cartes au bon moment."
      : (aRevoir.length > 1 ? "Les " + aRevoir.length + " définitions ratées sont retournées" : "La définition ratée est retournée") + " dans le tiroir 1 : refais un tour avec " + (aRevoir.length > 1 ? "elles" : "elle") + " pour " + (aRevoir.length > 1 ? "les" : "la") + " fixer.";
    if (typeof montrerCompagnon === "function") montrerCompagnon($("def-fin-compagnon"), justes === total ? "clin-doeil" : justes / total >= 0.6 ? "bouche-ouverte" : "pensif");
    exo = null;
    boutonsFin(aRevoir.length
      ? [[aRevoir.length > 1 ? "Revoir ces " + aRevoir.length + " définitions" : "Revoir cette définition", "", () => lancerRevision(aRevoir)], ["Retour à la liste", "secondaire", retourListe]]
      : [["Retour à la liste", "", retourListe]]);
  }

  // ---------------- Branchements ----------------
  $("def-recherche").addEventListener("input", e => { recherche = e.target.value; afficherListe(); });
  $("def-tombees").addEventListener("click", () => {
    tombeesSeules = !tombeesSeules;
    $("def-tombees").setAttribute("aria-checked", tombeesSeules);
    $("def-tombees-texte").classList.toggle("actif", tombeesSeules);
    afficherListe();
  });
  $("def-tombees-texte").addEventListener("click", () => $("def-tombees").click());
  $("def-coeur").addEventListener("click", () => {
    parCoeurSeules = !parCoeurSeules;
    $("def-coeur").setAttribute("aria-checked", parCoeurSeules);
    $("def-coeur-texte").classList.toggle("actif", parCoeurSeules);
    afficherListe();
  });
  $("def-coeur-texte").addEventListener("click", () => $("def-coeur").click());
  // Bouton doré : les cartes à voir aujourd'hui (voir paquetPropose)
  $("def-reviser").onclick = () => {
    const defs = defsAffichees();
    if (defs.length) lancerRevision(paquetPropose(defs, lireMemoire(), Date.now()).cartes);
  };
  $("def-reviser-tout").onclick = () => { const defs = defsAffichees(); if (defs.length) lancerRevision(defs); };
  $("def-reprendre").onclick = () => { const pause = seanceEnPause(epreuve); if (pause) lancerRevision(null, pause); else afficherListe(); };
  $("def-abandonner").onclick = () => { oublierSeance(epreuve); afficherListe(); $("def-reviser").focus({ preventScroll: true }); };
  $("def-carte").addEventListener("click", retourner);
  $("def-retourner").onclick = retourner;
  $("def-savais").onclick = () => repondre(true);
  $("def-arevoir").onclick = () => repondre(false);
  $("def-arreter").onclick = retourListe;
  $("exo-arreter").onclick = retourListe;
  $("exo-suivant").onclick = questionSuivante;
  document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest && e.target.closest("input, textarea")) return;
    // Exercice : A, B, C, D (ou 1 à 4) choisissent une carte
    if (!$("ecran-exercice").hidden && exo && !exo.repondu) {
      const n = "abcd".indexOf(e.key.toLowerCase()) >= 0 ? "abcd".indexOf(e.key.toLowerCase()) : "1234".indexOf(e.key);
      const b = n >= 0 ? $("exo-choix").children[n] : null;
      if (b) { e.preventDefault(); b.click(); }
      return;
    }
    if ($("ecran-revision").hidden) return;
    if (e.key === " " || e.key === "Enter") {
      if (!$("def-carte").classList.contains("retournee")) { e.preventDefault(); retourner(); }
    } else if (e.key === "ArrowRight") { e.preventDefault(); repondre(true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); repondre(false); }
  });

  if (!epreuvesAvecDefs.length) {
    $("ecran-liste").innerHTML = '<p class="aide">Les définitions arrivent très bientôt.</p>';
  } else toutAfficher();
})();
