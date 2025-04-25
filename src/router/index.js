import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
  // {
  //     path : '/',
  //     component: ()=>import('../layout/wrapper/index.vue')
  // },

  {
    path: "/",
    component: () => import("../layout/wrapper/index.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/Client/Home/Home.vue"),
      },
      {
        path: "kham-pha",
        component: () => import("../components/Client/Discovery/Discover.vue"),
      },
      {
        path: "check-in",
        component: () => import("../components/Client/Check_In/CheckIn.vue"),
      },
      {
        path: "show-info",
        component: () => import("../components/Client/Check_In/ShowInfo.vue"),
        // meta: { layout: 'blank' }
      },
      {
        path: "post",
        component: () => import("../components/Client/Post/BaiViet.vue"),
      },
      {
        path: "shopping",
        component: () => import("../components/Client/Shopping/Shopping.vue"),
      },
      {
        path: "shopping-cart",
        component: () =>
          import("../components/Client/Shopping/ShoppingCart.vue"),
        // meta: { layout: 'blank' }
      },
    ],
  },

  {
    path: "/",
    component: () => import("../layout/wrapper/BlankClient.vue"),
    children: [
      {
        path: "profile",
        component: () => import("../components/Client/Profile/Profile.vue"),
      },
      {
        path: "so-check-in",
        component: () =>
          import("../components/Client/Check_In/CollectionCheckIn.vue"),
      },
      {
        path: "confirm-post",
        component: () =>
          import("../components/Client/Check_In/ConfirmPost.vue"),
      },
      {
        path: "ask-search",
        component: () =>
          import("../components/Client/Search_ChatBot/SearchOrAsk.vue"),
      },
      {
        path: "chatbot",
        component: () =>
          import("../components/Client/Search_ChatBot/ChatBot.vue"),
      },
      {
        path: "map-location",
        component: () =>
          import("../components/Client/Discovery/MapLocation.vue"),
      },
      {
        path: "dang-ky",
        component: () => import("../components/Client/Dang_Ky/DangKi.vue"),
      },
      {
        path: "dang-nhap",
        component: () => import("../components/Client/Dang_Nhap/DangNhap.vue"),
      },
      {
        path: "quen-mat-khau",
        component: () => import("../components/Client/QuenMK/QuemMK.vue"),
      },
      {
        path: "lich-su-mua-hang",
        component: () => import("../components/Client/History/History.vue"),
      },
      {
        path: "thanh-toan",
        component: () => import("../components/Client/Shopping/ThanhToan.vue"),
      },
      {
        path: "news-event",
        component: () =>
          import("../components/Client/News_Event/NewsEvent.vue"),
      },
      {
        path: "detail-news-event",
        component: () =>
          import("../components/Client/News_Event/DetailNewsEvent.vue"),
      },
      {
        path: "dia-chi",
        component: () => import("../components/Client/Address/DiaChi.vue"),
      },
      {
        path: "history-rate",
        component: () => import("../components/Client/History/historyRate.vue"),
      },
      {
        path: "lich-su-tich-diem",
        component: () =>
          import("../components/Client/History/LichSuTichDiem.vue"),
      },
      {
        path: "thay-doi-mat-khau",
        component: () =>
          import("../components/Client/QuenMK/NhapMatKhauMoi.vue"),
      },
    ],
  },
  {
    path: "/admin",
    component: () => import("../layout/wrapper/admin.vue"),
    children: [
      {
        path: "quan-ly-tai-khoan",
        component: () =>
          import("../components/QuanLy/QuanLyTaiKhoan/index.vue"),
      },
      {
        path: "quan-ly-don-hang",
        component: () => import("../components/QuanLy/QuanLyDonHang/index.vue"),
      },

      {
        path: "quan-ly-dia-diem",
        component: () => import("../components/QuanLy/QuanLyDiaDiem/index.vue"),
      },
      {
        path: "quan-ly-san-pham",
        component: () => import("../components/QuanLy/QuanLySanPham/index.vue"),
      },
      {
        path: "quan-ly-nhap-hang",
        component: () =>
          import("../components/QuanLy/QuanLyNhapHang/index.vue"),
      },
      {
        path: "quan-ly-bai-viet",
        component: () => import("../components/QuanLy/QuanLyBaiViet/index.vue"),
      },
      {
        path: "bao-cao-thong-ke",
        component: () => import("../components/QuanLy/BaoCaoThongKe/index.vue"),
      },
      {
        path: "quan-ly-danh-muc-san-pham",
        component: () =>
          import(
            "../components/QuanLy/QuanLyDanhMuc/QuanLyDanhMucSanPham/index.vue"
          ),
      },
      {
        path: "quan-ly-danh-muc-dia-diem",
        component: () =>
          import(
            "../components/QuanLy/QuanLyDanhMuc/QuanLyDanhMucDiaDiem/index.vue"
          ),
      },
      {
        path: "profile",
        component: () => import("../components/Admin/Profile/index.vue"),
      },
      {
        path: "quan-ly-nha-cung-cap",
        component: () =>
          import("../components/QuanLy/QuanLyNhaCungCap/index.vue"),
      },
      {
        path: "quan-ly-danh-gia",
        component: () => import("../components/QuanLy/QuanLyDanhGia/index.vue"),
      },
      {
        path: "quan-ly-thanh-toan",
        component: () =>
          import("../components/QuanLy/QuanLyThanhToan/index.vue"),
      },

      {
        path: "quan-ly-admin",
        component: () => import("../components/QuanLy/QuanLyAdmin/index.vue"),
      },
    ],
  },
  {
    path: "/admin/dang-nhap",
    component: () => import("../layout/wrapper/blank_admin.vue"),
    children: [
      {
        path: "",
        component: () => import("../components/Admin/DangNhap/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
