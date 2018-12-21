import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ManagementServiceService} from '../../../services/management-service.service';

@Component({
  selector: 'app-management-edit',
  templateUrl: './management-edit.component.html',
  styleUrls: ['./management-edit.component.less']
})
export class ManagementEditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              public managementService: ManagementServiceService) {
  }

  public id;
  public link = '';
  public tel = '';
  public brand = '';
  public switchValue: boolean;

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.queryParams['id'];
    this.link = this.managementService.dataset[this.id].link;
    this.tel = this.managementService.dataset[this.id].tel;
    this.brand = this.managementService.dataset[this.id].brand;
    this.switchValue = this.managementService.dataset[this.id].switchValue;
  }

  onBtnSubmit() {
    this.managementService.dataset[this.id].link = this.link;
    this.managementService.dataset[this.id].tel = this.tel;
    this.managementService.dataset[this.id].brand = this.brand;
    this.managementService.dataset[this.id].switchValue = this.switchValue;
  }
}
