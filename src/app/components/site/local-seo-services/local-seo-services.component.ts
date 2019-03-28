import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-local-seo-services',
  templateUrl: './local-seo-services.component.html',
  styleUrls: ['./local-seo-services.component.css']
})
export class LocalSeoServicesComponent implements OnInit {
  
  constructor(private titleService: Title, private meta: Meta) {
  this.titleService.setTitle('Get Local Seo Services of UK, London | Reposition');
    this.meta.addTag({ name: 'description', content: 'To Get the best Local Seo Services of UK, London contact us. We will definitely get back upto your expectations' });

}

  ngOnInit() {
  }

}
