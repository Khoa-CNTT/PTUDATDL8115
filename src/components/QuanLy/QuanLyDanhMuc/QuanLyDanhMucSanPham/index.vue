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
                            <tr v-for="(value, index) in list_danhMucSanPham" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.ten_danh_muc }}</td>
                                <td class="text-center align-middle">{{ value.slug }}</td>
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
                        <input type="text" v-model="them_dm.ten_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="them_dm.slug" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="them_dm.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
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
                        <input type="text" v-model="sua_dm.ten_danh_muc" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Slug</label>
                        <input type="text" v-model="sua_dm.slug" class="form-control" />
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
export default {
    data() {
        return {
            list_danhMucSanPham: [
            {   ten_danh_muc: "aaa",
                slug: "aaa",
                tinh_trang: 1
        }
            ],
            them_dm: {
                ten_danh_muc: "",
                slug: "",
                tinh_trang: 1,
            },
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
            return this.list_danhMucSanPham.filter((item) =>
                item.ten_danh_muc.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/danh-muc-san-pham/data")
                .then((res) => {
                    this.list_danhMuc = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc-san-pham/create", this.them_dm)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.list_danhMucSanPham.push(this.them_dm);
                        alert(res.data.message);
                    } else {
                        alert("Thêm danh mục thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
            this.them_dm = {
                ten_danh_muc: "",
                slug: "",
                tinh_trang: 1,
            }
        },
        suaDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc-san-pham/update", this.sua_dm)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Cập nhật danh mục thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        xoaDanhMuc() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-muc-san-pham/delete", this.xoa_dm)
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
