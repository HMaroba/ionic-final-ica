import { Component, OnInit } from '@angular/core';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.page.html',
  styleUrls: ['./faculty-profile.page.scss'],
})
export class FacultyProfilePage implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

}
