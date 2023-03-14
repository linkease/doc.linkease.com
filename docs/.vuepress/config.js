module.exports = ctx => ({
    host: "0.0.0.0",
    port: 8080,
    dest: "build",
    // 部署站点的基础路径
    base: "/",
    configureWebpack: {
        resolve: {
            alias: {
                '@assets': 'public/assets/',
                '@public': 'public/'
            }
        }
    },
    // 站点标题
    title: '易有云 文档中心',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'script', { src: "/script/google-analytics.js" },
        ],
        [
            'script', { src: "https://assets.koolcenter.com/linkease-navigation-script/main.js?v=5", defer: true },
        ],
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
        ],
        [
            'link', { rel: 'stylesheet', href: 'https://assets.koolcenter.com/linkease-navigation-script/main.css?v=5' }
        ]
    ],
    // 多语言
    locales: {
        '/': {
            lang: 'zh-CN',
            // title: 'DDNSTO',
            description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理'
        },
    },
    themeConfig: {
        // 站点logo
        logo: '/image/logo.png',
        // 页面配置
        locales: {
            // 中文
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                editLinkText: '此文档有误？在 GitHub 上反馈。',
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '文档', link: '/zh/guide/linkease/', items: [
                            { text: 'iStoreOS', link: '/zh/guide/istoreos/' },
                            { text: 'DDNSTO', link: '/zh/guide/ddnsto/' },
                            { text: '易有云', link: '/zh/guide/linkease/' },
                            // { text: '易有云软件', link: '/zh/guide/linkease_app/' },
                            // { text: '易有云存储端', link: '/zh/guide/linkease_storage/' },
                            { text: 'iStore', link: '/zh/guide/istore/' },
                            { text: 'EasePi', link: '/zh/guide/easepi/' }

                        ]
                    },
                    { text: '博客', link: '/post/' },
                    {
                        text: '视频号', items: [
                            { text: '哔哩哔哩', link: 'https://space.bilibili.com/626572404' },
                            { text: '头条号', link: 'https://bit.ly/3cFVAuY' },
                        ]
                    },
                    {
                        text: '关于我们', link: 'https://www.linkease.com/about'
                    },
                    { text: '下载', link: '/downloads/' },
                ],
                sidebar: {
                    '/zh/guide/linkease_storage/': [
                        {
                            title: "易有云存储端",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                                ["store", "存储端安装"],
                                ["bind", "存储端绑定"],
                                ["opensource", "开源代码"],
                                ["question", "常见问题"],
                                ["changelog", "更新日志"],
                            ]
                        },
                    ],
                    // '/zh/guide/linkease_app/': [
                    //     {
                    //         title: "易有云软件",
                    //         // 显示所有页面的标题链接
                    //         displayAllHeaders: true,
                    //         // 展开状态
                    //         collapsable: true,
                    //         sidebarDepth: 2,
                    //         children: [
                    //             ["", "概述"],
                    //             {
                    //                 title: "详细介绍", collapsable: true, children: [
                    //                     ["linkease_software", "软件组成"],
                    // 					["linkease_pay", "收费价格"],
                    //                     ["linkease_start", "快速上手"],
                    //                     ["linkease_more", "更多精彩"],
                    //                     ["linkease_question", "问题反馈"],
                    //                     ["linkease_impression", "未来思路"]										
                    //                 ]
                    //             },
                    //             ["start", "开始体验"],
                    //             {
                    //                 title: "玩转私有云", collapsable: true, children: [
                    //                     ["play/file_manage", "文件管理"],
                    //                     ["play/photo_backup", "相册备份"],
                    //                     ["play/remote_connects", "设备互联"],
                    //                     ["play/multiple_devices_sync", "多端同步"],
                    //                     ["play/remote_app", "远程应用"]
                    //                 ]
                    //             },
                    //             {
                    //                 title: "存储端安装", collapsable: true, children: [
                    //                     ["storage/easepi", "EasePi"],
                    //                     ["storage/istoreos", "iStoreOS"],
                    //                     ["storage/synology", "群晖"],
                    //                     ["storage/qnap", "威联通"],
                    //                     ["storage/asus_nas", "华硕NAS"],
                    //                     ["storage/koolcenter_merlin", "Koolcenter 梅林"],
                    //                     ["storage/koolcenter_lede", "Koolcenter Lede"],
                    //                     ["storage/openwrt", "OpenWrt"],
                    //                     ["storage/linux", "Linux 通用版"],
                    //                     ["storage/ready_nas", "ReadyNAS"],
                    //                     ["storage/docker", "Docker"],
                    //                     ["storage/unraid", "Unraid"],
                    //                     ["storage/ikuai", "爱快"],
                    //                     ["storage/terra_master", "铁威马"],
                    //                     ["storage/windows", "Windows"],
                    //                     ["storage/mac", "Mac"]
                    //                 ]
                    //             },
                    //             ["bind", "存储端绑定"],
                    //             ["download", "客户端安装"],
                    //             ["tutorial", "APP端教程"],
                    //             ["pc", "PC端教程"],
                    //             ["tv", "TV端教程"],
                    //             ["buy", "购买套餐"],
                    //             ["question", "常见问题"],
                    //             ["changelog", "更新日志"],
                    //             //["about", "关于我们"],
                    //         ]
                    //     },
                    // ],
                    '/zh/guide/linkease/': [
                        {
                            title: "易有云",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["function/file_transfer", "多设备互传"],
                                ["function/file_backup", "备份及同步"],
                                ["function/photo_backup", "相册备份"],
                                ["function/remote_connects", "异地互联"],
                                ["function/home_share", "多人共享"],
                                ["function/directory_manager", "目录管理"],
                                ["more/app_navigation", "应用导航"],
                                // {
                                //     title: "使用易有云", collapsable: false, children: [
                                //         ["function/file_transfer", "多设备文件互传"],
                                // 		   ["function/file_share", "文件共享"],
                                //         ["function/file_backup", "文件备份及同步"],
                                //         ["function/photo_backup", "相册备份"],
                                //         ["function/remote_connects", "异地互联"],
                                //         ["function/home_share", "家庭共享"],									
                                //     ]
                                // },
                                {
                                    title: "更多功能", collapsable: true, children: [
                                        ["function/remote_protocol", "远程协议"],
                                        ["more/verify_ddnsto", "验证ddnsto"],
                                        ["more/network_drive", "网络硬盘"],
                                        ["more/edit_file", "编辑文档"],
                                        ["more/load_subtitle", "加载字幕"],
                                        ["more/protocol_access", "协议访问"],
                                        ["more/protocol_forwarding", "协议转发"],
                                    ]
                                },
                                {
                                    title: "安装及配置🚀", collapsable: true, children: [
                                        ["install/device/windows", "Windows"],
                                        ["install/device/mac", "macOS"],
                                        ["install/device/easepi", "EasePi"],
                                        ["install/device/istoreos", "iStoreOS"],
                                        ["install/device/synology", "群晖"],
                                        ["install/device/qnap", "威联通"],
                                        ["install/device/asus_nas", "华硕NAS"],
                                        ["install/device/koolcenter_merlin", "Koolcenter 梅林"],
                                        ["install/device/koolcenter_lede", "Koolcenter Lede"],
                                        ["install/device/openwrt", "OpenWrt"],
                                        ["install/device/linux", "Linux 通用版"],
                                        ["install/device/ready_nas", "ReadyNAS"],
                                        ["install/device/docker", "Docker"],
                                        ["install/device/unraid", "Unraid"],
                                        ["install/device/ikuai", "爱快"],
                                        ["install/device/terra_master", "铁威马"],
                                        ["install/cloud", "开启网盘"],
                                        ["install/update", "升级"],
                                    ]
                                },
                                {
                                    title: "账户及套餐", collapsable: true, children: [
                                        ["account/register", "注册帐号"],
                                        ["account/pay", "套餐购买"],
                                        ["account/safe", "使用安全"],
                                    ]
                                },
                                {
                                    title: "最佳实践💡", collapsable: true, children: [
                                        ["tips/device", "跨设备传输"],
                                        ["tips/fileTransfer", "文件传输"],
                                        ["tips/multipleDevices", "查看不同设备下的文件"],
                                        ["tips/backup", "手机瘦身"],
                                        ["tips/remote", "异地互联"],
                                        // ["tips/mount", "管理相册"],
                                        ["tips/Synchronize", "同步圈"],
                                        // ["tips/mount", "远程硬件挂载"],
                                        // ["tips/syno_drive", "Synology Drive 同步支持"],
                                        ["tips/transmission", "Transmission 远程下载"],
                                        ["tips/aria2", "Aria2 远程访问"],
                                        // ["tips/cloud_backup", "云备份支持"],
                                        // ["tips/note", "多平台本地笔记同步(Joplin, 思源笔记等)"],
                                    ]
                                },
                                ["feedback/faq", "常见问题"],
                                {
                                    title: "问题反馈", collapsable: true, children: [

                                        ["feedback/group", "交流群"],
                                        ["feedback/email", "Email"],
                                    ]
                                },
                            ]
                        },
                    ],
                    '/zh/guide/ddnsto/': [
                        {
                            title: "DDNSTO",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["start", "域名映射"],
                                ["remote_control", "远程桌面"],
                                ["remote_download", "远程下载"],
                                {
                                    title: "更多功能", collapsable: true, children: [
                                        ["cloudapp", "远程应用"],
                                        ["ddnstofile", "拓展功能"], 
                                    ]
                                },
                                {
                                    title: "安装及配置🚀", collapsable: true, children: [
                                        ["support", "设备支持"], 
                                        ["koolshare_merlin", "安装插件"],
                                    ]
                                }, 
                                {
                                    title: "最佳实践💡", collapsable: true, children: [
                                        ["scene", "第三方服务"], 
                                        ["synology", "群晖玩法"], 
                                    ]
                                },  
                                ["Authentication", "IP（微信）验证"], 
                                ["pay", "账户及套餐💰"],
                                ["question", "常见问题"],  
                                {
                                    title: "问题反馈", collapsable: true, children: [

                                        ["feedback/group", "交流群"],
                                        ["feedback/email", "Email"],
                                    ]
                                },
                                // ["summary", "关于DDNSTO"],
                                // ["about", "联系我们"],
                            ]
                        },
                    ],
                    '/zh/guide/easepi/': [
                        {
                            title: "EasePi",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "产品介绍"],
                                { title: "开始", collapsable: false, children: [["case", "组装"], ["quick", "配置"]] },
                                ["common", "基础玩法"],
                                ["advanced", "高阶玩法"],
                                { title: "其他", collapsable: true, children: [["opensource", "系统DIY"], ["usb_flash", "USB线刷"]] },
                                ["question", "常见问题"],
                                // ["about", "联系我们"],
                            ]
                        },
                    ],
                    '/zh/guide/istoreos/': [
                        {
                            title: "iStoreOS",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "概述"],
                                {
                                    title: "系统介绍", collapsable: true, children: [
                                        ["storeos_introduce", "系统展示"],
                                        ["storeos_hardware", "支持硬件"],
                                        ["storeos_custom", "定制系统"],
                                        ["storeos_more", "更多精彩"],
                                        ["storeos_thanks", "鸣谢"]
                                    ]
                                },
                                {
                                    title: "系统安装", collapsable: true, children: [
                                        ["install_ars2", "EasePi ARS2"],
                                        ["install_x86", "X86 物理机"],
                                        ["install_pve", "X86 PVE"],
                                        ["install_esxi_8", "X86 ESXI 8.0"],
                                        ["install_vmware", "X86 VMWare Workstation"],
                                        ["install_r2s", "R2S/R4S 设备"],
                                        ["install_r5s", "R5S 设备"],
                                        ["install_r68s", "R68S 设备"],
                                        ["install_r66s", "R66S 设备"],
                                        ["install_rpi4", "树莓派 Model4"]
                                    ]
                                },
                                {
                                    title: "常用功能", collapsable: true, children: [
                                        ["basic/network_guide", "网络向导"],
                                        ["basic/page", "首页向导"]
                                    ]
                                },
                                {
                                    title: "软件中心", collapsable: true, children: [
                                        ["software/ddnsto", "DDNSTO"],
                                        ["software/linkease", "易有云"],
                                        ["software/aria2", "Aria2下载器"],
                                        ["software/qBittorrent", "qBittorrent下载器"],
                                        ["software/transmission", "Transmission下载器"],
                                        ["software/homebox", "内网测速"],
                                        ["software/aliyunwebdav", "阿里云WebDav"],
                                        ["software/wxedge", "网心云"],
                                        ["software/navidrome", "Navidrome 音乐平台"]
                                    ]
                                },
                                ["question", "FAQ 必读"],
                                ["changelog", "更新日志"],
                            ]
                        },
                    ],
                    '/zh/guide/about/': [
                        {
                            title: "关于我们",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                            ]
                        },
                    ],
                }
            },
        },
        // 最后更新时间
        // lastUpdated: 'Last Updated', // string | boolean
        // 搜索
        // search: false,
        // searchMaxSuggestions: 10,
        docsRepo: 'linkease/doc.linkease.com',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
    },
    plugins: [
        ['@vuepress/blog',
            {
                directories: [
                    {
                        id: 'post',
                        title: "博客",
                        dirname: '_posts',
                        path: '/post/',
                        itemPermalink: '/post/:year/:month/:day/:slug',
                        layout: "BlogLayout",
                        pagination: {
                            prevText: "上一页",
                            nextText: "下一页",
                            lengthPerPage: 10,
                            layout: "BlogLayout",
                            sorter: (prev, next) => {
                                const dayjs = require('dayjs');
                                const prevTime = dayjs(prev.frontmatter.date);
                                const nextTime = dayjs(next.frontmatter.date);
                                return prevTime - nextTime > 0 ? -1 : 1;
                            }
                        },
                    },
                ],
                frontmatters: [
                    {
                        // Unique ID of current classification
                        // Decide that the frontmatter keys will be grouped under this classification
                        id: "tag",
                        keys: ['tag', 'tags'],
                        // Path of the `entry page` (or `list page`)
                        path: '/tag/',
                        // Layout of the `entry page`
                        title: "标签",
                        // layout: "BlogLayout",
                        scopeLayout: 'BlogLayout',
                        pagination: {
                            prevText: "上一页",
                            nextText: "下一页",
                            lengthPerPage: 10,
                            layout: "BlogLayout",
                            sorter: (prev, next) => {
                                const dayjs = require('dayjs');
                                const prevTime = dayjs(prev.frontmatter.date);
                                const nextTime = dayjs(next.frontmatter.date);
                                return prevTime - nextTime > 0 ? -1 : 1;
                            }
                        },
                    },
                ],
            },
        ],
    ],
})
