import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Edit} from '../edit';
import {Router} from '@angular/router';
import {EditGuard} from './edit.guard';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit, OnChanges {

  public infor: Edit = new Edit();

  public showCancel = false;

  constructor(private router: Router,
              private guard: EditGuard,
              private appComponent: AppComponent) {
  }

  public ngOnChanges(changes: SimpleChanges) {
    if (changes['infor'] && changes['infor'].currentValue) {
      this.showCancel = false;
    }
  }

  onBtnAdd() {
    this.guard.alert = 2;
    this.appComponent.showPractice = false;
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
      this.showCancel = false;
    } else {
      this.showCancel = true;
    }
  }
}
