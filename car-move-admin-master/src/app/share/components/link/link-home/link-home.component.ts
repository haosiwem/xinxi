import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-link-home',
  templateUrl: './link-home.component.html',
  styleUrls: ['./link-home.component.less']
})
export class LinkHomeComponent implements OnInit {

  constructor() {
  }

  public num: number;
  public errorShow = true;

  ngOnInit() {
  }

  onBtnExport() {
    if (isNaN(this.num) || this.num === null) {
      this.errorShow = false;
      this.num = null;
      return false;
    } else {
      this.num = null;
      this.errorShow = true;
    }
  }
}
