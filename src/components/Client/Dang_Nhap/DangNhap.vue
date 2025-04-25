<template>
    <!-- Content -->
    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <h1>Đăng nhập</h1>
        </div>
        <div class="section mb-5 p-2">
            <form action="/">
                <div class="card">
                    <div class="card-body pb-1">
                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="email1">Username</label>
                                <input v-model="infoDN.username" type="email" class="form-control" id="email1" placeholder="Nhập username">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="password1">Mật khẩu</label>
                                <input v-model="infoDN.password" type="password" class="form-control" id="password1" autocomplete="off"
                                    placeholder="Nhập mật khẩu">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="form-links mt-2">
                    <div>
                        <a href="/dang-ky">Đăng ký ngay</a>
                    </div>
                    <div><a href="/quen-mat-khau" class="text-muted">Quên mật khẩu?</a></div>
                </div>

                <div class="form-button-group  transparent">
                    <button @click="logInFunc()" type="submit" class="btn btn-primary btn-block btn-lg">Đăng nhập</button>
                </div>

            </form>
        </div>

    </div>
    <!-- * Content -->
</template>
<script>
export default {
    data() {
        return {
            infoDN: {
                username: '',
                password: '',
            }
        }
    },
    methods: {
        logInFunc(e) {
            e.preventDefault();
            
        }
    }
    
}
</script>
<style>
</style>