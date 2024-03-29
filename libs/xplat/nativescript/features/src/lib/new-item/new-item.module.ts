import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ITEM_DATA_SERVICE, NewItemModule as SharedNewItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { NewItemComponent, NEWITEM_COMPONENTS } from './components';
import { ItemDataService } from '../data-access/item-data.service';

@NgModule({
  imports: [
    SharedNewItemModule,
    UIModule,
    NativeScriptRouterModule.forChild([
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
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewItemModule {}
