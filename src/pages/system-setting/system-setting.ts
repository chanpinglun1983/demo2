import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CustomizeCssPage } from '../customize-css/customize-css';
import { RoleSettingPage } from '../role-setting/role-setting';
import { SystemParameterPage } from '../system-parameter/system-parameter';
import { AduitLogPage } from '../aduit-log/aduit-log';
/**
 * Generated class for the SystemSettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-system-setting',
  templateUrl: 'system-setting.html',
})
export class SystemSettingPage {


  tabs: Array<{title: string, root: any, icon:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.tabs = [
  { title: "Customize Css", root: CustomizeCssPage, icon: "calendar" },
  { title: "Role Setting", root: RoleSettingPage, icon: "calendar" },
  { title: "System Parameter", root: SystemParameterPage, icon: "calendar" },
  { title: "Aduit Log", root: AduitLogPage, icon: "calendar" },
  
];

  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SystemSettingPage');
  }

}
