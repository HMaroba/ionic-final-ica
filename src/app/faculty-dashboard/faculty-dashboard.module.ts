import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacultyDashboardPageRoutingModule } from './faculty-dashboard-routing.module';

import { FacultyDashboardPage } from './faculty-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacultyDashboardPageRoutingModule
  ],
  declarations: [FacultyDashboardPage]
})
export class FacultyDashboardPageModule {}
