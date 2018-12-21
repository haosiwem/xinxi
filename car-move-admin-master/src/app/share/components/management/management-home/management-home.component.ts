import {Component, OnInit} from '@angular/core';
import {ManagementServiceService} from '../../../services/management-service.service';

@Component({
  selector: 'app-management-home',
  templateUrl: './management-home.component.html',
  styleUrls: ['./management-home.component.less']
})
export class ManagementHomeComponent implements OnInit {

  constructor(public managementService: ManagementServiceService) {
  }

  public tel = '';
  public brand = '';
  public dataSet = [];

  ngOnInit() {
    this.dataSet = this.managementService.dataset;
  }

  onBtnReset() {
    this.tel = '';
    this.brand = '';
  }

  onBtnSubmit() {
    this.dataSet = [];
    for (let i = 0; i < this.managementService.dataset.length; i++) {
      const telIndex = this.managementService.dataset[i].tel.indexOf(this.tel);
      const brandIndex = this.managementService.dataset[i].brand.indexOf(this.brand);
      if (telIndex !== -1 && brandIndex !== -1) {
        this.dataSet.push(this.managementService.dataset[i]);
      }
    }
  }
}
