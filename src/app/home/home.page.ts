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
import { Observable } from 'rxjs';

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
        .then((res) => {
          this.router.navigate(['dashboard']);
          // if (this.getRole('Admin')) {
          //   this.router.navigate(['admin-dashboard']);
          //   // this.loginform.reset();
          // } else {
          //   this.router.navigate(['dashboard']);
          //   //this.loginform.reset();
          // }
          // if (this.authService.isEmailVerified == true) {
          //   if(this.role == 'Faculty'){
          //     this.router.navigate(['faculty-menu']);
          //     this.loginform.reset();
          //     console.log(this.role);
          //   }else{
          //     this.router.navigate(['admin-dashboard']);
          //     this.loginform.reset();

          //   }

          // } else {
          //   window.alert('Email is not verified');
          //   return false;
          // }
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
  }
}
