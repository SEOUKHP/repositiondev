import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBuildingServicesComponent } from './link-building-services.component';

describe('LinkBuildingServicesComponent', () => {
  let component: LinkBuildingServicesComponent;
  let fixture: ComponentFixture<LinkBuildingServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBuildingServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBuildingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
