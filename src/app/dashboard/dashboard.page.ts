import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Booking from '../Models/booking';
import { BookingService } from '../Services/booking.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserProfile from '../Models/UserProfile';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public bookings!: Booking[];
  public loadedBookings!: Booking[];
  currentUser!: any;
  userData!: UserProfile[];

  constructor(
    public formBuilder: FormBuilder,
    public bookingService: BookingService,
    public firestore: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe((res) => {
      this.bookings = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Booking),
        };
      });
      this.loadedBookings = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Booking),
        };
      });
    });
    const id = localStorage.getItem('userUID');
    this.firestore.firestore
      .collection('UsersProfile')
      .where('uid', '==', id)
      .get()
      .then((posts) => {
        this.userData = posts.docs.map((e) => {
          return {
            email: e.data()['email'],
            phoneNumber: e.data()['phoneNumber'],
            facultyName: e.data()['facultyName'],
            status: e.data()['status'],
            uid: e.data()['uid'],
            name: e.data()['name'],
            surname: e.data()['surname'],
            role: e.data()['role'],
          };
        });
      });

    console.log(this.userData);
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        const id = user.uid;
        console.log(id);
      } else {
        console.log('No User');
      }
    });

    this.firestore
      .collection('Bookings')
      .ref.where('email', '==', id)
      .onSnapshot((snap) => {
        snap.forEach((userRef) => {
          console.log('userRef', userRef.data());
          this.currentUser = userRef.data();
          console.log(this.currentUser);
        });
      });
  }
  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this booking ? ')) {
      this.bookingService.deleteBooking(id);
    }
  }
  initializeItems(): void {
    this.bookings = this.loadedBookings;
  }
  filterList(event: any) {
    this.initializeItems();
    const searchTerm = event.srcElement.value;
    if (!searchTerm) {
      return;
    }
    this.bookings = this.bookings.filter((currentItem) => {
      if (currentItem.status && searchTerm) {
        if (
          currentItem.status.toLowerCase().indexOf(searchTerm.toLowerCase()) >
          -1
        ) {
          return true;
        }
        return false;
      }
    });
  }
}
