import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormDientePage } from './form-diente.page';

const routes: Routes = [
  {
    path: '',
    component: FormDientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormDientePageRoutingModule {}
