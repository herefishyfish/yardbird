import { Inject, Injectable, Optional } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import { Observable, switchMap, map, shareReplay, distinctUntilChanged } from 'rxjs';
import { IItemDataService, ITEM_DATA_SERVICE } from './data.types';

@Injectable()
export class ItemService {
  public item$!: Observable<IYardBirdBaseItem>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(ITEM_DATA_SERVICE)
    @Optional()
    private data: IItemDataService<IYardBirdBaseItem>,
  ) {
    if (!data) {
      throw new Error('Item data service was not provided.');
    }

    this.item$ = this._activatedRoute.paramMap.pipe(
      distinctUntilChanged(),
      switchMap((params: ParamMap) => {
        return this.data.getDocument(`items/${params.get('id')}`).pipe(
          map((doc) => {
            if (!doc) {
              throw new Error('Could not find item');
            }
            return doc;
          }),
        );
      }),
      shareReplay(1)
    );
  }
}
