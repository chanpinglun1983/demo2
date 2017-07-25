import { Component } from '@angular/core';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor() {
    this.profileImgSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/53474/atom_profile_01.jpg";
  }

    public profileImgSrc : string

}
