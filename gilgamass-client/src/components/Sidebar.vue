<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="#" class="brand-link">
      <img src="../assets/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: 0.8" />
      <span class="brand-text font-weight-light">Gilga-Mass</span>
    </a>
    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-5">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library -->

          <li class="nav-item">
            <a href="" @click.prevent="clickDashboard" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p style="font-size: 18px">Dashbord</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="clickBuild" class="nav-link">
              <i class="nav-icon fas fa-edit"></i>
              <p style="font-size: 18px">Build Target</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="" @click.prevent="clickHistory" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p style="font-size: 18px">History</p>
            </a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "Sidebar",

  methods: {
    async clickDashboard() {
      await this.$router.push("/tracking?header=Target%20History&tag=one");
    },
    async clickBuild() {
      await this.$router.push("/tracking/build_target?header=Build%20Target&tag=two");
    },
    async clickHistory() {
      await this.$router.push("/tracking/history_detail?header=Detail%20History&tag=three");
    },
  },
};
</script>

<style></style>
