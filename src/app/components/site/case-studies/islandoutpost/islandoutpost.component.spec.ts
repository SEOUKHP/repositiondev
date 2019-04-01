import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IslandoutpostComponent } from './islandoutpost.component';

describe('IslandoutpostComponent', () => {
  let component: IslandoutpostComponent;
  let fixture: ComponentFixture<IslandoutpostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IslandoutpostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IslandoutpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
