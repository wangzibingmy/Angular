import { Component } from '@angular/core';
import { NavController ,NavParams} from 'ionic-angular';
import { TalkingPage} from "../talking/talking";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  systalkone(){
    this.navCtrl.push(TalkingPage, {
      name: "资芽小助手"
    });
  }
  systalktwo(){
    this.navCtrl.push(TalkingPage, {
      name: "王教授"
    });
  }
  systalkthree(){
    this.navCtrl.push(TalkingPage, {
      name: "张律师"
    });
  }
}
