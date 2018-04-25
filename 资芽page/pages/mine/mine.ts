import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { RepostPage } from '../repost/repost';
import { CooperationPage } from '../cooperation/cooperation';
import { SettingPage } from '../setting/setting';

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  @ViewChild(List) list: List;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  minefabu(){
    this.navCtrl.push(RepostPage,this.navParams);
  }
  minecooper(){
    this.navCtrl.push(CooperationPage,this.navParams);
  }
  setting(){
    this.navCtrl.push(SettingPage,this.navParams);
  }
}
