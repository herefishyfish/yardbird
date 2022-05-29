import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { LetModule } from '@rx-angular/template';
import { ITEM_DATA_SERVICE, ItemModule as SharedItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { ItemComponent, ITEM_COMPONENTS } from './components';
import { ItemDataService } from './services/data.service';

@NgModule({
  imports: [
    UIModule,
    SharedItemModule,
    LetModule,
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
