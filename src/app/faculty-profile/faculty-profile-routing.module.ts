import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyProfilePage } from './faculty-profile.page';

const routes: Routes = [
  {
    path: '',
    component: FacultyProfilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacultyProfilePageRoutingModule {}
