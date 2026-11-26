// Offline cache for models and database (cache-first), app shell network-first.
const C = 'xyx-anatomy-v3'
self.addEventListener('install', e => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url)
  if (e.request.method !== 'GET' || u.origin !== location.origin) return
  const heavy = /\/(models|db)\//.test(u.pathname)
  e.respondWith(heavy
    ? caches.open(C).then(c => c.match(e.request).then(r => r || fetch(e.request).then(n => { if (n.ok) c.put(e.request, n.clone()); return n })))
    : fetch(e.request).then(n => { const cl = n.clone(); caches.open(C).then(c => c.put(e.request, cl)); return n }).catch(() => caches.match(e.request)))
})
