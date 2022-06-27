import { Component } from '@angular/core';

import { BaseComponent } from '@yardbird/xplat/core';

@Component({
  selector: 'yardbird-home',
  templateUrl: './home.component.html',
  styles: [`
    [ybButton] {
      margin: 4 0;
    }
  `]
})
export class HomeComponent extends BaseComponent {}
