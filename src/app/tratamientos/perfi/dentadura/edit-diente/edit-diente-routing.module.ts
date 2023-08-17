import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditDientePage } from './edit-diente.page';

const routes: Routes = [
  {
    path: '',
    component: EditDientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditDientePageRoutingModule {}
