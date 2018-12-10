import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Edit} from '../edit';
import {Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  @Input() public infor: Edit = new Edit();

  @Output() save = new EventEmitter();

  public can = false;

  constructor() {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['infor'] && changes['infor'].currentValue) {
      this.can = false;
    }
  }

  onBtnAdd() {
    this.save.emit(this.infor);
    localStorage.setItem('information', JSON.stringify(this.infor));
  }

  onBtnCancel() {
    const cache = JSON.parse(localStorage.getItem('information'));

    if (!(cache.name === this.infor.name)) {
      alert('您已修改数据，未保存');
      this.onCache(cache);
    } else if (!(cache.sex === this.infor.sex)) {
      alert('您已修改数据，未保存');
      this.onCache(cache);
    } else if (!(cache.age === this.infor.age)) {
      alert('您已修改数据，未保存');
      this.onCache(cache);
    } else if (!(cache.tel === this.infor.tel)) {
      alert('您已修改数据，未保存');
      this.onCache(cache);
    } else if (!(cache.address === this.infor.address)) {
      alert('您已修改数据，未保存');
      this.onCache(cache);
    } else {
      this.onCache(cache);
    }
  }

  onCache(value) {
    this.save.emit(value);
  }

  ngOnInit() {
    const cache = localStorage.getItem('information');
    if (!cache) {
      this.can = true;
    } else {
      this.can = false;
    }
  }
}


