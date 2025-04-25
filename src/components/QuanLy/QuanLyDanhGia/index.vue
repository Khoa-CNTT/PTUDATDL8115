<template>
    <div>

        <div class="card pt-2">
            <div class="card-header d-none d-sm-flex align-items-center">
                <h3 class>Quản lý Đánh Giá</h3>
            </div>
            <div class="card-body">
                <div class="d-lg-flex align-items-center mb-4 gap-3">
                    <div class="position-relative">
                        <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30 "
                            placeholder="Search">
                        <span class="position-absolute top-50 product-show translate-middle-y"><i
                                class="bx bx-search"></i></span>
                    </div>
                    
                </div>
                <div class="table-responsive">
                    <table class="table table-bordered mb-0">
                        <thead class="table-light">
                            <tr>
                                <th class="text-center align-middle">STT</th>
                                <th class="text-center align-middle">Tên Địa Điểm</th>
                                <th class="text-center align-middle">Tên Người Dùng</th>
                    
                                <th class="text-center align-middle">Số Sao</th>
                
                                <th class="text-center align-middle">Truy Cập</th>
                                <th class="text-center align-middle">Chi Tiết</th>
                                <th class="text-center align-middle">Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(value, index) in list_danhgia_filter" :key="index">
                                <td class="text-center align-middle">{{ index + 1 }}</td>
                                <td class="text-center align-middle">{{ value.id_dia_diem }}</td>
                                <td class="text-center align-middle">{{ value.id_nguoi_dung }}</td>
        
                                <td class="text-center align-middle">{{ value.so_sao }} <i class="fa-solid fa-star" style="color: #FFD43B;"></i></td>
                               
                                <td class="text-center align-middle">{{ value.truy_cap }}</td>
                                <td class="text-center align-middle">
                                    
                                    <button class="btn" data-bs-toggle="modal" data-bs-target="#noidungdanhgia"
                                        @click="Object.assign(xemchitietdanhgia, value)">
                                        <i class="fa-solid fa-circle-info"></i>
                                    </button>
                                </td>
                                <td class="text-center align-middle"><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoadanhgia"
                                        @click="Object.assign(xoa_danhgia, value)">
                                        Xóa
                                    </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>



    <!-- Xóa Đánh Giá -->
    <div class="modal fade" id="xoadanhgia" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Xóa Đánh Giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa Đánh Giá <b></b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="xoadanhgia()"
                        data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Nội Dung Đánh Giá -->
    <div class="modal fade" id="noidungdanhgia" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">Nội Dung Đánh Giá</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <a>{{ xemchitietdanhgia.noi_dung }}</a> 
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
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

            list_danhgia: [
            {
                id_dia_diem: "Công viên A",
                id_nguoi_dung: "Người Dùng 1",
                noi_dung: "Công viên rất đẹp và rộng rãi.",
                so_sao: 4,
                
                truy_cap: 120,
                tinh_trang: 1,
            },
            {
                id_dia_diem: "Nhà hàng B",
                id_nguoi_dung: "Người Dùng 2",
                noi_dung: "Nhà hàng có món ăn ngon, nhân viên thân thiện.",
                so_sao: 5,
               
                truy_cap: 200,
                tinh_trang: 0,
            },
            {
                id_dia_diem: "Bảo tàng C",
                id_nguoi_dung: "Người Dùng 3",
                noi_dung: "Một nơi tuyệt vời để học hỏi lịch sử.",
                so_sao: 4,
                
                truy_cap: 80,
                tinh_trang: 1,
            },
            {
                id_dia_diem: "Sân bay D",
                id_nguoi_dung: "Người Dùng 4",
                noi_dung: "Dịch vụ khá tốt, nhưng không gian chật hẹp.",
                so_sao: 3,
               
                truy_cap: 150,
                tinh_trang: 0,
            },
            {
                id_dia_diem: "Khách sạn E",
                id_nguoi_dung: "Người Dùng 5",
                noi_dung: "Khách sạn rất tiện nghi và sạch sẽ.",
                so_sao: 5,
              
                truy_cap: 50,
                tinh_trang: 1,
            }
        ],

            xemchitietdanhgia: {},
            xoa_danhgia: {},
            searchQuery: "",

        }
    },
    mounted() {
        this.loadData();
    },
    computed: {
        list_danhgia_filter() {
            return this.list_danhgia.filter((item) =>
                item.id_nguoi_dung.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        },
    },
    methods: {

        loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/danh-gia/data")
                .then((res) => {
                    this.list_danhgia = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        themdanhgia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-gia/create", this.them_danhgia)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        this.list_danhgia.push(this.them_danhgia);
                        alert(res.data.message);
                    } else {
                        alert("Thêm Đánh Giá thất bại");
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
            this.them_danhgia = {
                id_nguoi_dung: "",
                hinh_anh: "",
                slug: "",
                noi_dung: "",
                tinh_trang: 1,
            }
        },
        suadanhgia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-gia/update", this.sua_danhgia)
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
        xoadanhgia() {
            axios
                .post("http://127.0.0.1:8000/api/admin/danh-gia/delete", this.xoa_danhgia)
                .then((res) => {
                    if (res.data.status) {
                        this.loadData();
                        alert(res.data.message);
                    } else {
                        alert("Xóa Đánh Giá thất bại");
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