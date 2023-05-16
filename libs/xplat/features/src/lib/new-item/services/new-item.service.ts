import { Inject, Injectable, Optional } from '@angular/core';
import { IYardBirdBaseItem } from '@yardbird/xplat/core';
import { IItemDataService, ITEM_DATA_SERVICE } from '@yardbird/xplat/features';

@Injectable({
  providedIn: 'root',
})
export class NewItemService {
  constructor(
    @Inject(ITEM_DATA_SERVICE)
    @Optional()
    private data: IItemDataService<IYardBirdBaseItem>
  ) {}

  saveItem(document: Partial<IYardBirdBaseItem>) {
    return this.data.saveDocument(document);
  }
}
