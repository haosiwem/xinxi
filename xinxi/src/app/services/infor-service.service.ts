import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InforGuardService implements CanActivate {

  constructor() {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    if (state.url === '/display') {
      if (localStorage.getItem('information')) {
        return true;
      } else {
        return false;
      }
    } else if (state.url === '/edit') {
      if (localStorage.getItem('information')) {
        return false;
      } else {
        return true;
      }
    }

    return true;
  }
}
