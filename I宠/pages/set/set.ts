import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { NewsetPage} from '../newset/newset';
import { LoginPage} from '../login/login';
import { App } from 'ionic-angular/components/app/app'; 
@IonicPage()
@Component({
  selector: 'page-set',
  templateUrl: 'set.html',
})
export class SetPage {

  constructor(public navCtrl: NavController, public navParams: NavParams , private app:App) {
  }
  newset(){
    this.navCtrl.push(NewsetPage,this.navParams);
  }
  logout(){
    this.app.getRootNavs()[0].setRoot(LoginPage);
  }
  
}
