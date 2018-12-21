import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementHomeComponent } from './management-home/management-home.component';
import { ManagementNavComponent } from './management-nav/management-nav.component';
import { UserManagementComponent } from './user-management/user-management.component';
import {ManagementSeeComponent} from './management-see/management-see.component';
import {ManagementEditComponent} from './management-edit/management-edit.component';

const routes: Routes = [
  {
    path: '', component: ManagementNavComponent, children:
      [
        {path: '', redirectTo: 'managementHome', pathMatch: 'full'},
        {path: 'managementHome', component: ManagementHomeComponent},
        {path: 'userManagementHome', component: UserManagementComponent},
        {path: 'managementSee', component: ManagementSeeComponent},
        {path: 'managementEdit', component: ManagementEditComponent},
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
