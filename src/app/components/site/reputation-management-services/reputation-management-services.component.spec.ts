import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationManagementServicesComponent } from './reputation-management-services.component';

describe('ReputationManagementServicesComponent', () => {
  let component: ReputationManagementServicesComponent;
  let fixture: ComponentFixture<ReputationManagementServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReputationManagementServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationManagementServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
