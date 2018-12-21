import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-record-home',
  templateUrl: './link-record-home.component.html',
  styleUrls: ['./link-record-home.component.less']
})
export class LinkRecordHomeComponent implements OnInit {

  constructor() {
  }

  public data = [
    {
      date: '2018/12/15',
      time: '12:25',
      number: 50
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 30
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 2
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100
    },
  ];

  ngOnInit() {
  }
}
