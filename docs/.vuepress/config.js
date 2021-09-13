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
    title: '易有云 远程文件管理',
    // 网站的描述
    description: 'DDNSTO 内网穿透 设备原理 远程下载 远程开机 远程桌面 远程文件管理',
    head: [
        [
            'link', { rel: 'icon', href: '/favicon.ico' }
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
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    { text: '首页', link: '/' },
                    {
                        text: '指南', link: '/zh/guide/linkease/', items: [
                            { text: 'DDNSTO', link: '/zh/guide/ddnsto/' },
                            { text: '易有云客户端', link: '/zh/guide/linkease_client/' },
                            { text: '易有云存储端', link: '/zh/guide/linkease_server/' },
                            { text: 'iStore', link: '/zh/guide/istore/' },
                            { text: 'EasePi', link: '/zh/guide/easepi/' },

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
                        text: '联系我们', items: [
                            { text: '问题反馈', link: 'https://github.com/linkease/doc.linkease.com/issues' },
                            // { text: '问卷调查', link: 'https://wj.qq.com/s2/8425893/80c4/' },
                            { text: '关于我们', link: '/zh/guide/about/' }
                        ]
                    },
                    { text: '下载', link: '/downloads/' },
                ],
                sidebar: {
                    '/zh/guide/linkease_server/': [
                        {
                            title: "使用指南",
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
                                ["plan", "更新日志"],
                            ]
                        },
                    ],
                    '/zh/guide/linkease_client/': [
                        {
                            title: "使用指南",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                                ["download", "客户端安装"],
                                ["tutorial", "APP端教程"],
                                ["pc", "PC端教程"],
                                ["tv", "TV端教程"],
                                ["question", "常见问题"],
                                ["plan", "更新日志"],
                                //["about", "关于我们"],
                            ]
                        },
                    ],
                    '/zh/guide/ddnsto/': [
                        {
                            title: "使用指南",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                                ["quick", "快速入门"],
                                ["preview", "功能预览"],
                                ["koolshare_merlin", "详细教程"],
                                ["Authentication", "身份验证"],
                                ["cloudapp", "远程教学"],
                                ["synology", "群晖玩法"],
                                ["scene", "更多玩法"],
                                ["opensource", "开源代码"],
                                ["question", "常见问题"],
                                // ["about", "联系我们"],
                            ]
                        },
                    ],
                    '/zh/guide/easepi/': [
                        {
                            title: "使用指南",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "产品介绍"],
                                ["quick", "快速使用"],
                                ["common", "基础玩法"],
                                ["advanced", "高阶玩法"],
                                ["opensource", "固件开源"],
                                ["question", "常见问题"],
                                // ["about", "联系我们"],
                            ]
                        },
                    ],
                    '/zh/guide/istore/': [
                        {
                            title: "使用指南",
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
        // searchMaxSuggestions: 10
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
