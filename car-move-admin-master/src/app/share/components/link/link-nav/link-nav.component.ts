import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-link-nav',
  templateUrl: './link-nav.component.html',
  styleUrls: ['./link-nav.component.less']
})
export class LinkNavComponent implements OnInit {

  public panels = [
    {
      active: true,
      name: '生成链接',
      disabled: false
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
