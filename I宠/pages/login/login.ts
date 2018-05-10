import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FindpswPage} from '../findpsw/findpsw';
import { RegisterPage } from '../register/register';
import { HomePage }from '../home/home';
import { App } from 'ionic-angular/components/app/app'; 
import { TabsPage} from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  navCtrl1(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }

  
  //跳转忘记密码页
  navCtrl2(){
    this.navCtrl.push(FindpswPage);
  }
  //跳转注册页
  navCtrl3(){
    this.navCtrl.push(RegisterPage);
  }

}
