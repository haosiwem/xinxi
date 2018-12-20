import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainNavComponent } from './main-nav/main-nav.component';

const routes: Routes = [
  {
    path: '', component: MainNavComponent, children:
      [
        {path: '', redirectTo: 'mainNav', pathMatch: 'full'},
        {path: 'mainNav', component: MainHomeComponent}
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
