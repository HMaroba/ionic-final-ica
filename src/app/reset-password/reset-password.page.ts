import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  rstform! : FormGroup;
  isSubmitted = false;

  constructor(
    public userService: UserService,
    public formBuilder: FormBuilder,
  ) { }

  get errorControl(){
    return this.rstform.controls;
  }

ngOnInit() {
  this.rstform = this.formBuilder.group({
    email : ['',[ Validators.required, Validators.email]],
  })
}

  resetForm(email: any){
    this.isSubmitted = true;
    if(this.rstform.valid){
      this.userService.PasswordRecover(email.value);
    }

  }
}
