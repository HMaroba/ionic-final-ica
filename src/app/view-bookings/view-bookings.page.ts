import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Services/booking.service';
import Booking from '../Models/booking';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-view-bookings',
  templateUrl: './view-bookings.page.html',
  styleUrls: ['./view-bookings.page.scss'],
})
export class ViewBookingsPage implements OnInit {

  bookings!: Booking[];

  constructor(
    public formBuilder: FormBuilder,
    public bookingService: BookingService
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
  }
  AppointmentList() {
    this.bookingService.getBookings().subscribe((data) => {
      console.log(data);
    });
  }
}
