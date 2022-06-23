import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IYardBirdAuthentication } from '../models';
import { AuthenticationToken } from './tokens';

@Injectable({providedIn: 'root'})
export class AuthenticationService implements IYardBirdAuthentication {
  user$: BehaviorSubject<any> = this._authProvider.user$;

  constructor(
    @Inject(AuthenticationToken) private _authProvider: IYardBirdAuthentication,
  ) {}

  getUser(): Promise<any> {
    return this._authProvider.getUser();
  }

  login(): Promise<any> {
    return this._authProvider.login();
  }

  logout(): Promise<any> {
    return this._authProvider.logout();
  }

  registerUser(email: string, password: string): Promise<any> {
    return this._authProvider.registerUser(email, password);
  }
}
