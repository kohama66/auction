<template>
  <div class="catalog-list-item">
    <figure class="image"></figure>
    <h2 class="title">商品名</h2>
    <p class="price">最低落札金額 : 3000</p>
    <p class="description">
      商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品
      説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明
      商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品
      説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説
      明商品説明商品説明商品説明商品説明商品説明商品説明
      商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品
      説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明商品説明
    </p>
    <div class="seller">
      <p>出品者 : 山田 太郎</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "CatalogListItem",
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
