<template>
  <div class="auction-form">
    <form @submit.prevent="submit">
      <input type="number" v-model="state.price" />
      <BaseButton label="入札する" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import BaseButton from "../atoms/BaseButton.vue";
export default defineComponent({
  name: "AuctionForm",
  components: {
    BaseButton,
  },
  emits: ["onSubmit"],

  setup(_, context) {
    const state = reactive({
      price: 0,
    });
    const submit = () => {
      context.emit("onSubmit", state.price);
      state.price = 0;
    };

    return {
      state,
      submit,
    };
  },
});
</script>

<style lang="scss" scoped>
.auction-form {
  width: 100%;
  padding: 30px;
  form {
    display: flex;
    justify-content: center;
    input {
      border: 1px gray solid;
      padding: 10px;
      border-radius: 5px;
      min-width: 50%;
      margin-right: 10px;
    }
  }
}
</style>
