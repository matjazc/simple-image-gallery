import GalleryCard from "@/components/GalleryCard.vue";
import router from "@/router";
import { createTestingPinia } from "@pinia/testing";
import { shallowMount } from "@vue/test-utils";

jest.mock("@/router", () => ({
  push: jest.fn(),
}));

describe("GalleryCard.vue", () => {
  const mockId = "123";
  const mockAuthor = "John Doe";
  const mockApiRoutes = { RANDOM_IMAGES: "https://picsum.photos" };

  const factory = (markedImages: string[] = []) => {
    return shallowMount(GalleryCard, {
      props: { id: mockId, author: mockAuthor },
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              gallery: {
                markedImages,
              },
            },
          }),
        ],
      },
    });
  };

  it("renders author name", () => {
    const wrapper = factory();
    expect(wrapper.find(".author").text()).toBe(mockAuthor);
  });

  it("renders image with correct src", () => {
    const wrapper = factory();
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe(
      `${mockApiRoutes.RANDOM_IMAGES}/id/${mockId}/240`
    );
  });

  it("navigates to image details on image click", async () => {
    const wrapper = factory();
    await wrapper.find("img").trigger("click");
    expect(router.push).toHaveBeenCalledWith({
      name: "ImageDetails",
      params: { id: mockId },
    });
  });

  it("shows 'Viewed' overlay if image is marked as viewed", () => {
    const wrapper = factory([mockId]);
    const overlay = wrapper.find(".overlay");
    expect(overlay.exists()).toBe(true);
    expect(overlay.text()).toBe("Viewed");
  });

  it("does not show 'Viewed' overlay if image is not marked", () => {
    const wrapper = factory();
    const overlay = wrapper.find(".overlay");
    expect(overlay.exists()).toBe(false);
  });

  it("renders the download button", () => {
    const wrapper = factory();
    const button = wrapper.find(".button");
    expect(button.exists()).toBe(true);
    expect(button.text()).toBe("Download");
  });
});
