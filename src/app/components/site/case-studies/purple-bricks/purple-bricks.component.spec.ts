import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurpleBricksComponent } from './purple-bricks.component';

describe('PurpleBricksComponent', () => {
  let component: PurpleBricksComponent;
  let fixture: ComponentFixture<PurpleBricksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurpleBricksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurpleBricksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
