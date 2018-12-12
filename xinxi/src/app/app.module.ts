import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import {EditGuard} from './edit/edit.guard';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    EditComponent,
    IndexComponent,
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
export class AppModule { }
