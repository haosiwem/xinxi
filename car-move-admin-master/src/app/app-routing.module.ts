import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './components/login/login.guard';
import {IndexGuard} from './index.guard';
import {MainComponent} from './share/components/main/main.component';
import {LinkComponent} from './share/components/link/link.component';
import {ManagementComponent} from './share/components/management/management.component';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [LoginGuard]},
  {path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  {
    path: '', component: AppComponent, children: [
      {path: '', redirectTo: '/main', pathMatch: 'full'},
      {
        path: 'main',
        component: MainComponent,
        canActivate: [IndexGuard]
      },
      {
        path: 'link',
        component: LinkComponent,
        canActivate: [IndexGuard]
      },
      {
        path: 'management',
        component: ManagementComponent,
        canActivate: [IndexGuard]
      },
      {path: '**', redirectTo: '/main/home', pathMatch: 'full'},
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
