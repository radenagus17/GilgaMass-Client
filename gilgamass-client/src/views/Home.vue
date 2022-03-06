<template>
  <div class="">
    <Navbar></Navbar>
    <Banner></Banner>
    <About></About>
    <News></News>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Banner from "@/components/Banner.vue";
import News from "@/components/News.vue";
import About from "@/components/About.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Home",

  components: {
    Navbar,
    Banner,
    News,
    About,
    Footer,
  },
};
</script>
