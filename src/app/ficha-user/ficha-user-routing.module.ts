import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaUserPage } from './ficha-user.page';

const routes: Routes = [
  {
    path: '',
    component: FichaUserPage
  },
  {
    path: 'add-user',
    loadChildren: () => import('./add-user/add-user.module').then( m => m.AddUserPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaUserPageRoutingModule {}
