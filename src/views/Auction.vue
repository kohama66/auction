<template>
  <div class="auction">
    <AuctionItemView
      :name="state.product?.name || ''"
      :price="state.currentBidAmount"
    />
    <AuctionForm @onSubmit="onBid" />
  </div>
</template>

<script lang="ts">
import AuctionForm from "@/components/organisms/AuctionForm.vue";
import AuctionItemView from "@/components/organisms/AuctionItemView.vue";
import { Product } from "@/openapi";
import repositories from "@/repositories";
import { defineComponent, onBeforeMount, reactive } from "vue";
import { useRoute } from "vue-router";

type State = {
  product?: Product;
  currentBidAmount: number;
};
export default defineComponent({
  name: "Auction",
  components: {
    AuctionItemView,
    AuctionForm,
  },

  setup() {
    const route = useRoute();

    const state = reactive<State>({
      product: undefined,
      currentBidAmount: 0,
    });

    onBeforeMount(async () => {
      const id = Number(route.params.id);
      const response = await repositories.getAuctionsIdProducts(id);
      state.product = response.data[0];
      state.currentBidAmount = response.data[0].min_price;
    });

    const onBid = (bidAmount: number) => {
      if (bidAmount > state.currentBidAmount) {
        state.currentBidAmount = bidAmount;
      }
    };

    return {
      state,
      onBid,
    };
  },
});
</script>

<style lang="scss" scoped>
.auction {
  min-height: 100vh;
  padding-top: 30px;
  .auction-form {
    position: absolute;
    bottom: 0;
  }
}
</style>
