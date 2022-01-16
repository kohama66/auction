<template>
  <button class="base-button">{{ state.label }}</button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

type State = {
  label: string;
};

export default defineComponent({
  name: "BaseButton",
  props: {
    label: {
      type: String,
      default: "送信",
    },
  },
  setup(props) {
    const state = reactive<State>({
      label: props.label,
    });
    return {
      state,
    };
  },
});
</script>

<style lang="scss" scoped>
.base-button {
  border-radius: 5px;
  border: 1px gray solid;
  padding: 5px;
}
</style>
