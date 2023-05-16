import { Component } from '@angular/core';
import { ItemBaseComponent, ItemService } from '@yardbird/xplat/features';
import { RelatedItemsComponent } from './components/related-items/related-items.component';
import { DetailsComponent } from './components/details/details.component';

@Component({
  templateUrl: './item.component.html',
  providers: [
    {
      provide: ItemService,
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
