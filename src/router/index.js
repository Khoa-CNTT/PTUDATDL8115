import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    {
        path : '/quanlytaikhoan',
        component: ()=>import('../components/QuanLy/QuanLyTaiKhoan/index.vue')
    },
    {
        path : '/quanlydonhang/dondangxetduyet',
        component: ()=>import('../components/QuanLy/QuanLyDonHang/DonDangXetDuyet/index.vue')
    },
    {
        path : '/quanlydonhang/dondanggiao',
        component: ()=>import('../components/QuanLy/QuanLyDonHang/DonDangGiao/index.vue')
    },
    {
        path : '/quanlydonhang/dondathanhtoan',
        component: ()=>import('../components/QuanLy/QuanLyDonHang/DonDaThanhToan/index.vue')
    },
    {
        path : '/quanlydonhang/dondahuy',
        component: ()=>import('../components/QuanLy/QuanLyDonHang/DonDaHuy/index.vue')
    },
    {
        path : '/quanlydiadiem',
        component: ()=>import('../components/QuanLy/QuanLyDiaDiem/index.vue')
    },
    {
        path : '/quanlysanpham',
        component: ()=>import('../components/QuanLy/QuanLySanPham/index.vue')
    },
    {
        path : '/quanlynhaphang',
        component: ()=>import('../components/QuanLy/QuanLyNhapHang/index.vue')
    },
    {
        path : '/quanlybaiviet',
        component: ()=>import('../components/QuanLy/QuanLyBaiViet/index.vue')
    },
    {
        path : '/baocaothongke/doanhso',
        component: ()=>import('../components/QuanLy/BaoCaoThongKe/DoanhSo/index.vue')
    },
    {
        path : '/baocaothongke/nguoidung',
        component: ()=>import('../components/QuanLy/BaoCaoThongKe/NguoiDung/index.vue')
    },
    {
        path : '/qldm/qldmsp',
        component: ()=>import('../components/QuanLy/QuanLyDanhMuc/QuanLyDanhMucSanPham/index.vue')
    },
    {
        path : '/qldm/qldmdd',
        component: ()=>import('../components/QuanLy/QuanLyDanhMuc/QuanLyDanhMucDiaDiem/index.vue')
    },
    {
        path : '/profile',
        component: ()=>import('../components/Admin/Profile/index.vue')
    },
    {
        path : '/quanlynhacungcap',
        component: ()=>import('../components/QuanLy/QuanLyNhaCungCap/index.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router