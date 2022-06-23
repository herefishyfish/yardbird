import { Injectable } from '@angular/core';
import { firebase } from '@nativescript/firebase-core';
import { Auth, User, UserCredential } from '@nativescript/firebase-auth';
import { IYardBirdAuthentication } from '@yardbird/xplat/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements IYardBirdAuthentication {
  user$: any;
  api: Auth;

  constructor() {
    this.api = firebase().auth();
  }

  login(): Promise<UserCredential> {
    return this.api.signInAnonymously();
  }
  logout(): boolean {
    return this.api.signOut();
  }
  getUser(): User | null {
    return this.api.currentUser;
  }
  registerUser(email: string, password: string): Promise<any> {
    throw new Error('Method not implemented.');
  }

}
