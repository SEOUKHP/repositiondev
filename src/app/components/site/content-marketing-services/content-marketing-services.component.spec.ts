import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentMarketingServicesComponent } from './content-marketing-services.component';

describe('ContentMarketingServicesComponent', () => {
  let component: ContentMarketingServicesComponent;
  let fixture: ComponentFixture<ContentMarketingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentMarketingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentMarketingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
