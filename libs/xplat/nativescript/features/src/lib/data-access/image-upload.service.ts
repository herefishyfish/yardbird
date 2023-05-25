import { Injectable, NgZone } from "@angular/core";
import { firebase } from '@nativescript/firebase-core';
import { Task, TaskEvent } from '@nativescript/firebase-storage';
import { IImageUploadService } from "@yardbird/xplat/features";
import { BehaviorSubject, Observable, combineLatest, of } from "rxjs";
import { shareReplay, startWith, switchMap } from "rxjs/operators";

@Injectable()
export class ImageUploadService implements IImageUploadService {
  storage;

  private uploadTasksSubject: BehaviorSubject<Observable<number>[]> = new BehaviorSubject<any>([]);
  public images$ = this.uploadTasksSubject.pipe(
    switchMap(uploadTasks => uploadTasks.length ? combineLatest(uploadTasks) : of([])),
    shareReplay({
      refCount: true,
      bufferSize: 1
    })
  );

  constructor(private zone: NgZone) {
    this.storage = firebase().storage();
  }

  uploadImages(images: File[]): void {
    const currentTasks = this.uploadTasksSubject.getValue();
    images.forEach((image) => {
      const newTask = new Observable<number>((observer) => {
        const storageRef = this.storage.ref(image.name).put(image);
        const uploadTask = storageRef as Task;

        uploadTask.on(TaskEvent.STATE_CHANGED, {
          next: (snapshot) => {
            const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            observer.next(progress);
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
        this.storage.ref(image).delete();
      })
    ).then(() => {
      console.log('Images deleted successfully');
    });
  }
}
