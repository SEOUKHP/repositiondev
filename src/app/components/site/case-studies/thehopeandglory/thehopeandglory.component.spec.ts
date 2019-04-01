import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThehopeandgloryComponent } from './thehopeandglory.component';

describe('ThehopeandgloryComponent', () => {
  let component: ThehopeandgloryComponent;
  let fixture: ComponentFixture<ThehopeandgloryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThehopeandgloryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThehopeandgloryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
