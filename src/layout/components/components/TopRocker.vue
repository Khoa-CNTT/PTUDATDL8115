<template >
  <div class="topbar d-flex align-items-center">
    <nav class="navbar navbar-expand">
      <div class="topbar-logo-header">
        <div class="">
          <i class="fa-solid fa-user-tie me-2"></i>
        </div>
        <div class="">
          <h4 class="logo-text">Admin</h4>
        </div>
      </div>
      <div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div>
      <div class="search-bar flex-grow-1">
        <div class="position-relative search-bar-box">
          <input
            type="text"
            class="form-control search-control"
            placeholder="Type to search..."
          />
          <span class="position-absolute top-50 search-show translate-middle-y"
            ><i class="bx bx-search"></i
          ></span>
          <span class="position-absolute top-50 search-close translate-middle-y"
            ><i class="bx bx-x"></i
          ></span>
        </div>
      </div>
      
      <div class="user-box dropdown">
        <a
          class="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
          href="#"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="../../assets/assets/images/avatars/avatar-2.png"
            class="user-img"
            alt="user avatar"
          />
          <div class="user-info ps-3">
            <p class="user-name mb-0">Admin</p>
          </div>
        </a>
        <ul class="dropdown-menu dropdown-menu-end">
          <li>
            <a class="dropdown-item" href="/admin/profile"
              ><i class="bx bx-user"></i><span>Profile</span></a
            >
          </li>
          <!-- <li>
            <a class="dropdown-item" href="javascript:;"
              ><i class="bx bx-cog"></i><span>Settings</span></a
            >
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;"
              ><i class="bx bx-home-circle"></i><span>Dashboard</span></a
            >
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;"
              ><i class="bx bx-dollar-circle"></i><span>Earnings</span></a
            >
          </li>
          <li>
            <a class="dropdown-item" href="javascript:;"
              ><i class="bx bx-download"></i><span>Downloads</span></a
            >
          </li> -->
          <li>
            <div class="dropdown-divider mb-0"></div>
          </li>
          <li>
            <a class="dropdown-item" href="/admin/dang-nhap"
              ><i class="bx bx-log-out-circle"></i><span>Logout</span></a
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    
};
</script>
<style >

</style>