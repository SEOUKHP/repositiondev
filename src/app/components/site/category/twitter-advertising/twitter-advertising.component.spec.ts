import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterAdvertisingComponent } from './twitter-advertising.component';

describe('TwitterAdvertisingComponent', () => {
  let component: TwitterAdvertisingComponent;
  let fixture: ComponentFixture<TwitterAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
