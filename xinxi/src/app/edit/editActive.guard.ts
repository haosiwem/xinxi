import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

export class EditActiveGuard implements CanActivate {
  public new: boolean;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.new) {
      localStorage.clear();
      return window.confirm('确认新建');
    } else {
      return true;
    }
  }

}
