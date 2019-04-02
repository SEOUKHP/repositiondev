import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquirebuttonComponent } from './enquirebutton.component';

describe('EnquirebuttonComponent', () => {
  let component: EnquirebuttonComponent;
  let fixture: ComponentFixture<EnquirebuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquirebuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquirebuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
