<template>
    <div class="row">
        <div class="card">
            <div class="card-header" style="padding: 20px;">
                <div>
                    <h2>Quản lý địa điểm</h2>
                </div>
            </div>
            <div class="card-body">
                <!-- Tiêu đề -->
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input type="text" class="form-control ps-5 radius-30 search" placeholder="Tìm kiếm" id="search"
                            v-model="searchTerm">
                        <span class="position-absolute top-50 product-show translate-middle-y">
                            <i class="bx bx-search"></i>
                        </span>
                    </div>
                    <div class="ms-auto"><a href="javascript:;" class="btn btn-primary radius-30 mt-2 mt-lg-0"
                            data-bs-toggle="modal" data-bs-target="#ModalThemDiaDiem"><i
                                class="bx bxs-plus-square"></i>Thêm
                            mới địa điểm</a></div>
                </div> 
                <!-- Danh sách sản phẩm -->
                <div class="table-responsive ">
                    <table class="table mb-0 table-bordered">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center">STT</th>
                                <th class="text-center">ID địa điểm</th>
        

                                <th class="text-center">Tên địa điểm</th>
                                <th class="text-center">Mô tả</th>
                                <th class="text-center">Địa chỉ</th>
                                <th class="text-center">Danh mục</th>
                                <th class="text-center">Tình trạng</th>
                                <th class="text-center">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_dia_diem" :key="index"
                                style="vertical-align: middle;font-size: 16px;">
                                <td class="text-center">
                                    <h6 class="mb-0 font-14">{{ index + 1 + (currentPage - 1) * itemsPerPage }}</h6>
                                </td>
                                <td class="text-center"># {{ value.id_dia_diem }}</td>
                                <td class="text-center">
                                    <img v-bind:src="value.hinh_anh" class="me-3" alt=""
                                        style="max-width: 60px;max-height: 60px;height: 60px;width: 60px;border-radius: 10px;">{{
                                            value.ten_dia_diem }}
                                </td>
                                <td class="text-center"><button class="btn"><i class="fa-solid fa-circle-info" data-bs-toggle="modal"
                                            data-bs-target="#Modalmotadiadiem" @click="Object.assign(xemmota,value)"></i></button></td>
                                <td class="text-center">{{ value.dia_chi }}</td>
                                <td class="text-center">
                                    {{ value.danh_muc }}
                                </td>
                                <td class="text-center">
                                    <a v-if="value.tinh_trang == 0"
                                        class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i> ĐANG TẠM DỪNG</a>
                                    <a v-else
                                        class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3"><i
                                            class='bx bxs-circle me-1'></i> ĐANG HOẠT ĐỘNG</a>
                                </td>
                                <td>
                                    <div class="d-flex order-actions justify-content-center">
                                        <button class="btn btn-warning ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalSuaDiaDiem" @click="moModalSua(value)">Sửa</button>
                                        <button class="btn btn-danger ms-3" data-bs-toggle="modal"
                                            data-bs-target="#ModalXoaDiaDiem" @click="moModalXoa(value)">Xóa</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            </div>
        </div>
    </div>
