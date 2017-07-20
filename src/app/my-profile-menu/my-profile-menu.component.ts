import { Component, OnInit } from "@angular/core";
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from './pop-over-page.component';
@Component({
  selector: "app-my-profile-menu",
  templateUrl: "my-profile-menu.component.html"
})

export class MyProfileMenuComponent implements OnInit {
  

  public profileImgSrc : string

  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  ngOnInit() {

    this.profileImgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg";

  }


  OnMouseEnter(event){
    event.target.classList.add("MenuEmailHover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("MenuEmailHover");
  }
}
