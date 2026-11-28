// =====================================================================
// Fiche gratuite, page de vente et ancienne lettre des nouveautés.
// ---------------------------------------------------------------------
// L'INTERRUPTEUR est juste en dessous (window.TUNNEL). Tant que fiche.ouverte vaut false :
//  - les blocs <div class="lettre" data-lettre="…"> gardent l'ancien formulaire « Reçois les nouveautés » (Firestore `lettre`) ;
//  - la page fiche-prentice.html annonce la fiche pour bientôt (en local, sur localhost, son formulaire marche « pour de faux ») ;
//  - aucune ligne vers la fiche dans les corrections du QCM.
// Le jour de l'ouverture : coller l'adresse du formulaire MailerLite, puis fiche.ouverte = true.
// Les blocs « lettre » deviennent alors un lien vers la fiche (une seule liste d'e-mails, celle de MailerLite).
// Mode d'emploi complet : notes/coordination/tunnel-site.md
// =====================================================================
window.TUNNEL = {
  fiche: {
    ouverte: false,
    page: "fiche-prentice.html",
    // Deux formulaires intégrés MailerLite, chacun relié à son groupe. Pour chacun : Formulaires > le formulaire >
    // « HTML », recopier l'adresse après action="…" (du genre https://assets.mailerlite.com/jsonp/123456/forms/987654/subscribe).
    formulaire: "",            // case NON cochée : groupe « Fiche Prentice » (reçoit seulement la fiche)
    formulaireAstuces: ""      // case cochée : groupes « Fiche Prentice » + « Astuces et offres » (jours 2 et 5, puis les offres)
  },
  vente: {
    ouverte: false,          // le 25 janvier 2027 : true (et retirer « noindex » de pieges-vision.html)
    payhip: ""               // lien Payhip du produit « Les pièges de calcul en Vision »
  }
};

