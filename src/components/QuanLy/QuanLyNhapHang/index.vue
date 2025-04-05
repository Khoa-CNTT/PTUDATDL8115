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
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Thông tin nhập hàng</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header d-flex align-items-center">
                                    <i class="fa-solid fa-circle-info me-2"></i>
                                    <h5>Thông tin</h5>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between  mb-2">
                                        <label for="" class="align-items-center me-2">Nhà cung cấp</label>
                                        <div>
                                            <select name="" id="" class="form-control " style="width:300px">
                                                <option value="1">Nhà cung cấp 1</option>
                                                <option value="2">Nhà cung cấp 2</option>
                                            </select>
                                        </div>

                                    </div>
                                    <div class="d-flex align-items-center justify-content-between  mb-2">
                                        <label for="" class="align-items-center me-2">Địa chỉ nhập hàng</label>
                                        <div>
                                            <input type="text" name="" id="" class="form-control " style="width:300px">
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center justify-content-between  mb-2">
                                        <label for="" class="align-items-center me-2 ">Số điện thoại</label>
                                        <div>
                                            <input type="number" name="" id="" class="form-control " style="width:300px">
                                        </div>
                                    </div>
                                    <div class="d-flex  justify-content-between mb-2">
                                        <label for="" class="align-items-center me-2">Ghi chú</label>
                                        <textarea name="" rows="3" class="form-control " style="width:300px"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card">
                                <div class="card-header d-flex align-items-center ">
                                    <i class="fa-solid fa-money-bill me-2"></i>
                                    <h5>Phương thức thanh toán</h5>
                                </div>
                                <div class="card-body">
                                    <div class="d-flex align-items-center justify-content-between  mb-2">
                                        <label for="" class="align-items-center me-2">Phương thức</label>
                                        <div>
                                            <select name="" id="" class="form-control " style="width:300px">
                                                <option value="1">Chuyển khoản</option>
                                                <option value="2">Tiền mặt</option>
                                            </select>
                                        </div>

                                    </div>
                                    
                                </div>
                                <div class="card-footer">
                                        <div class="d-flex align-items-center justify-content-between  mb-2">
                                            <h4 class="align-items-center me-2 ">Tổng Tiền</h4>
                                            <div>
                                                <h4>6.000.000</h4>
                                            </div>
                                        </div>
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
                    <button type="button" class="btn btn-success">Xác Nhận</button>
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