import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HugoBossComponent } from './hugo-boss.component';

describe('HugoBossComponent', () => {
  let component: HugoBossComponent;
  let fixture: ComponentFixture<HugoBossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HugoBossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HugoBossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
