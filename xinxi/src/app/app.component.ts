import {Component, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  onNavigated() {
    if (localStorage.getItem('information')) {
      this.router.navigate(['display']);
    } else {
      this.router.navigate(['edit']);
    }
  }
}
