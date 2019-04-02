import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thehopeandglory',
  templateUrl: './thehopeandglory.component.html',
  styleUrls: ['./thehopeandglory.component.css']
})
export class ThehopeandgloryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    { img: "/assets/images/2019/02/hope-glory-1-1.jpg"},
    { img: "/assets/images/2019/02/hope-glory-2.jpg"},
    { img: "/assets/images/2019/02/hope-glory-3.jpg" },
    { img: "/assets/images/2019/02/hope-glory-4.jpg"}
  ];
  slideConfig = {
    "dots": true,
    "arrows": false,
    "infinite": true,
    "speed": 200,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000
  };
  slides2 = [
    { img: "/assets/images/2019/02/island-outpost-laptop01.png" },
    { img: "/assets/images/2019/02/island-outpost-laptop02.png" },
    { img: "/assets/images/2019/02/island-outpost-laptop03.png" },
    { img: "/assets/images/2019/02/island-outpost-laptop04.png" }
  ];

  slickInit(e) {
    console.log('slick initialized');
  }
}
