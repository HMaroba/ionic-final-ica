import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminUpdateBookingsPage } from './admin-update-bookings.page';

const routes: Routes = [
  {
    path: '',
    component: AdminUpdateBookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminUpdateBookingsPageRoutingModule {}
