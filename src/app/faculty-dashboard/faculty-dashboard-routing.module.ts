import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyDashboardPage } from './faculty-dashboard.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyDashboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyDashboardPageRoutingModule {}
