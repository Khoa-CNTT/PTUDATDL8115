<template>
  <div class="page-content">
    <div class="container">
      <div class="main-body">
        <div class="row">
          <!-- Thông tin người dùng bên trái -->
          <div class="col-lg-4">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img src="https://placehold.co/150" alt="Admin" class="rounded-circle p-1 bg-primary" width="110">
                  <div class="mt-3">
                    <h4>{{ user.fullName }}</h4>
                    <p class="text-secondary mb-1">Quản trị viên</p>
                    <p class="text-muted font-size-sm">
                      <i class="fa-solid fa-circle me-1 text-success"></i>{{ user.status }}
                    </p>
                  </div>
                </div>
                <hr class="my-4" />
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Họ và tên</h6>
                    <span class="text-secondary">{{ user.fullName }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Email</h6>
                    <span class="text-secondary">{{ user.email }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Số điện thoại</h6>
                    <span class="text-secondary">{{ user.phone }}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">Địa chỉ</h6>
                    <span class="text-secondary">{{ user.address }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Form cập nhật thông tin -->
          <div class="col-lg-8">
            <div class="card mb-4">
              <div class="card-body">
                <h3 class="text-primary mb-3">
                  <i class="fa-solid fa-user me-3"></i>Thông tin cá nhân
                </h3>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Họ và tên</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" v-model="user.fullName" />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" v-model="user.email" />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Số điện thoại</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" v-model="user.phone" />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Địa chỉ</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="text" class="form-control" v-model="user.address" />
                  </div>
                </div>

                <div class="text-end">
                  <button class="btn btn-outline-secondary me-2">Hủy thay đổi</button>
                  <button class="btn btn-outline-primary px-4" @click="luu">Lưu thay đổi</button>
                </div>
              </div>
            </div>

            <!-- Form đổi mật khẩu -->
            <div class="card">
              <div class="card-body">
                <h3 class="text-primary mb-3">
                  <i class="fa-solid fa-lock me-3"></i>Đổi mật khẩu
                </h3>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mật khẩu hiện tại</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="password" class="form-control" v-model="currentPassword" placeholder="Mật khẩu hiện tại" />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Mật khẩu mới</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="password" class="form-control" v-model="newPassword" placeholder="Mật khẩu mới" />
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Xác nhận lại mật khẩu</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input type="password" class="form-control" v-model="confirmPassword" placeholder="Xác nhận lại mật khẩu" />
                  </div>
                </div>

                <div class="text-end">
                  <button class="btn btn-outline-primary px-4" @click="doimatkhau">Thay đổi mật khẩu</button>
                </div>
              </div>
            </div>
          </div> <!-- End col-lg-8 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        fullName: "Đỗ Văn A",
        email: "vana@gmail.com",
        phone: "09473812664",
        address: "13 Lê Duẩn, Hải Châu 1, Đà Nẵng",
        status: "Đang hoạt động"
      },
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },
  methods: {
    luu() {
      console.log("Thông tin người dùng:", this.user);
      alert("Hồ sơ đã được lưu!");
    },
    doimatkhau() {
      if (this.newPassword !== this.confirmPassword) {
        alert("Mật khẩu xác nhận không khớp!");
      } else if (!this.currentPassword || !this.newPassword) {
        alert("Vui lòng nhập đầy đủ các trường!");
      } else {
        alert("Đổi mật khẩu thành công!");
      }
    },
    loadData() {
            axios
                .get("http://127.0.0.1:8000/api/admin/profile/data")
                .then((res) => {
                    this.user = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
  }
};
</script>

<style>
/* Tuỳ chỉnh thêm nếu cần */
</style>
