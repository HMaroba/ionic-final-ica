import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import Booking from '../Models/booking';
import { BookingService } from '../Services/booking.service';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
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
