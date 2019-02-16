importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/199a3a63abaf749e2ccd.js",
    "revision": "18183a7a96fcef8f56b7a7ca4825d47a"
  },
  {
    "url": "/_nuxt/1a1584425e0620fd83c2.js",
    "revision": "7a85419ce406ab23695359a529bb9e29"
  },
  {
    "url": "/_nuxt/43112fcf4880b96e59ec.js",
    "revision": "048dde5e18100278ac56183c4725c649"
  },
  {
    "url": "/_nuxt/4fa7e4b5ae69434e6641.js",
    "revision": "653455e65940f64771a8318db7f15714"
  },
  {
    "url": "/_nuxt/673c70bcef9d4a811a96.js",
    "revision": "f122936de45eb36816611eddf33594ad"
  },
  {
    "url": "/_nuxt/96052459d7c5ebcfdab5.js",
    "revision": "5aa44a3b4b7c5075e6c4630c2e8bf1bf"
  },
  {
    "url": "/_nuxt/b7d44b90453e36bbfbdd.js",
    "revision": "617ee2a6c9b38dae89478923cb3ac5d7"
  },
  {
    "url": "/_nuxt/b977ea6e28e95fe20e08.js",
    "revision": "9c6c06c3dd2d93556f20505e5fa5cea0"
  },
  {
    "url": "/_nuxt/bcb0304fbd20e064070e.js",
    "revision": "874351a6fca0c913d0539ae724fa2db1"
  },
  {
    "url": "/_nuxt/e04a46f01c71884b5222.js",
    "revision": "480feccef91c308c357cc1a07e2d9327"
  }
], {
  "cacheId": "mde-js-site",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
