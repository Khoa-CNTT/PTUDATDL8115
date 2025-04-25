
<template>
  <div class="nav-container primary-menu">
    <div class="mobile-topbar-header">
      <div>
        <img src="assets/images/logo-icon.png" class="logo-icon" alt="logo icon" />
      </div>
      <div>
        <h4 class="logo-text">Rukada</h4>
      </div>
      <div class="toggle-icon ms-auto"><i class="bx bx-arrow-to-left"></i></div>
    </div>
    <nav class="navbar navbar-expand-xl w-100">
      <ul class="navbar-nav justify-content-start flex-grow-1 gap-1">
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <i class="fa-solid fa-rectangle-list"></i>
            <div class="menu-title">Quản lý danh mục</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/quan-ly-danh-muc-san-pham">
                <a class="dropdown-item" href="/admin/quan-ly-danh-muc-san-pham"><i class="bx bx-right-arrow-alt"></i>Danh mục sản
                  phẩm</a>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-danh-muc-dia-diem">
                <a class="dropdown-item" href="/admin/quan-ly-danh-muc-dia-diem"><i class="bx bx-right-arrow-alt"></i>Danh mục địa
                  điểm</a>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <i class="fa-solid fa-cart-shopping"></i>
            <div class="menu-title">Quản lý bán hàng</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/quan-ly-san-pham">
                <a class="dropdown-item" href="/admin/quan-ly-san-pham">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý sản phẩm
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-don-hang">
                <a class="dropdown-item" href="/admin/quan-ly-don-hang">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý đơn hàng
                </a>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <i class="fa-solid fa-comment"></i>
            <div class="menu-title">Quản lý nội dung</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/quan-ly-bai-viet">
                <a class="dropdown-item" href="/admin/quan-ly-bai-viet">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý bài viết
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-danh-gia">
                <a class="dropdown-item" href="/admin/quan-ly-danh-gia">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý đánh giá
                </a>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <i class="fa-solid fa-handshake"></i>
            <div class="menu-title">Quản lý tài khoản & đối tác</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/quan-ly-tai-khoan">
                <a class="dropdown-item" href="/admin/quan-ly-tai-khoan">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý tài khoản
                </a>
              </router-link>
            </li>
            
              <li>
              <router-link to="/admin/quan-ly-admin">
                <a class="dropdown-item" href="/admin/quan-ly-admin">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý admin
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-nha-cung-cap">
                <a class="dropdown-item" href="/admin/quan-ly-nha-cung-cap">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý nhà cung cấp
                </a>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a href="javascript:;" class="nav-link dropdown-toggle dropdown-toggle-nocaret" data-bs-toggle="dropdown">
            <i class="fa-solid fa-truck"></i>
            <div class="menu-title">Quản lý nhập kho</div>
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link to="/admin/quan-ly-nhap-hang">
                <a class="dropdown-item" href="/admin/quan-ly-nhap-hang">
                  <i class="bx bx-right-arrow-alt"></i>Quản lý nhập hàng
                </a>
              </router-link>
            </li>
            <li>
              <router-link to="/admin/quan-ly-thanh-toan">
                <a class="dropdown-item" href="/admin/quan-ly-thanh-toan">
                  <i class="bx bx-right-arrow-alt"></i>Thanh toán
                </a>
              </router-link>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <router-link to="/admin/quan-ly-dia-diem">
          <a class="nav-link" href="/admin/quan-ly-dia-diem">
            <i class="fa-solid fa-image"></i>
            <div class="menu-title">Quản lý địa điểm</div>
          </a>
        </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/admin/bao-cao-thong-ke">
          <a class="nav-link" href="/admin/bao-cao-thong-ke">
            <i class="fa-solid fa-chart-simple"></i>
            <div class="menu-title">Thống kê</div>
          </a>
        </router-link>
        </li>
        
      </ul>
    </nav>
  </div>
</template>
<script>
export default {};
</script>
<style></style>