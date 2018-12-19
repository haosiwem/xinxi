import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ZRegexDirective} from './directives/z-regex.directive';
import {IgnoreSpaceDirective} from './directives/ignore-space.directive';
import {ZNumberPipe} from './pipes/z-number.pipe';
import {ZMaxLengthPipe} from './pipes/z-max-length.pipe';
import {ZDurationPipe} from './pipes/z-duration.pipe';
import {ZTenThousandUnitPipe} from './pipes/z-ten-thousand-unit.pipe';
import {DurationFormatHMSPipe, ZFormatDurationPipe} from './pipes/z-format-duration.pipe';
import {ZPlaceholderPipe} from './pipes/z-placeholder.pipe';
import {CrumbComponent} from './components/crumb/crumb.component';
import {Http403TipComponent} from './components/tips/http403-tip/http403-tip.component';
import {Http500TipComponent} from './components/tips/http500-tip/http500-tip.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {ConfirmationBoxComponent} from './components/tips/confirmation-box/confirmation-box.component';
import {PromptBoxComponent} from './components/tips/prompt-box/prompt-box.component';
import {ZEmptyPipe} from './pipes/z-empty.pipe';
import {ZInputShareModule} from './components/z-input/z-input.share.module';
import { MainComponent } from './components/main/main.component';
import { LinkComponent } from './components/link/link.component';
import { ManagementComponent } from './components/management/management.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ZInputShareModule
  ],
  declarations: [
    ZRegexDirective,
    IgnoreSpaceDirective,
    ZNumberPipe,
    ZMaxLengthPipe,
    ZDurationPipe,
    ZTenThousandUnitPipe,
    ZFormatDurationPipe,
    ZPlaceholderPipe,
    CrumbComponent,
    Http403TipComponent,
    Http500TipComponent,
    ConfirmationBoxComponent,
    PromptBoxComponent,
    ZEmptyPipe,
    DurationFormatHMSPipe,
    MainComponent,
    LinkComponent,
    ManagementComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ZInputShareModule,
    IgnoreSpaceDirective,
    ZRegexDirective,
    ZNumberPipe,
    ZMaxLengthPipe,
    ZDurationPipe,
    ZTenThousandUnitPipe,
    ZFormatDurationPipe,
    ZPlaceholderPipe,
    CrumbComponent,
    Http403TipComponent,
    Http500TipComponent,
    ConfirmationBoxComponent,
    PromptBoxComponent,
    ZEmptyPipe,
    DurationFormatHMSPipe
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class ShareModule {
}
