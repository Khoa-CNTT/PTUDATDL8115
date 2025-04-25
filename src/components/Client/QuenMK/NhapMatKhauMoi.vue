<template>
    <!-- Header -->
    <div class="appHeader no-border transparent position-absolute">
       <div class="left">
           <router-link to="/quen-mat-khau" class="headerButton goBack">
               <i class="fa-solid fa-arrow-left"></i>
           </router-link>
       </div>
   </div>
   <!-- * Header -->

   <!-- Content -->
   <div id="appCapsule">

       <div class="section mt-2 text-center">
           <h1>Thay đổi mật khẩu</h1>
       </div>
       <div class="section mb-5 p-2">
           <form action="/">
               <div class="card">
                   <div class="card-body pb-1">

                       <div class="form-group basic">
                           <div class="input-wrapper">
                               <label class="label" for="email1">Mật khẩu mới</label>
                               <input v-model="infoQuenMK.email" type="text" class="form-control" id="email1" placeholder="Mật khẩu mới">
                               <label class="label mt-2" for="email1">Xác nhận mật khẩu mới</label>
                               <input v-model="infoQuenMK.email" type="text" class="form-control" id="email1" placeholder="Xác nhận mật khẩu mới">
                               
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