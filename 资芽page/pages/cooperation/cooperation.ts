import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServedetailPage } from '../servedetail/servedetail';

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
