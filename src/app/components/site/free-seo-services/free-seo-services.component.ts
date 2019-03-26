import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-free-seo-services',
  templateUrl: './free-seo-services.component.html',
  styleUrls: ['./free-seo-services.component.css']
})
export class FreeSeoServicesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slides = [
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/01/adult-beach-beard-736716-120x120.jpg", review: "We have a constant flow of new leads thanks to this amazing SEO company. They gave us all the tools to convert leads into customers.", name: "Jeffrey Polk", designation: "Insurance Provider"},
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/01/no-photo-120x120.jpg", review: "This incredible team managed to not only get us top positions on Google for all of our top keywords, but they kept us there, as well! I would highly recommend this company to anyone.", name: "Gabriel Townsend", designation: "Leading Online Property Portal" },
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/01/no-photo-120x120.jpg", review: "We’ve looked at a lot of SEO solutions but these guys were always the clear favorite. They have the right strategy and they’ve been awesome to work with.", name: "Irene Jameson", designation: "Accountancy Practice London" }
  ];
  slideConfig = {
    "dots": true,
    "arrows": true,
    "infinite": true,
    "speed": 200,
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 2000 };

  slickInit(e) {
    console.log('slick initialized');
  }
}
