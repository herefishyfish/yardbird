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
          throw new Error('Could not initialize document subscriber');
        },
        next: (snapshot: DocumentSnapshot) => {
          this.zone.run(() => {
            subscriber.next(snapshot.data());
          });
        },
      });
    });
  }

  getRelatedDocuments({
    category,
    id,
  }: IYardBirdBaseItem): Observable<IYardBirdBaseItem[]> {
    return new Observable((subscriber) => {
      const collectionRef = this.firestore
        .collection('items')
        .where('category', '==', category)
        .where('id', '!=', id)
        .orderBy('id')
        .orderBy('createdDTM')
        .limit(5);

      collectionRef.onSnapshot({
        error: () => {
          throw new Error('Could not initialize collection subscriber');
        },
        next: (snapshot) => {
          this.zone.run(() => {
            subscriber.next(snapshot.docs.map((doc) => doc.data()));
          });
        },
      });
    });
  }
}
