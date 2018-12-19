import {Injectable} from '@angular/core';
import {isUndefined} from 'util';
import {AuthService} from './auth.service';
import {HttpErrorEntity, HttpService} from './http.service';
import {HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Http500TipComponent} from '../share/components/tips/http500-tip/http500-tip.component';
import {Http403TipComponent} from '../share/components/tips/http403-tip/http403-tip.component';
import {PromptBoxComponent} from '../share/components/tips/prompt-box/prompt-box.component';
import {ConfirmationBoxComponent} from '../share/components/tips/confirmation-box/confirmation-box.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  // 特殊存储，全局化资源配置
  public static Instance: GlobalService;

  constructor(private authService: AuthService, private httpService: HttpService) {
  }

  public promptBox: PromptBoxComponent;
  public confirmationBox: ConfirmationBoxComponent;
  public http500Tip: Http500TipComponent;
  public http403Tip: Http403TipComponent;
  private permissionErrorMessage = '授权失败，请重新登录！';

  /**
   * 获取当前服务器时间戳(秒）
   * @returns {number}
   */
  public get timeStamp(): number {
    return this.httpService.timeStamp;
  }

  /**
   * 网络错误处理函数
   * @param err 错误信息
   * @returns {boolean} 是否处理了错误信息，未处理则返回false
   */
  public httpErrorProcess(err: HttpErrorResponse): boolean {
    if (err.status === 403) {
      if (err.error.message === 'Authorization failed') {
        this.promptBox.open(this.permissionErrorMessage, () => {
          this.authService.kickOut();
        });
      } else {
        this.http403Tip.http403Flag = true;
      }
      return true;
    } else if (err.status === 500) {
      this.http500Tip.http500Flag = true;
      return true;
    } else {
      console.error(err);
      return false;
    }
  }
}
