<template>
  <div class="auction-item-view">
    <div class="name">
      <BaseText :text="props.name" />
    </div>
    <div class="price">
      <BaseText :text="props.price + '円'" :size="50" />
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
  .name {
    text-align: center;
  }
  .price {
    text-align: center;
    padding: 10px;
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
