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
    "revision": "41fdcf7503c254782c09e9ef721bf3c0"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "78f2d013ceb2cacd8208da08ad219ec6"
  },
  {
    "url": "assets/css/0.styles.bd346be4.css",
    "revision": "aa2e3de49100c60846f2810a66b7842c"
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
    "url": "assets/img/ktquez.d2832da9.svg",
    "revision": "d2832da9704a75632262065d042df72f"
  },
  {
    "url": "assets/js/1.c604690a.js",
    "revision": "da95de208370bf838b8956e5d8b8f41e"
  },
  {
    "url": "assets/js/10.497abc6b.js",
    "revision": "9b0a4440cce8b6679ff46da0c417752c"
  },
  {
    "url": "assets/js/11.321a9616.js",
    "revision": "aee1c02c76e25e7995f12004a35b48fa"
  },
  {
    "url": "assets/js/12.bb206e77.js",
    "revision": "86e15ae027fb40a9f30efd88e41d6f9f"
  },
  {
    "url": "assets/js/13.0cfa3309.js",
    "revision": "9a52192a524ddf344b18d1cb17c7acd7"
  },
  {
    "url": "assets/js/14.bade71c6.js",
    "revision": "1241533dffacba1d07f0ab4826a88141"
  },
  {
    "url": "assets/js/15.f2ea17fe.js",
    "revision": "d5d6f681f3e2b07bf69e0d3e478d2581"
  },
  {
    "url": "assets/js/16.8eef92ce.js",
    "revision": "bf776ef5131cc4d76285600e66018d35"
  },
  {
    "url": "assets/js/17.772ec120.js",
    "revision": "c2bf9088ccfd5065e38e955ba8c8b48e"
  },
  {
    "url": "assets/js/18.ccb5fbe7.js",
    "revision": "cef57bb23049390ee673c8c9d6173a99"
  },
  {
    "url": "assets/js/19.2a65cd41.js",
    "revision": "c6a8727b1e62c83881cee5abca0abf47"
  },
  {
    "url": "assets/js/2.138ab277.js",
    "revision": "a98af48a1f265788d03d72e3b9720411"
  },
  {
    "url": "assets/js/20.1dd15e23.js",
    "revision": "f4e43e5d5d275a1c395fb36f5c6a7c32"
  },
  {
    "url": "assets/js/21.6bd15cef.js",
    "revision": "2fa82cdea2ece405a54d98497c7f2d3e"
  },
  {
    "url": "assets/js/22.c5d37ce2.js",
    "revision": "396ff80f8de0f1c12db05c89d70df4ac"
  },
  {
    "url": "assets/js/23.40aa9e45.js",
    "revision": "5f468320ecea270e0e19d8b726ce47ff"
  },
  {
    "url": "assets/js/24.b48d137f.js",
    "revision": "9874a79ab2f7057a563514391dbad4c2"
  },
  {
    "url": "assets/js/25.71bbdc80.js",
    "revision": "37110b6a4e80155eabded30d96aca27b"
  },
  {
    "url": "assets/js/26.9cc0459d.js",
    "revision": "fe0a7f93b3f8dd8d7d091fd5a1cc7e99"
  },
  {
    "url": "assets/js/27.c521d55a.js",
    "revision": "68b31e9ca591507285354fb2317072e2"
  },
  {
    "url": "assets/js/28.183be045.js",
    "revision": "9c28d17047df23e0802a296e32f837cf"
  },
  {
    "url": "assets/js/29.3e0cc7c4.js",
    "revision": "c0f32cd23db0c2a94f476eacc20214f1"
  },
  {
    "url": "assets/js/3.59e01439.js",
    "revision": "bd4c30042514cc8be6c16a79651fc9d4"
  },
  {
    "url": "assets/js/30.e68d69bd.js",
    "revision": "a1310c2145a58b16db1e1030f9798b6b"
  },
  {
    "url": "assets/js/31.11fc5d19.js",
    "revision": "0e8948f0fb200ef4bc20324148bd1321"
  },
  {
    "url": "assets/js/32.12bc5881.js",
    "revision": "eba31c68ff4c1b8f9f33fc4d4ce171b8"
  },
  {
    "url": "assets/js/33.e935a8af.js",
    "revision": "fba11cfd6dac42697cde6bd8e5426f02"
  },
  {
    "url": "assets/js/34.2ba0bf08.js",
    "revision": "b09069d932f86bed65e04cf42359ce2b"
  },
  {
    "url": "assets/js/35.6d809140.js",
    "revision": "3cbc3062237de4b6f69712bbce5a0395"
  },
  {
    "url": "assets/js/36.f6d033fa.js",
    "revision": "faeaf2c57a7b3f3b59121be13febe236"
  },
  {
    "url": "assets/js/37.d77d1205.js",
    "revision": "e7caec32868d9f3ccbcdc2d74697bc69"
  },
  {
    "url": "assets/js/38.d3bacff8.js",
    "revision": "00859448f1bc12297a8c1edabcbff207"
  },
  {
    "url": "assets/js/39.2172cec0.js",
    "revision": "84fc2847ab5bbf60e2fc620fe6b6a52d"
  },
  {
    "url": "assets/js/4.7392c3a6.js",
    "revision": "95883baaa4a22855ee3644be95ad8146"
  },
  {
    "url": "assets/js/40.25073f0c.js",
    "revision": "381073d94b07213c25663f9cd5414cb4"
  },
  {
    "url": "assets/js/41.38301e02.js",
    "revision": "2210c263cd367f1d8c5277a189968e28"
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
    "url": "assets/js/44.de0bdfb7.js",
    "revision": "96b080a85d675711e0aed5513a7925aa"
  },
  {
    "url": "assets/js/45.d0f55462.js",
    "revision": "d29b92f42f8d922e4355434385d8b436"
  },
  {
    "url": "assets/js/46.89f0ddf4.js",
    "revision": "0770d933123ceda87a6df8aa4622ca74"
  },
  {
    "url": "assets/js/47.166b7c9e.js",
    "revision": "3e421a17e8785b7bd86ffb1f13d9951f"
  },
  {
    "url": "assets/js/48.7067a4e6.js",
    "revision": "51ea10b504a113e73adb1a055261c124"
  },
  {
    "url": "assets/js/49.20b3ad24.js",
    "revision": "f2a8722763ad3cbc247e5367791fad12"
  },
  {
    "url": "assets/js/5.1087a530.js",
    "revision": "4a0c0fb472fa9a439ad52eaeb354274d"
  },
  {
    "url": "assets/js/50.19507669.js",
    "revision": "9a461c459e578d15643a998cd149993e"
  },
  {
    "url": "assets/js/51.686bb1de.js",
    "revision": "33d8a266ae3b3d3c2e5588b96b199335"
  },
  {
    "url": "assets/js/52.11385d02.js",
    "revision": "f12fc67a9d3142e19af0ebaa7b391d04"
  },
  {
    "url": "assets/js/53.5b7f56a4.js",
    "revision": "450697427ed00a0fef59d7d9f1ce8ddf"
  },
  {
    "url": "assets/js/54.3c010fad.js",
    "revision": "736809dbdc032f0fb448a0775b236fa2"
  },
  {
    "url": "assets/js/55.0962ffd6.js",
    "revision": "235e850e0f80912ebbb21dba943fc0ec"
  },
  {
    "url": "assets/js/56.e803c548.js",
    "revision": "243b549324bbca84bebf08c5aba878a2"
  },
  {
    "url": "assets/js/6.200f3abe.js",
    "revision": "81170d9e98688c8693d1e61599a1db61"
  },
  {
    "url": "assets/js/7.3c976115.js",
    "revision": "ff3c9a84e77fce7aa397cb15ae710c85"
  },
  {
    "url": "assets/js/9.bf184967.js",
    "revision": "5282a7e655b6d86735a3564d0eb7f1c9"
  },
  {
    "url": "assets/js/app.f6e2db44.js",
    "revision": "00a11dad19ad775291009a5db13d9dd1"
  },
  {
    "url": "authors/chen.html",
    "revision": "7c60139daa6a9cf6091323d25076c6a8"
  },
  {
    "url": "authors/index.html",
    "revision": "438c777122652363b0151bd8388d8b55"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "7c60139daa6a9cf6091323d25076c6a8"
  },
  {
    "url": "autores/avatar.jpg",
    "revision": "6febaf109713bc32dbf5de4361d75304"
  },
  {
    "url": "categories/HTML.html",
    "revision": "8d9ea7c0ef3b9808cd8cc35f2a8f7fee"
  },
  {
    "url": "categories/index.html",
    "revision": "3706cda8f0838ded9438d3e4c3fb1dd6"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "70c9851edba17e27e49e8295966ae0b6"
  },
  {
    "url": "contact/index.html",
    "revision": "24ff442e44d0668e8c9a868d886bdf86"
  },
  {
    "url": "es/autores/index.html",
    "revision": "0f11278e00bd0eaa4ff6619f2511d6e4"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "b107c56dd692c0f073fdfd9698079115"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "ab153ebbcbe4434d1c7156ad4eb7d327"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "623629e41d9210648c4b3a7acca52f2f"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "863e5b5e51d8cc5c6b15ed21d1084315"
  },
  {
    "url": "es/index.html",
    "revision": "0c07698014e98e74b1b9a4bfc5bf2e43"
  },
  {
    "url": "es/posts/index.html",
    "revision": "708457602fbc7a0da62e50502acc4c47"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "b74d27fc41d3986ca2696b9eb8c2eb8e"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "37b94e0e147fc38e810511cf3cc444a6"
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
    "revision": "3bdaba51c386e6ac1fd0bd48986ffb67"
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
    "revision": "45d78d643f9d4f137cf85d39dd1e6cb5"
  },
  {
    "url": "posts/conclusion_HTML.html",
    "revision": "2d0eceb44e710a6c95dabd03bb15f61f"
  },
  {
    "url": "posts/index.html",
    "revision": "c9cfa57ad0d154c1d3f67bcbddad0165"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "1c24d4f2b9663f524d61bed810e2b57e"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "8b5dc49eae5bad60f293aad7ced741cb"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "d5d6cd4149ee334692fe36debf995517"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "4588e6958035ef43f86534f295537a1b"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "1ae2c39bc75fdf4a92273c2f90fd27fd"
  },
  {
    "url": "pt/index.html",
    "revision": "eba9cd18040520b9352e5c301a742772"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "71e6815c6f92cd2f335c62193f28c1e3"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "c8558d4a18bedda2d6b1a4df6e007636"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "d4539e12411c8c30c7ae1806f8b14843"
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
