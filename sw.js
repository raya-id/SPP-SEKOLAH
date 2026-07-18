// sw.js - Service Worker Minimal untuk Bypass Syarat Instalasi PWA
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Biarkan semua request memuat langsung dari jaringan (online-only)
  event.respondWith(fetch(event.request));
});