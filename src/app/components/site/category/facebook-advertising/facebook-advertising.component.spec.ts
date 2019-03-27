import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookAdvertisingComponent } from './facebook-advertising.component';

describe('FacebookAdvertisingComponent', () => {
  let component: FacebookAdvertisingComponent;
  let fixture: ComponentFixture<FacebookAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
