import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSeoComponent } from './enterprise-seo.component';

describe('EnterpriseSeoComponent', () => {
  let component: EnterpriseSeoComponent;
  let fixture: ComponentFixture<EnterpriseSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterpriseSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
