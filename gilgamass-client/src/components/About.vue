<template>
  <section class="about section bg-2" id="about">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center text-left">
          <!-- Image Content -->
          <div class="image-block">
            <h2>About Nutrition</h2>
            <p>
              Nutrisi adalah faktor gaya hidup penting yang dapat mengubah risiko gangguan kognitif dan demensia di masa depan. Selain itu, Nutrisi adalah faktor lingkungan yang dapat dimodifikasi yang telah dikaitkan dengan banyak penyakit
              tidak menular yang berhubungan dengan demensia, seperti diabetes dan penyakit kardiovaskular. Bukti menunjukkan bahwa nutrisi seumur hidup mungkin juga memiliki efek langsung pada fungsi otak. Nutrisi kelompok makanan Diet
              Mediterania. Yakni Asupan tinggi folat, vitamin E, karotenoid, flavonoid dan antioksidan lainnya, serat makanan, dan asam.
            </p>
          </div>
        </div>
        <div class="col-lg-6 col-md-10 m-md-auto align-self-center ml-auto">
          <div class="about-block">
            <!-- About 01 -->
            <div class="about-item active">
              <div class="content mx-auto">
                <h4>Hitung Kebutuhan Kalori Anda</h4>
                <form @submit.prevent="handleClick">
                  <div class="custom-control custom-radio custom-control-inline mt-3">
                    <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" v-model="target" value="1" />
                    <label class="custom-control-label" for="customRadioInline1">Fokus Kalori</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline mb-2">
                    <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" v-model="target" value="2" />
                    <label class="custom-control-label" for="customRadioInline2">Rendah Karbo</label>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Height</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" required aria-describedby="emailHelp" />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Weight</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" required />
                  </div>
                  <fieldset disabled>
                    <div class="form-group mt-2">
                      <input type="text" id="disabledTextInput" class="form-control" :placeholder="result ? 'Jumlah Kalori Yang Anda Butuhkan /hari ' + result + ' kalori' : ''" />
                    </div>
                  </fieldset>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
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
  name: "About",

  data() {
    return {
      target: "",
      result: "",
    };
  },

  methods: {
    async handleClick() {
      try {
        const resp = await axios({
          url: `${this.$baseUrl}/target/pub/${this.target}`,
          method: "GET",
        });
        const { target } = resp.data;
        this.result = target.cal_need;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
