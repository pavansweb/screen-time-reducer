// install event
self.addEventListener('install', evt => {
  console.log('service worker installed');
});

// activate eventt
self.addEventListener('activate', evt => {
  console.log('service worker activated');
});