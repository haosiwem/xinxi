import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.less']
})
export class ManagementComponent implements OnInit {

  constructor() { }

  public panels = [
    {
      active: true,
      name: '链接管理',
      disabled: false
    },
    {
      active: true,
      name: '用户管理',
      disabled: false
    }
  ];

  ngOnInit() {
  }
}
