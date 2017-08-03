import { Component,ViewChild,ElementRef, Renderer} from '@angular/core';
import { NavController, NavParams ,TextInput } from 'ionic-angular';

/**
 * Generated class for the CustomizeCssPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-customize-css',
  templateUrl: 'customize-css.html',
})
export class CustomizeCssPage {

  @ViewChild('txtCss') txtCss: TextInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, private renderer: Renderer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomizeCssPage');
  }

  OnFocus(event, obj){
    this.txtCss.getElementRef().nativeElement.classList.add("ion-textarea-focus");
  }
  
  OnFocusOut(event,obj){
    this.txtCss.getElementRef().nativeElement.classList.remove("ion-textarea-focus");
  }

  OnClick($event){
    this.txtCss.getElementRef();
  }
}
