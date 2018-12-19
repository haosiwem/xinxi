import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IndexGuard implements CanActivate {

  constructor(public router: Router){
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    if (state.url === '/main' || state.url === '/link' || state.url === '/management') {
      if (localStorage.getItem('information')) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
  }
}
