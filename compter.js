// =====================================================================
// Statistiques d'usage : compte, sans rien qui identifie l'élève, quelques actions clés
// (série finie, examen blanc, niveau de l'Atelier…), avec les « événements » de GoatCounter.
// Usage : window.compter?.("examen-rendu-U5", "Examen blanc rendu (U5)")
// Jamais d'id, de pseudo, d'e-mail ni d'heure : seulement le nom de l'action.
// Ne casse jamais rien : GoatCounter bloqué, absent ou hors ligne → rien ne se passe.
// Sur le serveur local (localhost) rien n'est envoyé : l'appel est seulement noté dans
// window.__compteurs, pour les tests.
// Liste des actions comptées : notes/coordination/stats-usage.md
// =====================================================================
(function () {
  const h = location.hostname;
  const local = location.protocol === "file:" || h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "" || h.endsWith(".localhost");

  function envoyer(nom, titre, essai) {
    try {
      const gc = window.goatcounter;
      if (gc && typeof gc.count === "function") {
        gc.count({ path: nom, title: titre || nom, event: true });
        return;
      }
      // GoatCounter pas encore chargé (il arrive en async) : on réessaie un peu plus tard, deux fois au plus
      if (essai < 2) setTimeout(() => envoyer(nom, titre, essai + 1), 3000);
    } catch (e) {}
  }

  window.compter = function (nom, titre) {
    try {
      nom = String(nom || "").slice(0, 60);
      if (!nom) return;
      if (local) { (window.__compteurs = window.__compteurs || []).push({ nom, titre: titre || nom }); return; }
      envoyer(nom, titre, 0);
    } catch (e) {}
  };
})();
