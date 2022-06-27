import { Component } from '@angular/core';

import { NewItemBaseComponent } from '@yardbird/xplat/features';

@Component({
  moduleId: module.id,
  selector: 'yrdbrd-new-item',
  templateUrl: './new-item.component.html',
})
export class NewItemComponent extends NewItemBaseComponent {
  constructor() {
    super();
  }
}
