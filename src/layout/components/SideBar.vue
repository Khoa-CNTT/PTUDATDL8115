<template>
    <div class="modal fade panelbox panelbox-left" id="sidebarPanel" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-0">
                    <!-- profile box -->
                    <div class="profileBox pt-2 pb-2">
                        <div class="image-wrapper">
                            <img src="../../assets/img/sample/avatar/avatar1.jpg" alt="image" class="imaged  w36">
                        </div>
                        <div class="in">
                            <strong>Họ và tên</strong>
                            <div class="text-muted">username</div>
                        </div>
                        <a href="#" class="btn btn-link btn-icon sidebar-close" data-bs-dismiss="modal">
                            <i class="fa-solid fa-x"></i>
                        </a>
                    </div>
                    <!-- * profile box -->
                    <!-- Hiện điểm tích lũy -->
                    <div class="sidebar-balance">
                        <div class="listview-title">Điểm tích lũy</div>
                        <div class="in">
                            <h1 class="amount"><i class="fa-solid fa-star"></i> 9999</h1>
                        </div>
                    </div>
                    <!-- * Hiện điểm tích lũy -->

                    <!-- menu -->
                    <div class="listview-title mt-1">Menu</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="/profile" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-id-badge"></i>
                                </div>
                                <div class="in d-flex justify-content-between">
                                    Hồ sơ của tôi
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/so-check-in" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-book-atlas"></i>
                                </div>
                                <div class="in">
                                    Sổ địa điểm check-in
                                    <span class="badge badge-primary">1</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/lich-su-mua-hang" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-receipt"></i>
                                </div>
                                <div class="in">
                                    Đơn hàng của tôi
                                    <span class="badge badge-primary">1</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/dia-chi" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-address-book"></i>
                                </div>
                                <div class="in">
                                    Địa chỉ của tôi
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/history-rate" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-clock-rotate-left"></i>
                                </div>
                                <div class="in">
                                    Lịch sử đánh giá
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="/lich-su-tich-diem" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <div class="in">
                                    Lịch sử tích điểm
                                </div>
                            </a>
                        </li>
                    </ul>
                    <!-- * menu -->

                    <!-- others -->
                    <div class="listview-title mt-1">Others</div>
                    <ul class="listview flush transparent no-line image-listview">
                        <li>
                            <a href="/dang-nhap" class="item">
                                <div class="icon-box bg-primary">
                                    <i class="fa-solid fa-arrow-right-to-bracket"></i>
                                </div>
                                <div class="in">
                                    Log out
                                </div>
                            </a>
                        </li>


                    </ul>
                    <!-- * others -->

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