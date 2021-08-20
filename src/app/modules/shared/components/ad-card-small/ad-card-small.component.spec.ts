import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCardSmallComponent } from './ad-card-small.component';

describe('AdCardSmallComponent', () => {
  let component: AdCardSmallComponent;
  let fixture: ComponentFixture<AdCardSmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCardSmallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
