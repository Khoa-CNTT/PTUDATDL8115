<template>
    <div>

        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý Admin</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input type="text" class="form-control ps-5 radius-30 search" placeholder="Tìm kiếm" id="search"
                            v-model="searchTerm">
                        <span class="position-absolute top-50 product-show translate-middle-y">
                            <i class="bx bx-search"></i>
                        </span>
                    </div>
                    <div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0"
                            data-bs-toggle="modal" data-bs-target="#themadmin"><i class="bx bxs-plus-square"></i>Thêm
                        </a></div>
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Họ Tên</th>
                                <th class="text-center align-middle">Username</th>

                                <th class="text-center align-middle">Email</th>
                                <th class="text-center align-middle">Số Điện Thoại</th>
                                <th class="text-center align-middle">Giới Tính</th>
                                <th class="text-center align-middle">Trạng Thái </th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_admin" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.ho_va_ten }}</td>
                                <td class="text-center align-middle">{{ value.username }}</td>

                                <td class="text-center align-middle">{{ value.email }}</td>
                                <td class="text-center align-middle">{{ value.so_dien_thoai }}</td>
                                <td style="text-align: center;">
                                    <a style="width: 200px;" v-if="value.gioi_tinh == 1"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">Nam</a>
                                    <a style="width: 200px;" v-else-if="value.gioi_tinh == 2"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">Nữ</a>
                                    <a style="width: 200px;" v-else
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">Khác</a>
                                </td>
                                <td style="text-align: center;">
                                    <a style="width: 200px;" v-if="value.trang_thai == 0"
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i> ĐANG TẠM DỪNG</a>
                                    <a style="width: 200px;" v-else
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i> ĐANG HOẠT ĐỘNG</a>
                                </td>

                                <td class="text-center align-middle">
                                    <div class="d-flex order-actions justify-content-center">
                                        <button v-on:click="Object.assign(sua_admin,value)" class="btn btn-warning ms-3" data-bs-toggle="modal"
                                            data-bs-target="#suaadmin">Sửa</button>
                                        <button  v-on:click="Object.assign(xoa_admin,value)" class="btn btn-danger ms-3" data-bs-toggle="modal"
                                            data-bs-target="#xoaqladmin">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal thêm admin -->
    <div class="modal fade" id="themadmin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thêm Admin</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label><b>Họ Và Tên</b></label>
                    <input v-model="them_admin.ho_va_ten" type="text" class="form-control mb-2">
                    <label><b>Username</b></label>
                    <input v-model="them_admin.username" type="text" class="form-control mb-2">
                    <label><b>Email</b></label>
                    <input v-model="them_admin.email" type="text" class="form-control mb-2">
                    <label><b>Số Điện Thoại</b></label>
                    <input v-model="them_admin.so_dien_thoai" type="text" class="form-control mb-2">
                    <label for="vaiTroSelect" class="form-label">Giới Tính</label>
                    <select v-model="them_admin.gioi_tinh" class="form-select mb-2">
                        <option value="" selected disabled>-- Chọn Giới Tính --</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                    </select>
                    <label>Trạng Thái</label>
                    <select v-model="them_admin.trang_thai" class="form-select mb-2">
                        <option value="" selected disabled>-- Chọn trạng thái --</option>
                        <option value="1">ĐANG HOẠT ĐỘNG</option>
                        <option value="0">ĐANG TẠM DỪNG</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button v-on:click="themqladmin()" type="button"  data-bs-dismiss="modal" class="btn btn-primary">Thêm</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal sửa admin -->
    <div class="modal fade" id="suaadmin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa Admin</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <label><b>Họ Và Tên</b></label>
                    <input v-model="sua_admin.ho_va_ten" type="text" class="form-control mb-2">
                    <label><b>Username</b></label>
                    <input v-model="sua_admin.username" type="text" class="form-control mb-2">

                    <label><b>Email</b></label>
                    <input v-model="sua_admin.email" type="text" class="form-control mb-2">
                    <label><b>Số Điện Thoại</b></label>
                    <input v-model="sua_admin.so_dien_thoai" type="text" class="form-control mb-2">
                    <label for="vaiTroSelect" class="form-label">Giới Tính</label>
                    <select v-model="sua_admin.gioi_tinh" class="form-select mb-2">
                        <option value="" selected disabled>-- Chọn Giới Tính --</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                        <option value="3">Khác</option>
                    </select>
                    <label>Trạng Thái</label>
                    <select v-model="sua_admin.trang_thai" class="form-select mb-2">
                        <option value="" selected disabled>-- Chọn trạng thái --</option>
                        <option value="1">ĐANG HOẠT ĐỘNG</option>
                        <option value="0">ĐANG TẠM DỪNG</option>
                    </select>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button v-on:click="suaqladmin()" type="button" data-bs-dismiss="modal" class="btn btn-primary">Cập nhật</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Xóa admin -->
    <div class="modal fade" id="xoaqladmin" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa Admin</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa quản lý <b>{{ xoa_admin.ho_va_ten }}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button v-on:click="xoaqladmin()" type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { NotifiSuccess, NotifiError } from '../../../utils/Notifi'

import axios from 'axios'
export default {
    data() {
        return {

            list_admin: [],
            them_admin: {
                ma_admin: "",
                ten_admin: "",
                username: "",
                password: "",
                email: "",
                sdt: "",
                trang_thai: 1,
                gioitinh: 1,
            },
            xoa_admin: {},
            sua_admin: {},
            searchQuery: "",

        }
    },
    mounted() {
        this.loadData();
    },

    methods: {

        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/nhan-vien/get-data")
                .then((res) => {
                    this.list_admin = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themqladmin() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/create", this.them_admin)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
            this.them_admin = {
                id_nguoi_dung: "",
                hinh_anh: "",
                slug: "",
                noi_dung: "",
                tinh_trang: 1,
            }
        },
        suaqladmin() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/update", this.sua_admin)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
        xoaqladmin() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nhan-vien/delete", this.xoa_admin)
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
};
</script>

<style></style>