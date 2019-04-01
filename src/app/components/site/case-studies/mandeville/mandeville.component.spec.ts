import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MandevilleComponent } from './mandeville.component';

describe('MandevilleComponent', () => {
  let component: MandevilleComponent;
  let fixture: ComponentFixture<MandevilleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MandevilleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MandevilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
