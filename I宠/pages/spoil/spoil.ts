import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetdetailPage } from '../petdetail/petdetail';
import { PetpublishPage } from '../petpublish/petpublish';

@IonicPage()
@Component({
  selector: 'page-spoil',
  templateUrl: 'spoil.html',
})
export class SpoilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpoilPage');
  }
  petdetail(){
    this.navCtrl.push(PetdetailPage);
  }
  petpublish(){
    this.navCtrl.push(PetpublishPage);
  }
  adopt:string='jiyang';
  changeval(v){
    this.adopt=v;
  }
}
