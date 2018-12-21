import { Component, OnInit } from '@angular/core';
import {ManagementServiceService} from '../../../services/management-service.service';

@Component({
  selector: 'app-management-see',
  templateUrl: './management-see.component.html',
  styleUrls: ['./management-see.component.less']
})
export class ManagementSeeComponent implements OnInit {

  constructor(public managementService: ManagementServiceService) { }

  public seeData = this.managementService.dataset;

  ngOnInit() {
  }
}
