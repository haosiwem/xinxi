import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.less']
})
export class UserManagementComponent implements OnInit {

  constructor() {
  }

  public dateRange = [];
  public dataSet = [
    {
      key: '1',
      link: 'http://9c.ltd/56w',
      tel: '13252862883',
      brand: '辽A12345',
      switchValue: true
    }]

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  ngOnInit() {
  }
}
