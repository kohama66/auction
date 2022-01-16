<template>
  <div class="auction">
    <AuctionItemView />
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
  products: Product[];
};
export default defineComponent({
  name: "Auction",
  components: {
    AuctionItemView,
    AuctionForm,
  },

  setup() {
    const state = reactive<State>({
      products: [],
    });
    const route = useRoute();

    onBeforeMount(async () => {
      const id = Number(route.params.id);
      const response = await repositories.getAuctionsIdProducts(id);
      state.products = response.data;
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
