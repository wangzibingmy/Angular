import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { FindinforPage } from '../findinfor/findinfor';
import { InfordetailPage } from '../infordetail/infordetail';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public navParams: NavParams) {
    for (let i = 0; i < 3; i++) {
      this.items.push( this.items.length );
    }
   
  }
  findinformation(){
    this.navCtrl.push(FindinforPage,this.navParams);
  }
  inforde(){
    this.navCtrl.push(InfordetailPage,this.navParams);
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

  




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //登录页
  //public bk:ViewController
  // ionViewDidLoad(){
    // console.log('ionViewDidLoad');
  //   this.navbar.backButtonClick=()=>{
  //     this.navCtrl.pop();
  //   }
  //   this.bk.setBackButtonText('首页');
  // }
}
