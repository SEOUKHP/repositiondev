import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-dental-seo',
  templateUrl: './dental-seo.component.html',
  styleUrls: ['./dental-seo.component.css']
})
export class DentalSeoComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('a[href^="/#genesis-footer-widgets"]').click(function () {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 200);

      return false;
    });
  }

}
