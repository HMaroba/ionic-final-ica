import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../Services/booking.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.page.html',
  styleUrls: ['./add-booking.page.scss'],
})
export class AddBookingPage implements OnInit {

  bookingform!: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder,
    public bookingService: BookingService,
    public router: Router,
    ) { }

  ngOnInit() {
    this.bookingform = this.formBuilder.group({
      facultyName : ['', Validators.required],
      purpose: ['', Validators.required],
      date : ['', Validators.required],
      emailAddress : ['',[ Validators.required, Validators.email]],
      phoneNumbers : ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submitForm(){
    this.isSubmitted= true;
    if(this.bookingform.valid){
      console.log(this.bookingform.value)
      this.bookingService.book(this.bookingform.value).then((res: any) => {
        console.log(res)
        this.bookingform.reset();
        // this.router.navigate(['/tabs']);
      })
        .catch((error: any) => console.log(error));
    }

  }
  get errorControl(){
    return this.bookingform.controls;
  }

}
