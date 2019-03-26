import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  constructor() { }

  ngOnInit() {
  }
  slides = [
    { right_img: "https://www.reposition.co.uk/wp-content/uploads/1.png", slick_idd:"slick-slide0 ", p: "SEO & CRO Optimisation", h2: "Purple Bricks", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration" },
    { right_img: "https://www.reposition.co.uk/wp-content/uploads/2.png", slick_idd:"slick-slide1 ",p: "SEO & CRO Optimisation", h2: "Purple Bricks", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration" },
    { right_img: "https://www.reposition.co.uk/wp-content/uploads/3.png", slick_idd:"slick-slide2 ",p: "SEO & CRO Optimisation", h2: "Purple Bricks", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration"  }
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
  
  
  slickInit(e) {
    console.log('slick initialized');
  }

  //img1 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/micro.png');
  //img2 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/rad.png');
  //img3 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/goog.png');
  //img4 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/the.png');
  //img5 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/digi.png');
  //img6 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/bima.png');


  //pic1 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/01/element-pic001.png');
  //pic2 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/01/element-pic004.png');
  //pic3 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/01/element-pic002.png');
  //pic4 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/01/element-pic005.png');
  //pic5 = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/01/element-pic003.png');

  //auditpic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/1.png');
  //targetpic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/2.png');
  //techpic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/3.png');
  //commpic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/4.png');
  //seopic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/5.png');
  //devpic = require('srchttps://www.reposition.co.uk/wp-content/uploads/2019/03/6.png');

}
