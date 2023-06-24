<template>
  <div class="m-auto w-75">
    <form class="form bg-dark p-4 mb-3" @submit.prevent="saveValue">
      <div class="mb-3">
        <label for="editValue" class="form-label text-light">Редактировать значение</label>
        <input type="text" class="form-control bg-transparent border-light text-light"
               id="editValue" v-model="editValue"/>
      </div>
      <button type="submit" class="btn btn-primary">Сохранить изменения</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "edit-form",
  data() {
    return {
      editValue: "",
    };
  },
  props: {
    editItem: Object,
  },
  watch: {
    editItem: {
      handler() {
        if (this.editValue !== null) {
          this.editValue = this.editItem.value;
        }
      },
      immediate: true,
    },
  },
  methods: {
    saveValue() {
      if (this.editItem !== null) {
        this.editItem.value = this.editValue;
        this.editValue = "";
        this.editItem = null;
      } else {
        console.error("editItem is null");
      }
    },
  },
};
</script>


