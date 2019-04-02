import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reposition';

  constructor(private router: Router) {
   

  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    $('a[href^="/#genesis-footer-widgets"]').click(function () {

      $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 200);

      return false;
    });
  }
}



