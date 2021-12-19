const CACHE_NAME = "version-1"
const urlsToCache = ['index.html', 'offline.html']
const self = this

//Install Software

self.addEventListener('install', (event)=>{
    event.waitUntil(
     caches.open(CACHE_NAME)
     .then( (cache)=> {
         console.log('Open Cache')

         return cache.addAll(urlsToCache)
     })   
    )
})

//Cache and return requests

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
    );
  });

//Active Software

self.addEventListener('active', (event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME)

    event.waitUntil(
        caches.keys().then( (CacheNames)=> Promise.all(
            CacheNames.map( (CacheName)=>{
                if(!cacheWhitelist.includes(CacheName)){
                    return caches.delete(CacheName)
                }
            })
        ))
    )
})
