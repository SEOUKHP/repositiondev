import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-content-marketing-services',
  templateUrl: './content-marketing-services.component.html',
  styleUrls: ['./content-marketing-services.component.css']
})
export class ContentMarketingServicesComponent implements OnInit {
 
  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle(' Get Best Content Marketing Strategies and Services | Reposition');
    this.meta.addTag({ name: 'description', content: 'Get Best Content Marketing Strategies and Services, contact us. We will definitely help you to do that' });

}

  ngOnInit() {
  }

}
