import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import {
  Observable,
  switchMap,
  map,
  shareReplay,
  distinctUntilChanged,
  skip,
} from 'rxjs';
import { IItemDataService, ITEM_DATA_SERVICE } from './data.types';

@Injectable()
export class ItemService {
  public item$!: Observable<IYardBirdBaseItem>;
  public relatedItems$!: Observable<IYardBirdBaseItem[]>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(ITEM_DATA_SERVICE)
    @Optional()
    private data: IItemDataService<IYardBirdBaseItem>
  ) {
    if (!data) {
      throw new Error('Item data service was not provided.');
    }

    const activeRoute$ = this._activatedRoute.paramMap.pipe(
      distinctUntilChanged(),
    );

    this.item$ = activeRoute$.pipe(
      switchMap((params: ParamMap) => {
        return this.data.getDocument(`items/${params.get('id')}`).pipe(
          map((doc) => {
            if (!doc) {
              throw new Error('Could not find item');
            }
            return doc;
          })
        );
      })
    );

    this.relatedItems$ = this.item$.pipe(
      switchMap((item: IYardBirdBaseItem) => {
        return this.data.getRelatedDocuments(item);
      })
    );
  }
}
