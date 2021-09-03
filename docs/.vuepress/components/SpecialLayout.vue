<template>
    <div id="home">
        <NavLayout></NavLayout>
        <IndexHome></IndexHome>
        <IndexHomeMobile></IndexHomeMobile>

    </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#home {
    ::v-deep header.navbar {
        background: none;
        border-bottom: none;
        .links {
            background: none;
        }
    }
    ::v-deep header.navbar::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(255, 255, 255, 0.3);
        backdrop-filter: blur(10px);
        // filter: blur(10px);
        z-index: -1;
    }
}
</style>