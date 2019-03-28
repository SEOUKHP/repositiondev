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
import { CategoryComponent } from './components/site/category/category.component';
import { AdvancedSeoTechniquesComponent } from './components/site/category/advanced-seo-techniques/advanced-seo-techniques.component';
import { AllComponent } from './components/site/category/all/all.component';
import { AmazonSeoComponent } from './components/site/category/amazon-seo/amazon-seo.component';
import { BrandDevelopmentComponent } from './components/site/category/brand-development/brand-development.component';
import { BusinessAdviceComponent } from './components/site/category/business-advice/business-advice.component';
import { ContentMarketingComponent } from './components/site/category/content-marketing/content-marketing.component';
import { ConversionOptimizationComponent } from './components/site/category/conversion-optimization/conversion-optimization.component';
import { DisplayAdvertisingComponent } from './components/site/category/display-advertising/display-advertising.component';
import { EcommerceSeoComponent } from './components/site/category/ecommerce-seo/ecommerce-seo.component';
import { EnterpriseSeoComponent } from './components/site/category/enterprise-seo/enterprise-seo.component';
import { FacebookAdvertisingComponent } from './components/site/category/facebook-advertising/facebook-advertising.component';
import { InternationalSeoComponent } from './components/site/category/international-seo/international-seo.component';
import { LinkBuildingComponent } from './components/site/category/link-building/link-building.component';
import { LinkedinAdvertisingComponent } from './components/site/category/linkedin-advertising/linkedin-advertising.component';
import { LocalSeoComponent } from './components/site/category/local-seo/local-seo.component';
import { MobileAppDevelopmentComponent } from './components/site/category/mobile-app-development/mobile-app-development.component';
import { MobileSeoComponent } from './components/site/category/mobile-seo/mobile-seo.component';
import { OnlineMarketingComponent } from './components/site/category/online-marketing/online-marketing.component';
import { PpcComponent } from './components/site/category/ppc/ppc.component';
import { ReputationManagementComponent } from './components/site/category/reputation-management/reputation-management.component';
import { SeoComponent } from './components/site/category/seo/seo.component';
import { ShopifySeoComponent } from './components/site/category/shopify-seo/shopify-seo.component';
import { SocialMediaOptimizationComponent } from './components/site/category/social-media-optimization/social-media-optimization.component';
import { SpanishSeoComponent } from './components/site/category/spanish-seo/spanish-seo.component';
import { TwitterAdvertisingComponent } from './components/site/category/twitter-advertising/twitter-advertising.component';
import { UncategorizedComponent } from './components/site/category/uncategorized/uncategorized.component';
import { VideoSeoComponent } from './components/site/category/video-seo/video-seo.component';
import { WebDesignComponent } from './components/site/category/web-design/web-design.component';
import { WebDevelopmentComponent } from './components/site/category/web-development/web-development.component';
import { WordpressDevelopmentComponent } from './components/site/category/wordpress-development/wordpress-development.component';
import { CaseStudiesComponent } from './components/site/case-studies/case-studies.component';
import { CategorySectionComponent } from './components/site/category-section/category-section.component';

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
    DentalSeoComponent,
    CategoryComponent,
    AdvancedSeoTechniquesComponent,
    AllComponent,
    AmazonSeoComponent,
    BrandDevelopmentComponent,
    BusinessAdviceComponent,
    ContentMarketingComponent,
    ConversionOptimizationComponent,
    DisplayAdvertisingComponent,
    EcommerceSeoComponent,
    EnterpriseSeoComponent,
    FacebookAdvertisingComponent,
    InternationalSeoComponent,
    LinkBuildingComponent,
    LinkedinAdvertisingComponent,
    LocalSeoComponent,
    MobileAppDevelopmentComponent,
    MobileSeoComponent,
    OnlineMarketingComponent,
    PpcComponent,
    ReputationManagementComponent,
    SeoComponent,
    ShopifySeoComponent,
    SocialMediaOptimizationComponent,
    SpanishSeoComponent,
    TwitterAdvertisingComponent,
    UncategorizedComponent,
    VideoSeoComponent,
    WebDesignComponent,
    WebDevelopmentComponent,
    WordpressDevelopmentComponent,
    CaseStudiesComponent,
    CategorySectionComponent
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
