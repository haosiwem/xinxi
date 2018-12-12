import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // globalMessage = [];
  globalMessage = ['global1', 'global2', 'global3', 'global4', 'global5'];
  globalCount = 0;

  constructor() {
  }

  // globalAdd(message) {
  //   this.globalMessage.push(message);
  // }

  Global = [];
}
