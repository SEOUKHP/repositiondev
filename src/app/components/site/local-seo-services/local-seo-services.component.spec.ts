import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalSeoServicesComponent } from './local-seo-services.component';

describe('LocalSeoServicesComponent', () => {
  let component: LocalSeoServicesComponent;
  let fixture: ComponentFixture<LocalSeoServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalSeoServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalSeoServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
