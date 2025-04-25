<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <a href="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </a>
        </div>
        <div class="pageTitle">
            Bài viết
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->

    <!-- Extra Header -->
    <div class="extraHeader pe-0 ps-0">
        <ul class="nav nav-tabs lined" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" data-bs-toggle="tab" href="#waiting" role="tab">
                    Mọi người
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" data-bs-toggle="tab" href="#paid" role="tab">
                    Của tôi
                </a>
            </li>
        </ul>
    </div>
    <!-- * Extra Header -->

    <!-- Bài viết -->
    <div id="appCapsule" class="extra-header-active full-height tong-post">

        <div class="section tab-content mt-2 mb-1">

            <!-- Tab mọi người -->
            <div class="tab-pane fade show active" id="waiting" role="tabpanel">
                <div class=" d-grid justify-content-center container-post">
                    <template v-for="(value, index) in card_moi_nguoi_list" :key="index">
                        <div class="card post mb-3">
                            <div class="card-body">
                                <div class="header-post">
                                    <div>
                                        <img v-bind:src="value.icon_anh" alt="" class="avatar-user me-1">
                                        <span> {{ value.name }} </span>
                                    </div>
                                </div>
                                <div class="text-center mt-2">
                                    <img v-bind:src="value.hinh_anh" alt="" class="img-post">
                                </div>
                                <div class="bottom-post d-flex justify-content-around mt-4">
                                    <p class="text-dark text-post"> {{ value.title }} </p>

                                    <!-- :class="value.liked ? 'fa-solid' : 'fa-regular'"
                                    Đây là class động — class được áp dụng sẽ thay đổi tùy theo giá trị của value.liked:
                                    Nếu value.liked == true → áp dụng fa-solid (trái tim tô đậm).
                                    Nếu value.liked == false → áp dụng fa-regular (trái tim viền mỏng). -->
                                    <!-- dùng toán tử 3 ngôi -->
                                    <!-- <i class="fa-heart text-danger fa-2x mb-0"
                                        :class="value.liked ? 'fa-solid' : 'fa-regular'"
                                        @click="value.liked = !value.liked" style="cursor: pointer;"></i> -->

                                    <i v-if="value.liked" class="fa-solid fa-heart text-danger fa-2x mb-0"
                                        @click="toggleLike(value)" style="cursor: pointer;"></i>
                                    <i v-else class="fa-regular fa-heart text-danger fa-2x mb-0"
                                        @click="toggleLike(value)" style="cursor: pointer;"></i>

                                </div>
                            </div>
                        </div>
                    </template>

                </div>
            </div>
            <!-- * Tab mọi người -->

            <!-- tab của tôi -->
            <div class="tab-pane fade" id="paid" role="tabpanel">
                <div class=" d-grid justify-content-center container-post">
                    <template v-for="(value, index) in card_cua_toi_list" :key="index">
                        <div class="card post mb-3">
                            <div class="card-body">
                                <div class="header-post d-flex justify-content-between">
                                    <div>
                                        <img v-bind:src="value.icon_anh" alt="" class="avatar-user me-1">
                                        <span> {{ value.name }} </span>
                                    </div>
                                    <div class="dropdown">
                                        <button class="btn btn-setting-post" type="button" data-bs-toggle="dropdown">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </button>
                                        <ul class="dropdown-menu dropdown-menu-end">
                                            <li><a class="dropdown-item" href="#">Tải xuống</a></li>
                                            <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delBaiViet"
                                                    v-on:click="Object.assign(deleteBaiViet,value)">Xóa</a></li>
                                            <li>
                                                <hr class="dropdown-divider">
                                            </li>
                                            <li><a class="dropdown-item" href="#">Hủy</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="text-center mt-2">
                                    <img v-bind:src="value.hinh_anh" alt="" class="img-post">
                                </div>
                                <div class="bottom-post d-flex justify-content-around mt-4">
                                    <p class="text-dark text-post"> {{ value.title }} </p>
                                    <i v-if="value.liked" class="fa-solid fa-heart text-danger fa-2x mb-0"
                                        @click="toggleLike(value)" style="cursor: pointer;"></i>
                                    <i v-else class="fa-regular fa-heart text-danger fa-2x mb-0"
                                        @click="toggleLike(value)" style="cursor: pointer;"></i>
                                </div>
                            </div>
                        </div>
                    </template>
                    <!-- thông báo xóa tag của tôi -->
                    <div class="modal fade dialogbox" id="delBaiViet" data-bs-backdrop="static" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Bạn chắc chắn muốn xóa bài viết?</h5>
                    </div>
                    <div class="modal-footer">
                        <div class="btn-inline">
                            <a href="#" class="btn btn-text-secondary" data-bs-dismiss="modal">Hủy</a>
                            <a href="#" class="btn btn-text-danger" data-bs-dismiss="modal" @click="xoaBaiVietCuaToi()">Xóa</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
                    <!-- thông báo xóa tag của tôi -->
                </div>
            </div>
            <!-- * tab của tôi -->

        </div>

    </div>
    <!-- * Bài viết -->
    <!-- * Content -->

    <!-- Bottom Navigation -->
    <!-- <BottomNav /> -->
    <!-- * Bottom Navigation -->

</template>
<script>
// import BottomNav from '../../../layout/components/BottomNav.vue';

export default {
    // name: 'bai_viet',
    // components: {
    //     BottomNav
    // },
    data() {
        return {
            card_moi_nguoi_list: [
                {
                    id: '1',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Nguyễn Võ Văn A',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
                {
                    id: '2',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Nguyễn Thị D',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
                {
                    id: '3',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Trần Văn C',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
            ],
            card_cua_toi_list: [
                {
                    id: '1',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Tấn Minh',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
                {
                    id: '2',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Tấn Minh',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
                {
                    id: '3',
                    icon_anh: 'https://placehold.co/150',
                    name: 'Tấn Minh',
                    hinh_anh: 'https://placehold.co/150',
                    title: 'Lorem ipsum dolor sit amet consectetur.',
                    liked: false
                },
            ],
            deleteBaiViet: {}
        }
    },
    methods: {
        toggleLike(post) {
            // Tạm thời thay đổi giao diện
            post.liked = !post.liked;

        },
        xoaBaiVietCuaToi(vitri, index) {
            this.card_cua_toi_list.splice(this.deleteBaiViet,1);
        }
    }
}
</script>
<style></style>