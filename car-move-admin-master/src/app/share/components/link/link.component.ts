import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.less']
})
export class LinkComponent implements OnInit {

  constructor() { }

  public panels = [
    {
      active: true,
      name: '生成链接',
      disabled: false
    }
  ];

  ngOnInit() {
  }
}
