import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaOptimizationComponent } from './social-media-optimization.component';

describe('SocialMediaOptimizationComponent', () => {
  let component: SocialMediaOptimizationComponent;
  let fixture: ComponentFixture<SocialMediaOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
