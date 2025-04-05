<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="card  text-light">
                
                <div class="card-body text-light">
                    <div class="row">
                        <div class="col-lg-12 bg-light text-success">
                            <div class="container mt-5">
                                <div class="d-flex justify-content-between mb-5">
                                    <h4>Đơn Hàng Đang Giao</h4>
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
                                                        <button class="btn btn-primary rounded-pill me-2 ">Đổi
                                                            Điểm</button>
                                                    </td>
                                                    <td>
                                                        <button class="btn btn-warning rounded-pill me-2 "
                                                            data-bs-toggle="modal" data-bs-target="#exampleModal">Xem
                                                            Chi Tiết</button>
                                                        <button class="btn btn-danger rounded-pill me-2 ">Hủy</button>
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



    <!-- Modal xem chi tiet -->

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <p><b>Đơn Hàng :</b></p>
                                            <b>13/02/2025</b>
                                        </div>
                                        <div class="col-lg-6">
                                            <button class="btn btn- bg-success mt-3 text-light"
                                                style="width: 200px;">Hàng
                                                Đang Giao</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header text-light bg-secondary ">
                                            Khách Hàng
                                        </div>
                                        <div class="card-body d-flex flex-column">
                                            <a>Trần A</a>
                                            <a>0328693347</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header text-light bg-secondary">
                                            Người Nhận
                                        </div>
                                        <div class="card-body d-flex flex-column">
                                            <a>Trần A</a>
                                            <a>0328693347</a>
                                            <a>16 Ngô Quyền</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-lg-12">
                                <table class="table table-hover text-center">
                                    <thead class="bg-secondary">
                                        <tr>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Sản Lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th>Khăn Choàng</th>
                                            <th>2</th>
                                            <th>200.000</th>
                                            <th>400.000</th>
                                        </tr>

                                        <tr>
                                            <th>Áo Thun Đen</th>
                                            <th>1</th>
                                            <th>200.000</th>
                                            <th>200.000</th>
                                        </tr>

                                        <tr>
                                            <th>Giày Thu Đông</th>
                                            <th>1</th>
                                            <th>160.000</th>
                                            <th>160.000</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="col-lg-4">
                            <div class="card">
                                <div class="card-header bg-secondary text-light">
                                    Phương Thức Thanh Toán
                                </div>

                                <div class="card-body">
                                    <div class="d-flex justify-content-between mb-5">
                                        Tiền Mặt :
                                        <a>1.050.000</a>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        Ghi Chú :
                                        <a>Gói Kỹ Càng</a>
                                    </div>
                                </div>

                                <div class="card-footer  bg-secondary text-light">
                                    Tổng Tiền: <span> 500.000</span> VND
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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
            },

            tt_hienthi_dh: {},

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
                    trangthai: 'Đang Giao'
                },
                {
                    id: '2',
                    name: 'Trần B',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đang Giao'
                },
                {
                    id: '3',
                    name: 'Trần C',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đang Giao'
                },
                {
                    id: '4',
                    name: 'Trần D',
                    datelap: '11/4/2025',
                    ghichu: 'Khách hàng yêu cầu giao vào lúc 5h chiều',
                    diachi: 'sadasdas',
                    sdt: '110',
                    trangthai: 'Đang Giao'
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