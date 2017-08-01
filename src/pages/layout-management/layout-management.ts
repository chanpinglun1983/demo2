import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { LayoutListDesktopPage} from '../layout-list-desktop/layout-list-desktop';
import { LayoutListMobilePage} from '../layout-list-mobile/layout-list-mobile';


/**
 * Generated class for the LayoutManagementPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-layout-management',
  templateUrl: 'layout-management.html',
})
export class LayoutManagementPage {


  tabs: Array<{title: string, root: any, icon:string}>;

  public profileImgSrc : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.profileImgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg";
  this.tabs = [
  { title: "Schedule", root: LayoutListDesktopPage, icon: "calendar" },
  { title: "Speakers", root: LayoutListMobilePage, icon: "contacts" }];
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayoutManagementPage');
  }

}
