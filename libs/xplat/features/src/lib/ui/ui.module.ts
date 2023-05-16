import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UI_PIPES } from './pipes';

const MODULES = [TranslateModule];

@NgModule({
  imports: [...MODULES, ...UI_PIPES],
  exports: [...MODULES, ...UI_PIPES],
})
export class UISharedModule {}
