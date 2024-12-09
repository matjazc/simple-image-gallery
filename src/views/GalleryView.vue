<template>
  <div class="galleryView">
    <img class="logo" alt="logo" src="../assets/logo.svg" />
    <GalleryLayout></GalleryLayout>
  </div>
</template>

<script lang="ts">
import GalleryLayout from "@/components/GalleryLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "GalleryView",
  components: {
    GalleryLayout,
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
