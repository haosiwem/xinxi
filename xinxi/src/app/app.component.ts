import {Component} from '@angular/core';
import {AppService} from './app.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(
    // private appService: AppService, private router: Router
  ) {
    // if (localStorage.getItem('test')) {
    //   this.router.navigate(['display']);
    // }
  }


  // static onIndexChange(event) {
  //   console.log(event);
  // }
}
