import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { CookieService } from 'ngx-cookie-service';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    BrandingComponent,
    SeoServicesComponent,
    PayPerClickManagementComponent,
    WebDesignServicesComponent,
    WebDevelopmentServicesComponent,
    FreeSeoServicesComponent,
    DentalSeoGoogleComponent,
    LocalSeoServicesComponent,
    EcommerceSeoServicesComponent,
    LinkBuildingServicesComponent,
    ContentMarketingServicesComponent,
    BlogComponent,
    SpecializedSeoServicesComponent,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component,
    Page6Component,
    DentalSeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
