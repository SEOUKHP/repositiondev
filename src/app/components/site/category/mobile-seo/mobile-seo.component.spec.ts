import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSeoComponent } from './mobile-seo.component';

describe('MobileSeoComponent', () => {
  let component: MobileSeoComponent;
  let fixture: ComponentFixture<MobileSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
