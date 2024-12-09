<template>
  <div class="galleryLayout">GalleryLayout</div>
</template>

<script>
export default {
  name: "GalleryLayout",

  setup() {
    //TODO:
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryLayout {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 10px;
  border-radius: 8px 8px 0 0;
  background-color: $background-color;
}
</style>
