import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-web-design-services',
  templateUrl: './web-design-services.component.html',
  styleUrls: ['./web-design-services.component.css']
})
export class WebDesignServicesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Get The Best Web Design Services For Your Site | Reposition');
  }

  ngOnInit() {
  }

}
