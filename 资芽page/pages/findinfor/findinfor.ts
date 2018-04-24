import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-findinfor',
  templateUrl: 'findinfor.html',
})
export class FindinforPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for (let i = 0; i < 6; i++) {
      this.items.push( this.items.length );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindinforPage');
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
