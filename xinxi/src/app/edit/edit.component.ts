import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Edit } from '../edit';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  @Input() public infor: Edit = new Edit();

  @Output() bao = new EventEmitter();

  constructor() { }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['infor'] && changes['infor'].currentValue) {
      this.infor = changes['infor'].currentValue;
    }
  }

  add() {
    // tslint:disable-next-line:max-line-length
    if (this.infor.name === '' || this.infor.sex === '' || this.infor.age === null || this.infor.tel === '' || this.infor.address === '') {
      alert('输入不能为空');
    } else {
      this.bao.emit(this.infor);
      localStorage.setItem('information', JSON.stringify(this.infor));
    }
  }

  ngOnInit() {
  }
}
