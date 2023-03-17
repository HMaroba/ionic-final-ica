import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyMenuPageRoutingModule } from './faculty-menu-routing.module';

import { FacultyMenuPage } from './faculty-menu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyMenuPageRoutingModule
  ],
  declarations: [FacultyMenuPage]
})
export class FacultyMenuPageModule {}
