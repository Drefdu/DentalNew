import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DentaduraPage } from './dentadura.page';

const routes: Routes = [
  {
    path: '',
    component: DentaduraPage
  },
  {
    path: 'form-diente/:dienteId',
    loadChildren: () => import('./form-diente/form-diente.module').then( m => m.FormDientePageModule)
  },
  {
    path: 'edit-diente/:dienteId',
    loadChildren: () => import('./edit-diente/edit-diente.module').then( m => m.EditDientePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DentaduraPageRoutingModule {}
