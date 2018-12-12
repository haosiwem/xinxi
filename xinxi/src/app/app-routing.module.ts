import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DisplayComponent} from './display/display.component';
import {EditComponent} from './edit/edit.component';
import {EditGuard} from './edit/edit.guard';
import {InforGuardService} from './services/inforservice.service';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'display', component: DisplayComponent, canActivate: [InforGuardService]},
  {path: 'edit', component: EditComponent, canDeactivate: [EditGuard], canActivate: [InforGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
