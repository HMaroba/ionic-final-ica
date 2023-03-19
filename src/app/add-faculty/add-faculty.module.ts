import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFacultyPageRoutingModule } from './add-faculty-routing.module';

import { AddFacultyPage } from './add-faculty.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    AddFacultyPageRoutingModule
  ],
  declarations: [AddFacultyPage]
})
export class AddFacultyPageModule {}
