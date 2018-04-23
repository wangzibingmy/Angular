import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController,ViewController} from 'ionic-angular';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  denglu(){
    this.navCtrl.push(LoginPage,this.navParams);
  }
  // presentLoginModal() {
  //   let LoginModal = this.modalCtrl.create(LoginUs);
  //   LoginModal.present();
  // }
 
  presentProfileModal() {
    let profileModal = this.modalCtrl.create(LoginPage, { userId: 8675309 });
    profileModal.onDidDismiss(data => {
      console.log(data);
    });
    profileModal.present();
  }
}
