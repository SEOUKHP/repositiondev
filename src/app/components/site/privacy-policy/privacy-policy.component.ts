import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';
declare var $: any;


@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Privacy Policy | Reposition');
    this.meta.addTag({ name: 'description', content: 'Our Site will only collect and use personal data in ways that are described here, and in a way that is consistent with our obligations' });
  }

  ngOnInit() {
    $('a[href^="/#cookies-policy"]').click(function () {
      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 200);
      return false;
    });
  }

}
