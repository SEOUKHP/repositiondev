import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
    $("#genesis-mobile-nav-primary").click(function(){
      $("#genesis-nav-primary").slideToggle();
    });
    //if (screen.width < 960) {
    //  $(".menu-item").click(function () {
    //    $("#genesis-nav-primary").css("display", "none");
    //  });
    //}
   
  }

}
