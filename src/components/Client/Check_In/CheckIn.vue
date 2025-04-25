<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Check-in
        </div>
    </div>
    <!-- * Header -->

    <div class="wrapper wrapper-check-in">
        <div class=" check-in">
            <!-- muted hidden tắt tiếng -->
            <video ref="video" autoplay playsinline webkit-playsinline muted hidden></video>
            <!-- width="450" height="450" đặt trong canvas là độ phân giải của ảnh -->
            <canvas ref="canvas" class="bg-white frame-take-picture" width="450" height="450"></canvas>
            <div class="container-btn-take-photo">
                <div class="take-photo">
                    <!-- @click="takePicture" -->
                    <a href="/show-info"><button class="bg-white btn-tp"></button></a>
                </div>
                <button class="btn btn-flip-camera"><i class="fa-solid fa-camera-rotate"></i></button>
            </div>
        </div>
    </div>

    <!-- Bottom Navigation -->
    <!-- <BottomNav></BottomNav> -->

    <!-- * Bottom Navigation -->

</template>
<script >
// import BottomNav from '../../../layout/components/BottomNav.vue';
export default {
//     components: {
//     BottomNav
//   }
}
</script>

<style></style>