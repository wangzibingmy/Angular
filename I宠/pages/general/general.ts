import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HelarticlePage } from '../helarticle/helarticle';
@IonicPage()
@Component({
  selector: 'page-general',
  templateUrl: 'general.html',
})
export class GeneralPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  helarticle(){
    this.navCtrl.push(HelarticlePage);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralPage');
  }
  

}
