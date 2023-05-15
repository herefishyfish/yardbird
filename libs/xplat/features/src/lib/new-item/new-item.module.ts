import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NewItemService } from './services';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    NewItemService,
  ]
})
export class NewItemModule {}
