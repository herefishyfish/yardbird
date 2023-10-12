import { Component } from '@angular/core';
import { NewItemBaseComponent } from '@yardbird/xplat/features';

@Component({
  selector: 'yrdbrd-new-item',
  templateUrl: './new-item.component.html',
  styles: [`
    TextField, TextView, Button {
      margin: 6;
    }
  `],

})
export class NewItemComponent extends NewItemBaseComponent {
}
