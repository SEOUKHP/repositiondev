import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-link-building-services',
  templateUrl: './link-building-services.component.html',
  styleUrls: ['./link-building-services.component.css']
})
export class LinkBuildingServicesComponent implements OnInit {
 
constructor(private titleService: Title) {
  this.titleService.setTitle('  Link Building Services - THE SEO &  DIGITAL POSITIONING AGENCY');
}


  ngOnInit() {
  }

}
