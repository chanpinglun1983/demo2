import { Component } from '@angular/core';

@Component({
    selector: 'my-resource-new-item',
    templateUrl: 'my-resource-new-item.component.html'
})
export class MyResourceNewItemComponent {

  OnMouseEnter(event){
    event.target.classList.add("container-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("container-hover");
  }

}
