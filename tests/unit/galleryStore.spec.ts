import { apiRoutes } from "@/constants/apiRoutes";
import { MAX_ITEMS_PER_PAGE } from "@/constants/constants";
import { useGalleryStore } from "@/store/galleryStore";
import axios from "axios";
import { createPinia, setActivePinia } from "pinia";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

const mockImages = [
  { id: "1", author: "John", download_url: "url1", width: 100, height: 100 },
  { id: "2", author: "Jane", download_url: "url2", width: 200, height: 200 },
];

const mockImageDetails = {
  id: "1",
  author: "John",
  download_url: "url1",
  width: 100,
  height: 100,
};

describe("Gallery Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    jest.clearAllMocks();
  });

  it("should fetch and store images", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockImages });

    const store = useGalleryStore();
    await store.getImages();

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${apiRoutes.RANDOM_IMAGES}/v2/list?page=${store.currentPage}&limit=${MAX_ITEMS_PER_PAGE}`
    );
    expect(store.images).toEqual(mockImages);
    expect(store.isLoading).toBe(false);
  });

  it("should handle errors during getImages", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    const store = useGalleryStore();
    const result = await store.getImages();

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(Error);
    expect(store.isLoading).toBe(false);
  });

  it("should fetch and store image details", async () => {
    mockedAxios.get.mockResolvedValueOnce({ data: mockImageDetails });

    const store = useGalleryStore();
    await store.getImgDetails("1");

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${apiRoutes.RANDOM_IMAGES}/id/1/info`
    );
    expect(store.imgDetails).toEqual(mockImageDetails);
    expect(store.isLoading).toBe(false);
  });

  it("should handle errors during getImgDetails", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    const store = useGalleryStore();
    const result = await store.getImgDetails("1");

    expect(mockedAxios.get).toHaveBeenCalled();
    expect(result).toBeInstanceOf(Error);
    expect(store.isLoading).toBe(false);
  });

  it("should set currentPage correctly", () => {
    const store = useGalleryStore();
   
    expect(store.currentPage).toBe(1);
    store.setCurrentPage(3);
    expect(store.currentPage).toBe(3);
  });

  it("should add a marked image ID to the markedImages array", () => {
    const store = useGalleryStore();

    expect(store.markedImages).toEqual([]);
    store.addMarkedId("123");
    expect(store.markedImages).toEqual(["123"]);
    store.addMarkedId("456");
    expect(store.markedImages).toEqual(["123", "456"]);
  });
});