// =====================================================================
// Compte élève : connexion Google et sauvegarde de la progression en ligne
// ---------------------------------------------------------------------
// Sans connexion, le site marche comme avant : tout reste dans le navigateur.
// Connecté, la progression (réponses + records) est copiée dans Firestore,
// dans un document « eleves/<identifiant> » que seul l'élève peut lire.
// On ne stocke rien d'autre : ni nom, ni e-mail (Google les garde côté connexion).
// =====================================================================

// Réglages du projet Firebase (pas secrets : ils sont faits pour être publics).
// Tant que c'est null, le bouton de connexion n'apparaît pas.
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAOb9c1U0q4jjlQY6gFWaEBMlVk-9Z7wTg",
  authDomain: "opticonversion.firebaseapp.com",
  projectId: "opticonversion",
  storageBucket: "opticonversion.firebasestorage.app",
  messagingSenderId: "323325413186",
  appId: "1:323325413186:web:a02d8dbf5046061424eadb"
};

const VERSION_SDK = "10.12.2";
const SDK = "https://www.gstatic.com/firebasejs/" + VERSION_SDK + "/";

// ---------- Petits outils pour le navigateur ----------
function lire(cle) {
  try { return JSON.parse(localStorage.getItem(cle) || "{}"); } catch (e) { return {}; }
}
function ecrire(cle, valeur) {
  try { localStorage.setItem(cle, JSON.stringify(valeur)); } catch (e) {}
}
function lireTexte(cle) {
  try { return localStorage.getItem(cle); } catch (e) { return null; }
}
function ecrireTexte(cle, valeur) {
  try { valeur === null ? localStorage.removeItem(cle) : localStorage.setItem(cle, valeur); } catch (e) {}
}

// ---------- Icône du compte dans le menu ----------
const ICONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 20.5c1.4-4 4.4-6 8-6s6.6 2 8 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

function ajouterIcone() {
  const nav = document.querySelector(".entete nav");
  if (!nav || nav.querySelector(".lien-compte")) return null;
  const a = document.createElement("a");
  a.href = "compte.html";
  a.className = "lien-compte";
  a.setAttribute("aria-label", "Mon profil");
  if (location.pathname.endsWith("compte.html")) a.classList.add("actif");
  nav.appendChild(a);
  majIcone(a);
  return a;
}

// ---------- Les avatars (une seule liste pour tout le site) ----------
const AVATARS = [
  { id: "clin-doeil", nom: "DioSL" },
  { id: "renarde", nom: "Linouche" },
  { id: "chat", nom: "Pixel" },
  { id: "hibou", nom: "Archibald" },
  { id: "panda", nom: "Bambou" },
  { id: "lapin", nom: "Pompon" },
  { id: "grenouille", nom: "Kiwi" }
];
// Les expressions de DioSL (choqué, pensif, ravi, sérieux) ne se choisissent plus comme personnage :
// elles servent aux réactions. Un ancien choix de l'une d'elles, ou d'un personnage retiré
// (le renard), redevient simplement DioSL.
const POSES_DIOSL = ["clin-doeil", "choque", "pensif", "bouche-ouverte", "bouche-fermee"];
function cheminAvatar(id) {
  return POSES_DIOSL.includes(id) ? "img/nounours-" + id + ".svg" : "img/avatar-" + id + ".svg";
}
window.AVATARS = AVATARS;
window.cheminAvatar = cheminAvatar;

// L'icône montre l'avatar choisi dans le profil, sinon un petit bonhomme
function majIcone(a) {
  const p = lire("profil");
  const id = p.avatar && (POSES_DIOSL.includes(p.avatar) || !AVATARS.some(x => x.id === p.avatar)) ? "clin-doeil" : p.avatar;
  if (AVATARS.some(x => x.id === id)) {
    a.innerHTML = '<img src="' + cheminAvatar(id) + '" alt="">';
    a.classList.add("avec-avatar");
  } else {
    a.innerHTML = ICONE;
    a.classList.remove("avec-avatar");
  }
  a.title = p.pseudo ? "Profil de " + p.pseudo : "Mon profil";
}
// ---------- Ce que la page compte.html affiche ----------
const ui = {
  etat(texte) { const e = document.getElementById("compte-etat"); if (e) e.textContent = texte; },
  montrer(connecte, utilisateur) {
    const dehors = document.getElementById("compte-deconnecte");
    const dedans = document.getElementById("compte-connecte");
    if (!dehors || !dedans) return;
    dehors.hidden = connecte;
    dedans.hidden = !connecte;
    const qui = document.getElementById("compte-qui");
    if (qui && utilisateur) qui.textContent = utilisateur.email || "ton compte";
  }
};

