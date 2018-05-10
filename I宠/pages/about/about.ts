import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Events, Tabs} from 'ionic-angular';
import { YimiaoPage}from '../yimiao/yimiao';
import { GeneralPage}from '../general/general';
import { Subscription } from 'rxjs/Subscription';
// import { Keyboard } from '@ionic-native/keyboard';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private hideSubscription: Subscription;
  private showSubscription: Subscription;
  constructor(public navCtrl: NavController,public navParams: NavParams,private event: Events) {
    this.hideSubscription = null;
    this.showSubscription = null;
  }
  ionViewDidEnter(){
    // this.hideSubscription = this.keyboard.onKeyboardShow().subscribe(() => this.event.publish('hideTabs'));
    // this.showSubscription = this.keyboard.onKeyboardHide().subscribe(() => this.event.publish('showTabs'));
  }

  ionViewWillLeave(){
    // this.keyboard.close();
    if(this.hideSubscription){
      this.hideSubscription.unsubscribe();
      this.hideSubscription = null;
    }
    if(this.showSubscription){
      this.showSubscription.unsubscribe();
      this.showSubscription = null;
    }
  }
  yimiao(){
    this.navCtrl.push(YimiaoPage,this.navParams);
  }
  general(){
    this.navCtrl.push(GeneralPage,this.navParams);
  }
}
