import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishSeoComponent } from './spanish-seo.component';

describe('SpanishSeoComponent', () => {
  let component: SpanishSeoComponent;
  let fixture: ComponentFixture<SpanishSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpanishSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
