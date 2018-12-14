import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DisplayComponent} from './display/display.component';
import {EditComponent} from './edit/edit.component';
import {IndexComponent} from './index/index.component';
import {EditGuard} from './edit/edit.guard';
import {PracticeComponent} from './practice/practice.component';
import {PracticeOneComponent} from './practice/component/practice-one/practice-one.component';
import {PracticeTwoComponent} from './practice/component/practice-two/practice-two.component';
import {UppercaseConversionPipe} from './practice/component/practice-one/practice-one.pipe';
import {PracticeThreeComponent} from './practice/component/practice-three/practice-three.component';
import { PracticeFourComponent } from './practice/component/practice-four/practice-four.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditComponent,
    IndexComponent,
    PracticeComponent,
    PracticeOneComponent,
    PracticeTwoComponent,
    UppercaseConversionPipe,
    PracticeThreeComponent,
    PracticeFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    EditGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
