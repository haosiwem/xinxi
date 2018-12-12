import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Edit} from '../edit';
import {Router} from '@angular/router';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router) {
  }

  @Input() public infor: Edit = new Edit();

  @Output() modify = new EventEmitter();

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    if (userJsonStr) {
      this.infor = JSON.parse(userJsonStr);
    }
  }

  onBtnEdit() {
    this.router.navigate(['edit'], {queryParams: {id: 1}});
  }

  onBtnNew() {
    localStorage.clear();
    this.router.navigate(['edit'], {queryParams: {id: 1}});
  }
}
