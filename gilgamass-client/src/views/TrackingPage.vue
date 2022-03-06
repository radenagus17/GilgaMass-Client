<template>
  <div class="hold-transition sidebar-mini layout-fixed layout-navbar-fixed">
    <NavbarTrack></NavbarTrack>
    <Sidebar></Sidebar>
    <div class="content-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavbarTrack from "@/components/NavbarTrack.vue";
import Sidebar from "@/components/Sidebar.vue";
export default {
  name: "TrackingPage",

  components: {
    NavbarTrack,
    Sidebar,
  },
};
</script>

<style></style>
