import { Injectable } from '@angular/core';
import { UserProfile } from '../Models/UserProfile';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userData: any;

  constructor(private ngFirestore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router : Router,) {
      this.ngFireAuth.authState.subscribe((user) => {
        if (user) {
          this.userData = user;
          localStorage.setItem('user', JSON.stringify(this.userData));
          localStorage.setItem('userUID', user.uid);
          localStorage.setItem('role', 'Faculty');
          JSON.parse(localStorage.getItem('user') as string);
        } else {
          localStorage.setItem('user', 'null');
          JSON.parse(localStorage.getItem('user') as string);
        }
      });
    }

    saveProfile(addProfile: UserProfile){
      return this.ngFirestore.collection('UsersProfile').add(addProfile);
    }
}
