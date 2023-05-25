import { Inject, Injectable, Optional } from "@angular/core";
import { IMAGE_UPLOAD_SERVICE } from "./data.types";

@Injectable()
export class ImageUploadService {
  constructor(
    @Inject(IMAGE_UPLOAD_SERVICE)
    @Optional()
    private uploadService: ImageUploadService
  ) {
    if (!uploadService) {
      throw new Error('Image upload service was not provided.');
    }
  }
}
