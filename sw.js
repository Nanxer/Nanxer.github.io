/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/05/野战医院模拟/index.html","5d5f291b92165ec5215a22856b1e9d31"],["/2024/12/06/ASCII码表/index.html","80588f0b93c79aa21a337391ecccf5e9"],["/2024/12/06/MoeCTF-crypto/index.html","24112fb27e57acd13e70b96cd06e1684"],["/2024/12/06/四叉树图像模糊/index.html","532b6487957f7c28db515fe21a00ed98"],["/2024/12/06/四叉树图像模糊/原图片.png","08feb0248edf774996d54a0db71de8b2"],["/2024/12/06/四叉树图像模糊/均值10.png","7175341e3641ff7c2a5457ef4b5fe4c8"],["/2024/12/06/四叉树图像模糊/均值20.png","7c3f845f3335c8e9998ed7425137de3d"],["/2024/12/06/四叉树图像模糊/高斯10.png","370e91dee8220f61941ed41f004d352d"],["/2024/12/06/四叉树图像模糊/高斯5.png","53d5e8460e77c1a5fe2d32867bac16cb"],["/2024/12/07/Hanming Weight/index.html","38cf7fc31bfe5501c7810a37e845ada3"],["/2024/12/09/自然推理系统（实训）/1.png","6c44f15ae4b455417589276376d59d5d"],["/2024/12/09/自然推理系统（实训）/2.png","87ff2d75f065f53fa1c122091b544d6d"],["/2024/12/09/自然推理系统（实训）/3.png","d39f1f0b44f7831c15c62391b01c6ced"],["/2024/12/09/自然推理系统（实训）/4.png","4527fe5c8071ced1f00cca42c3a8330d"],["/2024/12/09/自然推理系统（实训）/5.png","9e1ae851075fc35d4ffe593180fb2a62"],["/2024/12/09/自然推理系统（实训）/6.png","25d5089db2e51fc09ffc4e6ef073b493"],["/2024/12/09/自然推理系统（实训）/7.png","24189c5d5c37346221e4871cdf5debfe"],["/2024/12/09/自然推理系统（实训）/8.png","b2bba7d6445103c61a8623a700c9a5f8"],["/2024/12/09/自然推理系统（实训）/index.html","66f887e38ad4c0c85f3cd54925e18b75"],["/2024/12/20/NewStarCTF-crypto/Hermite定理.png","d73f3446f67aefced95852d2e2cda6c2"],["/2024/12/20/NewStarCTF-crypto/groebner_basis.png","0ef471dd92232391ee9996142ac14854"],["/2024/12/20/NewStarCTF-crypto/index.html","888d12c21431710cddbd8e4c2baab5ae"],["/2024/12/23/crypto-exps/index.html","42cbe6cd9e87fc0df7383949b479b843"],["/404.html","68931f2e027abc48c1748b65d0a4f13a"],["/about/index.html","a67cc1c9c435a5ab69d2b1cfd3319ff9"],["/archives/2024/12/index.html","6dae4c4d1632bcf9127eb1760c5e2248"],["/archives/2024/index.html","9b060e688f147d195dba5c5d3a9f5c37"],["/archives/index.html","d35beebb507432446cc7f0c9cbe10f91"],["/categories/CTF/index.html","d3eaecc9d994b253bae1260cf4aacdbc"],["/categories/index.html","1cd42d095bf6d66b1ffbbe7d3d1ffa77"],["/categories/数据结构与算法/index.html","ddee3e178f8da872b428132fcaec941d"],["/categories/离散数学/index.html","13bd3c1e0f303d654524dbaef0f005f1"],["/categories/计算机/index.html","fae81c29acfa0f4501e0cb1efbb79010"],["/css/ahref.css","f739faab36929f8fa430bbfe4aa0e963"],["/css/common/animated.css","d5f34732a863967f9c203ba27b506628"],["/css/common/basic.css","abc1081fd6e112ac162f8c5554753b4e"],["/css/common/code-block/code-block.css","129b23fafc7df121872cd13fb5eafb84"],["/css/common/code-block/code-theme.css","1037394c6db5f708eaa4bf810f6afaa0"],["/css/common/code-block/highlight.css","1ac4a0e67213dc2c4afc9bad30b4ed03"],["/css/common/css-variables.css","144089140a7f1dc39e2bd7d40fa2c78c"],["/css/common/keep-style.css","fbfc4396a495128a2efc275d61ef4df3"],["/css/common/markdown.css","97faccd2f044be3f526d31ef62dbd476"],["/css/common/stylus-variables.css","7c2e1684c7b074b5d03a74ad66c92a64"],["/css/common/tags/keep-button.css","0ecb61e5aff91bcb843c194a41dfcd3d"],["/css/common/tags/keep-note.css","92549a37a060d3684c2859aefc51689c"],["/css/common/tags/keep-tabs.css","d6e90d77814d6283ae228d2a7612df74"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/layout/page.css","b57e105bbe997b5390f055a0361e8d5b"],["/css/links.css","0efc0f7a7e5155f2524debc2d805f35a"],["/css/macBorder.css","7787a05091e3b51b9d529c19919373f7"],["/css/selection.css","230a9fcc86b9b9dd28aafed9c5bba72f"],["/css/style.css","ae292541958f54e8617b1b72809bf399"],["/font/css/brands.min.css","6162ccee810745594802ab09a4eaa913"],["/font/css/fontawesome.min.css","b093fbc43e83e976f13f14c24b1a157c"],["/font/css/regular.min.css","bf343a1f80e4474160161d10f575dbe2"],["/font/css/solid.min.css","e098bcb89bf11f6e5ca371805567cc60"],["/font/webfonts/fa-brands-400.ttf","bb8cd014d7a55672934233c354e1c4a3"],["/font/webfonts/fa-brands-400.woff2","005c9aa92b564b73b7582cc4f1fa49cb"],["/font/webfonts/fa-regular-400.ttf","675809e48e35c47d51c7d6fcc687ee28"],["/font/webfonts/fa-regular-400.woff2","747442fa76f1d9a31f9a54a2e8a4b448"],["/font/webfonts/fa-solid-900.ttf","0248ab19e74fc3731de14d647db4687a"],["/font/webfonts/fa-solid-900.woff2","d5e647388e2415268b700d3df2e30a0d"],["/font/webfonts/fa-v4compatibility.ttf","58f1253e5639d508a6fe310c97327f82"],["/font/webfonts/fa-v4compatibility.woff2","f20773a753bf1fbe9ccec04f90a470ea"],["/images/Base-node-green.svg","a4a0f96d489538480fc928969e0ad2ba"],["/images/Frame-Hexo-blue.svg","4c529e432a05854034c8120c20d9812c"],["/images/Page-Github-8A2BE2.svg","882756bd6ec46882f5ce2626fb8f96d1"],["/images/Somebird.jpg","30046772edaf07fc9b3e62e35205c05b"],["/images/Theme-Fluid-orange.svg","ba3fe6b6778fca5322636ec37b187a86"],["/images/avatar.svg","97722a7e825fbe4b82629c20b54a62e4"],["/images/back.png","284925e7504bf3f53ed7681a447f7a3a"],["/images/bg.svg","18938c2f736c24c4ebac93613189116c"],["/images/bg2.svg","fd998424be45f65d73059c63e97d924d"],["/images/brands/aliyun.png","76a0420ed71a3fe7da06e024a0e7d893"],["/images/brands/cloudflare.png","811990c2a39f38aeea7f07ee19eeb9e3"],["/images/brands/gitee.png","1a1adc2570010a96efc5eea48e851c4d"],["/images/brands/github.png","9ff51e3e791b92646e64fea4097e6362"],["/images/brands/netlify.png","deb74056482b6b470fbd3cf70dae5ed2"],["/images/brands/tencent_cloud.png","9693e72d12f581715dffcaf5fe7be3f5"],["/images/brands/upyun.png","425d4a9c861d892e8a8e0defe38f840d"],["/images/brands/vercel.png","ada1daa9ef523662dea0cab3f6276762"],["/images/categories.png","1a69f20ca943409ee4f7191a0eed9ef9"],["/images/cryptoexps.png","8a1c4e5fa47e43c41a1b92ab0a7ba229"],["/images/friends.png","1d7bb0d75e073a8dfe7d32678b246657"],["/images/guidang.png","4bb960f7833310b6ba92570808d6a0af"],["/images/head.png","c91b0144515965062321795982f4bde8"],["/images/helloctf.png","2fcc721e933561e61dc3710aec2e1e03"],["/images/index_img.png","ff962c95939d421609c3f74d2a9d564f"],["/images/itakethree.svg","b24badaf89caaa7bc99120eb0f70273b"],["/images/kimi.png","ea991ab613428d5b94e7de35e4d22127"],["/images/loading.gif","729a32d73078660ba138e44458cdb26d"],["/images/logo.svg","e2e718bdc4c411aa8712d931c620cca8"],["/images/moectf.png","6a28f7627e692f25f5fcb6f4441cfeba"],["/images/my.png","2d4d8850f4139135d4fba2ae78bf45e2"],["/images/newstarctf.png","00e853dbc097758e4a249ef5d54cd997"],["/images/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/images/post.png","face89b3a3e1ce3c4b2e500c8ab270fd"],["/images/qwb.png","bb23bbd31eccd6009d3e727c1031e799"],["/images/tab.png","264f239eec8ff4c0f97666943814d803"],["/images/tags.png","451046c29cc836fc2130c5ab5bff404c"],["/images/xiaojing.jpg","0bfc3fb86d717e3e5a71b5a2cbf2769f"],["/images/xidian.png","f306ab4ecbd748aa19701cdbfe1edfcf"],["/images/知识.jpg","712edcb3c3a05aa93aa0e83f49d8e8aa"],["/images/自然推理系统.jpg","d5d8f47f19d255450d361f63d1d4eb2e"],["/index.html","6ee3cf4c6a10f220ecdbc36dbd29e89c"],["/js/back2top.js","5547a18714c956ce85282ddacd590fb1"],["/js/code-block.js","885af8590ab683860a7e9a12ffa17953"],["/js/header-shrink.js","942d0525041e36b6ada96dd79c57f94a"],["/js/lazyload.js","15a24ecc11e8c5d369c50e051c16de10"],["/js/libs/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/js/libs/pjax.min.js","cdf1c08dca678e919d1a3f3cc891277d"],["/js/local-search.js","c2f8049792a3efb7e5df7e264bf2f40f"],["/js/main.js","5c33a4548047ad17acd91e18da9964dd"],["/js/page/category-page.js","8a9df94a085d1afda4faaef05dbb0e79"],["/js/page/home-page.js","7f75d22129ecaac9d453843113ffc461"],["/js/page/links-page.js","82146f4e2c151449ac8bfcc70ba48dcb"],["/js/page/photos-page.js","021a4504a562cd20757ceaa5023e4e2a"],["/js/page/tools-page.js","3ac9ee1cba9afdffc5231843ab4df594"],["/js/post/copyright-info.js","43278a8d29cc52c8fc418cb3f4bc345b"],["/js/post/post-helper.js","a736f5f324680c275fc43b809193d8e6"],["/js/post/share.js","923f54816210e9fd4c19ede9c54fdb3f"],["/js/post/toc.js","6ff0b3ab0356e0848e1760b050f8f425"],["/js/toggle-theme.js","85b1441726f11990fa419d81b2cfefc1"],["/js/utils.js","7896898634cd695125487cf4d836078d"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","831fd7be93024a2c15a8103e85220f46"],["/papers/A_New_Related_Message_Attack_on_RSA.html","50c33013e4ec68e5df6990ba3d501ca6"],["/papers/Homomorphic_Encryption_for_Arithmetic.html","59815bd6b883390cee521d584194420c"],["/papers/Low-Exponent_RSA_with_Related_Messages.html","eccb2b1982491efa362ed2aa5508de4e"],["/papers/New_Attacks_on_RSA_with_Small_Secret_CRT-Exponents.html","353285ce883fcc19c58f5cb0e9ab24b8"],["/papers/RSA及其变体算法的格分析方法研究进展.html","6550dbffa3a61829313c1f7e5c81b834"],["/papers/Related_Message_Attacks.html","649999753b739ab07eb58d7b6aefb8ee"],["/papers/Twenty_Years_ofAttacks_on_the_RSA_Cryptosystem.html","36a23178c724fb0fddadaa893985916a"],["/papers/index.html","cae19c13306ad7dccca34bf38fe14c0b"],["/sw-register.js","644842be3b7590084e8818e986fb8352"],["/tags/crypto/index.html","ef8a5a1593302ab68b3eb8e4bb8b7342"],["/tags/index.html","096935b15b989d29fb119b1d58771dea"],["/tags/树/index.html","a61460aae9c0754479687f0c95dc7c0a"],["/tags/队列/index.html","67ad3708a1122b479049d55980009dc3"]];
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
