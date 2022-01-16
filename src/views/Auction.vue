<template>
  <div class="auction">
    <AuctionItemView
      :name="state.product?.name || ''"
      :price="state.product?.min_price || 0"
    />
    <AuctionForm />
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
};
export default defineComponent({
  name: "Auction",
  components: {
    AuctionItemView,
    AuctionForm,
  },

  setup() {
    const state = reactive<State>({
      product: undefined,
    });
    const route = useRoute();

    onBeforeMount(async () => {
      const id = Number(route.params.id);
      const response = await repositories.getAuctionsIdProducts(id);
      state.product = response.data[0];
    });

    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.auction {
  min-height: 100vh;
  padding-top: 50px;
  .auction-form {
    position: absolute;
    bottom: 0;
  }
}
</style>
