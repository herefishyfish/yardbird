import { Component } from '@angular/core';
import { DetailsBaseComponent } from '@yardbird/xplat/features';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterLink } from '@angular/router';
import { LetDirective } from '@rx-angular/template/let';

@Component({
  selector: 'yardbird-item-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [LetDirective, RouterLink, NgxSkeletonLoaderModule],
})
export class DetailsComponent extends DetailsBaseComponent {
  constructor() {
    super();
  }
}
