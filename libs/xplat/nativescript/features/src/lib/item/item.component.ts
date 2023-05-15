import { Component } from '@angular/core';
import { ItemBaseComponent, ItemService } from '@yardbird/xplat/features';

@Component({
  templateUrl: './item.component.html',
  providers: [
    {
      provide: ItemService,
    },
  ],
})
export class ItemComponent extends ItemBaseComponent {
  constructor() {
    super();
  }
}
