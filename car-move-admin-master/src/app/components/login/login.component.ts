import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  public username = '';
  public password = '';
  public errorShow = false;

  ngOnInit() {
  }

  onBtnLogin() {
    if (this.username === this.loginService.username && this.password === this.loginService.password) {
      localStorage.setItem('information', JSON.stringify(this.loginService));
      this.router.navigate(['/main']);
    } else {
      this.errorShow = true;
    }
  }
}
