import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonSeoComponent } from './amazon-seo.component';

describe('AmazonSeoComponent', () => {
  let component: AmazonSeoComponent;
  let fixture: ComponentFixture<AmazonSeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonSeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonSeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
