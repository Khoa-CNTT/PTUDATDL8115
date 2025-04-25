<template>
    <div>
        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý phiếu nhập hàng</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30" placeholder="Search">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span>
                    </div>
                    <div class="ms-auto">
                        <button class="btn btn-primary radius-30 mt-2 mt-lg-0 align-items-center" data-bs-toggle="modal"
                            data-bs-target="#nhaphang"><i class="bx bxs-plus-square"></i>Nhập Hàng</button>
                    </div>
                </div>
                <div class="table-responsive">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Mã phiếu</th>
                                <th class="text-center align-middle">Nhà cung cấp</th>
                                <th class="text-center align-middle">Ngày nhập</th>
                                <th class="text-center align-middle">Tổng tiền</th>
                                <th class="text-center align-middle">Trạng thái</th>
                                <th class="text-center align-middle">Chi Tiết</th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_phieuNhap_filter" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.ma_phieu }}</td>
                                <td class="text-center align-middle">{{ value.nha_cung_cap }}</td>
                                <td class="text-center align-middle">{{ value.ngay_nhap }}</td>
                                <td class="text-center align-middle">{{ value.tong_tien }} VNĐ</td>
                                <td class="text-center align-middle">
                                    <div v-if="value.trang_thai == 1"
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Đã thanh toán</div>
                                    <div v-else
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i>Chưa thanh toán</div>
                                </td>
                                <td class="text-center align-middle">
                                    <button class="btn me-2" data-bs-toggle="modal" data-bs-target="#xemchitietphieu"
                                        @click="Object.assign(xem_chi_tiet_phieu, value)">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button>
                                    
                                </td>
                                <td class="text-center align-middle"><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoaphieu"
                                        @click="Object.assign(xoa_phieu, value)">
                                        Xóa
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- Nhập Hàng Modal -->
        <div class="modal fade" id="nhaphang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content p-3">
                    <div class="modal-header">
                        <h5 class="modal-title">Thông tin nhập hàng</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header">
                                        <strong>Thông tin</strong>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-3">
                                            <label>Nhà cung cấp</label>
                                            <select v-model="them_phieu.nha_cung_cap" class="form-control">
                                                <option></option>
                                      
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label>Địa chỉ nhập hàng</label>
                                            <input type="text" v-model="them_phieu.dia_chi" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label>Số điện thoại</label>
                                            <input type="text" v-model="them_phieu.sdt" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label>Ghi chú</label>
                                            <textarea v-model="them_phieu.ghichu" rows="2" class="form-control"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="card mb-3">
                                    <div class="card-header">
                                        <strong>Thêm sản phẩm</strong>
                                    </div>
                                    <div class="card-body">
                                        <div class="mb-2">
                                            <label>Sản phẩm</label>
                                            <select v-model="selected_product" class="form-control">
                                                <option v-for="(product, index) in list_sanphamnhap" :key="index"
                                                    :value="product">{{ product.ten_san_pham }}</option>
                                            </select>
                                        </div>
                                        <div class="mb-2">
                                            <label>Số lượng</label>
                                            <input type="number" v-model="quantity" class="form-control">
                                        </div>
                                        <div class="mb-2 d-flex justify-content-between">
                                            <label>Đơn giá</label>
                                            <p class="fw-bold"> VNĐ</p>
                                        </div>
                                        <div class="text-end">
                                            <button class="btn btn-primary" @click="addProduct">Thêm sản phẩm</button>
                                        </div>
                                    </div>
                                </div>

                                <div class="card">
                                    <div class="card-header">
                                        <strong>Thanh toán</strong>
                                    </div>
                                    <div class="card-body">
                                        <label>Phương thức</label>
                                        <select v-model="them_phieu.phuong_thuc" class="form-control mb-2">
                                            <option>Chuyển khoản</option>
                                            <option>Tiền mặt</option>
                                        </select>
                                        <h5 class="text-end">TỔNG TIỀN: <strong>VNĐ</strong></h5>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Danh sách sản phẩm -->
                        <div class="row">
                            <div class="col-md-12">
                                <table class="table text-center">
                                    <thead class="bg-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn giá</th>
                                            <th>Thành tiền</th>
                                            <th>Thao Tác</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(product, index) in addedProducts" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ product.ten_san_pham }}</td>
                                            <td>{{ product.so_luong }}</td>
                                            <td>{{ product.don_gia }} VNĐ</td>
                                            <td>{{ product.so_luong * product.don_gia }} VNĐ</td>
                                            <td><button class="btn" @click="removeProduct(index)"><i
                                                        class="fa-solid fa-trash"></i></button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-end">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button class="btn btn-success" data-bs-dismiss="modal" @click="submitInvoice()">Nhập hàng</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Xem Chi Tiết Nhập Hàng Modal -->
        <div class="modal fade" id="xemchitietphieu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                                <p>Đơn hàng {{ xem_chi_tiet_phieu.ma_phieu }}</p>
                                                <p>{{ xem_chi_tiet_phieu.ngay_nhap }}</p>
                                            </div>
                                            <div>
                                                <button v-if="xem_chi_tiet_phieu.trang_thai == 1"
                                                    class="btn btn-info text-light">Đã Thanh Toán</button>
                                                <button v-else class="btn btn-warning text-light">Chưa Thanh Toán</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-header bg-light" style="height:40px">
                                                <p class="">NGƯỜI ĐẶT</p>
                                            </div>
                                            <div class="card-body">
                                                <p>{{ xem_chi_tiet_phieu.nguoi_dat }}</p>
                                                <p class="">{{ xem_chi_tiet_phieu.sdt }}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="card">
                                            <div class="card-header bg-light" style="height:40px">
                                                <p>ĐỊA CHỈ GIAO HÀNG</p>
                                            </div>
                                            <div class="card-body">
                                                <p>{{ xem_chi_tiet_phieu.dia_chi }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="card">
                                    <div class="card-header bg-light">
                                        Phương Thức Thanh Toán
                                    </div>

                                    <div class="card-body">
                                        <div class="d-flex justify-content-between mb-5">
                                            Tiền Mặt:
                                            <a>{{ xem_chi_tiet_phieu.thanh_tien }} VNĐ</a>
                                        </div>
                                        <div class="d-flex justify-content-between">
                                            Ghi Chú:
                                            <a>{{ xem_chi_tiet_phieu.ghichu }}</a>
                                        </div>
                                    </div>

                                    <div class="card-footer bg-light d-flex justify-content-between">
                                        Tổng Tiền: <div><span>{{ xem_chi_tiet_phieu.thanh_tien }} VNĐ</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                                <table class="table table-hover text-center">
                                    <thead class="table-light">
                                        <tr>
                                            <th>#</th>
                                            <th>Tên Sản Phẩm</th>
                                            <th>Số Lượng</th>
                                            <th>Đơn Giá</th>
                                            <th>Thành Tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(value, index) in xem_chi_tiet_phieu.san_pham" :key="index">
                                            <td>{{ index + 1 }}</td>
                                            <td>{{ value.ten_san_pham }}</td>
                                            <td>{{ value.so_luong }}</td>
                                            <td>{{ value.don_gia }} VNĐ</td>
                                            <td>{{ value.so_luong * value.don_gia }} VNĐ</td>
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

        <!-- Xóa phiếu nhập Modal -->
        <div class="modal fade" id="xoaphieu" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-large">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5">Xóa phiếu nhập</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="alert alert-danger">
                            Bạn có chắc chắn muốn xóa phiếu nhập <b>{{ xoa_phieu.ma_phieu }}</b> này không?
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                        <button type="button" class="btn btn-danger" @click="deleteInvoice(xoa_phieu)"
                            data-bs-dismiss="modal">Xóa</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            xem_chi_tiet_phieu: {
                ma_phieu: "PN001",
                nha_cung_cap: "Nhà Cung Cấp A",
                ngay_nhap: "2025-04-01",
                tong_tien: 500000,
                trang_thai: 1,
                san_pham: [
                    { ten_san_pham: "Khăn choàng", so_luong: 2, don_gia: 200000 },
                    { ten_san_pham: "Áo thun đen", so_luong: 2, don_gia: 150000 },
                ],
                thanh_tien: 1000000,
                nguoi_dat: "Nguyễn Văn A",
                sdt: "0912345678",
                dia_chi: "123 Đường ABC, Quận 1, TP.HCM",
                ghichu: "Giao hàng tận nơi."
            },

            list_phieuNhap: [
                {
                    ma_phieu: "PN001",
                    nha_cung_cap: "Nhà Cung Cấp A",
                    ngay_nhap: "2025-04-01",
                    tong_tien: 500000,
                    trang_thai: 1
                },
                {
                    ma_phieu: "PN002",
                    nha_cung_cap: "Nhà Cung Cấp B",
                    ngay_nhap: "2025-04-02",
                    tong_tien: 350000,
                    trang_thai: 1
                },
                {
                    ma_phieu: "PN003",
                    nha_cung_cap: "Nhà Cung Cấp C",
                    ngay_nhap: "2025-04-03",
                    tong_tien: 400000,
                    trang_thai: 1
                },
                {
                    ma_phieu: "PN004",
                    nha_cung_cap: "Nhà Cung Cấp D",
                    ngay_nhap: "2025-04-04",
                    tong_tien: 600000,
                    trang_thai: 1
                },
                {
                    ma_phieu: "PN005",
                    nha_cung_cap: "Nhà Cung Cấp E",
                    ngay_nhap: "2025-04-05",
                    tong_tien: 550000,
                    trang_thai: 0
                }
            ],
            list_sanphamnhap: [
                { ten_san_pham: "Khăn choàng", so_luong: 2, don_gia: 200000 },
                { ten_san_pham: "Áo thun đen", so_luong: 2, don_gia: 150000 },
                { ten_san_pham: "Áo khoác", so_luong: 1, don_gia: 350000 }
            ],
            them_phieu: {
                ma_phieu: "",
                nha_cung_cap: "",
                dia_chi: "",
                sdt: "",
                ghichu: "",
                phuong_thuc: "",
            },
            selected_product: null,
            quantity: 1,
            addedProducts: [],
            xoa_phieu: {},
            searchQuery: "",
            suppliers: ["Nhà cung cấp 1", "Nhà cung cấp 2"],
        };
    },
    mounted() {
        this.loadData();
    },
    computed: {
        list_phieuNhap_filter() {
            return this.list_phieuNhap.filter((item) =>
                item.ma_phieu.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                item.nha_cung_cap.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {
        loadData() {
            axios.get("http://127.0.0.1:8000/api/admin/nhap-hang/data")
                .then((res) => {
                    this.list_phieuNhap = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        
},


};
</script>

<style scoped>/* Add your styles here if needed */</style>