<template>
  <nav class="navbar main-nav fixed-top navbar-expand-lg large">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="../assets/images/logo.png" alt="logo" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="ti-menu text-white"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link scrollTo" href="#home">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollTo" href="#about">Nutrition</a>
          </li>
          <li class="nav-item">
            <a class="nav-link scrollTo" href="#testimonial">News</a>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'Login' }">Login</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style></style>
