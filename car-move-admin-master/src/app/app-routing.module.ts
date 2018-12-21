import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './components/login/login.guard';
import {IndexGuard} from './index.guard';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {
    path: 'main', component: AppComponent, canActivate: [IndexGuard], children: [
      {path: '', redirectTo: 'main-nav', pathMatch: 'full'},
      {
        path: 'main-nav',
        loadChildren: './share/components/main/main.module#MainModule'
      },
    ]
  },
  {
    path: 'link', component: AppComponent, canActivate: [IndexGuard], children: [
      {path: '', redirectTo: 'link-nav', pathMatch: 'full'},
      {
        path: 'link-nav',
        loadChildren: './share/components/link/link.module#LinkModule'
      },
    ]
  },
  {
    path: 'management', component: AppComponent, canActivate: [IndexGuard], children: [
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
