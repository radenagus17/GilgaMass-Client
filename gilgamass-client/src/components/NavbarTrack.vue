<template>
  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-dark">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
      </li>
    </ul>

    <!-- Right navbar links -->
    <ul class="navbar-nav ml-auto">
      <li class="nav-item d-none d-sm-inline-block image">
        <img src="../assets/dist/img/user1-128x128.jpg" width="38vw" class="img-circle elevation-2" alt="User Image" />
      </li>
      <li class="nav-item d-none d-sm-inline-block">
        <a href="#" class="nav-link">Welcome, {{ username }}</a>
      </li>

      <li class="nav-item d-none d-sm-inline-block">
        <a href="" class="nav-link" @click.prevent="handleClickLogOut">Logout</a>
      </li>
    </ul>
  </nav>
  <!-- /.navbar -->
</template>

<script>
export default {
  name: "NavbarTrack",

  data() {
    return {
      username: localStorage.getItem("username"),
    };
  },

  methods: {
    async handleClickLogOut() {
      localStorage.clear();
      await this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style></style>
