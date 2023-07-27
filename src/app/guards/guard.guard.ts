import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SessionService } from '../services/session.service';

@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {


  constructor(private router: Router, private session: SessionService) {}

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    const isUserLogged = await this.session.isLogged();
    if (isUserLogged) {
      return true;
    } else {
      console.log('no estás logueado');
      this.router.navigate(['/']);
      return false;
    }
  }


}
