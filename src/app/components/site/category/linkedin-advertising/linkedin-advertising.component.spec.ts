import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinAdvertisingComponent } from './linkedin-advertising.component';

describe('LinkedinAdvertisingComponent', () => {
  let component: LinkedinAdvertisingComponent;
  let fixture: ComponentFixture<LinkedinAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedinAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedinAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
