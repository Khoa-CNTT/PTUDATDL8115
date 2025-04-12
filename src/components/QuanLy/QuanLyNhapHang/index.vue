<template>
    <div>
        <div class="d-flex justify-content-between">
            <div class="d-flex">
                <h4 class="me-2">Search: </h4>
                <input type="text" class="form-control">
            </div>
            <div><button class="btn btn-info text-light" data-bs-toggle="modal" data-bs-target="#nhaphang">NHẬP HÀNG</button></div>
        </div>
        <div class="card mt-5">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">Mã phiếu</th>
                            <th class="text-center align-middle">Ngày nhập</th>
                            <th class="text-center align-middle">Người nhập</th>
                            <th class="text-center align-middle">Nhà cung cấp</th>
                            <th class="text-center align-middle">Tổng tiền</th>
                            <th class="text-center align-middle">Trạng thái</th>
                            <th class="text-center align-middle">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in list_phieunhap" :key="index">
                            <td class="text-center align-middle">{{ value.id }}</td>
                            <td class="text-center align-middle">{{ value.ngay_nhap }}</td>
                            <td>{{ value.nguoi_nhap }}</td>
                            <td>{{ value.nha_cung_cap }}</td>
                            <td class="text-center align-middle">{{ value.tong_tien }} VNĐ</td>
                            <td class="text-center align-middle">{{ value.trang_thai }}</td>
                            <td class="text-center align-middle">
                                <button class="btn btn-warning" data-bs-toggle="modal"
                                    data-bs-target="#xemchitietnhaphang">Xem Chi Tiết</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- Xem Chi Tiết Nhập Hàng -->
    <div class="modal fade" id="xemchitietnhaphang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Phiếu Nhập</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="card">
                                    <div class="card-body d-flex justify-content-between">
                                        <div>
                                            <p>Đơn hàng: M001</p>
                                            <p>21/21/2005 - 1400</p>
                                        </div>
                                        <div>
                                            <button class="btn btn-warning text-light">Chưa thanh toán</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header bg-secondary text-light" style="height:40px">
                                            <p class="">NGƯỜI ĐẶT</p>
                                        </div>
                                        <div class="card-body">
                                            <p>Lê A</p>
                                            <p class="">012345678</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="card">
                                        <div class="card-header bg-secondary text-light" style="height:40px">
                                            <p>ĐỊA CHỈ GIAO HÀNG</p>
                                        </div>
                                        <div class="card-body">
                                            <p>123 Lê Duẩn Đà Nẵng</p>

                                        </div>
                                    </div>
                                </div>
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

                                <div class="card-footer  bg-secondary text-light d-flex justify-content-between">
                                    Tổng Tiền: <div><span> 500.000</span> VND</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                            <table class="table table-bordered table-hover text-center">
                                <thead class="bg-secondary">
                                    <tr>
                                        <th>#</th>
                                        <th>Tên Sản Phẩm</th>
                                        <th>Sản Lượng</th>
                                        <th>Đơn Giá</th>
                                        <th>Thành Tiền</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th>1</th>
                                        <th>Khăn Choàng</th>
                                        <th>2</th>
                                        <th>200.000</th>
                                        <th>400.000</th>
                                    </tr>

                                    <tr>
                                        <th>2</th>
                                        <th>Áo Thun Đen</th>
                                        <th>1</th>
                                        <th>200.000</th>
                                        <th>200.000</th>
                                    </tr>

                                    <tr>
                                        <th>3</th>
                                        <th>Giày Thu Đông</th>
                                        <th>1</th>
                                        <th>160.000</th>
                                        <th>160.000</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Nhập Hàng -->
    <div class="modal fade" id="nhaphang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content p-3">
            <div class="modal-header">
                <h5 class="modal-title">Thông tin nhập hàng</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="row mb-3">
                    <!-- Thông tin bên trái -->
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-header">
                                <strong>Thông tin</strong>
                            </div>
                            <div class="card-body">
                                <div class="mb-3">
                                    <label>Nhà cung cấp</label>
                                    <select class="form-control">
                                        <option>Nhà cung cấp 1</option>
                                        <option>Nhà cung cấp 2</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label>Địa chỉ nhập hàng</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label>Số điện thoại</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <label>Ghi chú</label>
                                    <textarea rows="2" class="form-control"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Thêm sản phẩm và thanh toán bên phải -->
                    <div class="col-md-6">
                        <div class="card mb-3">
                            <div class="card-header">
                                <strong>Thêm sản phẩm</strong>
                            </div>
                            <div class="card-body">
                                <div class="mb-2">
                                    <label>Sản phẩm</label>
                                    <select class="form-control">
                                        <option>Khăn choàng</option>
                                        <option>Áo thun đen</option>
                                        <option>Áo khoác</option>
                                    </select>
                                </div>
                                <div class="mb-2">
                                    <label>Số lượng</label>
                                    <input type="number" class="form-control">
                                </div>
                                <div class="mb-2 d-flex justify-content-between">
                                    <label>Đơn giá</label>
                                    <p class="fw-bold">200.000</p>
                                </div>
                                <div class="text-end">
                                    <button class="btn btn-primary">Thêm sản phẩm</button>
                                </div>
                                
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header">
                                <strong>Thanh toán</strong>
                            </div>
                            <div class="card-body">
                                <label>Phương thức</label>
                                <select class="form-control mb-2">
                                    <option>Chuyển khoản</option>
                                    <option>Tiền mặt</option>
                                </select>
                                <h5 class="text-end">TỔNG TIỀN: <strong>6.000.000</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Danh sách sản phẩm -->
                <div class="row">
                    <div class="col-md-12">
                        <table class="table table-bordered text-center">
                            <thead class="bg-light">
                                <tr>
                                    <th>#</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Số Lượng</th>
                                    <th>Đơn giá</th>
                                    <th>Thành tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Khăn choàng</td>
                                    <td>2</td>
                                    <td>200.000</td>
                                    <td>400.000</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Áo thun đen</td>
                                    <td>2</td>
                                    <td>150.000</td>
                                    <td>300.000</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Áo khoác</td>
                                    <td>1</td>
                                    <td>350.000</td>
                                    <td>350.000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            <div class="modal-footer justify-content-end">
                <button class="btn btn-success">Nhập hàng</button>
            </div>
        </div>
    </div>
