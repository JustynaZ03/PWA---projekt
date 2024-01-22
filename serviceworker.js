var cacheName = "news-v1";
const staticAssets = [
  "./",
  "./index.html",
  "./images/icon512_maskable.png",
  "./images/icon512_rounded.png",
  "./images/screen.png",
  "./css/style.css",
  "./js/Script.js",
  "manifest.webmanifest",
  "https://api.jsonbin.io/v3/b/65abca4e1f5677401f21d63d",
];
// self.addEventListener("install", (installEvent) => {
//   installEvent.waitUntil(
//     caches.open(cacheName).then((cache) => {
//       cache.addAll(staticAssets);
//     })
//   );
// });

self.addEventListener("install", (event) => {
  function onInstall() {
    return caches.open(cacheName).then((cache) => cache.addAll(staticAssets));
  }

  event.waitUntil(onInstall(event));
});

self.addEventListener("activate", (e) => {
  self.clients.claim();
});
self.addEventListener("fetch", async (e) => {
  const req = e.request;
  const url = new URL(req.url);

  if (url.origin == location.origin) {
    e.respondWith(cacheFirst(req));
  } else {
    e.respondWith(networkAndCache(req));
  }
});

async function cacheFirst(req) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  return cached || fetch(req);
}

async function networkAndCache(req) {
  const cache = await caches.open(cacheName);
  try {
    const fresh = await fetch(req);
    await cache.put(req, fresh.clone());
    return fresh;
  } catch (e) {
    const cached = await cache.match(req);
    return cached;
  }
}
