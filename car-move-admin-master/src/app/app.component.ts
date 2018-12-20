import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {AuthService} from './core/auth.service';
import {GlobalService} from './core/global.service';
import {DateFormatHelper} from '../utils/date-format-helper';
import {PromptBoxComponent} from './share/components/tips/prompt-box/prompt-box.component';
import {ConfirmationBoxComponent} from './share/components/tips/confirmation-box/confirmation-box.component';

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
              public authService: AuthService) {
    DateFormatHelper.NowBlock = () => {
      return new Date(globalService.timeStamp * 1000);
    };
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
    this.globalService.confirmationBox.open('是否退出系统？', () => {
      this.globalService.confirmationBox.close();
      this.authService.logout();
    });
  }
}
