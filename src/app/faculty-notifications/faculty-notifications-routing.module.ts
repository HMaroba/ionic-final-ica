import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyNotificationsPage } from './faculty-notifications.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyNotificationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyNotificationsPageRoutingModule {}
