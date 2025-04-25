
<template>

    <!-- Header  -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Lịch sử tích điểm
        </div>
       
    </div>
    <!-- * Header  -->

    <!-- Content -->
    <div id="appCapsule">

        <div class="section full">

            <ul class="listview image-listview flush">
                <li class="active">
                    <div class="item">
                        <div class="icon-box bg-primary">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="in">
                            <div>
                                <div class="mb-05"><strong>Tích điểm</strong></div>
                                <div class="text-small mb-05">Bạn đã nhận <b>100</b><i class="fa-solid fa-star text-warning"></i></div>
                                <div class="text-xsmall">5/3/2020 10:30 AM</div>
                            </div>
                        </div>
                    </div>
                </li>
                
            </ul>

        </div>

    </div>
    <!-- * Content -->



</template>
<script>

export default {
   
}
</script>
<style>

</style>