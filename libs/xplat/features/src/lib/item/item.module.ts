import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ItemService } from './services';

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ItemService,
  ]
})
export class ItemModule {}
