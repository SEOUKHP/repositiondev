import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Get The Best Branding Keywords | Reposition');
    this.meta.addTag({ name: 'description', content: 'To Get The Best Branding Keywords for your site contact us. We will definitely get back upto your expectations' });

  }
  
  ngOnInit() {
  }
  slides = [
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/02/wenzels-3.jpg", h2: "Wenzel's", p: "We worked closely with Wenzels on their branding, online and in-store as well as with promotions and packaging." },
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/02/mandeville-2.jpg", h2: "The Mandeville Hotel", p: "We worked closely with the Mandeville Hotel to reposition their image and brand."},
    { img: "https://www.reposition.co.uk/wp-content/uploads/2019/02/island-outpost-3.jpg", h2: "Island Outpost", p: "We worked to help improve Island Outpost's online design and branding." }
   
  ];
  
  slideConfig = {
    "dots": false,
    "arrows": true,
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
}
