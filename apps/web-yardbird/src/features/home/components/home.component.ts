import { Component } from '@angular/core';

import { BaseComponent } from '@yardbird/xplat/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { UIModule } from '@yardbird/xplat/web/features';

@Component({
  selector: 'yardbird-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [UIModule, RouterLink, TranslateModule],
})
export class HomeComponent extends BaseComponent {}
