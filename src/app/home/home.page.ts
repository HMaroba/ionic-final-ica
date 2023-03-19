import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import UserProfile from '../Models/UserProfile';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginform!: FormGroup;
  isSubmitted = false;
  role = localStorage.getItem('role');
  id = localStorage.getItem('userUID') as string;
  usersCollection!: AngularFirestoreCollection<UserProfile>;
  users!: UserProfile[];
  currentUser : any;

  get errorControl() {
    return this.loginform.controls;
  }

  constructor(
    public authService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
    public profile: ProfileService,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.usersCollection = this.firestore.collection('UsersProfile', (ref) => {
      return ref.where('role', '==', 'Admin');
    });
    this.usersCollection.valueChanges().subscribe((data) => {
      this.users = data;
    });
  }

  getRole(role : any){
    return this.users.find((x) => x.role == role)?.role;
  }
  login(email: any, password: any) {
    this.isSubmitted = true;

    if (this.loginform.valid) {
      console.log(this.loginform.value);
      this.authService
        .SignIn(email.value, password.value)
        .then((user) => {
          this.firestore.collection("UsersProfile").ref.where("email", "==" , user.user?.email).onSnapshot(snap => {
            snap.forEach(userRef => {
              console.log("userRef" , userRef.data());
              this.currentUser = userRef.data();
              const userRole = this.currentUser.role;
              console.log(userRole);
              if(this.currentUser.role == "Faculty"){
                this.router.navigate(['dashboard']);
              }
              else{
                this.router.navigate(["admin-dashboard"]);
              }
            })
          })
        }).catch(err => err);
    }
  }
}
