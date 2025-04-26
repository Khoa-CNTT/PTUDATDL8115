<template>
    <router-view></router-view>
    <BottomNav></BottomNav>
    <IconTexting></IconTexting>
</template>
<script>

import "../../assets/js/lib/bootstrap.bundle.min.js";
import "../../assets/js/plugins/splide/splide.min.js";
import "../../assets/js/base.js";
import BottomNav from "../components/BottomNav.vue";
import IconTexting from "../components/IconTexting.vue";

export default {
    name: '#app',
    components: {
        BottomNav,
        IconTexting
    }
}
</script>
<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css");
@import "../../assets/css/main.css";
@import '../../assets/css/a.css';
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css")
</style>