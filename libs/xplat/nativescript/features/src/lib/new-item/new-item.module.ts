import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { NewItemModule as SharedNewItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { NewItemComponent, NEWITEM_COMPONENTS } from './components';

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
  declarations: [...NEWITEM_COMPONENTS],
  exports: [...NEWITEM_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class NewItemModule {}
