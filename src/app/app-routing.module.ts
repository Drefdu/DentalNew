import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { GuardGuard } from './guards/guard.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [GuardGuard],
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full'
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'tratamientos',
    canActivate: [GuardGuard],
    children: [
      {
        path: "",
        loadChildren: () => import('./tratamientos/tratamientos.module').then( m => m.TratamientosPageModule)
      },
      {
        path: ":userId",
        loadChildren: () => import('./tratamientos/perfi/perfi.module').then(m => m.PerfiPageModule)
      }
    ]
  },
  {
    path: 'calendar',
    canActivate: [GuardGuard],
    loadChildren: () => import('./calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'ficha-user',
    children: [
      {
        path: "",
        loadChildren: () => import('./ficha-user/ficha-user.module').then( m => m.FichaUserPageModule)
      },
      {
        path: "add-user",
        loadChildren: () => import('./ficha-user/add-user/add-user.module').then( m => m.AddUserPageModule)
      },
      {
        path: ":_id",
        loadChildren: () => import('./ficha-user/user/user.module').then(m => m.UserPageModule)
      },

    ]

  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'solicitud',
    loadChildren: () => import('./solicitud/solicitud.module').then( m => m.SolicitudPageModule)
  },
  {
    path: 'diente',
    loadChildren: () => import('./diente/diente.module').then( m => m.DientePageModule)
  },
  {
    path: 'listasolicitud',
    loadChildren: () => import('./listasolicitud/listasolicitud.module').then( m => m.ListasolicitudPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
