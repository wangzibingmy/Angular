import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http} from "@angular/http";
import { Headers} from "@angular/http";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public http:Http,public navCtrl: NavController) { }
  headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  usrid='';
  pw='';
  dl(){
    this.http.post('http://datainfo.duapp.com/shopdata/userinfo.php',{status:'login',userID:this.usrid,password:this.pw}).subscribe(data=>{
      console.log(data);
      if(data['_body']==0){
        console.log('用户名不存在！');
      }else if(data['_body']==2){
        console.log('用户名密码不符！');
      }
    },err=>{
      console.log("err");
    });
  }
}
