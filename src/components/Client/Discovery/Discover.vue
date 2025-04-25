<template>

    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Khám phá
        </div>
    </div>
    <!-- * Header -->

    <!-- content -->
    <div id="appCapsule">

        <!-- Search -->
        <Search />
        <!-- * Search -->


        <div class="section tab-content mt-2 mb-2">
            <div class="row">
                <div class="col-6 mb-2">   
                    <template v-for="(value, index) in columnLeft" :key="'left' + index">
                        <!-- 'left' + index: là string, ví dụ 'left0', 'left1', 'left2'... -->
                        <a href="/map-location">
                            <div class="blog-card mb-2">
                                <img v-bind:src="value.hinh_anh" alt="image" class="imaged w-100">
                                <p class="rate-discovery"> {{ value.so_sao }} <i
                                        class="fa-solid fa-star text-warning ms-1"></i></p>
                                <div class="text">
                                    <h4 class="title"> {{ value.ten_dia_diem }} </h4>
                                </div>
                            </div>
                        </a>
                    </template>
                </div>

                <div class="col-6 mb-2">
                    <!-- danh mục -->
                    <div class="dropdown mb-2">
                        <button class="btn btn-primary dropdown-toggle w-100" type="button" data-bs-toggle="dropdown">
                            Danh mục
                        </button>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-icons me-1"></i>
                                Giải trí
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-utensils me-1"></i>
                                Đồ ăn
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-mug-saucer me-1"></i>
                                Thức uống
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fa-brands fa-pagelines me-1"></i>
                                Du lịch sinh thái
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">
                                <i class="fa-solid fa-xmark me-1"></i>
                                Đóng
                            </a>
                        </div>
                    </div>
                    <!-- danh mục -->

                    <template v-for="(value, index) in columnRight" :key="'right' + index">
                        <a href="/map-location">
                            <div class="blog-card mb-2">
                                <img v-bind:src="value.hinh_anh" alt="image" class="imaged w-100">
                                <p class="rate-discovery"> {{ value.so_sao }} <i
                                        class="fa-solid fa-star text-warning ms-1"></i></p>
                                <div class="text">
                                    <h4 class="title"> {{ value.ten_dia_diem }} </h4>
                                </div>
                            </div>
                        </a>
                    </template>
                    
                </div>
            </div>

        </div>

    </div>
    <!-- * content -->

    <!-- Bottom Navigation -->
    <BottomNav />
    <!-- * Bottom Navigation -->

</template>
<script>
import BottomNav from '../../../layout/components/BottomNav.vue';
import Search from '../../../layout/components/Search.vue';
import img from '../../../assets/img/sample/photo/1.jpg'

export default {
    components: {
        Search,
        BottomNav
    },
    //computed sẽ tự động cập nhật lại nếu dữ liệu listKhamPhas thay đổi.
    // thêm hay xoá địa điểm trong danh sách, hai cột sẽ được render lại một cách tự động
    computed: { 
        columnLeft() {
            // Vì callback của .filter() luôn truyền 2 đối số đầu tiên là (element, index), chứ không phải chỉ mỗi index
            // Dùng chỉ số index, bỏ qua phần tử (_, i)
            // filter() là lọc các phần tử trong mảng
            return this.listKhamPhas.filter((_, i) => i%2 === 0);
        },
        columnRight() {
            return this.listKhamPhas.filter((_, i) => i%2 !== 0);
        }
    },
    data() {
        return {
            listKhamPhas: [
                {
                    id: '1',
                    hinh_anh: img,
                    ten_dia_diem: 'What will be the value of bitcoin in the next...',
                    so_sao: '4.5',
                },
                {
                    id: '2',
                    hinh_anh: img,
                    ten_dia_diem: 'Lorem ipsum dolor sit amet consectetur...',
                    so_sao: '4.2',
                },
                {
                    id: '3',
                    hinh_anh: img,
                    ten_dia_diem: 'What will be the value of bitcoin in the next...',
                    so_sao: '4.0',
                },
                {
                    id: '4',
                    hinh_anh: img,
                    ten_dia_diem: 'Lorem ipsum dolor sit amet consectetur...',
                    so_sao: '4.4',
                },
            ],
        }
    },
}
</script>
<style></style>