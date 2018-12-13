import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  globalMessage = [];

  constructor() {
  }

  globalAdd(message) {
    this.globalMessage.push(message);
  }
}
