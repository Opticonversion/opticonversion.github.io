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
// Tout passe par le coffre (coffre.js, chargé avant) : jamais de plantage si le stockage est bloqué.
const lire = Coffre.lireJson, ecrire = Coffre.ecrireJson, lireTexte = Coffre.lireTexte, ecrireTexte = Coffre.ecrireTexte;

// ---------- Icône du compte dans le menu ----------
const ICONE = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8.5" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 20.5c1.4-4 4.4-6 8-6s6.6 2 8 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

function ajouterIcone() {
  const nav = document.querySelector(".entete nav");
  if (!nav || nav.querySelector(".lien-compte")) return null;
  const a = document.createElement("a");
  a.href = "compte.html";
  a.className = "lien-compte";
  a.setAttribute("aria-label", "Mon profil");
  if (/(compte|amis)\.html$/.test(location.pathname)) a.classList.add("actif");
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
  { id: "grenouille", nom: "Kiwi" },
  { id: "chien", nom: "Biscuit" },
  { id: "koala", nom: "Margot" },
  { id: "pingouin", nom: "Gaston" },
  { id: "tigre", nom: "Paprika" },
  { id: "lion", nom: "Léon" },
  { id: "elephant", nom: "Ella" },
  { id: "girafe", nom: "Zou" },
  { id: "singe", nom: "Coco" },
  { id: "souris", nom: "Mimi" },
  { id: "herisson", nom: "Piquant" },
  { id: "loup", nom: "Lou" },
  { id: "raton", nom: "Filou" },
  { id: "mouton", nom: "Flocon" },
  { id: "cochon", nom: "Rosie" },
  { id: "vache", nom: "Praline" },
  { id: "ecureuil", nom: "Noisette" },
  { id: "poussin", nom: "Piou" },
  { id: "alpaga", nom: "Pelote" },
  { id: "paresseux", nom: "Zen" }
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
  // Mes amis : une pastille quand une demande d'ami attend (nombre gardé dans data-demandes par Amis.apercu)
  const demandes = Number(a.dataset.demandes) || 0;
  if (demandes) {
    const pastille = document.createElement("span");
    pastille.className = "pastille-amis";
    pastille.setAttribute("aria-hidden", "true");
    a.appendChild(pastille);
  }
  // À côté de l'image, dans la barre du haut : « Créer ton compte », ou « Connecté : pseudo ».
  // Avant la réponse de la connexion, compte-uid dit si ce navigateur était connecté.
  const connecte = a.dataset.connecte ? a.dataset.connecte === "oui" : !!lireTexte("compte-uid");
  const texte = document.createElement("span");
  texte.className = "lien-compte-texte";
  texte.textContent = connecte ? (p.pseudo ? "Connecté : " + p.pseudo : "Connecté") : "Créer ton compte";
  a.appendChild(texte);
  a.classList.add("avec-texte");
  a.setAttribute("aria-label", (connecte ? "Mon profil, " + texte.textContent : "Mon profil : créer ton compte") +
    (demandes ? (demandes > 1 ? ", " + demandes + " demandes d'ami" : ", une demande d'ami") : ""));
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
    ui.sauvegarde(connecte);
  },
  // La ligne sous les chiffres du profil : où est gardée la progression
  sauvegarde(connecte) {
    const texte = document.getElementById("profil-sauvegarde-texte"), lien = document.getElementById("profil-sauvegarde-lien");
    if (!texte || !lien) return;
    texte.textContent = connecte ? "Sauvegardé en ligne : tu retrouves tout sur tes autres appareils." : "Tes réponses restent sur cet appareil.";
    lien.hidden = connecte;
  }
};
// Avant que la connexion réponde : ce navigateur était-il synchronisé ? (évite d'afficher « sur cet appareil » à tort)
ui.sauvegarde(!!lireTexte("compte-uid"));

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

