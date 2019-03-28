import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

declare var $: any;

@Component({
  selector: 'app-case-studies',
  templateUrl: './case-studies.component.html',
  styleUrls: ['./case-studies.component.css']
})
export class CaseStudiesComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Case Studies of Different Situation | Reposition');
    this.meta.addTag({ name: 'description', content: '' });

  }

  ngOnInit() {
    $('select').on('change', function () {
      //alert(this.value);
      if (this.value == 'design') {
        $(".design").show();
        $(".fashion").hide();
        $(".gaming").hide();
        $(".property").hide();
      }
      if (this.value == 'fashion') {
        $(".design").hide();
        $(".fashion").show();
        $(".gaming").hide();
        $(".property").hide();
      }
      if (this.value == 'gaming') {
        $(".design").hide();
        $(".fashion").hide();
        $(".gaming").show();
        $(".property").hide();
      }
      if (this.value == 'property') {
        $(".design").hide();
        $(".fashion").hide();
        $(".gaming").hide();
        $(".property").show();
      }
      if (this.value == '') {
        $(".design").show();
        $(".fashion").show();
        $(".gaming").show();
        $(".property").show();
      }
    });

  }
 
}
