import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainNavComponent } from './main-nav/main-nav.component';
import { MainHomeComponent } from './main-home/main-home.component';
import {ShareModule} from '../../share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [MainNavComponent, MainHomeComponent]
})
export class MainModule { }
