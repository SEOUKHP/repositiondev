import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignServicesComponent } from './web-design-services.component';

describe('WebDesignServicesComponent', () => {
  let component: WebDesignServicesComponent;
  let fixture: ComponentFixture<WebDesignServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
