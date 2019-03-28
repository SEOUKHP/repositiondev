import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-local-seo-services',
  templateUrl: './local-seo-services.component.html',
  styleUrls: ['./local-seo-services.component.css']
})
export class LocalSeoServicesComponent implements OnInit {
  
constructor(private titleService: Title) {
  this.titleService.setTitle('Get Local Seo Services of UK, London | Reposition');

}

  ngOnInit() {
  }

}
