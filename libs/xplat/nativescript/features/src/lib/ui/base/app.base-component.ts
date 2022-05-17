import { Directive } from '@angular/core';

// libs
import { BaseComponent } from '@yardbird/xplat/core';
import { AppService } from '@yardbird/xplat/nativescript/core';

@Directive()
export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
