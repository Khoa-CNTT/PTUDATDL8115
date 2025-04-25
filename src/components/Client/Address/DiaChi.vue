<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Địa chỉ nhận hàng
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">
        <div class="section mt-1">
            <div class="section-title">Địa chỉ</div>

            <div class="card">
                <div class="card-body">
                    <template v-for="(value, index) in listAddress" :key="index">
                        <div class="d-flex mb-2">
                            <div class="me-2">
                                <input class="form-check-input" type="radio" name="selectedAddress"
                                    :id="'address' + index" :value="index" v-model="selectedAddressIndex" />
                                <label class="form-check-label" :for="'address' + index">
                                </label>
                            </div>

                            <!-- Địa chỉ hiển thị, không liên quan đến radio -->
                            <div class="address" 
                                @click="Object.assign(capnhat_diachi, value), Object.assign(xoa_DiaChi, index)">
                                <div class="d-flex justify-content-between">
                                    <h3>Địa Chỉ {{ index + 1 }}</h3>
                                    <div>
                                        <button class="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#doichitiet">Sửa</button>
                                    </div>
                                </div>
                                <small>{{ value.ten_nguoi_nhan }}</small><br>
                                <small>{{ value.so_dien_thoai }}</small><br>
                                <small>{{ value.dia_chi }}</small>
                            </div>

                        </div>
                        <hr />
                    </template>



                    <div class="d-flex align-items-center justify-content-center add-address" data-bs-toggle="modal"
                        data-bs-target="#actionSheetForm">
                        <i class="fa-solid fa-circle-plus me-1 icon-add-address"></i>
                        <div class="">Thêm địa chỉ mới</div>
                    </div>


                    <!-- Form Action Sheet thêm địa chỉ nhận hàng -->
                    <div class="modal fade action-sheet" id="actionSheetForm" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Thêm địa chỉ nhận hàng</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="action-sheet-content">
                                        <form>
                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label" for="text4b">Tên người nhận</label>
                                                    <input type="text" v-model="them_diachi.ten_nguoi_nhan"
                                                        class="form-control" id="text4b"
                                                        placeholder="Nhập tên người nhận">
                                                </div>
                                            </div>

                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label" for="phone4b">Số điện thoại người nhận</label>
                                                    <input type="number" v-model="them_diachi.so_dien_thoai"
                                                        class="form-control" id="phone4b"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>

                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label" for="textarea4b">Địa chỉ</label>
                                                    <textarea v-model="them_diachi.dia_chi" id="textarea4b" rows="2"
                                                        class="form-control" placeholder="Nhập địa chỉ"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group basic">
                                                <button type="button" class="btn btn-primary btn-block btn-lg"
                                                    data-bs-dismiss="modal" @click="themDiaChi()">Thêm
                                                    địa chỉ</button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Form Action Sheet đổi chi tiết -->
                    <div class="modal fade action-sheet" id="doichitiet" tabindex="-1" role="dialog">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Sửa thông tin địa chỉ nhận hàng</h5>
                                </div>
                                <div class="modal-body">
                                    <div class="action-sheet-content">
                                        <form>
                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label">Tên người nhận</label>
                                                    <input type="text" class="form-control"
                                                        v-model="capnhat_diachi.ten_nguoi_nhan"
                                                        placeholder="Nhập tên người nhận">
                                                </div>
                                            </div>

                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label">Số điện thoại người nhận</label>
                                                    <input type="tel" class="form-control"
                                                        v-model="capnhat_diachi.so_dien_thoai"
                                                        placeholder="Nhập số điện thoại">
                                                </div>
                                            </div>

                                            <div class="form-group boxed">
                                                <div class="input-wrapper">
                                                    <label class="label">Địa chỉ</label>
                                                    <textarea rows="2" class="form-control"
                                                        v-model="capnhat_diachi.dia_chi"
                                                        placeholder="Nhập địa chỉ"></textarea>
                                                </div>
                                            </div>

                                            <div class="form-group basic d-flex">
                                                <button type="button" class="btn btn-primary w-50"
                                                    data-bs-dismiss="modal" @click="capNhatDiaChi()">Xác nhận</button>
                                                <button type="button" class="btn btn-danger w-50 ms-2"
                                                    data-bs-dismiss="modal" @click="xoaDiaChi()">Xóa</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- * Form Action Sheet thay đổi chi tiết nhận hàng -->
                </div>
            </div>

        </div>
    </div>
    <!-- * Content -->
</template>
<script>

export default {
    data() {
        return {
            selectedAddressIndex: null,
            index_diachi_hientai: null,
            them_diachi: {
                id: "",
                id_nguoi_dung: "",
                ten_nguoi_nhan: "",
                dia_chi: "",
                so_dien_thoai: "",
                tinh_trang: "",
            },
            listAddress: [
                {
                    id: 1,
                    ten_nguoi_nhan: "Phạm Tấn Minh",
                    so_dien_thoai: "09437812312",
                    dia_chi: "13 Lê Duẩn, Phường Chính Gián, Quận Thanh Khê, Thành phố Đà Nẵng.",
                },
                {
                    id: 2,
                    ten_nguoi_nhan: "Phạm Tấn Minh",
                    so_dien_thoai: "09437812312",
                    dia_chi: "13 Lê Duẩn, Phường Chính Gián, Quận Thanh Khê, Thành phố Đà Nẵng.",
                },
                {
                    id: 3,
                    ten_nguoi_nhan: "Phạm Tấn Minh",
                    so_dien_thoai: "09437812312",
                    dia_chi: "13 Lê Duẩn, Phường Chính Gián, Quận Thanh Khê, Thành phố Đà Nẵng.",
                },
            ],
            capnhat_diachi: {},
            xoa_DiaChi: {},
        }
    },
    computed: {
        selectedAddress() {
            return this.listAddress[this.selectedAddressIndex];
        }
    },
    methods: {
        xoaDiaChi(pos) {
            this.listAddress.splice(pos, 1);
        },

        themDiaChi() {
            this.listAddress.push(this.them_diachi);
            this.themDiaChi = {};
            this.them_diachi = {
                id: "",
                id_nguoi_dung: "",
                ten_nguoi_nhan: "",
                dia_chi: "",
                so_dien_thoai: "",
                tinh_trang: "",
            };

        },
        capNhatDiaChi() {

        }
        // loadData() {
        //     axios
        //         .get("http://127.0.0.1:8000/api/dia-chi/data")
        //         .then((res) => {
        //             this.listAddress = res.data.data;
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        // },
        // themDiaChi() {
        //     axios
        //         .post("http://127.0.0.1:8000/api/dia-chi/create", this.them_diachi)
        //         .then((res) => {
        //             if (res.data.status) {
        //                 this.listAddress.push(this.them_diachi);
    }
}
</script>