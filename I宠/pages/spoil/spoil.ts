import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PetdetailPage } from '../petdetail/petdetail';
import { PetpublishPage } from '../petpublish/petpublish';
import { CityDataProvider} from "../../providers/city-data/city-data";
@IonicPage()
@Component({
  selector: 'page-spoil',
  templateUrl: 'spoil.html',

})
export class SpoilPage {
  cityColumns: any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public cityDataProvider: CityDataProvider ) {
      this.cityColumns = this.cityDataProvider.cities; 
  }
  petdetail(){
    this.navCtrl.push(PetdetailPage);
  } 
  petpublish(){
    this.navCtrl.push(PetpublishPage);
  }  
}
