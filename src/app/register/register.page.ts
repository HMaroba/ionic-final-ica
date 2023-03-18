import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loginform!: FormGroup;
  isSubmitted = false;
   id =   localStorage.getItem('userUID');
   role = localStorage.getItem('role');

  get errorControl(){
    return this.loginform.controls;
  }

  constructor(
    public formBuilder: FormBuilder,
    public router : Router,
    public userService: UserService,
    public usersServices: ProfileService,
    ) { }


  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email : ['',[ Validators.required,   Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      name : ['', Validators.required],
      surname : ['', Validators.required],
      role: 'Faculty',
      uid : this.id,
      password : ['', [Validators.required, Validators.minLength(8)]],
      phoneNumber : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  register(email: any, password: any){
    this.isSubmitted = true;
    console.log(this.loginform.value);
    if(this.loginform.valid){
      this.usersServices.saveProfile(this.loginform.value).then((res: any) => {
        console.log(res)
        this.loginform.reset();
        this.router.navigate(['/home']);
      })
        .catch((error: any) => console.log(error));
        this.userService
        .RegisterUser(email.value, password.value)
        .then(res => {
            // Do something here
            window.alert('Please check your inbox to verify email address');
            this.userService.SendVerificationMail();
        })
        .catch((error) => {
          window.alert(error.message);
        });
    }
    }
  }

