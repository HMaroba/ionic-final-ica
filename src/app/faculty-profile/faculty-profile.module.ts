import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyProfilePageRoutingModule } from './faculty-profile-routing.module';

import { FacultyProfilePage } from './faculty-profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyProfilePageRoutingModule
  ],
  declarations: [FacultyProfilePage]
})
export class FacultyProfilePageModule {}
