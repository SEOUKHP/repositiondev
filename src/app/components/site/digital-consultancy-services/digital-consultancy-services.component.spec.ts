import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalConsultancyServicesComponent } from './digital-consultancy-services.component';

describe('DigitalConsultancyServicesComponent', () => {
  let component: DigitalConsultancyServicesComponent;
  let fixture: ComponentFixture<DigitalConsultancyServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalConsultancyServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalConsultancyServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
