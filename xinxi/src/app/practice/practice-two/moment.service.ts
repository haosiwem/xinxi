import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  // momentMessage = [];
  momentMessage = ['moment1', 'moment2', 'moment3', 'moment4', 'moment5', 'moment6'];

  constructor() {
  }
  //
  // momentAdd(message) {
  //   this.momentMessage.push(message);
  // }
}
