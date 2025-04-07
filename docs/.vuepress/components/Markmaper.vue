<template>
    <div class="iframe-container">
        <iframe mozallowfullscreen="true" msallowfullscreen="true" oallowfullscreen="true" webkitallowfullscreen="true"
            :src="uri" allowfullscreen="true">
        </iframe>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
}
</style>