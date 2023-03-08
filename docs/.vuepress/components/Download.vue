<template>
    <div id="page">
        <div class="_header">
            <h1 class="title">
                <span>下载中心</span>
            </h1>
            <div class="block"></div>
        </div>
        <div class="containers">
            <template v-for="(item, i) in list">
                <ul class="items" :key="i">
                    <div class="container">
                        <div class="_title">
                            <span>{{ item.title }}</span>
                        </div>
                        <div class="_guide">
                            <template v-if="item.guide[0] == '/'">
                                <router-link :to="item.guide">查看教程</router-link>
                            </template>
                            <template v-else>
                                <a :href="item.guide">
                                    查看教程
                                </a>
                            </template>
                        </div>
                        <div class="_content">
                            <div class="_image">
                                <img :src="item.thumbnail" alt="">
                            </div>
                            <div class="list">
                                <template v-for="ole in item.list">
                                    <download2 :ole="ole" :key="ole.title" />
                                </template>
                            </div>
                        </div>
                    </div>
                </ul>
            </template>

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
        <FooterComponent />
    </div>
</template>

<script>
import Download2 from "./Download2.vue"
import FooterComponent from "./FooterComponent.vue"
import icon_email from "../public/downloads/icon_email.png"
import icon_koolcenter from "../public/downloads/icon_koolcenter.png"
import icon_github from "../public/downloads/icon_github.png"
import icon_users from "../public/downloads/icon_users.png"
import icon_linkease from "../public/downloads/icon_linkease.png"
export default {
    props: {
        list: Array,
    },
    data() {
        return {
            isShow: false,
            FooterComponent,
            icon_email,
            icon_koolcenter,
            icon_github,
            icon_users,
            icon_linkease
        }
    },
    components: {
        Download2
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
        },
        openQrcode() {
            this.isShow = true
        }
    },
    mounted() {
        this.$nextTick(() => {
            // 非移动端的时候添加
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
</style>

<style lang="scss" scoped>
#page {
    width: 100%;
    max-width: 84.375rem; //1350px
    margin: 0 auto;
    padding: 3.125rem 0;
    padding-bottom: 12.5rem;

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
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        ul.items {
            margin: 0;
            padding: 0;
            flex: 0 0 100%;
            max-width: 20%;
            padding: 0 10px;

            .container {
                width: 100%;
                text-align: center;

                ._title {
                    font-size: 18px;
                    font-family: PingFangSC-Semibold, PingFang SC;
                    font-weight: 600;
                    color: #000000;
                    width: 100%;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                ._guide {
                    height: 20px;
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #0060ff;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    margin: 10px 0;
                }

                ._content {
                    width: 100%;
                    height: 404px;
                    background: #f5f5f5;
                    margin: 10px 0;
                    border-radius: 5px;
                    padding: 15px;

                    ._image {
                        width: 100%;
                        height: 126px;
                        text-align: center;

                        img {
                            max-width: 100%;
                            max-height: 100%;
                        }
                    }

                    .list {
                        width: 100%;
                        height: calc(100% - 126px);

                        li.item {
                            width: 100%;
                            list-style: none;
                            margin: 10px 0;
                            position: relative;
                            cursor: pointer;

                            a {
                                font-size: 14px;
                                font-family: PingFangSC-Medium, PingFang SC;
                                font-weight: 500;
                                color: #0060ff;
                            }

                            .qrcode {
                                cursor: pointer;
                                position: absolute;
                                background-color: hsla(0, 0%, 100%, 0.99);
                                left: 0;
                                margin: 0 auto;
                                top: 0;
                                box-shadow: 0 15px 30px 5px rgb(0 0 0 / 15%);
                                border: 1px solid #e4e7ed;
                                z-index: 1;
                                text-align: center;
                                border-radius: 5px;
                                transform-origin: top left;
                                padding: 10px;
                                width: 230px;
                                overflow-y: auto;
                                visibility: visible;
                                transform: scaleX(1);
                                opacity: 1;
                                right: 0;

                                .qrcode_content {
                                    width: 100%;
                                    height: 100%;

                                    .qrcode_info {
                                        font-size: 14px;
                                        font-weight: 400;
                                        color: #4a4a4a;
                                        margin-bottom: 10px;
                                    }

                                    .qrcode_image {
                                        width: 100%;

                                        img {
                                            max-width: 100%;
                                        }
                                    }
                                }
                            }
                        }

                        // li.item:hover {
                        //     .qrcode {
                        //         visibility: visible;
                        //         transform: scaleX(1);
                        //         opacity: 1;
                        //         transition: 0.6s;
                        //         left: 0;
                        //         right: 0;
                        //     }
                        // }
                    }
                }
            }
        }
    }

    .connect {
        margin-bottom: 60px;
        font-family: PingFangSC-Medium, PingFang SC;

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
    border-bottom: 1px solid #666;
    margin-bottom: 24px;
}
</style>
<style lang="scss" scoped>
@media screen and (max-width: 1350px) {
    #page {
        max-width: 73.75rem; //1180px

        .containers {
            ul.items {
                max-width: 25%;
            }
        }

        .connect {
            margin: 0 15px;

            .connect_content {
                .content_connect {
                    .connect_block {
                        flex: 0 0 50%;
                        max-width: calc(50% - 20px);
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 1180px) {
    #page {
        max-width: 57.25rem;

        .containers {
            ul.items {
                max-width: 33.333%;
            }
        }
    }
}

@media screen and (max-width: 916px) {
    #page {
        max-width: 45rem;

        .containers {
            ul.items {
                max-width: 50%;
            }
        }
    }
}

@media screen and (max-width: 719px) {
    #page {
        max-width: 100%;
        padding: 0 10px;

        .containers {
            ul.items {
                max-width: 100%;
            }
        }

        .connect {
            margin: 0 15px;

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
</style>