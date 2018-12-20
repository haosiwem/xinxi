import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-management-nav',
  templateUrl: './management-nav.component.html',
  styleUrls: ['./management-nav.component.less']
})
export class ManagementNavComponent implements OnInit {

  constructor() { }

  public panels = [
    {
      active: true,
      name: '链接管理',
      disabled: false,
      router: 'managementHome'
    },
    {
      active: true,
      name: '用户管理',
      disabled: false,
      router: 'userManagementHome'
    }
  ];

  ngOnInit() {
  }

}
