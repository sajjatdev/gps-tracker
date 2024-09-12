'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8df6dfe27b87afd9cd8bfd75efb67a01",
"version.json": "503c9804e340909f6e7e2528fd3a342b",
"index.html": "dc846303625fca5e9701d664500bfd7c",
"/": "dc846303625fca5e9701d664500bfd7c",
"main.dart.js": "b1e7f0e2fc640f9de2a9aaac4b3e1c3c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4f7151d0e455a4dbc8e6106a5b996359",
".git/config": "b41200c7378026638f8d00a38b2bf332",
".git/objects/95/99775e8186a8599625b7c14148fade65fea897": "2f422eca457faf04ab041b10c149a415",
".git/objects/92/8753b8a2d58d44cbf7e97561d0a5bec88374a4": "8005988b9e26e3b5e16ae25125eff0b1",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3c/f83c30d9b78c977cefbff7e4f0d10f5952c311": "cdb40230978c2d42150f7a27cf3113c3",
".git/objects/58/0a45ff6ff067512831ca9f134d52743a1ada8a": "edfb5f5886448bfe2364b55e82be71c2",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/5f/c4fb2a34c05bae839929c2cb83fdda07b41a8a": "b39ca86b73f44c249e9b59f3e2709ca9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/7261397a8b6e7bd6bdb75eb5938e8e2c615831": "16b4d84d5f3fdbae9d24c214378494f6",
".git/objects/bd/e35a91ce8aae1d1f3191b253cf8b2f53d62b2f": "f8b1089ac9996470e6e6ad8f46fb135d",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/bc81499f855117ba1c704be4d2af6debdffdb9": "f53ce5840f33c39d1e76bfa70d439133",
".git/objects/20/ca75b31a437fb346ca97e5d58573eac5b64135": "116c9de421f8611e5b0d38d4b5f9b8b5",
".git/objects/11/cc01c91016706c0c066f509aa44cf63962fce5": "0c50a2f54123cf413c3c7dbc6659ee78",
".git/objects/16/d0658b5f568841fec841f7b89d5e898c58865b": "11d7a409b3ffebd1512537dd5fe3455e",
".git/objects/42/e13fdecee296b9254ef1250a8532274a436a45": "a057fdaa6d4edb5b55c800d31585ef42",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/1fb1856ff7b93bef38cbd587da1ea2459f21fb": "0e4b1245142836696f326ade3524b4ee",
".git/objects/28/b1800951313cd78708825514a0b182f92cef89": "9668b37853ee204a57bfc5a7427f9e16",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/db82050c7a8024a4a21ffacba117e23dd87e31": "d018bb6e69a8cf335c34ff42963c047b",
".git/objects/21/2c0d7eee37e3105242c69104897ae49ed5c337": "12a924e486b28e91b56874beda4aa408",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/724e7766d3bb6452e0612b88f3f29bb590d5e5": "7754a59545f279bba419bc64fb21e0ec",
".git/objects/6e/01995771f341624f0e9eb4ff5a429283121e29": "d853ab4450e16a9274416faa09a54d34",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/eee3df24b1ea6382db8d9f1a1f5167c66551a0": "bbf6e0bf93050e264fe211b620adfe38",
".git/objects/01/961990e3edac149d8ef2bc760d0fce920384a7": "d8adaa918120d588a8b72fa700a7b1df",
".git/objects/06/8de292b95b497c3e23eee29d999175c9e52088": "4dfa46f52c999c64a57e02b254b55499",
".git/objects/52/c0e2b0fac22ed1fb23d79f0199a7704d4c1a85": "7a645cc3e44a3841655638d9c5815b52",
".git/objects/0f/0c1378186212df53b5fa50e303a43c211cf933": "fb9e2a7041da5b49396c0adcfb4af515",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/d701263431d99538935211503e0b9e73e8bc2b": "758b7f6fe42e7e12383681b0ed6e9020",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/6dbd8119ce8d5abe18838d6953b27e841b6c17": "cfc846f6edbbccd1077447eb75a01448",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/017e6ee7372879e1c7576a2ed38f227501f188": "bbf52448cb4ae9c4f48a049ecaf44149",
".git/objects/a8/f852783b7ba0ac99984d1edcfaa6dd36f4acff": "73689d0ed10bb03d6a7149a08b17adbe",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/f8/60384de1db904a6843e475defebeabd611eb27": "52c9289103302d84d268c472e5026ed9",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/83/c4308a4bd9d711a3b49cda08a6ee0630b824a3": "23542a9be4d91b0273da8684f0a12ecf",
".git/objects/1e/ffc99d15aa051e80a32314e102ed0f30be7a70": "c9a686ba55ffabb422a6f9025c0e1d32",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/24/cb946a5950df69c2d2daf38852a84287f55a9e": "aa6439a3e9fa4648528fa115ab3e5f55",
".git/objects/4f/9a84ed415cddf67849a0bd065ab9ab8bf5fd74": "22888c947b3286a9d3865d615c53aa23",
".git/objects/8c/ea3d88f640144b77b36a3e8103bfa04465e2cb": "5d13b44ab4d53ff32f32552241fa790f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/82/fa9cfb1ced31c91816c8e0ea10c013090384b7": "489ade1ef046117f8abd7aa6e56eb6de",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/7c9a0db31192e2ed993a88a0c1a1f804d8b2dc": "4214f1513ade35a338735fb8d6dc8645",
".git/objects/2b/223dfb89046ca40bb89246e1e25bde22a23cda": "3c0748ceeb81180532709916b089267c",
".git/objects/47/b8fda729324a0a82ec8c3cad6e8f3fa6535e6c": "30e647cf29d78f3ceb1d3f52fcd57703",
".git/objects/78/d287e88cfe7d9bee6dc29a06be0ecd7b92d4e2": "d632d7640366516432503eab3af3029b",
".git/objects/7a/1fa2bcef059f9156d1442b3b71a141d5b60390": "cab903aeb474c702f43d68413412fb2b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cb31302bbd7ee46b6c97a696ff184c2",
".git/logs/refs/heads/main": "61fd70a43669e86602e25b29925cc1ba",
".git/logs/refs/remotes/origin/main": "266491d50162a88556983211386bf060",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a093689fadb0ed03051adc05afecd906",
".git/refs/remotes/origin/main": "a093689fadb0ed03051adc05afecd906",
".git/index": "592a779b7832400d3b64b857aa64655f",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/FETCH_HEAD": "ff649e4a122d8e4c0b78082876a0c4a8",
"assets/AssetManifest.json": "4966b0910af100311eb9d228a76799ea",
"assets/NOTICES": "26982e86093e704cfc0e972a83a54117",
"assets/FontManifest.json": "56ff51a8c09e588931598ecc1fa77075",
"assets/AssetManifest.bin.json": "9ef82c460dd18507059dd894d9fc3219",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/lucide_icons_flutter/assets/lucide.ttf": "0ec46ade0e9a3daeef28563de71ad09b",
"assets/packages/shadcn_ui/fonts/Geist-UltraLight.otf": "b64b37fbec0a925067cbf530e4962fec",
"assets/packages/shadcn_ui/fonts/Geist-Thin.otf": "8603d0fe0def4273ebeee670eedcfb86",
"assets/packages/shadcn_ui/fonts/Geist-Bold.otf": "d3e1d3dc690224fd330969af598a9c31",
"assets/packages/shadcn_ui/fonts/Geist-Black.otf": "cf003c4f85b590cf60bec1e111ebaaf5",
"assets/packages/shadcn_ui/fonts/Geist-Regular.otf": "4d02716b4f2f2e4d9c568c8d24e8e74d",
"assets/packages/shadcn_ui/fonts/Geist-Light.otf": "21f434e8c2b53240a0c459b9d119f22f",
"assets/packages/shadcn_ui/fonts/Geist-SemiBold.otf": "2c0b1d3e7b1c71bedc2eecf78f7a1d1d",
"assets/packages/shadcn_ui/fonts/Geist-Medium.otf": "f7ceaf00b58d396cf93ff1ea43740027",
"assets/packages/shadcn_ui/fonts/Geist-UltraBlack.otf": "f3591a030925294b2bb427e6a6c9b0d8",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "caf262c8d25e5a712010f094c1a7543f",
"assets/fonts/MaterialIcons-Regular.otf": "f8706c19e4a9db98609ccc2af4109ab9",
"assets/assets/images/empty.png": "fc8394aea0bd4d2b134a69d27915f18f",
"assets/assets/logo/logo.png": "e7b3a5d33d3b5456f92ab192ac01e821",
"assets/assets/vector/FeatureCollection.json": "b2c9c09b6af6754b8a5ff98ee1a9b3c6",
"assets/assets/vector/vector.json": "4ab1e83c5e26ef4f5f39a19699af59ad",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
