<template>
  <div class="galleryTopBar">
    <div>1 - 30 of 120</div>
    <div>pagination</div>
  </div>
</template>

<script>
export default {
  name: "GalleryTopBar",
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.galleryTopBar {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $primary-color;
}
</style>
