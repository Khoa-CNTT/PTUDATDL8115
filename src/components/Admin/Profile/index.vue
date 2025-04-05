<template>
    <div class="container mt-4">
      <h4 class="mb-3">Hồ sơ</h4>
      <div class="row">
        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Họ và tên</label>
            <input type="text" class="form-control" v-model="user.fullName" />
          </div>
          <div class="mb-3">
            <label class="form-label">Username</label>
            <input type="text" class="form-control" v-model="user.username" />
          </div>
          <div class="mb-3">
            <label class="form-label">Password</label>
            <input type="password" class="form-control" v-model="user.password" />
          </div>
          <div class="mb-3">
            <label class="form-label">Email</label>
            <input type="email" class="form-control" v-model="user.email" />
          </div>
        </div>
        <div class="col-md-6">
          <div class="mb-3">
            <label class="form-label">Số điện thoại</label>
            <input type="text" class="form-control" v-model="user.phone" />
          </div>
          <div class="mb-3">
            <label class="form-label">Trạng thái</label>
            <input type="text" class="form-control" v-model="user.status" />
          </div>
          <div class="mb-3">
            <label class="form-label">Giới tính</label>
            <input type="text" class="form-control" v-model="user.gender" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end mt-3">
        <button class="btn btn-danger me-2" @click="cancel">Hủy</button>
        <button class="btn btn-success" @click="saveProfile">Lưu</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        user: {
          fullName: "Đỗ Văn A",
          username: "Admin1",
          password: "Admin123@",
          email: "VanA@gmail.com",
          phone: "09473812664",
          status: "Đang hoạt động",
          gender: "Nam",
        },
      };
    },
    methods: {
      cancel() {
        alert("Đã hủy chỉnh sửa!");
      },
      saveProfile() {
        alert("Hồ sơ đã được lưu!");
      },
    },
  };
  </script>
  
  <style>
  /* Tuỳ chỉnh nếu cần */
  </style>
  