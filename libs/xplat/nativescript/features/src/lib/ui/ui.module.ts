import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
} from '@nativescript/angular';

import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { UISharedModule } from '@yardbird/xplat/features';
import { UI_COMPONENTS } from './components';
import { ReactiveFormsModule } from '@angular/forms';

const MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  ReactiveFormsModule,
  NativeScriptRouterModule,
  TNSFontIconModule,
  UISharedModule,
];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_COMPONENTS],
  exports: [...MODULES, ...UI_COMPONENTS],
  schemas: [NO_ERRORS_SCHEMA],
})
export class UIModule {}
