import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import Booking from '../Models/booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  currentUser! : any;

  constructor(private ngFirestore: AngularFirestore,
    private router : Router,) { }

    book(booking: Booking){
      return this.ngFirestore.collection('Bookings').add(booking);
    }
    getBookings(){
      return this.ngFirestore.collection('Bookings').snapshotChanges();
    }
    getFacultyBookings(){
      const id =  localStorage.getItem('userUID');
      return this.ngFirestore.collection('Bookings')
      .ref.where('email', '==', id)
      .onSnapshot((snap) => {
        snap.forEach((userRef) => {
          console.log('userRef', userRef.data());
          this.currentUser = userRef.data();
          console.log(this.currentUser);
        });
      });
    }
    getBooking(id: any){
      return this.ngFirestore.collection('Bookings').doc(id).valueChanges()
    }
    updateBooking(id: string, booking: Booking){
      this.ngFirestore.collection('Bookings').doc(id).update(booking)
      .then(() => {
        this.router.navigate(['/dashboard']);

      }).catch(error => console.log(error));
    }
    adminUpdateBooking(id: string, booking: Booking){
      this.ngFirestore.collection('Bookings').doc(id).update(booking)
      .then(() => {
        this.router.navigate(['/tabs/tab1']);

      }).catch(error => console.log(error));
    }
    deleteBooking(id : string){
      this.ngFirestore.doc('Bookings/' +id).delete();
    }
  }
