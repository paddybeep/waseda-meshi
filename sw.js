const CACHE = 'wasemeshi-v2';
const SHELL = ['/waseda-meshi.html'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Firebase・外部APIはネットワーク優先
  if (e.request.url.includes('firestore') ||
      e.request.url.includes('firebase') ||
      e.request.url.includes('unsplash') ||
      e.request.url.includes('googleapis')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});

// プッシュ通知（将来用）
self.addEventListener('push', e => {
  const data = e.data?.json() || {};
  e.waitUntil(
    self.registration.showNotification(data.title || 'ワセ飯', {
      body: data.body || '',
      icon: 'icon-192.png',
      badge: 'icon-192.png',
      tag: data.tag || 'wasemeshi',
      renotify: true,
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/waseda-meshi.html'));
});
