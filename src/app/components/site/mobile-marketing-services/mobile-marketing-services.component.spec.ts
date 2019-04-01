import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMarketingServicesComponent } from './mobile-marketing-services.component';

describe('MobileMarketingServicesComponent', () => {
  let component: MobileMarketingServicesComponent;
  let fixture: ComponentFixture<MobileMarketingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMarketingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMarketingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
