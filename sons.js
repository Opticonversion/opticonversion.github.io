// =====================================================================
// SONS · les petits sons du site (QCM, Définitions, Atelier des tracés)
// ---------------------------------------------------------------------
// Sept vrais sons, rangés dans le dossier sons/ (fichiers mp3 choisis par
// David sur Pixabay, licence libre Pixabay ; sources et auteurs dans
// notes/coordination/site-dev-sons.md et dans les mentions légales).
//   Sons.juste()                 bonne réponse ;
//   Sons.faux()                  erreur ;
//   Sons.fin(pourcent, attendre) fin d'une série, un son par palier de note
//                                (100, 80 et plus, 60 et plus, 50 et plus ;
//                                rien sous 50 % : pas de son joyeux sur une série ratée).
//                                « attendre » = vrai : il passe après le son
//                                en cours au lieu de le couper.
// Le bouton « Son » est ajouté dans la barre du haut d'une série (QCM,
// Atelier, révision des définitions). Le choix est gardé dans localStorage
// « son » ("non" = coupé ; actif par défaut).
// Chargé en « defer » : rien d'autre n'en dépend. Les pages l'appellent
// toujours par « if (window.Sons) … ». Rien n'est téléchargé si le son est
// coupé, et rien ne joue avant un premier geste de l'élève.
// =====================================================================

