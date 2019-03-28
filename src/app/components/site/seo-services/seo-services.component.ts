import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-seo-services',
  templateUrl: './seo-services.component.html',
  styleUrls: ['./seo-services.component.css']
})
export class SeoServicesComponent implements OnInit {
  
  constructor(private titleService: Title, private meta: Meta) {
  this.titleService.setTitle('Best SEO Services in Uk, London | Reposition');
    this.meta.addTag({ name: 'description', content: 'To get the Best SEO Services in Uk, London contact us. We will definitely get back upto your expectations' });

}

  ngOnInit() {
  }

}
