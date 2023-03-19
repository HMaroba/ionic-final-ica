import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './Guard/guard.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'faculty-dashboard',
    canActivate: [GuardGuard],
    loadChildren: () => import('./faculty-dashboard/faculty-dashboard.module').then( m => m.FacultyDashboardPageModule)
  },
  {
    path: 'admin-dashboard',
    // canActivate: [GuardGuard],
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'add-booking',
    canActivate: [GuardGuard],
    loadChildren: () => import('./add-booking/add-booking.module').then( m => m.AddBookingPageModule)
  },
  {
    path: 'view-bookings',
    canActivate: [GuardGuard],
    loadChildren: () => import('./view-bookings/view-bookings.module').then( m => m.ViewBookingsPageModule)
  },
  {
    path: 'update',
    canActivate: [GuardGuard],
    loadChildren: () => import('./update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'faculty-menu',
    canActivate: [GuardGuard],
    loadChildren: () => import('./faculty-menu/faculty-menu.module').then( m => m.FacultyMenuPageModule)
  },
  {
    path: 'faculty-profile',
    canActivate: [GuardGuard],
    loadChildren: () => import('./faculty-profile/faculty-profile.module').then( m => m.FacultyProfilePageModule)
  },
  {
    path: 'add-faculty',
    loadChildren: () => import('./add-faculty/add-faculty.module').then( m => m.AddFacultyPageModule)
  },
  {
    path: 'admin-update-bookings',
    loadChildren: () => import('./admin-update-bookings/admin-update-bookings.module').then( m => m.AdminUpdateBookingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
