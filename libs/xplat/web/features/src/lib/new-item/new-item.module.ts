import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewItemModule as SharedNewItemModule } from '@yardbird/xplat/features';
import { UIModule } from '../ui/ui.module';
import { NewItemComponent, NEWITEM_COMPONENTS } from './components';

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
  declarations: [...NEWITEM_COMPONENTS],
  exports: [...NEWITEM_COMPONENTS],
})
export class NewItemModule {}
