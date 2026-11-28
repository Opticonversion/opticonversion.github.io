// ---------------- Le coffre : ce que le navigateur garde pour l'élève ----------------
// Un seul endroit pour :
//   1. la liste de TOUTES les clés que le site range dans le navigateur (localStorage), avec ce qu'elles gardent ;
//   2. lire et écrire ces clés sans jamais planter (navigation privée, stockage plein ou bloqué) ;
//   3. la fusion entre deux appareils (la réponse la plus récente gagne, le meilleur record est gardé…) ;
//   4. la synchronisation avec le compte en ligne. Elle reçoit la « transaction » de l'extérieur :
//      Firestore dans compte.js, une fausse en mémoire dans notes/tests/tester-coffre.js. Le vrai Firebase
//      n'est donc jamais touché par les tests.
// Chargé avant essentiel.js et compte.js sur toutes les pages qui ont compte.js (pages des notions comprises).
// Le format rangé ne change pas : mêmes clés, même JSON, mêmes champs dans Firestore (eleves/<uid>).

const Coffre = (() => {
  // ---------- 1. Les clés ----------
  // efface: true = travail de l'élève, effacé par « Supprimer mon compte » + « effacer aussi ce navigateur ».
  // Les réglages d'affichage (fond, son, calculatrice, vue) et les garde-fous techniques restent.
  // synchro: true = copié dans le compte en ligne (champ Firestore entre parenthèses).
  const CLES = {
    "progression":          { efface: true,  synchro: true, quoi: "dernière réponse à chaque question : 1 juste, 0 fausse (progression)" },
    "progression-t":        { efface: true,  synchro: true, quoi: "heure de cette dernière réponse (progressionT)" },
    "revisions":            { efface: true,  synchro: true, quoi: "révision espacée : prochain retour de chaque question ratée (revisions)" },
    "records":              { efface: true,  synchro: true, quoi: "meilleur score par série, cas, examen blanc et sujet blanc (records)" },
    "profil":               { efface: true,  synchro: true, quoi: "pseudo, année, personnage (profil)" },
    "attente":              { efface: true,  quoi: "changements pas encore envoyés en ligne" },
    "compte-uid":           { efface: true,  quoi: "compte avec lequel ce navigateur s'est synchronisé en dernier" },
    "compte-connu":         { efface: true,  quoi: "ce navigateur s'est déjà connecté à un compte (formulaire sur « J'ai un compte »)" },
    "jours":                { efface: true,  quoi: "réponses données chaque jour (série de jours)" },
    "objectif":             { efface: true,  quoi: "objectif du jour (5, 10 ou 20)" },
    "objectif-choisi-le":   { efface: true,  quoi: "jour où l'objectif a été choisi" },
    "objectif-t":           { efface: true,  quoi: "heure du choix de l'objectif : le plus récent gagne entre appareils (objectif)" },
    "jours-autres":         { efface: true,  quoi: "réponses données chaque jour sur tes autres appareils, additionnées (jours)" },
    "appareil":             { efface: false, quoi: "numéro de cet appareil tiré au hasard, pour additionner les jours entre appareils" },
    "plan":                 { efface: true,  quoi: "plan de révision de la semaine" },
    "erreurs-types":        { efface: true,  quoi: "type de la dernière erreur de chaque question ratée" },
    "seance-passee":        { efface: true,  quoi: "séance du jour déjà faite" },
    "rappel":               { efface: true,  quoi: "rappel d'agenda choisi" },
    "invitation-compte":    { efface: true,  quoi: "invitation à créer un compte déjà montrée" },
    "invitation-jour":      { efface: true,  quoi: "invitation déjà montrée aujourd'hui" },
    "accueil":              { efface: true,  quoi: "première ouverture de l'accueil déjà faite" },
    "decouverte":           { efface: true,  quoi: "cartes de découverte déjà vues" },
    "traces":               { efface: true,  quoi: "étoiles de l'Atelier des tracés (traces)" },
    "definitions":          { efface: true,  quoi: "définitions sues ou à revoir" },
    "definitions-seances":  { efface: true,  quoi: "révision de définitions en cours" },
    "examen-en-cours":      { efface: true,  quoi: "examen blanc commencé" },
    "examen-dernier":       { efface: true,  quoi: "dernière copie d'examen blanc corrigée" },
    "sujet-en-cours":       { efface: true,  quoi: "sujet blanc commencé (un par sujet)" },
    "sujet-dernier":        { efface: true,  quoi: "dernière copie corrigée de chaque sujet blanc" },
    "specificites-coches":  { efface: true,  quoi: "cases cochées des Spécificités" },
    "specificites-ouvert:": { efface: true,  prefixe: true, quoi: "Spécificités laissées ouvertes (une clé par épreuve)" },
    "amis":                 { efface: true,  quoi: "Mes amis activé : code ami et dernier résumé envoyé (pour ne le renvoyer que s'il a changé)" },
    "amis-invitation":      { efface: true,  quoi: "code ami reçu par un lien d'invitation, en attente d'un compte" },
    "fond":                 { efface: false, quoi: "fond Sombre ou Plus clair" },
    "son":                  { efface: false, quoi: "son coupé ou non" },
    "calculatrice":         { efface: false, quoi: "modèle de calculatrice choisi" },
    "vue":                  { efface: false, quoi: "affichage du QCM (questions, Shorts ou les deux)" },
    "lettre":               { efface: false, quoi: "ce navigateur est inscrit à la lettre" },
    "lettre-envois":        { efface: false, quoi: "garde-fou : inscriptions à la lettre du jour" },
    "signalements-envoyes": { efface: false, quoi: "garde-fou : signalements envoyés du jour" },
    "amis-demandes":        { efface: false, quoi: "garde-fou : demandes d'ami envoyées du jour" },
    "appli-comptee":        { efface: false, quoi: "appli installée déjà comptée" },
    "appli-invitation":     { efface: false, quoi: "invitation à installer l'appli fermée" },
    "appli-invitation-vue": { efface: false, quoi: "dernière invitation à installer l'appli" },
    "appli-visites":        { efface: false, quoi: "nombre de visites (invitation à installer l'appli)" }
  };
  // Les données copiées en ligne : clé du navigateur → champ Firestore
  const SYNCHRO = { "progression": "progression", "progression-t": "progressionT", "records": "records", "revisions": "revisions", "profil": "profil",
    "jours": "jours", "objectif": "objectif", "traces": "traces" };
  // Série de jours en ligne : 70 jours par appareil (comme « jours » dans essentiel.js), 6 appareils au plus
  const JOURS_GARDES = 70, APPAREILS_GARDES = 6;

  // ---------- 2. Lire et écrire sans jamais planter ----------
  const stockage = () => { try { return typeof localStorage === "undefined" ? null : localStorage; } catch (e) { return null; } };
  function lireTexte(cle) {
    try { const s = stockage(); return s ? s.getItem(cle) : null; } catch (e) { return null; }
  }
  function ecrireTexte(cle, valeur) {
    try { const s = stockage(); if (!s) return; valeur === null ? s.removeItem(cle) : s.setItem(cle, valeur); } catch (e) {}
  }
  // Un objet (jamais null) : {} si la clé manque, est illisible ou n'est pas un objet
  function lireJson(cle) {
    try { const v = JSON.parse(lireTexte(cle) || "{}"); return v && typeof v === "object" ? v : {}; } catch (e) { return {}; }
  }
  function ecrireJson(cle, valeur) { ecrireTexte(cle, JSON.stringify(valeur)); }

  // Note un changement pas encore envoyé en ligne, puis prévient compte.js (événement « progression-modifiee »)
  function marquerEnAttente(type, cle, valeur) {
    const attente = lireJson("attente");
    attente[type] = attente[type] && typeof attente[type] === "object" ? attente[type] : {};
    attente[type][cle] = valeur;
    ecrireJson("attente", attente);
    try { window.dispatchEvent(new Event("progression-modifiee")); } catch (e) {}
  }

  // Efface le travail de l'élève dans ce navigateur (clés efface: true), garde ses réglages
  function effacerTravail() {
    for (const [cle, c] of Object.entries(CLES)) if (c.efface && !c.prefixe) ecrireTexte(cle, null);
    try {
      const s = stockage(), prefixes = Object.keys(CLES).filter(k => CLES[k].efface && CLES[k].prefixe), aRetirer = [];
      if (s) for (let i = 0; i < s.length; i++) { const k = s.key(i); if (k && prefixes.some(p => k.startsWith(p))) aRetirer.push(k); }
      aRetirer.forEach(k => ecrireTexte(k, null));
    } catch (e) {}
  }

  // ---------- 3. La fusion entre deux appareils (calcul pur : rien n'est lu ni écrit ici) ----------
  const objet = v => (v && typeof v === "object" ? v : {});
  const texteJson = t => { try { return objet(JSON.parse(t || "{}")); } catch (e) { return {}; } };

  // base = { progression, temps, records, profil, revisions } (objets, modifiés et renvoyés)
  // attente = { progression, "progression-t", records, profil, revisions } : changements de ce navigateur
  function fusionnerDonnees(base, attente) {
    attente = objet(attente);
    const { progression, temps } = base;
    // Réponses : pour chaque question, la plus récente gagne (heure de réponse).
    // Une réponse sans heure (anciennes données) ne remplace pas une réponse datée.
    const tempsAttente = objet(attente["progression-t"]);
    for (const [cle, val] of Object.entries(objet(attente.progression))) {
      const tLocal = tempsAttente[cle] || 0;
      if (tLocal >= (temps[cle] || 0)) {
        progression[cle] = val;
        if (tLocal) temps[cle] = tLocal;
      }
    }
    // Records : on garde le meilleur
    for (const [cle, val] of Object.entries(objet(attente.records))) {
      if (base.records[cle] === undefined || val > base.records[cle]) base.records[cle] = val;
    }
    // Profil : les changements de ce navigateur l'emportent
    base.profil = Object.assign({}, base.profil, objet(attente.profil));
    // Révision espacée : pour chaque question, la version la plus récente (champ t)
    for (const [cle, val] of Object.entries(objet(attente.revisions))) {
      if (!base.revisions[cle] || (val && val.t >= (base.revisions[cle].t || 0))) base.revisions[cle] = val;
    }
    return base;
  }

  // Le document en ligne (ou null) + les changements de ce navigateur → la progression fusionnée.
  // migrer (facultatif) = migrerAnciennesCles d'essentiel.js : anciennes données repérées par l'énoncé → ids.
  // extras (facultatif) = extrasLocaux() : série de jours, objectif et étoiles fusionnés en plus (f.extras)
  function fusionner(enLigne, attente, migrer, extras) {
    const d = objet(enLigne);
    const base = {
      progression: texteJson(d.progression), temps: texteJson(d.progressionT),
      records: texteJson(d.records), profil: Object.assign({}, objet(d.profil)), revisions: texteJson(d.revisions)
    };
    const f = fusionnerDonnees(base, attente);
    if (typeof migrer === "function") migrer(f.progression, f.temps, f.revisions);
    if (extras) f.extras = fusionnerExtras(enLigne, extras);
    return f;
  }

  // ---------- 3 bis. Série de jours, objectif du jour, étoiles de l'Atelier (calcul pur) ----------
  // Ces trois données ne passent pas par « attente » : à chaque synchronisation, l'état complet de ce navigateur
  // est fusionné avec l'en-ligne. Rien n'est compté deux fois : chaque appareil garde ses propres jours en ligne
  // (sous son numéro), l'objectif le plus récent gagne, le meilleur nombre d'étoiles gagne.
  const derniersJours = j => {
    const garde = {};
    Object.keys(objet(j)).sort().slice(-JOURS_GARDES).forEach(k => { if (j[k] && typeof j[k] === "object") garde[k] = j[k]; });
    return garde;
  };
  // Additionne des comptes par jour { jour: { n, j, ok } } : n et j additionnés, ok si l'un l'a
  function additionnerJours(listes) {
    const total = {};
    for (const l of listes) for (const [k, e] of Object.entries(objet(l))) {
      if (!e || typeof e !== "object") continue;
      const t = total[k] || (total[k] = { n: 0 });
      t.n += Number(e.n) || 0;
      if (e.j !== undefined) t.j = (t.j || 0) + (Number(e.j) || 0);
      if (e.ok) t.ok = true;
    }
    return total;
  }
  // local = { appareil, jours, objectif, objectifT, traces } (état de ce navigateur)
  // Rend { jours (en ligne, par appareil), joursAutres (les autres appareils additionnés), objectif: { valeur, t }, traces }
  function fusionnerExtras(enLigne, local) {
    const d = objet(enLigne);
    // Série de jours : cet appareil fait foi pour lui-même ; les autres sont gardés tels quels
    const tous = {};
    for (const [app, j] of Object.entries(texteJson(d.jours))) { const g = derniersJours(j); if (Object.keys(g).length) tous[app] = g; }
    const mesJours = derniersJours(local.jours);
    if (Object.keys(mesJours).length) tous[local.appareil] = mesJours; else delete tous[local.appareil];
    // Au plus 6 appareils : ceux qui ont répondu le plus récemment (celui-ci toujours gardé)
    const dernier = app => Object.keys(tous[app]).sort().pop() || "";
    const gardes = Object.keys(tous).filter(a => a !== local.appareil).sort((a, b) => dernier(b).localeCompare(dernier(a)) || a.localeCompare(b))
      .slice(0, APPAREILS_GARDES - (tous[local.appareil] ? 1 : 0));
    const jours = {};
    for (const a of Object.keys(tous).sort()) if (a === local.appareil || gardes.includes(a)) jours[a] = tous[a];
    const joursAutres = additionnerJours(Object.keys(jours).filter(a => a !== local.appareil).map(a => jours[a]));
    // Objectif : le choix le plus récent gagne ; un choix sans heure (ancienne version) ne remplace pas l'en-ligne
    const oE = texteJson(d.objectif), vL = Number(local.objectif) || 0, tL = Number(local.objectifT) || 0;
    const objectif = vL && (!oE.valeur || tL > (Number(oE.t) || 0)) ? { valeur: vL, t: tL } : (oE.valeur ? { valeur: Number(oE.valeur), t: Number(oE.t) || 0 } : {});
    // Étoiles : le meilleur gagne, des deux côtés
    const traces = Object.assign({}, texteJson(d.traces));
    for (const [k, v] of Object.entries(objet(local.traces))) if (typeof v === "number" && (traces[k] === undefined || v > traces[k])) traces[k] = v;
    return { jours, joursAutres, objectif, traces };
  }
  // L'état de ce navigateur pour fusionnerExtras (crée le numéro d'appareil la première fois)
  function extrasLocaux() {
    let appareil = lireTexte("appareil");
    if (!appareil) { appareil = "a" + Math.random().toString(36).slice(2, 10) + Date.now().toString(36); ecrireTexte("appareil", appareil); }
    return { appareil, jours: lireJson("jours"), objectif: lireTexte("objectif"), objectifT: lireTexte("objectif-t"), traces: lireJson("traces") };
  }
  // Réponses de chaque jour, tous appareils réunis : ce navigateur (« jours ») + les autres (« jours-autres »).
  // ok = objectif atteint sur un appareil, ou total du jour au moins égal à l'objectif actuel.
  function lireJoursTous() {
    const total = additionnerJours([lireJson("jours"), lireJson("jours-autres")]), objectif = Number(lireTexte("objectif")) || 0;
    if (objectif) for (const e of Object.values(total)) if (e.n >= objectif) e.ok = true;
    return total;
  }

  // La progression fusionnée → les champs du document Firestore (même format qu'avant le coffre ; « maj » est ajouté par compte.js)
  // Les trois champs en plus (jours, objectif, traces) n'existent que si la fusion les a calculés.
  const versEnLigne = f => Object.assign({
    progression: JSON.stringify(f.progression),
    progressionT: JSON.stringify(f.temps),
    records: JSON.stringify(f.records),
    revisions: JSON.stringify(f.revisions),
    profil: f.profil
  }, f.extras ? {
    jours: JSON.stringify(f.extras.jours),
    objectif: JSON.stringify(f.extras.objectif),
    traces: JSON.stringify(f.extras.traces)
  } : {});

  // ---------- 4. La synchronisation ----------
  // transaction(miseAJour) : lit le document en ligne, appelle miseAJour(documentOuNull) qui rend les champs
  // à écrire, les écrit, et rend { nouveau: true si le document n'existait pas }. Elle peut appeler miseAJour
  // plusieurs fois (Firestore recommence une transaction gênée) : miseAJour ne modifie donc rien en dehors.
  // Rend { nouveau, change } : change = un autre appareil a apporté du nouveau.
  async function synchroniser(uid, transaction, migrer) {
    const premiereFois = lireTexte("compte-uid") !== uid;
    const attente = premiereFois
      ? { progression: lireJson("progression"), "progression-t": lireJson("progression-t"), records: lireJson("records"), profil: lireJson("profil"), revisions: lireJson("revisions") }
      : lireJson("attente");
    const attenteAvant = lireTexte("attente"), extras = extrasLocaux();
    let fusion = null;
    const r = await transaction(enLigne => {
      fusion = fusionner(enLigne, attente, migrer, extras);
      return versEnLigne(fusion);
    });

    const autresAvant = () => [lireJson("jours-autres"), lireTexte("objectif"), lireJson("traces")];
    const avant = JSON.stringify([lireJson("progression"), lireJson("records"), lireJson("profil"), lireJson("revisions"), autresAvant()]);
    // Une réponse donnée PENDANT l'envoi est dans « attente » mais pas dans la fusion : on la remet par-dessus,
    // et on garde l'attente pour le prochain envoi (renvoyer un changement déjà parti ne change rien).
    const bouge = lireTexte("attente") !== attenteAvant;
    const local = bouge ? fusionnerDonnees(JSON.parse(JSON.stringify(fusion)), lireJson("attente")) : fusion;
    ecrireJson("revisions", local.revisions);
    ecrireJson("progression", local.progression);
    ecrireJson("progression-t", local.temps);
    ecrireJson("records", local.records);
    ecrireJson("profil", local.profil);
    // Série de jours des autres appareils, objectif, étoiles. Ce qui a bougé ici PENDANT l'envoi est gardé :
    // une étoile gagnée entre-temps (le meilleur gagne), un objectif choisi entre-temps (plus récent).
    const x = fusion.extras;
    ecrireJson("jours-autres", x.joursAutres);
    if (x.objectif.valeur && (Number(lireTexte("objectif-t")) || 0) <= x.objectif.t) {
      ecrireTexte("objectif", String(x.objectif.valeur));
      if (x.objectif.t) ecrireTexte("objectif-t", String(x.objectif.t));
    }
    const etoiles = Object.assign({}, x.traces);
    for (const [k, v] of Object.entries(lireJson("traces"))) if (typeof v === "number" && (etoiles[k] === undefined || v > etoiles[k])) etoiles[k] = v;
    ecrireJson("traces", etoiles);
    ecrireTexte("compte-uid", uid);
    if (!bouge) ecrireJson("attente", {});
    const apres = JSON.stringify([local.progression, local.records, local.profil, local.revisions, autresAvant()]);
    return { nouveau: !!(r && r.nouveau), change: avant !== apres };
  }

  return { CLES, SYNCHRO, lireTexte, ecrireTexte, lireJson, ecrireJson, marquerEnAttente, effacerTravail,
    fusionner, fusionnerDonnees, versEnLigne, synchroniser, fusionnerExtras, additionnerJours, lireJoursTous };
})();
