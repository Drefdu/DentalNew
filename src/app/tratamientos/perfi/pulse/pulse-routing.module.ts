import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PulsePage } from './pulse.page';

const routes: Routes = [
  {
    path: '',
    component: PulsePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PulsePageRoutingModule {}
