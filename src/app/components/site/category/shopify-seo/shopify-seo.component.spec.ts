import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopifySeoComponent } from './shopify-seo.component';

describe('ShopifySeoComponent', () => {
  let component: ShopifySeoComponent;
  let fixture: ComponentFixture<ShopifySeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopifySeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopifySeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
