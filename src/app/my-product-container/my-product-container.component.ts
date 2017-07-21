import { Component } from '@angular/core';

@Component({
    selector: 'my-product-container',
    templateUrl: 'my-product-container.component.html'
})
export class MyProductContainerComponent {


  OnMouseEnter(event){
    event.target.classList.add("container-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("container-hover");
  }

}
