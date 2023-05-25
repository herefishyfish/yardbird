import { InjectionToken } from "@angular/core";
import { IYardBirdBaseItem } from "@yardbird/xplat/core";
import { Observable } from "rxjs";

export interface IItemDataService<T> {
  saveDocument(document: Partial<IYardBirdBaseItem>): Promise<Partial<IYardBirdBaseItem>>;
  getDocument(path: string): Observable<T>;
  getRelatedDocuments(id: T): Observable<T[]>;
}

export interface IImageUploadService {
  images$: Observable<number[]>;
  uploadImages(images: File[]): void;
  deleteImages(images: string[]): Promise<void>;
}

export const IMAGE_UPLOAD_SERVICE = new InjectionToken<IImageUploadService>('IMAGE_UPLOAD_SERVICE');
export const ITEM_DATA_SERVICE = new InjectionToken<IItemDataService<any>>('ITEM_DATA_SERVICE');
