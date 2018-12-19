import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  constructor() {
  }

  public panels = [
    {
      active: true,
      name: '首页',
      disabled: false
    }
  ];

  ngOnInit() {
  }

}
