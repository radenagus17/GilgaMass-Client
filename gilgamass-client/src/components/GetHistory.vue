<template>
  <tr>
    <td>{{ index + 1 }}</td>
    <td>{{ data.name }}</td>
    <td>{{ data.cal_need }}</td>
    <td>{{ new Date(data.createdAt).toISOString().split("T")[0] }}</td>
    <td>
      <span class="badge badge-warning" v-if="!data.success">Belum Selesai</span>
      <span class="badge badge-success" v-if="data.success">Berhasil</span>
    </td>
    <td class="project-actions text-right" v-if="data.cal_need > 0">
      <router-link class="btn btn-info btn-sm" :to="`/tracking/edit_history/${data.id}?header=Add%20Track&tag=${data.id}`"><i class="fas fa-pencil-alt"> </i> Edit</router-link>
    </td>
  </tr>
</template>

<script>
export default {
  name: "GetHistory",
  props: ["index", "data"],
};
</script>

<style></style>
