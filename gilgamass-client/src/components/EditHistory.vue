<template>
  <section class="content">
    <ContentHeader></ContentHeader>
    <div class="container-fluid" style="width: 70%; margin: 3% auto">
      <!-- left column -->
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Add Your Tracking</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="handleSubmitPost">
          <div class="card-body">
            <div class="form-group">
              <label>Nama Makanan</label>
              <input type="text" class="form-control" list="foods" v-model="food_name" placeholder="Search your food" />
              <datalist id="foods">
                <option v-for="(data, index) in foods" :key="index" :value="data.name" />
              </datalist>
              <!-- <select class="form-control" v-model="food_id">
                <option v-for="(data, index) in foods" :key="index" :value="data.id">{{ data.name }}</option>
              </select> -->
            </div>
            <div class="form-group">
              <label>Waktu Makan</label>
              <select class="form-control" v-model="type">
                <option disabled value="">Please select one</option>
                <option value="Sarapan">Sarapan</option>
                <option value="Makan Siang">Makan Siang</option>
                <option value="Makan Malam">Makan Malam</option>
                <option value="Kudapan">Kudapan</option>
              </select>
            </div>
            <div class="form-group"></div>
            <div class="form-group">
              <label>Olahraga</label>
              <div class="form-group">
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" v-model="exercise" :value="true" />
                  <label class="custom-control-label" for="customRadioInline1">Ya</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                  <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" v-model="exercise" :value="false" />
                  <label class="custom-control-label" for="customRadioInline2">Tidak</label>
                </div>
              </div>
            </div>
          </div>
          <!-- /.card-body -->

          <div class="card-footer">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
      <!-- /.card -->
    </div>
    <!-- /.container-fluid -->
  </section>
</template>

<script>
import axios from "axios";
import ContentHeader from "@/components/ContentHeader.vue";
export default {
  name: "EditHistory",

  data() {
    return {
      food_name: "",
      type: "",
      exercise: "",
      foods: [],
    };
  },

  components: {
    ContentHeader,
  },

  methods: {
    async getFoods() {
      try {
        const resp = await axios({
          url: `${this.$baseUrl}/food`,
          method: "GET",
        });
        const { foods } = resp.data;
        this.foods = foods;
      } catch (error) {
        console.log(error);
      }
    },

    async handleSubmitPost() {
      try {
        await axios({
          url: `${this.$baseUrl}/history/${this.$route.params.id}`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            food_name: this.food_name,
            type: this.type,
            exercise: this.exercise,
          },
        });
        this.$router.push("/tracking/history_detail?header=Detail%20History&tag=three");
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    await this.getFoods();
  },
};
</script>

<style></style>
