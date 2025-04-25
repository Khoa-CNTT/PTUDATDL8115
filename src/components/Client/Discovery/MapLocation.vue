<template>
    <div class="container-location">
        <div class="map-location"></div>
        <div class="frame-location-in-map">
                <div class="card card-location">
                    <div class="img-name-location">
                        <img :src="info_location.hinh_anh" alt="" class="img-location">
                        <span class="container-info-location">
                            <p class="name-location">{{ info_location.ten_dia_diem }}</p>
                            <p class="address-location"><i class="fa-solid fa-map-pin me-1"></i>{{ info_location.dia_chi }}</p>
                        </span>
                        <div class="rate-btn">
                            <p class="rate">{{ info_location.so_sao_ }}<i class="fa-solid fa-star text-warning"></i></p>
                            <div class="container-btn-location-map">
                                <router-link to="/kham-pha">
                                    <div class="btn btn-back-location"><i class="fa-solid fa-arrow-left"></i></div>
                                </router-link>
                                <div class="btn btn-route"><i class="fa-solid fa-route"></i></div>
                                <div class="btn btn-rate" data-bs-toggle="modal" data-bs-target="#actionSheetInset"><i
                                        class="fa-solid fa-star"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>

        <!-- Default Action Sheet Inset -->
        <div class="modal fade action-sheet inset" id="actionSheetInset" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Đánh giá</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container-rate">
                            <span v-for="n in 5" :key="n" @click="selectRating(n)">
                                <i :class="n <= selectedRating ? 'fa-solid fa-star text-warning' : 'fa-regular fa-star'"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Default Action Sheet Inset -->

    </div>
</template>
<script>
import img from '../../../assets/img/location/ban_sung.jpg'
export default {
    data() {
        return {
            
                info_location: {
                    id: 1,
                    hinh_anh: img,
                    ten_dia_diem: "CLB bắn súng thể thao Đà Nẵng DANA SNIPER",
                    dia_chi: "42 Phan Đình Phùng, Hải Châu, Đà Nẵng",
                    so_sao_: 4.9
                },
           
            selectedRating: 0, // số sao được chọn
        }
    },
    methods: {
        selectRating(stars) {
            this.selectedRating = stars;
            alert(" bạn đã đánh giá: " + stars + " sao")

        }
    }
} 
</script>
<style></style>