import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ItemService } from '@yardbird/xplat/features';

@Component({
  templateUrl: './item.component.html',
  providers: [
    {
      provide: ItemService,
    },
  ],
})
export class ItemComponent {
  constructor(private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
