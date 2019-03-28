import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-link-building-services',
  templateUrl: './link-building-services.component.html',
  styleUrls: ['./link-building-services.component.css']
})
export class LinkBuildingServicesComponent implements OnInit {
 
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('  Link Building Services - THE SEO &  DIGITAL POSITIONING AGENCY');
    this.meta.addTag({ name: 'description', content: 'Link Building Services Targeted Link Acquisition Translates Into More Visitors One Step Ahead Building better links and improving your social signals is an absolute must if you hope to be competitive in today&#8217;s search results. It&#8217;s more than link building today. Instead, it&#8217;s about building a compelling profile that will attract companies to your site & hellip;' });

}


  ngOnInit() {
  }

}
