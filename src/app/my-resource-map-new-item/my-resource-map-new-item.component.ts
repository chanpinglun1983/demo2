import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-resource-map-new-item",
  templateUrl: "./my-resource-map-new-item.component.html"
})

export class MyResourceMapNewItemComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }


      OnMouseEnter(event){
    event.target.classList.add("resource-map-new-item-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("resource-map-new-item-hover");
  }


}
