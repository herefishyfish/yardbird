import { Component } from '@angular/core';

import { NewItemBaseComponent } from '@yardbird/xplat/features';

@Component({
  selector: 'yrdbrd-new-item',
  templateUrl: './new-item.component.html',
  styles: [`
    StackLayout {
      padding: 16;
    }
  `]
})
export class NewItemComponent extends NewItemBaseComponent {
  constructor() {
    super();
  }
}
