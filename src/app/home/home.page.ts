import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from '../api/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  loginform!: FormGroup;
  isSubmitted = false;

  get errorControl(){
    return this.loginform.controls;
  }

  constructor(public authService: UserService,
    public formBuilder: FormBuilder,
    public router: Router,

    ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email : ['',[ Validators.required, Validators.email]],
      password : ['', [Validators.required]]
    })
  }
  login(email : any,  password: any){
    this.isSubmitted= true;
    if(this.loginform.valid){
      console.log(this.loginform.value)
      this.authService
      .SignIn(email.value, password.value)
      .then((res) => {
        if (this.authService.isEmailVerified) {
          this.router.navigate(['faculty-menu']);
        } else {
          window.alert('Email is not verified');
          return false;
        }
      })
      .catch((error) => {
        window.alert(error.message);
      });
    }

}
}
