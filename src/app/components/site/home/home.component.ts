import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
declare var $: any;


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
    $('a[href^="/#genesis-footer-widgets"]').click(function () {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 200);

      return false;
    });
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

}
