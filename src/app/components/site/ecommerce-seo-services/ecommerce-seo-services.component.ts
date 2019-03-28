import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce-seo-services',
  templateUrl: './ecommerce-seo-services.component.html',
  styleUrls: ['./ecommerce-seo-services.component.css']
})
export class EcommerceSeoServicesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle(' Get Ecommerce SEO Services UK, London | Reposition');
  }
 
  ngOnInit() {
  }

}
