import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyMenuPage } from './faculty-menu.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyMenuPage,
    children : [
      {
        path: 'faculty-dashboard',
        loadChildren: () => import('../faculty-dashboard/faculty-dashboard.module').then( m => m.FacultyDashboardPageModule)
      },
      {
        path: 'add-booking',
        loadChildren: () => import('../add-booking/add-booking.module').then( m => m.AddBookingPageModule)
      },
      {
        path: 'view-bookings',
        loadChildren: () => import('../view-bookings/view-bookings.module').then( m => m.ViewBookingsPageModule)
      },
      {
        path: 'update/:id',
        loadChildren: () => import('../update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
      },
      {
        path: 'faculty-dashboard',
        loadChildren: () => import('../faculty-dashboard/faculty-dashboard.module').then( m => m.FacultyDashboardPageModule)
      },
      {
        path: 'faculty-profile',
        loadChildren: () => import('../faculty-profile/faculty-profile.module').then( m => m.FacultyProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/faculty-menu/faculty-dashboard',
        pathMatch: 'full'
      }
    ]

  },
  {
    path: '',
    redirectTo: '/faculty-menu/faculty-menu/faculty-dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyMenuPageRoutingModule {}
