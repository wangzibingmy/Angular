import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  idx:number;
  data:string;
  dataArr=[];
  content="";


  add(){
     this.dataArr.push(this.content);
     console.log('aaa');
     this.content='';
  }
  getIn(ww){
    this.idx=ww;
  }
  // change(i){
  //   this.dataA.push(this.dataArr[i]);
  //   this.dataArr.splice(i,1);
  // }
  // change2(i){
  //   this.dataArr.push(this.dataA[i]);
  //   this.dataA.splice(i,1);
  // }
  // delData(i){
  //   this.dataArr.splice(i,1);
  // }
  // delA(i){
  //   this.dataA.splice(i,1);
  // }

}
