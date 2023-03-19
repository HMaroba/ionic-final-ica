import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyMenuPage } from './faculty-menu.page';
import { GuardGuard } from '../Guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    component: FacultyMenuPage,
    children : [
      {
        path: 'add-booking',
        canActivate: [GuardGuard],
        loadChildren: () => import('../add-booking/add-booking.module').then( m => m.AddBookingPageModule)
      },
      {
        path: 'update/:id',
        canActivate: [GuardGuard],
        loadChildren: () => import('../update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
      },
      {
        path: 'faculty-dashboard',
        canActivate: [GuardGuard],
        loadChildren: () => import('../faculty-dashboard/faculty-dashboard.module').then( m => m.FacultyDashboardPageModule)
      },
      {
        path: 'faculty-profile',
        canActivate: [GuardGuard],
        loadChildren: () => import('../faculty-profile/faculty-profile.module').then( m => m.FacultyProfilePageModule)
      },
      {
        path: '',
        redirectTo: '/faculty-menu/faculty-dashboard',
        pathMatch: 'full'
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyMenuPageRoutingModule {}
