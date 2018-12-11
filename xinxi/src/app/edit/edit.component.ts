import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Edit} from '../edit';
import {Router} from '@angular/router';
import {EditGuard} from './edit.guard';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  public infor: Edit = new Edit();

  public can = false;

  constructor(private router: Router,
              private guard: EditGuard) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['infor'] && changes['infor'].currentValue) {
      this.can = false;
    }
  }

  onBtnAdd() {
    this.guard.alert = 2;
    localStorage.setItem('information', JSON.stringify(this.infor));
  }

  onBtnCancel() {
    const cache = JSON.parse(localStorage.getItem('information'));
    if (cache.name !== this.infor.name || cache.sex !== this.infor.sex || cache.age !== this.infor.age || cache.tel !== this.infor.tel || cache.address !== this.infor.address) {
      this.guard.alert = 1;
    }
    this.router.navigate(['display']);
  }

  ngOnInit() {
    const cache = localStorage.getItem('information');
    this.guard.alert = 1;
    if (cache) {
      this.infor = JSON.parse(cache);
      this.can = false;
    } else {
      this.can = true;
    }
  }
}
