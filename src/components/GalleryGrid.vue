<template>
  <div class="galleryGrid"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GalleryGrid",
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryGrid {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 20px 20px 0 20px;
}
</style>
