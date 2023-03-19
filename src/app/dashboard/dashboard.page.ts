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
 public bookings!: Booking[];
 public loadedBookings!: any[];

  constructor(
    public formBuilder: FormBuilder,
    public bookingService: BookingService,
    public firestore: AngularFirestore,
  ) {}

  ngOnInit() {
    this.bookingService.getBookings().subscribe((res) => {
      this.bookings = res.map((t) => {
        return {
          id: t.payload.doc.id,
          ...(t.payload.doc.data() as Booking),
        };
      });
    });
    this.firestore.collection('Bookings').valueChanges().subscribe(bookingList => {
      this.loadedBookings = bookingList;
    })
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
