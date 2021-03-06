import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-deal',
  templateUrl: 'deal.html',
})
export class DealPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad(){
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
       Object.keys(elements).map((key) => {
          elements[key].style.display = 'none';
         });
       }   
  }
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
	    Object.keys(elements).map((key) => {
    		elements[key].style.display = 'flex';
	    });
    }
  }

}
