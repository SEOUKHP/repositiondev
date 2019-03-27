import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedSeoTechniquesComponent } from './advanced-seo-techniques.component';

describe('AdvancedSeoTechniquesComponent', () => {
  let component: AdvancedSeoTechniquesComponent;
  let fixture: ComponentFixture<AdvancedSeoTechniquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedSeoTechniquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedSeoTechniquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
