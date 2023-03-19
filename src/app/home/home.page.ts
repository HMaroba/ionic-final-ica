import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../api/user.service';
import { Router } from '@angular/router';
import { ProfileService } from '../Services/profile.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loginform!: FormGroup;
  isSubmitted = false;
  role = localStorage.getItem('role');
  ROLE : any;
  id =   localStorage.getItem('userUID') as string;

  get errorControl(){
    return this.loginform.controls;
  }

  constructor(public authService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,
    public profile: ProfileService,
    ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email : ['',[ Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }
  login(email : any,  password: any){
    //this.ROLE = this.profile.getRole('Faculty');
    this.isSubmitted= true;
    if(this.loginform.valid){
      console.log(this.loginform.value)
      this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        this.router.navigate(['faculty-menu']);
        //  if(this.role == 'Faculty'){
        //     this.router.navigate(['faculty-menu']);
        //    // this.loginform.reset();
        //     console.log(this.role);
        //   }else{
        //     this.router.navigate(['admin-dashboard']);
        //     //this.loginform.reset();

        //   }
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
