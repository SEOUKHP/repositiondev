import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparComponent } from './spar.component';

describe('SparComponent', () => {
  let component: SparComponent;
  let fixture: ComponentFixture<SparComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
