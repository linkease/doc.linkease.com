<template>
    <div id="page" class="desktop">
        <div class="_header">
            <h1 class="title">
                <a href="https://www.linkease.com/" target="_blank">易有云 </a>&nbsp;<span>文档中心</span>
            </h1>
            <div class="block"></div>
        </div>
        <div class="containers">

            <div class="content_service">
                <div class="service_par1">
                    <a class="service_block" href="https://doc.linkease.com/zh/guide/ddnsto/" target="_blank">

                        <div class="content_top">
                            <img :src="pic_ddnsto" alt="">
                        </div>
                        <div class="block_content">
                            <div class="content_left">
                                <img class="left_icon" :src="logo_ddnsto">
                            </div>
                            <div class="content_right">
                                <div class="right_top">
                                    <div class="top_title" title="DDNSTO">DDNSTO</div>
                                    <div class="top_tit" title="内网穿透工具，只需一个浏览器，立刻回到内网">内网穿透工具，只需一个浏览器，立刻回到内网</div>
                                </div>

                            </div>
                            <a href="https://doc.linkease.com/zh/guide/ddnsto/" title="查看文档" target="_blank">查看文档</a>
                        </div>
                    </a>

                    <a class="service_block" href="https://doc.linkease.com/zh/guide/linkease_app/" target="_blank">
                        <div class="content_top">
                            <img :src="pic_likease" alt="">
                        </div>
                        <div class="block_content">
                            <div class="content_left">
                                <img class="left_icon" :src="istoreeaselink">
                            </div>
                            <div class="content_right">
                                <div class="right_top">
                                    <div class="top_title" title="易有云软件">易有云软件</div>
                                    <div class="top_tit" title="一个可以随时随地远程连接个人文件或设备的私有存储云">一个可以随时随地远程连接个人文件或设备的私有存储云</div>
                                </div>

                            </div>
                            <a href="https://doc.linkease.com/zh/guide/linkease_app/" title="查看文档" target="_blank">查看文档</a>
                        </div>
                    </a>
                    <a class="service_block" href="https://doc.linkease.com/zh/guide/easepi/" target="_blank">
                        <div class="content_top">
                            <img :src="pic_easepi" alt="">
                        </div>
                        <div class="block_content">
                            <div class="content_left">
                                <img class="left_icon" :src="logo_easepi">
                            </div>
                            <div class="content_right">
                                <div class="right_top">
                                    <div class="top_title" title="EasePi">EasePi</div>
                                    <div class="top_tit" title="接口丰富、稳定、省电的软路由和私有云存储">接口丰富、稳定、省电的软路由和私有云存储</div>
                                </div>

                            </div>
                            <a href="https://doc.linkease.com/zh/guide/easepi/" title="查看文档" target="_blank">查看文档</a>
                        </div>
                    </a>

                </div>
                <div class="service_par1 part2">
                    <a class="service_block" href="https://doc.linkease.com/zh/guide/istoreos/" target="_blank">
                        <div class="content_top">
                            <img :src="pic_iSoreOS" alt="">
                        </div>
                        <div class="block_content">
                            <div class="content_left">
                                <img class="left_icon" :src="logo_istoreos">
                            </div>
                            <div class="content_right">
                                <div class="right_top">
                                    <div class="top_title" title="iStoreOS">iStoreOS</div>
                                    <div class="top_tit" title="操作简单、轻量化的网络存储系统">操作简单、轻量化的网络存储系统</div>
                                </div>
                            </div>
                            <a href="https://doc.linkease.com/zh/guide/istoreos/" title="查看文档" target="_blank">查看文档</a>
                        </div>
                    </a>

                    <a class="service_block" href="https://doc.linkease.com/zh/guide/istore/" target="_blank">
                        <div class="content_top">
                            <img :src="pic_istoremerlin" alt="">
                        </div>
                        <div class="block_content">
                            <div class="content_left">
                                <img class="left_icon" :src="logo_istoremerlin">
                            </div>
                            <div class="content_right">
                                <div class="right_top">
                                    <div class="top_title" title="iStore/梅林应用市场">iStore/梅林应用市场</div>
                                    <div class="top_tit" title="开源且标准的OpenWrt / 梅林软件中心">开源且标准的OpenWrt / 梅林软件中心</div>
                                </div>
                            </div>
                            <a href="https://doc.linkease.com/zh/guide/istore/" title="查看文档" target="_blank">查看文档</a>
                        </div>
                    </a>
                </div>
            </div>

            <div class="connect">
                <div class="connect_content max-width">
                    <div class="content_top">
                        <div class="top_title tit" title="联系我们">联系我们</div>
                    </div>
                    <div class="content_connect">
                        <div class="connect_block">
                            <div class="block_content">
                                <div class="block_tit">问题反馈/建议</div>
                                <div class="block_icon question">
                                    <a href="https://github.com/linkease/doc.linkease.com/issues" target="_blank">
                                        <div class="icon left">
                                            <img :src="icon_github" alt="">
                                            <div class="icon_info">GitHub</div>
                                        </div>
                                    </a>
                                    <a href="https://www.koolcenter.com/posts/117" target="_blank">
                                        <div class="icon right">
                                            <img :src="icon_users" alt="">
                                            <div class="icon_info">用户群</div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>

                        <div class="connect_block">
                            <div class="block_content">
                                <div class="block_tit">商务合作</div>
                                <div class="block_icon">
                                    <a href="mailto:admin@linkease.com" target="_blank">
                                        <div class="icon">
                                            <img :src="icon_email" alt="">
                                            <div class="icon_info">邮箱</div>
                                            <div>admin@linkease.com</div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>

                        <div class="connect_block">
                            <div class="block_content">
                                <div class="block_tit">社交媒体</div>
                                <div class="block_icon question">
                                    <a href="https://space.bilibili.com/1492058311" target="_blank">
                                        <div class="icon">
                                            <img :src="icon_koolcenter" alt="">
                                            <div class="icon_info">B站</div>
                                            <div>酷友社</div>
                                        </div>
                                    </a>
                                    <a href="https://space.bilibili.com/626572404?spm_id_from=333.337.0.0" target="_blank">
                                        <div class="icon right">
                                            <img :src="icon_linkease" alt="">
                                            <div class="icon_info">B站</div>
                                            <div>易有云网络</div>
                                        </div>
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SphereImage from "../public/home/icon_sphere.png"
import istoreeaselink from "../public/home/istoreeaselink@3x.png"
import logo_ddnsto from "../public/home/logo_ddnsto@3x.png"
import logo_easepi from "../public/home/logo_easepi@3x.png"
import logo_istoremerlin from "../public/home/logo_istoremerlin@3x.png"
import logo_istoreos from "../public/home/logo_istoreos@3x.png"
import pic_ddnsto from "../public/home/pic_ddnsto@3x.png"
import pic_easepi from "../public/home/pic_easepi@3x.png"
import pic_iSoreOS from "../public/home/pic_iSoreOS@3x.png"
import pic_istoremerlin from "../public/home/pic_istoremerlin@3x.png"
import pic_likease from "../public/home/pic_likease@3x.png"

