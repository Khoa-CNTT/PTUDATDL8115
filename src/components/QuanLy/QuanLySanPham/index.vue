<template>
    <div class="row">
        <div class="card">
            <div class="card-header" style="padding: 20px;">
                <div>
                    <h2>Quản lý sản phẩm</h2>
                </div>
            </div>
            <div class="card-body">
                <!-- Tiêu đề -->
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input type="text" class="form-control ps-5 radius-30 search" placeholder="Tìm kiếm" id="search"
                            v-model="searchTerm">
                        <span class="position-absolute top-50 product-show translate-middle-y">
                            <i class="bx bx-search"></i>
                        </span>
                    </div>
                    <div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0"
                            data-bs-toggle="modal" data-bs-target="#ModalThemSanPham"><i
                                class="bx bxs-plus-square"></i>Thêm
                            mới sản phẩm</a></div>
                </div>
                <!-- Danh sách sản phẩm -->
                <div class="table-responsive ">
                    <table class="table mb-0 table-hover table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th class="text-center">Mô tả</th>
                                <th class="text-center">Số lượng</th>
                                <th class="text-center">Đơn giá</th>
                                <th class="text-center">Điểm</th>
                                <th class="text-center">Danh mục</th>
                                <th class="text-center">Nhà cung cấp</th>
                                <th class="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_san_pham" :key="index"
                                style="vertical-align: middle;font-size: 16px;">
                                <td class="text-center">
                                    <h6 class="mb-0 font-14">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</h6>
                                </td>
                                <td class="text-center"># {{ value.ma_san_pham }}</td>
                                <td>
                                    <img v-bind:src="value.hinh_anh" class="me-3" alt=""
                                        style="max-width: 60px;max-height: 60px;height: 60px;width: 60px;border-radius: 10px;">{{
                                            value.ten_san_pham }}
                                </td>
                                <td class="align-middle text-center">
                                    <button class="btn text-center" data-bs-toggle="modal"
                                        data-bs-target="#ModalChiTietSP" v-on:click="Object.assign(thongtinSP,value)"><i
                                            class="fa-solid fa-circle-info"></i></button>
                                </td>
                                <td class="text-center">{{ value.so_luong }}</td>
                                <td class="text-center">{{ value.gia }} vnđ</td>
                                <td class="text-center">{{ value.sao }}</td>
                                <td class="text-center">{{ value.danh_muc }}</td>
                                <td class="text-center">{{ value.nha_cung_cap }}</td>
                                <td>
                                    <div class="d-flex order-actions justify-content-center">
                                        <!-- <a href="javascript:;" class="ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalSuaSanPham" @click="chon_san_pham(index)"><i
                                                class='bx bxs-edit'></i></a>
                                        <a href="javascript:;" class="ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalXoaSanPham" @click="prepareDelete(index)"><i
                                                class='bx bxs-trash'></i></a> -->
                                        <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#ModalSuaSanPham">Sửa</button>
                                        <button class="btn btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#ModalXoaSanPham" v-on:click="Object.assign(xoasanpham,value)">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal thêm sản phẩm -->
    <div class="modal fade" id="ModalThemSanPham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="ModalThemSanPham">
                        <h5 class="card-title">Thêm mới sản phẩm</h5>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="font-size: 16px;">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="add_ma_san_pham" class="form-label">Mã sản phẩm</label>
                                    <input type="text" class="form-control" id="add_ma_san_pham"
                                        v-model="san_pham.ma_san_pham" placeholder="Nhập mã sản phẩm">
                                </div>
                                <div class="mb-3">
                                    <label for="add_ten_san_pham" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="add_ten_san_pham"
                                        v-model="san_pham.ten_san_pham" placeholder="Nhập tên sản phẩm">
                                </div>
                                <div class="mb-3">
                                    <label for="add_mo_ta" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="add_mo_ta" rows="3" v-model="san_pham.mo_ta"
                                        placeholder="Nhập mô tả sản phẩm"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Hình ảnh</label>
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" placeholder="Nhập link hình ảnh"
                                            v-model="imageLink">
                                        <button class="btn btn-outline-secondary" type="button" id="uploadButton"
                                            @click="triggerFileInput">
                                            Chọn tệp
                                        </button>
                                    </div>
                                    <input type="file" class="form-control d-none" id="imageFile" @change="uploadImage"
                                        accept="image/*">
                                    <div v-if="imagePreview" class="mt-2">
                                        <img :src="imagePreview" alt="Hình ảnh xem trước"
                                            style="max-width: 150px; max-height: 150px; border-radius: 5px;">
                                    </div>
                                    <div v-else-if="san_pham.hinh_anh" class="mt-2">
                                        <img :src="san_pham.hinh_anh" alt="Hình ảnh hiện tại"
                                            style="max-width: 150px; max-height: 150px; border-radius: 5px;">
                                    </div>
                                    <div v-else class="mt-2">
                                        <span class="text-muted">Chưa có hình ảnh được chọn.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="add_don_gia" class="form-label">Đơn giá</label>
                                    <input type="text" class="form-control" id="add_don_gia" v-model="san_pham.gia"
                                        placeholder="Nhập đơn giá">
                                </div>
                                <div class="mb-3">
                                    <label for="add_so_luong" class="form-label">Số lượng</label>
                                    <input type="number" class="form-control" id="add_so_luong"
                                        v-model="san_pham.so_luong" placeholder="Nhập số lượng">
                                </div>
                                <div class="mb-3">
                                    <label for="add_sao" class="form-label">Điểm</label>
                                    <input type="number" class="form-control" id="add_sao" v-model="san_pham.sao"
                                        placeholder="Nhập điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="add_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="add_danh_muc"
                                        v-model="san_pham.danh_muc" placeholder="Nhập danh mục">
                                </div>
                                <div class="col-12">
                                    <label for="add_nha_cung_cap" class="form-label">Nhà cung cấp</label>
                                    <input type="text" class="form-control" id="add_nha_cung_cap"
                                        v-model="san_pham.nha_cung_cap" placeholder="Nhập nhà cung cấp">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        style="background-color: #FF2C2C; width: 15%;">Huỷ</button>
                    <button type="button" class="btn btn-primary" style="background-color: #58D0C1; width: 15%;"
                        @click="them_san_pham">Tạo sản phẩm mới</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal sửa sản phẩm -->
    <div class="modal fade" id="ModalSuaSanPham" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="ModalSuaSanPhamLabel">
                        <h5 class="card-title">Chỉnh sản phẩm</h5>
                    </h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="edit_ma_san_pham" class="form-label">Mã sản phẩm</label>
                                    <input type="text" class="form-control" id="edit_ma_san_pham"
                                        v-model="san_pham.ma_san_pham" placeholder="Nhập mã sản phẩm" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_ten_san_pham" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="edit_ten_san_pham"
                                        v-model="san_pham.ten_san_pham" placeholder="Nhập tên sản phẩm">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_mo_ta" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="edit_mo_ta" rows="3" v-model="san_pham.mo_ta"
                                        placeholder="Nhập mô tả sản phẩm"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Hình ảnh</label>
                                    <div class="input-group mb-2">
                                        <input type="text" class="form-control" placeholder="Nhập link hình ảnh"
                                            v-model="imageLink">
                                        <button class="btn btn-outline-secondary" type="button" id="uploadButton"
                                            @click="triggerFileInput">
                                            Chọn tệp
                                        </button>
                                    </div>
                                    <input type="file" class="form-control d-none" id="imageFile" @change="uploadImage"
                                        accept="image/*">
                                    <div v-if="imagePreview" class="mt-2">
                                        <img :src="imagePreview" alt="Hình ảnh xem trước"
                                            style="max-width: 150px; max-height: 150px; border-radius: 5px;">
                                    </div>
                                    <div v-else-if="san_pham.hinh_anh" class="mt-2">
                                        <img :src="san_pham.hinh_anh" alt="Hình ảnh hiện tại"
                                            style="max-width: 150px; max-height: 150px; border-radius: 5px;border: 1px solid #000000;">
                                    </div>
                                    <div v-else class="mt-2">
                                        <span class="text-muted">Chưa có hình ảnh được chọn.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="edit_don_gia" class="form-label">Đơn giá</label>
                                    <input type="text" class="form-control" id="edit_don_gia" v-model="san_pham.gia"
                                        placeholder="Nhập đơn giá">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_so_luong" class="form-label">Số lượng</label>
                                    <input type="number" class="form-control" id="edit_so_luong"
                                        v-model="san_pham.so_luong" placeholder="Nhập số lượng">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_sao" class="form-label">Điểm</label>
                                    <input type="number" class="form-control" id="edit_sao" v-model="san_pham.sao"
                                        placeholder="Nhập điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="edit_danh_muc"
                                        v-model="san_pham.danh_muc" placeholder="Nhập danh mục">
                                </div>
                                <div class="col-12">
                                    <label for="edit_nha_cung_cap" class="form-label">Nhà cung cấp</label>
                                    <input type="text" class="form-control" id="edit_nha_cung_cap"
                                        v-model="san_pham.nha_cung_cap" placeholder="Nhập nhà cung cấp">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        style="background-color: #FF2C2C;width: 15%;">Huỷ</button>
                    <button type="button" class="btn btn-primary" style="background-color: #FE9F43;width: 15%;"
                        @click="sua_san_pham">Lưu chỉnh sửa</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xoá sản phẩm -->
    <div class="modal fade" id="ModalXoaSanPham" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="content p-5 px-3 text-center">
                        <span class="fa-stack fa-2x mb-3">
                            <i class="fa-solid fa-2xl fa-circle" style="color: #ffc8c2;"></i>
                            <i class="fa-solid fa-trash-can text-danger fa-stack-1x"></i>
                        </span>
                        <h3 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Xoá sản phẩm</h3>
                        <p class="text-gray-6 mb-0 fs-16">Bạn có chắc chắn muốn xoá sản phẩm này không?</p>
                        <!-- #{{ san_pham.ma_san_pham }} - {{ san_pham.ten_san_pham }} -->
                        <h5 class="mt-3"> {{ xoasanpham.ma_san_pham }} - {{ xoasanpham.ten_san_pham }} </h5>
                        <div class="modal-footer-btn mt-3 d-flex justify-content-center mt-5">
                            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                data-bs-dismiss="modal" style="background-color: #FF2C2C;width: 30%;">Huỷ</button>
                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" v-on:click="xoaSanPham()"
                                style="background-color: #FE9F43;width: 30%;">Đồng ý xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal chi tiết sản phẩm -->
    <div class="modal fade" id="ModalChiTietSP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chi tiết sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p>{{ thongtinSP.mo_ta }}</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            list_san_pham: [
                {
                    hinh_anh: "https://pos.nvncdn.com/f4d87e-8901/ps/20241204_SMAM3J8dpt.jpeg",
                    ten_san_pham: "Áo khoác",
                    sao: 200,
                    danh_muc: "Giải trí",
                    nha_cung_cap: "Puma",
                    mo_ta: "Áo khoác mùa đông chống gió, giữ ấm tốt.",
                    gia: "200.000",
                    so_luong: 10,
                    ma_san_pham: "SP001"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://img.bitas.com.vn/sanpham/ZGOM.20/NAU/lg1.png",
                    ten_san_pham: "Giày thể thao",
                    sao: 150,
                    danh_muc: "Giải trí",
                    nha_cung_cap: "Puma",
                    mo_ta: "Giày thể thao nhẹ, thoáng khí, phù hợp tập luyện.",
                    gia: "350.000",
                    so_luong: 20,
                    ma_san_pham: "SP002"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://kakavietnam.com/wp-content/uploads/2018/03/kk-2070-1.jpg",
                    ten_san_pham: "Balo du lịch",
                    sao: 180,
                    danh_muc: "Giải trí",
                    nha_cung_cap: "Puma",
                    mo_ta: "Balo chống nước, phù hợp cho du lịch và công việc.",
                    gia: "500.000",
                    so_luong: 15,
                    ma_san_pham: "SP003"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_2_1.png",
                    ten_san_pham: "Đồng hồ thông minh",
                    sao: 300,
                    danh_muc: "Giải trí",
                    nha_cung_cap: "Puma",
                    mo_ta: "Đồng hồ thông minh với nhiều tính năng sức khỏe.",
                    gia: "1.200.000",
                    so_luong: 8,
                    ma_san_pham: "SP004"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/x/i/xiaomi_2_1.png",
                    ten_san_pham: "Điện thoại Xiaomi",
                    sao: 350,
                    danh_muc: "Điện tử",
                    nha_cung_cap: "Xiaomi",
                    mo_ta: "Điện thoại thông minh cấu hình mạnh mẽ.",
                    gia: "5.500.000",
                    so_luong: 12,
                    ma_san_pham: "SP005"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://cdn.tgdd.vn/Products/Images/42/251848/samsung-galaxy-tab-s7-fe-wifi-1-600x600.jpg",
                    ten_san_pham: "Máy tính bảng Samsung",
                    sao: 280,
                    danh_muc: "Điện tử",
                    nha_cung_cap: "Samsung",
                    mo_ta: "Máy tính bảng màn hình lớn, pin trâu.",
                    gia: "8.000.000",
                    so_luong: 7,
                    ma_san_pham: "SP006"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://pos.nvncdn.com/f4d87e-8901/ps/20241204_SMAM3J8dpt.jpeg",
                    ten_san_pham: "Áo thun nam",
                    sao: 120,
                    danh_muc: "Thời trang",
                    nha_cung_cap: "Adidas",
                    mo_ta: "Áo thun cotton thoáng mát.",
                    gia: "250.000",
                    so_luong: 30,
                    ma_san_pham: "SP007"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://img.bitas.com.vn/sanpham/ZGOM.20/NAU/lg1.png",
                    ten_san_pham: "Giày sandal nữ",
                    sao: 190,
                    danh_muc: "Thời trang",
                    nha_cung_cap: "Bitas",
                    mo_ta: "Sandal thoải mái đi hàng ngày.",
                    gia: "400.000",
                    so_luong: 25,
                    ma_san_pham: "SP008"   // Mã sản phẩm
                },
                {
                    hinh_anh: "https://kakavietnam.com/wp-content/uploads/2018/03/kk-2070-1.jpg",
                    ten_san_pham: "Túi xách công sở",
                    sao: 220,
                    danh_muc: "Phụ kiện",
                    nha_cung_cap: "Kakavietnam",
                    mo_ta: "Túi da sang trọng cho dân văn phòng.",
                    gia: "700.000",
                    so_luong: 10,
                    ma_san_pham: "SP009"   // Mã sản phẩm
                },
            ],
            san_pham: {
                hinh_anh: "",
                ten_san_pham: "",
                sao: "",
                mo_ta: "",
                gia: "",
                so_luong: "",
                ma_san_pham: "",
                danh_muc: "",
                nha_cung_cap: "",
            },
            searchTerm: '',
            currentPage: 1,
            itemsPerPage: 8,
            danh_muc_can_xoa: null,
            imagePreview: null,
            imageLink: '',

            thongtinSP: {
            },
            xoasanpham: {

            }
        }
    },
    computed: {
        list_danhMucDiaDiem_filter() {
            return this.lists_san_pham.filter((item) =>
                item.ma_san_pham.toLowerCase().includes(this.searchQuery.toLowerCase()),
                item.ten_san_pham.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/san-pham/data")
                .then((res) => {
                    this.lists_san_pham = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/create", this.them_dd)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.lists_san_pham.push(this.them_dd);
                        alert(res.data.message);
                    } else {
                        alert("Thêm sản phẩm thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            this.them_dd = {
                id_dia_diem: "",
                ten_dia_diem: "",
                hinh_anh: "",
                mo_ta: "",
                tinh_trang: 1,
                dia_chi: "",
                toa_do: "",
                danh_muc: "",
            }
        },
        suaSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/update", this.sua_dd)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Cập nhật thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        xoaSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/delete", this.xoa_dd)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa sản phẩm thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
}
</script>
<style></style>
