<template>
    <div>
        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý danh mục sản phẩm</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30" placeholder="Tìm kiếm">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
                    </div>
                    <div class="ms-auto"><button class="btn btn-primary radius-30 mt-2 mt-lg-0 align-items-center" data-bs-toggle="modal" data-bs-target="#taodanhmuc"><i class="bx bxs-plus-square"></i> Thêm</button></div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Tên danh mục</th>
                                <th class="text-center align-middle">Slug</th>
                                <th class="text-center align-middle">Tình trạng</th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_danhMuc" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="align-middle">{{ value.ten_danh_muc }}</td>
                                <td class="align-middle">{{ value.slug_danh_muc }}</td>
                                <td class="text-center align-middle">
                                    <div v-if="value.tinh_trang == 1" class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Đang hoạt động</div>
                                    <div v-else class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i class="bx bxs-circle me-1"></i>Không hoạt động</div>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#suadanhmuc" @click="Object.assign(sua_dm, value)">
                                        Sửa
                                    </button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoadanhmuc" @click="Object.assign(xoa_dm, value)">
                                        Xóa
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Tạo danh mục sản phẩm -->
    <div class="modal fade" id="taodanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Tạo danh mục sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên danh mục</label>
                        <input type="text" v-model="them_dm.ten_danh_muc" class="form-control" v-on:keyup="chuyenSlug(1)"/>
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="them_dm.slug_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="them_dm.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
                    <!-- <div class="mb-2">
                        <label class="mb-2">Danh Mục Cha</label>
                        <select v-model="them_dm.tinh_trang" class="form-control">
                            <template>
                                <option value="1">Đang hoạt động</option>
                            </template>
                        </select>
                    </div> -->
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="themDanhMuc()" data-bs-dismiss="modal">Tạo</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa danh mục sản phẩm -->
    <div class="modal fade" id="suadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Sửa danh mục sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên danh mục</label>
                        <input type="text" v-model="sua_dm.ten_danh_muc" class="form-control" v-on:keyup="chuyenSlug(2)"/>
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="sua_dm.slug_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="sua_dm.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="suaDanhMuc()" data-bs-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa danh mục sản phẩm -->
    <div class="modal fade" id="xoadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa danh mục sản phẩm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa danh mục sản phẩm <b>{{ xoa_dm.ten_danh_muc }}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoaDanhMuc()" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { NotifiSuccess, NotifiError } from '../../../../utils/notifi.js'
export default {
    data() {
        return {
            list_danhMuc: [],
            them_dm: {},
            sua_dm: {},
            xoa_dm: {},
            searchQuery: "",
        }
    },
    mounted() {
        this.loadData();
    },
    computed: {
        list_danhMuc_filter() {
            return this.list_danhMuc.filter((item) =>
                item.ten_danh_muc.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        chuyenSlug(type) {
            console.log(type);
            if(type == 1) {
                this.them_dm.slug_danh_muc = this.toSlug(this.them_dm.ten_danh_muc);
            } else if(type == 2) {
                this.sua_dm.slug_danh_muc = this.toSlug(this.sua_dm.ten_danh_muc);
            }
        },
        toSlug(str) {
            return str
                .toLowerCase()
                .normalize('NFD') // chuyển các ký tự có dấu thành tổ hợp base + diacritic
                .replace(/[\u0300-\u036f]/g, '') // xoá các dấu (accents)
                .replace(/[^a-z0-9\s-]/g, '') // xoá ký tự đặc biệt
                .trim() // xoá khoảng trắng đầu/cuối
                .replace(/\s+/g, '-') // thay khoảng trắng bằng -
                .replace(/-+/g, '-'); // gộp nhiều dấu - thành một
        },
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/danh-muc/get-data-san-pham")
                .then((res) => {
                    this.list_danhMuc = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/create-san-pham", this.them_dm)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
            this.them_dm = {
                ten_danh_muc: "",
                slug: "",
                tinh_trang: 1,
            }
        },
        suaDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/update", this.sua_dm)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
        xoaDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/delete", this.xoa_dm)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa danh mục thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style>
</style>
