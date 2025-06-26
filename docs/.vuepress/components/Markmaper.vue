<template>
    <div class="iframe-container" @mouseleave="handleContainerLeave">
        <iframe ref="iframe" mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true"
            webkitallowfullscreen="true" :src="uri" allowfullscreen="true" @mouseenter="handleIframeEnter">
        </iframe>
        <div class="mask" v-show="showMask" @click="hideMask">
            <div class="tip">点击导图区域激活，鼠标滚动可放大缩小</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showMask: true,
            isMouseInIframe: false,
            inactivityTimer: null,
            inactivityDelay: 10000, // 10秒
            mouseMoveListener: null,
            wheelListener: null
        }
    },
    computed: {
        uri() {
            const val = {
                theme: "dark",
                name: "linkease"
            }
            switch (location?.hostname) {
                case "doc.linkease.com":
                    val.name = "linkease"
                    break
                case "doc.ddnsto.com":
                    val.name = "ddnsto"
                    break
                case "doc.istoreos.com":
                    val.name = "istoreos"
                    break
            }
            const parmas = new URLSearchParams(val)
            return `/markmaper/?${parmas.toString()}`
        }
    },
    methods: {
        hideMask() {
            this.showMask = false
            // 当隐藏遮罩层时，如果鼠标在iframe内，则开始监听活动
            if (this.isMouseInIframe) {
                this.startActivityMonitoring()
            }
        },
        handleIframeEnter() {
            this.isMouseInIframe = true
            // 鼠标进入iframe时，如果遮罩层已隐藏，则开始监听活动
            if (!this.showMask) {
                this.startActivityMonitoring()
            }
        },
        handleContainerLeave() {
            // 鼠标离开整个容器时显示遮罩层
            this.showMask = true
            this.stopActivityMonitoring()
        },
        startActivityMonitoring() {
            // 先停止之前的监听
            this.stopActivityMonitoring()

            // 获取iframe的contentWindow
            const iframeWindow = this.$refs.iframe.contentWindow

            // 定义事件处理器
            const activityHandler = () => {
                this.resetInactivityTimer()
            }

            // 添加事件监听
            this.mouseMoveListener = activityHandler
            this.wheelListener = activityHandler

            // 使用try-catch防止跨域问题
            try {
                iframeWindow.addEventListener('mousemove', this.mouseMoveListener)
                iframeWindow.addEventListener('wheel', this.wheelListener)
            } catch (e) {
                console.warn('Could not add event listeners to iframe due to cross-origin policy')
            }

            // 开始计时
            this.startInactivityTimer()
        },
        stopActivityMonitoring() {
            // 清除计时器
            this.clearInactivityTimer()

            // 移除事件监听
            if (this.$refs.iframe && this.$refs.iframe.contentWindow) {
                try {
                    if (this.mouseMoveListener) {
                        this.$refs.iframe.contentWindow.removeEventListener('mousemove', this.mouseMoveListener)
                    }
                    if (this.wheelListener) {
                        this.$refs.iframe.contentWindow.removeEventListener('wheel', this.wheelListener)
                    }
                } catch (e) {
                    console.warn('Could not remove event listeners from iframe due to cross-origin policy')
                }
            }

            this.mouseMoveListener = null
            this.wheelListener = null
        },
        startInactivityTimer() {
            this.clearInactivityTimer()
            this.inactivityTimer = setTimeout(() => {
                this.showMask = true
                this.stopActivityMonitoring()
            }, this.inactivityDelay)
        },
        resetInactivityTimer() {
            this.clearInactivityTimer()
            this.startInactivityTimer()
        },
        clearInactivityTimer() {
            if (this.inactivityTimer) {
                clearTimeout(this.inactivityTimer)
                this.inactivityTimer = null
            }
        },
        handleIframeLeave() {
            this.isMouseInIframe = false
            this.stopActivityMonitoring()
            this.showMask = true
        }
    },
    beforeDestroy() {
        this.stopActivityMonitoring()
    }
}
</script>
<style lang="scss" scoped>
.iframe-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;

    iframe {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        border: none;
        background-color: transparent;
        display: block;
    }
    .mask {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
    .tip {
        position: absolute;
        top: 0;
        right: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 14px;
        background: #30313a;
        border-radius: 4px;
    }
}

@media (max-width: 768px) {
  .mask {
    display: none !important;
  }
}
</style>