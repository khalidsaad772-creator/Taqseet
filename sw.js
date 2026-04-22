const CACHE_NAME = 'khalid-store-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting(); // تجبر المتصفح يشغل الملف فوراً
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim()); // تخلي الملف يسيطر على الصفحة فوراً
});

self.addEventListener('fetch', (event) => {
    // ضروري عشان المتصفح يعتبر الموقع PWA
});
