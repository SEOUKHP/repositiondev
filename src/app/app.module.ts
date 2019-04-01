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

import { SpecializedSeoServicesComponent } from './components/site/specialized-seo-services/specialized-seo-services.component';

import { DentalSeoComponent } from './components/site/dental-seo/dental-seo.component';

import { CaseStudiesComponent } from './components/site/case-studies/case-studies.component';

import { DoorstepsComponent } from './components/site/case-studies/doorsteps/doorsteps.component';
import { PurpleBricksComponent } from './components/site/case-studies/purple-bricks/purple-bricks.component';
import { ThehopeandgloryComponent } from './components/site/case-studies/thehopeandglory/thehopeandglory.component';
import { IslandoutpostComponent } from './components/site/case-studies/islandoutpost/islandoutpost.component';
import { MandevilleComponent } from './components/site/case-studies/mandeville/mandeville.component';
import { WenzelsComponent } from './components/site/case-studies/wenzels/wenzels.component';
import { StellamccartneyComponent } from './components/site/case-studies/stellamccartney/stellamccartney.component';
import { SparComponent } from './components/site/case-studies/spar/spar.component';
import { HugoBossComponent } from './components/site/case-studies/hugo-boss/hugo-boss.component';
import { RightLeftSidebarComponent } from './components/layout/right-left-sidebar/right-left-sidebar.component';
import { MobileMarketingServicesComponent } from './components/site/mobile-marketing-services/mobile-marketing-services.component';
import { DigitalConsultancyServicesComponent } from './components/site/digital-consultancy-services/digital-consultancy-services.component';
import { ReputationManagementServicesComponent } from './components/site/reputation-management-services/reputation-management-services.component';
import { ThankYouComponent } from './components/site/thank-you/thank-you.component';
import { PokerComponent } from './components/site/case-studies/poker/poker.component';


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
   
    SpecializedSeoServicesComponent,
   
    DentalSeoComponent,
   
    CaseStudiesComponent,
  
    DoorstepsComponent,
    PurpleBricksComponent,
    ThehopeandgloryComponent,
    IslandoutpostComponent,
    MandevilleComponent,
    WenzelsComponent,
    StellamccartneyComponent,
   
    SparComponent,
    HugoBossComponent,
    RightLeftSidebarComponent,
    MobileMarketingServicesComponent,
    DigitalConsultancyServicesComponent,
    ReputationManagementServicesComponent,
    ThankYouComponent,
    PokerComponent
   
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
