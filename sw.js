// =====================================================================
// Service worker : le site marche aussi sans internet (appli installée)
// ---------------------------------------------------------------------
// - Les pages : on demande toujours d'abord au réseau (le site en ligne est la vérité) ;
//   sans réseau, ou s'il ne répond pas en 4 s, on sert la copie gardée.
// - Les .js et .css portent leur empreinte (?v=…) : une adresse = un contenu. On garde
//   chaque version telle quelle ; une nouvelle publication appelle de nouvelles adresses.
// - Images, polices, sons : la copie gardée d'abord, le réseau sinon.
// - Rien d'un autre site n'est touché : Firebase (comptes, progression en ligne) et
//   GoatCounter passent directement par le réseau, jamais par ce cache.
// La liste ci-dessous et la VERSION sont écrites par .claude/scripts/versionner.py :
// une nouvelle VERSION = un nouveau cache, l'ancien est effacé dès que le nouveau est prêt.
// =====================================================================

// <versionner> (partie écrite par versionner.py, ne pas modifier à la main)
const VERSION = "a7e19e546e";
const FICHIERS = [
  "appli.js?v=0724163c",
  "atelier-calculatrice.js?v=6e07c21a",
  "banc.js?v=7a80e12d",
  "calculateurs.html",
  "calculette.js?v=6fb79d1d",
  "catalogue.js?v=2ee1a49e",
  "coffre.js?v=cc59b959",
  "compte.html",
  "compte.js?v=c05b4182",
  "compter.js?v=234d3f31",
  "confidentialite.html",
  "definitions-U3.js?v=9c9ef1e8",
  "definitions-U41.js?v=6d18ab79",
  "definitions-U42.js?v=32483ce5",
  "definitions-U43.js?v=135a6649",
  "definitions-U5.js?v=aafeea8f",
  "definitions.html",
  "definitions.js?v=eb1e9b79",
  "entrainement-U3.js?v=5783bb52",
  "entrainement-U41.js?v=f3af2472",
  "entrainement-U42.js?v=b592846f",
  "entrainement-U43.js?v=201e28d1",
  "entrainement-U5.js?v=f1c1f10d",
  "epreuves.js?v=cc645427",
  "essentiel.html",
  "essentiel.js?v=7e8432f5",
  "examen.js?v=1b5b3813",
  "img/avatar-alpaga-bouche-ouverte.svg",
  "img/avatar-alpaga-choque.svg",
  "img/avatar-alpaga-clin-doeil.svg",
  "img/avatar-alpaga-pensif.svg",
  "img/avatar-alpaga.svg",
  "img/avatar-chat-bouche-ouverte.svg",
  "img/avatar-chat-choque.svg",
  "img/avatar-chat-clin-doeil.svg",
  "img/avatar-chat-pensif.svg",
  "img/avatar-chat.svg",
  "img/avatar-chien-bouche-ouverte.svg",
  "img/avatar-chien-choque.svg",
  "img/avatar-chien-clin-doeil.svg",
  "img/avatar-chien-pensif.svg",
  "img/avatar-chien.svg",
  "img/avatar-cochon-bouche-ouverte.svg",
  "img/avatar-cochon-choque.svg",
  "img/avatar-cochon-clin-doeil.svg",
  "img/avatar-cochon-pensif.svg",
  "img/avatar-cochon.svg",
  "img/avatar-ecureuil-bouche-ouverte.svg",
  "img/avatar-ecureuil-choque.svg",
  "img/avatar-ecureuil-clin-doeil.svg",
  "img/avatar-ecureuil-pensif.svg",
  "img/avatar-ecureuil.svg",
  "img/avatar-elephant-bouche-ouverte.svg",
  "img/avatar-elephant-choque.svg",
  "img/avatar-elephant-clin-doeil.svg",
  "img/avatar-elephant-pensif.svg",
  "img/avatar-elephant.svg",
  "img/avatar-girafe-bouche-ouverte.svg",
  "img/avatar-girafe-choque.svg",
  "img/avatar-girafe-clin-doeil.svg",
  "img/avatar-girafe-pensif.svg",
  "img/avatar-girafe.svg",
  "img/avatar-grenouille-bouche-ouverte.svg",
  "img/avatar-grenouille-choque.svg",
  "img/avatar-grenouille-clin-doeil.svg",
  "img/avatar-grenouille-pensif.svg",
  "img/avatar-grenouille.svg",
  "img/avatar-herisson-bouche-ouverte.svg",
  "img/avatar-herisson-choque.svg",
  "img/avatar-herisson-clin-doeil.svg",
  "img/avatar-herisson-pensif.svg",
  "img/avatar-herisson.svg",
  "img/avatar-hibou-bouche-ouverte.svg",
  "img/avatar-hibou-choque.svg",
  "img/avatar-hibou-clin-doeil.svg",
  "img/avatar-hibou-pensif.svg",
  "img/avatar-hibou.svg",
  "img/avatar-koala-bouche-ouverte.svg",
  "img/avatar-koala-choque.svg",
  "img/avatar-koala-clin-doeil.svg",
  "img/avatar-koala-pensif.svg",
  "img/avatar-koala.svg",
  "img/avatar-lapin-bouche-ouverte.svg",
  "img/avatar-lapin-choque.svg",
  "img/avatar-lapin-clin-doeil.svg",
  "img/avatar-lapin-pensif.svg",
  "img/avatar-lapin.svg",
  "img/avatar-lion-bouche-ouverte.svg",
  "img/avatar-lion-choque.svg",
  "img/avatar-lion-clin-doeil.svg",
  "img/avatar-lion-pensif.svg",
  "img/avatar-lion.svg",
  "img/avatar-loup-bouche-ouverte.svg",
  "img/avatar-loup-choque.svg",
  "img/avatar-loup-clin-doeil.svg",
  "img/avatar-loup-pensif.svg",
  "img/avatar-loup.svg",
  "img/avatar-mouton-bouche-ouverte.svg",
  "img/avatar-mouton-choque.svg",
  "img/avatar-mouton-clin-doeil.svg",
  "img/avatar-mouton-pensif.svg",
  "img/avatar-mouton.svg",
  "img/avatar-panda-bouche-ouverte.svg",
  "img/avatar-panda-choque.svg",
  "img/avatar-panda-clin-doeil.svg",
  "img/avatar-panda-pensif.svg",
  "img/avatar-panda.svg",
  "img/avatar-paresseux-bouche-ouverte.svg",
  "img/avatar-paresseux-choque.svg",
  "img/avatar-paresseux-clin-doeil.svg",
  "img/avatar-paresseux-pensif.svg",
  "img/avatar-paresseux.svg",
  "img/avatar-pingouin-bouche-ouverte.svg",
  "img/avatar-pingouin-choque.svg",
  "img/avatar-pingouin-clin-doeil.svg",
  "img/avatar-pingouin-pensif.svg",
  "img/avatar-pingouin.svg",
  "img/avatar-poussin-bouche-ouverte.svg",
  "img/avatar-poussin-choque.svg",
  "img/avatar-poussin-clin-doeil.svg",
  "img/avatar-poussin-pensif.svg",
  "img/avatar-poussin.svg",
  "img/avatar-raton-bouche-ouverte.svg",
  "img/avatar-raton-choque.svg",
  "img/avatar-raton-clin-doeil.svg",
  "img/avatar-raton-pensif.svg",
  "img/avatar-raton.svg",
  "img/avatar-renarde-bouche-ouverte.svg",
  "img/avatar-renarde-choque.svg",
  "img/avatar-renarde-clin-doeil.svg",
  "img/avatar-renarde-pensif.svg",
  "img/avatar-renarde.svg",
  "img/avatar-singe-bouche-ouverte.svg",
  "img/avatar-singe-choque.svg",
  "img/avatar-singe-clin-doeil.svg",
  "img/avatar-singe-pensif.svg",
  "img/avatar-singe.svg",
  "img/avatar-souris-bouche-ouverte.svg",
  "img/avatar-souris-choque.svg",
  "img/avatar-souris-clin-doeil.svg",
  "img/avatar-souris-pensif.svg",
  "img/avatar-souris.svg",
  "img/avatar-tigre-bouche-ouverte.svg",
  "img/avatar-tigre-choque.svg",
  "img/avatar-tigre-clin-doeil.svg",
  "img/avatar-tigre-pensif.svg",
  "img/avatar-tigre.svg",
  "img/avatar-vache-bouche-ouverte.svg",
  "img/avatar-vache-choque.svg",
  "img/avatar-vache-clin-doeil.svg",
  "img/avatar-vache-pensif.svg",
  "img/avatar-vache.svg",
  "img/icone-192.png",
  "img/icone-512.png",
  "img/icone-apple-180.png",
  "img/icone-maskable-512.png",
  "img/nounours-bouche-fermee.svg",
  "img/nounours-bouche-ouverte.svg",
  "img/nounours-choque.svg",
  "img/nounours-clin-doeil.svg",
  "img/nounours-pensif.svg",
  "img/schemas/U3/bail-3-6-9.svg",
  "img/schemas/U3/cascade-sig.svg",
  "img/schemas/U3/marche-idc-evasion.svg",
  "img/schemas/U3/prix-monture-60-180.svg",
  "img/schemas/U3/seuil-rentabilite-300k.svg",
  "img/schemas/U41/arbre-progressifs-antireflet.svg",
  "img/schemas/U41/courbe-faux-asymptote-0.svg",
  "img/schemas/U41/courbe-faux-croissante.svg",
  "img/schemas/U41/courbe-faux-depart-50.svg",
  "img/schemas/U41/courbe-juste.svg",
  "img/schemas/U41/division-harmonique-d-moins-6.svg",
  "img/schemas/U41/fonction-refroidissement-asymptote.svg",
  "img/schemas/U41/loi-normale-diametre-14.svg",
  "img/schemas/U41/nuage-changement-variable-ln.svg",
  "img/schemas/U41/suite-seuil-250-limite-300.svg",
  "img/schemas/U41/test-bilateral-region-rejet.svg",
  "img/schemas/U42/antireflet-couche-130-520nm.svg",
  "img/schemas/U42/brewster-lac-133.svg",
  "img/schemas/U42/capteur-18x24-cercle14.svg",
  "img/schemas/U42/cas-jumelles-champ.svg",
  "img/schemas/U42/champs-plan-entre-pupille-diaphragme.svg",
  "img/schemas/U42/champs-pleine-lumiere-6-4.svg",
  "img/schemas/U42/conjugaison-f50-objet75.svg",
  "img/schemas/U42/doublet-40-40-e30.svg",
  "img/schemas/U42/galilee-afocale-90-30.svg",
  "img/schemas/U42/kepler-afocale-120-20.svg",
  "img/schemas/U42/malus-deux-polariseurs-60.svg",
  "img/schemas/U42/reseau-500-traits-600nm.svg",
  "img/schemas/U42/trace-div-faux-centre-devie.svg",
  "img/schemas/U42/trace-div-faux-converge.svg",
  "img/schemas/U42/trace-div-faux-image-reelle.svg",
  "img/schemas/U42/trace-div-juste.svg",
  "img/schemas/U42/trace-faux-centre-devie.svg",
  "img/schemas/U42/trace-faux-divergent.svg",
  "img/schemas/U42/trace-faux-image-au-foyer.svg",
  "img/schemas/U42/trace-juste.svg",
  "img/schemas/U43/cas-microscope-diaphragmes-correction.svg",
  "img/schemas/U43/cas-microscope-diaphragmes.svg",
  "img/schemas/U43/champs-lucarne-trois-diaphragmes.svg",
  "img/schemas/U43/champs-pleine-lumiere-interactif.svg",
  "img/schemas/U43/champs-point-y-faisceau.svg",
  "img/schemas/U43/champs-pupille-plus-petit-angle.svg",
  "img/schemas/U43/champs-trois-diaphragmes.svg",
  "img/schemas/U43/champs-vue-de-gauche-contour.svg",
  "img/schemas/U43/lentille-image-lue-120mm-correction.svg",
  "img/schemas/U43/lentille-image-lue-120mm.svg",
  "img/schemas/U43/liaison-tube-clavette.svg",
  "img/schemas/U43/liaisons-mouvements-axe-x.svg",
  "img/schemas/U43/lunette-galilee-faisceau.svg",
  "img/schemas/U43/lunette-trace-faux-foyers-separes.svg",
  "img/schemas/U43/lunette-trace-faux-image-sur-axe.svg",
  "img/schemas/U43/lunette-trace-faux-parallele-axe.svg",
  "img/schemas/U43/lunette-trace-juste.svg",
  "img/schemas/U43/mecanisme-molette-tube.svg",
  "img/schemas/U43/microscope-chaine-emmetrope.svg",
  "img/schemas/U43/miroir-concave-objet-en-c-correction.svg",
  "img/schemas/U43/miroir-concave-objet-en-c.svg",
  "img/schemas/U43/oculaire-reglage-myope-2-5-mm.svg",
  "img/schemas/U43/skiascopie-sens-du-reflet-50cm.svg",
  "img/schemas/U5/accommodation-myope-2.svg",
  "img/schemas/U5/aniseiconie-7-pourcent.svg",
  "img/schemas/U5/cadran-parent-3-9.svg",
  "img/schemas/U5/ccr-0-25-axe-90.svg",
  "img/schemas/U5/cover-choix-faux-og.svg",
  "img/schemas/U5/cover-choix-faux-sens.svg",
  "img/schemas/U5/cover-choix-faux-vertical.svg",
  "img/schemas/U5/cover-choix-juste.svg",
  "img/schemas/U5/cover-test-exophorie.svg",
  "img/schemas/U5/fluo-lrpg-plate.svg",
  "img/schemas/U5/fluo-lrpg-trois-images.svg",
  "img/schemas/U5/prentice-od1-og4.svg",
  "img/schemas/U5/prisme-choix-faux-base.svg",
  "img/schemas/U5/prisme-choix-faux-dessus.svg",
  "img/schemas/U5/prisme-choix-faux-mm.svg",
  "img/schemas/U5/prisme-choix-juste.svg",
  "img/schemas/U5/rouge-vert-ram.svg",
  "img/schemas/U5/worth-diplopie-homonyme.svg",
  "img/schemas/U5/worth-neutralisation-og.svg",
  "index.html",
  "lettre.js?v=92532f67",
  "manifest.webmanifest",
  "mentions-legales.html",
  "notions.html",
  "optique.js?v=968042ca",
  "polices/atkinson-hyperlegible-next.woff2",
  "polices/bodoni-moda-italique.woff2",
  "polices/bodoni-moda.woff2",
  "qcm.html",
  "questions-U3.js?v=a72553e5",
  "questions-U41.js?v=71099880",
  "questions-U42.js?v=5e3fce4a",
  "questions-U43.js?v=63ba18f7",
  "questions-U5.js?v=a4a5a180",
  "rythme.js?v=8bba5e53",
  "sons.js?v=355500ef",
  "sons/faux.mp3",
  "sons/fin-0.mp3",
  "sons/fin-100.mp3",
  "sons/fin-40.mp3",
  "sons/fin-60.mp3",
  "sons/fin-80.mp3",
  "sons/juste.mp3",
  "specificites-U3.js?v=3245f237",
  "specificites-U41.js?v=3d591e09",
  "specificites-U42.js?v=67573174",
  "specificites-U43.js?v=523c07db",
  "specificites-U5.js?v=43533990",
  "style.css?v=7d2c08a3",
  "traces-U42.js?v=6b6df119",
  "traces-U43.js?v=77abc155",
  "traces-U5.js?v=6c873d8a",
  "traces.html",
  "traces.js?v=98c01e37",
  "videos.js?v=2da8e777",
  "vivant.js?v=0b03b85f"
];
// </versionner>

