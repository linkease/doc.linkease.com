<template>
    <li class="item">
        <a :title="ole.title" rel="noopener noreferrer" v-if="ole.qrcode" @click="openQrcode">
            {{ole.title}}
        </a>
        <a :href="ole.url" target="_blank" :title="ole.title" rel="noopener noreferrer" v-else @click="openQrcode">
            {{ole.title}}
        </a>
        <div class="bg" v-if="isShow" @click="isShow = false"></div>
        <div class="qrcode" v-if="ole.qrcode && isShow" @click="isShow = false">
            <div class="qrcode_content">
                <div class="qrcode_info"><span>扫码下载</span></div>
                <div class="qrcode_image">
                    <img :src="ole.qrcode" alt="">
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        ole: Object,
    },
    data() {
        return {
            isShow: false
        }
    },
    methods: {
        openQrcode() {
            this.isShow = true
        }
    },
    mounted() {
    }
}
</script>

<style lang="scss" scoped>
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
    .bg {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
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
</style>