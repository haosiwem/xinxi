import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from './core/auth.service';
import {GlobalService} from './core/global.service';
import {DateFormatHelper} from '../utils/date-format-helper';
import {PromptBoxComponent} from './share/components/tips/prompt-box/prompt-box.component';
import {ConfirmationBoxComponent} from './share/components/tips/confirmation-box/confirmation-box.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild(PromptBoxComponent) public globalPromptBox: PromptBoxComponent;
  @ViewChild(ConfirmationBoxComponent) public globalConfirmationBox: ConfirmationBoxComponent;
  @ViewChild('routerDiv') public routerDiv: ElementRef;

  constructor(private globalService: GlobalService,
              public authService: AuthService,
              private router: Router) {
    DateFormatHelper.NowBlock = () => {
      return new Date(globalService.timeStamp * 1000);
    };
  }

  public mainShow = true;
  public linkShow = false;
  public managementShow = false;
  public crumb = '首页';
  public mainPanels: any = [
    {
      active: true,
      name: '首页',
      disabled: false,
      content: ['首页']
    }
  ];
  public linkPanels: any  = [
    {
      active: true,
      name: '生成链接',
      disabled: false,
      content: ['生成链接', '生成链接历史记录']
    }
  ];
  public managementPanels: any  = [
    {
      active: true,
      name: '链接管理',
      disabled: false,
      content: ['链接管理']
    },
    {
      active: true,
      name: '用户管理',
      disabled: false,
      content: ['用户管理']
    }
  ];
  public panels: any  = this.mainPanels;

  onBtnMain() {
    this.panels = this.mainPanels;
    this.mainShow = true;
    this.linkShow = false;
    this.managementShow = false;
    this.crumb = '首页';
  }

  onBtnLink() {
    this.panels = this.linkPanels;
    this.mainShow = false;
    this.linkShow = true;
    this.managementShow = false;
    this.crumb = '链接';
  }

  onBtnManagement() {
    this.panels = this.managementPanels;
    this.mainShow = false;
    this.linkShow = false;
    this.managementShow = true;
    this.crumb = '管理';
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.globalService.promptBox = this.globalPromptBox;
    this.globalService.confirmationBox = this.globalConfirmationBox;
    GlobalService.Instance = this.globalService;
    this.globalService.promptBox.close();
    this.globalService.confirmationBox.close();
  }

  public onLogoutDivClick() {
    // console.log('a');
    // this.globalService.confirmationBox.open('是否退出系统？', () => {
    //   this.globalService.confirmationBox.close();
    //   this.authService.logout();
    localStorage.clear();
    this.router.navigate(['login']);
    // });
  }
}
