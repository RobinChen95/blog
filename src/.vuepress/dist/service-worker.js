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
    "revision": "b7ad80cfc0005cd569fe2b7ee2fe13a7"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "2d6864d2041377b0854b04d2bafbd16e"
  },
  {
    "url": "assets/css/0.styles.bfd1efc9.css",
    "revision": "47d279f2126699419acce8207ebb06f0"
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
    "url": "assets/img/ktquez.8ef6334d.svg",
    "revision": "8ef6334db409a3a48aea2e38db558893"
  },
  {
    "url": "assets/js/1.ae5bbbe0.js",
    "revision": "4b246e6f2b36b86abf4cf05302b2c481"
  },
  {
    "url": "assets/js/10.a0c30915.js",
    "revision": "f866602fe4a571c9c5e2e6a720c76f55"
  },
  {
    "url": "assets/js/11.09d231ee.js",
    "revision": "34a35732bbd3614f593749b6d168be24"
  },
  {
    "url": "assets/js/12.f5d59fab.js",
    "revision": "be92f79693f99e5ea75a20b90d358d29"
  },
  {
    "url": "assets/js/13.c3ae8367.js",
    "revision": "fed3134245f7b759a777aaeabfd181a2"
  },
  {
    "url": "assets/js/14.7afd4fa4.js",
    "revision": "3da1b4c7bc06228ff24456158ad44f6d"
  },
  {
    "url": "assets/js/15.c6b510a5.js",
    "revision": "674e9468451cd730352147e9559e9c74"
  },
  {
    "url": "assets/js/16.94a7d03b.js",
    "revision": "b00fa0a85935edefe1e38850227d3634"
  },
  {
    "url": "assets/js/17.b60df5ed.js",
    "revision": "6d7eaae015150469230b8e951ce2de76"
  },
  {
    "url": "assets/js/18.e902d2f3.js",
    "revision": "b6d2efb420000e6488a9defbd5e41ab5"
  },
  {
    "url": "assets/js/19.b8757983.js",
    "revision": "20b044c8acb9ace0494ae9cf5e73bb72"
  },
  {
    "url": "assets/js/2.14898c8a.js",
    "revision": "3da1bc83cbbbc4cbe61e74a09cf15aaa"
  },
  {
    "url": "assets/js/20.9c25007c.js",
    "revision": "a79571729bbb84c9ad2578af5d9d302f"
  },
  {
    "url": "assets/js/21.f85407d9.js",
    "revision": "c12e7ca748044676120ec22709d615c0"
  },
  {
    "url": "assets/js/22.a8ff7d3a.js",
    "revision": "cc293b98c1fca90e847ff583cb2f12d9"
  },
  {
    "url": "assets/js/23.356207cb.js",
    "revision": "ebf4dceaceb7532c99ff80b920a7b01e"
  },
  {
    "url": "assets/js/24.3d4a5260.js",
    "revision": "380a8e165b71cee9933525fa1f81a100"
  },
  {
    "url": "assets/js/25.6d6fd4a2.js",
    "revision": "e07c15ef4a6df7ba086cfe958af5e148"
  },
  {
    "url": "assets/js/26.97fa34fd.js",
    "revision": "09ef24722236e4b5c551b9444cdd216f"
  },
  {
    "url": "assets/js/27.d6393aba.js",
    "revision": "0b096283c1da9bcbd880771a649fb14b"
  },
  {
    "url": "assets/js/28.19183169.js",
    "revision": "ddeaeb6f0bdeda333b5513ba2be9b7aa"
  },
  {
    "url": "assets/js/29.8b681a6f.js",
    "revision": "75666d9f676a6cbc163ed256982dfe15"
  },
  {
    "url": "assets/js/3.e15ad1df.js",
    "revision": "9d438d40cb7a6015c72b40a547c33943"
  },
  {
    "url": "assets/js/30.cc6fdc50.js",
    "revision": "23eff177955bcda1a95cd742d0fb4875"
  },
  {
    "url": "assets/js/31.96231cf2.js",
    "revision": "1e45b568a494b015acf77c51d7d1e8a5"
  },
  {
    "url": "assets/js/32.82549aaf.js",
    "revision": "0e54c06deedb59230d2266d6ef994f44"
  },
  {
    "url": "assets/js/33.cbf9489e.js",
    "revision": "1f7113fd06fa0cc2509cd78d0ee98d73"
  },
  {
    "url": "assets/js/34.01cf9c75.js",
    "revision": "ff128d0c26248193fd6a6a9eb9b2cf70"
  },
  {
    "url": "assets/js/35.abfbeac2.js",
    "revision": "1d0cec004d2902ef48084ce525ab420a"
  },
  {
    "url": "assets/js/36.8a3acdf9.js",
    "revision": "8f81969c9e14aa760159b02e8fa82c96"
  },
  {
    "url": "assets/js/37.f43a1bcd.js",
    "revision": "a69ea22e39c6b690c69819f5f319643a"
  },
  {
    "url": "assets/js/38.61756ffe.js",
    "revision": "ab73f84e54847845a5196ebf3f7f6cce"
  },
  {
    "url": "assets/js/39.63cf6ad1.js",
    "revision": "2162d3e6267c9a6b874fca9382acfa19"
  },
  {
    "url": "assets/js/4.180cd37a.js",
    "revision": "1c7b309571a87cde736ec4eabbf0b8e8"
  },
  {
    "url": "assets/js/40.e6646e22.js",
    "revision": "459093db16a3f8f5d8bed4a2857218d7"
  },
  {
    "url": "assets/js/41.f55478b3.js",
    "revision": "389907c85f03be93bbb552d009414695"
  },
  {
    "url": "assets/js/42.e0801eff.js",
    "revision": "6a6aab5a7da0f086d63c247f7e61d5c9"
  },
  {
    "url": "assets/js/43.3e5c6f52.js",
    "revision": "3ddb457a5be7d3828748dc4c5cec45bb"
  },
  {
    "url": "assets/js/44.549bba25.js",
    "revision": "5ef75de292bef6c6b7b9ced665b88b2b"
  },
  {
    "url": "assets/js/45.88f62631.js",
    "revision": "de3ca1c5b8d6c426b1bff0ed8afe408c"
  },
  {
    "url": "assets/js/46.705d968f.js",
    "revision": "efb726b604d6fa99f7973c899a60c032"
  },
  {
    "url": "assets/js/47.bb808e79.js",
    "revision": "0a37edf1941ffbebcb937957fcb8136b"
  },
  {
    "url": "assets/js/48.62e4809c.js",
    "revision": "13aa0d6451226284d0a28dd536e0f669"
  },
  {
    "url": "assets/js/49.93d9924b.js",
    "revision": "177ef85d5498fc3e4d1e71bf311221c5"
  },
  {
    "url": "assets/js/5.d4a6abc3.js",
    "revision": "5c274fdb5d9f5f79a4e8d8db99f23a08"
  },
  {
    "url": "assets/js/50.79e7d800.js",
    "revision": "f3760993525db50cc128d14426876666"
  },
  {
    "url": "assets/js/51.5d592ad0.js",
    "revision": "4878aa718e9fef0771b59a074aa99554"
  },
  {
    "url": "assets/js/52.822caa9c.js",
    "revision": "ce473bcb16b86408ab0952801bb21326"
  },
  {
    "url": "assets/js/53.d104371a.js",
    "revision": "5dc9455504a4d06d7c9cbf1c4a6880a0"
  },
  {
    "url": "assets/js/54.59186627.js",
    "revision": "875e764550f31fc43ec7610d9e88bb25"
  },
  {
    "url": "assets/js/55.22062d1b.js",
    "revision": "28c4f5b98ef3ddf60634171dc27e1b3c"
  },
  {
    "url": "assets/js/6.e942b7d8.js",
    "revision": "a7e45ef2b73bea592ae8503e633fdf4e"
  },
  {
    "url": "assets/js/7.5be31076.js",
    "revision": "bd2fd728ae9ba9279ce58a3fdb069d40"
  },
  {
    "url": "assets/js/9.d20e795c.js",
    "revision": "2f429d9b35a5f3bfb437574d3ef5d272"
  },
  {
    "url": "assets/js/app.3122ef52.js",
    "revision": "38e65681a862fa35b9f02a601318c9c9"
  },
  {
    "url": "authors/chen.html",
    "revision": "47f62961776d08e1a67c8ba16d971a2d"
  },
  {
    "url": "authors/index.html",
    "revision": "a85651f6eb3bff8f84462ef4984eefbe"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "47f62961776d08e1a67c8ba16d971a2d"
  },
  {
    "url": "autores/avatar.jpg",
    "revision": "6febaf109713bc32dbf5de4361d75304"
  },
  {
    "url": "categories/HTML.html",
    "revision": "9c3674dbe8ac10870d9911f26fd9f5b7"
  },
  {
    "url": "categories/index.html",
    "revision": "a72fc7b5f4018db0b07a508e8e5fb0c8"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "e66361960fd6f233b869da115c939b64"
  },
  {
    "url": "contact/index.html",
    "revision": "7a38454923c720a1f4f45ebf295ae571"
  },
  {
    "url": "es/autores/index.html",
    "revision": "e4ea2a98be67855dd02910ef5a54385c"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "d9baf6262a7d841266b550b8f816f6ef"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "a9e019da50b910414cf49236d64c9e54"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "84d9660e2d6c316b4875804c0239fcac"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "ffe015e1c82d4438982da8809cd2c543"
  },
  {
    "url": "es/index.html",
    "revision": "fb6ac73251109cd76bfc55e81699d5cd"
  },
  {
    "url": "es/posts/index.html",
    "revision": "7ebf2c3bd0f458fbde71ba129686ee5d"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "a10e32dc1d2c3d5d59c9889d35ee90b9"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "55c3dc4250704e31670b833008881e34"
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
    "revision": "b389e60f295f9dcc3eefd80c309f3b38"
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
    "url": "posts/conclusion_HTML.html",
    "revision": "a1cb1283adaf8c9ff7a297752b11aaf9"
  },
  {
    "url": "posts/index.html",
    "revision": "0a7bec975d73035afbfb640e98644270"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "3f001f10fa6a01d36807c0e8dadd9f98"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "c958620198bd872eaad28dc1fe6a2434"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "2f71e27252c677bc69347c5d3757e83a"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "25cd6dad27f5bb97bd8cd5c79d428a93"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "e4d9d8b8cb7eea51ed7ecde0caef18b3"
  },
  {
    "url": "pt/index.html",
    "revision": "910f377728bb21a447d11d4b955e8abb"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "3839ce177ac85abd3089811adc57d416"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "bde4c9f7aff7e85ab763680c145e59a0"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "f0855949f3961de4328b39c0cf7a7af7"
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
