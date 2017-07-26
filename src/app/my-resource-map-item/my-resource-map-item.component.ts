import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-resource-map-item",
  templateUrl: "./my-resource-map-item.component.html"
})

export class MyResourceMapItemComponent implements OnInit {
  
  constructor() { 

  }

  ngOnInit() {

  }



    onBlur(event){
    if(event.target.value == ""){
      event.target.classList.remove('used');
    }else{
      event.target.classList.add('used');
    }
  }


      OnMouseEnter(event){
    event.target.classList.add("resource-map-new-item-hover");
  }


    OnMouseLeave(event){
    event.target.classList.remove("resource-map-new-item-hover");
  }


  
}
