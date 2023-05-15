import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ITEM_DATA_SERVICE, NewItemModule as SharedNewItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { NewItemComponent, NEWITEM_COMPONENTS } from './components';
import { ItemDataService } from '../data-access/item-data.service';

@NgModule({
  imports: [
    SharedNewItemModule,
    UIModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewItemComponent,
      },
    ]),
  ],
  providers: [    {
    provide: ITEM_DATA_SERVICE,
    useClass: ItemDataService,
  }],
  declarations: [...NEWITEM_COMPONENTS],
  exports: [...NEWITEM_COMPONENTS],
})
export class NewItemModule {}