const icone = ajouterIcone();

// Petit compteur « à revoir aujourd'hui » sur le lien QCM du menu
function majCompteurRevision() {
  const lien = document.querySelector('.entete nav a[href="qcm.html"]');
  if (!lien) return;
  const d = new Date();
  const aujourdhui = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const n = typeof window.nombreARevoir === "function"
    ? window.nombreARevoir()
    : Object.values(lire("revisions")).filter(e => e && e.j && e.j <= aujourdhui).length;
  let pastille = lien.querySelector(".compte-revoir");
  if (n === 0) { if (pastille) pastille.remove(); return; }
  if (!pastille) {
    pastille = document.createElement("span");
    pastille.className = "compte-revoir";
    lien.appendChild(pastille);
  }
  pastille.textContent = n;
  pastille.title = n + " à revoir aujourd'hui";
  lien.setAttribute("aria-label", "QCM, " + n + " question" + (n > 1 ? "s" : "") + " à revoir aujourd'hui");
}
majCompteurRevision();
window.addEventListener("progression-modifiee", majCompteurRevision);
window.addEventListener("progression-modifiee", () => icone && majIcone(icone));

if (!FIREBASE_CONFIG) {
  // Pas encore branché : la page compte l'explique, le reste du site ne change pas.
  const dehors = document.getElementById("compte-deconnecte");
  if (dehors) dehors.hidden = true;
  ui.etat("La connexion arrive bientôt. En attendant, ta progression est gardée dans ce navigateur.");
} else {
  // Sans internet (appli hors ligne), Firebase ne se charge pas : on réessaie au retour du réseau.
  // La progression attend dans ce navigateur (« attente ») et part à ce moment-là.
  const lancer = () => demarrer().catch(err => {
    console.error(err);
    ui.etat("La connexion est indisponible pour le moment. Ta progression reste gardée dans ce navigateur.");
    window.addEventListener("online", lancer, { once: true });
  });
  lancer();
}

// Réponses aux questions : pour chaque question, la réponse la plus récente gagne (heure de réponse).
// Une réponse sans heure (anciennes données) ne remplace pas une réponse datée.
function fusionnerReponses(progression, temps, progAttente, tempsAttente) {
  tempsAttente = tempsAttente || {};
  for (const [cle, val] of Object.entries(progAttente || {})) {
    const tLocal = tempsAttente[cle] || 0;
    if (tLocal >= (temps[cle] || 0)) {
      progression[cle] = val;
      if (tLocal) temps[cle] = tLocal;
    }
  }
  return { progression, temps };
}

