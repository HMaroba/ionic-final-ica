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

  get errorControl() {
    return this.loginform.controls;
  }

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public userService: UserService,
    public usersServices: ProfileService
  ) {}

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      surname: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
      role: 'Faculty',
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(
            '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{7,}'
          ),
        ],
      ],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{8}')]],
    });
  }

  register(email: any, password: any) {
    this.isSubmitted = true;
    if (this.loginform.valid) {
      this.userService
        .RegisterUser(email.value, password.value)
        .then((res) => {
          window.alert('Please check your inbox to verify email address');
          this.userService.SendVerificationMail();
          this.saveProfile();
        })
        .catch((error) => {
          console.log(error.message);
          window.alert(
            'Registration Failed please try again later or login if registered'
          );
        });
    }
  }
  saveProfile() {
    this.usersServices
      .saveProfile(this.loginform.value)
      .then((res: any) => {
        console.log(res);
        this.loginform.reset();
        this.router.navigate(['/home']);
      })
      .catch((error: any) => console.log(error));
  }
}
