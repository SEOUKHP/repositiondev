import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdvertisingComponent } from './display-advertising.component';

describe('DisplayAdvertisingComponent', () => {
  let component: DisplayAdvertisingComponent;
  let fixture: ComponentFixture<DisplayAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
