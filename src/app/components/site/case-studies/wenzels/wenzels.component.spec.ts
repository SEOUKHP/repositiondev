import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WenzelsComponent } from './wenzels.component';

describe('WenzelsComponent', () => {
  let component: WenzelsComponent;
  let fixture: ComponentFixture<WenzelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WenzelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WenzelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
