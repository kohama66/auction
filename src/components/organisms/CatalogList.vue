<template>
  <div class="list">
    <CatalogListItem v-for="(item, i) in state.items" :key="i" :item="item" />
  </div>
</template>

<script lang="ts">
import { Product } from "@/openapi";
import repositories from "@/repositories";
import { defineComponent, onBeforeMount, reactive } from "@vue/runtime-core";
import CatalogListItem from "./CatalogListItem.vue";

type State = {
  items: Product[];
};

export default defineComponent({
  name: "CatalogList",
  components: {
    CatalogListItem,
  },
  setup() {
    const state = reactive<State>({
      items: [],
    });

    onBeforeMount(async () => {
      const response = await repositories.getAuctionsIdProducts(1); //仮
      state.items = response.data;
    });

    return {
      state,
    };
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
