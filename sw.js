// sw.js - Hybrid Minimalis (Bypass Install PWA + Instant App Shell Protection)
const SHELL_CACHE = 'e-spp-sekolah-v3.5';
const SHELL_FILES = [
  './',
  './index.html',
  './manifest.json',
  './Jiraya-free.png',
];

// 1. Install: Simpan cangkang aplikasi (App Shell) ke memori HP
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => {
      return cache.addAll(SHELL_FILES);
    })
  );
});

// 2. Activate: Langsung ambil alih kontrol peramban & bersihkan cache lama jika ada
self.addEventListener('activate', (event) => {
  event.waitUntil(
    self.clients.claim().then(() => {
      return caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== SHELL_CACHE) {
              return caches.delete(cacheName);
            }
          })
        );
      });
    })
  );
});

// 3. Fetch: Strategi pemisahan trafik (Data Online vs Cangkang Offline)
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // ATURAN A: Jika request menuju server Google Apps Script, WAJIB 100% Online
  if (url.includes('script.google.com') || url.includes('script.googleusercontent.com')) {
    event.respondWith(fetch(event.request));
    return;
  }

  // ATURAN B: Untuk file lokal (index.html/logo), gunakan Cache agar aplikasi terbuka instan 0 detik
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Jika ada di memori HP gunakan itu, jika tidak ada baru ambil dari internet
      return cachedResponse || fetch(event.request);
    })
  );
});
