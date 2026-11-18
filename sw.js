// Guarda la app para que funcione sin conexión. Las librerías ya van dentro de index.html.
const CACHE = 'editor-pdf-v2';
const FILES = ['./', 'index.html', 'manifest.json', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith((async () => {
    // Primero la red (para recibir actualizaciones); sin conexión, la copia guardada.
    try {
      const fresh = await fetch(event.request);
      if (fresh.ok && new URL(event.request.url).origin === location.origin) {
        const cache = await caches.open(CACHE);
        cache.put(event.request, fresh.clone());
      }
      return fresh;
    } catch (e) {
      return (await caches.match(event.request, { ignoreSearch: true })) || (await caches.match('./'));
    }
  })());
});
