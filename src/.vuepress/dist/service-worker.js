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
    "revision": "0ef262968d8f6247d01831423cd72187"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "898c41bf13bb5c9e22a59e5fee8895c5"
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
    "url": "assets/js/23.27382a4c.js",
    "revision": "ebf4dceaceb7532c99ff80b920a7b01e"
  },
  {
    "url": "assets/js/24.71bff25d.js",
    "revision": "380a8e165b71cee9933525fa1f81a100"
  },
  {
    "url": "assets/js/25.952e9e7e.js",
    "revision": "e07c15ef4a6df7ba086cfe958af5e148"
  },
  {
    "url": "assets/js/26.09a0277d.js",
    "revision": "3a4c53028037582bd0184fb379755215"
  },
  {
    "url": "assets/js/27.8fa369e3.js",
    "revision": "0b096283c1da9bcbd880771a649fb14b"
  },
  {
    "url": "assets/js/28.bc8bb3dc.js",
    "revision": "bfaeae634d344ba1d5e616c13db21717"
  },
  {
    "url": "assets/js/29.7aacff4e.js",
    "revision": "75666d9f676a6cbc163ed256982dfe15"
  },
  {
    "url": "assets/js/3.e15ad1df.js",
    "revision": "9d438d40cb7a6015c72b40a547c33943"
  },
  {
    "url": "assets/js/30.3225b382.js",
    "revision": "23eff177955bcda1a95cd742d0fb4875"
  },
  {
    "url": "assets/js/31.9956e0b7.js",
    "revision": "8c56ab25aa93c4c7f35e77f8ec40c3d6"
  },
  {
    "url": "assets/js/32.69bb7271.js",
    "revision": "0e54c06deedb59230d2266d6ef994f44"
  },
  {
    "url": "assets/js/33.e0e650c2.js",
    "revision": "351618443305951b39b5691338f903d1"
  },
  {
    "url": "assets/js/34.9fa69232.js",
    "revision": "b6768c99f96e5465c8b715feebb2fb76"
  },
  {
    "url": "assets/js/35.c149b1f0.js",
    "revision": "678e6b2c6d18fad0787cc925003ca893"
  },
  {
    "url": "assets/js/36.db4a55df.js",
    "revision": "9b5188c1f66b4e7ceee238161eecbb5f"
  },
  {
    "url": "assets/js/37.d42faf08.js",
    "revision": "031b37cce74236beab3d2c1ee80af056"
  },
  {
    "url": "assets/js/38.d87fd672.js",
    "revision": "98c3cc8ec62e0083019935ccdc824203"
  },
  {
    "url": "assets/js/39.6fa37861.js",
    "revision": "2162d3e6267c9a6b874fca9382acfa19"
  },
  {
    "url": "assets/js/4.180cd37a.js",
    "revision": "1c7b309571a87cde736ec4eabbf0b8e8"
  },
  {
    "url": "assets/js/40.d974efb8.js",
    "revision": "f55a2b0ab03d44163388514b6ea62912"
  },
  {
    "url": "assets/js/41.719f7019.js",
    "revision": "389907c85f03be93bbb552d009414695"
  },
  {
    "url": "assets/js/42.c03d96cd.js",
    "revision": "6a6aab5a7da0f086d63c247f7e61d5c9"
  },
  {
    "url": "assets/js/43.e6b599e2.js",
    "revision": "3ddb457a5be7d3828748dc4c5cec45bb"
  },
  {
    "url": "assets/js/44.3dd5224b.js",
    "revision": "bc160c1d58fc1f21d789e2f407519e66"
  },
  {
    "url": "assets/js/45.4f2c36d1.js",
    "revision": "377ecb20aea67a6fd38171826325cc1a"
  },
  {
    "url": "assets/js/46.6e7d338a.js",
    "revision": "efb726b604d6fa99f7973c899a60c032"
  },
  {
    "url": "assets/js/47.84206133.js",
    "revision": "12c0e0f8e8d3c634a8ea269b49f099ec"
  },
  {
    "url": "assets/js/48.cb87e6e0.js",
    "revision": "6cd28c743bcf5094d9639c0ff8ae4b5e"
  },
  {
    "url": "assets/js/49.1dc15148.js",
    "revision": "93429c7c86606295db6dde608c8db23b"
  },
  {
    "url": "assets/js/5.e3b399d4.js",
    "revision": "8f26bc79fad9a90a09ebd93fba2d5ed9"
  },
  {
    "url": "assets/js/50.3145251a.js",
    "revision": "3b5fe3f548a84c8104544f88c3fccfe6"
  },
  {
    "url": "assets/js/51.fe095eec.js",
    "revision": "7b4c28b2969e5631e7e813596dc3f44c"
  },
  {
    "url": "assets/js/52.e8e5ff0f.js",
    "revision": "10ed7cae177b3b15a3ca5e347bdbc6ad"
  },
  {
    "url": "assets/js/53.6d9177c3.js",
    "revision": "f4737651547a0b05d2e3361bc98eab5f"
  },
  {
    "url": "assets/js/54.ec33a36b.js",
    "revision": "3484554ea47ce99ba13a18c43b09e771"
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
    "url": "assets/js/app.dc20f9db.js",
    "revision": "e5257ab6e10980947a70f64b725a18af"
  },
  {
    "url": "authors/index.html",
    "revision": "c44a536fa5ebb4bc568706693282477b"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "5a37d79996dfeb0b665753849f1d71ad"
  },
  {
    "url": "autores/avatar.jpg",
    "revision": "6febaf109713bc32dbf5de4361d75304"
  },
  {
    "url": "categories/index.html",
    "revision": "a86a2e53aa7faeec0240de506026bb05"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "b76c38d257bd3b2318382f075cc54ccd"
  },
  {
    "url": "contact/index.html",
    "revision": "21d581747ec757a0205eac87a7fdd768"
  },
  {
    "url": "es/autores/index.html",
    "revision": "f93ad5c038b69dfdec9f48a2cb292b20"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "518b4d18ad4bfb64745862d76cdaf7ec"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "21b2936ccdc5651d9f571be0fe28ad10"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "c1ad28447bc2998f670098d760f98b1a"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "b08b0045ef043922561ec230f96b4d41"
  },
  {
    "url": "es/index.html",
    "revision": "c3f7d8d9d4592e1a2f5d75b9963466e1"
  },
  {
    "url": "es/posts/index.html",
    "revision": "f978a618601804c08b2f06c37625a084"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "0b3838aed5a0c63413de8109d07920c3"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "6079b1a8f4e3917babc52a28adf77c7f"
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
    "revision": "d75f105fe8fac8a3c0bfc701e3b02df0"
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
    "url": "posts/index.html",
    "revision": "db22d184f69d49ffa014b03a3d3d3522"
  },
  {
    "url": "posts/my-first-post.html",
    "revision": "350d16ef509b6de36a7e9abc12f9ddd4"
  },
  {
    "url": "posts/test.html",
    "revision": "9d4b2a95a38cd1df258995adbf497299"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "2431c9920861600535624eddc4c46f4c"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "242b3a08885fde4f629552238052275b"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "dfe924d92ee23af220dec29926f5cc16"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "a2446bd543cfe0f4ed2995d7de746697"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "184b8ec626be584f619665965c021093"
  },
  {
    "url": "pt/index.html",
    "revision": "2c46172c499d601b1d6af170c5c075ce"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "88964a5259695a754afb62c0dae9fa80"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "9cdc31b6e4675efe9455d9666e8d7a81"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "5513b9847b94d0911edebae6f36c9c49"
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
