import { Injectable } from '@angular/core';
import UserProfile  from '../Models/UserProfile';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { resolve } from 'dns';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { User } from '@firebase/auth';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userData: any;
  private dbPath = '/UsersProfile';

  usersRef: AngularFireList<UserProfile>;

  constructor(private ngFirestore: AngularFirestore,
    public ngFireAuth: AngularFireAuth,
    public db: AngularFireDatabase,
    private router : Router,) {
      this.usersRef = db.list(this.dbPath);
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
    createProfile(addUser: UserProfile){
      return this.usersRef.push(addUser);
    }

    getRole(role: string){
      return new Promise<any>((resolve) => {
        this.ngFirestore.collection('UsersProfile' , ref => ref.where('role', '==', role)).valueChanges();
      })
    }
    getAdmin(){
      return this.ngFirestore.collection('UsersProfile').ref.where('role', '==', 'Admin');
    }
}
