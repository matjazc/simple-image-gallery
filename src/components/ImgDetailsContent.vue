<template>
  <div class="wrapper">
    <div class="imgDetailsContent">
      <div class="imgSize">
        {{ isLoading ? "..." : `${imgDetails?.width}x${imgDetails?.height}` }}
      </div>
      <div v-if="imgDetails" class="container">
        <img :src="imgDetails.download_url" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useGalleryStore } from "@/store/galleryStore";
import { storeToRefs } from "pinia";

export default {
  name: "ImgDetailsContent",
  setup() {
    const store = useGalleryStore();
    const { isLoading, imgDetails } = storeToRefs(store);

    return {
      imgDetails,
      isLoading,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.wrapper {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow: auto;

  .imgDetailsContent {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin: 20px 20px 0;
    border-radius: 8px 8px 0 0;
    background-color: $primary-color;

    .imgSize {
      font-size: 14px;
      font-weight: bold;
      color: $secondary-text-color;
      margin: 15px;
    }

    .container {
      display: flex;
      justify-content: center;

      img {
        max-width: 80%;
        border-radius: 8px;
      }
    }
  }
}
</style>
