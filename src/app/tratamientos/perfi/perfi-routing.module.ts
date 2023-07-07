import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfiPage } from './perfi.page';

const routes: Routes = [
  {
    path: '',
    component: PerfiPage
  },
  {
    path: 'mensajes',
    loadChildren: () => import('./mensajes/mensajes.module').then( m => m.MensajesPageModule)
  },
  {
    path: 'dentadura',
    loadChildren: () => import('./dentadura/dentadura.module').then( m => m.DentaduraPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfiPageRoutingModule {}
