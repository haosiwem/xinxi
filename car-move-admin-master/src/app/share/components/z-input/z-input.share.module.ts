/**
 * Created by zack on 4/8/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ZInputComponent} from "./z-input.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ZInputComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ZInputComponent
  ],
})
export class ZInputShareModule {
}
