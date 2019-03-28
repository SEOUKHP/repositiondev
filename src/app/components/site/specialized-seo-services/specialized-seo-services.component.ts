import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-specialized-seo-services',
  templateUrl: './specialized-seo-services.component.html',
  styleUrls: ['./specialized-seo-services.component.css']
})
export class SpecializedSeoServicesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Specialized SEO Services in UK, London | Reposition');
  }

  ngOnInit() {
  }

}
