<template>
  <div class="data-list">
    <div class="data-list__items">
      <div
        class="data-list__item"
        v-for="(item, index) in data"
        :key="index"
        :class="{ 'data-list__item--selected': index === selectedItem }"
        @click="selectItem(index)"
      >
        {{ item.name }}: {{ item.value }}
      </div>
    </div>
    <div class="data-list__form" v-if="selectedItem !== null">
      <data-item
        :name="data[selectedItem].name"
        :value="data[selectedItem].value"
        @save="saveItem"
      />
    </div>
  </div>
</template>

<script>
import DataItem from "./DataItem.vue";

export default {
  components: {
    DataItem,
  },
  props: {
    data: Array,
  },
  data() {
    return {
      selectedItem: null,
    };
  },
  methods: {
    selectItem(index) {
      this.selectedItem = index;
    },
    saveItem(newValue) {
      this.$emit("save", this.selectedItem, newValue);
      this.selectedItem = null;
    },
  },
};
</script>

<style scoped>
.data-list {
  display: flex;
  flex-direction: row;
}

.data-list__items {
  flex: 1;
  margin-right: 20px;
}

.data-list__item {
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.data-list__item--selected {
  background-color: #eee;
}

.data-list__form {
  flex: 2;
}
</style>
