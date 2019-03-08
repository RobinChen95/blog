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
    "revision": "dcc3352056a4ff67ad695a4303f3283c"
  },
  {
    "url": "abduction.svg",
    "revision": "ef6dc31a4fa8384ba0cb717e83863a6e"
  },
  {
    "url": "about/index.html",
    "revision": "524d999794ffcde7d2df1967fb197af8"
  },
  {
    "url": "assets/css/0.styles.11fa9d68.css",
    "revision": "81ccf3ea6603bc25e99728679bfe2767"
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
    "url": "assets/js/1.44bcaa84.js",
    "revision": "2ae2cbae9cbfe4985c2bb9a85edde82f"
  },
  {
    "url": "assets/js/10.cc809c8d.js",
    "revision": "5cb1c132cfe4c41430e6d842fc6bc4a1"
  },
  {
    "url": "assets/js/11.f96869f9.js",
    "revision": "d7ef96e03070b887410f208f28753ba7"
  },
  {
    "url": "assets/js/12.bb206e77.js",
    "revision": "86e15ae027fb40a9f30efd88e41d6f9f"
  },
  {
    "url": "assets/js/13.a6f4d0f4.js",
    "revision": "db5139542dcaa7439efda083d8b242d5"
  },
  {
    "url": "assets/js/14.775a8c60.js",
    "revision": "df6bc0493a751690508ad6f23cb1d3f4"
  },
  {
    "url": "assets/js/15.b3d9a7a3.js",
    "revision": "127d1b73cb5fb48e06204d919da0955e"
  },
  {
    "url": "assets/js/16.6ccbf2a2.js",
    "revision": "ff189475eea3c80ed9d5d296f8e96165"
  },
  {
    "url": "assets/js/17.c929fdd6.js",
    "revision": "c77be31b0a8777ec5d1ac11478c0b56f"
  },
  {
    "url": "assets/js/18.edbdce4f.js",
    "revision": "dc5a78fbdc3a23740e3ca9c356cf3586"
  },
  {
    "url": "assets/js/19.d4a6bf8f.js",
    "revision": "bfc700458ded718b8c6b2915d7f15980"
  },
  {
    "url": "assets/js/2.c51ed6f0.js",
    "revision": "0bda3f6ff521f13de32fd7a9bd7a1d29"
  },
  {
    "url": "assets/js/20.545894c7.js",
    "revision": "5a8002274106b965655c083bb55e3f84"
  },
  {
    "url": "assets/js/21.9475f716.js",
    "revision": "51b8def5a51628db07b0a0b5f9f517b0"
  },
  {
    "url": "assets/js/22.cec2950b.js",
    "revision": "ca8cc0d1c6c12b910151d272e93dce3b"
  },
  {
    "url": "assets/js/23.cadfe9f5.js",
    "revision": "a316b683cd695609cf6a2d90fde28eb6"
  },
  {
    "url": "assets/js/24.435e7ee2.js",
    "revision": "7fdcc33ade42124335923a03bb71d85b"
  },
  {
    "url": "assets/js/25.3bb0bbe1.js",
    "revision": "81e86e8954d3e96de2c1aa9d5ceb448b"
  },
  {
    "url": "assets/js/26.48bcd569.js",
    "revision": "fd7e44a233c523a259bb8f2f198dd169"
  },
  {
    "url": "assets/js/27.d7a8c7a4.js",
    "revision": "b8585302c5b336c4aa943bcd6de8c97c"
  },
  {
    "url": "assets/js/28.19183169.js",
    "revision": "ddeaeb6f0bdeda333b5513ba2be9b7aa"
  },
  {
    "url": "assets/js/29.3e0cc7c4.js",
    "revision": "c0f32cd23db0c2a94f476eacc20214f1"
  },
  {
    "url": "assets/js/3.18c0e8f0.js",
    "revision": "d4caee40847d2472d7f0349f01d7398d"
  },
  {
    "url": "assets/js/30.e68d69bd.js",
    "revision": "a1310c2145a58b16db1e1030f9798b6b"
  },
  {
    "url": "assets/js/31.ed593287.js",
    "revision": "4b71458da7a971612bba70cb44cdaa54"
  },
  {
    "url": "assets/js/32.82549aaf.js",
    "revision": "0e54c06deedb59230d2266d6ef994f44"
  },
  {
    "url": "assets/js/33.204d7c42.js",
    "revision": "3b3a5be8d681658203afa00480ca4d4f"
  },
  {
    "url": "assets/js/34.64c697e9.js",
    "revision": "0b6b34e286f6b9ddc7b5a9f5a012be41"
  },
  {
    "url": "assets/js/35.def184bd.js",
    "revision": "7ece3716867720d980a600899c85b920"
  },
  {
    "url": "assets/js/36.153a85c6.js",
    "revision": "e5ccc99ba68af16535534b687a96cbee"
  },
  {
    "url": "assets/js/37.dd3b5a39.js",
    "revision": "5ac6d031c4e7f0fa010b0371a51500d1"
  },
  {
    "url": "assets/js/38.e3025192.js",
    "revision": "cdcaa6d7a7f31efbcd57ee36d741b0df"
  },
  {
    "url": "assets/js/39.63cf6ad1.js",
    "revision": "2162d3e6267c9a6b874fca9382acfa19"
  },
  {
    "url": "assets/js/4.6ca709bd.js",
    "revision": "0cae1a665fed55ff6be0288d08fedbef"
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
    "url": "assets/js/42.5bf2e5e0.js",
    "revision": "047005c8a44813691e58b023f1363d02"
  },
  {
    "url": "assets/js/43.017fc4ab.js",
    "revision": "a1c42d56b6a4ba5d24ac4ebcd09d4705"
  },
  {
    "url": "assets/js/44.737280b2.js",
    "revision": "c4c6fe0456e4d8a638048bb71e779066"
  },
  {
    "url": "assets/js/45.37a39c6e.js",
    "revision": "4d9cd3224f0f486252c9a08a8c102645"
  },
  {
    "url": "assets/js/46.61a1baf9.js",
    "revision": "aaf448cb9e1c7026868ae55672bb5556"
  },
  {
    "url": "assets/js/47.52ea271f.js",
    "revision": "4b534ef37a189ab476e2952c869c6c17"
  },
  {
    "url": "assets/js/48.ced704c5.js",
    "revision": "425d2fd19982117dd401d8c7bd5b28cd"
  },
  {
    "url": "assets/js/49.888ddb3b.js",
    "revision": "e396969a524a985caa44d5a22cad2f0c"
  },
  {
    "url": "assets/js/5.9553e5c2.js",
    "revision": "b8b82a8fa58d9b8d83237ec6e3faf977"
  },
  {
    "url": "assets/js/50.21ce233b.js",
    "revision": "35c52c1b99e2a1704261ecf39ac26531"
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
    "url": "assets/js/6.cb48fa06.js",
    "revision": "fcbd859e0518aad0fef771b3bda35d03"
  },
  {
    "url": "assets/js/7.adb0ee26.js",
    "revision": "eac875cec115fdcee6189bae8cd1b263"
  },
  {
    "url": "assets/js/9.d2fdeaca.js",
    "revision": "bbafecf6abdede386dbc29bd1e02801f"
  },
  {
    "url": "assets/js/app.cc94caa7.js",
    "revision": "78c4d94fd4991983202da9dec20d7f4f"
  },
  {
    "url": "authors/chen.html",
    "revision": "2de80235a6c57072d31bb6298628dfee"
  },
  {
    "url": "authors/index.html",
    "revision": "f94fb7ed1b0708e6d6cf8cec30119479"
  },
  {
    "url": "authors/ktquez.html",
    "revision": "2de80235a6c57072d31bb6298628dfee"
  },
  {
    "url": "autores/avatar.jpg",
    "revision": "6febaf109713bc32dbf5de4361d75304"
  },
  {
    "url": "categories/HTML.html",
    "revision": "88f7b27988c4f9ae7c9c9483ccb2da8a"
  },
  {
    "url": "categories/index.html",
    "revision": "69d6668565f7a5c960955d024a36d5fc"
  },
  {
    "url": "categories/vuejs.html",
    "revision": "966f3b2b2595aa055f8f7dac687fb0ed"
  },
  {
    "url": "contact/index.html",
    "revision": "5c8148c3943c8a85b2412a8aaf26b8e7"
  },
  {
    "url": "es/autores/index.html",
    "revision": "cfbf9eabecb8c134b4b8b7c1c9ed464e"
  },
  {
    "url": "es/autores/ktquez.html",
    "revision": "2e5bcb0e62366dd381a652a562cd4032"
  },
  {
    "url": "es/categorias/index.html",
    "revision": "665254be3ab9ee4f7169f36cc699726f"
  },
  {
    "url": "es/categorias/vuejs.html",
    "revision": "8a7e02b440fe1b1822288b2855e4964e"
  },
  {
    "url": "es/contacto/index.html",
    "revision": "c5630b79df3330951002a0a3fcdd4713"
  },
  {
    "url": "es/index.html",
    "revision": "560663f7a4308200c4457df2fa1ffe4a"
  },
  {
    "url": "es/posts/index.html",
    "revision": "5b5f97ce510139a9de1aa30e5bbe4e06"
  },
  {
    "url": "es/posts/mi-primir-post.html",
    "revision": "f327d65d9ce028075dccb23eaec3f53b"
  },
  {
    "url": "es/sobre/index.html",
    "revision": "defdd272e9a8922a3729f292866c4a4b"
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
    "revision": "6a3ec43e6f0246869f7009cf92eb644a"
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
    "revision": "3cf247d1a5ce0f73690200f9a29895b0"
  },
  {
    "url": "posts/conclusion_HTML.html",
    "revision": "a970af6f0eecc1cf2d5ec2deb2b51516"
  },
  {
    "url": "posts/index.html",
    "revision": "baebdc9db1a42602f5ec4d417858bf27"
  },
  {
    "url": "pt/autores/index.html",
    "revision": "c61df3f325391b2bd9e83c416698aabd"
  },
  {
    "url": "pt/autores/ktquez.html",
    "revision": "f2186acf6f16c515ae2cfa4aad8e55e9"
  },
  {
    "url": "pt/categorias/index.html",
    "revision": "0e44b284f43aeb501485e9032ea0553f"
  },
  {
    "url": "pt/categorias/vuejs.html",
    "revision": "26c7f3beb4e9d8b8835e85b0a13e535e"
  },
  {
    "url": "pt/contato/index.html",
    "revision": "67d595aad0f942a487ccf0382a94e8df"
  },
  {
    "url": "pt/index.html",
    "revision": "cb610cde615fd2f82dea77fb34b60e6f"
  },
  {
    "url": "pt/posts/index.html",
    "revision": "a026ce178b009d17fe73b3d67f1468c5"
  },
  {
    "url": "pt/posts/meu-primeiro-post.html",
    "revision": "8aa0098fdd66d977b6cb1a5562d3d921"
  },
  {
    "url": "pt/sobre/index.html",
    "revision": "25f09efcbe41c3010c76302f654656c4"
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
