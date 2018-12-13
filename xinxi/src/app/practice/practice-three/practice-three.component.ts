import {Component, OnInit, OnDestroy} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {PracticeThreeServiceService} from '../../services/practice-three-service.service';

@Component({
  selector: 'app-practice-three',
  templateUrl: './practice-three.component.html',
  styleUrls: ['./practice-three.component.css']
})
export class PracticeThreeComponent implements OnInit, OnDestroy {

  constructor(public prThreeService: PracticeThreeServiceService) {
  }

  private contiuneSubscription: Subscription;

  date: Date;

  ngOnInit() {
    this.date = new Date();
    this.contiuneSubscription = interval(1000).subscribe(() => {
      this.date = new Date();
      console.log('ssss');
    });
  }

  ngOnDestroy(): void {
    this.contiuneSubscription.unsubscribe();
  }
}
