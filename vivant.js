// =====================================================================
// VIVANT · le mouvement du site (chargé sur toutes les pages)
// ---------------------------------------------------------------------
//  1. Relief : les cartes d'épreuve et de niveau s'inclinent sous le pointeur.
//  2. Étincelles : une bonne réponse fait jaillir quelques grains d'or.
//  3. Personnages : un clic sur le compagnon le fait sauter.
//  4. Calculateurs : le résultat se « met au point » à chaque calcul.
// (Retirés le 2026-11-12 parce qu'ils faisaient « site fait par une IA » :
//  la lumière qui suivait le pointeur et les compteurs de l'accueil.)
// Tout est coupé si l'élève a désactivé les animations dans son système.
// Aucun de ces effets n'est nécessaire au fonctionnement des pages.
// =====================================================================

(function () {
  const calme = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const souris = matchMedia("(hover: hover) and (pointer: fine)").matches;

  // ---------------- 1. Relief (ordinateur seulement) ----------------
  const RELIEF = ".epreuve, .niveau";
  if (souris && !calme) {
    let dernier = null, incline = null, prevu = false;
    const appliquer = () => {
      prevu = false;
      const e = dernier;
      if (!e || !e.target || !e.target.closest) return;
      // La carte penche vers le pointeur
      const carte = e.target.closest(RELIEF);
      if (incline && incline !== carte) { incline.style.removeProperty("--rx"); incline.style.removeProperty("--ry"); }
      incline = carte && !carte.disabled ? carte : null;
      if (incline) {
        const r = incline.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5;
        incline.style.setProperty("--ry", (px * 9).toFixed(2) + "deg");
        incline.style.setProperty("--rx", (-py * 7).toFixed(2) + "deg");
      }
    };
    document.addEventListener("pointermove", e => {
      dernier = e;
      if (!prevu) { prevu = true; requestAnimationFrame(appliquer); }
    }, { passive: true });
    document.documentElement.addEventListener("pointerleave", () => {
      if (incline) { incline.style.removeProperty("--rx"); incline.style.removeProperty("--ry"); incline = null; }
    });
  }

  // ---------------- 2. Étincelles d'une bonne réponse ----------------
  function etincelles(x, y) {
    if (calme || !document.body.animate) return;
    for (let i = 0; i < 16; i++) {
      const g = document.createElement("span");
      g.className = "etincelle";
      g.style.left = x + "px";
      g.style.top = y + "px";
      if (i % 3 === 0) g.style.background = "#fff";
      document.body.appendChild(g);
      const angle = (i / 16) * Math.PI * 2 + Math.random() * 0.5, loin = 46 + Math.random() * 70, taille = 0.5 + Math.random();
      g.animate([
        { transform: "translate(0, 0) scale(" + taille + ")", opacity: 1 },
        { transform: "translate(" + Math.cos(angle) * loin + "px, " + (Math.sin(angle) * loin + 26) + "px) scale(0)", opacity: 0 }
      ], { duration: 620 + Math.random() * 380, easing: "cubic-bezier(.16, 1, .3, 1)" }).onfinish = () => g.remove();
    }
  }
  document.addEventListener("click", e => {
    const b = e.target.closest && e.target.closest(".choix button, .choix-rayon");
    if (!b) return;
    const x = e.clientX || b.getBoundingClientRect().left + 30, y = e.clientY || b.getBoundingClientRect().top + 24;
    // La page vient de corriger : on regarde si la réponse cliquée est la bonne
    requestAnimationFrame(() => {
      if ((b.classList.contains("juste") && !b.classList.contains("faux")) || b.classList.contains("bon")) etincelles(x, y);
    });
  });
  window.etincelles = etincelles;

  // ---------------- 3. Un clic sur le compagnon le fait sauter ----------------
  document.addEventListener("click", e => {
    const img = e.target.closest && e.target.closest(".expl-diosl, .bilan-nounours, .jeu-compagnon, .def-fin-compagnon, .profil-avatar, .tete-compagnon, .jour-compagnon");
    if (!img || calme) return;
    img.classList.remove("perso-saut");
    void img.offsetWidth;
    img.classList.add("perso-saut");
    img.addEventListener("animationend", () => img.classList.remove("perso-saut"), { once: true });
  });

  // ---------------- 4. Calculateurs : le résultat se met au point ----------------
  if (!calme && "MutationObserver" in window) {
    document.querySelectorAll(".resultat").forEach(zone => {
      new MutationObserver(() => {
        zone.classList.remove("neuf");
        void zone.offsetWidth;
        zone.classList.add("neuf");
      }).observe(zone, { childList: true });
    });
  }
})();