import icon_email from "../public/home/icon_email.png"
import icon_koolcenter from "../public/home/icon_koolcenter.png"
import icon_github from "../public/home/icon_github.png"
import icon_users from "../public/home/icon_users.png"
import icon_linkease from "../public/home/icon_linkease.png"
export default {
    data() {
        return {
            SphereImage,
            istoreeaselink,
            logo_ddnsto,
            logo_easepi,
            logo_istoremerlin,
            logo_istoreos,
            pic_ddnsto,
            pic_easepi,
            pic_iSoreOS,
            pic_istoremerlin,
            pic_likease,
            icon_email,
            icon_koolcenter,
            icon_github,
            icon_users,
            icon_linkease
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
        margin: 0 auto;
        margin-top: 50px;
        margin-bottom: 24px;
        h1.title {
            text-align: center;

            height: 2.5rem;
            font-size: 1.75rem;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            line-height: 2.5rem;
            a {
                font-weight: 700;
            }
            span {
                color: #000000;
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

        .content_service {
            .service_par1 {
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                .service_block {
                    height: 488px;
                    background: #ffffff;
                    border-radius: 16px;
                    margin-bottom: 24px;
                    position: relative;
                    flex: 0 0 33.33%;
                    max-width: calc(33.33% - 20px);
                    border: 1px solid #000000;
                    .content_top {
                        img {
                            max-width: 100%;
                            display: block;
                            border-radius: 16px 16px 0px 0px;
                        }
                    }
                    .block_content {
                        margin-left: 32px;
                        padding-top: 32px;
                        padding-right: 32px;
                        display: flex;
                        .content_left {
                            .left_icon {
                                width: 80px;
                                height: 80px;
                            }
                        }
                        .content_right {
                            margin-left: 24px;
                            .right_top {
                                text-align: left;
                                .top_title {
                                    font-size: 28px;
                                    font-weight: 600;
                                    color: rgba(0, 0, 0, 0.83);
                                    line-height: 40px;
                                    margin-top: 10px;
                                }
                                .top_tit {
                                    font-size: 18px;
                                    font-family: PingFangSC-Semibold,
                                        PingFang SC;
                                    color: rgba(0, 0, 0, 0.83);
                                    line-height: 30px;
                                    margin: 8px 0;
                                }
                            }
                            .right_info {
                                p {
                                    font-size: 16px;
                                    font-weight: 400;
                                    color: rgba(0, 0, 0, 0.63);
                                    line-height: 24px;
                                }
                            }
                        }
                        a {
                            text-align: right;
                            position: absolute;
                            right: 24px;
                            bottom: 40px;
                            display: block;
                            width: 112px;
                            background: #ffffff;
                            border-radius: 32px;
                            border: 2px solid #000000;
                            font-size: 18px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            color: rgba(0, 0, 0, 0.83);
                            line-height: 46px;
                            text-align: center;
                        }
                    }
                }
            }
            .part2 {
                justify-content: center;
                .service_block {
                    margin-right: 2rem;
                }
            }
        }

        .connect {
            font-family: PingFangSC-Medium, PingFang SC;
            width: 100%;
            .connect_content {
                .content_top {
                    text-align: -webkit-center;
                }
                .content_connect {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    flex-wrap: wrap;
                    .connect_block {
                        flex: 0 0 33.33%;
                        max-width: calc(33.33% - 20px);
                        padding: 20px 0;
                        background: #e8edf4;
                        border-radius: 16px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-bottom: 20px;
                        height: 385px;
                        .block_content {
                            width: 100%;
                            .block_tit {
                                font-size: 28px;
                                color: rgba(0, 0, 0, 0.83);
                                line-height: 40px;
                                text-align: center;
                            }

                            .block_icon {
                                display: flex;
                                justify-content: center;
                                align-items: center;
                                margin-top: 52px;
                                font-size: 18px;
                                &.question {
                                    justify-content: space-between;
                                }
                                a {
                                    width: 100%;
                                    .icon {
                                        text-align: center;
                                        img {
                                            max-width: 65px;
                                        }
                                        .icon_info {
                                            color: rgba(0, 0, 0, 0.83);
                                            line-height: 25px;
                                            margin-top: 24px;
                                        }
                                    }
                                    .icon {
                                        text-align: center;
                                        img {
                                            max-width: 65px;
                                        }
                                        .icon_info {
                                            font-size: 18px;
                                            color: rgba(0, 0, 0, 0.83);
                                            line-height: 25px;
                                            margin-top: 24px;
                                            margin-bottom: 6px;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        a {
            color: rgba(0, 0, 0, 0.83);
        }
    }
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1400px) {
    #page.desktop {
        .containers {
            .content_service {
                padding: 0 20px;
            }
            .connect {
                padding: 0 20px;
            }
        }
    }
}
@media screen and (max-width: 1300px) {
    #page.desktop {
        .containers {
            .content_service {
                .service_par1 {
                    .service_block {
                        //
                        .block_content {
                            .content_right {
                                .right_top {
                                    .top_tit {
                                        font-size: 16px;
                                        line-height: 24px;
                                    }
                                }
                                .right_info {
                                    p {
                                        font-size: 14px;
                                        line-height: 20px;
                                    }
                                }
                            }
                            a {
                                font-size: 14px;
                                line-height: 28px;
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1060px) {
    #page.desktop {
        .containers {
            .content_service {
                .service_par1 {
                    .service_block {
                        .block_content {
                            .content_left {
                                .left_icon {
                                    width: 60px;
                                    height: 60px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 920px) {
    #page.desktop {
        .containers {
            .content_service {
                .service_par1 {
                    .service_block {
                        .block_content {
                            .content_left {
                                .left_icon {
                                    width: 48px;
                                    height: 48px;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 810px) {
    #page.desktop {
        .containers {
            .content_service {
                .service_par1 {
                    .service_block {
                        flex: 0 0 100%;
                        max-width: 100%;
                    }
                }
                .part2 {
                    .service_block {
                        margin-right: 0rem;
                    }
                }
            }
            .connect {
                .connect_content {
                    .content_connect {
                        .connect_block {
                            flex: 0 0 100%;
                            max-width: 100%;
                        }
                    }
                }
            }
        }
    }
}
@media screen and (max-width: 719px) {
    #page.desktop {
        display: none;
    }

    #page.mobile {
        display: block;
    }
}
</style>
<style scoped>
.tit {
    margin-top: 43px;
    width: 314px;
    height: 58px;
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #000000;
    line-height: 40px;
    text-align: center;
    border-bottom: 2px solid #666;
    margin-bottom: 24px;
}
</style>
