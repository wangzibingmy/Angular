import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import { RegisterPage} from '../register/register';
import { FindpwPage } from '../findpw/findpw';
import {HomePage } from '../home/home';
import { Http} from "@angular/http";
import { Headers} from "@angular/http";
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    console.log('UserId', navParams.get('userId'));
  }
  // dismiss() {
  //   let data = { 'foo': 'bar' };
  //   this.viewCtrl.dismiss(data);
  //   console.log('UserId', this.navParams.get('userId'));
  // }

  zc(){
    this.navCtrl.push(RegisterPage,this.navParams);
  }
  sy(){
    this.navCtrl.push(HomePage);
  }
  findpassword(){
    this.navCtrl.push(FindpwPage,this.navParams);
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
  
  headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  usrid='';
  pw='';
  dl(){
    // this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',userID:this.usrid,password:this.pw},{headers:this.headers},).subscribe(data=>{
    //   console.log(data);
    //   if(data['_body']==0){
    //     console.log('用户名不存在！');
    //   }else if(data['_body']==2){
    //     console.log('用户名密码不符！');
    //   }else{
        
    //   }
    // },err=>{
    //   console.log("ERROR");
    // });
  }
}
