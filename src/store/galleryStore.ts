import { defineStore } from "pinia";

interface Image {
  id: string;
  author: string;
  download_url: string;
}

interface State {
  images: Image[];
  loading: boolean;
}

export const useGalleryStore = defineStore("counter", {
  state: (): State => ({
    images: [],
    loading: false,
  }),
  actions: {
    async getImages() {
      this.loading = true;

      try {
        //TODO:
      } catch (error) {
        console.error("Error fetching images:", error);
        return error;
      } finally {
        this.loading = false;
      }
    },
  },
});
