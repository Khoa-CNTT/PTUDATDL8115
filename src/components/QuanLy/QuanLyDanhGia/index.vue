<template>
    <div class="row">
        <div class="card-body text-light">
                    <div class="row">
                        <div class="col-lg-12 bg-light text-success">
                            <div class="container mt-5">
                                <div class="d-flex justify-content-between mb-5">
                                    <h4>
                                        <b class="text-primary">Đánh Giá</b>
                                    </h4>
                                </div>
                                <div>
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr class="text-center">
                                                <th>STT</th>
                                                <th>Tên Địa Điểm</th>
                                                <th>Tên Người Dùng</th>
                                                <th>Nội Dung</th>
                                                <th>Số Sao</th>
                                                <th>Thao Tác</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <template v-for="(value, index) in list_dg" :key="index">
                                                <tr class="align-middle">
                                                    <td  class="text-center">{{ index + 1 }}</td>
                                                    <td class="text-center">{{ value.namedd }}</td>
                                                    <td class="text-center">{{ value.nameuser}} </td>
                                                    <td>{{ value.noidung }}</td>
                                                    <td class="text-center">{{ value.sosao }} <i class="fa-solid fa-star" style="color: #FFD43B;"></i></td>
                                                    <td class="text-center">
                                                        <button class="btn btn-danger rounded-pill me-2  " style="width: 200px;"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                        Xóa</button>
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



    <!-- Modal xoa -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel"><i class="fa-solid fa-exclamation me-3" style="color: #FFD43B;"></i><b>Thông Báo</b></h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Bạn có muốn xóa bài đánh giá này không
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
            dg: {
                id: '',
                namedd: '',
                nameuser: '',
                noidung: '',
                sosao: '',
            },

            tt_hienthi_dg: {},

            return: {
                rowsPerPage: 10, // Số dòng trên mỗi trang
                currentPage: 1, // Trang hiện tại
                searchTerm: '', // Giá trị tìm kiếm
            },

            list_dg: [
                {
                    id: '1',
                    namedd: 'Ngõ Cafe',
                   nameuser: 'Lê Triều',
                    noidung: 'Quán Cafe view đẹp , giá nước rất hợp lý.',
                    sosao: '5',
                },
                {
                    id: '2',
                    namedd: 'Công Viên Châu Á',
                   nameuser: 'Lê Nhử',
                    noidung: 'Địa điểm vui chơi đáng trải nghiệm , nhưng phải xếp hàng để được chơi.',
                    sosao: '4',
                },
                {
                    id: '3',
                    namedd: 'Bánh Canh Cá Nục',
                   nameuser: 'Lê Vương',
                    noidung: 'Giá 1 tô 12k đầy đủ topping , chị nhân viên vui tính dễ mến.',
                    sosao: '5',
                },
                {
                    id: '4',
                    namedd: 'Cầu Trần Thị Lý',
                   nameuser: 'Lê Chính',
                    noidung: 'Cầu có view đẹp nhất tại đà nẵng , về đêm lại càng đẹp',
                    sosao: '5',
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