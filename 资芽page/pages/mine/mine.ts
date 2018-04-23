import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { List } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { LoginPage } from '../login/login';
import { RepostPage } from '../repost/repost';
import { CooperationPage } from '../cooperation/cooperation';
import { SettingPage } from '../setting/setting';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  dl(){
    this.navCtrl.push(LoginPage,this.navParams);
  }
  minecooper(){
    this.navCtrl.push(CooperationPage,this.navParams);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
  }
  setting(){
    this.navCtrl.push(SettingPage,this.navParams);
  }

}
