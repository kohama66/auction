<template>
  <p class="base-text">
    {{ state.text }}
  </p>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

type State = {
  text: string;
};
export default defineComponent({
  name: "BaseText",
  props: {
    text: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 16,
    },
  },

  setup(props) {
    const state = reactive<State>({
      text: props.text,
    });
    const fontSize = `${props.size}px`;

    return {
      state,
      fontSize,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-text {
  font-size: v-bind(fontSize);
}
</style>
