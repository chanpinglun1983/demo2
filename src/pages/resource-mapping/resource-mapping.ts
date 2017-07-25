import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResourceMappingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-resource-mapping',
  templateUrl: 'resource-mapping.html',
})
export class ResourceMappingPage {
 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profileImgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductManagementPage');
  }


  public profileImgSrc : string


}
