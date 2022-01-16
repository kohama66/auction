<template>
  <div class="auction-form">
    <form>
      <input type="text" />
      <BaseButton label="入札する" />
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseButton from "../atoms/BaseButton.vue";
export default defineComponent({
  name: "AuctionForm",
  components: {
    BaseButton,
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
