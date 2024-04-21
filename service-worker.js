var cacheName = "pwaTeste+-v1.0";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.addAll([
          "./index.html",
          "./css/index.css",
          "./css/standard.css",
          "./imgs/shareHeartLogo.png",
          "./AppIcons/16.png",
          "./AppIcons/32.png",
          "./AppIcons/40.png",
          "./AppIcons/50.png",
          "./AppIcons/64.png",
          "./AppIcons/80.png",
          "./AppIcons/180.png",
          "./AppIcons/1024.png",
        ])
      )
  );
});

self.addEventListener("message", function (event) {
  if (event.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function (event) {
  //Atualizacao internet
  event.respondWith(
    (async function () {
      try {
        return await fetch(event.request);
      } catch (err) {
        return caches.match(event.request);
      }
    })()
  );
});
