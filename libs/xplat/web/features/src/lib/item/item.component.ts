import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _router: Router) {
    super(_router);
  }
}
