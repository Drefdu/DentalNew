import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratamientosPage } from './tratamientos.page';

const routes: Routes = [
  {
    path: '',
    component: TratamientosPage
  },
  {
    path: 'perfi',
    loadChildren: () => import('./perfi/perfi.module').then( m => m.PerfiPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamientosPageRoutingModule {}
