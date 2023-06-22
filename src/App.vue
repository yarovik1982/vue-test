<template>
  <div class="app">
    <h1>Редактирование структуры данных</h1>
    <data-list :data="data" @save="saveData" />
  </div>
</template>

<script>
import DataList from "@/components/DataList.vue";

export default {
  components: {
    DataList,
  },
  data() {
    return {
      data: [
        { name: "foo1", value: "bar1" },
        { name: "foo2", value: "bar2" },
        { name: "foo3", value: "bar3" },
        { name: "foo4", value: "bar4" },
        { name: "foo5", value: "bar5" },
      ],
    };
  },
  methods: {
    saveData(index, newValue) {
      this.data[index].value = newValue;
    },
  },
};
</script>

<style>
.app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1 {
  margin-bottom: 20px;
}
</style>