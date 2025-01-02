/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/12/05/野战医院模拟/index.html","07493a81cbf506b345ae623cce557dfa"],["/2024/12/06/ASCII码表/index.html","6b61e092681a6d43636b78ff94f3a33f"],["/2024/12/06/MoeCTF-crypto/index.html","59403ab6546c9e31b01ff132e9863afe"],["/2024/12/06/四叉树图像模糊/index.html","b29ba8ce304471430f23b5a3e3d673da"],["/2024/12/06/四叉树图像模糊/原图片.png","08feb0248edf774996d54a0db71de8b2"],["/2024/12/06/四叉树图像模糊/均值10.png","7175341e3641ff7c2a5457ef4b5fe4c8"],["/2024/12/06/四叉树图像模糊/均值20.png","7c3f845f3335c8e9998ed7425137de3d"],["/2024/12/06/四叉树图像模糊/高斯10.png","370e91dee8220f61941ed41f004d352d"],["/2024/12/06/四叉树图像模糊/高斯5.png","53d5e8460e77c1a5fe2d32867bac16cb"],["/2024/12/07/Hanming Weight/index.html","7c0bc5a893037f9fb9614db9a8cdb7a3"],["/2024/12/09/自然推理系统（实训）/1.png","6c44f15ae4b455417589276376d59d5d"],["/2024/12/09/自然推理系统（实训）/2.png","87ff2d75f065f53fa1c122091b544d6d"],["/2024/12/09/自然推理系统（实训）/3.png","d39f1f0b44f7831c15c62391b01c6ced"],["/2024/12/09/自然推理系统（实训）/4.png","4527fe5c8071ced1f00cca42c3a8330d"],["/2024/12/09/自然推理系统（实训）/5.png","9e1ae851075fc35d4ffe593180fb2a62"],["/2024/12/09/自然推理系统（实训）/6.png","25d5089db2e51fc09ffc4e6ef073b493"],["/2024/12/09/自然推理系统（实训）/7.png","24189c5d5c37346221e4871cdf5debfe"],["/2024/12/09/自然推理系统（实训）/8.png","b2bba7d6445103c61a8623a700c9a5f8"],["/2024/12/09/自然推理系统（实训）/index.html","3f4e14b51669e35170173de136b28232"],["/2024/12/20/NewStarCTF-crypto/Hermite定理.png","d73f3446f67aefced95852d2e2cda6c2"],["/2024/12/20/NewStarCTF-crypto/groebner_basis.png","0ef471dd92232391ee9996142ac14854"],["/2024/12/20/NewStarCTF-crypto/index.html","cfcb4204b2265b30f721bada03c3261e"],["/2024/12/29/wargames-MY-CTF-2024/1.png","716f46f94586b2596849dc2a876a100f"],["/2024/12/29/wargames-MY-CTF-2024/index.html","2b7a599c10a29cc664237db964647cc4"],["/2024/12/30/wsl-vscode-sagemath教程/anaconda.png","f5c554a84681b7ed9ce53004abaf9ba5"],["/2024/12/30/wsl-vscode-sagemath教程/anaconda2.png","166e5d0293f0e1e3daf4e8b6682b13e3"],["/2024/12/30/wsl-vscode-sagemath教程/index.html","91ed5b017b0b269bcb785c163a5709fb"],["/2024/12/30/wsl-vscode-sagemath教程/sage.png","74943380e7f433d1c064db84307f5544"],["/2024/12/30/wsl-vscode-sagemath教程/ubuntu.png","2cd6b27602ded416fbba0fc8df342981"],["/2024/12/30/wsl-vscode-sagemath教程/ubuntu2.png","16b37aa4ff580d148a694956db3c87ee"],["/2024/12/30/wsl-vscode-sagemath教程/vscode.png","beeb1c97f704abb69e08745f7ccd0a78"],["/2024/12/30/wsl-vscode-sagemath教程/vscode1.png","04703d5d08f52e819334a6b6bd3944c0"],["/2024/12/30/wsl-vscode-sagemath教程/vscode2.png","5fa15f88ecc7c291c0d2dc755a48207e"],["/2024/12/30/wsl-vscode-sagemath教程/wsl插件.png","00fc9e85e139bd733a1b3b86860ea4ee"],["/2024/12/30/wsl-vscode-sagemath教程/wsl插件2.png","1e42365e5fb59a8ab7da5d0c00166c8b"],["/2025/01/02/Echarts测试/index.html","9d33614a35fd3bd4f4b38b959d90b034"],["/404.html","998701cb998dced8ddd75637bc24a31a"],["/about/index.html","329b5230f828704ce92c058eccf1e63a"],["/archives/2024/12/index.html","62daa887a9202856f62f02418a046779"],["/archives/2024/index.html","04b1a03bae1ce29fcafbf5e0e19bb910"],["/archives/2025/01/index.html","6a3cf63f3d8c08fb7d97f62c74dd4ab2"],["/archives/2025/index.html","928c56464d2633c94671fd209483c060"],["/archives/index.html","5c21187782ead5356d09175a027d2077"],["/categories/CTF/index.html","50557ca772f4c0fefa6ad8bb1739e58a"],["/categories/Tools/index.html","f03d63042417d416f93a86216b638269"],["/categories/index.html","75ee4cfe2c6d1992fbe1ade1f4b2a0fa"],["/categories/数据结构与算法/index.html","07e228ab33c540bfd608ce9703d94b4d"],["/categories/离散数学/index.html","df65e2310b58b2bb163b6c2db9f03ecb"],["/categories/计算机/index.html","ba9c1609909ec7623157859930b32a66"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/index.css","67e34de0b800f03bc5dec67172ea5240"],["/css/third_party/snackbar.min.css","7ba3fe0a0818c2cd0b878cdfe0f5e741"],["/css/third_party/tianli_talk.css","3eed14d767b611267eaaa0c22b502507"],["/css/var.css","4861d29c7f08475c2b82b5975989ce5a"],["/img/Base-node-green.svg","a4a0f96d489538480fc928969e0ad2ba"],["/img/Frame-Hexo-blue.svg","4c529e432a05854034c8120c20d9812c"],["/img/Page-Github-8A2BE2.svg","882756bd6ec46882f5ce2626fb8f96d1"],["/img/back.png","284925e7504bf3f53ed7681a447f7a3a"],["/img/categories.png","1a69f20ca943409ee4f7191a0eed9ef9"],["/img/computer.png","b931299dbbdce2f27c5d1bd433ddda30"],["/img/ctf.png","9ae5789fb7f716277bab5df49640ba4c"],["/img/flower.gif","ebb0a5f1ab03a91eeed6ef49a4f9e453"],["/img/friend/Somebird.jpg","30046772edaf07fc9b3e62e35205c05b"],["/img/friend/c++.png","0998029a59a8ba9764468ddc0fe3a3ea"],["/img/friend/helloctf.png","2fcc721e933561e61dc3710aec2e1e03"],["/img/friend/hexo.png","8401f41fd335f264b1ac3bcb1f7589a6"],["/img/friend/itakethree.png","2d012ebaf618108e230139119f970b1f"],["/img/friend/kimi.png","ea991ab613428d5b94e7de35e4d22127"],["/img/friend/python.png","2aae2ae0b55ad76dafe20d06bc788e90"],["/img/friend/xiaojing.jpg","0bfc3fb86d717e3e5a71b5a2cbf2769f"],["/img/friend/xidian.png","f306ab4ecbd748aa19701cdbfe1edfcf"],["/img/friends.png","1d7bb0d75e073a8dfe7d32678b246657"],["/img/guidang.png","4bb960f7833310b6ba92570808d6a0af"],["/img/head.png","c91b0144515965062321795982f4bde8"],["/img/index_img.png","ff962c95939d421609c3f74d2a9d564f"],["/img/loading.gif","729a32d73078660ba138e44458cdb26d"],["/img/my.png","2d4d8850f4139135d4fba2ae78bf45e2"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/post.png","face89b3a3e1ce3c4b2e500c8ab270fd"],["/img/post/CCTF2025.png","8130fc12cda80e3b3c4416b8f807c98a"],["/img/post/SUCTF2025.png","876f5c6c17e343ce03b06308a70c44d2"],["/img/post/VNCTF2025.png","f1bd6464d9b5a090b8507b28df2c498c"],["/img/post/ascii.png","005a314a201e907e7732fb024465cbb2"],["/img/post/cryptoexps.png","8a1c4e5fa47e43c41a1b92ab0a7ba229"],["/img/post/furryctf.png","c36cd6f30d788f6cd8653886369a028d"],["/img/post/irisctf.png","1a24a1eae6c079797e55e42cf723e81e"],["/img/post/moectf.png","6a28f7627e692f25f5fcb6f4441cfeba"],["/img/post/newstarctf.png","00e853dbc097758e4a249ef5d54cd997"],["/img/post/qwb.png","bb23bbd31eccd6009d3e727c1031e799"],["/img/post/sagemath.png","960953d76fd3f0bc649a02089bda0a41"],["/img/post/wargames.MY_CTF_2024.png","0998b1be6b12613d242bba4fa2803ef7"],["/img/post/四叉树.png","737c59c64a2807e633cf0233df9a658a"],["/img/post/知识.jpg","712edcb3c3a05aa93aa0e83f49d8e8aa"],["/img/post/自然推理系统.jpg","d5d8f47f19d255450d361f63d1d4eb2e"],["/img/post/野战医院.png","7d6602d2d2615e5b35b1327188cb3738"],["/img/tab.png","264f239eec8ff4c0f97666943814d803"],["/img/tags.png","451046c29cc836fc2130c5ab5bff404c"],["/index.html","7c44feeb24543d3c6e7ddd925c6d8cab"],["/js/covercolor/api.js","def95d74e9cccd965ee931f62276b7cc"],["/js/covercolor/ave.js","5176204d366c925ea801baa9da3d10f0"],["/js/covercolor/local.js","279bd06d0417cea793599be6ed5a543f"],["/js/main.js","c8d3d5fada7087cd0f8e17c3b6c5594b"],["/js/music.js","4fdb42306f0e4692e30f530959fa558f"],["/js/right_menu.js","9e57b6c15070ff0dbccb5eb5a4a7617b"],["/js/search/algolia.js","9df8c3be4bd5829581ed19bcb5e9e969"],["/js/search/local.js","c3a7bb1525cb84a190919d3f1661103c"],["/js/third_party/barrage.min.js","22f71c1947bc8ad8726c5f08b7861db4"],["/js/third_party/envelope.min.js","d9da2f2e63937e93cce81709a02b9366"],["/js/third_party/post_ai.min.js","4769fb0aaf21b4ca81bffdeffcd5a5e0"],["/js/third_party/universe.min.js","cf70b00dcbc9a07efe1aee979119df15"],["/js/third_party/waterfall.min.js","a783757c2fe6bcbaedc8e422472a7f8c"],["/js/tw_cn.js","5289e4b4525f8f7dd2b1de80343981af"],["/js/utils.js","fa29386737b1464119307f8578e503d0"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/links/index.html","110e38bc1d0c182f262e15aeed537681"],["/sw-register.js","ae49bcd957236ebf33d272af1067f976"],["/tags/crypto/index.html","32a6ff1d52d460fe98fb1a8d0cb7b872"],["/tags/index.html","b9231cbe628b01cc125bbc2e4a1c91d2"],["/tags/教程/index.html","62dab7c9c400d231c7ab9200ae315fef"],["/tags/树/index.html","7fa7eb4112da201228193c8a0a55cc3c"],["/tags/队列/index.html","7d9e95ea50a7a2c03042244f60e1349e"]];
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
