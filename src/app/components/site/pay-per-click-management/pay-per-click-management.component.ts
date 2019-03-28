import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-pay-per-click-management',
  templateUrl: './pay-per-click-management.component.html',
  styleUrls: ['./pay-per-click-management.component.css']
})
export class PayPerClickManagementComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Best Pay Per Click (PPC) Management Services in London | Reposition');
    this.meta.addTag({ name: 'description', content: 'To get the Best Pay Per Click (PPC) Management Services in London contact us. We will definitely get back upto your expectations' });

  }

  ngOnInit() {
  }

}
