<template>
  <div class="galleryView">
    <img class="logo" alt="logo" src="../assets/logo.svg" />
    <GalleryLayout>
      <GalleryTopBar />
      <GalleryGrid />
    </GalleryLayout>
  </div>
</template>

<script lang="ts">
import GalleryGrid from "@/components/GalleryGrid.vue";
import GalleryLayout from "@/components/GalleryLayout.vue";
import GalleryTopBar from "@/components/GalleryTopBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GalleryView",
  components: {
    GalleryLayout,
    GalleryTopBar,
    GalleryGrid,
  },
});
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryView {
  height: 100vh;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: $primary-color;

  .logo {
    margin: 10px;
    width: 94px;
    height: 14px;
    margin-bottom: 10px;
  }
}
</style>
