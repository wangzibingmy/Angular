import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-talking',
  templateUrl: 'talking.html',
})

export class TalkingPage {
  item:string;
  constructor(public navCtrl: NavController, private navParams: NavParams) {
    let name = navParams.get('name');
    this.item=name;
    console.log(this.item);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TalkingPage');
  }
 
}
