self.addEventListener('install', (event) => {
  console.log('Service Worker: Установлен');
});

self.addEventListener('fetch', (event) => {
  // Тут можно добавить кэширование, но для начала пусть будет пустым
});