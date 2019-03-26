import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalSeoGoogleComponent } from './dental-seo-google.component';

describe('DentalSeoGoogleComponent', () => {
  let component: DentalSeoGoogleComponent;
  let fixture: ComponentFixture<DentalSeoGoogleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalSeoGoogleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalSeoGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
