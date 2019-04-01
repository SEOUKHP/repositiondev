import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLeftSidebarComponent } from './right-left-sidebar.component';

describe('RightLeftSidebarComponent', () => {
  let component: RightLeftSidebarComponent;
  let fixture: ComponentFixture<RightLeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightLeftSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightLeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
