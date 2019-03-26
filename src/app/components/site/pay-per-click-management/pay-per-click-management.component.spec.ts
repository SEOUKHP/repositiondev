import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayPerClickManagementComponent } from './pay-per-click-management.component';

describe('PayPerClickManagementComponent', () => {
  let component: PayPerClickManagementComponent;
  let fixture: ComponentFixture<PayPerClickManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayPerClickManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayPerClickManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
