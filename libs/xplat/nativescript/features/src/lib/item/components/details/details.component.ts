import { Component } from '@angular/core';
import { ItemService } from '@yardbird/xplat/features'

@Component({
  selector: 'yardbird-item-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  item$;

  constructor(private itemService: ItemService) {
    this.item$ = this.itemService.item$;
  }
}
