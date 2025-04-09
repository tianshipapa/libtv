// 全局常量配置
const PROXY_URL = 'https://proxy.mengze.vip/proxy/';
const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'https://images.icon-icons.com/38/PNG/512/retrotv_5520.png',
    version: '1.0.0'
};

// API站点配置
const API_SITES = {
    heimuer: {
        api: 'https://json.heimuer.xyz',
        name: '黑木耳',
        detail: 'https://heimuer.tv',
    },
 huawei: {
        api: 'https://cjhwba.com',
        name: '华为吧',
        detail: 'https://cjhwba.com',
    },
    ffzy: {
        api: 'http://ffzy5.tv',
        name: '非凡影视',
        detail: 'http://ffzy5.tv',
    },
    tyyszy: {
        api: 'https://tyyszy.com',
        name: '天涯资源',
        detail: 'https://tyyszy.com',
    },
    ckzy: {
        api: 'https://www.ckzy1.com',
        name: 'CK资源',
        detail: 'https://www.ckzy1.com',
    },
    jkzy: {
        api: 'https://jkunzyapi.com',
        name: '爱坤资源',
        detail: 'https://jkunzyapi.com',
    }, 
        thzy: {
        api: 'https://thzy1.me',
        name: '桃花资源',
        detail: 'https://thzy1.me',
    }, 
        jszy: {
        api: 'https://jszyapi.com',
        name: '极速资源',
        detail: 'https://jszyapi.com',
    }, 
	
	        slzy: {
        api: 'https://beiyong.slapibf.com',
        name: '森林资源',
        detail: 'https://beiyong.slapibf.com',
    }, 
	
	        syzy: {
        api: 'https://shayuapi.com',
        name: '鲨鱼资源',
        detail: 'https://shayuapi.com',
    }, 
	
	        nxxzy: {
        api: 'https://naixxzy.com',
        name: '奶香香资源',
        detail: 'https://naixxzy.com',
    }, 
    
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 修改搜索接口为返回更多详细数据（包括视频封面、简介和播放列表）
        path: '/api.php/provide/vod/?ac=videolist&wd=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        path: '/index.php/vod/detail/id/',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true  // 是否启用广告过滤
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    allowedApiDomains: [        // 允许的API域名
        'heimuer.xyz',
        'ffzy5.tv'
    ]
};
