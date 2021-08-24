'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4e9735f9500d76a8b513c1601283791c",
"index.html": "030a09e0d7d35fead5c0cfa36377e131",
"/": "030a09e0d7d35fead5c0cfa36377e131",
"main.dart.js": "48606ed1beab75e2736aa64c17b991e7",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "c2a1687c76e846fead8ed7a68fe24df8",
"assets/AssetManifest.json": "6b0dd64d6f428ae870e80414912aa984",
"assets/NOTICES": "637a6b90117849a6b4f3434abef6981b",
"assets/FontManifest.json": "71a4a82de411f155107da3f8dac64ebd",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_gallery/share_assets/ic_arrow_right_grey.png": "4bd322f24954a27dab2341ff52f08fbc",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/jsons/messages.json": "b630eb2cf1f67f69ee09f3db91e1c888",
"assets/assets/images/address_blue.png": "3ab246a514ac6ce6fd248d601d358757",
"assets/assets/images/tel_blue.png": "469f2a2d57c86222e52292d42fd14496",
"assets/assets/images/ic_arrow_right_grey.png": "4bd322f24954a27dab2341ff52f08fbc",
"assets/assets/images/2.0x/address_blue.png": "3ab246a514ac6ce6fd248d601d358757",
"assets/assets/images/2.0x/tel_blue.png": "469f2a2d57c86222e52292d42fd14496",
"assets/assets/images/2.0x/large_partner.png": "18bb5f4df7bd8f8af866dd75d28a5a96",
"assets/assets/images/2.0x/uncert_img.png": "d19fa88295e306b6fd25a26ed6df01cb",
"assets/assets/images/2.0x/new.png": "4df171e3991befd09a3e67994d3dfebe",
"assets/assets/images/2.0x/vip.png": "2e1e45801749f7ee569e195303ce3253",
"assets/assets/images/2.0x/hot.png": "7a6093be29166f3650ca61d1fa3783ac",
"assets/assets/images/2.0x/h_vip.png": "a7d90726c77a221e14f80df507a3512c",
"assets/assets/images/2.0x/cert_img.png": "de5fdb6975cfc428446adb4fb97fd9e0",
"assets/assets/images/2.0x/arrow_blue.png": "61b0e7346f1493da26db819551b44aef",
"assets/assets/images/2.0x/refresh.png": "24ac68320891a3998144cc949911fa65",
"assets/assets/images/large_partner.png": "18bb5f4df7bd8f8af866dd75d28a5a96",
"assets/assets/images/3.0x/address_blue.png": "9fc88cecca7fbd82ae559ab998019e68",
"assets/assets/images/3.0x/tel_blue.png": "2c3059c8d35d6681df416de612df2940",
"assets/assets/images/3.0x/large_partner.png": "58f7c9fa98a548ddc51f7bca2f1124af",
"assets/assets/images/3.0x/uncert_img.png": "4c719c12a77568992596fe9ff4d5771e",
"assets/assets/images/3.0x/new.png": "5f862fe49f211190782cc1710554576d",
"assets/assets/images/3.0x/vip.png": "b65cb80bdd882331a899025608f40f54",
"assets/assets/images/3.0x/hot.png": "605c65661427d8ebdf74490317c21ed9",
"assets/assets/images/3.0x/h_vip.png": "748b53662b881417fd7068a6ac68baf5",
"assets/assets/images/3.0x/cert_img.png": "f6201f24fc14f749780c0a5fde3b6111",
"assets/assets/images/3.0x/arrow_blue.png": "735ea6766f2626f436af6b074e227c04",
"assets/assets/images/3.0x/refresh.png": "d138458f8aab3b4437cd8bf80f3137c3",
"assets/assets/images/uncert_img.png": "d19fa88295e306b6fd25a26ed6df01cb",
"assets/assets/images/new.png": "4df171e3991befd09a3e67994d3dfebe",
"assets/assets/images/vip.png": "2e1e45801749f7ee569e195303ce3253",
"assets/assets/images/hot.png": "7a6093be29166f3650ca61d1fa3783ac",
"assets/assets/images/h_vip.png": "a7d90726c77a221e14f80df507a3512c",
"assets/assets/images/cert_img.png": "de5fdb6975cfc428446adb4fb97fd9e0",
"assets/assets/images/arrow_blue.png": "61b0e7346f1493da26db819551b44aef",
"assets/assets/images/refresh.png": "24ac68320891a3998144cc949911fa65"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
