<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Tin nhắn
        </div>
    </div>
    <!-- * Header -->

    <!-- Content -->
    <div id="appCapsule" class="bg-light">
        <div class="bg-list-friend">
            <h4>Tin nhắn</h4>

            <div class="card">
                <div class="card-body d-flex align-items-center justify-content-between gap-3">
                    <router-link to="/nhan-tin" class="text-dark">
                        <div class="d-flex align-items-center gap-3">
                            <img src="https://placehold.co/150" alt="" class="img-friend">
                            <div class="info-list-friend">
                                <p>Username</p>
                                <p>Tin nhắn mới nhất</p>
                            </div>
                        </div>
                    </router-link>
                    <div class="setting-friend" type="button" data-bs-toggle="dropdown">
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                    <!-- Xóa bạn bè -->
                    <ul class="dropdown-menu dropdown-menu-end">
                        <li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#delFriend"
                                v-on:click="Object.assign()">Xóa bạn bè</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Hủy</a></li>
                    </ul>
                    <!-- Xóa bạn bè -->
                </div>
            </div>



            <!-- Thêm bạn bè -->
            <hr>
            <h4>Thêm bạn bè</h4>
            <router-link to="/tim-kiem-va-them-ban-be">
                <div class="card">
                    <div class="card-body d-flex align-items-center gap-3">
                        <div class="add-user">
                            <i class="fa-solid fa-user-plus"></i>
                        </div>
                        <div class="info-list-friend">
                            <p>Mời bạn bè</p>
                            <p>Kết nỗi để bắt đầu cuộc trò chuyện</p>
                        </div>
                    </div>

                </div>
            </router-link>
            <!-- Thêm bạn bè -->

        </div>
    </div>
    <!-- * Content -->

</template>
<script>
export default {

}
</script>
<style></style>