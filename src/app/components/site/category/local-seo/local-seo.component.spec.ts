import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSeoComponent } from './local-seo.component';

describe('LocalSeoComponent', () => {
  let component: LocalSeoComponent;
  let fixture: ComponentFixture<LocalSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
