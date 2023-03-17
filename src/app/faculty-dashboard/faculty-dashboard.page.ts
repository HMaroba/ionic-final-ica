import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Services/booking.service';
import Booking from '../Models/booking';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.page.html',
  styleUrls: ['./faculty-dashboard.page.scss'],
})
export class FacultyDashboardPage implements OnInit {
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
  deleteBooking(id: any) {
    console.log(id);
    if (window.confirm('Are you sure you want to delete this booking ? ')) {
      this.bookingService.deleteBooking(id);
    }
  }
}
