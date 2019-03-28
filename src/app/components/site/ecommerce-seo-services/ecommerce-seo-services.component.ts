import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ecommerce-seo-services',
  templateUrl: './ecommerce-seo-services.component.html',
  styleUrls: ['./ecommerce-seo-services.component.css']
})
export class EcommerceSeoServicesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(' Get Ecommerce SEO Services UK, London | Reposition');
    this.meta.addTag({ name: 'description', content: 'To Get the best Local Seo Services of UK, London contact us. We will definitely get back upto your expectations' });

  }
 
  ngOnInit() {
  }

}
