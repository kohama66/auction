<template>
  <div class="catalog-list-item">
    <figure class="image"></figure>
    <h2 class="title">{{ state.item.name }}</h2>
    <p class="price">最低落札金額 : {{ state.item.min_price }}</p>
    <p class="description">
      {{ state.item.description }}
    </p>
    <div class="seller">
      <p>出品者 : 山田 太郎</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from "@/openapi";
import { defineComponent, PropType, reactive } from "@vue/runtime-core";

type State = {
  item: Product;
};

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  name: "CatalogListItem",
  setup(props) {
    const state = reactive<State>({
      item: props.item,
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.catalog-list-item {
  width: 30%;
  max-width: 350px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  .image {
    height: 240px;
    width: 100%;
    background-color: gray;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
    padding: 10px 0;
  }
  .price {
    font-size: 16px;
  }
  .description {
    margin-top: 15px;
    font-size: 14px;
    line-height: 1.4em;
    min-height: 150px;
  }
  .seller {
    padding: 10px 0 0;
    text-align: right;
    p {
      font-size: 14px;
    }
  }
}
</style>
