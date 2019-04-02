import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-enquirebutton',
  templateUrl: './enquirebutton.component.html',
  styleUrls: ['./enquirebutton.component.css']
})
export class EnquirebuttonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('a[href^="/#genesis-footer-widgets"]').click(function () {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 200);

      return false;
    });
  }

}
