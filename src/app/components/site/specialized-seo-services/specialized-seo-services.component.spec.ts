import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializedSeoServicesComponent } from './specialized-seo-services.component';

describe('SpecializedSeoServicesComponent', () => {
  let component: SpecializedSeoServicesComponent;
  let fixture: ComponentFixture<SpecializedSeoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializedSeoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializedSeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
