import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DientePage } from './diente.page';

const routes: Routes = [
  {
    path: '',
    component: DientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DientePageRoutingModule {}
