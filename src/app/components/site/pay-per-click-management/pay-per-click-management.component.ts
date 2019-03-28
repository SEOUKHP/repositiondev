import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-pay-per-click-management',
  templateUrl: './pay-per-click-management.component.html',
  styleUrls: ['./pay-per-click-management.component.css']
})
export class PayPerClickManagementComponent implements OnInit {

  constructor(private titleService: Title) {
    this.titleService.setTitle('Best Pay Per Click (PPC) Management Services in London | Reposition');
  }

  ngOnInit() {
  }

}
