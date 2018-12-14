import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {DisplayComponent} from './display/display.component';
import {EditComponent} from './edit/edit.component';
import {PracticeComponent} from './practice/practice.component';
import {PracticeOneComponent} from './practice/component/practice-one/practice-one.component';
import {PracticeTwoComponent} from './practice/component/practice-two/practice-two.component';
import {PracticeThreeComponent} from './practice/component/practice-three/practice-three.component';
import {PracticeFourComponent} from './practice/component/practice-four/practice-four.component';
import {EditGuard} from './edit/edit.guard';
import {InforGuardService} from './services/infor-service.service';

const routes: Routes = [
  {path: '', redirectTo: '/index', pathMatch: 'full'},
  {path: 'index', component: IndexComponent},
  {path: 'display', component: DisplayComponent, canActivate: [InforGuardService]},
  {path: 'edit', component: EditComponent, canDeactivate: [EditGuard], canActivate: [InforGuardService]},
  {path: 'practice', component: PracticeComponent},
  {path: 'practice-one', component: PracticeOneComponent},
  {path: 'practice-two', component: PracticeTwoComponent},
  {path: 'practice-three', component: PracticeThreeComponent},
  {path: 'practice-four', component: PracticeFourComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
