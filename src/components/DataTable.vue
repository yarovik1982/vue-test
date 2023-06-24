<template>
  <div class="w-75 mx-auto">
    <table class="table table-bordered table-dark text-center table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">name</th>
          <th scope="col">value</th>
        </tr>
      </thead>
      <tbody class="list">
        <tr class="list-item"
            v-for="(item, index) in data"
            :key="index"
            @click="editItem = item">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ item.name }}</td>
          <td>{{ item.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "data-table",
  props: {
    data: Array,
  },
  data() {
    return {
      editItem: null,
    };
  }
};
</script>
