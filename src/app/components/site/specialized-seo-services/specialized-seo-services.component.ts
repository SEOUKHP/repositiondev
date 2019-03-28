import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-specialized-seo-services',
  templateUrl: './specialized-seo-services.component.html',
  styleUrls: ['./specialized-seo-services.component.css']
})
export class SpecializedSeoServicesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Specialized SEO Services in UK, London | Reposition');
    this.meta.addTag({ name: 'description', content: 'To get the Specialized SEO Services in UK, London, Contact Us. We will definitely get back upto your expectations' });

  }

  ngOnInit() {
  }

}
