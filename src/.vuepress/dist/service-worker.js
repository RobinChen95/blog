/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8376fd57999858b8ad61077120acf809"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "45c6e8579dddccc187a9a680a35cd769"
  },
  {
    "url": "assets/css/0.styles.067f3b8b.css",
    "revision": "cf627fbaa7ea900b3699bdbc65312066"
  },
  {
    "url": "assets/fonts/hack-regular.3eccb984.woff2",
    "revision": "3eccb984a54973a75212391b6d117ace"
  },
  {
    "url": "assets/fonts/hack-regular.b038bd31.woff",
    "revision": "b038bd31fef76bc622d123ae8892efa2"
  },
  {
    "url": "assets/fonts/ktquez.06665560.eot",
    "revision": "066655605108d4a0ae74dcc69bbe7547"
  },
  {
    "url": "assets/fonts/ktquez.87607358.woff",
    "revision": "876073588156b8e621394e0705ed0695"
  },
  {
    "url": "assets/fonts/ktquez.9d97d905.ttf",
    "revision": "9d97d905fd7b9fc68d637ac83de00744"
  },
  {
    "url": "assets/img/ktquez.87f9d450.svg",
    "revision": "87f9d450e4ce8f1d445f17b1cb0a4e6a"
  },
  {
    "url": "assets/js/1.7f200163.js",
    "revision": "539096279149ed6d8d215e9732e397ca"
  },
  {
    "url": "assets/js/10.a4a7b55f.js",
    "revision": "9bf91805320cb04e6c4d8cf04941a1c7"
  },
  {
    "url": "assets/js/11.ed508024.js",
    "revision": "784c9de620dac8bf0cd090ad097a31fb"
  },
  {
    "url": "assets/js/12.6a873ab0.js",
    "revision": "b2b58b6cbeb9bbacf3d5a36b717f17f1"
  },
  {
    "url": "assets/js/13.f13af10d.js",
    "revision": "259feb96ae15be98b87247b63c6ae66e"
  },
  {
    "url": "assets/js/14.dfa998ed.js",
    "revision": "47654cd7a250d6be5c6e94970d3d058c"
  },
  {
    "url": "assets/js/15.46d89e99.js",
    "revision": "878202f5628f1811fa739c7e8d9170ea"
  },
  {
    "url": "assets/js/16.07f7b108.js",
    "revision": "f4822eb190616d99fc208cf1aa836f72"
  },
  {
    "url": "assets/js/17.d40fb376.js",
    "revision": "12cd2bea6b64928a52b7d774b53cc083"
  },
  {
    "url": "assets/js/18.06c6665e.js",
    "revision": "7c37dcb5debafc1c135143c428fa49f7"
  },
  {
    "url": "assets/js/19.a2f2595a.js",
    "revision": "17b6df42885d7c2b85961272ae4aa3a0"
  },
  {
    "url": "assets/js/2.bea322ee.js",
    "revision": "4be320f96a30f2969fff5ed610d03659"
  },
  {
    "url": "assets/js/20.0ba53179.js",
    "revision": "993ffeedbb5bc8e666633c3adc42795c"
  },
  {
    "url": "assets/js/21.72c09d0b.js",
    "revision": "ea45ab4036c42cc16273beb3d7ae3582"
  },
  {
    "url": "assets/js/22.60809e96.js",
    "revision": "31d45a9e263fdb8c083b92f97daa8c9c"
  },
  {
    "url": "assets/js/23.6485927a.js",
    "revision": "2f754ece5ffb6a922b754aed477f87f2"
  },
  {
    "url": "assets/js/24.186aefcf.js",
    "revision": "013bc56fe0dba4c1551eda10a2093ea2"
  },
  {
    "url": "assets/js/25.4d3c6888.js",
    "revision": "3bda71b882d61962d124fbdbfd5b92c2"
  },
  {
    "url": "assets/js/26.4657b4e3.js",
    "revision": "54602bb5f422692bf91ce462a2868599"
  },
  {
    "url": "assets/js/27.14c6d376.js",
    "revision": "81e295e81a3259ba0dee73c8927ca083"
  },
  {
    "url": "assets/js/28.78a83066.js",
    "revision": "793926c0f0603f0f07538aeaf52c1224"
  },
  {
    "url": "assets/js/29.8b681a6f.js",
    "revision": "75666d9f676a6cbc163ed256982dfe15"
  },
  {
    "url": "assets/js/3.bebad3b6.js",
    "revision": "9136205e6d9f9942df9996ecba311611"
  },
  {
    "url": "assets/js/30.cc6fdc50.js",
    "revision": "23eff177955bcda1a95cd742d0fb4875"
  },
  {
    "url": "assets/js/31.b4bc875a.js",
    "revision": "1cdaa1da6f487086a75534182311f4ce"
  },
  {
    "url": "assets/js/32.4b90c299.js",
    "revision": "dad5c025fd20d71f89010021cb17f647"
  },
  {
    "url": "assets/js/33.e0b206fe.js",
    "revision": "86645c19b33335c398b728850a354607"
  },
  {
    "url": "assets/js/34.5271f96c.js",
    "revision": "3971dd23e3fb6881365ae4c80d4c9cdd"
  },
  {
    "url": "assets/js/35.6d809140.js",
    "revision": "3cbc3062237de4b6f69712bbce5a0395"
  },
  {
    "url": "assets/js/36.59596627.js",
    "revision": "64a439f43c0b5bbcb50ade9566718f92"
  },
  {
    "url": "assets/js/37.9674ad8a.js",
    "revision": "67415810a36271d3c5b8c850cbb68080"
  },
  {
    "url": "assets/js/38.070a0e70.js",
    "revision": "e18b577b557466072a8883809925b40f"
  },
  {
    "url": "assets/js/39.f517c033.js",
    "revision": "0fdfc5c31a5f7130bbc52bd3196a94b1"
  },
  {
    "url": "assets/js/4.67d305e2.js",
    "revision": "a62109d889dac640b74280dfd4cc8b08"
  },
  {
    "url": "assets/js/40.987508df.js",
    "revision": "bdf9ef917f324d7308d7c92fa58a0f17"
  },
  {
    "url": "assets/js/41.94072ac7.js",
    "revision": "55274b34d44fe484c2ed7ff11ec4bb4d"
  },
  {
    "url": "assets/js/42.6633a3cd.js",
    "revision": "c2831516a31b2d7a389cf3678ab96222"
  },
  {
    "url": "assets/js/43.c03a6ae3.js",
    "revision": "972a84f143f6fca79521ed8a084f566c"
  },
  {
    "url": "assets/js/44.a443d491.js",
    "revision": "87a01c4b36e5502241c743cf90b19cda"
  },
  {
    "url": "assets/js/45.b07130c9.js",
    "revision": "c4e5f48ff2c1eb4519455f2cdd9abf82"
  },
  {
    "url": "assets/js/46.b7edad26.js",
    "revision": "0688a110c91bb7ade8a2453c18ff47f2"
  },
  {
    "url": "assets/js/47.f00e76b3.js",
    "revision": "9f60163ccdd596ba8b4c8fad1ee6e810"
  },
  {
    "url": "assets/js/48.7a68491a.js",
    "revision": "009c27c12622eada5809442bf6346575"
  },
  {
    "url": "assets/js/49.78572a33.js",
    "revision": "4f202107f031787a7d0a62885eae5c3a"
  },
  {
    "url": "assets/js/5.0bd6facd.js",
    "revision": "5aad49d682a73343bd986e9b992b9292"
  },
  {
    "url": "assets/js/50.72fc32fc.js",
    "revision": "ab29ef8ab81466138837331b5916f1fe"
  },
  {
    "url": "assets/js/51.ff732831.js",
    "revision": "9cc41fcdb409a9545ff4f30593bd4c4d"
  },
  {
    "url": "assets/js/52.0ae22ab3.js",
    "revision": "bfdd70280394f064b5e3145e52e5d207"
  },
  {
    "url": "assets/js/53.bd7f9bb5.js",
    "revision": "109a39d3ac5aa04e5376075a534b26ab"
  },
  {
    "url": "assets/js/54.2a53f5f2.js",
    "revision": "4ae107140b36a8fd282e6841ce47f3cd"
  },
  {
    "url": "assets/js/55.358b21f2.js",
    "revision": "6d81e6f313ae35b3e254c60f133f096c"
  },
  {
    "url": "assets/js/56.54114631.js",
    "revision": "b6b296266f04033f58869ba1e084a605"
  },
  {
    "url": "assets/js/6.abbb45d2.js",
    "revision": "b2fda158954bc8670ca927aed04d767d"
  },
  {
    "url": "assets/js/7.f1ae0f01.js",
    "revision": "56fbc9ec595dcb4b9f8eaf411a12723b"
  },
  {
    "url": "assets/js/9.0fcd41d2.js",
    "revision": "71df20039d8996d951636ab970a7fda2"
  },
  {
    "url": "assets/js/app.3f9b4db0.js",
    "revision": "6b1d32076ac5296269b780fbaf22d68f"
  },
  {
    "url": "authors/chen.html",
    "revision": "9b8b58174613e202722adee419463297"
  },
  {
    "url": "authors/index.html",
    "revision": "fe3e263cf10b2420aa25f24714ea505e"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "9b8b58174613e202722adee419463297"
  },
  {
    "url": "autores/avatar.jpg",
    "revision": "6febaf109713bc32dbf5de4361d75304"
  },
  {
    "url": "categories/HTML.html",
    "revision": "19cabae3086309b36c1c51e82f756d72"
  },
  {
    "url": "categories/index.html",
    "revision": "5cfdd19eed37cfc97af4cfa7299eb662"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "1fc7d4487c218e982819cbd865356e72"
  },
  {
    "url": "contact/index.html",
    "revision": "7746e393d4e29190c65291fdb659d6ce"
  },
  {
    "url": "es/autores/index.html",
    "revision": "6dbaf44ed8999576bd01cc3d3a2e2afc"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "e3ddef0b934c2416ce37182fe8e6ff7d"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "056fee641aa0e1732593fc067c7e83c6"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "c661cf310c311acbc600333d6ea7c344"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "8c3c9361823e491b583ba3241b0e4f79"
  },
  {
    "url": "es/index.html",
    "revision": "4ced3ad2d07b7dcd7af4ffc46bf250f2"
  },
  {
    "url": "es/posts/index.html",
    "revision": "2a82d238756ae69a41e0148057b45194"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "32dfb48b67a71cbc9859ff3036075791"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "99aefe74b3517ebc0ecd1471acceffaf"
  },
  {
    "url": "fallback.png",
    "revision": "5f03fc301a31248e3859493fefe8c720"
  },
  {
    "url": "favicon/android-chrome-192x192.png",
    "revision": "7dd8a65725268f26938139b90d13ddfb"
  },
  {
    "url": "favicon/android-chrome-512x512.png",
    "revision": "93a3772555db2ce10cee2b8aa5369b0b"
  },
  {
    "url": "favicon/android-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/android-icon-192x192.png",
    "revision": "802a593052e21156374bf7b9cf02c2a7"
  },
  {
    "url": "favicon/android-icon-36x36.png",
    "revision": "9ad81760948772380acd04179c6f161a"
  },
  {
    "url": "favicon/android-icon-48x48.png",
    "revision": "5d41a42424444503de5e10809d837b33"
  },
  {
    "url": "favicon/android-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/android-icon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/apple-icon-114x114.png",
    "revision": "e332b1f9cf13e90f4a20aa7a5bdc8baf"
  },
  {
    "url": "favicon/apple-icon-120x120.png",
    "revision": "ce5b08dac1f9df7888bcd4b8ac55860a"
  },
  {
    "url": "favicon/apple-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/apple-icon-152x152.png",
    "revision": "9311b71dbf3d7c449fa655eba4efd7a3"
  },
  {
    "url": "favicon/apple-icon-180x180.png",
    "revision": "8cae876e1111dec29a0a92dbeb950491"
  },
  {
    "url": "favicon/apple-icon-57x57.png",
    "revision": "d349fef280057ab820fb110862449ee1"
  },
  {
    "url": "favicon/apple-icon-60x60.png",
    "revision": "2449753757cc4b29e41374ea0de62dc7"
  },
  {
    "url": "favicon/apple-icon-72x72.png",
    "revision": "30de33a38d62270b7674423e33c2a296"
  },
  {
    "url": "favicon/apple-icon-76x76.png",
    "revision": "cc92f0f6281b1b092c30d2e09488b02b"
  },
  {
    "url": "favicon/apple-icon-precomposed.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-icon.png",
    "revision": "4693e5292746a69072e85ecec51e0b3c"
  },
  {
    "url": "favicon/apple-touch-icon-120x120.png",
    "revision": "cdbf224429a4ab5124c830824e430ec3"
  },
  {
    "url": "favicon/apple-touch-icon-152x152.png",
    "revision": "50ffcf9e956bd4fbe6d5ff4231a3bc0b"
  },
  {
    "url": "favicon/apple-touch-icon-180x180.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/apple-touch-icon-60x60.png",
    "revision": "593d09b43e75f616c878d95b8dbf4b02"
  },
  {
    "url": "favicon/apple-touch-icon-76x76.png",
    "revision": "e26d4eeb0f82506ee9e260743bfbcd79"
  },
  {
    "url": "favicon/apple-touch-icon.png",
    "revision": "0e24ac61b2516d2cad8c7f365514cfd4"
  },
  {
    "url": "favicon/favicon-16x16.png",
    "revision": "718b39e95d139151a176b4048251891e"
  },
  {
    "url": "favicon/favicon-32x32.png",
    "revision": "f2d616179ad2aae07b2da243feaf340e"
  },
  {
    "url": "favicon/favicon-96x96.png",
    "revision": "3a0660f83f639a9803ecac4a33e1b3fe"
  },
  {
    "url": "favicon/ms-icon-144x144.png",
    "revision": "fe6b430e258740bcd64a2baf873a6d92"
  },
  {
    "url": "favicon/ms-icon-150x150.png",
    "revision": "b606b9da5dfd8ab72f9ca32cfd47ce33"
  },
  {
    "url": "favicon/ms-icon-310x310.png",
    "revision": "60c4e89ec11601dc57ca6047157d1e7c"
  },
  {
    "url": "favicon/ms-icon-70x70.png",
    "revision": "eee1b9ca03d48aa7ab2f37335a16ecc7"
  },
  {
    "url": "favicon/mstile-150x150.png",
    "revision": "14bca4f522e0c925715bbdda73cc94d2"
  },
  {
    "url": "favicon/safari-pinned-tab.svg",
    "revision": "43f3881d3115aabff8941e00447784f9"
  },
  {
    "url": "general/web-development.png",
    "revision": "4f3cf0f384b155165791d62b19b099f7"
  },
  {
    "url": "image-social-share.png",
    "revision": "542712558c72d1744dc5696ee91bd9af"
  },
  {
    "url": "index.html",
    "revision": "98b408de6b938ecd449053cbd9099ec5"
  },
  {
    "url": "ktquez-play-logo.png",
    "revision": "a368baa905f27e9eb73b79f47c431a8d"
  },
  {
    "url": "ktquez-play-logo@2x.png",
    "revision": "d73cc3b4641ffd39cad5455375b9db29"
  },
  {
    "url": "posts/blog_construction.html",
    "revision": "fcd499994d289f8331c20c6e0379633b"
  },
  {
    "url": "posts/conclusion_HTML.html",
    "revision": "59d707d940f5d4f7af7e16e744250fb9"
  },
  {
    "url": "posts/index.html",
    "revision": "f7536b551493e62629d2be2eec2409ea"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "1bec6e058555e63d7909c1d339f823ed"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "4bd1fbc7a09ea1f77a129adc056bcaa5"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "c27227161d3d7d9dc22ad5edc893086a"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "ba79a1a566e2ba895826062c070e7ed1"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "397a37fed46132ebf4de38ad740e9f14"
  },
  {
    "url": "pt/index.html",
    "revision": "a99e4fb2ecb3badbf4f34907faadf31c"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "07803cb9e721f87d260b486526d05c32"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "665fb26f46b10a84f6a3694cc3560973"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "4e6bf071621e56e65960ae535b4f8d3f"
  },
  {
    "url": "watermark-logo.png",
    "revision": "cb69efd3c0246f905ee651b1d97697ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
