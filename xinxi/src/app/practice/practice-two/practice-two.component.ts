import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../global.service';
import {MomentService} from './moment.service';

@Component({
  selector: 'app-practice-two',
  templateUrl: './practice-two.component.html',
  styleUrls: ['./practice-two.component.css'],
  providers: [MomentService]
})
export class PracticeTwoComponent implements OnInit {

  constructor(private globalService: GlobalService,
              private momentService: MomentService) {
  }

  ngOnInit() {
  }

  onBtnGlobal() {
    const globalRandom = Math.floor(Math.random() * 100);
    this.globalService.globalAdd(globalRandom);
  }

  onBtnMoment() {
    const momentRandom = Math.floor(Math.random() * 100);
    this.momentService.momentAdd(momentRandom);
  }
}
