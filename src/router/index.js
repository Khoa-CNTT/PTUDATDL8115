import { createRouter, createWebHistory } from "vue-router"; // cài vue-router: npm install vue-router@next --save

const routes = [
    // {
    //     path : '/',
    //     component: ()=>import('../layout/wrapper/index.vue')
    // },
    {
        path : '/',
        component: ()=>import('../components/Client/Home/Home.vue'),

    },
    {
        path : '/kham-pha',
        component: ()=>import('../components/Client/Discovery/Discover.vue')
    },
    {
        path : '/check-in',
        component: ()=>import('../components/Client/Check_In/CheckIn.vue')
    },
    {
        path : '/show-info',
        component: ()=>import('../components/Client/Check_In/ShowInfo.vue'),
        // meta: { layout: 'blank' }
    },
    {
        path : '/post',
        component: ()=>import('../components/Client/Post/BaiViet.vue')
    },
    {
        path : '/shopping',
        component: ()=>import('../components/Client/Shopping/Shopping.vue')
    },
    {
        path : '/shopping-cart',
        component: ()=>import('../components/Client/Shopping/ShoppingCart.vue'),
        // meta: { layout: 'blank' }
    },
    {
        path : '/profile',
        component: ()=>import('../components/Client/Profile/Profile.vue'),
        meta: { layout: 'blank' }
    },
    {
        path : '/so-check-in',
        component: ()=>import('../components/Client/Check_In/CollectionCheckIn.vue'),
        meta: { layout: 'blank' }
    },
    {
        path : '/confirm-post',
        component: ()=>import('../components/Client/Check_In/ConfirmPost.vue'),
        meta: { layout: 'blank' }
    },
    {
        path : '/ask-search',
        component: ()=>import('../components/Client/Search_ChatBot/SearchOrAsk.vue'),
        meta: { layout: 'blank' }
    },
    {
        path : '/chatbot',
        component: ()=>import('../components/Client/Search_ChatBot/ChatBot.vue'),
        meta: { layout: 'blank' }
    },
    {
        path : '/map-location',
        component: ()=>import('../components/Client/Discovery/MapLocation.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/dang-ky',
        component: ()=> import('../components/Client/Dang_Ky/DangKi.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/dang-nhap',
        component: () => import('../components/Client/Dang_Nhap/DangNhap.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/quen-mat-khau',
        component: () => import('../components/Client/QuenMK/QuemMK.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/lich-su-mua-hang',
        component: () => import('../components/Client/History/History.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/thanh-toan',
        component: () => import('../components/Client/Shopping/ThanhToan.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/news-event',
        component: () => import('../components/Client/News_Event/NewsEvent.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/detail-news-event',
        component: () => import('../components/Client/News_Event/DetailNewsEvent.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/dia-chi',
        component: () => import('../components/Client/Address/DiaChi.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/history-rate',
        component: () => import('../components/Client/History/historyRate.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/lich-su-tich-diem',
        component: () => import('../components/Client/History/LichSuTichDiem.vue'),
        meta: { layout: 'blank' }
    },
    {
        path: '/thay-doi-mat-khau',
        component: () => import('../components/Client/QuenMK/NhapMatKhauMoi.vue'),
        meta: { layout: 'blank' }
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router