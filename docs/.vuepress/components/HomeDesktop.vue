<template>
    <div id="page" class="desktop">
        <div class="_header">
            <h1 class="title">
                <span>文档中心</span>
            </h1>
            <div class="block"></div>
        </div>
        <div class="containers">
            <div class="sphere">
                <div class="_image">
                    <img :src="SphereImage" alt="">
                </div>
                <div class="_titles" title="带你玩转私有云">
                    <span>带你玩转私有云</span>
                </div>
                <!-- 步骤1 -->
                <ul class="setup1">
                    <li class="item">
                        <div class="_title" title="选择硬件">
                            <span class="text"> 选择硬件</span>
                            <span class="number">1</span>
                        </div>
                        <div class="_content">
                            <div class="_box">
                                <router-link to="/zh/guide/easepi/">
                                    <span class="_title" title="EasePi">EasePi</span>
                                    <span class="_text" title="性能强劲/接口丰富/带存储的软路由">
                                        性能强劲/接口丰富/带存储的软路由
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 步骤2 -->
                <ul class="setup2">
                    <li class="item">
                        <div class="_title" title="选择软件">
                            <span class="text"> 选择软件</span>
                            <span class="number">2</span>
                        </div>
                        <div class="_content">
                            <div class="_box">
                                <router-link to="/zh/guide/linkease_server/">
                                    <span class="_title" title="易有云存储端">易有云存储端</span>
                                    <span class="_text" title="跨平台设备传输/文件管理/相册备份/多种网络协议">
                                        跨平台设备传输/文件管理/相册备份/多种网络协议
                                    </span>
                                </router-link>
                            </div>
                            <div class="_box">
                                <router-link to="/zh/guide/linkease_client/">
                                    <span class="_title" title="易有云APP">易有云APP</span>
                                    <span class="_text" title="全平台客户端/多设备文件管理/增量传输不限速">
                                        全平台客户端/多设备文件管理/增量传输不限速
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 步骤3 -->
                <ul class="setup3">
                    <li class="item">
                        <div class="_title" title="应用市场">
                            <span class="number">3</span>
                            <span class="text">应用市场</span>
                        </div>
                        <div class="_content">
                            <div class="_box">
                                <router-link to="/zh/guide/istore/">
                                    <span class="_title" title="iStore">iStore</span>
                                    <span class="_text" title="简易开源市场，带你发现更多好玩的应用">
                                        简易开源市场，带你发现更多好玩的应用
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
                <!-- 步骤4 -->
                <ul class="setup4">
                    <li class="item">
                        <div class="_title" title="添加插件">
                            <span class="number">4</span>
                            <span class="text">添加插件</span>
                        </div>
                        <div class="_content">
                            <div class="_box">
                                <router-link to="/zh/guide/ddnsto/">
                                    <span class="_title" title="DDNSTO">DDNSTO</span>
                                    <span class="_text" title="内网穿透，一个浏览器搞定远程桌面等多种远程应用">
                                        内网穿透，一个浏览器搞定远程桌面等多种远程应用
                                    </span>
                                </router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="container">

            </div>
        </div>
    </div>
</template>

