import { Component } from '@angular/core';
import { AppService } from '@yardbird/xplat/nativescript/core';
import { AppBaseComponent } from '@yardbird/xplat/nativescript/features';



@Component({
  selector: 'yardbird-root',
  template: `
    <GridLayout>
      <page-router-outlet></page-router-outlet>
    </GridLayout>
  `,
})
export class AppComponent extends AppBaseComponent {
  constructor(appService: AppService) {
    super(appService);
  }
}
