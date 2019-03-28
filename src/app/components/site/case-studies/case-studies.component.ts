import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Case Studies of Different Situation | Reposition');
  }

  ngOnInit() {
  }
 
}
