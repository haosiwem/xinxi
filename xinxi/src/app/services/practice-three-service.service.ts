import {Injectable} from '@angular/core';
import {interval, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticeThreeServiceService {

  constructor() {
  }

  second = 0;
  start = '开始';
  showStop = true;

  private contiuneSubscription: Subscription;

  onStart() {
    this.showStop = false;
    if (this.start === '开始') {
      this.start = '暂停';
      this.contiuneSubscription = interval(1000).subscribe(() => {
        this.second++;
      });
    } else if (this.start === '暂停') {
      this.start = '继续';
      this.contiuneSubscription.unsubscribe();
    } else if (this.start === '继续') {
      this.start = '暂停';
      this.contiuneSubscription = interval(1000).subscribe(() => {
        this.second++;
      });
    }
  }

  onStop() {
    this.second = 0;
    this.showStop = true;
    this.start = '开始';
    this.contiuneSubscription.unsubscribe();
  }
}
