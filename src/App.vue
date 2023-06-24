<template>
  <div class="app">
    <h1 class="text-center">Тестовое задание</h1>

    <div class="m-auto w-75">
      <form class="form bg-dark p-4 mb-3" @submit.prevent="saveValue">
        <div class="mb-3">
          <label for="editValue" class="form-label text-light"
            >Редактировать запись</label
          >
          <input
            type="text"
            class="form-control bg-transparent border-light text-light"
            id="editValue"
            v-model="editValue"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Сохранить изменения
        </button>
      </form>
    </div>

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
          <tr
            class="list-item"
            v-for="(item, index) in data"
            :key="index"
            @click="editItem(item)"
          >
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      data: [
        { name: "Запись 1", value: "Содержание 1" },
        { name: "Запись 2", value: "Содержание 2" },
        { name: "Запись 3", value: "Содержание 3" },
        { name: "Запись 4", value: "Содержание 4" },
        { name: "Запись 5", value: "Содержание 5" },
      ],
      editValue: "",
      editIndex: null,
    };
  },

  methods: {
    editItem(item) {
      this.editValue = item.value;
      this.editIndex = this.data.indexOf(item);
    },

    saveValue() {
      if (this.editIndex !== null) {
        this.data[this.editIndex].value = this.editValue;
        this.editValue = "";
        this.editIndex = null;
      }
    },
  },
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
}
.app {
  width: 100%;
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: yellowgreen;
}

h1 {
  margin-bottom: 20px;
}
.selected {
  background-color: #394963;
  color: #fff;
}
</style>
