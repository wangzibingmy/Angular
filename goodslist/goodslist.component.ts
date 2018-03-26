import { Component,Optional, OnInit, Input } from '@angular/core';
//import { Service1Service} from '../../services/service1.service';
import {Router} from '@angular/router';
//import {ActivatedRoute} from '@angular/router';
import { Http,Jsonp} from '@angular/http';
//import { Headers } from "@angular/http";
//import { Observable} from "rxjs";
//import "rxjs/Rx";
@Component({
  selector: 'app-goodslist',
  templateUrl: './goodslist.component.html',
  styleUrls: ['./goodslist.component.css']
})
export class GoodslistComponent implements OnInit {
  constructor(public http:Http,public jsonp:Jsonp,public router:Router) { 
  }
  list:number[]=[1,2,3,4,5];
  //headers=new Headers({'Content-Type':'application/x-www-form-urlencoded'});
  ngOnInit() {
    // this.http.get('http://datainfo.duapp.com/shopdata/getGoods.php').subscribe(data=>{
    //   console.log(JSON.parse(data['_body']));
    //   this.list=JSON.parse(data['_body']);
    // },err=>{
    //   console.log(err);
    // });

    this.jsonp.get('http://datainfo.duapp.com/shopdata/getGoods.php?callback=JSONP_CALLBACK').subscribe(data=>{
      console.log(data['_body']);
      this.list=data['_body'];
    },err=>{
      console.log(err);
    });

    // this.http.post('http://datainfo.duapp.com/shopdata/getclass.php',JSON.stringify({}),{headers:this.headers}).filter(data=>{
    //   return data.status===200;
    // }).map(data=>data.json()).subscribe(data=>{
    //   console.log(data);
    // },err=>{
    //   console.log(err);
    // });
  }
  goDetail(idx){
    this.router.navigate(['/gooddetail',idx]);
  }
}
