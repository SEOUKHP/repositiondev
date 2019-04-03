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
import { MobileMarketingServicesComponent } from './components/site/mobile-marketing-services/mobile-marketing-services.component';
import { DigitalConsultancyServicesComponent } from './components/site/digital-consultancy-services/digital-consultancy-services.component';

import { ReputationManagementServicesComponent } from './components/site/reputation-management-services/reputation-management-services.component';
import { ThankYouComponent } from './components/site/thank-you/thank-you.component';

import { HugoBossComponent } from './components/site/case-studies/hugo-boss/hugo-boss.component';
import { PokerComponent } from './components/site/case-studies/poker/poker.component';
import { PrivacyPolicyComponent } from './components/site/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/site/terms-conditions/terms-conditions.component';
import { DisclaimerComponent } from './components/site/disclaimer/disclaimer.component';

const routes: Routes = [

  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'disclaimer', component: DisclaimerComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent},
  { path: 'thank-you', component: ThankYouComponent},
  {path: 'reputation-management-services' ,component:ReputationManagementServicesComponent },
{path: 'mobile-marketing-services', component:MobileMarketingServicesComponent},
{path: 'digital-consultancy-services', component:DigitalConsultancyServicesComponent},
  
  { path: 'about', component: AboutComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'seo-services', component: SeoServicesComponent },
  { path: 'pay-per-click-management', component: PayPerClickManagementComponent },
  { path: 'web-design-services', component: WebDesignServicesComponent },
  { path: 'web-development-services', component: WebDevelopmentServicesComponent },
  { path: 'free-seo-analysis', component: FreeSeoServicesComponent },
  { path: 'dental-seo', component: DentalSeoComponent },
  { path: 'local-seo-services', component: LocalSeoServicesComponent },
  { path: 'ecommerce-seo-services', component: EcommerceSeoServicesComponent },
  { path: 'link-building-services', component: LinkBuildingServicesComponent },
  { path: 'content-marketing-services', component: ContentMarketingServicesComponent },
 
  { path: 'specialized-seo-services', component: SpecializedSeoServicesComponent },
  { path: 'case-study', component: CaseStudiesComponent},
  


  { path: 'home', redirectTo: "" },

  
  { path: 'case-study/doorsteps', component: DoorstepsComponent},
  { path: 'case-study/purple-bricks', component: PurpleBricksComponent},
  { path: 'case-study/hope-and-glory', component: ThehopeandgloryComponent},

  { path: 'case-study/islandoutpost', component: IslandoutpostComponent },
  { path: 'islandoutpost', component: IslandoutpostComponent },
  { path: 'mandeville', component: MandevilleComponent },
  { path: 'wenzels', component: WenzelsComponent },
  { path: 'case-study/mandeville', component: MandevilleComponent},
 
  { path: 'case-study/hugo-boss', component: HugoBossComponent },
  { path: 'case-study/wenzels', component: WenzelsComponent},
  { path: 'case-study/stellamccartney', component: StellamccartneyComponent},

 

  { path: 'case-study/spar', component: SparComponent },
  { path: 'case-study/poker', component: PokerComponent },  
  { path: '**', redirectTo: "" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
