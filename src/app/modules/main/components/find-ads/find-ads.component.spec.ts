import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAdsComponent } from './find-ads.component';

describe('FindAdComponent', () => {
  let component: FindAdsComponent;
  let fixture: ComponentFixture<FindAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAdsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