<script>
import SphereImage from "../public/home/icon_sphere.png"
export default {
    data() {
        return {
            SphereImage
        }
    },
    methods: {
        // 判断是否移动端
        isMobile() {
            let info = window.navigator.userAgent;
            let agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod", "iPad"];
            for (let i = 0; i < agents.length; i++) {
                if (info.indexOf(agents[i]) >= 0) return true;
            }
            return false;
        }
    },
    mounted() {
        // 非移动端的时候添加
        this.$nextTick(() => {
            if (document.body.clientWidth > 718) {
                let viewport = document.querySelector(`meta[name="viewport"]`)
                if (viewport) {
                    viewport.content = "width=1400, initial-scale=1.0";
                } else {
                    let head = document.querySelector("head");
                    let meta = document.createElement('meta');
                    meta.name = 'viewport';
                    meta.content = "width=1400, initial-scale=1.0";
                    head.appendChild(meta);
                }
            }
        })

    },
    destroyed() {
        let viewport = document.querySelector('meta[name="viewport"]')
        if (viewport) {
            viewport.content = "width=device-width"
        }
    },
}
</script>
<style lang="scss" scoped>
* {
    -webkit-box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    box-sizing: border-box;
    word-wrap: break-word;
    outline: none;
}
#page.desktop {
    width: 100%;
    max-width: 84.375rem; //1350px
    margin: 0 auto;
    padding: 3.125rem 0;
    ._header {
        width: 100%;
        margin: 6.25rem 0;
        h1.title {
            text-align: center;
            span {
                height: 2.5rem;
                font-size: 1.75rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                line-height: 2.5rem;
            }
        }
        .block {
            width: 19.5625rem;
            height: 1px;
            background: #000000;
            margin: 0 auto;
        }
    }
    .containers {
        text-align: center;
        position: relative;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        .sphere {
            position: relative;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            ._image {
                position: relative;
                z-index: 0;
                img {
                    max-width: 37.625rem;
                    max-height: 38.6875rem;
                }
            }
            ._titles {
                position: absolute;
                z-index: 1;
                font-size: 2rem;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #000000;
                margin-top: -12.5rem;
            }
            ul.setup1 {
                position: absolute;
                top: 40px;
                left: -320px;
                li.item {
                    list-style: none;
                    flex: 0 0 100%;
                    ._title {
                        text-align: right;
                        span.text {
                            font-size: 1.5rem;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #0060ff;
                            margin-right: 25px;
                        }
                        span.number {
                            font-size: 60px;
                            font-family: Apple-Chancery, Apple;
                            font-weight: normal;
                            color: #0060ff;
                            margin-right: -60px;
                        }
                    }
                    ._content {
                        text-align: right;
                        ._box {
                            width: 18rem;
                            background: rgba(255, 255, 255, 0.6);
                            box-shadow: 0px 2px 8px 4px rgb(231 231 231 / 50%);
                            border-radius: 2px;
                            padding: 0.625rem 1.25rem;
                            margin-bottom: 0.625rem;
                            span._title {
                                font-size: 1.5rem;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #000000;
                                width: 100%;
                                display: block;
                            }
                            span._text {
                                font-size: 0.875rem;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #000000;
                                line-height: 1.25rem;

                                width: 100%;
                                display: block;
                            }
                        }
                    }
                }
            }
            ul.setup2 {
                position: absolute;
                top: 250px;
                left: -320px;
                li.item {
                    list-style: none;
                    flex: 0 0 100%;
                    ._title {
                        text-align: right;
                        span.text {
                            font-size: 1.5rem;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #0060ff;
                            margin-right: 25px;
                        }
                        span.number {
                            font-size: 60px;
                            font-family: Apple-Chancery, Apple;
                            font-weight: normal;
                            color: #0060ff;
                            margin-right: -60px;
                        }
                    }
                    ._content {
                        text-align: right;
                        ._box {
                            width: 24.5rem;
                            background: rgba(255, 255, 255, 0.6);
                            box-shadow: 0px 2px 8px 4px rgb(231 231 231 / 50%);
                            border-radius: 2px;
                            padding: 0.625rem 1.25rem;
                            margin-bottom: 0.625rem;
                            span._title {
                                font-size: 1.5rem;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #000000;
                                width: 100%;
                                display: block;
                            }
                            span._text {
                                font-size: 0.875rem;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #000000;
                                line-height: 1.25rem;

                                width: 100%;
                                display: block;
                            }
                        }
                    }
                }
            }
            ul.setup3 {
                position: absolute;
                top: 250px;
                right: -310px;
                li.item {
                    list-style: none;
                    flex: 0 0 100%;
                    ._title {
                        text-align: left;
                        span.text {
                            font-size: 1.5rem;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #0060ff;
                            margin-left: 25px;
                        }
                        span.number {
                            font-size: 60px;
                            font-family: Apple-Chancery, Apple;
                            font-weight: normal;
                            color: #0060ff;
                            margin-left: -60px;
                        }
                    }
                    ._content {
                        text-align: left;
                        ._box {
                            width: 24.5rem;
                            background: rgba(255, 255, 255, 0.6);
                            box-shadow: 0px 2px 8px 4px rgb(231 231 231 / 50%);
                            border-radius: 2px;
                            padding: 0.625rem 1.25rem;
                            margin-bottom: 0.625rem;
                            span._title {
                                font-size: 1.5rem;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #000000;
                                width: 100%;
                                display: block;
                            }
                            span._text {
                                font-size: 0.875rem;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #000000;
                                line-height: 1.25rem;

                                width: 100%;
                                display: block;
                            }
                        }
                    }
                }
            }
            ul.setup4 {
                position: absolute;
                top: 40px;
                right: -300px;
                li.item {
                    list-style: none;
                    flex: 0 0 100%;
                    ._title {
                        text-align: left;
                        span.text {
                            font-size: 1.5rem;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #0060ff;
                            margin-left: 25px;
                        }
                        span.number {
                            font-size: 60px;
                            font-family: Apple-Chancery, Apple;
                            font-weight: normal;
                            color: #0060ff;
                            margin-left: -60px;
                        }
                    }
                    ._content {
                        text-align: left;
                        ._box {
                            width: 18rem;
                            background: rgba(255, 255, 255, 0.6);
                            box-shadow: 0px 2px 8px 4px rgb(231 231 231 / 50%);
                            border-radius: 2px;
                            padding: 0.625rem 1.25rem;
                            margin-bottom: 0.625rem;
                            span._title {
                                font-size: 1.5rem;
                                font-family: PingFangSC-Semibold, PingFang SC;
                                font-weight: 600;
                                color: #000000;
                                width: 100%;
                                display: block;
                            }
                            span._text {
                                font-size: 0.875rem;
                                font-family: PingFangSC-Regular, PingFang SC;
                                font-weight: 400;
                                color: #000000;
                                line-height: 1.25rem;

                                width: 100%;
                                display: block;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and(max-width: 719px) {
    #page.desktop {
        display: none;
    }
    #page.mobile {
        display: block;
    }
}
</style>