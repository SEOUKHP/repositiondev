import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content-marketing-services',
  templateUrl: './content-marketing-services.component.html',
  styleUrls: ['./content-marketing-services.component.css']
})
export class ContentMarketingServicesComponent implements OnInit {
 
constructor(private titleService: Title) {
  this.titleService.setTitle(' Get Best Content Marketing Strategies and Services | Reposition');
}

  ngOnInit() {
  }

}