// Lettre des nouveautés (lettre.js) : inscription d'une adresse e-mail, sans compte.
// Un document par inscription (les doublons sont retirés au moment d'envoyer) : un refus est toujours une vraie erreur.
// Garde-fou : 3 inscriptions par jour au plus depuis ce navigateur (protège le quota gratuit de Firebase).
let firebasePret;
const firebase = new Promise(ok => { firebasePret = ok; });
window.inscrireLettre = async (email, source) => {
  const adresse = String(email || "").trim().toLowerCase();
  if (!/^[^@\s/]+@[^@\s/]+\.[^@\s/]+$/.test(adresse) || adresse.length > 254) throw Object.assign(new Error("adresse"), { code: "adresse" });
  const maintenant = Date.now();
  let envois = [];
  try { envois = JSON.parse(localStorage.getItem("lettre-envois") || "[]").filter(t => maintenant - t < 864e5); } catch (e) {}
  if (envois.length >= 3) throw Object.assign(new Error("limite"), { code: "limite-jour" });
  const attente = new Promise((_, non) => setTimeout(() => non(Object.assign(new Error("reseau"), { code: "reseau" })), 12000));
  const { F, db } = await Promise.race([firebase, attente]);
  await Promise.race([F.addDoc(F.collection(db, "lettre"), { email: adresse, source: String(source || "").slice(0, 40), date: F.serverTimestamp() }), attente]);
  envois.push(maintenant);
  window.compter?.("lettre-inscription", "Inscription à la lettre des nouveautés");     // statistiques anonymes (compter.js) : jamais l'adresse
  try { localStorage.setItem("lettre-envois", JSON.stringify(envois)); } catch (e) {}
};

