<template>
    <!-- App Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/news-event" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Nội dung
        </div>
    </div>
    <!-- * App Header -->

    <!-- App Capsule -->
    <div id="appCapsule">
        <div class="section mt-2">
            <figure>
                <img :src="noidung.hinh_anh" alt="image" class="imaged img-fluid">
            </figure>
            <p>{{ noidung.mo_ta }}</p>
        </div>
    </div>
    <!-- * App Capsule -->
</template>
<script>
import img from '../../../assets/img/sample/photo/1.jpg'
export default {
    data() {
        return {
            noidung: {
                hinh_anh: img,
                mo_ta: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem impedit nesciunt harum odit aspernatur rerum aperiam et dolores, ratione ut. Possimus, vel. Eligendi, iusto minus explicabo, numquam at architecto repudiandae aspernatur sed vel tenetur est excepturi molestiae sit quaerat sunt officiis corrupti quo rerum voluptas nostrum debitis! Qui nemo iusto facilis! Libero doloremque magni tempora totam voluptate, eos adipisci autem voluptatem a enim eaque distinctio, explicabo quos asperiores? Beatae, exercitationem laborum maxime hic nulla dignissimos? Aliquam nostrum eum eveniet totam! Modi tempora ea sequi sit, iusto corporis eos molestias provident fugiat quas ducimus rerum sunt molestiae nihil necessitatibus dolorem magnam? ",
            },
           
        }
    },

}
</script>
<style></style>