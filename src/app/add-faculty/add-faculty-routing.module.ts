import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFacultyPage } from './add-faculty.page';

const routes: Routes = [
  {
    path: '',
    component: AddFacultyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFacultyPageRoutingModule {}
