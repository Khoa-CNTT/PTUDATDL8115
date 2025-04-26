<template>
    <!-- Header -->
    <div class="appHeader">
        <div class="left">
            <router-link to="/list-nhan-tin" class="headerButton goBack">
                <i class="fa-solid fa-arrow-left"></i>
            </router-link>
        </div>
        <div class="pageTitle">
            Thêm bạn bè
        </div>
    </div>
    <!-- * Header -->
    <div id="appCapsule">
        <div class="p-2">
        <div class="position-relative">
            <input type="text" class="form-control mt-2 mb-2 p-1" placeholder="Tìm theo tên">
            <i class="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle-y me-2"></i>
        </div>
    </div>

    <div class="me-2 ms-2">
        <div class="card">
            <div class="card-body d-flex align-items-center justify-content-between gap-3">
                <div class="d-flex align-items-center gap-3">
                    <img src="https://placehold.co/150" alt="" class="img-friend">
                    <div class="info-list-friend mt-2">
                        <p>Username</p>
                    </div>
                </div>
                <div>
                    <button class="btn btn-outline-primary">Thêm</button>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {

}
</script>
<style></style>