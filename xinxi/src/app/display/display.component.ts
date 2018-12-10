import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Edit} from '../edit';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor() {
  }

  @Input() public infor: Edit = new Edit();

  @Output() modify = new EventEmitter();

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    if (userJsonStr) {
      this.infor = JSON.parse(userJsonStr);
    }
  }

  onRevise() {
    this.modify.emit(this.infor);
  }
}
