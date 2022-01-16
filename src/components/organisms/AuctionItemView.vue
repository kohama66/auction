<template>
  <div class="auction-item-view">
    <div class="price">
      <BaseText text="最高入札額" :size="20" />
      <BaseText :text="props.price + '円'" :size="50" />
    </div>
    <div class="image">
      <figure></figure>
    </div>
    <div class="name">
      <BaseText :text="props.name" />
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
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    return {
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.auction-item-view {
  .price {
    text-align: center;
    padding: 10px;
  }
  .image {
    padding: 10px;
    figure {
      width: 300px;
      height: 500px;
      background-color: gray;
      margin: 0 auto;
    }
  }
  .name {
    text-align: center;
  }
}
</style>
