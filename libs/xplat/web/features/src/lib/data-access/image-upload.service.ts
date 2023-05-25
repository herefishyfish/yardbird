import { Injectable } from "@angular/core";
import { Storage, ref, uploadBytesResumable, deleteObject, UploadTaskSnapshot } from "@angular/fire/storage";
import { IImageUploadService } from "@yardbird/xplat/features";
import { BehaviorSubject, Observable, combineLatest, of } from "rxjs";
import { switchMap, shareReplay, startWith } from "rxjs/operators";

@Injectable()
export class ImageUploadService implements IImageUploadService {
  private uploadTasksSubject: BehaviorSubject<Observable<number>[]> = new BehaviorSubject([]);
  public images$ = this.uploadTasksSubject.pipe(
    switchMap(uploadTasks => uploadTasks.length ? combineLatest(uploadTasks) : of([])),
    shareReplay({
      refCount: true,
      bufferSize: 1
    })
  );

  constructor(private storage: Storage) {}

  uploadImages(images: File[]): void {
    const currentTasks = this.uploadTasksSubject.getValue();
    images.forEach((image) => {
      const storageRef = ref(this.storage, image.name);
      const uploadTask = uploadBytesResumable(storageRef, image);

      const newTask = new Observable<number>((observer) => {
        uploadTask.on('state_changed', {
          next: (snapshot: UploadTaskSnapshot) => {
            observer.next(snapshot.bytesTransferred / snapshot.totalBytes * 100);
          },
          error: (error) => {
            observer.error(error);
          },
          complete: () => {
            observer.complete();
          }
        });
      }).pipe(startWith(0));

      currentTasks.push(newTask);
    });
    this.uploadTasksSubject.next(currentTasks);
  }

  deleteImages(images: string[]): Promise<void> {
    return Promise.all(
      images.map((image) => {
        deleteObject(ref(this.storage, image));
      })
    ).then(() => {
      console.log('Images deleted successfully');
    });
  }
}
