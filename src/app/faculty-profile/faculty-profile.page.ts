import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';
import UserProfile  from '../Models/UserProfile';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.page.html',
  styleUrls: ['./faculty-profile.page.scss'],
})
export class FacultyProfilePage implements OnInit {

  users! : UserProfile[];
  constructor(public userService: UserService) { }

  ngOnInit() {
    // const data = localStorage.getItem('profileData');
    // console.log(data);
    const  profile  = JSON.parse(localStorage.getItem('profileData') as string);
    console.log(profile);
    this.users = profile;
    console.log(this.users);
  }

}
