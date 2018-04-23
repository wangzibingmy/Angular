import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TalkingPage } from './talking';

@NgModule({
  declarations: [
    TalkingPage,
  ],
  imports: [
    IonicPageModule.forChild(TalkingPage),
  ],
})
export class TalkingPageModule {}
