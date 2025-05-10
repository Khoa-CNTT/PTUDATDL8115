<template>
  <div>

    <div class="card pt-">
      <div class="card-header d-none d-sm-flex align-items-center">
        <h3 class>Quản lý Đơn Hàng</h3>
      </div>
      <div class="card-body">
        <div class="d-lg-flex align-items-center mb-4 gap-3">
          <div class="position-relative">
            <input v-model="searchQuery" type="text" class="form-control ps-5 radius-30 " placeholder="Search">
            <span class="position-absolute top-50 product-show translate-middle-y"><i class="bx bx-search"></i></span>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table table-bordered mb-0">
            <thead class="table-light text-center">
              <tr>
                <th>STT</th>
                <th>Khách Hàng</th>
                <th>Mã Đơn Hàng</th>
                <th>Ngày Lập</th>
                <th>Địa Chỉ</th>
                <th>Số Điện Thoại</th>
                <th>Trạng Thái</th>
                <th>Phương Thức</th>
                <th>Chi tiết</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(value, index) in list_donhang" :key="index">
                <td class="text-center align-middle">{{ index + 1 }}</td>
                <td class="text-center align-middle">{{ value.id_nguoi_dung }}</td>
                <td class="text-center align-middle">{{ value.ma_don_hang }}</td>
                <td class="text-center align-middle">{{ value.ngay_lap }}</td>
                <td class="text-center align-middle">{{ value.id_dia_chi }}</td>
                <td class="text-center align-middle">{{ value.so_dien_thoai }}</td>
                <td class="text-center align-middle">
                  <div v-if="value.trang_thai == 0"
                    class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                    <i class='bx bxs-circle me-1'></i>Xét duyệt
                  </div>
                  <div v-else-if="value.trang_thai == 1"
                    class="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                    <i class='bx bxs-circle me-1'></i>Đang Giao
                  </div>
                  <div v-else-if="value.trang_thai == 2"
                    class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                    <i class='bx bxs-circle me-1'></i>Đã Thanh Toán
                  </div>
                  <div v-else-if="value.trang_thai == 3"
                    class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3">
                    <i class='bx bxs-circle me-1'></i>Hủy Đơn
                  </div>
                  <div v-else class="badge rounded-pill text-secondary bg-light-secondary p-2 text-uppercase px-3">
                    <i class='bx bxs-circle me-1'></i>Không xác định
                  </div>
                </td>
                <td class="text-center align-middle">
                  <button style="width: 120px; height: 25px;" v-if="value.loai_thanh_toan == 1"
                    class="badge rounded-pill text-primary bg-light-primary p-1 text-uppercase ">
                    <i class='bx bxs-circle'></i> Đổi Điểm
                  </button>
                  <button v-else class="btn btn-sm rounded-pill text-secondary bg-light-secondary text-uppercase ">
                    <i class='bx bxs-circle'></i> Đổi Tiền
                  </button>
                </td>

                <td class="text-center align-middle">
                  <button class="btn" data-bs-toggle="modal" data-bs-target="#xemdonhang"
                    @click="Object.assign(sua_donhang, value)">
                    <i class="fa-solid fa-circle-info"></i>
                  </button>
                </td>
                <td class="text-center align-middle">
                  <button class="btn btn-warning me-2" data-bs-toggle="modal" data-bs-target="#chinhsuadonhang"
                    @click="Object.assign(sua_donhang, value)">
                    Sửa
                  </button>
                  <button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#xoadonhang"
                    @click="Object.assign(xoa_donhang, value)">
                    Xóa
                  </button>


                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="chinhsuadonhang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">Mã Đơn Hàng : <b>{{ sua_donhang.ma_don_hang }}</b></h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-2">
            <label class="mb-2">Trạng Thái Đơn Hàng</label>
            <select v-model="sua_donhang.trang_thai" class="form-control">
              <option value="0">Xét Duyệt</option>
              <option value="1">Đang Giao</option>
              <option value="2">Đã Thanh Toán</option>
              <option value="3">Hủy Đơn</option>
            </select>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Hủy</button>
          <button type="button" class="btn btn-success" @click="suadonhang()" data-bs-dismiss="modal">Lưu</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="xemdonhang" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Chi Tiết Đơn Hàng</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <div class="card-body d-flex justify-content-between">
                  <div>
                    <p>Đơn hàng {{ sua_donhang.ma_don_hang }}</p>
                    <p>{{ sua_donhang.ngay_lap }}</p>
                  </div>
                  <div>
                    <div v-if="sua_donhang.trang_thai == 0"
                      class="badge rounded-pill text-warning bg-light-warning p-2 text-uppercase px-3">
                      <i class='bx bxs-circle me-1'></i>Xét duyệt
                    </div>
                    <div v-else-if="sua_donhang.trang_thai == 1"
                      class="badge rounded-pill text-info bg-light-info p-2 text-uppercase px-3">
                      <i class='bx bxs-circle me-1'></i>Đang Giao
                    </div>
                    <div v-else-if="sua_donhang.trang_thai == 2"
                      class="badge rounded-pill text-success bg-light-success p-2 text-uppercase px-3">
                      <i class='bx bxs-circle me-1'></i>Đã Thanh Toán
                    </div>
                    <div v-else-if="sua_donhang.trang_thai == 3"
                      class="badge rounded-pill text-danger bg-light-danger p-2 text-uppercase px-3">
                      <i class='bx bxs-circle me-1'></i>Hủy Đơn
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-header bg-light" style="height:40px">
                      <p class="">NGƯỜI ĐẶT</p>
                    </div>
                    <div class="card-body">
                      <p>{{ sua_donhang.id_nguoi_dung }}</p>
                      <p>{{ sua_donhang.so_dien_thoai }}</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="card">
                    <div class="card-header bg-light" style="height:40px">
                      <p>ĐỊA CHỈ GIAO HÀNG</p>
                    </div>
                    <div class="card-body">
                      <p>{{ sua_donhang.id_dia_chi }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4">
              <div class="card">
                <div class="card-header bg-light">
                  Phương Thức Thanh Toán
                </div>
                <div class="card-body">
                  <div class="mb-2">
                    <b>Tiền Mặt: </b> {{ sua_donhang.tong_tien }}
                  </div>
                  <div class="">
                    <b>Ghi Chú: </b> {{ sua_donhang.ghi_chu }}
                  </div>
                </div>
                <div class="card-footer bg-light d-flex justify-content-between">
                  Tổng Tiền: <div><span>{{ sua_donhang.tong_tien }}</span> VND</div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <table class="table table-hover text-center">
                <thead class="table-light">
                  <tr>
                    <th>#</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Đơn Giá</th>
                    <th>Thành Tiền</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(value, index) in list_sanphamnhap" :key="index">
                    <tr>
                      <td>{{ index + 1 }}</td>
                      <td>{{ value.ten_san_pham }}</td>
                      <td>{{ value.so_luong }}</td>
                      <td>{{ value.don_gia }}₫</td>
                      <td>{{ value.so_luong * value.don_gia }}₫</td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="xoadonhang" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Xóa Đơn Hàng</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          Bạn có chắc chắn muốn xóa đơn hàng <strong>{{ xoa_donhang.ma_don_hang }}</strong> không?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
          <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="xoadonhang()">Xóa</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {

      list_donhang: [
        {
          id_nguoi_dung: "Người Dùng 1",
          ma_don_hang: "DH000001",
          ngay_lap: "12/02/2025",
          trang_thai: 0,
          loai_thanh_toan: 1,
          ghi_chu: "Đơn Hàng Đã Thanh Toán Và Đang Được Giao",
          id_dia_chi: "Số 3 Trần Cao Vân",
          so_dien_thoai: "0328693347",
          tong_tien: "100 tỷ",
        },
        {
          id_nguoi_dung: "Người Dùng 1",
          ma_don_hang: "DH000001",
          ngay_lap: "12/02/2025",
          trang_thai: 0,
          loai_thanh_toan: 1,
          ghi_chu: "Đơn Hàng Đã Thanh Toán Và Đang Được Giao",
          id_dia_chi: "Số 3 Trần Cao Vân",
          so_dien_thoai: "0328693347",
          tong_tien: "100 tỷ",
        },
        {
          id_nguoi_dung: "Người Dùng 1",
          ma_don_hang: "DH000001",
          ngay_lap: "12/02/2025",
          trang_thai: 0,
          loai_thanh_toan: 1,
          ghi_chu: "Đơn Hàng Đã Thanh Toán Và Đang Được Giao",
          id_dia_chi: "Số 3 Trần Cao Vân",
          so_dien_thoai: "0328693347",
          tong_tien: "100 tỷ",
        }
      ],
      them_donhang: {
        id_nguoi_dung: "",
        ma_don_hang: "",
        so_dien_thoai: "",
        ngay_lap: "",
        trang_thai: 0,
        loai_thanh_toan: 1,
        ghi_chu: "",
        id_dia_chi: "",
        tong_tien: "",

      },
      list_sanphamnhap: [
        {
          ten_san_pham: "Khăn choàng",
          so_luong: 2,
          don_gia: 200000,
        },
        {
          ten_san_pham: "Áo thun đen",
          so_luong: 2,
          don_gia: 150000,
        },
        {
          ten_san_pham: "Áo khoác",
          so_luong: 1,
          don_gia: 350000,
        }
      ],
      sua_donhang: {},
      xoa_donhang: {},
      searchQuery: "",

    }
  },
  mounted() {
    this.loadData();
  },
  computed: {
    list_donhang_filter() {
      return this.list_donhang.filter((item) =>
        item.id_nguoi_dung.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {

    loadData() {
      axios
        .get("http://127.0.0.1:8000/api/admin/don-hang/data")
        .then((res) => {
          this.list_donhang = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    suadonhang() {
      const index = this.list_donhang.findIndex(
        (item) => item.ma_don_hang === this.sua_donhang.ma_don_hang
      )
      if (index !== -1) {
        this.list_donhang[index].trang_thai = this.sua_donhang.trang_thai;
        // Bạn có thể gọi API để cập nhật dữ liệu trên server ở đây
        console.log("Đã cập nhật đơn hàng:", this.list_donhang[index]);
      } else {
        console.error("Không tìm thấy đơn hàng để cập nhật.");
      }
    },
    xoadonhang() {
      const index = this.list_donhang.findIndex(
        (item) => item.ma_don_hang === this.xoa_donhang.ma_don_hang
      );
      if (index !== -1) {
        this.list_donhang.splice(index, 1);
        // Bạn có thể gọi API để xóa dữ liệu trên server ở đây
        console.log("Đã xóa đơn hàng:", this.xoa_donhang.ma_don_hang);
      } else {
        console.error("Không tìm thấy đơn hàng để xóa.");
      }
    }
  },
};
</script>

<style></style>