<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Hồ sơ của tôi
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">

        <div class="section mt-3 text-center">
            <div class="avatar-section">
                <!-- <a href=""> -->
                <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="avatar" class="imaged w100 rounded">
                <span class="button">
                    <form class="form-up-image">
                        <div class="custom-file-upload" id="fileUpload1">
                            <i class="fa-solid fa-camera"></i>
                            <input class="input-up-image" type="file" id="fileuploadInput" accept=".png, .jpg, .jpeg">
                        </div>
                    </form>
                </span>
                <!-- </a> -->
            </div>
        </div>

        <!-- Thay đổi thông tin -->
        <div class="section inset mt-2">
            <div class="section-title">Chỉnh sửa hồ sơ</div>
            <div class="accordion" id="accordionExample1">
                <div class="card">
                    <div class="card-body">
                        <label for="" class="mt-1">Tên người dùng</label>
                        <input v-model="infoPersonal.username" type="text" class="form-control mt-1">
                        <label for="" class="mt-1">Email</label>
                        <input v-model="infoPersonal.email" type="email" class="form-control mt-1">
                        <label for="" class="mt-1">Số điện thoại</label>
                        <input v-model="infoPersonal.so_dien_thoai" type="text" class="form-control mt-1">
                        <label for="" class="mt-1">Địa chỉ</label>
                        <input v-model="infoPersonal.dia_chi" type="text" class="form-control mt-1">
                        <div class="mt-2 text-end">
                            <button class="btn btn-outline-primary" data-bs-toggle="modal"
                                data-bs-target="#changePensonalInfo"
                                @click="Object.assign(edit_infoPersonal, infoPersonal)">Lưu thay đổi</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Dialog xác nhận thay đổi thông tin người dùng -->
            <div class="modal fade dialogbox" id="changePensonalInfo" data-bs-backdrop="static" tabindex="-1"
                role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Bạn muốn cập nhật thay đổi?</h5>
                        </div>
                        <div class="modal-footer">
                            <div class="btn-inline">
                                <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Hủy</a>
                                <a href="#" class="btn btn-text-primary" data-bs-dismiss="modal"
                                    @click="updateInfoPersonal()">Xác nhận</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- * Dialog xác nhận thay đổi thông tin người dùng -->
        </div>

        <!-- Khác -->
        <div class="section inset mt-2">
            <div class="section-title">Thay đổi mật khẩu</div>

            <div class="card">
                <div class="card-body">
                    <label for="" class="mt-1">Nhập mật khẩu cũ</label>
                    <input type="password" class="form-control mt-1">
                    <label for="" class="mt-1">Nhập mật khẩu mới</label>
                    <input type="password" class="form-control mt-1">
                    <label for="" class="mt-1">Nhập lại mật khẩu mới</label>
                    <input type="password" class="form-control mt-1">
                    <div class="mt-2 text-end">
                        <button class="btn btn-outline-primary" data-bs-toggle="modal"
                            data-bs-target="#changePassword">Cập nhật mật khẩu</button>
                    </div>
                </div>
            </div>

        </div>

        <!-- Dialog thay đổi mật khẩu -->
        <div class="modal fade dialogbox" id="changePassword" data-bs-backdrop="static" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Bạn chắc chắn muốn lưu mật khẩu mới?</h5>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-inline">
                            <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Hủy</a>
                            <a href="#" class="btn btn-text-primary" data-bs-dismiss="modal">Lưu thay đổi</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- * Dialog thay đổi mật khẩu -->

    </div>
    <!-- * Content -->
</template>
<script>
export default {
    data() {
        return {
            infoPersonal: {
                username: "Phạm Tấn Minh",
                email: "ptm060703.@gmail.com",
                so_dien_thoai: "0905123456",
                dia_chi: "13 Lê Duẩn, Hải Châu, Đà Nẵng"
            },
            changePassword: {
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''
            },
            edit_infoPersonal: {}
        }
    },
    methods: {
        updateInfoPersonal() {
            console.log(this.edit_infoPersonal);
            this.infoPersonal = { ...this.edit_infoPersonal };
            // Sao chép shallow(sao chép 1 lớp), tạo object mới có cùng nội dung, nhưng không trỏ cùng chỗ.
            // Tách biệt dữ liệu gốc và dữ liệu đang sửa.
            // Sau khi xác nhận thì mới cập nhật thật.
            // Dễ kiểm soát logic và trạng thái trong form.
        }
    }
}
</script>
<style></style>