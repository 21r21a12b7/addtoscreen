self.addEventListener('install', (event) => {
    console.log('Service worker installed');
  });
  
  self.addEventListener('fetch', (event) => {
    // You can add custom fetch event handling here if needed
  });
  