import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoorstepsComponent } from './doorsteps.component';

describe('DoorstepsComponent', () => {
  let component: DoorstepsComponent;
  let fixture: ComponentFixture<DoorstepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorstepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoorstepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
