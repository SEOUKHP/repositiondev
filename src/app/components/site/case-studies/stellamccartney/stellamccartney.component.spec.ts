import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StellamccartneyComponent } from './stellamccartney.component';

describe('StellamccartneyComponent', () => {
  let component: StellamccartneyComponent;
  let fixture: ComponentFixture<StellamccartneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StellamccartneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StellamccartneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
