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
import {PracticeOneComponent} from './practice/practice-one/practice-one.component';
import {PracticeTwoComponent} from './practice/practice-two/practice-two.component';
import {UppercaseConversionPipe} from './practice/practice-one/practice-one.pipe';
import {PracticeThreeComponent} from './practice/practice-three/practice-three.component';

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
    PracticeThreeComponent
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
