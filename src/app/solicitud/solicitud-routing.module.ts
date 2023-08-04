import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudPage } from './solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: SolicitudPage
  },
  {
    path: 'solicitudes',
    loadChildren: () => import('./solicitudes/solicitudes.module').then( m => m.SolicitudesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SolicitudPageRoutingModule {}
