/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/05/野战医院模拟/index.html","01efadd38e1970cc48711d8e97b903f7"],["/2024/12/06/ASCII码表/index.html","0597587399751409f67f54d91a49d316"],["/2024/12/06/MoeCTF-crypto/index.html","19f3d8360e332d1ae6ee2d00fe49c028"],["/2024/12/06/四叉树图像模糊/index.html","4c4658b261dd0bbf5dfa1cd87e46b0b4"],["/2024/12/06/四叉树图像模糊/原图片.png","08feb0248edf774996d54a0db71de8b2"],["/2024/12/06/四叉树图像模糊/均值10.png","7175341e3641ff7c2a5457ef4b5fe4c8"],["/2024/12/06/四叉树图像模糊/均值20.png","7c3f845f3335c8e9998ed7425137de3d"],["/2024/12/06/四叉树图像模糊/高斯10.png","370e91dee8220f61941ed41f004d352d"],["/2024/12/06/四叉树图像模糊/高斯5.png","53d5e8460e77c1a5fe2d32867bac16cb"],["/2024/12/07/Hanming Weight/index.html","ffa593e59229d0fc8fa1920848239256"],["/2024/12/09/自然推理系统（实训）/1.png","6c44f15ae4b455417589276376d59d5d"],["/2024/12/09/自然推理系统（实训）/2.png","87ff2d75f065f53fa1c122091b544d6d"],["/2024/12/09/自然推理系统（实训）/3.png","d39f1f0b44f7831c15c62391b01c6ced"],["/2024/12/09/自然推理系统（实训）/4.png","4527fe5c8071ced1f00cca42c3a8330d"],["/2024/12/09/自然推理系统（实训）/5.png","9e1ae851075fc35d4ffe593180fb2a62"],["/2024/12/09/自然推理系统（实训）/6.png","25d5089db2e51fc09ffc4e6ef073b493"],["/2024/12/09/自然推理系统（实训）/7.png","24189c5d5c37346221e4871cdf5debfe"],["/2024/12/09/自然推理系统（实训）/8.png","b2bba7d6445103c61a8623a700c9a5f8"],["/2024/12/09/自然推理系统（实训）/index.html","578ebfae3f997b3fd44a129ac8ca47e6"],["/2024/12/20/NewStarCTF-crypto/Hermite定理.png","d73f3446f67aefced95852d2e2cda6c2"],["/2024/12/20/NewStarCTF-crypto/groebner_basis.png","0ef471dd92232391ee9996142ac14854"],["/2024/12/20/NewStarCTF-crypto/index.html","0d2df55af25654baab3b2831e672a2c1"],["/2024/12/29/wargames-MY-CTF-2024/1.png","716f46f94586b2596849dc2a876a100f"],["/2024/12/29/wargames-MY-CTF-2024/index.html","b166e6039e51647f71e5c84b2b701797"],["/404.html","25551b018d415367222ab62b5b9af2f3"],["/about/index.html","db995af896894ded3938ba1be7ad0f1d"],["/archives/2024/12/index.html","7e8f167b0bb68668810b1cf5690acc7d"],["/archives/2024/index.html","37dad24aac5e0646f8102fc9382d8d73"],["/archives/index.html","8d98c96d900f743cb08c7ba497b63d6e"],["/categories/CTF/index.html","f13b0320be831ec56c76b1d250ec1d7e"],["/categories/index.html","faf1362fde6a1426a3d6815fe15ab42b"],["/categories/数据结构与算法/index.html","29c6785a5cf34998108c5b89229312d5"],["/categories/离散数学/index.html","36ff3a3d6c566087fa50814100673784"],["/categories/计算机/index.html","059021cf7800cff107f63633c1d32eaf"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","4133dd3d69e375ade5e6bb13643ff777"],["/css/third_party/snackbar.min.css","131fce8fb46520562cd617b725590bdb"],["/css/third_party/tianli_talk.css","5c85d9dea37fffa98c4a03c6ffeddb49"],["/css/var.css","8bf6d4cb73060efbdb71dc61d57c2879"],["/img/Base-node-green.svg","a4a0f96d489538480fc928969e0ad2ba"],["/img/Frame-Hexo-blue.svg","4c529e432a05854034c8120c20d9812c"],["/img/Page-Github-8A2BE2.svg","882756bd6ec46882f5ce2626fb8f96d1"],["/img/Somebird.jpg","30046772edaf07fc9b3e62e35205c05b"],["/img/back.png","284925e7504bf3f53ed7681a447f7a3a"],["/img/c++.png","0998029a59a8ba9764468ddc0fe3a3ea"],["/img/categories.png","1a69f20ca943409ee4f7191a0eed9ef9"],["/img/computer.png","b931299dbbdce2f27c5d1bd433ddda30"],["/img/cryptoexps.png","8a1c4e5fa47e43c41a1b92ab0a7ba229"],["/img/ctf.png","9ae5789fb7f716277bab5df49640ba4c"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/friends.png","1d7bb0d75e073a8dfe7d32678b246657"],["/img/guidang.png","4bb960f7833310b6ba92570808d6a0af"],["/img/head.png","c91b0144515965062321795982f4bde8"],["/img/helloctf.png","2fcc721e933561e61dc3710aec2e1e03"],["/img/hexo.png","8401f41fd335f264b1ac3bcb1f7589a6"],["/img/index_img.png","ff962c95939d421609c3f74d2a9d564f"],["/img/itakethree.png","2d012ebaf618108e230139119f970b1f"],["/img/kimi.png","ea991ab613428d5b94e7de35e4d22127"],["/img/loading.gif","729a32d73078660ba138e44458cdb26d"],["/img/moectf.png","6a28f7627e692f25f5fcb6f4441cfeba"],["/img/my.png","2d4d8850f4139135d4fba2ae78bf45e2"],["/img/newstarctf.png","00e853dbc097758e4a249ef5d54cd997"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/post.png","face89b3a3e1ce3c4b2e500c8ab270fd"],["/img/python.png","2aae2ae0b55ad76dafe20d06bc788e90"],["/img/qwb.png","bb23bbd31eccd6009d3e727c1031e799"],["/img/tab.png","264f239eec8ff4c0f97666943814d803"],["/img/tags.png","451046c29cc836fc2130c5ab5bff404c"],["/img/wargames.MY_CTF_2024.png","0998b1be6b12613d242bba4fa2803ef7"],["/img/xiaojing.jpg","0bfc3fb86d717e3e5a71b5a2cbf2769f"],["/img/xidian.png","f306ab4ecbd748aa19701cdbfe1edfcf"],["/img/知识.jpg","712edcb3c3a05aa93aa0e83f49d8e8aa"],["/img/自然推理系统.jpg","d5d8f47f19d255450d361f63d1d4eb2e"],["/index.html","0779eeac9bfc0081e863ef14257c8edf"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","279bd06d0417cea793599be6ed5a543f"],["/js/main.js","c8d3d5fada7087cd0f8e17c3b6c5594b"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","6229bd84ffa0a1e31f95882ef9421ae0"],["/sw-register.js","860aad51579de30e2c8927dfc12c13ed"],["/tags/crypto/index.html","7a83bc526e7f1b47cf0a235250958b15"],["/tags/index.html","52a083aa20e592ab1adb00bda7486a89"],["/tags/树/index.html","fa1e48db0934633795269890fab94a61"],["/tags/队列/index.html","396ee7ab6f2d111aaf756e7594929e55"]];
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
