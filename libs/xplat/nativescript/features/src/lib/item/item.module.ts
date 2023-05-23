import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { LetDirective } from '@rx-angular/template/let';
import { ITEM_DATA_SERVICE, ItemModule as SharedItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { ItemComponent, ITEM_COMPONENTS } from './components';
import { ItemDataService } from '../data-access/item-data.service';

@NgModule({
  imports: [
    UIModule,
    SharedItemModule,
    LetDirective,
    NativeScriptRouterModule.forChild([{ path: '', component: ItemComponent }]),
  ],
  declarations: [...ITEM_COMPONENTS],
  exports: [...ITEM_COMPONENTS],
  providers: [
    {
      provide: ITEM_DATA_SERVICE,
      useClass: ItemDataService,
    },
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class ItemModule {}
