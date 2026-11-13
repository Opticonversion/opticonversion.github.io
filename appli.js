// =====================================================================
// L'appli : mode hors ligne (service worker sw.js), bandeau « nouvelle version »
// et petite invitation à installer le site sur l'écran d'accueil.
// Chargé en defer sur toutes les pages ; rien d'autre n'en dépend.
// =====================================================================
(function () {
  function lire(cle) { try { return localStorage.getItem(cle); } catch (e) { return null; } }
  function ecrire(cle, v) { try { localStorage.setItem(cle, v); } catch (e) {} }

  const installee = (window.matchMedia && matchMedia("(display-mode: standalone)").matches) || navigator.standalone === true;

  // Même bandeau que « Ta progression a été mise à jour » (compte.js), en bas de l'écran
  function bandeau(id, html) {
    const ancien = document.getElementById(id);
    if (ancien) ancien.remove();
    const b = document.createElement("div");
    b.id = id;
    b.className = "bandeau-maj";
    b.setAttribute("role", "status");
    b.innerHTML = html;
    document.body.appendChild(b);
    return b;
  }

  // ---------- Mode hors ligne et nouvelles versions ----------
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    // Le service worker qui sert cette page est remplacé pendant qu'elle est ouverte :
    // une nouvelle version du site vient d'être publiée. (La toute première installation
    // n'en remplace aucun : pas de bandeau.)
    let precedent = navigator.serviceWorker.controller;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      const remplace = precedent;
      precedent = navigator.serviceWorker.controller;
      if (!remplace) return;
      const inv = document.getElementById("invitation-appli");
      if (inv) inv.remove();
      const maj = document.getElementById("bandeau-maj");
      if (maj) maj.remove();
      const b = bandeau("bandeau-version",
        '<span>Une nouvelle version du site est arrivée.</span>' +
        '<button type="button" class="bouton">Recharger</button>' +
        '<button type="button" class="bandeau-fermer" aria-label="Fermer">×</button>');
      b.querySelector(".bouton").onclick = () => location.reload();
      b.querySelector(".bandeau-fermer").onclick = () => b.remove();
    });

    window.addEventListener("load", () => {
      navigator.serviceWorker.register("sw.js").then(reg => {
        // L'appli peut rester ouverte des jours sur un téléphone : on regarde s'il y a du
        // nouveau quand l'élève y revient (au plus une fois par heure).
        let dernier = Date.now();
        document.addEventListener("visibilitychange", () => {
          if (document.visibilityState === "visible" && Date.now() - dernier > 3600e3) {
            dernier = Date.now();
            reg.update().catch(() => {});
          }
        });
      }).catch(e => console.warn("Mode hors ligne indisponible", e));
    });
  }

  // ---------- Invitation à installer l'appli ----------
  // Discrète : sur l'accueil et Essentiel seulement, à partir de la 2e visite, jamais
  // si l'appli est déjà installée ; « Non merci » la ferme pour de bon.
  if (installee || lire("appli-invitation") === "fermee") return;
  const page = location.pathname.split("/").pop() || "index.html";
  if (page !== "index.html" && page !== "essentiel.html") return;
  const visites = Number(lire("appli-visites") || 0) + 1;
  ecrire("appli-visites", String(visites));
  if (visites < 2) return;
  // Montrée au plus une fois par semaine tant que l'élève n'a pas choisi
  if (Date.now() - Number(lire("appli-invitation-vue") || 0) < 7 * 864e5) return;
  function vue() { ecrire("appli-invitation-vue", String(Date.now())); }

  // Une seule invitation par jour sur tout le site (rythme.js : « invitation-jour »), et aucune le premier
  // jour de révision : ce jour-là, l'élève découvre sa séance, rien d'autre.
  function cleJour(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function placeLibre() {
    try {
      const temps = Object.values(JSON.parse(lire("progression-t") || "{}")).map(Number).filter(Boolean);
      const minuit = new Date();
      minuit.setHours(0, 0, 0, 0);
      if (!temps.length || Math.min.apply(null, temps) >= minuit.getTime()) return false;
      const e = JSON.parse(lire("invitation-jour") || "{}") || {};
      return e.jour !== cleJour(new Date()) || e.type === "appli";
    } catch (e) { return true; }
  }
  function prendrePlace() { ecrire("invitation-jour", JSON.stringify({ jour: cleJour(new Date()), type: "appli" })); }

  function fermerPourDeBon(b) {
    ecrire("appli-invitation", "fermee");
    b.remove();
  }

  const ua = navigator.userAgent;
  const iphone = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const PARTAGER = '<svg class="ico-partager" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v12M7.5 7.5 12 3l4.5 4.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 10H6v11h12V10h-2" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>';

  if (iphone) {
    window.addEventListener("load", () => setTimeout(() => {
      if (document.getElementById("bandeau-maj") || document.getElementById("bandeau-version") || document.getElementById("invitation-compte") || !placeLibre()) return;
      const b = bandeau("invitation-appli",
        '<span>Pour avoir le site en appli, même sans internet : touche Partager ' + PARTAGER +
        ', puis « Sur l\'écran d\'accueil ».</span>' +
        '<button type="button" class="bouton-discret">Non merci</button>');
      b.classList.add("invitation-appli");
      vue();
      prendrePlace();
      b.querySelector(".bouton-discret").onclick = () => fermerPourDeBon(b);
    }, 2500));
    return;
  }

  // Android et ordinateur (Chrome, Edge…) : le navigateur prévient quand l'installation est possible
  window.addEventListener("beforeinstallprompt", ev => {
    ev.preventDefault();
    if (document.getElementById("bandeau-maj") || document.getElementById("bandeau-version") || document.getElementById("invitation-compte") || !placeLibre()) return;
    const b = bandeau("invitation-appli",
      '<span>Le site s\'installe comme une appli et marche sans internet.</span>' +
      '<button type="button" class="bouton">Installer</button>' +
      '<button type="button" class="bouton-discret">Non merci</button>');
    b.classList.add("invitation-appli");
    vue();
    prendrePlace();
    b.querySelector(".bouton").onclick = async () => {
      b.remove();
      ev.prompt();
      try { await ev.userChoice; } catch (e) {}
    };
    b.querySelector(".bouton-discret").onclick = () => fermerPourDeBon(b);
  });
  window.addEventListener("appinstalled", () => {
    ecrire("appli-invitation", "fermee");
    const b = document.getElementById("invitation-appli");
    if (b) b.remove();
  });
})();
