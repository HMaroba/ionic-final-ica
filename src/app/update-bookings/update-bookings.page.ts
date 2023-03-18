import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../Services/booking.service';

@Component({
  selector: 'app-update-bookings',
  templateUrl: './update-bookings.page.html',
  styleUrls: ['./update-bookings.page.scss'],
})
export class UpdateBookingsPage implements OnInit {

  updateform!: FormGroup;
  isSubmitted = false;
  id: any;

  get errorControl() {
    return this.updateform.controls;
  }

  constructor(
    public formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    public bookingService: BookingService
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.bookingService.getBooking(this.id).subscribe((data: any) => {
      this.updateform = this.formBuilder.group({
        facultyName: [data['facultyName']],
        purpose: [data['purpose']],
        emailAddress: [data['emailAddress']],
        phoneNumbers: [data['phoneNumbers']],
        date: [data['date']],
      });
    });
  }

  ngOnInit() {
    this.updateform = this.formBuilder.group({
      facultyName : ['', Validators.required],
      purpose: ['', Validators.required],
      date : ['', Validators.required],
      emailAddress : ['',[ Validators.required, Validators.email]],
      phoneNumbers : ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  updateData() {
    if (this.updateform.valid) {
      this.isSubmitted = true;
      this.bookingService.updateBooking(this.id, this.updateform.value);
    }
  }


}
