import { Directive } from '@angular/core';
import { ButtonBaseComponent } from '@yardbird/xplat/features';

@Directive({
  selector: '[ybButton]',
  standalone: true,
})
export class ButtonDirective extends ButtonBaseComponent {
  constructor() {
    super();
  }
}
