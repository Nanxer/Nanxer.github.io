/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/05/野战医院模拟/index.html","91d8e314cbffc6a1a5c6864be3ec9dcc"],["/2024/12/06/ASCII码表/index.html","8c96026ca510f534c48c00a069823763"],["/2024/12/06/MoeCTF-crypto/index.html","beffa41657b3d230fcc74f94dc06b568"],["/2024/12/06/四叉树图像模糊/index.html","361d0b016b9fac1d67207c61c0a777ec"],["/2024/12/06/四叉树图像模糊/原图片.png","08feb0248edf774996d54a0db71de8b2"],["/2024/12/06/四叉树图像模糊/均值10.png","7175341e3641ff7c2a5457ef4b5fe4c8"],["/2024/12/06/四叉树图像模糊/均值20.png","7c3f845f3335c8e9998ed7425137de3d"],["/2024/12/06/四叉树图像模糊/高斯10.png","370e91dee8220f61941ed41f004d352d"],["/2024/12/06/四叉树图像模糊/高斯5.png","53d5e8460e77c1a5fe2d32867bac16cb"],["/2024/12/07/Hanming Weight/index.html","9a29b246320e5618d61e4fc5d10a01af"],["/2024/12/09/自然推理系统（实训）/1.png","6c44f15ae4b455417589276376d59d5d"],["/2024/12/09/自然推理系统（实训）/2.png","87ff2d75f065f53fa1c122091b544d6d"],["/2024/12/09/自然推理系统（实训）/3.png","d39f1f0b44f7831c15c62391b01c6ced"],["/2024/12/09/自然推理系统（实训）/4.png","4527fe5c8071ced1f00cca42c3a8330d"],["/2024/12/09/自然推理系统（实训）/5.png","9e1ae851075fc35d4ffe593180fb2a62"],["/2024/12/09/自然推理系统（实训）/6.png","25d5089db2e51fc09ffc4e6ef073b493"],["/2024/12/09/自然推理系统（实训）/7.png","24189c5d5c37346221e4871cdf5debfe"],["/2024/12/09/自然推理系统（实训）/8.png","b2bba7d6445103c61a8623a700c9a5f8"],["/2024/12/09/自然推理系统（实训）/index.html","22b1d602ed89c07da5bcc67f8a0361b1"],["/2024/12/20/NewStarCTF-crypto/index.html","7859bd184e12c365403a5d35a0a60bb2"],["/404.html","292b3b46700e02d29f13f1b2284aeb4e"],["/about/index.html","5a71389a1d8fd2d02bd9b18665e6f666"],["/archives/2024/12/index.html","de10aa427166ddab1316e35fe1ef8a83"],["/archives/2024/index.html","dea8fef11c4d1556f0efcb4f03e1f264"],["/archives/index.html","c2c472b8da6f433fa21b927edc9080d8"],["/categories/CTF/index.html","8a157bd4ad59e01ac9f7c0fe9e91681a"],["/categories/index.html","fadc959b55e252139de0b4c296e97680"],["/categories/数据结构与算法/index.html","b60e890cd8aa507c96594389480c5a3a"],["/categories/离散数学/index.html","045a1550b2eb0fb42c7903f91a81d432"],["/categories/计算机/index.html","3517edc6a337158255a4ee79f72ce403"],["/css/gitalk.css","7a8428198f42149f83e629b55219c38e"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/highlight-dark.css","745876c2547f1934c23b126c549fc679"],["/css/highlight.css","a1eaeef9841d39ba5525d13847bb9244"],["/css/links.css","414a742be182e592e49bdf37615682d5"],["/css/macBorder.css","2c83885e5362a7075ebd50af3289985c"],["/css/main.css","7ac6f7c1cea1cea8465cb2aebf5bf1e6"],["/css/scrollAnimation.css","f8fb3bfcc626de57a8acb66151440197"],["/css/selection.css","3d0c2e78f6afbe9abd7dc119f1eb401f"],["/img/Base-node-green.svg","a4a0f96d489538480fc928969e0ad2ba"],["/img/Frame-Hexo-blue.svg","4c529e432a05854034c8120c20d9812c"],["/img/Page-Github-8A2BE2.svg","882756bd6ec46882f5ce2626fb8f96d1"],["/img/Theme-Fluid-orange.svg","ba3fe6b6778fca5322636ec37b187a86"],["/img/back.png","284925e7504bf3f53ed7681a447f7a3a"],["/img/categories.png","1a69f20ca943409ee4f7191a0eed9ef9"],["/img/friends.png","1d7bb0d75e073a8dfe7d32678b246657"],["/img/guidang.png","4bb960f7833310b6ba92570808d6a0af"],["/img/head.png","c91b0144515965062321795982f4bde8"],["/img/helloctf.png","2fcc721e933561e61dc3710aec2e1e03"],["/img/index_img.png","ff962c95939d421609c3f74d2a9d564f"],["/img/itakethree.svg","b24badaf89caaa7bc99120eb0f70273b"],["/img/kimi.png","ea991ab613428d5b94e7de35e4d22127"],["/img/loading.gif","729a32d73078660ba138e44458cdb26d"],["/img/moectf.png","6a28f7627e692f25f5fcb6f4441cfeba"],["/img/my.png","2d4d8850f4139135d4fba2ae78bf45e2"],["/img/newstarctf.png","00e853dbc097758e4a249ef5d54cd997"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/post.png","face89b3a3e1ce3c4b2e500c8ab270fd"],["/img/qwb.png","bb23bbd31eccd6009d3e727c1031e799"],["/img/tab.png","264f239eec8ff4c0f97666943814d803"],["/img/tags.png","451046c29cc836fc2130c5ab5bff404c"],["/img/xiaojing.jpg","0bfc3fb86d717e3e5a71b5a2cbf2769f"],["/img/xidian.png","f306ab4ecbd748aa19701cdbfe1edfcf"],["/img/知识.jpg","712edcb3c3a05aa93aa0e83f49d8e8aa"],["/img/自然推理系统.jpg","d5d8f47f19d255450d361f63d1d4eb2e"],["/index.html","a9d6ec54178bad82a7d9b287172a88ce"],["/js/boot.js","7683fab2fc9d03a3a659aa956b3a54e8"],["/js/color-schema.js","20dbc6cdfd5e041dcb6e1a6224b77da1"],["/js/duration.js","9b81b17089500e2fe74417a40e4fb700"],["/js/events.js","ca8f7191123f224f46f93c90eb186d73"],["/js/fireworks.js","a313af9166d96fbcc82333d6b4e76a70"],["/js/img-lazyload.js","fab30a410e5f490fce3f977a6936a714"],["/js/leancloud.js","fb4a815ccdb5d851d00561dbb62251c4"],["/js/local-search.js","9dc47a0b7b6bacfd16541c9b2b5b6bc5"],["/js/plugins.js","6c10bee3f659ca91b534bf4a81d62f1e"],["/js/scrollAnimation.js","245023e4fad67f05a3fee8d4576cc2b7"],["/js/umami-view.js","c5ea612e1b9a9a905ee8ad080813b2ce"],["/js/utils.js","f7ce9014de1cd7358eeb3aba81c8efe2"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/link/index.html","460890d0a8632011f2ca8a7aa29c6f09"],["/links/index.html","92abf4f4b88bb64befd8f99396c59603"],["/sw-register.js","a784593007e99c1cbbabfa4b4716e0dd"],["/tags/crypto/index.html","07284cc7d8e42f67769e5f70839ad7c2"],["/tags/index.html","df330b75eab183736e3687a227898238"],["/tags/树/index.html","a6a317e5027e69e10e48254f2f6394a6"],["/tags/队列/index.html","8e4cc4de2e52299cf9d19a33f999790b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
