// =====================================================================
// ACCUEIL (index.html) : cartes d'épreuve, chiffres, premiers pas, séance du jour, sujet blanc.
// Chargé en defer juste après rythme.js : tous les scripts de l'accueil sont en defer, la page
// s'affiche donc avant le téléchargement des questions, et l'ordre d'exécution reste le même
// (épreuves, questions, sujets, coffre, essentiel, rythme, accueil, puis banc, vivant…, compte).
// =====================================================================
// Le sujet blanc des outils : le bouton ouvre ou referme le choix des matières
{
  const b = document.getElementById("examen-ouvrir"), choix = document.getElementById("examen-matieres");
  // Une matière sans sujet est retirée ; la durée suit la règle de examen.js (minutesSujet) :
  // 2 min par QCM, 3 min par calcul, arrondi aux 5 minutes au-dessus
  choix.querySelectorAll("a[data-epreuve]").forEach(a => {
    const s = Catalogue.sujets(a.dataset.epreuve)[0];
    if (!s) { a.remove(); return; }
    const qs = Catalogue.questionsDuSujet(s.id);
    const min = Math.ceil(qs.reduce((t, q) => t + (q.type === "calcul" || q.type === "pose" ? 3 : 2), 0) / 5) * 5;
    const h = Math.floor(min / 60), m = min % 60;
    a.querySelector("small").textContent = h ? h + " h" + (m ? " " + String(m).padStart(2, "0") : "") : m + " min";
  });
  if (!choix.querySelector("a")) b.closest(".outil-examen").remove();
  b.addEventListener("click", () => {
    const ouvert = choix.hidden;
    choix.hidden = !ouvert;
    b.setAttribute("aria-expanded", String(ouvert));
    if (ouvert) choix.querySelector("a").focus({ preventScroll: true });
  });
}
// Première ouverture : l'écran « Cinq questions pour commencer » (rythme.js)
if (document.documentElement.dataset.accueil === "premier") preparerPremiersPas(document.getElementById("premiers-pas"));
// Les jours suivants : l'écran de la séance du jour, tant qu'elle n'est ni faite ni passée (rythme.js)
const ecranDuJourMontre = preparerEcranDuJour(document.getElementById("ecran-jour"));
// Le compagnon choisi dans le profil (DioSL par défaut) accueille l'élève
montrerCompagnon(document.querySelector(".hero-diosl img"), "clin-doeil");
// Petit mot d'accueil si l'élève a choisi un pseudo
{ const p = lireProfil(); if (p.pseudo) document.getElementById("salut").textContent = "Content de te revoir, " + p.pseudo; }
if (typeof QUESTIONS !== "undefined") {
  // Un seul total partout : les questions de « Tous » (comme la page QCM et les cartes), les cas pratiques à part
  const base = Catalogue.ordinaires();
  const nbCasP = Catalogue.cas().length;
  document.getElementById("nb-questions").textContent = base.length + " questions et " + nbCasP + " cas pratiques";
  document.getElementById("outil-qcm").textContent = base.length + " questions corrigées et expliquées, et " + nbCasP + " cas pratiques.";
  document.getElementById("nb-epreuves").textContent = EPREUVES.length;
  const faites = ESSENTIEL.filter(n => etatNotion(n.epreuve, n.theme).maitrisee).length;
  document.getElementById("essentiel-resume").textContent = faites > 0
    ? "Tu maîtrises " + faites + " des " + ESSENTIEL.length + " notions essentielles. Continue là où tu t'es arrêté."
    : "Les " + ESSENTIEL.length + " notions qui tombent le plus souvent aux sujets officiels, classées par priorité, avec ta progression.";

  // Ta progression : l'essentiel, tous les QCM, et les deux réunis
  {
    // Chaque nombre dit ce qu'il compte. « Tous les QCM » et la maîtrise comptent les mêmes questions que les cartes
    // d'épreuve et la page QCM (hors cas pratiques, comptés à part) ; l'Essentiel compte ses propres questions.
    const bq = bilanQuestions(base);
    const pl = (n, mot) => n + " " + mot + (n > 1 ? "s" : "");
    const zoneBarres = document.getElementById("barres-generales");
    const be = bilanQuestions(base.filter(q => estEssentiel(q.epreuve, q.theme)));      // l'Essentiel, parmi ces mêmes questions
    zoneBarres.appendChild(creerBarreProgression(be, { titre: "★ L'essentiel", motPct: "faites",
      detail: be.faites + " faites sur les " + be.total + " questions de l'Essentiel · " + pl(faites, "notion maîtrisée") + " sur " + ESSENTIEL.length }));
    zoneBarres.appendChild(creerBarreProgression(bq, { titre: "Tous les QCM", motPct: "faites",
      detail: bq.faites + " faites sur " + bq.total + " questions" + (nbCasP ? " (et " + nbCasP + " cas pratiques)" : "") }));
    zoneBarres.appendChild(creerBarreProgression({ total: bq.total, faites: bq.reussies, reussies: bq.reussies }, {
      titre: "Niveau de maîtrise", motPct: "réussies",
      aria: "Niveau de maîtrise : " + Math.round(bq.reussies / bq.total * 100) + " %, " + bq.reussies + " questions réussies sur " + bq.total,
      detail: bq.faites === 0
        ? "Les questions que tu sais : réussies à ta dernière tentative. Lance-toi avec l'essentiel !"
        : bq.reussies + " réussies sur ces " + bq.total + " questions, à ta dernière tentative"
    }));
  }

  // Révision espacée : les questions ratées reviennent au bon moment
  const dues = questionsARevoir().length;

  // Élève qui revient : le haut de page propose directement la suite
  {
    const deja = bilanQuestions(base).faites;            // même total que les barres : hors cas
    if (deja > 0) {
      const principale = document.getElementById("action-principale");
      const secondaire = document.getElementById("action-secondaire");
      const prochaine = ESSENTIEL.find(n => !etatNotion(n.epreuve, n.theme).maitrisee);
      const lienNotion = n => "qcm.html#" + n.epreuve + "/" + encodeURIComponent(n.theme);
      document.getElementById("accroche").textContent = "Tu as déjà fait " + deja + " question" + (deja > 1 ? "s" : "") + " sur " + base.length +
        (dues > 0 ? ", et " + dues + (dues > 1 ? " sont à revoir" : " est à revoir") + " aujourd'hui." : ".");
      // Élève qui a déjà commencé : sa progression remonte juste sous le haut de page,
      // et la présentation du site ne sert plus qu'aux nouveaux venus.
      document.getElementById("atouts").hidden = true;
      document.getElementById("bloc-progression").hidden = false;
      // Haut de page compact : un titre court, la suite à faire tout de suite visible
      const pseudo = lireProfil().pseudo;
      document.querySelector(".hero").classList.add("hero-retour");
      document.querySelector(".hero h1").textContent = pseudo ? "On continue, " + pseudo + " ?" : "On continue ?";
      document.getElementById("salut").textContent = "Content de te revoir";
      // Ta séance du jour (rythme.js) : la seule grande action du haut de page. Les boutons et la phrase
      // d'accueil des nouveaux venus sont cachés (.hero-retour), les outils passent en dessous, plus discrets.
      // Tant que l'écran de la séance du jour est là, la carte attend : elle ne doit pas « montrer » une invitation cachée
      if (!ecranDuJourMontre) afficherCarteJour(document.getElementById("jour"));
      // Le titre et la ligne sous le titre, selon le jour (recalculés après « Passer pour aujourd'hui », rythme.js) :
      // séance faite → « Séance faite, Léa. » ; passée → « À demain, Léa. » ; sinon « On continue, Léa ? ».
      // La ligne ne propose que les questions à revoir, en lien discret : la séance a son seul bouton dans la carte du jour.
      window.majHautAccueil = () => {
        const a = calculerRythme().aujourdhui, ligne = document.getElementById("ligne-action"), virgule = pseudo ? ", " + pseudo : "";
        document.querySelector(".hero h1").textContent = a.atteint ? "Séance faite" + virgule + "." : seancePassee() ? "À demain" + virgule + "." : "On continue" + virgule + "\u00a0?";
        ligne.innerHTML = "";
        if (dues > 0) {
          const lien = document.createElement("a");
          lien.href = "qcm.html#a-revoir";
          lien.innerHTML = '<span class="ico i-calendrier" aria-hidden="true"></span><span></span>';
          lien.lastChild.textContent = dues + (dues > 1 ? " questions à revoir aujourd'hui" : " question à revoir aujourd'hui");
          ligne.appendChild(lien);
        }
        ligne.hidden = !dues;
      };
      majHautAccueil();
      document.getElementById("titre-outils").textContent = "Tout le site";
      document.getElementById("outils").classList.add("outils-discrets");
      if (dues > 0) {
        principale.innerHTML = '<span class="ico i-calendrier" aria-hidden="true"></span> ';
        principale.append("Réviser mes " + dues + " question" + (dues > 1 ? "s" : "") + " du jour");
        principale.href = "qcm.html#a-revoir";
        if (prochaine) { secondaire.textContent = "Continuer : " + prochaine.theme; secondaire.href = lienNotion(prochaine); }
      } else if (prochaine) {
        principale.textContent = "Continuer : " + prochaine.theme;
        principale.href = lienNotion(prochaine);
      } else {
        // Tout l'essentiel est maîtrisé et rien à revoir : place au reste du programme
        principale.textContent = "Faire un QCM";
        principale.href = "qcm.html";
        secondaire.hidden = true;
      }
    }
  }
  const prochaine = prochaineRevision();
  // L'élève qui a déjà répondu a sa séance du jour (questions à revoir comprises) : pas de carte en double
  const dejaPropose = bilanQuestions(QUESTIONS).faites > 0;
  if ((dues > 0 || prochaine) && !dejaPropose) {
    const carte = document.getElementById("carte-revoir");
    carte.hidden = false;
    if (dues > 0) {
      document.getElementById("revoir-titre").textContent = dues + (dues > 1 ? " questions à revoir aujourd'hui" : " question à revoir aujourd'hui");
      document.getElementById("revoir-texte").textContent = "Des questions que tu avais ratées. Réussie, une question revient de plus en plus tard (3, 7, 14 puis 30 jours) ; ratée, dès le lendemain.";
    } else {
      const j = new Date(prochaine.j + "T12:00:00");
      const demain = jourLocal(1) === prochaine.j;
      document.getElementById("revoir-titre").textContent = "Rien à revoir aujourd'hui ✓";
      document.getElementById("revoir-texte").textContent = "Prochaine révision " + (demain ? "demain" : "le " + j.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" })) +
        " : " + prochaine.nombre + (prochaine.nombre > 1 ? " questions." : " question.");
      carte.href = "qcm.html";
      carte.querySelector(".fleche").textContent = "✓";
    }
  }

  // Une carte par épreuve, qui ouvre directement son QCM. Même ordre que la page QCM et l'examen blanc :
  // ce qui rapporte le plus d'abord (U5 coef 6, U3 coef 5, U42, U43, puis U41 en CCF).
  // Le nombre de questions est celui de « Tous » sur la page QCM ; les cas pratiques sont comptés en cas.
  const liste = document.getElementById("liste-epreuves");
  const ORDRE = ["U5", "U3", "U42", "U43", "U41"], rang = e => (ORDRE.includes(e.code) ? ORDRE.indexOf(e.code) : ORDRE.length);
  EPREUVES.slice().sort((x, y) => rang(x) - rang(y)).forEach(e => {
    const ordinaires = Catalogue.ordinaires(e.code);
    const nb = ordinaires.length, nbCas = Catalogue.cas(e.code).length;
    const a = document.createElement("a");
    a.className = "epreuve";
    a.dataset.epreuve = e.code;
    a.href = "qcm.html#" + e.code;
    a.innerHTML = '<span class="code"></span><h3 class="nom"></h3><span class="info"></span>';
    // Un seul système de noms : Vision, Éco, OGP, ETSO, Maths (comme les choix de séance), le code U en petit,
    // le nom complet dans la ligne d'infos (sans « E5 » : le code U suffit)
    const m = MATIERES_SEANCE.find(x => x[0] === e.code);
    a.querySelector(".code").textContent = e.code;
    a.querySelector(".nom").textContent = m ? m[1] : e.nom;
    a.querySelector(".info").textContent = (m ? m[2] + " · " : "") + nb + " questions" + (nbCas ? " · " + nbCas + (nbCas > 1 ? " cas pratiques" : " cas pratique") : "") +
      " · " + String(e.detail || "").replace(/^E\d+ · /, "");
    a.appendChild(creerBarreProgression(bilanQuestions(ordinaires), { petite: true }));
    liste.appendChild(a);
  });
}

// Mes amis : « Lina a révisé aujourd'hui » dans la carte du jour (rythme.js, majAmisRevises), d'après l'aperçu
// de compte.js (gardé 5 minutes). compte.js est chargé après ce fichier : son événement arrive ensuite.
window.addEventListener("compte-change", e => {
  if (!e.detail.uid || !window.Amis) { majAmisRevises([]); return; }
  Amis.apercu({ revises: true }).then(a => majAmisRevises(a.revises)).catch(err => console.error(err));
});
