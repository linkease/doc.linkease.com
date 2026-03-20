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
    title: '易有云产品中心',
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
                    { text: '产品中心', link: '/' },
                    {
                        text: '文档', link: '/zh/guide/linkease/', items: [
                            { text: '易有云', link: '/zh/guide/linkease/' },
                            { text: 'DDNSTO', link: '/zh/guide/ddnsto/' },
                            { text: 'iStoreOS 系统', link: '/zh/guide/istoreos/' },
                            { text: 'iStore 软件中心', link: '/zh/guide/istore/' },
                            {
                                text: 'EasePi', items: [
                                    { text: 'EasePi-R1', link: '/zh/guide/easepi-r1/' },
                                    { text: 'EasePi-ARS2', link: '/zh/guide/easepi-ars2/' },
                                ]
                            },
							// { text: 'P2Pro', link: '/zh/guide/p2pro/' },
							{ text: 'AndroidNAS', link: '/zh/guide/androidnas/' },
                            { text: '知识库', link: '/zh/guide/wiki/' } 
                        ]
                  },
                    { text: '博客', link: '/post/' },
                    {
                        text: '关于我们', link: 'https://www.linkease.com/about'
                  },
                  {
                        text: '更多产品', items: [
                            { text: 'iStoreOS', link: 'https://www.istoreos.com/' },
                            { text: 'DDNSTO', link: 'https://www.ddnsto.com/' },
                            { text: 'iStore', link: 'https://doc.linkease.com/zh/guide/istore/' },
                            { text: 'EasePi', link: 'https://easepi.linkease.com/' }

                        ]
                    },
                ],
                sidebar: {
                    '/zh/guide/linkease/': [
                        {
                            title: "易有云",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "新手速览"],
                                {
                                    title: "更新日志", collapsable: true, children: [
                                        //["changelog/1.7.6", "v1.7.6"],
                                        //["changelog/1.7.5", "v1.7.5"],
                                        ["changelog/1.7.4", "v1.7.4"]
                                    ]
                                },
                                ["function/file_transfer", "多设备互传"],
                                ["function/file_backup", "备份及同步"],
                                ["function/photo_backup", "相册备份"],
                                ["function/remote_connects", "异地互联"],
                                ["function/home_share", "多人共享"],
                                ["function/directory_manager", "目录管理"],
                                ["more/app_navigation", "应用导航"],
                                {
                                    title: "更多功能", collapsable: true, children: [
                                        ["function/remote_protocol", "远程协议"],
                                        ["more/verify_ddnsto", "验证ddnsto"],
                                        ["more/network_drive", "网络硬盘"],
                                        ["more/edit_file", "编辑文档"],
                                        ["more/load_subtitle", "加载字幕"],
                                        ["more/protocol_access", "协议访问"],
                                    ]
                                },
                                {
                                    title: "设备安装及更新教程", collapsable: true, children: [
                                        ["install/device/support", "设备检查更新"],
                                        ["install/device/windows", "Windows"],
                                        ["install/device/mac", "macOS"],
                                        ["install/device/easepi", "EasePi"],
                                        ["install/device/istoreos", "iStoreOS"],
                                        ["install/device/synology", "群晖"],
                                        ["install/device/qnap", "威联通"],
                                        ["install/device/asus_nas", "华硕NAS"],
                                        ["install/device/koolcenter_merlin", "ASUSGO 固件"],
                                        ["install/device/koolcenter_lede", "Koolcenter Lede"],
                                        ["install/device/openwrt", "OpenWrt"],
                                        ["install/device/linux","Linux/Ubuntu/Centeros/Debian/Casaos"],
                                        ["install/device/ready_nas", "ReadyNAS"],
                                        ["install/device/docker", "Docker"],
                                        ["install/device/unraid", "Unraid"],
                                        ["install/device/ikuai", "爱快"],
                                        ["install/device/terra_master", "铁威马"],
                                        ["install/device/zspace", "极空间"],
                                        ["install/device/fn", "飞牛"],
                                        ["install/device/ugreen", "绿联NAS"],
                                        ["install/device/histb", "海纳思NAS"],
                                        ["install/cloud", "开启网盘"],
                                        ["install/update", "升级"],
                                        ["install/delete", "解绑"],
                                    ]
                                },
                                {
                                    title: "💰账户及套餐", collapsable: true, children: [
                                        ["account/register", "注册帐号"],
                                        ["account/pay", "套餐购买"],
                                        ["account/safe", "使用安全"],
                                    ]
                                },
                                {
                                    title: "💡最佳实践", collapsable: true, children: [
                                        ["tips/remote", "在家办公，通过远程桌面控制公司电脑"],
                                        ["tips/syno_drive", "如何通过异地互联使用群晖Drive"],
                                        ["tips/device", "安卓手机资料想传给Mac电脑"],
                                        ["tips/transmission", "Transmission 远程下载"],
                                        ["tips/aria2", "Aria2 远程下载"],
                                        ["tips/qBittorrent", "qBittorrent 远程下载"],
                                        ["tips/Jellyfin", "Jellyfin 远程影视"],
                                        ["tips/emby", "emby 远程影视"],
                                        ["tips/plex", "plex 远程影视"],
                                        ["tips/navidrome", "navidrome 远程音乐"],
                                        ["tips/mount_Windows", "Windows远程挂载硬盘"],
                                        ["tips/mount_mac", "Mac远程挂载NAS硬盘"],
                                        ["tips/asus_nas_pre", "华硕路由器作为轻NAS的前期准备"],
                                        ["tips/asus_nas_linkease", "华硕路由器搭配易有云实现轻NAS教程"],
                                        ["tips/hinas", "电视盒子也能当NAS"]

                                        // ["tips/cloud_backup", "云备份支持"],
                                        // ["tips/note", "多平台本地笔记同步(Joplin, 思源笔记等)"],
                                    ]
                                },
                                ["feedback/faq", "💬常见问题"],
                                ["feedback/notice", "⚠️注意事项"],
                                {
                                    title: "问题反馈", collapsable: true, children: [

                                        ["feedback/group", "交流群"],
                                        ["feedback/email", "Email"],
                                    ]
                                },
                                ["account/new_pay", "⚠️新付费方案"],
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
                                ["basic_settings", "基础设置"],
                                {
                                    title: "更多功能", collapsable: true, children: [
                                        ["cloudapp", "远程应用"],
                                        ["ddnstofile", "拓展功能"],
                                    ]
                                },
                                {
                                    title: "🚀安装及配置", collapsable: true, children: [
                                        ["support", "设备支持列表"],
                                        ["install/device/token", "获取Token"],
                                        ["install/device/easepi", "EasePi"],
                                        ["install/device/istoreos", "iStoreOS"],
                                        ["install/device/koolcenter_merlin", "ASUSGO 固件"],
                                        ["install/device/koolcenter_lede", "Koolcenter Lede"],
                                        ["install/device/openwrt", "OpenWrt"],
                                        ["install/device/synology", "群晖"],
                                        ["install/device/qnap", "威联通"],
                                        ["install/device/docker", "Docker"],
                                        ["install/device/padavan", "Padavan"],
                                        ["install/device/ready_nas", "ReadyNAS"],
                                        ["install/device/ikuai", "爱快"],
                                        ["install/device/unraid", "Unraid"],
                                        ["install/device/terra_master", "铁威马"],
                                        ["install/device/windows", "Windows"],
                                        ["install/device/linux", "Linux/Ubuntu/Centeros/Debian/Casaos"],
                                        ["install/device/zspace", "极空间"],
                                        ["install/device/fn", "飞牛"],
                                        ["install/device/ugreen", "绿联NAS"],
                                        ["install/device/histb", "海纳思NAS"],
                                        ["install/device/penetrate", "穿透设置"],
                                        ["install/device/domain_name", "添加域名"],
                                        ["install/device/change_name", "设备改名"],
                                        ["install/device/combo", "套餐和服务器"],
                                    ]
                                },

                                {
                                    title: "💡最佳实践", collapsable: true, children: [
                                        ["scene", "第三方服务"],
                                        ["synology", "群晖玩法"],
                                        ["safe", "数据安全"],
                                    ]
                                },
                                ["Authentication", "🔓身份(IP)验证"],
                                ["pay", "💰账户及套餐"],
                                ["question", "💬常见问题"],
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
					
					'/zh/guide/istoreos/': [
                        {
                            title: "iStoreOS",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "快速上手"],
                                {
                                    title: "系统介绍", collapsable: true, children: [
                                        ["istoreos_introduce", "系统展示"],
                                        //["istoreos_hardware", "支持硬件"],
                                        ["istoreos_custom", "定制系统"],
                                        ["istoreos_more", "更多精彩"],
                                        ["istoreos_thanks", "鸣谢"]
                                    ]
                                },
                                {
                                    title: "更新日志", collapsable: true, children: [
                                        ["changelog/20260320", "v24.10.5 - 20260320"],
                                        ["changelog/20251231", "v24.10.5 - 20251231"],
                                        ["changelog/20251226", "v24.10.4 - 20251226"],
                                        ["changelog/20251219", "v24.10.4 - 20251219"],
                                        ["changelog/20251205", "v24.10.4 - 20251205"],
                                        ["changelog/20251128", "v24.10.4 - 20251128"],
                                        ["changelog/20251121", "v24.10.4 - 20251121"],
                                        ["changelog/20251024", "v24.10.4 - 20251024"],
                                        ["changelog/20251017", "v24.10.3 - 20251017"],
                                        ["changelog/20250930", "v24.10.3 - 20250930"],
                                        ["changelog/20250926", "v24.10.2 - 20250926"],
                                        ["changelog/20250919", "v24.10.2 - 20250919"],
                                        ["changelog/20250905", "v24.10.2 - 20250905"],
                                        ["changelog/20250822", "v24.10.2 - 20250822"],
                                        ["changelog/20250808", "v24.10.2 - 20250808"],
                                        ["changelog/20250801", "v24.10.2 - 20250801"],
                                        ["changelog/20250725", "v24.10.2 - 20250725"],
                                        ["changelog/20250718", "v24.10.2 - 20250718"],
                                        ["changelog/20250711", "v24.10.2 - 20250711"],
                                        ["changelog/20250704", "v24.10.2 - 20250704"],
                                        ["changelog/20250620", "v24.10.1 - 20250620"],
                                        ["changelog/20250606", "v24.10.1 - 20250606"],
                                        ["changelog/20250523", "v24.10.1 - 20250523"],
                                        ["changelog/20250516", "v22.03.7 - 20250516"],
                                        ["changelog/20250509", "v22.03.7 - 20250509"],
                                        ["changelog/20250407", "v22.03.7 - 20250407"],
                                        ["changelog/20250403", "v22.03.7 - 20250403"]
                                    ]
                                },
                                {
                                    title: "系统安装", collapsable: true, children: [
                                        ["install", "支持列表"],
                                        ["install_r1", "EasePi R1"],
                                        ["install_easepi-a2", "EasePi A2"],
                                        ["install_zx3000", "ZX3000"],
                                        ["install_ars2", "EasePi ARS2"],
                                        ["install_x86", "X86 物理机"],
                                        ["install_pve", "X86 PVE"],
                                        ["install_esxi_8", "X86 ESXI 8.0"],
                                        ["install_vmware", "X86 VMWare Workstation"],
                                        //["install_proxmox", "X86 Proxmox"],
                                        ["install_ikuai", "X86 iKuai爱快"],
                                        ["install_unraid", "X86 UNRAID"],
                                        ["install_fnos", "飞牛"],
                                        ["install_hyperv", "Hyper-V"],
                                        ["install_synology", "群晖"],
                                        ["install_apple", "Apple Silicon M系列"],
                                        ["install_ax9000", "小米 AX9000"],
                                        ["install_r76s", "NanoPi R76S"],
                                        ["install_r6s", "NanoPi R6S/R6C"],
                                        ["install_r5s", "NanoPi R5S/R5C"],
                                        ["install_r4s", "NanoPi R4S"],
                                        ["install_r4se", "NanoPi R4SE"],
                                        ["install_r3s", "NanoPi R3S"],
                                        ["install_r2s", "NanoPi R2S/R2C"],
                                        ["install_r6xs", "电犀牛 R66/68S"],
                                        //["install_r68s", "电犀牛 R68S"],
                                        //["install_r66s", "电犀牛 R66S"],
                                        ["install_h88k", "HinLink H88K"],
                                        ["install_h6xk", "HinLink H66/68/69K"],
                                        ["install_h28k", "HinLink H28K"],
                                        ["install_t68m", "莱因特 T68M"],
                                        ["install_p2", "Station P2"],
                                        ["install_rpi5", "树莓派 Model 5"],
                                        ["install_rpi4", "树莓派 Model 4"],
                                        ["install_e54c", "Radxa E54C"],
                                        ["install_e52c", "Radxa E52C"],
                                        ["install_e24c", "Radxa E24C"],
                                        ["install_e20c", "Radxa E20C"],
                                        ["install_seed-ac5", "SEED AC5"],
                                        ["install_seed-ac3", "SEED AC3"],
                                        ["install_seed-ac2", "SEED AC2"],
                                        ["install_seed-ac1", "SEED AC1"],
                                        ["install_be3600", "GL BE3600"],
                                        ["install_mt3000", "GL MT3000"],
                                        //["install_rockchip_tf_or_emmc", "Rockchip 安装 iStoreOS 教程"],
                                        ["install_rockchip_sysupgrade", "Rockchip 线刷标准固件"],
                                        ["install_sd", "SD卡通用教程"],
                                        ["install_shell", "系统内刷机教程"],
                                        //["install_rockchip_rkfw", "Rockchip 刷 RK 固件（已过时）"]
                                    ]
                                },
                                {
                                    title: "设备联网", collapsable: true, children: [
                                        ["network/wired_connection", "有线连接"],
                                        ["network/wifi_connection", "无线连接"],
                                        ["network/check_connection", "访问设备"]
                                    ]
                                },
                                {
                                    title: "快捷向导", collapsable: true, children: [
                                        ["basic/network_guide", "网络向导"],
                                        ["basic/page", "首页向导"],
                                        ["basic/install_guide", "快速装机向导"]
                                    ]
                                },
                                ["https://doc.linkease.com/zh/guide/istore/", "软件中心"],
                                {
                                    title: "最佳实践", collapsable: true, children: [
                                        ["practice/BypassRouter", "旁路由最佳实践"],
                                        ["practice/homeNas", "家庭NAS服务器"],
                                        ["practice/HowToWriteDoc", "用 iStoreOS 写文档"],
                                        ["practice/ventoy", "Ventoy打造最强U盘"],
                                        ["practice/DialMore", "多账号多拨"],
                                        ["practice/pikvm", "免屏幕键盘鼠标给小主机装系统"],
                                        ["practice/mesh", "无线 Mesh 路由器组网方式"],
                                        ["practice/WiFiSupported", "无线驱动支持"]
                                       
                                    ]
                                },
                                {
                                    title: "常见问题", collapsable: true, children: [
                                        ["question/about_install", "安装问题"],
                                        ["question/about_network", "网络问题"],
                                        ["question/about_usage", "使用问题"],
                                        ["question/about_docker", "Docker问题"],
                                        ["question/about_other", "其他问题"]
                                    ]
                                },
                                // ["question", "常见问题"],
                                ["support", "社区与支持"],
                            ]
                        },
                    ],

                    '/zh/guide/istore/': [
                        {
                            title: "iStore软件中心",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "介绍"],
                                ["software/post-my-tutorial", "投稿共创"],
                                ["software/ddnsto", "DDNSTO"],
                                ["software/linkease", "易有云"],
                                ["software/istorex", "iStoreX"],
                                ["software/jellyfin", "Jellyfin"],
                                ["software/airplay2", "AirPlay2苹果隔空"],
                                ["software/alist", "Alist 云盘聚合管理"],
                                ["software/aria2", "Aria2"],
                                ["software/aliyunwebdav", "阿里云WebDav"],
                                ["software/clouddrive2", "CloudDrive2 云盘当硬盘"],
                                ["software/floatip", "浮动网关"],
                                ["software/homebox", "Homebox内网测速"],
                                ["software/homeassistant", "智能家居"],
                                ["software/htreader", "在线读书"],
                                ["software/istoredup", "路由分身"],
                                ["software/istoreenhance", "iStore增强"],
                                ["software/istorepanel", "1Panel"],
                                ["software/ittools", "工程师工具集"],
                                ["software/oneapi", "OpenAI聚合API"],
                                ["software/openwebui", "类DeepSeek私有化部署"],
                                ["software/qBittorrent", "qBittorrent"],
                                ["software/transmission", "Transmission"],
                                ["software/wxedge", "网心云"],
                                ["software/bmtedge", "蓝山云"],
                                ["software/owxbyz", "驿站"],
                                ["software/xunyou", "迅游加速器"],
                                ["software/navidrome", "Navidrome音乐平台"],
                                ["software/rclone", "Rclone 云盘备份"],
                                ["software/webvirtcloud", "KVM虚拟机"],
                                ["software/kvm-vfio", "KVM显卡直通"],
                                ["software/pve-vfio", "PVE显卡直通"],
                                ["software/appfilter", "应用过滤"],
                            ]
                        },
                    ],
					
                    '/zh/guide/easepi-ars2/': [
                        {
                            title: "EasePi-ARS2",
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
                    '/zh/guide/easepi-r1/': [
                        {
                            title: "EasePi-R1",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: "快速上手", collapsable: true, children: [
                                        ["quick/Description", "产品说明"],
                                        ["quick/Power", "开机重置"],
                                        ["quick/Networking", "设备联网"],
                                        ["quick/SystemUpgrade", "系统升级"],
                                        ["quick/Flash", "线刷救砖"],
                                        ["quick/Storage", "存储管理"],
                                        ["quick/Backup", "数据备份"],
                                        ["quick/Remote", "远程访问"],
                                        ["quick/Download", "远程下载"],
                                        ["quick/HomeVideo", "家庭影音"],
                                        ["quick/Advanced", "高级玩法"],
                                        ["quick/Software", "常用软件"],
                                        ["quick/Neighborhood", "设备周边"],
                                        ["quick/Support", "售后支持"]
                                    ]
                                },
                                ["advantage", "R1产品优势"],  
                                ["hardware", "R1配置详情"],
                                // ["quickstart_hardware", "硬件快速上手"],  
                                // ["quickstart_software", "软件快速上手"], 
                                // ["quickfix", "问题快速解决"],
                                ["easepi", "EasePi介绍"],								
                                // {title: "基础操作", 
                                //   collapsable: false,
                                //   children: [
                                //     ["network", "网络设置"], 
                                //     ["disk", "磁盘管理"], 
                                //     ["share", "局域网共享"]
                                //     ]
                                // }, 
                                // {title: "配置私有云", 
                                //   collapsable: false,
                                //   children: [
                                //     ["todo", "从手机配置"],
                                //     ["todo", "从网页配置"],
                                //     ["todo", "相册备份"],
                                //     ["todo", "文件同步"],
                                //     ["todo", "网盘挂载"] 
                                //     ]
                                // }, 
                                // ["todo", "家庭影院"],
                                // ["todo", "软件中心"],
                                // ["todo", "Docker"],
                                ["question", "常见问题解决"],
                            ]
                        },
                    ],
                    '/zh/guide/androidnas/': [
                        {
                            title: "AndroidNAS",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "快速上手"],
                                // ["advantage", "R1产品优势"],  
                                // ["hardware", "R1配置详情"],
                                // ["quickstart_hardware", "硬件快速上手"],  
                                // ["quickstart_software", "软件快速上手"], 
                                // ["quickfix", "问题快速解决"],
                                // ["easepi", "EasePi介绍"],								
                                // {title: "基础操作", 
                                //   collapsable: false,
                                //   children: [
                                //     ["network", "网络设置"], 
                                //     ["disk", "磁盘管理"], 
                                //     ["share", "局域网共享"]
                                //     ]
                                // }, 
                                // {title: "配置私有云", 
                                //   collapsable: false,
                                //   children: [
                                //     ["todo", "从手机配置"],
                                //     ["todo", "从网页配置"],
                                //     ["todo", "相册备份"],
                                //     ["todo", "文件同步"],
                                //     ["todo", "网盘挂载"] 
                                //     ]
                                // }, 
                                // ["todo", "家庭影院"],
                                // ["todo", "软件中心"],
                                // ["todo", "Docker"],
                                // ["question", "常见问题解决"],
                            ]
                        },
                    ],
                    
					'/zh/guide/p2pro/': [
                        {
                            title: "P2Pro",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                ["", "快速开始"],
                                ["advantage", "P2Pro产品优势"],  
                                ["hardware", "硬件产品详情"],
                                ["quickstart_hardware", "硬件快速上手"],  
                                ["quickstart_software", "软件快速上手"], 
                                ["quickfix", "问题快速解决"],
                                {
                                  title: "基础操作", 
                                  collapsable: false,
                                  children: [
                                    ["network", "网络设置"], 
                                    ["share", "局域网共享"]
                                    ]
                                }, 
                                {title: "配置私有云", 
                                collapsable: false,
                                children: [
                                  ["todo", "从手机配置"],
                                  ["todo", "从网页配置"],
                                  ["todo", "相册备份"],
                                  ["todo", "网盘挂载"],
                                  ["todo", "异地组网"],										
                                  ]
                              }, 
                              {title: "配置域名", 
                                collapsable: false,
                                children: [
                                  ["todo", "从网页配置"],
                                  ["todo", "远程下载"],
                                  ["todo", "远程桌面"],
                                  ]
                              }, 
                                ["todo", "软件中心"],
                                ["todo", "Docker"],
                                ["question", "常见问题"],
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
                    '/zh/guide/wiki/': [
                        {
                            title: "知识库",
                            // 显示所有页面的标题链接
                            displayAllHeaders: true,
                            // 展开状态
                            collapsable: true,
                            sidebarDepth: 2,
                            children: [
                                {
                                    title: "常用软件配置", collapsable: true, children: [
                                        ["remote", "远程桌面"],
                                        ["Microsoft", "下载微软远程软件"],
                                        ["downloads", "下载器插件"],
                                    ]
                                },
                                {
                                    title: "网络知识", collapsable: true, children: [
                                        ["remoteProtocol", "远程桌面选RDP还是VNC协议？"],
                                        ["IP", "内网IP和公网IP的区别？"],
                                        ["networkSegment", "什么是网段？怎么判断我的两台设备是不是处在同一网段？"],
                                        ["IP-address", "什么是IP地址？怎么查看电脑IP地址？"],
                                        ["http", "什么是http协议？"],
                                        ["DNS", "什么是DNS？什么是域名？DNS、域名和IP之间是什么关系？"],
                                        ["smaba", "什么是samba？什么是webdav？samba和webdav的区别？"],
                                        ["domain", "什么是域名映射？"],
                                        ["TCP", "TCP/UDP协议有什么区别？"]

                                    ]
                                },
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
