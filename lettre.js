// =====================================================================
// Lettre des nouveautés : « Préviens-moi » par e-mail, sans compte.
// ---------------------------------------------------------------------
// Chaque page qui veut le bloc y met <div class="lettre" data-lettre="accueil"></div>
// (data-lettre = d'où vient l'inscription, gardé avec l'adresse : accueil, profil, notion…).
// L'envoi passe par window.inscrireLettre (compte.js, Firebase) ; ici, seulement l'affichage.
// localStorage « lettre » = "1" quand ce navigateur s'est inscrit : le bloc dit alors simplement que c'est fait.
// Ce qu'on garde et pourquoi : page confidentialite.html, partie « Si tu demandes à être prévenu ».
// =====================================================================
(() => {
  const blocs = document.querySelectorAll("[data-lettre]");
  if (!blocs.length) return;

  const dejaInscrit = () => { try { return localStorage.getItem("lettre") === "1"; } catch (e) { return false; } };
  const MESSAGES = {
    adresse: "Cette adresse ne semble pas complète. Vérifie-la (exemple : prenom@gmail.com).",
    "limite-jour": "Trop d'inscriptions depuis cet appareil aujourd'hui. Réessaie demain.",
    reseau: "Pas de connexion pour le moment. Réessaie quand internet est revenu."
  };

  blocs.forEach((bloc, rang) => {
    const source = (bloc.dataset.lettre || "").slice(0, 40);
    const id = "lettre-" + rang;
    bloc.innerHTML =
      '<h2 id="' + id + '-titre">Préviens-moi des nouveautés</h2>' +
      '<p class="lettre-texte">Nouvelles questions, sujets blancs, fiches de révision : un e-mail quand il y a du neuf, ' +
      "deux par mois au plus. Certains présenteront des fiches ou des sujets payants. Tu te désinscris quand tu veux.</p>" +
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
    if (dejaInscrit()) { montrerInscrit(); return; }

    form.addEventListener("submit", async ev => {
      ev.preventDefault();
      const adresse = champ.value.trim().toLowerCase();
      etat.className = "lettre-etat";
      if (!/^[^@\s/]+@[^@\s/]+\.[^@\s/]+$/.test(adresse)) {
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
})();
