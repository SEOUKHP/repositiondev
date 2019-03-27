import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternationalSeoComponent } from './international-seo.component';

describe('InternationalSeoComponent', () => {
  let component: InternationalSeoComponent;
  let fixture: ComponentFixture<InternationalSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternationalSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternationalSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
