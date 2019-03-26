import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeSeoServicesComponent } from './free-seo-services.component';

describe('FreeSeoServicesComponent', () => {
  let component: FreeSeoServicesComponent;
  let fixture: ComponentFixture<FreeSeoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeSeoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeSeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
