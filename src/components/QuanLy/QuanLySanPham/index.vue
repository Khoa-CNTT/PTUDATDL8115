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
                                <!-- <th class="text-center">Danh mục</th>
                                <th class="text-center">Nhà cung cấp</th> -->
                                <th class="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in lists_san_pham" :key="index"
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
                                <!-- <td class="text-center">{{ value.danh_muc }}</td>
                                <td class="text-center">{{ value.nha_cung_cap }}</td> -->
                                <td>
                                    <div class="d-flex order-actions justify-content-center">
                                        <!-- <a href="javascript:;" class="ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalSuaSanPham" @click="chon_san_pham(index)"><i
                                                class='bx bxs-edit'></i></a>
                                        <a href="javascript:;" class="ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalXoaSanPham" @click="prepareDelete(index)"><i
                                                class='bx bxs-trash'></i></a> -->
                                        <button class="btn btn-warning me-2" data-bs-toggle="modal"
                                        data-bs-target="#ModalSuaSanPham" v-on:click="Object.assign(sua_sp,value)">Sửa</button>
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
                                            v-model="san_pham.hinh_anh">
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
                                    <input type="text" class="form-control" id="add_don_gia" v-model="san_pham.gia_ban"
                                        placeholder="Nhập đơn giá">
                                </div>
                                <div class="mb-3">
                                    <label for="add_so_luong" class="form-label">Số lượng</label>
                                    <input type="number" class="form-control" id="add_so_luong"
                                        v-model="san_pham.so_luong" placeholder="Nhập số lượng">
                                </div>
                                <div class="mb-3">
                                    <label for="add_sao" class="form-label">Phần trăm tích điểm</label>
                                    <input type="number" class="form-control" id="add_phan_tram_tich_diem" v-model="san_pham.phan_tram_tich_diem"
                                        placeholder="Nhập điểm">
                                </div>
                                <!-- <div class="mb-3">
                                    <label for="add_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="add_danh_muc"
                                        v-model="san_pham.danh_muc" placeholder="Nhập danh mục">
                                </div> -->
                                <div class="col-12">
                                    <label for="add_nha_cung_cap" class="form-label">Nhà cung cấp</label>
                                    <input type="n" class="form-control" id="add_nha_cung_cap"
                                        v-model="san_pham.id_nha_cung_cap" placeholder="Nhập nhà cung cấp">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        style="background-color: #FF2C2C; width: 15%;">Huỷ</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="background-color: #58D0C1; width: 15%;"
                        @click="themSanPham()">Tạo sản phẩm mới</button>
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
                                <!-- <div class="mb-3">
                                    <label for="edit_ma_san_pham" class="form-label">Mã sản phẩm</label>
                                    <input type="text" class="form-control" id="edit_ma_san_pham"
                                        v-model="sua_sp.ma_san_pham" placeholder="Nhập mã sản phẩm" readonly>
                                </div> -->
                                <div class="mb-3">
                                    <label for="edit_ten_san_pham" class="form-label">Tên sản phẩm</label>
                                    <input type="text" class="form-control" id="edit_ten_san_pham"
                                        v-model="sua_sp.ten_san_pham" placeholder="Nhập tên sản phẩm">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_mo_ta" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="edit_mo_ta" rows="3" v-model="sua_sp.mo_ta"
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
                                    <div v-else-if="sua_sp.hinh_anh" class="mt-2">
                                        <img :src="sua_sp.hinh_anh" alt="Hình ảnh hiện tại"
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
                                    <label for="edit_don_gia" class="form-label">Giá bán</label>
                                    <input type="text" class="form-control" id="edit_don_gia" v-model="sua_sp.gia_ban"
                                        placeholder="Nhập đơn giá">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_so_luong" class="form-label">Số lượng</label>
                                    <input type="number" class="form-control" id="edit_so_luong"
                                        v-model="sua_sp.so_luong" placeholder="Nhập số lượng">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_sao" class="form-label">Phần trăm tích điểm</label>
                                    <input type="number" class="form-control" id="edit_phan_tram_tich_diem" v-model="sua_sp.phan_tram_tich_diem"
                                        placeholder="Nhập điểm">
                                </div>
                                <!-- <div class="mb-3">
                                    <label for="edit_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="edit_danh_muc"
                                        v-model="sua_sp.danh_muc" placeholder="Nhập danh mục">
                                </div> -->
                                <div class="col-12">
                                    <label for="edit_nha_cung_cap" class="form-label">Nhà cung cấp</label>
                                    <input type="text" class="form-control" id="edit_nha_cung_cap"
                                        v-model="sua_sp.id_nha_cung_cap" placeholder="Nhập nhà cung cấp">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                        style="background-color: #FF2C2C;width: 15%;">Huỷ</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" style="background-color: #FE9F43;width: 15%;"
                        @click="suaSanPham()">Lưu chỉnh sửa</button>
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
                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3" data-bs-dismiss="modal" v-on:click="xoaSanPham()"
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
import { NotifiSuccess, NotifiError } from '../../../utils/notifi.js'
export default {
    data() {
        return {
            lists_san_pham: [],
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
            sua_sp:{},
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
    mounted() {
        this.loadData();
        
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/san-pham/get-data")
                .then((res) => {
                    this.lists_san_pham = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/create", this.san_pham)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
            this.san_pham = {
                ten_san_pham : '',
                hinh_anh : '',
                mo_ta : '',
                gia_ban : '',
                phan_tram_tich_diem : '',
                id_danh_muc : '',
                so_luong : '',
                id_nha_cung_cap: ''
            }
        },
        suaSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/update", this.sua_sp)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
        xoaSanPham() {
            axios
                .post("http://127.0.0.1:8000/api/admin/san-pham/delete", this.xoasanpham)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
    },
}
</script>
<style></style>