async function demarrer() {
  const { initializeApp } = await import(SDK + "firebase-app.js");
  const A = await import(SDK + "firebase-auth.js");
  const F = await import(SDK + "firebase-firestore.js");

  const app = initializeApp(FIREBASE_CONFIG);
  const auth = A.getAuth(app);
  auth.languageCode = "fr";
  const db = F.getFirestore(app);

  // Signalement d'erreur sur une question (sans compte, sans donnée personnelle)
  // Garde-fou : 1 signalement toutes les 30 secondes et 10 par jour au plus depuis ce navigateur
  // (évite les envois en double et protège le quota gratuit de Firebase).
  window.envoyerSignalement = async donnees => {
    const maintenant = Date.now();
    let envois = [];
    try { envois = JSON.parse(localStorage.getItem("signalements-envoyes") || "[]").filter(t => maintenant - t < 864e5); } catch (e) {}
    if (envois.length >= 10) throw Object.assign(new Error("limite"), { code: "limite-jour" });
    if (envois.length && maintenant - envois[envois.length - 1] < 30000) throw Object.assign(new Error("limite"), { code: "limite-delai" });
    await F.addDoc(F.collection(db, "signalements"), Object.assign({}, donnees, { date: F.serverTimestamp() }));
    envois.push(maintenant);
    try { localStorage.setItem("signalements-envoyes", JSON.stringify(envois)); } catch (e) {}
  };
  const fournisseur = new A.GoogleAuthProvider();
  fournisseur.setCustomParameters({ prompt: "select_account" });

  let utilisateur = null;
  let minuterie = null;

  // Fusionne la progression en ligne et les changements de ce navigateur.
  // Les réponses récentes de ce navigateur gagnent ; pour les records, on garde le meilleur.
  async function synchroniser() {
    if (!utilisateur) return;
    const uid = utilisateur.uid;
    const premiereFois = lireTexte("compte-uid") !== uid;
    const attente = premiereFois
      ? { progression: lire("progression"), "progression-t": lire("progression-t"), records: lire("records"), profil: lire("profil"), revisions: lire("revisions") }
      : lire("attente");
    const envoye = JSON.stringify(attente);
    const ref = F.doc(db, "eleves", uid);

    const fusion = await F.runTransaction(db, async t => {
      const snap = await t.get(ref);
      const enLigne = snap.exists() ? snap.data() : {};
      // Réponses : pour chaque question, la plus récente gagne (heure de réponse).
      // Une réponse sans heure (anciennes données) ne remplace pas une réponse datée.
      const { progression, temps } = fusionnerReponses(
        JSON.parse(enLigne.progression || "{}"), JSON.parse(enLigne.progressionT || "{}"),
        attente.progression, attente["progression-t"]);
      const records = JSON.parse(enLigne.records || "{}");
      for (const [cle, val] of Object.entries(attente.records || {})) {
        if (records[cle] === undefined || val > records[cle]) records[cle] = val;
      }
      const profil = Object.assign({}, enLigne.profil || {}, attente.profil || {});
      // Révision espacée : pour chaque question, on garde la version la plus récente (champ t)
      const revisions = JSON.parse(enLigne.revisions || "{}");
      for (const [cle, val] of Object.entries(attente.revisions || {})) {
        if (!revisions[cle] || (val && val.t >= (revisions[cle].t || 0))) revisions[cle] = val;
      }
      // Anciennes données repérées par l'énoncé → identifiants stables des questions
      if (typeof window.migrerAnciennesCles === "function") window.migrerAnciennesCles(progression, temps, revisions);
      t.set(ref, {
        progression: JSON.stringify(progression),
        progressionT: JSON.stringify(temps),
        records: JSON.stringify(records),
        revisions: JSON.stringify(revisions),
        profil,
        maj: F.serverTimestamp()
      });
      return { progression, temps, records, profil, revisions };
    });

    const avant = JSON.stringify([lire("progression"), lire("records"), lire("profil"), lire("revisions")]);
    ecrire("revisions", fusion.revisions);
    majCompteurRevision();
    ecrire("progression", fusion.progression);
    ecrire("progression-t", fusion.temps);
    ecrire("records", fusion.records);
    ecrire("profil", fusion.profil);
    if (icone) majIcone(icone);
    ecrireTexte("compte-uid", uid);
    // On n'efface l'attente que si rien n'a bougé pendant l'envoi
    if (JSON.stringify(lire("attente")) === envoye || premiereFois) ecrire("attente", {});

    // Si un autre appareil a apporté du nouveau, on rafraîchit les pages qui l'affichent
    const apres = JSON.stringify([fusion.progression, fusion.records, fusion.profil, fusion.revisions]);
    if (avant !== apres && document.body.dataset.rafraichir === "oui") rafraichirPage();
  }

  // Recharge la page pour montrer la progression à jour, sauf si l'élève est en train d'écrire :
  // dans ce cas, un bandeau lui propose d'actualiser quand il veut. Jamais deux fois en 30 s.
  function rafraichirPage() {
    const el = document.activeElement;
    const occupe = el && el.matches && el.matches("input, textarea, select, [contenteditable]");
    let recent = false;
    try { recent = Date.now() - Number(sessionStorage.getItem("recharge-synchro") || 0) < 30000; } catch (e) {}
    if (!occupe && !recent) {
      try { sessionStorage.setItem("recharge-synchro", String(Date.now())); } catch (e) {}
      location.reload();
      return;
    }
    if (document.getElementById("bandeau-maj")) return;
    const b = document.createElement("div");
    b.id = "bandeau-maj";
    b.className = "bandeau-maj";
    b.setAttribute("role", "status");
    b.innerHTML = '<span>Ta progression a été mise à jour depuis un autre appareil.</span>' +
      '<button type="button" class="bouton">Actualiser</button>' +
      '<button type="button" class="bandeau-fermer" aria-label="Fermer">×</button>';
    b.querySelector(".bouton").onclick = () => location.reload();
    b.querySelector(".bandeau-fermer").onclick = () => b.remove();
    document.body.appendChild(b);
  }

  function planifier() {
    clearTimeout(minuterie);
    minuterie = setTimeout(() => synchroniser().catch(e => console.error(e)), 1500);
  }
  window.addEventListener("progression-modifiee", planifier);
  window.addEventListener("online", planifier);   // retour du réseau : on envoie ce qui attendait

  A.onAuthStateChanged(auth, async u => {
    utilisateur = u;
    if (icone) icone.classList.toggle("connecte", !!u);
    ui.montrer(!!u, u);
    if (u) {
      ui.etat("Synchronisation…");
      try {
        await synchroniser();
        ui.etat("Ta progression est sauvegardée en ligne.");
      } catch (e) {
        console.error(e);
        ui.etat("La sauvegarde en ligne n'a pas marché. Ta progression reste gardée dans ce navigateur.");
      }
    } else {
      ui.etat("");
    }
  });

  // ---------- Boutons de la page compte.html ----------
  const bConnexion = document.getElementById("bouton-connexion");
  if (bConnexion) bConnexion.addEventListener("click", async () => {
    try { await A.signInWithPopup(auth, fournisseur); }
    catch (e) {
      if (e.code === "auth/popup-blocked") await A.signInWithRedirect(auth, fournisseur);
      else if (e.code !== "auth/popup-closed-by-user" && e.code !== "auth/cancelled-popup-request") {
        console.error(e); ui.etat("La connexion n'a pas marché. Réessaie dans un instant.");
      }
    }
  });

  const bDeconnexion = document.getElementById("bouton-deconnexion");
  if (bDeconnexion) bDeconnexion.addEventListener("click", async () => {
    await A.signOut(auth);
    ecrireTexte("compte-uid", null);
    ui.etat("Tu es déconnecté. Ta progression reste gardée dans ce navigateur.");
  });

  // ---------- Connexion par e-mail et mot de passe ----------
  const MESSAGES = {
    "auth/email-already-in-use": "Un compte existe déjà avec cet e-mail. Connecte-toi, ou utilise « Mot de passe oublié ? ».",
    "auth/invalid-email": "Cette adresse e-mail n'est pas valide.",
    "auth/missing-email": "Indique ton adresse e-mail.",
    "auth/weak-password": "Mot de passe trop faible : 8 caractères minimum.",
    "auth/missing-password": "Indique ton mot de passe.",
    "auth/invalid-credential": "E-mail ou mot de passe incorrect.",
    "auth/wrong-password": "E-mail ou mot de passe incorrect.",
    "auth/user-not-found": "E-mail ou mot de passe incorrect.",
    "auth/too-many-requests": "Trop d'essais d'un coup. Patiente quelques minutes et réessaie.",
    "auth/network-request-failed": "Pas de connexion internet. Vérifie ton réseau.",
    "auth/user-disabled": "Ce compte a été désactivé."
  };
  const message = e => MESSAGES[e && e.code] || "Ça n'a pas marché. Réessaie dans un instant.";

  const formEmail = document.getElementById("form-email");
  if (formEmail) {
    let inscription = false;
    const champEmail = document.getElementById("champ-email");
    const champMdp = document.getElementById("champ-mdp");
    const valider = document.getElementById("valider-email");
    const choisirOnglet = nouvelleInscription => {
      inscription = nouvelleInscription;
      document.getElementById("onglet-connexion").setAttribute("aria-selected", !inscription);
      document.getElementById("onglet-inscription").setAttribute("aria-selected", inscription);
      valider.textContent = inscription ? "Créer mon compte" : "Se connecter";
      champMdp.autocomplete = inscription ? "new-password" : "current-password";
      document.getElementById("regle-mdp").hidden = !inscription;
      document.getElementById("mdp-oublie").hidden = inscription;
      ui.etat("");
    };
    document.getElementById("onglet-connexion").onclick = () => choisirOnglet(false);
    document.getElementById("onglet-inscription").onclick = () => choisirOnglet(true);
    document.getElementById("voir-mdp").onclick = () => {
      const visible = champMdp.type === "text";
      champMdp.type = visible ? "password" : "text";
      document.getElementById("voir-mdp").setAttribute("aria-label", visible ? "Afficher le mot de passe" : "Masquer le mot de passe");
    };

    formEmail.addEventListener("submit", async e => {
      e.preventDefault();
      const email = champEmail.value.trim(), mdp = champMdp.value;
      if (!email) { ui.etat(MESSAGES["auth/missing-email"]); champEmail.focus(); return; }
      if (inscription && mdp.length < 8) { ui.etat(MESSAGES["auth/weak-password"]); champMdp.focus(); return; }
      valider.disabled = true;
      ui.etat(inscription ? "Création du compte…" : "Connexion…");
      try {
        if (inscription) {
          const res = await A.createUserWithEmailAndPassword(auth, email, mdp);
          try { await A.sendEmailVerification(res.user); } catch (err) { console.error(err); }
        } else {
          await A.signInWithEmailAndPassword(auth, email, mdp);
        }
        champMdp.value = "";
      } catch (err) {
        console.error(err);
        ui.etat(message(err));
      } finally {
        valider.disabled = false;
      }
    });

    document.getElementById("mdp-oublie").onclick = async () => {
      const email = champEmail.value.trim();
      if (!email) { ui.etat("Écris d'abord ton adresse e-mail, puis clique sur « Mot de passe oublié ? »."); champEmail.focus(); return; }
      try {
        await A.sendPasswordResetEmail(auth, email);
      } catch (err) {
        if (err.code === "auth/invalid-email" || err.code === "auth/network-request-failed" || err.code === "auth/too-many-requests") { ui.etat(message(err)); return; }
      }
      // Même message dans tous les cas, pour ne pas révéler si un compte existe
      ui.etat("Si un compte existe avec cette adresse, tu vas recevoir un e-mail pour choisir un nouveau mot de passe (pense à regarder les spams).");
    };
  }

  // Le compte est-il un compte e-mail (et l'adresse est-elle vérifiée) ?
  const estCompteEmail = u => u && u.providerData.some(p => p.providerId === "password");
  A.onAuthStateChanged(auth, u => {
    const verif = document.getElementById("compte-verif");
    if (!verif) return;
    verif.hidden = !(estCompteEmail(u) && !u.emailVerified);
    verif.textContent = "Pense à valider ton adresse : on t'a envoyé un e-mail (regarde aussi les spams).";
  });

  // ---------- Supprimer son compte ----------
  // On confirme d'abord l'identité (Google ou mot de passe), PUIS on efface les données et le compte.
  const formReauth = document.getElementById("reauth");
  async function supprimerTout(effacerNavigateur) {
    await F.deleteDoc(F.doc(db, "eleves", auth.currentUser.uid));
    await A.deleteUser(auth.currentUser);
    ecrireTexte("compte-uid", null);
    ecrire("attente", {});
    if (effacerNavigateur) ["progression", "progression-t", "records", "attente", "profil", "revisions", "jours"].forEach(c => ecrireTexte(c, null));
    if (formReauth) formReauth.hidden = true;
    ui.etat("Ton compte et ta progression en ligne ont été supprimés.");
  }
  let effacerNavigateurDemande = false;

  const bSupprimer = document.getElementById("bouton-supprimer");
  if (bSupprimer) bSupprimer.addEventListener("click", async () => {
    if (!utilisateur) return;
    if (!confirm("Supprimer ton compte et ta progression en ligne ? C'est définitif.")) return;
    effacerNavigateurDemande = confirm("Effacer aussi la progression gardée dans ce navigateur ?");
    if (estCompteEmail(utilisateur)) {
      formReauth.hidden = false;
      document.getElementById("champ-mdp-confirmer").focus();
      return;
    }
    try {
      await A.reauthenticateWithPopup(utilisateur, fournisseur);
      await supprimerTout(effacerNavigateurDemande);
    } catch (e) {
      console.error(e);
      ui.etat(e.code === "auth/popup-closed-by-user" ? "Suppression annulée." : "La suppression n'a pas marché. Réessaie, ou écris-nous à l'adresse de la page confidentialité.");
    }
  });
  if (formReauth) {
    document.getElementById("reauth-annuler").onclick = () => { formReauth.hidden = true; ui.etat("Suppression annulée."); };
    formReauth.addEventListener("submit", async e => {
      e.preventDefault();
      const champ = document.getElementById("champ-mdp-confirmer");
      try {
        const cred = A.EmailAuthProvider.credential(auth.currentUser.email, champ.value);
        await A.reauthenticateWithCredential(auth.currentUser, cred);
        champ.value = "";
        await supprimerTout(effacerNavigateurDemande);
      } catch (err) {
        console.error(err);
        ui.etat(message(err));
      }
    });
  }
}
