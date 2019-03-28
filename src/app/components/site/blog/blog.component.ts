import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(private titleService: Title, private meta: Meta) {
    this.titleService.setTitle('Blog - THE SEO & DIGITAL POSITIONING AGENCY');
    this.meta.addTag({ name: 'description', content: 'This is the about us page of our. Go through this page to know more about our field of vision and services' });

  }


  ngOnInit() {
  }

}

