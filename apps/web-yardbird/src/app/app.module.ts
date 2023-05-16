import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import {
  provideFirestore,
  getFirestore,
  connectFirestoreEmulator,
  enableMultiTabIndexedDbPersistence,
} from '@angular/fire/firestore';
import {
  provideStorage,
  getStorage,
  connectStorageEmulator,
} from '@angular/fire/storage';

import { AppComponent } from './app.component';
import { CoreModule } from '../core/core.module';
import { environment } from '../environments/environment';
import { SharedModule } from '../features/shared/shared.module';
import { ItemDataService } from 'libs/xplat/web/features/src/lib/data-access/item-data.service';
import { ITEM_DATA_SERVICE } from '@yardbird/xplat/features';

let resolvePersistenceEnabled: (enabled: boolean) => void;

export const persistenceEnabled = new Promise<boolean>((resolve) => {
  resolvePersistenceEnabled = resolve;
});

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot([
      {
        path: '',
        loadComponent: () =>
          import('../features/home/components/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'item/new',
        loadComponent: () =>
          import('@yardbird/xplat/web/features').then(
            (m) => m.NewItemComponent
          ),
      },
      {
        path: 'item/:id',
        loadComponent: () =>
          import('@yardbird/xplat/web/features').then((m) => m.ItemComponent),
      },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => {
      const auth = getAuth();
      if (environment.useEmulators) {
        connectAuthEmulator(auth, 'http://localhost:9099', {
          disableWarnings: true,
        });
      }
      return auth;
    }),
    provideFirestore(() => {
      const firestore = getFirestore();
      if (environment.useEmulators) {
        connectFirestoreEmulator(firestore, 'localhost', 8080);
      }
      enableMultiTabIndexedDbPersistence(firestore).then(
        () => resolvePersistenceEnabled(true),
        () => resolvePersistenceEnabled(false)
      );
      return firestore;
    }),
    provideStorage(() => {
      const storage = getStorage();
      if (environment.useEmulators) {
        connectStorageEmulator(storage, 'localhost', 9199);
      }
      return storage;
    }),
  ],
  providers: [
    {
      provide: ITEM_DATA_SERVICE,
      useClass: ItemDataService,
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
