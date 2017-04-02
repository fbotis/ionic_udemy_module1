import { Component } from '@angular/core';
import { NavController, NavParams, Toggle } from 'ionic-angular';
import { PrefsService } from "../../services/prefs";

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private prefs: PrefsService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  onToggle(event: Toggle) {
    console.log(event.checked);
    this.prefs.setAlternativeBackground(event.checked);
  }

  checkAlternativeBackground():boolean {
    return this.prefs.isAltBackgroundSet();
  }
}
