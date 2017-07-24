import { Component } from '@angular/core';

@Component({
    selector: 'my-resource-new-item',
    templateUrl: 'my-resource-new-item.component.html'
})
export class MyResourceNewItemComponent {

  OnMouseEnter(event){
    event.target.classList.add("resource-new-item-container-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("resource-new-item-container-hover");
  }

}
