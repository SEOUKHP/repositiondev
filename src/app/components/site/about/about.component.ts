import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('About Us | Reposition');
    this.meta.addTag({ name: 'description', content: 'This is the about us page of our. Go through this page to know more about our field of vision and services' });

  }

  ngOnInit() {
  }
  slides = [
    { slide_id: "sample_slider_slide02", image1: "https://www.reposition.co.uk/wp-content/uploads/2018/12/Screenshot-2019-03-20-at-15.43.16-300x68.png", image2: "https://www.reposition.co.uk/wp-content/uploads/2018/12/The_Times_logo_wrodmark-300x40.png", para1: "If you've been looking for the most progressive and results orientated SEO Agency around, look no further. Reposition is the first agency to combine AI and SEO.", para2: "Artificial Intelligence meets Search. These guys are bringing AI to the forefront of digital marketing..." },
    { slide_id: "sample_slider_slide01", image1: "https://www.reposition.co.uk/wp-content/uploads/2018/12/CMLogo-Black-300x46.png", image2: "https://www.reposition.co.uk/wp-content/uploads/2018/12/header-logo-300x74.png", para1: "The Reposition team are using Advanced SEO techniques to bring quick wins for their clients - a breath of fresh air.", para2: "The Search landscape is changing fast and it's important to keep ahead of the curve.." },
  
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
}
