import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServedetailPage } from '../servedetail/servedetail';
/**
 * Generated class for the CooperationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cooperation',
  templateUrl: 'cooperation.html',
})
export class CooperationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  servedetail(){
    this.navCtrl.push(ServedetailPage,this.navParams);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CooperationPage');
  }

}
