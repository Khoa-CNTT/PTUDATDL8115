<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Sổ check-in
        </div>
        <div class="right">
            <a href="#" class="headerButton">
                <i class="fa-solid fa-circle-info" data-bs-toggle="modal" data-bs-target="#PanelRight"></i>
            </a>
        </div>
    </div>

    <!-- Panel Right -->
    <div class="modal fade panelbox panelbox-right" id="PanelRight" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">Thể lệ</h4>
                    <a href="#" data-bs-dismiss="modal"><i class="fa-solid fa-xmark"></i></a>
                </div>
                <div class="modal-body">
                    Panel Body
                </div>
            </div>
        </div>
    </div>
    <!-- * Panel Right -->

    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">
        <div class="section tab-content mt-2 mb-2">
            <div class="row">

                <!-- Column Left -->
                <div class="col-6">
                    <div class="show-point mb-2">
                        <p class="text-point mb-0">Điểm tích lũy: 9999<i class="fa-solid fa-star ms-1 text-warning"></i>
                        </p>
                    </div>
                    <template v-for="(value, index) in columnLeft" :key="'left' + index">
                        <router-link to="/show-info">
                            <div class="card card-check-in mb-2">
                                <img v-bind:src="value.hinh_anh" alt="" class="card-img">
                                <div class="card-img-overlay body-card-check-in">
                                    <i v-if="value.tinh_trang === 1" class="fa-solid fa-bookmark text-warning icon-bookmark1"></i>
                                    <i v-else class="fa-regular fa-bookmark text-warning icon-bookmark1"></i>
                                    <p class="text-light text-card-check-in">{{ value.ten_dia_diem }}</p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                    
                </div>
                <!-- Column Right -->
                <div class="col-6">
                    <template v-for="(value, index) in columnRight" :key="'right' + index">
                        <router-link to="/show-info">
                            <div class="card card-check-in mb-2">
                                <img v-bind:src="value.hinh_anh" alt="" class="card-img">
                                <div class="card-img-overlay body-card-check-in">
                                    <i v-if="value.tinh_trang === 1" class="fa-solid fa-bookmark text-warning icon-bookmark"></i>
                                    <i v-else class="fa-regular fa-bookmark text-warning icon-bookmark"></i>
                                    <p class="text-light text-card-check-in">{{ value.ten_dia_diem }}</p>
                                </div>
                            </div>
                        </router-link>
                    </template>
                </div>
            </div>
        </div>
    </div>
    <!-- Content -->


    <!-- Bottom Navigation -->
    <!-- <BottomNav /> -->
</template>
<script>
// import BottomNav from '../../../layout/components/BottomNav.vue';

export default {
    // name: 'collectionCheckIn',
    // components: {
    //     BottomNav
    // },
    computed: {
        columnLeft() {
            return this.collectionCheckInList.filter((_, i) => i%2 === 0)
        },
        columnRight() {
            return this.collectionCheckInList.filter((_, i) => i%2 !== 0)
        }
    },
    data() {
        return {
            collectionCI: {
                id: '1',
                ten_dia_diem: '',
                hinh_anh: '',
            },
            collectionCheckInList: [
                {
                    id: '1',
                    ten_dia_diem: 'Hải Đăng Tiên Sa',
                    hinh_anh: 'https://placehold.co/450',
                    tinh_trang: 1
                },
                {
                    id: '2',
                    ten_dia_diem: 'Đèo Hải Vân',
                    hinh_anh: 'https://placehold.co/450',
                    tinh_trang: 0
                },
                {
                    id: '3',
                    ten_dia_diem: 'Chùa Linh Ứng',
                    hinh_anh: 'https://placehold.co/450',
                    tinh_trang: 1
                },

            ]
        }
    },
}
</script>
<style></style>