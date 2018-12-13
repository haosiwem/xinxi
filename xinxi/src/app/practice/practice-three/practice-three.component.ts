import {Component, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {PracticeThreeServiceService} from '../../services/practice-three-service.service';

@Component({
  selector: 'app-practice-three',
  templateUrl: './practice-three.component.html',
  styleUrls: ['./practice-three.component.css']
})
export class PracticeThreeComponent implements OnInit {

  constructor(public prThreeService: PracticeThreeServiceService) {
  }

  date: Date;

  ngOnInit() {
    this.date = new Date();
    const systemTime = interval(1000);
    systemTime.subscribe(() => this.date = new Date());
  }
}
