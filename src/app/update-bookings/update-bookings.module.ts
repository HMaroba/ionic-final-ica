import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBookingsPageRoutingModule } from './update-bookings-routing.module';

import { UpdateBookingsPage } from './update-bookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBookingsPageRoutingModule
  ],
  declarations: [UpdateBookingsPage]
})
export class UpdateBookingsPageModule {}
