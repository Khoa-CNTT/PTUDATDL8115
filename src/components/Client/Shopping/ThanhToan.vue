<template>
    <div id="appCapsule">
        <!-- Header -->
        <div class="appHeader">
            <div class="left">
                <a href="/shopping" class="headerButton goBack">
                    <i class="fa-solid fa-arrow-left" style="font-size: 20px;"></i>
                </a>
            </div>
            <div class="pageTitle text-primary">Thanh toán</div>
        </div>
        <!-- * Header -->

        <!-- Content -->
        <div class="section mt-2">
            <div class="card mb-1 mt-2 p-1 info-nhan-hang">
                <div class="d-flex justify-content-between">
                    <div class="d-flex align-items-center gap-2 mb-0">
                        <h4 class=""><b>Phạm Tấn Minh</b></h4>
                        <p class="mt-1">09437812312</p>
                    </div>
                    <a href="/dia-chi"><i class="fa-regular fa-pen-to-square mt-1"></i></a>
                </div>
                <p class="info-nhan-hang-address">13 Lê Duẩn, Phường Chính Gián, Quận Thanh Khê
                    Thành phố Đà Nẵng.
                </p>
            </div>


        </div>

        <!-- card đơn hàng -->
        <template v-for="(value, index) in orderList.chi_tiet" :key="index">
            <div class="section mt-2">
                <div class="card product mb-2">
                    <div class="d-flex gap-2">
                        <img v-bind:src="value.hinh_anh" alt="" class="img-product" />
                        <div class="info-product">
                            <div class="d-flex flex-column h-100 justify-content-between">
                                <p>{{ value.ten_san_pham }}</p>
                                <p class="mb-1">
                                    <template v-if="orderList.id_loai_thanh_toan === 'tien'">
                                        {{ value.thanh_tien }} VNĐ
                                    </template>
                                    <template v-else>
                                        {{ value.thanh_tien }}
                                        <i class="fa-solid fa-star text-warning"></i>
                                    </template>
                                </p>
                            </div>
                            <span>{{ value.so_luong }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <!-- card đơn hàng -->

        <!-- card loại thanh toán -->
        <!-- <div class="section mt-2">
            <div class="card">
                <div class="card-body">
                    <h3>Phương thức thanh toán</h3>
                    <div>
                        <div class="d-flex justify-content-between">
                            <label>Đổi điểm</label> <input class="text-end" type="radio" name="payment" value="points"
                                checked>
                        </div>
                        <div class="d-flex justify-content-between">
                            <label>Thanh toán khi nhận hàng</label> <input type="radio" value="cod">
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <!-- card thanh toán -->

        <!-- card chi tiết thanh toán -->
        <div class="section mt-2">
            <div class="card">
                <div class="card-body">
                    <h3>Chi tiết thanh toán</h3>
                    <div>
                        <div class="d-flex justify-content-between">
                            <label>Tổng tiền hàng</label>
                            <label>150.000VND</label>
                        </div>
                        <div class="d-flex justify-content-between">
                            <label>Tiền vận chuyển</label>
                            <label>Miễn phí</label>
                        </div>
                        <div class="d-flex justify-content-between">
                            <label>Tổng số tiền</label>
                            <label>150.000VND</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- card chi tiết thanh toán -->

        <!-- nút -->
        <div class="section">
            <a href="/shopping">
                <button class="btn"
                style="background-color: #ff772a; color: white; position: fixed; right: 1.5rem; bottom:1rem;">Đặt
                hàng</button>
            </a>
        </div>
    </div>
</template>
<script>
import blindbox from '../../../assets/img/product/1_blind_box.jpg';
// import shirt from '../../../assets/img/product/shirt.jpg';
import pin from '../../../assets/img/product/pin_ghim.jpg'
// import khan from '../../../assets/img/product/khan_choang_co.jpg'
// import jacket from '../../..//assets/img/product/jacket.jpg'
// import setBlindBox from '../../../assets/img/product/set_blind_box.jpg'

export default {
    data() {
        return {
            orderList: {
                id: 1,
                id_nguoi_dung: 101,
                id_loai_thanh_toan: "tien",         // Hoặc 'diem'
                tong_tien: 300000,
                chi_tiet: [
                    {
                        "ten_san_pham": "Áo thun",
                        "hinh_anh": blindbox,
                        "thanh_tien": 150000,
                        "so_luong": 1
                    },
                    {
                        "ten_san_pham": "Hộp mù ",
                        "hinh_anh": pin,
                        "thanh_tien": 150000,
                        "so_luong": 1
                    }
                ]
            }
        }
    },
}
</script>
<style></style>