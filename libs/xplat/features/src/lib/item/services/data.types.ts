import { InjectionToken } from "@angular/core";
import { IYardBirdBaseItem } from "@yardbird/xplat/core";
import { Observable } from "rxjs";

export interface IItemDataService<T> {
  saveDocument(document: Partial<IYardBirdBaseItem>): Promise<Partial<IYardBirdBaseItem>>;
  getDocument(path: string): Observable<T>;
  getRelatedDocuments(id: T): Observable<T[]>;
}

export const ITEM_DATA_SERVICE = new InjectionToken<IItemDataService<any>>('Unified Item Data Service');
