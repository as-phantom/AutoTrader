import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAdComponent } from './find-ad.component';

describe('FindAdComponent', () => {
  let component: FindAdComponent;
  let fixture: ComponentFixture<FindAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
