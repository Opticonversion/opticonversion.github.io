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
  { id: "renard", nom: "Roxane" },
  { id: "chat", nom: "Pixel" },
  { id: "hibou", nom: "Archibald" },
  { id: "panda", nom: "Bambou" },
  { id: "lapin", nom: "Pompon" },
  { id: "grenouille", nom: "Kiwi" },
  { id: "choque", nom: "DioSL choqué" },
  { id: "pensif", nom: "DioSL pensif" },
  { id: "bouche-ouverte", nom: "DioSL ravi" },
  { id: "bouche-fermee", nom: "DioSL sérieux" }
];
const POSES_DIOSL = ["clin-doeil", "choque", "pensif", "bouche-ouverte", "bouche-fermee"];
function cheminAvatar(id) {
  return POSES_DIOSL.includes(id) ? "img/nounours-" + id + ".svg" : "img/avatar-" + id + ".svg";
}
window.AVATARS = AVATARS;
window.cheminAvatar = cheminAvatar;

// L'icône montre l'avatar choisi dans le profil, sinon un petit bonhomme
function majIcone(a) {
  const p = lire("profil");
  if (AVATARS.some(x => x.id === p.avatar)) {
    a.innerHTML = '<img src="' + cheminAvatar(p.avatar) + '" alt="">';
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
    if (qui && utilisateur) qui.textContent = utilisateur.email || "ton compte Google";
  }
};

const icone = ajouterIcone();
window.addEventListener("progression-modifiee", () => icone && majIcone(icone));

if (!FIREBASE_CONFIG) {
  // Pas encore branché : la page compte l'explique, le reste du site ne change pas.
  const dehors = document.getElementById("compte-deconnecte");
  if (dehors) dehors.hidden = true;
  ui.etat("La connexion arrive bientôt. En attendant, ta progression est gardée dans ce navigateur.");
} else {
  demarrer().catch(err => {
    console.error(err);
    ui.etat("La connexion est indisponible pour le moment. Ta progression reste gardée dans ce navigateur.");
  });
}

async function demarrer() {
  const { initializeApp } = await import(SDK + "firebase-app.js");
  const A = await import(SDK + "firebase-auth.js");
  const F = await import(SDK + "firebase-firestore.js");

  const app = initializeApp(FIREBASE_CONFIG);
  const auth = A.getAuth(app);
  auth.languageCode = "fr";
  const db = F.getFirestore(app);
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
      ? { progression: lire("progression"), records: lire("records"), profil: lire("profil") }
      : lire("attente");
    const envoye = JSON.stringify(attente);
    const ref = F.doc(db, "eleves", uid);

    const fusion = await F.runTransaction(db, async t => {
      const snap = await t.get(ref);
      const enLigne = snap.exists() ? snap.data() : {};
      const progression = Object.assign(JSON.parse(enLigne.progression || "{}"), attente.progression || {});
      const records = JSON.parse(enLigne.records || "{}");
      for (const [cle, val] of Object.entries(attente.records || {})) {
        if (records[cle] === undefined || val > records[cle]) records[cle] = val;
      }
      const profil = Object.assign({}, enLigne.profil || {}, attente.profil || {});
      t.set(ref, {
        progression: JSON.stringify(progression),
        records: JSON.stringify(records),
        profil,
        maj: F.serverTimestamp()
      });
      return { progression, records, profil };
    });

    const avant = JSON.stringify([lire("progression"), lire("records"), lire("profil")]);
    ecrire("progression", fusion.progression);
    ecrire("records", fusion.records);
    ecrire("profil", fusion.profil);
    if (icone) majIcone(icone);
    ecrireTexte("compte-uid", uid);
    // On n'efface l'attente que si rien n'a bougé pendant l'envoi
    if (JSON.stringify(lire("attente")) === envoye || premiereFois) ecrire("attente", {});

    // Si un autre appareil a apporté du nouveau, on rafraîchit les pages qui l'affichent
    const apres = JSON.stringify([fusion.progression, fusion.records, fusion.profil]);
    if (avant !== apres && document.body.dataset.rafraichir === "oui") location.reload();
  }

  function planifier() {
    clearTimeout(minuterie);
    minuterie = setTimeout(() => synchroniser().catch(e => console.error(e)), 1500);
  }
  window.addEventListener("progression-modifiee", planifier);

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

  const bSupprimer = document.getElementById("bouton-supprimer");
  if (bSupprimer) bSupprimer.addEventListener("click", async () => {
    if (!utilisateur) return;
    if (!confirm("Supprimer ton compte et ta progression en ligne ? C'est définitif.")) return;
    const effacerNavigateur = confirm("Effacer aussi la progression gardée dans ce navigateur ?");
    try {
      await F.deleteDoc(F.doc(db, "eleves", utilisateur.uid));
      try { await A.deleteUser(utilisateur); }
      catch (e) {
        if (e.code !== "auth/requires-recent-login") throw e;
        await A.reauthenticateWithPopup(utilisateur, fournisseur);
        await A.deleteUser(auth.currentUser);
      }
      ecrireTexte("compte-uid", null);
      ecrire("attente", {});
      if (effacerNavigateur) ["progression", "records", "attente", "profil"].forEach(c => ecrireTexte(c, null));
      ui.etat("Ton compte et ta progression en ligne ont été supprimés.");
    } catch (e) {
      console.error(e);
      ui.etat("La suppression n'a pas marché. Réessaie, ou écris-nous à l'adresse de la page confidentialité.");
    }
  });
}
