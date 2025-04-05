<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card  text-light">
               
                <div class="card-body text-light">
                    <div class="row">
                        <div class="col-lg-12 bg-light text-success">
                            <div class="container mt-5">
                                <div class="d-flex justify-content-between mb-5">
                                    <h4>Đơn Hàng Đã Hủy</h4>
                                    <form class="d-flex align-items-center" role="search">
                                        <label for="searchBox" class="me-2">Search:</label>
                                        <input class="form-control me-2" type="search" placeholder="Search"
                                            aria-label="Search">
                                    </form>
                                </div>
                                <div>
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr class="text-center">
                                                <th>STT</th>
                                                <th>Khách Hàng</th>
                                                <th>Ngày Lập</th>
                                                <th>Ghi Chú</th>
                                                <th>Địa Chỉ</th>
                                                <th>SDT</th>
                                                <th>Trạng Thái</th>
                                                <th>Phương Thức</th>
                                                <th>Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="(value, index) in list_dh" :key="index">
                                                <tr class="align-middle text-center">
                                                    <td>{{ index + 1 }}</td>
                                                    <td>{{ value.name }}</td>
                                                    <td>{{ value.datelap }}</td>
                                                    <td>{{ value.ghichu }}</td>
                                                    <td>{{ value.diachi }}</td>
                                                    <td>{{ value.sdt }}</td>
                                                    <td>{{ value.trangthai }}</td>
                                                    <td>
                                                        <button v-if="value.phuongthuc == 1"
                                                            class="btn btn-primary rounded-pill me-2 "
                                                            style="width: 100px;" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal1">Đổi Điểm</button>
                                                        <button v-else class="btn btn-warning rounded-pill me-2 "
                                                            style="width: 100px;" data-bs-toggle="modal"
                                                            data-bs-target="#exampleModal2">Đổi Tiền</button>
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-danger rounded-pill me-2 "  data-bs-toggle="modal"
                                                        data-bs-target="#exampleModal">Xóa
                                                            Đơn</button>
                                                    </td>
                                                </tr>
                                            </template>
                                        </tbody>
                                    </table>
                                    <div class="mt-4 flex items-center justify-center text-end pagination-container">
                                        <button @click="changePage(-1)" :disabled="currentPage === 1"
                                            class="btn btn-primary icon-page">
                                            <i class="fa-solid fa-chevron-left"></i>
                                        </button>
                                        <span class="mx-4 text-lg" id="pageNumber" style="font-size: 20px;">Page {{
                                            currentPage }}</span>
                                        <button @click="changePage(1)" :disabled="currentPage === totalPages"
                                            class="btn btn-primary icon-page">
                                            <i class="fa-solid fa-chevron-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal Xóa Đơn -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa Đơn Hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                Bạn Có Chắc Chắn Muốn Xóa Đơn Hàng
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Đổi Điểm -->
    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông Tin Đổi Điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Label>Số Điểm Hiện Tại Bạn Đang Có Là :</Label>
                    <p><label class="mt-2">Số điểm bạn muốn dùng để đổi là</label></p>
                    <input type="text" class="form-control mt-2 mb-2">
                    <label>Ghi chú</label>
                    <div>
                        100 Điểm đổi được 100MB di động
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Đổi Tiền -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông Tin Đổi Tiền</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <Label>Số Điểm Hiện Tại Bạn Đang Có Là :</Label>
                    <p><label class="mt-2">Số điểm bạn muốn dùng để đổi là</label></p>
                    <input type="text" class="form-control mt-2 mb-2">
                    <label>Ghi chú</label>
                    <div>
                        100 điểm đổi được 100VND
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-primary">Xác Nhận</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            dh: {
                id: '',
                name: '',
                datelap: '',
                ghichu: '',
                diachi: '',
                sdt: '',
                trangthai: '',
                phuongthuc: 1
            },

            tt_thanh_toan: {},

            return: {
                rowsPerPage: 10, // Số dòng trên mỗi trang
                currentPage: 1, // Trang hiện tại
                searchTerm: '', // Giá trị tìm kiếm
            },

            list_dh: [
                {
                    id: '1',
                    name: 'Trần A',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đã Thanh Toán',
                    phuongthuc: 1
                },
                {
                    id: '2',
                    name: 'Trần B',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đã Thanh Toán',
                    phuongthuc: 0
                },
                {
                    id: '3',
                    name: 'Trần C',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đã Thanh Toán',
                    phuongthuc: 0
                },
                {
                    id: '4',
                    name: 'Trần D',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đã Thanh Toán',
                    phuongthuc: 1
                },

            ]
        }
    },
    methods: {

        xoabaiviet(baiviet, vitri) {
            alert("đâsdsadasasdsa"),
                this.list_bv.splice(vitri, 1);
        },

        // Chuyển trang
        changePage(offset) {
            const newPage = this.currentPage + offset;
            if (newPage > 0 && newPage <= this.totalPages) {
                this.currentPage = newPage;
            }
        },
    },
}
</script>
<style></style>