import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app'; 
import { TabsPage} from '../tabs/tabs';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController ,public navParams:NavParams ,private app:App) {

  }
  contabs(){
    this.app.getRootNavs()[0].setRoot(TabsPage);
  }
}
