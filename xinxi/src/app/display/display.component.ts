import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {Edit} from '../edit';
import {Router} from '@angular/router';
import {EditActiveGuard} from '../edit/editActive.guard';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  constructor(private router: Router,
              private editActive: EditActiveGuard) {
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
    this.editActive.new = true;
    this.router.navigate(['edit'], {queryParams: {id: 1}});
  }
}
