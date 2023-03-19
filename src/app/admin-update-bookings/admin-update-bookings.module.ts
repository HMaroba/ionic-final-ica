import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUpdateBookingsPageRoutingModule } from './admin-update-bookings-routing.module';

import { AdminUpdateBookingsPage } from './admin-update-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminUpdateBookingsPageRoutingModule
  ],
  declarations: [AdminUpdateBookingsPage]
})
export class AdminUpdateBookingsPageModule {}
