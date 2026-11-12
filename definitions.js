// =====================================================================
// DÉFINITIONS (page definitions.html)
// ---------------------------------------------------------------------
// Les définitions viennent des fichiers definitions-XX.js (liste DEFINITIONS,
// déclarée dans epreuves.js). Chaque définition : id, epreuve, theme, terme,
// definition, sessions (années où elle est tombée ; [] = probable).
// Mode révision : la carte montre le terme, l'élève récite, la retourne et se note.
// Mémoire : localStorage « definitions » = { "D-U5-001": { s: 1 (je savais) ou 0 (à revoir), t: horodatage } }
// Gardée dans ce navigateur seulement (pas encore synchronisée avec le compte élève).
// =====================================================================

(function () {
  const $ = id => document.getElementById(id);
  const DEFS = typeof DEFINITIONS !== "undefined" ? DEFINITIONS : [];

  // ---------------- Mémoire de révision ----------------
  const lireMemoire = () => { try { return JSON.parse(localStorage.getItem("definitions") || "{}"); } catch (e) { return {}; } };
  function noter(id, savait) {
    const m = lireMemoire();
    m[id] = { s: savait ? 1 : 0, t: Date.now() };
    try { localStorage.setItem("definitions", JSON.stringify(m)); } catch (e) {}
  }

  // ---------------- État de l'affichage ----------------
  const epreuvesAvecDefs = EPREUVES.filter(e => DEFS.some(d => d.epreuve === e.code));
  let epreuve = null, theme = "Tous", recherche = "", tombeesSeules = false;

  // Lecture de l'adresse : definitions.html#U5 ou #U5/Réfraction
  {
    const [code, th] = location.hash.slice(1).split("/");
    if (epreuvesAvecDefs.some(e => e.code === code)) { epreuve = code; if (th) theme = decodeURIComponent(th); }
  }
  if (!epreuve && epreuvesAvecDefs.length) epreuve = epreuvesAvecDefs[0].code;

  // Recherche sans tenir compte des accents ni des majuscules
  const simplifier = t => String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  const echapper = t => String(t).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Surligne le mot cherché dans un texte (en ignorant les accents)
  function surligner(texte) {
    const q = simplifier(recherche.trim());
    if (q.length < 2) return echapper(texte);
    const simple = simplifier(texte);
    let res = "", i = 0, k;
    while ((k = simple.indexOf(q, i)) !== -1) {
      res += echapper(texte.slice(i, k)) + "<mark>" + echapper(texte.slice(k, k + q.length)) + "</mark>";
      i = k + q.length;
    }
    return res + echapper(texte.slice(i));
  }

  const defsEpreuve = () => DEFS.filter(d => d.epreuve === epreuve);
  function defsAffichees() {
    const q = simplifier(recherche.trim());
    return defsEpreuve().filter(d =>
      (theme === "Tous" || d.theme === theme) &&
      (!tombeesSeules || (Array.isArray(d.sessions) && d.sessions.length > 0)) &&
      (!q || simplifier(d.terme + " " + d.definition + " " + d.theme).includes(q)));
  }
  function badge(d) {
    const tombee = Array.isArray(d.sessions) && d.sessions.length > 0;
    const s = document.createElement("span");
    s.className = "def-badge " + (tombee ? "tombee" : "probable");
    s.textContent = tombee ? "★ Tombée en " + d.sessions.slice().sort().join(", ") : "Probable";
    s.title = tombee ? "Déjà demandée à l'écrit du BTS" : "Pas encore demandée, mais au programme";
    return s;
  }

  // « Utilisée dans les sujets 2018, 2021 » : la notion sert dans le sujet sans qu'on demande de la définir.
  // (N'influence ni le badge « Tombée » ni le filtre « déjà tombées », qui ne regardent que sessions.)
  function mentionUtilise(d) {
    if (!Array.isArray(d.utilise) || !d.utilise.length) return null;
    const p = document.createElement("span");
    p.className = "def-utilise";
    p.textContent = "Utilisée dans " + (d.utilise.length > 1 ? "les sujets " : "le sujet ") + d.utilise.slice().sort().join(", ");
    return p;
  }

  // ---------------- Les onglets d'épreuves et de thèmes ----------------
  function afficherEpreuves() {
    const zone = $("def-epreuves");
    zone.innerHTML = "";
    EPREUVES.forEach(e => {
      const n = DEFS.filter(d => d.epreuve === e.code).length;
      const b = document.createElement("button");
      b.type = "button";
      b.className = "def-epreuve" + (e.code === epreuve ? " actif" : "");
      b.dataset.epreuve = e.code;
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", e.code === epreuve);
      b.disabled = n === 0;
      b.innerHTML = '<b></b><span></span>';
      b.querySelector("b").textContent = e.court || e.code;
      b.querySelector("span").textContent = n ? n : "bientôt";
      b.title = e.nom;
      b.onclick = () => { epreuve = e.code; theme = "Tous"; majAdresse(); toutAfficher(); };
      zone.appendChild(b);
    });
  }
  function afficherThemes() {
    const zone = $("def-themes");
    zone.innerHTML = "";
    const themes = ["Tous", ...new Set(defsEpreuve().map(d => d.theme))];
    if (!themes.includes(theme)) theme = "Tous";
    themes.forEach(t => {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "theme" + (t === theme ? " actif" : "");
      const n = t === "Tous" ? defsEpreuve().length : defsEpreuve().filter(d => d.theme === t).length;
      b.textContent = t + " (" + n + ")";
      b.onclick = () => { theme = t; majAdresse(); toutAfficher(); };
      zone.appendChild(b);
    });
  }
  function majAdresse() {
    history.replaceState(null, "", "#" + epreuve + (theme === "Tous" ? "" : "/" + encodeURIComponent(theme)));
  }

  // ---------------- La liste ----------------
  function afficherListe() {
    const liste = $("def-liste"), defs = defsAffichees(), m = lireMemoire();
    liste.innerHTML = "";
    $("def-compte").textContent = defs.length === 0
      ? "Aucune définition ne correspond. Essaie un autre mot, ou enlève un filtre."
      : defs.length + " définition" + (defs.length > 1 ? "s" : "") + (tombeesSeules ? " déjà tombée" + (defs.length > 1 ? "s" : "") : "");
    defs.forEach(d => {
      const li = document.createElement("li");
      li.className = "def";
      li.innerHTML = '<div class="def-haut"><h2 class="def-terme"></h2></div><p class="def-texte"></p><div class="def-bas"><span class="def-theme"></span></div>';
      li.querySelector(".def-terme").innerHTML = surligner(d.terme);
      li.querySelector(".def-texte").innerHTML = surligner(d.definition);
      li.querySelector(".def-theme").textContent = d.theme;
      li.querySelector(".def-haut").appendChild(badge(d));
      const utilise = mentionUtilise(d);
      if (utilise) li.querySelector(".def-haut").after(utilise);
      const etat = m[d.id];
      if (etat) {
        const e = document.createElement("span");
        e.className = "def-etat " + (etat.s ? "sue" : "arevoir");
        e.textContent = etat.s ? "✓ Sue" : "↻ À revoir";
        li.querySelector(".def-bas").appendChild(e);
      }
      liste.appendChild(li);
    });
    // Barre : définitions sues (« je savais ») et marquées à revoir, parmi celles affichées
    const bilan = { total: defs.length, faites: defs.filter(d => m[d.id]).length, reussies: defs.filter(d => m[d.id] && m[d.id].s).length };
    const zone = $("def-progression");
    zone.innerHTML = "";
    if (defs.length && typeof creerBarreProgression === "function") {
      zone.appendChild(creerBarreProgression(bilan, {
        titre: "Ta révision",
        detail: bilan.faites === 0 ? "Pas encore révisées : lance le mode révision !" : bilan.reussies + " sue" + (bilan.reussies > 1 ? "s" : "") + " · " + (bilan.faites - bilan.reussies) + " à revoir · " + (bilan.total - bilan.faites) + " jamais révisée" + (bilan.total - bilan.faites > 1 ? "s" : "")
      }));
    }
    $("def-reviser").disabled = defs.length === 0;
    $("def-reviser").innerHTML = '<span class="ico i-cartes" aria-hidden="true"></span> Réviser ' + (defs.length > 1 ? "ces " + defs.length + " définitions" : "cette définition");
  }
  function toutAfficher() { afficherEpreuves(); afficherThemes(); afficherListe(); }

  // ---------------- Le mode révision ----------------
  let paquet = [], position = 0, sues = 0, aRevoir = [];
  const melanger = t => { for (let i = t.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [t[i], t[j]] = [t[j], t[i]]; } return t; };

  function lancerRevision(defs) {
    // D'abord celles marquées « à revoir », puis les jamais vues, puis celles déjà sues
    const m = lireMemoire(), groupe = d => (!m[d.id] ? 1 : m[d.id].s ? 2 : 0);
    paquet = [0, 1, 2].flatMap(g => melanger(defs.filter(d => groupe(d) === g)));
    position = 0; sues = 0; aRevoir = [];
    $("ecran-liste").hidden = true;
    $("ecran-fin").hidden = true;
    $("ecran-revision").hidden = false;
    montrerCarte();
    $("ecran-revision").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function montrerCarte() {
    const d = paquet[position];
    $("def-avancement").textContent = "Carte " + (position + 1) + " / " + paquet.length;
    $("def-barre").style.width = Math.round(position / paquet.length * 100) + "%";
    $("def-carte").classList.remove("retournee");
    $("def-annonce").textContent = "";
    $("def-carte-theme").textContent = $("def-carte-theme-2").textContent = d.theme;
    $("def-carte-terme").textContent = $("def-carte-terme-2").textContent = d.terme;
    $("def-carte-definition").textContent = d.definition;
    $("def-carte-badge").replaceChildren(...[badge(d), mentionUtilise(d)].filter(Boolean));
    $("def-actions-recto").hidden = false;
    $("def-actions-verso").hidden = true;
    $("def-retourner").focus({ preventScroll: true });
  }
  function retourner() {
    if ($("ecran-revision").hidden || $("def-carte").classList.contains("retournee")) return;
    $("def-carte").classList.add("retournee");
    $("def-annonce").textContent = paquet[position].terme + " : " + paquet[position].definition;
    $("def-actions-recto").hidden = true;
    $("def-actions-verso").hidden = false;
    $("def-savais").focus({ preventScroll: true });
  }
  function repondre(savait) {
    if (!$("def-carte").classList.contains("retournee")) return;
    const d = paquet[position];
    noter(d.id, savait);
    if (savait) sues++; else aRevoir.push(d);
    position++;
    if (position < paquet.length) montrerCarte();
    else terminer();
  }
  function terminer() {
    $("ecran-revision").hidden = true;
    $("ecran-fin").hidden = false;
    const total = paquet.length, parfait = sues === total;
    $("def-fin-titre").textContent = parfait ? "Tout su, bravo !" : sues + " / " + total + " sues";
    $("def-fin-texte").textContent = parfait
      ? "Tu connais toutes ces définitions. Reviens dans quelques jours pour vérifier qu'elles restent."
      : aRevoir.length + " définition" + (aRevoir.length > 1 ? "s" : "") + " à revoir : relis-les, puis refais un tour avec elles seules.";
    if (typeof montrerCompagnon === "function") montrerCompagnon($("def-fin-compagnon"), parfait ? "choque" : sues / total >= 0.6 ? "bouche-ouverte" : "pensif");
    const actions = $("def-fin-actions");
    actions.innerHTML = "";
    const bouton = (texte, classe, action) => { const b = document.createElement("button"); b.type = "button"; b.className = "bouton " + classe; b.textContent = texte; b.onclick = action; actions.appendChild(b); };
    if (aRevoir.length) bouton("Revoir les " + aRevoir.length + " à revoir →", "", () => lancerRevision(aRevoir.slice()));
    bouton("Retour à la liste", aRevoir.length ? "secondaire" : "", retourListe);
    $("ecran-fin").scrollIntoView({ behavior: "smooth", block: "start" });
  }
  function retourListe() {
    $("ecran-revision").hidden = true;
    $("ecran-fin").hidden = true;
    $("ecran-liste").hidden = false;
    afficherListe();
  }

  // ---------------- Branchements ----------------
  $("def-recherche").addEventListener("input", e => { recherche = e.target.value; afficherListe(); });
  $("def-tombees").addEventListener("click", () => {
    tombeesSeules = !tombeesSeules;
    $("def-tombees").setAttribute("aria-checked", tombeesSeules);
    $("def-tombees-texte").classList.toggle("actif", tombeesSeules);
    afficherListe();
  });
  $("def-tombees-texte").addEventListener("click", () => $("def-tombees").click());
  $("def-reviser").onclick = () => { const defs = defsAffichees(); if (defs.length) lancerRevision(defs); };
  $("def-carte").addEventListener("click", retourner);
  $("def-retourner").onclick = retourner;
  $("def-savais").onclick = () => repondre(true);
  $("def-arevoir").onclick = () => repondre(false);
  $("def-arreter").onclick = retourListe;
  document.addEventListener("keydown", e => {
    if ($("ecran-revision").hidden || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.target.closest && e.target.closest("input, textarea")) return;
    if (e.key === " " || e.key === "Enter") {
      if (!$("def-carte").classList.contains("retournee")) { e.preventDefault(); retourner(); }
    } else if (e.key === "ArrowRight") { e.preventDefault(); repondre(true); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); repondre(false); }
  });

  if (!epreuvesAvecDefs.length) {
    $("ecran-liste").innerHTML = '<p class="aide">Les définitions arrivent très bientôt.</p>';
  } else toutAfficher();
})();
