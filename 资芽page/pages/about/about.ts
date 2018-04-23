import { Component } from '@angular/core';
import { NavController , NavParams} from 'ionic-angular';
import { TabrepostPage } from '../tabrepost/tabrepost';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  tabrepost(){
    this.navCtrl.push(TabrepostPage,this.navParams);
  }
}
