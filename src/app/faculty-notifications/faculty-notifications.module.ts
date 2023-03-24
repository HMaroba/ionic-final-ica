import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyNotificationsPageRoutingModule } from './faculty-notifications-routing.module';

import { FacultyNotificationsPage } from './faculty-notifications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyNotificationsPageRoutingModule
  ],
  declarations: [FacultyNotificationsPage]
})
export class FacultyNotificationsPageModule {}
