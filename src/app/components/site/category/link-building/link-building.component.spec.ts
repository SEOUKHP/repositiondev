import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkBuildingComponent } from './link-building.component';

describe('LinkBuildingComponent', () => {
  let component: LinkBuildingComponent;
  let fixture: ComponentFixture<LinkBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
