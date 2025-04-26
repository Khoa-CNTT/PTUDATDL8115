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
            <router-link to="/list-nhan-tin" class="headerButton">
                <div class="frame-texting">
                    <i class="fa-solid fa-comment"></i>
                </div>
            </router-link>
        </div>
    </div>
    <!-- * Header -->

    <div id="appCapsule">
        <div class="section wallet-card-section pt-1">
            <div class="wallet-card">
                <!-- Balance -->
                <div class="balance">
                    <div class="left">
                        <span class="title">Chào Phạm Tấn Minh</span>
                        <h5 class="total">Chúc bạn có trải nghiệm thú vị tại Đà Nẵng</h5>
                    </div>
                    <!-- <div class="right">
                        
                    </div> -->
                </div>
                <!-- * Balance -->
                <!-- Wallet Footer -->
                <div class="wallet-footer">
                    <div class="item">
                        <a href="/ask-search">
                            <div class="icon-wrapper">
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <strong>Tìm kiếm</strong>
                        </a>
                    </div>
                    <div class="item">
                        <a href="/so-check-in">
                            <div class="icon-wrapper bg-success">
                                <i class="fa-solid fa-book-atlas"></i>
                            </div>
                            <strong>Sổ check-in</strong>
                        </a>
                    </div>
                </div>
                <!-- * Wallet Footer -->
            </div>
        </div>
        
        <div class="section mb-3">

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




</template>
<script>

import SideBar from "../../../layout/components/SideBar.vue";


export default {
    // name: 'app',
    components: {
        SideBar,
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