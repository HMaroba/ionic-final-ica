import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Booking from '../Models/booking';
import { BookingService } from '../Services/booking.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
 public bookings!: any[];
 public loadedBookings!: any[];

  constructor(
    public formBuilder: FormBuilder,
    public bookingService: BookingService,
    public firestore: AngularFirestore,
  ) {}

  ngOnInit() {
    this.firestore.collection('Bookings').valueChanges().subscribe(bookingList => {
      this.bookings = bookingList;
      this.loadedBookings = bookingList;
    })
  }
  AppointmentList() {
    this.bookingService.getBookings().subscribe((data) => {
      console.log(data);
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
    console.log(this.loadedBookings);
  }
  filterList(event: any){
this.initializeItems();
const searchTerm = event.srcElement.value;
if(!searchTerm){
  return;
}
this.bookings = this.bookings.filter(currentItem => {
  if(currentItem.status && searchTerm){
    if(currentItem.status.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1){
      return true;
    }
    return false;
  }
})

  }

}
