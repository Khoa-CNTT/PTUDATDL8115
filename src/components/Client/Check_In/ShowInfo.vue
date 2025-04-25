<template>
    <div class="wrapper ci">
        <div class=" showinf">
            <img src="https://placehold.co/500" alt="" class="img-ck">
            <div class="info">
                <div class="d-flex align-items-center gap-2">
                    <i class="fa-solid fa-location-dot"></i>
                    <span class="text-light"></span>
                </div>
                <p class="title-location text-light">Thông tin địa điểm</p>
                <p class="content-location text-light">{{ info_dia_diem.mo_ta }}</p>
                <div class="button-container">
                    <a href="/confirm-post" class="btn btn-post">Đăng bài</a>
                    <a href="/check-in" class="btn btn-skip">Bỏ qua</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info_dia_diem: {
                ten_dia_diem: "Tên địa điểm",
                mo_ta: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, impedit laborum. Velit laborum corporis nam accusamus labore repudiandae animi itaque harum, quo nemo inventore neque! Sint aliquid hic ad iure!"
            }
        }
    },
    methods: {
        
    }
}
</script>
<style></style>