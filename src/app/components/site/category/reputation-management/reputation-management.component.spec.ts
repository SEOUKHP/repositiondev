import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationManagementComponent } from './reputation-management.component';

describe('ReputationManagementComponent', () => {
  let component: ReputationManagementComponent;
  let fixture: ComponentFixture<ReputationManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputationManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
