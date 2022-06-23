import { Component } from '@angular/core';
import { DetailsBaseComponent } from '@yardbird/xplat/features'

@Component({
  selector: 'yardbird-item-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends DetailsBaseComponent {
  constructor() {
    super();
  }
}
