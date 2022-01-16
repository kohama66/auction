<template>
  <div class="auction-item-view">
    <div class="price">
      <BaseText text="10000円" :size="50" />
    </div>
    <div class="image">
      <figure></figure>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseText from "../atoms/BaseText.vue";
export default defineComponent({
  name: "AuctionItemView",
  components: {
    BaseText,
  },
});
</script>

<style lang="scss" scoped>
.auction-item-view {
  .price {
    text-align: center;
    padding: 20px;
  }
  .image {
    figure {
      width: 300px;
      height: 500px;
      background-color: gray;
      margin: 0 auto;
    }
  }
}
</style>
