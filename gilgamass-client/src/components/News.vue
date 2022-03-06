<template>
  <section class="section testimonial bg-primary-shape" id="testimonial">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h2>Sport News Currently</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <!-- Testimonial Carosel -->
          <div class="testimonial-slider">
            <!-- testimonial item -->
            <div class="testimonial-item" v-for="news in newsData" :key="news.id">
              <div class="row">
                <div class="col-md-5 client-img">
                  <img :src="news.image" :alt="news.title" />
                </div>
                <div class="col-md-7">
                  <div class="p-4 bg-white">
                    <strong class="mb-3 d-block">{{ news.title }}</strong>
                    <p class="lead font-italic mb-4">{{ news.description }}</p>
                    <h6>{{ news.author }}</h6>
                    <p>{{ news.source }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "News",

  data() {
    return {
      newsData: [],
    };
  },

  methods: {
    async getNews() {
      try {
        const resp = await axios({
          url: "http://api.mediastack.com/v1/news?access_key=9d0f528392283cd989ff3373f861b2ef&categories=health&keywords=exercise%20body&limit=3&sort=popularity&countries=us",
          method: "GET",
        });
        const { data } = resp.data;
        // console.log(data);
        this.newsData = data;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    await this.getNews();
  },
};
</script>

<style></style>
