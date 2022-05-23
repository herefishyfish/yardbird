import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LetModule } from '@rx-angular/template';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { ITEM_DATA_SERVICE, ItemModule as SharedItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { ItemComponent, ITEM_COMPONENTS } from './components';
import { ItemDataService } from './services/data.service';

@NgModule({
  imports: [
    UIModule,
    SharedItemModule,
    LetModule,
    NgxSkeletonLoaderModule,
    RouterModule.forChild([{ path: '', component: ItemComponent }]),
  ],
  declarations: [...ITEM_COMPONENTS],
  exports: [...ITEM_COMPONENTS],
  providers: [
    {
      provide: ITEM_DATA_SERVICE,
      useClass: ItemDataService,
    },
  ]
})
export class ItemModule {}
