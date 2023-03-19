import { Injectable } from '@angular/core';
import UserProfile  from '../Models/UserProfile';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

currentUser! : any;
user ! : any;

  constructor(private ngFirestore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    private router : Router,) {
    }

    saveProfile(addProfile: UserProfile){
      return this.ngFirestore.collection('UsersProfile').add(addProfile);
    }
    getProfile(){
        this.ngFirestore
          .collection('UsersProfile')
          .ref.where('email', '==', this.user.user?.email)
          .onSnapshot((snap) => {
            snap.forEach((userRef) => {
              console.log('userRef', userRef.data());
              this.currentUser = userRef.data();
              const userRole = this.currentUser.role;
              console.log(userRole);
              if (this.currentUser.role == 'Faculty') {
                this.router.navigate(['dashboard']);
              } else {
                this.router.navigate(['admin-dashboard']);
              }
            });
          });
    }
}
