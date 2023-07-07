import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentaduraPage } from './dentadura.page';

const routes: Routes = [
  {
    path: '',
    component: DentaduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentaduraPageRoutingModule {}
