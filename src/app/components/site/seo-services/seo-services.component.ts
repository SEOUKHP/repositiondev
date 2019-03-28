import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-seo-services',
  templateUrl: './seo-services.component.html',
  styleUrls: ['./seo-services.component.css']
})
export class SeoServicesComponent implements OnInit {
  
constructor(private titleService: Title) {
  this.titleService.setTitle('Best SEO Services in Uk, London | Reposition');

}

  ngOnInit() {
  }

}
