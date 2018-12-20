import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LinkNavComponent } from './link-nav/link-nav.component';
import { LinkHomeComponent } from './link-home/link-home.component';
import { LinkRecordHomeComponent } from './link-record-home/link-record-home.component';

const routes: Routes = [
  {
    path: '', component: LinkNavComponent, children:
      [
        {path: '', redirectTo: 'linkHome', pathMatch: 'full'},
        {path: 'linkHome', component: LinkHomeComponent},
        {path: 'linkRecordHome', component: LinkRecordHomeComponent},
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LinkRoutingModule { }
