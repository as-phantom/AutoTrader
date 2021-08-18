import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCardBigComponent } from './ad-card-big.component';

describe('AdCardBigComponent', () => {
  let component: AdCardBigComponent;
  let fixture: ComponentFixture<AdCardBigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdCardBigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdCardBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
