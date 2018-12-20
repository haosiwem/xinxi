import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { ManagementNavComponent } from './management-nav/management-nav.component';
import { ManagementHomeComponent } from './management-home/management-home.component';
import { ShareModule } from '../../share.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { UserManagementComponent } from './user-management/user-management.component';

@NgModule({
  imports: [
    CommonModule,
    ManagementRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [ManagementNavComponent, ManagementHomeComponent, UserManagementComponent]
})
export class ManagementModule { }
