<template>
    <div>
        <div class="text-end mb-3">
            <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#taonhacungcap">Thêm</button>
        </div>
        <div class="card mt-5">
            <div class="card-body">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th class="text-center align-middle">STT</th>
                            <th class="text-center align-middle">Tên nhà cung cấp</th>
                            <th class="text-center align-middle">SĐT</th>
                            <th class="text-center align-middle">Tình trạng</th>
                            <th class="text-center align-middle">Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(value, index) in list_nhaCungCap" :key="value.id">
                            <td class="text-center align-middle">{{ index + 1 }}</td>
                            <td class="text-center align-middle">{{ value.ten }}</td>
                            <td class="text-center align-middle">{{ value.sdt }}</td>
                            <td class="text-center align-middle">{{ value.trang_thai }}</td>
                            <td class="text-center align-middle">
                                <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuanhacungcap" @click="editNhaCungCap(value)">
                                    Chỉnh sửa
                                </button>
                                <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoanhacungcap" @click="setNhaCungCapToDelete(value)">
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Tạo nhà cung cấp -->
    <div class="modal fade" id="taonhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Tạo nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên nhà cung cấp</label>
                        <input type="text" v-model="nhaCungCap.ten" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label>SĐT</label>
                        <input type="text" v-model="nhaCungCap.sdt" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label>Tình trạng</label>
                        <select v-model="nhaCungCap.trang_thai" class="form-control">
                            <option value="Đang hoạt động">Đang hoạt động</option>
                            <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="createNhaCungCap" data-bs-dismiss="modal">Tạo</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Sửa nhà cung cấp -->
    <div class="modal fade" id="chinhsuanhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Sửa nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="mb-2">
                        <label>Tên nhà cung cấp</label>
                        <input type="text" v-model="nhaCungCap.ten" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label>SĐT</label>
                        <input type="text" v-model="nhaCungCap.sdt" class="form-control">
                    </div>
                    <div class="mb-2">
                        <label>Tình trạng</label>
                        <select v-model="nhaCungCap.trang_thai" class="form-control">
                            <option value="Đang hoạt động">Đang hoạt động</option>
                            <option value="Ngừng hoạt động">Ngừng hoạt động</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
                    <button type="button" class="btn btn-success" @click="updateNhaCungCap">Lưu</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Xóa nhà cung cấp -->
    <div class="modal fade" id="xoanhacungcap" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-large">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Xóa nhà cung cấp</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="alert alert-danger">
                        Bạn có chắc chắn muốn xóa nhà cung cấp <b>{{nhaCungCap.ten}}</b> này không?
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
                    <button type="button" class="btn btn-danger" @click="deleteNhaCungCap" data-bs-dismiss="modal">Xóa</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nhaCungCap: {
                id: '',
                ten: '',
                sdt: '',
                trang_thai: 'Đang hoạt động',
            },
            list_nhaCungCap: [
                { id: 'NC001', ten: 'Contain A', sdt: '092483212', trang_thai: 'Đang hoạt động' },
                { id: 'NC002', ten: 'Contain B', sdt: '094371213', trang_thai: 'Đang hoạt động' },
            ],
            idNhaCungCapToDelete: null,
        }
    },
    methods: {
        
    }
};
</script>

<style>
/* Thêm các kiểu CSS nếu cần */
</style>