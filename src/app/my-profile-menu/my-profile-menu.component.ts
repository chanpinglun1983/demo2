import { Component, OnInit } from "@angular/core";
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from './pop-over-page.component';
@Component({
  selector: "app-my-profile-menu",
  templateUrl: "my-profile-menu.component.html"
})

export class MyProfileMenuComponent implements OnInit {
  
  constructor(public popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }
  ngOnInit() {

  }
}
