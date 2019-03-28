import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-development-services',
  templateUrl: './web-development-services.component.html',
  styleUrls: ['./web-development-services.component.css']
})
export class WebDevelopmentServicesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Web Development Services - THE SEO & DIGITAL POSITIONING AGENCY');
  }
  
  ngOnInit() {
  }

}
