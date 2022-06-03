import { Injectable, NgZone } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import { DocumentSnapshot } from '@nativescript/firebase-firestore';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import { IItemDataService } from '@yardbird/xplat/features';
import { Observable } from 'rxjs';


@Injectable()
export class ItemDataService implements IItemDataService<IYardBirdBaseItem> {
  firestore;

  constructor(private zone: NgZone) {
    this.firestore = firebase().firestore();
  }

  getDocument(path: string): Observable<IYardBirdBaseItem> {
    return new Observable((subscriber) => {
      const docRef = this.firestore.doc(path);
      docRef.onSnapshot({
        error: () => {
          throw new Error("Could not initialize document subscriber");
        },
        next: (snapshot: DocumentSnapshot) => {
          this.zone.run(() => {
            subscriber.next(snapshot.data());
          });
        },
      });
    });
  }
}
