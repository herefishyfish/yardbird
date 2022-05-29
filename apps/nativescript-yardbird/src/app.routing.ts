// angular
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

// nativescript
import { NativeScriptRouterModule } from '@nativescript/angular';

// app
import { SharedModule } from './features/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'item/:id',
    loadChildren: () =>
      import('@yardbird/xplat/nativescript/features').then((m) => m.ItemModule),
  }
];
@NgModule({
  imports: [SharedModule, NativeScriptRouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
