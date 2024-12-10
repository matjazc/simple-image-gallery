<template>
  <div class="imgDetailsTopBar">
    <img
      class="iconLeft"
      alt="left arrow"
      src="../assets/arrow-left-regular.svg"
      @click="goBack()"
    />
    <div class="author">{{ loading ? "..." : imgDetails?.author }}</div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { useGalleryStore } from "@/store/galleryStore";
import { storeToRefs } from "pinia";

export default {
  name: "ImgDetailsTopBar",
  setup() {
    const store = useGalleryStore();
    const { loading, imgDetails } = storeToRefs(store);

    const goBack = () => {
      router.push("/");
    };

    return {
      imgDetails,
      loading,
      goBack,
    };
  },
};
</script>

<style lang="scss">
@import "@/styles/_variables.scss";

.imgDetailsTopBar {
  display: flex;
  padding: 10px 20px;
  background-color: $background-color;
  border: 1px solid $secondary-color;

  .iconLeft {
    height: 24px;
    margin-right: 5px;
  }

  .author {
    font-weight: bold;
  }
}
</style>
