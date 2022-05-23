import { GeoPoint } from "@angular/fire/firestore";
import { GeoPoint as NGeoPoint } from "@nativescript/firebase-firestore";

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
