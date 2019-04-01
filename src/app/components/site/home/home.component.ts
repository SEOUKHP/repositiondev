import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  


  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Digital Marketing Agency in UK, London | Reposition');
    this.meta.addTag({ name: 'description', content: 'Reposition is a Search Engine Optimisation, Paid Search and Branding Agency. To get the best services in this field contact us' });

  }

  ngOnInit() {
  }
  slides = [
    { right_img: "/assets/images/homebanner/Purple.png", slick_idd: "slick-slide0 ", p: "SEO & CRO Optimisation", h2: "Purple Bricks", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration", link:"/case-study/purple-bricks" },
    { right_img: "/assets/images/homebanner/Worldpay.png", slick_idd:"slick-slide1 ",p: "SEO & CRO Optimisation", h2: "World Pay", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration", link: "" },
    { right_img: "/assets/images/homebanner/Boss.png", slick_idd: "slick-slide2 ", p: "SEO & CRO Optimisation", h2: "Hugo Boss", rank: " Increase in page 1 Ranking", traffic: "Increase in Organic Traffic", duration: "Average visit duration", link: "/case-study/hugo-boss" }
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
