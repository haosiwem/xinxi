import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {HttpService} from './http.service';
import {ZCoreBase} from '../../utils/z-core';
import {isNullOrUndefined} from 'util';
import {GlobalConst} from '../share/global-const';


export class UserEntity extends ZCoreBase {
  public username: string; // String	员工id
  public name: string; // String	姓名
  public mobile: string; // Array	联系方式
  public sex: string; // String	性别
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn = false;
  public get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  private _user: UserEntity;
  public get user(): UserEntity {
    return this._user;
  }

  constructor(private router: Router, private httpService: HttpService) {
  }

  /**
   * 秘钥方式授权直接授权
   * @param user 当前用户
   */
  public authorizeBySecretKey(user: UserEntity) {
    this._user = user;
    this._isLoggedIn = !isNullOrUndefined(user);
  }

  /**
   * 登录方式授权获取用户信息
   */
  public authorizeByLogin() {
    this.httpService.get(environment.MOVE_SERVER_DOMAIN + '/admin/user').subscribe(res => {
      this._user = UserEntity.Create(res.body);
      this._isLoggedIn = true;
      this.router.navigateByUrl(GlobalConst.HomePath);
    });
  }

  /**
   * 授权失败时踢出登录状态
   */
  public kickOut() {
    this._isLoggedIn = false;
    this._user = null;
    this.router.navigate(['login']);
  }

  /**
   * 登出
   */
  public logout() {
    this.httpService.post(environment.MOVE_SERVER_DOMAIN + '/admin/logout').subscribe(() => {
      this._isLoggedIn = false;
      this._user = null;
      this.router.navigate(['login']);
    });
  }
}

/*
 chinese_name: "实时信息", english_name: "realtime_info"
 chinese_name: "数据统计", english_name: "data_statistics"
 chinese_name: "数据记录", english_name: "data_record"
 chinese_name: "异常警告", english_name: "exception_warning"
 chinese_name: "停车场管理", english_name: "parking"
 chinese_name: "基础管理", english_name: "base"
 chinese_name: "员工管理", english_name: "user"
 * */
