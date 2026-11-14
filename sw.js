/* Offline support. Same-origin files are fetched from the network when it is
 * available, so a new deploy shows up on the next load, and served from the
 * cache when it is not. Feedback and other cross-origin requests are untouched. */
const CACHE = 'lazyjurist-v1';
const FILES = ['./', 'styles.css', 'data.js', 'core.js', 'app.js', 'manifest.webmanifest',
  'Background_image_2.webp', 'fonts/vt323.woff2', 'fonts/press-start-2p.woff2',
  'icons/icon-180.png', 'icons/icon-192.png', 'icons/icon-512.png'];

self.addEventListener('install', event => {
  // Cache files one by one so a single missing file cannot block offline play.
  event.waitUntil(caches.open(CACHE)
    .then(cache => Promise.all(FILES.map(file => cache.add(file).catch(() => {}))))
    .then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(request).then(response => {
    if (response.ok) {
      const copy = response.clone();
      event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
    }
    return response;
  }).catch(async () => {
    const cached = await caches.match(request, { ignoreSearch: true }) ||
      (request.mode === 'navigate' ? await caches.match('./') : null);
    return cached || Response.error();
  }));
});
