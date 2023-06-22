<template>
  <div class="data-item">
    <div class="data-item__name">{{ name }}</div>
    <div class="data-item__value">
      <input type="text" v-model="newValue" />
    </div>
    <div class="data-item__actions">
      <button @click="saveItem">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    value: String,
  },
  data() {
    return {
      newValue: this.value,
    };
  },
  methods: {
    saveItem() {
      this.$emit("save", this.newValue);
    },
  },
};
</script>

<style scoped>
.data-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.data-item__name {
  flex: 1;
  margin-right: 10px;
}

.data-item__value {
  flex: 2;
}

.data-item__actions {
  flex: 1;
  text-align: right;
}
</style>

