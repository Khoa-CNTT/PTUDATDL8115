<template>
    <div class="appBottomMenu">
        <router-link to="/" class="item" exact exact-active-class="active">
            <div class="col">
                <i class="fa-solid fa-house"></i>
                <strong>Trang chủ</strong>
            </div>
        </router-link>
        <router-link to="/kham-pha" class="item" exact exact-active-class="active">
            <div class="col">
                <i class="fa-solid fa-map-location-dot"></i>
                <strong>Khám phá</strong>
            </div>
        </router-link>
        <router-link to="/check-in" class="item" exact exact-active-class="active">
            <div class="col">
                <i class="fa-solid fa-camera"></i>
                <strong>Check-in</strong>
            </div>
        </router-link>
        <router-link to="/post" class="item" exact exact-active-class="active">
            <div class="col">
                <i class="fa-solid fa-image"></i>
                <strong>Bài viết</strong>
            </div>
        </router-link> 
        <router-link to="/shopping" class="item" exact exact-active-class="active">
            <div class="col">
                <i class="fa-solid fa-store"></i>
                <strong>Cửa hàng</strong>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    mounted() {
       
    }
}
</script>
<style></style>