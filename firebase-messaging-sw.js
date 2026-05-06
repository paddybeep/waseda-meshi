importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDtjNB_-0Gexex6BKX2NECiGAxxwel9-r0",
  authDomain: "wasedameshi-c999b.firebaseapp.com",
  projectId: "wasedameshi-c999b",
  storageBucket: "wasedameshi-c999b.firebasestorage.app",
  messagingSenderId: "1040430931983",
  appId: "1:1040430931983:web:6a3b12959382b0e060837a",
});

const messaging = firebase.messaging();

// バックグラウンドメッセージ受信
messaging.onBackgroundMessage(payload => {
  const { title, body, icon } = payload.notification || {};
  self.registration.showNotification(title || 'ワセ飯', {
    body: body || '',
    icon: icon || '/icon-192.png',
    badge: '/icon-192.png',
    tag: 'wasemeshi-owner-notif',
    renotify: true,
  });
});
