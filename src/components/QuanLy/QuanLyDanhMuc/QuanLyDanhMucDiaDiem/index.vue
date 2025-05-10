<template>
    <div>

        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý danh mục địa điểm</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30 " placeholder="Search">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span>
                    </div>
                    <div class="ms-auto"><button class="btn btn-primary radius-30 mt-2 mt-lg-0 align-items-center" data-bs-toggle="modal"
                                data-bs-target="#taodanhmuc"><i
                                class="bx bxs-plus-square" ></i>Thêm</button></div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Tên danh mục địa điểm</th>
                                <th class="text-center align-middle">Slug</th>
                                <th class="text-center align-middle">Tình trạng</th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_danhMucDiaDiem" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.ten_danh_muc }}</td>
                                <td class="text-center align-middle">{{ value.slug_danh_muc }}</td>
                                <td class="text-center align-middle">
                                    <div v-if="value.tinh_trang == 1"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Đang hoạt động</div>
                                    <div v-else
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Không hoạt động</div>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuadanhmuc"
                                        @click="Object.assign(sua_dmd, value)">
                                        Sửa
                                    </button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoadanhmuc"
                                        @click="Object.assign(xoa_dmd, value)">
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

    <!-- Tạo danh mục địa điểm -->
    <div class="modal fade" id="taodanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Tạo danh mục địa điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên danh mục địa điểm</label>
                        <input type="text" v-model="them_dmd.ten_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="them_dmd.slug_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="them_dmd.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="themDanhMucDiaDiem()"
                        data-bs-dismiss="modal">Tạo</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa danh mục địa điểm -->
    <div class="modal fade" id="chinhsuadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Sửa danh mục địa điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên danh mục địa điểm</label>
                        <input type="text" v-model="sua_dmd.ten_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="sua_dmd.slug_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="sua_dmd.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Ngừng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="suaDanhMucDiaDiem()"
                        data-bs-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa danh mục địa điểm -->
    <div class="modal fade" id="xoadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa danh mục địa điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa danh mục địa điểm <b>{{ xoa_dmd.ten }}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoaDanhMucDiaDiem()"
                        data-bs-dismiss="modal">Xóa</button>
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
            list_danhMucDiaDiem: [],
            them_dmd: {
                ten: "",
                slug: "",
                tinh_trang: 1,
            },
            sua_dmd: {},
            xoa_dmd: {},
            searchQuery: "",
        }
    },
    mounted() {
        this.loadDataDanhMucDiaDiem();
    },
    computed: {
        list_danhMucDiaDiem_filter() {
            return this.list_danhMucDiaDiem.filter((item) =>
                item.ten.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        loadDataDanhMucDiaDiem() {
            axios
                .get("http://127.0.0.1:8000/api/admin/danh-muc/get-data-dia-diem")
                .then((res) => {
                    this.list_danhMucDiaDiem = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themDanhMucDiaDiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/create-dia-diem", this.them_dmd)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadDataDanhMucDiaDiem();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
            this.them_dmd = {
                ten: "",
                slug: "",
                tinh_trang: 1,
            }
        },
        suaDanhMucDiaDiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/update", this.sua_dmd)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadDataDanhMucDiaDiem();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
        xoaDanhMucDiaDiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc/delete", this.xoa_dmd)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadDataDanhMucDiaDiem();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
    },
};
</script>

<style>
</style>
