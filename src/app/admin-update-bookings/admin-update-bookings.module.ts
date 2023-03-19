import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminUpdateBookingsPageRoutingModule } from './admin-update-bookings-routing.module';

import { AdminUpdateBookingsPage } from './admin-update-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminUpdateBookingsPageRoutingModule
  ],
  declarations: [AdminUpdateBookingsPage]
})
export class AdminUpdateBookingsPageModule {}
