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
  id =  localStorage.getItem('userID');


  constructor(public formBuilder: FormBuilder,
    public bookingService: BookingService,
    public router: Router
    ) {
     }

  ngOnInit() {
    this.bookingform = this.formBuilder.group({
      facultyName : ['', Validators.required],
      purpose: ['', Validators.required],
      userID : this.id,
      status: 'PENDING',
      date : ['', Validators.required],
      emailAddress : ['',[ Validators.required, Validators.email]],
      phoneNumbers : ['', [Validators.required, Validators.pattern("[0-9]{8}")]]
    })
  }

  submitForm(){
    this.isSubmitted= true;
    if(this.bookingform.valid){
      console.log(this.bookingform.value)
      this.bookingService.book(this.bookingform.value).then((res: any) => {
        console.log(res)
        window.alert('Booking Successfully placed');
        this.bookingform.reset();
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        console.log(error.message);
        window.alert('Booking Failed please try again later');
      });
    }

  }
  get errorControl(){
    return this.bookingform.controls;
  }

}
