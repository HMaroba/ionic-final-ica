import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  loginform!: FormGroup;
  isSubmitted = false;
  currentUser: any;


  public showPass = false;
  passwordType: string = 'password';



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
  }
  hideShowPassword(){
   this.showPass = !this.showPass;
   if(this.showPass){
    this.passwordType= 'text'
   }else{
    this.passwordType = 'password'
   }
  }
  login(email: any, password: any) {
    this.isSubmitted = true;

    if (this.loginform.valid) {
      console.log(this.loginform.value);
      this.authService
        .SignIn(email.value, password.value)
        .then((user) => {
          this.firestore
            .collection('UsersProfile')
            .ref.where('email', '==', user.user?.email)
            .onSnapshot((snap) => {
              snap.forEach((userRef) => {
                console.log('userRef', userRef.data());
                this.currentUser = userRef.data();
                localStorage.setItem(
                  'profileData',
                  JSON.stringify(this.currentUser)
                );
                const userRole = this.currentUser.role;
                console.log(userRole);
                if (this.currentUser.role == 'Faculty') {
                  this.loginform.reset();
                  this.router.navigate(['dashboard']);
                } else {
                  this.loginform.reset();
                  this.router.navigate(['admin-dashboard']);
                }

              });
            });
        })
        .catch((err) => {
          window.alert(
            'Problem when logging in,  please try again or register if not'
          );
        });
    }
  }
}
