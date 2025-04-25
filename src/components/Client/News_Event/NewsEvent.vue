<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Tin tức và sự kiện
        </div>
        <div class="right">
            <a href="#" class="headerButton toggle-searchbox">
                <i class="fa-solid fa-magnifying-glass"></i>
            </a>
        </div>
    </div>
    <!-- * Header -->

    <!-- Search Component -->
    <div id="search" class="appHeader">
        <form class="search-form">
            <div class="form-group searchbox">
                <input type="text" class="form-control" placeholder="Search...">
                <i class="input-icon icon ion-ios-search"></i>
                <a href="#" class="ms-1 close toggle-searchbox"><i class="icon ion-ios-close-circle"></i></a>
            </div>
        </form>
    </div>
    <!-- * Search Component -->


    <!-- Content -->
    <div id="appCapsule">

        <div class="section tab-content mt-2 mb-2">

            <div class="row">
                <template v-for="(value, index) in newsList " :key="index">
                <div class="col-6 mb-2">
                    <a href="/detail-news-event">
                        <div class="blog-card">
                            <img v-bind:src="value.hinh_anh" alt="image" class="imaged w-100">
                            <div class="text">
                                <h4 class="title">{{ value.mo_ta }}</h4>
                            </div>
                        </div>
                    </a>
                </div> 
            </template>             
            </div>
        </div>

    </div>
    <!-- * Content -->


    <!-- Bottom Menu -->
    <BottomNav></BottomNav>
    <!-- *  Bottom Menu -->
</template>
<script>
import BottomNav from '../../../layout/components/BottomNav.vue';
import img from '../../../assets/img/sample/photo/1.jpg'

export default {
    data() {
        return {
            newsList: [
                {
                    mo_ta: "What will be the value of bitcoin in the next...",
                    hinh_anh: img,
                },
                {
                    mo_ta: "Rules you need to know in business",
                    hinh_anh: img,
                },
                {
                    mo_ta: "10 easy ways to save your money",
                    hinh_anh: img,
                },
                {
                    mo_ta: "Follow the financial agenda with...",
                    hinh_anh: img,
                },
                {
                    mo_ta: "Does it make sense to invest in cryptocurrencies",
                    hinh_anh: img,
                },
                {
                    mo_ta: "What you need to withdraw money",
                    hinh_anh: img,
                }
            ]
        }
    },
    name: 'newsevent',
    components: {
        BottomNav
    },
    mounted() {
        const searchboxToggle = document.querySelectorAll(".toggle-searchbox");
        searchboxToggle.forEach(el => {
            el.addEventListener("click", () => {
                const search = document.getElementById("search");
                if (!search) return;

                const isShown = search.classList.contains("show");
                if (isShown) {
                    search.classList.remove("show");
                } else {
                    search.classList.add("show");
                    const input = search.querySelector(".form-control");
                    if (input) input.focus();
                }
            });
        });
    },
}
</script>
<style></style>