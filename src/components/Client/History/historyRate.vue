<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Lịch sử đánh giá
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">
        <div class="section mt-1">
           <template v-for="(value, index) in listHistoryRate" :key="index">
            <div class="card mb-2">
                <div class="card-body history-rate d-flex gap-2 ">
                    <div><img v-bind:src="value.hinh_anh" alt="" class="img-history-rate"></div>
                    <div class="container-history-rate">
                        <p class="title-history-rate">{{ value.ten_dia_diem }}</p>
                        <p class="show-rate text-nowrap">
                            <i v-for="n in 5" :key="n" class="fa-star icon-history-rate" :class="n <= value.so_sao ? 'fa-solid' : 'fa-regular'"></i>
                        </p>
                    </div>
                </div>
            </div>
           </template>
        </div>
    </div>
    <!-- * Content -->
</template>
<script>
export default {
    data() {
        return {
            listHistoryRate: [
                {
                    hinh_anh: "https://placehold.co/500",
                    ten_dia_diem: 'Tên địa điểm 1 ',
                    so_sao: 4
                },
                {
                    hinh_anh: "https://placehold.co/500",
                    ten_dia_diem: 'Tên địa điểm 2',
                    so_sao: 5
                },
                {
                    hinh_anh: "https://placehold.co/500",
                    ten_dia_diem: 'Tên địa điểm 3',
                    so_sao: 3
                }
            ]
        }
    },
}
</script>
<style>
    
</style>