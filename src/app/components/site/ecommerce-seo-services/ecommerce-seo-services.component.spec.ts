import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommerceSeoServicesComponent } from './ecommerce-seo-services.component';

describe('EcommerceSeoServicesComponent', () => {
  let component: EcommerceSeoServicesComponent;
  let fixture: ComponentFixture<EcommerceSeoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommerceSeoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommerceSeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
