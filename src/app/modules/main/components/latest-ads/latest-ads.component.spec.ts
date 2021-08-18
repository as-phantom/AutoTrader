import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestAdsComponent } from './latest-ads.component';

describe('LatestAdsComponent', () => {
  let component: LatestAdsComponent;
  let fixture: ComponentFixture<LatestAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
