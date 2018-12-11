import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DisplayComponent} from './display/display.component';
import {EditComponent} from './edit/edit.component';
import {EditGuard} from './edit/edit.guard';
import {EditActiveGuard} from './edit/editActive.guard';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'display', component: DisplayComponent},
  {path: 'edit', component: EditComponent, canDeactivate: [EditGuard], canActivate: [EditActiveGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
