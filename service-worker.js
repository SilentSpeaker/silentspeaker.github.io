/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/Works/blog/shelli-site/public/2018/12/07/Html基本语法/index.html","664bb825c7e2591d919dac648ec771f6"],["D:/Works/blog/shelli-site/public/2018/12/07/Java基础/index.html","5cacad372492d8532ff65b0675a68877"],["D:/Works/blog/shelli-site/public/2019/12/08/MySql事务&锁/index.html","503c9fe62021450b3807667ce071781e"],["D:/Works/blog/shelli-site/public/2021/01/06/Java服务启动脚本/index.html","9bd035041186a86f1703319e977eb847"],["D:/Works/blog/shelli-site/public/2021/05/16/MySql数据备份脚本/index.html","acd0949ab70b4d20276fcd6203eab192"],["D:/Works/blog/shelli-site/public/2022/02/14/ftp脚本/index.html","43aa73ccfbdaf3fd3d5cb2b85849c008"],["D:/Works/blog/shelli-site/public/about/index.html","95cbd6adae848b6247800d21c23a8f8c"],["D:/Works/blog/shelli-site/public/archives/2018/12/index.html","24c2f0407e1abca5a668c85e94450469"],["D:/Works/blog/shelli-site/public/archives/2018/index.html","9c39cb548e5ec5e6f3a5ddf28861fc3c"],["D:/Works/blog/shelli-site/public/archives/2019/12/index.html","475ffe0ee0bb3330901732e1a0cdb474"],["D:/Works/blog/shelli-site/public/archives/2019/index.html","4b3dbdbaa42537b9e541ea9f26c08bc7"],["D:/Works/blog/shelli-site/public/archives/2021/01/index.html","1098a8c3011f9b095877b1ac36419a88"],["D:/Works/blog/shelli-site/public/archives/2021/05/index.html","dca5399258eaf260d8d8f5424542098c"],["D:/Works/blog/shelli-site/public/archives/2021/index.html","7688b5b7465b29426e80330aaf701f77"],["D:/Works/blog/shelli-site/public/archives/2022/02/index.html","16b3ecace73b395076781331d3afd074"],["D:/Works/blog/shelli-site/public/archives/2022/index.html","15afb06459538d4311c092d6e31b7afc"],["D:/Works/blog/shelli-site/public/archives/index.html","2d6375295840508c5c4ab39c06cabb55"],["D:/Works/blog/shelli-site/public/categories/Html/index.html","de6ef5844fa4f23944106226c60a9b6d"],["D:/Works/blog/shelli-site/public/categories/Java/index.html","2d3242bc7dafec0a9df6603af2c43eba"],["D:/Works/blog/shelli-site/public/categories/MySql/index.html","02b861bdab296075ca8336dd9211d595"],["D:/Works/blog/shelli-site/public/categories/index.html","fa64fc99fb74213de9320774007c6992"],["D:/Works/blog/shelli-site/public/categories/脚本/Linux/index.html","ad7c5dc72be67f006942817babf3e2f0"],["D:/Works/blog/shelli-site/public/categories/脚本/index.html","26284943adcc6f96af37a737be465c06"],["D:/Works/blog/shelli-site/public/css/rtl.css","371213dab93de3d1fc0ca1949afcb10f"],["D:/Works/blog/shelli-site/public/css/style.css","cd7ece9850a253e3efc972ff6a3ab3ac"],["D:/Works/blog/shelli-site/public/images/apple-touch-icon.png","0f3687ddb31c8d4f3f57db5904514471"],["D:/Works/blog/shelli-site/public/images/favicon-192x192.png","22cbbf3723cf35de562d84f43b2d47c4"],["D:/Works/blog/shelli-site/public/images/logo.png","3a523a218d45942792b375bee59382ca"],["D:/Works/blog/shelli-site/public/index.html","2481b33cc1118c59d012cb94f6c2efe3"],["D:/Works/blog/shelli-site/public/js/main.js","fd1d03e1a9c8c98c2c3a6b89f7d32ba1"],["D:/Works/blog/shelli-site/public/js/search.js","4e1a28c572dd9464786da7f7e8a8981e"],["D:/Works/blog/shelli-site/public/lib/clipboard/clipboard.min.js","9de9f70b0468760fb7ea4f2d670fdbfe"],["D:/Works/blog/shelli-site/public/lib/font-awesome/css/all.min.css","6a1b5933f8692e60c8337c0d68255ec1"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-brands-400.eot","088a34f78f530102fd9661173b4a4f26"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-brands-400.svg","0eb8cedcedefe0b04a200dc5c9602f4a"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-brands-400.ttf","273dc9bf9778fd37fa61357645d46a28"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-brands-400.woff","f4920c94c0861c537f72ba36590f6362"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-regular-400.eot","3ac49cb33f43a6471f21ab3df40d1b1e"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-regular-400.svg","9b4c53aa538b8e0c4def479a43a8acf1"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-regular-400.ttf","ece54318791c51b52dfdc689efdb6271"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-regular-400.woff","a57bcf76c178aee452db7a57b75509b6"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-solid-900.eot","7fb1cdd9c3b889161216a13267b55fe2"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-solid-900.svg","3719793fcebc92ff6642bf287db11b16"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-solid-900.ttf","2aa6edf8f296a43b32df35f330b7c81c"],["D:/Works/blog/shelli-site/public/lib/font-awesome/webfonts/fa-solid-900.woff","93f284548b42ab76fe3fd03a9d3a2180"],["D:/Works/blog/shelli-site/public/lib/jquery/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["D:/Works/blog/shelli-site/public/lib/justified-gallery/css/justifiedGallery.min.css","ceaa86fef1d6491660adf7244265affb"],["D:/Works/blog/shelli-site/public/lib/justified-gallery/js/jquery.justifiedGallery.min.js","b3c16bcda205ebe084ee04f4900b7dbc"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGL-Bold.ttf","6c475ed9d73a90d62c666b3d94f350d2"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGL-BoldItalic.ttf","1c5a059e12b5e0993699481455cf8b74"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGL-Italic.ttf","17ab93d9e2493a279171fa183279decc"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGL-Regular.ttf","265d62d86941c398f07704a80911ac92"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGM-Bold.ttf","4174a16af8cfe61e45d1ec4758227443"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGM-BoldItalic.ttf","33e53ff2022c98c3f3caa5c4682a1939"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGM-Italic.ttf","259bbc1d62105f728101523e3295ddd1"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGM-Regular.ttf","93e2fae291d0da752d78dc0b113591d9"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGS-Bold.ttf","a31874e50f29681640f88e00f2343c25"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGS-BoldItalic.ttf","2e752bcf18165adadef20e83389eb9a7"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGS-Italic.ttf","526d28c1d73dedca45091a1530541908"],["D:/Works/blog/shelli-site/public/lib/meslo-LG/MesloLGS-Regular.ttf","d20aa15f5ce240b12b2475042c6ead8e"],["D:/Works/blog/shelli-site/public/lib/typed/typed.min.js","f07218d7b66e99c134c5b70b80aa348d"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Black.eot","817f917ca1bd73fdafb73c8780633cdb"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Black.ttf","78fc370174609c35b98e3dcd38f53bfc"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Black.woff","65678ca9d6bca0505488538c49efa85f"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Bold.eot","6b4258266f6cc8ebe9c599e1a52591a1"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Bold.ttf","bff5dfbc9bea8d538bf7fb4579ec4f32"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Bold.woff","1dc06ca075e3e867a9a9253810983c69"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Light.eot","4ccde095698e572025b49813ce57bf23"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Light.ttf","f949c9c6e0a78ca311d4f3bcc53222bc"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Light.woff","5aa1dcde9af46e421829e908db25dd75"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Medium.eot","a8b87e489e09fd35814d4fe85d42e364"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Medium.ttf","f30326eff40bdab923a1de08cb394567"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Medium.woff","4308d08acc3cc132f457edfe36fb047c"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Thin.eot","7cb5ce0d4cbc438e3ef77535d84d4a0d"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Thin.ttf","a4b0ba433552c6442b0a312c4c42345f"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir-Thin.woff","47715ef73613e8f18aa5031b0a602539"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir.eot","1f15de7bca7ce47b0e6a99fdc3f98272"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir.ttf","29d3b94592bc65baaa0c368ea99fbecd"],["D:/Works/blog/shelli-site/public/lib/vazir-font/Vazir.woff","525eba78808492d95b2e7a16881ce663"],["D:/Works/blog/shelli-site/public/lib/vazir-font/font-face.css","830c89c12712a902ad9f8f007a6b64c6"],["D:/Works/blog/shelli-site/public/pwa/icons/pwa_icon_128.png","944757e95e08003f091752257d97ca1e"],["D:/Works/blog/shelli-site/public/pwa/icons/pwa_icon_512.png","a527a5c4dd3cbb6fb4330b2680dfb1fa"],["D:/Works/blog/shelli-site/public/search/index.html","b9a7ad608fac434b2ff140d844101c84"],["D:/Works/blog/shelli-site/public/tags/Html/index.html","dd49fc80e80431287ab2e9994cf2117b"],["D:/Works/blog/shelli-site/public/tags/Java/index.html","29f8e7f0bfeeff3fb5311c8da885cfce"],["D:/Works/blog/shelli-site/public/tags/Linux/index.html","7086228ba74be20e3961a48dc923a2e3"],["D:/Works/blog/shelli-site/public/tags/MySql/index.html","65c093493c2de3a112a225fae11e1b11"],["D:/Works/blog/shelli-site/public/tags/docker/index.html","0eaaacb45db5d07f49a8d44f55ca4b17"],["D:/Works/blog/shelli-site/public/tags/ftp/index.html","2fd7cf6fce869cd564c5f9bfb42ca0ed"],["D:/Works/blog/shelli-site/public/tags/index.html","f83a94678b5d3e56f042eac5e99b4a82"],["D:/Works/blog/shelli-site/public/tags/事务/index.html","d83a4dc41b79b5c1ae375fe594438109"],["D:/Works/blog/shelli-site/public/tags/基础/index.html","da3b08f015bbcad916fe8afb5575d9e0"],["D:/Works/blog/shelli-site/public/tags/数据库锁/index.html","d945041a3df3bf586077ba491d9b9877"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







