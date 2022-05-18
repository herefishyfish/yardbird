export interface IYardBirdBaseItem {
  id: string;
  name: string;
  value: number;
  description: string;
  location: any;
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
