import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Booking from '../Models/booking';
import { BookingService } from '../Services/booking.service';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public bookings!: Booking[];
  public bookingList!: Booking[];
  public loadedBookings!: Booking[];
  public userInfo! : any;
  public loadInfo! : any;


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

    //get data for only logged in user
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('userID', user.uid);
        this.firestore
        .collection('Bookings', (ref) => ref.where('userID', '==', user.uid))
        .valueChanges()
        .subscribe((data) => {
          console.log(data);
          this.userInfo = data;
          this.loadInfo = data;
        });

        this.firestore.collection('Bookings' , (ref) => ref.where('userID', '==' , user.uid)).snapshotChanges()
        .subscribe((data)  => {
         this.bookingList = data.map((t) => {
           return {
             id: t.payload.doc.id,
             ...(t.payload.doc.data() as Booking),
           };
         });
        });
      } else {
        console.log('No User');
      }
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
