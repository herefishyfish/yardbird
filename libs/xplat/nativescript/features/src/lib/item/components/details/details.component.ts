import { Component } from '@angular/core';
import { DetailsBaseComponent, ItemService } from '@yardbird/xplat/features'

@Component({
  selector: 'yardbird-item-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends DetailsBaseComponent {
  constructor(private _itemService: ItemService) {
    super(_itemService);
  }
}
