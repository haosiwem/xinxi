import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './components/login/login.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {path: '', component: LoginComponent, pathMatch: 'full', canActivate: [LoginGuard]},
  {
    path: 'main', component: AppComponent, children: [
      {path: '', redirectTo: 'main-nav', pathMatch: 'full'},
      {
        path: 'main-nav',
        loadChildren: './share/components/main/main.module#MainModule'
      },
    ]
  },
  {
    path: 'link', component: AppComponent, children: [
      {path: '', redirectTo: 'link-nav', pathMatch: 'full'},
      {
        path: 'link-nav',
        loadChildren: './share/components/link/link.module#LinkModule'
      },
    ]
  },
  {
    path: 'management', component: AppComponent, children: [
      {path: '', redirectTo: 'management-nav', pathMatch: 'full'},
      {
        path: 'management-nav',
        loadChildren: './share/components/management/management.module#ManagementModule'
      },
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