const CACHE = "opticonversion-" + VERSION;
const DELAI_PAGE = 4000;

self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // cache: "reload" : on prend les fichiers sur le serveur, pas dans le cache du navigateur
    await cache.addAll(FICHIERS.map(f => new Request(f, { cache: "reload" })));
    // La nouvelle version prend la main tout de suite : les pages déjà ouvertes affichent
    // un bandeau « Nouvelle version » (appli.js) et l'élève recharge quand il veut.
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    for (const nom of await caches.keys()) {
      if (nom.startsWith("opticonversion-") && nom !== CACHE) await caches.delete(nom);
    }
    await self.clients.claim();
  })());
});

// "/" et "/qcm.html?x" sont rangées sous "index.html" et "qcm.html"
function clePage(url) {
  let chemin = url.pathname.replace(/^\/+/, "");
  if (chemin === "" || chemin.endsWith("/")) chemin += "index.html";
  return new URL(chemin, self.registration.scope).href;
}

async function page(event) {
  const cache = await caches.open(CACHE);
  const cle = clePage(new URL(event.request.url));
  const reseau = fetch(event.request).then(rep => {
    if (rep.ok && rep.type === "basic") event.waitUntil(cache.put(cle, rep.clone()));
    return rep;
  });
  const garde = await cache.match(cle);
  if (!garde) {
    try { return await reseau; }
    catch (e) { return horsLigne(); }
  }
  // Une copie existe : le réseau a 4 s pour répondre, sinon on sert la copie
  // (le réseau continue en arrière-plan et met la copie à jour pour la prochaine fois).
  reseau.catch(() => {});
  event.waitUntil(reseau.catch(() => {}));
  const attente = new Promise(ok => setTimeout(() => ok(null), DELAI_PAGE));
  try {
    const rep = await Promise.race([reseau, attente]);
    return rep || garde;
  } catch (e) {
    return garde;
  }
}

