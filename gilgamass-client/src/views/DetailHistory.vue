<template>
  <section class="content">
    <ContentHeader></ContentHeader>
    <div class="container-fluid">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">Your History Detail</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body table-responsive p-0">
          <table class="table table-hover text-nowrap">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Makanan</th>
                <th>Kalori Makanan</th>
                <th>Sisa Kalori</th>
                <th>Waktu Makan</th>
                <th>Olahraga</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in histories" :key="data.id" v-show="data.food_name">
                <td>{{ index }}</td>
                <td>{{ data.food_name }}</td>
                <td>{{ data.food_cal }}</td>
                <td>{{ data.cal_remain }}</td>
                <td>{{ data.type }}</td>
                <td>{{ data.exercise ? "dilakukan" : "tidak dilakukan" }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
      <!-- /.card -->
    </div>
  </section>
</template>

<script>
import ContentHeader from "@/components/ContentHeader.vue";
export default {
  name: "DetailHistory",

  computed: {
    histories() {
      return this.$store.state.histories;
    },
  },

  components: {
    ContentHeader,
  },

  async created() {
    this.$store.dispatch("getDetailHistory");
  },
};
</script>

<style></style>
