import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { IYardBirdAuthentication } from '@yardbird/xplat/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IYardBirdAuthentication {
  user$: Observable<firebase.User>;

  constructor(public api: AngularFireAuth) {
    this.user$ = api.user
  }

  login(): Promise<firebase.auth.UserCredential> {
    return this.api.signInAnonymously();
  }
  logout(): Promise<void> {
    return this.api.signOut();
  }
  getUser(): Promise<firebase.User> {
    return this.api.currentUser;
  }
  registerUser(email: string, password: string): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