async function fichier(event, versionne) {
  const cache = await caches.open(CACHE);
  const req = event.request;
  // Un .js/.css versionné doit être EXACTEMENT celui demandé ; le reste ignore « ?… »
  const garde = await cache.match(req, { ignoreSearch: !versionne });
  if (garde) return garde;
  try {
    const rep = await fetch(req);
    if (rep.ok && rep.type === "basic") event.waitUntil(cache.put(req, rep.clone()));
    return rep;
  } catch (e) {
    // Sans réseau et sans cette version exacte : une autre version vaut mieux que rien
    const autre = await caches.match(req, { ignoreSearch: true });
    if (autre) return autre;
    throw e;
  }
}

function horsLigne() {
  return new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">' +
    '<title>Hors ligne</title><body style="background:#13171f;color:#f3eee4;font-family:system-ui,sans-serif;padding:32px 20px;line-height:1.5">' +
    '<h1 style="color:#ecd3a0;font-size:1.4rem">Pas de connexion</h1>' +
    "<p>Cette page n'a pas encore été gardée sur ton appareil. Reviens quand internet est revenu.</p>" +
    '<p><a href="./" style="color:#d9b26f">Retour à l\'accueil</a></p>',
    { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

self.addEventListener("fetch", event => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // Firebase, GoatCounter… : jamais par ici
  if (url.pathname.endsWith("/sw.js")) return;
  if (req.mode === "navigate") { event.respondWith(page(event)); return; }
  const versionne = /\.(js|css)$/.test(url.pathname) && url.searchParams.has("v");
  event.respondWith(fichier(event, versionne));
});
