import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinkRoutingModule } from './link-routing.module';
import {ShareModule} from '../../share.module';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import { LinkHomeComponent } from './link-home/link-home.component';
import { LinkNavComponent } from './link-nav/link-nav.component';
import { LinkRecordHomeComponent } from './link-record-home/link-record-home.component';

@NgModule({
  imports: [
    CommonModule,
    LinkRoutingModule,
    ShareModule,
    NgZorroAntdModule
  ],
  declarations: [LinkNavComponent, LinkHomeComponent, LinkRecordHomeComponent]
})
export class LinkModule { }
