import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDevelopmentComponent } from './brand-development.component';

describe('BrandDevelopmentComponent', () => {
  let component: BrandDevelopmentComponent;
  let fixture: ComponentFixture<BrandDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
