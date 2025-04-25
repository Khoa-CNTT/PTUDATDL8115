<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/shopping" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">Giỏ hàng</div>

    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">
        <div class="section mt-1 container-cart">
            <!-- Card -->
            <template v-for="(value, index) in card_sp" :key="index">
                <div class="card card-shopping-cart p-1 mb-1">
                    <div class="d-flex justify-content-between">
                        <div class="form-check mb-1 ">
                            <!-- :id="'customCheckb' + index" → tạo id như: customCheckb0, customCheckb1, customCheckb2, ...
                            :for="'customCheckb' + index" → label liên kết đúng checkbox theo index. -->
                            <input v-model="value.selected" type="checkbox" class="form-check-input"
                                :id="'customCheckb' + index">
                            <label class="form-check-label" :for="'customCheckb' + index">Chọn sản phẩm</label>
                        </div>
                        <i class="fa-solid fa-xmark x-cart" type="button" @click="removeSanPham(index)"></i>
                    </div>
                    <a href="#" class="text-black">
                        <div class="product-cart">
                            <div class="d-flex gap-2">
                                <img v-bind:src="value.hinh_anh" alt="" class="img-product-cart" />
                                <div class="info-product-cart">
                                    <p> {{ value.ten_san_pham }} </p>
                                    <div class="text-cart">
                                        <span class="price-cart">
                                            <p class="price-cart-text">Đổi: {{ value.diem }}<i
                                                    class="fa-solid fa-star text-warning"></i></p>
                                            <p class="price-cart-text">Mua: {{ value.gia }} VNĐ</p>
                                        </span>
                                        <div class="quality-cart d-flex justify-content-between align-items-center">
                                            <button class="btn-minus-cart" @click="decreaseQuantity(index)">
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                            <span class="text-quality-cart">{{ value.so_luong }}</span>
                                            <button class="btn-plus-cart" @click="increaseQuantity(index)">
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </template>
            <!-- Card -->

        </div>

    </div>

    <div class="d-flex flex-column align-items-center">
        <div class="card show-price-cart">
            <div class="card-body">
                <span class="confirm-text">
                    <p>Tổng điểm đổi: {{ getTongDiem() }}<i class="fa-solid fa-star text-warning"></i></p>
                    <p>Tổng tiền hàng: {{ getTongTien() }} VNĐ</p>
                </span>
                <div class="cart-btn-pay">
                    <a href="/thanh-toan">
                        <button class="btn btn-cart-change">Đổi<i class="fa-solid fa-arrows-rotate"></i></button>
                        <button class="btn btn-cart-buy ms-2">Mua<i class="fa-regular fa-money-bill-1"></i></button>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <!-- * Content -->

</template>
<script>
import blindbox from '../../../assets/img/product/1_blind_box.jpg';
// import shirt from '../../../assets/img/product/shirt.jpg';
import pin from '../../../assets/img/product/pin_ghim.jpg'
import khan from '../../../assets/img/product/khan_choang_co.jpg'
import jacket from '../../..//assets/img/product/jacket.jpg'
// import setBlindBox from '../../../assets/img/product/set_blind_box.jpg'
export default {

    data() {
        return {
            card_sp: [
                {
                    id: '1',
                    hinh_anh: jacket,
                    ten_san_pham: 'Áo khoác',
                    diem: '350',
                    gia: '350000',
                    so_luong: 1,
                    selected: false,
                },
                {
                    id: '2',
                    hinh_anh: blindbox,
                    ten_san_pham: 'Hộp mù phiên bản địa điểm nổi tiếng Đà Nẵng (1 hộp ngẫu nhiên)',
                    diem: '150',
                    gia: '150000',
                    so_luong: 1,
                    selected: false,
                },
                {
                    id: '3',
                    hinh_anh: pin,
                    ten_san_pham: 'Ghim cài in hình Đà Nẵng kỷ niệm 50 năm giải phóng (29/3/1975 - 29/3/2025)',
                    diem: '50',
                    gia: '50000',
                    so_luong: 1,
                    selected: false,
                },
                {
                    id: '4',
                    hinh_anh: khan,
                    ten_san_pham: 'Khăn choàng cổ',
                    diem: '200',
                    gia: '200000',
                    so_luong: 1,
                    selected: false,
                },
            ],
            updateQuality: {},
            delSanPham: {}
        }
    },
    methods: {
        increaseQuantity(index) {
            this.card_sp[index].so_luong++;
        },
        decreaseQuantity(index) {
            if (this.card_sp[index].so_luong > 1) {
                this.card_sp[index].so_luong--;
            }
        },
        getTongDiem() {
            return this.card_sp.reduce((tong, sp) => {
                if (sp.selected) {
                    return tong + Number(sp.diem) * sp.so_luong;
                }
                return tong;
            }, 0);
        },
        getTongTien() {
            return this.card_sp.reduce((tong, sp) => {
                if (sp.selected) {
                    return tong + Number(sp.gia) * sp.so_luong;
                }
                return tong;
            }, 0);
        },
        removeSanPham(index) {
            this.card_sp.splice(index, 1); // xóa phần tử tại index
        }
    }
}
</script>
<style></style>