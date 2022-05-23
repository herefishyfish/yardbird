import { Injectable } from '@angular/core';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import { IItemDataService } from '@yardbird/xplat/features';
import { map, Observable } from 'rxjs';

@Injectable()
export class ItemDataService implements IItemDataService<IYardBirdBaseItem> {
  constructor(
    private firestore: Firestore,
  ) {}

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
}
