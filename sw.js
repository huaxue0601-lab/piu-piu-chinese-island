// Piu Piu 中文岛 · Service Worker（v3 起加入，离线可用）
const CACHE = "piu-island-v11-1";
const pinyinAudio = [
  ...["b","p","m","f","d","t","n","l","g","k","h","j","q","x","zh","ch","sh","r","z","c","s","y","w"].map((x) => `./audio/pinyin/initial-${x}.mp3`),
  ...["a","o","e","i","u","v","ai","ei","ui","ao","ou","iu","ie","ve","er","an","en","in","un","vn","ang","eng","ing","ong"].map((x) => `./audio/pinyin/final-${x}.mp3`),
  ...["zhi","chi","shi","ri","zi","ci","si","yi","wu","yu","ye","yue","yuan","yin","yun","ying"].map((x) => `./audio/pinyin/whole-${x}.mp3`),
  ...["1","2","3","4","light"].map((x) => `./audio/pinyin/tone-${x}.mp3`),
];
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css?v=11",
  "./pinyin-data.js?v=11",
  "./content.js?v=11",
  "./standards-content.js?v=11",
  "./example-bank.js?v=11",
  "./thai-translations.js?v=11",
  "./miniGameLibs.js?v=11",
  "./materials.js?v=11",
  "./culture.js?v=11",
  "./life.js?v=11",
  "./strokes.js?v=11",
  "./enrichment.js?v=11",
  "./milestones.js?v=11",
  "./learning-store.js?v=11",
  "./app.js?v=11",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./assets/picture-talk/s4-u1.jpg",
  ...pinyinAudio,
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== "GET" || !url.protocol.startsWith("http")) return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : Response.error());
    })
  );
});
