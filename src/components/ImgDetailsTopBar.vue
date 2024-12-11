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
import { useRoute } from "vue-router";

export default {
  name: "ImgDetailsTopBar",
  setup() {
    const route = useRoute();
    const id = route.params.id as string;

    const store = useGalleryStore();
    const { loading, imgDetails } = storeToRefs(store);
    const { addMarkedId } = store;

    const goBack = () => {
      router.push("/");
      addMarkedId(id);
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
    cursor: pointer;
  }

  .author {
    font-weight: bold;
  }
}
</style>
