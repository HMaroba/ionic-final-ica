import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from '../api/user.service';
import UserProfile from '../Models/UserProfile';

@Component({
  selector: 'app-faculty-profile',
  templateUrl: './faculty-profile.page.html',
  styleUrls: ['./faculty-profile.page.scss'],
})
export class FacultyProfilePage implements OnInit {
  public users!: UserProfile[];
  items: UserProfile[] = [];
  userDetails: any = [];

  constructor(
    public userService: UserService,
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore
  ) {}

  ngOnInit() {
    const data = localStorage.getItem('profileData');
    this.userDetails = data;
    this.items = Array.of(this.userDetails);
    console.log(this.items);

    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.firestore
          .collection('UsersProfile', (ref) =>
            ref.where('email', '==', user.email)
          )
          .snapshotChanges()
          .subscribe((data) => {
            this.users = data.map((t) => {
              return {
                id: t.payload.doc.id,
                ...(t.payload.doc.data() as UserProfile),
              };
            });
          });
      } else {
        console.log('No User');
      }
    });
  }
}
