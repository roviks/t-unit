import { action, makeAutoObservable, observable } from "mobx";
import delay from "../../shared/utils/delay";
import { loadPhotos } from "./api";
import { PhotoDto } from "./types";

const PHOTOS_PER_PAGE = 15;
const MAX_PHOTOS = 5000;

const MAX_PAGE = Math.ceil(MAX_PHOTOS / PHOTOS_PER_PAGE);

class PhotosListModel {
  photos: PhotoDto[] = [];
  isLoading = false;
  error: string | null = null;
  page = 0;

  constructor() {
    makeAutoObservable(this, {
      photos: observable,
      loadMore: action,
    });
  }

  async loadMore() {
    if (this.page >= MAX_PAGE) {
      this.setIsLoading(false);
      return;
    }
    if (this.isLoading) {
      return;
    }

    try {
      this.setIsLoading(true);
      await delay(250);
      const photos = await loadPhotos(this.page, PHOTOS_PER_PAGE);
      this.addPhotos(photos);
      this.nextPage();
    } catch (e) {
      this.error = "Something went wrong";
    }
    this.setIsLoading(false);
  }

  private addPhotos(photos: PhotoDto[]) {
    this.photos.push(...photos);
  }
  private nextPage() {
    this.page++;
  }
  private setIsLoading(state: boolean) {
    this.isLoading = state;
  }
}

export const model = new PhotosListModel();