async function demarrer() {
  const { initializeApp } = await import(SDK + "firebase-app.js");
  const A = await import(SDK + "firebase-auth.js");
  const F = await import(SDK + "firebase-firestore.js");

  const app = initializeApp(FIREBASE_CONFIG);
  const auth = A.getAuth(app);
  auth.languageCode = "fr";
  const db = F.getFirestore(app);
  // Tests en local seulement : sessionStorage « emulateur » = 1 sur localhost branche le site sur l'émulateur Firebase
  // (notes/tests/amis/) au lieu du vrai projet. Sans effet sur opticonversion.fr.
  let emulateur = false;
  try { emulateur = location.hostname === "localhost" && sessionStorage.getItem("emulateur") === "1"; } catch (e) {}
  if (emulateur) {
    A.connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
    F.connectFirestoreEmulator(db, "localhost", 8085);
  }

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
  firebasePret({ F, db });

  // ---------- Mes amis (amis.html) ----------
  // Accès Firestore seul ; l'affichage est dans amis.html, le calcul du résumé dans rythme.js (calculerResumeAmi).
  // Règles : firestore.rules (codes, resumes, amities). Personne n'est visible tant qu'il n'a pas accepté un ami.
  const LETTRES_CODE = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";   // sans 0, O, 1, I (faciles à confondre)
  const AMIS_MAX = 50, DEMANDES_PAR_JOUR = 20, DELAI_RESUME = 5 * 60000;
  const paire = (a, b) => (a < b ? a + "_" + b : b + "_" + a);
  const erreurAmis = code => Object.assign(new Error(code), { code });
  let minuterieResume = null;
  // Aperçu pour la pastille du profil, le bilan du QCM et l'accueil : gardé 5 minutes pour cet onglet
  // (sessionStorage « amis-apercu »), pour ne pas relire Firestore à chaque page.
  const DUREE_APERCU = 5 * 60000;
  const lireApercu = () => { try { return JSON.parse(sessionStorage.getItem("amis-apercu") || "null"); } catch (e) { return null; } };
  const garderApercu = a => { try { sessionStorage.setItem("amis-apercu", JSON.stringify(a)); } catch (e) {} };
  const oublierApercu = () => { try { sessionStorage.removeItem("amis-apercu"); } catch (e) {} };
  const jourLocalAmis = () => { const d = new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  function majPastille(demandes) {
    if (!icone) return;
    const n = String(demandes || 0);
    if (icone.dataset.demandes === n) return;
    icone.dataset.demandes = n;
    majIcone(icone);
  }
  const Amis = {
    uid: () => utilisateur ? utilisateur.uid : null,
    normaliserCode: c => String(c || "").toUpperCase().replace(/[^A-Z0-9]/g, ""),
    codeValide: c => /^[A-HJ-NP-Z2-9]{6}$/.test(c),
    // Le résumé de l'élève connecté (null s'il n'a pas activé « Mes amis ») ; garde le code dans ce navigateur
    async monResume() {
      if (!utilisateur) return null;
      const snap = await F.getDoc(F.doc(db, "resumes", utilisateur.uid));
      const d = snap.exists() ? snap.data() : null;
      const local = lire("amis");
      if (d && local.code !== d.code) ecrire("amis", { code: d.code });
      if (!d && local.code) ecrire("amis", {});
      return d;
    },
    // Active « Mes amis » : tire un code libre, puis publie le résumé (lisible par les seuls amis acceptés)
    async activer() {
      if (!utilisateur) throw erreurAmis("deconnecte");
      const deja = await Amis.monResume();
      if (deja) return deja.code;
      for (let essai = 0; essai < 6; essai++) {
        const tirage = crypto.getRandomValues(new Uint32Array(6));
        const code = Array.from(tirage, n => LETTRES_CODE[n % LETTRES_CODE.length]).join("");
        try {
          await F.setDoc(F.doc(db, "codes", code), { uid: utilisateur.uid });
        } catch (e) {
          if (e.code === "permission-denied") continue;      // code déjà pris par quelqu'un : on en tire un autre
          throw e;
        }
        ecrire("amis", { code });
        await Amis.envoyerResume({ force: true });
        window.compter?.("amis-active", "Mes amis activé");
        return code;
      }
      throw erreurAmis("code");
    },
    // Envoie le résumé s'il a changé, au plus toutes les 5 minutes (le dernier changement part à la fin du délai)
    async envoyerResume(options) {
      const force = options && options.force;
      clearTimeout(minuterieResume);
      const local = lire("amis");
      if (!utilisateur || !local.code || typeof window.calculerResumeAmi !== "function") return false;
      const p = lire("profil");
      const donnees = Object.assign({ code: local.code, pseudo: String(p.pseudo || "").slice(0, 20), avatar: String(p.avatar || "").slice(0, 20),
        annee: String(p.annee || "").slice(0, 40) }, window.calculerResumeAmi());
      const empreinte = JSON.stringify(donnees);
      if (!force && empreinte === local.empreinte) return false;
      const attendre = (local.t || 0) + DELAI_RESUME - Date.now();
      if (!force && attendre > 0) { minuterieResume = setTimeout(() => Amis.envoyerResume().catch(e => console.error(e)), attendre); return false; }
      await F.setDoc(F.doc(db, "resumes", utilisateur.uid), Object.assign({}, donnees, { maj: F.serverTimestamp() }));
      ecrire("amis", { code: local.code, empreinte, t: Date.now() });
      return true;
    },
    // { demandes, amis, revises } : demandes reçues, nombre d'amis, et (avec { revises: true }) pseudos des amis
    // qui ont révisé aujourd'hui. Lit le cache s'il a moins de 5 minutes ; met la pastille du profil à jour.
    async apercu(options) {
      if (!utilisateur) return { demandes: 0, amis: 0, revises: [] };
      const veutRevises = !!(options && options.revises);
      const c = lireApercu();
      if (c && c.uid === utilisateur.uid && Date.now() - c.t < DUREE_APERCU && c.jour === jourLocalAmis() && (!veutRevises || c.revises)) {
        majPastille(c.demandes);
        return c;
      }
      const l = await (veutRevises ? Amis.liste() : Amis.liste({ sansResumes: true }));
      return Amis.retenirApercu(l, veutRevises);
    },
    retenirApercu(l, avecRevises) {
      const a = { uid: utilisateur.uid, t: Date.now(), jour: jourLocalAmis(), demandes: l.recues.length, amis: l.amis.length };
      if (avecRevises) a.revises = l.amis.filter(x => x.resume && x.resume.jour === a.jour)
        .sort((x, y) => (y.resume.semaine && y.resume.semaine.questions || 0) - (x.resume.semaine && x.resume.semaine.questions || 0))
        .map(x => x.resume.pseudo || x.pseudo || "Un ami");
      garderApercu(a);
      majPastille(a.demandes);
      return a;
    },
    // Amis acceptés (avec leur résumé), demandes reçues, demandes envoyées
    async liste(options) {
      if (!utilisateur) return { amis: [], recues: [], envoyees: [] };
      const moi = utilisateur.uid;
      const snap = await F.getDocs(F.query(F.collection(db, "amities"), F.where("membres", "array-contains", moi)));
      const amis = [], recues = [], envoyees = [];
      snap.forEach(d => {
        const a = d.data(), autre = a.membres.find(u => u !== moi);
        const item = { id: d.id, uid: autre, code: a.code, pseudo: a.pseudo, avatar: a.avatar };
        if (a.accepte) amis.push(item);
        else (a.de === moi ? envoyees : recues).push(item);
      });
      if (options && options.sansResumes) return { amis, recues, envoyees };
      await Promise.all(amis.map(async ami => {
        try {
          const r = await F.getDoc(F.doc(db, "resumes", ami.uid));
          ami.resume = r.exists() ? r.data() : null;
        } catch (e) { console.error(e); ami.resume = null; }
      }));
      Amis.retenirApercu({ amis, recues }, true);      // la liste complète tient l'aperçu à jour (page Mes amis)
      return { amis, recues, envoyees };
    },
    // Demande d'ami avec le code de l'autre. Si l'autre nous avait déjà demandé, on accepte sa demande.
    async demander(texte, deja) {
      if (!utilisateur) throw erreurAmis("deconnecte");
      const code = Amis.normaliserCode(texte);
      if (!Amis.codeValide(code)) throw erreurAmis("format");
      const moi = utilisateur.uid;
      const c = await F.getDoc(F.doc(db, "codes", code));
      if (!c.exists()) throw erreurAmis("inconnu");
      const autre = c.data().uid;
      if (autre === moi) throw erreurAmis("soi");
      const etat = deja || await Amis.liste();
      const id = paire(moi, autre);
      if (etat.amis.some(a => a.id === id)) throw erreurAmis("deja-ami");
      if (etat.envoyees.some(a => a.id === id)) throw erreurAmis("deja-demande");
      if (etat.recues.some(a => a.id === id)) { await Amis.accepter(id); return "accepte"; }
      if (etat.amis.length + etat.envoyees.length >= AMIS_MAX) throw erreurAmis("max");
      const maintenant = Date.now();
      let envois = lire("amis-demandes");
      envois = (Array.isArray(envois) ? envois : []).filter(t => maintenant - t < 864e5);
      if (envois.length >= DEMANDES_PAR_JOUR) throw erreurAmis("limite");
      await Amis.activer();             // demander un ami, c'est aussi accepter qu'il voie ton résumé une fois la demande acceptée
      const p = lire("profil");
      await F.setDoc(F.doc(db, "amities", id), { membres: [moi, autre], de: moi, code, pseudo: String(p.pseudo || "").slice(0, 20),
        avatar: String(p.avatar || "").slice(0, 20), accepte: false, date: F.serverTimestamp() });
      envois.push(maintenant);
      ecrire("amis-demandes", envois);
      oublierApercu();
      window.compter?.("ami-demande", "Demande d'ami envoyée");
      return "demande";
    },
    async accepter(id) {
      if (!utilisateur) throw erreurAmis("deconnecte");
      await Amis.activer();             // accepter, c'est montrer son résumé à cet ami
      await F.updateDoc(F.doc(db, "amities", id), { accepte: true });
      oublierApercu();
      window.compter?.("ami-accepte", "Demande d'ami acceptée");
    },
    // Refuser une demande, annuler la sienne, ou retirer un ami : il ne voit plus rien, et toi non plus
    async retirer(id) {
      if (!utilisateur) throw erreurAmis("deconnecte");
      await F.deleteDoc(F.doc(db, "amities", id));
      oublierApercu();
    },
    // Tout arrêter : amitiés, résumé et code disparaissent
    async desactiver() {
      if (!utilisateur) return;
      const moi = utilisateur.uid;
      const snap = await F.getDocs(F.query(F.collection(db, "amities"), F.where("membres", "array-contains", moi)));
      await Promise.all(snap.docs.map(d => F.deleteDoc(d.ref)));
      const r = await F.getDoc(F.doc(db, "resumes", moi));
      if (r.exists()) {
        const code = r.data().code;
        await F.deleteDoc(r.ref);
        const c = await F.getDoc(F.doc(db, "codes", code));
        if (c.exists() && c.data().uid === moi) await F.deleteDoc(c.ref);
      }
      ecrire("amis", {});
      oublierApercu();
      majPastille(0);
    }
  };
  window.Amis = Amis;
  const fournisseur = new A.GoogleAuthProvider();
  fournisseur.setCustomParameters({ prompt: "select_account" });

  let utilisateur = null;
  let minuterie = null;

  // Fusionne la progression en ligne et les changements de ce navigateur : tout le calcul est dans
  // Coffre.synchroniser (coffre.js, testé par notes/tests/tester-coffre.js). Ici, seulement l'accès à Firestore :
  // une transaction qui lit eleves/<uid>, demande au coffre les champs à écrire, et les écrit avec l'heure (maj).
  async function synchroniser() {
    if (!utilisateur) return;
    const ref = F.doc(db, "eleves", utilisateur.uid);
    const transaction = miseAJour => F.runTransaction(db, async t => {
      const snap = await t.get(ref);
      t.set(ref, Object.assign(miseAJour(snap.exists() ? snap.data() : null), { maj: F.serverTimestamp() }));
      return { nouveau: !snap.exists() };
    });
    const r = await Coffre.synchroniser(utilisateur.uid, transaction, window.migrerAnciennesCles);
    Amis.envoyerResume().catch(e => console.error(e));
    if (r.nouveau) window.compter?.("compte-cree", "Compte créé");     // statistiques anonymes (compter.js)
    majCompteurRevision();
    if (icone) majIcone(icone);
    // Si un autre appareil a apporté du nouveau, on rafraîchit les pages qui l'affichent
    if (r.change && document.body.dataset.rafraichir === "oui") rafraichirPage();
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
    window.compteUid = u ? u.uid : null;
    window.dispatchEvent(new CustomEvent("compte-change", { detail: { uid: window.compteUid } }));
    // Mes amis : la pastille du profil (demande d'ami en attente), d'après l'aperçu gardé 5 minutes
    if (u) Amis.apercu().catch(e => console.error(e));
    else majPastille(0);
    // « Mes amis » activé sur un autre appareil : une lecture par session suffit pour le savoir ici
    if (u && !lire("amis").code) {
      let vu = false;
      try { vu = sessionStorage.getItem("amis-verifie") === u.uid; sessionStorage.setItem("amis-verifie", u.uid); } catch (e) {}
      if (!vu) Amis.monResume().catch(e => console.error(e));
    }
    if (icone) { icone.classList.toggle("connecte", !!u); icone.dataset.connecte = u ? "oui" : "non"; majIcone(icone); }
    ui.montrer(!!u, u);
    if (u) {
      ecrireTexte("compte-connu", "1");      // ce navigateur s'est déjà connecté : le formulaire s'ouvrira sur « J'ai un compte »
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
    ui.sauvegarde(false);
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
    // « Créer un compte » d'abord : venu de « Créer mon compte » (accueil, bilan, carte du profil),
    // ou navigateur qui ne s'est jamais connecté. Sinon « J'ai un compte ».
    if (location.hash === "#creer-compte" || lireTexte("compte-connu") !== "1") choisirOnglet(true);
    const lienProfil = document.getElementById("profil-sauvegarde-lien");
    if (lienProfil) lienProfil.addEventListener("click", () => choisirOnglet(true));
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
    await Amis.desactiver();             // amitiés, résumé et code ami
    await F.deleteDoc(F.doc(db, "eleves", auth.currentUser.uid));
    await A.deleteUser(auth.currentUser);
    ecrireTexte("compte-uid", null);
    ecrire("attente", {});
    if (effacerNavigateur) Coffre.effacerTravail();     // tout le travail de l'élève (liste dans coffre.js), ses réglages restent
    if (formReauth) formReauth.hidden = true;
    ui.etat("Ton compte et ta progression en ligne ont été supprimés.");
  }
  let effacerNavigateurDemande = false;

  const bSupprimer = document.getElementById("bouton-supprimer");
  // La question « Supprimer ton compte ? » : une fenêtre aux couleurs du site (compte.html), « Garder mon compte » en premier
  const fenetreSupprimer = document.getElementById("fenetre-supprimer");
  if (fenetreSupprimer && !("closedBy" in HTMLDialogElement.prototype)) {
    // Safari ne connaît pas closedby="any" : un toucher à côté de la fenêtre la ferme quand même (= garder le compte)
    const dehors = e => { const r = fenetreSupprimer.getBoundingClientRect(); return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom; };
    let appuiDehors = false;
    fenetreSupprimer.addEventListener("pointerdown", e => { appuiDehors = dehors(e); });
    fenetreSupprimer.addEventListener("pointerup", e => { if (appuiDehors && dehors(e)) fenetreSupprimer.close(); });
  }
  function demanderSuppression() {
    if (!fenetreSupprimer) return Promise.resolve(null);
    fenetreSupprimer.returnValue = "";
    document.getElementById("supprimer-navigateur").checked = false;
    fenetreSupprimer.showModal();
    return new Promise(fini => fenetreSupprimer.addEventListener("close", () => {
      fini(fenetreSupprimer.returnValue === "supprimer" ? { navigateur: document.getElementById("supprimer-navigateur").checked } : null);
    }, { once: true }));
  }
  if (bSupprimer) bSupprimer.addEventListener("click", async () => {
    if (!utilisateur) return;
    const choix = await demanderSuppression();
    if (!choix) return;
    effacerNavigateurDemande = choix.navigateur;
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
