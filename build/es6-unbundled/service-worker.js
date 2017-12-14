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

<<<<<<< HEAD
var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","66195ac58a863d56eb0770a928c79f87"],["bower_components/app-layout/app-drawer/app-drawer.html","bc8142ca2a79b2721c1c2e61f92fcd81"],["bower_components/app-layout/app-header-layout/app-header-layout.html","e8b4676d9605707cc348ee00bd0fba65"],["bower_components/app-layout/app-header/app-header.html","b5e4c174345621fcc38f960d667cf2df"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","7456e7e8b522645606f9e30077d4ca61"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","9d611dc2e2a68080603abfc412029892"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","68c9a3c4a580c2062803443ef39463c8"],["bower_components/app-layout/app-scroll-effects/effects/material.html","93d85d4f6d42fd57d73fda270f8b8b5d"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","752fb12968791a005144ad8e87a48018"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","c6d97d3f7b0215028fb4f1eb5efabfae"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","bc84b5355517f12599a8981045a98d5e"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","af6cf17fbb4f94216eea9d2e6c26a775"],["bower_components/app-layout/app-toolbar/app-toolbar.html","e8972ac52fd2c932d523d8353b902dcc"],["bower_components/app-layout/helpers/helpers.html","59806fcb8247bc5ace92ef1c1651a8d1"],["bower_components/app-route/app-location.html","136685907fcfc7e39c898d382589d7be"],["bower_components/app-route/app-route-converter-behavior.html","67ec6daf2bbe9f59beecbdd5b863af14"],["bower_components/app-route/app-route.html","54043d6a1408f632a3755bbf304915c7"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","dc23cd36a777139a93bb336b5744e5a1"],["bower_components/iron-behaviors/iron-button-state.html","7f7f96935de5deaf9a51264225eb1a5a"],["bower_components/iron-behaviors/iron-control-state.html","54d3f38473f5e8d3bb6d44a9f47e6ec5"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","9ce917fa978d3e488b33ef5183bc6631"],["bower_components/iron-flex-layout/iron-flex-layout.html","03e6f060e1a174a51cc599efac9de802"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","94dc74f4b0437574e9afc57e15bd8e85"],["bower_components/iron-icon/iron-icon.html","a99a8c361318347361898c2b0a173441"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","42d5d3c1ec9bd341a135a574b1b9dc82"],["bower_components/iron-location/iron-location.html","22fb90cca2d81aa28adfdbdf69edb779"],["bower_components/iron-location/iron-query-params.html","e7bf2e51c290545d9cd87e4805c042b4"],["bower_components/iron-media-query/iron-media-query.html","0082aca119880bf33ce3ffd1fa0e9011"],["bower_components/iron-meta/iron-meta.html","3ec3b65c7407eda867d4af8f35c46cf8"],["bower_components/iron-pages/iron-pages.html","7dc4875ba143533aab607246964091ad"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","06556d669ceef498e29ced3f53e70e6d"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","86d3a913b7993cc941b0d2cffc4de81a"],["bower_components/iron-selector/iron-multi-selectable.html","86928dd2c849ebb93a2bbbfc66db3f21"],["bower_components/iron-selector/iron-selectable.html","c0b46424a4947ea3a62646ca0c215ed3"],["bower_components/iron-selector/iron-selection.html","19a051eb5d88baed09f6439512841bda"],["bower_components/iron-selector/iron-selector.html","76e80b0f3e145257b34de6fde1addd1a"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","d739c49571f49353e411fd0ad663fbb6"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","6bacfe845e0be777b4ae80f02ff85115"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","52c2ca1ef155e8bca281d806fc9a8673"],["bower_components/paper-behaviors/paper-ripple-behavior.html","360acdba9e68fb7bf5c2be15f3fc5845"],["bower_components/paper-icon-button/paper-icon-button.html","65622842fb89f3416a03d4f0538c4565"],["bower_components/paper-ripple/paper-ripple.html","057242b6a300d3b319083ccc20cf1837"],["bower_components/paper-styles/color.html","8a42182f196047ae8d1ab99348bfa614"],["bower_components/paper-styles/default-theme.html","1f6c3a2b219ac12e7ac9c214caf1b475"],["bower_components/paper-toggle-button/paper-toggle-button.html","50aa3711cb29dc7cab1a0b74600bbaa4"],["bower_components/polymer/polymer-micro.html","1e799aadc94fb33683539eb594bdf174"],["bower_components/polymer/polymer-mini.html","4e44ab764a5d846c90bc1c8e7ff13a05"],["bower_components/polymer/polymer.html","0a5c4b18dc3a224a82eb97dc0684772a"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","32b5a9b7ada86304bec6b43d3f2194f0"],["index.html","5e72a2fa9ce4cfaf5d71ef55fadb5f75"],["manifest.json","39a400389f05600d3ec8c419680017c6"],["src/my-app.html","6a51f0c469bb60bb36757ba2de040ff7"],["src/my-icons.html","1618712b865f25904ddffef31c5d9db0"],["src/my-view1.html","b0d8561e5be8a54fdcd2ff75fcaf4c09"],["src/my-view2.html","3e0b1d9436b059b4bf6769205588a4a4"],["src/my-view3.html","cf41d6722c709956be55a980206cde8e"],["src/my-view404.html","d19b997fe1c7843617169f14d5891263"],["src/shared-styles.html","01d6dda77534abbc4af762ad2640a345"]];
=======
var precacheConfig = [["bower_components/app-layout/app-drawer-layout/app-drawer-layout.html","66195ac58a863d56eb0770a928c79f87"],["bower_components/app-layout/app-drawer/app-drawer.html","bc8142ca2a79b2721c1c2e61f92fcd81"],["bower_components/app-layout/app-header-layout/app-header-layout.html","e8b4676d9605707cc348ee00bd0fba65"],["bower_components/app-layout/app-header/app-header.html","b5e4c174345621fcc38f960d667cf2df"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects-behavior.html","7456e7e8b522645606f9e30077d4ca61"],["bower_components/app-layout/app-scroll-effects/app-scroll-effects.html","47ef4a1229fe38f7ebb0b846676908c9"],["bower_components/app-layout/app-scroll-effects/effects/blend-background.html","9d611dc2e2a68080603abfc412029892"],["bower_components/app-layout/app-scroll-effects/effects/fade-background.html","68c9a3c4a580c2062803443ef39463c8"],["bower_components/app-layout/app-scroll-effects/effects/material.html","93d85d4f6d42fd57d73fda270f8b8b5d"],["bower_components/app-layout/app-scroll-effects/effects/parallax-background.html","752fb12968791a005144ad8e87a48018"],["bower_components/app-layout/app-scroll-effects/effects/resize-snapped-title.html","c6d97d3f7b0215028fb4f1eb5efabfae"],["bower_components/app-layout/app-scroll-effects/effects/resize-title.html","bc84b5355517f12599a8981045a98d5e"],["bower_components/app-layout/app-scroll-effects/effects/waterfall.html","af6cf17fbb4f94216eea9d2e6c26a775"],["bower_components/app-layout/app-toolbar/app-toolbar.html","e8972ac52fd2c932d523d8353b902dcc"],["bower_components/app-layout/helpers/helpers.html","59806fcb8247bc5ace92ef1c1651a8d1"],["bower_components/app-route/app-location.html","136685907fcfc7e39c898d382589d7be"],["bower_components/app-route/app-route-converter-behavior.html","67ec6daf2bbe9f59beecbdd5b863af14"],["bower_components/app-route/app-route.html","54043d6a1408f632a3755bbf304915c7"],["bower_components/iron-a11y-keys-behavior/iron-a11y-keys-behavior.html","dc23cd36a777139a93bb336b5744e5a1"],["bower_components/iron-behaviors/iron-button-state.html","7f7f96935de5deaf9a51264225eb1a5a"],["bower_components/iron-behaviors/iron-control-state.html","54d3f38473f5e8d3bb6d44a9f47e6ec5"],["bower_components/iron-checked-element-behavior/iron-checked-element-behavior.html","9ce917fa978d3e488b33ef5183bc6631"],["bower_components/iron-flex-layout/iron-flex-layout.html","03e6f060e1a174a51cc599efac9de802"],["bower_components/iron-form-element-behavior/iron-form-element-behavior.html","94dc74f4b0437574e9afc57e15bd8e85"],["bower_components/iron-icon/iron-icon.html","a99a8c361318347361898c2b0a173441"],["bower_components/iron-iconset-svg/iron-iconset-svg.html","42d5d3c1ec9bd341a135a574b1b9dc82"],["bower_components/iron-location/iron-location.html","22fb90cca2d81aa28adfdbdf69edb779"],["bower_components/iron-location/iron-query-params.html","e7bf2e51c290545d9cd87e4805c042b4"],["bower_components/iron-media-query/iron-media-query.html","0082aca119880bf33ce3ffd1fa0e9011"],["bower_components/iron-meta/iron-meta.html","3ec3b65c7407eda867d4af8f35c46cf8"],["bower_components/iron-pages/iron-pages.html","7dc4875ba143533aab607246964091ad"],["bower_components/iron-resizable-behavior/iron-resizable-behavior.html","06556d669ceef498e29ced3f53e70e6d"],["bower_components/iron-scroll-target-behavior/iron-scroll-target-behavior.html","86d3a913b7993cc941b0d2cffc4de81a"],["bower_components/iron-selector/iron-multi-selectable.html","86928dd2c849ebb93a2bbbfc66db3f21"],["bower_components/iron-selector/iron-selectable.html","c0b46424a4947ea3a62646ca0c215ed3"],["bower_components/iron-selector/iron-selection.html","19a051eb5d88baed09f6439512841bda"],["bower_components/iron-selector/iron-selector.html","76e80b0f3e145257b34de6fde1addd1a"],["bower_components/iron-validatable-behavior/iron-validatable-behavior.html","d739c49571f49353e411fd0ad663fbb6"],["bower_components/paper-behaviors/paper-checked-element-behavior.html","6bacfe845e0be777b4ae80f02ff85115"],["bower_components/paper-behaviors/paper-inky-focus-behavior.html","52c2ca1ef155e8bca281d806fc9a8673"],["bower_components/paper-behaviors/paper-ripple-behavior.html","360acdba9e68fb7bf5c2be15f3fc5845"],["bower_components/paper-icon-button/paper-icon-button.html","65622842fb89f3416a03d4f0538c4565"],["bower_components/paper-ripple/paper-ripple.html","057242b6a300d3b319083ccc20cf1837"],["bower_components/paper-styles/color.html","8a42182f196047ae8d1ab99348bfa614"],["bower_components/paper-styles/default-theme.html","1f6c3a2b219ac12e7ac9c214caf1b475"],["bower_components/paper-toggle-button/paper-toggle-button.html","50aa3711cb29dc7cab1a0b74600bbaa4"],["bower_components/polymer/polymer-micro.html","1e799aadc94fb33683539eb594bdf174"],["bower_components/polymer/polymer-mini.html","4e44ab764a5d846c90bc1c8e7ff13a05"],["bower_components/polymer/polymer.html","0a5c4b18dc3a224a82eb97dc0684772a"],["bower_components/webcomponentsjs/webcomponents-lite.min.js","32b5a9b7ada86304bec6b43d3f2194f0"],["index.html","5ce6af3e2d2e649042d9aa26cbfeec8d"],["manifest.json","39a400389f05600d3ec8c419680017c6"],["src/live-page.html","b0b05c99047c4803340d6dba537db92f"],["src/main-page.html","0840ef423bfa14ff752a32eeaf7cad33"],["src/my-app.html","2e3a5581214e7bf97cf07535b893deeb"],["src/my-icons.html","1618712b865f25904ddffef31c5d9db0"],["src/my-view404.html","d19b997fe1c7843617169f14d5891263"],["src/preview-page.html","3b86dacf7f3244e8df7aa006dde13b5b"],["src/shared-styles.html","01d6dda77534abbc4af762ad2640a345"]];
>>>>>>> 00fdadfc690ffad4bae3ba50dc18de9f07b9ecbc
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
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

var createCacheKey = function (originalUrl, paramName, paramValue,
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

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
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

var stripIgnoredUrlParameters = function (originalUrl,
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
    var directoryIndex = '';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = 'index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted(["\\/[^\\/\\.]*(\\?|$)"], event.request.url)) {
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







