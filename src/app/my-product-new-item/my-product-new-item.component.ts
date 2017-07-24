import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-product-new-item",
  templateUrl: "./my-product-new-item.component.html"
  
})

export class MyProductNewItemComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }


    OnMouseEnter(event){
    event.target.classList.add("product-container-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("product-container-hover");
  }
}
