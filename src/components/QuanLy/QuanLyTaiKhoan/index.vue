<template>
    <div class="mt-5 bg-white">
        <div class="card bg-white rounded-3">
            <div class="row">
                <div id="example_wrapper" class="dataTables_wrapper dt-bootstrap4">
                    <!-- phần header -->
                    <div class="card-header" style="padding: 20px;">
                        <div>
                            <h2>Quản lý tài khoản</h2>
                        </div>
                    </div>
                    <div class="card-body" style="padding: 20px;">
                        <div class="d-flex justify-content-start align-items-center mb-3">
                            <div class="d-flex justify-content-between align-items-center">
                                <div id="example_filter" class="dataTables_filter">
                                    <div style="position: relative;">
                                        <i class="fa-solid fa-magnifying-glass fa-flip-horizontal"
                                            style="position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: #aaa;"></i>
                                        <input type="text" class="form-control radius-30 search" placeholder="Tìm kiếm "
                                            id="search" v-model="searchTerm" style="padding-left: 35px;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- phần danh sách tài khoản -->
                        <div class="row">
                            <div class="col-sm-12">
                                <table style="width: 100%;font-size: 18px;" id="example"
                                    class="table table-hover table-bordered " aria-describedby="example_info">
                                    <thead style="background-color: #f8f9fa;">
                                        <tr>
                                            <th class="text-center">STT</th>
                                            <th>Tên người dùng</th>
                                            <th>Tên đăng nhập</th>
                                            <th>Email</th>
                                            <th class="text-center align-middle">Ngày sinh</th>
                                            <th class="text-center">Giới tính</th>
                                            <th class="text-center">Trạng thái</th>
                                            <th class="text-center">Chi tiết</th>
                                            <th class="text-center">Thao tác</th>
                                        </tr>
                                    </thead>
                                    <tbody style="font-size: 16px;">
                                        <tr v-for="(value, index) in lists_tai_khoan" :key="index">
                                            <td class="text-center">{{ index + 1 + (currentPage - 1) * itemsPerPage }}
                                            </td>
                                            <td>{{ value.ten_nguoi_dung }}</td>
                                            <td>{{ value.ten_dang_nhap }}</td>
                                            <td>{{ value.email }}</td>
                                            <td class="text-center">{{ formatDate(value.ngay_sinh) }}</td>
                                            <td class="text-center">
                                                <span v-if="value.gioi_tinh == 1">Nam</span>
                                                <span v-else>Nữ</span>
                                            </td>
                                            <td style="text-align: center;font-size: 18px;">
                                                <a v-if="value.trang_thai == 0"
                                                    class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                                        class='bx bxs-circle me-1'></i> ĐANG TẠM KHOÁ</a>
                                                <a v-else
                                                    class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                                        class='bx bxs-circle me-1'></i> ĐANG HOẠT ĐỘNG</a>
                                            </td>
                                            <td class="text-center align-middle">
                                                <button class="btn ms-3" data-bs-toggle="modal"
                                                    data-bs-target="#ModalXemTaiKhoan"><i class="fa-solid fa-eye"
                                                        @click="xemChiTietTaiKhoan(value)"></i></button>
                                            </td>
                                            <td class="text-center align-middle">
                                                <button class="btn btn-danger" data-bs-toggle="modal"
                                                    data-bs-target="#ModalXoaTaiKhoan"
                                                    @click="hienThiModalXoa(value)">Xóa</button>

                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xoá tài khoản -->
    <div class="modal fade" id="ModalXoaTaiKhoan" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="content p-5 px-3 text-center">
                        <span class="fa-stack fa-2x mb-3">
                            <i class="fa-solid fa-2xl fa-circle" style="color: #ffc8c2;"></i>
                            <i class="fa-solid fa-trash-can text-danger fa-stack-1x"></i>
                        </span>
                        <h3 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Xoá tài khoản</h3>
                        <p class="text-gray-6 mb-0 fs-16">Bạn có chắc chắn muốn xoá tài khoản này không?</p>
                        <p class="text-gray-6 mb-0 fs-16">Sau khi xoá tài khoản này sẽ không còn hoạt động !</p>
                        <h5 class="mt-3">{{ tai_khoan.ten_nguoi_dung }} - {{ tai_khoan.ten_dang_nhap }}</h5>
                        <div class="modal-footer-btn mt-3 d-flex justify-content-center mt-5">
                            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                data-bs-dismiss="modal" style="background-color: #FF2C2C;width: 30%;">Huỷ</button>
                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3"
                                @click="xoa_tai_khoan" style="background-color: #FE9F43;width: 30%;">Đồng ý xoá</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xem tài khoản -->
    <div class="modal fade" id="ModalXemTaiKhoan" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-xl">
            <div class="modal-content" style="padding: 20px;">
                <div class="modal-body">
                    <h3 class="text-center mb-4" style="font-size: 40px; font-weight: bold;">Chi tiết tài khoản</h3>
                    <div class="row row-cols-1 row-cols-md-2 g-3">
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title mb-3"><i class="fa-solid fa-user fa-xl me-2 text-primary"></i>
                                        Thông tin cá nhân
                                    </h5>
                                    <p class="card-text fs-5"><strong>Tên người dùng:</strong> {{
                                        tai_khoan.ten_nguoi_dung }}
                                    </p>
                                    <p class="card-text fs-5"><strong>Giới tính:</strong> <span
                                            v-if="tai_khoan.gioi_tinh == 1">Nam</span><span v-else>Nữ</span></p>
                                    <p class="card-text fs-5"><strong>Ngày sinh:</strong> {{
                                        formatDate(tai_khoan.ngay_sinh) }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title mb-3"><i class="fa-solid fa-lock fa-xl me-2 text-success"></i>
                                        Thông tin đăng nhập
                                    </h5>
                                    <p class="card-text fs-5"><strong>Tên đăng nhập:</strong> {{ tai_khoan.ten_dang_nhap
                                    }}
                                    </p>
                                    <p class="card-text fs-5"><strong>Mật khẩu:</strong> {{ tai_khoan.mat_khau }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title mb-3"><i
                                            class="fa-solid fa-envelope fa-xl me-2 text-info"></i>
                                        Thông tin liên hệ
                                    </h5>
                                    <p class="card-text fs-5"><strong>Email:</strong> {{ tai_khoan.email }}</p>
                                    <p class="card-text fs-5"><strong>Số điện thoại:</strong> {{ tai_khoan.so_dien_thoai
                                    }}
                                    </p>
                                    <p class="card-text fs-5"><strong>Địa chỉ:</strong> {{ tai_khoan.dia_chi }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card border-0 shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title mb-3"><i
                                            class="fa-solid fa-circle-info fa-xl me-2 text-warning"></i> Thông tin khác
                                    </h5>
                                    <p class="card-text fs-5"><strong>Trạng thái:</strong> <span
                                            v-if="tai_khoan.trang_thai == 1">Đang hoạt động</span><span v-else>Tạm
                                            khoá</span></p>
                                    <p class="card-text fs-5"><strong>Số điểm tích lũy:</strong> {{
                                        tai_khoan.diem_tich_luy }} <i class="fa-solid fa-star fa-lg"
                                            style="color: #FFD43B;"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
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
            Luu_tam: {}, // Lưu thông tin tài khoản đã chọn
            tai_khoan: {
                ten_nguoi_dung: "",
                ten_dang_nhap: "",
                mat_khau: "",
                email: "",
                ngay_sinh: "",
                dia_chi: "",
                so_dien_thoai: "",
                trang_thai: "",
                diem_tich_luy: "",
                gioi_tinh: ""
            },
            searchTerm: '', // Dữ liệu tìm kiếm 
            currentPage: 1, // Trang bắt đầu với page 1
            itemsPerPage: 10, // Giới hạn 10 dòng thông tin trên table
            lists_tai_khoan: [
                
                { ten_nguoi_dung: "Trịnh Văn S", ten_dang_nhap: "trinhvans", mat_khau: "12345678", email: "strinh@example.com", ngay_sinh: "1991-07-07", dia_chi: "101 Bạch Đằng", so_dien_thoai: "0912345696", trang_thai: 0, diem_tich_luy: 760, gioi_tinh: 1 },
                { ten_nguoi_dung: "Bùi Thị T", ten_dang_nhap: "buithit", mat_khau: "12345678", email: "tbui@example.com", ngay_sinh: "1993-03-03", dia_chi: "33 Trần Cao Vân", so_dien_thoai: "0912345697", trang_thai: 1, diem_tich_luy: 1900, gioi_tinh: 0 }
            ],
            luu_tai_khoan: null,
            modalXoa: null,
            modalXem: null,
            isSelected: false, // Trạng thái để xác định xem có chọn tài khoản nào hay không

        }
    },
    computed: {
        list_TaiKhoan_filter() {
            return this.lists_tai_khoan.filter((item) =>
                item.ten_dang_nhap.toLowerCase().includes(this.searchQuery.toLowerCase()),
                item.ten_nguoi_dung.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
        totalPages() {
            return Math.ceil(this.lists_tai_khoan.length / this.itemsPerPage);
        },
        // paginatedData để điều chỉnh thông tin sao cho khi chuyển page thì thông tin theo mới
        paginatedData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            return this.filteredTaiKhoan.slice(start, end);
        },
        mounted() {
            this.loadData()
        },
    },

    methods: {
        changePage(page) {
            if (page >= 1 && page <= this.totalPages) {
                this.currentPage = page;
            }
        },

        // Chuyển định danh ngày tháng năm thành dạng dd/mm/yyyy
        formatDate(dateStr) {
            const date = new Date(dateStr);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
            const year = date.getFullYear();
            return `${day} / ${month} / ${year}`;
        },

        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/tai-khoan/data")
                .then((res) => {
                    this.lists_tai_khoan = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        xoaTaiKhoan() {
            axios
                .post("http://127.0.0.1:8000/api/admin/tai-khoan/delete", this.xoa_tk)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa tài khoản thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    watch: {
        searchTerm() {
            this.currentPage = 1; // Reset về trang đầu tiên khi tìm kiếm
        }
        // ... các watch khác của bạn
    },
}
</script>
<style></style>