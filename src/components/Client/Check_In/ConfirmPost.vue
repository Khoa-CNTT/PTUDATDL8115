<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div class="wrapper wrapper-check-in">
        <div class="confirm-post">
            <img v-bind:src="img.hinh_anh" class="frame-take-picture" />
            <input   type="text" class="input-feeling" placeholder="Cảm nghĩ.....">

            <div class="container-btn-take-photo">
                <div class="take-photo">
                    <a href="/post">
                        <div>
                            <i class="fa-regular fa-paper-plane btn-post-confirm"></i>
                        </div>
                    </a>
                </div>
                <a href="/" class="btn btn-flip-camera"><i class="fa-regular fa-circle-xmark"></i></a>
            </div>
        </div>
    </div>
    <!-- Content -->

</template>
<script>
export default {
    data() {
        return {
            img: {
                hinh_anh: "https://placehold.co/500"
            }
        }
    },
}
</script>
<style></style>