import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.less']
})
export class MainNavComponent implements OnInit {

  panels = [
    {
      active: true,
      name: '首页',
      childPanel: [
        {
          active: false,
          name: 'This is panel header 1-1'
        }
      ]
    }
  ];

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}
