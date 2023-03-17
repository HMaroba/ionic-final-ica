import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    loadChildren: () => import('./faculty-dashboard/faculty-dashboard.module').then( m => m.FacultyDashboardPageModule)
  },
  {
    path: 'admin-dashboard',
    loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then( m => m.AdminDashboardPageModule)
  },
  {
    path: 'add-booking',
    loadChildren: () => import('./add-booking/add-booking.module').then( m => m.AddBookingPageModule)
  },
  {
    path: 'view-bookings',
    loadChildren: () => import('./view-bookings/view-bookings.module').then( m => m.ViewBookingsPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'faculty-menu',
    loadChildren: () => import('./faculty-menu/faculty-menu.module').then( m => m.FacultyMenuPageModule)
  },
  {
    path: 'faculty-profile',
    loadChildren: () => import('./faculty-profile/faculty-profile.module').then( m => m.FacultyProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
