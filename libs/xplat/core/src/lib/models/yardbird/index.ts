import { GeoPoint } from "@angular/fire/firestore";
import { User } from "@nativescript/firebase-auth";
import { GeoPoint as NGeoPoint } from "@nativescript/firebase-firestore";
import firebase from 'firebase/compat/app';
import { Observable } from "rxjs";

export interface IYardBirdBaseItem {
  id: string;
  name: string;
  value: number;
  description: string;
  location: GeoPoint | NGeoPoint;
  condition: 'new' | 'used';
  category: string;
  images: string[];
  user: string;
  createdDTM: Date;
  editedDTM: Date;
  expiryDTM: Date;
}

export interface IYardBirdBaseUser {
  id: string;
  displayName: string;
  email: string;
  photoURL: string;
}

export interface IYardBirdAuthentication {
  user$: Observable<any>;
  login(): Promise<any>;
  logout(): boolean | Promise<void>;
  getUser(): Promise<firebase.User> | User | null;
  registerUser(email: string, password: string): Promise<any>;
}
