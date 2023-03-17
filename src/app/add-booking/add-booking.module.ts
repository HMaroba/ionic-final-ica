import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddBookingPageRoutingModule } from './add-booking-routing.module';

import { AddBookingPage } from './add-booking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddBookingPageRoutingModule
  ],
  declarations: [AddBookingPage]
})
export class AddBookingPageModule {}
