<template>
  <section class="content">
    <ContentHeader></ContentHeader>
    <!-- Default box -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Your Target History</h3>

        <div class="card-tools">
          <button type="button" class="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i class="fas fa-minus"></i>
          </button>
          <button type="button" class="btn btn-tool" data-card-widget="remove" title="Remove">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
      <div class="card-body p-0">
        <table class="table table-striped projects">
          <thead>
            <tr>
              <th style="width: 1%">No</th>
              <th style="width: 14%">Target</th>
              <th style="width: 15%">Kebutuhan Kalori</th>
              <th style="width: 15%">Dibuat Tanggal</th>
              <th style="width: 15%">Status</th>
              <th style="width: 10%"></th>
            </tr>
          </thead>
          <tbody>
            <GetHistory v-for="(data, index) in targets" :key="index" :index="index" :data="data"></GetHistory>
          </tbody>
        </table>
      </div>
      <!-- /.card-body -->
    </div>
    <!-- /.card -->
  </section>
</template>

<script>
import GetHistory from "@/components/GetHistory.vue";
import ContentHeader from "@/components/ContentHeader.vue";
export default {
  name: "MainContent",

  components: {
    GetHistory,
    ContentHeader,
  },
  computed: {
    targets() {
      return this.$store.state.targets;
    },
  },

  methods: {
    getHistoryUser() {
      this.$store.dispatch("getHistory");
    },
  },

  async created() {
    await this.getHistoryUser();
  },
};
</script>

<style></style>
