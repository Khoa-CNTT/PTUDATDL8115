<template>
     <!-- Header -->
    <div class="appHeader no-border transparent position-absolute">
        <div class="right">
            <a href="/dang-nhap" class="headerButton">
                Đăng nhập
            </a>
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <h1>Đăng ký ngay</h1>
            <h4>Tạo tài khoản</h4>
        </div>
        <div class="section mb-5 p-2">
            <div class="card">
                <div class="card-body">
                    <form action="/">
                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="text4b">Họ và tên</label>
                                <input v-model="infoDK.ten_nguoi_dung" type="text" class="form-control" id="text4b" placeholder="Nhập họ và tên">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="email4b">Username</label>
                                <input v-model="infoDK.username" type="email" class="form-control" id="username4b" placeholder="Nhập username">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>
                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="email4b">Email</label>
                                <input v-model="infoDK.email" type="email" class="form-control" id="email4b" placeholder="Nhập email">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="select4b">Giới tính</label>
                                <select v-model="infoDK.gioi_tinh" class="form-control custom-select" id="select4b">
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                    <option value="3">Khác</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="password4b">Mật khẩu</label>
                                <input v-model="infoDK.password" type="password" autocomplete="off" class="form-control" id="password4b"
                                    placeholder="Nhập mật khẩu">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="phone4b">Số điện thoại</label>
                                <input v-model="infoDK.so_dien_thoai" type="tel" class="form-control" id="phone4b" placeholder="Nhập số điện thoại">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>

                        <div class="form-group boxed">
                            <div class="input-wrapper">
                                <label class="label" for="textarea4b">Địa chỉ</label>
                                <textarea v-model="infoDK.dia_chi" id="textarea4b" rows="2" class="form-control"
                                    placeholder="Nhập địa chỉ"></textarea>
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>
                        <div class="form-button-group transparent">
                    <button @click="registerFunc()" type="submit" class="btn btn-primary btn-block btn-lg">Đăng ký</button>
                </div>
                    </form>

                </div>
            </div>
            
        </div>

    </div>
    <!-- * Content -->

</template>
<script>
export default {
    data() {
        return {
            infoDK : {
                ten_nguoi_dung: '',
                username: '',
                password: '',
                email: '',
                ngay_sinh: '',
                dia_chi: '',
                so_dien_thoai: '',
                gioi_tinh: '',
            }
        }
    },
    methods: {
        registerFunc(e) {
            e.preventDefault(); // Ngăn form reload trang
        }
    }
}
</script>
<style>

</style>