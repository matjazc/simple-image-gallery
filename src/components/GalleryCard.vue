<template>
  <div class="card">
    <img
      :src="`https://picsum.photos/id/${id}/240`"
      alt="card image"
      class="img"
      @click="viewImgDetails(id)"
    />
    <div class="content">
      <div class="author">{{ author }}</div>
      <div class="divider"></div>
      <button class="button">Download</button>
    </div>
  </div>
</template>

<script lang="ts">
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
    const viewImgDetails = (id: string) => {
      //TODO: router.push({ name: "ImageDetails", params: { id } });
    };
    return { viewImgDetails };
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

  .img {
    cursor: pointer;
  }

  .content {
    padding: 0px 10px 10px 10px;

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
