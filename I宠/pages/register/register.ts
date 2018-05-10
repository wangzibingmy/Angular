import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AgreementPage } from '../agreement/agreement';
import { App } from 'ionic-angular/components/app/app'; 
import { TabsPage} from '../tabs/tabs';
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private app:App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
 
  //获取验证码
  acquire(){
    
  }
  //agree
  agree:boolean;
    updateAgree(){
      console.log('Agree new state:'+this.agree);
    }
  favor(){
        this.navCtrl.push(AgreementPage);
    }
  next(){
    if(this.agree==true){
      this.app.getRootNavs()[0].setRoot(TabsPage);
    }
  }
}
