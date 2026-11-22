// ---------------- Le catalogue des questions ----------------
// Un seul endroit qui dit quelles questions comptent où. Chargé juste après epreuves.js : il ne fait que
// définir des fonctions, qui lisent QUESTIONS et CAS au moment où on les appelle (tous les fichiers sont alors chargés).
//
// Les familles (mots du glossaire, notes/architecture/GLOSSARY.md) :
//   base          : questions d'une épreuve hors entraînement (celles des cas pratiques comprises)
//   ordinaires    : questions de base qui n'appartiennent à aucun cas pratique. Ce sont elles que comptent
//                   TOUS les totaux, barres et « notions maîtrisées » du site (décision de David, 2026-11-22 :
//                   « hors cas, cas comptés à part, partout »)
//   cas           : les cas pratiques qui ont au moins une question ; leurs questions, dans l'ordre des étapes
//   entrainement  : questions d'entraînement (chargées par qcm.html seulement), jamais dans un total général
// Chaque écran peut ensuite faire ses propres choix (questions faciles des premiers pas, examen sans calcul posé…),
// toujours en partant d'ici.
//
// epreuve et theme sont facultatifs : Catalogue.ordinaires() = tout le site, ordinaires("U5"), ordinaires("U5", "Worth").
// Aussi lu par .claude/scripts/generer-notions.js, verifier-questions.js et notes/tests/tester-catalogue.js.

const Catalogue = (() => {
  const toutes = () => (typeof QUESTIONS === "undefined" ? [] : QUESTIONS);
  const listeCas = () => (typeof CAS === "undefined" ? [] : CAS);
  const selon = (epreuve, theme) => q => (!epreuve || q.epreuve === epreuve) && (!theme || q.theme === theme);

  const casParId = id => listeCas().find(c => c.id === id);
  // Une question est « dans un cas » si son cas existe (le vérificateur interdit déjà un cas inconnu)
  const dansUnCas = q => !!(q && q.cas && casParId(q.cas));

  const base = (epreuve, theme) => toutes().filter(q => !q.entrainement && selon(epreuve, theme)(q));
  const ordinaires = (epreuve, theme) => base(epreuve, theme).filter(q => !dansUnCas(q));
  const entrainement = (epreuve, theme) => toutes().filter(q => q.entrainement && selon(epreuve, theme)(q));

  const questionsDuCas = id => toutes().filter(q => q.cas === id).sort((a, b) => a.etape - b.etape);
  const cas = epreuve => listeCas().filter(c => (!epreuve || c.epreuve === epreuve) && toutes().some(q => q.cas === c.id));
  const questionsDesCas = epreuve => cas(epreuve).flatMap(c => questionsDuCas(c.id));

  return { base, ordinaires, entrainement, cas, casParId, questionsDuCas, questionsDesCas, dansUnCas };
})();
