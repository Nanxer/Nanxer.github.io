/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/05/野战医院模拟/index.html","a2ac4b5da65da0dacb060dc171c1011b"],["/2024/12/06/ASCII码表/index.html","79728fb0dc868b81d7e776ce79a46bd6"],["/2024/12/06/MoeCTF-crypto/index.html","82e8b7ad0b6a876bfea019d369c8078a"],["/2024/12/06/四叉树图像模糊/index.html","8b011c69b827d2e1c3154d4f6b7cecf7"],["/2024/12/06/四叉树图像模糊/原图片.png","08feb0248edf774996d54a0db71de8b2"],["/2024/12/06/四叉树图像模糊/均值10.png","7175341e3641ff7c2a5457ef4b5fe4c8"],["/2024/12/06/四叉树图像模糊/均值20.png","7c3f845f3335c8e9998ed7425137de3d"],["/2024/12/06/四叉树图像模糊/高斯10.png","370e91dee8220f61941ed41f004d352d"],["/2024/12/06/四叉树图像模糊/高斯5.png","53d5e8460e77c1a5fe2d32867bac16cb"],["/2024/12/07/Hanming Weight/index.html","5ea75b5dde64a2dec3a28c51e7ad7cb1"],["/2024/12/09/自然推理系统（实训）/1.png","6c44f15ae4b455417589276376d59d5d"],["/2024/12/09/自然推理系统（实训）/2.png","87ff2d75f065f53fa1c122091b544d6d"],["/2024/12/09/自然推理系统（实训）/3.png","d39f1f0b44f7831c15c62391b01c6ced"],["/2024/12/09/自然推理系统（实训）/4.png","4527fe5c8071ced1f00cca42c3a8330d"],["/2024/12/09/自然推理系统（实训）/5.png","9e1ae851075fc35d4ffe593180fb2a62"],["/2024/12/09/自然推理系统（实训）/6.png","25d5089db2e51fc09ffc4e6ef073b493"],["/2024/12/09/自然推理系统（实训）/7.png","24189c5d5c37346221e4871cdf5debfe"],["/2024/12/09/自然推理系统（实训）/8.png","b2bba7d6445103c61a8623a700c9a5f8"],["/2024/12/09/自然推理系统（实训）/index.html","3056f02bdf7218253195e02a650f0f47"],["/2024/12/20/NewStarCTF-crypto/Hermite定理.png","d73f3446f67aefced95852d2e2cda6c2"],["/2024/12/20/NewStarCTF-crypto/groebner_basis.png","0ef471dd92232391ee9996142ac14854"],["/2024/12/20/NewStarCTF-crypto/index.html","d631be78ee79e7f834060df03bcbcb40"],["/2024/12/23/crypto-exps/index.html","8cf7eae9d51b712271b473404cd88ef5"],["/404.html","d5bd5d140a7535b18b0c63d8247e5c42"],["/about/index.html","34a86cc4e3dd6dad47d29727700acb49"],["/archives/2024/12/index.html","3d0e6a9ba7ce46ea6a8bced95b2364e4"],["/archives/2024/index.html","38bfe573d92204b91a7724a728f3a0b9"],["/archives/index.html","8c2883ec720bff9354d6809d025dfe7a"],["/categories/CTF/index.html","c4d7d36e8ae76548c22dff07ebc950cf"],["/categories/index.html","3d3df241d35f6bb89468ef0fcd1ad7b0"],["/categories/数据结构与算法/index.html","04e182cdb2fdd95a7692c02a44b3a428"],["/categories/离散数学/index.html","40e0291d78a0d33739961ba4619899fc"],["/categories/计算机/index.html","0256158f63242283b33f5ef28d06f5e6"],["/css/ahref.css","85e2a041390fbade5e072fc8ece98ef4"],["/css/common/animated.css","1339b3733808e49a7aa985131099999e"],["/css/common/basic.css","cba86be9af9f48e08dc441460b1b162d"],["/css/common/code-block/code-block.css","6158110fb4e324d4d369d2d4ba3e5e4c"],["/css/common/code-block/code-theme.css","1a27688fc16d01edf10f25283011985b"],["/css/common/code-block/highlight.css","fc4092b486a6f69954187ce6776152aa"],["/css/common/css-variables.css","e5ca41f09dc2ed8cf3b343b08ff62a6c"],["/css/common/keep-style.css","e608315773ccd714b699e5404ccebc84"],["/css/common/markdown.css","cf3a98a424dbce9b7a3c25ef6d1247db"],["/css/common/stylus-variables.css","39b09114d2cd480cb15c22bda9826bdf"],["/css/common/tags/keep-button.css","a2d9d6309bf82c6a8b684b3c680b5f26"],["/css/common/tags/keep-note.css","c77d361654771d196e7ef57eb7cbd115"],["/css/common/tags/keep-tabs.css","35b056f5410b588c321d1b7e180ba07b"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/layout/page.css","9b6b468bbe6115d8a735c179db0936f2"],["/css/links.css","e9e37a9669f85eaf3b1392e90fa171f6"],["/css/macBorder.css","9cde7d17eeb66a2b852b500d6252f907"],["/css/selection.css","5f696ea12854fdc9908bda44ab462104"],["/css/style.css","5ebf845beb410ab07eea353f71d7539d"],["/font/css/brands.min.css","5a77ebef110e58d5f58719e831d1cc47"],["/font/css/fontawesome.min.css","fc37edb10fecbd46260c7fcec2f29015"],["/font/css/regular.min.css","a7f0971c5d85f20b7845610f1527ba8a"],["/font/css/solid.min.css","8cc1c293b40c13c7d1ee5c71b8dd4873"],["/font/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/font/webfonts/fa-brands-400.woff2","005c9aa92b564b73b7582cc4f1fa49cb"],["/font/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/font/webfonts/fa-regular-400.woff2","747442fa76f1d9a31f9a54a2e8a4b448"],["/font/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/font/webfonts/fa-solid-900.woff2","d5e647388e2415268b700d3df2e30a0d"],["/font/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/font/webfonts/fa-v4compatibility.woff2","f20773a753bf1fbe9ccec04f90a470ea"],["/images/Base-node-green.svg","a4a0f96d489538480fc928969e0ad2ba"],["/images/Frame-Hexo-blue.svg","4c529e432a05854034c8120c20d9812c"],["/images/Page-Github-8A2BE2.svg","882756bd6ec46882f5ce2626fb8f96d1"],["/images/Somebird.jpg","30046772edaf07fc9b3e62e35205c05b"],["/images/Theme-Fluid-orange.svg","ba3fe6b6778fca5322636ec37b187a86"],["/images/avatar.svg","97722a7e825fbe4b82629c20b54a62e4"],["/images/back.png","284925e7504bf3f53ed7681a447f7a3a"],["/images/bg.svg","18938c2f736c24c4ebac93613189116c"],["/images/bg2.svg","fd998424be45f65d73059c63e97d924d"],["/images/brands/aliyun.png","76a0420ed71a3fe7da06e024a0e7d893"],["/images/brands/cloudflare.png","811990c2a39f38aeea7f07ee19eeb9e3"],["/images/brands/gitee.png","1a1adc2570010a96efc5eea48e851c4d"],["/images/brands/github.png","9ff51e3e791b92646e64fea4097e6362"],["/images/brands/netlify.png","deb74056482b6b470fbd3cf70dae5ed2"],["/images/brands/tencent_cloud.png","9693e72d12f581715dffcaf5fe7be3f5"],["/images/brands/upyun.png","425d4a9c861d892e8a8e0defe38f840d"],["/images/brands/vercel.png","ada1daa9ef523662dea0cab3f6276762"],["/images/categories.png","1a69f20ca943409ee4f7191a0eed9ef9"],["/images/cryptoexps.png","8a1c4e5fa47e43c41a1b92ab0a7ba229"],["/images/friends.png","1d7bb0d75e073a8dfe7d32678b246657"],["/images/guidang.png","4bb960f7833310b6ba92570808d6a0af"],["/images/head.png","c91b0144515965062321795982f4bde8"],["/images/helloctf.png","2fcc721e933561e61dc3710aec2e1e03"],["/images/index_img.png","ff962c95939d421609c3f74d2a9d564f"],["/images/itakethree.svg","b24badaf89caaa7bc99120eb0f70273b"],["/images/kimi.png","ea991ab613428d5b94e7de35e4d22127"],["/images/loading.gif","729a32d73078660ba138e44458cdb26d"],["/images/logo.svg","e2e718bdc4c411aa8712d931c620cca8"],["/images/moectf.png","6a28f7627e692f25f5fcb6f4441cfeba"],["/images/my.png","2d4d8850f4139135d4fba2ae78bf45e2"],["/images/newstarctf.png","00e853dbc097758e4a249ef5d54cd997"],["/images/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/images/post.png","face89b3a3e1ce3c4b2e500c8ab270fd"],["/images/qwb.png","bb23bbd31eccd6009d3e727c1031e799"],["/images/tab.png","264f239eec8ff4c0f97666943814d803"],["/images/tags.png","451046c29cc836fc2130c5ab5bff404c"],["/images/xiaojing.jpg","0bfc3fb86d717e3e5a71b5a2cbf2769f"],["/images/xidian.png","f306ab4ecbd748aa19701cdbfe1edfcf"],["/images/知识.jpg","712edcb3c3a05aa93aa0e83f49d8e8aa"],["/images/自然推理系统.jpg","d5d8f47f19d255450d361f63d1d4eb2e"],["/index.html","f4ba7376b79819af83abdc3e9ed459a4"],["/js/back2top.js","5547a18714c956ce85282ddacd590fb1"],["/js/code-block.js","885af8590ab683860a7e9a12ffa17953"],["/js/header-shrink.js","942d0525041e36b6ada96dd79c57f94a"],["/js/lazyload.js","15a24ecc11e8c5d369c50e051c16de10"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/local-search.js","c2f8049792a3efb7e5df7e264bf2f40f"],["/js/main.js","5c33a4548047ad17acd91e18da9964dd"],["/js/page/category-page.js","8a9df94a085d1afda4faaef05dbb0e79"],["/js/page/home-page.js","7f75d22129ecaac9d453843113ffc461"],["/js/page/links-page.js","82146f4e2c151449ac8bfcc70ba48dcb"],["/js/page/photos-page.js","021a4504a562cd20757ceaa5023e4e2a"],["/js/page/tools-page.js","3ac9ee1cba9afdffc5231843ab4df594"],["/js/post/copyright-info.js","43278a8d29cc52c8fc418cb3f4bc345b"],["/js/post/post-helper.js","a736f5f324680c275fc43b809193d8e6"],["/js/post/share.js","923f54816210e9fd4c19ede9c54fdb3f"],["/js/post/toc.js","6ff0b3ab0356e0848e1760b050f8f425"],["/js/toggle-theme.js","85b1441726f11990fa419d81b2cfefc1"],["/js/utils.js","7896898634cd695125487cf4d836078d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","b5fef5f866dee5d06f5917c1f1c34a98"],["/papers/A_New_Related_Message_Attack_on_RSA.html","174d043e384af79d35a6161d6d7ab43c"],["/papers/Homomorphic_Encryption_for_Arithmetic.html","5652c7576bfe7fc7df9724277ba3f1f8"],["/papers/Low-Exponent_RSA_with_Related_Messages.html","a2b5aaca269a84ff745db1949c8325e6"],["/papers/New_Attacks_on_RSA_with_Small_Secret_CRT-Exponents.html","36055fa3e74babbba26f30a8c261a2e9"],["/papers/RSA及其变体算法的格分析方法研究进展.html","0e8c4129d7fd8875899dbf877e46d40a"],["/papers/Related_Message_Attacks.html","f3e884f2d70e032145d78f5c5b85f377"],["/papers/Twenty_Years_ofAttacks_on_the_RSA_Cryptosystem.html","28db3ed07828c2b7e083574267abd850"],["/papers/index.html","66a6b3f3c4324fe5153cbb2716de381f"],["/sw-register.js","d196bc75a8d8770c916942ec68971e19"],["/tags/crypto/index.html","8bf9cf388b105b6cdfbe2b43d0cb363e"],["/tags/index.html","55c6cd196f7a6b2328ae3de32e5351e0"],["/tags/树/index.html","5217b0e2191fe80a9ee428ca0e9f9f86"],["/tags/队列/index.html","6dc3f9131e9440a11f21de2f4806065c"]];
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
