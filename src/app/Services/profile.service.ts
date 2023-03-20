import { Injectable } from '@angular/core';
import UserProfile  from '../Models/UserProfile';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

currentUser! : any;
user ! : any;

  constructor(private ngFirestore: AngularFirestore,
    public ngFireAuth: AngularFireAuth) {
    }

    saveProfile(addProfile: UserProfile){
      return this.ngFirestore.collection('UsersProfile').add(addProfile);
    }
}
