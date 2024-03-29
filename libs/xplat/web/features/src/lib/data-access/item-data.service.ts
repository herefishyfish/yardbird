import { Injectable } from '@angular/core';
import {
  addDoc,
  setDoc,
  collectionData,
  doc,
  docData,
  Firestore,
} from '@angular/fire/firestore';
import {
  collection,
  CollectionReference,
  limit,
  orderBy,
  query,
  where,
} from '@firebase/firestore';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import { IItemDataService } from '@yardbird/xplat/features';
import { map, Observable } from 'rxjs';

@Injectable()
export class ItemDataService implements IItemDataService<IYardBirdBaseItem> {
  constructor(private firestore: Firestore) {}

  getDocument(path: string): Observable<IYardBirdBaseItem> {
    const docRef = doc<IYardBirdBaseItem>(this.firestore as any, path);
    return docData<IYardBirdBaseItem>(docRef).pipe(
      map((doc) => {
        if (!doc) {
          throw new Error('Could not find item');
        }
        return doc;
      })
    );
  }

  getRelatedDocuments({
    id,
    category,
  }: IYardBirdBaseItem): Observable<IYardBirdBaseItem[]> {
    const collectionRef = collection(this.firestore, 'items');
    return collectionData<IYardBirdBaseItem>(
      query<IYardBirdBaseItem>(
        collectionRef as CollectionReference<IYardBirdBaseItem>,
        where('id', '!=', id),
        where('category', '==', category),
        orderBy('id'),
        orderBy('createdDTM'),
        limit(5)
      )
    );
  }

  async saveDocument(
    document: Partial<IYardBirdBaseItem>
  ): Promise<Partial<IYardBirdBaseItem>> {
    let docRef;
    if (!document.id) {
      docRef = await addDoc(collection(this.firestore, 'items'), document);
    } else {
      docRef = doc(this.firestore, 'items', document.id);
      await setDoc(docRef, document, {
        merge: true,
      });
    }
    return docRef;
  }
}
