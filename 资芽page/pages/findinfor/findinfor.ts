import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { InfordetailPage }from '../infordetail/infordetail';
@IonicPage()
@Component({
  selector: 'page-findinfor',
  templateUrl: 'findinfor.html',
})
export class FindinforPage {
  item:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 6; i++) {
      this.items.push( this.items.length );
    }

    let name = navParams.get('name');
    this.item=name;
    console.log(this.item);
  }
  inforde(){
    this.navCtrl.push(InfordetailPage,this.navParams);
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

  search="infor";
  items = [];
  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }
  
      console.log('Async operation has ended');
      infiniteScroll.complete();
      // infiniteScroll.enable();
    }, 500);
  }


}
