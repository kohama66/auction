<template>
  <p class="base-text">
    {{ props.text }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from "vue";

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
    const fontSize = `${props.size}px`;

    return {
      props,
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
