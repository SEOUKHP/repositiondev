import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordpressDevelopmentComponent } from './wordpress-development.component';

describe('WordpressDevelopmentComponent', () => {
  let component: WordpressDevelopmentComponent;
  let fixture: ComponentFixture<WordpressDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WordpressDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordpressDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
