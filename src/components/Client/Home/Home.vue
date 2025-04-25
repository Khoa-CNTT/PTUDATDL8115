<template>
    <!-- Header -->
    <div class="appHeader bg-primary text-light">
        <div class="left">
            <router-link to="#" class="headerButton" data-bs-toggle="modal" data-bs-target="#sidebarPanel">
                <i class="fa-solid fa-bars"></i>
            </router-link>
        </div>
        <div class="pageTitle ">
            <h2 class="text-light mb-0">EXPDaNa</h2>
        </div>
        <div class="right">
            <router-link to="/profile" class="headerButton">
                <img src="../../../assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged w32">
            </router-link>
        </div>
    </div>
    <!-- * Header -->

    <!-- content name -->
    <div class="name">
        <h1>Xin chào Phạm Tấn Minh</h1>
        <p>Chúc bạn có những trải nghiệm và tận hưởng tại Đà Nẵng thật tuyệt</p>
    </div>

    <!-- content search -->
    <div>
        <Search />
    </div>

    <div id="appCapsule" class="slider_home">
        <div class="section mb-3">

            <!-- slider -->
            <div id="carouselExampleControlsNoTouching" class="carousel slide mb-5" data-bs-touch="false">
                <div class="carousel-inner">
                    <template v-for="(value, index) in slides" :key="index">
                        <div class="carousel-item" :class="{ active: index === 0 }">
                            <img :src="value.image" class="d-block w-100" style="height: 400px;" alt="Slide">
                        </div>
                    </template>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="prev">
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching"
                    data-bs-slide="next">
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <!-- slider -->

            <hr>


            <!-- News -->
            <div class="section full mt-4 mb-3">
                <div class="section-heading padding">
                    <h2 class="title">Tin tức và sự kiện</h2>
                    <a href="/news-event" class="link">Xem tất cả</a>
                </div>

                <!-- carousel multiple -->
                <!-- Tin tức và sự kiện -->
                <div class="carousel-multiple splide">
                    <div class="splide__track">
                        <ul class="splide__list">

                            <template v-for="(value, index) in listNews" :key="index">
                                <li class="splide__slide">
                                <a href="/detail-news-event">
                                    <div class="blog-card">
                                        <img v-bind:src="value.image" alt="image"
                                            class="imaged w-100">
                                        <div class="text">
                                            <h4 class="title">{{ value.title }}</h4>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            </template>

                        </ul>
                    </div>
                </div>
                <!-- * carousel multiple -->

            </div>
            <!-- * News -->
        </div>
    </div>
    <!-- * Content -->

    <!--  Sidebar -->
    <SideBar></SideBar>
    <!-- * Sidebar -->

    <!--  Bottom Navigation -->
    <!-- <BottomNav></BottomNav> -->
    <!-- * Bottom Navigation -->


</template>
<script>

import SideBar from "../../../layout/components/SideBar.vue";
// import BottomNav from "../../../layout/components/BottomNav.vue";
import Search from '../../../layout/components/Search.vue';


export default {
    // name: 'app',
    components: {
        SideBar,
        // BottomNav,
        Search,
    },
    mounted() {
        // Multiple Carousel
        document.querySelectorAll('.carousel-multiple').forEach(carousel => new Splide(carousel, {
            perPage: 4,
            rewind: true,
            type: "loop",
            gap: 16,
            padding: 16,
            arrows: false,
            pagination: false,
            breakpoints: {
                768: {
                    perPage: 2
                },
                991: {
                    perPage: 3
                }
            }
        }).mount());
    },
    data() {
        return {
            listNews: [
                {
                    id: '1',
                    image: 'src/assets/img/sample/photo/1.jpg',
                    title: 'Kỷ niệm 50 năm giải.....',
                },
                {
                    id: '2',
                    image: 'src/assets/img/sample/photo/1.jpg',
                    title: 'Đèo Hải Vân...',
                },
                {
                    id: '3',
                    image: 'src/assets/img/sample/photo/1.jpg',
                    title: 'Hội An tổ chức lễ hội...',
                },
                {
                    id: '4',
                    image: 'src/assets/img/sample/photo/1.jpg',
                    title: 'Những địa điểm suối đẹp.....',
                },
            ],

            slides: [
                {
                    id: '1',
                    image: 'https://i1-dulich.vnecdn.net/2022/06/02/deo-hai-van-jpeg-2870-1654151745.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=GilXeLUCa4d0TAKOBRRlEA'
                },
                {
                    id: '2',
                    image: 'https://i1-dulich.vnecdn.net/2022/06/02/Son-Tra-2238-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=FScJfxXuNeEPtYatWhzlZg'
                },
                {
                    id: '3',
                    image: 'https://i1-dulich.vnecdn.net/2022/06/02/da-nang-1-4913-1654169672.jpg?w=0&h=0&q=100&dpr=1&fit=crop&s=mNEpnicM3GKbMoBJ2htqUQ'
                },
            ]
        }
    },
}
</script>
<style></style>