</div>

</template>
<script>
export default {
    data() {
        return {
            phieunhap: {
                id: '',
                ngay_nhap: '',
                nguoi_nhap: '',
                nha_cung_cap: '',
                tong_tien: '',
                trang_thai: '',
            },
            return: {
                rowsPerPage: 10, // Số dòng trên mỗi trang
                currentPage: 1, // Trang hiện tại
                searchTerm: '', // Giá trị tìm kiếm
            },
            list_phieunhap: [
                {
                    id: 'PN001',
                    ngay_nhap: '2025-04-01',
                    nguoi_nhap: 'Nguyễn Văn A',
                    nha_cung_cap: 'Công ty X',
                    tong_tien: 1500000,
                    trang_thai: 'Đã thanh toán',
                },
                {
                    id: 'PN002',
                    ngay_nhap: '2025-04-02',
                    nguoi_nhap: 'Trần Thị B',
                    nha_cung_cap: 'Công ty Y',
                    tong_tien: 2500000,
                    trang_thai: 'Chưa thanh toán',
                },
                {
                    id: 'PN003',
                    ngay_nhap: '2025-04-03',
                    nguoi_nhap: 'Lê Văn C',
                    nha_cung_cap: 'Công ty Z',
                    tong_tien: 1000000,
                    trang_thai: 'Đã thanh toán',
                },
                {
                    id: 'PN004',
                    ngay_nhap: '2025-04-04',
                    nguoi_nhap: 'Nguyễn Văn D',
                    nha_cung_cap: 'Công ty A',
                    tong_tien: 3000000,
                    trang_thai: 'Đã thanh toán',
                },
                {
                    id: 'PN005',
                    ngay_nhap: '2025-04-05',
                    nguoi_nhap: 'Trần Văn E',
                    nha_cung_cap: 'Công ty B',
                    tong_tien: 2000000,
                    trang_thai: 'Chưa thanh toán',
                }
            ]
        }
    },

    methods:
    {
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
    }
};
</script>
<style></style>