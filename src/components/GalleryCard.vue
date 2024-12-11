<template>
  <div class="card">
    <div class="imgWrapper">
      <img
        :src="`${apiRoutes.RANDOM_IMAGES}/id/${id}/240`"
        alt="card image"
        @click="viewImgDetails(id)"
      />
      <div v-if="markedImages.includes(id)" class="overlay">Viewed</div>
    </div>

    <div class="content">
      <div class="author">{{ author }}</div>
      <div class="divider"></div>
      <button class="button">Download</button>
    </div>
  </div>
</template>

<script lang="ts">
import { apiRoutes } from "@/constants/apiRoutes";
import router from "@/router";
import { useGalleryStore } from "@/store/galleryStore";
import { storeToRefs } from "pinia";

export default {
  name: "GalleryCard",
  props: {
    author: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  setup() {
    const store = useGalleryStore();
    const { markedImages } = storeToRefs(store);

    const viewImgDetails = (id: string) => {
      router.push({ name: "ImageDetails", params: { id } });
    };
    return { viewImgDetails, apiRoutes, markedImages };
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.card {
  max-width: 240px;
  border-radius: 10px;
  overflow: hidden;
  background-color: $primary-color;

  .imgWrapper {
    position: relative;

    img {
      cursor: pointer;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1;
      width: 240px;
      height: 240px;
      max-width: 240px;
      background-color: $viewed-overlay-color;
      color: $background-color;
      font-size: 24px;
      font-weight: bold;
      pointer-events: none;
    }
  }
  .content {
    padding: 0 10px 10px;

    .author {
      font-size: 14px;
      font-weight: bold;
    }

    .divider {
      border: 1px solid $secondary-color;
      margin: 6px 0;
    }

    .button {
      padding: 6px 10px;
      border: none;
      border-radius: 5px;
      background-color: $secondary-color;
      cursor: pointer;
      font-size: 12px;
    }

    .button:hover {
      background-color: $tertiary-color;
    }
  }
}
</style>
