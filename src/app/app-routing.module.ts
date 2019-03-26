import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/site/home/home.component';
import { AboutComponent } from './components/site/about/about.component';
import { BrandingComponent } from './components/site/branding/branding.component';
import { SeoServicesComponent } from './components/site/seo-services/seo-services.component';
import { PayPerClickManagementComponent } from './components/site/pay-per-click-management/pay-per-click-management.component';
import { WebDesignServicesComponent } from './components/site/web-design-services/web-design-services.component';
import { WebDevelopmentServicesComponent } from './components/site/web-development-services/web-development-services.component';
import { FreeSeoServicesComponent } from './components/site/free-seo-services/free-seo-services.component';
import { DentalSeoGoogleComponent } from './components/site/dental-seo-google/dental-seo-google.component';
import { LocalSeoServicesComponent } from './components/site/local-seo-services/local-seo-services.component';
import { EcommerceSeoServicesComponent } from './components/site/ecommerce-seo-services/ecommerce-seo-services.component';
import { LinkBuildingServicesComponent } from './components/site/link-building-services/link-building-services.component';
import { ContentMarketingServicesComponent } from './components/site/content-marketing-services/content-marketing-services.component';
import { BlogComponent } from './components/site/blog/blog.component';
import { SpecializedSeoServicesComponent } from './components/site/specialized-seo-services/specialized-seo-services.component';
import { Page2Component } from './components/site/blog/page2/page2.component';
import { Page3Component } from './components/site/blog/page3/page3.component';
import { Page4Component } from './components/site/blog/page4/page4.component';
import { Page5Component } from './components/site/blog/page5/page5.component';
import { Page6Component } from './components/site/blog/page6/page6.component';
import { DentalSeoComponent } from './components/site/dental-seo/dental-seo.component';


const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'seo-services', component: SeoServicesComponent },
  { path: 'pay-per-click-management', component: PayPerClickManagementComponent },
  { path: 'web-design-services', component: WebDesignServicesComponent },
  { path: 'web-development-services', component: WebDevelopmentServicesComponent },
  { path: 'free-seo-analysis', component: FreeSeoServicesComponent },
  { path: 'dental-seo-google', component: DentalSeoGoogleComponent },
  { path: 'dental-seo', component: DentalSeoComponent },
  { path: 'local-seo-services', component: LocalSeoServicesComponent },
  { path: 'ecommerce-seo-services', component: EcommerceSeoServicesComponent },
  { path: 'link-building-services', component: LinkBuildingServicesComponent },
  { path: 'content-marketing-services', component: ContentMarketingServicesComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'specialized-seo-services', component: SpecializedSeoServicesComponent },
  { path: 'blog/page2', component: Page2Component },
  { path: 'blog/page2/blog', component: Page2Component },


  { path: 'blog/page3', component: Page3Component },
  { path: 'blog/page2/page3', component: Page3Component },


  { path: 'blog/page4', component: Page4Component },
  { path: 'blog/page2/page4', component: Page4Component },

  { path: 'blog/page5', component: Page5Component },
  { path: 'blog/page2/page5', component: Page4Component },


  { path: 'blog/page6', component: Page6Component },
  { path: 'blog/page2/page6', component: Page4Component },


  {
    path: '',

    redirectTo: '/home',

    pathMatch: 'full'

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