<!-- Xem Nội Dung Bài Viết -->
<div class="modal fade" id="Modalmotadiadiem" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Mô tả</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <a>{{ xemmota.mo_ta}}</a> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal Them dia diem -->
    <div class="modal fade" id="ModalThemDiaDiem" tabindex="-1" aria-labelledby="ModalThemDiaDiemLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="width: 60vw; max-width: none;">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #D9D9D9;">
                    <h1 class="modal-title fs-5" id="ModalThemDiaDiemLabel">Thông tin địa điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="font-size: 16px;">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="add_id_dia_diem" class="form-label">ID địa điểm</label>
                                    <input type="text" class="form-control" id="add_id_dia_diem"
                                        v-model="luu_tam.id_dia_diem" placeholder="Nhập ID địa điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="add_ten_dia_diem" class="form-label">Tên địa điểm</label>
                                    <input type="text" class="form-control" id="add_ten_dia_diem"
                                        v-model="luu_tam.ten_dia_diem" placeholder="Nhập tên địa điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="add_toa_do" class="form-label">Tọa độ</label>
                                    <input type="text" class="form-control" id="add_toa_do" v-model="luu_tam.toa_do"
                                        placeholder="Nhập hoặc chọn tọa độ">
                                </div>
                                <div class="mb-3">
                                    <label for="add_hinh_anh" class="form-label">Hình ảnh</label>
                                    <input type="text" class="form-control" id="add_hinh_anh" v-model="luu_tam.hinh_anh"
                                        placeholder="Nhập link hình ảnh" @input="previewImage">
                                    <div v-if="imagePreview" class="mt-2">
                                        <img :src="imagePreview" alt="Xem trước hình ảnh"
                                            style="max-width: 100%; height: auto; border-radius: 5px;">
                                    </div>

                                    <div v-else-if="luu_tam.hinh_anh" class="mt-2">
                                        <img :src="luu_tam.hinh_anh" alt="Hình ảnh hiện tại"
                                            style="max-width: 100%; height: auto; border-radius: 5px;">
                                    </div>
                                    <div v-else class="mt-2">
                                        <span class="text-muted">Chưa có link hình ảnh.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="add_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="add_danh_muc" v-model="luu_tam.danh_muc"
                                        placeholder="Nhập danh mục">
                                </div>
                                <div class="mb-3">
                                    <label for="add_tinh_trang" class="form-label">Tình trạng</label>
                                    <select class="form-select" id="add_tinh_trang" v-model="luu_tam.tinh_trang">
                                        <option value="1">Đang hoạt động</option>
                                        <option value="0">Tạm nghỉ</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="add_dia_chi" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" id="add_dia_chi" v-model="luu_tam.dia_chi"
                                        placeholder="Nhập địa chỉ">
                                </div>
                                <div class="mb-3">
                                    <label for="add_mo_ta" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="add_mo_ta" rows="7" v-model="luu_tam.mo_ta"
                                        placeholder="Nhập mô tả địa điểm"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="background-color: #D9D9D9;">
                    <button type="button" class="btn btn-danger text-white" data-bs-dismiss="modal">Huỷ</button>
                    <button type="button" class="btn btn-primary text-white" @click="them_dia_diem()">Thêm</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal chính sửa -->
    <div class="modal fade" id="ModalSuaDiaDiem" tabindex="-1" aria-labelledby="ModalSuaDiaDiemLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="width: 60vw; max-width: none;">
            <div class="modal-content">
                <div class="modal-header" style="background-color: #D9D9D9;">
                    <h1 class="modal-title fs-5" id="ModalSuaDiaDiemLabel">Sửa thông tin địa điểm</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" style="font-size: 16px;">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="edit_id_dia_diem" class="form-label">ID địa điểm</label>
                                    <input type="text" class="form-control" id="edit_id_dia_diem"
                                        v-model="dia_diem.id_dia_diem" placeholder="Nhập ID địa điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_ten_dia_diem" class="form-label">Tên địa điểm</label>
                                    <input type="text" class="form-control" id="edit_ten_dia_diem"
                                        v-model="dia_diem.ten_dia_diem" placeholder="Nhập tên địa điểm">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_toa_do" class="form-label">Tọa độ</label>
                                    <input type="text" class="form-control" id="edit_toa_do" v-model="dia_diem.toa_do"
                                        placeholder="Nhập hoặc chọn tọa độ">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_hinh_anh" class="form-label">Hình ảnh</label>
                                    <input type="text" class="form-control" id="edit_hinh_anh"
                                        v-model="dia_diem.hinh_anh" placeholder="Nhập link hình ảnh"
                                        @input="previewImage">
                                    <div v-if="imagePreview" class="mt-2">
                                        <img :src="imagePreview" alt="Xem trước hình ảnh"
                                            style="max-width: 100%; height: auto; border-radius: 5px;">
                                    </div>

                                    <div v-else-if="dia_diem.hinh_anh" class="mt-2">
                                        <img :src="dia_diem.hinh_anh" alt="Hình ảnh hiện tại"
                                            style="max-width: 100%; height: auto; border-radius: 5px;">
                                    </div>
                                    <div v-else class="mt-2">
                                        <span class="text-muted">Chưa có link hình ảnh.</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="p-4 rounded">
                                <div class="mb-3">
                                    <label for="edit_danh_muc" class="form-label">Danh mục</label>
                                    <input type="text" class="form-control" id="edit_danh_muc"
                                        v-model="dia_diem.danh_muc" placeholder="Nhập danh mục">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_tinh_trang" class="form-label">Tình trạng</label>
                                    <select class="form-select" id="edit_tinh_trang" v-model="dia_diem.tinh_trang">
                                        <option value="1">Đang hoạt động</option>
                                        <option value="0">Tạm nghỉ</option>
                                    </select>
                                </div>
                                <div class="mb-3">
                                    <label for="edit_dia_chi" class="form-label">Địa chỉ</label>
                                    <input type="text" class="form-control" id="edit_dia_chi" v-model="dia_diem.dia_chi"
                                        placeholder="Nhập địa chỉ">
                                </div>
                                <div class="mb-3">
                                    <label for="edit_mo_ta" class="form-label">Mô tả</label>
                                    <textarea class="form-control" id="edit_mo_ta" rows="7" v-model="dia_diem.mo_ta"
                                        placeholder="Nhập mô tả địa điểm"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer" style="background-color: #D9D9D9;">
                    <button type="button" class="btn btn-danger text-white" data-bs-dismiss="modal">Huỷ</button>
                    <button type="button" class="btn btn-primary text-white" @click="capNhatDiaDiem">Lưu thay
                        đổi</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal xoá địa điểm -->
    <div class="modal fade" id="ModalXoaDiaDiem" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="content p-5 px-3 text-center">
                        <span class="fa-stack fa-2x mb-3">
                            <i class="fa-solid fa-2xl fa-circle" style="color: #ffc8c2;"></i>
                            <i class="fa-solid fa-trash-can text-danger fa-stack-1x"></i>
                        </span>
                        <h3 class="fs-20 text-gray-9 fw-bold mb-2 mt-1">Xoá địa điểm</h3>
                        <p class="text-gray-6 mb-0 fs-16">Bạn có chắc chắn muốn xoá địa điểm này không?</p>
                        <h5 class="mt-3">{{ dia_diem.id_dia_diem }} - {{ dia_diem.ten_dia_diem }}</h5>
                        <div class="modal-footer-btn mt-3 d-flex justify-content-center mt-5">
                            <button type="button" class="btn me-2 btn-secondary fs-13 fw-medium p-2 px-3 shadow-none"
                                data-bs-dismiss="modal" style="background-color: #FF2C2C;width: 30%;">Huỷ</button>
                            <button type="submit" class="btn btn-primary fs-13 fw-medium p-2 px-3"
                                style="background-color: #FE9F43;width: 30%;" @click="xoaDiaDiem">Đồng ý xoá</button>
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
            imagePreview: null, // Dùng để xem trước hình ảnh
            currentPage: 1, // Trang bắt đầu với page 1
            itemsPerPage: 8, // Giới hạn 6 dòng thông tin trên table
            dia_diem_tam_thoi: null, // Dùng để lưu trữ thông tin địa điểm khi mở modal sửa/xóa
            list_dia_diem: [
                {
                id_dia_diem: "1",
                ten_dia_diem: "aa",
                hinh_anh: "",
                mo_ta: "bbbbb",
                tinh_trang: 1,
                dia_chi: "aaaa",
                toa_do: "123",
                danh_muc: "aa",
                }
            ],  
            xemmota:{},
            luu_tam: {},
            dia_diem: {
                id_dia_diem: "",
                ten_dia_diem: "",
                hinh_anh: "",
                mo_ta: "",
                tinh_trang: 1,
                dia_chi: "",
                toa_do: "",
                danh_muc: "",
            },
        }
    },
    mounted(){
        this.loadData()
    },
    methods: {
        // Xem trước hình ảnh khi nhập link
        previewImage() {
            this.imagePreview = this.dia_diem.hinh_anh;
        },



        loadData(){
            axios
                .get("http://127.0.0.1:8000/api/admin/dia-diem/data")
                .then((res) => {
                    this.list_dia_diem = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themDiaDiem(){
            axios
                .post("http://127.0.0.1:8000/api/admin/dia-diem/create", this.them_dd)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.list_dia_diem.push(this.them_dd);
                        alert(res.data.message);
                    } else {
                        alert("Thêm danh mục địa điểm thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            this.them_dd = {
                id_dia_diem: "",
                ten_dia_diem: "",
                hinh_anh: "",
                mo_ta: "",
                tinh_trang: 1,
                dia_chi: "",
                toa_do: "",
                danh_muc: "",
            }
        },
        suaDiaDiem(){
            axios
                .post("http://127.0.0.1:8000/api/admin/dia-diem/update", this.sua_dd)
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
        xoaDiaDiem() {
            axios
                .post("http://127.0.0.1:8000/api/admin/dia-diem/delete", this.xoa_dd)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa danh mục địa điểm thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    }
}
</script>
<style></style>