import { Component, OnInit } from '@angular/core';
import { Edit } from './edit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '个人信息登记卡';

  public chuan: Edit = new Edit();

  public infor: Edit = new Edit();

  public dis = false;
  public ed = false;

  onBao(infor) {
    this.chuan = new Edit(infor);
    this.dis = true;
    this.ed = false;
  }

  onXiu(infor) {
    this.ed = true;
    this.dis = false;
    this.chuan = new Edit(infor);
  }

  ngOnInit() {
    const userJsonStr = localStorage.getItem('information');
    if (userJsonStr) {
      this.dis = true;
      this.infor = JSON.parse(userJsonStr);
    } else {
      this.ed = true;
    }
  }
}