(function () {
  let actif = true;
  try { actif = localStorage.getItem("son") !== "non"; } catch (e) {}

  // ---------------- Les réglages ----------------
  const VOLUME = 1;            // volume général : 0.7 = plus doux, 1.3 = plus fort
  const DOSSIER = "sons/";
  const VERSION = "1";         // à augmenter si un fichier du dossier sons/ est remplacé (sinon le navigateur garde l'ancien)
  // Pour chaque son : le fichier, où commence vraiment le son (le petit silence du début est sauté, pour qu'il
  // parte dès qu'on appuie), où il finit, et son volume. Les fichiers n'ont pas du tout le même niveau d'origine
  // (mesuré : de −8 à −25 LUFS) : ces volumes les ramènent tous au même niveau, l'erreur un peu en dessous.
  const SONS = {
    juste:  { fichier: "juste.mp3",   debut: 0.015, fin: 1.02, volume: 0.32 },
    faux:   { fichier: "faux.mp3",    debut: 0.014, fin: 1.11, volume: 0.54 },
    fin100: { fichier: "fin-100.mp3", debut: 0.04,  fin: 3.53, volume: 1.16 },
    fin80:  { fichier: "fin-80.mp3",  debut: 0.064, fin: 1.1,  volume: 0.82 },
    fin60:  { fichier: "fin-60.mp3",  debut: 0.02,  fin: 1.52, volume: 0.62 },
    fin40:  { fichier: "fin-40.mp3",  debut: 0.124, fin: 0.95, volume: 0.52 },
    fin0:   { fichier: "fin-0.mp3",   debut: 0.119, fin: 1.75, volume: 2.1 }
  };
  const FINS = ["fin100", "fin80", "fin60", "fin40"];       // fin0 n'est plus joué (rien sous 50 %)

  // ---------------- Téléchargement et lecture ----------------
  const octets = {}, tampons = {};      // promesses : le fichier téléchargé, puis le son prêt à être joué
  let ctx = null, enCours = [], finDuDernier = 0;

  function telecharger(nom) {
    if (!octets[nom]) {
      octets[nom] = fetch(DOSSIER + SONS[nom].fichier + "?v=" + VERSION).then(r => { if (!r.ok) throw new Error("son introuvable"); return r.arrayBuffer(); });
      octets[nom].catch(() => {});
    }
    return octets[nom];
  }
  function contexte() {
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    try {
      if (!ctx) ctx = new AC();
      if (ctx.state === "suspended") { const p = ctx.resume(); if (p && p.catch) p.catch(() => {}); }
    } catch (e) { return null; }
    return ctx;
  }
  function tampon(nom) {
    if (!tampons[nom]) {
      tampons[nom] = telecharger(nom).then(b => new Promise((ok, rate) => ctx.decodeAudioData(b, ok, rate)));
      tampons[nom].catch(() => {});
    }
    return tampons[nom];
  }
  // Le son en cours est coupé en douceur (pas de « clac ») quand un autre doit partir tout de suite
  function couper() {
    const t = ctx.currentTime;
    enCours.forEach(({ source, gain }) => {
      try { gain.gain.setTargetAtTime(0, t, 0.02); source.stop(t + 0.12); } catch (e) {}
    });
    enCours = [];
  }
  function jouer(nom, attendre) {
    if (!actif || !contexte()) return;
    const demande = ctx.currentTime;
    tampon(nom).then(son => {
      if (!actif) return;
      const maintenant = ctx.currentTime;
      if (maintenant - demande > 1.5) return;        // fichier arrivé trop tard (connexion lente) : un son en retard gêne plus qu'il n'aide
      const r = SONS[nom];
      let quand = maintenant;
      if (attendre) quand = Math.max(maintenant, finDuDernier + 0.1);
      else couper();
      const source = ctx.createBufferSource(), gain = ctx.createGain();
      source.buffer = son;
      gain.gain.value = r.volume * VOLUME;
      source.connect(gain);
      gain.connect(ctx.destination);
      source.start(quand, r.debut);
      finDuDernier = quand + (r.fin - r.debut);
      const piste = { source, gain };
      enCours.push(piste);
      source.onended = () => { enCours = enCours.filter(p => p !== piste); };
    }).catch(() => {});
    // Une fois la série commencée, les sons de fin sont téléchargés d'avance : ils partiront sans attendre
    if (nom === "juste" || nom === "faux") FINS.forEach(telecharger);
  }

  const juste = () => jouer("juste");
  const faux = () => jouer("faux");
  function fin(pourcent, attendre) {
    const p = Number(pourcent) || 0;
    // Moins de la moitié : pas de son de fin (les sons de fin sont joyeux) ; le son de la dernière réponse suffit
    if (p < 50) return;
    jouer(p >= 100 ? "fin100" : p >= 80 ? "fin80" : p >= 60 ? "fin60" : "fin40", attendre);
  }

  // Les deux sons d'une réponse sont téléchargés dès que la page est tranquille, puis préparés au premier geste
  // de l'élève : la toute première réponse a déjà son son.
  function preparer() {
    if (!actif) return;
    telecharger("juste"); telecharger("faux");
  }
  function premierGeste() {
    document.removeEventListener("pointerdown", premierGeste, true);
    document.removeEventListener("keydown", premierGeste, true);
    if (!actif || !contexte()) return;
    tampon("juste"); tampon("faux");
  }
  if ("requestIdleCallback" in window) requestIdleCallback(preparer, { timeout: 3000 }); else setTimeout(preparer, 1200);
  document.addEventListener("pointerdown", premierGeste, true);
  document.addEventListener("keydown", premierGeste, true);

  // ---------------- Le bouton « Son » ----------------
  function mettreAJour() {
    document.querySelectorAll(".bouton-son").forEach(b => {
      b.setAttribute("aria-pressed", actif ? "true" : "false");
      b.title = actif ? "Couper le son" : "Remettre le son";
      b.querySelector(".ico").className = "ico " + (actif ? "i-son" : "i-son-coupe");
    });
  }
  function basculer() {
    actif = !actif;
    try { localStorage.setItem("son", actif ? "oui" : "non"); } catch (e) {}
    mettreAJour();
    if (actif) juste();                      // on entend tout de suite que le son est revenu
    else if (ctx) couper();
  }
  // Une barre par série : celle du QCM, celle d'un niveau de l'Atelier, celle de la révision des définitions
  document.querySelectorAll(".barre-outils, .jeu-tete").forEach(barre => {
    if (barre.querySelector(".bouton-son")) return;
    const b = document.createElement("button");
    b.type = "button";
    b.className = "bouton-son";
    b.setAttribute("aria-label", "Son");
    b.innerHTML = '<span class="ico" aria-hidden="true"></span><span class="bouton-son-mot">Son</span>';
    b.addEventListener("click", basculer);
    barre.appendChild(b);
  });
  mettreAJour();
  // Le réglage changé dans un autre onglet du site est repris ici
  window.addEventListener("storage", e => {
    if (e.key !== "son") return;
    actif = e.newValue !== "non";
    mettreAJour();
  });

  window.Sons = { juste, faux, fin, actif: () => actif, basculer };
})();
