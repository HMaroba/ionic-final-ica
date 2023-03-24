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
    path: 'admin-dashboard',
    canActivate: [GuardGuard],
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
    path: 'update/:id',
    canActivate: [GuardGuard],
    loadChildren: () => import('./update-bookings/update-bookings.module').then( m => m.UpdateBookingsPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'faculty-profile',
    canActivate: [GuardGuard],
    loadChildren: () => import('./faculty-profile/faculty-profile.module').then( m => m.FacultyProfilePageModule)
  },
  {
    path: 'add-faculty',
    canActivate: [GuardGuard],
    loadChildren: () => import('./add-faculty/add-faculty.module').then( m => m.AddFacultyPageModule)
  },
  {
    path: 'admin-update-bookings/:id',
    canActivate: [GuardGuard],
    loadChildren: () => import('./admin-update-bookings/admin-update-bookings.module').then( m => m.AdminUpdateBookingsPageModule)
  },
  {
    path: 'admin-profile',
    canActivate: [GuardGuard],
    loadChildren: () => import('./admin-profile/admin-profile.module').then( m => m.AdminProfilePageModule)
  },
  {
    path: 'dashboard',
    canActivate: [GuardGuard],
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
