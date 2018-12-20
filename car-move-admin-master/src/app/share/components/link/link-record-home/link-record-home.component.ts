import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-record-home',
  templateUrl: './link-record-home.component.html',
  styleUrls: ['./link-record-home.component.less']
})
export class LinkRecordHomeComponent implements OnInit {

  constructor() {
  }
  sortName = null;
  sortValue = null;
  listOfSearchName = [];
  searchAddress: string;
  data = [
    {
      date: '2018/12/15',
      time: '12:25',
      number: 50,
      operation: '导出'
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100,
      operation: '导出'
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 30,
      operation: '导出'
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100,
      operation: '导出'
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 20,
      operation: '导出'
    },
    {
      date: '2018/12/15',
      time: '12:25',
      number: 100,
      operation: '导出'
    },
  ];
  displayData = [...this.data];

  sort(sort: { key: string, value: string }): void {
    this.sortName = sort.key;
    this.sortValue = sort.value;
    this.search();
  }

  filter(listOfSearchName: string[], searchAddress: string): void {
    this.listOfSearchName = listOfSearchName;
    this.searchAddress = searchAddress;
    this.search();
  }

  search(): void {
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true);
    const data = this.data.filter(item => filterFunc(item));
    if (this.sortName && this.sortValue) {
      this.displayData = data.sort((a, b) => (this.sortValue === 'ascend') ? (a[this.sortName] > b[this.sortName] ? 1 : -1) : (b[this.sortName] > a[this.sortName] ? 1 : -1));
    } else {
      this.displayData = data;
    }
  }

  ngOnInit() {
  }
}
