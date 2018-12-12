import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../global.service';
import {MomentService} from './moment.service';

@Component({
  selector: 'app-practice-two',
  templateUrl: './practice-two.component.html',
  styleUrls: ['./practice-two.component.css']
})
export class PracticeTwoComponent implements OnInit {

  constructor(private globalService: GlobalService,
              private momentService: MomentService) {
  }

  Global = [];
  Moment = [];
  momentCount = 0;

  ngOnInit() {
    this.Global = this.globalService.Global;
  }

  onBtnGlobal() {
    //   const globalRandom = Math.floor(Math.random() * 100);
    //   this.globalService.globalAdd(globalRandom);
    this.globalService.Global[this.globalService.globalCount] = this.globalService.globalMessage[this.globalService.globalCount];
    this.globalService.globalCount++;
  }

  onBtnMoment() {
    //   const momentRandom = Math.floor(Math.random() * 100);
    //   this.momentService.momentAdd(momentRandom);
    this.Moment[this.momentCount] = this.momentService.momentMessage[this.momentCount];
    this.momentCount++;
  }
}
