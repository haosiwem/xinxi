import {Component, OnInit} from '@angular/core';
import {ManagementServiceService} from '../../../services/management-service.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.less']
})
export class UserManagementComponent implements OnInit {

  constructor(public managementService: ManagementServiceService) {
  }

  public dateRange = [];
  public userData = this.managementService.dataset;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  onBtnBlacklist(key) {
    if (this.managementService.dataset[key].state === '正常') {
      this.managementService.dataset[key].state = '黑名单';
      this.managementService.dataset[key].operation = '移出黑名单';
    } else {
      this.managementService.dataset[key].state = '正常';
      this.managementService.dataset[key].operation = '加入黑名单';
    }
  }

  ngOnInit() {
  }
}
