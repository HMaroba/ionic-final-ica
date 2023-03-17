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
    path: 'update-bookings',
    loadChildren: () => import('./update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
