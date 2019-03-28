import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-development-services',
  templateUrl: './web-development-services.component.html',
  styleUrls: ['./web-development-services.component.css']
})
export class WebDevelopmentServicesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Web Development Services - THE SEO & DIGITAL POSITIONING AGENCY');
    this.meta.addTag({ name: 'description', content: 'Web Development Services Results Driven Development That Leads to Results Building a Presence Web design is about so much more than creating an online space where customers can find you. Instead, it&#8217;s about building a presence, customised to your company. At Reposition, we&#8217;ll help you create a modern design that truly represents your company. Combining &hellip;' });

  }
  
  ngOnInit() {
  }

}
