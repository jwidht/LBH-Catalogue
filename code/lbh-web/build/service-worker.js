/* global self, caches */
// The production build replaces this token with the asset manifest fingerprint.
const CACHE_PREFIX = `lbh-web-shell:${self.registration.scope}:`;
const CACHE_NAME = `${CACHE_PREFIX}b8201d8e4d805cb1`;
const appUrl = (path) => new URL(path, self.registration.scope).href;

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const response = await fetch(appUrl("asset-manifest.json"), { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load app assets");
    const manifest = await response.json();
    const assets = Object.values(manifest.files).filter((path) => !path.endsWith(".map"));
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll([...new Set([appUrl("index.html"), ...assets.map(appUrl)])]);
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  // Only app assets are cached. GitHub decks and catalogue responses stay out.
  if (event.request.method !== "GET" || url.origin !== self.location.origin ||
      !url.href.startsWith(self.registration.scope)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    if (event.request.mode === "navigate") {
      return (await cache.match(appUrl("index.html"))) || fetch(event.request);
    }
    return (await cache.match(event.request)) || fetch(event.request);
  })());
});
