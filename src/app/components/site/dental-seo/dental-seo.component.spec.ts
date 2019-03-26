import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DentalSeoComponent } from './dental-seo.component';

describe('DentalSeoComponent', () => {
  let component: DentalSeoComponent;
  let fixture: ComponentFixture<DentalSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DentalSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DentalSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
