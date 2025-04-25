<template>
     <!-- Header -->
     <div class="appHeader no-border transparent position-absolute">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule">

        <div class="section mt-2 text-center">
            <h1>Quên mật khẩu</h1>
            <h4>Nhập email của bạn để cài lại mật khẩu</h4>
        </div>
        <div class="section mb-5 p-2">
            <form action="/thay-doi-mat-khau">
                <div class="card">
                    <div class="card-body pb-1">

                        <div class="form-group basic">
                            <div class="input-wrapper">
                                <label class="label" for="email1">E-mail</label>
                                <input v-model="infoQuenMK.email" type="email" class="form-control" id="email1" placeholder="Nhập email">
                                <i class="clear-input">
                                    <i class="fa-regular fa-circle-xmark"></i>
                                </i>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="form-button-group transparent">
                    <button @click="forgetPassword()" type="submit" class="btn btn-primary btn-block btn-lg">Xác nhận</button>
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
            infoQuenMK: {
                email: ''
            }
        }
    },
    methods: {
        forgetPassword(e) {
            e.preventDefault();
        }
    },

}
</script>
<style></style>