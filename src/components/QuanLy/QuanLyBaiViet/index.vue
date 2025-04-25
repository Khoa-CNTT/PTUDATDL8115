<template>
    <div>

        <div class="card pt-">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý bài viết</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30 " placeholder="Search">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span>
                    </div>
                    <div class="ms-auto"><button class="btn btn-primary radius-30 mt-2 mt-lg-0 align-items-center"
                            data-bs-toggle="modal" data-bs-target="#taobaiviet"><i class="bx bxs-plus-square"></i>Thêm</button></div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light text-center">
                            <tr>
                                <th>STT</th>
                                <th>ID người dùng</th>
                           
                                <th>Hình Ảnh</th>
                                <th>Nội dung</th>
                                <th>Lượt thả tim</th>
                                <th>Tình Trạng</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_baiviet_filter" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.id_nguoi_dung }}</td>
                           
                                <td class="text-center align-middle"><img v-bind:src="value.hinh_anh" alt=""></td>
                                <td class="text-center align-middle"><button class="btn " data-bs-toggle="modal" data-bs-target="#xemnoidungbaiviet"
                                        @click="Object.assign(xemnoidungbaiviet, value)">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button></td>
                                <td class="text-center align-middle">{{ value.truy_cap }} <i class="fa-solid fa-heart"
                                        style="color: #f20707;"></i></td>
                                <td class="text-center align-middle">
                                    <div v-if="value.tinh_trang == 1"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Admin</div>
                                    <div v-else
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Người Dùng</div>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuabaiviet"
                                        @click="Object.assign(sua_baiviet, value)">
                                        Sửa
                                    </button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoabaiviet"
                                        @click="Object.assign(xoa_baiviet, value)">
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
<!-- Xem Nội Dung Bài Viết -->
<div class="modal fade" id="xemnoidungbaiviet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Nội Dung Bài Viết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <a>{{ xemnoidungbaiviet.noi_dung }}</a> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Tạo Bài Viết -->
    <div class="modal fade" id="taobaiviet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Tạo Bài Viết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên Bài Viết</label>
                        <input type="text" v-model="them_baiviet.id_nguoi_dung" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Số Điện Thoại</label>
                        <input type="text" v-model="them_baiviet.slug" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="them_baiviet.tinh_trang" class="form-control">
                            <option value="1">Admin</option>
                            <option value="0">Người Dùng</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="thembaiviet()"
                        data-bs-dismiss="modal">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa Bài Viết -->
    <div class="modal fade" id="chinhsuabaiviet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Sửa Bài Viết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên Bài Viết</label>
                        <input type="text" v-model="sua_baiviet.id_nguoi_dung" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">SĐT</label>
                        <input type="text" v-model="sua_baiviet.slug" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="sua_baiviet.tinh_trang" class="form-control">
                            <option value="1">Admin</option>
                            <option value="0">Người Dùng</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="suabaiviet()" data-bs-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa Bài Viết -->
    <div class="modal fade" id="xoabaiviet" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa Bài Viết</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa Bài Viết <b>{{ xoa_baiviet.id_nguoi_dung }}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoabaiviet()" data-bs-dismiss="modal">Xóa</button>
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

            list_baiviet: [
    {
        id_nguoi_dung: "1",
        hinh_anh: "anh1.jpg",
        slug: "bai-viet-1",
        noi_dung: "Nội dung bài viết số 1",
        truy_cap: "100",
        tinh_trang: 1,
        is_admin: "0",
    },
    {
        id_nguoi_dung: "2",
        hinh_anh: "anh2.jpg",
        slug: "bai-viet-2",
        noi_dung: "Nội dung bài viết số 2",
        truy_cap: "250",
        tinh_trang: 1,
        is_admin: "1",
    },
    ],
    xemnoidungbaiviet:{},
            them_baiviet: {
                id_nguoi_dung: "",
                hinh_anh: "",
                slug: "",
                noi_dung: "",
                truy_cap: "",
                tinh_trang: 1,
                is_admin: "",
            },
            sua_baiviet: {},
            xoa_baiviet: {},
            searchQuery: "",

        }
    },
    mounted() {
        this.loadData();
    },
    computed: {
        list_baiviet_filter() {
            return this.list_baiviet.filter((item) =>
                item.id_nguoi_dung.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {

        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/bai-viet/data")
                .then((res) => {
                    this.list_baiviet = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        thembaiviet() {
            axios
                .post("http://127.0.0.1:8000/api/admin/bai-viet/create", this.them_baiviet)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.list_baiviet.push(this.them_baiviet);
                        alert(res.data.message);
                    } else {
                        alert("Thêm Bài Viết thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            this.them_baiviet = {
                id_nguoi_dung: "",
                hinh_anh: "",
                slug: "",
                noi_dung: "",
                tinh_trang: 1,
            }
        },
        suabaiviet() {
            axios
                .post("http://127.0.0.1:8000/api/admin/bai-viet/update", this.sua_baiviet)
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
        xoabaiviet() {
            axios
                .post("http://127.0.0.1:8000/api/admin/bai-viet/delete", this.xoa_baiviet)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa Bài Viết thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },

    },
};
</script>

<style></style>