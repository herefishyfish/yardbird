import { Component } from '@angular/core';
import { RelatedItemsBaseComponent } from '@yardbird/xplat/features';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { LetDirective } from '@rx-angular/template/let';

@Component({
  selector: 'yardbird-related-items',
  templateUrl: './related-items.component.html',
  styleUrls: ['./related-items.component.scss'],
  standalone: true,
  imports: [LetDirective, NgFor, RouterLink, NgxSkeletonLoaderModule],
})
export class RelatedItemsComponent extends RelatedItemsBaseComponent {
  constructor() {
    super();
  }
}
