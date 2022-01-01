<template>
  <div class="list">
    <CatalogListItem />
    <CatalogListItem />
    <CatalogListItem />
    <CatalogListItem />
    <CatalogListItem />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import CatalogListItem from "./CatalogListItem.vue";

export default defineComponent({
  name: "CatalogList",
  components: {
    CatalogListItem,
  },
});
</script>

<style lang="scss" scoped>
.list {
  background-color: #fffefb;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 35px;
  &::after {
    content: "";
    display: block;
    width: 30%;
    max-width: 350px;
  }
  .catalog-list-item {
    margin: 0 0 35px;
  }
}
</style>
