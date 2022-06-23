import { Component } from '@angular/core';
import { RelatedItemsBaseComponent } from '@yardbird/xplat/features';

@Component({
  selector: 'yardbird-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.scss']
})
export class RelatedItemsComponent extends RelatedItemsBaseComponent {

  constructor() {
    super();
  }
}
