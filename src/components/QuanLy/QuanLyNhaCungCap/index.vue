<template>
    <div>

        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý nhà cung cấp</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30 " placeholder="Search">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span>
                    </div>
                    <div class="ms-auto"><button class="btn btn-primary radius-30 mt-2 mt-lg-0 align-items-center"
                            data-bs-toggle="modal" data-bs-target="#taonhacungcap"><i
                                class="bx bxs-plus-square"></i>Thêm</button></div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Tên nhà cung cấp</th>
                                <th class="text-center align-middle">SĐT</th>
                                <th class="text-center align-middle">Tình trạng</th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_nhaCungCap" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.ten_nha_cung_cap }}</td>
                                <td class="text-center align-middle">{{ value.so_dien_thoai }}</td>
                                <td class="text-center align-middle">
                                    <div v-if="value.tinh_trang == 1"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Đang hoạt động</div>
                                    <div v-else
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Không hoạt động</div>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuanhacungcap"
                                        @click="Object.assign(sua_ncc, value)">
                                        Sửa
                                    </button>
                                    <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoanhacungcap"
                                        @click="Object.assign(xoa_ncc, value)">
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

    <!-- Tạo nhà cung cấp -->
    <div class="modal fade" id="taonhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Tạo nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên nhà cung cấp</label>
                        <input type="text" v-model="them_ncc.ten_nha_cung_cap" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Số Điện Thoại</label>
                        <input type="text" v-model="them_ncc.so_dien_thoai" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="them_ncc.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Không hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="themNhaCungCap()"
                        data-bs-dismiss="modal">Tạo</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa nhà cung cấp -->
    <div class="modal fade" id="chinhsuanhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Sửa nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label class="mb-2">Tên nhà cung cấp</label>
                        <input type="text" v-model="sua_ncc.ten_nha_cung_cap" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">SĐT</label>
                        <input type="text" v-model="sua_ncc.so_dien_thoai" class="form-control" />
                    </div>
                    <div class="mb-2">
                        <label class="mb-2">Tình trạng</label>
                        <select v-model="sua_ncc.tinh_trang" class="form-control">
                            <option value="1">Đang hoạt động</option>
                            <option value="0">Ngừng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="suaNhaCungCap()"
                        data-bs-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa nhà cung cấp -->
    <div class="modal fade" id="xoanhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa nhà cung cấp <b>{{ xoa_ncc.ten_nha_cung_cap }}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoaNhaCungCap()"
                        data-bs-dismiss="modal">Xóa</button>
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

            list_nhaCungCap: []
            ,
            them_ncc: {
                ten_nha_cung_cap: "",
                so_dien_thoai: "",
                tinh_trang: 1,
            },
            sua_ncc: {},
            xoa_ncc: {},
            searchQuery: "",
        }
    },
    mounted() {
        this.loadData();
    },
    computed: {
        list_nhaCungCap_filter() {
            return this.list_nhaCungCap.filter((item) =>
                item.ten_nha_cung_cap.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/nha-cung-cap/get-data")
                .then((res) => {
                    this.list_nhaCungCap = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themNhaCungCap() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nha-cung-cap/create", this.them_ncc)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
            this.them_ncc = {
                ten_nha_cung_cap: "",
                so_dien_thoai: "",
                tinh_trang: 1,
            }
        },
        suaNhaCungCap() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nha-cung-cap/update", this.sua_ncc)
                .then((res) => {
                    NotifiSuccess(res, () => {
                        this.loadData();
                    });
                })
                .catch((err) => {
                    NotifiError(err);
                });
        },
        xoaNhaCungCap() {
            axios
                .post("http://127.0.0.1:8000/api/admin/nha-cung-cap/delete", this.xoa_ncc)
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