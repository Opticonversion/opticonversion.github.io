// ---------- Page « Mes amis » (amis.html) ----------
// Affichage seul. L'accès à Firestore est dans compte.js (window.Amis), le résumé envoyé aux amis
// est calculé par rythme.js (calculerResumeAmi). Une amitié se fait avec un code ami (ou le lien amis.html#CODE),
// et seulement quand l'autre accepte. On ne montre jamais que des totaux, jamais le détail des réponses.

(() => {
  const $ = id => document.getElementById(id);
  const creer = (balise, classe, texte) => {
    const el = document.createElement(balise);
    if (classe) el.className = classe;
    if (texte !== undefined) el.textContent = texte;
    return el;
  };
  const MESSAGES = {
    format: "Un code ami a 6 caractères, lettres et chiffres.",
    inconnu: "Ce code ne correspond à personne. Vérifie-le avec ton ami.",
    soi: "C'est ton propre code. Envoie-le à tes amis pour qu'ils t'ajoutent.",
    "deja-ami": "Vous êtes déjà amis.",
    "deja-demande": "Ta demande est déjà partie. Elle attend sa réponse.",
    max: "Tu as atteint 50 amis, le maximum.",
    limite: "Tu as envoyé beaucoup de demandes aujourd'hui. Réessaie demain.",
    deconnecte: "Connecte-toi d'abord à ton compte."
  };
  const message = e => MESSAGES[e && e.code] || "Ça n'a pas marché. Vérifie ta connexion et réessaie.";
  const nomAvatar = id => (window.AVATARS || []).some(a => a.id === id) ? id : "clin-doeil";
  const image = id => (window.cheminAvatar ? window.cheminAvatar(nomAvatar(id)) : "img/nounours-clin-doeil.svg");
  const pluriel = (n, mot) => n + " " + mot + (n > 1 ? "s" : "");
  const lienInvitation = code => "https://opticonversion.fr/amis.html#" + code;

  // Code reçu par un lien d'invitation : gardé le temps de créer son compte
  function codeDuLien() {
    const brut = decodeURIComponent(location.hash.slice(1) || "").toUpperCase().replace(/[^A-Z0-9]/g, "");
    if (/^[A-HJ-NP-Z2-9]{6}$/.test(brut)) { Coffre.ecrireTexte("amis-invitation", brut); return brut; }
    return Coffre.lireTexte("amis-invitation") || "";
  }
  let invitation = codeDuLien();

  let etat = { amis: [], recues: [], envoyees: [] }, monCode = null, charge = 0;

  function dire(id, texte, erreur) {
    const el = $(id);
    if (!el) return;
    el.textContent = texte || "";
    el.classList.toggle("erreur", !!erreur);
  }

  // ---------- Les trois états de la page ----------
  function montrer(qui) {
    $("amis-chargement").hidden = qui !== "chargement";
    $("amis-deconnecte").hidden = qui !== "deconnecte";
    $("amis-connecte").hidden = qui !== "connecte";
  }

  function afficherDeconnecte() {
    montrer("deconnecte");
    $("amis-invitation-recue").hidden = !invitation;
    if (invitation) $("amis-invitation-code").textContent = invitation;
  }

  async function charger() {
    const tour = ++charge;
    if (!window.Amis || !window.compteUid) return;
    try {
      const [resume, liste] = await Promise.all([Amis.monResume(), Amis.liste()]);
      if (tour !== charge) return;
      monCode = resume ? resume.code : null;
      etat = liste;
      afficherTout();
    } catch (e) {
      console.error(e);
      montrer("connecte");
      dire("amis-etat", "Impossible de charger tes amis pour le moment. Vérifie ta connexion.", true);
    }
  }

  function afficherTout() {
    montrer("connecte");
    afficherCode();
    afficherInvitation();
    afficherDemandes();
    afficherAmis();
    $("bloc-arreter").hidden = !monCode;
  }

  // ---------- Ton code ami ----------
  function afficherCode() {
    $("code-actif").hidden = !monCode;
    $("code-inactif").hidden = !!monCode;
    if (monCode) {
      $("mon-code").textContent = monCode;
      $("mon-lien").textContent = lienInvitation(monCode).replace("https://", "");
    }
    $("sans-pseudo").hidden = !!(Coffre.lireJson("profil").pseudo);
  }

  $("bouton-activer").addEventListener("click", async () => {
    $("bouton-activer").disabled = true;
    dire("code-etat", "Création de ton code…");
    try {
      monCode = await Amis.activer();
      dire("code-etat", "");
      afficherTout();
    } catch (e) {
      console.error(e);
      dire("code-etat", message(e), true);
    } finally {
      $("bouton-activer").disabled = false;
    }
  });

  async function partager() {
    const url = lienInvitation(monCode);
    const texte = "Ajoute-moi en ami sur Opticonversion, pour réviser le BTS OL ensemble. Mon code ami : " + monCode;
    if (navigator.share) {
      try { await navigator.share({ title: "Opticonversion", text: texte, url }); window.compter?.("amis-partage", "Lien d'ami partagé"); return; }
      catch (e) { if (e.name === "AbortError") return; }
    }
    copier();
  }
  async function copier() {
    try {
      await navigator.clipboard.writeText(lienInvitation(monCode));
      dire("code-etat", "Lien copié. Colle-le dans un message à ton ami.");
      window.compter?.("amis-partage", "Lien d'ami partagé");
    } catch (e) {
      dire("code-etat", "Copie impossible ici : recopie le lien affiché au-dessus.", true);
    }
  }
  $("bouton-partager").addEventListener("click", partager);
  $("bouton-copier").addEventListener("click", copier);

  // ---------- Ajouter un ami ----------
  function afficherInvitation() {
    if (!invitation) return;
    const champ = $("champ-code");
    if (invitation === monCode) {
      dire("ajout-etat", "C'est ton propre lien d'invitation. Envoie-le à tes amis pour qu'ils t'ajoutent.");
      Coffre.ecrireTexte("amis-invitation", null);
      invitation = "";
      return;
    }
    if (!champ.value) champ.value = invitation;
    dire("ajout-etat", "Tu as reçu le code " + invitation + ". Appuie sur « Ajouter » pour envoyer ta demande.");
  }

  $("form-ajout").addEventListener("submit", async e => {
    e.preventDefault();
    const champ = $("champ-code"), bouton = $("bouton-ajouter");
    bouton.disabled = true;
    dire("ajout-etat", "Envoi de ta demande…");
    try {
      const r = await Amis.demander(champ.value, etat);
      champ.value = "";
      Coffre.ecrireTexte("amis-invitation", null);
      invitation = "";
      if (location.hash) history.replaceState(null, "", location.pathname);
      await charger();
      dire("ajout-etat", r === "accepte" ? "Vous êtes amis." : "Demande envoyée. Dès que ton ami l'accepte, vous voyez chacun le résumé de l'autre.");
    } catch (err) {
      if (!MESSAGES[err.code]) console.error(err);
      dire("ajout-etat", message(err), true);
      if (err.code === "soi") { Coffre.ecrireTexte("amis-invitation", null); invitation = ""; }
    } finally {
      bouton.disabled = false;
    }
  });

  // ---------- Demandes reçues et envoyées ----------
  function afficherDemandes() {
    const zone = $("liste-demandes");
    zone.innerHTML = "";
    $("bloc-demandes").hidden = !etat.recues.length && !etat.envoyees.length;
    etat.recues.forEach(d => {
      const li = creer("li", "demande");
      const img = creer("img", "demande-avatar");
      img.src = image(d.avatar); img.alt = ""; img.width = 48; img.height = 48;
      const texte = creer("p", "demande-texte");
      texte.append(creer("b", "", d.pseudo || "Un élève sans pseudo"), " veut t'ajouter en ami.");
      const actions = creer("div", "demande-actions");
      const oui = creer("button", "bouton", "Accepter"), non = creer("button", "bouton secondaire", "Refuser");
      oui.type = non.type = "button";
      oui.onclick = () => agir(li, () => Amis.accepter(d.id));
      non.onclick = () => agir(li, () => Amis.retirer(d.id));
      actions.append(oui, non);
      li.append(img, texte, actions);
      zone.appendChild(li);
    });
    etat.envoyees.forEach(d => {
      const li = creer("li", "demande demande-envoyee");
      const texte = creer("p", "demande-texte");
      texte.append("Ta demande avec le code ", creer("b", "", d.code), " attend sa réponse.");
      const annuler = creer("button", "bouton secondaire", "Annuler");
      annuler.type = "button";
      annuler.onclick = () => agir(li, () => Amis.retirer(d.id));
      const actions = creer("div", "demande-actions");
      actions.appendChild(annuler);
      li.append(texte, actions);
      zone.appendChild(li);
    });
    if (etat.recues.length) $("bloc-demandes").querySelector("h2").textContent = etat.recues.length > 1 ? "Demandes d'ami" : "Une demande d'ami";
    else $("bloc-demandes").querySelector("h2").textContent = "Demandes en attente";
  }

  async function agir(li, action) {
    li.querySelectorAll("button").forEach(b => { b.disabled = true; });
    try {
      await action();
      await charger();
    } catch (e) {
      console.error(e);
      li.querySelectorAll("button").forEach(b => { b.disabled = false; });
      dire("amis-etat", message(e), true);
    }
  }

  // ---------- Tes amis ----------
  const cleJour = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const lundiActuel = () => rythmeCle(rythmeLundi(rythmeMidi(0)));
  const semaineDe = r => (r && r.semaine && r.semaine.lundi === lundiActuel() ? r.semaine : { questions: 0, jours: 0 });
  const dateMaj = r => (r && r.maj && typeof r.maj.toDate === "function" ? r.maj.toDate() : null);

  function phraseSemaine(r) {
    const s = semaineDe(r);
    if (!s.questions) return "Pas encore de révision cette semaine.";
    return "Cette semaine : " + pluriel(s.questions, "question") + ", " + pluriel(s.jours, "jour") + " de révision.";
  }
  // La série n'est sûre que si le résumé date d'aujourd'hui ou d'hier ; sinon on dit le jour de la dernière révision
  function phraseSerie(r) {
    const d = dateMaj(r);
    if (!d) return "";
    const auj = rythmeMidi(0), hier = rythmeMidi(-1);
    if ((cleJour(d) === cleJour(auj) || cleJour(d) === cleJour(hier)) && r.serie >= 2) return "Série en cours : " + r.serie + " jours d'affilée.";
    if (cleJour(d) === cleJour(auj) || cleJour(d) === cleJour(hier)) return "";
    return "Dernier passage sur le site : le " + d.toLocaleDateString("fr-FR", { day: "numeric", month: "long" }) + ".";
  }

  function carteAmi(ami) {
    const r = ami.resume;
    const carte = creer("li", "ami");
    const tete = creer("div", "ami-tete");
    const img = creer("img", "ami-avatar");
    img.src = image(r ? r.avatar : ami.avatar); img.alt = ""; img.width = 64; img.height = 64;
    const qui = creer("div", "ami-qui");
    qui.appendChild(creer("p", "ami-pseudo", (r && r.pseudo) || ami.pseudo || "Sans pseudo"));
    if (r && r.annee) qui.appendChild(creer("p", "ami-annee", r.annee));
    const retirer = creer("button", "ami-retirer", "Retirer");
    retirer.type = "button";
    retirer.setAttribute("aria-label", "Retirer " + ((r && r.pseudo) || "cet ami") + " de tes amis");
    retirer.onclick = () => demanderRetrait(ami, carte);
    tete.append(img, qui, retirer);
    carte.appendChild(tete);
    if (!r) {
      carte.appendChild(creer("p", "ami-semaine", "Son résumé n'est pas encore disponible."));
      return carte;
    }
    carte.appendChild(creer("p", "ami-semaine", phraseSemaine(r)));
    const serie = phraseSerie(r);
    carte.appendChild(creer("p", "ami-detail", pluriel(r.questions || 0, "question") + " faite" + ((r.questions || 0) > 1 ? "s" : "") + " en tout." + (serie ? " " + serie : "")));
    const epreuves = creer("div", "ami-epreuves");
    EPREUVES.forEach(e => {
      const p = r.reussite && r.reussite[e.code];
      if (!p || !p[1]) return;
      const ligne = creer("div", "ami-epreuve");
      ligne.dataset.epreuve = e.code;
      const nom = creer("span", "ami-epreuve-nom");
      nom.append(creer("b", "", e.court || e.code), " " + Math.round(p[0] / p[1] * 100) + " % de réussite");
      const total = Math.max(Catalogue.ordinaires(e.code).length, p[1]);
      ligne.append(nom, creerBarreProgression({ total, faites: p[1], reussies: p[0] }, { petite: true,
        detail: p[1] + " / " + total + (p[1] > 1 ? " faites · " : " faite · ") + motReussies(p[0]),
        aria: (e.court || e.nom) + " : " + p[1] + " questions faites sur " + total + ", " + p[0] + " réussies" }));
      epreuves.appendChild(ligne);
    });
    if (epreuves.children.length) carte.appendChild(epreuves);
    return carte;
  }

  function afficherAmis() {
    const zone = $("liste-amis");
    zone.innerHTML = "";
    // Les plus actifs de la semaine d'abord, sans numéro ni podium
    const tries = etat.amis.slice().sort((a, b) => semaineDe(b.resume).questions - semaineDe(a.resume).questions
      || ((a.resume && a.resume.pseudo) || "").localeCompare((b.resume && b.resume.pseudo) || "", "fr"));
    tries.forEach(a => zone.appendChild(carteAmi(a)));
    $("amis-vide").hidden = etat.amis.length > 0;
    $("titre-amis").textContent = etat.amis.length ? "Tes amis (" + etat.amis.length + ")" : "Tes amis";
  }

  // ---------- Retirer un ami, tout arrêter ----------
  const fenetre = $("fenetre-retirer");
  function confirmer(titre, texte, bouton) {
    $("fenetre-retirer-titre").textContent = titre;
    $("fenetre-retirer-texte").textContent = texte;
    $("fenetre-retirer-oui").textContent = bouton;
    fenetre.returnValue = "";
    fenetre.showModal();
    return new Promise(fini => fenetre.addEventListener("close", () => fini(fenetre.returnValue === "oui"), { once: true }));
  }
  async function demanderRetrait(ami, carte) {
    const nom = (ami.resume && ami.resume.pseudo) || ami.pseudo || "cet ami";
    if (!(await confirmer("Retirer " + nom + " ?", "Vous ne verrez plus le résumé l'un de l'autre. Pour redevenir amis, il faudra une nouvelle demande.", "Retirer"))) return;
    agir(carte, () => Amis.retirer(ami.id));
  }
  $("bouton-arreter").addEventListener("click", async () => {
    if (!(await confirmer("Arrêter Mes amis ?", "Tous tes amis sont retirés, ton résumé et ton code ami sont supprimés. Personne ne voit plus rien de ta progression.", "Tout arrêter"))) return;
    $("bouton-arreter").disabled = true;
    try {
      await Amis.desactiver();
      monCode = null;
      await charger();
      dire("amis-etat", "Mes amis est arrêté. Ton résumé et ton code ont été supprimés.");
    } catch (e) {
      console.error(e);
      dire("amis-etat", message(e), true);
    } finally {
      $("bouton-arreter").disabled = false;
    }
  });

  // ---------- Connexion ----------
  window.addEventListener("compte-change", e => {
    if (e.detail.uid) { montrer("chargement"); charger(); }
    else afficherDeconnecte();
  });
  // Un lien d'invitation ouvert alors que la page est déjà affichée
  window.addEventListener("hashchange", () => {
    invitation = codeDuLien();
    if (window.compteUid) afficherInvitation(); else afficherDeconnecte();
  });
  // Sans connexion possible (hors ligne, Firebase bloqué) : on le dit au bout de 10 s
  setTimeout(() => {
    if (!$("amis-chargement").hidden && window.compteUid === undefined) {
      dire("amis-chargement-texte", "La connexion est indisponible pour le moment. Mes amis a besoin d'internet.");
    }
  }, 10000);
  // Retour sur la page (autre onglet, appli rouverte) : on recharge pour voir les nouvelles demandes
  let dernierRetour = Date.now();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden || !window.compteUid || Date.now() - dernierRetour < 60000) return;
    dernierRetour = Date.now();
    charger();
  });
})();