(() => {
  const T = window.TUNNEL;
  const enLocal = ["localhost", "127.0.0.1", "[::1]"].includes(location.hostname);
  const lire = cle => { try { return localStorage.getItem(cle); } catch (e) { return null; } };
  const adresseValide = a => /^[^@\s/]+@[^@\s/]+\.[^@\s/]+$/.test(a);

  // Garde-fou commun : 5 envois par jour au plus depuis ce navigateur (clé déjà dans Coffre.CLES)
  const envoisDuJour = () => { try { return JSON.parse(lire("lettre-envois") || "[]").filter(t => Date.now() - t < 864e5); } catch (e) { return []; } };
  const noterEnvoi = () => { try { localStorage.setItem("lettre-envois", JSON.stringify(envoisDuJour().concat(Date.now()))); } catch (e) {} };

  // ---------- Correction d'un calcul raté (qcm.html) : une ligne vers la fiche ----------
  // Seulement en Vision (U5), seulement sur les calculs du produit à 7 € : Prentice et prismes induits,
  // aniséiconie, kératométrie, Dk/e, phories.
  const SUJETS_FICHE = /prentice|d[ée]centr|effet prismatique|prisme induit|anis[ée]i|k[ée]ratom|\bdk\b|phorie|maddox/i;
  window.ligneFicheGratuite = q => {
    if (!T.fiche.ouverte || !q || q.epreuve !== "U5") return null;
    if (!SUJETS_FICHE.test([q.question, q.contexte, q.explication].filter(Boolean).join(" "))) return null;
    const p = document.createElement("p");
    p.className = "lien-gratuit";
    p.innerHTML = 'Fiche gratuite : un calcul de Prentice corrigé pas à pas, avec ce qu\'on écrit sur la copie. <a href="' + T.fiche.page + '">La recevoir</a>';
    return p;
  };

  // ---------- Blocs « lettre » (accueil, profil, notions) ----------
  const MESSAGES = {
    adresse: "Cette adresse ne semble pas complète. Vérifie-la (exemple : prenom@gmail.com).",
    "limite-jour": "Trop d'inscriptions depuis cet appareil aujourd'hui. Réessaie demain.",
    reseau: "Pas de connexion pour le moment. Réessaie quand internet est revenu."
  };

  document.querySelectorAll("[data-lettre]").forEach((bloc, rang) => {
    const id = "lettre-" + rang;

    if (T.fiche.ouverte) {
      // Une seule liste : le bloc mène à la fiche gratuite (inscription chez MailerLite)
      bloc.classList.add("vers-fiche");
      bloc.innerHTML =
        '<h2 id="' + id + '-titre">Un calcul de Prentice corrigé, en fiche gratuite</h2>' +
        '<p class="lettre-texte">Deux pages à imprimer : un exercice corrigé pas à pas, les erreurs classiques et ce qu\'on écrit sur la copie. Tu la reçois par e-mail.</p>' +
        '<a class="bouton" href="' + T.fiche.page + '">Recevoir la fiche</a>';
      return;
    }

    // Ancien formulaire (Firestore `lettre`), tant que la fiche n'est pas ouverte
    const source = (bloc.dataset.lettre || "").slice(0, 40);
    bloc.innerHTML =
      '<h2 id="' + id + '-titre">Reçois les nouveautés par e-mail</h2>' +
      '<p class="lettre-texte">On t\'écrit quand le site s\'enrichit : nouvelles questions, sujets blancs, fiches de révision. ' +
      "Deux e-mails par mois au maximum. Certains parleront aussi de fiches ou de sujets payants. " +
      "Tu te désinscris quand tu veux.</p>" +
      '<form class="lettre-form" novalidate aria-labelledby="' + id + '-titre">' +
      '<label for="' + id + '-email">Ton adresse e-mail</label>' +
      '<div class="lettre-ligne">' +
      '<input id="' + id + '-email" type="email" autocomplete="email" inputmode="email" maxlength="254" required placeholder="prenom@gmail.com">' +
      '<button class="bouton" type="submit">Me prévenir</button>' +
      "</div>" +
      '<p class="lettre-etat" role="status" aria-live="polite"></p>' +
      "</form>" +
      '<p class="lettre-mention">On ne garde que ton adresse, pour ces e-mails seulement. ' +
      '<a href="confidentialite.html#lettre">Ce qu\'on en fait</a></p>';

    const form = bloc.querySelector("form");
    const champ = bloc.querySelector("input");
    const bouton = bloc.querySelector("button");
    const etat = bloc.querySelector(".lettre-etat");

    const montrerInscrit = adresse => {
      bloc.classList.add("inscrit");
      form.hidden = true;
      bloc.querySelector(".lettre-texte").textContent = adresse
        ? "C'est noté : tu recevras le prochain e-mail à " + adresse + "."
        : "Tu es inscrit : tu recevras un e-mail quand il y aura du neuf.";
    };
    if (lire("lettre") === "1") { montrerInscrit(); return; }

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const adresse = champ.value.trim().toLowerCase();
      etat.className = "lettre-etat";
      if (!adresseValide(adresse)) {
        etat.textContent = MESSAGES.adresse;
        etat.classList.add("erreur");
        champ.setAttribute("aria-invalid", "true");
        champ.focus();
        return;
      }
      champ.removeAttribute("aria-invalid");
      if (typeof window.inscrireLettre !== "function") {
        etat.textContent = MESSAGES.reseau;
        etat.classList.add("erreur");
        return;
      }
      bouton.disabled = true;
      etat.textContent = "Envoi…";
      try {
        await window.inscrireLettre(adresse, source);
        try { localStorage.setItem("lettre", "1"); } catch (e) {}
        // Les autres blocs de la page disent aussi que c'est fait
        document.querySelectorAll("[data-lettre]").forEach(b => { if (b !== bloc && !b.classList.contains("inscrit")) b.dispatchEvent(new Event("lettre-inscrit")); });
        montrerInscrit(adresse);
        const texte = bloc.querySelector(".lettre-texte");   // le lecteur d'écran lit la confirmation
        texte.setAttribute("tabindex", "-1");
        texte.focus();
      } catch (err) {
        console.error(err);
        etat.textContent = MESSAGES[err && err.code] || "L'inscription n'a pas marché. Réessaie dans un moment.";
        etat.classList.add("erreur");
        bouton.disabled = false;
      }
    });
    bloc.addEventListener("lettre-inscrit", () => montrerInscrit());
  });

  // ---------- Page de la fiche gratuite (fiche-prentice.html) ----------
  const zoneFiche = document.getElementById("gratuit-zone");
  if (zoneFiche) {
    const form = document.getElementById("gratuit-form");
    const bientot = document.getElementById("gratuit-bientot");
    const merci = document.getElementById("gratuit-merci");
    const demo = enLocal && !T.fiche.formulaire;           // en local sans MailerLite : on fait semblant
    const pret = T.fiche.ouverte && T.fiche.formulaire;
    if (!pret && !enLocal) { form.hidden = true; bientot.hidden = false; return; }
    if (demo) document.getElementById("gratuit-demo").hidden = false;

    const champ = document.getElementById("gratuit-email");
    const caseAstuces = document.getElementById("gratuit-astuces");
    const bouton = form.querySelector("button");
    const etat = document.getElementById("gratuit-etat");

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const adresse = champ.value.trim().toLowerCase();
      etat.className = "lettre-etat";
      if (!adresseValide(adresse)) {
        etat.textContent = MESSAGES.adresse;
        etat.classList.add("erreur");
        champ.setAttribute("aria-invalid", "true");
        champ.focus();
        return;
      }
      champ.removeAttribute("aria-invalid");
      if (envoisDuJour().length >= 5) {
        etat.textContent = MESSAGES["limite-jour"];
        etat.classList.add("erreur");
        return;
      }
      bouton.disabled = true;
      etat.textContent = "Envoi…";
      try {
        if (demo) {
          await new Promise(r => setTimeout(r, 500));
        } else {
          // Formulaire MailerLite en HTML simple : mêmes champs que leur code à coller, sans charger leur script
          const donnees = new FormData();
          donnees.append("fields[email]", adresse);
          donnees.append("ml-submit", "1");
          donnees.append("anticsrf", "true");
          const action = caseAstuces.checked && T.fiche.formulaireAstuces ? T.fiche.formulaireAstuces : T.fiche.formulaire;
          await fetch(action, { method: "POST", body: donnees, mode: "no-cors" });     // réponse illisible (autre site) : seule une panne réseau est vue
        }
        noterEnvoi();
        window.compter?.("fiche-demandee", "Fiche gratuite demandée");      // seulement le nom de l'action, jamais l'adresse
        form.hidden = true;
        merci.hidden = false;
        document.getElementById("gratuit-merci-adresse").textContent = adresse;
        merci.setAttribute("tabindex", "-1");
        merci.focus();
      } catch (err) {
        console.error(err);
        etat.textContent = navigator.onLine === false ? MESSAGES.reseau : "L'envoi n'a pas marché. Réessaie dans un moment.";
        etat.classList.add("erreur");
        bouton.disabled = false;
      }
    });
  }

  // ---------- Page de vente (pieges-vision.html) ----------
  const achat = document.getElementById("vente-achat");
  if (achat) {
    const bouton = document.getElementById("vente-acheter");
    const bientot = document.getElementById("vente-bientot");
    if (T.vente.ouverte && T.vente.payhip) {
      bouton.href = T.vente.payhip;
      bouton.hidden = false;
      bientot.hidden = true;
      bouton.addEventListener("click", () => window.compter?.("vente-acheter", "Clic sur Acheter (pièges de calcul en Vision)"));
    } else if (enLocal) {
      bouton.hidden = false;                                  // en local : on voit le bouton (il ne mène nulle part)
      bouton.addEventListener("click", ev => { ev.preventDefault(); bientot.textContent = "Démonstration : le lien Payhip n'est pas encore collé."; });
    }
  }
})();
