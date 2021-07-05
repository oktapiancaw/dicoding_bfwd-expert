import 'regenerator-runtime'
import CacheHelper from './utils/cache-helper'

const { assets } = global.serviceWorkerOption
self.addEventListener('install', (event) => {
  console.log('Installing Service Worker ...')
  event.waitUntil(CacheHelper.cachingAppShell([...assets, './']))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache())
  // TODO: Delete old caches
})

self.addEventListener('fetch', (event) => {
  console.log(event.request)
  event.respondWith(CacheHelper.revalidateCache(event.request))
  // TODO: Add/get fetch request to/from caches
})
