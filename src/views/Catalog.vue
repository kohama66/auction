<template>
  <div class="catalog">
    <CatalogList />
  </div>
</template>

<script lang="ts">
import CatalogList from "@/components/organisms/CatalogList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Catalog",
  components: {
    CatalogList,
  },
});
</script>

<style lang="scss" scoped>
.catalog {
  background-color: #1d0000;
  min-height: 100vh;
  padding: 5%;
}
</style>
