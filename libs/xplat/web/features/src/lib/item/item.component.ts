import { Component } from '@angular/core';
import { ITEM_DATA_SERVICE, ItemBaseComponent, ItemService } from '@yardbird/xplat/features';
import { RelatedItemsComponent } from './components/related-items/related-items.component';
import { DetailsComponent } from './components/details/details.component';
import { ItemDataService } from '../data-access/item-data.service';

@Component({
  templateUrl: './item.component.html',
  providers: [
    ItemService,
    {
      provide: ITEM_DATA_SERVICE,
      useClass: ItemDataService,
    },
  ],
  standalone: true,
  imports: [DetailsComponent, RelatedItemsComponent],
})
export class ItemComponent extends ItemBaseComponent {
  constructor() {
    super();
  }
}
