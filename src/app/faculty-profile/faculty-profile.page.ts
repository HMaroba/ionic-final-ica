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
  items: UserProfile[] = [];
  userDetails: any= [];

  constructor(public userService: UserService) { }

  ngOnInit() {
    const data = localStorage.getItem('profileData');
    this.userDetails = data;
    this.items = Array.of(this.userDetails);
    console.log(this.items);
  }

}
