// angular
import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

// app
import { CoreModule } from './core/core.module';
import { SharedModule } from './features/shared/shared.module';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import '@nativescript/firebase-firestore'
import { firebase } from '@nativescript/firebase-core';

async function provideFirebaseApp() {
  await firebase().initializeApp();
  await firebase().firestore()
}

@NgModule({
  imports: [CoreModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => provideFirebaseApp,
      multi: true,
    }
  ]
})
export class AppModule {}
