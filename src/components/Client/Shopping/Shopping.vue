<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </div>
        <div class="pageTitle">Cửa hàng</div>
        <div class="right">
            <a href="/shopping-cart" class="headerButton">
                <i class="fa-solid fa-bag-shopping"></i>
                <span class="badge badge-danger">5</span>
            </a>
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">
        <div class="section mt-2">
            <div class="section-title">Sản phẩm</div>
            <template v-for="(value, index) in card_san_pham" :key="index">
                <a href="#" class="text-black" data-bs-toggle="modal" data-bs-target="#ModalBasic"
                    @click="showProductDetail(value)">
                    <div class="card product mb-2">
                        <div class="d-flex gap-3">
                            <img v-bind:src="value.hinh_san_pham" alt="" class="img-product" />
                            <div class="info-product">
                                <p>
                                    {{ value.ten_san_pham }}
                                </p>
                                <span> {{ value.diem_san_pham }} <i class="fa-solid fa-star text-warning"></i> / {{
                                    value.gia_san_pham }}
                                </span>
                            </div>
                        </div>
                    </div>
                </a>
            </template>
        </div>

        <!-- Modal chi tiết sản phẩm -->
        <div class="modal fade modalbox" id="ModalBasic" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Chi tiết sản phẩm</h5>
                        <a href="#" data-bs-dismiss="modal">Close</a>
                    </div>
                    <div class="modal-body modal-body-detail">
                        <div class="wrapper container-detail">
                            <div class="card detail-product">
                                <img v-bind:src="selectedProduct.hinh_san_pham" alt="" class="img-detail-product" />

                                <div class="theme-detail-wrapper">
                                    <svg class="theme-detail" viewBox="0 0 390 415" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd"
                                            d="M0 0H390V365V415C390 387.386 367.614 365 340 365H310H50C22.3857 365 0 342.614 0 315V0Z"
                                            fill="#273c75" />
                                    </svg>

                                    <div class="body-info-product">
                                        <div class="text-detail">
                                            <p class="text-white title-product">{{ selectedProduct.ten_san_pham }}</p>
                                            <p class="text-product text-white">
                                                Đây là mô tả cho sản phẩm: {{ selectedProduct.ten_san_pham }}.
                                            </p>
                                            <div class="price-product">
                                                <p>Đổi: {{ selectedProduct.diem_san_pham }} <i
                                                        class="fa-solid fa-star text-warning"></i></p>
                                                <p>Giá bán: {{ selectedProduct.gia_san_pham }}</p>
                                            </div>
                                        </div>
                                        <div class="cover-container-btn">
                                            <div class="container-btn">
                                                <button @click="addCart()" class="btn-add-cart">
                                                    <i class="fa-solid fa-cart-plus"></i>
                                                </button>
                                                <div class="quality d-flex justify-content-between align-items-center">
                                                    <button class="btn-minus" @click="decreaseQuantity">
                                                        <i class="fa-solid fa-minus"></i>
                                                    </button>
                                                    <span class="text-quality">{{ selectedProduct.quantity }}</span>
                                                    <button class="btn-plus" @click="increaseQuantity">
                                                        <i class="fa-solid fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="container-btn-pay">
                                    <a href="/thanh-toan" class="w-100" style="margin-left: 9%;">
                                        <button class="btn-change btn btn-outline-primary">
                                            Đổi quà<i class="fa-solid fa-arrows-rotate"></i>
                                        </button>
                                    </a>
                                    <a href="/thanh-toan" class="w-100" style="margin-left: 9%;">
                                        <button class="btn-buy btn btn-primary">
                                            Mua <i class="fa-solid fa-money-check-dollar"></i>
                                        </button>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- * Content -->

    <!-- Bottom Navigation -->
    <BottomNav />
    <!-- * Bottom Navigation -->
</template>
<script>
import BottomNav from '../../../layout/components/BottomNav.vue';
import blindbox from '../../../assets/img/product/1_blind_box.jpg';
import shirt from '../../../assets/img/product/shirt.jpg';
import pin from '../../../assets/img/product/pin_ghim.jpg'
import khan from '../../../assets/img/product/khan_choang_co.jpg'
import jacket from '../../..//assets/img/product/jacket.jpg'
import setBlindBox from '../../../assets/img/product/set_blind_box.jpg'

export default {
    name: 'shopping',
    components: {
        BottomNav
    },
    data() {
        return {
            selectedProduct: {},
            card_san_pham: [
                {
                    id: '1',
                    hinh_san_pham: blindbox,
                    ten_san_pham: 'Hộp mù phiên bản địa điểm nổi tiếng Đà Nẵng (1 hộp ngẫu nhiên)',
                    diem_san_pham: '150',
                    gia_san_pham: '150.000 VNĐ',
                    quantity: 1,
                },
                {
                    id: '2',
                    hinh_san_pham: shirt,
                    ten_san_pham: 'Áo thun đen',
                    diem_san_pham: '150',
                    gia_san_pham: '150.000 VNĐ',
                    quantity: 1,
                },
                {
                    id: '3',
                    hinh_san_pham: pin,
                    ten_san_pham: 'Ghim cài in hình Đà Nẵng kỷ niệm 50 năm giải phóng (29/3/1975 - 29/3/2025)',
                    diem_san_pham: '50',
                    gia_san_pham: '50.000 VNĐ',
                    quantity: 1,
                },
                {
                    id: '4',
                    hinh_san_pham: khan,
                    ten_san_pham: 'Khăn choàng cổ',
                    diem_san_pham: '200',
                    gia_san_pham: '200.000 VNĐ',
                    quantity: 1,
                },
                {
                    id: '5',
                    hinh_san_pham: jacket,
                    ten_san_pham: 'Áo khoác',
                    diem_san_pham: '350',
                    gia_san_pham: '350.000 VNĐ',
                    quantity: 1,
                },
                {
                    id: '6',
                    hinh_san_pham: setBlindBox,
                    ten_san_pham: 'Hộp mù phiên bản địa điểm nổi tiếng Đà Nẵng (1 bộ gồm 10 hộp)',
                    diem_san_pham: '1000',
                    gia_san_pham: '1.000.000 VNĐ',
                    quantity: 1,
                },
            ],

        }

    },
    methods: {
        showProductDetail(product) {
            // Dùng Object.assign để clone và giữ reactivity
            this.selectedProduct = { ...product };
        },
        increaseQuantity() {
            this.selectedProduct.quantity++;
            // this.sendQuantityUpdate();
        },
        decreaseQuantity() {
            if (this.selectedProduct.quantity > 1) {
                this.selectedProduct.quantity--;
                // this.sendQuantityUpdate();
            }
        },
        showProductDetail(product) {
            this.selectedProduct = product;
            this.quantity = 1; // reset khi mở sản phẩm mới
        },
        addCart() {
            alert("Đã thêm vào giỏ hàng")
        }
    }
};
</script>
<style></style>