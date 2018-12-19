import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {
  }

  public username = 'admin';
  public password = '123456';
}
