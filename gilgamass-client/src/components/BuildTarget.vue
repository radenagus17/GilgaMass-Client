<template>
  <section class="content">
    <ContentHeader></ContentHeader>
    <div class="container-fluid" style="width: 70%; margin: 3% auto">
      <!-- left column -->
      <!-- general form elements -->
      <div class="card card-primary">
        <div class="card-header">
          <h3 class="card-title">Yuks.. Buat Target Harianmu</h3>
        </div>
        <!-- /.card-header -->
        <!-- form start -->
        <form @submit.prevent="handleSubmitPost">
          <div class="card-body">
            <div class="form-group text-center">
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline" class="custom-control-input" v-model="target" :value="1" />
                <label class="custom-control-label" for="customRadioInline1">Fokus Kalor</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline" class="custom-control-input" v-model="target" :value="2" />
                <label class="custom-control-label" for="customRadioInline2">Rendah Karbo</label>
              </div>
            </div>
            <div class="form-group">
              <label>Height</label>
              <input type="number" v-model="height" class="form-control" placeholder="Your Height" />
            </div>
            <div class="form-group">
              <label>Weight</label>
              <input type="number" v-model="weight" class="form-control" placeholder="Your Weight" />
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
import ContentHeader from "@/components/ContentHeader.vue";
import axios from "axios";
export default {
  name: "BuildTarget",

  data() {
    return {
      target: "",
      height: 0,
      weight: 0,
    };
  },

  components: {
    ContentHeader,
  },

  methods: {
    async handleSubmitPost() {
      try {
        const resp = await axios({
          url: `${this.$baseUrl}/target/pub/${this.target}`,
          method: "GET",
        });
        const { target } = resp.data;
        await axios({
          url: `${this.$baseUrl}/target`,
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            name: target.name,
            cal_need: target.cal_need,
          },
        });
        const resp1 = await axios({
          url: `${this.$baseUrl}/user/${localStorage.getItem("idUser")}`,
          method: "PATCH",
          data: {
            height: this.height,
            weight: this.weight,
          },
        });
        const { user } = resp1.data;
        console.log(user);
        await axios({
          url: `${this.$baseUrl}/schedule`,
          method: "POST",
          data: {
            name: user.name,
            email: user.email,
          },
        });
        this.$router.push({ name: "MainContent" });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style></style>
