import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-web-design-services',
  templateUrl: './web-design-services.component.html',
  styleUrls: ['./web-design-services.component.css']
})
export class WebDesignServicesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Get The Best Web Design Services For Your Site | Reposition');
    this.meta.addTag({ name: 'description', content: 'To Get The Best Web Design Services For Your Site, contact us. We will design your website to the best of our knowledge' });

  }

  ngOnInit() {
  }

}
