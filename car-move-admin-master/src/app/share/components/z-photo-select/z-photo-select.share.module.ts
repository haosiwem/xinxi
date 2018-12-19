/**
 * Created by zack on 4/8/17.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ZPhotoSelectComponent} from "./z-photo-select.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    ZPhotoSelectComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ZPhotoSelectComponent
  ],
})
export class ZPhotoSelectShareModule {
}
