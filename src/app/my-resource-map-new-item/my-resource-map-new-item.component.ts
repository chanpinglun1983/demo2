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


  onClick(event){
    //alert(this) ;
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
