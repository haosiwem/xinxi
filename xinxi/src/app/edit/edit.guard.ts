import {CanDeactivate} from '@angular/router';
import {EditComponent} from './edit.component';

export class EditGuard implements CanDeactivate<EditComponent> {
  public alert = 1;

  canDeactivate(component: EditComponent) {
    if (this.alert === 1) {
      return window.confirm('确定要离开吗？');
    } else {
      this.alert = 1;
      return window.confirm('是否确定保存');
    }
  }
}
