<template>

    <!--  Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle ">
            <h2 class="text-primary mb-0">Đơn hàng của tôi</h2>
        </div>
    </div>
    <!-- * Header -->

    <div id="appCapsule">
        <div class="section mt-1">
            <div class="card">
                <div class="card-body pt-0">

                    <ul class="nav nav-tabs lined" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#overview2" role="tab">
                                Đơn mua
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#cards2" role="tab">
                                Lịch sử mua hàng
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content mt-2">
                        <!-- Tiến độ của đơn mua -->
                        <div class="tab-pane fade show active" id="overview2" role="tabpanel">
                            <template v-for="(value, index) in listOrder" :key="index">
                            <div class="section mb-2">
                                <div class="section-title">Tình trạng đơn hàng: {{ value.ma_don_hang }}</div>
                                    <!-- timeline-->
                                    <div class="timeline">
                                        <div class="item">
                                            <div class="dot bg-primary"></div>
                                            <div class="content">
                                                <h4 class="title">Đang chờ xác nhận</h4>
                                                <div class="text">Your ID has been approved.</div>
                                            </div>
                                        </div>

                                        <div class="item">
                                            <div class="dot"></div>
                                            <div class="content">
                                                <h4 class="title">Đang lấy hàng</h4>
                                                <div class="text">Your ID has been approved.</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="dot bg-info"></div>
                                            <div class="content">
                                                <h4 class="title">Đang giao hàng</h4>
                                                <div class="text">Đơn hàng của bạn đang giao</div>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="dot bg-danger"></div>
                                            <div class="content">
                                                <a href="#" class="item">
                                                    <div class="in">
                                                        <h4 class="title">Đã nhận hàng</h4>
                                                    </div>
                                                </a>

                                                <div class="text">
                                                    Khách hàng đã nhận hàng
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                               
                               
                                <hr>
                            </div>
                        </template>
                        </div>
                        <!-- Tiến độ của đơn mua -->

                        <!-- Lịch sử mua hàng -->
                        <div class="tab-pane fade" id="cards2" role="tabpanel">
                            <template v-for="(value, index) in listHistoryOrder" :key="index">
                                <div class="card mb-2 history-card p-1">
                                    <div class="ce d-flex">
                                        <img v-bind:src="value.hinh_anh" alt="avatar" class="image-history w-35 ">
                                        <div class="text ms-1 w-100">
                                            <div class="text1 d-flex justify-content-between">
                                                <h2 class="truncate flex-grow-1">{{ value.ten_san_pham }}</h2>
                                                <h2 class="text-warning text-nowrap">Hoàn thành</h2>
                                            </div>
                                            <div class="text-end">
                                                <div class=" chu">
                                                    <p>x{{ value.so_luong }}</p>

                                                    <!-- Giá bán -->
                                                    <template v-if="value.id_loai_thanh_toan === 'vnd'">
                                                        <p class="me-0">{{ value.gia_ban }} VNĐ</p>
                                                    </template>
                                                    <template v-else>
                                                        <p>{{ value.gia_ban }} <i class="fa-solid fa-star "></i></p>
                                                    </template>

                                                    <!-- Thành tiền -->
                                                    <template v-if="value.id_loai_thanh_toan === 'vnd'">
                                                        <p>Tổng số tiền: {{ value.thanh_tien }} VNĐ</p>
                                                    </template>
                                                    <template v-else>
                                                        <p>Tổng điểm đổi: {{ value.thanh_tien }} <i
                                                                class="fa-solid fa-star"></i></p>
                                                    </template>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" text-end">
                                        <a href="/shopping">
                                            <button class="btn btn-outline-secondary text-nowrap">Mua lại</button>
                                        </a>
                                    </div>
                                </div>
                            </template>

                        </div>
                        <!-- Lịch sử mua hàng -->

                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- bottom -->
    <BottomNav></BottomNav>

</template>
<script>
import BottomNav from '../../../layout/components/BottomNav.vue';
import img from '../../../assets/img/sample/avatar/avatar3.jpg'

export default {
    name: 'myorder',
    components: {
        BottomNav
    },
    data() {
        return {
            HistoryOrder: {},
            listOrder: [
                {
                    ma_don_hang: "ID....",
                }
            ],
            listHistoryOrder: [
                {
                    hinh_anh: img,
                    ten_san_pham: "Áo thun đen",
                    gia_ban: '150.000',
                    so_luong: 2,
                    thanh_tien: '300.000',
                    id_loai_thanh_toan: "vnd"
                },
                {
                    hinh_anh: img,
                    ten_san_pham: "Hộp túi mù phiên bản địa điểm Đà Nẵng",
                    gia_ban: 150,
                    so_luong: 1,
                    thanh_tien: 150,
                    id_loai_thanh_toan: "diem"
                }
            ]
        }
    },
}
</script>
<style></style>