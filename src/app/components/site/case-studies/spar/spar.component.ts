import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spar',
  templateUrl: './spar.component.html',
  styleUrls: ['./spar.component.css']
})
export class SparComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    { img: "/assets/images/2019/02/spar-1.jpg" },
    { img: "/assets/images/2019/02/spar-2.jpg" },
    { img: "/assets/images/2019/02/spar-3.jpg" },
    { img: "/assets/images/2019/02/spar-4.jpg" }
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
    { img: "/assets/images/2019/02/wenzels-lp1.jpg" },
    { img: "/assets/images/2019/02/wenzels-lp2.jpg" },
    { img: "/assets/images/2019/02/wenzels-lp3.jpg" },
    { img: "/assets/images/2019/02/wenzels-lp4.jpg" }
  ];

  slickInit(e) {
    console.log('slick initialized');
  }
}

