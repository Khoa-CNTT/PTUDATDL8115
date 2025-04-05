<template>
    <div>
        <div class="text-end">
            <div>
                <button class="btn btn-info text-light" data-bs-toggle="modal" data-bs-target="#taodanhmuc">Thêm</button>
            </div>
        </div>
        <div class="card mt-5">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">STT</th>
                            <th class="text-center align-middle">Tên danh mục sản phẩm</th>
                            <th class="text-center align-middle">Slug</th>
                            <th class="text-center align-middle">Tình Trạng</th>
                            <th class="text-center align-middle">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in list_danhMuc" :key="value.id">
                            <td class="text-center align-middle">{{ index + 1 }}</td>
                            <td class="text-center align-middle">{{ value.ten }}</td>
                            <td class="text-center align-middle">{{ value.slug }}</td>
                            <td class="text-center align-middle">{{ value.trang_thai }}</td>
                            <td class="text-center align-middle">
                                <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuadanhmuc">
                                    Chỉnh Sửa
                                </button>
                                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoadanhmuc">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Tạo danh mục -->
    <div class="modal fade" id="taodanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo danh mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">ID danh mục</label>
                        <input type="text" v-model="danhMuc.id" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">Tên danh mục</label>
                        <input type="text" v-model="danhMuc.ten" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">Slug danh mục</label>
                        <input type="text" v-model="danhMuc.slug" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <label for="">Tình trạng</label>
                        <select v-model="danhMuc.trang_thai" class="form-control" style="width:300px">
                            <option value="Kích hoạt">Kích hoạt</option>
                            <option value="Không kích hoạt">Không kích hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Tạo</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa danh mục -->
    <div class="modal fade" id="chinhsuadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa danh mục</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">ID danh mục</label>
                        <input type="text" v-model="danhMuc.id" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">Tên danh mục</label>
                        <input type="text" v-model="danhMuc.ten" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-2">
                        <label for="">Slug danh mục</label>
                        <input type="text" v-model="danhMuc.slug" class="form-control" style="width:300px">
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <label for="">Tình trạng</label>
                        <select v-model="danhMuc.trang_thai" class="form-control" style="width:300px">
                            <option value="Kích hoạt">Kích hoạt</option>
                            <option value="Không kích hoạt">Không kích hoạt</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" data-bs-dismiss="modal">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa danh mục -->
    <div class="modal fade" id="xoadanhmuc" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger border-0 bg-danger alert-dismissible fade show py-2">
                        <div class="d-flex align-items-center">
                            <div class="font-35 text-white"><i class="bx bxs-message-square-x"></i></div>
                            <div class="ms-3">
                                <div class="text-white">Bạn có chắc chắn muốn xóa <b>{{danhMuc.ten}}</b> này không?</div>
                                <div class="text-white"><b>Lưu ý:</b> Điều này không thể hoàn tác!!</div>
                            </div>
                        </div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            danhMuc: {
                id: '',
                ten: '',
                slug: '',
                trang_thai: 'Kích hoạt',
            },
            pagination: {
                rowsPerPage: 10, // Số dòng trên mỗi trang
                currentPage: 1, // Trang hiện tại
                searchTerm: '', // Giá trị tìm kiếm
            },
            list_danhMuc: [
                {
                    id: 'DM001',
                    ten: 'Đồ chơi nghệ thuật',
                    slug: 'do-choi-nghe-thuat',
                    trang_thai: 'Kích hoạt',
                },
                {
                    id: 'DM002',
                    ten: 'Quần áo',
                    slug: 'quan-ao',
                    trang_thai: 'Kích hoạt',
                }
            ]
        }
    },
    methods: {
        // Thêm và xóa danh mục sẽ được thêm sau
    }
};
</script>

<style>
/* Thêm các kiểu CSS nếu cần */
</style>